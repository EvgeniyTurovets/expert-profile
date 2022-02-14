"use strict";
"use strict";

$(function () {
  var person__menu__btn = document.getElementById('person__menu__btn');
  var person = document.querySelector('.person');
  person__menu__btn.addEventListener('click', function () {
    person.classList.toggle('open');
  });
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.person')) {
      person.classList.remove('open');
    }
  });
  var openSearch = document.getElementById('open-search');
  openSearch.addEventListener('click', function () {
    openSearch.classList.toggle('active');
    document.querySelector('.header__search').classList.toggle('active');
  });
  Inputmask().mask(document.querySelectorAll(".mask"));
  $('.search-input input').on('focus', function () {
    $(this).closest('.search-input').addClass('focus');
  });
  $('.search-input input').on('blur', function () {
    $(this).closest('.search-input').removeClass('focus');
  });
  $(".js-selectize").selectize();
  $('.filter__title').on('click', function () {
    if ($(window).width() < 992) {
      $(this).toggleClass('active');
      $('.filter__content').slideToggle();
    }
  });
  $('.exp-profile__rate').on('mouseenter', function () {
    $(this).addClass('active');
  });
  $('.exp-profile__rate .tooltips').on('mouseleave', function () {
    $(this).closest('.exp-profile__rate').removeClass('active');
  });
  $('.exp-profile__tabs__nav li').on('click', function () {
    var index = $(this).index();
    $('.exp-profile__tabs__nav li').removeClass('active');
    $(this).addClass('active');
    $('.exp-profile__tabs__content').removeClass('active');
    $('.exp-profile__tabs__content').eq(index).addClass('active');
  });
});
//# sourceMappingURL=main.js.map
