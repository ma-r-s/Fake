import{s as F,a as H,n as T,c as O}from"../chunks/scheduler.6tNSTrer.js";import{S as J,i as K,e as k,s as A,t as D,c as E,a as P,d as v,b as R,k as S,f as _,h as w,j as d,w as Q,p as W,l as z}from"../chunks/index.GojAWPqq.js";import{e as G}from"../chunks/each.6w4Ej4nR.js";import{p as X,c as Y,a as Z,m as $}from"../chunks/stores.gel0lWqn.js";function L(l,t,e){const s=l.slice();return s[8]=t[e],s[10]=e,s}function ee(l){let t;return{c(){t=D("Player votes")},l(e){t=S(e,"Player votes")},m(e,s){w(e,t,s)},p:T,d(e){e&&v(t)}}}function te(l){let t,e=l[0]+1+"",s,p;return{c(){t=D("Player "),s=D(e),p=D(" vote")},l(r){t=S(r,"Player "),s=S(r,e),p=S(r," vote")},m(r,o){w(r,t,o),w(r,s,o),w(r,p,o)},p(r,o){o&1&&e!==(e=r[0]+1+"")&&z(s,e)},d(r){r&&(v(t),v(s),v(p))}}}function N(l){let t,e,s,p=l[10]+1+"",r,o,u,y=l[1][l[10]]+"",h,I,n,V,x;function q(){return l[6](l[10])}return{c(){t=k("div"),e=k("button"),s=D("Player "),r=D(p),o=A(),u=k("div"),h=D(y),n=A(),this.h()},l(b){t=E(b,"DIV",{class:!0});var c=P(t);e=E(c,"BUTTON",{class:!0});var g=P(e);s=S(g,"Player "),r=S(g,p),g.forEach(v),o=R(c),u=E(c,"DIV",{class:!0,style:!0});var f=P(u);h=S(f,y),f.forEach(v),n=R(c),c.forEach(v),this.h()},h(){_(e,"class","btn btn-secondary btn-lg text-xl"),_(u,"class","flex w-14 items-center justify-center rounded-full text-center text-white"),_(u,"style",I=`background-color: ${l[3][l[10]]};`),_(t,"class","flex gap-2")},m(b,c){w(b,t,c),d(t,e),d(e,s),d(e,r),d(t,o),d(t,u),d(u,h),d(t,n),V||(x=W(e,"click",q),V=!0)},p(b,c){l=b,c&2&&y!==(y=l[1][l[10]]+"")&&z(h,y),c&8&&I!==(I=`background-color: ${l[3][l[10]]};`)&&_(u,"style",I)},d(b){b&&v(t),V=!1,x()}}}function le(l){let t,e,s,p,r,o,u,y,h,I,n,V,x;function q(a,m){return a[0]<a[2]?te:ee}let b=q(l),c=b(l),g=G(Array(l[2])),f=[];for(let a=0;a<g.length;a+=1)f[a]=N(L(l,g,a));return{c(){t=k("div"),e=k("div"),s=k("p"),c.c(),p=A(),r=k("div"),o=k("img"),y=A(),h=k("div");for(let a=0;a<f.length;a+=1)f[a].c();I=A(),n=k("a"),V=D("Reveal"),this.h()},l(a){t=E(a,"DIV",{class:!0});var m=P(t);e=E(m,"DIV",{class:!0});var i=P(e);s=E(i,"P",{class:!0});var j=P(s);c.l(j),j.forEach(v),p=R(i),r=E(i,"DIV",{class:!0});var U=P(r);o=E(U,"IMG",{src:!0,alt:!0,class:!0}),U.forEach(v),i.forEach(v),y=R(m),h=E(m,"DIV",{class:!0});var B=P(h);for(let M=0;M<f.length;M+=1)f[M].l(B);B.forEach(v),I=R(m),n=E(m,"A",{href:!0,class:!0});var C=P(n);V=S(C,"Reveal"),C.forEach(v),m.forEach(v),this.h()},h(){_(s,"class","m-8 text-center text-6xl"),H(o.src,u=l[4])||_(o,"src",u),_(o,"alt","canvas"),_(o,"class",""),_(r,"class","border-8 border-dashed border-black bg-white"),_(e,"class","flex-col justify-center p-8"),_(h,"class","flex flex-col flex-wrap items-center justify-center gap-6 p-8"),_(n,"href","./reveal"),_(n,"class",x=`btn btn-neutral btn-lg absolute left-10 top-10 text-2xl ${l[0]==l[2]?"":"invisible"}`),_(t,"class","flex h-screen text-3xl font-bold")},m(a,m){w(a,t,m),d(t,e),d(e,s),c.m(s,null),d(e,p),d(e,r),d(r,o),d(t,y),d(t,h);for(let i=0;i<f.length;i+=1)f[i]&&f[i].m(h,null);d(t,I),d(t,n),d(n,V)},p(a,[m]){if(b===(b=q(a))&&c?c.p(a,m):(c.d(1),c=b(a),c&&(c.c(),c.m(s,null))),m&46){g=G(Array(a[2]));let i;for(i=0;i<g.length;i+=1){const j=L(a,g,i);f[i]?f[i].p(j,m):(f[i]=N(j),f[i].c(),f[i].m(h,null))}for(;i<f.length;i+=1)f[i].d(1);f.length=g.length}m&5&&x!==(x=`btn btn-neutral btn-lg absolute left-10 top-10 text-2xl ${a[0]==a[2]?"":"invisible"}`)&&_(n,"class",x)},i:T,o:T,d(a){a&&v(t),c.d(),Q(f,a)}}}function se(l,t,e){let s,p,r;O(l,X,n=>e(2,s=n)),O(l,Y,n=>e(7,p=n)),O(l,Z,n=>e(3,r=n));let o=0,u=Array(s).fill(0);const y=p.toDataURL(),h=n=>{o<s&&(e(1,u[n]++,u),e(0,o++,o)),o==s&&$.set(u.indexOf(Math.max(...u)))};return[o,u,s,r,y,h,n=>{h(n)}]}class ce extends J{constructor(t){super(),K(this,t,se,le,F,{})}}export{ce as component};