import{u as P,d as T,j as t,r as s,L as C,a as r,P as c}from"./index-3323f89b.js";import{e as v,c as g,T as x,B,R as I}from"./notice-d769eb17.js";import{B as u}from"./index-8a758e3c.js";import{P as V}from"./index-34159e6a.js";import{P as b}from"./index-a9fd44f5.js";import{u as l}from"./useInput-66c20d28.js";const R=()=>{const a=P(),{noticeId:n}=T(),{mutate:d}=v(),{data:e,isLoading:m}=g(Number(n)),{value:o,handleValue:f,setValue:h}=l(""),{value:i,handleValue:p,setValue:N}=l(""),E=()=>{d({id:Number(n),title:o,content:i}),a(c.NOTICE)};return m?t(C,{}):e?(s.useEffect(()=>{h(e.title)},[e]),s.useEffect(()=>{N(e.content)},[e]),t(V,{children:r(I,{children:[t(x,{children:"공지사항 수정"}),t(b.Edit,{title:o,handleTitle:f,content:i,handleContent:p}),r(B,{children:[t(u,{variant:"contained",onClick:E,children:"수정 완료"}),t(u,{variant:"outlined",onClick:()=>a(c.NOTICE),children:"취소"})]})]})})):t("p",{children:"정보를 불러올 수 없습니다. 다시 시도해주세요!"})};export{R as default};
