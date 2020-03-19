// NavBar Transparent Function
$(window).scroll(() => {

    if ($(document).scrollTop() > 200) {
        $("nav").addClass("nav-shrink");
    } else {
        $("nav").removeClass("nav-shrink");
    }

});

// Typing Effect on Index Background Image
let options = {
    strings: ["Shashank Keshari", "Designer", "Video Editor", "Cinematographer"],
    typeSpeed: 200,
    backspeed: 200,
    loop: true
};

let typedEffect = new Typed(".typing", options);

// Smooth Scroll Animation
function smoothScroll(target, duration) {
    var target = document.querySelector(target); // Getting target
    let targetPosition = target.getBoundingClientRect().top; // Getting target position
    let startPosition = window.pageYOffset; // Getting start position from y-axis
    let distance = targetPosition - startPosition;
    var startTime = null;

    function animation(currentTime) {
        if (startTime === null) {
            startTime = currentTime;
            let timeElapsed = currentTime - startTime;
            let run = ease(timeElapsed, startPosition, distance, duration);
            window.scroll(0, run);
            if(timeElapsed < duration) {
                requestAnimationFrame(animation);
            }
        }
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if(t < 1) return c / 2 *t *t +b;
        t--;
        return -c / 2 *(t * (t - 2) - 1) + b;
    }
    requestAnimationFrame(animation);
}

let about_me = document.querySelector(".about").addEventListener("click", () => {
    smoothScroll("about-me", 2000);
});