import{c as i,a as x,r as a,j as e,b as s}from"./index-2bc097df.js";import{B as h,P as u}from"./index-c90ec0c6.js";import{C as D,D as n}from"./index-53485214.js";import{f as o}from"./date-fdfefd0a.js";const S=i("section",{target:"ezp6n7f1"})("display:flex;flex-direction:column;justify-content:center;align-items:center;padding:0 30px;",({theme:t})=>x("min-height:calc(var(--vh, 1vh) * 100 - ",t.layouts.fixedHeight,");",""),";"),y=i("div",{target:"ezp6n7f0"})({name:"17r82ng",styles:"display:grid;grid-template-columns:1fr 1fr;gap:10px;width:100%;margin:50px 0 30px 0"}),E=()=>{const[t,c]=a.useState(),[r,l]=a.useState(["",""]);return a.useEffect(()=>{if(t){const[d,p]=t.toString().split(",").map(g=>new Date(g)),f=o(d),m=o(p);l([f,m])}else return},[t]),e(u,{children:s(S,{children:[e(D,{selectedDate:t,setSelectedDate:c}),s(y,{children:[e(n,{label:"시작일",date:r[0]}),e(n,{label:"종료일",date:r[1]})]}),e(h,{variant:"contained",children:"쉐어하기"})]})})};export{E as default};
