import{i as a,g as i,f as j,k as m}from"./index-e7d86b1a.js";const y=async t=>{const{data:o}=await a.get(`major/${t}`);return o},M=async t=>{const{id:o,...r}=t,{data:s}=await a.patch(`/major/${o}`,r);return s},_={major:"major"},p=(t,o)=>{const{data:r}=i([_.major,t],()=>y(t),{enabled:!!t,select:s=>{const{priority_1:e,priority_2:n,priority_3:c,is_baserule_FCFS:u}=s;return o?{priority_1:e,priority_2:n,priority_3:c,is_baserule_FCFS:u}:s}});return{majorInfo:r}},d=()=>{const{createToastMessage:t}=j();return m(r=>M(r),{onSuccess:()=>{t("배정 기준 설정이 완료되었습니다.","success")},onError:()=>{t("배정 기준 설정에 실패했습니다.","error")}})};export{d as a,p as u};
