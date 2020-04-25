import $ from 'jquery';
let isadd = false;
export const artMenu = () => {
  $(function () {
    if (!isadd && $('.sub-menu > a').length > 0) {
      isadd = true;
      $('.sub-menu > a').on('click', function () {
        clickOnMenu(this);
      });
    }
    $('ul.sidebar-menu').height($(window).height() - 75);
    $(window).resize(function () {
      $('ul.sidebar-menu').height($(window).height() - 75);
    });
  });
};

function clickOnMenu(element) {
  var cE = $(element).parent('li');
  if (cE.children('ul').length > 0) {
    if (cE.hasClass('openSub')) {
      cE.removeClass('openSub');
      $(element)
        .children('.CloseIcon')
        .addClass('OpenIcon')
        .removeClass('CloseIcon');
      cE.find('ul').slideUp();
      // cE.find('.openedIcon').addClass('closedIcon').removeClass('openedIcon');
    } else {
      cE.addClass('openSub');
      cE.children('ul').slideDown();
      $(element)
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
    $(element).addClass('active');
  }
}
