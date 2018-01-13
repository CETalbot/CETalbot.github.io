	//carousel background code referenced to http://kenwheeler.github.io/slick/
	$(document).ready(function(){
	//the script will run once the HTML page has been loaded
	  $(".carouselGallery").slick({
		  lazyLoad: "ondemand",
		  //shows three images when page is loaded
		  slidesToShow: 3,
		  //when user scrolls it only scrolls to one image at a time
		  slidesToScroll: 1,
		  //displays the arrows within the slick library
		  arrows:true,
		  //centers slick carousel
		  centerMode:true
	  });
	});

	//fancybox gallery code reference - http://fancybox.net/
	$(document).ready(function() {
	//the script will run once the HTML page has been loaded
		$("a.fancybox").fancybox({
			   //adding effects when opening and closing the images
			   openEffect: 'elastic',
	           closeEffect: 'elastic',
	           //make the navigation arrows and the close icon show
	           showNavArrows: true,
		helpers : {
	        overlay : {
	            css : {
					 background : 'rgba(58, 42, 45, 0.95)',
	            }
	        }
	    }
	});
	});
