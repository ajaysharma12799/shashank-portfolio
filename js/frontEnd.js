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

// Smooth Scroll
$('a[href*="#"]') // Select all links with hashes

    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function () {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });