import{c as r,a as b,j as t,b as c,u as w,d as v,r as p,L as P,F as g,P as m}from"./index-0422ad27.js";import{Y as T,M as C,B as _,P as E}from"./index-bcab5ad6.js";import{P as d,a as N}from"./index-c95f69d4.js";import{u as j}from"./notice-9cbd2070.js";const I=r("div",{target:"e1ch39564"})("display:flex;justify-content:center;flex-direction:column;align-items:center;padding:0 30px;",({theme:e})=>b("min-height:calc(var(--vh, 1vh) * 100 - ",e.layouts.fixedHeight,");",""),";"),S=r("h1",{target:"e1ch39563"})("font-size:30px;font-weight:bold;margin-bottom:10px;color:",({theme:e})=>e.colors.primary_200,";"),M=r("h1",{target:"e1ch39562"})("font-size:20px;font-weight:bold;margin-bottom:10px;color:",({theme:e})=>e.colors.primary_100,";"),A=r("table",{target:"e1ch39561"})("width:100%;margin-top:15px;border-collapse:collapse;& tr>td,& tr>th{padding:10px 0;white-space:nowrap;&:first-of-type{padding-left:10px;}}& tbody tr{border-bottom:1px solid ",({theme:e})=>e.colors.light_grey_100,";}"),F=r("h1",{target:"e1ch39560"})({name:"lykxvs",styles:"display:flex;font-size:18px;justify-content:center;margin:150px 0"}),H=e=>{const{contents:n,handleContent:o}=e;return t("tbody",{children:n.map(a=>c(i.Row,{onClick:()=>o(a.id),children:[t(i.Item,{children:a.id}),t(i.Item,{children:a.title}),t(i.Item,{children:T(a.created_at)})]},a.id))})},i={Row:r("tr",{target:"eqqh4ra1"})("font-size:14px;width:100%;padding:10px;cursor:pointer;transition:0.1s color ease-in-out;&:hover{color:",({theme:e})=>e.colors.primary_200,";}"),Item:r("td",{target:"eqqh4ra0"})({name:"7lr3li",styles:"white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-align:center"})},R=e=>{const{headers:n}=e;return t(f.Head,{children:t("tr",{children:n.map(o=>t(f.Item,{children:o},o))})})},f={Head:r("thead",{target:"e1rhunsf1"})("font-size:16px;font-weight:bold;background-color:",({theme:e})=>e.colors.primary_200,";border-radius:5px;"),Item:r("th",{target:"e1rhunsf0"})({name:"7lr3li",styles:"white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-align:center"})},k=["ID","제목","작성일"],B=()=>{const{me:e}=w(),n=v(),[o,a]=p.useState(1),[z,x]=p.useState(0),{data:s,isLoading:u}=j(C[(e==null?void 0:e.major)||0]),h=s?s.slice().reverse():[],y=l=>{x(l),l!==0&&n(`${m.NOTICE}/${l}`)};return t(E,{children:c(I,{children:[t(S,{children:"공지사항"}),t(M,{children:e==null?void 0:e.major}),u?t(P,{}):t(g,{children:s&&s.length===0?t(F,{children:"공지사항이 없습니다."}):c(g,{children:[c(A,{children:[t(R,{headers:k}),t(H,{contents:h.slice((o-1)*d,o*d),handleContent:y})]}),t(N,{currentPage:o,totalItems:h.length,itemsPerPage:d,setState:a})]})}),(e==null?void 0:e.is_usermode)||t(_,{variant:"contained",onClick:()=>n(m.NOTICE_CREATE),children:"새 공지사항 작성하기"})]})})};export{B as default};
