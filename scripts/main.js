// Written by Matt Usifer -- 6/23/2015
$(document).ready(function() {

  // hide everything
  $('section.content').hide();

  // show first content box and project
  $('section.content:first').show();
  $('div#project-one').show();

  // nav options onclick
  var clickables = $('a.section-navigation');
  clickables.click(function() {
    var activeTab = $(this).attr('title');

    // if the click is on an inactive tab
    if($('.activeNav a').attr('title') != activeTab) {
      // set new active element
      if ($('.activeNav').length) {
        var activeElement = $('.activeNav a').attr('title');
      }

      // move .activeNav identifier to active tab
      $('.activeNav').removeClass('activeNav');
      $('a[title='+activeTab+']').parent().addClass('activeNav');

      // show active tab
      $(activeTab).show();

      // hide everything
      $('section.content').not(activeTab).hide();

      // scale the height of the skydive table
      if (activeTab =='#two') {
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

        if (repo.fork) continue;

        $liCurrentTemplate.find('a').text(repo.name).
          attr('href',repo.html_url).
          attr('name',repo.name.split('.').join('_')).
          attr('onmouseover','$(this).'
              + 'attr(\'style\',\'color: '+colors[repo.language]+'\').'
              + 'parent().siblings().find(\'a\').attr(\'style\',\'\')');

        $liCurrentTemplate.find('span').text(repo.language);

        $contentCurrentTemplate.text(repo.description).
          attr('id',repo.name.split('.').join('_'));

        $liContainer.append($liCurrentTemplate.removeClass('hidden'));
        $mainContainer.append($contentCurrentTemplate);
      }
    });
  });

  // show project content on hover
  $('ul#project-tabs').on("mouseenter","a",function() {
    var currentProj = $(this).attr('name').split('.').join('_');
    $('div.project-content').hide();
    $('div#' + currentProj).show();
  });

  // set to trigger at the end of a window resize
  $(window).resize(function() {
    // resize skydive table
    $('table.squares').attr('height',$('table.squares').width() * 0.625);
  });
});
