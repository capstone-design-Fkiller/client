import{c as o,e as M,j as t,u as be,f as fe,b as ve,r as i,a as l,P as we}from"./index-74a95d2e.js";import{B as Y}from"./index-28e51542.js";import{d as ke,M as Z,f as g,P as Ce,I as Ee}from"./index-443a8384.js";import{S as f}from"./index-2d139fb7.js";import{D as v,C as j}from"./index-f456681d.js";import{a as Le,b as Te}from"./major-f3637431.js";const Me=o("section",{target:"e1vjh0u911"})("display:flex;flex-direction:column;justify-content:center;padding:0 30px;gap:20px;",({theme:s})=>M("min-height:calc(var(--vh, 1vh) * 100 - ",s.layouts.fixedHeight,");",""),";"),Oe=o("div",{target:"e1vjh0u910"})("font-size:18px;font-weight:700;text-align:center;color:",({theme:s})=>s.colors.black,";"),Pe=o("div",{target:"e1vjh0u99"})("font-size:14px;font-weight:400;text-align:center;",({theme:s})=>M("color:",s.colors.primary_200,";",""),";"),I=o("div",{target:"e1vjh0u98"})({name:"fljuf7",styles:"display:grid;grid-template-columns:1fr 1fr;gap:10px;width:100%;margin-top:20px"}),Be=o("div",{target:"e1vjh0u95"})("display:grid;grid-template-rows:350px 1fr;width:100%;height:350px;background-color:",({theme:s})=>s.colors.white_300,";border:1px solid ",({theme:s})=>s.colors.light_grey_100,";border-radius:5px;margin-bottom:30px;"),Ae=o("div",{target:"e1vjh0u94"})("display:flex;flex-direction:column;justify-content:space-evenly;align-items:flex-start;width:100%;padding:0 10px 10px 10px;border:1px solid ",({theme:s})=>s.colors.light_grey_100,";border-top:1px solid ",({theme:s})=>s.colors.background_2,";background-color:",({theme:s})=>s.colors.background_1,";&>div{width:80%;display:flex;justify-content:space-between;align-items:center;&>div{border-bottom:2px solid ",({theme:s})=>s.colors.primary_100,";}}&>div:last-of-type{width:68%;}"),Re=o("div",{target:"e1vjh0u93"})("text-align:center;margin-top:5px;margin-bottom:20px;font-size:20px;font-weight:bold;",({theme:s})=>M("color:",s.colors.primary_300,";",""),";"),w=o("div",{target:"e1vjh0u92"})("span{font-weight:400;color:",({theme:s})=>s.colors.primary_300,";}"),ee=o("span",{target:"e1vjh0u91"})("font-weight:300;font-size:13px;color:",({theme:s})=>s.colors.grey_200,";text-align:center;position:relative;top:13px;"),ze=o("span",{target:"e1vjh0u90"})("position:relative;display:flex;flex-direction:column;font-weight:300;font-size:12.5px;color:",({theme:s})=>s.colors.grey_200,";text-align:center;"),He=o("div",{target:"eejiduu0"})("width:380px;height:65%;padding:20px 20px;border-radius:5px;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);background-color:",({theme:s})=>s.colors.white_300,";"),Fe=s=>{const{title:_,open:d,onClose:e,children:k}=s;return t(ke,{"aria-labelledby":_,open:d,onClose:e,children:t(He,{children:k})})},y={"선택 없음":"",고학번:"고학번","재학 여부":"재학여부","전공 수업 수":"전공수업수","통학 시간":"통학시간","통학 여부":"통학여부","학생회비 납부 여부":"학생회비 납부여부"},T=s=>Object.keys(y).find(_=>y[_]===s)??"선택 없음",Ge=()=>{var K,Q,U;const s=be(),{createToastMessage:_}=fe(),{me:d}=ve(),{majorInfo:e}=Le(Z[(d==null?void 0:d.major)??"학과"]),k=new Date((e==null?void 0:e.start_date)??""),te=new Date((e==null?void 0:e.end_date)??""),se=new Date((e==null?void 0:e.apply_start_date)??""),re=new Date((e==null?void 0:e.apply_end_date)??""),[ae,ne]=i.useState(!1),[O,C]=i.useState(!1),[P,E]=i.useState(!1),[h,B]=i.useState(),[u,A]=i.useState(),R=((K=e==null?void 0:e.priority_1)==null?void 0:K.name)||"선택 없음",z=((Q=e==null?void 0:e.priority_2)==null?void 0:Q.name)||"선택 없음",H=((U=e==null?void 0:e.priority_3)==null?void 0:U.name)||"선택 없음",[S,F]=i.useState(T(R)),[x,N]=i.useState(T(z)),[D,m]=i.useState(T(H)),[J,ie]=i.useState(()=>(e==null?void 0:e.is_baserule_FCFS)?"선착순":"랜덤"),[W,le]=i.useState(()=>{let r=e==null?void 0:e.apply_start_date,c=e==null?void 0:e.apply_end_date;if(e!=null&&e.apply_start_date&&(e!=null&&e.apply_end_date)){const a=new Date(e==null?void 0:e.apply_start_date);a.setHours(a.getHours()+9),r=g(a);const n=new Date(e==null?void 0:e.apply_end_date);c=g(n)}return[r||"",c||""]}),[$,ce]=i.useState(()=>{let r=e==null?void 0:e.start_date,c=e==null?void 0:e.end_date;if(e!=null&&e.start_date&&(e!=null&&e.end_date)){const a=new Date(e==null?void 0:e.start_date);a.setHours(a.getHours()+9),r=g(a);const n=new Date(e==null?void 0:e.end_date);c=g(n)}return[r||"",c??""]}),q=()=>{ne(!ae),C(!1),E(!1)},de=()=>{C(!0),E(!1)},oe=()=>{C(!1),E(!0)},pe=r=>F(r.currentTarget.innerText),he=r=>N(r.currentTarget.innerText),ue=r=>m(r.currentTarget.innerText),ge=r=>ie(r.currentTarget.innerText),{mutate:_e}=Te(),[xe,ye]=i.useState(!1),[Se,G]=i.useState(!1),L=r=>{let a=Object.keys(y);return r===1?a=a.filter(n=>n!==x&&n!==D):r===2?a=a.filter(n=>n!==S&&n!==D):r===3&&(a=a.filter(n=>n!==S&&n!==x)),a.includes("선택 없음")||a.push("선택 없음"),a},De=()=>{var V,X;if(!Se&&(!h||!u)){_("날짜 선택은 필수입니다.","error");return}if(S==="선택 없음"&&x!=="선택 없음"){_("1순위를 선택해야 2순위를 선택할 수 있습니다.","error");return}if(x==="선택 없음"&&D!=="선택 없음"){_("2순위를 선택해야 3순위를 선택할 수 있습니다.","error");return}const[r,c]=((V=h==null?void 0:h.toString())==null?void 0:V.split(",").map(p=>new Date(p).toISOString()))||[],[a,n]=((X=u==null?void 0:u.toString())==null?void 0:X.split(",").map(p=>new Date(p).toISOString()))||[],b={id:Z[(d==null?void 0:d.major)??"학과"],priority_1:y[S],priority_2:y[x],priority_3:y[D],start_date:a,end_date:n,apply_start_date:r,apply_end_date:c,is_baserule_FCFS:J==="선착순"};_e(b,{onSuccess:p=>{if(!p.start_date||!p.end_date||!p.apply_end_date||!p.apply_start_date)throw Error;ye(!0),G(!0),F(R),N(z),m(H),B([se,re]),A([k,te]),s(we.MAIN)},onError:p=>console.error("PatchMajor Error:",p)})};return i.useEffect(()=>{e!=null&&e.start_date&&(e!=null&&e.end_date)&&(e!=null&&e.apply_end_date)&&(e!=null&&e.apply_start_date)&&G(!0)},[]),i.useEffect(()=>{if(h){const[r,c]=h.toString().split(",").map(b=>new Date(b)),a=g(r),n=g(c);le([a,n])}else return},[h]),i.useEffect(()=>{if(u){const[r,c]=u.toString().split(",").map(b=>new Date(b)),a=g(r),n=g(c);ce([a,n])}else return},[u]),l(Ce,{children:[l(Me,{children:[t(Oe,{children:l("h2",{children:[d==null?void 0:d.major," 사물함 배정하기"]})}),l(Pe,{children:[t("span",{children:"배정 날짜와 기준을 선택해주세요."}),t("br",{}),t("span",{children:"배정 날짜와 동점자 배정 기준은 필수 항목입니다."})]}),l(ee,{children:[l("span",{children:[t("span",{style:{fontSize:"16px"},children:"⏷"})," 학과 학생에게 사물함 신청 받을 기간을 설정합니다"]}),t("br",{}),t("span",{children:"예: 3월 10일 목요일 ~ 3월 15일 일요일"})]}),l(I,{onClick:de,children:[t(v,{label:"사물함 신청 시작일",date:W[0]}),t(v,{label:"사물함 신청 종료일",date:W[1]})]}),l(ee,{children:[l("span",{children:[t("span",{style:{fontSize:"16px"},children:"⏷"})," 학과 학생이 사물함을 이용할 기간을 설정합니다"]}),t("br",{}),t("span",{children:"예: 한 학기(3월 15일 수요일 ~ 8월 19일 금요일)"})]}),l(I,{onClick:oe,children:[t(v,{label:"사물함 이용 시작일",date:$[0]}),t(v,{label:"사물함 이용 종료일",date:$[1]})]}),t(Be,{children:l(Ae,{children:[t(ze,{children:t("span",{children:"✔︎ 우선순위가 높은 학생부터 차례대로 사물함이 배정됩니다."})}),l(w,{children:[t("span",{children:"1순위: "}),t(f,{value:S,list:L(1),handleChange:pe})]}),l(w,{children:[t("span",{children:"2순위:"}),t(f,{value:x,list:L(2),handleChange:he})]}),l(w,{children:[t("span",{children:"3순위:"}),t(f,{value:D,list:L(3),handleChange:ue})]}),l(w,{children:[t("span",{children:"동점자 기준:"}),t(f,{value:J,list:["선착순","랜덤"],handleChange:ge})]})]})}),t(Y,{type:"submit",variant:"contained",startIcon:t(Ee,{iconName:"box"}),onClick:De,disabled:xe,children:"수정하기"})]}),l(Fe,{className:"modal",title:"날짜선택",open:O||P,onClose:q,children:[t(Re,{children:"날짜 선택"}),O&&t("div",{style:{width:"100%"},children:t(j,{selectedDate:h,setSelectedDate:B})}),P&&t(j,{selectedDate:u,setSelectedDate:A}),t(Y,{onClick:q,children:"확인"})]})]})};export{Ge as default};
