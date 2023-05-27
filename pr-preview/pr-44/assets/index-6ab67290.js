import{c as o,a as T,e as v,r as E,f as N,b as t,j as r,P as S}from"./index-4d655461.js";import{B as c}from"./index-6cbce2e5.js";import{P as D}from"./index-0b6dc99d.js";import{u as m}from"./useInput-cac2ac8e.js";const b=o("div",{target:"e1w3ycz04"})("display:flex;justify-content:center;flex-direction:column;align-items:center;padding:0 30px;",({theme:e})=>T("min-height:calc(var(--vh, 1vh) * 100 - ",e.layouts.fixedHeight,");",""),";"),I=o("h1",{target:"e1w3ycz03"})("font-size:28px;font-weight:700;margin-bottom:30px;color:",({theme:e})=>e.colors.primary_200,";"),j=o("form",{target:"e1w3ycz02"})({name:"u5fx95",styles:"display:flex;flex-direction:column;justify-content:center;align-items:center;width:100%"}),z=o("div",{target:"e1w3ycz01"})({name:"118jjl7",styles:"display:grid;gap:10px;grid-template-columns:1fr 1fr;width:100%;margin-bottom:30px"}),h=o("input",{target:"e1w3ycz00"})("padding:15px 10px;width:100%;font-size:14px;margin-bottom:10px;border:none;border-radius:5px;box-shadow:",({theme:e})=>e.shadow.type_1,";"),C={name:"iqoq9n",styles:"margin-top:20px"},n={STUDENT:"student",ADMIN:"admin"};function B(){const e=v(),[a,g]=E.useState(n.STUDENT),{value:d,handleValue:y}=m(""),{value:l,handleValue:x}=m(""),{mutate:f}=N(),p=s=>{g(s)},i=()=>{f({is_usermode:n.STUDENT===a,id:d,password:l},{onSuccess:()=>e(S.MAIN)})},u=s=>{s.key==="Enter"&&i()},w=()=>{i()};return t(D,{children:r(b,{children:[t(I,{children:"HUFS LOCKER"}),r(j,{onSubmit:i,children:[r(z,{children:[t(c,{variant:a===n.STUDENT?"contained":"outlined",onClick:()=>p(n.STUDENT),children:"학생 로그인"}),t(c,{variant:a===n.ADMIN?"contained":"outlined",onClick:()=>p(n.ADMIN),children:"관리자 로그인"})]}),t(h,{type:"text",placeholder:"아이디를 입력해주세요.",value:d,autoFocus:!0,onChange:y,onKeyDown:u}),t(h,{type:"password",placeholder:"비밀번호를 입력해주세요.",value:l,onChange:x,onKeyDown:u}),t(c,{variant:"contained",onClick:w,css:C,children:"LOGIN"})]})]})})}export{B as default};
