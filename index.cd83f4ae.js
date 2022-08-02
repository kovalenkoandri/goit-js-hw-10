document.querySelector('input[id="search-box"]').addEventListener("input",(e=>{var t;t=e.currentTarget.value,fetch(`https://restcountries.com/v3.1/name/${t}`).then((e=>e.json())).then(console.log)}));
//# sourceMappingURL=index.cd83f4ae.js.map
