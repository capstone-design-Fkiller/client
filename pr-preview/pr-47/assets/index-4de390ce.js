import{c as o,a as w,j as t,b as l,k as M,r as k,u as O,e as T,d as N,P as B}from"./index-2bc097df.js";import{B as I,I as F,M as f,P as A,a as R}from"./index-c90ec0c6.js";import{S as L}from"./index-24e722a1.js";import{B as v}from"./building-e434c6eb.js";import{u as P}from"./useInput-fcf54dc2.js";import{b as q,c as E}from"./locker-e30b23db.js";import{u as G}from"./major-c08fc355.js";const V=o("section",{target:"e1a6068d4"})("display:flex;flex-direction:column;justify-content:center;padding:0 30px;",({theme:e})=>w("min-height:calc(var(--vh, 1vh) * 100 - ",e.layouts.fixedHeight,");",""),";"),W=o("div",{target:"e1a6068d3"})("display:grid;grid-template-rows:350px 1fr;width:100%;height:450px;background-color:",({theme:e})=>e.colors.white_300,";border:1px solid ",({theme:e})=>e.colors.light_grey_100,";border-radius:5px;margin-bottom:30px;"),H=o("div",{target:"e1a6068d1"})("display:flex;flex-direction:column;justify-content:space-evenly;align-items:flex-start;width:100%;padding:0 10px;border-top:1px solid ",({theme:e})=>e.colors.light_grey_100,";background-color:",({theme:e})=>e.colors.background_2,";&>div{display:flex;align-items:center;width:100%;height:24px;&:last-of-type{padding:0 10px;}}"),K=o("hr",{target:"e1a6068d0"})("width:100%;height:1px;padding-left:10px;border:0;background:",({theme:e})=>e.colors.light_grey_200,";"),z=e=>{const{majorInfo:n,setValue:d,handleApplyButton:a}=e;if(!n)return t("span",{children:"추가 조건이 없습니다!"});const u=Object.entries(n).filter(([,r])=>r),s=(r,c)=>{const p=r.currentTarget.value;d(m=>({...{...m},[c]:Number(p)===1?!0:Number(p)===0?!1:Number(p)}))};return l(h.Root,{children:[t("div",{children:u.map(([r,c])=>l(h.ConditionWrapper,{children:[t(h.Name,{children:c}),t(h.Input,{placeholder:"입력해라",onChange:p=>s(p,r)})]},r))}),t(I,{variant:"contained",onClick:a,children:"신청"})]})},h={Root:o("div",{target:"euooqhp3"})({name:"14ggdrv",styles:"height:100%;display:flex;flex-direction:column;justify-content:space-between"}),ConditionWrapper:o("div",{target:"euooqhp2"})({name:"1ew5ocq",styles:"width:100%;margin-bottom:15px"}),Name:o("div",{target:"euooqhp1"})({name:"pr10xp",styles:"margin-bottom:10px"}),Input:o("input",{target:"euooqhp0"})({name:"1terk8e",styles:"width:100%;padding:10px 5px"})},C={not_building:"건물을 선택해주세요.",not_login:"로그인 후 사용할 수 있습니다!"},D=e=>{const{me:n,value:d,total:a,applyCount:u}=e,s=M();if(!n||!a){const c=n?C.not_building:C.not_login;return l(i.Root,{children:[t(F,{iconName:"nothing",size:"100",color:s.colors.grey_200,hasCursor:!1}),t("span",{style:{color:s.colors.grey_200},children:c})]})}const r=Math.ceil(u/a*100);return l(i.Root,{children:[t(i.GradientWrapper,{children:l(i.Building,{grd:r>100?100:r,children:[t(i.Floor,{}),t(i.Floor,{}),t(i.Floor,{}),t(i.Floor,{}),t(i.Floor,{})]})}),l(i.Title,{children:[d," ( ",u," / ",a," )"]})]})},i={Root:o("div",{target:"e166tayl4"})({name:"l768v7",styles:"display:flex;flex-direction:column;justify-content:center;align-items:center;gap:20px;width:100%"}),Building:o("div",{target:"e166tayl3"})("display:grid;grid-template-rows:repeat(5, 1fr);border-radius:5px;",({grd:e})=>w("height:",100-e,"%;background:white;",""),";"),GradientWrapper:o("div",{target:"e166tayl2"})({name:"1ncgd1x",styles:"background-color:#2cb67d"}),Floor:o("div",{target:"e166tayl1"})("width:100px;height:50px;background-color:transparent;border:5px solid ",({theme:e})=>e.colors.light_grey_200,";"),Title:o("h1",{target:"e166tayl0"})("")},J=(e=!1)=>{const[n,d]=k.useState(e);return{open:n,handleOpen:()=>d(!n),setOpen:d}},te=()=>{const{me:e}=O(),{open:n,handleOpen:d}=J(),{createToastMessage:a}=T(),u=N();if(!e)return a("로그인을 다시 해주세요!","error"),u(B.LOGIN),t("div",{});const[s,r]=k.useState("건물"),{value:c,setValue:p}=P({priority_1:null,priority_2:null,priority_3:null}),{mutate:m}=q(),{majorInfo:y}=G(f[e.major],!0),b=S=>r(S.currentTarget.innerText),{data:{apply:_,lockerCounts:g}}=E({major:f[e.major],building_id:v[s]}),x=()=>{if(!e)return a("로그인 후 사용해주세요!","error");if(!(g!=null&&g.length))return a("해당 건물에는 사물함이 없습니다!","error");y||j(),d()},j=()=>{m({building_id:v[s],major:f[e.major],user:e.id,...c}),x()};return l(A,{children:[l(V,{children:[l(W,{children:[t(D,{me:e,value:s,total:g?g.length:void 0,applyCount:_?_.length:void 0}),l(H,{children:[t(L,{value:s,handleChange:b,list:Object.keys(v).slice(1)}),t(K,{}),t("div",{children:e.major||"학과"})]})]}),t(I,{variant:"contained",onClick:x,children:"신청하기"})]}),t(R,{title:"학과별 조건 입력",open:n,onClose:x,children:e&&t(z,{majorInfo:y,setValue:p,handleApplyButton:j})})]})};export{te as default};
