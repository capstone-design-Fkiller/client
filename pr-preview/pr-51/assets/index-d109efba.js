import{c as n,a as o,u as c,j as t,b as i}from"./index-45969812.js";import{B as a,P as l}from"./index-9cb394f8.js";const s=n("section",{target:"e1yy22ef2"})("display:flex;flex-direction:column;justify-content:center;align-items:center;padding:0 30px;",({theme:e})=>o("min-height:calc(var(--vh, 1vh) * 100 - ",e.layouts.fixedHeight,");",""),";"),d=n("h1",{target:"e1yy22ef0"})("font-size:30px;font-weight:bold;margin-bottom:10px;color:",({theme:e})=>e.colors.primary_200,";"),f=()=>{const{me:e,logout:r}=c();return t(l,{children:i(s,{children:[t(d,{children:"내 프로필"}),i("p",{children:["이름 : ",e==null?void 0:e.name]}),i("p",{children:["학과 : ",e==null?void 0:e.major]}),i("p",{children:["학번 : ",e==null?void 0:e.id]}),i("p",{children:["상태 : ",e!=null&&e.is_usermode?"사용자":"관리자"]}),t("p",{children:"사물함 신청일 : 2023-03-05"}),t("p",{children:"사물함 배정일 : 2023-03-10"}),t("p",{children:"사물함 위치 : 인문관 3층"}),t(a,{onClick:r,variant:"contained",children:"로그아웃"})]})})};export{f as default};
