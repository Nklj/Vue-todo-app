if(!self.define){let e,o={};const s=(s,n)=>(s=new URL(s+".js",n).href,o[s]||new Promise((o=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=o,document.head.appendChild(e)}else e=s,importScripts(s),o()})).then((()=>{let e=o[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(o[t])return;let u={};const i=e=>s(e,t),c={module:{uri:t},exports:u,require:i};o[t]=Promise.all(n.map((e=>c[e]||i(e)))).then((e=>(r(...e),u)))}}define(["./workbox-2d118ab0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"vue-test-task"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/Vue-todo-app/Screenshot.png",revision:"3719ba269d6076e12902e219735fc100"},{url:"/Vue-todo-app/css/711.13f6daec.css",revision:null},{url:"/Vue-todo-app/css/app.39bc3a38.css",revision:null},{url:"/Vue-todo-app/css/chunk-vendors.4d74513c.css",revision:null},{url:"/Vue-todo-app/index.html",revision:"d26c29515006c5de16828d986cc6afd8"},{url:"/Vue-todo-app/js/681.c25246bc.js",revision:null},{url:"/Vue-todo-app/js/711.b9aa46b4.js",revision:null},{url:"/Vue-todo-app/js/app.29d55ac7.js",revision:null},{url:"/Vue-todo-app/js/chunk-vendors.bdd10179.js",revision:null},{url:"/Vue-todo-app/manifest.json",revision:"83e8e78dc9897e68be71e25a5675158b"},{url:"/Vue-todo-app/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
