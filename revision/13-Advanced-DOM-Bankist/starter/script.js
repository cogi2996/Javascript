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

// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
// console.log(allSections);

const allButtons = document.getElementsByTagName('button');
// console.log(allButtons);

// console.log(document.getElementsByClassName('btn'));

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

//----------------------------------------------------------------
// Styles
// message.style.backgroundColor = '#37383d';
// message.style.width = '120%';
// console.log(message.style.color);
// console.log(message.style.height);
// console.log(getComputedStyle(message).height);

// message.style.height =
//   parseInt(getComputedStyle(message).height,10) + 40 + 'px';
// // message.style.setProperty('background-color','red')

// document.documentElement.style.setProperty('--color-primary','orangered')

// // Attributes
// const logo = document.querySelector('.nav__logo');
// console.log(logo.alt);
// console.log(logo.className);
// logo.alt = 'Beautiful minimalist logo';
// // logo.setAttribute('alt', 'Beautiful minimalist logo');
// // Non-standard
// console.log(logo.designer);
// console.log(logo.getAttribute('designer'));
// console.log('-================================================');

// const link = document.querySelector('.nav__link--btn');
// console.log(link.href);
// console.log(link.getAttribute('href'));

// console.log(link.dataset.versionNumber);

// // Classes
// logo.classList.add('c','j');
// logo.classList.remove('c','j');
// // logo.classList.toggle('c');
// logo.classList.contains('c');

// // overlay class --> Don't use
// /* logo.className = 'jonas'
// console.log(logo.className); */

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);
  console.log(e.target.getBoundingClientRect());
  console.log('Current scrolll (X/Y)', window.pageXOffset, window.pageYOffset);
  console.log(
    'height/width viewport',
    document.documentElement.clientWidth,
    document.documentElement.clientHeight
  );
  // Scrolling
  // window.scrollTo(s1coords.left+window.pageXOffset, s1coords.top+window.pageYOffset)
  /* window.scrollTo({
    left: s1coords.left + window.pageXOffset,
    top: s1coords.top + window.pageYOffset,
    behavior:'smooth'
  }) */
  section1.scrollIntoView({ behavior: 'smooth' });
});

// const h1 = document.querySelector('h1');
// const alertH1 = function (e) {
//   alert('addEventListener: Great! You are reading the heading :D');
//   // h1.removeEventListener('mouseenter',alertH1);
// };
// h1.addEventListener('mouseenter', alertH1);

// /* h1.addEventListener('mouseenter',function(e){
//   alert('hello');
// }) */
// setTimeout(() => {
//   h1.removeEventListener('mouseenter', alertH1);
// }, 3000);

const randomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
// console.log(randomColor());

document.querySelector('.nav__link').addEventListener('click', function (e) {
  console.log('Link',e.target,e.currentTarget);
  this.style.backgroundColor = randomColor();
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  console.log('Link',e.target,e.currentTarget);
  this.style.backgroundColor = randomColor();
  // e.stopPropagation();
  
},true);

document.querySelector('.nav').addEventListener('click',function(e) {
  console.log('Link',e.target,e.currentTarget);
  this.style.backgroundColor = randomColor();
})