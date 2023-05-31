import{c as n,a as S,j as t,r as m,b as d,i as w,f as b,g as R,k as T,u as M,d as C,L as E,F as f,P as k}from"./index-0e1d83f5.js";import{I as A,M as y,B as F,P as H}from"./index-8056f004.js";import{P as g,a as L}from"./page_offset-7e6ec89d.js";import{g as N}from"./building-e434c6eb.js";const z=n("div",{target:"e1hp0tas5"})("display:flex;justify-content:center;flex-direction:column;align-items:center;padding:0 30px;",({theme:e})=>S("min-height:calc(var(--vh, 1vh) * 100 - ",e.layouts.fixedHeight,");",""),";"),B=n("h1",{target:"e1hp0tas4"})("font-size:30px;font-weight:bold;margin-bottom:10px;color:",({theme:e})=>e.colors.primary_200,";"),D=n("table",{target:"e1hp0tas3"})("width:100%;margin-top:15px;border-collapse:collapse;& tr>td,& tr>th{padding:10px 5px;white-space:nowrap;&:first-of-type{padding-left:10px;}}& tbody tr{border-bottom:1px solid ",({theme:e})=>e.colors.light_grey_100,";}"),q=n("h1",{target:"e1hp0tas2"})({name:"r7jam2",styles:"display:flex;font-size:18px;justify-content:center"}),O=n("div",{target:"e1hp0tas0"})({name:"1t3ivjg",styles:"display:flex;justify-content:center;margin-bottom:20px"}),$=({contents:e,handleDelete:o})=>{const r=s=>s===null?"-":typeof s=="boolean"?s?"O":"X":s,i=s=>{confirm("정말 삭제하시겠습니까?")&&o(s)};return t("tbody",{children:e.map(s=>t(m.Fragment,{children:d(c.Row,{children:[t(c.Item,{children:s.user}),t(c.Item,{children:r(s.priority_1_answer)}),t(c.Item,{children:r(s.priority_2_answer)}),t(c.Item,{children:r(s.priority_3_answer)}),t(c.Item,{children:N(s.building_id)}),t(c.IconItem,{onClick:()=>i(s.id),children:t(A,{iconName:"trashcan",size:"18"})})]})},s.id))})},c={Row:n("tr",{target:"efwokpf2"})("font-size:14px;padding:10px;width:100%;transition:0.1s color ease-in-out;&:hover{background-color:",({theme:e})=>e.colors.light_grey_100,";}"),Item:n("td",{target:"efwokpf1"})({name:"7lr3li",styles:"white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-align:center"}),IconItem:n("td",{target:"efwokpf0"})("display:flex;flex-direction:column;align-items:center;cursor:pointer;&:hover svg path{stroke:",({theme:e})=>e.colors.error_100,";}")},G=e=>{const{headers:o}=e;return t(x.Head,{children:t("tr",{children:o.map(r=>t(x.Item,{children:r},r))})})},x={Head:n("thead",{target:"ens05cg1"})("width:100%;font-size:16px;font-weight:bold;background-color:",({theme:e})=>e.colors.primary_200,";border-radius:5px;"),Item:n("th",{target:"ens05cg0"})({name:"7lr3li",styles:"white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-align:center"})},J=async e=>{const o=e||0,{data:r}=await w.get(`sort/${o}`);return r},Q=async(e,o)=>{const r=e||0,{data:i}=await w.post(`assign/${r}`,o);return i},X=e=>{const{createToastMessage:o}=b(),{data:r,isLoading:i}=R("sortResult",()=>J(e),{onError:()=>{o("오류가 발생했습니다.","error")}});return{data:r,isLoading:i}},K=()=>{const{createToastMessage:e}=b();return T(({major:r,sortResult:i})=>Q(r,i),{onSuccess:()=>{e("배정 확정 완료!.","success")},onError:()=>{e("다시 시도해주세요.","error")}})},U=["학번","1st","2nd","3rd","건물","삭제"],ee=()=>{const{me:e}=M(),o=C(),{data:r,isLoading:i}=X(y[e.major]),{mutate:s}=K(),[a,v]=m.useState(r),[p,I]=m.useState(1),_=h=>{v(l=>l==null?void 0:l.filter(P=>P.id!==h))},j=()=>{const l={list:(a==null?void 0:a.map(u=>u.id))||[]};s({major:y[e.major],sortResult:l}),o(k.MAIN)};return t(H,{children:d(z,{children:[t(B,{children:"사물함 배정 예상 결과"}),i?t(E,{}):t(f,{children:r&&r.length===0?t(q,{children:"사물함 신청자가 없습니다."}):d(f,{children:[d(D,{children:[t(G,{headers:U}),t($,{contents:(a==null?void 0:a.slice((p-1)*g,p*g))||[],handleDelete:_})]}),t(O,{children:t(L,{currentPage:p,totalItems:(a==null?void 0:a.length)||0,itemsPerPage:g,setState:I})}),t(F,{variant:"contained",color:"primary",onClick:j,children:"배정 확정하기"})]})})]})})};export{ee as default};