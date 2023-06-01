import{c as o,a as T,d as v,r as E,m as S,j as t,b as r,P as D}from"./index-0422ad27.js";import{B as c,P as N}from"./index-bcab5ad6.js";import{u as m}from"./useInput-14b47914.js";const b=o("div",{target:"e1w3ycz04"})("display:flex;justify-content:center;flex-direction:column;align-items:center;padding:0 30px;",({theme:e})=>T("min-height:calc(var(--vh, 1vh) * 100 - ",e.layouts.fixedHeight,");",""),";"),j=o("h1",{target:"e1w3ycz03"})("font-size:28px;font-weight:700;margin-bottom:30px;color:",({theme:e})=>e.colors.primary_200,";"),z=o("form",{target:"e1w3ycz02"})({name:"u5fx95",styles:"display:flex;flex-direction:column;justify-content:center;align-items:center;width:100%"}),C=o("div",{target:"e1w3ycz01"})({name:"118jjl7",styles:"display:grid;gap:10px;grid-template-columns:1fr 1fr;width:100%;margin-bottom:30px"}),h=o("input",{target:"e1w3ycz00"})("padding:15px 10px;width:100%;font-size:14px;margin-bottom:10px;border:none;border-radius:5px;box-shadow:",({theme:e})=>e.shadow.type_1,";"),I={name:"iqoq9n",styles:"margin-top:20px"},n={STUDENT:"student",ADMIN:"admin"};function B(){const e=v(),[a,g]=E.useState(n.STUDENT),{value:d,handleValue:y}=m(""),{value:l,handleValue:x}=m(""),{mutate:f}=S(),p=s=>{g(s)},i=()=>{f({is_usermode:n.STUDENT===a,id:d,password:l},{onSuccess:()=>e(D.MAIN)})},u=s=>{s.key==="Enter"&&i()},w=()=>{i()};return t(N,{children:r(b,{children:[t(j,{children:"HUFS LOCKER"}),r(z,{onSubmit:i,children:[r(C,{children:[t(c,{variant:a===n.STUDENT?"contained":"outlined",onClick:()=>p(n.STUDENT),children:"학생 로그인"}),t(c,{variant:a===n.ADMIN?"contained":"outlined",onClick:()=>p(n.ADMIN),children:"관리자 로그인"})]}),t(h,{type:"text",placeholder:"아이디를 입력해주세요.",value:d,autoFocus:!0,onChange:y,onKeyDown:u}),t(h,{type:"password",placeholder:"비밀번호를 입력해주세요.",value:l,onChange:x,onKeyDown:u}),t(c,{variant:"contained",onClick:w,css:I,children:"로그인하기"})]})]})})}export{B as default};
