"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const{freeze:i,create:S}=Object;class a extends Array{}const p=e=>e instanceof a,f=e=>p(e)?e[0]?e:f():i(a.of(e instanceof Error?e:Error(typeof e=="object"?JSON.stringify(e):String(e)),null)),c=e=>p(e)?e:i(a.of(null,e)),y=[c,f],d=e=>new Proxy(e,{apply(...t){return Promise.resolve().then(()=>Reflect.apply(...t)).then(...y)}}),u=e=>new Promise(t=>setTimeout(t,e)),g=e=>{let t=!0;const n=()=>{t=!1};return{loop:d(async o=>{for(t=!0,await u(e);t;)await o(),await u(e)}),stop:n}},m=(...e)=>t=>{for(const n of e)t=n(t);return t},j=(...e)=>async t=>{for(const n of e)t=n(await t);return t},T=e=>{let t=null;return new Proxy(e,{async apply(...n){t==null&&(t=Reflect.apply(...n));const r=await t;return t=null,r}})},E=m(T,d),k=()=>{let e,t;const n=new Promise((r,o)=>{[e,t]=[r,o]});return{resolve:e,reject:t,pending:n}};class O extends Promise{pipe(t){return super.then(n=>n[0]?n:t(n[1])).then(...y)}}const _=e=>O.resolve(e).then(...y),w=Symbol(),h=Symbol(),P=e=>e&&e[w]==h;function b(e){if(P(e))return e;const t=b;if(!p(e))return t(c(e));const n=(o,s)=>{try{return t(c(o(s)))}catch(l){return t(f(l))}},r=S(null);return r[w]=h,r.join=()=>e,r.map=o=>{const[s,l]=e;return s?r:n(o,l)},r.ap=o=>{const[s,l]=e;return s?r:n(l,o)},i(r)}exports.asyncCompose=j;exports.compose=m;exports.either=d;exports.functor=b;exports.interval=g;exports.isFunctor=P;exports.lock=E;exports.pended=k;exports.pipeline=_;exports.wait=u;
