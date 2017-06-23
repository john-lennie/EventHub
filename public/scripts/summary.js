$(document).ready(() => {

  $(".event-navigation .attending").on("click", function() {
    $(".event-info").hide();
    $(".event-participants").show();
    $(".event-navigation .attending").addClass("active");
    $(".event-navigation .info").removeClass("active");
  });

  $(".event-navigation .info").on("click", function() {
    $(".event-participants").hide();
    $(".event-info").show();
    $(".event-navigation .info").addClass("active");
    $(".event-navigation .attending").removeClass("active");
  });

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
