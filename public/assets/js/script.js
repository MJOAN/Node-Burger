/*// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {

$("form").on("submit", function(event) {
    event.preventDefault();
    console.log('select_link clicked');

    var id = $(this).data("id");
    var burger_name = $("#burger").val().trim();

    $(".not-devoured").show();
    console.log("created div not devoured to show");
    // var devoured = false;
    var burger_name = $("#burger").val().trim();

    $(".not-devoured").show();

    var newburger = {
        burger_name: burger_name,
        devour: false
    };
    console.log(newburger);
    
    $.ajax("/create", {
        type: "POST",
        data: JSON.stringify(newburger),
        contentType: 'application/json',
        success: function(data) {
            console.log("created new burger");
            $("#burger").val(" ");
        // location.reload();
      }
  });
});


$(".btn-default").on("click", function(event) {

    $(".devoured").show();
    $(".not-devoured").hide();
    $(".btn-default").hide();

    var id = $(this).data("id");
    var devoured = true;

<<<<<<< HEAD
    $.ajax("/update", {
=======
    $.ajax("/burgers/update", {
>>>>>>> 7f66a91d6405e28a3726ff08d73050274c873cf7
       type: "PUT",
        data: JSON.stringify(devoured),
        contentType: 'application/json',
        success: function(data) {
            console.log("devoured burger");
        // location.reload();
            }
        });
    });

});
<<<<<<< HEAD

*/