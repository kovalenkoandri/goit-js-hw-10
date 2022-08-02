export function fetchCountries(name) {
  return fetch(`https://restcountries.com/v3.1/name/${name}`)
    .then(r => r.json())
    .then(console.log);
}
// const BASE_URL = 'https://pokeapi.co/api/v2';

// function fetchPokemon(pokemonId) {
//   return fetch(`${BASE_URL}/pokemon/${pokemonId}`).then(response =>
//     response.json()
//   );
// }

// export default { fetchPokemon };
// You can filter the output of your request to include only the specified fields.

// https://restcountries.com/v2/{service}?fields={field},{field},{field}

// https://restcountries.com/v2/all?fields=name,capital,currencies

// Тебе нужны только следующие свойства:

// - `name.official` - полное имя страны
// - `capital` - столица
// - `population` - население
// - `flags.svg` - ссылка на изображение флага
// - `languages` - массив языков