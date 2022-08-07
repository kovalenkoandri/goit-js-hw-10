const REST_COUNTRIES = `https://restcountries.com/v3.1/name/`;
const searchParams = new URLSearchParams({
  fields: 'name,capital,population,flags,languages',
});
export function fetchCountries(name) {
  return fetch(`${REST_COUNTRIES}${name}?${searchParams}`)
    .then(response => {
      console.log(response);
      if (response.ok) return response.json();
      throw new Error('Error fetching data');
    })
}
