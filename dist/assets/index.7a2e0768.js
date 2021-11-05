var $=Object.defineProperty,P=Object.defineProperties;var E=Object.getOwnPropertyDescriptors;var D=Object.getOwnPropertySymbols;var O=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var S=(e,t,r)=>t in e?$(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))O.call(t,r)&&S(e,r,t[r]);if(D)for(var r of D(t))A.call(t,r)&&S(e,r,t[r]);return e},h=(e,t)=>P(e,E(t));import{j as C,a as y,r as f,R as F}from"./vendor.d54fab0c.js";const I=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function r(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerpolicy&&(n.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?n.credentials="include":o.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(o){if(o.ep)return;o.ep=!0;const n=r(o);fetch(o.href,n)}};I();const s=C.exports.jsx,p=C.exports.jsxs,R=({value:e,keyvalue:t})=>p("div",{children:[s("span",{children:"filter shown with"})," ",s("input",{type:"text",value:e,onChange:t})]});function U({submit:e,value1:t,value2:r,keychange1:i,keychange2:o}){return p("form",{onSubmit:e,children:[p("div",{children:["name: ",s("input",{value:t,onChange:i})]}),s("br",{}),p("div",{children:["number: ",s("input",{value:r,onChange:o})]}),s("div",{children:s("button",{type:"submit",children:"add"})})]})}const w="https://my-app-aj.herokuapp.com/api/persons",B=()=>y.get(w).then(e=>e.data),M=e=>y.post(w,e).then(t=>t.data),T=(e,t)=>y.put(`${w}/${e}`,t).then(r=>r.data),q=e=>y.delete(`${w}/${e}`).then(t=>t.data);var x={getDatas:B,create:M,update:T,deleteData:q};const K=({onclick:e})=>s("button",{onClick:e,children:"Delete"}),z=({filterDisplay:e,setPersons:t,persons:r})=>{const i=n=>x.deleteData(n).then(c=>t(r.filter(N=>N.id!==n))),o=e.map((n,c)=>p("li",{children:[n.name," ",n.number," ",s(K,{onclick:()=>{window.confirm(`Delete ${n.name}`)&&i(n.id)}})]},n.id));return s("div",{children:o})},G=({message:e})=>e===null?null:s("div",{className:"Notifier",children:e}),H=({error:e})=>e===null?null:s("div",{className:"Errormsg",children:e});function J(){const[e,t]=f.exports.useState([]),[r,i]=f.exports.useState(""),[o,n]=f.exports.useState(""),[c,N]=f.exports.useState(""),[l,g]=f.exports.useState({success:"",error:""});f.exports.useEffect(()=>{x.getDatas().then(a=>t(a))},[]);const j=(a,v)=>{const u=h(m({},a),{number:v.number});x.update(a.id,u).then(d=>{console.log(d),t(e.map(b=>b.id!==a.id?b:d))}).catch(d=>{g(h(m({},l),{error:`Information of '${u.name.toUpperCase()}' has already been removed from the server`})),setTimeout(()=>{g(h(m({},l),{error:null}))},4e3),t(e.filter(b=>b.id!==a.id))})},k=a=>{a.preventDefault();const v={name:r,number:Number(o)},u=e.find(d=>d.name.toLowerCase()===r.toLowerCase());if(u){window.confirm(` ${u.name} is already added to phonebook, replace the old number with a new one`)&&j(u,v),i(""),n("");return}else x.create(v).then(d=>{t(e.concat(d)),g(h(m({},l),{success:`Added ${d.name.toUpperCase()}`})),setTimeout(()=>{g(h(m({},l),{success:null}))},4e3),i(""),n("")})},L=e.filter(a=>a.name.toLowerCase().includes(c));return p("div",{children:[s("h2",{children:"Phonebook"}),l.success!==""?s(G,{message:l.success}):l.error!==""?s(H,{error:l.error}):null,s(R,{value:c,keyvalue:a=>{N(a.target.value)}}),s("h3",{children:"add a new"}),s(U,{submit:k,value1:r,value2:o,keychange1:a=>{i(a.target.value.trim())},keychange2:a=>{n(a.target.value.trim())}}),s("h3",{children:"Numbers"}),s("ul",{children:s(z,{filterDisplay:L,setPersons:t,persons:e})})]})}F.render(s(J,{}),document.getElementById("root"));
