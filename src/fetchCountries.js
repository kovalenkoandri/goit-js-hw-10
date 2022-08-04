const REST_COUNTRIES = `https://restcountries.com/v3.1/name/`;
const searchParams = new URLSearchParams({
  fields: 'name,capital,population,flags,languages',
});
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');
export function fetchCountries(name) {
  return fetch(
    `${REST_COUNTRIES}${name}?${searchParams}`
    // `https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`
  )
    .then(response => response.json())
    .then(allcountries => {
      if (allcountries.length === 1) {
        const countryFlagThumb = document.createElement('div');
        const countryFlag = document.createElement('img');
        const countryName = document.createElement('h2');
        countryFlagThumb.appendChild(countryFlag);
        countryName.innerText = allcountries[0].name.official;
        countryFlag.src = allcountries[0].flags.svg;
        countryName.style.cssText = `
        display: inline-block;
        margin-left: 10px;
        `;
        countryFlag.style.cssText = `
        display: block;
        height: 100%;
        width: 100%;
        object-fit: contain;
        margin-top: 5px;
        `;
        countryFlagThumb.style.cssText = `
        width: 25px;
        height: 25px;
        display: inline-block;
        `;
        console.log(allcountries[0].flags);
        countryInfo.append(countryFlagThumb, countryName);
      }
    });
}
// function renderPokemon(pokeData) {
//   let allPokemonContainer = document.getElementById('poke-container');
//   let pokeContainer = document.createElement("div") //div will be used to hold the data/details for indiviual pokemon.{}
//   let pokeName = document.createElement('h4');
//   pokeName.innerText = pokeData.namelet;
//   pokeNumber = document.createElement('p')pokeNumber.innerText = `#${pokeData.id}`;
// let pokeTypes = document.createElement('ul')
//ul list will hold the pokemon typescreateTypes(pokeData.types, pokeTypes)
// helper function to go through the types array and create li tags for each onepokeContainer.append(pokeName, pokeNumber, pokeTypes);
//appending all details to the pokeContainer divallPokemonContainer.appendChild(pokeContainer);
//appending that pokeContainer div to the main div which will                                                             hold all the pokemon cards}
// Тебе нужны только следующие свойства:

// - `name.official` - полное имя страны
// - `capital` - столица
// - `population` - население
// - `flags.svg` - ссылка на изображение флага
// - `languages` - массив языков
// В ответе от бэкенда возвращаются объекты, большая часть свойств которых тебе не
// пригодится. Чтобы сократить объем передаваемых данных добавь строку параметров
// запроса - так этот бэкенд реализует фильтрацию полей.
