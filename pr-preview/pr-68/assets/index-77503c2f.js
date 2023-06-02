import{c as s,a as N,d as A,r as S,m as L,b as d,j as e,P as U,n as I}from"./index-edd27eba.js";import{B as x,M as T,P as K}from"./index-9d068101.js";import{u as c}from"./useInput-37ff4212.js";import{S as M}from"./index-1529fcb4.js";const P=s("div",{target:"e141km5q2"})("display:flex;justify-content:center;flex-direction:column;align-items:center;padding:0 30px;",({theme:n})=>N("min-height:calc(var(--vh, 1vh) * 100 - ",n.layouts.fixedHeight," - 60px);",""),";"),_=s("h1",{target:"e141km5q1"})("font-size:28px;font-weight:700;margin-bottom:30px;color:",({theme:n})=>n.colors.primary_200,";"),B=s("p",{target:"e141km5q0"})("font-size:14px;color:",({theme:n})=>n.colors.grey_200,";text-decoration:underline;margin-top:20px;cursor:pointer;"),D=s("form",{target:"e1ltggf83"})({name:"u5fx95",styles:"display:flex;flex-direction:column;justify-content:center;align-items:center;width:100%"}),V=s("div",{target:"e1ltggf82"})({name:"118jjl7",styles:"display:grid;gap:10px;grid-template-columns:1fr 1fr;width:100%;margin-bottom:30px"}),a=s("input",{target:"e1ltggf81"})("padding:15px 10px;width:100%;font-size:14px;margin-bottom:10px;border:none;border-radius:5px;box-shadow:",({theme:n})=>n.shadow.type_1,";&[type='number']::-webkit-outer-spin-button,&[type='number']::-webkit-inner-spin-button{-webkit-appearance:none;margin:0;}"),q=s("label",{target:"e1ltggf80"})({name:"71fkhl",styles:"display:flex;justify-content:center;align-items:center;margin:20px 0;& input[type='checkbox']{width:15px;height:15px;margin:0 10px 0 0;outline:none;}"}),j={name:"iqoq9n",styles:"margin-top:20px"},l={STUDENT:"student",ADMIN:"admin"},F=()=>{const n=A(),[o,b]=S.useState(l.STUDENT),{value:p,handleValue:w}=c(""),{value:i,handleValue:v}=c(""),{mutate:m}=L(),g=h=>{b(h)},r=()=>{m({is_usermode:l.STUDENT===o,id:p,password:i},{onSuccess:()=>n(U.MAIN)})},y=h=>{h.key==="Enter"&&r()},u=()=>{r()};return d(D,{onSubmit:r,children:[d(V,{children:[e(x,{variant:o===l.STUDENT?"contained":"outlined",onClick:()=>g(l.STUDENT),children:"학생 로그인"}),e(x,{variant:o===l.ADMIN?"contained":"outlined",onClick:()=>g(l.ADMIN),children:"관리자 로그인"})]}),e(a,{type:"text",placeholder:"아이디를 입력해주세요.",value:p,autoFocus:!0,onChange:w,onKeyDown:y}),e(a,{type:"password",placeholder:"비밀번호를 입력해주세요.",value:i,onChange:v,onKeyDown:y}),e(x,{variant:"contained",onClick:u,css:j,children:"로그인하기"})]})},R=n=>{const{setMode:o}=n,b=Object.keys(T),{value:p,handleValue:w}=c(""),{value:i,handleValue:v}=c(""),{value:m,handleValue:g}=c(""),{value:r,handleValue:y}=c(""),[u,h]=S.useState(!1),{mutate:C}=I(),k=()=>{C({id:p,password1:i,password2:i,major:T[r],name:m,is_adminable:u},{onSuccess:()=>o(!1)})},f=t=>{["e","E","+","-"].includes(t.key)&&t.preventDefault(),(t.key==="ArrowUp"||t.key==="ArrowDown")&&t.preventDefault(),t.key==="Enter"&&k()},E=()=>{k()};return d(D,{onSubmit:k,children:[e(a,{type:"number",placeholder:"아이디를 입력해주세요.",value:p,autoFocus:!0,onChange:w,onKeyDown:f}),e(a,{type:"password",placeholder:"비밀번호를 입력해주세요.",value:i,onChange:v,onKeyDown:f}),e(a,{type:"text",placeholder:"이름을 입력해주세요.",value:m,onChange:g,onKeyDown:f}),e(a,{type:"text",list:"majorList",placeholder:"학과명을 입력해주세요.",value:r,onChange:y,onKeyDown:f}),e("datalist",{id:"majorList",children:b.map(t=>e("option",{value:t},t))}),d(q,{children:[e(a,{type:"checkbox",checked:u,onChange:()=>h(!u)}),"관리자 모드로 회원가입 하기"]}),e(x,{variant:"contained",onClick:E,css:j,children:"회원가입"})]})};var z={name:"1bkpu5b",styles:"margin-top:30px"};function Y(){const[n,o]=S.useState(!1);return e(K,{children:d(P,{children:[e(_,{children:"HUFS LOCKER"}),n?e(R,{setMode:o}):e(F,{}),e(M,{css:z}),d(B,{onClick:()=>o(!n),children:[n?"로그인":"회원가입","하러 가기"]})]})})}export{Y as default};
