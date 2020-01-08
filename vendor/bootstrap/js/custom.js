$(window).ready(function(){
  setInterval(function(){ 
    $('.wheel').addClass("animate-wheel")
  }, 2000);

});

$( document ).ready(function() {
setTimeout(function() {
        $('.preloader').fadeOut();
        $("body").removeClass("preload");
    }, 7000);


$('.pronites').owlCarousel({
    loop:true,
    smartSpeed:650,
    margin:0,
    autoplay:false,
    autoplayTimeout:2000,
    nav: true,
    navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:6
        }
    }
})

$('.vogueslide').owlCarousel({
    loop:false,
    smartSpeed:850,
    margin:0,
    mouseDrag:true,
    touchDrag:true,
    autoplay:false,
    stagePadding: 70,
    autoplayTimeout:2000,
    nav: true,
    navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:4
        }
    }
})

$(" .vogueslide .owl-next").click(function(){
    $(".vogueslide .prev-slide").removeClass("hide");
  $(".vogueslide .prev-slide").addClass("movenav");
  $(".vogueslide .next-slide").addClass("hide");
  $(".vogueslide .next-slide").removeClass("movenavs");
});

$(".vogueslide .owl-prev").click(function(){
  $(".vogueslide .prev-slide").addClass("hide");
  $(".vogueslide .prev-slide").removeClass("movenav");
  $(".vogueslide .next-slide").removeClass("hide");
  $(".vogueslide .next-slide").addClass("movenavs");
});



$('#menu-button').click(function(e){
    e.stopPropagation();
     $('#hide-menu').toggleClass('show-menu');
});
$('#hide-menu').click(function(e){
    e.stopPropagation();
});
$('body,html').click(function(e){
       $('#hide-menu').removeClass('show-menu');
});

$('#menuhide').click(function(e){
       $('#hide-menu').removeClass('show-menu');
});

        $(window).on("scroll", function() {
            var scrollHeight = $(document).height();
            var scrollPosition = $(window).height() + $(window).scrollTop();
            if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
                // when scroll to bottom of the page
            }
            //  console.log(" Hi scrollPosition  "+scrollPosition );
             if( scrollPosition>1854 ){

                   $( ".al_wing" ).removeClass( "displaynone" );                
                   $( ".al_wing" ).addClass( "zoomInUp" );
             }

             if( scrollPosition<1854 ){
                    $( ".al_wing" ).removeClass( "zoomInUp");               
                   $( ".al_wing" ).addClass( "displaynone" );
             }

             if( scrollPosition>1953 ){
                    $( ".al_wing" ).removeClass( "zoomInUp");               
                   $( ".al_wing" ).addClass( "zoomInUp" );
             }
});

});



