import{_ as n,a as t,b as r,c as a,i as e,d as c,S as o,s,e as i,t as f,f as u,h as l,l as h,n as d,j as v,k as m,o as p,r as g,p as w,H as E,D as y,F as $,x as b,P as k,w as N,I as x,g as A,q as P,m as R,u as T,G as I,Q as D,y as S,W as V,M,T as W,J as j,K as B,X as C,Y as H}from"./client.b6653dd5.js";import{_ as G,d as L}from"./database.acb5a169.js";import{S as q,R as F,D as O,C as U}from"./refresh.62a68e20.js";function K(n,t){var r=new Array(t),a=n.length,e=new Array(a);if(t>a)throw new RangeError("getRandom: more elements taken than available");for(;t--;){var c=Math.floor(Math.random()*a);r[t]=n[c in e?e[c]:c],e[c]=--a in e?e[a]:a}return r}function _(n){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var e,c=t(n);if(a){var o=t(this).constructor;e=Reflect.construct(c,arguments,o)}else e=c.apply(this,arguments);return r(this,e)}}function z(n,t,r){var a=n.slice();return a[19]=t[r],a[20]=t,a[21]=r,a}function J(n){var t,r,a,e,c,o,s,y=(n[0]>=n[7].limit?n[7].limit:n[0])+"",$=1===n[0]?"word":"words",b=n[0]>n[7].limit&&Q(n);return{c:function(){t=i("div"),r=i("p"),a=f("LEARNING: "),e=i("span"),c=f(y),o=u(),b&&b.c(),s=f($),this.h()},l:function(n){t=l(n,"DIV",{class:!0});var i=h(t);r=l(i,"P",{class:!0});var f=h(r);a=d(f,"LEARNING: "),e=l(f,"SPAN",{class:!0});var u=h(e);c=d(u,y),u.forEach(v),o=m(f),b&&b.l(f),s=d(f,$),f.forEach(v),i.forEach(v),this.h()},h:function(){p(e,"class","svelte-1tarf12"),p(r,"class","fade-in svelte-1tarf12"),p(t,"class","info-box svelte-1tarf12")},m:function(n,i){g(n,t,i),w(t,r),w(r,a),w(r,e),w(e,c),w(r,o),b&&b.m(r,null),w(r,s)},p:function(n,t){129&t&&y!==(y=(n[0]>=n[7].limit?n[7].limit:n[0])+"")&&E(c,y),n[0]>n[7].limit?b?b.p(n,t):((b=Q(n)).c(),b.m(r,s)):b&&(b.d(1),b=null),1&t&&$!==($=1===n[0]?"word":"words")&&E(s,$)},d:function(n){n&&v(t),b&&b.d()}}}function Q(n){var t,r,a,e;return{c:function(){t=f("out of "),r=i("span"),a=f(n[0]),e=u(),this.h()},l:function(c){t=d(c,"out of "),r=l(c,"SPAN",{class:!0});var o=h(r);a=d(o,n[0]),o.forEach(v),e=m(c),this.h()},h:function(){p(r,"class","svelte-1tarf12")},m:function(n,c){g(n,t,c),g(n,r,c),w(r,a),g(n,e,c)},p:function(n,t){1&t&&E(a,n[0])},d:function(n){n&&v(t),n&&v(r),n&&v(e)}}}function X(n){var t,r,a,e,c,o,s;return{c:function(){t=i("p"),r=f("There are no words to learn."),a=i("br"),e=f("\n        Visit the\n        "),c=i("a"),o=f("Add Words"),s=f("\n        page to add new words."),this.h()},l:function(n){t=l(n,"P",{class:!0});var i=h(t);r=d(i,"There are no words to learn."),a=l(i,"BR",{}),e=d(i,"\n        Visit the\n        "),c=l(i,"A",{href:!0,class:!0});var f=h(c);o=d(f,"Add Words"),f.forEach(v),s=d(i,"\n        page to add new words."),i.forEach(v),this.h()},h:function(){p(c,"href","/add-words"),p(c,"class","b-2 svelte-1tarf12"),p(t,"class","fade-in svelte-1tarf12")},m:function(n,i){g(n,t,i),w(t,r),w(t,a),w(t,e),w(t,c),w(c,o),w(t,s)},d:function(n){n&&v(t)}}}function Y(n){var t,r,a,e,c,o=n[19].primary+"",s=n[19].note+"";return{c:function(){t=i("p"),r=f(o),a=u(),e=i("p"),c=f(s),this.h()},l:function(n){t=l(n,"P",{class:!0});var i=h(t);r=d(i,o),i.forEach(v),a=m(n),e=l(n,"P",{class:!0});var f=h(e);c=d(f,s),f.forEach(v),this.h()},h:function(){p(t,"class","t-2 svelte-1tarf12"),p(e,"class","t-3 svelte-1tarf12")},m:function(n,o){g(n,t,o),w(t,r),g(n,a,o),g(n,e,o),w(e,c)},p:function(n,t){2&t&&o!==(o=n[19].primary+"")&&E(r,o),2&t&&s!==(s=n[19].note+"")&&E(c,s)},d:function(n){n&&v(t),n&&v(a),n&&v(e)}}}function Z(n){var t,r,a,e,c=n[19].secondary+"",o=n[7].showNotes&&tn(n);return{c:function(){t=i("p"),r=f(c),a=u(),o&&o.c(),e=C(),this.h()},l:function(n){t=l(n,"P",{class:!0});var s=h(t);r=d(s,c),s.forEach(v),a=m(n),o&&o.l(n),e=C(),this.h()},h:function(){p(t,"class","t-1 svelte-1tarf12")},m:function(n,c){g(n,t,c),w(t,r),g(n,a,c),o&&o.m(n,c),g(n,e,c)},p:function(n,t){2&t&&c!==(c=n[19].secondary+"")&&E(r,c),n[7].showNotes?o?o.p(n,t):((o=tn(n)).c(),o.m(e.parentNode,e)):o&&(o.d(1),o=null)},d:function(n){n&&v(t),n&&v(a),o&&o.d(n),n&&v(e)}}}function nn(n){var t;function r(n,t){return n[3][n[21]]?rn:an}var a=r(n),e=a(n);return{c:function(){e.c(),t=C()},l:function(n){e.l(n),t=C()},m:function(n,r){e.m(n,r),g(n,t,r)},p:function(n,c){a===(a=r(n))&&e?e.p(n,c):(e.d(1),(e=a(n))&&(e.c(),e.m(t.parentNode,t)))},d:function(n){e.d(n),n&&v(t)}}}function tn(n){var t,r,a=n[19].note+"";return{c:function(){t=i("p"),r=f(a),this.h()},l:function(n){t=l(n,"P",{class:!0});var e=h(t);r=d(e,a),e.forEach(v),this.h()},h:function(){p(t,"class","t-3 svelte-1tarf12")},m:function(n,a){g(n,t,a),w(t,r)},p:function(n,t){2&t&&a!==(a=n[19].note+"")&&E(r,a)},d:function(n){n&&v(t)}}}function rn(n){var t,r,a,e,c,o=n[19].secondary+"",s=n[19].note+"";return{c:function(){t=i("p"),r=f(o),a=u(),e=i("p"),c=f(s),this.h()},l:function(n){t=l(n,"P",{class:!0});var i=h(t);r=d(i,o),i.forEach(v),a=m(n),e=l(n,"P",{class:!0});var f=h(e);c=d(f,s),f.forEach(v),this.h()},h:function(){p(t,"class","t-2 svelte-1tarf12"),p(e,"class","t-3 svelte-1tarf12")},m:function(n,o){g(n,t,o),w(t,r),g(n,a,o),g(n,e,o),w(e,c)},p:function(n,t){2&t&&o!==(o=n[19].secondary+"")&&E(r,o),2&t&&s!==(s=n[19].note+"")&&E(c,s)},d:function(n){n&&v(t),n&&v(a),n&&v(e)}}}function an(n){var t,r,a,e,c=n[19].primary+"",o=n[7].showNotes&&en(n);return{c:function(){t=i("p"),r=f(c),a=u(),o&&o.c(),e=C(),this.h()},l:function(n){t=l(n,"P",{class:!0});var s=h(t);r=d(s,c),s.forEach(v),a=m(n),o&&o.l(n),e=C(),this.h()},h:function(){p(t,"class","t-1 svelte-1tarf12")},m:function(n,c){g(n,t,c),w(t,r),g(n,a,c),o&&o.m(n,c),g(n,e,c)},p:function(n,t){2&t&&c!==(c=n[19].primary+"")&&E(r,c),n[7].showNotes?o?o.p(n,t):((o=en(n)).c(),o.m(e.parentNode,e)):o&&(o.d(1),o=null)},d:function(n){n&&v(t),n&&v(a),o&&o.d(n),n&&v(e)}}}function en(n){var t,r,a=n[19].note+"";return{c:function(){t=i("p"),r=f(a),this.h()},l:function(n){t=l(n,"P",{class:!0});var e=h(t);r=d(e,a),e.forEach(v),this.h()},h:function(){p(t,"class","t-3 svelte-1tarf12")},m:function(n,a){g(n,t,a),w(t,r)},p:function(n,t){2&t&&a!==(a=n[19].note+"")&&E(r,a)},d:function(n){n&&v(t)}}}function cn(n){var t,r;return t=new O({}),{c:function(){A(t.$$.fragment)},l:function(n){R(t.$$.fragment,n)},m:function(n,a){T(t,n,a),r=!0},i:function(n){r||(N(t.$$.fragment,n),r=!0)},o:function(n){b(t.$$.fragment,n),r=!1},d:function(n){S(t,n)}}}function on(n){var t,r;return t=new U({}),{c:function(){A(t.$$.fragment)},l:function(n){R(t.$$.fragment,n)},m:function(n,a){T(t,n,a),r=!0},i:function(n){r||(N(t.$$.fragment,n),r=!0)},o:function(n){b(t.$$.fragment,n),r=!1},d:function(n){S(t,n)}}}function sn(n){var t,r,a,e,c,o,s,E,A,P,R,T,I,D,S=n[21];function V(n,t){return"primary"===n[2]?nn:n[3][n[21]]?Y:Z}var M=V(n),j=M(n);function B(){return n[12](n[21])}var C=[on,cn],H=[];function G(n,t){return n[5][n[21]]?1:0}A=G(n),P=H[A]=C[A](n);var L=function(){return n[13](e,S)},q=function(){return n[13](null,S)};function F(){return n[14](n[19],n[21])}return{c:function(){t=i("div"),r=i("div"),j.c(),a=u(),e=i("button"),c=i("span"),o=f("Mark as learned"),s=u(),E=i("div"),P.c(),R=u(),this.h()},l:function(n){t=l(n,"DIV",{class:!0});var i=h(t);r=l(i,"DIV",{class:!0});var f=h(r);j.l(f),f.forEach(v),a=m(i),e=l(i,"BUTTON",{class:!0});var u=h(e);c=l(u,"SPAN",{class:!0});var p=h(c);o=d(p,"Mark as learned"),p.forEach(v),s=m(u),E=l(u,"DIV",{class:!0});var g=h(E);P.l(g),g.forEach(v),u.forEach(v),R=m(i),i.forEach(v),this.h()},h:function(){p(r,"class","c-2 svelte-1tarf12"),y(r,"fading-animation",n[4][n[21]]),p(c,"class","t-4 svelte-1tarf12"),p(E,"class","c-3 svelte-1tarf12"),p(e,"class","b-1 svelte-1tarf12"),p(t,"class","c-1 svelte-1tarf12"),y(t,"marked",n[5][n[21]])},m:function(n,i){g(n,t,i),w(t,r),j.m(r,null),w(t,a),w(t,e),w(e,c),w(c,o),w(e,s),w(e,E),H[A].m(E,null),L(),w(t,R),T=!0,I||(D=[$(r,"click",B),$(e,"click",F)],I=!0)},p:function(a,e){M===(M=V(n=a))&&j?j.p(n,e):(j.d(1),(j=M(n))&&(j.c(),j.m(r,null))),16&e&&y(r,"fading-animation",n[4][n[21]]);var c=A;(A=G(n))!==c&&(W(),b(H[c],1,1,(function(){H[c]=null})),k(),(P=H[A])||(P=H[A]=C[A](n)).c(),N(P,1),P.m(E,null)),S!==n[21]&&(q(),S=n[21],L()),32&e&&y(t,"marked",n[5][n[21]])},i:function(n){T||(N(P),T=!0)},o:function(n){b(P),T=!1},d:function(n){n&&v(t),j.d(),H[A].d(),q(),I=!1,x(D)}}}function fn(n){for(var t,r,a,e,c,o,s,E,y,V,M,j,B,C,H,G,L,O,U=n[1].length>0&&J(n),K=!n[1][0]&&X(),_=n[1],Q=[],Y=0;Y<_.length;Y+=1)Q[Y]=sn(z(n,_,Y));var Z=function(n){return b(Q[n],1,1,(function(){Q[n]=null}))};return V=new q({}),C=new F({}),{c:function(){t=i("meta"),r=u(),a=i("div"),U&&U.c(),e=u(),c=i("div"),K&&K.c(),o=u();for(var n=0;n<Q.length;n+=1)Q[n].c();s=u(),E=i("div"),y=i("button"),A(V.$$.fragment),M=f("\n       SWITCH"),j=u(),B=i("button"),A(C.$$.fragment),H=f("\n       REFRESH"),this.h()},l:function(n){var i=P('[data-svelte="svelte-1k9t7zs"]',document.head);t=l(i,"META",{name:!0,content:!0}),i.forEach(v),r=m(n),a=l(n,"DIV",{class:!0});var f=h(a);U&&U.l(f),e=m(f),c=l(f,"DIV",{class:!0});var u=h(c);K&&K.l(u),o=m(u);for(var p=0;p<Q.length;p+=1)Q[p].l(u);u.forEach(v),s=m(f),E=l(f,"DIV",{class:!0});var g=h(E);y=l(g,"BUTTON",{class:!0});var w=h(y);R(V.$$.fragment,w),M=d(w,"\n       SWITCH"),w.forEach(v),j=m(g),B=l(g,"BUTTON",{class:!0});var $=h(B);R(C.$$.fragment,$),H=d($,"\n       REFRESH"),$.forEach(v),g.forEach(v),f.forEach(v),this.h()},h:function(){document.title="Learn new words or phrases - Vocabie",p(t,"name","description"),p(t,"content","Learn words and phrases from your collection that you have created or imported."),p(c,"class","word-list svelte-1tarf12"),p(y,"class","b-1 svelte-1tarf12"),p(B,"class","b-1 svelte-1tarf12"),p(E,"class","controls svelte-1tarf12"),p(a,"class","container svelte-1tarf12")},m:function(i,f){w(document.head,t),g(i,r,f),g(i,a,f),U&&U.m(a,null),w(a,e),w(a,c),K&&K.m(c,null),w(c,o);for(var u=0;u<Q.length;u+=1)Q[u].m(c,null);w(a,s),w(a,E),w(E,y),T(V,y,null),w(y,M),w(E,j),w(E,B),T(C,B,null),w(B,H),G=!0,L||(O=[$(y,"click",n[15]),$(B,"click",n[16])],L=!0)},p:function(n,t){var r=I(t,1)[0];if(n[1].length>0?U?U.p(n,r):((U=J(n)).c(),U.m(a,e)):U&&(U.d(1),U=null),n[1][0]?K&&(K.d(1),K=null):K||((K=X()).c(),K.m(c,o)),3070&r){var s;for(_=n[1],s=0;s<_.length;s+=1){var i=z(n,_,s);Q[s]?(Q[s].p(i,r),N(Q[s],1)):(Q[s]=sn(i),Q[s].c(),N(Q[s],1),Q[s].m(c,null))}for(W(),s=_.length;s<Q.length;s+=1)Z(s);k()}},i:function(n){if(!G){for(var t=0;t<_.length;t+=1)N(Q[t]);N(V.$$.fragment,n),N(C.$$.fragment,n),G=!0}},o:function(n){Q=Q.filter(Boolean);for(var t=0;t<Q.length;t+=1)b(Q[t]);b(V.$$.fragment,n),b(C.$$.fragment,n),G=!1},d:function(n){v(t),n&&v(r),n&&v(a),U&&U.d(),K&&K.d(),D(Q,n),S(V),S(C),L=!1,x(O)}}}function un(n,t,r){var a;V(n,H,(function(n){return r(7,a=n)}));var e=[],c=0,o=[],s="primary",i=new Array(10).fill(!1),f=new Array(10).fill(!1),u=[],l=[],h=["Good job!","Well done!","Impressive!","Awesome!","Keep going!"];function d(n){f[n]||(r(4,f[n]=!0,f),setTimeout((function(){return r(4,f[n]=!1,f)}),800),i[n]?setTimeout((function(){return r(3,i[n]=!1,i)}),400):setTimeout((function(){return r(3,i[n]=!0,i)}),400))}function v(){return(v=G(j.mark((function n(){return j.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.t0=r,n.next=4,L.vocabie.where("learned").equals(0).count();case 4:n.t1=c=n.sent,(0,n.t0)(0,n.t1),n.next=12;break;case 8:return n.prev=8,n.t2=n.catch(0),console.error(n.t2.stack),n.abrupt("return");case 12:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}function m(){return p.apply(this,arguments)}function p(){return(p=G(j.mark((function n(){var t,c=arguments;return j.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=c.length>0&&void 0!==c[0]&&c[0],n.prev=1,n.next=4,L.vocabie.where("learned").equals(0).limit(a.limit).toArray();case 4:e=n.sent,r(1,o=K(e,e.length>=10?10:e.length)),i.fill(!1),r(5,u=[]),l.forEach((function(n){n&&(n.children[0].textContent="Mark as learned",n.disabled=!1)})),t&&r(2,s="primary"===s?"secondary":"primary"),n.next=16;break;case 12:return n.prev=12,n.t0=n.catch(1),console.error(n.t0.stack),n.abrupt("return");case 16:case"end":return n.stop()}}),n,null,[[1,12]])})))).apply(this,arguments)}function g(n){return w.apply(this,arguments)}function w(){return(w=G(j.mark((function n(t){return j.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,L.vocabie.update(t,{learned:Date.now()});case 3:r(0,c-=1),n.next=10;break;case 6:return n.prev=6,n.t0=n.catch(0),console.error(n.t0.stack),n.abrupt("return");case 10:case"end":return n.stop()}}),n,null,[[0,6]])})))).apply(this,arguments)}M((function(){!function(){v.apply(this,arguments)}(),m(!1)}));return[c,o,s,i,f,u,l,a,h,d,m,g,function(n){return d(n)},function(n,t){B[n?"unshift":"push"]((function(){l[t]=n,r(6,l)}))},function(n,t){g(n.id),r(6,l[t].children[0].textContent=h[Math.floor(Math.random()*h.length)],l),r(6,l[t].disabled=!0,l),r(5,u[t]=!0,u)},function(){return m(!0)},function(){return m(!1)}]}var ln=function(t){n(i,o);var r=_(i);function i(n){var t;return a(this,i),t=r.call(this),e(c(t),n,un,fn,s,{}),t}return i}();export default ln;
