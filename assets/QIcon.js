import{K as b,q as _,c as d,h as r,g as p}from"./index.js";const M=e=>b(_(e)),V=e=>b(e);function j(e,n){return e!==void 0&&e()||n}function A(e,n){if(e!==void 0){const a=e();if(a!=null)return a.slice()}return n}function u(e,n){return e!==void 0?n.concat(e()):n}const k={xs:18,sm:24,md:32,lg:38,xl:46},q={size:String};function F(e,n=k){return d(()=>e.size!==void 0?{fontSize:e.size in n?`${n[e.size]}px`:e.size}:null)}const v="0 0 24 24",g=e=>e,f=e=>`ionicons ${e}`,x={"mdi-":e=>`mdi ${e}`,"icon-":g,"bt-":e=>`bt ${e}`,"eva-":e=>`eva ${e}`,"ion-md":f,"ion-ios":f,"ion-logo":f,"iconfont ":g,"ti-":e=>`themify-icon ${e}`,"bi-":e=>`bootstrap-icons ${e}`},y={o_:"-outlined",r_:"-round",s_:"-sharp"},R={sym_o_:"-outlined",sym_r_:"-rounded",sym_s_:"-sharp"},C=new RegExp("^("+Object.keys(x).join("|")+")"),I=new RegExp("^("+Object.keys(y).join("|")+")"),h=new RegExp("^("+Object.keys(R).join("|")+")"),O=/^[Mm]\s?[-+]?\.?\d/,Q=/^img:/,D=/^svguse:/,U=/^ion-/,K=/^(fa-(sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /;var G=M({name:"QIcon",props:{...q,tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean},setup(e,{slots:n}){const{proxy:{$q:a}}=p(),S=F(e),E=d(()=>"q-icon"+(e.left===!0?" on-left":"")+(e.right===!0?" on-right":"")+(e.color!==void 0?` text-${e.color}`:"")),o=d(()=>{let i,t=e.name;if(t==="none"||!t)return{none:!0};if(a.iconMapFn!==null){const s=a.iconMapFn(t);if(s!==void 0)if(s.icon!==void 0){if(t=s.icon,t==="none"||!t)return{none:!0}}else return{cls:s.cls,content:s.content!==void 0?s.content:" "}}if(O.test(t)===!0){const[s,l=v]=t.split("|");return{svg:!0,viewBox:l,nodes:s.split("&&").map($=>{const[w,z,B]=$.split("@@");return r("path",{style:z,d:w,transform:B})})}}if(Q.test(t)===!0)return{img:!0,src:t.substring(4)};if(D.test(t)===!0){const[s,l=v]=t.split("|");return{svguse:!0,src:s.substring(7),viewBox:l}}let c=" ";const m=t.match(C);if(m!==null)i=x[m[1]](t);else if(K.test(t)===!0)i=t;else if(U.test(t)===!0)i=`ionicons ion-${a.platform.is.ios===!0?"ios":"md"}${t.substring(3)}`;else if(h.test(t)===!0){i="notranslate material-symbols";const s=t.match(h);s!==null&&(t=t.substring(6),i+=R[s[1]]),c=t}else{i="notranslate material-icons";const s=t.match(I);s!==null&&(t=t.substring(2),i+=y[s[1]]),c=t}return{cls:i,content:c}});return()=>{const i={class:E.value,style:S.value,"aria-hidden":"true",role:"presentation"};return o.value.none===!0?r(e.tag,i,j(n.default)):o.value.img===!0?r(e.tag,i,u(n.default,[r("img",{src:o.value.src})])):o.value.svg===!0?r(e.tag,i,u(n.default,[r("svg",{viewBox:o.value.viewBox||"0 0 24 24"},o.value.nodes)])):o.value.svguse===!0?r(e.tag,i,u(n.default,[r("svg",{viewBox:o.value.viewBox},[r("use",{"xlink:href":o.value.src})])])):(o.value.cls!==void 0&&(i.class+=" "+o.value.cls),r(e.tag,i,u(n.default,[o.value.content])))}}});export{G as Q,A as a,u as b,M as c,V as d,q as e,F as f,j as h,k as u};
