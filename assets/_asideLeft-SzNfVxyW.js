const t=document.querySelector(".aside-left__cross"),s=document.querySelector(".burger"),e=document.querySelector(".aside-left");s.addEventListener("click",()=>{e.style.display="block",e.style.transition="opacity 0.1s ease",setTimeout(()=>{e.style.opacity="96.05%"},300)});t.addEventListener("click",()=>{e.style.opacity="0",e.style.display="none"});