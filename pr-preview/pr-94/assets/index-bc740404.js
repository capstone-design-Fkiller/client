import{u as P,d as T,j as t,r as s,L as C,a as r,P as c}from"./index-a52da1e3.js";import{e as v,c as g,T as x,B,R as I}from"./notice-80c223c7.js";import{B as u}from"./index-2198dce7.js";import{P as V}from"./index-9c4e7e7b.js";import{P as b}from"./index-c7ee2057.js";import{u as l}from"./useInput-c3c2ffc5.js";const R=()=>{const a=P(),{noticeId:n}=T(),{mutate:d}=v(),{data:e,isLoading:m}=g(Number(n)),{value:o,handleValue:f,setValue:h}=l(""),{value:i,handleValue:p,setValue:N}=l(""),E=()=>{d({id:Number(n),title:o,content:i}),a(c.NOTICE)};return m?t(C,{}):e?(s.useEffect(()=>{h(e.title)},[e]),s.useEffect(()=>{N(e.content)},[e]),t(V,{children:r(I,{children:[t(x,{children:"공지사항 수정"}),t(b.Edit,{title:o,handleTitle:f,content:i,handleContent:p}),r(B,{children:[t(u,{variant:"contained",onClick:E,children:"수정 완료"}),t(u,{variant:"outlined",onClick:()=>a(c.NOTICE),children:"취소"})]})]})})):t("p",{children:"정보를 불러올 수 없습니다. 다시 시도해주세요!"})};export{R as default};
