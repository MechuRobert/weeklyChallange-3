window.onscroll = function () {
    myFunction();
    bar();
};

let navbar = document.querySelector(".navigation");
let parallax = document.querySelector(".parallax");
let myBarProgress = document.querySelector(".progress-container");
let sticky = navbar.offsetTop;
let stickyParallax = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
        navbar.classList.add("sticky");
        parallax.classList.add("stickyParallax");
        myBarProgress.classList.add("stickyBar");
    } else {
        navbar.classList.remove("sticky");
        parallax.classList.remove("stickyParallax");
        myBarProgress.classList.remove("stickyBar");

    }
}

function bar() {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    myBarProgress.style.width = scrolled + "%";
}

const hamburger = document.querySelector(".hamburger");
const nav_bar = document.querySelector(".nav-bar");
hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("on");
    nav_bar.classList.toggle("on");
})

AOS.init({
    duration: 1200,
});