import{c as o,r as d,b as s,j as r}from"./index-31c49b9a.js";import{I as c}from"./index-1a2f8c7b.js";const g=o("div",{target:"e14rp29q4"})({name:"pw7jst",styles:"position:relative;width:100%"}),x=o("label",{target:"e14rp29q3"})({name:"1ol2l4j",styles:"display:flex;justify-content:space-between;align-items:center;transition:all 0.3s ease-in-out;cursor:pointer;padding:0 10px;& .flipped{transform:rotateX(180deg);}"}),h=o("ul",{target:"e14rp29q1"})("display:",({isOpen:e})=>e?"flex":"none",";flex-direction:column;position:absolute;width:100%;margin:10px 0;font-size:14px;padding:10px 0;border-radius:5px;border:1px solid ",({theme:e})=>e.colors.light_grey_200,";background-color:",({theme:e})=>e.colors.white_300,";overflow:hidden;z-index:999;"),m=o("li",{target:"e14rp29q0"})("position:relative;padding:10px 10px;margin:0 10px;border-radius:5px;&:hover{background-color:",({theme:e})=>e.colors.light_grey_100,";}&:not(:last-of-type){border-bottom:1px solid ",({theme:e})=>e.colors.light_grey_100,";}"),y=e=>{const{value:i,list:l,handleChange:a}=e,[t,p]=d.useState(!1);return s(g,{onClick:()=>p(!t),children:[s(x,{children:[i,r(c,{iconName:"dropdown",className:t?"flipped":"non-flipped"})]}),r(h,{isOpen:t,children:l.map(n=>r(m,{onClick:a,children:n},n))})]})};export{y as S};
