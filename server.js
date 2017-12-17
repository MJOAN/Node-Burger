
const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");

const PORT = process.env.PORT || 3306;

const app = express();

app.use(express.static(__dirname + "/public"));
//app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(methodOverride("_method"));
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);
app.use("/update", routes);
app.use("/create", routes);


app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});


