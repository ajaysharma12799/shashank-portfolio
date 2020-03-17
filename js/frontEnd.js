// NavBar Transparent Function
$(window).scroll( () => {
    
    if($(document).scrollTop() > 200) {
        $("nav").addClass("nav-shrink");
    }
    else {
        $("nav").removeClass("nav-shrink");
    }

} );

// Typing Effect on Index Background Image
let options = {
    strings: ["Shashank Keshari", "Designer", "Video Editor", "Cinematographer"],
    typeSpeed: 150,
    backspeed:200,
    loop: true,
    smartBackspace: true
};

let typedEffect = new Typed(".typing", options)