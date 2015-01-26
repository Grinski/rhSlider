
(function ( $ ) {
	
	var speed = 300;
	$.fn.rhSlider = function( options ) {
		
		$target = $('#' + this.attr('id'));
		$target.addClass('rhSlider');
		
		var slideCount = 0;
		var slides = $(this).children();
		var startSlide = 1
		var activeSlide = startSlide;
		
		var totalSlides = slides.length;
		
		slides.each(function (){
			slideCount++;
			
			// Find the image in the slide, get its source
			var slideImg = $(this).children('img');
			var slideSrc = slideImg.attr('src');
			
			// Remove the image from the div
			slideImg.remove(); 
			
			// Set the bg image
			$(this).addClass('rhSlide').addClass('rhSlide'+slideCount).css({"background-image": "url(" + slideSrc + ")"});
			
			// Find the starting slide, give it class 'active'
			$target.find('.rhSlide'+startSlide).addClass('active');
			
		});
		
		
		skip();
			
		function skip(){
			$('button').on('click', function(e){
				e.preventDefault();
				
				if( $(this).hasClass('prev') ){
					activeSlide--;
					if (activeSlide == 0 ){ activeSlide = totalSlides } 
					$target.find('.active').removeClass('active');
					$target.find('.rhSlide'+activeSlide).addClass('active');
					console.log(activeSlide); 
				} else {
					activeSlide++;
					if (activeSlide > totalSlides ){ activeSlide = 1 } 
					$target.find('.active').removeClass('active');
					$target.find('.rhSlide'+activeSlide).addClass('active');
					console.log(activeSlide); 
				}
			});
		}
		
		// and Fin.
		return this;
	}
}( jQuery ));



$(document).ready(function() {
	$container = $('#container');
	
	$container.rhSlider();
});