let t=null;const e=document.querySelector("button[data-start]"),d=document.querySelector("button[data-stop]");document.querySelector("body");e.addEventListener("click",(function(){t||(e.disabled=!0,d.disabled=!1,t=setInterval((()=>{let t=`#${Math.floor(16777215*Math.random()).toString(16)}`;document.body.style.backgroundColor=t}),1e3))})),d.addEventListener("click",(function(){t=clearInterval(t),e.disabled=!1,d.disabled=!0})),d.disabled=!0;
//# sourceMappingURL=01-color-switcher.488db7cf.js.map