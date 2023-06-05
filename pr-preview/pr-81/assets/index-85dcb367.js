import{c as a,a as f,l as b,j as o,L as y,b as i,r as m,u as x,F as k}from"./index-f76ec81e.js";import{B as g}from"./index-dd44d3e9.js";import{I as v,f as u,P as _}from"./index-1a1c0dd1.js";import{S as w}from"./index-be381af7.js";import{g as L}from"./building-925df4bd.js";import{u as S,a as j,b as z}from"./locker-74539df0.js";const F=a("section",{target:"e1rvq8hz5"})("display:flex;flex-direction:column;justify-content:center;align-items:center;padding:0 30px;",({theme:e})=>f("min-height:calc(var(--vh, 1vh) * 100 - ",e.layouts.fixedHeight,");",""),";"),N=a("div",{target:"e1rvq8hz4"})("display:flex;justify-content:center;align-items:center;width:100%;height:450px;background-color:",({theme:e})=>e.colors.white_300,";border:1px solid ",({theme:e})=>e.colors.light_grey_100,";border-radius:5px;margin-bottom:30px;overflow-y:auto;scrollbar-width:thin;&::-webkit-scrollbar{width:5px;background-color:",({theme:e})=>e.colors.background_2,";}&::-webkit-scrollbar-thumb{background-color:",({theme:e})=>e.colors.primary_100,";border-radius:10px;height:20px;}"),R=a("h1",{target:"e1rvq8hz3"})("color:",({theme:e})=>e.colors.primary_200,";font-size:1.2rem;margin-bottom:30px;"),p=a("p",{target:"e1rvq8hz2"})("color:",({theme:e})=>e.colors.grey_100,";"),q=e=>f("&.disabled{background-color:",e.colors.light_grey_100,";color:",e.colors.black,";}&.disabled:hover{background-color:",e.colors.light_grey_200,";}",""),B=e=>{const{id:t,lockers:n,isLoading:l,setSelectedLocker:s}=e,c=b(),d=r=>{t===r.id&&s(void 0),t!==r.id&&s(r)};return l?o(y,{}):n.length===0?i(h.Nothing,{children:[o(v,{iconName:"nothing",size:"100",color:c.colors.grey_200,hasCursor:!1}),o("span",{style:{color:c.colors.grey_200},children:"쉐어 가능한 사물함이 없습니다."})]}):o(h.Root,{children:n.map(r=>i(m.Fragment,{children:[i(h.SharedLocker,{isActive:t===r.id,onClick:()=>d(r),children:[i("div",{children:[r.owned_id," / ",L(r.building_id)," / ",r.floor,"층",o("br",{}),r.locker_number,"번 / ",r.major]}),i("div",{children:[u(new Date(r.share_start_date),!1)," ~ ",u(new Date(r.share_end_date),!1)]})]}),o(w,{})]},r.id))})},h={Nothing:a("div",{target:"e1t80w392"})({name:"6k94ns",styles:"width:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;gap:20px"}),Root:a("div",{target:"e1t80w391"})({name:"hkez6v",styles:"width:100%;height:100%;display:flex;flex-direction:column;justify-content:flex-start;align-items:center"}),SharedLocker:a("div",{target:"e1t80w390"})("position:relative;padding:20px;cursor:pointer;display:flex;flex-direction:column;justify-content:center;align-items:center;gap:5px;transition:color 0.15s ease-in-out;color:",({isActive:e,theme:t})=>e&&t.colors.primary_200,";&:hover{color:",({theme:e})=>e.colors.primary_200,";}")},E=()=>{const{me:e}=x(),[t,n]=m.useState(),{myLocker:l}=S((e==null?void 0:e.id)??0);if(!e)return o("div",{children:"로그인 해주세요!"});const{sharableLockers:s,isLoading:c}=j(),{mutate:d}=z(),r=()=>{if(!t)return;confirm("정말 쉐어 신청 하시겠습니까?")&&d({id:t.id,shared_id:e.id})};return o(_,{children:i(F,{children:[o(R,{children:"쉐어할 사물함을 선택해주세요!"}),o(N,{children:o(B,{id:t&&t.id||0,lockers:s||[],isLoading:c,setSelectedLocker:n})}),l?i(k,{children:[o(p,{children:"사물함이 이미 존재합니다."}),o(p,{children:"쉐어 신청을 할 수 없습니다."}),o("br",{}),o(g,{variant:"outlined",color:"error",disableFocusRipple:!0,disableTouchRipple:!0,disabled:!0,children:"쉐어 신청불가"})]}):o(g,{variant:"contained",className:t?"":"disabled",css:q,onClick:r,children:"쉐어 신청하기"})]})})};export{E as default};
