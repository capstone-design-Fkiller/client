import{i as n,g as c,h as d,f as l,k as i}from"./index-45969812.js";const k=async a=>{const{data:t}=await n.get("locker/",{params:a});return t},p=async a=>{const{data:t}=await n.get("apply/",{params:a});return t},y=async a=>{const{data:t}=await n.post("apply/",a);return t},g=async a=>{const{data:t}=await n.get(`locker/?owned_id=${a}`);if(t.length===0){const{data:e}=await n.get(`locker/?shared_id=${a}`);return e}return t},h=async a=>{const{data:t}=await n.get(`locker/?major=${a}&is_share_registered=True`);return t},b=async a=>{const{id:t,shared_id:e}=a,{data:s}=await n.put(`locker/${t}`,{shared_id:e});return s},r={apply:"apply",locker:"locker",share:"share"},w=a=>{const t=Object.values(a),{data:e}=c([r.locker,"locker-counts",...t],()=>k(a),{enabled:!!a.building_id&&!!a.major}),{data:s}=c([r.apply,"applicant",...t],()=>p(a),{enabled:!!a.building_id&&!!a.major});return{data:{apply:s,lockerCounts:e}}},L=()=>{const a=d(),{createToastMessage:t}=l();return i(s=>y(s),{onSuccess:({major:s,building_id:o})=>{t("신청 완료 !","success"),a.invalidateQueries([r.apply,"applicant",s,o])},onError:()=>{t("다시 시도해주세요.","error")}})},M=a=>{const{data:t}=c([r.locker,a],()=>g(a));return{data:t}},S=a=>{const{data:t,isLoading:e}=c([r.locker,r.share,"sharable-lockers",a],()=>h(a),{enabled:!!a,onSuccess:s=>{const o=new Date;return s.filter(({end_date:u})=>u&&new Date(u)>o)}});return{sharableLockers:t,isLoading:e}},_=()=>{const{createToastMessage:a}=l();return i(e=>b(e),{onSuccess:()=>a("쉐어 신청 완료!","success"),onError:()=>a("다시 시도해주세요.","error")})};export{S as a,M as b,L as c,w as d,_ as u};