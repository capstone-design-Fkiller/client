import{c as r,e as l,a as n,j as e,b as s}from"./index-74a95d2e.js";import{B as a}from"./index-28e51542.js";import{I as c,P as d}from"./index-443a8384.js";const m=r("section",{target:"e1yy22ef2"})("display:flex;flex-direction:column;justify-content:center;align-items:center;padding:0 30px;",({theme:t})=>l("min-height:calc(var(--vh, 1vh) * 100 - ",t.layouts.fixedHeight,");",""),";"),f=r("h1",{target:"e1yy22ef1"})("font-size:25px;font-weight:bold;margin-bottom:30px;color:",({theme:t})=>t.colors.primary_200,";"),h=r("div",{target:"e1e33lyv3"})({name:"19mwu97",styles:"display:grid;align-items:center;justify-content:center;text-align:center;margin-bottom:50px;p{font-size:20px;font-weight:bold;}"}),g=r("div",{target:"e1e33lyv2"})({name:"1e3x3sk",styles:"display:flex;flex-direction:column;width:100%;margin-bottom:30px"}),p=r("div",{target:"e1e33lyv1"})({name:"ezp8x3",styles:"display:flex;flex-direction:column;align-items:flex-start;justify-content:center;margin-left:10px;gap:20px"}),o=r("b",{target:"e1e33lyv0"})({name:"1efi8gv",styles:"font-weight:bold"}),x=t=>{const{me:i}=t;return n(g,{children:[n(h,{children:[e(c,{iconName:"user",size:"120",hasCursor:!1}),e("p",{children:i.name})]}),n(p,{children:[n("p",{children:[e(o,{children:"✔️ 내 학과 "}),i.major]}),n("p",{children:[e(o,{children:"✔️ 내 학번 "}),`${i.id}`]}),n("p",{children:[e(o,{children:"✔️ 내 상태 "}),i.is_usermode?"사용자":"관리자"]})]})]})},b=()=>{const{me:t,logout:i}=s();if(!t)throw new Error;return e(d,{children:n(m,{children:[e(f,{children:"내 정보"}),e(x,{me:t}),e(a,{onClick:i,color:"error",variant:"outlined",children:"로그아웃"})]})})};export{b as default};