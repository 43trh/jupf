var _JUPYTERLAB;(()=>{"use strict";var e,r,t,n,a,o,i,f,l,d,u,s,c,p,h,b,v,g,m={581:(e,r,t)=>{var n={"./index":()=>Promise.all([t.e(842),t.e(668),t.e(568)]).then((()=>()=>t(1568))),"./extension":()=>Promise.all([t.e(842),t.e(668),t.e(568),t.e(133)]).then((()=>()=>t(2133)))},a=(e,r)=>(t.R=r,r=t.o(n,e)?n[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),t.R=void 0,r),o=(e,r)=>{if(t.S){var n="default",a=t.S[n];if(a&&a!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[n]=e,t.I(n,r)}};t.d(r,{get:()=>a,init:()=>o})}},y={};function w(e){var r=y[e];if(void 0!==r)return r.exports;var t=y[e]={id:e,exports:{}};return m[e].call(t.exports,t,t.exports,w),t.exports}w.m=m,w.c=y,w.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return w.d(r,{a:r}),r},w.d=(e,r)=>{for(var t in r)w.o(r,t)&&!w.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},w.f={},w.e=e=>Promise.all(Object.keys(w.f).reduce(((r,t)=>(w.f[t](e,r),r)),[])),w.u=e=>e+"."+{87:"cc5d175e0ffc0d125bd5",133:"184b7ff4eeea6053c218",212:"898d3b3da016aa77edc1",469:"7f76e0627ac9900835b9",501:"6c13f92ce49688bde790",568:"5aba39431862fdcd1d08",662:"d928d9e888427c5996be",668:"8d1c3fe0214c7cae748a",794:"8d6261fd8a7307e156f7",815:"4fcd9a1489787115f930",842:"a94bbf6f3349e982fb8b",981:"3f93685e278b785a3338"}[e]+".js?v="+{87:"cc5d175e0ffc0d125bd5",133:"184b7ff4eeea6053c218",212:"898d3b3da016aa77edc1",469:"7f76e0627ac9900835b9",501:"6c13f92ce49688bde790",568:"5aba39431862fdcd1d08",662:"d928d9e888427c5996be",668:"8d1c3fe0214c7cae748a",794:"8d6261fd8a7307e156f7",815:"4fcd9a1489787115f930",842:"a94bbf6f3349e982fb8b",981:"3f93685e278b785a3338"}[e],w.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),w.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="bqplot:",w.l=(t,n,a,o)=>{if(e[t])e[t].push(n);else{var i,f;if(void 0!==a)for(var l=document.getElementsByTagName("script"),d=0;d<l.length;d++){var u=l[d];if(u.getAttribute("src")==t||u.getAttribute("data-webpack")==r+a){i=u;break}}i||(f=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,w.nc&&i.setAttribute("nonce",w.nc),i.setAttribute("data-webpack",r+a),i.src=t),e[t]=[n];var s=(r,n)=>{i.onerror=i.onload=null,clearTimeout(c);var a=e[t];if(delete e[t],i.parentNode&&i.parentNode.removeChild(i),a&&a.forEach((e=>e(n))),r)return r(n)},c=setTimeout(s.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=s.bind(null,i.onerror),i.onload=s.bind(null,i.onload),f&&document.head.appendChild(i)}},w.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{w.S={};var e={},r={};w.I=(t,n)=>{n||(n=[]);var a=r[t];if(a||(a=r[t]={}),!(n.indexOf(a)>=0)){if(n.push(a),e[t])return e[t];w.o(w.S,t)||(w.S[t]={});var o=w.S[t],i="bqplot",f=(e,r,t,n)=>{var a=o[e]=o[e]||{},f=a[r];(!f||!f.loaded&&(!n!=!f.eager?n:i>f.from))&&(a[r]={get:t,from:i,eager:!!n})},l=[];return"default"===t&&(f("bqplot","0.5.45",(()=>Promise.all([w.e(842),w.e(668),w.e(568)]).then((()=>()=>w(1568))))),f("d3-selection","1.4.2",(()=>w.e(815).then((()=>()=>w(4815))))),f("d3","5.16.0",(()=>Promise.all([w.e(842),w.e(662),w.e(668),w.e(469)]).then((()=>()=>w(662))))),f("is-typedarray","1.0.0",(()=>w.e(501).then((()=>()=>w(4501))))),f("popper.js","1.16.1",(()=>w.e(981).then((()=>()=>w(8981))))),f("three","0.91.0",(()=>w.e(212).then((()=>()=>w(2212))))),f("topojson","1.6.27",(()=>w.e(87).then((()=>()=>w(9087))))),f("underscore","1.13.4",(()=>w.e(794).then((()=>()=>w(7794)))))),e[t]=l.length?Promise.all(l).then((()=>e[t]=1)):1}}})(),(()=>{var e;w.g.importScripts&&(e=w.g.location+"");var r=w.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),w.p=e})(),t=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},n=(e,r)=>{e=t(e),r=t(r);for(var n=0;;){if(n>=e.length)return n<r.length&&"u"!=(typeof r[n])[0];var a=e[n],o=(typeof a)[0];if(n>=r.length)return"u"==o;var i=r[n],f=(typeof i)[0];if(o!=f)return"o"==o&&"n"==f||"s"==f||"u"==o;if("o"!=o&&"u"!=o&&a!=i)return a<i;n++}},a=e=>{var r=e[0],t="";if(1===e.length)return"*";if(r+.5){t+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var n=1,o=1;o<e.length;o++)n--,t+="u"==(typeof(f=e[o]))[0]?"-":(n>0?".":"")+(n=2,f);return t}var i=[];for(o=1;o<e.length;o++){var f=e[o];i.push(0===f?"not("+l()+")":1===f?"("+l()+" || "+l()+")":2===f?i.pop()+" "+i.pop():a(f))}return l();function l(){return i.pop().replace(/^\((.+)\)$/,"$1")}},o=(e,r)=>{if(0 in e){r=t(r);var n=e[0],a=n<0;a&&(n=-n-1);for(var i=0,f=1,l=!0;;f++,i++){var d,u,s=f<e.length?(typeof e[f])[0]:"";if(i>=r.length||"o"==(u=(typeof(d=r[i]))[0]))return!l||("u"==s?f>n&&!a:""==s!=a);if("u"==u){if(!l||"u"!=s)return!1}else if(l)if(s==u)if(f<=n){if(d!=e[f])return!1}else{if(a?d>e[f]:d<e[f])return!1;d!=e[f]&&(l=!1)}else if("s"!=s&&"n"!=s){if(a||f<=n)return!1;l=!1,f--}else{if(f<=n||u<s!=a)return!1;l=!1}else"s"!=s&&"n"!=s&&(l=!1,f--)}}var c=[],p=c.pop.bind(c);for(i=1;i<e.length;i++){var h=e[i];c.push(1==h?p()|p():2==h?p()&p():h?o(h,r):!p())}return!!p()},i=(e,r)=>{var t=w.S[e];if(!t||!w.o(t,r))throw new Error("Shared module "+r+" doesn't exist in shared scope "+e);return t},f=(e,r)=>{var t=e[r];return Object.keys(t).reduce(((e,r)=>!e||!t[e].loaded&&n(e,r)?r:e),0)},l=(e,r,t,n)=>"Unsatisfied version "+t+" from "+(t&&e[r][t].from)+" of shared singleton module "+r+" (required "+a(n)+")",d=(e,r,t,n)=>{var a=f(e,t);return o(n,a)||"undefined"!=typeof console&&console.warn&&console.warn(l(e,t,a,n)),s(e[t][a])},u=(e,r,t)=>{var a=e[r];return(r=Object.keys(a).reduce(((e,r)=>!o(t,r)||e&&!n(e,r)?e:r),0))&&a[r]},s=e=>(e.loaded=1,e.get()),p=(c=e=>function(r,t,n,a){var o=w.I(r);return o&&o.then?o.then(e.bind(e,r,w.S[r],t,n,a)):e(r,w.S[r],t,n,a)})(((e,r,t,n)=>(i(e,t),d(r,0,t,n)))),h=c(((e,r,t,n,a)=>{var o=r&&w.o(r,t)&&u(r,t,n);return o?s(o):a()})),b={},v={1668:()=>h("default","d3-selection",[1,1],(()=>w.e(815).then((()=>()=>w(4815))))),366:()=>h("default","d3",[1,5,7,0],(()=>Promise.all([w.e(662),w.e(469)]).then((()=>()=>w(662))))),1395:()=>p("default","@jupyter-widgets/base",[,[1,6],[1,5],[1,4],[1,3],[1,2],1,1,1,1]),2720:()=>p("default","@lumino/messaging",[1,1,10,0]),2729:()=>h("default","is-typedarray",[1,1,0,0],(()=>w.e(501).then((()=>()=>w(4501))))),5384:()=>h("default","three",[2,0,91,0],(()=>w.e(212).then((()=>()=>w(2212))))),7398:()=>h("default","popper.js",[1,1,0,0],(()=>w.e(981).then((()=>()=>w(8981))))),8731:()=>h("default","underscore",[1,1,8,3],(()=>w.e(794).then((()=>()=>w(7794))))),8832:()=>p("default","@lumino/widgets",[1,1,37,2]),9363:()=>h("default","topojson",[1,1,6,24],(()=>w.e(87).then((()=>()=>w(9087))))),6469:()=>h("default","d3-selection",[1,1,1,0],(()=>w.e(815).then((()=>()=>w(4815)))))},g={469:[6469],568:[366,1395,2720,2729,5384,7398,8731,8832,9363],668:[1668]},w.f.consumes=(e,r)=>{w.o(g,e)&&g[e].forEach((e=>{if(w.o(b,e))return r.push(b[e]);var t=r=>{b[e]=0,w.m[e]=t=>{delete w.c[e],t.exports=r()}},n=r=>{delete b[e],w.m[e]=t=>{throw delete w.c[e],r}};try{var a=v[e]();a.then?r.push(b[e]=a.then(t).catch(n)):t(a)}catch(e){n(e)}}))},(()=>{var e={632:0};w.f.j=(r,t)=>{var n=w.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else if(/^(469|668)$/.test(r))e[r]=0;else{var a=new Promise(((t,a)=>n=e[r]=[t,a]));t.push(n[2]=a);var o=w.p+w.u(r),i=new Error;w.l(o,(t=>{if(w.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+a+": "+o+")",i.name="ChunkLoadError",i.type=a,i.request=o,n[1](i)}}),"chunk-"+r,r)}};var r=(r,t)=>{var n,a,[o,i,f]=t,l=0;if(o.some((r=>0!==e[r]))){for(n in i)w.o(i,n)&&(w.m[n]=i[n]);f&&f(w)}for(r&&r(t);l<o.length;l++)a=o[l],w.o(e,a)&&e[a]&&e[a][0](),e[a]=0},t=self.webpackChunkbqplot=self.webpackChunkbqplot||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),w.nc=void 0;var S=w(581);(_JUPYTERLAB=void 0===_JUPYTERLAB?{}:_JUPYTERLAB).bqplot=S})();