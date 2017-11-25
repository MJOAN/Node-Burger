
// CLEARDB mysql://bdfca89e4c3658:0fdec9a5@us-cdbr-iron-east-05.cleardb.net/heroku_1ec5e2f52cac00a?reconnect=true

var mysql = require("mysql");

var connection  = mysql.createConnection({
  host: "us-cdbr-iron-east-05.cleardb.net",
  user: "bdfca89e4c3658",
  password: "0fdec9a5",
  database: "heroku_1ec5e2f52cac00a"
});

connection.connect(function(err, connection) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});


module.exports = connection;


// CLEARDB mysql://bdfca89e4c3658:0fdec9a5@us-cdbr-iron-east-05.cleardb.net/heroku_1ec5e2f52cac00a?reconnect=true

/*var mysql = require("mysql");

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


module.exports = pool;*/