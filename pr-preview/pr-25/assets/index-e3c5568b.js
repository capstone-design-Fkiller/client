import{c as a,b as w,u as v,r as m,j as t,a as r}from"./index-07dae0d1.js";import{B as i,P as T}from"./index-fb52ae74.js";const N=a("h1",{target:"e1w3ycz04"})("font-size:30px;margin-bottom:30px;color:",({theme:e})=>e.colors.primary_200,";"),b=a("div",{target:"e1w3ycz03"})("display:flex;justify-content:center;flex-direction:column;align-items:center;padding:0 30px;",({theme:e})=>w("min-height:calc(var(--vh, 1vh) * 100 - ",e.layouts.bottomNavHeight,");",""),";"),C=a("form",{target:"e1w3ycz02"})({name:"1yxf6qu",styles:"display:flex;flex-direction:column;justify-content:center;align-items:center"}),u=a("input",{target:"e1w3ycz01"})("padding:15px 10px;width:100%;margin-bottom:10px;border:none;border-radius:5px;box-shadow:",({theme:e})=>e.shadow.type_1,";"),S=a("div",{target:"e1w3ycz00"})({name:"14nnqif",styles:"display:grid;gap:10px;grid-template-columns:1fr 1fr;width:100%;margin-bottom:10px"}),n={STUDENT:"student",ADMIN:"admin"};function I(){const e=v(),[c,g]=m.useState(n.STUDENT),[o,d]=m.useState({username:"",password:""}),l=s=>{g(s)},p=s=>{const{name:y,value:x}=s.target;d(f=>({...f,[y]:x}))},h=()=>{if(!o.username.trim()||!o.password.trim()){alert("아이디와 비밀번호를 다시 입력해주세요.");return}e("/"),d({username:"",password:""})};return t(T,{children:r(b,{children:[t(N,{children:"LOGIN"}),r(C,{children:[r(S,{children:[t(i,{variant:c===n.STUDENT?"contained":"outlined",onClick:()=>l(n.STUDENT),children:"학생 로그인"}),t(i,{variant:c===n.ADMIN?"contained":"outlined",onClick:()=>l(n.ADMIN),children:"관리자 로그인"})]}),r("div",{children:[t(u,{type:"text",placeholder:"아이디",value:o.username,name:"username",autoFocus:!0,onChange:p}),t(u,{type:"password",placeholder:"비밀번호",value:o.password,name:"password",onChange:p})]}),t(i,{variant:"outlined",onClick:h,children:"LOGIN"})]})]})})}export{I as default};