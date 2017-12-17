
const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");


const app = express();
const PORT = process.env.PORT || 3306;

app.use(express.static("public"));
// app.use(express.static(__dirname + "/public"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({type: 'application/*+json' }));
app.use(bodyParser.raw({type: 'application/vnd.custom-type' }));


app.use(methodOverride("_method"));
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);
app.use("/burgers/create", routes);
app.use("/burgers/update", routes);


app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});


