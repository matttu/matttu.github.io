// Written by Matt Usifer -- 6/23/2015
// Uses Ariel Flesler's jQuery.scrollTo plugin to simplify changing scroll position.

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
        var scrollFrom = $(activeElement).offset().top + currentPosition-5;
        $(document).scrollTop(scrollFrom);
      }

      // move .activeNav identifier to active tab
      $('.activeNav').removeClass('activeNav'); 
      $('a[title='+activeTab+']').parent().addClass('activeNav');
          
      // scroll
          $.scrollTo(activeTab, 1500, {easing:'easeInOutCubic', offset:-5});
          
          // after scroll is complete
          // hide everything except active tab
          // reset scrolltop
          // allow content to shrink to natural height
      setTimeout(function() {
        $('section.content').not(activeTab).add('aside.fill').hide();
        $(document).scrollTop(0);
        $('section.content').css('min-height', '');
        }, 1550);

      // scale the height of the skydive table
      if (activeTab =='#three') {
        setTimeout(function() { 
          $('table.squares').attr('height',$('table.squares').width() * 0.625);
        },500);
      }
    }

    return false; // prevent page from jumping to top
  });

  // get info from github API and colors.json
  var url='https://api.github.com/users/mattusifer/repos',
      colors='https://raw.githubusercontent.com/doda/github-language-colors/master/colors.json',
      $mainContainer = $('#one'),
      $liContainer = $('ul#project-tabs'),
      $liTemplate = $('li.hidden'),
      $contentTemplate = $('div.project-content'),
      $liCurrentTemplate;

  $.getJSON(colors, function(colors) {
    $.getJSON(url, function(data) {

      // sort by last updated
      data.sort(function(a,b) {
        return (new Date(b.updated_at) < new Date(a.updated_at)) ? -1 : 1;
      });

      for (i=0; i<data.length; i++) {
        repo = data[i];
        $liCurrentTemplate = $liTemplate.clone();
        $contentCurrentTemplate = $contentTemplate.clone();

        // if (repo.fork) continue;

        $liCurrentTemplate.find('a').text(repo.name).
          attr('href',repo.html_url).
          attr('name',repo.name).
          attr('onmouseover','$(this).'
              + 'attr(\'style\',\'color: '+colors[repo.language]+'\').'
              + 'parent().siblings().find(\'a\').attr(\'style\',\'\')');

        $liCurrentTemplate.find('span').text(repo.language);

        $contentCurrentTemplate.text(repo.description).
          attr('id',repo.name);

        $liContainer.append($liCurrentTemplate.removeClass('hidden'));
        $mainContainer.append($contentCurrentTemplate);
      }
    });
  });

  // show project content on hover
  $('ul#project-tabs').on("mouseenter","a",function() {
    var currentProj = $(this).attr('name');
    $('div.project-content').hide();
    $('div#' + currentProj).show();
  });

  // set to trigger at the end of a window resize
  $(window).resize(function() {
    // resize skydive table
    $('table.squares').attr('height',$('table.squares').width() * 0.625);
  });
});