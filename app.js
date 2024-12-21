// // Инициализация Swiper
const swiper = new Swiper('.swiper', {
    // Параметры
    loop: true,
    slidesToShow: 5,
    slidesToScroll: 1,
   
    infinite: false,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    spaceBetween: 5,
    slidesPerView: 5,
    breakpoints: {
        // Когда ширина окна <= 768px

        1980: {
            slidesPerView: 5,
            spaceBetween: 5
        },
        1240: {
            slidesPerView: 5,
            spaceBetween: 5
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 5,
            centeredSlides:true,
        },
        // Когда ширина окна <= 576px
        576: {
            slidesPerView: 2,
            spaceBetween: 5
        },
        414: {
            slidesPerView: 2,
            spaceBetween: 5
        }
    },
 
});
// // Инициализация Swiper
// // $(document).ready(function() {
// //     $('.slider').slick({
// //       slidesToShow: 5,
// //       slidesToScroll: 1,
// //       arrows: true,
// //       infinite: false,
// //       responsive: [
// //         {
// //           breakpoint: 1024,
// //           settings: {
// //             slidesToShow: 3,
// //             slidesToScroll: 3,
// //             infinite: true,
// //             dots: true
// //           }
// //         },
// //         {
// //           breakpoint: 600,
// //           settings: {
// //             slidesToShow: 2,
// //             slidesToScroll: 2
// //           }
// //         },
// //         {
// //           breakpoint: 480,
// //           settings: {
// //             slidesToShow: 1,
// //             slidesToScroll: 1
// //           }
// //         }
// //       ]
// //     });
// //   });
   //Настройки по выводу слайдов в зависимости от разрешения экрана
   

  // $(document).ready(function(){
  //   $('.multiple-items').slick({
  //       infinite: true,
  //       slidesToShow: 3,
  //       slidesToScroll: 3
  //     });
  // });

let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}


const menuBtn = document.querySelector('.menuBtn');
const header__listMobile = document.querySelector('.header__list--mobile');
const header__logo = document.querySelector('.header__logo');

menuBtn.addEventListener('click', function(){
  header__listMobile.classList.toggle('hidden');
  menuBtn.classList.toggle('close');
  header__logo.classList.toggle('header__logo--hidden')

})