!function(){var t={section:document.querySelector("body"),startBtn:document.querySelector("[data-start]"),stopBtn:document.querySelector("[data-stop]")};var e=null;t.startBtn.addEventListener("click",(function(){e=setInterval((function(){t.section.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3),t.startBtn.setAttribute("disabled",!0),t.stopBtn.removeAttribute("disabled",!1)})),t.stopBtn.addEventListener("click",(function(){clearInterval(e),t.startBtn.removeAttribute("disabled",!1),t.stopBtn.setAttribute("disabled",!0)})),t.section.style.textAlign="center",t.startBtn.style.padding="15px",t.stopBtn.style.padding="15px"}();
//# sourceMappingURL=01-color-switcher.76fa749c.js.map