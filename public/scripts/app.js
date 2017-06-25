$(document).ready(() => {
  $('#date_calendar').pickadate({
     formatSubmit: 'yyyy-mm-dd'
  });
  $('#date_time').pickatime();
  //intialize api date and time pickers
  // When user clicks on create event button, they fetch create-event form.
  $("#get-form-btn").on("click", function() {
    $(".home-main").hide();
    $(".home-form").show();
  });

  // When user clicks on create event button, ajax POST request is sent to the server.
  let form = $("#event_create_form");
  form.on("submit",( (event) => {
    event.preventDefault();
    console.log(form.serialize());
      $.ajax({
        data: form.serialize(),
        url: form.attr('action'),
        type: form.attr('method'),
        success: (res) => {
          window.location = res;
        }
      });
    }));

});
