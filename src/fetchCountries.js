import { allcountriesLengthEqualToOne } from './allcountriesLengthEqualToOne';
import { allcountriesLengthEqualFromTwoToTen } from './allcountriesLengthEqualFromTwoToTen';
import { allcountriesLengthMoreThenTen } from './allcountriesLengthMoreThenTen';
import { allcountriesStatusIsEqualTo404 } from './allcountriesStatusIsEqualTo404';
const REST_COUNTRIES = `https://restcountries.com/v3.1/name/`;
const searchParams = new URLSearchParams({
  fields: 'name,capital,population,flags,languages',
});
export function fetchCountries(name) {
  return fetch(
    `${REST_COUNTRIES}${name}?${searchParams}`
  )
    .then(response => {
      console.log(response);
      return response.json();
    })
    .then(allcountries => {
      console.log(allcountries);
      if (allcountries.length === 1) allcountriesLengthEqualToOne(allcountries);
      if (allcountries.length >= 2 && allcountries.length <= 10) allcountriesLengthEqualFromTwoToTen(allcountries);
      if (allcountries.length > 10) allcountriesLengthMoreThenTen();
      if (allcountries.status === 404) allcountriesStatusIsEqualTo404();
    });
}
