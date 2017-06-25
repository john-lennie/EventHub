$(document).ready(() => {
  // When user clicks on register button, they fetch create-event form.
  $("#register_btn").on("click",  () => {
    $("#edit_status_form").hide();
    $("#register_form").show();
  });

  // When user clicks on create event button, they fetch create-event form.
  $("#edit_status_btn").on("click", () => {
    $("#register_form").hide();
    $("#edit_status_form").show();
  });

  // When user clicks on create event button, ajax POST request is sent to the server.
  $("#register_form").on("submit",( (event) => {
    event.preventDefault();
    console.log("register button")
      $.ajax({
        data: $("#register_form").serialize(),
        url: $("#register_form").attr('action'),
        type: $("#register_form").attr('method'),
        success: (res) => {
          window.location = res;
        }
      })
    }));

  // When user clicks on create event button, ajax POST request is sent to the server.
 $("#edit_status_form").on("submit",( (event) => {
    event.preventDefault();
      $.ajax({
        data: $("#edit_status_form").serialize(),
        url: $("#edit_status_form").attr('action'),
        type: $("#edit_status_form").attr('method'),
        success: (res) => {
          window.location = res;
        }
      })
    }));

});
