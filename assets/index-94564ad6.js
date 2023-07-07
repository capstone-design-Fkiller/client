import{c as i,e as f,l as b,j as r,L as x,a as n,r as m,b as y,F as k}from"./index-35d4a5fa.js";import{B as g}from"./index-9438c138.js";import{I as v,f as u,P as _}from"./index-b3eeb088.js";import{S as w}from"./index-babcd3ef.js";import{g as L}from"./building-925df4bd.js";import{u as S,a as j,b as z}from"./locker-3fb6e16e.js";const F=i("section",{target:"e1rvq8hz4"})("display:flex;flex-direction:column;justify-content:center;align-items:center;padding:0 30px;",({theme:e})=>f("min-height:calc(var(--vh, 1vh) * 100 - ",e.layouts.fixedHeight,");",""),";"),N=i("div",{target:"e1rvq8hz3"})("display:flex;justify-content:center;align-items:center;width:100%;height:350px;background-color:",({theme:e})=>e.colors.white_300,";border:1px solid ",({theme:e})=>e.colors.light_grey_100,";border-radius:5px;margin-bottom:30px;overflow-y:auto;scrollbar-width:thin;&::-webkit-scrollbar{width:5px;background-color:",({theme:e})=>e.colors.background_2,";}&::-webkit-scrollbar-thumb{background-color:",({theme:e})=>e.colors.primary_100,";border-radius:10px;height:20px;}"),R=i("h1",{target:"e1rvq8hz2"})("color:",({theme:e})=>e.colors.primary_200,";font-size:1.1rem;margin-bottom:15px;"),p=i("p",{target:"e1rvq8hz1"})("color:",({theme:e})=>e.colors.grey_100,";font-size:14px;"),q=e=>f("&.disabled{background-color:",e.colors.light_grey_100,";color:",e.colors.black,";}&.disabled:hover{background-color:",e.colors.light_grey_200,";}",""),B=e=>{const{id:t,lockers:a,isLoading:l,setSelectedLocker:s}=e,c=b(),d=o=>{t===o.id&&s(void 0),t!==o.id&&s(o)};return l?r(x,{}):a.length===0?n(h.Nothing,{children:[r(v,{iconName:"nothing",size:"100",color:c.colors.grey_200,hasCursor:!1}),r("span",{style:{color:c.colors.grey_200},children:"쉐어 가능한 사물함이 없습니다."})]}):r(h.Root,{children:a.map(o=>n(m.Fragment,{children:[r(h.SharedLocker,{isActive:t===o.id,onClick:()=>d(o),children:n("div",{children:["✅ ",o.owned_name," / ",L(o.building_id)," / ",o.floor,"층",r("br",{})," ",o.locker_number,"번 / ",o.major," /"," ",u(new Date(o.share_start_date),!1)," ~ ",u(new Date(o.share_end_date),!1)]})}),r(w,{})]},o.id))})},h={Nothing:i("div",{target:"e1t80w392"})({name:"6k94ns",styles:"width:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;gap:20px"}),Root:i("div",{target:"e1t80w391"})({name:"hkez6v",styles:"width:100%;height:100%;display:flex;flex-direction:column;justify-content:flex-start;align-items:center"}),SharedLocker:i("div",{target:"e1t80w390"})("position:relative;padding:20px;cursor:pointer;display:flex;flex-direction:column;justify-content:center;align-items:center;font-size:14px;gap:5px;transition:color 0.15s ease-in-out;color:",({isActive:e,theme:t})=>e&&t.colors.primary_200,";&:hover{color:",({theme:e})=>e.colors.primary_200,";}& div{text-align:center;}")},E=()=>{const{me:e}=y(),[t,a]=m.useState(),{myLocker:l}=S((e==null?void 0:e.id)??0);if(!e)return r("div",{children:"로그인 해주세요!"});const{sharableLockers:s,isLoading:c}=j(),{mutate:d}=z(),o=()=>{if(!t)return;confirm("정말 쉐어 신청 하시겠습니까?")&&d({id:t.id,shared_id:e.id})};return r(_,{children:n(F,{children:[r(R,{children:"쉐어할 사물함을 선택해주세요!"}),r(N,{children:r(B,{id:t&&t.id||0,lockers:s||[],isLoading:c,setSelectedLocker:a})}),l?n(k,{children:[r(p,{children:"사물함이 이미 존재합니다."}),r(p,{children:"쉐어 신청을 할 수 없습니다."}),r("br",{}),r(g,{variant:"outlined",color:"error",disableFocusRipple:!0,disableTouchRipple:!0,disabled:!0,children:"쉐어 신청불가"})]}):r(g,{variant:"contained",className:t?"":"disabled",css:q,onClick:o,children:"쉐어 신청하기"})]})})};export{E as default};