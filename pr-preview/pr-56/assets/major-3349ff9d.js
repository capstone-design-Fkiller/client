import{i as a,g as n,f as m,k as M}from"./index-1bd1ac65.js";const e=async t=>{const{data:o}=await a.get(`major/${t}`);return o},y=async t=>{const{id:o,...r}=t,{data:s}=await a.put(`/major/${o}`,r);return s},c={major:"major"},g=(t,o)=>{const{data:r}=n([c.major,t],()=>e(t),{enabled:!!t,select:s=>{const{priority_1:u,priority_2:i,priority_3:j}=s;return o?{priority_1:u,priority_2:i,priority_3:j}:s}});return{majorInfo:r}},f=t=>{const{data:o}=n([c.major,t],()=>e(t));return{majorInfo:o}},p=()=>{const{createToastMessage:t}=m();return M(r=>y(r),{onSuccess:()=>{t("배정 기준 설정이 완료되었습니다.","success")},onError:()=>{t("배정 기준 설정에 실패했습니다.","error")}})};export{f as a,p as b,g as u};
