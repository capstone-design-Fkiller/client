import{i as o,g as n,f as l,h as g,k as y}from"./index-0998911e.js";const c=async t=>{const{data:s}=await o.get(`major/${t}`);return s},d=async t=>{const{id:s,...a}=t,{data:r}=await o.patch(`/major/${s}`,a);return r},e={major:"major",assign:"assignResult",sort:"sort"},h=(t,s)=>{const{data:a}=n([e.major,t],()=>c(t),{enabled:!!t,select:r=>{const{priority_1:u,priority_2:i,priority_3:j,is_baserule_FCFS:m}=r;return s?{priority_1:u,priority_2:i,priority_3:j,is_baserule_FCFS:m}:r}});return{majorInfo:a}},_=()=>{const{createToastMessage:t}=l(),s=g();return y(r=>d(r),{onSuccess:()=>{t("배정 기준 설정이 완료되었습니다.","success"),s.invalidateQueries([e.assign]),s.invalidateQueries([e.major])},onError:()=>{t("배정 기준 설정에 실패했습니다.","error")}})},p=t=>{const{data:s}=n([e.major,t],()=>c(t),{enabled:!!t,select:a=>a});return{majorInfo:s}};export{p as a,_ as b,h as u};
