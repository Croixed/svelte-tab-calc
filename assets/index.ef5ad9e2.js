(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();function k(){}function qe(t){return t()}function _e(){return Object.create(null)}function G(t){t.forEach(qe)}function Oe(t){return typeof t=="function"}function N(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let Z;function Le(t,e){return Z||(Z=document.createElement("a")),Z.href=e,t===Z.href}function Me(t){return Object.keys(t).length===0}function Ne(t,...e){if(t==null)return k;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function L(t,e,n){t.$$.on_destroy.push(Ne(e,n))}function D(t,e,n){return t.set(n),e}function m(t,e){t.appendChild(e)}function $(t,e,n){t.insertBefore(e,n||null)}function v(t){t.parentNode.removeChild(t)}function Ae(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function y(t){return document.createElement(t)}function x(t){return document.createTextNode(t)}function S(){return x(" ")}function se(){return x("")}function K(t,e,n,l){return t.addEventListener(e,n,l),()=>t.removeEventListener(e,n,l)}function p(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function re(t){return t===""?null:+t}function Ee(t){return Array.from(t.childNodes)}function H(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function ee(t,e){t.value=e==null?"":e}function me(t,e,n,l){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,l?"important":"")}function pe(t,e,n){t.classList[n?"add":"remove"](e)}let ae;function W(t){ae=t}const V=[],he=[],ne=[],ye=[],Ie=Promise.resolve();let ce=!1;function Be(){ce||(ce=!0,Ie.then(je))}function fe(t){ne.push(t)}const ue=new Set;let te=0;function je(){const t=ae;do{for(;te<V.length;){const e=V[te];te++,W(e),Fe(e.$$)}for(W(null),V.length=0,te=0;he.length;)he.pop()();for(let e=0;e<ne.length;e+=1){const n=ne[e];ue.has(n)||(ue.add(n),n())}ne.length=0}while(V.length);for(;ye.length;)ye.pop()();ce=!1,ue.clear(),W(t)}function Fe(t){if(t.fragment!==null){t.update(),G(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(fe)}}const le=new Set;let Q;function oe(){Q={r:0,c:[],p:Q}}function ie(){Q.r||G(Q.c),Q=Q.p}function q(t,e){t&&t.i&&(le.delete(t),t.i(e))}function j(t,e,n,l){if(t&&t.o){if(le.has(t))return;le.add(t),Q.c.push(()=>{le.delete(t),l&&(n&&t.d(1),l())}),t.o(e)}else l&&l()}function xe(t,e){j(t,1,1,()=>{e.delete(t.key)})}function Ce(t,e,n,l,r,o,s,u,i,f,d,c){let a=t.length,_=o.length,h=a;const g={};for(;h--;)g[t[h].key]=h;const O=[],R=new Map,M=new Map;for(h=_;h--;){const w=c(r,o,h),F=n(w);let P=s.get(F);P?l&&P.p(w,e):(P=f(F,w),P.c()),R.set(F,O[h]=P),F in g&&M.set(F,Math.abs(h-g[F]))}const J=new Set,b=new Set;function T(w){q(w,1),w.m(u,d),s.set(w.key,w),d=w.first,_--}for(;a&&_;){const w=O[_-1],F=t[a-1],P=w.key,X=F.key;w===F?(d=w.first,a--,_--):R.has(X)?!s.has(P)||J.has(P)?T(w):b.has(X)?a--:M.get(P)>M.get(X)?(b.add(P),T(w)):(J.add(X),a--):(i(F,s),a--)}for(;a--;){const w=t[a];R.has(w.key)||i(w,s)}for(;_;)T(O[_-1]);return O}function U(t){t&&t.c()}function A(t,e,n,l){const{fragment:r,on_mount:o,on_destroy:s,after_update:u}=t.$$;r&&r.m(e,n),l||fe(()=>{const i=o.map(qe).filter(Oe);s?s.push(...i):G(i),t.$$.on_mount=[]}),u.forEach(fe)}function E(t,e){const n=t.$$;n.fragment!==null&&(G(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Pe(t,e){t.$$.dirty[0]===-1&&(V.push(t),Be(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function I(t,e,n,l,r,o,s,u=[-1]){const i=ae;W(t);const f=t.$$={fragment:null,ctx:null,props:o,update:k,not_equal:r,bound:_e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(i?i.$$.context:[])),callbacks:_e(),dirty:u,skip_bound:!1,root:e.target||i.$$.root};s&&s(f.root);let d=!1;if(f.ctx=n?n(t,e.props||{},(c,a,..._)=>{const h=_.length?_[0]:a;return f.ctx&&r(f.ctx[c],f.ctx[c]=h)&&(!f.skip_bound&&f.bound[c]&&f.bound[c](h),d&&Pe(t,c)),a}):[],f.update(),d=!0,G(f.before_update),f.fragment=l?l(f.ctx):!1,e.target){if(e.hydrate){const c=Ee(e.target);f.fragment&&f.fragment.l(c),c.forEach(v)}else f.fragment&&f.fragment.c();e.intro&&q(t.$$.fragment),A(t,e.target,e.anchor,e.customElement),je()}W(i)}class B{$destroy(){E(this,1),this.$destroy=k}$on(e,n){const l=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return l.push(n),()=>{const r=l.indexOf(n);r!==-1&&l.splice(r,1)}}$set(e){this.$$set&&!Me(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Y=[];function de(t,e=k){let n;const l=new Set;function r(u){if(N(t,u)&&(t=u,n)){const i=!Y.length;for(const f of l)f[1](),Y.push(f,t);if(i){for(let f=0;f<Y.length;f+=2)Y[f][0](Y[f+1]);Y.length=0}}}function o(u){r(u(t))}function s(u,i=k){const f=[u,i];return l.add(f),l.size===1&&(n=e(r)||k),u(t),()=>{l.delete(f),l.size===0&&(n(),n=null)}}return{set:r,update:o,subscribe:s}}const C=de([{id:1,title:"Tab 1",type:null,numOne:0,numTwo:0,result:0},{id:2,title:"Tab 2",type:null,numOne:0,numTwo:0,result:0},{id:3,title:"Tab 3",type:null,numOne:0,numTwo:0,result:0}]),z=de(3),be=de(4);function Ue(t){let e,n,l;return{c(){e=y("button"),e.textContent="Summary Total",p(e,"class","svelte-1uyd3tq")},m(r,o){$(r,e,o),n||(l=K(e,"click",t[0]),n=!0)},p:k,i:k,o:k,d(r){r&&v(e),n=!1,l()}}}function ze(t,e,n){let l,r;L(t,z,s=>n(1,l=s)),L(t,C,s=>n(2,r=s));const o=()=>{D(z,l=-1,l)};return t.$$.update=()=>{t.$$.dirty&6&&r.findIndex(s=>s.id===l)},[o,l,r]}class He extends B{constructor(e){super(),I(this,e,ze,Ue,N,{})}}function De(t){let e,n,l,r,o,s,u,i,f,d,c,a;return n=new He({}),{c(){e=y("header"),U(n.$$.fragment),l=S(),r=y("img"),s=S(),u=y("h1"),u.textContent="Tabbed Calc",i=S(),f=y("div"),d=S(),c=y("div"),Le(r.src,o="./assets/ACubedLogo.png")||p(r,"src",o),p(r,"alt","A Cubed Design Logo"),p(r,"class","svelte-wdot05"),p(f,"class","accent-block svelte-wdot05"),p(f,"aria-hidden","true"),p(c,"class","accent-block-2 svelte-wdot05"),p(c,"aria-hidden","true"),p(e,"class","svelte-wdot05")},m(_,h){$(_,e,h),A(n,e,null),m(e,l),m(e,r),m(e,s),m(e,u),m(e,i),m(e,f),m(e,d),m(e,c),a=!0},p:k,i(_){a||(q(n.$$.fragment,_),a=!0)},o(_){j(n.$$.fragment,_),a=!1},d(_){_&&v(e),E(n)}}}class Qe extends B{constructor(e){super(),I(this,e,null,De,N,{})}}function Ke(t){let e,n=t[0].title+"",l,r,o;return{c(){e=y("button"),l=x(n),p(e,"class","svelte-fz4p8t"),pe(e,"active",t[1]===t[0].id)},m(s,u){$(s,e,u),m(e,l),r||(o=K(e,"click",t[2]),r=!0)},p(s,[u]){u&1&&n!==(n=s[0].title+"")&&H(l,n),u&3&&pe(e,"active",s[1]===s[0].id)},i:k,o:k,d(s){s&&v(e),r=!1,o()}}}function Re(t,e,n){let l;L(t,z,s=>n(1,l=s));let{quote:r}=e;const o=()=>D(z,l=r.id,l);return t.$$set=s=>{"quote"in s&&n(0,r=s.quote)},[r,l,o]}class Ye extends B{constructor(e){super(),I(this,e,Re,Ke,N,{quote:0})}}function ge(t,e,n){const l=t.slice();return l[5]=e[n],l}function ve(t,e){let n,l,r;return l=new Ye({props:{quote:e[5]}}),{key:t,first:null,c(){n=se(),U(l.$$.fragment),this.first=n},m(o,s){$(o,n,s),A(l,o,s),r=!0},p(o,s){e=o;const u={};s&1&&(u.quote=e[5]),l.$set(u)},i(o){r||(q(l.$$.fragment,o),r=!0)},o(o){j(l.$$.fragment,o),r=!1},d(o){o&&v(n),E(l,o)}}}function Ge(t){let e,n=[],l=new Map,r,o,s,u,i,f=t[0];const d=c=>c[5].id;for(let c=0;c<f.length;c+=1){let a=ge(t,f,c),_=d(a);l.set(_,n[c]=ve(_,a))}return{c(){e=y("nav");for(let c=0;c<n.length;c+=1)n[c].c();r=S(),o=y("button"),o.textContent="+",p(o,"class","svelte-ykm1j9"),p(e,"class","svelte-ykm1j9")},m(c,a){$(c,e,a);for(let _=0;_<n.length;_+=1)n[_].m(e,null);m(e,r),m(e,o),s=!0,u||(i=K(o,"click",t[1]),u=!0)},p(c,[a]){a&1&&(f=c[0],oe(),n=Ce(n,a,d,1,c,f,l,e,xe,ve,r,ge),ie())},i(c){if(!s){for(let a=0;a<f.length;a+=1)q(n[a]);s=!0}},o(c){for(let a=0;a<n.length;a+=1)j(n[a]);s=!1},d(c){c&&v(e);for(let a=0;a<n.length;a+=1)n[a].d();u=!1,i()}}}function Je(t,e,n){let l,r,o;L(t,z,i=>n(2,l=i)),L(t,be,i=>n(3,r=i)),L(t,C,i=>n(0,o=i));const s=()=>{C.update(i=>[...i,u()]),z.set(o.at(-1).id)},u=()=>({title:`Tab ${r}`,id:D(be,r++,r),type:null,numOne:0,numTwo:0,result:0});return t.$$.update=()=>{t.$$.dirty&4&&console.log("the active tab is: "+l)},[o,s,l]}class Ve extends B{constructor(e){super(),I(this,e,Je,Ge,N,{})}}function We(t){let e,n,l,r,o,s,u,i,f,d,c,a,_,h;return{c(){e=y("div"),n=y("label"),n.textContent="Operand One:",l=S(),r=y("input"),o=S(),s=y("label"),s.textContent="Operand Two:",u=S(),i=y("input"),f=S(),d=y("p"),c=x("result: "),a=x(t[2]),p(n,"for","num-one"),p(n,"class","svelte-5mbxpv"),p(r,"type","number"),p(r,"name","num-one"),p(r,"id","num-one"),p(r,"class","svelte-5mbxpv"),p(s,"for","num-two"),p(s,"class","svelte-5mbxpv"),p(i,"type","number"),p(i,"name","num-two"),p(i,"id","num-two"),p(i,"class","svelte-5mbxpv"),p(d,"class","svelte-5mbxpv"),p(e,"class","calc-container svelte-5mbxpv")},m(g,O){$(g,e,O),m(e,n),m(e,l),m(e,r),ee(r,t[1][t[0]].numOne),m(e,o),m(e,s),m(e,u),m(e,i),ee(i,t[1][t[0]].numTwo),m(e,f),m(e,d),m(d,c),m(d,a),_||(h=[K(r,"input",t[5]),K(i,"input",t[6])],_=!0)},p(g,[O]){O&3&&re(r.value)!==g[1][g[0]].numOne&&ee(r,g[1][g[0]].numOne),O&3&&re(i.value)!==g[1][g[0]].numTwo&&ee(i,g[1][g[0]].numTwo),O&4&&H(a,g[2])},i:k,o:k,d(g){g&&v(e),_=!1,G(h)}}}function Xe(t,e,n){let l,r,o,s,u;L(t,C,c=>n(1,s=c)),L(t,z,c=>n(4,u=c));const i=(c,a,_)=>_==="Addition"?(D(C,s[l].result=c+a,s),`${c} + ${a} = ${s[l].result}`):_==="Multiplication"?(D(C,s[l].result=c*a,s),`${c} x ${a} = ${s[l].result}`):a===0?"You can't divide by zero!":(D(C,s[l].result=parseFloat((c/a).toFixed(2)),s),`${c} / ${a} = ${s[l].result}`);function f(){s[l].numOne=re(this.value),C.set(s)}function d(){s[l].numTwo=re(this.value),C.set(s)}return t.$$.update=()=>{t.$$.dirty&18&&n(0,l=s.findIndex(c=>c.id===u)),t.$$.dirty&3&&n(3,r=s[l].type),t.$$.dirty&11&&n(2,o=i(s[l].numOne,s[l].numTwo,r))},[l,s,o,r,u,f,d]}class Ze extends B{constructor(e){super(),I(this,e,Xe,We,N,{})}}function et(t){let e,n=t[0].name+"",l,r,o;return{c(){e=y("button"),l=x(n),me(e,"background-image","url("+t[0].imgUrl+")"),p(e,"class","svelte-570ntc")},m(s,u){$(s,e,u),m(e,l),r||(o=K(e,"click",t[1]),r=!0)},p(s,[u]){u&1&&n!==(n=s[0].name+"")&&H(l,n),u&1&&me(e,"background-image","url("+s[0].imgUrl+")")},i:k,o:k,d(s){s&&v(e),r=!1,o()}}}function tt(t,e,n){let l,r;L(t,C,u=>n(2,l=u)),L(t,z,u=>n(3,r=u));let{type:o}=e;const s=()=>{let u=l.findIndex(i=>i.id===r);D(C,l[u].type=o.name,l)};return t.$$set=u=>{"type"in u&&n(0,o=u.type)},[o,s]}class nt extends B{constructor(e){super(),I(this,e,tt,et,N,{type:0})}}function $e(t,e,n){const l=t.slice();return l[1]=e[n],l}function ke(t,e){let n,l,r;return l=new nt({props:{type:e[1]}}),{key:t,first:null,c(){n=se(),U(l.$$.fragment),this.first=n},m(o,s){$(o,n,s),A(l,o,s),r=!0},p(o,s){e=o},i(o){r||(q(l.$$.fragment,o),r=!0)},o(o){j(l.$$.fragment,o),r=!1},d(o){o&&v(n),E(l,o)}}}function lt(t){let e,n=[],l=new Map,r,o=t[0];const s=u=>u[1].name;for(let u=0;u<o.length;u+=1){let i=$e(t,o,u),f=s(i);l.set(f,n[u]=ke(f,i))}return{c(){e=y("div");for(let u=0;u<n.length;u+=1)n[u].c();p(e,"class","type-container svelte-qh7vvg")},m(u,i){$(u,e,i);for(let f=0;f<n.length;f+=1)n[f].m(e,null);r=!0},p(u,[i]){i&1&&(o=u[0],oe(),n=Ce(n,i,s,1,u,o,l,e,xe,ke,null,$e),ie())},i(u){if(!r){for(let i=0;i<o.length;i+=1)q(n[i]);r=!0}},o(u){for(let i=0;i<n.length;i+=1)j(n[i]);r=!1},d(u){u&&v(e);for(let i=0;i<n.length;i+=1)n[i].d()}}}function rt(t){return[[{name:"Addition",imgUrl:"./assets/unsplash-royalty-free-printer-1.jpg"},{name:"Multiplication",imgUrl:"./assets/pixabay-royalty-free-printer-1.jpg"},{name:"Division",imgUrl:"./assets/pixabay-royalty-free-printer-2.jpg"}]]}class st extends B{constructor(e){super(),I(this,e,rt,lt,N,{})}}function we(t,e,n){const l=t.slice();return l[2]=e[n],l}function Se(t){let e,n,l=t[2].title+"",r,o,s,u=t[2].numOne+"",i,f,d,c=t[2].numTwo+"",a,_;return{c(){e=y("tr"),n=y("td"),r=x(l),o=S(),s=y("td"),i=x(u),f=S(),d=y("td"),a=x(c),_=S(),p(n,"class","svelte-1bmsoji"),p(s,"class","svelte-1bmsoji"),p(d,"class","svelte-1bmsoji"),p(e,"class","svelte-1bmsoji")},m(h,g){$(h,e,g),m(e,n),m(n,r),m(e,o),m(e,s),m(s,i),m(e,f),m(e,d),m(d,a),m(e,_)},p(h,g){g&1&&l!==(l=h[2].title+"")&&H(r,l),g&1&&u!==(u=h[2].numOne+"")&&H(i,u),g&1&&c!==(c=h[2].numTwo+"")&&H(a,c)},d(h){h&&v(e)}}}function Te(t){let e,n=t[2].type&&Se(t);return{c(){n&&n.c(),e=se()},m(l,r){n&&n.m(l,r),$(l,e,r)},p(l,r){l[2].type?n?n.p(l,r):(n=Se(l),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(l){n&&n.d(l),l&&v(e)}}}function ot(t){let e,n,l,r,o,s,u,i,f=t[0],d=[];for(let c=0;c<f.length;c+=1)d[c]=Te(we(t,f,c));return{c(){e=y("div"),n=y("table"),l=y("thead"),l.innerHTML=`<tr class="svelte-1bmsoji"><th class="svelte-1bmsoji">Name</th> 
        <th colspan="2" class="svelte-1bmsoji">Inputs</th></tr>`,r=S();for(let c=0;c<d.length;c+=1)d[c].c();o=S(),s=y("p"),s.textContent=`Total: ${Math.round(t[1]*100)/100}`,u=S(),i=y("button"),i.textContent="Submit",p(n,"class","svelte-1bmsoji"),p(s,"class","total svelte-1bmsoji"),p(i,"class","svelte-1bmsoji"),p(e,"class","summary svelte-1bmsoji")},m(c,a){$(c,e,a),m(e,n),m(n,l),m(n,r);for(let _=0;_<d.length;_+=1)d[_].m(n,null);m(e,o),m(e,s),m(e,u),m(e,i)},p(c,[a]){if(a&1){f=c[0];let _;for(_=0;_<f.length;_+=1){const h=we(c,f,_);d[_]?d[_].p(h,a):(d[_]=Te(h),d[_].c(),d[_].m(n,null))}for(;_<d.length;_+=1)d[_].d(1);d.length=f.length}},i:k,o:k,d(c){c&&v(e),Ae(d,c)}}}function it(t,e,n){let l;L(t,C,o=>n(0,l=o));let r=l.reduce((o,s)=>o+s.result,0);return[l,r]}class ut extends B{constructor(e){super(),I(this,e,it,ot,N,{})}}function ct(t){let e,n,l,r,o,s,u,i,f,d,c,a,_,h,g,O;const R=[dt,at],M=[];function J(b,T){return b[0].type?1:0}return c=J(t),a=M[c]=R[c](t),{c(){e=y("h2"),n=x("This is "),l=x(t[2]),r=S(),o=y("p"),s=x(t[2]),u=x(" says: Lorem ipsum dolor"),i=S(),f=y("button"),f.textContent="delete",d=S(),a.c(),_=se(),p(o,"class","svelte-x9o7su"),p(f,"id","delete"),p(f,"class","svelte-x9o7su")},m(b,T){$(b,e,T),m(e,n),m(e,l),$(b,r,T),$(b,o,T),m(o,s),m(o,u),$(b,i,T),$(b,f,T),$(b,d,T),M[c].m(b,T),$(b,_,T),h=!0,g||(O=K(f,"click",t[3]),g=!0)},p(b,T){(!h||T&4)&&H(l,b[2]),(!h||T&4)&&H(s,b[2]);let w=c;c=J(b),c===w?M[c].p(b,T):(oe(),j(M[w],1,1,()=>{M[w]=null}),ie(),a=M[c],a?a.p(b,T):(a=M[c]=R[c](b),a.c()),q(a,1),a.m(_.parentNode,_))},i(b){h||(q(a),h=!0)},o(b){j(a),h=!1},d(b){b&&v(e),b&&v(r),b&&v(o),b&&v(i),b&&v(f),b&&v(d),M[c].d(b),b&&v(_),g=!1,O()}}}function ft(t){let e,n;return e=new ut({}),{c(){U(e.$$.fragment)},m(l,r){A(e,l,r),n=!0},p:k,i(l){n||(q(e.$$.fragment,l),n=!0)},o(l){j(e.$$.fragment,l),n=!1},d(l){E(e,l)}}}function at(t){let e,n,l=t[0].type+"",r,o,s,u;return s=new Ze({}),{c(){e=y("p"),n=x("the type is "),r=x(l),o=S(),U(s.$$.fragment),p(e,"class","svelte-x9o7su")},m(i,f){$(i,e,f),m(e,n),m(e,r),$(i,o,f),A(s,i,f),u=!0},p(i,f){(!u||f&1)&&l!==(l=i[0].type+"")&&H(r,l)},i(i){u||(q(s.$$.fragment,i),u=!0)},o(i){j(s.$$.fragment,i),u=!1},d(i){i&&v(e),i&&v(o),E(s,i)}}}function dt(t){let e,n;return e=new st({}),{c(){U(e.$$.fragment)},m(l,r){A(e,l,r),n=!0},p:k,i(l){n||(q(e.$$.fragment,l),n=!0)},o(l){j(e.$$.fragment,l),n=!1},d(l){E(e,l)}}}function _t(t){let e,n,l,r;const o=[ft,ct],s=[];function u(i,f){return i[1]===-1?0:1}return n=u(t),l=s[n]=o[n](t),{c(){e=y("div"),l.c(),p(e,"class","body-container svelte-x9o7su")},m(i,f){$(i,e,f),s[n].m(e,null),r=!0},p(i,[f]){let d=n;n=u(i),n===d?s[n].p(i,f):(oe(),j(s[d],1,1,()=>{s[d]=null}),ie(),l=s[n],l?l.p(i,f):(l=s[n]=o[n](i),l.c()),q(l,1),l.m(e,null))},i(i){r||(q(l),r=!0)},o(i){j(l),r=!1},d(i){i&&v(e),s[n].d()}}}function mt(t,e,n){let l,r,o,s;L(t,C,i=>n(4,o=i)),L(t,z,i=>n(1,s=i));const u=()=>{D(C,o=o.filter(i=>i.id!==s),o),z.set(o[0].id)};return t.$$.update=()=>{t.$$.dirty&18&&n(0,l=o.find(i=>i.id===s)),t.$$.dirty&3&&n(2,r=s!=-1?l.title:"Summary")},[l,s,r,u,o]}class pt extends B{constructor(e){super(),I(this,e,mt,_t,N,{})}}function ht(t){let e;return{c(){e=y("footer"),e.innerHTML='<p class="dark-text svelte-6rwcqm">footer maybe?</p>',p(e,"class","svelte-6rwcqm")},m(n,l){$(n,e,l)},p:k,i:k,o:k,d(n){n&&v(e)}}}class yt extends B{constructor(e){super(),I(this,e,null,ht,N,{})}}function bt(t){let e,n,l,r,o,s,u,i,f;return n=new Qe({}),r=new Ve({}),s=new pt({}),i=new yt({}),{c(){e=y("main"),U(n.$$.fragment),l=S(),U(r.$$.fragment),o=S(),U(s.$$.fragment),u=S(),U(i.$$.fragment),p(e,"class","svelte-skjs32")},m(d,c){$(d,e,c),A(n,e,null),m(e,l),A(r,e,null),m(e,o),A(s,e,null),m(e,u),A(i,e,null),f=!0},p:k,i(d){f||(q(n.$$.fragment,d),q(r.$$.fragment,d),q(s.$$.fragment,d),q(i.$$.fragment,d),f=!0)},o(d){j(n.$$.fragment,d),j(r.$$.fragment,d),j(s.$$.fragment,d),j(i.$$.fragment,d),f=!1},d(d){d&&v(e),E(n),E(r),E(s),E(i)}}}class gt extends B{constructor(e){super(),I(this,e,null,bt,N,{})}}new gt({target:document.getElementById("app")});
