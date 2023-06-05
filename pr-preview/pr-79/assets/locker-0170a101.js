import{i as c,g as i,h as u,f as p,k as d,d as g,P as k}from"./index-2faaedaf.js";import{g as y}from"./building-925df4bd.js";const h=async e=>{const{data:a}=await c.get("locker/",{params:e});return a},m=async e=>{const{data:a}=await c.get("apply/",{params:e});return a},b=async(e,a)=>{const{data:t}=await c.get("apply/",{params:{major:e,user:a}});return t[0]},w=async e=>{const{data:a}=await c.post("apply/",e);return a},C=async e=>{const{data:a}=await c.get(`locker/?owned_id=${e}`);if(a.length===0){const{data:t}=await c.get(`locker/?shared_id=${e}`);return t[0]}return a[0]},L=async e=>{const{data:a}=await c.get(`locker/building/?major=${e}`);return a},A=async e=>{const{id:a,...t}=e,{data:n}=await c.patch(`locker/${a}`,{...t});return n},M=async()=>{const{data:e}=await c.get("locker/sharable/?is_share_registered=True");return e},v=async e=>{const{id:a,shared_id:t}=e,{data:n}=await c.patch(`locker/${a}`,{shared_id:t});return n},r={apply:"apply",applyCheck:"applyCheck",locker:"locker",share:"share"},Q=e=>{const a=Object.values(e),{data:t}=i([r.locker,"locker-counts",...a],()=>h(e),{enabled:!!e.building_id&&!!e.major}),{data:n}=i([r.apply,"applicant",...a],()=>m(e),{enabled:!!e.building_id&&!!e.major});return{data:{apply:n,lockerCounts:t}}},T=(e,a)=>{const{data:t}=i([r.applyCheck],()=>b(e,a));return{data:t}},_=e=>{const{data:a}=i([r.locker,e],()=>C(e));return{myLocker:a}},N=()=>{const e=u(),{createToastMessage:a}=p();return d(n=>w(n),{onSuccess:({major:n,building_id:s})=>{a("사물함 신청 완료 !","success"),e.invalidateQueries([r.apply,"applicant",n,s]),e.invalidateQueries([r.applyCheck])},onError:n=>{var o;const s=(o=n.response)==null?void 0:o.data;s&&a(s.message,"error")}})},E=e=>{const{data:a}=i(["building",e],()=>L(e));return{applicableBuildings:(a==null?void 0:a.map(n=>y(n)||"건물"))||["선택할 수 있는 건물이 없습니다."]}},F=()=>{const{data:e,isLoading:a}=i([r.share,"sharable-lockers"],M,{staleTime:6e3,onSuccess:t=>{const n=new Date;return t.filter(({end_date:s})=>s&&new Date(s)>n)}});return{sharableLockers:e,isLoading:a}},$=()=>{const e=u(),a=g(),{createToastMessage:t}=p();return d(s=>A(s),{onSuccess:({owned_id:s})=>{e.invalidateQueries([r.locker,s]),t("쉐어 여부 변경 완료 !","success"),a(k.MAIN)},onError:s=>{var l;const o=(l=s.response)==null?void 0:l.data;o&&t(o.message,"error")}})},j=()=>{const e=u(),a=g(),{createToastMessage:t}=p(),n=d(s=>v(s),{onSuccess:({shared_id:s})=>{e.invalidateQueries([r.locker,s]).then(()=>{t("쉐어 신청 완료 !","success"),a(k.MAIN)})},onError:s=>{var l;const o=(l=s.response)==null?void 0:l.data;o&&t(o.message,"error")}});return console.log(),n};export{F as a,j as b,$ as c,T as d,E as e,N as f,Q as g,_ as u};
