(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function l(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=l(s);fetch(s.href,i)}})();function q(){}function xe(t){return t()}function Se(){return Object.create(null)}function Z(t){t.forEach(xe)}function De(t){return typeof t=="function"}function j(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let re;function Ge(t,e){return re||(re=document.createElement("a")),re.href=e,t===re.href}function Ke(t){return Object.keys(t).length===0}function Re(t,...e){if(t==null)return q;const l=t.subscribe(...e);return l.unsubscribe?()=>l.unsubscribe():l}function B(t,e,l){t.$$.on_destroy.push(Re(e,l))}function se(t,e,l){return t.set(l),e}function d(t,e){t.appendChild(e)}function T(t,e,l){t.insertBefore(e,l||null)}function S(t){t.parentNode.removeChild(t)}function Je(t,e){for(let l=0;l<t.length;l+=1)t[l]&&t[l].d(e)}function h(t){return document.createElement(t)}function I(t){return document.createTextNode(t)}function g(){return I(" ")}function ce(){return I("")}function D(t,e,l,n){return t.addEventListener(e,l,n),()=>t.removeEventListener(e,l,n)}function c(t,e,l){l==null?t.removeAttribute(e):t.getAttribute(e)!==l&&t.setAttribute(e,l)}function He(t){return t===""?null:+t}function Ve(t){return Array.from(t.childNodes)}function J(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Te(t,e){t.value=e==null?"":e}function Ce(t,e,l,n){l===null?t.style.removeProperty(e):t.style.setProperty(e,l,n?"important":"")}function Le(t,e,l){t.classList[l?"add":"remove"](e)}let ve;function ne(t){ve=t}const le=[],Ae=[],ae=[],Ee=[],We=Promise.resolve();let pe=!1;function Xe(){pe||(pe=!0,We.then(Fe))}function he(t){ae.push(t)}const me=new Set;let oe=0;function Fe(){const t=ve;do{for(;oe<le.length;){const e=le[oe];oe++,ne(e),Ye(e.$$)}for(ne(null),le.length=0,oe=0;Ae.length;)Ae.pop()();for(let e=0;e<ae.length;e+=1){const l=ae[e];me.has(l)||(me.add(l),l())}ae.length=0}while(le.length);for(;Ee.length;)Ee.pop()();pe=!1,me.clear(),ne(t)}function Ye(t){if(t.fragment!==null){t.update(),Z(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(he)}}const ue=new Set;let V;function fe(){V={r:0,c:[],p:V}}function de(){V.r||Z(V.c),V=V.p}function C(t,e){t&&t.i&&(ue.delete(t),t.i(e))}function A(t,e,l,n){if(t&&t.o){if(ue.has(t))return;ue.add(t),V.c.push(()=>{ue.delete(t),n&&(l&&t.d(1),n())}),t.o(e)}else n&&n()}function Qe(t,e){A(t,1,1,()=>{e.delete(t.key)})}function Ue(t,e,l,n,s,i,o,a,r,u,m,f){let p=t.length,_=i.length,y=p;const L={};for(;y--;)L[t[y].key]=y;const v=[],k=new Map,b=new Map;for(y=_;y--;){const w=f(s,i,y),$=l(w);let M=o.get($);M?n&&M.p(w,e):(M=u($,w),M.c()),k.set($,v[y]=M),$ in L&&b.set($,Math.abs(y-L[$]))}const N=new Set,G=new Set;function W(w){C(w,1),w.m(a,m),o.set(w.key,w),m=w.first,_--}for(;p&&_;){const w=v[_-1],$=t[p-1],M=w.key,F=$.key;w===$?(m=w.first,p--,_--):k.has(F)?!o.has(M)||N.has(M)?W(w):G.has(F)?p--:b.get(M)>b.get(F)?(G.add(M),W(w)):(N.add(F),p--):(r($,o),p--)}for(;p--;){const w=t[p];k.has(w.key)||r(w,o)}for(;_;)W(v[_-1]);return v}function Q(t){t&&t.c()}function O(t,e,l,n){const{fragment:s,on_mount:i,on_destroy:o,after_update:a}=t.$$;s&&s.m(e,l),n||he(()=>{const r=i.map(xe).filter(De);o?o.push(...r):Z(r),t.$$.on_mount=[]}),a.forEach(he)}function z(t,e){const l=t.$$;l.fragment!==null&&(Z(l.on_destroy),l.fragment&&l.fragment.d(e),l.on_destroy=l.fragment=null,l.ctx=[])}function Ze(t,e){t.$$.dirty[0]===-1&&(le.push(t),Xe(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function x(t,e,l,n,s,i,o,a=[-1]){const r=ve;ne(t);const u=t.$$={fragment:null,ctx:null,props:i,update:q,not_equal:s,bound:Se(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(r?r.$$.context:[])),callbacks:Se(),dirty:a,skip_bound:!1,root:e.target||r.$$.root};o&&o(u.root);let m=!1;if(u.ctx=l?l(t,e.props||{},(f,p,..._)=>{const y=_.length?_[0]:p;return u.ctx&&s(u.ctx[f],u.ctx[f]=y)&&(!u.skip_bound&&u.bound[f]&&u.bound[f](y),m&&Ze(t,f)),p}):[],u.update(),m=!0,Z(u.before_update),u.fragment=n?n(u.ctx):!1,e.target){if(e.hydrate){const f=Ve(e.target);u.fragment&&u.fragment.l(f),f.forEach(S)}else u.fragment&&u.fragment.c();e.intro&&C(t.$$.fragment),O(t,e.target,e.anchor,e.customElement),Fe()}ne(r)}class H{$destroy(){z(this,1),this.$destroy=q}$on(e,l){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(l),()=>{const s=n.indexOf(l);s!==-1&&n.splice(s,1)}}$set(e){this.$$set&&!Ke(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Y=[];function ye(t,e=q){let l;const n=new Set;function s(a){if(j(t,a)&&(t=a,l)){const r=!Y.length;for(const u of n)u[1](),Y.push(u,t);if(r){for(let u=0;u<Y.length;u+=2)Y[u][0](Y[u+1]);Y.length=0}}}function i(a){s(a(t))}function o(a,r=q){const u=[a,r];return n.add(u),n.size===1&&(l=e(s)||q),a(t),()=>{n.delete(u),n.size===0&&(l(),l=null)}}return{set:s,update:i,subscribe:o}}const P=ye([{id:1,title:"Tab 1",type:null,quantity:0,numTwo:0,material:""},{id:2,title:"Tab 2",type:null,quantity:0,numTwo:0,material:""},{id:3,title:"Tab 3",type:null,quantity:0,numTwo:0,material:""}]),U=ye(3),Me=ye(4);function et(t){let e,l,n;return{c(){e=h("button"),e.textContent="Summary Total",c(e,"class","svelte-1uyd3tq")},m(s,i){T(s,e,i),l||(n=D(e,"click",t[0]),l=!0)},p:q,i:q,o:q,d(s){s&&S(e),l=!1,n()}}}function tt(t,e,l){let n,s;B(t,U,o=>l(1,n=o)),B(t,P,o=>l(2,s=o));const i=()=>{se(U,n=-1,n)};return t.$$.update=()=>{t.$$.dirty&6&&s.findIndex(o=>o.id===n)},[i,n,s]}class lt extends H{constructor(e){super(),x(this,e,tt,et,j,{})}}function nt(t){let e,l,n,s,i,o,a,r,u,m,f,p;return l=new lt({}),{c(){e=h("header"),Q(l.$$.fragment),n=g(),s=h("img"),o=g(),a=h("h1"),a.textContent="Tabbed Calc",r=g(),u=h("div"),m=g(),f=h("div"),Ge(s.src,i="./assets/ACubedLogo.png")||c(s,"src",i),c(s,"alt","A Cubed Design Logo"),c(s,"class","svelte-1hzalt7"),c(u,"class","accent-block svelte-1hzalt7"),c(u,"aria-hidden","true"),c(f,"class","accent-block-2 svelte-1hzalt7"),c(f,"aria-hidden","true"),c(e,"class","svelte-1hzalt7")},m(_,y){T(_,e,y),O(l,e,null),d(e,n),d(e,s),d(e,o),d(e,a),d(e,r),d(e,u),d(e,m),d(e,f),p=!0},p:q,i(_){p||(C(l.$$.fragment,_),p=!0)},o(_){A(l.$$.fragment,_),p=!1},d(_){_&&S(e),z(l)}}}class st extends H{constructor(e){super(),x(this,e,null,nt,j,{})}}function it(t){let e,l=t[0].title+"",n,s,i;return{c(){e=h("button"),n=I(l),c(e,"class","svelte-fz4p8t"),Le(e,"active",t[1]===t[0].id)},m(o,a){T(o,e,a),d(e,n),s||(i=D(e,"click",t[2]),s=!0)},p(o,[a]){a&1&&l!==(l=o[0].title+"")&&J(n,l),a&3&&Le(e,"active",o[1]===o[0].id)},i:q,o:q,d(o){o&&S(e),s=!1,i()}}}function rt(t,e,l){let n;B(t,U,o=>l(1,n=o));let{quote:s}=e;const i=()=>se(U,n=s.id,n);return t.$$set=o=>{"quote"in o&&l(0,s=o.quote)},[s,n,i]}class ot extends H{constructor(e){super(),x(this,e,rt,it,j,{quote:0})}}function Pe(t,e,l){const n=t.slice();return n[5]=e[l],n}function Be(t,e){let l,n,s;return n=new ot({props:{quote:e[5]}}),{key:t,first:null,c(){l=ce(),Q(n.$$.fragment),this.first=l},m(i,o){T(i,l,o),O(n,i,o),s=!0},p(i,o){e=i;const a={};o&1&&(a.quote=e[5]),n.$set(a)},i(i){s||(C(n.$$.fragment,i),s=!0)},o(i){A(n.$$.fragment,i),s=!1},d(i){i&&S(l),z(n,i)}}}function at(t){let e,l=[],n=new Map,s,i,o,a,r,u=t[0];const m=f=>f[5].id;for(let f=0;f<u.length;f+=1){let p=Pe(t,u,f),_=m(p);n.set(_,l[f]=Be(_,p))}return{c(){e=h("nav");for(let f=0;f<l.length;f+=1)l[f].c();s=g(),i=h("button"),i.textContent="+",c(i,"class","svelte-ykm1j9"),c(e,"class","svelte-ykm1j9")},m(f,p){T(f,e,p);for(let _=0;_<l.length;_+=1)l[_].m(e,null);d(e,s),d(e,i),o=!0,a||(r=D(i,"click",t[1]),a=!0)},p(f,[p]){p&1&&(u=f[0],fe(),l=Ue(l,p,m,1,f,u,n,e,Qe,Be,s,Pe),de())},i(f){if(!o){for(let p=0;p<u.length;p+=1)C(l[p]);o=!0}},o(f){for(let p=0;p<l.length;p+=1)A(l[p]);o=!1},d(f){f&&S(e);for(let p=0;p<l.length;p+=1)l[p].d();a=!1,r()}}}function ut(t,e,l){let n,s,i;B(t,U,r=>l(2,n=r)),B(t,Me,r=>l(3,s=r)),B(t,P,r=>l(0,i=r));const o=()=>{P.update(r=>[...r,a()]),U.set(i.at(-1).id)},a=()=>({title:`Tab ${s}`,id:se(Me,s++,s),type:null,quantity:0,numTwo:0,result:0,material:""});return t.$$.update=()=>{t.$$.dirty&4&&console.log("the active tab is: "+n)},[i,o,n]}class ct extends H{constructor(e){super(),x(this,e,ut,at,j,{})}}function ft(t){let e,l,n,s,i,o,a,r,u,m,f,p,_,y,L,v,k,b,N,G,W,w,$,M,F,be,ie,ge,ee,$e,K,ke,te,we,R,_e,qe;return{c(){e=h("div"),l=h("div"),n=h("label"),n.textContent="Quantity:",s=g(),i=h("input"),o=g(),a=h("div"),a.innerHTML=`<label for="stl" id="stl-label" class="svelte-2iybvl">upload STL</label> 
    <input type="file" name="stl" id="stl" class="svelte-2iybvl"/>`,r=g(),u=h("form"),m=h("label"),m.textContent="Material:",f=g(),p=h("div"),_=h("input"),y=g(),L=h("label"),L.textContent="PLA",v=g(),k=h("div"),b=h("input"),N=g(),G=h("label"),G.textContent="PETG",W=g(),w=h("div"),$=h("input"),M=g(),F=h("label"),F.textContent="ABS",be=g(),ie=h("div"),ie.innerHTML=`<div class="dimension-inp svelte-2iybvl"><label for="dim-h" class="svelte-2iybvl">height (mm)</label> 
      <input type="number" name="dim-h" id="dim-h" class="svelte-2iybvl"/></div> 
  
    <div class="dimension-inp svelte-2iybvl"><label for="dim-w" class="svelte-2iybvl">width (mm)</label> 
      <input type="number" name="dim-w" id="dim-w" class="svelte-2iybvl"/></div> 
  
    <div class="dimension-inp svelte-2iybvl"><label for="dim-d" class="svelte-2iybvl">depth (mm)</label> 
      <input type="number" name="dim-d" id="dim-d" class="svelte-2iybvl"/></div>`,ge=g(),ee=h("label"),ee.textContent="requirements",$e=g(),K=h("textarea"),ke=g(),te=h("label"),te.textContent="description",we=g(),R=h("textarea"),c(n,"for","quantity"),c(n,"class","svelte-2iybvl"),c(i,"type","number"),c(i,"name","quantity"),c(i,"id","quantity"),c(i,"min","0"),c(i,"max","999"),c(i,"class","svelte-2iybvl"),c(l,"class","inp"),c(a,"class","upload-container"),c(m,"for","material"),c(m,"class","svelte-2iybvl"),c(_,"type","radio"),c(_,"name","material"),c(_,"id","PLA"),_.__value="PLA",_.value=_.__value,c(_,"class","svelte-2iybvl"),t[5][0].push(_),c(L,"for","PLA"),c(L,"class","svelte-2iybvl"),c(p,"class","material svelte-2iybvl"),c(b,"type","radio"),c(b,"name","material"),c(b,"id","PETG"),b.__value="PETG",b.value=b.__value,c(b,"class","svelte-2iybvl"),t[5][0].push(b),c(G,"for","PETG"),c(G,"class","svelte-2iybvl"),c(k,"class","material svelte-2iybvl"),c($,"type","radio"),c($,"name","material"),c($,"id","ABS"),$.__value="ABS",$.value=$.__value,c($,"class","svelte-2iybvl"),t[5][0].push($),c(F,"for","ABS"),c(F,"class","svelte-2iybvl"),c(w,"class","material svelte-2iybvl"),c(u,"class","material-container"),c(u,"action",""),c(ie,"class","dimensions"),c(ee,"for","req"),c(ee,"class","svelte-2iybvl"),c(K,"name","req"),c(K,"id","req"),c(K,"cols","40"),c(K,"rows","6"),c(K,"placeholder","Does the print need to be strong?"),c(K,"class","svelte-2iybvl"),c(te,"for","desc"),c(te,"class","svelte-2iybvl"),c(R,"name","desc"),c(R,"id","desc"),c(R,"cols","40"),c(R,"rows","6"),c(R,"placeholder","Tell us about the print"),c(R,"class","svelte-2iybvl"),c(e,"class","inp-container svelte-2iybvl")},m(E,X){T(E,e,X),d(e,l),d(l,n),d(l,s),d(l,i),Te(i,t[1][t[0]].quantity),d(e,o),d(e,a),d(e,r),d(e,u),d(u,m),d(u,f),d(u,p),d(p,_),_.checked=_.__value===t[1][t[0]].material,d(p,y),d(p,L),d(u,v),d(u,k),d(k,b),b.checked=b.__value===t[1][t[0]].material,d(k,N),d(k,G),d(u,W),d(u,w),d(w,$),$.checked=$.__value===t[1][t[0]].material,d(w,M),d(w,F),d(e,be),d(e,ie),d(e,ge),d(e,ee),d(e,$e),d(e,K),d(e,ke),d(e,te),d(e,we),d(e,R),_e||(qe=[D(i,"input",t[3]),D(_,"change",t[4]),D(b,"change",t[6]),D($,"change",t[7])],_e=!0)},p(E,[X]){X&3&&He(i.value)!==E[1][E[0]].quantity&&Te(i,E[1][E[0]].quantity),X&3&&(_.checked=_.__value===E[1][E[0]].material),X&3&&(b.checked=b.__value===E[1][E[0]].material),X&3&&($.checked=$.__value===E[1][E[0]].material)},i:q,o:q,d(E){E&&S(e),t[5][0].splice(t[5][0].indexOf(_),1),t[5][0].splice(t[5][0].indexOf(b),1),t[5][0].splice(t[5][0].indexOf($),1),_e=!1,Z(qe)}}}function dt(t,e,l){let n,s,i;B(t,P,f=>l(1,s=f)),B(t,U,f=>l(2,i=f));const o=[[]];function a(){s[n].quantity=He(this.value),P.set(s)}function r(){s[n].material=this.__value,P.set(s)}function u(){s[n].material=this.__value,P.set(s)}function m(){s[n].material=this.__value,P.set(s)}return t.$$.update=()=>{t.$$.dirty&6&&l(0,n=s.findIndex(f=>f.id===i)),t.$$.dirty&3&&s[n].type},[n,s,i,a,r,o,u,m]}class _t extends H{constructor(e){super(),x(this,e,dt,ft,j,{})}}function mt(t){let e,l=t[0].name+"",n,s,i;return{c(){e=h("button"),n=I(l),Ce(e,"background-image","url("+t[0].imgUrl+")"),c(e,"class","svelte-2rnfzo")},m(o,a){T(o,e,a),d(e,n),s||(i=D(e,"click",t[1]),s=!0)},p(o,[a]){a&1&&l!==(l=o[0].name+"")&&J(n,l),a&1&&Ce(e,"background-image","url("+o[0].imgUrl+")")},i:q,o:q,d(o){o&&S(e),s=!1,i()}}}function pt(t,e,l){let n,s;B(t,P,a=>l(2,n=a)),B(t,U,a=>l(3,s=a));let{type:i}=e;const o=()=>{let a=n.findIndex(r=>r.id===s);se(P,n[a].type=i.name,n)};return t.$$set=a=>{"type"in a&&l(0,i=a.type)},[i,o]}class ht extends H{constructor(e){super(),x(this,e,pt,mt,j,{type:0})}}function Ne(t,e,l){const n=t.slice();return n[1]=e[l],n}function Ie(t,e){let l,n,s;return n=new ht({props:{type:e[1]}}),{key:t,first:null,c(){l=ce(),Q(n.$$.fragment),this.first=l},m(i,o){T(i,l,o),O(n,i,o),s=!0},p(i,o){e=i},i(i){s||(C(n.$$.fragment,i),s=!0)},o(i){A(n.$$.fragment,i),s=!1},d(i){i&&S(l),z(n,i)}}}function vt(t){let e,l=[],n=new Map,s,i=t[0];const o=a=>a[1].name;for(let a=0;a<i.length;a+=1){let r=Ne(t,i,a),u=o(r);n.set(u,l[a]=Ie(u,r))}return{c(){e=h("div");for(let a=0;a<l.length;a+=1)l[a].c();c(e,"class","type-container svelte-qh7vvg")},m(a,r){T(a,e,r);for(let u=0;u<l.length;u+=1)l[u].m(e,null);s=!0},p(a,[r]){r&1&&(i=a[0],fe(),l=Ue(l,r,o,1,a,i,n,e,Qe,Ie,null,Ne),de())},i(a){if(!s){for(let r=0;r<i.length;r+=1)C(l[r]);s=!0}},o(a){for(let r=0;r<l.length;r+=1)A(l[r]);s=!1},d(a){a&&S(e);for(let r=0;r<l.length;r+=1)l[r].d()}}}function yt(t){return[[{name:"FDM",imgUrl:"./assets/unsplash-royalty-free-printer-1.jpg"},{name:"Resin",imgUrl:"./assets/pixabay-royalty-free-printer-1.jpg"},{name:"Laser",imgUrl:"./assets/pixabay-royalty-free-printer-2.jpg"}]]}class bt extends H{constructor(e){super(),x(this,e,yt,vt,j,{})}}function je(t,e,l){const n=t.slice();return n[2]=e[l],n}function Oe(t){let e,l,n=t[2].title+"",s,i,o,a=t[2].type+"",r,u,m,f=t[2].material+"",p,_,y,L=t[2].quantity+"",v,k;return{c(){e=h("tr"),l=h("td"),s=I(n),i=g(),o=h("td"),r=I(a),u=g(),m=h("td"),p=I(f),_=g(),y=h("td"),v=I(L),k=g(),c(l,"class","svelte-11kith"),c(o,"class","svelte-11kith"),c(m,"class","svelte-11kith"),c(y,"class","svelte-11kith"),c(e,"class","svelte-11kith")},m(b,N){T(b,e,N),d(e,l),d(l,s),d(e,i),d(e,o),d(o,r),d(e,u),d(e,m),d(m,p),d(e,_),d(e,y),d(y,v),d(e,k)},p(b,N){N&1&&n!==(n=b[2].title+"")&&J(s,n),N&1&&a!==(a=b[2].type+"")&&J(r,a),N&1&&f!==(f=b[2].material+"")&&J(p,f),N&1&&L!==(L=b[2].quantity+"")&&J(v,L)},d(b){b&&S(e)}}}function ze(t){let e,l=t[2].type&&Oe(t);return{c(){l&&l.c(),e=ce()},m(n,s){l&&l.m(n,s),T(n,e,s)},p(n,s){n[2].type?l?l.p(n,s):(l=Oe(n),l.c(),l.m(e.parentNode,e)):l&&(l.d(1),l=null)},d(n){l&&l.d(n),n&&S(e)}}}function gt(t){let e,l,n,s,i,o,a,r,u=t[0],m=[];for(let f=0;f<u.length;f+=1)m[f]=ze(je(t,u,f));return{c(){e=h("div"),l=h("table"),n=h("thead"),n.innerHTML=`<tr class="svelte-11kith"><th class="svelte-11kith">Name</th> 
        <th class="svelte-11kith">Type</th> 
        <th class="svelte-11kith">Material</th> 
        <th class="svelte-11kith">Quant.</th></tr>`,s=g();for(let f=0;f<m.length;f+=1)m[f].c();i=g(),o=h("p"),o.textContent=`Total: ${Math.round(t[1]*100)/100} models`,a=g(),r=h("button"),r.textContent="Submit",c(l,"class","svelte-11kith"),c(o,"class","total svelte-11kith"),c(r,"class","svelte-11kith"),c(e,"class","summary svelte-11kith")},m(f,p){T(f,e,p),d(e,l),d(l,n),d(l,s);for(let _=0;_<m.length;_+=1)m[_].m(l,null);d(e,i),d(e,o),d(e,a),d(e,r)},p(f,[p]){if(p&1){u=f[0];let _;for(_=0;_<u.length;_+=1){const y=je(f,u,_);m[_]?m[_].p(y,p):(m[_]=ze(y),m[_].c(),m[_].m(l,null))}for(;_<m.length;_+=1)m[_].d(1);m.length=u.length}},i:q,o:q,d(f){f&&S(e),Je(m,f)}}}function $t(t,e,l){let n;B(t,P,i=>l(0,n=i));let s=n.reduce((i,o)=>i+o.quantity,0);return[n,s]}class kt extends H{constructor(e){super(),x(this,e,$t,gt,j,{})}}function wt(t){let e,l,n,s,i,o,a,r,u,m,f,p;const _=[Tt,St],y=[];function L(v,k){return v[0].type?1:0}return a=L(t),r=y[a]=_[a](t),{c(){e=h("h2"),l=I("This is "),n=I(t[2]),s=g(),i=h("button"),i.textContent="delete",o=g(),r.c(),u=ce(),c(i,"id","delete"),c(i,"class","svelte-w7pcnh")},m(v,k){T(v,e,k),d(e,l),d(e,n),T(v,s,k),T(v,i,k),T(v,o,k),y[a].m(v,k),T(v,u,k),m=!0,f||(p=D(i,"click",t[3]),f=!0)},p(v,k){(!m||k&4)&&J(n,v[2]);let b=a;a=L(v),a===b?y[a].p(v,k):(fe(),A(y[b],1,1,()=>{y[b]=null}),de(),r=y[a],r?r.p(v,k):(r=y[a]=_[a](v),r.c()),C(r,1),r.m(u.parentNode,u))},i(v){m||(C(r),m=!0)},o(v){A(r),m=!1},d(v){v&&S(e),v&&S(s),v&&S(i),v&&S(o),y[a].d(v),v&&S(u),f=!1,p()}}}function qt(t){let e,l;return e=new kt({}),{c(){Q(e.$$.fragment)},m(n,s){O(e,n,s),l=!0},p:q,i(n){l||(C(e.$$.fragment,n),l=!0)},o(n){A(e.$$.fragment,n),l=!1},d(n){z(e,n)}}}function St(t){let e,l,n=t[0].type+"",s,i,o,a;return o=new _t({}),{c(){e=h("p"),l=I("the type is "),s=I(n),i=g(),Q(o.$$.fragment),c(e,"class","svelte-w7pcnh")},m(r,u){T(r,e,u),d(e,l),d(e,s),T(r,i,u),O(o,r,u),a=!0},p(r,u){(!a||u&1)&&n!==(n=r[0].type+"")&&J(s,n)},i(r){a||(C(o.$$.fragment,r),a=!0)},o(r){A(o.$$.fragment,r),a=!1},d(r){r&&S(e),r&&S(i),z(o,r)}}}function Tt(t){let e,l;return e=new bt({}),{c(){Q(e.$$.fragment)},m(n,s){O(e,n,s),l=!0},p:q,i(n){l||(C(e.$$.fragment,n),l=!0)},o(n){A(e.$$.fragment,n),l=!1},d(n){z(e,n)}}}function Ct(t){let e,l,n,s;const i=[qt,wt],o=[];function a(r,u){return r[1]===-1?0:1}return l=a(t),n=o[l]=i[l](t),{c(){e=h("div"),n.c(),c(e,"class","body-container svelte-w7pcnh")},m(r,u){T(r,e,u),o[l].m(e,null),s=!0},p(r,[u]){let m=l;l=a(r),l===m?o[l].p(r,u):(fe(),A(o[m],1,1,()=>{o[m]=null}),de(),n=o[l],n?n.p(r,u):(n=o[l]=i[l](r),n.c()),C(n,1),n.m(e,null))},i(r){s||(C(n),s=!0)},o(r){A(n),s=!1},d(r){r&&S(e),o[l].d()}}}function Lt(t,e,l){let n,s,i,o;B(t,P,r=>l(4,i=r)),B(t,U,r=>l(1,o=r));const a=()=>{se(P,i=i.filter(r=>r.id!==o),i),U.set(i[0].id)};return t.$$.update=()=>{t.$$.dirty&18&&l(0,n=i.find(r=>r.id===o)),t.$$.dirty&3&&l(2,s=o!=-1?n.title:"Summary")},[n,o,s,a,i]}class At extends H{constructor(e){super(),x(this,e,Lt,Ct,j,{})}}function Et(t){let e;return{c(){e=h("footer"),e.innerHTML='<p class="dark-text svelte-6rwcqm">footer maybe?</p>',c(e,"class","svelte-6rwcqm")},m(l,n){T(l,e,n)},p:q,i:q,o:q,d(l){l&&S(e)}}}class Mt extends H{constructor(e){super(),x(this,e,null,Et,j,{})}}function Pt(t){let e,l,n,s,i,o,a,r,u;return l=new st({}),s=new ct({}),o=new At({}),r=new Mt({}),{c(){e=h("main"),Q(l.$$.fragment),n=g(),Q(s.$$.fragment),i=g(),Q(o.$$.fragment),a=g(),Q(r.$$.fragment),c(e,"class","svelte-skjs32")},m(m,f){T(m,e,f),O(l,e,null),d(e,n),O(s,e,null),d(e,i),O(o,e,null),d(e,a),O(r,e,null),u=!0},p:q,i(m){u||(C(l.$$.fragment,m),C(s.$$.fragment,m),C(o.$$.fragment,m),C(r.$$.fragment,m),u=!0)},o(m){A(l.$$.fragment,m),A(s.$$.fragment,m),A(o.$$.fragment,m),A(r.$$.fragment,m),u=!1},d(m){m&&S(e),z(l),z(s),z(o),z(r)}}}class Bt extends H{constructor(e){super(),x(this,e,null,Pt,j,{})}}new Bt({target:document.getElementById("app")});