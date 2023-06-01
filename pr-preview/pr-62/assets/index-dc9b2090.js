import{c as a,a as C,d as T,e as E,r as n,P as s,j as e,b as l,L as I}from"./index-87737f74.js";import{B as u,P as _}from"./index-9a3c9431.js";import{u as P}from"./useInput-2769ba84.js";import{d as w,b as S}from"./notice-7e969dda.js";const j=a("div",{target:"ebfi2t07"})("display:flex;justify-content:center;flex-direction:column;align-items:center;padding:0 30px;",({theme:t})=>C("min-height:calc(var(--vh, 1vh) * 100 - ",t.layouts.fixedHeight,");",""),";"),L=a("h1",{target:"ebfi2t06"})("font-size:30px;font-weight:bold;margin-bottom:10px;color:",({theme:t})=>t.colors.primary_200,";"),V=a("div",{target:"ebfi2t04"})("display:flex;flex-direction:column;align-items:flex-start;width:100%;border:1px solid ",({theme:t})=>t.colors.light_grey_100,";border-radius:5px;padding:20px;margin:15px 0 30px;"),g=a("label",{target:"ebfi2t03"})("margin-bottom:10px;font-size:17px;color:",({theme:t})=>t.colors.grey_400,";"),k=a("input",{target:"ebfi2t02"})("width:100%;height:35px;margin-bottom:10px;padding:5px;border:1px solid ",({theme:t})=>t.colors.light_grey_100,";border-radius:5px;"),z=a("textarea",{target:"ebfi2t01"})("width:100%;height:200px;resize:none;padding:5px;border:1px solid ",({theme:t})=>t.colors.light_grey_100,";border-radius:5px;"),B=a("div",{target:"ebfi2t00"})({name:"2khgf0",styles:"width:100%;display:grid;gap:10px;grid-template-columns:1fr 1fr"}),M=()=>{const t=T(),{noticeId:o}=E(),[h,d]=n.useState(""),{mutate:f}=w(),{value:x,handleValue:m,setValue:c}=P(""),[p,b]=n.useState(Number(o)),{data:i,isLoading:v}=S(p);n.useEffect(()=>{if(!o)t(s.NOTICE);else{const r=parseInt(o);b(r)}},[o,t]),n.useEffect(()=>{i&&(c(i.title),d(i.content))},[i,c]);const y=()=>{f({id:Number(o),title:x,content:h}),t(s.NOTICE)},N=r=>{d(r.target.value)};return v||p===0?e(I,{}):!i||!o?e("div",{children:"공지사항을 찾을 수 없습니다."}):e(_,{children:l(j,{children:[e(L,{children:"공지사항 수정"}),l(V,{children:[e(g,{htmlFor:"title",children:"제목"}),e(k,{type:"text",id:"title",defaultValue:`${i.title}`,onChange:m}),e(g,{htmlFor:"content",children:"내용"}),e(z,{id:"content",defaultValue:`${i.content}`,onChange:N})]}),l(B,{children:[e(u,{variant:"contained",onClick:y,children:"수정 완료"}),e(u,{variant:"outlined",onClick:()=>t(s.NOTICE),children:"취소"})]})]})})};export{M as default};