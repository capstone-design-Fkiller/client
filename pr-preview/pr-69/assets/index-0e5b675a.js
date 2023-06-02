import{c as i,a as T,j as o,b as n,l as R,r as A,u as j,f as q,d as P,P as E}from"./index-e7d86b1a.js";import{B as N}from"./index-1d3868a8.js";import{I as G,M as b,P as z,a as V}from"./index-4f52a430.js";import{S as W}from"./index-91e128cd.js";import{S as D}from"./index-cfda6d1a.js";import{B as M}from"./building-925df4bd.js";import{u as H}from"./useInput-32f33cf4.js";import{d as X,e as I,f as K}from"./locker-c4bc85d8.js";import{u as $}from"./major-7dabc13f.js";const J=i("section",{target:"e1a6068d3"})("display:flex;flex-direction:column;justify-content:center;padding:0 30px;",({theme:e})=>T("min-height:calc(var(--vh, 1vh) * 100 - ",e.layouts.fixedHeight,");",""),";"),U=i("div",{target:"e1a6068d2"})("display:grid;grid-template-rows:350px 1fr;width:100%;height:450px;background-color:",({theme:e})=>e.colors.white_300,";border:1px solid ",({theme:e})=>e.colors.light_grey_100,";border-radius:5px;margin-bottom:30px;"),Q=i("div",{target:"e1a6068d0"})("display:flex;flex-direction:column;justify-content:space-evenly;align-items:flex-start;width:100%;padding:0 10px;border-top:1px solid ",({theme:e})=>e.colors.light_grey_100,";background-color:",({theme:e})=>e.colors.background_2,";&>div{display:flex;align-items:center;width:100%;height:24px;&:last-of-type{padding:0 10px;}}"),Y=e=>{const{majorInfo:a,setValue:p,handleApplyButton:s}=e;if(!a)return o("span",{children:"추가 조건이 없습니다!"});const h=Object.entries(a).filter(([,r])=>r),l=(r,t)=>{let d;r.target.type==="checkbox"?d=r.target.checked||!1:d=Number(r.target.value),console.log(d),p(u=>({...{...u},[`${t}_answer`]:d}))};return n(g.Root,{children:[n("div",{children:[n(g.Description,{children:["동점자는 ",a.is_baserule_FCFS?"선착순":"랜덤"," 우선배정됩니다 😊"]}),o("br",{}),h.length?h.map(([r,t],d)=>n(g.ConditionWrapper,{children:[n(g.Name,{children:[d+1,"순위: ",t.name]}),t.is_bool?n(g.Label,{children:[o(g.Input,{type:"checkbox",onChange:u=>l(u,r)}),o("span",{className:"slider"})]}):o(g.Input,{type:"number",placeholder:t.question,onChange:u=>l(u,r)})]},r)):null]}),o(N,{variant:"contained",onClick:s,children:"신청"})]})},g={Root:i("div",{target:"euooqhp5"})({name:"14ggdrv",styles:"height:100%;display:flex;flex-direction:column;justify-content:space-between"}),ConditionWrapper:i("div",{target:"euooqhp4"})({name:"r3aoht",styles:"width:100%;margin-bottom:25px"}),Name:i("div",{target:"euooqhp3"})({name:"oub90b",styles:"margin-bottom:10px;font-size:15px"}),Label:i("label",{target:"euooqhp2"})("position:relative;display:inline-block;width:60px;height:29px;& input{opacity:0;width:0;height:0;}& .slider{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:#ccc;-webkit-transition:0.4s;transition:0.4s;border-radius:29px;}& .slider:before{position:absolute;content:'';height:21px;width:21px;left:4px;bottom:4px;background-color:white;-webkit-transition:0.4s;transition:0.4s;border-radius:50%;}& input:checked+.slider{background-color:",({theme:e})=>e.colors.primary_200,";}& input:focus+.slider{box-shadow:0 0 1px ",({theme:e})=>e.colors.primary_300,";}& input:checked+.slider:before{-webkit-transform:translateX(31px);-ms-transform:translateX(31px);transform:translateX(31px);}"),Input:i("input",{target:"euooqhp1"})({name:"1l2d352",styles:"width:100%;padding:10px 5px;&::placeholder{font-size:14px;}"}),Description:i("p",{target:"euooqhp0"})("color:",({theme:e})=>e.colors.grey_300,";font-size:15px;text-align:center;")},O={not_building:"건물을 선택해주세요.",not_login:"로그인 후 사용할 수 있습니다!"},Z=e=>{const{me:a,value:p,total:s,applyCount:h}=e,l=R();if(!a||!s){const t=a?O.not_building:O.not_login;return n(c.Root,{children:[o(G,{iconName:"nothing",size:"100",color:l.colors.grey_200,hasCursor:!1}),o("span",{style:{color:l.colors.grey_200},children:t})]})}const r=Math.ceil(h/s*100);return n(c.Root,{children:[o(c.GradientWrapper,{children:n(c.Building,{grd:r>100?100:r,children:[o(c.Floor,{}),o(c.Floor,{}),o(c.Floor,{}),o(c.Floor,{}),o(c.Floor,{})]})}),n(c.Title,{children:[p," ( ",h," / ",s," )"]})]})},c={Root:i("div",{target:"e166tayl4"})({name:"l768v7",styles:"display:flex;flex-direction:column;justify-content:center;align-items:center;gap:20px;width:100%"}),Building:i("div",{target:"e166tayl3"})("display:grid;grid-template-rows:repeat(5, 1fr);border-radius:5px;",({grd:e})=>T("height:",100-e,"%;background:white;",""),";"),GradientWrapper:i("div",{target:"e166tayl2"})({name:"1ncgd1x",styles:"background-color:#2cb67d"}),Floor:i("div",{target:"e166tayl1"})("width:100px;height:50px;background-color:transparent;border:5px solid ",({theme:e})=>e.colors.light_grey_200,";"),Title:i("h1",{target:"e166tayl0"})("")},ee=(e=!1)=>{const[a,p]=A.useState(e);return{open:a,handleOpen:()=>p(!a),setOpen:p}},pe=()=>{var k,C,S;const{me:e}=j(),{open:a,handleOpen:p}=ee(),{createToastMessage:s}=q(),h=P();if(!e)return s("로그인을 다시 해주세요!","error"),h(E.LOGIN),o("div",{});const[l,r]=A.useState("건물"),{majorInfo:t}=$(b[e.major],!0),{value:d,setValue:u}=H({priority_1_answer:((k=t==null?void 0:t.priority_1)==null?void 0:k.is_bool)&&!1,priority_2_answer:((C=t==null?void 0:t.priority_2)==null?void 0:C.is_bool)&&!1,priority_3_answer:((S=t==null?void 0:t.priority_3)==null?void 0:S.is_bool)&&!1}),{applicableBuildings:f}=X(b[e.major]),{mutate:_}=I(),L=y=>r(y.currentTarget.innerText),{data:{apply:v,lockerCounts:m}}=K({major:b[e.major],building_id:M[l]}),x=()=>{if(!e)return s("로그인 후 사용해주세요!","error");if(!(m!=null&&m.length))return s("해당 건물에는 사물함이 없습니다!","error");t||w(),p()},w=()=>{var y,F,B;_({building_id:M[l],major:b[e.major],user:e.id,...d}),u({priority_1_answer:((y=t==null?void 0:t.priority_1)==null?void 0:y.is_bool)&&!1,priority_2_answer:((F=t==null?void 0:t.priority_2)==null?void 0:F.is_bool)&&!1,priority_3_answer:((B=t==null?void 0:t.priority_3)==null?void 0:B.is_bool)&&!1}),x()};return n(z,{children:[n(J,{children:[n(U,{children:[o(Z,{me:e,value:l,total:m?m.length:void 0,applyCount:v?v.length:void 0}),n(Q,{children:[o(W,{value:l,handleChange:L,list:f}),o(D,{}),o("div",{children:e.major||"학과"})]})]}),o(N,{variant:"contained",onClick:x,children:"신청하기"})]}),o(V,{title:"학과별 조건 입력",open:a,onClose:x,children:e&&o(Y,{majorInfo:t,setValue:u,handleApplyButton:w})})]})};export{pe as default};
