let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__toggle');
let sloganWrapper = document.querySelector('.slogan__wrapper');
let photographsWrapper = document.querySelector('.photographs__wrapper');
let competitionWrapper = document.querySelector('.competition__wrapper');
let priceList = document.querySelector('.price__list');
const mediaQuery = window.matchMedia('(max-width: 659px)');
let popupFailure = document.querySelector('.popup--failure');
let popupSuccess = document.querySelector('.popup--success');
const form = document.querySelector('.form');
let submit = document.querySelector('.form__button');
let lastName = document.getElementById('last-name');
let firstName = document.getElementById('name');
let mail = document.getElementById('mail');
let okButton = document.querySelectorAll('.popup__button');

navMain.classList.remove('main-nav--no-js');
navMain.classList.add('main-nav--closed');

navToggle.addEventListener('click', function()  {
  if (navMain.classList.contains('main-nav--closed'))  {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

navToggle.addEventListener('click', function()  {
  if (navMain.classList.contains('main-nav--opened'))  {
    if (sloganWrapper)  {
      sloganWrapper.classList.add('slogan__wrapper--js');
    }
    if (photographsWrapper)  {
      photographsWrapper.classList.add('photographs__wrapper--js');
    }
    if (competitionWrapper)  {
      competitionWrapper.classList.add('competition__wrapper--js');
    }
  } else {
    if (sloganWrapper)  {
      sloganWrapper.classList.remove('slogan__wrapper--js');
    }
    if (photographsWrapper)  {
      photographsWrapper.classList.remove('photographs__wrapper--js');
    }
    if (competitionWrapper)  {
      competitionWrapper.classList.remove('competition__wrapper--js');
    }
  }
});

if (form)  {
  form.onsubmit = function(evt)  {
    evt.preventDefault();
    if (!(firstName.value && !!lastName.value && !!mail.value)) {
      popupFailure.classList.add('popup--show');
    } else  {
      popupSuccess.classList.add('popup--show');
    }
  };

  okButton.forEach(item =>  {
    item.addEventListener('click', function()  {
        popupFailure.classList.remove('popup--show');
        popupSuccess.classList.remove('popup--show');
    });
  });
}

$(document).ready(function() {
  $('.slider').slick( {
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

$(document).ready(function() {
  $('.price__slider').slick( {
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
