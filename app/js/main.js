"use strict";
"use strict";

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
//# sourceMappingURL=main.js.map
