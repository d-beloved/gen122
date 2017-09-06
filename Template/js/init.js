(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space

  $(document).ready(function(){
      $('.slider').slider();
      	setInterval(function() {
      		$('.slider').slider('next');
      	}, 10000);
    });