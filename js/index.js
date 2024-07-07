// side menu
$('.header .menuOpen').on('click', () =>{
  $('.header .menuOpen').animate({left: $('aside').innerWidth()},1000);
  $('aside').animate({left: 0},1000)
  $('.header .menuOpen').fadeOut()
})

$('aside .closeBtn').on('click', () =>{
  $('aside').animate({left: -($('aside').innerWidth())},1000);
  $('.header .menuOpen').animate({left: 10},1000);
  $('.header .menuOpen').fadeIn()
})

// Scroll behavior
$('.navLink').on('click', (e) =>{
  let targetSec = $(e.target).attr('href');
  let targetSecOffset = $(targetSec).offset().top;
  $('html, body').animate({scrollTop: targetSecOffset}, 1500);
  $('.navLink').removeClass('active')
  $(e.target).addClass('active')
})

$(window).on('scroll', () =>{
  let windowOffset = $(window).scrollTop();
  if(windowOffset < $('#details').offset().top){
    $('.navLink').removeClass('active');
    $(".navLink[href|='#home']").addClass('active');
  }
  else if(windowOffset >= $('#details').offset().top && windowOffset < $('#duration').offset().top){
    $('.navLink').removeClass('active');
    $(".navLink[href|='#details']").addClass('active');
  }
  else if(windowOffset >= $('#duration').offset().top && windowOffset < (($('#contact').offset().top)-30)){
    $('.navLink').removeClass('active');
    $(".navLink[href|='#duration']").addClass('active');
  }
  else if(windowOffset >= (($('#contact').offset().top)-30)){
    $('.navLink').removeClass('active');
    $(".navLink[href|='#contact']").addClass('active');
  }
})

console.log($(".navLink[href|='#home']").html());
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