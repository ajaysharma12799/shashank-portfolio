// NavBar Transparent Function
$(window).scroll( () => {
    
    if($(document).scrollTop() > 200) {
        $("nav").addClass("nav-shrink");
    }
    else {
        $("nav").removeClass("nav-shrink");
    }

} );