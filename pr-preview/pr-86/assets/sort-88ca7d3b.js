import{i as a,f as r,g as u,h as i,k as g}from"./index-3201da87.js";const l=async s=>{const t=s||0,{data:e}=await a.get(`sort/${t}`);return e},m=async(s,t)=>{const e=s||0,{data:o}=await a.post(`assign/${e}`,t);return o},n={sort:"sort",assign:"assignResult"},f=s=>{const{createToastMessage:t}=r(),{data:e,isLoading:o}=u([n.sort],()=>l(s),{onError:()=>{t("오류가 발생했습니다.","error")},staleTime:6e4,refetchInterval:6e4,refetchOnWindowFocus:!1});return{data:e,isLoading:o}},y=()=>{const{createToastMessage:s}=r(),t=i();return g(({major:o,sortResult:c})=>m(o,c),{onSuccess:()=>{s("배정 확정 완료!","success"),t.invalidateQueries([n.assign])},onError:()=>{s("다시 시도해주세요.","error")}})};export{y as a,f as u};
