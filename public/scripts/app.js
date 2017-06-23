// // When user clicks on create event button, they fetch create-event form.
// $(document).ready(() =>{
//   $('#get_form_btn').on("click", (event) => {
//     //Set ajax get request on button click
//     $.ajax({
//       method: "GET",
//       url: "/eventshub/event",
//     })
//     .done()
//     .fail(console.error);
//     })
// });

// JSON API testing.
// $(() => {
//   $.ajax({
//     method: "GET",
//     url: "/api/users"
//   }).done((users) => {
//     for(user of users) {
//       $("<div>").text(user.first_name).appendTo($("body"));
//     }
//   });
// });
$(document).ready(() => {


/////////////////////CREATE EVENT DYNAMICALLY/////////////////////////////////
  $("#get-form-btn").on("click", function() {
    $(".home-main").hide();
    $(".home-form").show();
  });


  $("#create_event_btn").on("click", function() {
      $.ajax({
        type: 'POST',
        url: 'http://localhost:8080/eventshub/event/',
        success: function (res) {
          console.log(res);
          console.log("IM SENDING IT");
        }
    });
  });
});
