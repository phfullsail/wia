// JavaScript Document

Modernizr.load ({ 
	test: Modernizr.canvas,
	yep: ["js/success.js", "js/main.js"],
	nope: "includes/webshim/minified/polyfiller.js",
	complete: function() {
		 
		 if (!Modernizr.canvas) {
			 Modernizr.load("js/fail.js");
		 }else {
			 Modernizr.load("js/main.js");
		 }
		 
	}

});

/****************** sound controls ****************/
	var audio = document.getElementById("audio");	
	var audioBtn = document.getElementById("soundBtn");	

function toggleSound() {
	if(audio.paused) {
	audio.play();
	$("#soundBtn").removeClass( "sound-off" ).addClass( "sound" );
	}else {
		audio.pause();
		$("#soundBtn").removeClass( "sound" ).addClass( "sound-off" );
	}
	
};



$('document').ready(function(e) {
	$(".fancybox").fancybox();
	$('[data-toggle="tooltip"]').tooltip()
	

/**************map script*********************/

$('#mapForm').change(function() {
	var selectedState = $('#mapForm option:selected').val();
	
	if (selectedState == 'ALL') {
		$("a.dot").show(1000);
	}else {
		$('a.dot[state*="'+selectedState+'"]').show(1000);
		$('a.dot[state!="'+selectedState+'"]').hide(1000);	
	}
	
});


$("a.dot").click(function() {
	$("a.dot").removeClass('selected');
	$(this).addClass('selected');
	
	var city = $(this).attr('city');
	var htmlCode = $(city).html();
	
	$(".city-details").removeClass('show-details');
	$(".city-details").addClass('hide-details');
	
	$(".details_container").fadeOut(500, function() {
		switch(city) {
			case 'phenix':
			$('#phenix').switchClass( "hide-details", "show-details", 800, "easeInQuart" );
			break;
			case 'pensacola':
			$('#pensacola').switchClass( "hide-details", "show-details", 800, "easeInQuart" );
			
			break;
			case 'durham':
			$('#durham').switchClass( "hide-details", "show-details", 800, "easeInQuart" );
			
			break;
			case 'atlanta':
			$('#atlanta').switchClass( "hide-details", "show-details", 800, "easeInQuart" );
		
			break;
		}
		});

});


/************** Menu script ******************/

/*$("#menuMeats").animate({
		opacity: 1,
		left: "+=30",
		height: "toggle"
		}, 500, function() {
		
	});*/

$( "#btnSides" ).click(function() {
	//toggle sides
	$("#menuSides").toggle("slow");
});


$( "#btnMeats" ).click(function() {
	//toggle meats
	$("#menuMeats").toggle("slow");
});


$( "#btnDesserts" ).click(function() {
	//toggle meats
	$("#menuDesserts").toggle("slow");
});

});