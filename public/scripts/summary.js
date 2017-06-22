$(document).ready(() => {


$("#getInfo").on("click", function() {
  console.log(window.location.pathname);
  $.ajax({
      type: 'POST',
      url: window.location.pathname,
      success: function(res) {
        console.log(res);
        $("#name").text(res[0].event_name);
        $("#title").text(res[0].event_date);
        $("#h_name").text(res[0].first_name + " " + res[0].last_name);
        $("#desc").text(res[0].desc);
        $("#url").text(res[0].url);
      }
    });
  });
});
