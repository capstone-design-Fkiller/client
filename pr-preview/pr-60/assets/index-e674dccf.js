import{c as i,a as F,j as o,b as n,l as L,r as N,u as R,f as j,d as q,P}from"./index-daa425fd.js";import{B as A,I as E,M as b,P as G,a as V}from"./index-cfaeb9f2.js";import{S as W}from"./index-bb8daee7.js";import{S as z}from"./index-670ff32a.js";import{B as f}from"./building-34ad378b.js";import{u as H}from"./useInput-81f683f2.js";import{d as X,e as I}from"./locker-144b5ea6.js";import{u as K}from"./major-2e6f04e0.js";const D=i("section",{target:"e1a6068d3"})("display:flex;flex-direction:column;justify-content:center;padding:0 30px;",({theme:e})=>F("min-height:calc(var(--vh, 1vh) * 100 - ",e.layouts.fixedHeight,");",""),";"),J=i("div",{target:"e1a6068d2"})("display:grid;grid-template-rows:350px 1fr;width:100%;height:450px;background-color:",({theme:e})=>e.colors.white_300,";border:1px solid ",({theme:e})=>e.colors.light_grey_100,";border-radius:5px;margin-bottom:30px;"),U=i("div",{target:"e1a6068d0"})("display:flex;flex-direction:column;justify-content:space-evenly;align-items:flex-start;width:100%;padding:0 10px;border-top:1px solid ",({theme:e})=>e.colors.light_grey_100,";background-color:",({theme:e})=>e.colors.background_2,";&>div{display:flex;align-items:center;width:100%;height:24px;&:last-of-type{padding:0 10px;}}"),$=e=>{const{majorInfo:a,setValue:d,handleApplyButton:s}=e;if(!a)return o("span",{children:"추가 조건이 없습니다!"});const h=Object.entries(a).filter(([,r])=>r),l=(r,t)=>{let p;r.target.type==="checkbox"?p=r.target.checked||!1:p=Number(r.target.value),console.log(p),d(u=>({...{...u},[t]:p}))};return n(g.Root,{children:[o("div",{children:h.map(([r,t],p)=>n(g.ConditionWrapper,{children:[n(g.Name,{children:[p+1,"순위: ",t.name]}),t.is_bool?n(g.Label,{children:[o(g.Input,{type:"checkbox",onChange:u=>l(u,r)}),o("span",{className:"slider"})]}):o(g.Input,{placeholder:t.question,onChange:u=>l(u,r)})]},r))}),o(A,{variant:"contained",onClick:s,children:"신청"})]})},g={Root:i("div",{target:"euooqhp4"})({name:"14ggdrv",styles:"height:100%;display:flex;flex-direction:column;justify-content:space-between"}),ConditionWrapper:i("div",{target:"euooqhp3"})({name:"r3aoht",styles:"width:100%;margin-bottom:25px"}),Name:i("div",{target:"euooqhp2"})({name:"oub90b",styles:"margin-bottom:10px;font-size:15px"}),Label:i("label",{target:"euooqhp1"})("position:relative;display:inline-block;width:60px;height:29px;& input{opacity:0;width:0;height:0;}& .slider{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:#ccc;-webkit-transition:0.4s;transition:0.4s;border-radius:29px;}& .slider:before{position:absolute;content:'';height:21px;width:21px;left:4px;bottom:4px;background-color:white;-webkit-transition:0.4s;transition:0.4s;border-radius:50%;}& input:checked+.slider{background-color:",({theme:e})=>e.colors.primary_200,";}& input:focus+.slider{box-shadow:0 0 1px ",({theme:e})=>e.colors.primary_300,";}& input:checked+.slider:before{-webkit-transform:translateX(31px);-ms-transform:translateX(31px);transform:translateX(31px);}"),Input:i("input",{target:"euooqhp0"})({name:"1l2d352",styles:"width:100%;padding:10px 5px;&::placeholder{font-size:14px;}"})},B={not_building:"건물을 선택해주세요.",not_login:"로그인 후 사용할 수 있습니다!"},Q=e=>{const{me:a,value:d,total:s,applyCount:h}=e,l=L();if(!a||!s){const t=a?B.not_building:B.not_login;return n(c.Root,{children:[o(E,{iconName:"nothing",size:"100",color:l.colors.grey_200,hasCursor:!1}),o("span",{style:{color:l.colors.grey_200},children:t})]})}const r=Math.ceil(h/s*100);return n(c.Root,{children:[o(c.GradientWrapper,{children:n(c.Building,{grd:r>100?100:r,children:[o(c.Floor,{}),o(c.Floor,{}),o(c.Floor,{}),o(c.Floor,{}),o(c.Floor,{})]})}),n(c.Title,{children:[d," ( ",h," / ",s," )"]})]})},c={Root:i("div",{target:"e166tayl4"})({name:"l768v7",styles:"display:flex;flex-direction:column;justify-content:center;align-items:center;gap:20px;width:100%"}),Building:i("div",{target:"e166tayl3"})("display:grid;grid-template-rows:repeat(5, 1fr);border-radius:5px;",({grd:e})=>F("height:",100-e,"%;background:white;",""),";"),GradientWrapper:i("div",{target:"e166tayl2"})({name:"1ncgd1x",styles:"background-color:#2cb67d"}),Floor:i("div",{target:"e166tayl1"})("width:100px;height:50px;background-color:transparent;border:5px solid ",({theme:e})=>e.colors.light_grey_200,";"),Title:i("h1",{target:"e166tayl0"})("")},Y=(e=!1)=>{const[a,d]=N.useState(e);return{open:a,handleOpen:()=>d(!a),setOpen:d}},se=()=>{var C,S,M;const{me:e}=R(),{open:a,handleOpen:d}=Y(),{createToastMessage:s}=j(),h=q();if(!e)return s("로그인을 다시 해주세요!","error"),h(P.LOGIN),o("div",{});const[l,r]=N.useState("건물"),{majorInfo:t}=K(b[e.major],!0),{value:p,setValue:u}=H({priority_1:((C=t==null?void 0:t.priority_1)==null?void 0:C.is_bool)&&!1,priority_2:((S=t==null?void 0:t.priority_2)==null?void 0:S.is_bool)&&!1,priority_3:((M=t==null?void 0:t.priority_3)==null?void 0:M.is_bool)&&!1}),{mutate:_}=X(),v=m=>r(m.currentTarget.innerText),{data:{apply:k,lockerCounts:y}}=I({major:b[e.major],building_id:f[l]}),x=()=>{if(!e)return s("로그인 후 사용해주세요!","error");if(!(y!=null&&y.length))return s("해당 건물에는 사물함이 없습니다!","error");t||w(),d()},w=()=>{var m,O,T;_({building_id:f[l],major:b[e.major],user:e.id,...p}),u({priority_1:((m=t==null?void 0:t.priority_1)==null?void 0:m.is_bool)&&!1,priority_2:((O=t==null?void 0:t.priority_2)==null?void 0:O.is_bool)&&!1,priority_3:((T=t==null?void 0:t.priority_3)==null?void 0:T.is_bool)&&!1}),x()};return n(G,{children:[n(D,{children:[n(J,{children:[o(Q,{me:e,value:l,total:y?y.length:void 0,applyCount:k?k.length:void 0}),n(U,{children:[o(W,{value:l,handleChange:v,list:Object.keys(f).slice(1)}),o(z,{}),o("div",{children:e.major||"학과"})]})]}),o(A,{variant:"contained",onClick:x,children:"신청하기"})]}),o(V,{title:"학과별 조건 입력",open:a,onClose:x,children:e&&o($,{majorInfo:t,setValue:u,handleApplyButton:w})})]})};export{se as default};
