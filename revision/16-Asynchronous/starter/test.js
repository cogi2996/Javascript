'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
//https://restcountries.com/v3.1/name/${country}
//https://restcountries.com/v3.1/alpha/${neighbour}

const renderCountry = function (data, neighbour = '') {
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
// const getCountryDataAndNeighBour = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(response => response.json())
//     .then(([data]) => {
//       renderCountry(data);
//       return fetch(`https://restcountries.com/v3.1/alpha/${data.borders[0]}`);
//     })
//     .then(response => response.json())
//     .then(([data]) => renderCountry(data, 'neighbour'));
// };

// getCountryDataAndNeighBour('portugal');

// const renderError = function (msg) {
//   countriesContainer.insertAdjacentText('beforeend', msg);
// };

const getCountryDataAndNeighBour = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => {
      if (!response.ok)
        throw new Error(`Something went wrong - ${response.status}  `);
      return response.json();
    })
    .then(([data]) => {
      renderCountry(data);
      if (!data.borders[0]) throw new Error('Could not found neighbour');
      const neighbour = data.borders[0];
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then(response => {
      if (!response.ok)
        throw new Error(`Could not found neighbour - ${response.status} `);
      return response.json();
    })
    .then(([data, ...other]) => {
      console.log(data);
      renderCountry(data, 'neighbour');
    })
    .catch(err => {
      console.log(`Something went wrong - ${err} `);
      renderError(`Something went wrong ${err} `);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

// btn.addEventListener('click', function () {
//   getCountryDataAndNeighBour('portugal');
// });

const whereAmI = function (lat, lng) {
  fetch(
    `https://geocode.xyz/${lat},${lng}?geoit=json&auth=121713347530917140919x56266`
  )
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

whereAmI(52.508, 13.381);
