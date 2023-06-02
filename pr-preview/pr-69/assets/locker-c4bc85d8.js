import{i as c,g as o,h as i,f as u,k as l,d as g,P as p}from"./index-e7d86b1a.js";import{g as k}from"./building-925df4bd.js";const y=async t=>{const{data:e}=await c.get("locker/",{params:t});return e},h=async t=>{const{data:e}=await c.get("apply/",{params:t});return e},m=async t=>{const{data:e}=await c.post("apply/",t);return e},b=async t=>{const{data:e}=await c.get(`locker/?owned_id=${t}`);if(e.length===0){const{data:a}=await c.get(`locker/?shared_id=${t}`);return a[0]}return e[0]},w=async t=>{const{data:e}=await c.get(`locker/building/?major=${t}`);return e},L=async t=>{const{id:e,...a}=t,{data:s}=await c.patch(`locker/${e}`,{...a});return s},M=async()=>{const{data:t}=await c.get("locker/sharable/?is_share_registered=True");return t},A=async t=>{const{id:e,shared_id:a}=t,{data:s}=await c.patch(`locker/${e}`,{shared_id:a});return s},r={apply:"apply",locker:"locker",share:"share"},C=t=>{const e=Object.values(t),{data:a}=o([r.locker,"locker-counts",...e],()=>y(t),{enabled:!!t.building_id&&!!t.major}),{data:s}=o([r.apply,"applicant",...e],()=>h(t),{enabled:!!t.building_id&&!!t.major});return{data:{apply:s,lockerCounts:a}}},f=t=>{const{data:e}=o([r.locker,t],()=>b(t));return{myLocker:e}},T=()=>{const t=i(),{createToastMessage:e}=u();return l(s=>m(s),{onSuccess:({major:s,building_id:n})=>{e("신청 완료 !","success"),t.invalidateQueries([r.apply,"applicant",s,n])},onError:s=>{var d;const n=(d=s.response)==null?void 0:d.data;n&&e(n.message,"error")}})},_=t=>{const{data:e}=o(["building",t],()=>w(t));return{applicableBuildings:(e==null?void 0:e.map(s=>k(s)||"건물"))||["선택할 수 있는 건물이 없습니다."]}},N=()=>{const{data:t,isLoading:e}=o([r.share,"sharable-lockers"],M,{staleTime:6e3,onSuccess:a=>{const s=new Date;return a.filter(({end_date:n})=>n&&new Date(n)>s)}});return{sharableLockers:t,isLoading:e}},Q=()=>{const t=i(),e=g(),{createToastMessage:a}=u();return l(n=>L(n),{onSuccess:({owned_id:n})=>{t.invalidateQueries([r.locker,n]),a("쉐어 여부 변경 완료 !","success"),e(p.MAIN)},onError:()=>a("다시 시도해주세요.","error")})},E=()=>{const t=i(),e=g(),{createToastMessage:a}=u();return l(n=>A(n),{onSuccess:({shared_id:n})=>{t.invalidateQueries([r.locker,n]),a("쉐어 신청 완료 !","success"),e(p.MAIN)},onError:()=>a("다시 시도해주세요.","error")})};export{N as a,E as b,Q as c,_ as d,T as e,C as f,f as u};
