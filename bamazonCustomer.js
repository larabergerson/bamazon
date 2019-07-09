var table = require('cli-table');
var mysql = require('mysql');
var inquirer = require('inquirer');

// connect to SQL DB

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    user: "root",
  
    password: "B00tc@mp#1",
    database: "bamazonDB"
  });

  connection.connect(function(err){
      if(err) throw(err);
      startPrompt()
  })

  function startPrompt(){
      inquirer.prompt({
          type: "confirm",
          name: "intro",
          message: "Welcome to Bamazon! Would you like to view our available inventory?",
          default: true
        })
        .then(function(answer){
            if(answer.intro == true){
                inventoryList();
            } else{
            console.log ("Please comeback when you're ready to view the inventory. Thank you!");
            }
        });
  }

  function inventoryList(){
    
    // var table = {
    //   head: ["Item ID", "Product Name", "Department", "Price", "Stock Quantity Available"],
    //   colWidths: [10, 30, 30, 20, 40]
      
    // };
    
    // function inventoryList();
    
    connection.query("SELECT * FROM products", function(err, response) {
      // console.log(response)
      
      // console.log("name depart")

      for (var i = 0; i < response.length; i++) {

          var itemId = response[i].item_id;
          var productName = response[i].product_name;
          var departmentName = response[i].department_name;
          var price = response[i].price;
          var stockQuantity = response[i].stock_quantity;

          console.log("Id: " + itemId + " | Product name: " + productName + " | Department: " +  departmentName + " |  Price: " + "$" + price + " | Stock Qty: " + stockQuantity)

      //   table.push(itemId);
      // console.log(table)
      // response.send(table)
    }
      // return table;
    userInput();
  });

  }

  function userInput(){
    inquirer.prompt([
      {
      type: "input",
      name: "items",
      message: "Please select an item by ID for purchase.",
      filter: Number
    },
    {
      type: "input",
      name: "quantity",
      message: "How many units would you like to purchase?",
      filter: Number

    }
  ])
  .then(function(response){
    var itemId = response.items;
    var quantAmt = response.quantity;
    userPurchase (itemId, quantAmt)
  });
}

function userPurchase(items, amtRequested){
    connection.query("SELECT * FROM products WHERE item_id = " + items, function(err, response){
      if(err) throw err;
      if(amtRequested <= response[0].stock_quantity){
        var cost = response[0].price * amtRequested;
        console.log("Great, let's get you your items!")
        
        console.log("Your total cost is: " + "$" + cost )

        // connection.query("UPDATE products SET stock_quantity WHERE stock_quantity - " + amtRequested)
      }
      else {
        console.log("Insufficient stock available. Please try again.");
      };
      inventoryList();
    });
  }
  









