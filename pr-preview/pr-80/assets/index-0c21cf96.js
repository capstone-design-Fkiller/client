import{c as i,a as h,d as m,r as x,j as e,b as o,P as r}from"./index-7744632d.js";import{B as l}from"./index-0d4b4f37.js";import{P as u}from"./index-8583504a.js";import{u as v}from"./useInput-acdb3239.js";import{a as f}from"./notice-c576f4da.js";const b=i("div",{target:"e4evitm6"})("display:flex;justify-content:center;flex-direction:column;align-items:center;padding:0 30px;",({theme:t})=>h("min-height:calc(var(--vh, 1vh) * 100 - ",t.layouts.fixedHeight,");",""),";"),y=i("h1",{target:"e4evitm5"})("font-size:25px;font-weight:bold;margin-bottom:10px;color:",({theme:t})=>t.colors.primary_200,";"),C=i("div",{target:"e4evitm4"})("display:flex;flex-direction:column;align-items:flex-start;width:100%;border:1px solid ",({theme:t})=>t.colors.light_grey_100,";border-radius:5px;padding:20px;margin:15px 0 30px;"),s=i("label",{target:"e4evitm3"})("margin-bottom:10px;font-size:15px;color:",({theme:t})=>t.colors.grey_400,";"),_=i("input",{target:"e4evitm2"})("width:100%;height:35px;margin-bottom:10px;padding:5px;border:1px solid ",({theme:t})=>t.colors.light_grey_100,";border-radius:5px;"),T=i("textarea",{target:"e4evitm1"})("width:100%;height:200px;resize:none;padding:5px;border:1px solid ",({theme:t})=>t.colors.light_grey_100,";border-radius:5px;"),N=i("div",{target:"e4evitm0"})({name:"2khgf0",styles:"width:100%;display:grid;gap:10px;grid-template-columns:1fr 1fr"}),B=()=>{const t=m(),[a,d]=x.useState(""),{mutate:c}=f(),{value:n,handleValue:p}=v("");return e(u,{children:o(b,{children:[e(y,{children:"공지사항 작성"}),o(C,{children:[e(s,{htmlFor:"title",children:"제목"}),e(_,{type:"text",id:"title",value:n,onChange:p,placeholder:"제목을 작성해주세요."}),e(s,{htmlFor:"content",children:"내용"}),e(T,{id:"content",value:a,onChange:g=>{d(g.target.value)},placeholder:"내용을 작성해주세요."})]}),o(N,{children:[e(l,{variant:"contained",onClick:()=>{c({title:n,content:a}),t(r.NOTICE)},children:"등록하기"}),e(l,{variant:"outlined",onClick:()=>t(r.NOTICE),children:"취소"})]})]})})};export{B as default};
