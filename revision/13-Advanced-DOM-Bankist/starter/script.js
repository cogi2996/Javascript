'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);

const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));

// Creating and inserting elements
const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML =
  'We use cookied for improved functionality and analytics. <button class ="btn btn--close-cookie"> Got it!</button>';
header.prepend(message);
// header.append(message.cloneNode(true));
header.append(message);

// Delete elements
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
    // message.parentElement.removeChild(message);
  });

// Styles
message.style.backgroundColor = '#37383d';
message.style.width = '120%';
console.log(message.style.color);
console.log(message.style.height);
console.log(getComputedStyle(message).height);


message.style.height =
  parseInt(getComputedStyle(message).height,10) + 40 + 'px';
// message.style.setProperty('background-color','red')

document.documentElement.style.setProperty('--color-primary','orangered')

// Attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.className);
logo.alt = 'Beautiful minimalist logo';
// logo.setAttribute('alt', 'Beautiful minimalist logo');
// Non-standard
console.log(logo.designer);
console.log(logo.getAttribute('designer'));
console.log('-================================================');

const link = document.querySelector('.nav__link--btn');
console.log(link.href);
console.log(link.getAttribute('href'));


console.log(link.dataset.versionNumber);

// Classes
logo.classList.add('c','j');
logo.classList.remove('c','j');
// logo.classList.toggle('c');
logo.classList.contains('c');

// overlay class --> Don't use
/* logo.className = 'jonas'
console.log(logo.className); */

logo.setAttribute('hihi','hoho')


