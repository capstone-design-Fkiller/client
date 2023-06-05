import{c as r,a as F,r as y,j as t,b as n,l as B,u as M,f as O,d as T,P as N}from"./index-39e8c025.js";import{B as I}from"./index-b47d5715.js";import{I as L,M as v,P as R,a as q}from"./index-30da9f94.js";import{S as E}from"./index-08005657.js";import{S as P}from"./index-360e9a89.js";import{B as C}from"./building-925df4bd.js";import{u as V}from"./useInput-a5625c27.js";import{e as D,f as G,g as z}from"./locker-12057e45.js";import{u as W}from"./major-8006477e.js";const H=r("section",{target:"e1a6068d3"})("display:flex;flex-direction:column;justify-content:center;padding:0 30px;",({theme:e})=>F("min-height:calc(var(--vh, 1vh) * 100 - ",e.layouts.fixedHeight,");",""),";"),X=r("div",{target:"e1a6068d2"})("display:grid;grid-template-rows:350px 1fr;width:100%;height:450px;background-color:",({theme:e})=>e.colors.white_300,";border:1px solid ",({theme:e})=>e.colors.light_grey_100,";border-radius:5px;margin-bottom:30px;"),K=r("div",{target:"e1a6068d0"})("display:flex;flex-direction:column;justify-content:space-evenly;align-items:flex-start;width:100%;padding:0 10px;border-top:1px solid ",({theme:e})=>e.colors.light_grey_100,";background-color:",({theme:e})=>e.colors.background_2,";&>div{display:flex;align-items:center;width:100%;height:24px;&:last-of-type{padding:0 10px;}}"),$=e=>{const{majorInfo:i,setValue:p,handleApplyButton:c}=e,[g,l]=y.useState(!1);if(!i)return t("span",{children:"추가 조건이 없습니다!"});const u=Object.entries(i).filter(([o,a])=>a&&o!=="is_baserule_FCFS"),b=o=>{if(o.target.type==="checkbox")return o.target.checked||!1;const a=Number(o.target.value);if(a<0)alert("0 이상인 값만 입력 가능합니다."),o.target.value="";else return a},x=(o,a)=>{const m=b(o);p(s=>{const h={...{...s},[`${a}_answer`]:m};return _(h),h})},_=o=>{const m=Object.entries(o).filter(([,s])=>s!==void 0).every(([,s])=>!(s==="-1"||typeof s!="boolean"&&!s));l(!m)};return y.useEffect(()=>{u.length?l(!0):l(!1)},[]),n(f.Root,{children:[n("div",{children:[n(f.Description,{children:["동점자는 ",i.is_baserule_FCFS?"선착순":"랜덤"," 우선배정됩니다 😊"]}),t("br",{}),u.length?u.map(([o,a],m)=>n(f.ConditionWrapper,{children:[n(f.Name,{children:[m+1,"순위: ",a.name]}),a.is_bool?n(f.Label,{children:[t(f.Input,{type:"checkbox",onChange:s=>x(s,o)}),t("span",{className:"slider"})]}):t(f.Input,{type:"number",placeholder:a.question,onChange:s=>x(s,o)})]},o)):null]}),t(I,{variant:"contained",onClick:c,disabled:g,children:"신청"})]})},f={Root:r("div",{target:"euooqhp5"})({name:"14ggdrv",styles:"height:100%;display:flex;flex-direction:column;justify-content:space-between"}),ConditionWrapper:r("div",{target:"euooqhp4"})({name:"r3aoht",styles:"width:100%;margin-bottom:25px"}),Name:r("div",{target:"euooqhp3"})({name:"oub90b",styles:"margin-bottom:10px;font-size:15px"}),Label:r("label",{target:"euooqhp2"})("position:relative;display:inline-block;width:60px;height:29px;& input{opacity:0;width:0;height:0;}& .slider{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:#ccc;-webkit-transition:0.4s;transition:0.4s;border-radius:29px;}& .slider:before{position:absolute;content:'';height:21px;width:21px;left:4px;bottom:4px;background-color:white;-webkit-transition:0.4s;transition:0.4s;border-radius:50%;}& input:checked+.slider{background-color:",({theme:e})=>e.colors.primary_200,";}& input:focus+.slider{box-shadow:0 0 1px ",({theme:e})=>e.colors.primary_300,";}& input:checked+.slider:before{-webkit-transform:translateX(31px);-ms-transform:translateX(31px);transform:translateX(31px);}"),Input:r("input",{target:"euooqhp1"})({name:"1l2d352",styles:"width:100%;padding:10px 5px;&::placeholder{font-size:14px;}"}),Description:r("p",{target:"euooqhp0"})("color:",({theme:e})=>e.colors.grey_300,";font-size:15px;text-align:center;")},S={not_building:"건물을 선택해주세요.",not_login:"로그인 후 사용할 수 있습니다!"},J=e=>{const{me:i,value:p,total:c,applyCount:g}=e,l=B();if(!i||!c){const b=i?S.not_building:S.not_login;return n(d.Root,{children:[t(L,{iconName:"nothing",size:"100",color:l.colors.grey_200,hasCursor:!1}),t("span",{style:{color:l.colors.grey_200},children:b})]})}const u=Math.ceil(g/c*100);return n(d.Root,{children:[t(d.GradientWrapper,{children:n(d.Building,{grd:u>100?100:u,children:[t(d.Floor,{}),t(d.Floor,{}),t(d.Floor,{}),t(d.Floor,{}),t(d.Floor,{})]})}),n(d.Title,{children:[p," ( ",g," / ",c," )"]})]})},d={Root:r("div",{target:"e166tayl4"})({name:"l768v7",styles:"display:flex;flex-direction:column;justify-content:center;align-items:center;gap:20px;width:100%"}),Building:r("div",{target:"e166tayl3"})("display:grid;grid-template-rows:repeat(5, 1fr);border-radius:5px;",({grd:e})=>F("height:",100-e,"%;background:white;",""),";"),GradientWrapper:r("div",{target:"e166tayl2"})({name:"1ncgd1x",styles:"background-color:#2cb67d"}),Floor:r("div",{target:"e166tayl1"})("width:100px;height:50px;background-color:transparent;border:5px solid ",({theme:e})=>e.colors.light_grey_200,";"),Title:r("h1",{target:"e166tayl0"})("")},U=(e=!1)=>{const[i,p]=y.useState(e);return{open:i,handleOpen:()=>p(!i),setOpen:p}},ae=()=>{const{me:e}=M(),{open:i,handleOpen:p}=U(),{createToastMessage:c}=O(),g=T();if(!e)return c("로그인을 다시 해주세요!","error"),g(N.LOGIN),t("div",{});const[l,u]=y.useState("건물"),{majorInfo:b,initPriorityValue:x}=W(v[e.major],!0),{value:_,setValue:o}=V(x),{applicableBuildings:a}=D(v[e.major]),{mutate:m}=G(),s=A=>u(A.currentTarget.innerText),{data:{apply:w,lockerCounts:h}}=z({major:v[e.major],building_id:C[l]}),k=()=>{if(!e)return c("로그인 후 사용해주세요!","error");if(!(h!=null&&h.length))return c("해당 건물에는 사물함이 없습니다!","error");b||j(),p()},j=()=>{m({building_id:C[l],major:v[e.major],user:e.id,..._}),o(x),k()};return y.useEffect(()=>{i||o(x)},[i]),n(R,{children:[n(H,{children:[n(X,{children:[t(J,{me:e,value:l,total:h?h.length:void 0,applyCount:w?w.length:void 0}),n(K,{children:[t(E,{value:l,handleChange:s,list:a}),t(P,{}),t("div",{children:e.major||"학과"})]})]}),t(I,{variant:"contained",onClick:k,children:"신청하기"})]}),t(q,{title:"학과별 조건 입력",open:i,onClose:k,children:e&&t($,{majorInfo:b,setValue:o,handleApplyButton:j})})]})};export{ae as default};