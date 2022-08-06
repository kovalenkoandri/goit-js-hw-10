import { refs } from './refs.js';
export function allcountriesLengthEqualToOne(allcountries) {
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
