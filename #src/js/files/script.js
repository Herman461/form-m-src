const iconMenu = document.querySelector('.icon-menu');

if (iconMenu) {
   const menuBody = document.querySelector('.menu__body');
   iconMenu.addEventListener('click', (e) => {
      document.body.classList.toggle('_lock');
      iconMenu.classList.toggle('_active');
      menuBody.classList.toggle('_active');
   });
}

document.addEventListener('DOMContentLoaded', function (e) {});

document.addEventListener('click', function (e) {
   const targetElement = e.target;
   if (targetElement.classList.contains('search-form__icon')) {
      document.querySelector('.search-form__body').classList.toggle('_active');
   } else if (
      !targetElement.closest('.search-form__body') &&
      document.querySelector('.search-form__body')
   ) {
      document.querySelector('.search-form__body').classList.remove('_active');
   }
});
