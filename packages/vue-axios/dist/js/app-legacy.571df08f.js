(function(){"use strict";var n={543:function(n,e,o){var t=o(93),r=function(){var n=this,e=n._self._c;return e("div",{attrs:{id:"app"}},[e("h2",[n._v("Axios下载文件")]),e("div",[e("button",{on:{click:n.download}},[n._v("直接下载文件")]),e("button",{on:{click:n.downloadFile}},[n._v("axios下载文件")]),e("button",{on:{click:n.downloadImage}},[n._v("axios下载图片")])]),e("div",[n.imageSrc?e("img",{attrs:{src:n.imageSrc,alt:""}}):n._e()])])},i=[],c=o(326),a=o.n(c),l={name:"app",data(){return{imageSrc:""}},methods:{download(){let n="http://localhost:8080/download";const e=document.createElement("a");e.style.display="none",e.href=n,document.body.appendChild(e),e.click(),document.body.removeChild(e)},async downloadImage(){this.imageSrc="http://localhost:8080/image"},async downloadFile(){const n=await a().get("http://localhost:8080/file");console.log(n);const e=new Blob([n.data],{type:n.headers["content-type"]});let o=new RegExp("filename=([^;]+\\.[^\\.;]+);*"),t=o.exec(n.headers["content-disposition"]),r=decodeURI(t[1]);const i=document.createElement("a"),c=window.URL.createObjectURL(e);console.log(r),i.style.display="none",i.href=c,i.download=r,document.body.appendChild(i),i.click(),document.body.removeChild(i),window.URL.revokeObjectURL(c)}}},u=l,d=o(217),s=(0,d.Z)(u,r,i,!1,null,null,null),f=s.exports;new t.ZP({el:"#app",render:n=>n(f)})}},e={};function o(t){var r=e[t];if(void 0!==r)return r.exports;var i=e[t]={exports:{}};return n[t](i,i.exports,o),i.exports}o.m=n,function(){var n=[];o.O=function(e,t,r,i){if(!t){var c=1/0;for(d=0;d<n.length;d++){t=n[d][0],r=n[d][1],i=n[d][2];for(var a=!0,l=0;l<t.length;l++)(!1&i||c>=i)&&Object.keys(o.O).every((function(n){return o.O[n](t[l])}))?t.splice(l--,1):(a=!1,i<c&&(c=i));if(a){n.splice(d--,1);var u=r();void 0!==u&&(e=u)}}return e}i=i||0;for(var d=n.length;d>0&&n[d-1][2]>i;d--)n[d]=n[d-1];n[d]=[t,r,i]}}(),function(){o.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return o.d(e,{a:e}),e}}(),function(){o.d=function(n,e){for(var t in e)o.o(e,t)&&!o.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){o.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)}}(),function(){var n={143:0};o.O.j=function(e){return 0===n[e]};var e=function(e,t){var r,i,c=t[0],a=t[1],l=t[2],u=0;if(c.some((function(e){return 0!==n[e]}))){for(r in a)o.o(a,r)&&(o.m[r]=a[r]);if(l)var d=l(o)}for(e&&e(t);u<c.length;u++)i=c[u],o.o(n,i)&&n[i]&&n[i][0](),n[i]=0;return o.O(d)},t=self["webpackChunkvue_axios"]=self["webpackChunkvue_axios"]||[];t.forEach(e.bind(null,0)),t.push=e.bind(null,t.push.bind(t))}();var t=o.O(void 0,[998],(function(){return o(543)}));t=o.O(t)})();
//# sourceMappingURL=app-legacy.571df08f.js.map