import{c as i,a as s,j as t,b as r,u as c,F as d,L as l,P as g}from"./index-3148f241.js";import{B as h}from"./index-d57e3ad6.js";import{I as p,P as m}from"./index-bf8d4176.js";import{u}from"./user-2a98b649.js";const f=i("section",{target:"e377ic80"})("display:flex;flex-direction:column;justify-content:center;padding:0 30px;",({theme:e})=>s("min-height:calc(var(--vh, 1vh) * 100 - ",e.layouts.fixedHeight,");",""),";"),x=({user:e})=>{const{name:o,id:a}=e;return t(n.Container,{children:[r(n.LockerInfo,{children:r(p,{iconName:"locker",size:"150",hasCursor:!1})}),t(n.InformBox,{children:[t("span",{children:["이름: ",o]}),t("span",{children:["학번: ",a]}),t("span",{children:["건물: ",a]}),t("span",{children:["사물함 번호: ",o]})]})]})},n={Container:i("div",{target:"e152uy8q3"})("display:grid;grid-template-rows:350px 1fr;width:100%;height:450px;background-color:",({theme:e})=>e.colors.white_300,";border:1px solid ",({theme:e})=>e.colors.light_grey_100,";border-radius:5px;margin-bottom:30px;"),LockerInfo:i("div",{target:"e152uy8q2"})({name:"e0j0on",styles:"display:flex;justify-content:center;align-items:center;width:100%;height:100%"}),InformBox:i("div",{target:"e152uy8q1"})("display:grid;grid-template-columns:1fr 1fr;justify-items:flex-start;align-items:center;width:100%;padding:0 10px;border-top:1px solid ",({theme:e})=>e.colors.light_grey_100,";background-color:",({theme:e})=>e.colors.background_2,";"),Separator:i("hr",{target:"e152uy8q0"})("width:100%;height:1px;padding-left:10px;border:0;background:",({theme:e})=>e.colors.light_grey_200,";")},k=()=>{const e=c(),{me:o}=u();return r(m,{children:r(f,{children:o?t(d,{children:[r(x,{user:o}),r(h,{variant:"contained",onClick:()=>{e(g.USER_SHARE)},children:"사물함 쉐어하기"})]}):r(l,{})})})};export{k as default};