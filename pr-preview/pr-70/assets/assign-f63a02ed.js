import{i as e,f as o,g as r}from"./index-03839a0b.js";const i=async s=>{const a=s||0,{data:t}=await e.get(`assign/${a}`);return t},g={assign:"assignResult"},u=s=>{const{createToastMessage:a}=o(),{data:t,isLoading:n}=r([g.assign],()=>i(s),{onError:()=>{a("오류가 발생했습니다.","error")}});return{data:t,isLoading:n}};export{u};
