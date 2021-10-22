//BuildSlider


function activateOrDeactivateSlider(className, breakpoint, swiperObj, swiperOptions = {}) {
   const body = document.querySelector(className);
   if (body) {
      if (window.innerWidth <= breakpoint && !body.classList.contains('swiper-build')) {
         body.classList.add('swiper-build');

         for (let index = 0; index < body.children.length; index++) {
            const item = body.children[index];
            item.classList.add('swiper-slide');
         }
         let sliderContent = body.innerHTML;
         let sliderWrapper = document.createElement('div');
         sliderWrapper.classList.add('swiper-wrapper');
         sliderWrapper.innerHTML = sliderContent;
         body.innerHTML = '';
         body.appendChild(sliderWrapper);

         swiperObj = new Swiper(className, swiperOptions);
      } else if (body.classList.contains('swiper-build') && window.innerWidth >= breakpoint) {
         swiperObj = null;
         const elements = body.querySelectorAll('.swiper-slide');
         body.innerHTML = '';
         for (let index = 0; index < elements.length; index++) {
            const element = elements[index];
				if (element.classList.contains('swiper-slide-duplicate')) {
					element.remove();
				} else {
					element.removeAttribute('role');
					element.removeAttribute('style');
					element.removeAttribute('aria-label');
					const swiperItemClasses = element.className
						.match(/swiper-.*/g)
						.join('')
						.split(' ');
					element.classList.remove(...swiperItemClasses);
					body.appendChild(element);
				}
         }
         const swiperBodyClasses = body.className
            .match(/swiper-.*/g)
            .join('')
            .split(' ');
         console.log(swiperBodyClasses);
         body.classList.remove(...swiperBodyClasses);
      }
   }
}


let sliders = document.querySelectorAll('._swiper');

if (sliders) {
   for (let index = 0; index < sliders.length; index++) {
      let slider = sliders[index];
      if (!slider.classList.contains('swiper-build')) {
         let slider_items = slider.children;
         if (slider_items) {
            for (let index = 0; index < slider_items.length; index++) {
               let el = slider_items[index];
               el.classList.add('swiper-slide');
            }
         }
         let slider_content = slider.innerHTML;
         let slider_wrapper = document.createElement('div');
         slider_wrapper.classList.add('swiper-wrapper');
         slider_wrapper.innerHTML = slider_content;
         slider.innerHTML = '';
         slider.appendChild(slider_wrapper);
         slider.classList.add('swiper-build');
      }
      if (slider.classList.contains('_gallery')) {
         //slider.data('lightGallery').destroy(true);
      }
   }
   sliders_build_callback();
}

function sliders_build_callback() {}

// let slider_about = new Swiper('.about__slider', {
// 	// effect: 'fade',
// 	// autoplay: {
// 	// 	delay: 3000,
// 	// 	disableOnInteraction: false,
// 	// },

// 	observer: true,
// 	observeParents: true,
// 	slidesPerView: 1,
// 	spaceBetween: 0,
// 	autoHeight: true,
// 	speed: 800,
// 	touchRatio: 0,
// 	simulateTouch: false,
// 	loop: true,
// 	preloadImages: false,
// 	lazy: true,
// 	// Dotts
// 	pagination: {
// 		el: '.slider-quality__pagging',
// 		clickable: true,
// 	},
// 	// Arrows
// 	navigation: {
// 		nextEl: '.about__more .more__item_next',
// 		prevEl: '.about__more .more__item_prev',
// 	},
// 	breakpoints: {
// 		320: {
// 			slidesPerView: 1,
// 			spaceBetween: 0,
// 			autoHeight: true,
// 		},
// 		768: {
// 			slidesPerView: 2,
// 			spaceBetween: 20,
// 		},
// 		992: {
// 			slidesPerView: 3,
// 			spaceBetween: 20,
// 		},
// 		1268: {
// 			slidesPerView: 4,
// 			spaceBetween: 30,
// 		},
// 	},
// 	on: {
// 		lazyImageReady: function () {
// 			ibg();
// 		},
// 	},
// 	// And if we need scrollbar
// 	scrollbar: {
// 		el: ".swiper-scrollbar",
// 	},
// })

const sliderIntroCurrent = document.querySelector('.slider-intro__current');


if (document.querySelector('.slider-intro__body')) {
   const sliderIntro = new Swiper('.slider-intro__body', {
		loop: true,
		autoHeight: true,
		navigation: {
			nextEl: '.slider-intro .slider-arrows__arrow_next',
			prevEl: '.slider-intro .slider-arrows__arrow_prev',
		},
		on: {
			slideChange: function () {
				let currentSlide = ++this.realIndex;
				sliderIntroCurrent.innerHTML = addZero(currentSlide);
			},
		}
	});
}

let productsSlider;
let productsSliderOptions = {
	spaceBetween: 20,
	speed: 800,
	slidesPerView: 1,
	loop: true,
	breakpoints: {
		700: {
			slidesPerView: 2,
			centeredSlides: false,
		},
		490: {
			slidesPerView: 'auto',
			centeredSlides: true,
		}
	}
};
activateOrDeactivateSlider('.products__items', 992, productsSlider, productsSliderOptions);
window.addEventListener('resize', function () {
	activateOrDeactivateSlider('.products__items', 992, productsSlider, productsSliderOptions);
});




let mainCategoriesSlider;
let mainCategoriesOptions = {
	spaceBetween: 20,
	speed: 800,
	slidesPerView: 1,
	loop: true,
	breakpoints: {
		830: {
			slidesPerView: 2,
			centeredSlides: false,
		},
		490: {
			slidesPerView: 'auto',
			centeredSlides: true,
		}
	}
};
activateOrDeactivateSlider('.categories__items', 991, mainCategoriesSlider, mainCategoriesOptions);
window.addEventListener('resize', function () {
	activateOrDeactivateSlider('.categories__items', 991, mainCategoriesSlider, mainCategoriesOptions);
});

