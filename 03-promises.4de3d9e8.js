const e=document.querySelector(".form");function t(e,t){return new Promise(((o,n)=>{const s=Math.random()>.3;setTimeout((()=>{s?o({position:e,delay:t}):n({position:e,delay:t})}),t)}))}e.addEventListener("submit",(o=>{o.preventDefault();const n=Math.abs(e.elements.delay.value),s=Math.abs(e.elements.step.value),l=Math.abs(e.elements.amount.value);for(let e=0;e<l;e++)t(e,n+e*s).then((({position:e,delay:t})=>{console.log(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{console.log(`❌ Rejected promise ${e} in ${t}ms`)}))}));
//# sourceMappingURL=03-promises.4de3d9e8.js.map
