import{S as e,i as t,s as a,v as n,b as o,g as s,d as r,k as c,m as l,l as i,o as d,e as h,t as u,a as p,c as f,j as v,f as m,h as y,w,x as g,n as b,y as E,z as x,p as k,r as T,u as I,A as N,B as $,q as D,C as A,D as P,E as O}from"./client.45ac517a.js";import{d as S}from"./database.b99f8388.js";var j="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var B,R,U=(function(e,t){!function(){function t(e,t){return void 0===t?t={autoBom:!1}:"object"!=typeof t&&(console.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}function a(e,t,a){var n=new XMLHttpRequest;n.open("GET",e),n.responseType="blob",n.onload=function(){c(n.response,t,a)},n.onerror=function(){console.error("could not download file")},n.send()}function n(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function o(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(a){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var s="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof j&&j.global===j?j:void 0,r=s.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),c=s.saveAs||("object"!=typeof window||window!==s?function(){}:"download"in HTMLAnchorElement.prototype&&!r?function(e,t,r){var c=s.URL||s.webkitURL,l=document.createElement("a");t=t||e.name||"download",l.download=t,l.rel="noopener","string"==typeof e?(l.href=e,l.origin===location.origin?o(l):n(l.href)?a(e,t,r):o(l,l.target="_blank")):(l.href=c.createObjectURL(e),setTimeout((function(){c.revokeObjectURL(l.href)}),4e4),setTimeout((function(){o(l)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,s,r){if(s=s||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(t(e,r),s);else if(n(e))a(e,s,r);else{var c=document.createElement("a");c.href=e,c.target="_blank",setTimeout((function(){o(c)}))}}:function(e,t,n,o){if((o=o||open("","_blank"))&&(o.document.title=o.document.body.innerText="downloading..."),"string"==typeof e)return a(e,t,n);var c="application/octet-stream"===e.type,l=/constructor/i.test(s.HTMLElement)||s.safari,i=/CriOS\/[\d]+/.test(navigator.userAgent);if((i||c&&l||r)&&"undefined"!=typeof FileReader){var d=new FileReader;d.onloadend=function(){var e=d.result;e=i?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),o?o.location.href=e:location=e,o=null},d.readAsDataURL(e)}else{var h=s.URL||s.webkitURL,u=h.createObjectURL(e);o?o.location=u:location.href=u,o=null,setTimeout((function(){h.revokeObjectURL(u)}),4e4)}});s.saveAs=c.saveAs=c,e.exports=c}()}(R={path:B,exports:{},require:function(e,t){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==t&&R.path)}},R.exports),R.exports);function V(e){let t,a,h;return{c(){t=n("svg"),a=n("path"),h=n("polyline"),this.h()},l(e){t=o(e,"svg",{class:!0,xmlns:!0,viewBox:!0,"stroke-width":!0,"shape-rendering":!0,"image-rendering":!0,"stroke-linecap":!0,"stroke-linejoin":!0},1);var n=s(t);a=o(n,"path",{stroke:!0,d:!0,fill:!0},1),s(a).forEach(r),h=o(n,"polyline",{points:!0},1),s(h).forEach(r),n.forEach(r),this.h()},h(){c(a,"stroke","none"),c(a,"d","M0 0h24v24H0z"),c(a,"fill","none"),c(h,"points","6 9 12 15 18 9"),c(t,"class","chevron-down svelte-19wqchh"),c(t,"xmlns","http://www.w3.org/2000/svg"),c(t,"viewBox","0 0 24 24"),c(t,"stroke-width","1.7"),c(t,"shape-rendering","geometricPrecision"),c(t,"image-rendering","optimizeQuality"),c(t,"stroke-linecap","round"),c(t,"stroke-linejoin","round")},m(e,n){l(e,t,n),i(t,a),i(t,h)},p:d,i:d,o:d,d(e){e&&r(t)}}}class q extends e{constructor(e){super(),t(this,e,null,V,a,{})}}function H(e){let t,a,h;return{c(){t=n("svg"),a=n("path"),h=n("polyline"),this.h()},l(e){t=o(e,"svg",{class:!0,xmlns:!0,viewBox:!0,"stroke-width":!0,"shape-rendering":!0,"image-rendering":!0,"stroke-linecap":!0,"stroke-linejoin":!0},1);var n=s(t);a=o(n,"path",{stroke:!0,d:!0,fill:!0},1),s(a).forEach(r),h=o(n,"polyline",{points:!0},1),s(h).forEach(r),n.forEach(r),this.h()},h(){c(a,"stroke","none"),c(a,"d","M0 0h24v24H0z"),c(a,"fill","none"),c(h,"points","6 15 12 9 18 15"),c(t,"class","chevron-up svelte-10wu07y"),c(t,"xmlns","http://www.w3.org/2000/svg"),c(t,"viewBox","0 0 24 24"),c(t,"stroke-width","1.7"),c(t,"shape-rendering","geometricPrecision"),c(t,"image-rendering","optimizeQuality"),c(t,"stroke-linecap","round"),c(t,"stroke-linejoin","round")},m(e,n){l(e,t,n),i(t,a),i(t,h)},p:d,i:d,o:d,d(e){e&&r(t)}}}class L extends e{constructor(e){super(),t(this,e,null,H,a,{})}}function _(e){let t,a,n,d,$,D,A,P,O,S,j,B,R,U,V,H,_,M,Y,C,J,z,G,K,F,W,Q,X,Z,ee,te,ae,ne;return A=new q({}),S=new L({}),{c(){t=h("div"),a=h("div"),n=h("h3"),d=u(e[0]),$=p(),D=h("div"),f(A.$$.fragment),P=p(),O=h("div"),f(S.$$.fragment),j=p(),B=h("div"),R=h("p"),U=u(e[1]),V=p(),H=h("div"),_=h("button"),M=u("IMPORT"),Y=p(),C=h("button"),J=u("Yes"),z=p(),G=h("button"),K=u("No"),F=p(),W=h("div"),Q=u("Import complete!"),X=p(),Z=h("p"),ee=u("This will replace your current database. Are you sure?"),this.h()},l(c){t=o(c,"DIV",{class:!0});var l=s(t);a=o(l,"DIV",{class:!0});var i=s(a);n=o(i,"H3",{class:!0});var h=s(n);d=v(h,e[0]),h.forEach(r),$=m(i),D=o(i,"DIV",{class:!0});var u=s(D);y(A.$$.fragment,u),u.forEach(r),P=m(i),O=o(i,"DIV",{class:!0});var p=s(O);y(S.$$.fragment,p),p.forEach(r),i.forEach(r),j=m(l),B=o(l,"DIV",{class:!0,style:!0});var f=s(B);R=o(f,"P",{class:!0});var w=s(R);U=v(w,e[1]),w.forEach(r),V=m(f),H=o(f,"DIV",{class:!0});var g=s(H);_=o(g,"BUTTON",{class:!0});var b=s(_);M=v(b,"IMPORT"),b.forEach(r),Y=m(g),C=o(g,"BUTTON",{class:!0});var E=s(C);J=v(E,"Yes"),E.forEach(r),z=m(g),G=o(g,"BUTTON",{class:!0});var x=s(G);K=v(x,"No"),x.forEach(r),F=m(g),W=o(g,"DIV",{class:!0});var k=s(W);Q=v(k,"Import complete!"),k.forEach(r),g.forEach(r),X=m(f),Z=o(f,"P",{class:!0});var T=s(Z);ee=v(T,"This will replace your current database. Are you sure?"),T.forEach(r),f.forEach(r),l.forEach(r),this.h()},h(){c(n,"class","t-1 svelte-1tqahcp"),c(D,"class","c-5 svelte-1tqahcp"),w(D,"hidden",e[4]),c(O,"class","c-5 svelte-1tqahcp"),w(O,"hidden",!e[4]),c(a,"class","c-4 svelte-1tqahcp"),c(R,"class","t-2 svelte-1tqahcp"),c(_,"class","b-1 blue svelte-1tqahcp"),w(_,"hidden","import"!==e[2]),c(C,"class","b-1 green svelte-1tqahcp"),w(C,"hidden","confirm"!==e[2]),c(G,"class","b-1 red svelte-1tqahcp"),w(G,"hidden","confirm"!==e[2]),c(W,"class","c-3 svelte-1tqahcp"),w(W,"hidden","complete"!==e[2]),c(H,"class","c-2 svelte-1tqahcp"),c(Z,"class","t-3 svelte-1tqahcp"),w(Z,"hidden","confirm"!==e[2]),c(B,"class","c-1 svelte-1tqahcp"),g(B,"display","none"),g(B,"height","0px"),c(t,"class","collection-card svelte-1tqahcp")},m(o,s){l(o,t,s),i(t,a),i(a,n),i(n,d),i(a,$),i(a,D),b(A,D,null),i(a,P),i(a,O),b(S,O,null),i(t,j),i(t,B),i(B,R),i(R,U),i(B,V),i(B,H),i(H,_),i(_,M),i(H,Y),i(H,C),i(C,J),i(H,z),i(H,G),i(G,K),i(H,F),i(H,W),i(W,Q),i(B,X),i(B,Z),i(Z,ee),e[11](B),te=!0,ae||(ne=[E(window,"resize",e[8]),E(a,"click",e[5]),E(_,"click",e[9]),E(C,"click",e[6]),E(G,"click",e[10])],ae=!0)},p(e,[t]){(!te||1&t)&&x(d,e[0]),16&t&&w(D,"hidden",e[4]),16&t&&w(O,"hidden",!e[4]),(!te||2&t)&&x(U,e[1]),4&t&&w(_,"hidden","import"!==e[2]),4&t&&w(C,"hidden","confirm"!==e[2]),4&t&&w(G,"hidden","confirm"!==e[2]),4&t&&w(W,"hidden","complete"!==e[2]),4&t&&w(Z,"hidden","confirm"!==e[2])},i(e){te||(k(A.$$.fragment,e),k(S.$$.fragment,e),te=!0)},o(e){T(A.$$.fragment,e),T(S.$$.fragment,e),te=!1},d(a){a&&r(t),I(A),I(S),e[11](null),ae=!1,N(ne)}}}function M(e,t,a){let n,{title:o}=t,{description:s=""}=t,{url:r}=t,c="import",l=!1;return e.$$set=e=>{"title"in e&&a(0,o=e.title),"description"in e&&a(1,s=e.description),"url"in e&&a(7,r=e.url)},[o,s,c,n,l,function(){"0px"===n.style.height?(a(3,n.style.display="block",n),a(3,n.style.height=n.scrollHeight+"px",n),a(4,l=!0),this.timeout&&clearTimeout(this.timeout)):(a(3,n.style.height="0px",n),a(4,l=!1),"complete"!==c&&(this.timeout=setTimeout((()=>{a(2,c="import")}),600)))},async function(){try{let e=await fetch(r),t=await e.blob();await S.import(t,{clearTablesBeforeImport:!0}),a(2,c="complete")}catch(e){return void console.error(e.stack)}},r,()=>{a(3,n.style.height="0px",n),a(4,l=!1),"complete"!==c&&setTimeout((()=>{a(2,c="import")}),600)},()=>a(2,c="confirm"),()=>a(2,c="import"),function(e){$[e?"unshift":"push"]((()=>{n=e,a(3,n)}))}]}class Y extends e{constructor(e){super(),t(this,e,M,_,a,{title:0,description:1,url:7})}}function C(e){let t,a,n,d,g,$,P,O,S,j,B,R,U,V,q,H,L,_,M,C,z,G,K,F,W,Q,X,Z,ee,te,ae,ne,oe,se,re,ce,le,ie,de,he,ue,pe,fe,ve,me,ye,we,ge,be,Ee,xe,ke,Te,Ie,Ne,$e,De,Ae,Pe,Oe,Se,je,Be,Re,Ue,Ve,qe,He,Le,_e,Me,Ye,Ce,Je,ze,Ge,Ke,Fe,We,Qe,Xe,Ze,et,tt,at,nt,ot,st,rt,ct,lt,it,dt,ht,ut,pt,ft,vt,mt,yt,wt,gt,bt,Et,xt,kt,Tt,It;return Ge=new Y({props:{title:"Japanese Hiragana (JP - EN)",description:"Learn Hiragana by importing this collection. It contains all the characters, including Gojūon, Dakuon and Handakuon.",url:"/collections/jp-en_hiragana.json"}}),Fe=new Y({props:{title:"Japanese Katakana (JP - EN)",description:"If you've learned Hiragana, you should definitely learn Katakana too. Simply import it and you're ready to start!",url:"/collections/jp-en_katakana.json"}}),{c(){t=h("meta"),a=p(),n=h("div"),d=h("div"),g=h("div"),$=h("label"),P=h("span"),O=h("strong"),S=u("Browse"),j=p(),B=h("span"),R=u("or "),U=h("strong"),V=u("drag & drop"),q=u("\n          to import the database"),H=p(),L=h("input"),_=p(),M=h("div"),C=h("span"),z=u(e[1]),G=p(),K=h("button"),F=u("Save"),W=p(),Q=h("div"),X=h("span"),Z=u("Your current database will be overwritten. Are you\n          sure?"),ee=p(),te=h("button"),ae=u("Yes"),oe=p(),se=h("button"),re=u("No"),ce=p(),le=h("div"),ie=h("span"),de=u("Import complete!"),he=p(),ue=h("div"),pe=h("span"),fe=u("Please upload the correct database file!"),ve=p(),me=h("div"),ye=h("button"),we=u("Export the current database"),ge=p(),be=h("div"),Ee=h("span"),xe=u("Export complete!"),ke=p(),Te=h("span"),Ie=u("Can't download the file? Click "),Ne=h("span"),$e=u("here"),De=u(" to view it."),Ae=p(),Pe=h("div"),Oe=h("h2"),Se=u("Make sure to backup regularly"),je=p(),Be=h("p"),Re=u("Your collection is stored\n    "),Ue=h("strong"),Ve=u("locally"),qe=u("\n    in your browser. That means it can easily be removed by clearing your\n    browser history. That's why it's a good idea to back up your collection\n    regularly, so you won't lose it. (Support on mobile devices varies. Please\n    test it beforehand.)"),He=p(),Le=h("div"),_e=h("h2"),Me=u("Featured collections"),Ye=p(),Ce=h("p"),Je=u("Here you can directly import one of our featured collections. Over time\n    we're planning to add more. If you've created a collection that you think\n    others might find useful as well, don't hesitate to share it with us!"),ze=p(),f(Ge.$$.fragment),Ke=p(),f(Fe.$$.fragment),We=p(),Qe=h("div"),Xe=h("h2"),Ze=u("Delete database"),et=p(),tt=h("p"),at=u("You can permanently delete your collection here. Keep in mind that this\n    action is\n    "),nt=h("strong"),ot=u("irreversible"),st=u("."),rt=p(),ct=h("p"),lt=u("Are you sure?"),it=p(),dt=h("p"),ht=u("Deletion complete. If the page doesn't reload automatically, please reload\n    the page."),ut=p(),pt=h("div"),ft=h("button"),vt=u("Delete"),mt=p(),yt=h("div"),wt=h("button"),gt=u("Yes"),bt=p(),Et=h("button"),xt=u("No"),this.h()},l(c){const l=D('[data-svelte="svelte-1r1ssnm"]',document.head);t=o(l,"META",{name:!0,content:!0}),l.forEach(r),a=m(c),n=o(c,"DIV",{class:!0});var i=s(n);d=o(i,"DIV",{class:!0});var h=s(d);g=o(h,"DIV",{class:!0});var u=s(g);$=o(u,"LABEL",{class:!0});var p=s($);P=o(p,"SPAN",{});var f=s(P);O=o(f,"STRONG",{});var w=s(O);S=v(w,"Browse"),w.forEach(r),j=m(f),B=o(f,"SPAN",{class:!0});var b=s(B);R=v(b,"or "),U=o(b,"STRONG",{});var E=s(U);V=v(E,"drag & drop"),E.forEach(r),b.forEach(r),q=v(f,"\n          to import the database"),f.forEach(r),H=m(p),L=o(p,"INPUT",{class:!0,type:!0}),p.forEach(r),_=m(u),M=o(u,"DIV",{class:!0});var x=s(M);C=o(x,"SPAN",{class:!0});var k=s(C);z=v(k,e[1]),k.forEach(r),G=m(x),K=o(x,"BUTTON",{class:!0});var T=s(K);F=v(T,"Save"),T.forEach(r),x.forEach(r),W=m(u),Q=o(u,"DIV",{class:!0});var I=s(Q);X=o(I,"SPAN",{class:!0});var N=s(X);Z=v(N,"Your current database will be overwritten. Are you\n          sure?"),N.forEach(r),ee=m(I),te=o(I,"BUTTON",{class:!0,value:!0,disabled:!0});var A=s(te);ae=v(A,"Yes"),A.forEach(r),oe=m(I),se=o(I,"BUTTON",{class:!0});var Y=s(se);re=v(Y,"No"),Y.forEach(r),I.forEach(r),ce=m(u),le=o(u,"DIV",{class:!0});var J=s(le);ie=o(J,"SPAN",{});var ne=s(ie);de=v(ne,"Import complete!"),ne.forEach(r),J.forEach(r),he=m(u),ue=o(u,"DIV",{class:!0});var kt=s(ue);pe=o(kt,"SPAN",{class:!0});var Tt=s(pe);fe=v(Tt,"Please upload the correct database file!"),Tt.forEach(r),kt.forEach(r),u.forEach(r),ve=m(h),me=o(h,"DIV",{class:!0});var It=s(me);ye=o(It,"BUTTON",{class:!0});var Nt=s(ye);we=v(Nt,"Export the current database"),Nt.forEach(r),ge=m(It),be=o(It,"DIV",{class:!0});var $t=s(be);Ee=o($t,"SPAN",{class:!0});var Dt=s(Ee);xe=v(Dt,"Export complete!"),Dt.forEach(r),ke=m($t),Te=o($t,"SPAN",{class:!0});var At=s(Te);Ie=v(At,"Can't download the file? Click "),Ne=o(At,"SPAN",{class:!0});var Pt=s(Ne);$e=v(Pt,"here"),Pt.forEach(r),De=v(At," to view it."),At.forEach(r),$t.forEach(r),It.forEach(r),h.forEach(r),i.forEach(r),Ae=m(c),Pe=o(c,"DIV",{class:!0});var Ot=s(Pe);Oe=o(Ot,"H2",{class:!0});var St=s(Oe);Se=v(St,"Make sure to backup regularly"),St.forEach(r),je=m(Ot),Be=o(Ot,"P",{class:!0});var jt=s(Be);Re=v(jt,"Your collection is stored\n    "),Ue=o(jt,"STRONG",{});var Bt=s(Ue);Ve=v(Bt,"locally"),Bt.forEach(r),qe=v(jt,"\n    in your browser. That means it can easily be removed by clearing your\n    browser history. That's why it's a good idea to back up your collection\n    regularly, so you won't lose it. (Support on mobile devices varies. Please\n    test it beforehand.)"),jt.forEach(r),Ot.forEach(r),He=m(c),Le=o(c,"DIV",{class:!0});var Rt=s(Le);_e=o(Rt,"H2",{class:!0});var Ut=s(_e);Me=v(Ut,"Featured collections"),Ut.forEach(r),Ye=m(Rt),Ce=o(Rt,"P",{class:!0});var Vt=s(Ce);Je=v(Vt,"Here you can directly import one of our featured collections. Over time\n    we're planning to add more. If you've created a collection that you think\n    others might find useful as well, don't hesitate to share it with us!"),Vt.forEach(r),ze=m(Rt),y(Ge.$$.fragment,Rt),Ke=m(Rt),y(Fe.$$.fragment,Rt),Rt.forEach(r),We=m(c),Qe=o(c,"DIV",{class:!0});var qt=s(Qe);Xe=o(qt,"H2",{class:!0});var Ht=s(Xe);Ze=v(Ht,"Delete database"),Ht.forEach(r),et=m(qt),tt=o(qt,"P",{class:!0});var Lt=s(tt);at=v(Lt,"You can permanently delete your collection here. Keep in mind that this\n    action is\n    "),nt=o(Lt,"STRONG",{});var _t=s(nt);ot=v(_t,"irreversible"),_t.forEach(r),st=v(Lt,"."),Lt.forEach(r),rt=m(qt),ct=o(qt,"P",{class:!0});var Mt=s(ct);lt=v(Mt,"Are you sure?"),Mt.forEach(r),it=m(qt),dt=o(qt,"P",{class:!0});var Yt=s(dt);ht=v(Yt,"Deletion complete. If the page doesn't reload automatically, please reload\n    the page."),Yt.forEach(r),ut=m(qt),pt=o(qt,"DIV",{class:!0});var Ct=s(pt);ft=o(Ct,"BUTTON",{class:!0});var Jt=s(ft);vt=v(Jt,"Delete"),Jt.forEach(r),Ct.forEach(r),mt=m(qt),yt=o(qt,"DIV",{class:!0});var zt=s(yt);wt=o(zt,"BUTTON",{class:!0});var Gt=s(wt);gt=v(Gt,"Yes"),Gt.forEach(r),bt=m(zt),Et=o(zt,"BUTTON",{class:!0});var Kt=s(Et);xt=v(Kt,"No"),Kt.forEach(r),zt.forEach(r),qt.forEach(r),this.h()},h(){document.title="Import and export collection - Vocabie",c(t,"name","description"),c(t,"content","Backup your collection or import a new one. Browse featured collections to learn."),c(B,"class","desktop svelte-n1nm2x"),c(L,"class","i-1 svelte-n1nm2x"),c(L,"type","file"),c($,"class","c-1 svelte-n1nm2x"),w($,"hidden","input"!==e[3]),c(C,"class","t-1 svelte-n1nm2x"),c(K,"class","b-1 svelte-n1nm2x"),c(M,"class","c-2 svelte-n1nm2x"),w(M,"hidden","review"!==e[3]),c(X,"class","t-1 svelte-n1nm2x"),c(te,"class","b-1 svelte-n1nm2x"),te.value="Yes",te.disabled=ne=!e[0],c(se,"class","b-2 svelte-n1nm2x"),c(Q,"class","c-2 svelte-n1nm2x"),w(Q,"hidden","confirm"!==e[3]),c(le,"class","c-3 svelte-n1nm2x"),w(le,"hidden","complete"!==e[3]),c(pe,"class","t-1 svelte-n1nm2x"),c(ue,"class","c-4 svelte-n1nm2x"),w(ue,"hidden","warning"!==e[3]),c(g,"class","import svelte-n1nm2x"),c(ye,"class","b-1 svelte-n1nm2x"),w(ye,"hidden","export"!==e[4]),c(Ee,"class","t-1 svelte-n1nm2x"),c(Ne,"class","li-1 svelte-n1nm2x"),c(Te,"class","t-2 svelte-n1nm2x"),c(be,"class","c-1 svelte-n1nm2x"),w(be,"hidden","complete"!==e[4]),c(me,"class","export svelte-n1nm2x"),c(d,"class","c-1 svelte-n1nm2x"),c(n,"class","import-export-field svelte-n1nm2x"),c(Oe,"class","t-1 svelte-n1nm2x"),c(Be,"class","t-2 svelte-n1nm2x"),c(Pe,"class","info-panel svelte-n1nm2x"),c(_e,"class","t-1 svelte-n1nm2x"),c(Ce,"class","t-2 svelte-n1nm2x"),c(Le,"class","collections-panel svelte-n1nm2x"),c(Xe,"class","t-1 svelte-n1nm2x"),c(tt,"class","t-2 svelte-n1nm2x"),w(tt,"hidden","delete"!==e[5]),c(ct,"class","t-2 svelte-n1nm2x"),w(ct,"hidden","confirm"!==e[5]),c(dt,"class","t-2 svelte-n1nm2x"),w(dt,"hidden","complete"!==e[5]),c(ft,"class","b-1 svelte-n1nm2x"),c(pt,"class","c-1 svelte-n1nm2x"),w(pt,"hidden","delete"!==e[5]),c(wt,"class","b-1 svelte-n1nm2x"),c(Et,"class","b-2 svelte-n1nm2x"),c(yt,"class","c-1 svelte-n1nm2x"),w(yt,"hidden","confirm"!==e[5]),c(Qe,"class","delete-panel svelte-n1nm2x"),w(Qe,"hidden",0===e[2])},m(o,s){i(document.head,t),l(o,a,s),l(o,n,s),i(n,d),i(d,g),i(g,$),i($,P),i(P,O),i(O,S),i(P,j),i(P,B),i(B,R),i(B,U),i(U,V),i(P,q),i($,H),i($,L),i(g,_),i(g,M),i(M,C),i(C,z),i(M,G),i(M,K),i(K,F),i(g,W),i(g,Q),i(Q,X),i(X,Z),i(Q,ee),i(Q,te),i(te,ae),i(Q,oe),i(Q,se),i(se,re),i(g,ce),i(g,le),i(le,ie),i(ie,de),i(g,he),i(g,ue),i(ue,pe),i(pe,fe),i(d,ve),i(d,me),i(me,ye),i(ye,we),i(me,ge),i(me,be),i(be,Ee),i(Ee,xe),i(be,ke),i(be,Te),i(Te,Ie),i(Te,Ne),i(Ne,$e),i(Te,De),l(o,Ae,s),l(o,Pe,s),i(Pe,Oe),i(Oe,Se),i(Pe,je),i(Pe,Be),i(Be,Re),i(Be,Ue),i(Ue,Ve),i(Be,qe),l(o,He,s),l(o,Le,s),i(Le,_e),i(_e,Me),i(Le,Ye),i(Le,Ce),i(Ce,Je),i(Le,ze),b(Ge,Le,null),i(Le,Ke),b(Fe,Le,null),l(o,We,s),l(o,Qe,s),i(Qe,Xe),i(Xe,Ze),i(Qe,et),i(Qe,tt),i(tt,at),i(tt,nt),i(nt,ot),i(tt,st),i(Qe,rt),i(Qe,ct),i(ct,lt),i(Qe,it),i(Qe,dt),i(dt,ht),i(Qe,ut),i(Qe,pt),i(pt,ft),i(ft,vt),i(Qe,mt),i(Qe,yt),i(yt,wt),i(wt,gt),i(yt,bt),i(yt,Et),i(Et,xt),kt=!0,Tt||(It=[E(L,"input",e[6]),E(L,"click",J),E($,"dragover",A(e[12])),E($,"drop",A(e[7])),E(K,"click",e[13]),E(te,"click",e[8]),E(se,"click",e[14]),E(ye,"click",e[9]),E(Ne,"click",e[10]),E(ft,"click",e[15]),E(wt,"click",e[11],{once:!0}),E(Et,"click",e[16])],Tt=!0)},p(e,[t]){8&t&&w($,"hidden","input"!==e[3]),(!kt||2&t)&&x(z,e[1]),8&t&&w(M,"hidden","review"!==e[3]),(!kt||1&t&&ne!==(ne=!e[0]))&&(te.disabled=ne),8&t&&w(Q,"hidden","confirm"!==e[3]),8&t&&w(le,"hidden","complete"!==e[3]),8&t&&w(ue,"hidden","warning"!==e[3]),16&t&&w(ye,"hidden","export"!==e[4]),16&t&&w(be,"hidden","complete"!==e[4]),32&t&&w(tt,"hidden","delete"!==e[5]),32&t&&w(ct,"hidden","confirm"!==e[5]),32&t&&w(dt,"hidden","complete"!==e[5]),32&t&&w(pt,"hidden","delete"!==e[5]),32&t&&w(yt,"hidden","confirm"!==e[5]),4&t&&w(Qe,"hidden",0===e[2])},i(e){kt||(k(Ge.$$.fragment,e),k(Fe.$$.fragment,e),kt=!0)},o(e){T(Ge.$$.fragment,e),T(Fe.$$.fragment,e),kt=!1},d(e){r(t),e&&r(a),e&&r(n),e&&r(Ae),e&&r(Pe),e&&r(He),e&&r(Le),I(Ge),I(Fe),e&&r(We),e&&r(Qe),Tt=!1,N(It)}}}const J=function(){this.value=null};function z(e,t,a){let n,o="",s=0,r="input",c="export",l="delete";P((async()=>{await Promise.all([import("./dexie-export-import.336226b2.js"),]).then((function(e){return e[0]})),async function(){try{a(2,s=await S.vocabie.count())}catch(e){return void console.error(e.stack)}}()}));return[n,o,s,r,c,l,function(e){if(!e.target.files[0].name.endsWith(".json"))return a(3,r="warning"),void setTimeout((()=>{a(3,r="input")}),3e3);a(0,n=e.target.files[0]),a(1,o=e.target.files[0].name),a(3,r="review")},function(e){if(!e.dataTransfer.files[0].name.endsWith(".json"))return a(3,r="warning"),void setTimeout((()=>{a(3,r="input")}),3e3);a(0,n=e.dataTransfer.files[0]),a(1,o=e.dataTransfer.files[0].name),a(3,r="review")},async function(){try{await S.import(n,{clearTablesBeforeImport:!0}),a(0,n=void 0),a(3,r="complete")}catch(e){return void console.error(e.stack)}},async function(){try{const e=await S.export({prettyJson:!0});U.saveAs(e,"vocabie.json"),a(4,c="complete")}catch(e){return void console.error(e.stack)}},async function(){try{const t=await S.export({prettyJson:!0});var e=URL.createObjectURL(t);window.open(e,"_blank")}catch(e){return void console.error(e.stack)}},async function(){try{await S.delete(),location.reload(),setTimeout((()=>{a(5,l="complete")}),1e3)}catch(e){return void console.error(e.stack)}},function(t){O(e,t)},()=>a(3,r="confirm"),()=>{a(0,n=void 0),a(1,o=""),a(3,r="input")},()=>a(5,l="confirm"),()=>a(5,l="delete")]}export default class extends e{constructor(e){super(),t(this,e,z,C,a,{})}}
