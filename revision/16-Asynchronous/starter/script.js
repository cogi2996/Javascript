'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

const renderCountry = function (data, neighbour = '') {
  console.log(data);

  const html = `
  <article class="country ${neighbour} ">
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.common} </h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        data.population / 1000000
      ).toFixed(1)} </p>
      <p class="country__row"><span>🗣️</span>${data.languages.por}</p>
      <p class="country__row"><span>💰</span>${data.currencies.EUR.name}</p>
    </div>
  </article>`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
};
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
const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
};

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

// console.log('Getting position');

// getPosition()
//   .then(pos => console.log(pos))
//   .catch(err => console.err(err));

const getJSON = function (url, message = 'something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${message}  - (${response.status}) `);
    return response.json();
  });
};

// const getCountryDataAndNeighbour = function (country) {
//   getJSON(`https://restcountries.com/v3.1/name/${country}`)
//     .then(data => {
//       console.log(data[0]);

//       renderCountry(data[0]);
//       const neighbour = data[0].borders[0];
//       // const neighbour = false;
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

// const whereAmI = function () {
//   getPosition()
//     .then(pos => {
//       const { latitude, longitude } = pos.coords;
//       console.log(latitude, longitude);
//       // console.log(pos);
//       return fetch(
//         `https://geocode.xyz/${latitude},${longitude}?geoit=json&auth=121713347530917140919x56266`
//       );
//     })
//     .then(response => {
//       if (!response.ok)
//         throw new Error(`can not get country - ${response.status} `);
//       return response.json();
//     })
//     .then(data => {
//       console.log(data);
//       return renderCountry(data.country);
//     })
//     .catch(err => {
//       console.log(`something went wrong - ${err}`);
//       alert(`something went wrong ${err}`);
//     });
// };

// // whereAmI(52.508, 13.381);
// btn.addEventListener('click', whereAmI);

// btn.addEventListener('click', function (e) {
//   getCountryDataAndNeighbour('portugal');
// });

// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };
// const imgContainer = document.querySelector('.images');
// const createImage = function (imgPath) {
//   return new Promise(function (resolve, reject) {
//     const img = document.createElement('img');
//     img.src = imgPath;
//     img.addEventListener('load', function () {
//       imgContainer.appendChild(img);
//       resolve(img);
//     });

//     img.addEventListener('error', function () {
//       reject(new Error('Image not found'));
//     });
//   });
// };

// let currentImg;

// createImage('img/img-1.jpg')
//   .then(img => {
//     currentImg = img;
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('img/img-2.jpg');
//   })
//   .then(img => {
//     currentImg = img;
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//   })
//   .catch(function (err) {
//     console.error(`Something went wrong - ${err}`);
//   });

const getPosition = function () {
  // return new Promise(function (resolve, reject) {
  //   navigator.geolocation.getCurrentPosition(resolve(position), reject(err));
  // });
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};
const whereAmI = async function (country = null) {
  try {
    // Geolocation
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;

    //Reverse geocoding
    const resGeo = await fetch(
      `https://geocode.xyz/${lat},${lng}?geoit=json&auth=121713347530917140919x56266`
    );
    if (!resGeo.ok) throw new Error('Problem getting location data');
    const dataGeo = await resGeo.json();
    console.log(dataGeo);
    country || (country = dataGeo.country);
    const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
    if (!res.ok) throw new Error('Problem getting country');
    const data = await res.json();
    countriesContainer.style.opacity = 1;
    renderCountry(data[0]);
    // return promise with fulfilled status
    return data[0];
  } catch (error) {
    console.error(error);
    renderError(error);
    // return promise with rejected status
    throw error;
  }
};

// whereAmI('portugal');
// whereAmI();

// whereAmI()
//   .then(data => {
//     // handles data when success
//   })
//   .catch(err => {
//     // hangles data when error
//   })
//   .finally
//   //
//   ();
// console.log('FIRST');

// try {
//   let y = 1;
//   const x = 1;
//   x = 2;
// } catch (e) {
//   alert(e.message);
// }

// IIFEE
// (async function () {
//   try {
//     const city = await whereAmI();
//   } catch (error) {
//     console.error(error);
//   }
//   // finally
//   console.log('done');
// })();

// 022. running Promises in Paralle

