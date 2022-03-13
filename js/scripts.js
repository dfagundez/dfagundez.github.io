// Script to hide the rocket when the user is in the Home section
const rocket = document.getElementById("rocket");
const fire = document.getElementById("fire");

rocket.style.visibility = "hidden";
fire.style.visibility = "hidden";

var hideRocketWhenUserIsHome = function() {
    var scrollValue = window.scrollY;
    if (scrollValue < 800) {
        rocket.style.visibility = "hidden";
        fire.style.visibility = "hidden";
    } else {
        rocket.style.visibility = "visible";
        fire.style.visibility = "visible";
    }
};

window.addEventListener("scroll", hideRocketWhenUserIsHome);

// Script to animate the rocket when the user wants to go up
rocket.addEventListener("click", takeOff, true);

function takeOff(){
    document.getElementById("rocket").style.animation = "rocket 2s";
    document.getElementById("fire").style.animation = "fire 2s, flame .1s infinite";
    document.getElementById("fire").style.display = "block";

setTimeout(function refresh(){
        document.getElementById("rocket").style.animation = "paused";
        document.getElementById("fire").style.animation = "fire 2s paused, flame .1s paused";
        document.getElementById("fire").style.display = "none";
    }, 3000)
}

// Scripts to add scroll animation using smooth-scroll.min.js library
var scroll = new SmoothScroll('a[href*="#home"]', {
    speed: 800,
    speedAsDuration: true
});
var scroll = new SmoothScroll('a[href*="#about"]', {
    speed: 800,
    speedAsDuration: true
});
var scroll = new SmoothScroll('a[href*="#services"]', {
    speed: 800,
    speedAsDuration: true
});
var scroll = new SmoothScroll('a[href*="#experience"]', {
    speed: 800,
    speedAsDuration: true
});
var scroll = new SmoothScroll('a[href*="#contact"]', {
    speed: 800,
    speedAsDuration: true
});
