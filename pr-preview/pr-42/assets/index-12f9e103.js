import{c as r,a as s,r as n,d as c,b as t,j as l}from"./index-a0b3c9b6.js";import{B as d}from"./index-42f8a788.js";import{P as g}from"./index-49359706.js";import{S as h,B as p}from"./building-e4b09f44.js";const x=r("section",{target:"e1rvq8hz8"})("display:flex;flex-direction:column;justify-content:center;align-items:center;padding:0 30px;",({theme:e})=>s("min-height:calc(var(--vh, 1vh) * 100 - ",e.layouts.fixedHeight,");",""),";"),m=r("div",{target:"e1rvq8hz7"})("display:grid;grid-template-rows:350px 1fr;width:100%;height:450px;background-color:",({theme:e})=>e.colors.white_300,";border:1px solid ",({theme:e})=>e.colors.light_grey_100,";border-radius:5px;margin-bottom:30px;"),u=r("div",{target:"e1rvq8hz5"})("display:flex;flex-direction:column;justify-content:space-evenly;align-items:flex-start;width:100%;padding:0 10px;border-top:1px solid ",({theme:e})=>e.colors.light_grey_100,";background-color:",({theme:e})=>e.colors.background_2,";&>div{width:100%;}"),j=()=>{const[e,i]=n.useState("건물"),o=a=>i(a.currentTarget.innerText);return c(),t(g,{children:l(x,{children:[t(m,{children:t(u,{children:t(h,{value:e,list:Object.keys(p).slice(1),handleChange:o})})}),t(d,{variant:"contained",children:"쉐어 신청하기"})]})})};export{j as default};
