'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
const allButtons = document.getElementsByTagName('button');
const message = document.createElement('div');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
const nav = document.querySelector('.nav');

///////////////////////////////////////
// Modal window

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

message.classList.add('cookie-message');
message.innerHTML =
  'We use cookied for improved functionality and analytics. <button class ="btn btn--close-cookie"> Got it!</button>';
// header.prepend(message);
// header.append(message.cloneNode(true));
header.append(message);

// Delete elements
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
    // message.parentElement.removeChild(message);
  });

// Button scrolling
btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  section1.scrollIntoView({ behavior: 'smooth' });
  /* console.log(s1coords);
  console.log(e.target.getBoundingClientRect());
  console.log('Current scrolll (X/Y)', window.pageXOffset, window.pageYOffset);
  console.log(
    'height/width viewport',
    document.documentElement.clientWidth,
    document.documentElement.clientHeight
  ); */
  // Scrolling
  // window.scrollTo(s1coords.left+window.pageXOffset, s1coords.top+window.pageYOffset)
  /* window.scrollTo({
      left: s1coords.left + window.pageXOffset,
      top: s1coords.top + window.pageYOffset,
      behavior:'smooth'
    }) */
});
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

// Page navigation
/* document.querySelectorAll('.nav__link').forEach(function(el) {
  el.addEventListener('click', function(e) {
    e.preventDefault();
    // console.log(e.target.getAttribute('href'));
    const id = this.getAttribute('href');
    document.querySelector(id).scrollIntoView({behavior:'smooth'});
    console.log('LINK');
    
  })
}) */

// 1. Add event listener to common parent element
// 2. Determine what element originated the event
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  // Matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

// Tabbed component

// tabs.forEach(t => t.addEventListener('click', () => console.log('Tab')));

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  console.log(clicked);
  // Guard clause
  if (!clicked) return;
  // remove active classes
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));
  // Active tab
  clicked.classList.add('operations__tab--active');
  // Active content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

// Menu fade animation
const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    // console.log(siblings);
    const logo = link.closest('.nav').querySelector('img');
    siblings.forEach(el => {
      if (el != link) {
        el.style.opacity = this;
      }
      logo.style.opacity = this;
    });
  }
};
// Passing "argument" into handlers
nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));
// Sticky navigation
/* const initialCoords = section1.getBoundingClientRect();
window.addEventListener('scroll',function(e) {
  if(window.scrollY > initialCoords.top)
  {
    nav.classList.add('sticky')
  }
  else
  {
    nav.classList.remove('sticky');
  }
}) */
// Sticky navigation: Intersection Observer API
/* const obsCallback = function (entries, observer) {
  entries.forEach( entry => console.log(entry));
};

const obsOptions = {
  root: null,
  threshold: [0.1,0.4],
};

const observer = new IntersectionObserver(obsCallback,obsOptions);
observer.observe(section1); */
/* const navHeight = nav.getBoundingClientRect().height;
const stickyNav = function (entries) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) {
    nav.classList.add('sticky');
  }
  else
  {
    nav.classList.remove('sticky');
  }
};
const headerObserve = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`
});
headerObserve.observe(header); */
const navHeight = nav.getBoundingClientRect().height;
const stickyNav = function([entries]) {
  console.log(entries);
  if(!entries.isIntersecting){
    nav.classList.add('sticky');
  }
  else{
    nav.classList.remove('sticky');
  }
    
}
const headerObserve =  new IntersectionObserver(stickyNav, {root: null,threshold: 0,rootMargin:`-${navHeight}px`});
headerObserve.observe(header);

// Lazy loading images
/* const imgTarget = document.querySelectorAll('img[data-src]');
console.log(imgTarget);

const loadImg = function(entries,observer){
  const [entry] = entries;
  console.log(entry);
  
}

const imgObserver = new IntersectionObserver(loadImg, {root: null,threshold:0})
imgTarget.forEach(img => imgObserver.observe(img));
 */

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
//----------------------------------------------------------------
//----------------------------------------------------------------
//----------------------------------------------------------------
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
/* const randomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
// console.log(randomColor());
document.querySelector('.nav__link').addEventListener('click', function (e) {
  console.log('Link', e.target, e.currentTarget);
  this.style.backgroundColor = randomColor();
});
document.querySelector('.nav__links').addEventListener(
  'click',
  function (e) {
    console.log('Link', e.target, e.currentTarget);
    this.style.backgroundColor = randomColor();
    // e.stopPropagation();
  },
  true
);
document.querySelector('.nav').addEventListener('click', function (e) {
  console.log('Link', e.target, e.currentTarget);
  this.style.backgroundColor = randomColor();
}); */

// const h1 = document.querySelector('h1');

// Going downwards: child
/* console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
console.log(h1.children);
h1.firstElementChild.style.color = 'white'
h1.lastElementChild.style.color = 'orange' */

// Going upwards: parents
/* console.log(h1.parentNode);
console.log(h1.parentElement);
console.log(document.documentElement.parentNode);
console.log(document.documentElement.parentElement);

h1.closest('.header').style.background = 'var(--gradient-secondary)'
h1.closest('h1').style.background = 'var(--gradient-primary)'

// Going sideways: siblings 
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);
console.log(h1.parentElement.children);

[...h1.parentElement.children].forEach(function(el){
  if(el != h1)
    el.style.transform = 'scale(0.5)';
}) */
