!function(){var t=null,e=document.querySelector("button[data-start]"),n=document.querySelector("button[data-stop]");document.querySelector("body");e.addEventListener("click",(function(){t||(e.disabled=!0,n.disabled=!1,t=setInterval((function(){var t="#".concat(Math.floor(16777215*Math.random()).toString(16));document.body.style.backgroundColor=t}),1e3))})),n.addEventListener("click",(function(){t=clearInterval(t),e.disabled=!1,n.disabled=!0})),n.disabled=!0}();
//# sourceMappingURL=01-color-switcher.a05b33cc.js.map
