var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "B00tC@mp#1",
  database: "playlist_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  findGenre();
  queryAllSongs();
  queryHeavyMetalSongs();
//   afterConnection();
  connection.end();
});

function findGenre(){
    connection.query("SELECT * FROM songs WHERE genre=?",
    [userInput], function(err, res) {
        if (err) throw err;
        console.log(res)
    })
    console.log("-----------------------------------");
}
var userInput = process.argv[2];

// function afterConnection() {
//   connection.query("SELECT * FROM songs", function(err, res) {
//     if (err) throw err;
//     console.log(res);
//   });
// }

function queryAllSongs() {
  connection.query("SELECT * FROM songs", function(err, res) {
    if (err) throw err;
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].id + " | " + res[i].title + " | " + res[i].artist + " | " + res[i].genre);
    }
    console.log("-----------------------------------");
  });
}

function queryHeavyMetalSongs() {
  var query = connection.query("SELECT * FROM songs WHERE genre=?", ["Heavy Metal"], function(err, res) {
    if (err) throw err;
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].id + " | " + res[i].title + " | " + res[i].artist + " | " + res[i].genre);
    }
  });

  // logs the actual query being run
  console.log(query.sql);
}