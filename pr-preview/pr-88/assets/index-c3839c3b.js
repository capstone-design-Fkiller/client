import{c as i,r as g,a as y,j as r}from"./index-11338412.js";import{I as f}from"./index-d667ee29.js";const k=i("div",{target:"eaq5sof1"})({name:"19qwo8z",styles:"display:flex;justify-content:space-between;align-items:center;margin:20px 0 50px"}),b=i("span",{target:"eaq5sof0"})("font-size:14px;padding:0 10px;cursor:pointer;color:",({isActive:t,theme:e})=>t?e.colors.primary_200:e.colors.black,";font-weight:",({isActive:t})=>t&&600,";"),p=10,v=t=>{const{currentPage:e,totalItems:s,itemsPerPage:h,setState:n}=t,o=Math.ceil(s/h);g.useEffect(()=>{e>o&&n(o)},[e,o,n]);const x=()=>{e<o&&n(e+1)},u=()=>{e>1&&n(e-1)},P=a=>{const l=parseInt(a.currentTarget.innerText);n(l)},c=(Math.ceil(e/p)-1)*p+1,d=Math.min(c+p-1,o),w=g.useMemo(()=>Array.from({length:d-c+1},(a,l)=>c+l),[c,d]);return y(k,{children:[r(f,{iconName:"left",onClick:u,size:"18"}),w.map(a=>r(b,{isActive:a===e,onClick:P,children:a},a)),r(f,{iconName:"right",onClick:x,size:"18"})]})},z=t=>{const{headers:e}=t;return r(m.Head,{children:r("tr",{children:e.map(s=>r(m.Item,{children:s},s))})})},m={Head:i("thead",{target:"ewew7j81"})("font-size:14px;font-weight:bold;background-color:",({theme:t})=>t.colors.primary_200,";border-radius:5px;"),Item:i("th",{target:"ewew7j80"})({name:"7lr3li",styles:"white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-align:center"})};export{p as P,z as T,v as a};
