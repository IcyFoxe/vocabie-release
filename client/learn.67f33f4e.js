import{S as t,i as a,s as e,e as r,t as s,a as n,b as l,g as c,j as o,d as i,f,k as h,m as d,l as u,z as m,w as v,y as p,r as g,G as w,p as E,A as $,c as y,q as b,h as N,n as A,H as k,u as T,L as P,D as I,J as D,B as R,M as V,N as M}from"./client.68868241.js";import{d as S}from"./database.b99f8388.js";import{S as B,R as j,D as x,C}from"./refresh.f9fbac56.js";function H(t,a,e){const r=t.slice();return r[19]=a[e],r[20]=a,r[21]=e,r}function L(t){let a,e,v,p,g,w,E,$=(t[0]>=t[7].limit?t[7].limit:t[0])+"",y=1===t[0]?"word":"words",b=t[0]>t[7].limit&&W(t);return{c(){a=r("div"),e=r("p"),v=s("LEARNING: "),p=r("span"),g=s($),w=n(),b&&b.c(),E=s(y),this.h()},l(t){a=l(t,"DIV",{class:!0});var r=c(a);e=l(r,"P",{class:!0});var s=c(e);v=o(s,"LEARNING: "),p=l(s,"SPAN",{class:!0});var n=c(p);g=o(n,$),n.forEach(i),w=f(s),b&&b.l(s),E=o(s,y),s.forEach(i),r.forEach(i),this.h()},h(){h(p,"class","svelte-1tarf12"),h(e,"class","fade-in svelte-1tarf12"),h(a,"class","info-box svelte-1tarf12")},m(t,r){d(t,a,r),u(a,e),u(e,v),u(e,p),u(p,g),u(e,w),b&&b.m(e,null),u(e,E)},p(t,a){129&a&&$!==($=(t[0]>=t[7].limit?t[7].limit:t[0])+"")&&m(g,$),t[0]>t[7].limit?b?b.p(t,a):(b=W(t),b.c(),b.m(e,E)):b&&(b.d(1),b=null),1&a&&y!==(y=1===t[0]?"word":"words")&&m(E,y)},d(t){t&&i(a),b&&b.d()}}}function W(t){let a,e,v,p;return{c(){a=s("out of "),e=r("span"),v=s(t[0]),p=n(),this.h()},l(r){a=o(r,"out of "),e=l(r,"SPAN",{class:!0});var s=c(e);v=o(s,t[0]),s.forEach(i),p=f(r),this.h()},h(){h(e,"class","svelte-1tarf12")},m(t,r){d(t,a,r),d(t,e,r),u(e,v),d(t,p,r)},p(t,a){1&a&&m(v,t[0])},d(t){t&&i(a),t&&i(e),t&&i(p)}}}function G(t){let a,e,n,f,m,v,p;return{c(){a=r("p"),e=s("There are no words to learn."),n=r("br"),f=s("\n        Visit the\n        "),m=r("a"),v=s("Add Words"),p=s("\n        page to add new words."),this.h()},l(t){a=l(t,"P",{class:!0});var r=c(a);e=o(r,"There are no words to learn."),n=l(r,"BR",{}),f=o(r,"\n        Visit the\n        "),m=l(r,"A",{href:!0,class:!0});var s=c(m);v=o(s,"Add Words"),s.forEach(i),p=o(r,"\n        page to add new words."),r.forEach(i),this.h()},h(){h(m,"href","/add-words"),h(m,"class","b-2 svelte-1tarf12"),h(a,"class","fade-in svelte-1tarf12")},m(t,r){d(t,a,r),u(a,e),u(a,n),u(a,f),u(a,m),u(m,v),u(a,p)},d(t){t&&i(a)}}}function q(t){let a,e,v,p,g,w=t[19].primary+"",E=t[19].note+"";return{c(){a=r("p"),e=s(w),v=n(),p=r("p"),g=s(E),this.h()},l(t){a=l(t,"P",{class:!0});var r=c(a);e=o(r,w),r.forEach(i),v=f(t),p=l(t,"P",{class:!0});var s=c(p);g=o(s,E),s.forEach(i),this.h()},h(){h(a,"class","t-2 svelte-1tarf12"),h(p,"class","t-3 svelte-1tarf12")},m(t,r){d(t,a,r),u(a,e),d(t,v,r),d(t,p,r),u(p,g)},p(t,a){2&a&&w!==(w=t[19].primary+"")&&m(e,w),2&a&&E!==(E=t[19].note+"")&&m(g,E)},d(t){t&&i(a),t&&i(v),t&&i(p)}}}function O(t){let a,e,v,p,g=t[19].secondary+"",w=t[7].showNotes&&z(t);return{c(){a=r("p"),e=s(g),v=n(),w&&w.c(),p=V(),this.h()},l(t){a=l(t,"P",{class:!0});var r=c(a);e=o(r,g),r.forEach(i),v=f(t),w&&w.l(t),p=V(),this.h()},h(){h(a,"class","t-1 svelte-1tarf12")},m(t,r){d(t,a,r),u(a,e),d(t,v,r),w&&w.m(t,r),d(t,p,r)},p(t,a){2&a&&g!==(g=t[19].secondary+"")&&m(e,g),t[7].showNotes?w?w.p(t,a):(w=z(t),w.c(),w.m(p.parentNode,p)):w&&(w.d(1),w=null)},d(t){t&&i(a),t&&i(v),w&&w.d(t),t&&i(p)}}}function U(t){let a;function e(t,a){return t[3][t[21]]?F:J}let r=e(t),s=r(t);return{c(){s.c(),a=V()},l(t){s.l(t),a=V()},m(t,e){s.m(t,e),d(t,a,e)},p(t,n){r===(r=e(t))&&s?s.p(t,n):(s.d(1),s=r(t),s&&(s.c(),s.m(a.parentNode,a)))},d(t){s.d(t),t&&i(a)}}}function z(t){let a,e,n=t[19].note+"";return{c(){a=r("p"),e=s(n),this.h()},l(t){a=l(t,"P",{class:!0});var r=c(a);e=o(r,n),r.forEach(i),this.h()},h(){h(a,"class","t-3 svelte-1tarf12")},m(t,r){d(t,a,r),u(a,e)},p(t,a){2&a&&n!==(n=t[19].note+"")&&m(e,n)},d(t){t&&i(a)}}}function F(t){let a,e,v,p,g,w=t[19].secondary+"",E=t[19].note+"";return{c(){a=r("p"),e=s(w),v=n(),p=r("p"),g=s(E),this.h()},l(t){a=l(t,"P",{class:!0});var r=c(a);e=o(r,w),r.forEach(i),v=f(t),p=l(t,"P",{class:!0});var s=c(p);g=o(s,E),s.forEach(i),this.h()},h(){h(a,"class","t-2 svelte-1tarf12"),h(p,"class","t-3 svelte-1tarf12")},m(t,r){d(t,a,r),u(a,e),d(t,v,r),d(t,p,r),u(p,g)},p(t,a){2&a&&w!==(w=t[19].secondary+"")&&m(e,w),2&a&&E!==(E=t[19].note+"")&&m(g,E)},d(t){t&&i(a),t&&i(v),t&&i(p)}}}function J(t){let a,e,v,p,g=t[19].primary+"",w=t[7].showNotes&&K(t);return{c(){a=r("p"),e=s(g),v=n(),w&&w.c(),p=V(),this.h()},l(t){a=l(t,"P",{class:!0});var r=c(a);e=o(r,g),r.forEach(i),v=f(t),w&&w.l(t),p=V(),this.h()},h(){h(a,"class","t-1 svelte-1tarf12")},m(t,r){d(t,a,r),u(a,e),d(t,v,r),w&&w.m(t,r),d(t,p,r)},p(t,a){2&a&&g!==(g=t[19].primary+"")&&m(e,g),t[7].showNotes?w?w.p(t,a):(w=K(t),w.c(),w.m(p.parentNode,p)):w&&(w.d(1),w=null)},d(t){t&&i(a),t&&i(v),w&&w.d(t),t&&i(p)}}}function K(t){let a,e,n=t[19].note+"";return{c(){a=r("p"),e=s(n),this.h()},l(t){a=l(t,"P",{class:!0});var r=c(a);e=o(r,n),r.forEach(i),this.h()},h(){h(a,"class","t-3 svelte-1tarf12")},m(t,r){d(t,a,r),u(a,e)},p(t,a){2&a&&n!==(n=t[19].note+"")&&m(e,n)},d(t){t&&i(a)}}}function Q(t){let a,e;return a=new x({}),{c(){y(a.$$.fragment)},l(t){N(a.$$.fragment,t)},m(t,r){A(a,t,r),e=!0},i(t){e||(E(a.$$.fragment,t),e=!0)},o(t){g(a.$$.fragment,t),e=!1},d(t){T(a,t)}}}function X(t){let a,e;return a=new C({}),{c(){y(a.$$.fragment)},l(t){N(a.$$.fragment,t)},m(t,r){A(a,t,r),e=!0},i(t){e||(E(a.$$.fragment,t),e=!0)},o(t){g(a.$$.fragment,t),e=!1},d(t){T(a,t)}}}function Y(t){let a,e,m,y,b,N,A,k,T,P,I,R,V,M,S=t[21];function B(t,a){return"primary"===t[2]?U:t[3][t[21]]?q:O}let j=B(t),x=j(t);function C(){return t[12](t[21])}const H=[X,Q],L=[];function W(t,a){return t[5][t[21]]?1:0}T=W(t),P=L[T]=H[T](t);const G=()=>t[13](y,S),z=()=>t[13](null,S);function F(){return t[14](t[19],t[21])}return{c(){a=r("div"),e=r("div"),x.c(),m=n(),y=r("button"),b=r("span"),N=s("Mark as learned"),A=n(),k=r("div"),P.c(),I=n(),this.h()},l(t){a=l(t,"DIV",{class:!0});var r=c(a);e=l(r,"DIV",{class:!0});var s=c(e);x.l(s),s.forEach(i),m=f(r),y=l(r,"BUTTON",{class:!0});var n=c(y);b=l(n,"SPAN",{class:!0});var h=c(b);N=o(h,"Mark as learned"),h.forEach(i),A=f(n),k=l(n,"DIV",{class:!0});var d=c(k);P.l(d),d.forEach(i),n.forEach(i),I=f(r),r.forEach(i),this.h()},h(){h(e,"class","c-2 svelte-1tarf12"),v(e,"fading-animation",t[4][t[21]]),h(b,"class","t-4 svelte-1tarf12"),h(k,"class","c-3 svelte-1tarf12"),h(y,"class","b-1 svelte-1tarf12"),h(a,"class","c-1 svelte-1tarf12"),v(a,"marked",t[5][t[21]])},m(t,r){d(t,a,r),u(a,e),x.m(e,null),u(a,m),u(a,y),u(y,b),u(b,N),u(y,A),u(y,k),L[T].m(k,null),G(),u(a,I),R=!0,V||(M=[p(e,"click",C),p(y,"click",F)],V=!0)},p(r,s){j===(j=B(t=r))&&x?x.p(t,s):(x.d(1),x=j(t),x&&(x.c(),x.m(e,null))),16&s&&v(e,"fading-animation",t[4][t[21]]);let n=T;T=W(t),T!==n&&(D(),g(L[n],1,1,(()=>{L[n]=null})),w(),P=L[T],P||(P=L[T]=H[T](t),P.c()),E(P,1),P.m(k,null)),S!==t[21]&&(z(),S=t[21],G()),32&s&&v(a,"marked",t[5][t[21]])},i(t){R||(E(P),R=!0)},o(t){g(P),R=!1},d(t){t&&i(a),x.d(),L[T].d(),z(),V=!1,$(M)}}}function Z(t){let a,e,m,v,P,I,R,V,M,S,x,C,W,q,O,U,z,F,J=t[1].length>0&&L(t),K=!t[1][0]&&G(),Q=t[1],X=[];for(let a=0;a<Q.length;a+=1)X[a]=Y(H(t,Q,a));const Z=t=>g(X[t],1,1,(()=>{X[t]=null}));return S=new B({}),q=new j({}),{c(){a=r("meta"),e=n(),m=r("div"),J&&J.c(),v=n(),P=r("div"),K&&K.c(),I=n();for(let t=0;t<X.length;t+=1)X[t].c();R=n(),V=r("div"),M=r("button"),y(S.$$.fragment),x=s("\n       SWITCH"),C=n(),W=r("button"),y(q.$$.fragment),O=s("\n       REFRESH"),this.h()},l(t){const r=b('[data-svelte="svelte-1k9t7zs"]',document.head);a=l(r,"META",{name:!0,content:!0}),r.forEach(i),e=f(t),m=l(t,"DIV",{class:!0});var s=c(m);J&&J.l(s),v=f(s),P=l(s,"DIV",{class:!0});var n=c(P);K&&K.l(n),I=f(n);for(let t=0;t<X.length;t+=1)X[t].l(n);n.forEach(i),R=f(s),V=l(s,"DIV",{class:!0});var h=c(V);M=l(h,"BUTTON",{class:!0});var d=c(M);N(S.$$.fragment,d),x=o(d,"\n       SWITCH"),d.forEach(i),C=f(h),W=l(h,"BUTTON",{class:!0});var u=c(W);N(q.$$.fragment,u),O=o(u,"\n       REFRESH"),u.forEach(i),h.forEach(i),s.forEach(i),this.h()},h(){document.title="Learn new words or phrases - Vocabie",h(a,"name","description"),h(a,"content","Learn words and phrases from your collection that you have created or imported."),h(P,"class","word-list svelte-1tarf12"),h(M,"class","b-1 svelte-1tarf12"),h(W,"class","b-1 svelte-1tarf12"),h(V,"class","controls svelte-1tarf12"),h(m,"class","container svelte-1tarf12")},m(r,s){u(document.head,a),d(r,e,s),d(r,m,s),J&&J.m(m,null),u(m,v),u(m,P),K&&K.m(P,null),u(P,I);for(let t=0;t<X.length;t+=1)X[t].m(P,null);u(m,R),u(m,V),u(V,M),A(S,M,null),u(M,x),u(V,C),u(V,W),A(q,W,null),u(W,O),U=!0,z||(F=[p(M,"click",t[15]),p(W,"click",t[16])],z=!0)},p(t,[a]){if(t[1].length>0?J?J.p(t,a):(J=L(t),J.c(),J.m(m,v)):J&&(J.d(1),J=null),t[1][0]?K&&(K.d(1),K=null):K||(K=G(),K.c(),K.m(P,I)),3070&a){let e;for(Q=t[1],e=0;e<Q.length;e+=1){const r=H(t,Q,e);X[e]?(X[e].p(r,a),E(X[e],1)):(X[e]=Y(r),X[e].c(),E(X[e],1),X[e].m(P,null))}for(D(),e=Q.length;e<X.length;e+=1)Z(e);w()}},i(t){if(!U){for(let t=0;t<Q.length;t+=1)E(X[t]);E(S.$$.fragment,t),E(q.$$.fragment,t),U=!0}},o(t){X=X.filter(Boolean);for(let t=0;t<X.length;t+=1)g(X[t]);g(S.$$.fragment,t),g(q.$$.fragment,t),U=!1},d(t){i(a),t&&i(e),t&&i(m),J&&J.d(),K&&K.d(),k(X,t),T(S),T(q),z=!1,$(F)}}}function _(t,a,e){let r;P(t,M,(t=>e(7,r=t)));let s=[],n=0,l=[],c="primary",o=new Array(10).fill(!1),i=new Array(10).fill(!1),f=[],h=[];const d=["Good job!","Well done!","Impressive!","Awesome!","Keep going!"];function u(t){i[t]||(e(4,i[t]=!0,i),setTimeout((()=>e(4,i[t]=!1,i)),800),o[t]?setTimeout((()=>e(3,o[t]=!1,o)),400):setTimeout((()=>e(3,o[t]=!0,o)),400))}async function m(t=!1){try{s=await S.vocabie.where("learned").equals(0).limit(r.limit).toArray(),e(1,l=function(t,a){let e=new Array(a),r=t.length,s=new Array(r);if(a>r)throw new RangeError("getRandom: more elements taken than available");for(;a--;){var n=Math.floor(Math.random()*r);e[a]=t[n in s?s[n]:n],s[n]=--r in s?s[r]:r}return e}(s,s.length>=10?10:s.length)),o.fill(!1),e(5,f=[]),h.forEach((t=>{t&&(t.children[0].textContent="Mark as learned",t.disabled=!1)})),t&&e(2,c="primary"===c?"secondary":"primary")}catch(t){return void console.error(t.stack)}}async function v(t){try{await S.vocabie.update(t,{learned:Date.now()}),e(0,n-=1)}catch(t){return void console.error(t.stack)}}I((()=>{!async function(){try{e(0,n=await S.vocabie.where("learned").equals(0).count())}catch(t){return void console.error(t.stack)}}(),m(!1)}));return[n,l,c,o,i,f,h,r,d,u,m,v,t=>u(t),function(t,a){R[t?"unshift":"push"]((()=>{h[a]=t,e(6,h)}))},(t,a)=>{v(t.id),e(6,h[a].children[0].textContent=d[Math.floor(Math.random()*d.length)],h),e(6,h[a].disabled=!0,h),e(5,f[a]=!0,f)},()=>m(!0),()=>m(!1)]}export default class extends t{constructor(t){super(),a(this,t,_,Z,e,{})}}
