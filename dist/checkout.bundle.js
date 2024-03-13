(()=>{"use strict";var e={908:(e,t,c)=>{c.d(t,{w:()=>i});var o=c(609);const n=document.querySelector(".readyOrder"),r=document.querySelector(".readyOrder .cross"),u=document.querySelector(".body-checkout");function s(){n.classList.remove("readyOrder_active"),u.classList.remove("body-checkout_background"),document.removeEventListener("click",i),(0,o.ze)("cart"),document.location.reload()}function i(e){n.classList.contains("readyOrder_active")&&e.target.classList.contains("body-checkout_background")&&s()}r.addEventListener("click",s)},609:(e,t,c)=>{function o(e){return JSON.parse(sessionStorage.getItem(e))}function n(e){return sessionStorage.removeItem(e)}c.d(t,{m3:()=>o,ze:()=>n})},961:(e,t,c)=>{function o(e){return new Intl.NumberFormat("en-US",{style:"currency",currency:"EUR"}).format(e)}c.d(t,{C:()=>o})},134:(e,t,c)=>{c.d(t,{Z:()=>d});var o=c(961);const n=e=>Number(Math.round(e+"e2")+"e-2");var r=c(609);const u=document.querySelector(".cart__cost-sum"),s=document.querySelector(".order__list-total-sum"),i=document.querySelector(".checkout__total-sum");function d(){const e=((0,r.m3)("cart")||[]).reduce(((e,t)=>e+(t.size?t.price[t.size]:t.price)*(t.pieces||1)),0);return u?u.textContent=(0,o.C)(e):i?i.textContent=(0,o.C)(e):s.textContent=(0,o.C)(e),n(e)}d()}},t={};function c(o){var n=t[o];if(void 0!==n)return n.exports;var r=t[o]={exports:{}};return e[o](r,r.exports,c),r.exports}c.d=(e,t)=>{for(var o in t)c.o(t,o)&&!c.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},c.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=c(609),t=c(961);const o=document.querySelector(".checkout__order");var n=c(134);const r=(0,n.Z)(),u=document.querySelector(".checkout__discount-price"),s=document.querySelector(".checkout__promo-error");function i(c){s.textContent=null;const o=c.target.value;o&&"MONDAY"===o?function(){const c=(0,e.m3)("cart"),o=(new Date).toLocaleDateString("en-US",{weekday:"long"}),n=d(c);"Monday"===o?function(e){const c=document.querySelector(".checkout__total-sum");let o=null;if(e.length>=2)for(let t=0;t<e.length-1;t++){const c=e[t].price,n=e[t+1].price;void 0!==c&&void 0!==n&&(o=null===o||c<=n?+c:+n)}if(o){const e=Number((r-o).toFixed(2));e+o===r&&(c.textContent=(0,t.C)(e),u.textContent=(0,t.C)(r))}}(n):s.textContent="This promo code is not valid today"}():o&&"THIRD"===o?function(e){const c=document.querySelector(".checkout__total-sum");if(e.length>=3){const e=.1*r;r-e+e===r&&(c.textContent=(0,t.C)(r-e),u.textContent=(0,t.C)(r))}}(d((0,e.m3)("cart"))):o&&"MOST"===o?function(e){const c=document.querySelector(".checkout__total-sum");if(e.length>=5){const e=.2*r;r-e+e===r&&(c.textContent=(0,t.C)(r-e),u.textContent=(0,t.C)(r))}}(d((0,e.m3)("cart"))):o&&"BEVERAGE"===o?function(){const c=(0,e.m3)("cart"),o=d(c),n=function(e){const t=[];return e.forEach((e=>{const c={title:e.title,price:e.price};"drink"===e.type&&t.push(c)})),t}(c);!function(e,c){const o=document.querySelector(".checkout__total-sum");let n=null;if(e.length>=3)if(1===c.length)n=c[0].price;else for(let e=0;e<c.length-1;e++){const t=c[e].price,o=c[e+1].price;void 0!==t&&void 0!==o&&(t<o?n=t:t>o&&(n=o))}if(n){const e=r-n;e+n===r&&(o.textContent=(0,t.C)(e),u.textContent=(0,t.C)(r))}}(o,n)}():((0,n.Z)(),u.textContent=null)}function d(e){const t=[];return e.forEach((e=>{const c={title:e.title,price:e.price[e.size]};if("pizza"===e.type&&(t.push(c),e.pieces))for(let o=1;o<e.pieces;o++)t.push(c)})),t}document.querySelectorAll(".checkout__input").forEach((e=>"Promo code"===e.previousElementSibling.textContent&&e.addEventListener("input",i)));var a=c(908);const l=document.querySelector(".checkout__button .btn"),m=document.querySelector(".body-checkout");l.addEventListener("click",(function(){const e=document.querySelectorAll(".checkout__input"),t=document.querySelector(".readyOrder"),c=document.querySelector(".readyOrder__total-sum"),o=document.querySelector(".checkout__total-sum");let n=!1,r=!1;e.forEach((e=>function(e){switch(e.previousElementSibling.textContent){case"Street":case"House":case"Phone":!function(e){0===e.value.length?e.classList.add("checkout__input_error"):e.classList.remove("checkout__input_error")}(e)}}(e)));n=void 0===Array.from(e).find((e=>e.classList.contains("checkout__input_error"))),r=function(){const e=document.querySelector(".checkout__total-sum"),t=document.querySelector(".checkout__subscription-minOrder");let c=!0;return e.textContent.slice(1,e.textContent.length)<12?(t.style.color="red",c=!1):t.style.color="black",c}(),n&&r&&(t.classList.add("readyOrder_active"),c.textContent=o.textContent,document.addEventListener("click",a.w),m.classList.add("body-checkout_background"))})),function(){const c=(0,e.m3)("cart");c&&c.forEach((e=>o.append(function(e){const c=document.createElement("div");return c.classList.add("checkout__order-wrapper"),c.append(function(e){const c=document.createElement("div");return c.classList.add("checkout__order-card"),c.append(function(e){const t=document.createElement("div");t.classList.add("checkout__order-name");const c=document.createElement("h5");return c.textContent=e.title,t.append(c),t}(e),function(e){const t=document.createElement("div");t.classList.add("checkout__order-counter");const c=document.createElement("span");return c.textContent=e.pieces||1,t.append(c),t}(e),function(e){const c=document.createElement("div");c.classList.add("checkout__order-price");const o=document.createElement("span"),n=e.size,r=e.pieces||1,u=n?e.price[n]*r:e.price*r,s=Number(u.toFixed(2));return o.textContent=(0,t.C)(s),c.append(o),c}(e)),c}(e)),c}(e))))}()})()})();