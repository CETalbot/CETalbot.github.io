	//carousel background code referenced to http://kenwheeler.github.io/slick/
	$(document).ready(function(){
	  $(".your-class").slick({
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

