import{c as o,a as N,r as F,j as r,b as n,l as R,u as q,f as E,d as P,P as V}from"./index-9a8207bd.js";import{B as L}from"./index-1103937c.js";import{I as D,M as S,P as G,a as z}from"./index-b9875989.js";import{S as W}from"./index-49dae1e5.js";import{S as H}from"./index-ed846c2e.js";import{B as O}from"./building-925df4bd.js";import{u as X}from"./useInput-742a05fb.js";import{e as $,f as K,g as j}from"./locker-c5f8cf57.js";import{u as J}from"./major-d6e6a391.js";const U=o("section",{target:"e1a6068d3"})("display:flex;flex-direction:column;justify-content:center;padding:0 30px;",({theme:e})=>N("min-height:calc(var(--vh, 1vh) * 100 - ",e.layouts.fixedHeight,");",""),";"),Q=o("div",{target:"e1a6068d2"})("display:grid;grid-template-rows:350px 1fr;width:100%;height:450px;background-color:",({theme:e})=>e.colors.white_300,";border:1px solid ",({theme:e})=>e.colors.light_grey_100,";border-radius:5px;margin-bottom:30px;"),Y=o("div",{target:"e1a6068d0"})("display:flex;flex-direction:column;justify-content:space-evenly;align-items:flex-start;width:100%;padding:0 10px;border-top:1px solid ",({theme:e})=>e.colors.light_grey_100,";background-color:",({theme:e})=>e.colors.background_2,";&>div{display:flex;align-items:center;width:100%;height:24px;&:last-of-type{padding:0 10px;}}"),Z=e=>{const{majorInfo:s,setValue:d,handleApplyButton:l}=e,[g,p]=F.useState(!0);if(!s)return r("span",{children:"추가 조건이 없습니다!"});const u=Object.entries(s).filter(([i,a])=>a&&i!=="is_baserule_FCFS"),t=i=>{if(i.target.type==="checkbox")return i.target.checked||!1;const a=Number(i.target.value);if(a<0)alert("0 이상인 값만 입력 가능합니다."),i.target.value="";else return a},k=(i,a)=>{const x=t(i);d(y=>{const h={...{...y},[`${a}_answer`]:x},f=u.every(([C])=>{const b=h[`${C}_answer`];return b&&b!==void 0&&b!==null&&b!==""});return p(!f),h})};return n(m.Root,{children:[n("div",{children:[n(m.Description,{children:["동점자는 ",s.is_baserule_FCFS?"선착순":"랜덤"," 우선배정됩니다 😊"]}),r("br",{}),u.length?u.map(([i,a],x)=>n(m.ConditionWrapper,{children:[n(m.Name,{children:[x+1,"순위: ",a.name]}),a.is_bool?n(m.Label,{children:[r(m.Input,{type:"checkbox",onChange:y=>k(y,i)}),r("span",{className:"slider"})]}):r(m.Input,{type:"number",placeholder:a.question,onChange:y=>k(y,i)})]},i)):null]}),r(L,{variant:"contained",onClick:l,disabled:g,children:"신청"})]})},m={Root:o("div",{target:"euooqhp5"})({name:"14ggdrv",styles:"height:100%;display:flex;flex-direction:column;justify-content:space-between"}),ConditionWrapper:o("div",{target:"euooqhp4"})({name:"r3aoht",styles:"width:100%;margin-bottom:25px"}),Name:o("div",{target:"euooqhp3"})({name:"oub90b",styles:"margin-bottom:10px;font-size:15px"}),Label:o("label",{target:"euooqhp2"})("position:relative;display:inline-block;width:60px;height:29px;& input{opacity:0;width:0;height:0;}& .slider{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:#ccc;-webkit-transition:0.4s;transition:0.4s;border-radius:29px;}& .slider:before{position:absolute;content:'';height:21px;width:21px;left:4px;bottom:4px;background-color:white;-webkit-transition:0.4s;transition:0.4s;border-radius:50%;}& input:checked+.slider{background-color:",({theme:e})=>e.colors.primary_200,";}& input:focus+.slider{box-shadow:0 0 1px ",({theme:e})=>e.colors.primary_300,";}& input:checked+.slider:before{-webkit-transform:translateX(31px);-ms-transform:translateX(31px);transform:translateX(31px);}"),Input:o("input",{target:"euooqhp1"})({name:"1l2d352",styles:"width:100%;padding:10px 5px;&::placeholder{font-size:14px;}"}),Description:o("p",{target:"euooqhp0"})("color:",({theme:e})=>e.colors.grey_300,";font-size:15px;text-align:center;")},T={not_building:"건물을 선택해주세요.",not_login:"로그인 후 사용할 수 있습니다!"},I=e=>{const{me:s,value:d,total:l,applyCount:g}=e,p=R();if(!s||!l){const t=s?T.not_building:T.not_login;return n(c.Root,{children:[r(D,{iconName:"nothing",size:"100",color:p.colors.grey_200,hasCursor:!1}),r("span",{style:{color:p.colors.grey_200},children:t})]})}const u=Math.ceil(g/l*100);return n(c.Root,{children:[r(c.GradientWrapper,{children:n(c.Building,{grd:u>100?100:u,children:[r(c.Floor,{}),r(c.Floor,{}),r(c.Floor,{}),r(c.Floor,{}),r(c.Floor,{})]})}),n(c.Title,{children:[d," ( ",g," / ",l," )"]})]})},c={Root:o("div",{target:"e166tayl4"})({name:"l768v7",styles:"display:flex;flex-direction:column;justify-content:center;align-items:center;gap:20px;width:100%"}),Building:o("div",{target:"e166tayl3"})("display:grid;grid-template-rows:repeat(5, 1fr);border-radius:5px;",({grd:e})=>N("height:",100-e,"%;background:white;",""),";"),GradientWrapper:o("div",{target:"e166tayl2"})({name:"1ncgd1x",styles:"background-color:#2cb67d"}),Floor:o("div",{target:"e166tayl1"})("width:100px;height:50px;background-color:transparent;border:5px solid ",({theme:e})=>e.colors.light_grey_200,";"),Title:o("h1",{target:"e166tayl0"})("")},ee=(e=!1)=>{const[s,d]=F.useState(e);return{open:s,handleOpen:()=>d(!s),setOpen:d}},pe=()=>{var b,B,M;const{me:e}=q(),{open:s,handleOpen:d}=ee(),{createToastMessage:l}=E(),g=P();if(!e)return l("로그인을 다시 해주세요!","error"),g(V.LOGIN),r("div",{});const[p,u]=F.useState("건물"),{majorInfo:t}=J(S[e.major],!0),{value:k,setValue:i}=X({priority_1_answer:((b=t==null?void 0:t.priority_1)==null?void 0:b.is_bool)&&!1,priority_2_answer:((B=t==null?void 0:t.priority_2)==null?void 0:B.is_bool)&&!1,priority_3_answer:((M=t==null?void 0:t.priority_3)==null?void 0:M.is_bool)&&!1}),{applicableBuildings:a}=$(S[e.major]),{mutate:x}=K(),y=_=>u(_.currentTarget.innerText),{data:{apply:A,lockerCounts:h}}=j({major:S[e.major],building_id:O[p]}),f=()=>{if(!e)return l("로그인 후 사용해주세요!","error");if(!(h!=null&&h.length))return l("해당 건물에는 사물함이 없습니다!","error");t||C(),d()},C=()=>{var _,v,w;x({building_id:O[p],major:S[e.major],user:e.id,...k}),i({priority_1_answer:((_=t==null?void 0:t.priority_1)==null?void 0:_.is_bool)&&!1,priority_2_answer:((v=t==null?void 0:t.priority_2)==null?void 0:v.is_bool)&&!1,priority_3_answer:((w=t==null?void 0:t.priority_3)==null?void 0:w.is_bool)&&!1}),f()};return F.useEffect(()=>{var _,v,w;s||i({priority_1_answer:((_=t==null?void 0:t.priority_1)==null?void 0:_.is_bool)&&!1,priority_2_answer:((v=t==null?void 0:t.priority_2)==null?void 0:v.is_bool)&&!1,priority_3_answer:((w=t==null?void 0:t.priority_3)==null?void 0:w.is_bool)&&!1})},[s]),n(G,{children:[n(U,{children:[n(Q,{children:[r(I,{me:e,value:p,total:h?h.length:void 0,applyCount:A?A.length:void 0}),n(Y,{children:[r(W,{value:p,handleChange:y,list:a}),r(H,{}),r("div",{children:e.major||"학과"})]})]}),r(L,{variant:"contained",onClick:f,children:"신청하기"})]}),r(z,{title:"학과별 조건 입력",open:s,onClose:f,children:e&&r(Z,{majorInfo:t,setValue:i,handleApplyButton:C})})]})};export{pe as default};
