let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__toggle');
let promoWrapper = document.querySelector('.promo__wrapper');
let photographsWrapper = document.querySelector('.photographs__wrapper');
let competitionWrapper = document.querySelector('.competition__wrapper');
let priceList = document.querySelector('.price__list');
const mediaQuery = window.matchMedia('(max-width: 659px)')

navMain.classList.remove('main-nav--no-js');
navMain.classList.add('main-nav--closed');

navToggle.addEventListener('click', function()  {
  if (navMain.classList.contains('main-nav--closed'))  {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    if (promoWrapper)  {
      promoWrapper.classList.add('promo__wrapper--js');
    }
    if (photographsWrapper)  {
      photographsWrapper.classList.add('photographs__wrapper--js');
    }
    if (competitionWrapper)  {
      competitionWrapper.classList.add('competition__wrapper--js');
    }
  } else  {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
    if (promoWrapper)  {
      promoWrapper.classList.remove('promo__wrapper--js');
    }
    if (photographsWrapper)  {
      photographsWrapper.classList.remove('photographs__wrapper--js');
    }
    if (competitionWrapper)  {
      competitionWrapper.classList.remove('competition__wrapper--js');
    }
  }
});

$(document).ready(function(){
  $('.slider').slick({
      dots: true,
      arrows: false,
      draggable: true,
      speed: 500,
      mobileFirst: true,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            arrows: true,
            dots: false,
          }
        }
      ]
  });
});

$(document).ready(function(){
  $('.price__slider').slick({
      dots: true,
      arrows: false,
      draggable: true,
      speed: 500,
      initialSlide: 1,
      variableWidth: true,
      centerMode: true,
      mobileFirst: true,
      responsive: [
        {
           breakpoint: 660,
           settings: 'unslick'
        }
      ]
  });
  function handleTabletChange(e) {
    if (e.matches) {
      $('.price__slider').slick('slickRemove', 0);
    } else {
      $('.price__slider').slick('slickAdd', 0);
    }
  }

  mediaQuery.addListener(handleTabletChange)
  handleTabletChange(mediaQuery)
});
