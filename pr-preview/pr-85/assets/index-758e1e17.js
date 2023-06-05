import{c as o,a as b,u as N,d as y,e as C,r as h,P as a,j as e,b as s,L as z}from"./index-02871330.js";import{B as l}from"./index-a8357e53.js";import{Y as v,P as I}from"./index-54ba401a.js";import{b as T,c as _}from"./notice-bfc3e865.js";const E=o("div",{target:"e1m8zh2x8"})("display:flex;justify-content:center;flex-direction:column;align-items:center;padding:0 30px;",({theme:t})=>b("min-height:calc(var(--vh, 1vh) * 100 - ",t.layouts.fixedHeight,");",""),";"),j=o("h1",{target:"e1m8zh2x7"})("font-size:25px;font-weight:bold;margin-bottom:10px;color:",({theme:t})=>t.colors.primary_200,";"),w=o("h1",{target:"e1m8zh2x6"})("font-size:17px;font-weight:bold;margin-bottom:20px;color:",({theme:t})=>t.colors.primary_100,";"),m=o("h1",{target:"e1m8zh2x5"})("margin-bottom:10px;font-size:15px;color:",({theme:t})=>t.colors.black,";"),D=o("div",{target:"e1m8zh2x4"})("width:100%;margin-bottom:10px;border-radius:5px;border:1px solid ",({theme:t})=>t.colors.light_grey_100,";padding:20px;"),M=o("h2",{target:"e1m8zh2x3"})("width:100%;height:35px;margin-bottom:10px;padding:5px;border:1px solid ",({theme:t})=>t.colors.light_grey_100,";border-radius:5px;"),P=o("h2",{target:"e1m8zh2x2"})("width:100%;height:250px;resize:none;padding:5px;border:1px solid ",({theme:t})=>t.colors.light_grey_100,";border-radius:5px;"),O=o("div",{target:"e1m8zh2x1"})({name:"1ugrels",styles:"display:flex;font-size:12px;margin-bottom:10px;justify-content:right"}),k=o("div",{target:"e1m8zh2x0"})({name:"1cal20m",styles:"width:100%;display:grid;gap:10px;margin-bottom:10px;grid-template-columns:1fr 1fr"}),$=()=>{const{me:t}=N(),n=y(),{noticeId:i}=C(),[c,p]=h.useState(Number(i)),{data:r,isLoading:g}=T(c),{mutate:x}=_();h.useEffect(()=>{if(!i)n(a.NOTICE);else{const d=parseInt(i);isNaN(d)?n(a.NOTICE):p(d)}},[i,n]);const u=()=>{confirm("정말 삭제하시겠습니까?")&&(x(c),n(a.NOTICE))},f=()=>{n(`${a.NOTICE}/edit/${i}`)};return g||c===0?e(z,{}):!r||!i||isNaN(parseInt(i))?e("div",{children:"공지사항을 찾을 수 없습니다."}):e(I,{children:s(E,{children:[e(j,{children:"공지사항"}),e(w,{children:t==null?void 0:t.major}),s(D,{children:[s(O,{children:["공지번호: ",r.id," | 공지날짜: ",v(r.created_at)]}),e(m,{children:"제목"}),e(M,{children:`${r.title}`}),e(m,{children:"내용"}),e(P,{children:r.content})]}),(t==null?void 0:t.is_usermode)||s(k,{children:[e(l,{variant:"outlined",onClick:f,children:"수정하기"}),e(l,{variant:"outlined",onClick:u,color:"warning",children:"삭제하기"})]}),e(l,{variant:"contained",onClick:()=>n(a.NOTICE),children:"닫기"})]})})};export{$ as default};
