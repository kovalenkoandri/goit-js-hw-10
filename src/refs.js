export const refs = {
  countryList: document.querySelector('.country-list'),
  countryInfo: document.querySelector('.country-info'),
  countryFlagThumb: document.createElement('div'),
  countryFlag: document.createElement('img'),
  countryName: document.createElement('h2'),
  countryNameBr: document.createElement('br'),
  countryCapital: document.createElement('h3'),
  countryCapitalValue: document.createElement('span'),
  countryCapitalValueBr: document.createElement('br'),
  countryPopulation: document.createElement('h3'),
  countryPopulationValue: document.createElement('span'),
  countryPopulationValueBr: document.createElement('br'),
  countryLanguages: document.createElement('h3'),
  countryLanguagesValue: document.createElement('span'),
};
refs.countryFlagThumb.style.cssText = `
        width: 25px;
        height: 25px;
        display: inline-block;
        `;
refs.countryFlag.style.cssText = `
        display: block;
        height: 100%;
        width: 100%;
        object-fit: contain;
        margin-top: 5px;
        `;
refs.countryName.style.cssText = `
        display: inline-block;
        margin: 0;
        margin-left: 10px;
        `;
refs.countryCapital.style.cssText = `
        display: inline-block;
        white-space: pre-wrap;
        `;
refs.countryPopulation.style.cssText = `
        display: inline-block;
        white-space: pre-wrap;
        `;
refs.countryLanguages.style.cssText = `
        display: inline-block;
        white-space: pre-wrap;
        `;