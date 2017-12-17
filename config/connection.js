var mysql = require("mysql");

var connection  = mysql.createConnection({
  port: 3306, 
  host: "tk3mehkfmmrhjg0b.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  user: "cihs4mbhagv77ol5",
  password: "a8k127a17fvxs9ux",
  database: "ty6pdn06rp6kjsis" 
});

connection.connect(function(err, connection) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});


module.exports = connection;


// mysql://cihs4mbhagv77ol5:a8k127a17fvxs9ux@tk3mehkfmmrhjg0b.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/ty6pdn06rp6kjsis

/*Property  Value Action
Host  tk3mehkfmmrhjg0b.cbetxkdyhwsb.us-east-1.rds.amazonaws.com 
Username  cihs4mbhagv77ol5  
Password  a8k127a17fvxs9ux  
Port  3306
*/

/*
keeping code for pool setup: 
var mysql = require("mysql");
var pool  = mysql.createPool({
  connectionLimit : 10,
  host: "us-cdbr-iron-east-05.cleardb.net",
  user: "bdfca89e4c3658",
  password: "0fdec9a5",
  database: "burgers_db"
});

pool.getConnection(function(err, connection) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + pool.threadId);
});

module.exports = pool;
*/