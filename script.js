
$(document).ready(function(){
    $(window).scroll(function(){

    });     
})

// Home Section Start
var typed = new Typed (".typing", {
    // .typing is class which is belong to html file
    strings: ["Web Developer", "Designer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop:true
});
// Home Section End

// About Section Start
var typed = new Typed (".typing-2", {
    // .typing is class which is belong to html file
    strings: ["Web Developer", "Designer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop:true
});
// About Section End

// My Team Section Start

// Add Slider Option
$('.carousel').owlCarousel({
    margin:20,
    loop:true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
        0:{
            items: 1,
            nav: false
        },
        600:{
            items:2,
            nav: false
        },
        1000:{
            items: 3,
            nav: false
        }
    }
});
// Add Slider Option

// My Team Section End




