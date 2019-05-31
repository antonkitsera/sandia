jQuery(function($) {

    'use strict';
  
    function animate(el) {
      el.addClass('animated ' + el.data('animation')).css('animation-delay', el.data('delay'));
      el.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        el.removeClass('animated ' + el.data('animation'));
      });
    }
  
    // initialize fullPage
    $('#fullpage').fullpage({
        anchors: ['home', 'production', 'gofrotara', 'packages', 'materials', 'materials-2', 'about', 'partners', 'contacts'],
        navigation: false,
  
      // autoScrolling: false,
  
      afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex) {
  
        // console.log('slideIndex:' + slideIndex);
        // console.log('---');
  
      },
  
      onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex) {
  
      },
  
      afterLoad: function(anchorLink, index) {
  
        //console.log('Loaded ' + anchorLink + ' Index: ' + index);
        $('.fp-controlArrow').data('animation','bounce').data('duration','.6s').addClass('is-animated nav-arrow-bounce')
  
      },
  
      onLeave: function(index, nextIndex, direction) {
  
        //console.log('index: ' + index + ' NextIndex: ' + nextIndex);
  
        $('.section' + nextIndex).find(".is-animated").each(function(index) {
          animate($(this));
        });
  
      }
  
    });
  
    $(document).ready(function() {
  
      $('#fullpage').show();
  
    });
  
  })