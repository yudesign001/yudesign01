
const btn = document.getElementById("btn");
const menu = document.getElementById("menu");
const links = document.querySelectorAll("#menu a");

btn.addEventListener("click", () => {
  btn.classList.toggle("active");
  menu.classList.toggle("active");
  body.classList.toggle("active");
});
links.forEach((link) => {
    link.addEventListener("click", () => {
      btn.classList.toggle("active");
      menu.classList.toggle("active");
      body.classList.toggle("active");
    });
  });

const options1 = {
    mediaQuery: "min",
    heightRatio: 0,
    type: "loop",
    arrows: false,
    drag: false, 
    flickPower: 100,
    pagination: false,
  
    autoScroll: {
      speed: 0.5, 
      pauseOnHover: false,
      pauseOnFocus: false,
    },
    breakpoints: {
       480: {
        gap:32,
        fixedWidth: "48rem",
       },
        200: {
          gap:24,
          fixedWidth: "24rem",
        },

    },
  };

const splide1 = new Splide(".slider1", options1);
splide1.mount(window.splide.Extensions);



$('.btn-left').click(function () {
  $('.scroll-box').animate({
    scrollLeft: $('.scroll-box').scrollLeft() - 70 //〇〇px左にスクロールする
  }, 300); //スクロールにかかる時間
});
$('.btn-right').click(function () {
  $('.scroll-box').animate({
    scrollLeft: $('.scroll-box').scrollLeft() + 70 //〇〇px右にスクロールする
}, 300); //スクロールにかかる時間
});


$(function(){
    $(window).scroll(function (){
        $('.fadein').each(function(){
            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > position - windowHeight + 100){
              $(this).addClass('active');
            }
        });
    });
});





