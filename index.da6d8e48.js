var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};const t=new URLSearchParams({fields:"name,capital,population,flags,languages"}),n=document.querySelector(".country-list"),i=document.querySelector(".country-info");var o={},r=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,l=/^0o[0-7]+$/i,u=parseInt,s="object"==typeof e&&e&&e.Object===Object&&e,f="object"==typeof self&&self&&self.Object===Object&&self,p=s||f||Function("return this")(),d=Object.prototype.toString,m=Math.max,y=Math.min,v=function(){return p.Date.now()};function b(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function h(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(b(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=b(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=c.test(e);return n||l.test(e)?u(e.slice(2),n?2:8):a.test(e)?NaN:+e}o=function(e,t,n){var i,o,r,a,c,l,u=0,s=!1,f=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function d(t){var n=i,r=o;return i=o=void 0,u=t,a=e.apply(r,n)}function g(e){return u=e,c=setTimeout(T,t),s?d(e):a}function x(e){var n=e-l;return void 0===l||n>=t||n<0||f&&e-u>=r}function T(){var e=v();if(x(e))return w(e);c=setTimeout(T,function(e){var n=t-(e-l);return f?y(n,r-(e-u)):n}(e))}function w(e){return c=void 0,p&&i?d(e):(i=o=void 0,a)}function E(){var e=v(),n=x(e);if(i=arguments,o=this,l=e,n){if(void 0===c)return g(l);if(f)return c=setTimeout(T,t),d(l)}return void 0===c&&(c=setTimeout(T,t)),a}return t=h(t)||0,b(n)&&(s=!!n.leading,r=(f="maxWait"in n)?m(h(n.maxWait)||0,t):r,p="trailing"in n?!!n.trailing:p),E.cancel=function(){void 0!==c&&clearTimeout(c),u=0,i=l=o=c=void 0},E.flush=function(){return void 0===c?a:w(v())},E};const g=document.querySelector('input[id="search-box"]');g.addEventListener("input",o((()=>{var e;""!==g.value&&(e=g.value.trim(),fetch(`https://restcountries.com/v3.1/name/${e}?${t}`).then((e=>e.json())).then((e=>{if(1===e.length){n.remove(),console.log(e);const t=document.createElement("div"),o=document.createElement("img"),r=document.createElement("h2"),a=document.createElement("br"),c=document.createElement("h3"),l=document.createElement("span"),u=document.createElement("br"),s=document.createElement("h3"),f=document.createElement("span"),p=document.createElement("br"),d=document.createElement("h3"),m=document.createElement("span");t.appendChild(o),o.src=e[0].flags.svg,r.innerText=e[0].name.official,c.innerText="Capital: ",l.innerText=e[0].capital,s.innerText="Population: ",f.innerText=e[0].population,d.innerText="Languages: ",m.innerText=Object.values(e[0].languages).reduce(((e,t)=>e+(t+", ")),[]).replace(/, $/,""),t.style.cssText="\n        width: 25px;\n        height: 25px;\n        display: inline-block;\n        ",o.style.cssText="\n        display: block;\n        height: 100%;\n        width: 100%;\n        object-fit: contain;\n        margin-top: 5px;\n        ",r.style.cssText="\n        display: inline-block;\n        margin: 0;\n        margin-left: 10px;\n        ",c.style.cssText="\n        display: inline-block;\n        white-space: pre-wrap;\n        ",s.style.cssText="\n        display: inline-block;\n        white-space: pre-wrap;\n        ",d.style.cssText="\n        display: inline-block;\n        white-space: pre-wrap;\n        ",i.append(t,r,a,c,l,u,s,f,p,d,m)}})))}),300));
//# sourceMappingURL=index.da6d8e48.js.map
