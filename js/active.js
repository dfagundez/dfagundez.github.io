$(function () {
  var countDownDate = new Date("Mar 31, 2021 10:00:00");
  $("#countdown").countdown({
    timestamp: countDownDate,
    callback: function (days, hours, minutes, seconds) {
      var message = "";
      message += days + " day" + (days == 1 ? "" : "s") + ", ";
      message += hours + " hour" + (hours == 1 ? "" : "s") + ", ";
      message += minutes + " minute" + (minutes == 1 ? "" : "s") + " and ";
      message += seconds + " second" + (seconds == 1 ? "" : "s") + " <br />";
    },
  });
});

var email = document.querySelector("#email");
var btn = document.querySelector("#btn");

function save_email() {
  var get_email = email.value;
  email.value = "";
  if (get_email != "") {
    swal("Good job!", "You will not miss anything :D", "success");
  } else {
    swal("Ups!", "Forgot to enter your email :)", "warning");
  }
}
