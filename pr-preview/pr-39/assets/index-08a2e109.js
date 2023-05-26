import{c as l,a as k,b as n,j as c,F as T,d as L,r as C,i as u,g as f,h as w,k as A,u as B,e as R,P}from"./index-aa371379.js";import{B as M}from"./index-5cb88698.js";import{I as $,P as G,M as K}from"./index-e888ee73.js";import{B as m,S as N}from"./building-56be7d9f.js";import{u as W}from"./useInput-cd6cecdb.js";const Y=l("section",{target:"e1a6068d4"})("display:flex;flex-direction:column;justify-content:center;padding:0 30px;",({theme:t})=>k("min-height:calc(var(--vh, 1vh) * 100 - ",t.layouts.fixedHeight,");",""),";"),H=l("div",{target:"e1a6068d3"})("display:grid;grid-template-rows:350px 1fr;width:100%;height:450px;background-color:",({theme:t})=>t.colors.white_300,";border:1px solid ",({theme:t})=>t.colors.light_grey_100,";border-radius:5px;margin-bottom:30px;"),Q=l("div",{target:"e1a6068d1"})("display:flex;flex-direction:column;justify-content:space-evenly;align-items:flex-start;width:100%;padding:0 10px;border-top:1px solid ",({theme:t})=>t.colors.light_grey_100,";background-color:",({theme:t})=>t.colors.background_2,";&>div{display:flex;align-items:center;width:100%;height:24px;&:last-of-type{padding:0 10px;}}"),U=l("hr",{target:"e1a6068d0"})("width:100%;height:1px;padding-left:10px;border:0;background:",({theme:t})=>t.colors.light_grey_200,";"),D=t=>{const{majorInfo:e,handleInput:o,handleApplyButton:r}=t;if(!e)return n("span",{children:"추가 조건이 없습니다!"});const s=Object.entries(e).filter(([,a])=>a);return c(T,{children:[s.map(([a,d])=>c("div",{children:[n("span",{children:d}),n("input",{placeholder:"입력해라",onChange:o})]},a)),n(M,{variant:"contained",onClick:r,children:"신청"})]})},b={not_building:"건물을 선택해주세요.",not_login:"로그인 후 사용할 수 있습니다!"},z=t=>{const{me:e,value:o,total:r,applyCount:s}=t,a=L();if(!e||!r){const g=e?b.not_building:b.not_login;return c(i.Root,{children:[n($,{iconName:"nothing",size:"100",color:a.colors.grey_200,hasCursor:!1}),n("span",{style:{color:a.colors.grey_200},children:g})]})}const d=Math.ceil(s/r*100);return c(i.Root,{children:[n(i.GradientWrapper,{children:c(i.Building,{grd:d>100?100:d,children:[n(i.Floor,{}),n(i.Floor,{}),n(i.Floor,{}),n(i.Floor,{}),n(i.Floor,{})]})}),c(i.Title,{children:[o," ( ",s," / ",r," )"]})]})},i={Root:l("div",{target:"e166tayl4"})({name:"l768v7",styles:"display:flex;flex-direction:column;justify-content:center;align-items:center;gap:20px;width:100%"}),Building:l("div",{target:"e166tayl3"})("display:grid;grid-template-rows:repeat(5, 1fr);border-radius:5px;",({grd:t})=>k("height:",100-t,"%;background:white;",""),";"),GradientWrapper:l("div",{target:"e166tayl2"})({name:"1ncgd1x",styles:"background-color:#2cb67d"}),Floor:l("div",{target:"e166tayl1"})("width:100px;height:50px;background-color:transparent;border:5px solid ",({theme:t})=>t.colors.light_grey_200,";"),Title:l("h1",{target:"e166tayl0"})("")},y={학과:0,프랑스어학부:1,독일어과:2,노어과:3,스페인어과:4,이탈리아어과:5,포르투갈어과:6,네덜란드어과:7,스칸디나비아어과:8,말레이인도네시아어과:9,아랍어과:10,태국어과:11,베트남어과:12,인도어과:13,터키아제르바이잔어과:14,페르시아어이란학과:15,몽골어과:16,ELLT학과:17,영미문학문화학과:18,EICC학과:19,중국학대학:20,일본학대학:21,정치외교학과:22,행정학과:23,미디어커뮤니케이션학부:24,영어교육과:25,한국어교육과:26,프랑스어교육과:27,독일어교육과:28,중국어교육과:29,상경대학:30,경영학부:31,국제학부:32,LD학부:33},J=(t=!1)=>{const[e,o]=C.useState(t);return{open:e,handleOpen:()=>o(!e),setOpen:o}},V=async t=>{const{major:e,building_id:o}=t,{data:r}=await u.get(`locker?major=${e}&building_id=${o}`);return r},q=async t=>{const{major:e,building_id:o}=t,{data:r}=await u.get(`apply?major=${e}&building_id=${o}`);return r},X=async t=>{const{data:e}=await u.post("apply/",t);return e},v={apply:"apply",locker:"locker"},Z=t=>{const e=Object.values(t),{data:o}=f([v.locker,"locker-counts",...e],()=>V(t),{refetchOnWindowFocus:!1,refetchOnMount:!1}),{data:r,refetch:s}=f([v.apply,"applicant",...e],()=>q(t),{refetchOnWindowFocus:!1,refetchOnMount:!1});return{data:{apply:r,lockerCounts:o},refetch:s}},tt=()=>{const{createToastMessage:t}=w();return A(o=>X(o),{onSuccess:()=>{t("신청 완료 !","success")},onError:()=>{t("다시 시도해주세요.","error")}})},et=async t=>{const e=`/major/${t}`,{data:o}=await u.get(e);return o},ot={major:"major"},nt=(t,e)=>{const{data:o}=f([ot.major,t],()=>et(t),{select:r=>{const{priority_first:s,priority_second:a,priority_third:d}=r;return e?{priority_first:s,priority_second:a,priority_third:d}:r}});return{majorInfo:o}},lt=()=>{const{me:t}=B(),{open:e,handleOpen:o}=J(),{createToastMessage:r}=w(),s=R();if(!t)return r("로그인을 다시 해주세요!","error"),s(P.LOGIN),n("div",{});const[a,d]=C.useState("건물"),{value:g,handleValue:O}=W({}),{mutate:I}=tt(),{majorInfo:x}=nt(y[t.major],!0),F=E=>d(E.currentTarget.innerText),{data:{apply:j,lockerCounts:p},refetch:S}=Z({major:y[t.major],building_id:m[a]}),h=()=>{if(!t)return r("로그인 후 사용해주세요!","error");if(!(p!=null&&p.length))return r("해당 건물에는 사물함이 없습니다!","error");x||_(),o()},_=()=>{I({building_id:m[a],major:y[t.major],user:t.id,...g},{onSuccess:S}),h()};return c(G,{children:[c(Y,{children:[c(H,{children:[n(z,{me:t,value:a,total:p?p.length:void 0,applyCount:j?j.length:void 0}),c(Q,{children:[n(N,{value:a,handleChange:F,list:Object.keys(m).slice(1)}),n(U,{}),n("div",{children:t.major||"학과"})]})]}),n(M,{variant:"contained",onClick:h,children:"신청하기"})]}),n(K,{title:"학과별 조건 입력",open:e,onClose:h,children:t&&n(D,{majorInfo:x,handleInput:O,handleApplyButton:_})})]})};export{lt as default};
