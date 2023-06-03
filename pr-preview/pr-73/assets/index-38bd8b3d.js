import{c as p,a as T,j as a,d as De,f as Se,u as be,r as i,b as d,P as ve}from"./index-ce9722d6.js";import{B as Q}from"./index-15f7406a.js";import{c as we,M as U,f as g,P as fe,I as ke}from"./index-9ede1571.js";import{S as b}from"./index-09ae8c69.js";import{D as v,C as V}from"./index-de49e047.js";import{a as Ce,b as Ee}from"./major-aef3c494.js";const Le=p("section",{target:"e1vjh0u99"})("display:flex;flex-direction:column;justify-content:center;padding:0 30px;gap:20px;",({theme:t})=>T("min-height:calc(var(--vh, 1vh) * 100 - ",t.layouts.fixedHeight,");",""),";"),Te=p("div",{target:"e1vjh0u98"})("font-size:18px;font-weight:700;text-align:center;color:",({theme:t})=>t.colors.black,";"),Me=p("div",{target:"e1vjh0u97"})("font-size:14px;font-weight:400;text-align:center;",({theme:t})=>T("color:",t.colors.primary_200,";",""),";"),X=p("div",{target:"e1vjh0u96"})({name:"1g5w59a",styles:"display:grid;grid-template-columns:1fr 1fr;gap:10px;width:100%;margin:20px 0 10px 0"}),Oe=p("div",{target:"e1vjh0u93"})("display:grid;grid-template-rows:350px 1fr;width:100%;height:350px;background-color:",({theme:t})=>t.colors.white_300,";border:1px solid ",({theme:t})=>t.colors.light_grey_100,";border-radius:5px;margin-bottom:30px;"),Pe=p("div",{target:"e1vjh0u92"})("display:flex;flex-direction:column;justify-content:space-evenly;align-items:flex-start;width:100%;padding:10px;border:1px solid ",({theme:t})=>t.colors.light_grey_100,";border-top:1px solid ",({theme:t})=>t.colors.background_2,";background-color:",({theme:t})=>t.colors.background_1,";&>div{width:80%;display:flex;justify-content:space-between;align-items:center;&>div{border-bottom:2px solid ",({theme:t})=>t.colors.primary_100,";}}&>div:last-of-type{width:68%;}"),Be=p("div",{target:"e1vjh0u91"})("text-align:center;margin-top:5px;margin-bottom:20px;font-size:20px;font-weight:bold;",({theme:t})=>T("color:",t.colors.primary_300,";",""),";"),w=p("div",{target:"e1vjh0u90"})("span{font-weight:400;color:",({theme:t})=>t.colors.primary_300,";}"),Ae=p("div",{target:"eejiduu0"})("width:380px;height:65%;padding:20px 20px;border-radius:5px;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);background-color:",({theme:t})=>t.colors.white_300,";"),Re=t=>{const{title:y,open:c,onClose:e,children:k}=t;return a(we,{"aria-labelledby":y,open:c,onClose:e,children:a(Ae,{children:k})})},f={"선택 없음":"",학번:"고학번","재학 여부":"재학여부","전공 수업 수":"전공수업수","통학 시간":"통학시간","통학 여부":"통학여부","학생회비 납부 여부":"학생회비 납부여부"},We=()=>{var W,$,q;const t=De(),{createToastMessage:y}=Se(),{me:c}=be(),{majorInfo:e}=Ce(U[(c==null?void 0:c.major)??"학과"]),k=new Date((e==null?void 0:e.start_date)??""),Y=new Date((e==null?void 0:e.end_date)??""),Z=new Date((e==null?void 0:e.apply_start_date)??""),j=new Date((e==null?void 0:e.apply_end_date)??""),[I,ee]=i.useState(!1),[M,C]=i.useState(!1),[O,E]=i.useState(!1),[u,P]=i.useState(),[h,B]=i.useState(),te=((W=e==null?void 0:e.priority_1)==null?void 0:W.name)||"선택 없음",ae=(($=e==null?void 0:e.priority_2)==null?void 0:$.name)||"선택 없음",se=((q=e==null?void 0:e.priority_3)==null?void 0:q.name)||"선택 없음",[x,A]=i.useState("선택 없음"),[_,R]=i.useState("선택 없음"),[D,F]=i.useState("선택 없음"),[N,re]=i.useState(()=>(e==null?void 0:e.is_baserule_FCFS)?"선착순":"랜덤"),[z,ne]=i.useState(()=>{let s=e==null?void 0:e.apply_start_date,l=e==null?void 0:e.apply_end_date;if(e!=null&&e.apply_start_date&&(e!=null&&e.apply_end_date)){const r=new Date(e==null?void 0:e.apply_start_date);s=g(r);const n=new Date(e==null?void 0:e.apply_end_date);l=g(n)}return[s||"",l||""]}),[H,ie]=i.useState(()=>{let s=e==null?void 0:e.start_date,l=e==null?void 0:e.end_date;if(e!=null&&e.start_date&&(e!=null&&e.end_date)){const r=new Date(e==null?void 0:e.start_date);s=g(r);const n=new Date(e==null?void 0:e.end_date);l=g(n)}return[s||"",l??""]}),m=()=>{ee(!I),C(!1),E(!1)},le=()=>{C(!0),E(!1)},de=()=>{C(!1),E(!0)},ce=s=>A(s.currentTarget.innerText),oe=s=>R(s.currentTarget.innerText),pe=s=>F(s.currentTarget.innerText),ue=s=>re(s.currentTarget.innerText),{mutate:he}=Ee(),[ge,_e]=i.useState(!1),[ye,J]=i.useState(!1),L=s=>{let r=Object.keys(f);return s===1?r=r.filter(n=>n!==_&&n!==D):s===2?r=r.filter(n=>n!==x&&n!==D):s===3&&(r=r.filter(n=>n!==x&&n!==_)),r.includes("선택 없음")||r.push("선택 없음"),r},xe=()=>{var G,K;if(!ye&&(!u||!h)){y("날짜 선택은 필수입니다.","error");return}if(x==="선택 없음"&&_!=="선택 없음"){y("1순위를 선택해야 2순위를 선택할 수 있습니다.","error");return}if(_==="선택 없음"&&D!=="선택 없음"){y("2순위를 선택해야 3순위를 선택할 수 있습니다.","error");return}const[s,l]=((G=u==null?void 0:u.toString())==null?void 0:G.split(",").map(o=>new Date(o).toISOString()))||[],[r,n]=((K=h==null?void 0:h.toString())==null?void 0:K.split(",").map(o=>new Date(o).toISOString()))||[],S={id:U[(c==null?void 0:c.major)??"학과"],priority_1:f[x],priority_2:f[_],priority_3:f[D],start_date:r,end_date:n,apply_start_date:s,apply_end_date:l,is_baserule_FCFS:N==="선착순"};he(S,{onSuccess:o=>{if(!o.start_date||!o.end_date||!o.apply_end_date||!o.apply_start_date)throw Error;_e(!0),J(!0),A(te),R(ae),F(se),P([Z,j]),B([k,Y]),t(ve.MAIN)},onError:o=>console.error("PatchMajor Error:",o)})};return i.useEffect(()=>{e!=null&&e.start_date&&(e!=null&&e.end_date)&&(e!=null&&e.apply_end_date)&&(e!=null&&e.apply_start_date)&&J(!0)},[]),i.useEffect(()=>{if(u){const[s,l]=u.toString().split(",").map(S=>new Date(S)),r=g(s),n=g(l);ne([r,n])}else return},[u]),i.useEffect(()=>{if(h){const[s,l]=h.toString().split(",").map(S=>new Date(S)),r=g(s),n=g(l);ie([r,n])}else return},[h]),d(fe,{children:[d(Le,{children:[a(Te,{children:d("h2",{children:[c==null?void 0:c.major," 사물함 배정하기"]})}),d(Me,{children:[a("span",{children:"배정 날짜와 기준을 선택해주세요."}),a("br",{}),a("span",{children:"배정 날짜와 동점자 배정 기준은 필수 항목입니다."})]}),d(X,{onClick:le,children:[a(v,{label:"사물함 신청 시작일",date:z[0]}),a(v,{label:"사물함 신청 종료일",date:z[1]})]}),d(X,{onClick:de,children:[a(v,{label:"사물함 이용 시작일",date:H[0]}),a(v,{label:"사물함 이용 종료일",date:H[1]})]}),a(Oe,{children:d(Pe,{children:[d(w,{children:[a("span",{children:"1순위: "}),a(b,{value:x,list:L(1),handleChange:ce})]}),d(w,{children:[a("span",{children:"2순위:"}),a(b,{value:_,list:L(2),handleChange:oe})]}),d(w,{children:[a("span",{children:"3순위:"}),a(b,{value:D,list:L(3),handleChange:pe})]}),d(w,{children:[a("span",{children:"동점자 기준:"}),a(b,{value:N,list:["선착순","랜덤"],handleChange:ue})]})]})}),a(Q,{type:"submit",variant:"contained",startIcon:a(ke,{iconName:"box"}),onClick:xe,disabled:ge,children:"수정하기"})]}),d(Re,{className:"modal",title:"날짜선택",open:M||O,onClose:m,children:[a(Be,{children:"날짜 선택"}),M&&a("div",{style:{width:"100%"},children:a(V,{selectedDate:u,setSelectedDate:P})}),O&&a(V,{selectedDate:h,setSelectedDate:B}),a(Q,{onClick:m,children:"확인"})]})]})};export{We as default};
