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
});
