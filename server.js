
var express = require("express");
var bodyParser = require("body-parser");
var methods = require("method-override");

var app = express();
var PORT = process.env.PORT || 3306;

app.use(express.static("public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.static("public"));

var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);


app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});


