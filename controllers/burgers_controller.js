const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const burger = require("../models/burger.js");



// get route -> index
router.get("/", function(req, res) {
  res.redirect("/burgers");
});


router.get("/burgers", function(req, res) {
  burger.all(function(data) {
    var obj = {
      burger_name: data
    };
    console.log(obj);
    res.render("index", obj);
  });
});

router.post("/create", function(req, res) {
  console.log("express post working");
  burger.create(req.body.burger_name, function(result) {
      // var result = JSON.stringify(result)
      console.log(result);
      // res.render("index", { burger_name: result.burger_name });
      console.log("Burger name posted: ", result)
      // res.json({ burger_name: obj });
      res.redirect("/");
      // res.render("index", { burger_name: result.burger_name, id: result.insertId });
  });
});
router.put("/update", function(req, res) {
  var condition = "id = " + req.params.id;
  console.log("condition", condition);

  burger.update({
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
