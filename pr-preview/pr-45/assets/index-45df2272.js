import{c as o,a as _,j as e,b as s,u as N,d as T,r as u,F as P,L as E,P as x}from"./index-23d0ad62.js";import{M as I,P as j,B as b}from"./index-6959bd08.js";import{P as p,a as S}from"./page_offset-b08e5dea.js";import{Y as D}from"./date-fdfefd0a.js";import{M as H}from"./major-a63cf2c8.js";import{u as A,a as F}from"./notice-904d66c3.js";const R=o("div",{target:"e1ch39567"})("display:flex;justify-content:center;flex-direction:column;align-items:center;padding:0 30px;",({theme:t})=>_("min-height:calc(var(--vh, 1vh) * 100 - ",t.layouts.fixedHeight,");",""),";"),k=o("h1",{target:"e1ch39566"})("font-size:30px;font-weight:bold;margin-bottom:10px;color:",({theme:t})=>t.colors.primary_200,";"),z=o("h1",{target:"e1ch39565"})("font-size:20px;font-weight:bold;margin-bottom:10px;color:",({theme:t})=>t.colors.primary_100,";"),q=o("table",{target:"e1ch39564"})("width:100%;margin-top:15px;border-collapse:collapse;& tr>td,& tr>th{padding:10px 0;white-space:nowrap;&:first-of-type{padding-left:10px;}}& tbody tr{border-bottom:1px solid ",({theme:t})=>t.colors.light_grey_100,";}"),B=o("div",{target:"e1ch39563"})("display:flex;justify-content:center;padding:10px;border-bottom:1px solid ",({theme:t})=>t.colors.light_grey_200,";"),L=o("h2",{target:"e1ch39562"})({name:"5rt1vw",styles:"font-weight:bold;margin-bottom:10px"}),O=o("div",{target:"e1ch39561"})("white-space:pre-line;font-size:16px;color:",({theme:t})=>t.colors.grey_400,";margin-top:20px;line-height:1.4;"),$=o("div",{target:"e1ch39560"})({name:"12bai0x",styles:"position:flex;margin-top:10px;justify-content:flex-end"}),Y=t=>{const{contents:a,handleContent:n}=t;return e("tbody",{children:a.map(r=>s(d.Row,{onClick:()=>n(r.id),children:[e(d.Item,{children:r.id}),e(d.Item,{children:r.title}),e(d.Item,{children:D(r.created_at)})]},r.id))})},d={Row:o("tr",{target:"eqqh4ra1"})("font-size:14px;width:100%;padding:10px;cursor:pointer;transition:0.1s color ease-in-out;&:hover{color:",({theme:t})=>t.colors.primary_200,";}"),Item:o("td",{target:"eqqh4ra0"})({name:"7lr3li",styles:"white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-align:center"})},G=t=>{const{headers:a}=t;return e(y.Head,{children:e("tr",{children:a.map(n=>e(y.Item,{children:n},n))})})},y={Head:o("thead",{target:"e1rhunsf1"})("font-size:16px;font-weight:bold;background-color:",({theme:t})=>t.colors.primary_200,";border-radius:5px;"),Item:o("th",{target:"e1rhunsf0"})({name:"7lr3li",styles:"white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-align:center"})},J=["ID","제목","작성일"],Z=()=>{const{me:t}=N(),a=T(),[n,r]=u.useState(1),[l,g]=u.useState(null),{data:m,isLoading:w}=A(H[(t==null?void 0:t.major)||0]),{mutate:v}=F(),h=m?m.slice().reverse():[],C=c=>{g(c)},f=()=>{g(null)},M=()=>{i&&confirm("정말 삭제하시겠습니까?")&&(v(i.id),a(x.NOTICE)),f()},i=l?h.find(c=>c.id===l):null;return s(j,{children:[s(R,{children:[e(k,{children:"공지사항"}),e(z,{children:t==null?void 0:t.major}),w?e(E,{}):s(P,{children:[s(q,{children:[e(G,{headers:J}),e(Y,{contents:h.slice((n-1)*p,n*p),handleContent:C})]}),e(S,{currentPage:n,totalItems:h.length,itemsPerPage:p,setState:r})]}),(t==null?void 0:t.is_usermode)||e(b,{variant:"contained",onClick:()=>a(x.NOTICE_CREATE),children:"공지사항 작성하기"})]}),s(I,{onClose:f,title:`Notice Detail [${l}]`,open:!!l,children:[e(B,{children:e(L,{children:i&&`${i.id}. ${i.title}`})}),e(O,{children:i&&i.content}),(t==null?void 0:t.is_usermode)||e($,{children:e(b,{variant:"outlined",onClick:()=>M(),children:"삭제"})})]})]})};export{Z as default};
