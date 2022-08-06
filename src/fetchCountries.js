import { refs } from './refs.js';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
const REST_COUNTRIES = `https://restcountries.com/v3.1/name/`;
const searchParams = new URLSearchParams({
  fields: 'name,capital,population,flags,languages',
});
export function fetchCountries(name) {
  return fetch(
    `${REST_COUNTRIES}${name}?${searchParams}`
    // `https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`
  )
    .then(response => {
      console.log(response);
      return response.json();
    })
    .then(allcountries => {
      console.log(allcountries);
      if (allcountries.length === 1) {
        refs.countryList.innerHTML = '';
        refs.countryFlagThumb.appendChild(refs.countryFlag);
        refs.countryFlag.src = allcountries[0].flags.svg;
        refs.countryName.innerText = allcountries[0].name.official;
        refs.countryCapital.innerText = `Capital: `;
        refs.countryCapitalValue.innerText = allcountries[0].capital;
        refs.countryPopulation.innerText = `Population: `;
        refs.countryPopulationValue.innerText = allcountries[0].population;
        refs.countryLanguages.innerText = `Languages: `;
        refs.countryLanguagesValue.innerText = Object.values(
          allcountries[0].languages
        )
          .reduce((acum, value) => (acum += value + ', '), [])
          .replace(/, $/, '');
        refs.countryInfo.append(
          refs.countryFlagThumb,
          refs.countryName,
          refs.countryNameBr,
          refs.countryCapital,
          refs.countryCapitalValue,
          refs.countryCapitalValueBr,
          refs.countryPopulation,
          refs.countryPopulationValue,
          refs.countryPopulationValueBr,
          refs.countryLanguages,
          refs.countryLanguagesValue
        );
      }
      if (allcountries.length >= 2 && allcountries.length <= 10) {
        refs.countryInfo.innerHTML = '';
        refs.countryList.style = `
                margin: 0;
                padding: 0;`;
        refs.countryList.insertAdjacentHTML(
          'afterbegin',
          allcountries
            .map(
              element =>
                `<div style="
                ">
                <img style="
                vertical-align: top;
                display: inline-block;
                object-fit: contain;
                margin-right: 5px;
                width: 25px;
                height: 25px;
                object-fit: contain;"
                src="${element.flags.svg}" 
                alt="${element.name.official}"><span>${element.name.official}</span></div>`
            )
            .join('')
        );
      }
      if (allcountries.length > 10) {
        refs.countryList.innerHTML = '';
        Notify.info(
          'Too many matches found. Please enter a more specific name.'
        );
      }
      if (allcountries.status === 404) {
        Notify.info('Oops, there is no country with that name');
      }
    });
}
