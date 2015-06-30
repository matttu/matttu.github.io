// Written by Matt Usifer -- 6/23/2015
// Uses Ariel Flesler's jQuery.scrollTo plugin to simplify changing scroll position.

var originalMapHTML;
var imgMapId;
var imgMapWidth = 1343;

$(document).ready(function() {

  // hide everything
  $('section.content').add('aside.fill').hide();

  //show first content box and project
  $('section.content:first').show();
  $('div#project-one').show();

  // nav options onclick
  var clickables = $('ul#nav li a').add($('header a')).add($('section#zero a')).add($('footer a'));
  clickables.click(function() {
    var activeTab = $(this).attr('title');

    // if the click is on an inactive tab
    if($('.activeNav a').attr('title') != activeTab) {

      // stretch content to fill screen space
      $('section.content').addClass('content-min-height');
       
      // get current position, show all tabs
      var currentPosition = $(document).scrollTop();
      $('section.content').add('aside.fill').show();
      
      // if we are already scrolled down
      // set new active element
      // get scroll offset
      // reset document scrolltop to offset
      if ($('.activeNav').length) {
        var activeElement = $('.activeNav a').attr('title');
        var scrollFrom = $(activeElement).offset().top + currentPosition-12;
        $(document).scrollTop(scrollFrom);
      }

      // move .activeNav identifier to active tab
      $('.activeNav').removeClass('activeNav'); 
      $('a[title='+activeTab+']').parent().addClass('activeNav');
          
      // scroll
          $.scrollTo(activeTab, 1000, {easing:'swing', offset:-12});
          
          // after scroll is complete
          // hide everything except active tab
          // reset scrolltop
          // allow content to shrink to natural height
      setTimeout(function() {
        $('section.content').not(activeTab).add('aside.fill').hide();
        $(document).scrollTop(0);
        $('section.content').removeClass('content-min-height');
        }, 1050);

      // scale the height of the skydive table
      if (activeTab =='#three') {
        setTimeout(function() { 
          $('table.squares').attr('height',$('table.squares').width() * 0.625);
        },500);
      }
    }
  });

  // show project content on hover
  $('ul#project-tabs a').hover(function() {
    var currentProj = $(this).attr('name');
    $('.activeProj').removeClass('activeProj');
    $(this).parent().addClass('activeProj');
    $('div.project-content').hide();
    $('div#' + currentProj).show();
  });

  // map-resize
  // get image map id
  imgMapId = $('img.map-resize').attr('usemap');

  // set original map html to save the original coordinates
  originalMapHTML = $('<map>').append($(imgMapId).clone()).html();

  // set to trigger at the end of a window resize
  $(window).resize(function() {

    // resize skydive table
    $('table.squares').attr('height',$('table.squares').width() * 0.625);

    // resize piano
      if(this.resizeTO) clearTimeout(this.resizeTO);
      this.resizeTO = setTimeout(function() {
          $(this).trigger('resizeEnd');
      }, 500);
  });
  $(window).bind('resizeEnd', mapResize);

  // resize piano when the project content loads
  $('ul#project-tabs a[name="project-map"]').hover(mapResize);

  // set up audio channels for piano
  var channel_max = 20;
  audiochannels = new Array();
  for (a=0;a<channel_max;a++) {
    audiochannels[a] = new Array();
    audiochannels[a]['channel'] = new Audio();  // new audio
    audiochannels[a]['finished'] = -1;  // no end time
  }
});

// play notes through audio channels
function playNotes(s) {
  for (a=0;a<audiochannels.length;a++) {
    thistime = new Date();
    if (audiochannels[a]['finished'] < thistime.getTime()) {  // check if channel is finished
      audiochannels[a]['finished'] = thistime.getTime() + document.getElementById(s).duration*1000;
      audiochannels[a]['channel'].src = document.getElementById(s).src;
      audiochannels[a]['channel'].load();
      audiochannels[a]['channel'].play();
      break;
    }
  }
}

// function for map-resize
function mapResize() {
  var mapImg = $('img.map-resize');
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

// functions to highlight active piano keys
function C()
{
document.getElementById("piano").src="./piano/pictures/c.jpg";
setTimeout('document.getElementById("piano").src="./piano/pictures/piano.jpg"',200);
}
function Csharp()
{
document.getElementById("piano").src="./piano/pictures/csharp.jpg";
setTimeout('document.getElementById("piano").src="./piano/pictures/piano.jpg"',200);
}
function D()
{
document.getElementById("piano").src="./piano/pictures/d.jpg";
setTimeout('document.getElementById("piano").src="./piano/pictures/piano.jpg"',200);
}
function Dsharp()
{
document.getElementById("piano").src="./piano/pictures/dsharp.jpg";
setTimeout('document.getElementById("piano").src="./piano/pictures/piano.jpg"',200);
}
function E()
{
document.getElementById("piano").src="./piano/pictures/e.jpg";
setTimeout('document.getElementById("piano").src="./piano/pictures/piano.jpg"',200);
}
function F()
{
document.getElementById("piano").src="./piano/pictures/f.jpg";
setTimeout('document.getElementById("piano").src="./piano/pictures/piano.jpg"',200);
}
function Fsharp()
{
document.getElementById("piano").src="./piano/pictures/fsharp.jpg";
setTimeout('document.getElementById("piano").src="./piano/pictures/piano.jpg"',200);
}
function G()
{
document.getElementById("piano").src="./piano/pictures/g.jpg";
setTimeout('document.getElementById("piano").src="./piano/pictures/piano.jpg"',200);
}
function Gsharp()
{
document.getElementById("piano").src="./piano/pictures/gsharp.jpg";
setTimeout('document.getElementById("piano").src="./piano/pictures/piano.jpg"',200);
}
function A()
{
document.getElementById("piano").src="./piano/pictures/a.jpg";
setTimeout('document.getElementById("piano").src="./piano/pictures/piano.jpg"',200);
}
function Asharp()
{
document.getElementById("piano").src="./piano/pictures/asharp.jpg";
setTimeout('document.getElementById("piano").src="./piano/pictures/piano.jpg"',200);
}
function B()
{
document.getElementById("piano").src="./piano/pictures/b.jpg";
setTimeout('document.getElementById("piano").src="./piano/pictures/piano.jpg"',200);
}