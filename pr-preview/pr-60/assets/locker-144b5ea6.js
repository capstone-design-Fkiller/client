import{i as r,g as c,h as u,f as i,k as l,d as k,P as y}from"./index-daa425fd.js";const p=async t=>{const{data:a}=await r.get("locker/",{params:t});return a},g=async t=>{const{data:a}=await r.get("apply/",{params:t});return a},h=async t=>{const{data:a}=await r.post("apply/",t);return a},m=async t=>{const{data:a}=await r.get(`locker/?owned_id=${t}`);if(a.length===0){const{data:e}=await r.get(`locker/?shared_id=${t}`);return e[0]}return a[0]},L=async t=>{const{id:a,...e}=t,{data:s}=await r.put(`locker/${a}`,{...e});return s},b=async t=>{const{data:a}=await r.get(`locker/sharable/?major=${t}&is_share_registered=True`);return a},w=async t=>{const{id:a,shared_id:e}=t,{data:s}=await r.put(`locker/${a}`,{shared_id:e});return s},o={apply:"apply",locker:"locker",share:"share"},S=t=>{const a=Object.values(t),{data:e}=c([o.locker,"locker-counts",...a],()=>p(t),{enabled:!!t.building_id&&!!t.major}),{data:s}=c([o.apply,"applicant",...a],()=>g(t),{enabled:!!t.building_id&&!!t.major});return{data:{apply:s,lockerCounts:e}}},v=()=>{const t=u(),{createToastMessage:a}=i();return l(s=>h(s),{onSuccess:({major:s,building_id:n})=>{a("신청 완료 !","success"),t.invalidateQueries([o.apply,"applicant",s,n])},onError:()=>{a("다시 시도해주세요.","error")}})},A=t=>{const{data:a}=c([o.locker,t],()=>m(t));return{myLocker:a}},C=t=>{const{data:a,isLoading:e}=c([o.share,"sharable-lockers",t],()=>b(t),{enabled:!!t,onSuccess:s=>{const n=new Date;return s.filter(({end_date:d})=>d&&new Date(d)>n)}});return{sharableLockers:a,isLoading:e}},T=()=>{const t=u(),a=k(),{createToastMessage:e}=i();return l(n=>L(n),{onSuccess:({owned_id:n})=>{t.invalidateQueries([o.locker,n]),e("쉐어 여부 변경 완료 !","success"),a(y.MAIN)},onError:()=>e("다시 시도해주세요.","error")})},_=()=>{const t=u(),a=k(),{createToastMessage:e}=i();return l(n=>w(n),{onSuccess:({shared_id:n})=>{t.invalidateQueries([o.locker,n]),e("쉐어 신청 완료 !","success"),a(y.MAIN)},onError:()=>e("다시 시도해주세요.","error")})};export{C as a,_ as b,T as c,v as d,S as e,A as u};
