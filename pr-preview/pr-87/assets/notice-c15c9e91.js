import{c as r,e as h,i as a,f as n,g as d,b as m,h as i,k as u}from"./index-84b1fab4.js";import{M as p}from"./index-2c97b80e.js";const E=r("div",{target:"e1ch39563"})("display:flex;justify-content:center;flex-direction:column;align-items:center;padding:0 30px;",({theme:t})=>h("min-height:calc(var(--vh, 1vh) * 100 - ",t.layouts.fixedHeight,");",""),";"),v=r("h1",{target:"e1ch39562"})("font-size:25px;font-weight:bold;margin-bottom:10px;color:",({theme:t})=>t.colors.primary_200,";"),b=r("h1",{target:"e1ch39561"})("font-size:17px;font-weight:bold;margin-bottom:10px;color:",({theme:t})=>t.colors.primary_100,";"),C=r("div",{target:"e1ch39560"})({name:"qczfdi",styles:"width:100%;display:grid;gap:10px;margin-bottom:30px;grid-template-columns:1fr 1fr"}),f=async t=>{const{data:e}=await a.post("notice/",t);return e},y=async t=>{const{data:e}=await a.get(`notice/?major=${t}`);return e},w=async t=>{const{data:e}=await a.get(`notice/${t}`);return e},M=async t=>{const{id:e,...o}=t,{data:s}=await a.patch(`notice/${e}`,o);return s},N=async t=>{const{data:e}=await a.delete(`notice/${t}`);return e},c={notice:"notice",noticeDetail:"noticedetail"},Q=t=>{const{createToastMessage:e}=n(),{data:o,isLoading:s}=d([c.notice,t],()=>y(t),{onError:()=>{e("다시 시도해주세요.","error")},staleTime:6e4,refetchInterval:6e4,refetchOnWindowFocus:!1});return{data:o,isLoading:s}},j=t=>{const{createToastMessage:e}=n(),{data:o,isLoading:s}=d([c.notice,t],()=>w(t),{onError:()=>{e("다시 시도해주세요.","error")},staleTime:1e3*60*60,cacheTime:1e3*60*60*24});return{data:o,isLoading:s}},q=()=>{const{me:t}=m(),{createToastMessage:e}=n(),o=i();return u(g=>{if(!t)throw new Error;return f({...g,major:p[t.major],writer:t.id})},{onSuccess:()=>{e("공지사항 등록 완료!","success"),o.invalidateQueries([c.notice])},onError:()=>e("다시 시도해주세요.","error")})},D=()=>{const{me:t}=m(),e=i(),{createToastMessage:o}=n();if(!t)throw new Error;return u(l=>M({...l}),{onSuccess:()=>{o("공지사항 수정 완료!","success"),e.invalidateQueries([c.notice])},onError:()=>o("다시 시도해주세요.","error")})},F=()=>{const{createToastMessage:t}=n(),e=i();return u(N,{onSuccess:()=>{t("공지사항 삭제 완료!","success"),e.invalidateQueries(c.notice)},onError:()=>t("다시 시도해주세요.","error")})};export{C as B,E as R,v as T,b as a,q as b,j as c,F as d,D as e,Q as u};
