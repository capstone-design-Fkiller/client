import{c as l,a as w,d as F,f as H,u as N,r as i,j as t,b as o,P as z}from"./index-bce8e72c.js";import{f as _,B as O,I as J,P as W,M as q}from"./index-d351d313.js";import{S as u}from"./index-44cfb321.js";import{C as G,D as j}from"./index-461c64b7.js";import{a as K}from"./major-8d343885.js";const Q=l("section",{target:"e14g5ljl8"})("display:flex;flex-direction:column;justify-content:center;padding:0 30px;gap:20px;",({theme:e})=>w("min-height:calc(var(--vh, 1vh) * 100 - ",e.layouts.fixedHeight,");",""),";"),U=l("div",{target:"e14g5ljl7"})("font-size:18px;font-weight:700;text-align:center;color:",({theme:e})=>e.colors.black,";"),V=l("div",{target:"e14g5ljl6"})("font-size:14px;font-weight:400;text-align:center;",({theme:e})=>w("color:",e.colors.primary_200,";",""),";"),X=l("div",{target:"e14g5ljl5"})({name:"1g5w59a",styles:"display:grid;grid-template-columns:1fr 1fr;gap:10px;width:100%;margin:20px 0 10px 0"}),Y=l("div",{target:"e14g5ljl2"})("display:grid;grid-template-rows:350px 1fr;width:100%;height:350px;background-color:",({theme:e})=>e.colors.white_300,";border:1px solid ",({theme:e})=>e.colors.light_grey_100,";border-radius:5px;margin-bottom:30px;"),Z=l("div",{target:"e14g5ljl1"})("display:flex;flex-direction:column;justify-content:space-evenly;align-items:flex-start;width:100%;padding:10px;border:1px solid ",({theme:e})=>e.colors.light_grey_100,";border-top:1px solid ",({theme:e})=>e.colors.background_2,";background-color:",({theme:e})=>e.colors.background_1,";&>div{width:80%;display:flex;justify-content:space-between;align-items:center;&>div{border-bottom:2px solid ",({theme:e})=>e.colors.primary_100,";}}&>div:last-of-type{width:68%;}"),f=l("div",{target:"e14g5ljl0"})("span{font-weight:400;color:",({theme:e})=>e.colors.primary_300,";}"),x={"선택 없음":"",학년:"고학번","재학 여부":"재학여부","전공 수업 수":"전공수업수","통학 시간":"통학시간","통학 여부":"통학여부","학생회비 납부 여부":"학생회비 납부여부"},ne=()=>{const e=F(),{createToastMessage:m}=H(),{me:c}=N(),[d,C]=i.useState(),[b,S]=i.useState(["",""]),[p,T]=i.useState("선택 없음"),[s,D]=i.useState("선택 없음"),[g,P]=i.useState("선택 없음"),[v,I]=i.useState("선착순"),k=r=>T(r.currentTarget.innerText),M=r=>D(r.currentTarget.innerText),B=r=>P(r.currentTarget.innerText),E=r=>I(r.currentTarget.innerText),{mutate:A}=K(),y=r=>{let n=Object.keys(x);return r===1?n=n.filter(a=>a!==s&&a!==g):r===2?n=n.filter(a=>a!==p&&a!==g):r===3&&(n=n.filter(a=>a!==p&&a!==s)),n},L=()=>{if(!d){m("날짜 선택은 필수입니다.","error");return}if(p==="선택 없음"&&s!=="선택 없음"){m("1순위를 선택해야 2순위를 선택할 수 있습니다.","error");return}if(s==="선택 없음"&&g!=="선택 없음"){m("2순위를 선택해야 3순위를 선택할 수 있습니다.","error");return}const[r,h]=d.toString().split(",").map(a=>new Date(a)),n={id:q[(c==null?void 0:c.major)??"학과"],priority_1:p==="선택 없음"?null:x[p],priority_2:s==="선택 없음"?null:x[s],priority_3:g==="선택 없음"?null:x[g],apply_start_date:new Date(r),apply_end_date:new Date(h),is_baserule_FCFS:v==="선착순"};A(n,{onSuccess:()=>e(z.MAIN),onError:a=>console.error("PutMajor Error:",a)})};return i.useEffect(()=>{if(d){const[r,h]=d.toString().split(",").map(R=>new Date(R)),n=_(r),a=_(h);S([n,a])}else return},[d]),t(W,{children:o(Q,{children:[t(U,{children:o("h2",{children:[c==null?void 0:c.major," 사물함 배정하기"]})}),o(V,{children:[t("span",{children:"배정 날짜와 기준을 선택해주세요."}),t("br",{}),t("span",{children:"배정 날짜와 동점자 배정 기준은 필수 항목입니다."})]}),t(G,{selectedDate:d,setSelectedDate:C}),o(X,{children:[t(j,{label:"배정 접수 시작일",date:b[0]}),t(j,{label:"배정 접수 종료일",date:b[1]})]}),t(Y,{children:o(Z,{children:[o(f,{children:[t("span",{children:"1순위: "}),t(u,{value:p,list:y(1),handleChange:k})]}),o(f,{children:[t("span",{children:"2순위:"}),t(u,{value:s,list:y(2),handleChange:M})]}),o(f,{children:[t("span",{children:"3순위:"}),t(u,{value:g,list:y(3),handleChange:B})]}),o(f,{children:[t("span",{children:"동점자 기준:"}),t(u,{value:v,list:["선착순","랜덤"],handleChange:E})]})]})}),t(O,{type:"submit",variant:"contained",startIcon:t(J,{iconName:"box"}),onClick:L,children:"사물함 배정하기"})]})})};export{ne as default};
