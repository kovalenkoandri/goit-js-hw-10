import './css/styles.css';
import { fetchCountries } from './fetchCountries.js';

var debounce = require('lodash.debounce');
const input = document.querySelector('input[id="search-box"]');
const DEBOUNCE_DELAY = 300;
input.addEventListener('input', debounce(() => {
    if (input.value === '') return;
    fetchCountries(input.value.trim());
},300));
