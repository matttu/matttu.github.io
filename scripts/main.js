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
       
      // get current position, show all tabs
      var currentPosition = $(document).scrollTop();
      $('section.content').add('aside.fill').show();

      // stretch content to fill screen space
      $('section.content').css('min-height', window.innerHeight);
      
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
        $('section.content').css('min-height', '');
        }, 1050);

      // scale the height of the skydive table
      if (activeTab =='#three') {
        setTimeout(function() { 
          $('table.squares').attr('height',$('table.squares').width() * 0.625);
        },500);
      }
    }
  });

  // get info from github API
  var url='https://api.github.com/users/mattusifer/repos',
    $mainContainer = $('#one'),
    $liContainer = $('ul#project-tabs'),
    $liTemplate = $('li.hidden'),
    $contentTemplate = $('div.project-content'),
    $liCurrentTemplate;

  $.getJSON(url, function(data, textStatus) {
    data.sort(function(a,b) {
      return (new Date(b.updated_at) < new Date(a.updated_at)) ? -1 : 1;
    });

    for (i=0; i<data.length; i++) {
      repo = data[i];
      $liCurrentTemplate = $liTemplate.clone();
      $contentCurrentTemplate = $contentTemplate.clone();

      if (repo.fork) continue;

      $liCurrentTemplate.find('a').text(repo.name).
        attr('href',repo.html_url).
        attr('name',repo.name);

      if (repo.language) $liCurrentTemplate.find('span').text(repo.language);

      $contentCurrentTemplate.text(repo.description).
        attr('id',repo.name);

      $liContainer.append($liCurrentTemplate.removeClass('hidden'));
      $mainContainer.append($contentCurrentTemplate);
    }
  });

  // show project content on hover
  $('ul#project-tabs').on("mouseenter","a",function() {
    var currentProj = $(this).attr('name');
    $('.activeProj').removeClass('activeProj');
    $(this).parent().addClass('activeProj');
    $('div.project-content').hide();
    $('div#' + currentProj).show();
  });

  // set to trigger at the end of a window resize
  $(window).resize(function() {
    // resize skydive table
    $('table.squares').attr('height',$('table.squares').width() * 0.625);
  });
});