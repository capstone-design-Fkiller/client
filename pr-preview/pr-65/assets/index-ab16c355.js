import{c as i,a as h,j as e,b as s,u as p,r as g,L as m,F as d}from"./index-f27add06.js";import{Y as f,M as y,P as x}from"./index-c63dc89a.js";import{T as u,P as l,a as w}from"./index-a046db43.js";import{a as b}from"./building-925df4bd.js";import{u as _}from"./sort-52149f6f.js";const I=i("div",{target:"e1dfhufy4"})("display:flex;justify-content:center;flex-direction:column;align-items:center;padding:0 30px;",({theme:t})=>h("min-height:calc(var(--vh, 1vh) * 100 - ",t.layouts.fixedHeight,");",""),";"),P=i("h1",{target:"e1dfhufy3"})("font-size:25px;font-weight:bold;margin-bottom:10px;color:",({theme:t})=>t.colors.primary_200,";"),v=i("table",{target:"e1dfhufy1"})("width:100%;margin-top:15px;border-collapse:collapse;& tr>td,& tr>th{padding:10px 0;white-space:nowrap;&:first-of-type{padding-left:10px;}}& tbody tr{border-bottom:1px solid ",({theme:t})=>t.colors.light_grey_100,";}"),T=i("h1",{target:"e1dfhufy0"})({name:"lykxvs",styles:"display:flex;font-size:18px;justify-content:center;margin:150px 0"}),E=({contents:t})=>{const o=r=>r===null?"-":typeof r=="boolean"?r?"O":"X":r;return e("tbody",{children:t.map((r,n)=>s(a.Row,{children:[e(a.Item,{children:n+1}),e(a.Item,{children:r.user}),e(a.Item,{children:o(r.priority_1_answer)}),e(a.Item,{children:o(r.priority_2_answer)}),e(a.Item,{children:o(r.priority_3_answer)}),e(a.Item,{children:f(r.created_at,!0)}),e(a.Item,{children:b(r.building_id)})]},r.id))})},a={Row:i("tr",{target:"e9fp1k51"})("font-size:13px;padding:10px;width:100%;transition:0.1s color ease-in-out;&:hover{background-color:",({theme:t})=>t.colors.light_grey_100,";}"),Item:i("td",{target:"e9fp1k50"})({name:"7lr3li",styles:"white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-align:center"})},j=["순위","학번","1st","2nd","3rd","신청시간","건물"],A=()=>{const{me:t}=p();if(!t)throw new Error;const{data:o,isLoading:r}=_(y[(t==null?void 0:t.major)??"학과"]),[n,c]=g.useState(1);return console.log(o),e(x,{children:s(I,{children:[e(P,{children:"사물함 신청 내역"}),r?e(m,{}):e(d,{children:o&&o.length===0?e(T,{children:"신청 내역이 없습니다."}):s(d,{children:[s(v,{children:[e(u,{headers:j}),e(E,{contents:(o==null?void 0:o.slice((n-1)*l,n*l))||[]})]}),e(w,{currentPage:n,totalItems:(o==null?void 0:o.length)||0,itemsPerPage:l,setState:c})]})})]})})};export{A as default};
