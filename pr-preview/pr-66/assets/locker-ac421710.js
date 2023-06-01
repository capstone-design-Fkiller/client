import{i as c,g as o,h as i,f as l,k as u,d,P as g}from"./index-9a7d9b15.js";import{g as k}from"./building-925df4bd.js";const y=async a=>{const{data:e}=await c.get("locker/",{params:a});return e},h=async a=>{const{data:e}=await c.get("apply/",{params:a});return e},m=async(a,e)=>{const{data:t}=await c.get("apply/",{params:{major:a,user:e}});return t[0]},b=async a=>{const{data:e}=await c.post("apply/",a);return e},w=async a=>{const{data:e}=await c.get(`locker/?owned_id=${a}`);if(e.length===0){const{data:t}=await c.get(`locker/?shared_id=${a}`);return t[0]}return e[0]},C=async a=>{const{data:e}=await c.get(`locker/building/?major=${a}`);return e},L=async a=>{const{id:e,...t}=a,{data:s}=await c.patch(`locker/${e}`,{...t});return s},A=async()=>{const{data:a}=await c.get("locker/sharable/?is_share_registered=True");return a},M=async a=>{const{id:e,shared_id:t}=a,{data:s}=await c.patch(`locker/${e}`,{shared_id:t});return console.log(s,"뭔데?"),s},r={apply:"apply",applyCheck:"applyCheck",locker:"locker",share:"share"},f=a=>{const e=Object.values(a),{data:t}=o([r.locker,"locker-counts",...e],()=>y(a),{enabled:!!a.building_id&&!!a.major}),{data:s}=o([r.apply,"applicant",...e],()=>h(a),{enabled:!!a.building_id&&!!a.major});return{data:{apply:s,lockerCounts:t}}},Q=(a,e)=>{const{data:t}=o([r.applyCheck],()=>m(a,e));return{data:t}},T=a=>{const{data:e}=o([r.locker,a],()=>w(a));return{myLocker:e}},_=()=>{const a=i(),{createToastMessage:e}=l();return u(s=>b(s),{onSuccess:({major:s,building_id:n})=>{e("사물함 신청 완료 !","success"),a.invalidateQueries([r.apply,"applicant",s,n]),a.invalidateQueries([r.applyCheck])},onError:s=>{var p;const n=(p=s.response)==null?void 0:p.data;n&&e(n.message,"error")}})},N=a=>{const{data:e}=o(["building",a],()=>C(a));return{applicableBuildings:(e==null?void 0:e.map(s=>k(s)||"건물"))||["선택할 수 있는 건물이 없습니다."]}},E=()=>{const{data:a,isLoading:e}=o([r.share,"sharable-lockers"],A,{staleTime:6e3,onSuccess:t=>{const s=new Date;return t.filter(({end_date:n})=>n&&new Date(n)>s)}});return{sharableLockers:a,isLoading:e}},F=()=>{const a=i(),e=d(),{createToastMessage:t}=l();return u(n=>L(n),{onSuccess:({owned_id:n})=>{a.invalidateQueries([r.locker,n]),t("쉐어 여부 변경 완료 !","success"),e(g.MAIN)},onError:()=>t("다시 시도해주세요.","error")})},$=()=>{const a=i(),e=d(),{createToastMessage:t}=l(),s=u(n=>M(n),{onSuccess:({shared_id:n})=>{a.invalidateQueries([r.locker,n]).then(()=>{t("쉐어 신청 완료 !","success"),e(g.MAIN)})},onError:()=>t("다시 시도해주세요.","error")});return console.log(),s};export{E as a,$ as b,F as c,Q as d,N as e,_ as f,f as g,T as u};
