import{c as p,e as M,j as a,u as Se,f as be,b as ve,r as i,a as d,P as we}from"./index-11338412.js";import{B as Y}from"./index-eeee021e.js";import{d as fe,M as Z,f as g,P as ke,I as Ce}from"./index-d667ee29.js";import{S as v}from"./index-88c2fab0.js";import{D as w,C as j}from"./index-018e51b3.js";import{a as Ee,b as Le}from"./major-83447431.js";const Te=p("section",{target:"e1vjh0u99"})("display:flex;flex-direction:column;justify-content:center;padding:0 30px;gap:20px;",({theme:t})=>M("min-height:calc(var(--vh, 1vh) * 100 - ",t.layouts.fixedHeight,");",""),";"),Me=p("div",{target:"e1vjh0u98"})("font-size:18px;font-weight:700;text-align:center;color:",({theme:t})=>t.colors.black,";"),Oe=p("div",{target:"e1vjh0u97"})("font-size:14px;font-weight:400;text-align:center;",({theme:t})=>M("color:",t.colors.primary_200,";",""),";"),I=p("div",{target:"e1vjh0u96"})({name:"1g5w59a",styles:"display:grid;grid-template-columns:1fr 1fr;gap:10px;width:100%;margin:20px 0 10px 0"}),Pe=p("div",{target:"e1vjh0u93"})("display:grid;grid-template-rows:350px 1fr;width:100%;height:350px;background-color:",({theme:t})=>t.colors.white_300,";border:1px solid ",({theme:t})=>t.colors.light_grey_100,";border-radius:5px;margin-bottom:30px;"),Be=p("div",{target:"e1vjh0u92"})("display:flex;flex-direction:column;justify-content:space-evenly;align-items:flex-start;width:100%;padding:10px;border:1px solid ",({theme:t})=>t.colors.light_grey_100,";border-top:1px solid ",({theme:t})=>t.colors.background_2,";background-color:",({theme:t})=>t.colors.background_1,";&>div{width:80%;display:flex;justify-content:space-between;align-items:center;&>div{border-bottom:2px solid ",({theme:t})=>t.colors.primary_100,";}}&>div:last-of-type{width:68%;}"),Ae=p("div",{target:"e1vjh0u91"})("text-align:center;margin-top:5px;margin-bottom:20px;font-size:20px;font-weight:bold;",({theme:t})=>M("color:",t.colors.primary_300,";",""),";"),f=p("div",{target:"e1vjh0u90"})("span{font-weight:400;color:",({theme:t})=>t.colors.primary_300,";}"),Re=p("div",{target:"eejiduu0"})("width:380px;height:65%;padding:20px 20px;border-radius:5px;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);background-color:",({theme:t})=>t.colors.white_300,";"),Fe=t=>{const{title:_,open:c,onClose:e,children:k}=t;return a(fe,{"aria-labelledby":_,open:c,onClose:e,children:a(Re,{children:k})})},x={"선택 없음":"",고학번:"고학번","재학 여부":"재학여부","전공 수업 수":"전공수업수","통학 시간":"통학시간","통학 여부":"통학여부","학생회비 납부 여부":"학생회비 납부여부"},T=t=>Object.keys(x).find(_=>x[_]===t)??"선택 없음",$e=()=>{var K,Q,U;const t=Se(),{createToastMessage:_}=be(),{me:c}=ve(),{majorInfo:e}=Ee(Z[(c==null?void 0:c.major)??"학과"]),k=new Date((e==null?void 0:e.start_date)??""),ee=new Date((e==null?void 0:e.end_date)??""),te=new Date((e==null?void 0:e.apply_start_date)??""),ae=new Date((e==null?void 0:e.apply_end_date)??""),[se,re]=i.useState(!1),[O,C]=i.useState(!1),[P,E]=i.useState(!1),[u,B]=i.useState(),[h,A]=i.useState(),R=((K=e==null?void 0:e.priority_1)==null?void 0:K.name)||"선택 없음",F=((Q=e==null?void 0:e.priority_2)==null?void 0:Q.name)||"선택 없음",N=((U=e==null?void 0:e.priority_3)==null?void 0:U.name)||"선택 없음",[D,z]=i.useState(T(R)),[y,H]=i.useState(T(F)),[S,m]=i.useState(T(N)),[J,ne]=i.useState(()=>(e==null?void 0:e.is_baserule_FCFS)?"선착순":"랜덤"),[W,ie]=i.useState(()=>{let s=e==null?void 0:e.apply_start_date,l=e==null?void 0:e.apply_end_date;if(e!=null&&e.apply_start_date&&(e!=null&&e.apply_end_date)){const r=new Date(e==null?void 0:e.apply_start_date);s=g(r);const n=new Date(e==null?void 0:e.apply_end_date);l=g(n)}return[s||"",l||""]}),[$,le]=i.useState(()=>{let s=e==null?void 0:e.start_date,l=e==null?void 0:e.end_date;if(e!=null&&e.start_date&&(e!=null&&e.end_date)){const r=new Date(e==null?void 0:e.start_date);s=g(r);const n=new Date(e==null?void 0:e.end_date);l=g(n)}return[s||"",l??""]}),q=()=>{re(!se),C(!1),E(!1)},de=()=>{C(!0),E(!1)},ce=()=>{C(!1),E(!0)},oe=s=>z(s.currentTarget.innerText),pe=s=>H(s.currentTarget.innerText),ue=s=>m(s.currentTarget.innerText),he=s=>ne(s.currentTarget.innerText),{mutate:ge}=Le(),[_e,ye]=i.useState(!1),[xe,G]=i.useState(!1),L=s=>{let r=Object.keys(x);return s===1?r=r.filter(n=>n!==y&&n!==S):s===2?r=r.filter(n=>n!==D&&n!==S):s===3&&(r=r.filter(n=>n!==D&&n!==y)),r.includes("선택 없음")||r.push("선택 없음"),r},De=()=>{var V,X;if(!xe&&(!u||!h)){_("날짜 선택은 필수입니다.","error");return}if(D==="선택 없음"&&y!=="선택 없음"){_("1순위를 선택해야 2순위를 선택할 수 있습니다.","error");return}if(y==="선택 없음"&&S!=="선택 없음"){_("2순위를 선택해야 3순위를 선택할 수 있습니다.","error");return}const[s,l]=((V=u==null?void 0:u.toString())==null?void 0:V.split(",").map(o=>new Date(o).toISOString()))||[],[r,n]=((X=h==null?void 0:h.toString())==null?void 0:X.split(",").map(o=>new Date(o).toISOString()))||[],b={id:Z[(c==null?void 0:c.major)??"학과"],priority_1:x[D],priority_2:x[y],priority_3:x[S],start_date:r,end_date:n,apply_start_date:s,apply_end_date:l,is_baserule_FCFS:J==="선착순"};ge(b,{onSuccess:o=>{if(!o.start_date||!o.end_date||!o.apply_end_date||!o.apply_start_date)throw Error;ye(!0),G(!0),z(R),H(F),m(N),B([te,ae]),A([k,ee]),t(we.MAIN)},onError:o=>console.error("PatchMajor Error:",o)})};return i.useEffect(()=>{e!=null&&e.start_date&&(e!=null&&e.end_date)&&(e!=null&&e.apply_end_date)&&(e!=null&&e.apply_start_date)&&G(!0)},[]),i.useEffect(()=>{if(u){const[s,l]=u.toString().split(",").map(b=>new Date(b)),r=g(s),n=g(l);ie([r,n])}else return},[u]),i.useEffect(()=>{if(h){const[s,l]=h.toString().split(",").map(b=>new Date(b)),r=g(s),n=g(l);le([r,n])}else return},[h]),d(ke,{children:[d(Te,{children:[a(Me,{children:d("h2",{children:[c==null?void 0:c.major," 사물함 배정하기"]})}),d(Oe,{children:[a("span",{children:"배정 날짜와 기준을 선택해주세요."}),a("br",{}),a("span",{children:"배정 날짜와 동점자 배정 기준은 필수 항목입니다."})]}),d(I,{onClick:de,children:[a(w,{label:"사물함 신청 시작일",date:W[0]}),a(w,{label:"사물함 신청 종료일",date:W[1]})]}),d(I,{onClick:ce,children:[a(w,{label:"사물함 이용 시작일",date:$[0]}),a(w,{label:"사물함 이용 종료일",date:$[1]})]}),a(Pe,{children:d(Be,{children:[d(f,{children:[a("span",{children:"1순위: "}),a(v,{value:D,list:L(1),handleChange:oe})]}),d(f,{children:[a("span",{children:"2순위:"}),a(v,{value:y,list:L(2),handleChange:pe})]}),d(f,{children:[a("span",{children:"3순위:"}),a(v,{value:S,list:L(3),handleChange:ue})]}),d(f,{children:[a("span",{children:"동점자 기준:"}),a(v,{value:J,list:["선착순","랜덤"],handleChange:he})]})]})}),a(Y,{type:"submit",variant:"contained",startIcon:a(Ce,{iconName:"box"}),onClick:De,disabled:_e,children:"수정하기"})]}),d(Fe,{className:"modal",title:"날짜선택",open:O||P,onClose:q,children:[a(Ae,{children:"날짜 선택"}),O&&a("div",{style:{width:"100%"},children:a(j,{selectedDate:u,setSelectedDate:B})}),P&&a(j,{selectedDate:h,setSelectedDate:A}),a(Y,{onClick:q,children:"확인"})]})]})};export{$e as default};
