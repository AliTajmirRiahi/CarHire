import $ from 'jquery';

$(function () {
  $('.sub-menu > a').on('click', function () {
    var cE = $(this).parent('li');
    if (cE.children('ul').length > 0) {
      if (cE.hasClass('openSub')) {
        cE.removeClass('openSub');
        $(this)
          .children('.CloseIcon')
          .addClass('OpenIcon')
          .removeClass('CloseIcon');
        cE.find('ul').slideUp();
        // cE.find('.openedIcon').addClass('closedIcon').removeClass('openedIcon');
      } else {
        cE.addClass('openSub');
        cE.children('ul').slideDown();
        $(this)
          .children('.OpenIcon')
          .addClass('CloseIcon')
          .removeClass('OpenIcon');
        // cE.siblings('li').children('.sub-menu').slideUp();
        // cE.siblings('li').removeClass('openSub');
        // cE.siblings('li').find('li').removeClass('openSub');
        // cE.siblings('li').find('.sm-subMenu').slideUp();
        // cE.find('.closedIcon').removeClass('closedIcon').addClass('openedIcon');
        // cE.siblings('li').find('.openedIcon').addClass('closedIcon').removeClass('openedIcon');
      }
    } else {
      $('.active').removeClass('active');
      $(this).addClass('active');
    }
  });
});
