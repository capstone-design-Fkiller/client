import{c as o,a as C,d as T,e as E,r as n,P as s,j as e,b as l,L as I}from"./index-c1d704d5.js";import{B as u}from"./index-46917494.js";import{P as _}from"./index-9c037ae0.js";import{u as P}from"./useInput-d31e6e57.js";import{d as w,b as S}from"./notice-ad0390b2.js";const j=o("div",{target:"ebfi2t07"})("display:flex;justify-content:center;flex-direction:column;align-items:center;padding:0 30px;",({theme:t})=>C("min-height:calc(var(--vh, 1vh) * 100 - ",t.layouts.fixedHeight,");",""),";"),L=o("h1",{target:"ebfi2t06"})("font-size:25px;font-weight:bold;margin-bottom:10px;color:",({theme:t})=>t.colors.primary_200,";"),V=o("div",{target:"ebfi2t04"})("display:flex;flex-direction:column;align-items:flex-start;width:100%;border:1px solid ",({theme:t})=>t.colors.light_grey_100,";border-radius:5px;padding:20px;margin:15px 0 30px;"),g=o("label",{target:"ebfi2t03"})("margin-bottom:10px;font-size:17px;color:",({theme:t})=>t.colors.grey_400,";"),k=o("input",{target:"ebfi2t02"})("width:100%;height:35px;margin-bottom:10px;padding:5px;border:1px solid ",({theme:t})=>t.colors.light_grey_100,";border-radius:5px;"),z=o("textarea",{target:"ebfi2t01"})("width:100%;height:200px;resize:none;padding:5px;border:1px solid ",({theme:t})=>t.colors.light_grey_100,";border-radius:5px;"),B=o("div",{target:"ebfi2t00"})({name:"2khgf0",styles:"width:100%;display:grid;gap:10px;grid-template-columns:1fr 1fr"}),$=()=>{const t=T(),{noticeId:a}=E(),[h,d]=n.useState(""),{mutate:f}=w(),{value:m,handleValue:x,setValue:c}=P(""),[p,b]=n.useState(Number(a)),{data:i,isLoading:v}=S(p);n.useEffect(()=>{if(!a)t(s.NOTICE);else{const r=parseInt(a);b(r)}},[a,t]),n.useEffect(()=>{i&&(c(i.title),d(i.content))},[i,c]);const y=()=>{f({id:Number(a),title:m,content:h}),t(s.NOTICE)},N=r=>{d(r.target.value)};return v||p===0?e(I,{}):!i||!a?e("div",{children:"공지사항을 찾을 수 없습니다."}):e(_,{children:l(j,{children:[e(L,{children:"공지사항 수정"}),l(V,{children:[e(g,{htmlFor:"title",children:"제목"}),e(k,{type:"text",id:"title",defaultValue:`${i.title}`,onChange:x}),e(g,{htmlFor:"content",children:"내용"}),e(z,{id:"content",defaultValue:`${i.content}`,onChange:N})]}),l(B,{children:[e(u,{variant:"contained",onClick:y,children:"수정 완료"}),e(u,{variant:"outlined",onClick:()=>t(s.NOTICE),children:"취소"})]})]})})};export{$ as default};
