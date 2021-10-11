// 1. Dropdown menu

$(document).ready(function () {
    $(".bars").click(function() {
        $("nav").toggle(100);
    });
});





// 2. Owl Carousel

$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        autoplay: true,
        autoplayTimeout:5000,
        autoplaySpeed: 3000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1024:{
                items: 2
            },
            1200:{
                items:3
            }
        }
    });
});





