//JQuery

//This code is from http://www.w3schools.com/jquery/eff_toggle.asp
$(document).ready(function(){ //This detects whether the document is ready (Once the DOM is ready). If the document is then the function will be ran   

    $("#portfolioAdditions").click(function(){

        $(".additionalRows").toggle();

    });

});