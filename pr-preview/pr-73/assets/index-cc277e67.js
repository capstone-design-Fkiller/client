import{c as s,a as P,j as t,r as g,b as p,L as D,F as k,u as E,d as L,P as M}from"./index-ce9722d6.js";import{B as T}from"./index-15f7406a.js";import{Y as R,I as A,M as m,P as C}from"./index-9ede1571.js";import{a as F}from"./building-925df4bd.js";import{T as j,P as u,a as S}from"./index-e9763a84.js";import{u as z}from"./major-aef3c494.js";import{u as N,a as q}from"./sort-8e3abe04.js";const B=s("div",{target:"e1hp0tas2"})("display:flex;justify-content:center;flex-direction:column;align-items:center;padding:0 30px;",({theme:e})=>P("min-height:calc(var(--vh, 1vh) * 100 - ",e.layouts.fixedHeight,");",""),";"),H=s("h1",{target:"e1hp0tas1"})("font-size:25px;font-weight:bold;margin-bottom:10px;color:",({theme:e})=>e.colors.primary_200,";"),O=s("div",{target:"e1hp0tas0"})("font-size:14px;font-weight:400;text-align:center;margin-bottom:5px;color:",({theme:e})=>e.colors.grey_300,";"),Y=s("table",{target:"e1o1mye44"})("width:100%;margin-top:15px;border-collapse:collapse;& tr>td,& tr>th{padding:10px 5px;white-space:nowrap;&:first-of-type{padding-left:10px;}}& tbody tr{border-bottom:1px solid ",({theme:e})=>e.colors.light_grey_100,";}"),G=s("div",{target:"e1o1mye43"})("width:340px;overflow-x:scroll;scrollbar-width:thin;&::-webkit-scrollbar{width:5px;height:5px;background-color:",({theme:e})=>e.colors.background_2,";}&::-webkit-scrollbar-thumb{background-color:",({theme:e})=>e.colors.primary_100,";border-radius:10px;height:5px;}"),J=s("h1",{target:"e1o1mye42"})({name:"lykxvs",styles:"display:flex;font-size:18px;justify-content:center;margin:150px 0"}),W=({contents:e,handleDelete:l})=>{const n=r=>r===null?"-":typeof r=="boolean"?r?"O":"X":r,o=r=>{confirm("정말 삭제하시겠습니까?")&&l(r)};return t("tbody",{children:e.map((r,a)=>t(g.Fragment,{children:p(i.Row,{children:[t(i.Item,{children:a+1}),t(i.Item,{children:r.user}),t(i.Item,{children:n(r.priority_1_answer)}),t(i.Item,{children:n(r.priority_2_answer)}),t(i.Item,{children:n(r.priority_3_answer)}),t(i.Item,{children:R(r.created_at,!0)}),t(i.Item,{children:F(r.building_id)}),t(i.IconItem,{onClick:()=>o(r.id),children:t(A,{iconName:"trashcan",size:"18"})})]})},r.id))})},i={Row:s("tr",{target:"euuqw8s2"})("font-size:13px;padding:10px;width:100%;transition:0.1s color ease-in-out;&:hover{background-color:",({theme:e})=>e.colors.light_grey_100,";}"),Item:s("td",{target:"euuqw8s1"})({name:"7lr3li",styles:"white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-align:center"}),IconItem:s("td",{target:"euuqw8s0"})("display:flex;flex-direction:column;align-items:center;cursor:pointer;&:hover svg path{stroke:",({theme:e})=>e.colors.error_100,";}")},X=["No.","학번","1st","2nd","3rd","신청시간","건물","삭제"],K=e=>{const{currentPage:l,setCurrentPage:n,currentSort:o,handleDelete:r,isLoading:a}=e;return a?t(D,{}):o!=null&&o.length?p(k,{children:[t(G,{children:p(Y,{children:[t(j,{headers:X}),t(W,{contents:(o==null?void 0:o.slice((l-1)*u,l*u))||[],handleDelete:r})]})}),t(S,{currentPage:l,totalItems:(o==null?void 0:o.length)||0,itemsPerPage:u,setState:n})]}):t(J,{children:"사물함 신청자가 없습니다."})},re=()=>{const{me:e}=E();if(!e)throw new Error;const l=L(),{data:n,isLoading:o}=N(m[(e==null?void 0:e.major)||"학과"]),{mutate:r}=q(),[a,f]=g.useState(n),[y,w]=g.useState(1),{majorInfo:c}=z(m[e.major],!1),b=()=>{if(!(c!=null&&c.apply_end_date))return!1;if(new Date(c==null?void 0:c.apply_end_date)<=new Date)return!0},_=h=>{f(d=>d==null?void 0:d.filter(I=>I.id!==h))},v=()=>{const h=a==null?void 0:a.map(x=>x.id);confirm("확정 후엔 변경이 불가합니다.")&&r({major:m[e.major],sortResult:{list:h||[]}},{onSuccess:()=>{l(M.MAIN)}})};return g.useEffect(()=>{f(n)},[n]),t(C,{children:p(B,{children:[t(H,{children:"사물함 배정 예상 결과"}),p(O,{children:[t("p",{children:"사물함 신청이 끝나면 배정 확정 버튼이 활성화됩니다."}),t("p",{children:"페이지를 나가면 변경사항이 모두 사라집니다."})]}),t(K,{isLoading:o,currentSort:a,currentPage:y,setCurrentPage:w,handleDelete:_}),b()&&(n!=null&&n.length)?t(T,{variant:"contained",color:"primary",onClick:v,children:"배정 확정하기"}):void 0]})})};export{re as default};
