import{r as c,b as n,j as o,c as r,a as h}from"./index-5478a83e.js";import{I as p}from"./index-fd4e317b.js";const u=e=>{const{total:l,applyCount:i}=e,a=c.useMemo(()=>Math.ceil(i/l*100),[l,i]);return console.log(a),n(t.Root,{children:[o(t.GradientWrapper,{children:n(t.Building,{grd:a>100?100:a,children:[o(t.Floor,{}),o(t.Floor,{}),o(t.Floor,{}),o(t.Floor,{}),o(t.Floor,{})]})}),n(t.Title,{children:["인문관 ( ",i," / ",l," )"]})]})};u.Skeleton=function(){return n(t.Root,{children:[o(p,{iconName:"nothing",size:"100",color:"grey",hasCursor:!1}),o("span",{style:{color:"grey"},children:"건물을 선택해주세요"})]})};const t={Root:r("div",{target:"e166tayl4"})({name:"l768v7",styles:"display:flex;flex-direction:column;justify-content:center;align-items:center;gap:20px;width:100%"}),Building:r("div",{target:"e166tayl3"})("display:grid;grid-template-rows:repeat(5, 1fr);border-radius:5px;",({grd:e})=>h("height:",100-e,"%;background:white;",""),";"),GradientWrapper:r("div",{target:"e166tayl2"})({name:"1ncgd1x",styles:"background-color:#2cb67d"}),Floor:r("div",{target:"e166tayl1"})("width:100px;height:50px;background-color:transparent;border:5px solid ",({theme:e})=>e.colors.light_grey_200,";"),Title:r("h1",{target:"e166tayl0"})("")},x=r("div",{target:"e14rp29q3"})({name:"pw7jst",styles:"position:relative;width:100%"}),y=r("label",{target:"e14rp29q2"})({name:"1ol2l4j",styles:"display:flex;justify-content:space-between;align-items:center;transition:all 0.3s ease-in-out;cursor:pointer;padding:0 10px;& .flipped{transform:rotateX(180deg);}"}),m=r("ul",{target:"e14rp29q1"})("display:",({isOpen:e})=>e?"flex":"none",";flex-direction:column;position:absolute;width:100%;margin:10px 0;font-size:14px;padding:10px 0;border-radius:5px;border:1px solid ",({theme:e})=>e.colors.light_grey_200,";background-color:",({theme:e})=>e.colors.white_300,";overflow:hidden;z-index:999;"),f=r("li",{target:"e14rp29q0"})("position:relative;padding:10px 10px;margin:0 10px;border-radius:5px;&:hover{background-color:",({theme:e})=>e.colors.light_grey_100,";}&:not(:last-of-type){border-bottom:1px solid ",({theme:e})=>e.colors.light_grey_100,";}"),k=e=>{const{value:l,list:i,handleChange:a}=e,[s,g]=c.useState(!1);return n(x,{onClick:()=>g(!s),children:[n(y,{children:[l,o(p,{iconName:"dropdown",className:s?"flipped":"non-flipped"})]}),o(m,{isOpen:s,children:i.map(d=>o(f,{onClick:a,children:d},d))})]})},_={건물:0,인문과학관:1,교수개발학습원:2,사회과학관:3,국제학사:4,사이버관:5};export{_ as B,u as L,k as S};