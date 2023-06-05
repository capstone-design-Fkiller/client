import{c as s,a as _,j as t,r as h,b as c,L as I,F as P,u as j,d as L,P as M}from"./index-0998911e.js";import{B as T}from"./index-70ae3568.js";import{Y as k,I as R,M as m,P as C}from"./index-2eb6dc0c.js";import{a as E}from"./building-925df4bd.js";import{T as F,P as g,a as A}from"./index-0881372d.js";import{u as S}from"./major-3125efac.js";import{u as D,a as z}from"./sort-49c20899.js";const N=s("div",{target:"e1hp0tas2"})("display:flex;justify-content:center;flex-direction:column;align-items:center;padding:0 30px;",({theme:e})=>_("min-height:calc(var(--vh, 1vh) * 100 - ",e.layouts.fixedHeight,");",""),";"),q=s("h1",{target:"e1hp0tas1"})("font-size:25px;font-weight:bold;margin-bottom:10px;color:",({theme:e})=>e.colors.primary_200,";"),B=s("div",{target:"e1hp0tas0"})("font-size:14px;font-weight:400;text-align:center;margin-bottom:5px;color:",({theme:e})=>e.colors.grey_300,";"),H=s("table",{target:"e1o1mye44"})("width:100%;margin-top:15px;border-collapse:collapse;& tr>td,& tr>th{padding:10px 5px;white-space:nowrap;&:first-of-type{padding-left:10px;}}& tbody tr{border-bottom:1px solid ",({theme:e})=>e.colors.light_grey_100,";}"),O=s("div",{target:"e1o1mye43"})("width:340px;overflow-x:scroll;scrollbar-width:thin;&::-webkit-scrollbar{width:5px;height:5px;background-color:",({theme:e})=>e.colors.background_2,";}&::-webkit-scrollbar-thumb{background-color:",({theme:e})=>e.colors.primary_100,";border-radius:10px;height:5px;}"),Y=s("h1",{target:"e1o1mye42"})({name:"lykxvs",styles:"display:flex;font-size:18px;justify-content:center;margin:150px 0"}),G=({contents:e,handleDelete:l})=>{const n=r=>r===null?"-":typeof r=="boolean"?r?"O":"X":r,o=r=>{confirm("정말 삭제하시겠습니까?")&&l(r)};return t("tbody",{children:e.map((r,a)=>t(h.Fragment,{children:c(i.Row,{children:[t(i.Item,{children:a+1}),t(i.Item,{children:r.user}),t(i.Item,{children:n(r.priority_1_answer)}),t(i.Item,{children:n(r.priority_2_answer)}),t(i.Item,{children:n(r.priority_3_answer)}),t(i.Item,{children:k(r.created_at,!0)}),t(i.Item,{children:E(r.building_id)}),t(i.IconItem,{onClick:()=>o(r.id),children:t(R,{iconName:"trashcan",size:"18"})})]})},r.id))})},i={Row:s("tr",{target:"euuqw8s2"})("font-size:13px;padding:10px;width:100%;transition:0.1s color ease-in-out;&:hover{background-color:",({theme:e})=>e.colors.light_grey_100,";}"),Item:s("td",{target:"euuqw8s1"})({name:"7lr3li",styles:"white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-align:center"}),IconItem:s("td",{target:"euuqw8s0"})("display:flex;flex-direction:column;align-items:center;cursor:pointer;&:hover svg path{stroke:",({theme:e})=>e.colors.error_100,";}")},J=["No.","학번","1st","2nd","3rd","신청시간","건물","삭제"],W=e=>{const{currentPage:l,setCurrentPage:n,currentSort:o,handleDelete:r,isLoading:a}=e;return a?t(I,{}):o!=null&&o.length?c(P,{children:[t(O,{children:c(H,{children:[t(F,{headers:J}),t(G,{contents:(o==null?void 0:o.slice((l-1)*g,l*g))||[],handleDelete:r})]})}),t(A,{currentPage:l,totalItems:(o==null?void 0:o.length)||0,itemsPerPage:g,setState:n})]}):t(Y,{children:"사물함 신청자가 없습니다."})},ee=()=>{const{me:e}=j();if(!e)throw new Error;const l=L(),{data:n,isLoading:o}=D(m[(e==null?void 0:e.major)||"학과"]),{mutate:r}=z(),[a,u]=h.useState(n),[x,b]=h.useState(1);S(m[e.major],!1);const y=p=>{u(d=>d==null?void 0:d.filter(v=>v.id!==p))},w=()=>{const p=a==null?void 0:a.map(f=>f.id);confirm("확정 후엔 변경이 불가합니다.")&&r({major:m[e.major],sortResult:{list:p||[]}},{onSuccess:()=>{l(M.MAIN)}})};return h.useEffect(()=>{u(n)},[n]),t(C,{children:c(N,{children:[t(q,{children:"사물함 배정 예상 결과"}),c(B,{children:[t("p",{children:"사물함 신청이 끝나면 배정 확정 버튼이 활성화됩니다."}),t("p",{children:"페이지를 나가면 변경사항이 모두 사라집니다."})]}),t(W,{isLoading:o,currentSort:a,currentPage:x,setCurrentPage:b,handleDelete:y}),n!=null&&n.length?t(T,{variant:"contained",color:"primary",onClick:w,children:"배정 확정하기"}):void 0]})})};export{ee as default};
