import{c as r,a as y,j as e,b as n,u as b,d as T,r as p,L as v,F as g,P as m}from"./index-bad2ef9e.js";import{B as w}from"./index-743af53a.js";import{Y as P,M as C,P as E}from"./index-0c6dd315.js";import{T as _,P as d,a as j}from"./index-a906dcd0.js";import{u as N}from"./notice-c5778701.js";const I=r("div",{target:"e1ch39564"})("display:flex;justify-content:center;flex-direction:column;align-items:center;padding:0 30px;",({theme:t})=>y("min-height:calc(var(--vh, 1vh) * 100 - ",t.layouts.fixedHeight,");",""),";"),M=r("h1",{target:"e1ch39563"})("font-size:25px;font-weight:bold;margin-bottom:10px;color:",({theme:t})=>t.colors.primary_200,";"),S=r("h1",{target:"e1ch39562"})("font-size:17px;font-weight:bold;margin-bottom:10px;color:",({theme:t})=>t.colors.primary_100,";"),A=r("table",{target:"e1ch39561"})("width:100%;margin-top:15px;border-collapse:collapse;& tr>td,& tr>th{padding:10px 0;white-space:nowrap;&:first-of-type{padding-left:10px;}}& tbody tr{border-bottom:1px solid ",({theme:t})=>t.colors.light_grey_100,";}"),F=r("h1",{target:"e1ch39560"})({name:"lykxvs",styles:"display:flex;font-size:18px;justify-content:center;margin:150px 0"}),R=t=>{const{contents:i,handleContent:a}=t;return e("tbody",{children:i.map(o=>n(s.Row,{onClick:()=>a(o.id),children:[e(s.Item,{children:o.id}),e(s.Item,{children:o.title}),n(s.Item,{children:["관리자",o.major]}),e(s.Item,{children:P(o.created_at)})]},o.id))})},s={Row:r("tr",{target:"e61b26a1"})("font-size:13px;width:100%;padding:10px;cursor:pointer;transition:0.1s color ease-in-out;&:hover{color:",({theme:t})=>t.colors.primary_200,";}"),Item:r("td",{target:"e61b26a0"})({name:"7lr3li",styles:"white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-align:center"})},k=["ID","제목","작성자","작성일"],Y=()=>{const{me:t}=b(),i=T(),[a,o]=p.useState(1),[z,f]=p.useState(0),{data:c,isLoading:x}=N(C[(t==null?void 0:t.major)||0]),h=c?c.slice().reverse():[],u=l=>{f(l),l!==0&&i(`${m.NOTICE}/${l}`)};return e(E,{children:n(I,{children:[e(M,{children:"공지사항"}),e(S,{children:t==null?void 0:t.major}),x?e(v,{}):e(g,{children:c&&c.length===0?e(F,{children:"공지사항이 없습니다."}):n(g,{children:[n(A,{children:[e(_,{headers:k}),e(R,{contents:h.slice((a-1)*d,a*d),handleContent:u})]}),e(j,{currentPage:a,totalItems:h.length,itemsPerPage:d,setState:o})]})}),(t==null?void 0:t.is_usermode)||e(w,{variant:"contained",onClick:()=>i(m.NOTICE_CREATE),children:"새 공지사항 작성하기"})]})})};export{Y as default};
