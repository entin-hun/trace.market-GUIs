import{b as l,e as x,h as o,m as B}from"./index.96fe6683.js";import{h as _,b as u}from"./render.f1930b0f.js";const g={xs:18,sm:24,md:32,lg:38,xl:46},M={size:String};function j(e,r=g){return l(()=>e.size!==void 0?{fontSize:e.size in r?`${r[e.size]}px`:e.size}:null)}const Q={size:{type:[String,Number],default:"1em"},color:String};function q(e){return{cSize:l(()=>e.size in g?`${g[e.size]}px`:e.size),classes:l(()=>"q-spinner"+(e.color?` text-${e.color}`:""))}}var A=x({name:"QSpinner",props:{...Q,thickness:{type:Number,default:5}},setup(e){const{cSize:r,classes:a}=q(e);return()=>o("svg",{class:a.value+" q-spinner-mat",width:r.value,height:r.value,viewBox:"25 25 50 50"},[o("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":e.thickness,"stroke-miterlimit":"10"})])}});const d="0 0 24 24",h=e=>e,f=e=>`ionicons ${e}`,y={"mdi-":e=>`mdi ${e}`,"icon-":h,"bt-":e=>`bt ${e}`,"eva-":e=>`eva ${e}`,"ion-md":f,"ion-ios":f,"ion-logo":f,"iconfont ":h,"ti-":e=>`themify-icon ${e}`,"bi-":e=>`bootstrap-icons ${e}`},S={o_:"-outlined",r_:"-round",s_:"-sharp"},z={sym_o_:"-outlined",sym_r_:"-rounded",sym_s_:"-sharp"},F=new RegExp("^("+Object.keys(y).join("|")+")"),C=new RegExp("^("+Object.keys(S).join("|")+")"),b=new RegExp("^("+Object.keys(z).join("|")+")"),I=/^[Mm]\s?[-+]?\.?\d/,O=/^img:/,N=/^svguse:/,P=/^ion-/,D=/^(fa-(sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /;var G=x({name:"QIcon",props:{...M,tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean},setup(e,{slots:r}){const{proxy:{$q:a}}=B(),w=j(e),$=l(()=>"q-icon"+(e.left===!0?" on-left":"")+(e.right===!0?" on-right":"")+(e.color!==void 0?` text-${e.color}`:"")),i=l(()=>{let s,t=e.name;if(t==="none"||!t)return{none:!0};if(a.iconMapFn!==null){const n=a.iconMapFn(t);if(n!==void 0)if(n.icon!==void 0){if(t=n.icon,t==="none"||!t)return{none:!0}}else return{cls:n.cls,content:n.content!==void 0?n.content:" "}}if(I.test(t)===!0){const[n,m=d]=t.split("|");return{svg:!0,viewBox:m,nodes:n.split("&&").map(p=>{const[E,R,k]=p.split("@@");return o("path",{style:R,d:E,transform:k})})}}if(O.test(t)===!0)return{img:!0,src:t.substring(4)};if(N.test(t)===!0){const[n,m=d]=t.split("|");return{svguse:!0,src:n.substring(7),viewBox:m}}let c=" ";const v=t.match(F);if(v!==null)s=y[v[1]](t);else if(D.test(t)===!0)s=t;else if(P.test(t)===!0)s=`ionicons ion-${a.platform.is.ios===!0?"ios":"md"}${t.substring(3)}`;else if(b.test(t)===!0){s="notranslate material-symbols";const n=t.match(b);n!==null&&(t=t.substring(6),s+=z[n[1]]),c=t}else{s="notranslate material-icons";const n=t.match(C);n!==null&&(t=t.substring(2),s+=S[n[1]]),c=t}return{cls:s,content:c}});return()=>{const s={class:$.value,style:w.value,"aria-hidden":"true",role:"presentation"};return i.value.none===!0?o(e.tag,s,_(r.default)):i.value.img===!0?o(e.tag,s,u(r.default,[o("img",{src:i.value.src})])):i.value.svg===!0?o(e.tag,s,u(r.default,[o("svg",{viewBox:i.value.viewBox||"0 0 24 24"},i.value.nodes)])):i.value.svguse===!0?o(e.tag,s,u(r.default,[o("svg",{viewBox:i.value.viewBox},[o("use",{"xlink:href":i.value.src})])])):(i.value.cls!==void 0&&(s.class+=" "+i.value.cls),o(e.tag,s,u(r.default,[i.value.content])))}}});export{G as Q,A as a,j as b,M as u};
