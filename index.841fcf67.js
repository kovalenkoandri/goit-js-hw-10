document.querySelector('input[id="search-box"]').addEventListener("input",(function(e){var t;t=e.currentTarget.value,fetch("https://restcountries.com/v3.1/name/".concat(t)).then((function(e){return e.json()})).then(console.log)}));
//# sourceMappingURL=index.841fcf67.js.map
