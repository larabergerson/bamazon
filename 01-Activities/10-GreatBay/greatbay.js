var inquirer = require("inquirer");
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "B00tC@mp#1",
    database: "greatBay_DB"
  });
connection.connect(function(err){
    if(err) throw(err);
    Start()
})

function start(){
    inquirer.prompt({
        name: "postOrBig",
        type: "list",
        message: "would you like to [POST] an acution or [BID] an auction?",
        choices: ["POST","BID", "EXIT"]

    })
    .then(function(answer){
        console.log(answer.postOrBid);
        if(answer.postOrBid == "POST"){
            postAuction();
        } else if (answer.postOrBid == "BID"){
            postBid();
        } else {
            connection.end ();
        }
    });
}

function postAuction(){
    console.log("RUN POST!");
    inquirer.prompt([
        
    ])
}

function postBid(){
    console.log("BID");
}
// inquirer
//     .prompt([
//     {
//         type: "list",
//         message: "What would you like to do?",
//         choices: ["POST AN ITEM", "BID ON AN ITEM", "EXIT"],
//         name: "options",
//     }
// ])
// .then(function(inquirerResponse){
//     if(inquirerResponse.options == "POST AN ITEM"){
//         console.log("\nPost your bid")
//         createProduct();
//     }
//     else if (inquirerResponse.options == "BID ON AN ITEM"){
//     console.log("\nBid on item")
//     readProducts();
//     } else console.log("\nlater")
// })

// function readProducts() {
//     console.log("Selecting all products...\n");
//     connection.query("SELECT * FROM products", function(err, res) {
//       if (err) throw err;
//       // Log all results of the SELECT statement
//       console.log(res);
//       connection.end();
//     });
//   }

//   function createProduct() {
//     console.log("A few questions...\n");
//     inquirer.prompt([
//         {
//             type: "input",
//             name: "itemName",
//             message: "What is your item?"
//         },
//         {
//             type: "input",
//             name: "itemPrice",
//             message: "What is your starting bid?"
//         }

//     ]).then(function(answers){
//     var query = connection.query(
//         "INSERT INTO products SET ?",
//         {
//             item: answers.itemName,
//             initialBid: answers.itemPrice
           
//         },
//         function (err, res) {
//             if (err) throw err;
//             console.log(res.affectedRows + " is posted on GreatBay!\n");
//             // Call updateSong AFTER the INSERT completes
        
//         }
//     );

//     // logs the actual query being run
//     console.log(query.sql)
//     })
// }