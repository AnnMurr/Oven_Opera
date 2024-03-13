(()=>{"use strict";var e={609:(e,t,n)=>{function r(e,t){sessionStorage.setItem(e,JSON.stringify(t))}function c(e){return JSON.parse(sessionStorage.getItem(e))}n.d(t,{HC:()=>r,m3:()=>c})},961:(e,t,n)=>{function r(e){return new Intl.NumberFormat("en-US",{style:"currency",currency:"EUR"}).format(e)}n.d(t,{C:()=>r})},134:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(961);const c=e=>Number(Math.round(e+"e2")+"e-2");var o=n(609);const a=document.querySelector(".cart__cost-sum"),d=document.querySelector(".order__list-total-sum"),l=document.querySelector(".checkout__total-sum");function i(){const e=((0,o.m3)("cart")||[]).reduce(((e,t)=>e+(t.size?t.price[t.size]:t.price)*(t.pieces||1)),0);return a?a.textContent=(0,r.C)(e):l?l.textContent=(0,r.C)(e):d.textContent=(0,r.C)(e),c(e)}i()}},t={};function n(r){var c=t[r];if(void 0!==c)return c.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=n(961),t=n(609);const r={small:"€6.79",medium:"€7.89",large:"€8.99"},c={image:"https://i.imgur.com/2GTTsIW.png",ingredients:[],price:{large:null,medium:null,small:null},size:null,title:"PIZZA CONSTRUCTOR",type:"pizza",uid:1e4*Math.random()};function o(e,t){const n=document.createElement("li");return n.classList.add("card"),n.append(function(e,t){const n=document.createElement("div");return n.classList.add("card__wrapper"),n.append(function(e){const t=document.createElement("div");t.classList.add("card__name");const n=document.createElement("span");return n.textContent=e,t.append(n),t}(e),function(e,t){const n=document.createElement("div");n.classList.add("card__price");const r=document.createElement("span");return r.classList.add("card__price-text"),r.textContent=t,n.append(r),n}(0,t)),n}(e,t)),n}var a=n(134);const d=document.querySelectorAll(".constructor__add-btn"),l=document.querySelectorAll(".constructor__delete-btn"),i=document.querySelector(".constructor__cards"),s=document.querySelector(".constructor__size"),u=document.querySelector(".constructor__button .btn");function m(){const t=document.querySelectorAll(".card__price-text"),n=document.querySelector(".constructor__total-price");let r=0;t.forEach((e=>{const t=+e.textContent.slice(1,e.textContent.length);r+=t})),n.textContent=(0,e.C)(r)}function p(e){const t=e.target,n=e.target.parentNode.nextElementSibling,r=t.parentNode.parentNode.children[0].children[0].textContent,c=t.parentNode.parentNode.children[1].children[0].textContent;t.parentNode.classList.remove("constructor__add_active"),n.classList.add("constructor__delete_active"),i.append(o(r,c)),m()}function _(e){const t=e.target,n=e.target.parentNode.previousElementSibling,r=document.querySelectorAll(".card__name"),c=t.parentNode.parentNode.children[0].children[0];Array.from(r).filter((e=>e.children[0].textContent===c.textContent))[0].parentNode.parentNode.remove(),t.parentNode.classList.remove("constructor__delete_active"),n.classList.add("constructor__add_active"),m()}d.forEach((e=>e.addEventListener("click",p))),l.forEach((e=>e.addEventListener("click",_))),u.addEventListener("click",(function(){let e=(0,t.m3)("cart");const n=document.querySelectorAll(".card__name"),r=document.querySelector(".constructor__total-price"),o=r.textContent.slice(1,r.textContent.length);!e&&(e=[]);const d=c;d.price={large:o.toString(),medium:o.toString(),small:o.toString()},d.size=n[0].children[0].textContent;for(let e=1;e<n.length;e++)void 0!==n[e]&&null!==n[e]&&d.ingredients.push(n[e].children[0].textContent);e.push(d),(0,t.HC)("cart",e),(0,a.Z)()})),s.addEventListener("change",(function(e){const t=document.querySelector(".card"),n=t.children[0].children[0].children[0],c=t.children[0].children[1].children[0],o=e.target.value;n.textContent=o,c.textContent=r[o],m()})),function(){const e=s.value;i.append(o(e,r[e]))}(),m()})()})();