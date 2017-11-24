const burger = require("../models/burger.js");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const router = express.Router();



router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var obj = {
      burger_name: data
    };
    console.log(obj);
    res.render("index", obj);
  });
});

router.post("/index", function(req, res) {
  burger.insertOne([
    "burger_name", "devoured"
  ], [
    req.body.burger_name, req.body.devoured
  ], function(result) {
    // Send back the ID of the new burger
    res.json({ id: result.id });
  });
});

router.put("/index/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.updateOne({
    devoured: req.body.devoured
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});


// Export routes for server.js to use.
module.exports = router;
