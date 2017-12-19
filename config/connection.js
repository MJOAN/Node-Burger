var mysql = require("mysql");

var connection  = mysql.createConnection({
  port: 3306, 
  host: "localhost", // || "tk3mehkfmmrhjg0b.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  user: "root", //  || "cihs4mbhagv77ol5",
  password: "", //  || "a8k127a17fvxs9ux",
  database: "burgers_db"  // ||"ty6pdn06rp6kjsis" 
});

connection.connect(function(err, connection) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});



module.exports = connection;