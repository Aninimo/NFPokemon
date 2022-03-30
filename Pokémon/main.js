const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click',()=>{
      navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
   navClose.addEventListener('click',() =>{
    navMenu.classList.remove('show-menu')
  })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*=~=~=~=~=~ SWIPER =~=~=~=~=~*/
var swiper = new Swiper(".mySwiper",{
     slidesPerView: 2,
     spaceBetween: 15,
   });
   
/*=~=~=~=~=~ Circle =~=~=~=~=~*/
function imgSlider(anything){
  document.querySelector('.pokemon-collection').src = anything
}

function changeCircleColor(color){
  const circle = document.querySelector('.circle')
  circle.style.background = color
}

///////// SCROLLREVEAL /////////
ScrollReveal().reveal('.container-home,.imab,.box-footer,.card-benefits', { delay: 500 , reset: true})

var slideLeft = {
    distance: '150%',
    origin: 'left',
    reset: true,
    opacity: null
};

ScrollReveal().reveal('.card-about', slideLeft);

ScrollReveal().reveal('.subtitle-about', { delay: 600, reset: true });

