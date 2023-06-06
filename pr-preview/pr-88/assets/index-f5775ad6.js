import{c as d,e as R,u as j,b as x,j as e,a as n,P as p,F as s,L as k,m as T}from"./index-11338412.js";import{B as h}from"./index-eeee021e.js";import{M as C,I as u,P as M,Y as g,a as b,f as D,g as A}from"./index-d667ee29.js";import{u as B}from"./assign-f03769af.js";import{g as w}from"./building-925df4bd.js";import{d as F,u as P,c as E}from"./locker-de7fca34.js";const N=d("section",{target:"e377ic81"})("display:flex;flex-direction:column;justify-content:center;padding:0 30px;gap:20px;",({theme:r})=>R("min-height:calc(var(--vh, 1vh) * 100 - ",r.layouts.fixedHeight,");",""),";"),L=()=>{const r=j(),{me:t}=x(),{data:a}=B(C[(t==null?void 0:t.major)??"학과"]);return e(M,{children:e(N,{children:t?n(s,{children:[e(h,{variant:"contained",startIcon:e(u,{iconName:"box"}),onClick:()=>r(p.CRITERIA),children:"사물함 배정기준 설정"}),(a==null?void 0:a.at(0))??void 0?e(s,{children:e(h,{variant:"outlined",color:"error",disableFocusRipple:!0,disableTouchRipple:!0,disabled:!0,children:"사물함 배정 완료"})}):e(h,{variant:"contained",startIcon:e(u,{iconName:"box"}),onClick:()=>r(p.SORT),children:"사물함 배정 확정"}),e(h,{variant:"contained",startIcon:e(u,{iconName:"box"}),onClick:()=>r(p.RESULT),children:"이번 학기 사물함 신청내역"})]}):e(k,{})})})},q=d("div",{target:"el43r1n3"})({name:"1e3x3sk",styles:"display:flex;flex-direction:column;width:100%;margin-bottom:30px"}),z=d("div",{target:"e1s505tl2"})("display:grid;grid-template-columns:auto 1fr;gap:10px;align-items:center;padding:0 15px;margin-bottom:30px;border:1px solid ",({theme:r})=>r.colors.light_grey_200,";border-bottom-left-radius:5px;border-bottom-right-radius:5px;height:150px;&.none{display:flex;justify-content:center;text-align:center;}"),H=d("div",{target:"e1s505tl1"})({name:"1n1dqqm",styles:"display:flex;flex-direction:column;align-items:flex-start;justify-content:center;gap:6px"}),U=d("div",{target:"e1s505tl0"})("display:flex;align-items:center;padding:0 15px;justify-content:center;color:",({theme:r})=>r.colors.white_300,";background-color:",({theme:r})=>r.colors.primary_200,";border-top-left-radius:5px;border-top-right-radius:5px;height:40px;"),l=r=>{const{label:t,value:a}=r;return n(v.InfoRow,{children:[n(v.InfoLabel,{children:[t,":"]}),e("p",{children:a})]})},v={InfoRow:d("div",{target:"eedo7o31"})({name:"s5xdrg",styles:"display:flex;align-items:center"}),InfoLabel:d("p",{target:"eedo7o30"})({name:"nn32so",styles:"font-weight:bold;margin-right:8px"})},y=r=>{const{locker:t,userId:a,me:i,shareType:c}=r,{user:o}=T(a??0);return n(s,{children:[e(U,{children:"[ 쉐어 정보 ]"}),n(z,{className:t?"grid":"none",children:[e(u,{iconName:"share",size:"70",hasCursor:!1}),n(H,{children:[e(l,{label:c,value:`${o==null?void 0:o.name}`}),e(l,{label:"학과",value:`${o==null?void 0:o.major}`}),t.owned_id===i.id&&e(s,{children:t.shared_id?n(s,{children:[e(l,{label:"쉐어 시작일",value:t.share_start_date?g(t.share_start_date):"-"}),e(l,{label:"쉐어 반납일",value:t.share_end_date?g(t.share_end_date):"-"}),e("p",{children:"사물함 이용중"})]}):e(l,{label:"쉐어등록여부",value:t.is_share_registered?"✔️":"❌"})})]})]})]})},_=d("div",{target:"e1os9kl82"})("display:grid;grid-template-columns:auto 1fr;gap:10px;align-items:center;padding:0 15px;margin-bottom:30px;border:1px solid ",({theme:r})=>r.colors.light_grey_200,";border-bottom-left-radius:5px;border-bottom-right-radius:5px;height:150px;&.flex{display:flex;justify-content:center;text-align:center;}&.none{display:flex;justify-content:center;text-align:center;flex-direction:column;}"),S=d("div",{target:"e1os9kl81"})({name:"1n1dqqm",styles:"display:flex;flex-direction:column;align-items:flex-start;justify-content:center;gap:6px"}),f=d("div",{target:"e1os9kl80"})("display:flex;align-items:center;padding:0 15px;justify-content:center;color:",({theme:r})=>r.colors.white_300,";background-color:",({theme:r})=>r.colors.primary_200,";border-top-left-radius:5px;border-top-right-radius:5px;height:40px;"),I=r=>{const{start_label:t,start_date:a,end_label:i,end_date:c}=r;return n(s,{children:[e(l,{label:t,value:g(a)??"-"}),e(l,{label:i,value:g(c)||"-"})]})},m=r=>{const{locker:t,me:a,applyCheck:i}=r;return t?n(s,{children:[e(f,{children:"[ 내 사물함 ]"}),n(_,{className:"flex",children:[e(u,{iconName:"locker",size:"70",hasCursor:!1}),n(S,{children:[e(l,{label:"사물함 위치",value:`${w(t.building_id)} ${t.floor}층`}),e(l,{label:"사물함 번호",value:`${t.locker_number}번`}),t.owned_id===a.id&&n(s,{children:[e(I,{start_label:"사용 시작일",start_date:t.start_date,end_label:"반납 예정일",end_date:t.end_date}),t.shared_id?e(l,{label:"쉐어중",value:"✔️"}):e(s,{children:e(l,{label:t.is_share_registered?"쉐어등록기간":"쉐어등록여부",value:t.is_share_registered?`${b(t.share_start_date)}~${b(t.share_end_date)}`:"❌"})})]}),t.shared_id===a.id&&n(s,{children:[e(I,{start_label:"쉐어 시작일",start_date:t.share_start_date,end_label:"쉐어 종료일",end_date:t.share_end_date}),e(l,{label:"쉐어 받음",value:"✔️"})]})]})]})]}):n(s,{children:[e(f,{children:"[ 내 사물함 ]"}),n(_,{className:"none",children:[e("p",{children:"배정된 사물함이 없습니다."}),i?"":e("p",{children:"사물함을 신청하세요."}),n("p",{children:["신청 여부 :"," ",e("span",{style:{color:"red",fontWeight:"900"},children:i?"✔️":"❌"})]})]})]})};m.Status=function(t){const{locker:a,applyCheck:i}=t;if(a||!i)return null;const c=D(new Date(i.created_at));return n(s,{children:[e(f,{children:"[ 사물함 신청 정보 ]"}),n(_,{className:"grid",children:[e(u,{iconName:"user",size:"90",hasCursor:!1}),n(S,{children:[e(l,{label:"학과",value:`${A(i.major)}`}),e(l,{label:"신청 위치",value:`${w(i.building_id)}`}),e(l,{label:"신청 날짜",value:`${c}`})]})]})]})};const Y=r=>{const{me:t,locker:a}=r,{data:i}=F(C[t.major],t.id);return n(q,{children:[e(m,{locker:a,me:t,applyCheck:i}),e(m.Status,{locker:a,me:t,applyCheck:i}),(a==null?void 0:a.shared_id)==t.id&&e(y,{locker:a,userId:a==null?void 0:a.owned_id,me:t,shareType:"빌려준 사람"}),(a==null?void 0:a.owned_id)==t.id&&a.shared_id&&e(y,{locker:a,userId:a==null?void 0:a.shared_id,me:t,shareType:"빌린 사람"})]})},O=()=>{const r=j(),{me:t}=x();if(!t)throw new Error("로그인을 해주세요!");const{myLocker:a}=P(t.id||0),i=$=>{r($)},{mutate:c}=E(),o=()=>{a&&c({id:a.id,share_end_date:null,share_start_date:null})};return e(M,{children:e(N,{children:t&&n(s,{children:[e(Y,{me:t,locker:a}),a&&!(a!=null&&a.shared_id)&&!(a!=null&&a.is_share_registered)&&e(h,{style:{marginTop:"-50px"},variant:"contained",onClick:()=>i(p.USER_SHARE),children:"사물함 쉐어하기"}),(a==null?void 0:a.owned_id)===(t==null?void 0:t.id)&&!(a!=null&&a.shared_id)&&(a==null?void 0:a.is_share_registered)&&e(h,{style:{marginTop:"-50px"},variant:"outlined",onClick:o,children:"쉐어 취소"})]})})})},X=()=>{const{me:r}=x();return r!=null&&r.is_usermode?e(O,{}):e(L,{})};export{X as default};
