!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var c=new Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o);var r=o("bOlkj"),c=document.querySelector(".breed-select"),l=document.querySelector(".cat-info"),i=document.querySelector(".breed-name"),d=document.querySelector(".description"),a=document.querySelector(".temperament"),u=document.querySelector(".loader"),s=document.querySelector(".error");(0,r.fetchBreeds)().then((function(e){c.innerHTML=e.map((function(e){return'<option value="'.concat(e.id,'">').concat(e.name,"</option>")})).join("")})).catch((function(e){s.style.display="block",console.error(e)})),c.addEventListener("change",(function(){var e=c.value;l.style.display="none",u.style.display="block",s.style.display="none",(0,r.fetchCatByBreed)(e).then((function(e){var t=e[0];i.textContent=t.breeds[0].name,d.textContent=t.breeds[0].description,a.textContent=t.breeds[0].temperament,l.querySelector("img").src=t.url,l.style.display="block",u.style.display="none"})).catch((function(e){s.style.display="block",console.error(e)}))}))}();
//# sourceMappingURL=index.01e16c74.js.map