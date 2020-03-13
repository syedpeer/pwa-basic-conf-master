!function(e){function t(t){for(var r,i,a=t[0],s=t[1],o=0,l=[];o<a.length;o++)i=a[o],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&l.push(n[i][0]),n[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);for(c&&c(t);l.length;)l.shift()()}var r={},n={0:0};function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],r=n[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise((function(t,i){r=n[e]=[t,i]}));t.push(r[2]=a);var s,o=document.createElement("script");o.charset="utf-8",o.timeout=120,i.nc&&o.setAttribute("nonce",i.nc),o.src=function(e){return i.p+""+({}[e]||e)+".js"}(e);var c=new Error;s=function(t){o.onerror=o.onload=null,clearTimeout(l);var r=n[e];if(0!==r){if(r){var i=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+i+": "+a+")",c.name="ChunkLoadError",c.type=i,c.request=a,r[1](c)}n[e]=void 0}};var l=setTimeout((function(){s({type:"timeout",target:o})}),12e4);o.onerror=o.onload=s,document.head.appendChild(o)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var a=window.webpackJsonp=window.webpackJsonp||[],s=a.push.bind(a);a.push=t,a=a.slice();for(var o=0;o<a.length;o++)t(a[o]);var c=s;i(i.s=0)}([function(e,t,r){class n{constructor(){this.speakersDiv=document.querySelector(".speakers"),this.scheduleDiv=document.querySelector(".schedule"),this.init()}async init(){await this.loadSpeakers(),this.loadSchedule(),this.registerSW()}async loadSpeakers(){this.speakers=(await r.e(2).then(r.t.bind(null,1,3))).default,this.speakersDiv.innerHTML=this.speakers.map(this.toSpeakerBlock).join("\n")}async loadSchedule(){const e=(await r.e(1).then(r.t.bind(null,2,3))).default;this.schedule=e.map(this.addSpeakerDetails,this),this.scheduleDiv.innerHTML=this.schedule.map(this.toScheduleBlock).join("\n")}toSpeakerBlock(e){return`\n        <div class="speaker">\n          <img src="${e.picture}" alt="${e.name}">\n          <div>${e.name}</div>\n        </div>`}toScheduleBlock(e){return`\n      <div class="schedule-item ${e.category}">\n        <div class="title-and-time">\n          <div class="time">${e.startTime}</div>\n          <div class="title-and-speaker">\n            <div class="title">${e.title}</div>\n            <div class="speaker">${e.speaker?e.speaker.name:"&nbsp;"}</div>\n          </div>\n        </div>\n        <p class="description">${e.description}</p>\n      </div>\n    `}addSpeakerDetails(e){return e.speakerId?Object.assign({},e,{speaker:this.speakers.find(t=>t.id===e.speakerId)}):Object.assign({},e)}async registerSW(){if("serviceWorker"in navigator)try{await navigator.serviceWorker.register("./sw.js")}catch(e){alert("ServiceWorker registration failed. Sorry about that.")}else document.querySelector(".alert").removeAttribute("hidden")}}window.addEventListener("load",e=>{new n})}]);