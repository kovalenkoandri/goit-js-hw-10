import './css/styles.css';
import {fetchCountries} from './fetchCountries.js';
const input = document.querySelector('input[id="search-box"]');
const DEBOUNCE_DELAY = 300;
let log = '';
input.addEventListener('input', event => {
  // event.preventDefault();
  // console.log((/[a-zA-Z]/).test(event.key));
  // if (event.key >= 'A' && event.key <= 'z' && event.key !== 'Backspace') {
    // log += event.key;
    fetchCountries(event.currentTarget.value);
    // fetchCountries(log.trim());
  // }
});
