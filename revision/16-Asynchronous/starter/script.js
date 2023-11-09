'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

// const renderCountry = function (data, neighbour = '') {
//   const html = `
//   <article class="country ${neighbour} ">
//     <img class="country__img" src="${data.flags.png}" />
//     <div class="country__data">
//       <h3 class="country__name">${data.name.common} </h3>
//       <h4 class="country__region">${data.region}</h4>
//       <p class="country__row"><span>👫</span>${(
//         data.population / 1000000
//       ).toFixed(1)} </p>
//       <p class="country__row"><span>🗣️</span>${data.languages.por}</p>
//       <p class="country__row"><span>💰</span>${data.currencies.EUR.name}</p>
//     </div>
//   </article>`;
//   countriesContainer.insertAdjacentHTML('beforeend', html);
// };
// const getCountryAndNeighboor = function (country) {
//   // Ajax country 1
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);

//   request.send();
//   request.addEventListener('load', function () {
//     // console.log(this.responseText);
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//     // render coutnry 1
//     renderCountry(data);

//     // get neightboor coutry
//     const [neightboor] = data.borders;
//     if (!neightboor) {
//       return;
//     }
//     // Ajax country 1
//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.com/v3.1/alpha/${neightboor}`);
//     request2.send();
//     request2.addEventListener('load', function () {
//       const [data2] = JSON.parse(this.responseText);
//       renderCountry(data2, 'neighbour');
//     });
//   });
// };

// // getCountryAndNeighboor('portugal');
// // getCountryData('germany');
// // getCountryData('usa');

// // setTimeout(function () {
// //   console.log('1 second passed');
// //   setTimeout(function () {
// //     console.log('2 second passed');
// //     setTimeout(function () {
// //       console.log('3 second passed');
// //       setTimeout(function () {
// //         console.log('4 second passed');
// //       }, 1000);
// //     }, 1000);
// //   }, 1000);
// // }, 1000);

// // const request = fetch(`https://restcountries.com/v3.1/name/portugal`);

// // console.log(request);

// // const getCountryData = function (country) {
// //   fetch(`https://restcountries.com/v3.1/name/${country}`)
// //     .then(function (response) {
// //       console.log(response);
// //       return response.json();
// //     })
// //     .then(function (data) {
// //       console.log(data);
// //       renderCountry(data[0]);
// //       const neighbour = data[0].borders[0];
// //       console.log(neighbour);

// //       if (!neighbour) return;

// //       // country 2
// //       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
// //     })
// //     .then(response => response.json())
// //     .then(data => renderCountry(data[0], 'neighbour'));
// // };

// // getCountryData('germany');
// const renderError = function (msg) {
//   countriesContainer.insertAdjacentText('beforeend', msg);
// };

// const getJSON = function (url, message = 'something went wrong') {
//   return fetch(url).then(response => {
//     if (!response.ok) throw new Error(`${message}  - (${response.status}) `);
//     return response.json();
//   });
// };

// const getCountryDataAndNeighbour = function (country) {
//   getJSON(`https://restcountries.com/v3.1/name/${country}`)
//     .then(data => {
//       console.log(data[0]);

//       renderCountry(data[0]);
//       // const neighbour = data[0].borders[0];
//       const neighbour = false;
//       if (!neighbour) throw new Error(`Could not found neighbour`);
//       return getJSON(
//         `https://restcountries.com/v3.1/alpha/${neighbour}`,
//         'Could not found'
//       );
//     })
//     .then(data => renderCountry(data[0], 'neighbour'))
//     .catch(err => {
//       console.log(`Something went wrong - ${err} 💣💣💣 `);
//       renderError(`something went wrong ${err.message} `);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// btn.addEventListener('click', function (e) {
//   getCountryDataAndNeighbour('portugal');
// });

// console.log('Test start');
// setTimeout(() => console.log('0 sec timer'), 0);
// Promise.resolve('Resolved promise 1').then(res => {
//   console.log(res);
// });
// Promise.resolve('Resolved promise 2').then(res => {
//   for (let i = 0; i < 10000000000; i++) {}
//   console.log(res);
// });
// console.log('Test end');

// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log('Lotter draw is happening');

//   setTimeout(function () {
//     if (Math.random() >= 0.5) {
//       resolve('You Win');
//     } else {
//       reject(new Error('You lose your money'));
//     }
//   }, 2000);
// });
//
// lotteryPromise.then(res => console.log(res)).catch(err => console.log(err));
// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };
// let i = 0;
// wait(i)
//   .then(() => {
//     console.log(`I waited for ${i}  seconds`);
//     return wait(++i);
//   })
//   .then(() => {
//     console.log(`I waited for ${i}  seconds`);
//     return wait(++i);
//   })
//   .then(() => {
//     console.log(`I waited for ${i}  seconds`);
//     return wait(++i);
//   });

// Promise.resolve('fullfill promise').then(res => console.log(res));
// Promise.reject(new Error('rejected promise')).catch(err => console.log(err));

// Promise.resolve("it's data").then(res => console.log(res));
// const promise = new Promise(function (resolve, reject) {
//   resolve("it's data");
// });
// promise.then(res => console.log(res));
// navigator.geolocation.getCurrentPosition(
//   position => console.log(position),
//   err => console.err(err)
// );

console.log('Getting position');

const getPosition = function () {
  // return new Promise(function (resolve, reject) {
  //   navigator.geolocation.getCurrentPosition(resolve(position), reject(err));
  // });
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

// getPosition()
//   .then(pos => console.log(pos))
//   .catch(err => console.err(err));

const whereAmI = function () {
  getPosition()
    .then(pos => {
      const { latitude, longitude } = pos.coords;
      console.log(latitude, longitude);
      // console.log(pos);
      return fetch(
        `https://geocode.xyz/${latitude},${longitude}?geoit=json&auth=121713347530917140919x56266`
      );
    })
    .then(response => {
      if (!response.ok)
        throw new Error(`can not get country - ${response.status} `);
      return response.json();
    })
    .then(data => {
      console.log(`You are in ${data.state},${data.country}`);
      console.log(data);
      return getCountryDataAndNeighBour(data.country);
    })

    .catch(err => {
      console.log(`something went wrong - ${err}`);
      alert(`something went wrong ${err}`);
    });
};

// whereAmI(52.508, 13.381);
btn.addEventListener('click', whereAmI);
