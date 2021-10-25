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
   if (targetElement.classList.contains('bottom-header__link')) {
      e.preventDefault();
      toggleSubmenu(targetElement);
   }
});


let currentActiveSubmenu;

function toggleSubmenu(targetElement) {
   if (!targetElement.nextElementSibling) return;
   if (currentActiveSubmenu && targetElement.nextElementSibling !== currentActiveSubmenu) {
      currentActiveSubmenu.hidden = true;
      currentActiveSubmenu.previousElementSibling.classList.remove('_active');
   }
   if (!targetElement.nextElementSibling.classList.contains("_slide")) {
      if (!targetElement.classList.contains('_active')) {
         targetElement.nextElementSibling.hidden = true;
      } else {
         targetElement.nextElementSibling.hidden = false;
      }
      _slideToggle(targetElement.nextElementSibling, 1200);
      targetElement.classList.toggle("_active");
      currentActiveSubmenu = targetElement.nextElementSibling;
   }
}



