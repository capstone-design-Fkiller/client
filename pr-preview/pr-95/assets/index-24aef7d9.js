import{u as D,j as e,F as w,a as n,c,P as S,b as v}from"./index-74a95d2e.js";import{B as A}from"./index-28e51542.js";import{c as i,I as k,P as C,M as P}from"./index-443a8384.js";import R from"./index-c9f168de.js";import{a as z}from"./major-f3637431.js";import"./index-2d139fb7.js";import"./index-f456681d.js";const E=a=>{var s,l,d;const{major:t}=a,o=D(),p=()=>{o(S.CRITERIA_EDIT)},h=new Date((t==null?void 0:t.apply_start_date)||""),u=i(h),y=new Date((t==null?void 0:t.apply_end_date)||""),g=i(y),_=new Date((t==null?void 0:t.start_date)||""),b=i(_),f=new Date((t==null?void 0:t.end_date)||""),m=i(f),x=()=>{if(!(t!=null&&t.apply_start_date))return!1;if(new Date(t==null?void 0:t.apply_start_date)>new Date)return!0};return t?e(C,{children:n(r.Root,{children:[n("h2",{children:[t.name," ",e("br",{}),"사물함 배정 기준"]}),n(r.Container,{children:[n(r.Subject,{children:[e("h3",{children:"사물함 신청 기간"}),n("span",{children:[e("b",{children:"• 시작일:"})," ",u]}),n("span",{children:[e("b",{children:"• 종료일:"})," ",g]})," "]}),n(r.Subject,{children:[e("h3",{children:"사물함 이용 기간"}),n("span",{children:[e("b",{children:"• 시작일"}),": ",b]}),n("span",{children:[e("b",{children:"• 종료일"}),": ",m]})]}),n(r.Subject,{children:[e("h3",{children:"배정 기준"}),n("span",{children:[e("b",{children:"• 1순위"}),": ",((s=t.priority_1)==null?void 0:s.name)??"선택 없음"]}),n("span",{children:[e("b",{children:"• 2순위"}),": ",((l=t.priority_2)==null?void 0:l.name)??"선택 없음"]}),n("span",{children:[e("b",{children:"• 3순위"}),": ",((d=t.priority_3)==null?void 0:d.name)??"선택 없음"]}),n("span",{children:[e("b",{children:"• 동점자 배정 기준"}),": ",t.is_baserule_FCFS?"선착순":"랜덤"]})]})]}),x()&&e(A,{type:"submit",variant:"outlined",startIcon:e(k,{iconName:"box"}),onClick:p,children:"수정하기"})]})}):e(w,{})},r={Root:c("section",{target:"e1vkwz202"})("display:flex;flex-direction:column;justify-content:center;padding:0 30px;gap:20px;min-height:calc(var(--vh, 1vh) * 100 - ",({theme:a})=>a.layouts.fixedHeight,");h2{font-size:1.2rem;text-align:center;font-weight:600;color:",({theme:a})=>a.colors.primary_300,";}"),Container:c("div",{target:"e1vkwz201"})("display:flex;flex-direction:column;padding:25px 24px;width:100%;height:450px;background-color:",({theme:a})=>a.colors.secondary_100,";border:1px solid ",({theme:a})=>a.colors.white_100,";border-radius:5px;"),Subject:c("div",{target:"e1vkwz200"})({name:"tmlars",styles:"display:flex;flex-direction:column;margin-bottom:25px;h3{font-size:16px;font-weight:600;margin-bottom:12px;}span{font-size:15px;font-weight:200;margin-bottom:5px;b{font-weight:400;}}"})},G=()=>{const{me:a}=v(),{majorInfo:t}=z(P[(a==null?void 0:a.major)??"학과"]);return!(t!=null&&t.apply_start_date)&&!(t!=null&&t.apply_end_date)&&!(t!=null&&t.start_date)&&!(t!=null&&t.end_date)?e(R,{}):e(E,{major:t})};export{G as default};
