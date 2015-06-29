// Written by Matt Usifer -- 6/23/2015
// Uses Ariel Flesler's jQuery.scrollTo plugin to simplify changing scroll position.

$(document).ready(function() {
	$('div.content').add('div.fill').hide();
	$('div.content:first').show(); 
	$('#project-one').show();

	// includes
	$("#piano-include").load("./piano/piano.html"); 
	$("div#two").load("./includes/resume.html");

	// nav options onclick
	var clickables = $('ul#nav li a').add($('#head a')).add($('div#zero a')).add($('div#mobile-home a'));
	clickables.click(function() {
		var activeTab = $(this).attr('title');

		if($('.activeNav a').attr('title') != activeTab) {

			$('div.content').addClass('content-min-height');

			// scale the height of the skydive table
			if (activeTab =='#three') {
				setTimeout(function() { 
					$('table.squares').attr('height',$('table.squares').width()*.625);
				},500);
			}
			 
			// get current position, show all tabs
			var currentPosition = $(document).scrollTop();
			$('div.content').add('div.fill').show();
			
			if ($('.activeNav').length) {
				var activeElement = $('.activeNav a').attr('title');
				var scrollFrom = $(activeElement).offset().top + currentPosition-12;
				$(document).scrollTop(scrollFrom);
			}

			$('.activeNav').removeClass('activeNav'); 
			$('a[title='+activeTab+']').parent().addClass('activeNav');
					
	        $.scrollTo(activeTab, 1000, {easing:'swing', offset:-12});
	        
			setTimeout(function() {
				$('div.content').not(activeTab).add('div.fill').hide();
				$(document).scrollTop(0);
				$('div.content').removeClass('content-min-height');
				}, 1050);
		}
	});

	// project tabs
	$('ul#project-tabs a').hover(function() {
		var currentProj = $(this).attr('name');

		$('.activeProj').removeClass('activeProj');
		$(this).parent().addClass('activeProj');

		$('div.project-content').hide();
		$('div#' + currentProj).show();
	});

	$(window).resize(function() {
		$('table.squares').attr('height',$('table.squares').width()*.625);
	});

	// only show piano in firefox
	// TODO: figure out how to make it work in other browsers
	navigator.sayswho= (function(){
	    var ua= navigator.userAgent, tem,
	    M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
	    if(/trident/i.test(M[1])){
	        tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
	        return 'IE '+(tem[1] || '');
	    }
	    if(M[1]=== 'Chrome'){
	        tem= ua.match(/\b(OPR|Edge)\/(\d+)/);
	        if(tem!= null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
	    }
	    M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
	    if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
	    return M.join(' ');
	})();

	if(navigator.sayswho.match(/^firefox/i)) {
		$('#piano-div').show();
		$('ul#project-tabs a[name="project-map"]').hover(mapResize);
	}


});

/*
// imageMapResize
var originalMapHTML;
var mapId;

$(document).ready(function() {
	mapId = $('img[name="map-resize"]').attr('usemap');
	originalMapHTML = $('<map>').append($(mapId).clone()).html();

	$(window).resize(function() {
		$('table.squares').attr('height',$('table.squares').width()*.625);

	    if(this.resizeTO) clearTimeout(this.resizeTO);
	    this.resizeTO = setTimeout(function() {
	        $(this).trigger('resizeEnd');
	    }, 500);
	});

	$(window).bind('resizeEnd', mapResize);
	$('ul#project-tabs a[name="project-map"]').hover(mapResize);
});

function mapResize() {
	var mapImg = $('img[name="map-resize"]');
	var widthFactor = mapImg.width()/1343;
	var originalMapAreas = $(originalMapHTML).find('area');
	var currentMapAreas = $(mapId + ' area');

	for(var i =0; i<currentMapAreas.length; i++) {
		var originalCoords = originalMapAreas[i].coords.split(',');
		var newCoords = currentMapAreas[i].coords.split(',');
		for(var j=0;j<newCoords.length;j++) {
			newCoords[j] = originalCoords[j]*widthFactor;
		}

		currentMapAreas[i].coords = newCoords.join(',');
	}
} */