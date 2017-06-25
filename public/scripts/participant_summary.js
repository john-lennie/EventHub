$(document).ready(() => {
  // When user clicks on register button, they're added to event.
  $("#register_btn").on("click",  () => {
    $("#edit_status_form").hide();
    $("#register_form").show();
  });

  // When user clicks on edit status button, they change their confirmation status to false.
  $("#edit_status_btn").on("click", () => {
    $("#register_form").hide();
    $("#edit_status_form").show();
  });

  // When user submits register form an ajax POST request is sent to the server, then reloads .
  $("#register_form").on("submit",( (event) => {
    event.preventDefault();
   if($("#register_form").children(".email_input").val().length > 1) {
    $.ajax({
        data: $("#register_form").serialize(),
        url: $("#register_form").attr('action'),
        type: $("#register_form").attr('method'),
        success: (res) => {
          window.location = res;
        }
      })
   }
  }));

  // When user edit status button, ajax POST request is sent to the server, and reloads.
 $("#edit_status_form").on("submit",( (event) => {
    event.preventDefault();

    if($("#edit_status_form").children(".email_input").val().length > 1){
      $.ajax({
        data: $("#edit_status_form").serialize(),
        url: $("#edit_status_form").attr('action'),
        type: $("#edit_status_form").attr('method'),
        success: (res) => {
          window.location = res;
        }
      })
    }
  }));


});
