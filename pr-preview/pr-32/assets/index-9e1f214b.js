import{c as s,a as C,j as r,r as o,d as a}from"./index-1bafbbf0.js";import{B as i}from"./index-6afcb22a.js";import{M,P as O}from"./index-de45f4df.js";const j=s("section",{target:"e1a6068d3"})("display:flex;flex-direction:column;justify-content:center;padding:0 30px;",({theme:e})=>C("min-height:calc(var(--vh, 1vh) * 100 - ",e.layouts.bottomNavHeight,");",""),";"),w=s("div",{target:"e1a6068d2"})("display:flex;justify-content:center;align-items:center;width:100%;height:354px;border:1px solid ",({theme:e})=>e.colors.grey_100,";border-radius:5px;"),B=s("div",{target:"e1a6068d1"})("display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:50px;& button{border:1px solid ",({theme:e})=>e.colors.grey_100,";}"),g=s("section",{target:"e1a6068d0"})({name:"gofkhs",styles:"display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:30px 0"}),x={name:"ll3szn",styles:"width:100%;aspect-ratio:1;border:1px solid"},D=s("div",{target:"e1c3rg5b0"})("width:300px;height:50%;padding:20px 30px;border-radius:5px;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);background-color:",({theme:e})=>e.colors.white_300,";"),f=e=>{const{title:l,open:n,onClose:d,children:c}=e;return r(M,{"aria-labelledby":l,open:n,onClose:d,children:r(D,{children:c})})},m=["인문과학관","교수개발학습원","국제학사","사이버관","본관"],I=()=>{const[e,l]=o.useState(""),[n,d]=o.useState(""),[c,y]=o.useState(!1),[p,b]=o.useState(!1),[S,k]=o.useState(),v=t=>{e!==t.currentTarget.innerText&&l(t.currentTarget.innerText)},T=t=>{n!==t.currentTarget.innerText&&d(t.currentTarget.innerText)},u=()=>y(!c),h=()=>b(!p);return o.useEffect(()=>{e&&n&&k("사물함")},[e,n]),a(O,{children:[a(j,{children:[r(w,{children:S||"사물함 정보를 선택해주세요."}),a(B,{children:[r(i,{onClick:u,children:e||"건물 선택"}),r(i,{onClick:h,children:n||"학과 선택"})]})]}),a(f,{title:"건물",open:c,onClose:u,children:[r("h1",{children:"원하는 건물을 선택해주세요."}),r(g,{children:m.map(t=>r(i,{onClick:v,css:x,variant:e===t?"contained":"outlined",children:t},t))})]}),a(f,{title:"학과",open:p,onClose:h,children:[r("h1",{children:"학과를 선택해주세요."}),r(g,{children:m.map(t=>r(i,{onClick:T,css:x,variant:n===t?"contained":"outlined",children:t},t))})]})]})};export{I as default};
