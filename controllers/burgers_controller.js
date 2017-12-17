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

router.post("/burgers/create", function(req, res) {
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


router.put("/burgers/update", function(req, res) {
  // var condition = "id = " + req.params.id;
  // console.log("condition", condition);
  burger.update(req.body.devoured, function(result) {
      console.log(result);
      res.redirect("/");
    }
  });
});


module.exports = router;
