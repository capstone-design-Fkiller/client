import{c as r,a as h,d as n,j as t,r as d}from"./index-0ed6a81f.js";import{I as u,P as x}from"./index-dc623dce.js";import{B as y}from"./index-a5560a47.js";const f=r("section",{target:"e1a6068d4"})("display:flex;flex-direction:column;justify-content:center;padding:0 30px;",({theme:e})=>h("min-height:calc(var(--vh, 1vh) * 100 - ",e.layouts.fixedHeight,");",""),";"),m=r("div",{target:"e1a6068d3"})("display:grid;grid-template-rows:350px 1fr;width:100%;height:450px;background-color:",({theme:e})=>e.colors.white_300,";border:1px solid ",({theme:e})=>e.colors.light_grey_100,";border-radius:5px;margin-bottom:30px;"),b=r("div",{target:"e1a6068d1"})("display:flex;flex-direction:column;justify-content:space-evenly;align-items:flex-start;width:100%;padding:0 10px;border-top:1px solid ",({theme:e})=>e.colors.light_grey_100,";background-color:",({theme:e})=>e.colors.background_2,";&>div{width:100%;&:last-of-type{padding:0 10px;}}"),v=r("hr",{target:"e1a6068d0"})("width:100%;height:1px;padding-left:10px;border:0;background:",({theme:e})=>e.colors.light_grey_200,";"),p=()=>{const e=Math.ceil(37.2093023255814);return n(o.Root,{children:[n(o.Building,{grd:e,children:[t(o.Floor,{}),t(o.Floor,{}),t(o.Floor,{}),t(o.Floor,{}),t(o.Floor,{})]}),t(o.Title,{children:"인문관"})]})};p.Skeleton=function(){return n(o.Root,{children:[t(u,{iconName:"nothing",size:"100",color:"grey",hasCursor:!1}),t("span",{style:{color:"grey"},children:"건물을 선택해주세요"})]})};const o={Root:r("div",{target:"e166tayl4"})({name:"usii9k",styles:"display:flex;flex-direction:column;justify-content:center;align-items:center;gap:20px;width:100%;height:100%"}),Building:r("div",{target:"e166tayl3"})("display:grid;grid-template-rows:repeat(5, 1fr);border-radius:5px;",({grd:e})=>h("background:linear-gradient(0deg, #2cb67d ",e,"%, white 50%);",""),";"),GradientWrapper:r("div",{target:"e166tayl2"})("background-color:",({theme:e})=>e.colors.background_1,";"),Floor:r("div",{target:"e166tayl1"})("width:100px;height:50px;background-color:transparent;border:5px solid ",({theme:e})=>e.colors.light_grey_200,";"),Title:r("h1",{target:"e166tayl0"})("")},k=r("div",{target:"e14rp29q3"})({name:"pw7jst",styles:"position:relative;width:100%"}),w=r("label",{target:"e14rp29q2"})({name:"1ol2l4j",styles:"display:flex;justify-content:space-between;align-items:center;transition:all 0.3s ease-in-out;cursor:pointer;padding:0 10px;& .flipped{transform:rotateX(180deg);}"}),_=r("ul",{target:"e14rp29q1"})("display:",({isOpen:e})=>e?"flex":"none",";flex-direction:column;position:absolute;width:100%;margin:10px 0;font-size:14px;padding:10px 0;border-radius:5px;border:1px solid ",({theme:e})=>e.colors.light_grey_200,";background-color:",({theme:e})=>e.colors.white_300,";overflow:hidden;z-index:999;"),S=r("li",{target:"e14rp29q0"})("position:relative;padding:10px 10px;margin:0 10px;border-radius:5px;&:hover{background-color:",({theme:e})=>e.colors.light_grey_100,";}&:not(:last-of-type){border-bottom:1px solid ",({theme:e})=>e.colors.light_grey_100,";}"),j=e=>{const{value:i,list:l,handleChange:s}=e,[a,c]=d.useState(!1);return n(k,{onClick:()=>c(!a),children:[n(w,{children:[i,t(u,{iconName:"dropdown",className:a?"flipped":"non-flipped"})]}),t(_,{isOpen:a,children:l.map(g=>t(S,{onClick:s,children:g},g))})]})},C=["인문과학관","교수개발학습원","국제학사","사이버관","본관"],I=(e=!1)=>{const[i,l]=d.useState(e);return{open:i,handleOpen:()=>l(!i),setOpen:l}},L=()=>{const[e,i]=d.useState("건물");I();const[l,s]=d.useState(),a=c=>i(c.currentTarget.innerText);return t(x,{children:n(f,{children:[n(m,{children:[l?t(p,{}):t(p.Skeleton,{}),n(b,{children:[t("div",{children:t(j,{value:e,handleChange:a,list:C})}),t(v,{}),t("div",{children:"스페인어과"})," "]})]}),t(y,{variant:"contained",children:"신청하기"})]})})};export{L as default};
