import{c as s,a as v,d as R,e as F,u as H,r as o,j as t,b as n,P as N}from"./index-4af1210a.js";import{B as z,I as J,P as L}from"./index-01d646a0.js";import{S as c}from"./index-cc6989d4.js";import{C as W,D as b}from"./index-d4148c7e.js";import{M as q}from"./major-a63cf2c8.js";import{a as G}from"./major-48ef0356.js";import{f as j}from"./date-fdfefd0a.js";const K=s("section",{target:"e14g5ljl8"})("display:flex;flex-direction:column;justify-content:center;padding:0 30px;gap:20px;",({theme:e})=>v("min-height:calc(var(--vh, 1vh) * 100 - ",e.layouts.fixedHeight,");",""),";"),Q=s("div",{target:"e14g5ljl7"})("font-size:18px;font-weight:700;text-align:center;color:",({theme:e})=>e.colors.black,";"),U=s("div",{target:"e14g5ljl6"})("font-size:14px;font-weight:400;text-align:center;",({theme:e})=>v("color:",e.colors.primary_200,";",""),";"),V=s("div",{target:"e14g5ljl5"})({name:"1g5w59a",styles:"display:grid;grid-template-columns:1fr 1fr;gap:10px;width:100%;margin:20px 0 10px 0"}),X=s("div",{target:"e14g5ljl2"})("display:grid;grid-template-rows:350px 1fr;width:100%;height:350px;background-color:",({theme:e})=>e.colors.white_300,";border:1px solid ",({theme:e})=>e.colors.light_grey_100,";border-radius:5px;margin-bottom:30px;"),Y=s("div",{target:"e14g5ljl1"})("display:flex;flex-direction:column;justify-content:space-evenly;align-items:flex-start;width:100%;padding:10px;border:1px solid ",({theme:e})=>e.colors.light_grey_100,";border-top:1px solid ",({theme:e})=>e.colors.background_2,";background-color:",({theme:e})=>e.colors.background_1,";&>div{width:80%;display:flex;justify-content:space-between;align-items:center;&>div{border-bottom:2px solid ",({theme:e})=>e.colors.primary_100,";}}&>div:last-of-type{width:68%;}"),d=s("div",{target:"e14g5ljl0"})("span{font-weight:400;color:",({theme:e})=>e.colors.primary_300,";}"),f={"재학 여부":!0,"학생회비 납부 여부":!0,"통학 거리":!1,학년:!1},oe=()=>{const e=R(),{createToastMessage:_}=F(),{me:a}=H(),[i,S]=o.useState(),[x,C]=o.useState(["",""]),[p,w]=o.useState("선택 없음"),[g,T]=o.useState("선택 없음"),[h,P]=o.useState("선택 없음"),[y,D]=o.useState("선착순"),k=r=>w(r.currentTarget.innerText),I=r=>T(r.currentTarget.innerText),M=r=>P(r.currentTarget.innerText),B=r=>D(r.currentTarget.innerText),{mutate:E}=G(),A=()=>{if(!i){_("날짜 선택은 필수입니다.","error");return}const[r,u]=i.toString().split(",").map(l=>new Date(l).toISOString()),m={id:q[(a==null?void 0:a.major)??"학과"],name:(a==null?void 0:a.major)??"학과",priority_1:p==="선택 없음"?null:p,priority_2:g==="선택 없음"?null:g,priority_3:h==="선택 없음"?null:h,apply_start_date:r,apply_end_date:u,is_baserule_FCFS:y!=="선착순"};E(m,{onSuccess:()=>e(N.MAIN),onError:l=>console.error("PutMajor Error:",l)})};return o.useEffect(()=>{if(i){const[r,u]=i.toString().split(",").map(O=>new Date(O)),m=j(r),l=j(u);C([m,l])}else return},[i]),t(L,{children:n(K,{children:[t(Q,{children:n("h2",{children:[a==null?void 0:a.major," 사물함 배정하기"]})}),n(U,{children:[t("span",{children:"배정 날짜와 기준을 선택해주세요."}),t("br",{}),t("span",{children:"배정 날짜와 동점자 배정 기준은 필수 항목입니다."})]}),t(W,{selectedDate:i,setSelectedDate:S}),n(V,{children:[t(b,{label:"배정 접수 시작일",date:x[0]}),t(b,{label:"배정 접수 종료일",date:x[1]})]}),t(X,{children:n(Y,{children:[n(d,{children:[t("span",{children:"1순위: "}),t(c,{value:p,list:Object.keys(f),handleChange:k})]}),n(d,{children:[t("span",{children:"2순위:"}),t(c,{value:g,list:Object.keys(f),handleChange:I})]}),n(d,{children:[t("span",{children:"3순위:"}),t(c,{value:h,list:Object.keys(f),handleChange:M})]}),n(d,{children:[t("span",{children:"동점자 기준:"}),t(c,{value:y,list:["선착순","랜덤"],handleChange:B})]})]})}),t(z,{type:"submit",variant:"contained",startIcon:t(J,{iconName:"box"}),onClick:A,children:"사물함 배정하기"})]})})};export{oe as default};