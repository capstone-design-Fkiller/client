import{i as a,g as u,f as i,k as j}from"./index-85b0fa21.js";const m=async t=>{const{data:o}=await a.get(`major/${t}`);return o},y=async t=>{const{id:o,...r}=t,{data:s}=await a.put(`/major/${o}`,r);return s},M={major:"major"},p=(t,o)=>{const{data:r}=u([M.major,t],()=>m(t),{enabled:!!t,select:s=>{const{priority_1:n,priority_2:e,priority_3:c}=s;return o?{priority_1:n,priority_2:e,priority_3:c}:s}});return{majorInfo:r}},d=()=>{const{createToastMessage:t}=i();return j(r=>y(r),{onSuccess:()=>{t("배정 기준 설정이 완료되었습니다.","success")},onError:()=>{t("배정 기준 설정에 실패했습니다.","error")}})};export{d as a,p as u};
