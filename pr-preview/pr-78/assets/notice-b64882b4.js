import{i as a,f as c,g as d,h as i,u as l,k as u}from"./index-0998911e.js";import{M as g}from"./index-2eb6dc0c.js";const M=async t=>{const{data:e}=await a.post("notice/",t);return e},N=async t=>{const{data:e}=await a.get(`notice/?major=${t}`);return e},y=async t=>{const{data:e}=await a.get(`notice/${t}`);return e},w=async t=>{const{id:e,...o}=t,{data:s}=await a.patch(`notice/${e}`,o);return s},E=async t=>{const{data:e}=await a.delete(`notice/${t}`);return e},n={notice:"notice",noticeDetail:"noticedetail"},Q=t=>{const{createToastMessage:e}=c(),{data:o,isLoading:s}=d([n.notice,t],()=>N(t),{onError:()=>{e("다시 시도해주세요.","error")}});return{data:o,isLoading:s}},C=t=>{const{createToastMessage:e}=c(),o=i(),{data:s,isLoading:r}=d([n.noticeDetail,t],()=>y(t),{onError:()=>{e("다시 시도해주세요.","error")}});return o.invalidateQueries(n.noticeDetail),{data:s,isLoading:r}},D=()=>{const{me:t}=l(),{createToastMessage:e}=c(),o=i();return u(m=>{if(!t)throw new Error;return M({...m,major:g[t.major],writer:t.id})},{onSuccess:()=>{e("공지사항 등록 완료!","success"),o.invalidateQueries(n.notice)},onError:()=>e("다시 시도해주세요.","error")})},T=()=>{const{me:t}=l(),e=i(),{createToastMessage:o}=c();if(!t)throw new Error;return u(r=>w({...r}),{onSuccess:()=>{o("공지사항 수정 완료!","success"),e.invalidateQueries(n.notice)},onError:()=>o("다시 시도해주세요.","error")})},f=()=>{const{createToastMessage:t}=c(),e=i();return u(E,{onSuccess:()=>{t("공지사항 삭제 완료!","success"),e.invalidateQueries(n.notice)},onError:()=>t("다시 시도해주세요.","error")})};export{D as a,C as b,f as c,T as d,Q as u};
