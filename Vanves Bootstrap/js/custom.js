/*global $ ,jQuery ,alert, console, google */

$(document).ready(function () {
  
    "use strict";
    
    // Side Navbar Mobile
    
    $(".button-collapse").sideNav();
    
    // Show Search Box
    
    $(".search").on("click", function () {
        
        $(".boxsearch").toggleClass("visible");
        
    });
    
    // Slide Full Width
    
    $('.slider').slider();
    $('.slider').slider('next');
    $('.slider').slider('prev');
    
    /* Add Class Active */
    
    $("nav ul li").on("click", function () {
        
        $(this).addClass("active").siblings().removeClass("active");
        
    });
    
    // Dynamic Tabs
    
    $('nav .navi li,nav .side-nav li').on("click", function () {
        
        var myID    = $(this).attr("id"),
            title   = $(".title").css("left", "-6%");
        
        $(".my-container section").hide();
        
        $("#" + myID + "-cont").removeClass("hide");
        
        $("#" + myID + "-cont").fadeIn(500);
        
        if (title === true) {
        
            $(".title").css("left", "-1%");
            
        } else {
            $(".title").css("left", "-6%");
        }
        
        $(".title").css("left", "-1%");
        
    });
    
    // Smooth Scroll
    
    $(".about .next span").on("click", function () {
        
        $("html, body").animate({ scrollTop: $(document).height() }, 2000);
        return false;
        
    });
    
    $(".about .prev span").on("click", function () {
        
        $("html, body").animate({ scrollTop: 0 }, 1000);
        return false;
        
    });
    
    // Our Services Section
    
    $(".serv .ourserv>i").hover(function () {
        
        $(".serv .ourserv>div").addClass("hide");
        $(".serv .ourserv>i").removeClass("hide");
        $(this).addClass("hide").next().removeClass("hide");
                             
    });
    
    // Google Map
    
    function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 4,
            center: {lat: -33, lng: 151},
            zoomControl: false,
            scaleControl: false,
            mapTypeControl: false
        });
    }
    
    // Remove The Scroll To Zoom Google Maps
    
    $('#map').addClass('scrolloff');                // set the mouse events to none when doc is ready
        
    $('#overlay').on("mouseup", function () {          // lock it when mouse up
        
        $('#map').addClass('scrolloff');
        
        //somehow the mouseup event doesn't get call...
        
    });
    
    $('#overlay').on("mousedown", function () {        // when mouse down, set the mouse events free
        
        $('#map').removeClass('scrolloff');
        
    });
    
    $("#map").mouseleave(function () {              // becuase the mouse up doesn't work... 
        
        $('#map').addClass('scrolloff');            // set the pointer events to none when mouse leaves the map area
        
                                                    // or you can do it on some other event
    });
    
    // Box Colors
    
    $(".box-vis").on("click", function () {
        
        $(".box").toggleClass("less");
        
    });
    
    // Change Template Colors
    
    var colors  = $('.box .colors a, .box-mobile .colors a'),
        ld      = $('.box .ld a, .box-mobile .ld a');
    
    colors.eq(0).css("backgroundColor", "#966a39").end() /* Here You Can Change The color */
            .eq(1).css("backgroundColor", "#5c9639").end() /* Here You Can Change The color */
            .eq(2).css("backgroundColor", "#396e96").end() /* Here You Can Change The color */
            .eq(3).css("backgroundColor", "#96398c"); /* Here You Can Change The color */
        
    
    colors.on('click', function () {
        
        $("link[href*='template']").attr("href", $(this).attr("data-value"));
        
    });
    
    ld.eq(0).css("backgroundColor", "#f8F8F8").end()
            .eq(1).css("backgroundColor", "#1e1e1e");
        
    
    ld.on('click', function () {
        
        $("link[href*='layout']").attr("href", $(this).attr("data-value"));
        $('nav .dark-logo').toggleClass('hide');
        
    });
    
    // For Demo
    
    $(document).ready(function () {

        $(".header-demo .demo button").on("click", function () {

            $("html, body").animate({
            
                scrollTop : $("#demo").offset().top

            }, 1000);

        });
    });
    
});


// Loading Screen 
    
$(window).on('load', function () {
    
    "use strict";

    $('.loading-overlay .sk-folding-cube').fadeOut(1000, function () {

        $(this).parent().fadeOut(1000, function () {

            $('body').css('overflow', 'auto');
            $(this).remove();

        });

    });

});