import"./assets/styles-DKP1p-D7.js";import{i as l}from"./assets/vendor-A92OCY9B.js";const m=document.querySelector(".form"),c=document.querySelector('input[name="delay"]');m.addEventListener("submit",u);function u(e){e.preventDefault();const n=document.querySelector('input[name="state"]:checked').value==="fulfilled",t=+c.value;new Promise((i,a)=>{setTimeout(()=>{n?i(t):a(t)},t)}).then(i=>r(!0,i)).catch(i=>r(!1,i))}function r(e,o){const n=e?"OK":"Error",t=e?`Fulfilled promise in ${o}ms`:`Rejected promise in ${o}ms`,s=e?"#59A10D":"#EF4040";l.show({position:"topRight",title:n,titleSize:"16px",titleLineHeight:"24px",titleColor:"white",message:t,messageSize:"16px",messageLineHeight:"24px",messageColor:"white",backgroundColor:s,transitionIn:"fadeInRight",transitionOut:"fadeOutRight",timeout:3e3})}
//# sourceMappingURL=2-snackbar.js.map
