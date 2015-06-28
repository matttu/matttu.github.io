// img-map-resize.js
// written by Matt Usifer

// globals
var originalMapHTML;
var imgMapId;
var imgMapWidth = 1343 // FILL IN THE WIDTH OF THE IMAGE FILE;

$(document).ready(function() {

	// get image map id
	imgMapId = $('img[name="map-resize"]').attr('usemap');

	// set original map html to save the original coordinates
	originalMapHTML = $('<map>').append($(imgMapId).clone()).html();

	// set to trigger at the end of a window resize
	$(window).resize(function() {
	    if(this.resizeTO) clearTimeout(this.resizeTO);
	    this.resizeTO = setTimeout(function() {
	        $(this).trigger('resizeEnd');
	    }, 500);
	});
	$(window).bind('resizeEnd', mapResize);
});

function mapResize() {
	var mapImg = $('img[name="map-resize"]');
	var widthFactor = mapImg.width()/imgMapWidth;
	var originalMapAreas = $(originalMapHTML).find('area');
	var currentMapAreas = $(imgMapId + ' area');

	// remap coords
	for(var i =0; i<currentMapAreas.length; i++) {
		var originalCoords = originalMapAreas[i].coords.split(',');
		var newCoords = currentMapAreas[i].coords.split(',');
		for(var j=0;j<newCoords.length;j++) {
			newCoords[j] = originalCoords[j]*widthFactor;
		}

		currentMapAreas[i].coords = newCoords.join(',');
	}
}