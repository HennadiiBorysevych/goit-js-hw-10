import './css/styles.css';
const debounce = require('debounce');
import fetchCountries from './js/fetch';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {
  handleCountriesMarkUpList,
  handlechosenCountryInfo,
} from './js/countries-templates';

const DEBOUNCE_DELAY = 300;
const searchCountry = document.querySelector('#search-box');
const countryOptionsList = document.querySelector('.country-list');
const chosenCountryList = document.querySelector('.country-info');

searchCountry.addEventListener(
  'input',
  debounce(matchedCountries, DEBOUNCE_DELAY)
);

function matchedCountries(e) {
  const inputName = e.target.value;
  if (!inputName) return;

  fetchCountries(inputName.trim())
    .then(country => {
      if (country.length === 1) {
        chosenCountryList.innerHTML = handlechosenCountryInfo(country);
        countryOptionsList.innerHTML = '';
      }
      if (country.length <= 10 && country.length >= 2) {
        countryOptionsList.innerHTML = handleCountriesMarkUpList(country);
        chosenCountryList.innerHTML = '';
      }
      if (country.length >= 10) {
        Notify.info(
          'Too many matches found. Please enter a more specific name.'
        );
      }
    })
    .catch(error => {
      console.log(error);
    });
}
