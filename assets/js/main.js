// MENU
const menuBtn = document.querySelector('.menu-button');
const menuWrapper = document.querySelector('.menu-wrapper');
const nav = document.querySelector('.navigation');
let isMenuOpened = false;

function openMenu() {
    menuBtn.classList.add('open');
    menuWrapper.classList.add('open');
    isMenuOpened = true;
}

function closeMenu() {
    menuBtn.classList.remove('open');
    menuWrapper.classList.remove('open');
    isMenuOpened = false;
}

menuBtn.addEventListener('click', () => {
    if (!isMenuOpened) {
        openMenu();
    } else {
        closeMenu();
    }
})

menuWrapper.addEventListener('click', () => {
    if (isMenuOpened) {
        closeMenu();
    } 
})

nav.addEventListener('click', (e) => {
    e.stopPropagation();
})

// NAVIGATION
function scrollToElem(elem) {
    document.querySelector(elem).scrollIntoView({behavior:"smooth"});
}

// PERCENT COUNTDOWN
(function(){
    let counter = document.querySelectorAll('.counter');
    let limit = 0;
    window.addEventListener('scroll', function(){  
      if( limit == counter.length ){ return; }
      for(let i = 0; i < counter.length; i++){
        let pos = counter[i].getBoundingClientRect().top;
        let win = window.innerHeight - 90;
        if( pos < win && counter[i].dataset.stop === "0" ){
          counter[i].dataset.stop = 1;
          let x = 0;
          limit++;
          let int = setInterval(function(){
            x = x + Math.ceil( counter[i].dataset.to / 50 ); 
            counter[i].innerText = x;
            if( x > counter[i].dataset.to ){
              counter[i].innerText = counter[i].dataset.to;
              clearInterval(int);
            }
          }, 60);
        }
      }
    });
})();

// CURRENT YEAR
document.querySelector('.year').innerHTML = new Date().getFullYear();

// FORM SUBMISSION
let nameValue = document.querySelector('.name');
let lastnameValue = document.querySelector('.lastname');
let emailValue = document.querySelector('.email');
let phoneValue = document.querySelector('.phone');
let requiredFields = document.querySelectorAll('.required-fields');

const formSubmission = () => {
    if (nameValue.value != '' && lastnameValue.value != '' && emailValue.value != '' && phoneValue.value != '') {
        window.location.href = 'thankyou.html';
    } else {
        requiredFields.forEach((e) => {
            e.classList.add('visible');
        })
    }
}

const inputFields = document.querySelectorAll('.name, .lastname, .email, .phone');
for (let inputItem of inputFields) {
    inputItem.addEventListener('focus', function() {
        requiredFields.forEach((e) => {
            if (e.classList.contains('visible')) {
                e.classList.remove('visible');
            }
        })
    });
}
