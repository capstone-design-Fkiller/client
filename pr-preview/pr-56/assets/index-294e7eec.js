import{c as a,a as _,j as t,r as f,b as d,L as R,F as S,i as v,f as I,h as T,g as L,k as C,u as M,d as j,P as D}from"./index-85b0fa21.js";import{I as k,M as u,B as F,P as A}from"./index-0a6174a2.js";import{g as z}from"./building-34ad378b.js";import{P as m,a as H}from"./page_offset-487e3b46.js";import{u as N}from"./major-f2add3a0.js";const B=a("div",{target:"e1hp0tas2"})("display:flex;justify-content:center;flex-direction:column;align-items:center;padding:0 30px;",({theme:e})=>_("min-height:calc(var(--vh, 1vh) * 100 - ",e.layouts.fixedHeight,");",""),";"),Q=a("h1",{target:"e1hp0tas1"})("font-size:25px;font-weight:bold;margin-bottom:10px;color:",({theme:e})=>e.colors.primary_300,";"),q=a("div",{target:"e1hp0tas0"})("font-size:14px;font-weight:400;text-align:center;",({theme:e})=>_("color:",e.colors.primary_200,";& p{color:",e.colors.grey_300,";}",""),";"),O=a("table",{target:"e1o1mye43"})("width:100%;margin-top:15px;border-collapse:collapse;& tr>td,& tr>th{padding:10px 5px;white-space:nowrap;&:first-of-type{padding-left:10px;}}& tbody tr{border-bottom:1px solid ",({theme:e})=>e.colors.light_grey_100,";}"),$=a("h1",{target:"e1o1mye42"})({name:"r77xyq",styles:"display:flex;font-size:18px;justify-content:center;margin-top:100px;margin-bottom:100px"}),Y=({contents:e,handleDelete:n})=>{const o=r=>r===null?"-":typeof r=="boolean"?r?"O":"X":r,s=r=>{confirm("정말 삭제하시겠습니까?")&&n(r)};return t("tbody",{children:e.map(r=>t(f.Fragment,{children:d(c.Row,{children:[t(c.Item,{children:r.user}),t(c.Item,{children:o(r.priority_1_answer)}),t(c.Item,{children:o(r.priority_2_answer)}),t(c.Item,{children:o(r.priority_3_answer)}),t(c.Item,{children:z(r.building_id)}),t(c.IconItem,{onClick:()=>s(r.id),children:t(k,{iconName:"trashcan",size:"18"})})]})},r.id))})},c={Row:a("tr",{target:"efwokpf2"})("font-size:14px;padding:10px;width:100%;transition:0.1s color ease-in-out;&:hover{background-color:",({theme:e})=>e.colors.light_grey_100,";}"),Item:a("td",{target:"efwokpf1"})({name:"7lr3li",styles:"white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-align:center"}),IconItem:a("td",{target:"efwokpf0"})("display:flex;flex-direction:column;align-items:center;cursor:pointer;&:hover svg path{stroke:",({theme:e})=>e.colors.error_100,";}")},G=e=>{const{headers:n}=e;return t(x.Head,{children:t("tr",{children:n.map(o=>t(x.Item,{children:o},o))})})},x={Head:a("thead",{target:"ens05cg1"})("width:100%;font-size:16px;font-weight:bold;background-color:",({theme:e})=>e.colors.primary_200,";border-radius:5px;"),Item:a("th",{target:"ens05cg0"})({name:"7lr3li",styles:"white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-align:center"})},J=["학번","1st","2nd","3rd","건물","삭제"],K=e=>{const{currentPage:n,setCurrentPage:o,currentSort:s,handleDelete:r,isLoading:i,sorts:p}=e;return i?t(R,{}):p&&!p.length?t($,{children:"사물함 신청자가 없습니다."}):d(S,{children:[d(O,{children:[t(G,{headers:J}),t(Y,{contents:(s==null?void 0:s.slice((n-1)*m,n*m))||[],handleDelete:r})]}),t(H,{currentPage:n,totalItems:(s==null?void 0:s.length)||0,itemsPerPage:m,setState:o})]})},U=async e=>{const n=e||0,{data:o}=await v.get(`sort/${n}`);return o},X=async(e,n)=>{const o=e||0,{data:s}=await v.post(`assign/${o}`,n);return s},b={sort:"sort"},V=e=>{const{createToastMessage:n}=I(),o=T(),{data:s,isLoading:r}=L(b.sort,()=>U(e),{onError:()=>{n("오류가 발생했습니다.","error")}});return o.invalidateQueries(b.sort),{data:s,isLoading:r}},W=()=>{const{createToastMessage:e}=I();return C(({major:o,sortResult:s})=>X(o,s),{onSuccess:()=>{e("배정 확정 완료!","success")},onError:()=>{e("다시 시도해주세요.","error")}})},ae=()=>{const{me:e}=M();if(!e)throw new Error;const n=j(),{data:o,isLoading:s}=V(u[(e==null?void 0:e.major)??"학과"]),{mutate:r}=W(),[i,p]=f.useState(o),[E,P]=f.useState(1),{majorInfo:l}=N(u[e.major],!1);return t(A,{children:d(B,{children:[t(Q,{children:"사물함 배정 예상 결과"}),d(q,{children:[t("p",{children:"사물함 신청 끝나면 배정 확정 버튼을 눌러주세요."}),t("p",{children:"배정 확정 이후에는 변경이 불가합니다."})]}),t(K,{isLoading:s,sorts:o,currentSort:i,currentPage:E,setCurrentPage:P,handleDelete:y=>{p(g=>g==null?void 0:g.filter(h=>h.id!==y))}}),t(F,{variant:"contained",color:"primary",onClick:()=>{if(!(l!=null&&l.apply_end_date))throw new Error;if(new Date(l==null?void 0:l.apply_end_date)<new Date)return;const w=i==null?void 0:i.map(h=>h.id);r({major:u[e.major],sortResult:{list:w||[]}}),n(D.MAIN)},children:"배정 확정하기"})]})})};export{ae as default};
