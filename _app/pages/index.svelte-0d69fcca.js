import{S as e,i as n,s as a,v as r}from"../chunks/vendor-672e8a2e.js";import{r as c}from"../chunks/singletons-4a680913.js";import{b as i}from"../chunks/paths-4b3c6e7e.js";const u=c,l=h;async function h(s,t){return u.goto(s,t,[])}function f(s){return r(async()=>{const t=window.location.hash.split("/");let o="edit";t.length>2&&(o=`${t[1]}#${t[2]}`),await l(`${i}/${o}`,{replaceState:!0})}),[]}class d extends e{constructor(t){super();n(this,t,f,null,a,{})}}export{d as default};
