import{c as s,a as R,d as I,u as _,j as t,b as r,P as p,F as o,L as k,m as T}from"./index-becf95e7.js";import{B as h}from"./index-c3e94f58.js";import{M as j,I as u,P as C,Y as g,f as $,g as A}from"./index-1bafaa89.js";import{u as B}from"./assign-45d0094a.js";import{g as w}from"./building-925df4bd.js";import{d as F,u as P,c as D}from"./locker-3bccff6f.js";const N=s("section",{target:"e377ic81"})("display:flex;flex-direction:column;justify-content:center;padding:0 30px;gap:20px;",({theme:n})=>R("min-height:calc(var(--vh, 1vh) * 100 - ",n.layouts.fixedHeight,");",""),";"),E=()=>{const n=I(),{me:a}=_(),{data:e}=B(j[(a==null?void 0:a.major)??"학과"]);return t(C,{children:t(N,{children:a?r(o,{children:[t(h,{variant:"contained",startIcon:t(u,{iconName:"box"}),onClick:()=>n(p.CRITERIA),children:"사물함 배정기준 설정"}),(e==null?void 0:e.at(0))??void 0?t(o,{children:t(h,{variant:"outlined",color:"error",disableFocusRipple:!0,disableTouchRipple:!0,disabled:!0,children:"사물함 배정 불가"})}):t(h,{variant:"contained",startIcon:t(u,{iconName:"box"}),onClick:()=>n(p.SORT),children:"사물함 배정 확정"}),t(h,{variant:"contained",startIcon:t(u,{iconName:"box"}),onClick:()=>n(p.RESULT),children:"이번 학기 사물함 신청내역"})]}):t(k,{})})})},L=s("div",{target:"el43r1n3"})({name:"1e3x3sk",styles:"display:flex;flex-direction:column;width:100%;margin-bottom:30px"}),q=s("div",{target:"e1s505tl2"})("display:grid;grid-template-columns:auto 1fr;gap:10px;align-items:center;padding:0 15px;margin-bottom:30px;border:1px solid ",({theme:n})=>n.colors.light_grey_200,";border-bottom-left-radius:5px;border-bottom-right-radius:5px;height:150px;&.none{display:flex;justify-content:center;text-align:center;}"),z=s("div",{target:"e1s505tl1"})({name:"1n1dqqm",styles:"display:flex;flex-direction:column;align-items:flex-start;justify-content:center;gap:6px"}),H=s("div",{target:"e1s505tl0"})("display:flex;align-items:center;padding:0 15px;justify-content:center;color:",({theme:n})=>n.colors.white_300,";background-color:",({theme:n})=>n.colors.primary_200,";border-top-left-radius:5px;border-top-right-radius:5px;height:40px;"),l=n=>{const{label:a,value:e}=n;return r(b.InfoRow,{children:[r(b.InfoLabel,{children:[a,":"]}),t("p",{children:e})]})},b={InfoRow:s("div",{target:"eedo7o31"})({name:"s5xdrg",styles:"display:flex;align-items:center"}),InfoLabel:s("p",{target:"eedo7o30"})({name:"nn32so",styles:"font-weight:bold;margin-right:8px"})},v=n=>{const{locker:a,userId:e,me:i,shareType:c}=n,{user:d}=T(e??0);return r(o,{children:[t(H,{children:"[ 쉐어 정보 ]"}),r(q,{className:a?"grid":"none",children:[t(u,{iconName:"share",size:"70",hasCursor:!1}),r(z,{children:[t(l,{label:c,value:`${d==null?void 0:d.name}`}),t(l,{label:"학과",value:`${d==null?void 0:d.major}`}),a.owned_id===i.id&&t(o,{children:a.shared_id?r(o,{children:[t(l,{label:"쉐어 시작일",value:a.share_start_date?g(a.share_start_date):"-"}),t(l,{label:"쉐어 반납일",value:a.share_end_date?g(a.share_end_date):"-"}),t("p",{children:"사물함 이용중"})]}):t(l,{label:"쉐어등록여부",value:a.is_share_registered?"✔️":"❌"})})]})]})]})},f=s("div",{target:"e1os9kl82"})("display:grid;grid-template-columns:auto 1fr;gap:10px;align-items:center;padding:0 15px;margin-bottom:30px;border:1px solid ",({theme:n})=>n.colors.light_grey_200,";border-bottom-left-radius:5px;border-bottom-right-radius:5px;height:150px;&.flex{display:flex;justify-content:center;text-align:center;}&.none{display:flex;justify-content:center;text-align:center;flex-direction:column;}"),M=s("div",{target:"e1os9kl81"})({name:"1n1dqqm",styles:"display:flex;flex-direction:column;align-items:flex-start;justify-content:center;gap:6px"}),m=s("div",{target:"e1os9kl80"})("display:flex;align-items:center;padding:0 15px;justify-content:center;color:",({theme:n})=>n.colors.white_300,";background-color:",({theme:n})=>n.colors.primary_200,";border-top-left-radius:5px;border-top-right-radius:5px;height:40px;"),y=n=>{const{start_label:a,start_date:e,end_label:i,end_date:c}=n;return console.log(e),r(o,{children:[t(l,{label:a,value:g(e)??"-"}),t(l,{label:i,value:g(c)||"-"})]})},x=n=>{const{locker:a,me:e,applyCheck:i}=n;return a?r(o,{children:[t(m,{children:"[ 내 사물함 ]"}),r(f,{className:"flex",children:[t(u,{iconName:"locker",size:"70",hasCursor:!1}),r(M,{children:[t(l,{label:"사물함 위치",value:`${w(a.building_id)} ${a.floor}층`}),t(l,{label:"사물함 번호",value:`${a.locker_number}번`}),a.owned_id===e.id&&r(o,{children:[t(y,{start_label:"사용 시작일",start_date:a.start_date,end_label:"반납 예정일",end_date:a.end_date}),a.shared_id?t(l,{label:"쉐어중",value:"✔️"}):t(l,{label:"쉐어등록여부",value:a.is_share_registered?"✔️":"❌"})]}),a.shared_id===e.id&&r(o,{children:[t(y,{start_label:"쉐어 시작일",start_date:a.share_start_date,end_label:"쉐어 종료일",end_date:a.share_end_date}),t(l,{label:"쉐어 받음",value:"✔️"})]})]})]})]}):r(o,{children:[t(m,{children:"[ 내 사물함 ]"}),r(f,{className:"none",children:[t("p",{children:"배정된 사물함이 없습니다."}),t("p",{children:"사물함을 신청하세요."}),r("p",{children:["신청 여부 :"," ",t("span",{style:{color:"red",fontWeight:"900"},children:i?"✔️":"❌"})]})]})]})};x.Status=function(a){const{locker:e,applyCheck:i}=a;if(e||!i)return null;const c=$(new Date(i.created_at));return r(o,{children:[t(m,{children:"[ 사물함 신청 정보 ]"}),r(f,{className:"grid",children:[t(u,{iconName:"user",size:"90",hasCursor:!1}),r(M,{children:[t(l,{label:"학과",value:`${A(i.major)}`}),t(l,{label:"신청 위치",value:`${w(i.building_id)}`}),t(l,{label:"신청 날짜",value:`${c}`})]})]})]})};const U=n=>{const{me:a,locker:e}=n,{data:i}=F(j[a.major],a.id);return r(L,{children:[t(x,{locker:e,me:a,applyCheck:i}),t(x.Status,{locker:e,me:a,applyCheck:i}),(e==null?void 0:e.shared_id)==a.id&&t(v,{locker:e,userId:e==null?void 0:e.owned_id,me:a,shareType:"빌려준 사람"}),(e==null?void 0:e.owned_id)==a.id&&e.shared_id&&t(v,{locker:e,userId:e==null?void 0:e.shared_id,me:a,shareType:"빌린 사람"})]})},Y=()=>{const n=I(),{me:a}=_();if(!a)throw new Error("로그인을 해주세요!");const{myLocker:e}=P(a.id||0),i=S=>{n(S)},{mutate:c}=D(),d=()=>{e&&c({id:e.id,share_end_date:null,share_start_date:null})};return t(C,{children:t(N,{children:a&&r(o,{children:[t(U,{me:a,locker:e}),e&&!(e!=null&&e.shared_id)&&!(e!=null&&e.is_share_registered)&&t(h,{style:{marginTop:"-50px"},variant:"contained",onClick:()=>i(p.USER_SHARE),children:"사물함 쉐어하기"}),(e==null?void 0:e.owned_id)===(a==null?void 0:a.id)&&!(e!=null&&e.shared_id)&&(e==null?void 0:e.is_share_registered)&&t(h,{style:{marginTop:"-50px"},variant:"outlined",onClick:d,children:"쉐어 취소"})]})})})},V=()=>{const{me:n}=_();return n!=null&&n.is_usermode?t(Y,{}):t(E,{})};export{V as default};
