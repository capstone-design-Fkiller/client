import{c as r,a as s,r as l,j as t,b as o}from"./index-5478a83e.js";import{L as c,S as d,B as g}from"./building-5f4291d5.js";import{B as h,P as p}from"./index-fd4e317b.js";const x=r("section",{target:"e1rvq8hz8"})("display:flex;flex-direction:column;justify-content:center;align-items:center;padding:0 30px;",({theme:e})=>s("min-height:calc(var(--vh, 1vh) * 100 - ",e.layouts.fixedHeight,");",""),";"),u=r("div",{target:"e1rvq8hz7"})("display:grid;grid-template-rows:350px 1fr;width:100%;height:450px;background-color:",({theme:e})=>e.colors.white_300,";border:1px solid ",({theme:e})=>e.colors.light_grey_100,";border-radius:5px;margin-bottom:30px;"),m=r("div",{target:"e1rvq8hz5"})("display:flex;flex-direction:column;justify-content:space-evenly;align-items:flex-start;width:100%;padding:0 10px;border-top:1px solid ",({theme:e})=>e.colors.light_grey_100,";background-color:",({theme:e})=>e.colors.background_2,";&>div{width:100%;}"),b=()=>{const[e,i]=l.useState("건물"),a=n=>i(n.currentTarget.innerText);return t(p,{children:o(x,{children:[o(u,{children:[t(c.Skeleton,{}),t(m,{children:t(d,{value:e,list:Object.keys(g).slice(1),handleChange:a})})]}),t(h,{variant:"contained",children:"쉐어 신청하기"})]})})};export{b as default};