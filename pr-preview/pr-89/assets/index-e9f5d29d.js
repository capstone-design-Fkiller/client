import{c as i,e as h,j as e,a as s,b as p,r as g,L as m,F as l}from"./index-83cb571a.js";import{Y as f,M as y,P as x}from"./index-12354551.js";import{T as u,P as d,a as w}from"./index-6d0914f7.js";import{a as b}from"./building-925df4bd.js";import{u as _}from"./sort-adee0975.js";const I=i("div",{target:"e1dfhufy4"})("display:flex;justify-content:center;flex-direction:column;align-items:center;padding:0 30px;",({theme:t})=>h("min-height:calc(var(--vh, 1vh) * 100 - ",t.layouts.fixedHeight,");",""),";"),P=i("h1",{target:"e1dfhufy3"})("font-size:25px;font-weight:bold;margin-bottom:10px;color:",({theme:t})=>t.colors.primary_200,";"),v=i("table",{target:"e1dfhufy1"})("width:100%;margin-top:15px;border-collapse:collapse;& tr>td,& tr>th{padding:10px 0;white-space:nowrap;&:first-of-type{padding-left:10px;}}& tbody tr{border-bottom:1px solid ",({theme:t})=>t.colors.light_grey_100,";}"),T=i("h1",{target:"e1dfhufy0"})({name:"lykxvs",styles:"display:flex;font-size:18px;justify-content:center;margin:150px 0"}),E=({contents:t})=>{const a=r=>r===null?"-":typeof r=="boolean"?r?"O":"X":r;return e("tbody",{children:t.map((r,n)=>s(o.Row,{children:[e(o.Item,{children:n+1}),e(o.Item,{children:r.user}),e(o.Item,{children:a(r.priority_1_answer)}),e(o.Item,{children:a(r.priority_2_answer)}),e(o.Item,{children:a(r.priority_3_answer)}),e(o.Item,{children:f(r.created_at,!0)}),e(o.Item,{children:b(r.building_id)})]},r.id))})},o={Row:i("tr",{target:"e9fp1k51"})("font-size:13px;padding:10px;width:100%;transition:0.1s color ease-in-out;&:hover{background-color:",({theme:t})=>t.colors.light_grey_100,";}"),Item:i("td",{target:"e9fp1k50"})({name:"7lr3li",styles:"white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-align:center"})},j=["순위","학번","1st","2nd","3rd","신청시간","건물"],A=()=>{const{me:t}=p();if(!t)throw new Error;const{data:a,isLoading:r}=_(y[(t==null?void 0:t.major)??"학과"]),[n,c]=g.useState(1);return e(x,{children:s(I,{children:[e(P,{children:"사물함 신청 내역"}),r?e(m,{}):e(l,{children:a&&a.length===0?e(T,{children:"신청 내역이 없습니다."}):s(l,{children:[s(v,{children:[e(u,{headers:j}),e(E,{contents:(a==null?void 0:a.slice((n-1)*d,n*d))||[]})]}),e(w,{currentPage:n,totalItems:(a==null?void 0:a.length)||0,itemsPerPage:d,setState:c})]})})]})})};export{A as default};
