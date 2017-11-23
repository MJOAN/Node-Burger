const orm = require("./config/orm")

// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $("devour").on("click", function(event) {
    var id = $(this).data("id");
    var devoured = $(this).data("devour");

    var newDevour = {
      devour: devoured
    };

    // Send the PUT request.
    $.ajax("/api/burger/" + id, {
      type: "PUT",
      data: newDevour
    }).then(
      function() {
        console.log("changed eating to: ", newDevour);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $("submit").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      name: $("#name").val().trim(),
      devoured: $("[name=sleepy]"); // boolean
    };

    // Send the POST request.
    $.ajax("/api/burger", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new cat");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});


// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Character" model that matches up with DB
var Character = sequelize.define("character", {
  // the routeName gets saved as a string
  routeName: Sequelize.STRING,
  // the name of the character (a string)
  name: Sequelize.STRING,
  // the character's role (a string)
  role: Sequelize.STRING,
  // the character's age (a string)
  age: Sequelize.INTEGER,
  // and the character's force points (an int)
  forcePoints: Sequelize.INTEGER
}, {
  timestamps: false
});

// Syncs with DB
Character.sync();

// Makes the Character Model available for other files (will also create a table)
module.exports = Character;
