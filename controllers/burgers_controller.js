const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const burger = require("../models/burger.js");


router.get("/", function(req, res) {
  res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {
  burger.all(function(burgerdata) {
    console.log(burgerdata);
    res.render("index", { burger_data: burgerdata });
  });
});

router.post("/create", function(req, res) {
  console.log("express post working");
  burger.create(req.body.burger_name, function(result) {
      // var result = JSON.stringify(result)
      console.log(result);
      // res.render("index", { burger_name: result.burger_name });
      console.log("Burger name posted: ", result)
      res.redirect("/");
      // res.render("index", { burger_name: result.burger_name, id: result.insertId });
  });
});

router.put("/update", function(req, res) {
  console.log(req.body);
 var condition = "id = " + req.body.burger_id;
  console.log("condition", condition);
  burger.update({
    devoured: true
  }, condition, function(result) {
    res.redirect("/");
  });
});

module.exports = router;
