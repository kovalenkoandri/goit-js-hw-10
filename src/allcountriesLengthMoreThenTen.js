import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { refs } from './refs.js';
export function allcountriesLengthMoreThenTen() {
  refs.countryList.innerHTML = '';
  Notify.info('Too many matches found. Please enter a more specific name.');
}
