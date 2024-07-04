import{c as T,a as d,h,d as N,r as w,i as U,o as H,e as P,n as I,f as W,g as R,l as B,j as K,k as _,w as x,m as X,p as D,q as G,s as Y,t as Z,u as ee,v as te,x as F,y as Q,z as ne,A as oe,_ as le,B as ie,C as re,D as ae,E as $,F as C,G as se}from"./index.edfc0684.js";var ue=T({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:v}){const n=d(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>h("div",{class:n.value},N(v.default))}}),ce=T({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:v}){const n=d(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>h("div",{class:n.value,role:"toolbar"},N(v.default))}});function de(){const e=w(!U.value);return e.value===!1&&H(()=>{e.value=!0}),e}const J=typeof ResizeObserver!="undefined",j=J===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var k=T({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:v}){let n=null,t,l={width:-1,height:-1};function s(a){a===!0||e.debounce===0||e.debounce==="0"?u():n===null&&(n=setTimeout(u,e.debounce))}function u(){if(n!==null&&(clearTimeout(n),n=null),t){const{offsetWidth:a,offsetHeight:i}=t;(a!==l.width||i!==l.height)&&(l={width:a,height:i},v("resize",l))}}const{proxy:g}=R();if(J===!0){let a;const i=m=>{t=g.$el.parentNode,t?(a=new ResizeObserver(s),a.observe(t),u()):m!==!0&&W(()=>{i(!0)})};return H(()=>{i()}),P(()=>{n!==null&&clearTimeout(n),a!==void 0&&(a.disconnect!==void 0?a.disconnect():t&&a.unobserve(t))}),I}else{let m=function(){n!==null&&(clearTimeout(n),n=null),i!==void 0&&(i.removeEventListener!==void 0&&i.removeEventListener("resize",s,B.passive),i=void 0)},b=function(){m(),t&&t.contentDocument&&(i=t.contentDocument.defaultView,i.addEventListener("resize",s,B.passive),u())};const a=de();let i;return H(()=>{W(()=>{t=g.$el,t&&b()})}),P(m),g.trigger=s,()=>{if(a.value===!0)return h("object",{style:j.style,tabindex:-1,type:"text/html",data:j.url,"aria-hidden":"true",onLoad:b})}}}}),fe=T({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:v,emit:n}){const{proxy:{$q:t}}=R(),l=K(D,_);if(l===_)return console.error("QHeader needs to be child of QLayout"),_;const s=w(parseInt(e.heightHint,10)),u=w(!0),g=d(()=>e.reveal===!0||l.view.value.indexOf("H")>-1||t.platform.is.ios&&l.isContainer.value===!0),a=d(()=>{if(e.modelValue!==!0)return 0;if(g.value===!0)return u.value===!0?s.value:0;const o=s.value-l.scroll.value.position;return o>0?o:0}),i=d(()=>e.modelValue!==!0||g.value===!0&&u.value!==!0),m=d(()=>e.modelValue===!0&&i.value===!0&&e.reveal===!0),b=d(()=>"q-header q-layout__section--marginal "+(g.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(i.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),z=d(()=>{const o=l.rows.value.top,p={};return o[0]==="l"&&l.left.space===!0&&(p[t.lang.rtl===!0?"right":"left"]=`${l.left.size}px`),o[2]==="r"&&l.right.space===!0&&(p[t.lang.rtl===!0?"left":"right"]=`${l.right.size}px`),p});function c(o,p){l.update("header",o,p)}function y(o,p){o.value!==p&&(o.value=p)}function V({height:o}){y(s,o),c("size",o)}function O(o){m.value===!0&&y(u,!0),n("focusin",o)}x(()=>e.modelValue,o=>{c("space",o),y(u,!0),l.animate()}),x(a,o=>{c("offset",o)}),x(()=>e.reveal,o=>{o===!1&&y(u,e.modelValue)}),x(u,o=>{l.animate(),n("reveal",o)}),x(l.scroll,o=>{e.reveal===!0&&y(u,o.direction==="up"||o.position<=e.revealOffset||o.position-o.inflectionPoint<100)});const q={};return l.instances.header=q,e.modelValue===!0&&c("size",s.value),c("space",e.modelValue),c("offset",a.value),P(()=>{l.instances.header===q&&(l.instances.header=void 0,c("size",0),c("offset",0),c("space",!1))}),()=>{const o=X(v.default,[]);return e.elevated===!0&&o.push(h("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),o.push(h(k,{debounce:0,onResize:V})),h("header",{class:b.value,style:z.value,onFocusin:O},o)}}}),ve=T({name:"QPageContainer",setup(e,{slots:v}){const{proxy:{$q:n}}=R(),t=K(D,_);if(t===_)return console.error("QPageContainer needs to be child of QLayout"),_;G(Y,!0);const l=d(()=>{const s={};return t.header.space===!0&&(s.paddingTop=`${t.header.size}px`),t.right.space===!0&&(s[`padding${n.lang.rtl===!0?"Left":"Right"}`]=`${t.right.size}px`),t.footer.space===!0&&(s.paddingBottom=`${t.footer.size}px`),t.left.space===!0&&(s[`padding${n.lang.rtl===!0?"Right":"Left"}`]=`${t.left.size}px`),s});return()=>h("div",{class:"q-page-container",style:l.value},N(v.default))}});const{passive:A}=B,he=["both","horizontal","vertical"];var ge=T({name:"QScrollObserver",props:{axis:{type:String,validator:e=>he.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:v}){const n={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let t=null,l,s;x(()=>e.scrollTarget,()=>{a(),g()});function u(){t!==null&&t();const b=Math.max(0,ee(l)),z=te(l),c={top:b-n.position.top,left:z-n.position.left};if(e.axis==="vertical"&&c.top===0||e.axis==="horizontal"&&c.left===0)return;const y=Math.abs(c.top)>=Math.abs(c.left)?c.top<0?"up":"down":c.left<0?"left":"right";n.position={top:b,left:z},n.directionChanged=n.direction!==y,n.delta=c,n.directionChanged===!0&&(n.direction=y,n.inflectionPoint=n.position),v("scroll",{...n})}function g(){l=Z(s,e.scrollTarget),l.addEventListener("scroll",i,A),i(!0)}function a(){l!==void 0&&(l.removeEventListener("scroll",i,A),l=void 0)}function i(b){if(b===!0||e.debounce===0||e.debounce==="0")u();else if(t===null){const[z,c]=e.debounce?[setTimeout(u,e.debounce),clearTimeout]:[requestAnimationFrame(u),cancelAnimationFrame];t=()=>{c(z),t=null}}}const{proxy:m}=R();return x(()=>m.$q.lang.rtl,u),H(()=>{s=m.$el.parentNode,g()}),P(()=>{t!==null&&t(),a()}),Object.assign(m,{trigger:i,getPosition:()=>n}),I}}),me=T({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:v,emit:n}){const{proxy:{$q:t}}=R(),l=w(null),s=w(t.screen.height),u=w(e.container===!0?0:t.screen.width),g=w({position:0,direction:"down",inflectionPoint:0}),a=w(0),i=w(U.value===!0?0:F()),m=d(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),b=d(()=>e.container===!1?{minHeight:t.screen.height+"px"}:null),z=d(()=>i.value!==0?{[t.lang.rtl===!0?"left":"right"]:`${i.value}px`}:null),c=d(()=>i.value!==0?{[t.lang.rtl===!0?"right":"left"]:0,[t.lang.rtl===!0?"left":"right"]:`-${i.value}px`,width:`calc(100% + ${i.value}px)`}:null);function y(r){if(e.container===!0||document.qScrollPrevented!==!0){const f={position:r.position.top,direction:r.direction,directionChanged:r.directionChanged,inflectionPoint:r.inflectionPoint.top,delta:r.delta.top};g.value=f,e.onScroll!==void 0&&n("scroll",f)}}function V(r){const{height:f,width:S}=r;let L=!1;s.value!==f&&(L=!0,s.value=f,e.onScrollHeight!==void 0&&n("scrollHeight",f),q()),u.value!==S&&(L=!0,u.value=S),L===!0&&e.onResize!==void 0&&n("resize",r)}function O({height:r}){a.value!==r&&(a.value=r,q())}function q(){if(e.container===!0){const r=s.value>a.value?F():0;i.value!==r&&(i.value=r)}}let o=null;const p={instances:{},view:d(()=>e.view),isContainer:d(()=>e.container),rootRef:l,height:s,containerHeight:a,scrollbarWidth:i,totalWidth:d(()=>u.value+i.value),rows:d(()=>{const r=e.view.toLowerCase().split(" ");return{top:r[0].split(""),middle:r[1].split(""),bottom:r[2].split("")}}),header:Q({size:0,offset:0,space:!1}),right:Q({size:300,offset:0,space:!1}),footer:Q({size:0,offset:0,space:!1}),left:Q({size:300,offset:0,space:!1}),scroll:g,animate(){o!==null?clearTimeout(o):document.body.classList.add("q-body--layout-animate"),o=setTimeout(()=>{o=null,document.body.classList.remove("q-body--layout-animate")},155)},update(r,f,S){p[r][f]=S}};if(G(D,p),F()>0){let S=function(){r=null,f.classList.remove("hide-scrollbar")},L=function(){if(r===null){if(f.scrollHeight>t.screen.height)return;f.classList.add("hide-scrollbar")}else clearTimeout(r);r=setTimeout(S,300)},E=function(M){r!==null&&M==="remove"&&(clearTimeout(r),S()),window[`${M}EventListener`]("resize",L)},r=null;const f=document.body;x(()=>e.container!==!0?"add":"remove",E),e.container!==!0&&E("add"),ne(()=>{E("remove")})}return()=>{const r=oe(v.default,[h(ge,{onScroll:y}),h(k,{onResize:V})]),f=h("div",{class:m.value,style:b.value,ref:e.container===!0?void 0:l,tabindex:-1},r);return e.container===!0?h("div",{class:"q-layout-container overflow-hidden",ref:l},[h(k,{onResize:O}),h("div",{class:"absolute-full",style:z.value},[h("div",{class:"scroll",style:c.value},[f])])]):f}}});const be={};function pe(e,v){const n=ie("router-view");return re(),ae(me,{view:"hHh lpR fFf"},{default:$(()=>[C(fe,{elevated:"",class:"bg-primary text-white"},{default:$(()=>[C(ce,null,{default:$(()=>[C(ue,null,{default:$(()=>[se("trace.market editor")]),_:1})]),_:1})]),_:1}),C(ve,null,{default:$(()=>[C(n)]),_:1})]),_:1})}var we=le(be,[["render",pe]]);export{we as default};
