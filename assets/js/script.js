$(function() {
    if ($(window).width() <= 1024) {
        $('.hover-nav > a').click(function() {
            $(this).toggleClass('expand');
        });
        $('.menu-opener').click(function() {
            $(this).parents('#header').toggleClass('show');
        });
    }
});
let slideIndex = 0;
showSlides();
function nextSlide() {
    slideIndex++;
    showSlides();
    timer = _timer;
}
function prevSlide() {
    slideIndex--;
    showSlides();
    timer = _timer;
}
function currentSlide(n) {
    slideIndex = n - 1;
    showSlides();
    timer = _timer;
}
function showSlides() {
    let slides = document.querySelectorAll(".slide");
    if (slideIndex > slides.length - 1) slideIndex = 0;
    if (slideIndex < 0) slideIndex = slides.length - 1;
    slides.forEach((slide) => {
        slide.style.display = "none";
        slide.classList.remove('active');
    });
    slides[slideIndex].style.display = "block";
    slides[slideIndex].classList.add('active');
}
let timer = 7;
const _timer = timer;
setInterval(() => {
    timer--;
    if (timer < 1) {
        nextSlide();
        timer = _timer;
    }
}, 1000);

const header = document.getElementById('header');
let lastScrollTop = 0;
document.addEventListener('scroll', function(e) {
    var st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop) {
        console.log('scrolling-down');
        header.classList.add('collapse');
    } else {
        console.log('scrolling-up');
        header.classList.remove('collapse');
    }
    lastScrollTop = st <= 0 ? 0 : st;
});