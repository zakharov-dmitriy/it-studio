$(function () {
   // $('.burger__btn').on('click', function () {
   //    $('body').toggleClass('lock');
   // });
});

// document.querySelector('.menu__list').addEventListener('click', function () {
//    document.querySelectorAll('.menu__link').classList.add('menu__link--active');
// });

document.querySelector('.burger__btn').addEventListener('click', function () {
   document.querySelector('.btn-line').classList.toggle('btn-line--active');
   document.querySelector('.menu__list').classList.toggle('menu__list--active');
   document.querySelector('body').classList.toggle('lock');
});

// document.querySelector('.burger__btn').onclick = function () {
//    document.querySelector('.btn-line').classList.toggle('btn-line--active');
// }