import{c as o,a as f,r as h,j as n,b as t,F as b,L as u}from"./index-a0b3c9b6.js";import{M as y,P}from"./index-49359706.js";import{P as l,T,a as v,b as C}from"./index-5721a154.js";import{u as N}from"./notice-80c84eb9.js";import"./major-1d6ed76c.js";const _=o("div",{target:"e1ch39565"})("display:flex;justify-content:center;flex-direction:column;align-items:center;padding:0 30px;",({theme:e})=>f("min-height:calc(var(--vh, 1vh) * 100 - ",e.layouts.fixedHeight,");",""),";"),E=o("h1",{target:"e1ch39564"})("font-size:30px;font-weight:bold;margin-bottom:10px;color:",({theme:e})=>e.colors.primary_200,";"),M=o("table",{target:"e1ch39563"})("width:100%;margin-top:15px;border-collapse:collapse;& tr>td,& tr>th{padding:10px 0;&:first-of-type{padding-left:10px;}}& tbody tr{border-bottom:1px solid ",({theme:e})=>e.colors.light_grey_100,";}"),S=o("div",{target:"e1ch39562"})("display:flex;justify-content:center;padding:10px;border-bottom:1px solid ",({theme:e})=>e.colors.light_grey_200,";"),j=o("h2",{target:"e1ch39561"})({name:"5rt1vw",styles:"font-weight:bold;margin-bottom:10px"}),w=o("div",{target:"e1ch39560"})("white-space:pre-line;font-size:16px;color:",({theme:e})=>e.colors.grey_400,";margin-top:20px;line-height:1.4;"),F=["ID","학과","제목","작성일"],z=()=>{const[e,p]=h.useState(1),[i,c]=h.useState(null),{data:d,isLoading:g}=N(),s=d?d.slice().reverse():[],m=r=>{c(r)},x=()=>{c(null)},a=i?s.find(r=>r.id===i):null;return n(P,{children:[n(_,{children:[t(E,{children:"공지사항"}),g?t(u,{}):n(b,{children:[n(M,{children:[t(C,{headers:F}),t(T,{contents:s.slice((e-1)*l,e*l),handleContent:m})]}),t(v,{currentPage:e,totalItems:s.length,itemsPerPage:l,setState:p})]})]}),n(y,{onClose:x,title:`Notice Detail [${i}]`,open:!!i,children:[t(S,{children:t(j,{children:a&&`${a.id}. ${a.title}`})}),t(w,{children:a&&a.content})]})]})};export{z as default};
