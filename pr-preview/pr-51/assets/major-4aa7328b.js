import{c as n,r as u,b as p,j as i,i as d,g,f as m,k as x}from"./index-45969812.js";import{I as h}from"./index-9cb394f8.js";const f=n("div",{target:"e14rp29q4"})({name:"pw7jst",styles:"position:relative;width:100%"}),j=n("label",{target:"e14rp29q3"})({name:"1ol2l4j",styles:"display:flex;justify-content:space-between;align-items:center;transition:all 0.3s ease-in-out;cursor:pointer;padding:0 10px;& .flipped{transform:rotateX(180deg);}"}),y=n("ul",{target:"e14rp29q1"})("display:",({isOpen:e})=>e?"flex":"none",";flex-direction:column;position:absolute;width:100%;margin:10px 0;font-size:14px;padding:10px 0;border-radius:5px;border:1px solid ",({theme:e})=>e.colors.light_grey_200,";background-color:",({theme:e})=>e.colors.white_300,";overflow:hidden;z-index:999;"),b=n("li",{target:"e14rp29q0"})("position:relative;padding:10px 10px;margin:0 10px;border-radius:5px;&:hover{background-color:",({theme:e})=>e.colors.light_grey_100,";}&:not(:last-of-type){border-bottom:1px solid ",({theme:e})=>e.colors.light_grey_100,";}"),I=e=>{const{value:t,list:o,handleChange:r}=e,[s,a]=u.useState(!1);return p(f,{onClick:()=>a(!s),children:[p(j,{children:[t,i(h,{iconName:"dropdown",className:s?"flipped":"non-flipped"})]}),i(y,{isOpen:s,children:o.map(l=>i(b,{onClick:r,children:l},l))})]})},w=async e=>{const{data:t}=await d.get(`major/${e}`);return t},_=async e=>{const{id:t,...o}=e,{data:r}=await d.put(`/major/${t}`,o);return r},v={major:"major"},S=(e,t)=>{const{data:o}=g([v.major,e],()=>w(e),{enabled:!!e,select:r=>{const{priority_1:s,priority_2:a,priority_3:c}=r;return t?{priority_1:s,priority_2:a,priority_3:c}:r}});return{majorInfo:o}},q=()=>{const{createToastMessage:e}=m();return x(o=>_(o),{onSuccess:()=>{e("배정 기준 설정이 완료되었습니다.","success")},onError:()=>{e("배정 기준 설정에 실패했습니다.","error")}})};export{I as S,q as a,S as u};