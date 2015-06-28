// Written by Matt Usifer -- 6/23/2015
// Uses Ariel Flesler's jQuery.scrollTo plugin to simplify changing scroll position.

$(document).ready(function() {
	$('div.content').add('div.fill').hide();
	$('div.content:first').show(); 
	$('#project-one').show();

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

	$('ul#project-tabs a[name="project-map"]').hover(mapResize);
});

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
}