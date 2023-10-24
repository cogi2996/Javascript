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
  countriesContainer.style.opacity = 1;
};
const getCountryDataAndNeighBour = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => response.json())
    .then(([data]) => {
      renderCountry(data);
      return fetch(`https://restcountries.com/v3.1/alpha/${data.borders[0]}`);
    })
    .then(response => response.json())
    .then(([data]) => renderCountry(data, 'neighbour'));
};

getCountryDataAndNeighBour('portugal');
