import './css/styles.css';
import { fetchCountries } from './fetchCountries.js';
import { refs } from './refs';
import { allcountriesLengthEqualToOne } from './allcountriesLengthEqualToOne';
import { allcountriesLengthEqualFromTwoToTen } from './allcountriesLengthEqualFromTwoToTen';
import { allcountriesLengthMoreThenTen } from './allcountriesLengthMoreThenTen';
import { allcountriesStatusIsEqualTo404 } from './allcountriesStatusIsEqualTo404';
var debounce = require('lodash.debounce');
const input = document.querySelector('input[id="search-box"]');
const DEBOUNCE_DELAY = 300;
input.addEventListener(
  'input',
  debounce(() => {
    if (input.value === '') {
      refs.countryList.innerHTML = '';
      refs.countryInfo.innerHTML = '';
      return;
    }
    fetchCountries(input.value.trim())
      .then(allcountries => {
        console.log(allcountries);
          if (allcountries.length === 1)
            allcountriesLengthEqualToOne(allcountries);
          if (allcountries.length >= 2 && allcountries.length <= 10)
            allcountriesLengthEqualFromTwoToTen(allcountries);
          if (allcountries.length > 10) allcountriesLengthMoreThenTen();
      })
      .catch(error => {
        allcountriesStatusIsEqualTo404();
        console.log('Error: ', error);
      });
  }, DEBOUNCE_DELAY)
);
