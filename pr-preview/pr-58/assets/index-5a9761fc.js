import{c as a,a as z,j as n,b as r,i as M,f as T,g as k,u as E,r as l,d as j,L as R,F as f,P as L}from"./index-004605c5.js";import{I as F,u as H,M as N,a as B,B as G,P as O}from"./index-9bbc482b.js";import{g as Q}from"./building-34ad378b.js";import{P as h,a as Y}from"./page_offset-accec468.js";const $=a("div",{target:"eoglrl06"})("display:flex;justify-content:center;flex-direction:column;align-items:center;padding:0 30px;",({theme:t})=>z("min-height:calc(var(--vh, 1vh) * 100 - ",t.layouts.fixedHeight,");",""),";"),q=a("h1",{target:"eoglrl05"})("font-size:30px;font-weight:bold;margin-bottom:10px;color:",({theme:t})=>t.colors.primary_200,";"),D=a("table",{target:"eoglrl04"})("display:grid;align-items:center;width:100%;margin-top:15px;border-collapse:collapse;& tr>td,& tr>th{padding:10px 5px;white-space:nowrap;&:first-of-type{padding-left:10px;}}& tbody tr{border-bottom:1px solid ",({theme:t})=>t.colors.light_grey_100,";}"),J=a("h1",{target:"eoglrl03"})({name:"r77xyq",styles:"display:flex;font-size:18px;justify-content:center;margin-top:100px;margin-bottom:100px"}),K=a("div",{target:"eoglrl01"})({name:"zl1inp",styles:"display:flex;justify-content:center"}),U=a("textarea",{target:"eoglrl00"})("margin-top:5%;width:100%;height:80%;resize:none;padding:5px;border:1px solid ",({theme:t})=>t.colors.light_grey_100,";border-radius:5px;"),V=({contents:t,handleContent:o})=>n("tbody",{children:t.map(e=>r(s.Row,{children:[n(s.Item,{children:e.locker}),n(s.Item,{children:Q(e.building_id)}),n(s.Item,{children:e.user}),n(s.Item,{children:e.user_name}),n(s.IconItem,{onClick:()=>o(e.id),children:n(F,{iconName:"bell",size:"18"})})]},e.id))}),s={Row:a("tr",{target:"eb1eze72"})({name:"suclo2",styles:"font-size:14px;padding:10px;width:100%"}),Item:a("td",{target:"eb1eze71"})({name:"ay447x",styles:"width:25%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-align:center"}),IconItem:a("td",{target:"eb1eze70"})("display:flex;flex-direction:column;align-items:center;transition:0.1s color ease-in-out;cursor:pointer;&:hover svg path{stroke:",({theme:t})=>t.colors.secondary_200,";}")},W=t=>{const{headers:o}=t;return n(b.Head,{children:n("tr",{children:o.map(e=>n(b.Item,{children:e},e))})})},b={Head:a("thead",{target:"e69wk4o1"})("font-size:16px;font-weight:bold;background-color:",({theme:t})=>t.colors.primary_200,";border-radius:5px;"),Item:a("th",{target:"e69wk4o0"})({name:"ay447x",styles:"width:25%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-align:center"})},X=async t=>{const o=t||0,{data:e}=await M.get(`assign/${o}`);return e},Z={assign:"assignResult"},ee=t=>{const{createToastMessage:o}=T(),{data:e,isLoading:c}=k(Z.assign,()=>X(t),{onError:()=>{o("오류가 발생했습니다.","error")}});return{data:e,isLoading:c}},te=["사물함","건물","학번","이름","알림"],re=()=>{const{me:t}=E(),{mutate:o}=H(),{data:e,isLoading:c}=ee(N[(t==null?void 0:t.major)??"학과"]),[d,w]=l.useState(1),[p,m]=l.useState(""),[u,x]=l.useState(null),[g,v]=l.useState(null),I=j(),A=()=>{o({receiver:(g==null?void 0:g.user)??0,message:p}),I(L.ASSIGN),y()},S=i=>{x(i);const P=e==null?void 0:e.find(_=>_.id==i);v(P??null)},y=()=>{x(null),m("")},C=i=>{m(i.target.value)};return n(O,{children:r($,{children:[n(q,{children:"사물함 최종 배정 결과"}),c?n(R,{}):n(f,{children:e&&e.length===0?n(J,{children:"사물함 배정 기간이 아닙니다."}):r(f,{children:[r(D,{children:[n(W,{headers:te}),n(V,{contents:(e==null?void 0:e.slice((d-1)*h,d*h))||[],handleContent:S})]}),n(K,{children:n(Y,{currentPage:d,totalItems:(e==null?void 0:e.length)||0,itemsPerPage:h,setState:w})}),u!==null&&r(B,{title:"개별 알림",onClose:y,open:!!u,children:[n(U,{onChange:C,value:p,placeholder:"보낼 알림을 입력하세요."}),n(G,{variant:"contained",color:"primary",onClick:A,children:"알림 보내기"})]})]})})]})})};export{re as default};
