import{i as a,f as r,g as d,h as i,u as l,k as u}from"./index-40284270.js";import{M as m}from"./index-919f4f6d.js";const M=async t=>(await a.post("notice/",t)).data,N=async t=>{const{data:e}=await a.get(`notice/?major=${t}`);return e},p=async t=>{const{data:e}=await a.get(`notice/${t}`);return e},w=async t=>{const{id:e,...o}=t;return(await a.put(`notice/${e}`,o)).data},y=async t=>{const{data:e}=await a.delete(`notice/${t}`);return e},n={notice:"notice",noticeDetail:"noticedetail"},h=t=>{const{createToastMessage:e}=r(),{data:o,isLoading:s}=d([n.notice,t],()=>N(t),{onError:()=>{e("다시 시도해주세요.","error")}});return{data:o,isLoading:s}},C=t=>{const{createToastMessage:e}=r(),o=i(),{data:s,isLoading:c}=d([n.noticeDetail,t],()=>p(t),{onError:()=>{e("다시 시도해주세요.","error")}});return o.invalidateQueries(n.noticeDetail),{data:s,isLoading:c}},D=()=>{const{me:t}=l(),{createToastMessage:e}=r(),o=i();return u(g=>{if(!t)throw new Error;return M({...g,major:m[t.major],writer:t.id})},{onSuccess:()=>{e("공지사항 등록 완료!","success"),o.invalidateQueries(n.notice)},onError:()=>e("다시 시도해주세요.","error")})},T=()=>{const{me:t}=l(),e=i(),{createToastMessage:o}=r();if(!t)throw new Error;return u(c=>w({...c,major:m[t.major],writer:t.id}),{onSuccess:()=>{o("공지사항 수정 완료!","success"),e.invalidateQueries(n.notice)},onError:()=>o("다시 시도해주세요.","error")})},f=()=>{const{createToastMessage:t}=r(),e=i();return u(y,{onSuccess:()=>{t("공지사항 삭제 완료!","success"),e.invalidateQueries(n.notice)},onError:()=>t("다시 시도해주세요.","error")})};export{D as a,C as b,f as c,T as d,h as u};
