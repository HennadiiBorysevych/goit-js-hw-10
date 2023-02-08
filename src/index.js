import './css/styles.css';
const debounce = require('debounce');
// import countriesMarkUp from './';
import fetchCountries from './fetch';
const DEBOUNCE_DELAY = 300;
const searchCountry = document.querySelector('#search-box');

searchCountry.addEventListener(
  'input',
  debounce(matchedCountries, DEBOUNCE_DELAY)
);

function matchedCountries(e) {
  const inputName = e.target.value;

  fetchCountries(inputName)
    .then(country => console.log(country))
    .catch(error => console.log(error));
}
