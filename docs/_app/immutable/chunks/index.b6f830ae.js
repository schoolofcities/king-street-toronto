function j(){}function st(t,e){for(const n in e)t[n]=e[n];return t}function R(t){return t()}function G(){return Object.create(null)}function $(t){t.forEach(R)}function U(t){return typeof t=="function"}function Et(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let k;function Nt(t,e){return k||(k=document.createElement("a")),k.href=e,t===k.href}function ct(t){return Object.keys(t).length===0}function ot(t,...e){if(t==null)return j;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function St(t,e,n){t.$$.on_destroy.push(ot(e,n))}function kt(t,e,n,i){if(t){const r=V(t,e,n,i);return t[0](r)}}function V(t,e,n,i){return t[1]&&i?st(n.ctx.slice(),t[1](i(e))):n.ctx}function At(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const l=[],s=Math.max(e.dirty.length,r.length);for(let u=0;u<s;u+=1)l[u]=e.dirty[u]|r[u];return l}return e.dirty|r}return e.dirty}function Mt(t,e,n,i,r,l){if(r){const s=V(e,n,i,l);t.p(s,r)}}function jt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}let C=!1;function lt(){C=!0}function ut(){C=!1}function at(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function ft(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let o=0;o<e.length;o++){const f=e[o];f.claim_order!==void 0&&c.push(f)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let c=0;c<e.length;c++){const o=e[c].claim_order,f=(r>0&&e[n[r]].claim_order<=o?r+1:at(1,r,d=>e[n[d]].claim_order,o))-1;i[c]=n[f]+1;const _=f+1;n[_]=c,r=Math.max(_,r)}const l=[],s=[];let u=e.length-1;for(let c=n[r]+1;c!=0;c=i[c-1]){for(l.push(e[c-1]);u>=c;u--)s.push(e[u]);u--}for(;u>=0;u--)s.push(e[u]);l.reverse(),s.sort((c,o)=>c.claim_order-o.claim_order);for(let c=0,o=0;c<s.length;c++){for(;o<l.length&&s[c].claim_order>=l[o].claim_order;)o++;const f=o<l.length?l[o]:null;t.insertBefore(s[c],f)}}function dt(t,e){t.appendChild(e)}function _t(t,e){if(C){for(ft(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Ct(t,e,n){C&&!n?_t(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function X(t){t.parentNode&&t.parentNode.removeChild(t)}function zt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function Y(t){return document.createElement(t)}function ht(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function D(t){return document.createTextNode(t)}function Ot(){return D(" ")}function qt(){return D("")}function J(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Bt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function mt(t){return Array.from(t.childNodes)}function pt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function Z(t,e,n,i,r=!1){pt(t);const l=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const u=t[s];if(e(u)){const c=n(u);return c===void 0?t.splice(s,1):t[s]=c,r||(t.claim_info.last_index=s),u}}for(let s=t.claim_info.last_index-1;s>=0;s--){const u=t[s];if(e(u)){const c=n(u);return c===void 0?t.splice(s,1):t[s]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,u}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function tt(t,e,n,i){return Z(t,r=>r.nodeName===e,r=>{const l=[];for(let s=0;s<r.attributes.length;s++){const u=r.attributes[s];n[u.name]||l.push(u.name)}l.forEach(s=>r.removeAttribute(s))},()=>i(e))}function Lt(t,e,n){return tt(t,e,n,Y)}function Pt(t,e,n){return tt(t,e,n,ht)}function yt(t,e){return Z(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>D(e),!0)}function Wt(t){return yt(t," ")}function Dt(t,e){e=""+e,t.data!==e&&(t.data=e)}function It(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}let A;function gt(){if(A===void 0){A=!1;try{typeof window<"u"&&window.parent&&window.parent.document}catch{A=!0}}return A}function Tt(t,e){getComputedStyle(t).position==="static"&&(t.style.position="relative");const i=Y("iframe");i.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),i.setAttribute("aria-hidden","true"),i.tabIndex=-1;const r=gt();let l;return r?(i.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",l=J(window,"message",s=>{s.source===i.contentWindow&&e()})):(i.src="about:blank",i.onload=()=>{l=J(i.contentWindow,"resize",e),e()}),dt(t,i),()=>{(r||l&&i.contentWindow)&&l(),X(i)}}function Ft(t,e){return new t(e)}let E;function v(t){E=t}function I(){if(!E)throw new Error("Function called outside component initialization");return E}function Ht(t){I().$$.on_mount.push(t)}function Gt(t){I().$$.after_update.push(t)}function Jt(t){I().$$.on_destroy.push(t)}const b=[],K=[];let x=[];const Q=[],et=Promise.resolve();let P=!1;function nt(){P||(P=!0,et.then(it))}function Kt(){return nt(),et}function W(t){x.push(t)}const L=new Set;let w=0;function it(){if(w!==0)return;const t=E;do{try{for(;w<b.length;){const e=b[w];w++,v(e),wt(e.$$)}}catch(e){throw b.length=0,w=0,e}for(v(null),b.length=0,w=0;K.length;)K.pop()();for(let e=0;e<x.length;e+=1){const n=x[e];L.has(n)||(L.add(n),n())}x.length=0}while(b.length);for(;Q.length;)Q.pop()();P=!1,L.clear(),v(t)}function wt(t){if(t.fragment!==null){t.update(),$(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(W)}}function bt(t){const e=[],n=[];x.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),x=e}const M=new Set;let g;function Qt(){g={r:0,c:[],p:g}}function Rt(){g.r||$(g.c),g=g.p}function rt(t,e){t&&t.i&&(M.delete(t),t.i(e))}function Ut(t,e,n,i){if(t&&t.o){if(M.has(t))return;M.add(t),g.c.push(()=>{M.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function Vt(t,e){t.d(1),e.delete(t.key)}function Xt(t,e,n,i,r,l,s,u,c,o,f,_){let d=t.length,m=l.length,h=d;const z={};for(;h--;)z[t[h].key]=h;const N=[],O=new Map,q=new Map,T=[];for(h=m;h--;){const a=_(r,l,h),p=n(a);let y=s.get(p);y?i&&T.push(()=>y.p(a,e)):(y=o(p,a),y.c()),O.set(p,N[h]=y),p in z&&q.set(p,Math.abs(h-z[p]))}const F=new Set,H=new Set;function B(a){rt(a,1),a.m(u,f),s.set(a.key,a),f=a.first,m--}for(;d&&m;){const a=N[m-1],p=t[d-1],y=a.key,S=p.key;a===p?(f=a.first,d--,m--):O.has(S)?!s.has(y)||F.has(y)?B(a):H.has(S)?d--:q.get(y)>q.get(S)?(H.add(y),B(a)):(F.add(S),d--):(c(p,s),d--)}for(;d--;){const a=t[d];O.has(a.key)||c(a,s)}for(;m;)B(N[m-1]);return $(T),N}function Yt(t){t&&t.c()}function Zt(t,e){t&&t.l(e)}function xt(t,e,n,i){const{fragment:r,after_update:l}=t.$$;r&&r.m(e,n),i||W(()=>{const s=t.$$.on_mount.map(R).filter(U);t.$$.on_destroy?t.$$.on_destroy.push(...s):$(s),t.$$.on_mount=[]}),l.forEach(W)}function $t(t,e){const n=t.$$;n.fragment!==null&&(bt(n.after_update),$(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function vt(t,e){t.$$.dirty[0]===-1&&(b.push(t),nt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function te(t,e,n,i,r,l,s,u=[-1]){const c=E;v(t);const o=t.$$={fragment:null,ctx:[],props:l,update:j,not_equal:r,bound:G(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:G(),dirty:u,skip_bound:!1,root:e.target||c.$$.root};s&&s(o.root);let f=!1;if(o.ctx=n?n(t,e.props||{},(_,d,...m)=>{const h=m.length?m[0]:d;return o.ctx&&r(o.ctx[_],o.ctx[_]=h)&&(!o.skip_bound&&o.bound[_]&&o.bound[_](h),f&&vt(t,_)),d}):[],o.update(),f=!0,$(o.before_update),o.fragment=i?i(o.ctx):!1,e.target){if(e.hydrate){lt();const _=mt(e.target);o.fragment&&o.fragment.l(_),_.forEach(X)}else o.fragment&&o.fragment.c();e.intro&&rt(t.$$.fragment),xt(t,e.target,e.anchor,e.customElement),ut(),it()}v(c)}class ee{$destroy(){$t(this,1),this.$destroy=j}$on(e,n){if(!U(n))return j;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!ct(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{xt as A,$t as B,_t as C,j as D,St as E,kt as F,Mt as G,jt as H,At as I,Nt as J,ht as K,Pt as L,W as M,Tt as N,Xt as O,zt as P,Vt as Q,Jt as R,ee as S,Ot as a,Ct as b,Wt as c,Ut as d,qt as e,Rt as f,rt as g,X as h,te as i,Gt as j,Y as k,Lt as l,mt as m,Bt as n,Ht as o,It as p,D as q,yt as r,Et as s,Kt as t,Dt as u,Qt as v,K as w,Ft as x,Yt as y,Zt as z};
