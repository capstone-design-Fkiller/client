import{c as f,r as p,b as k,j as c}from"./index-bce8e72c.js";import{I as g}from"./index-d351d313.js";const y=f("div",{target:"eaq5sof1"})({name:"ppp0le",styles:"display:flex;justify-content:space-between;align-items:center;margin:20px 0 15px"}),C=f("span",{target:"eaq5sof0"})("font-size:14px;padding:0 10px;cursor:pointer;color:",({isActive:a,theme:e})=>a?e.colors.primary_200:e.colors.black,";font-weight:",({isActive:a})=>a&&600,";"),i=10,I=a=>{const{currentPage:e,totalItems:m,itemsPerPage:P,setState:s}=a,n=Math.ceil(m/P);p.useEffect(()=>{e>n&&s(n)},[e,n,s]);const d=()=>{e<n&&s(e+1)},x=()=>{e>1&&s(e-1)},h=t=>{const r=parseInt(t.currentTarget.innerText);s(r)},o=(Math.ceil(e/i)-1)*i+1,l=Math.min(o+i-1,n),u=p.useMemo(()=>Array.from({length:l-o+1},(t,r)=>o+r),[o,l]);return k(y,{children:[c(g,{iconName:"left",onClick:x,size:"18"}),u.map(t=>c(C,{isActive:t===e,onClick:h,children:t},t)),c(g,{iconName:"right",onClick:d,size:"18"})]})};export{i as P,I as a};