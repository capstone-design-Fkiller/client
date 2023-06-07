import{c as o,e as _,j as t,a as r,b as M,r as s,u as T,L as j,F as f,P as k}from"./index-a52da1e3.js";import{I as z,u as E,M as F,b as L,P as R}from"./index-9c4e7e7b.js";import{g as B}from"./building-925df4bd.js";import{B as H}from"./index-2198dce7.js";import{T as N,P as g,a as G}from"./index-8acef1ab.js";import{u as O}from"./assign-3333b2d3.js";const D=o("div",{target:"eoglrl06"})("display:flex;justify-content:center;flex-direction:column;align-items:center;padding:0 30px;",({theme:n})=>_("min-height:calc(var(--vh, 1vh) * 100 - ",n.layouts.fixedHeight,");",""),";"),J=o("h1",{target:"eoglrl05"})("font-size:25px;font-weight:bold;margin-bottom:10px;color:",({theme:n})=>n.colors.primary_200,";"),q=o("table",{target:"eoglrl04"})("width:100%;margin-top:15px;border-collapse:collapse;& tr>td,& tr>th{padding:10px 5px;white-space:nowrap;&:first-of-type{padding-left:10px;}}& tbody tr{border-bottom:1px solid ",({theme:n})=>n.colors.light_grey_100,";}"),K=o("h1",{target:"eoglrl03"})({name:"lykxvs",styles:"display:flex;font-size:18px;justify-content:center;margin:150px 0"}),Q=o("div",{target:"eoglrl01"})({name:"zl1inp",styles:"display:flex;justify-content:center"}),U=o("textarea",{target:"eoglrl00"})("margin-top:5%;width:100%;height:80%;resize:none;padding:5px;border:1px solid ",({theme:n})=>n.colors.light_grey_100,";border-radius:5px;"),V=({contents:n,handleContent:i})=>t("tbody",{children:n.map(e=>r(a.Row,{children:[t(a.Item,{children:e.locker_number}),t(a.Item,{children:B(e.building_id)}),t(a.Item,{children:e.user}),t(a.Item,{children:e.user_name}),t(a.IconItem,{onClick:()=>i(e.id),children:t(z,{iconName:"bell",size:"16"})})]},e.id))}),a={Row:o("tr",{target:"e17wlg3n2"})({name:"p26vpm",styles:"font-size:13px;padding:10px;width:100%"}),Item:o("td",{target:"e17wlg3n1"})({name:"7lr3li",styles:"white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-align:center"}),IconItem:o("td",{target:"e17wlg3n0"})("display:flex;flex-direction:column;align-items:center;transition:0.1s color ease-in-out;cursor:pointer;&:hover svg path{stroke:",({theme:n})=>n.colors.secondary_200,";}")},W=["사물함","건물","학번","이름","알림"],ne=()=>{const{me:n}=M(),{mutate:i}=E(),{data:e,isLoading:y}=O(F[(n==null?void 0:n.major)??"학과"]),[c,b]=s.useState(1),[p,h]=s.useState(""),[m,u]=s.useState(null),[d,v]=s.useState(null),w=T(),A=()=>{i({receiver:(d==null?void 0:d.user)??0,message:p}),w(k.ASSIGN),x()},I=l=>{u(l);const P=e==null?void 0:e.find(S=>S.id==l);v(P??null)},x=()=>{u(null),h("")},C=l=>{h(l.target.value)};return t(R,{children:r(D,{children:[t(J,{children:"사물함 최종 배정 결과"}),y?t(j,{}):t(f,{children:e&&e.length===0?t(K,{children:"배정된 사물함이 없습니다."}):r(f,{children:[r(q,{children:[t(N,{headers:W}),t(V,{contents:(e==null?void 0:e.slice((c-1)*g,c*g))||[],handleContent:I})]}),t(Q,{children:t(G,{currentPage:c,totalItems:(e==null?void 0:e.length)||0,itemsPerPage:g,setState:b})}),m!==null&&r(L,{title:"개별 알림",onClose:x,open:!!m,children:[t(U,{onChange:C,value:p,placeholder:"보낼 알림을 입력하세요."}),t(H,{variant:"contained",color:"primary",onClick:A,children:"알림 보내기"})]})]})})]})})};export{ne as default};
