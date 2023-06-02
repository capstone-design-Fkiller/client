import{c as s,a as I,j as e,r as x,b as p,L as P,F as D,u as R,d as E,P as L}from"./index-74c076b4.js";import{B as M}from"./index-aa063995.js";import{Y as T,I as S,M as u,P as A}from"./index-c9f145be.js";import{a as C}from"./building-925df4bd.js";import{T as F,P as f,a as j}from"./index-57f0a30d.js";import{u as k}from"./major-0f7b033f.js";import{u as z,a as q}from"./sort-7607ae3f.js";const B=s("div",{target:"e1hp0tas2"})("display:flex;justify-content:center;flex-direction:column;align-items:center;padding:0 30px;",({theme:t})=>I("min-height:calc(var(--vh, 1vh) * 100 - ",t.layouts.fixedHeight,");",""),";"),H=s("h1",{target:"e1hp0tas1"})("font-size:25px;font-weight:bold;margin-bottom:10px;color:",({theme:t})=>t.colors.primary_200,";"),w=s("div",{target:"e1hp0tas0"})("font-size:14px;font-weight:400;text-align:center;margin-bottom:5px;color:",({theme:t})=>t.colors.grey_300,";"),N=s("table",{target:"e1o1mye43"})("width:100%;margin-top:15px;border-collapse:collapse;& tr>td,& tr>th{padding:10px 5px;white-space:nowrap;&:first-of-type{padding-left:10px;}}& tbody tr{border-bottom:1px solid ",({theme:t})=>t.colors.light_grey_100,";}"),O=s("h1",{target:"e1o1mye42"})({name:"lykxvs",styles:"display:flex;font-size:18px;justify-content:center;margin:150px 0"}),Y=({contents:t,handleDelete:i})=>{const a=r=>r===null?"-":typeof r=="boolean"?r?"O":"X":r,n=r=>{confirm("정말 삭제하시겠습니까?")&&i(r)};return e("tbody",{children:t.map(r=>e(x.Fragment,{children:p(o.Row,{children:[e(o.Item,{children:r.user}),e(o.Item,{children:a(r.priority_1_answer)}),e(o.Item,{children:a(r.priority_2_answer)}),e(o.Item,{children:a(r.priority_3_answer)}),e(o.Item,{children:T(r.created_at,!0)}),e(o.Item,{children:C(r.building_id)}),e(o.IconItem,{onClick:()=>n(r.id),children:e(S,{iconName:"trashcan",size:"18"})})]})},r.id))})},o={Row:s("tr",{target:"euuqw8s2"})("font-size:13px;padding:10px;width:100%;transition:0.1s color ease-in-out;&:hover{background-color:",({theme:t})=>t.colors.light_grey_100,";}"),Item:s("td",{target:"euuqw8s1"})({name:"7lr3li",styles:"white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-align:center"}),IconItem:s("td",{target:"euuqw8s0"})("display:flex;flex-direction:column;align-items:center;cursor:pointer;&:hover svg path{stroke:",({theme:t})=>t.colors.error_100,";}")},G=["학번","1st","2nd","3rd","신청시간","건물","삭제"],J=t=>{const{currentPage:i,setCurrentPage:a,currentSort:n,handleDelete:r,isLoading:l,sorts:h}=t;return l?e(P,{}):h&&!h.length?e(O,{children:"사물함 신청자가 없습니다."}):p(D,{children:[p(N,{children:[e(F,{headers:G}),e(Y,{contents:(n==null?void 0:n.slice((i-1)*f,i*f))||[],handleDelete:r})]}),e(j,{currentPage:i,totalItems:(n==null?void 0:n.length)||0,itemsPerPage:f,setState:a})]})},re=()=>{const{me:t}=R();if(!t)throw new Error;const i=E(),{data:a,isLoading:n}=z(u[(t==null?void 0:t.major)??"학과"]),{mutate:r}=q(),[l,h]=x.useState(a),[_,v]=x.useState(1),{majorInfo:c}=k(u[t.major],!1),y=()=>{if(!(c!=null&&c.apply_end_date))throw new Error;if(new Date(c==null?void 0:c.apply_end_date)<new Date)return!0};return e(A,{children:p(B,{children:[e(H,{children:"사물함 배정 예상 결과"}),p(w,{children:[e("p",{children:"사물함 신청이 끝나면 배정 확정 버튼이 활성화됩니다."}),e("p",{children:"페이지를 나가면 변경사항이 모두 사라집니다."})]}),e(J,{isLoading:n,sorts:a,currentSort:l,currentPage:_,setCurrentPage:v,handleDelete:m=>{y()||h(d=>d==null?void 0:d.filter(b=>b.id!==m))}}),e(w,{children:e("p",{children:"배정 확정 버튼을 누른 이후엔 변경이 불가합니다!!"})}),e(M,{variant:"contained",color:"primary",onClick:()=>{if(y())return;const g=l==null?void 0:l.map(d=>d.id);r({major:u[t.major],sortResult:{list:g||[]}}),i(L.MAIN)},children:"배정 확정하기"})]})})};export{re as default};