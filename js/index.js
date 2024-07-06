// singer section
$(".singerTitle").on("click", (e) => {
  $(".singerInfo").not($(e.target).next()).slideUp(500);
  $(e.target).next().slideToggle(500);
});

// count down section
window.addEventListener("load", () => {
  countDown("2024-07-26 08:00:00");
});

function countDown(targetDate) {
  let eventDate = new Date(targetDate);
  let currentDate = new Date();

  eventDate = eventDate.getTime();
  currentDate = currentDate.getTime();
  if (eventDate - currentDate <= 0) {
    $("#countDownDisplay")
      .html(`<div class="d-flex justify-content-center align-items-center">
  <p class="display-2 fw-semibold text-black">Event had been finished</p>
</div>`);
  } else {
    let timeToGo = (eventDate - currentDate) / 1000;

    let days = Math.floor(timeToGo / (60 * 60 * 24));
    let hours = Math.floor((timeToGo % (60 * 60 * 24)) / (60 * 60));
    let minuets = Math.floor((timeToGo % (60 * 60)) / 60);
    let seconds = Math.floor(timeToGo % 60);

    $(".days").html(`${days}`);
    $(".hours").html(`${hours}`);
    $(".minuets").html(`${minuets}`);
    $(".seconds").html(`${seconds}`);

    setInterval(() => {
      countDown(targetDate);
    }, 1000);
  }
}

// contact section
var maxLength = 400;
$("#message").keyup(function (e) {
  if ($(this).val().length === maxLength) {
    e.preventDefault();
  } else if ($(this).val().length > maxLength) {
    $(this).val($(this).val().substring(0, maxLength));
  }

  $("#remainingChars").html(`${maxLength - $(this).val().length}`);
});
