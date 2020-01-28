$(function(){
  $('.bxslider').bxSlider({
    mode: 'fade',
    captions: true
  });
});


$(document).ready(function(){

    $("#service").owlCarousel({
        loop:true,
        margin:20,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });

    $("#courses").owlCarousel({
        loop:true,
        margin:20,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });

    $("#claints").owlCarousel({
            loop:true,
            margin:20,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:4
                },
                1000:{
                    items:6
                }
            }
        });

});


