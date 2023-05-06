import{r as d,_ as R,d as p,e as f,f as y,l as G,g as $,h as K,c as m,b as Q,j as s,a as v}from"./index-74d78aa7.js";import{g as w,a as k,s as H,u as M,c as P,b as z,P as V}from"./index-7c0f8ee8.js";const X=d.createContext(),Y=X,Z=d.createContext(),N=Z;function ee(e){return w("MuiTableBody",e)}k("MuiTableBody",["root"]);const te=["className","component"],oe=e=>{const{classes:t}=e;return z({root:["root"]},ee,t)},ae=H("tbody",{name:"MuiTableBody",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"table-row-group"}),ne={variant:"body"},S="tbody",le=d.forwardRef(function(t,o){const a=M({props:t,name:"MuiTableBody"}),{className:l,component:n=S}=a,r=R(a,te),i=p({},a,{component:n}),c=oe(i);return f(N.Provider,{value:ne,children:f(ae,p({className:P(c.root,l),as:n,ref:o,role:n===S?null:"rowgroup",ownerState:i},r))})}),se=le;function re(e){return w("MuiTableCell",e)}const ie=k("MuiTableCell",["root","head","body","footer","sizeSmall","sizeMedium","paddingCheckbox","paddingNone","alignLeft","alignCenter","alignRight","alignJustify","stickyHeader"]),ce=ie,de=["align","className","component","padding","scope","size","sortDirection","variant"],pe=e=>{const{classes:t,variant:o,align:a,padding:l,size:n,stickyHeader:r}=e,i={root:["root",o,r&&"stickyHeader",a!=="inherit"&&`align${y(a)}`,l!=="normal"&&`padding${y(l)}`,`size${y(n)}`]};return z(i,re,t)},ge=H("td",{name:"MuiTableCell",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[o.variant],t[`size${y(o.size)}`],o.padding!=="normal"&&t[`padding${y(o.padding)}`],o.align!=="inherit"&&t[`align${y(o.align)}`],o.stickyHeader&&t.stickyHeader]}})(({theme:e,ownerState:t})=>p({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:e.vars?`1px solid ${e.vars.palette.TableCell.border}`:`1px solid
    ${e.palette.mode==="light"?G($(e.palette.divider,1),.88):K($(e.palette.divider,1),.68)}`,textAlign:"left",padding:16},t.variant==="head"&&{color:(e.vars||e).palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},t.variant==="body"&&{color:(e.vars||e).palette.text.primary},t.variant==="footer"&&{color:(e.vars||e).palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},t.size==="small"&&{padding:"6px 16px",[`&.${ce.paddingCheckbox}`]:{width:24,padding:"0 12px 0 16px","& > *":{padding:0}}},t.padding==="checkbox"&&{width:48,padding:"0 0 0 4px"},t.padding==="none"&&{padding:0},t.align==="left"&&{textAlign:"left"},t.align==="center"&&{textAlign:"center"},t.align==="right"&&{textAlign:"right",flexDirection:"row-reverse"},t.align==="justify"&&{textAlign:"justify"},t.stickyHeader&&{position:"sticky",top:0,zIndex:2,backgroundColor:(e.vars||e).palette.background.default})),ue=d.forwardRef(function(t,o){const a=M({props:t,name:"MuiTableCell"}),{align:l="inherit",className:n,component:r,padding:i,scope:c,size:b,sortDirection:h,variant:j}=a,J=R(a,de),g=d.useContext(Y),C=d.useContext(N),U=C&&C.variant==="head";let x;r?x=r:x=U?"th":"td";let T=c;x==="td"?T=void 0:!T&&U&&(T="col");const _=j||C&&C.variant,A=p({},a,{align:l,component:x,padding:i||(g&&g.padding?g.padding:"normal"),size:b||(g&&g.size?g.size:"medium"),sortDirection:h,stickyHeader:_==="head"&&g&&g.stickyHeader,variant:_}),F=pe(A);let O=null;return h&&(O=h==="asc"?"ascending":"descending"),f(ge,p({as:x,ref:o,className:P(F.root,n),"aria-sort":O,scope:T,ownerState:A},J))}),u=ue;function be(e){return w("MuiTableHead",e)}k("MuiTableHead",["root"]);const he=["className","component"],ve=e=>{const{classes:t}=e;return z({root:["root"]},be,t)},ye=H("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"table-header-group"}),fe={variant:"head"},I="thead",xe=d.forwardRef(function(t,o){const a=M({props:t,name:"MuiTableHead"}),{className:l,component:n=I}=a,r=R(a,he),i=p({},a,{component:n}),c=ve(i);return f(N.Provider,{value:fe,children:f(ye,p({as:n,className:P(c.root,l),ref:o,role:n===I?null:"rowgroup",ownerState:i},r))})}),me=xe;function Ce(e){return w("MuiTableRow",e)}const Te=k("MuiTableRow",["root","selected","hover","head","footer"]),D=Te,$e=["className","component","hover","selected"],Re=e=>{const{classes:t,selected:o,hover:a,head:l,footer:n}=e;return z({root:["root",o&&"selected",a&&"hover",l&&"head",n&&"footer"]},Ce,t)},we=H("tr",{name:"MuiTableRow",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.head&&t.head,o.footer&&t.footer]}})(({theme:e})=>({color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,[`&.${D.hover}:hover`]:{backgroundColor:(e.vars||e).palette.action.hover},[`&.${D.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:$(e.palette.primary.main,e.palette.action.selectedOpacity),"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:$(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity)}}})),W="tr",ke=d.forwardRef(function(t,o){const a=M({props:t,name:"MuiTableRow"}),{className:l,component:n=W,hover:r=!1,selected:i=!1}=a,c=R(a,$e),b=d.useContext(N),h=p({},a,{component:n,hover:r,selected:i,head:b&&b.variant==="head",footer:b&&b.variant==="footer"}),j=Re(h);return f(we,p({as:n,ref:o,className:P(j.root,l),role:n===W?null:"row",ownerState:h},c))}),E=ke,He=m("div",{target:"e1ch39564"})("display:flex;justify-content:center;flex-direction:column;align-items:center;padding:0 30px;",({theme:e})=>Q("min-height:calc(var(--vh, 1vh) * 100 - ",e.layouts.bottomNavHeight,");",""),";"),Me=m("h1",{target:"e1ch39563"})("font-size:30px;margin-bottom:10px;text-align:left;color:",({theme:e})=>e.colors.primary_200,";"),Pe=m("table",{target:"e1ch39562"})("width:100%;td{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:110px;}th{text-align:center;color:",({theme:e})=>e.colors.primary_300,";}"),ze=m("div",{target:"e1ch39561"})({name:"1bqmn2k",styles:"display:flex;align-items:center;justify-content:space-between;gap:20px;margin-top:20px"}),L=m("button",{target:"e1ch39560"})("&:hover{background-color:",({theme:e})=>e.colors.primary_100,";}"),B=5,q=[{id:1,major:"태국",title:"사물함 신청 안내",date:"230505",content:"사물함 이용 중 사물함 내 물품 분실에 대한 모든 책임은 사용자에게 있다. ※ 사물함에 귀중품은 보관하지 마세요."},{id:2,major:"태국",title:"사물함 신청 안내",date:"230505",content:"사물함 이용 중 사물함 내 물품 분실에 대한 모든 책임은 사용자에게 있다. ※ 사물함에 귀중품은 보관하지 마세요."},{id:3,major:"한국",title:"기말고사 일정",date:"230504",content:"2023학년도 1학기 기말고사 일정이 아래와 같이 안내됩니다. - 6월 12일(일) 9:00 ~ 12:00 중간고사 - 6월 22일(수) 14:00 ~ 16:00 기말고사 (1, 2학년) - 6월 24일(금) 14:00 ~ 16:00 기말고사 (3학년)"},{id:4,major:"일본",title:"강의실 변경 안내",date:"230503",content:"5월 4일(수) 중앙강의실 3에서 열리는 일본어 수업은 6월 6일(월)부터 중앙강의실 5에서 열리게 됩니다."},{id:5,major:"중국",title:"한자 시험 안내",date:"230502",content:"5월 14일(토)에 중국어 한자 시험이 있습니다. 시험 시간은 9:00 ~ 12:00이며, 시험 장소는 중앙강의실 1입니다."},{id:6,major:"중국",title:"한자 시험 안내",date:"230502",content:"5월 14일(토)에 중국어 한자 시험이 있습니다. 시험 시간은 9:00 ~ 12:00이며, 시험 장소는 중앙강의실 1입니다."}],Be=()=>{const[e,t]=d.useState(1),o=Math.ceil(q.length/B),a=()=>{e<o&&t(e+1)},l=()=>{e>1&&t(e-1)},n=(e-1)*B,r=n+B,i=q.slice(n,r);return s(V,{children:v(He,{children:[s(Me,{children:"NOTICE"}),v(Pe,{children:[s(me,{children:v(E,{children:[s(u,{children:"ID"}),s(u,{children:"학과"}),s(u,{children:"제목"}),s(u,{children:"작성일"})]})}),s(se,{children:i.map(c=>v(E,{children:[s(u,{children:c.id}),s(u,{children:c.major}),s(u,{children:c.title}),s(u,{children:c.date})]},c.id))})]}),v(ze,{children:[s(L,{onClick:l,disabled:e===1,children:"이전"}),v("div",{children:["Page ",e," of ",o]}),s(L,{onClick:a,disabled:e===o,children:"다음"})]})]})})};export{Be as default};
