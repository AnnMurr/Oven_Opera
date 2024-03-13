(()=>{"use strict";var e={609:(e,t,n)=>{function c(e,t){sessionStorage.setItem(e,JSON.stringify(t))}function r(e){return JSON.parse(sessionStorage.getItem(e))}n.d(t,{HC:()=>c,m3:()=>r})},961:(e,t,n)=>{function c(e){return new Intl.NumberFormat("en-US",{style:"currency",currency:"EUR"}).format(e)}n.d(t,{C:()=>c})},134:(e,t,n)=>{n.d(t,{Z:()=>s});var c=n(961);const r=e=>Number(Math.round(e+"e2")+"e-2");var o=n(609);const a=document.querySelector(".cart__cost-sum"),i=document.querySelector(".order__list-total-sum"),d=document.querySelector(".checkout__total-sum");function s(){const e=((0,o.m3)("cart")||[]).reduce(((e,t)=>e+(t.size?t.price[t.size]:t.price)*(t.pieces||1)),0);return a?a.textContent=(0,c.C)(e):d?d.textContent=(0,c.C)(e):i.textContent=(0,c.C)(e),r(e)}s()}},t={};function n(c){var r=t[c];if(void 0!==r)return r.exports;var o=t[c]={exports:{}};return e[c](o,o.exports,n),o.exports}n.d=(e,t)=>{for(var c in t)n.o(t,c)&&!n.o(e,c)&&Object.defineProperty(e,c,{enumerable:!0,get:t[c]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{const e="https://65294da655b137ddc83e91cc.mockapi.io/pizzas";Math.random();var t=n(961),c=n(134),r=n(609);function o(e){return JSON.parse(localStorage.getItem(e))}function a(e){const t=e.target,n=t.parentNode.parentNode.parentNode.parentNode.id,a=t.parentNode.previousElementSibling.previousElementSibling.value,i=o("cards").filter((e=>e.uid===+n));i[0].size=a,function(e){let t=(0,r.m3)("cart")||[],n=!1;t.find((t=>{if(t.uid===+e[0].uid){if(e[0].size&&t.size===e[0].size)return!0;if(!e[0].size)return!0}return!1}))?t=t.map((t=>(t.uid!==e[0].uid||e[0].size?t.uid===e[0].uid&&e[0].size&&t.size===e[0].size&&(!t.pieces&&(t.pieces=1),t.pieces+=1):(!t.pieces&&(t.pieces=1),t.pieces+=1),t))):n=!0,n&&t.push(e[0]),(0,r.HC)("cart",t)}(i),(0,c.Z)()}!function(){const e=document.querySelector(".order__checkout"),t=(0,r.m3)("cart")||[];e&&0===t.length&&(e.classList.add("order__checkout_hide"),function(){const e=document.querySelector(".order__inner"),t=document.createElement("span");t.classList.add("order__subscription"),t.textContent="No products added",e.append(t)}())}();const i=document.querySelector(".menu__cards"),d=document.querySelectorAll(".menu__item-btn");function s(e){u(e.target.innerText)}async function u(n){const c=await async function(){return fetch(e).then((e=>e.json())).then((e=>e)).catch((e=>{throw e}))}(),r=c[0]&&n?n:"pizzas",s=c[0][r];i.innerHTML=null,function(e){d.forEach((t=>t.innerText===e?t.classList.add("menu__item-btn_active"):t.classList.remove("menu__item-btn_active")))}(r),function(e,t){localStorage.setItem("cards",JSON.stringify(t))}(0,s),s.forEach((e=>i.append(function(e){const n=document.createElement("div");return n.classList.add("card"),n.id=e.uid,n.append(function(e){const n=document.createElement("div");return n.classList.add("card__container"),n.append(function(e){const n=document.createElement("div");return n.classList.add("card__wrapper"),n.append(function(e){const t=document.createElement("div");t.classList.add("card__image");const n=document.createElement("img");return n.loading="eager",n.src=e,n.alt=e,n.alt="product",t.append(n),t}(e.image),function(e){const t=document.createElement("div");t.classList.add("card__title");const n=document.createElement("h3");return n.textContent=e,t.append(n),t}(e.title)),e.ingredients&&n.append(function(e){const t=document.createElement("div");t.classList.add("card__ingredients");const n=document.createElement("p");return n.textContent=e.join(", ")+".",t.append(n),t}(e.ingredients)),e.price.medium&&n.append(function(){const e=document.createElement("select");return e.classList.add("card__size"),e.setAttribute("type","text"),e.addEventListener("change",(n=>function(e,n){const c=n.value,r=e.target.parentNode.parentNode.parentNode.id;o("cards").forEach((e=>{+e.uid==+r&&(document.getElementById(r).querySelector(".card__price-value").textContent=(0,t.C)(e.price[c]))}))}(n,e))),["small","medium","large"].forEach((t=>{const n=document.createElement("option");n.textContent=t,e.append(n)})),e.value="medium",e}()),n.append(function(e){const n=document.createElement("div");n.classList.add("card__price");const c=document.createElement("span");return c.textContent=e.price.medium?(0,t.C)(e.price.medium):(0,t.C)(e.price),c.classList.add("card__price-value"),n.append(c),n}(e),function(){const e=document.createElement("div");e.classList.add("card__button");const t=document.createElement("button");return t.classList.add("btn","btn_big"),t.type="button",t.textContent="add to cart",t.addEventListener("click",a),e.append(t),e}()),n}(e)),n}(e)),n}(e))))}d.forEach((e=>e.addEventListener("click",s))),document.addEventListener("DOMContentLoaded",u())})()})();