// const get3Countries = async function (c1, c2, c3) {
//   try {
//     // const [data1] = await getJSON(`https://restcountries.com/v3.1/name/${c1}`);
//     // const [data2] = await getJSON(`https://restcountries.com/v3.1/name/${c2}`);
//     // const [data3] = await getJSON(`https://restcountries.com/v3.1/name/${c3}`);
//     const data = await Promise.all([
//       getJSON(`https://restcountries.com/v3.1/name/${c1}`),
//       getJSON(`https://restcountries.com/v3.1/name/${c2}`),
//       getJSON(`https://restcountries.com/v3.1/name/${c3}`),
//     ]);
//     console.log(data.map(([d]) => d.capital));

//     // console.log(data1.capital, data2.capital, data3.capital);
//   } catch (error) {
//     console.log(error);
//   }
// };

// const get3Countries = async function (c1, c2, c3) {
//   try {
//     const data = await Promise.all([
//       getJSON(`https://restcountries.com/v3.1/name/${c1}`),
//       getJSON(`https://restcountries.com/v3.1/name/${c2}`),
//       getJSON(`https://restcountries.com/v3.1/name/${c3}`),
//     ]);
//     console.log(data.map(([d]) => d.capital));
//   } catch (error) {
//     console.log(error);
//   }
// };

// get3Countries('portugal', 'canada', 'tanzania');

// 023 Other Promise combinator race, allsettled and any
// (async function () {
//   const res = await Promise.race([
//     getJSON(`https://restcountries.com/v3.1/name/italy`),
//     getJSON(`https://restcountries.com/v3.1/name/egypt`),
//     getJSON(`https://restcountries.com/v3.1/name/mexico`),
//   ]);
//   console.log(res[0]);
// })();

// const timeout = function (sec) {
//   return new Promise((_, reject) => {
//     setTimeout(function () {
//       reject(new Error(`Request took too long!`));
//     }, sec * 1000);
//   });
// };

// Promise.race([
//   getJSON(`https://restcountries.com/v3.1/name/italy`),
//   timeout(0.1),
// ])
//   .then(res => console.log(res[0]))
//   .catch(err => console.error(err));

const timeout = function (second) {
  return new Promise((_, reject) => {
    setTimeout(reject.bind(_, 'request time out'), second * 1000);
  });
};

// Promise.race([
//   getJSON(`https://restcountries.com/v3.1/name/italy`),
//   timeout(0.2),
// ])
//   .then(([res]) => {
//     console.log(res.capital);
//   })
//   .catch(err => {
//     console.error(err);
//   });
// Promise.allSettled([
//   Promise.resolve('success'),
//   Promise.reject('ERROR'),
//   Promise.resolve('success'),
// ])
//   .then(res => console.log(res))
//   .catch(err => console.error(err));

// Promise.allSettled([
//   Promise.resolve('success1'),
//   Promise.reject('error unknown'),
//   Promise.resolve('success2'),
// ])
//   .then(res => {
//     console.log(res);
//   })
//   .catch(err => console.error(err));

// Promise.all([
//   Promise.resolve('success'),
//   Promise.reject('ERROR'),
//   Promise.resolve('success'),
// ])
//   .then(res => console.log(res))
//   .catch(err => console.error(err));

// Promise.any([
//   Promise.reject('ERROR'),
//   Promise.resolve('success'),
//   Promise.resolve('success1'),
// ])

// Promise.any([
//   Promise.resolve('success3'),
//   Promise.reject('ERROR'),
//   Promise.resolve('success2'),
// ]).then(res => {
//   console.log(res);
// });
//   .then(res => console.log(res))
//   .catch(err => console.error(err));

// Promise.all([
//   Promise.resolve('success1'),
//   Promise.resolve('success2'),
//   Promise.resolve('success3'),
// ]).then(res => {
//   console.log(res);
// });

// dùng trong IFEEE

//   async function () {
//     const data = await Promise.all([
//       Promise.resolve('success1'),
//       Promise.resolve('success2'),
//       Promise.resolve('success3'),
//     ]);
//     console.log(data);
//   }
// )();

// coding challence #3

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const imgContainer = document.querySelector('.images');
const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;
    img.addEventListener('load', function () {
      imgContainer.appendChild(img);
      resolve(img);
    });

    img.addEventListener('error', function () {
      reject(new Error('Image not found'));
    });
  });
};

const loadNPause = async function () {
  try {
    let img = await createImage('img/img-1.jpg');
    await wait(2);
    img.style.display = 'none';
    img = await createImage('img/img-2.jpg');
    await wait(2);
    img.style.display = 'none';
  } catch (error) {
    console.error(error);
  }
};
// loadNPause();

const loadAll = async function (imgArr) {
  let imgs = imgArr.map(async function (img) {
    return await createImage(img);
  });
  const imgsEl = Promise.all(imgs);
  console.log(await imgsEl);
};

loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);
