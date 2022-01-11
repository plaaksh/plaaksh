var originalTitle = document.title;
window.addEventListener('blur', function() {
    document.title = '🌎 Travel With Pride';
});
window.addEventListener('focus', function() {
    document.title = originalTitle;
});

const header = document.getElementById('header');
const cookie = document.getElementById('cookie');

const cookieDetailBtn = cookie.getElementsByClassName('detail')[0];
cookieDetailBtn.addEventListener('click', cookieDetail);

const cookieCloseBtn = cookie.getElementsByClassName('close')[0];
cookieCloseBtn.addEventListener('click', cookieClose);

const cookieAcceptBtn = cookie.getElementsByClassName('accept')[0];
cookieAcceptBtn.addEventListener('click', cookieAccept);

let lastScrollTop = 0;
document.addEventListener('scroll', function(e) {
    var st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop) {
        console.log('scrolling-down');
        if (st > header.offsetHeight) {
            header.classList.remove('active');
        }
    } else {
        console.log('scrolling-up');
        header.classList.add('active');
    }
    lastScrollTop = st <= 0 ? 0 : st;
});

function cookieDetail() {
    cookie.classList.add('expand');
}

function cookieClose() {
    cookie.classList.add('close');
}

function cookieAccept() {
    cookie.classList.add('close').add('accept');
}
