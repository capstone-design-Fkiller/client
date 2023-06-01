import{c as a,a as R,j as t,r as y,b as p,L as S,F as T,i as v,f as _,g as L,k as M,u as k,d as D,P as j}from"./index-0422ad27.js";import{I as A,M as m,B as C,P as F}from"./index-bcab5ad6.js";import{g as z}from"./building-34ad378b.js";import{P as f,a as H}from"./index-c95f69d4.js";import{u as N}from"./major-f40a78cc.js";const B=a("div",{target:"e1hp0tas2"})("display:flex;justify-content:center;flex-direction:column;align-items:center;padding:0 30px;",({theme:e})=>R("min-height:calc(var(--vh, 1vh) * 100 - ",e.layouts.fixedHeight,");",""),";"),O=a("h1",{target:"e1hp0tas1"})("font-size:25px;font-weight:bold;margin-bottom:10px;color:",({theme:e})=>e.colors.primary_300,";"),x=a("div",{target:"e1hp0tas0"})("font-size:14px;font-weight:400;text-align:center;color:",({theme:e})=>e.colors.grey_300,";"),$=a("table",{target:"e1o1mye43"})("width:100%;margin-top:15px;border-collapse:collapse;& tr>td,& tr>th{padding:10px 5px;white-space:nowrap;&:first-of-type{padding-left:10px;}}& tbody tr{border-bottom:1px solid ",({theme:e})=>e.colors.light_grey_100,";}"),Q=a("h1",{target:"e1o1mye42"})({name:"lykxvs",styles:"display:flex;font-size:18px;justify-content:center;margin:150px 0"}),Y=({contents:e,handleDelete:o})=>{const r=n=>n===null?"-":typeof n=="boolean"?n?"O":"X":n,s=n=>{confirm("정말 삭제하시겠습니까?")&&o(n)};return t("tbody",{children:e.map(n=>t(y.Fragment,{children:p(c.Row,{children:[t(c.Item,{children:n.user}),t(c.Item,{children:r(n.priority_1_answer)}),t(c.Item,{children:r(n.priority_2_answer)}),t(c.Item,{children:r(n.priority_3_answer)}),t(c.Item,{children:z(n.building_id)}),t(c.IconItem,{onClick:()=>s(n.id),children:t(A,{iconName:"trashcan",size:"18"})})]})},n.id))})},c={Row:a("tr",{target:"efwokpf2"})("font-size:14px;padding:10px;width:100%;transition:0.1s color ease-in-out;&:hover{background-color:",({theme:e})=>e.colors.light_grey_100,";}"),Item:a("td",{target:"efwokpf1"})({name:"7lr3li",styles:"white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-align:center"}),IconItem:a("td",{target:"efwokpf0"})("display:flex;flex-direction:column;align-items:center;cursor:pointer;&:hover svg path{stroke:",({theme:e})=>e.colors.error_100,";}")},q=e=>{const{headers:o}=e;return t(b.Head,{children:t("tr",{children:o.map(r=>t(b.Item,{children:r},r))})})},b={Head:a("thead",{target:"ens05cg1"})("width:100%;font-size:16px;font-weight:bold;background-color:",({theme:e})=>e.colors.primary_200,";border-radius:5px;"),Item:a("th",{target:"ens05cg0"})({name:"7lr3li",styles:"white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-align:center"})},G=["학번","1st","2nd","3rd","건물","삭제"],J=e=>{const{currentPage:o,setCurrentPage:r,currentSort:s,handleDelete:n,isLoading:i,sorts:h}=e;return i?t(S,{}):h&&!h.length?t(Q,{children:"사물함 신청자가 없습니다."}):p(T,{children:[p($,{children:[t(q,{headers:G}),t(Y,{contents:(s==null?void 0:s.slice((o-1)*f,o*f))||[],handleDelete:n})]}),t(H,{currentPage:o,totalItems:(s==null?void 0:s.length)||0,itemsPerPage:f,setState:r})]})},K=async e=>{const o=e||0,{data:r}=await v.get(`sort/${o}`);return r},U=async(e,o)=>{const r=e||0,{data:s}=await v.post(`assign/${r}`,o);return s},X={sort:"sort"},V=e=>{const{createToastMessage:o}=_(),{data:r,isLoading:s}=L(X.sort,()=>K(e),{onError:()=>{o("오류가 발생했습니다.","error")},staleTime:6e4});return{data:r,isLoading:s}},W=()=>{const{createToastMessage:e}=_();return M(({major:r,sortResult:s})=>U(r,s),{onSuccess:()=>{e("배정 확정 완료!","success")},onError:()=>{e("다시 시도해주세요.","error")}})},ie=()=>{const{me:e}=k();if(!e)throw new Error;const o=D(),{data:r,isLoading:s}=V(m[(e==null?void 0:e.major)??"학과"]),{mutate:n}=W(),[i,h]=y.useState(r),[I,E]=y.useState(1),{majorInfo:l}=N(m[e.major],!1),w=()=>{if(!(l!=null&&l.apply_end_date))throw new Error;if(new Date(l==null?void 0:l.apply_end_date)<new Date)return!0};return t(F,{children:p(B,{children:[t(O,{children:"사물함 배정 예상 결과"}),p(x,{children:[t("p",{children:"사물함 신청이 끝나면 배정 확정 버튼이 활성화됩니다."}),t("p",{children:"페이지를 나가면 변경사항이 모두 사라집니다."})]}),t(J,{isLoading:s,sorts:r,currentSort:i,currentPage:I,setCurrentPage:E,handleDelete:g=>{w()||h(d=>d==null?void 0:d.filter(P=>P.id!==g))}}),t(x,{children:t("p",{children:"배정 확정 버튼을 누른 이후엔 변경이 불가합니다!!"})}),t(C,{variant:"contained",color:"primary",onClick:()=>{if(w())return;const u=i==null?void 0:i.map(d=>d.id);n({major:m[e.major],sortResult:{list:u||[]}}),o(j.MAIN)},children:"배정 확정하기"})]})})};export{ie as default};
