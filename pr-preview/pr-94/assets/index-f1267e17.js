import{b as h,u as m,d as N,j as e,a as s,P as n,L as f}from"./index-a52da1e3.js";import{c as p,d as P,T,a as C,B as v,R as g}from"./notice-80c223c7.js";import{B as r}from"./index-2198dce7.js";import{P as j}from"./index-9c4e7e7b.js";import{P as k}from"./index-c7ee2057.js";const x=()=>{const{me:t}=h(),i=m(),{noticeId:a}=N(),{data:o,isLoading:c}=p(Number(a)),{mutate:d}=P();if(c)return e(f,{});const l=()=>{confirm("정말 삭제하시겠습니까?")&&(d(Number(a)),i(n.NOTICE))},u=()=>{i(`${n.NOTICE}/edit/${a}`)};return!o||!a||isNaN(parseInt(a))?e("div",{children:"공지사항을 찾을 수 없습니다."}):e(j,{children:s(g,{children:[e(T,{children:"공지사항"}),e(C,{children:t==null?void 0:t.major}),e(k,{...o,created:o.created_at}),(t==null?void 0:t.is_usermode)||s(v,{children:[e(r,{variant:"outlined",onClick:u,children:"수정하기"}),e(r,{variant:"outlined",onClick:l,color:"error",children:"삭제하기"})]}),e(r,{variant:"contained",onClick:()=>i(n.NOTICE),children:"닫기"})]})})};export{x as default};
