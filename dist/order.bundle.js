(()=>{"use strict";var e={609:(e,t,n)=>{function c(e,t){sessionStorage.setItem(e,JSON.stringify(t))}function r(e){return JSON.parse(sessionStorage.getItem(e))}n.d(t,{HC:()=>c,m3:()=>r})},961:(e,t,n)=>{function c(e){return new Intl.NumberFormat("en-US",{style:"currency",currency:"EUR"}).format(e)}n.d(t,{C:()=>c})},134:(e,t,n)=>{n.d(t,{Z:()=>a});var c=n(961);const r=e=>Number(Math.round(e+"e2")+"e-2");var o=n(609);const d=document.querySelector(".cart__cost-sum"),s=document.querySelector(".order__list-total-sum"),i=document.querySelector(".checkout__total-sum");function a(){const e=((0,o.m3)("cart")||[]).reduce(((e,t)=>e+(t.size?t.price[t.size]:t.price)*(t.pieces||1)),0);return d?d.textContent=(0,c.C)(e):i?i.textContent=(0,c.C)(e):s.textContent=(0,c.C)(e),r(e)}a()}},t={};function n(c){var r=t[c];if(void 0!==r)return r.exports;var o=t[c]={exports:{}};return e[c](o,o.exports,n),o.exports}n.d=(e,t)=>{for(var c in t)n.o(t,c)&&!n.o(e,c)&&Object.defineProperty(e,c,{enumerable:!0,get:t[c]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=n(961),t=n(609),c=n(134);function r(){const e=document.querySelector(".order__checkout"),n=(0,t.m3)("cart")||[];e&&0===n.length&&(e.classList.add("order__checkout_hide"),function(){const e=document.querySelector(".order__inner"),t=document.createElement("span");t.classList.add("order__subscription"),t.textContent="No products added",e.append(t)}())}function o(e){const n=e.target,o=n.parentNode.parentNode.parentNode.parentNode.parentNode,s=o.id,i=o.children[0].childNodes[1].childNodes[1].children[0],a="-"===n.textContent?n.parentNode.nextElementSibling.children:n.parentNode.previousElementSibling.children,u=(0,t.m3)("cart");u.map(((e,c)=>(e.uid===+s&&(i.textContent&&i.textContent===e.size||e.uid===+s&&!i.textContent)&&("-"===n.textContent?1!==e.pieces&&e.pieces?(a[0].textContent=+a[0].textContent-1,e.pieces-=1,d(o,e)):(function(e,n,c){n.remove(),e.splice(c,1),(0,t.HC)("cart",e)}(u,o,c),r()):(!e.pieces&&(e.pieces=1),a[0].textContent=+a[0].textContent+1,e.pieces+=1,d(o,e))),e))),(0,t.HC)("cart",u),(0,c.Z)()}function d(t,n){const c=t.children[0].childNodes[2].childNodes[0].children[0],r=n.size,o=n.pieces||1,d=r?n.price[r]*o:n.price*o;c.textContent=(0,e.C)(d)}r();const s=document.querySelector(".order__inner");!function(){const n=(0,t.m3)("cart");n&&n.forEach((t=>{s.append(function(t){const n=document.createElement("div");return n.id=t.uid,n.classList.add("cartOrderProduct"),n.append(function(t){const n=document.createElement("div");return n.classList.add("cartOrderProduct__container"),n.append(function(e){const t=document.createElement("div");t.classList.add("cartOrderProduct__image");const n=document.createElement("img");return n.src=e,n.alt="product",t.append(n),t}(t.image),function(e){const t=document.createElement("div");return t.classList.add("cartOrderProduct__info"),t.append(function(e){const t=document.createElement("div");t.classList.add("cartOrderProduct-info__name");const n=document.createElement("h5");return n.textContent=e,t.append(n),t}(e.title),function(e){const t=document.createElement("div");t.classList.add("cartOrderProduct-info__size");const n=document.createElement("p");return n.textContent=e,t.append(n),t}(e.size)),t}(t),function(t){const n=document.createElement("div");return n.classList.add("cartOrderProduct__cart"),n.append(function(t){const n=document.createElement("div");n.classList.add("cartOrderProduct__price");const c=document.createElement("span"),r=t.size,o=t.pieces||1,d=r?t.price[r]*o:t.price*o;return c.textContent=(0,e.C)(d),n.append(c),n}(t),function(e){const t=document.createElement("div");return t.classList.add("cartOrderProduct__counter"),t.append(function(){const e=document.createElement("div");e.classList.add("cartOrderProduct__counter-minus");const t=document.createElement("button");return t.addEventListener("click",o),t.textContent="-",e.append(t),e}(),function(e){const t=document.createElement("div");t.classList.add("cartOrderProduct__counter-value");const n=document.createElement("span");return n.textContent=e.pieces?e.pieces:1,t.append(n),t}(e),function(){const e=document.createElement("div");e.classList.add("cartOrderProduct__counter-plus");const t=document.createElement("button");return t.textContent="+",t.addEventListener("click",o),e.append(t),e}()),t}(t)),n}(t)),n}(t)),n}(t))}))}()})()})();