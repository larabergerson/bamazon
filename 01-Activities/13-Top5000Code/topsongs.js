var inquirer = require("inquirer");
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  


//   * A query which returns all data for songs sung by a specific artist
//   * A query which returns all artists who appear within the top 5000 more than once
//   * A query which returns all data contained within a specific range
//   * A query which searches for a specific song in the top 5000 and returns the data for it

// * HINT: There are some MySQL queries which could make some of these tasks even easier to accomplish. Feel free to look at MySQL's documentation to find some of them.

    // Your password
    password: "B00tC@mp#1",
    database: "top_songsDB"
  });
connection.connect(function(err){
    if(err) throw(err);
    songsByArtist();
    // repeatArtists();
    // rangedQuery();
    // specificSong();
    connection.end();
});


function runSearch(){
    inquirer
    .prompt([
        {
            type: "list",
            message: "What would you like to do?",
            choices: ["Find Songs by Artist", "Find all artist who appear more than once", "Find data within a specific range", "Search for a Specific Song", "Exit"],
            name: "options",
        }
    ])
    .then(function(response){
        switch (response.options) {
        case "Find Songs by Artist":
        artistSearch();
        break;

        case "Find all artist who appear more than once":
        multiSearch();
        break;

        case "find data within a specific range":
        rangeSearch();
        break;

        case "Search for a specific song":
        songSearch();
        break;




            inquirer.prompt([
                {
                    type: "input",
                    name: "songsByArtist",
                    message: "What song would you like to look for?"
                }
            ])
            .then(function(response){
                songsByArtist(response.name)
            });
}


