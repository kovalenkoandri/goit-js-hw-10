import { refs } from './refs.js';
export function allcountriesLengthEqualFromTwoToTen(allcountries) {
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