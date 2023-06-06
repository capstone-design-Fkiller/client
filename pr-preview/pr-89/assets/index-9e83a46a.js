import{c as s,u as N,r as S,n as A,a as d,j as e,P as L,o as U}from"./index-83cb571a.js";import{B as x}from"./index-e5e364f8.js";import{u as c}from"./useInput-e766687f.js";import{M as T,P as I}from"./index-12354551.js";import{S as K}from"./index-66325b40.js";const M=s("div",{target:"e141km5q2"})({name:"1l6xq3t",styles:"display:flex;justify-content:center;flex-direction:column;align-items:center;padding:0 30px;min-height:calc(var(--vh, 1vh) * 100)"}),P=s("h1",{target:"e141km5q1"})("font-size:28px;font-weight:700;margin-bottom:30px;color:",({theme:n})=>n.colors.primary_200,";"),_=s("p",{target:"e141km5q0"})("font-size:14px;color:",({theme:n})=>n.colors.grey_200,";text-decoration:underline;margin-top:20px;cursor:pointer;"),D=s("form",{target:"e1ltggf83"})({name:"u5fx95",styles:"display:flex;flex-direction:column;justify-content:center;align-items:center;width:100%"}),q=s("div",{target:"e1ltggf82"})({name:"118jjl7",styles:"display:grid;gap:10px;grid-template-columns:1fr 1fr;width:100%;margin-bottom:30px"}),a=s("input",{target:"e1ltggf81"})("padding:15px 10px;width:100%;font-size:16px;margin-bottom:10px;border:none;border-radius:5px;box-shadow:",({theme:n})=>n.shadow.type_1,";&::placeholder{font-size:14px;}&[type='number']::-webkit-outer-spin-button,&[type='number']::-webkit-inner-spin-button{-webkit-appearance:none;margin:0;}"),B=s("label",{target:"e1ltggf80"})({name:"71fkhl",styles:"display:flex;justify-content:center;align-items:center;margin:20px 0;& input[type='checkbox']{width:15px;height:15px;margin:0 10px 0 0;outline:none;}"}),j={name:"iqoq9n",styles:"margin-top:20px"},l={STUDENT:"student",ADMIN:"admin"},V=()=>{const n=N(),[o,b]=S.useState(l.STUDENT),{value:p,handleValue:w}=c(""),{value:r,handleValue:v}=c(""),{mutate:h}=A(),g=m=>{b(m)},i=()=>{h({is_usermode:l.STUDENT===o,id:p,password:r},{onSuccess:()=>n(L.MAIN)})},y=m=>{m.key==="Enter"&&i()},u=()=>{i()};return d(D,{onSubmit:i,children:[d(q,{children:[e(x,{variant:o===l.STUDENT?"contained":"outlined",onClick:()=>g(l.STUDENT),children:"학생 로그인"}),e(x,{variant:o===l.ADMIN?"contained":"outlined",onClick:()=>g(l.ADMIN),children:"관리자 로그인"})]}),e(a,{type:"text",placeholder:"아이디를 입력해주세요.",value:p,autoFocus:!0,onChange:w,onKeyDown:y}),e(a,{type:"password",placeholder:"비밀번호를 입력해주세요.",value:r,onChange:v,onKeyDown:y}),e(x,{variant:"contained",onClick:u,css:j,children:"로그인하기"})]})},z=n=>{const{setMode:o}=n,b=Object.keys(T),{value:p,handleValue:w}=c(""),{value:r,handleValue:v}=c(""),{value:h,handleValue:g}=c(""),{value:i,handleValue:y}=c(""),[u,m]=S.useState(!1),{mutate:C}=U(),k=()=>{C({id:p,password1:r,password2:r,major:T[i],name:h,is_adminable:u},{onSuccess:()=>o(!1)})},f=t=>{t.currentTarget.type==="number"&&["e","E","+","-"].includes(t.key)&&t.preventDefault(),(t.key==="ArrowUp"||t.key==="ArrowDown")&&t.preventDefault(),t.key==="Enter"&&k()},E=()=>{k()};return d(D,{onSubmit:k,children:[e(a,{type:"number",placeholder:"아이디를 입력해주세요.",value:p,autoFocus:!0,onChange:w,onKeyDown:f}),e(a,{type:"password",placeholder:"비밀번호를 입력해주세요.",value:r,onChange:v,onKeyDown:f}),e(a,{type:"text",placeholder:"이름을 입력해주세요.",value:h,onChange:g,onKeyDown:f}),e(a,{type:"text",list:"majorList",placeholder:"학과명을 입력해주세요.",value:i,onChange:y,onKeyDown:f}),e("datalist",{id:"majorList",children:b.map(t=>e("option",{value:t},t))}),d(B,{children:[e(a,{type:"checkbox",checked:u,onChange:()=>m(!u)}),"관리자 모드로 회원가입 하기"]}),e(x,{variant:"contained",onClick:E,css:j,children:"회원가입"})]})};var F={name:"1bkpu5b",styles:"margin-top:30px"};function Y(){const[n,o]=S.useState(!1);return e(I.WithoutOption,{children:d(M,{children:[e(P,{children:"HUFS LOCKER"}),n?e(z,{setMode:o}):e(V,{}),e(K,{css:F}),d(_,{onClick:()=>o(!n),children:[n?"로그인":"회원가입","하러 가기"]})]})})}export{Y as default};
