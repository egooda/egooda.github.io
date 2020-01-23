/* Scroll down Arrow */

$(document).ready(function() {
    $("#arrow-intro").click(function(event){
        $('html, body').animate({scrollTop: '+=1200px'}, 800);
    });
});




/* Scroll to top on Button */

$(document).ready(function(){
        $('body,html').animate({
            scrollTop: 0
        }, 600);
    $('#logo').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 600);
        return false;
    });
}); 





/* Background color */

$(function() {
   $(window).scroll(function () {
      if ($(this).scrollTop() > 500) {
         $('body').addClass('background-color')
      }
      if ($(this).scrollTop() < 500) {
         $('body').removeClass('background-color')
      }
   });
});




/* Grid Line */

$(function() {
   $(window).scroll(function () {
      if ($(this).scrollTop() > 500) {
         $("#line-grid").addClass('line-grid-color')
      }
      if ($(this).scrollTop() < 500) {
         $("#line-grid").removeClass('line-grid-color')
      }
   });
});




/* Logo */

$(function() {
   $(window).scroll(function () {
      if ($(this).scrollTop() > 500) {
         $("#logo-line").addClass('logo-line-color')
      }
      if ($(this).scrollTop() < 500) {
         $("#logo-line").removeClass('logo-line-color')
      }
   });
});




/* Intro Opacity */

$(function() {
   $(window).scroll(function () {
      if ($(this).scrollTop() > 500) {
         $("#intro").addClass('intro-opacity')
      }
      if ($(this).scrollTop() < 500) {
         $("#intro").removeClass('intro-opacity')
      }
   });
});




/* Nav Selected Item */

$(function() {
   $(window).scroll(function () {
      if ($(this).scrollTop() > 500) {
         $("li.item-selected").addClass('item-selected-color')
      }
      if ($(this).scrollTop() < 500) {
         $("li.item-selected").removeClass('item-selected-color')
      }
   });
});





/* Nav Unselected Item */

$(function() {
   $(window).scroll(function () {
      if ($(this).scrollTop() > 500) {
         $("li.item-unselected").addClass('item-unselected-color')
      }
      if ($(this).scrollTop() < 500) {
         $("li.item-unselected").removeClass('item-unselected-color')
      }
   });
});




/* Image Fade on Scroll on Home */

function showImages(el) {
    var windowHeight = jQuery( window ).height();
    $(el).each(function(){
        var thisPos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (topOfWindow + windowHeight - 400 > thisPos ) {
            $(this).addClass("fadeIn");
        }
    });
}

// if the image in the window of browser when the page is loaded, show that image
$(document).ready(function(){
    showImages('.box-image');
});

// if the image in the window of browser when scrolling the page, show that image
$(window).scroll(function() {
    showImages('.box-image');
});