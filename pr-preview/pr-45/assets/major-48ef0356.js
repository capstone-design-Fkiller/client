import{i as a,f as u,e as i,h as j}from"./index-4af1210a.js";const m=async t=>{const{data:o}=await a.get(`major/${t}`);return o},y=async t=>{const{id:o,...r}=t,{data:s}=await a.put(`/major/${o}`,r);return s},M={major:"major"},d=(t,o)=>{const{data:r}=u([M.major,t],()=>m(t),{enabled:!!t,select:s=>{const{priority_1:e,priority_2:n,priority_3:c}=s;return o?{priority_1:e,priority_2:n,priority_3:c}:s}});return{majorInfo:r}},g=()=>{const{createToastMessage:t}=i();return j(r=>y(r),{onSuccess:r=>{t("배정 기준 설정이 완료되었습니다.","success")},onError:()=>{t("배정 기준 설정에 실패했습니다.","error")}})};export{g as a,d as u};
