import { refs } from './refs.js';
const REST_COUNTRIES = `https://restcountries.com/v3.1/name/`;
const searchParams = new URLSearchParams({
  fields: 'name,capital,population,flags,languages',
});
export function fetchCountries(name) {
  return fetch(
    `${REST_COUNTRIES}${name}?${searchParams}`
    // `https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`
  )
    .then(response => response.json())
    .then(allcountries => {
      if (allcountries.length === 1) {
        refs.countryList.remove();
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
      else if (allcountries.length >= 2 && allcountries.length <= 10) {
        console.log(allcountries);
        refs.countryFlagThumb.appendChild(refs.countryFlag);
        refs.countryFlag.src = allcountries[0].flags.svg;
         refs.countryList.append(refs.countryFlagThumb);
      }
    });
}
