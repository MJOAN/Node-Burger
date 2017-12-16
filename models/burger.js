const orm = require("../config/orm.js");

var burger = {
  
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  create: function(name, cb) {
    orm.create("burgers", 
        ["burger_name", "devoured"], 
          [name, false], cb);
/*    function(res) {
      console.log("hit here before callback");
      console.log(res);
      cb(res);
    };*/
  },
  update: function(objColVals, condition, cb) {
    orm.update("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  },
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
