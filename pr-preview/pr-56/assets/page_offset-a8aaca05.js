import{c as l,r,b as d,j as i}from"./index-1bd1ac65.js";import{I as c}from"./index-6a7d43e6.js";const h=l("div",{target:"eaq5sof1"})({name:"ppp0le",styles:"display:flex;justify-content:space-between;align-items:center;margin:20px 0 15px"}),k=l("span",{target:"eaq5sof0"})("font-size:14px;padding:0 10px;cursor:pointer;color:",({isActive:s,theme:e})=>s?e.colors.primary_200:e.colors.black,";font-weight:",({isActive:s})=>s&&600,";"),C=s=>{const{currentPage:e,totalItems:p,itemsPerPage:g,setState:n}=s,t=Math.ceil(p/g);r.useEffect(()=>{e>t&&n(t)},[e,t,n]);const f=()=>{e<t&&n(e+1)},m=()=>{e>1&&n(e-1)},x=a=>{const o=parseInt(a.currentTarget.innerText);n(o)},P=r.useMemo(()=>Array.from({length:t},(a,o)=>o+1),[t]);return d(h,{children:[i(c,{iconName:"left",onClick:m,size:"18"}),P.map(a=>i(k,{isActive:a===e,onClick:x,children:a},a)),i(c,{iconName:"right",onClick:f,size:"18"})]})},b=10;export{b as P,C as a};
