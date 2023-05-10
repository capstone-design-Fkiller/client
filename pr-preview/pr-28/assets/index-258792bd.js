import{c as o,a as C,j as t,r as m,d as p}from"./index-3f74b563.js";import{M as w,I as j,P as k}from"./index-ea09285a.js";const v=o("div",{target:"e1ch39567"})("display:flex;justify-content:center;flex-direction:column;align-items:center;padding:0 30px;",({theme:e})=>C("min-height:calc(var(--vh, 1vh) * 100 - ",e.layouts.fixedHeight,");",""),";"),M=o("h1",{target:"e1ch39566"})("font-size:30px;font-weight:bold;margin-bottom:10px;color:",({theme:e})=>e.colors.primary_200,";"),N=o("section",{target:"e1ch39565"})({name:"ii0oa9",styles:"display:flex;flex-direction:column;align-items:center;table-layout:fixed;width:100%;margin-top:20px;border-collapse:collapse"}),P=o("th",{target:"e1ch39564"})("font-size:15px;display:flex;width:100%;background-color:",({theme:e})=>e.colors.primary_200,";padding:10px;border-radius:5px;font-weight:bold;"),T=o("tr",{target:"e1ch39563"})({name:"ddrc8k",styles:"font-size:13px;display:flex;width:100%;padding:10px"}),l=o("td",{target:"e1ch39562"})({name:"1ww2icj",styles:"flex:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-align:center"}),S=o("h1",{target:"e1ch39561"})("cursor:pointer;color:",({theme:e})=>e.colors.primary_200,";&:hover{text-decoration:underline;}"),z=o("div",{target:"e1ch39560"})("font-size:16px;color:",({theme:e})=>e.colors.primary_100,";margin-top:20px;"),I=o("div",{target:"e1c3rg5b0"})("width:300px;height:50%;padding:20px 30px;border-radius:5px;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);background-color:",({theme:e})=>e.colors.white_300,";"),_=e=>{const{title:c,open:a,onClose:r,children:s}=e;return t(w,{"aria-labelledby":c,open:a,onClose:r,children:t(I,{children:s})})},E=o("div",{target:"eaq5sof1"})({name:"1jtxoos",styles:"display:flex;align-items:center;justify-content:space-between;gap:20px;margin-top:30px"}),A=o("span",{target:"eaq5sof0"})("font-size:12px;padding:5px 10px;margin:0 5px;border-radius:5px;color:",e=>e.isActive?"black":"gray",";cursor:",e=>e.isClickable?"pointer":"default",";"),R=({currentPage:e,totalPages:c,onNextClick:a,onPrevClick:r})=>{const[s,h]=m.useState(Math.ceil(e/5)),x=d=>{const g=[];for(let i=(d-1)*10+1;i<=Math.min(d*10,c);i++)g.push(t(A,{isActive:i===e,isClickable:i!==e,onClick:()=>f(i),children:i},i));return g},f=d=>{h(Math.ceil(d/10)),a()};return m.useEffect(()=>{h(Math.ceil(e/5))},[e]),p(E,{children:[t(j,{iconName:"left",onClick:()=>{r()}}),x(s),t(j,{iconName:"right",onClick:()=>{a()}})]})},u=10,b=[{id:1,major:"ELLT",title:"사물함 신청 안내",date:"230505",content:"사물함 이용 중 사물함 내 물품 분실에 대한 모든 책임은 사용자에게 있다. ※ 사물함에 귀중품은 보관하지 마세요."},{id:2,major:"EICC",title:"사물함 이용 기간",date:"230505",content:"사물함 이용 중 사물함 내 물품 분실에 대한 모든 책임은 사용자에게 있다. ※ 사물함에 귀중품은 보관하지 마세요."},{id:3,major:"프랑스",title:"사물함 반납 안내",date:"230505",content:"사물함 이용 중 사물함 내 물품 분실에 대한 모든 책임은 사용자에게 있다. ※ 사물함에 귀중품은 보관하지 마세요."},{id:4,major:"스페인",title:"사물함 점검 안내",date:"230505",content:"사물함 이용 중 사물함 내 물품 분실에 대한 모든 책임은 사용자에게 있다. ※ 사물함에 귀중품은 보관하지 마세요."},{id:5,major:"이탈리아",title:"사물함 신청 안내",date:"230505",content:"사물함 이용 중 사물함 내 물품 분실에 대한 모든 책임은 사용자에게 있다. ※ 사물함에 귀중품은 보관하지 마세요."},{id:6,major:"아랍",title:"이용 시 주의사항",date:"230505",content:"사물함 이용 중 사물함 내 물품 분실에 대한 모든 책임은 사용자에게 있다. ※ 사물함에 귀중품은 보관하지 마세요."},{id:7,major:"베트남",title:"사물함 배정 완료",date:"230505",content:"사물함 이용 중 사물함 내 물품 분실에 대한 모든 책임은 사용자에게 있다. ※ 사물함에 귀중품은 보관하지 마세요."},{id:8,major:"인도",title:"사물함 신청 안내",date:"230505",content:"사물함 이용 중 사물함 내 물품 분실에 대한 모든 책임은 사용자에게 있다. ※ 사물함에 귀중품은 보관하지 마세요."},{id:9,major:"몽골",title:"사물함 신청 안내",date:"230505",content:"사물함 이용 중 사물함 내 물품 분실에 대한 모든 책임은 사용자에게 있다. ※ 사물함에 귀중품은 보관하지 마세요."},{id:10,major:"중언문",title:"사물함 물건 보관",date:"230505",content:"사물함 이용 중 사물함 내 물품 분실에 대한 모든 책임은 사용자에게 있다. ※ 사물함에 귀중품은 보관하지 마세요."},{id:11,major:"중외통",title:"사물함 신청 안내",date:"230505",content:"사물함 이용 중 사물함 내 물품 분실에 대한 모든 책임은 사용자에게 있다. ※ 사물함에 귀중품은 보관하지 마세요."},{id:12,major:"정외",title:"사물함 신청 안내",date:"230505",content:"사물함 이용 중 사물함 내 물품 분실에 대한 모든 책임은 사용자에게 있다. ※ 사물함에 귀중품은 보관하지 마세요."}],L=()=>{const[e,c]=m.useState(1),[a,r]=m.useState(null),s=Math.ceil(b.length/u),h=(e-1)*u,x=h+u,f=b.slice(h,x),d=()=>{e<s&&c(e+1)},g=()=>{e>1&&c(e-1)},i=n=>{r(n)},y=()=>{r(null)};return t(k,{children:p(v,{children:[t(M,{children:"공지사항"}),p(N,{children:[p(P,{children:[t(l,{children:"ID"}),t(l,{children:"학과"}),t(l,{children:"제목"}),t(l,{children:"작성일"})]}),f.map(n=>p(T,{children:[t(l,{children:n.id}),t(l,{children:n.major}),t(S,{onClick:()=>i(n.id),children:n.title}),t(l,{children:n.date})]},n.id))]}),t(R,{currentPage:e,totalPages:s,onPrevClick:g,onNextClick:d}),a!==null&&t(_,{onClose:y,title:"Modal Title",open:!0,children:t(z,{children:b[a-1].content})})]})})};export{L as default};
