import{c as r,a as h,l as g,j as t,L as p,b as s,u}from"./index-5a40d6c9.js";import{I as m,M as f,B as x,P as b}from"./index-ed85931f.js";import{g as y}from"./building-34ad378b.js";import{u as k,a as v}from"./locker-9bd73a3f.js";const w=r("section",{target:"e1rvq8hz8"})("display:flex;flex-direction:column;justify-content:center;align-items:center;padding:0 30px;",({theme:e})=>h("min-height:calc(var(--vh, 1vh) * 100 - ",e.layouts.fixedHeight,");",""),";"),_=r("div",{target:"e1rvq8hz7"})("display:flex;justify-content:center;align-items:center;width:100%;height:450px;background-color:",({theme:e})=>e.colors.white_300,";border:1px solid ",({theme:e})=>e.colors.light_grey_100,";border-radius:5px;margin-bottom:30px;overflow-y:auto;scrollbar-width:thin;&::-webkit-scrollbar{width:5px;background-color:",({theme:e})=>e.colors.background_2,";}&::-webkit-scrollbar-thumb{background-color:",({theme:e})=>e.colors.primary_100,";border-radius:10px;height:20px;}"),j=e=>{const{me:a,lockers:i,isLoading:l}=e,c=g(),{mutate:d}=k();return l?t(p,{}):i.length===0?s(n.Nothing,{children:[t(m,{iconName:"nothing",size:"100",color:c.colors.grey_200,hasCursor:!1}),t("span",{style:{color:c.colors.grey_200},children:"쉐어 가능한 사물함이 없습니다."})]}):t(n.Root,{children:i.map(o=>s(n.SharedLocker,{onClick:()=>d({id:o.id,shared_id:a.id}),children:[y(o.building_id)," / ",o.floor,"층 / ",o.id]},o.id))})},n={Nothing:r("div",{target:"e1t80w392"})({name:"6k94ns",styles:"width:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;gap:20px"}),Root:r("div",{target:"e1t80w391"})({name:"ql6qjg",styles:"width:100%;height:100%;display:flex;flex-direction:column;justify-content:flex-start;align-items:center;& div:first-of-type{padding-top:20px;}& div:last-of-type{padding-bottom:20px;}"}),SharedLocker:r("div",{target:"e1t80w390"})("position:relative;padding:20px;cursor:pointer;&::after{content:'';width:10px;height:1px;position:absolute;left:50%;bottom:0;transform:translate(-50%, 50%);background-color:",({theme:e})=>e.colors.primary_200,";}")},N=()=>{const{me:e}=u();if(!e)return t("div",{children:"로그인 해주세요!"});const{sharableLockers:a,isLoading:i}=v(f[e.major]);return t(b,{children:s(w,{children:[t(_,{children:t(j,{me:e,lockers:a||[],isLoading:i})}),t(x,{variant:"contained",children:"쉐어 신청하기"})]})})};export{N as default};