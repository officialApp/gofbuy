(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9e8199ce"],{"00d8":function(t,e){(function(){var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",n={rotl:function(t,e){return t<<e|t>>>32-e},rotr:function(t,e){return t<<32-e|t>>>e},endian:function(t){if(t.constructor==Number)return 16711935&n.rotl(t,8)|4278255360&n.rotl(t,24);for(var e=0;e<t.length;e++)t[e]=n.endian(t[e]);return t},randomBytes:function(t){for(var e=[];t>0;t--)e.push(Math.floor(256*Math.random()));return e},bytesToWords:function(t){for(var e=[],n=0,i=0;n<t.length;n++,i+=8)e[i>>>5]|=t[n]<<24-i%32;return e},wordsToBytes:function(t){for(var e=[],n=0;n<32*t.length;n+=8)e.push(t[n>>>5]>>>24-n%32&255);return e},bytesToHex:function(t){for(var e=[],n=0;n<t.length;n++)e.push((t[n]>>>4).toString(16)),e.push((15&t[n]).toString(16));return e.join("")},hexToBytes:function(t){for(var e=[],n=0;n<t.length;n+=2)e.push(parseInt(t.substr(n,2),16));return e},bytesToBase64:function(t){for(var n=[],i=0;i<t.length;i+=3)for(var s=t[i]<<16|t[i+1]<<8|t[i+2],o=0;o<4;o++)8*i+6*o<=8*t.length?n.push(e.charAt(s>>>6*(3-o)&63)):n.push("=");return n.join("")},base64ToBytes:function(t){t=t.replace(/[^A-Z0-9+\/]/gi,"");for(var n=[],i=0,s=0;i<t.length;s=++i%4)0!=s&&n.push((e.indexOf(t.charAt(i-1))&Math.pow(2,-2*s+8)-1)<<2*s|e.indexOf(t.charAt(i))>>>6-2*s);return n}};t.exports=n})()},"044b":function(t,e){function n(t){return!!t.constructor&&"function"===typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}function i(t){return"function"===typeof t.readFloatLE&&"function"===typeof t.slice&&n(t.slice(0,0))}
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
t.exports=function(t){return null!=t&&(n(t)||i(t)||!!t._isBuffer)}},"29ff":function(t,e,n){},3933:function(t,e,n){t.exports=n.p+"img/icon.d9877a3d.png"},"4c29":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.busy?i("div",{staticStyle:{width:"100%",height:"1200px",position:"fixed","z-index":"200",background:"radial-gradient(circle, rgba(33,35,57,0.36738445378151263) 0%, rgba(34,33,48,0.33657212885154064) 100%)"}},[i("p",{staticClass:"animated infinite bounce font-bold font-times text-2xl text-black",staticStyle:{"margin-top":"50vh","margin-left":"30vw"}},[t._v("LOADING ...")])]):t._e(),i("div",{staticClass:"text-center d-sm-none"},[t.menuTrigger?t._e():i("v-touch",{staticStyle:{width:"20px",background:"transparent",height:"100vh",position:"absolute",left:"0","z-index":"10001"},on:{swiperight:t.onSwipeRight}})],1),i("div",{staticClass:"container-fluid anim shadow-lg",staticStyle:{background:"#343A40"}},[i("div",{staticClass:"row anim"},[i("div",{staticClass:"anim col-4 col-sm-3 col-md-2 p-1 rounded-lg",staticStyle:{position:"fixed",padding:"0",margin:"0",height:"100px"},style:{background:t.bgleft1}},[i("div",{staticClass:"text-center text-white font-bold text-times text-xs",staticStyle:{height:"40px",margin:"none","padding-top":"10px"},style:{background:t.bgleft2}},[i("p",{staticClass:"text-white font-bold text-center"},[t._v("ATAS KIRI")]),t._m(0)]),i("div",{staticClass:"text-center p-1",staticStyle:{"z-index":"100"},style:{background:t.bgleft2}},[t._m(1),i("div",{staticClass:"bord hover:bg-blue-800 text-left pl-1 font-italic",staticStyle:{"border-top":"2px solid black",color:"white","font-size":"13px"},attrs:{id:"pertamaclick"},on:{click:function(e){return t.muncul(e)}}},[t._v(" Menu "),i("span",{staticClass:"typcn typcn-arrow-down float-right"})]),i("ul",{staticClass:"isaktif sm:pl-2 anim mb-3 text-white animated slideInRight ",staticStyle:{background:"#232E30"}},[i("li",{staticClass:"bord hover:text-blue-600 text-left ",staticStyle:{"font-size":"11px"},on:{click:function(e){return t.$router.push("/driver/admin/user")}}},[i("span",{staticClass:"typcn typcn-user pr-2"}),t._v("User ")])]),i("div",{staticClass:"bord hover:text-blue-500 text-left pl-3 mt-2",staticStyle:{"border-top":"2px solid black","font-size":"13px"},on:{click:function(e){return t.$router.push("/driver/admin")}}},[t._v(" DASHBOARD ")])])]),i("div",{staticClass:"bg-black anim",class:{"col-8 col-sm-9 col-md-10 offset-4 offset-sm-3 offset-md-2":t.menuTrigger,"col-sm-12":!t.menuTrigger}},[i("div",{staticClass:"row"},[i("div",{class:t.classMenu,staticStyle:{padding:"0",margin:"0",position:"fixed","z-index":"100"}},[i("div",{staticClass:"pt-2",staticStyle:{height:"50px",margin:"none",padding:"3px"},style:{background:t.bgrighttop}},[i("button",{staticClass:"btn btn-sm btn-dark ml-3",attrs:{type:"button"},on:{click:function(e){t.menuTrigger=!t.menuTrigger}}},[t._m(2)]),i("div",{staticClass:"text-center",staticStyle:{position:"absolute",width:"60%","margin-top":"-33px",left:"20%"}},[i("img",{staticClass:"kinoLightBox img-fluid mx-auto",staticStyle:{height:"30px"},attrs:{src:n("3933")},on:{click:function(e){return t.$router.push("/driver/admin")}}})]),[i("div",{staticStyle:{position:"absolute",right:"10px",top:"5px"}},[i("button",{staticClass:"btn text-white mr-2",staticStyle:{"margin-top":"4px"},attrs:{type:"button"},on:{click:function(e){t.menuKanan=!t.menuKanan}}},[i("div",{staticClass:"tips"},[i("p",{directives:[{name:"show",rawName:"v-show",value:"0"!=t.notifn,expression:"notifn!='0'"}],staticClass:"btn btn-sm rounded-circle btn-danger text-white absolute font-bold",staticStyle:{right:"20px"}},[t._v(t._s(t.notifn))]),i("i",{staticClass:"fas fa-ellipsis-h"}),i("span",{staticClass:"tipstextB"},[t._v("Profile")])])])])]],2)]),i("div",{staticClass:"col-sm-12",staticStyle:{background:"#eceff4","min-height":"100vh",padding:"0",margin:"0"},on:{click:function(e){t.menuTrigger=!1,t.menuKanan=!1}}},[i("br"),i("br"),i("div",{staticClass:"sm:mt-2 sm:p-2"},[i("router-view",{directives:[{name:"myimage",rawName:"v-myimage"},{name:"reload",rawName:"v-reload"}],staticStyle:{"z-index":"10"}})],1)])])])]),i("transition",{attrs:{tag:"div","enter-active-class":"animated fadeInRight","leave-active-class":"animated fadeOutRight",mode:"in-out"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.menuKanan,expression:"menuKanan"}],staticClass:" border-1 border-grey shadow-md rounded-bl-lg",staticStyle:{position:"fixed","z-index":"11",right:"0",top:"0",width:"210px",height:"100vh","box-shadow":"1px 1px 2px 1.5px black"}},[i("br"),i("br"),i("br"),i("p",{staticClass:"p-2 border-2 text-sm font-times",on:{click:function(e){t.$router.push("/driver/profile"),t.menuKanan=!t.menuKanan}}},[i("span",{staticClass:"typcn typcn-user"}),t._v(" Profile ")]),i("p",{staticClass:"p-2 border-2 text-sm font-times text-red",on:{click:function(e){t.logout,t.menuKanan=!t.menuKanan}}},[i("span",{staticClass:"typcn typcn-eject"}),t._v(" Logout ")]),i("hr",{staticClass:"style13",staticStyle:{margin:"0"}}),i("p",{staticClass:"text-center font-times"},[t._v("Notifikasi!")]),i("hr",{staticClass:"style13",staticStyle:{margin:"0"}}),i("div",{staticStyle:{"overflow-y":"scroll",height:"400px"}})])])],1)])},s=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{position:"relative"}},[i("img",{staticStyle:{position:"absolute",left:"50%",transform:"translateX(-50%) translateY(0)"},attrs:{src:n("3933")}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sm:p-3 text-center",staticStyle:{"border-bottom":"1px solid gray"}},[n("br"),n("br"),n("br")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tips"},[n("i",{staticClass:"fas fa-th",staticStyle:{color:"white","margin-left":"50px"}}),n("span",{staticClass:"tipstextB"},[t._v("Slide")])])}],o=(n("4160"),n("159b"),n("bc3a"),n("8aa5")),r=n.n(o),a=(n("6821"),r.a.firestore(),n("03a0")),c={components:{},data:function(){return{notifs:[],classMenu:"col-sm-12",notifn:0,count:0,bgleft1:"#343A40",bgleft2:"#232e30",bgleft3:"#343A40",bgrighttop:"#1A3B4E",test:1,menuTrigger:!1,menuKanan:!1,bearer:"",busy:!1}},beforeMount:function(){this.$store.state.users},watch:{menuTrigger:function(){var t=this;console.log(this.menuTrigger),this.menuTrigger?setTimeout((function(){t.classMenu="col-sm-10"}),300):this.classMenu="col-sm-12"}},methods:{exits:function(){document.addEventListener("deviceready",(function(t){navigator.app.exitApp()}),!0)},distanceToNow:function(t){return this.$datefns.distanceInWordsToNow(new Date(t),{locale:a,includeSeconds:!0})},logout:function(){this.$store.dispatch("logout"),localStorage.removeItem("login"),this.$router.push("/")},muncul:function(t){t.target.nextElementSibling.classList.toggle("isaktif")},onSwipeRight:function(){this.menuTrigger=!0},scrollOnLoad:function(){var t=this;this.$el.querySelectorAll("a.scrollactive-item").forEach((function(e){e.hash==t.$route.hash&&e.click()}))},version:function(){null==localStorage.getItem("version")&&localStorage.setItem("version",1)},newStuff:function(){if(localStorage.getItem("newstuff")!=this.$store.state.version){var t=indexedDB.deleteDatabase(this.$store.state.indexdb);t.onsuccess=function(){console.log("Deleted database successfully")},t.onerror=function(){console.log("Couldn't delete database")},t.onblocked=function(){console.log("Couldn't delete database due to the operation being blocked")},localStorage.clear(),localStorage.setItem("newstuff",this.$store.state.version),alert("new version")}},mediaQueries:function(){this.$store.commit("mediaQueries",window.innerWidth<=576?"sm":window.innerWidth<=768?"md":window.innerWidth<=992?"lg":"xl")},init:function(){this.scrollOnLoad(),this.version()}},mounted:function(){var t=this,e=this;this.mediaQueries(),this.$nextTick((function(){window.addEventListener("resize",(function(){e.mediaQueries()}))})),this.init(),setTimeout((function(){t.$store.commit("nossr",!0)}),100),this.$nuxt.$on("busy",(function(e){t.busy=e}))}},l=c,u=(n("b233"),n("2877")),d=Object(u["a"])(l,i,s,!1,null,"902a471a",null);e["default"]=d.exports},6821:function(t,e,n){(function(){var e=n("00d8"),i=n("9a63").utf8,s=n("044b"),o=n("9a63").bin,r=function(t,n){t.constructor==String?t=n&&"binary"===n.encoding?o.stringToBytes(t):i.stringToBytes(t):s(t)?t=Array.prototype.slice.call(t,0):Array.isArray(t)||(t=t.toString());for(var a=e.bytesToWords(t),c=8*t.length,l=1732584193,u=-271733879,d=-1732584194,f=271733878,g=0;g<a.length;g++)a[g]=16711935&(a[g]<<8|a[g]>>>24)|4278255360&(a[g]<<24|a[g]>>>8);a[c>>>5]|=128<<c%32,a[14+(c+64>>>9<<4)]=c;var h=r._ff,p=r._gg,m=r._hh,b=r._ii;for(g=0;g<a.length;g+=16){var v=l,x=u,y=d,w=f;l=h(l,u,d,f,a[g+0],7,-680876936),f=h(f,l,u,d,a[g+1],12,-389564586),d=h(d,f,l,u,a[g+2],17,606105819),u=h(u,d,f,l,a[g+3],22,-1044525330),l=h(l,u,d,f,a[g+4],7,-176418897),f=h(f,l,u,d,a[g+5],12,1200080426),d=h(d,f,l,u,a[g+6],17,-1473231341),u=h(u,d,f,l,a[g+7],22,-45705983),l=h(l,u,d,f,a[g+8],7,1770035416),f=h(f,l,u,d,a[g+9],12,-1958414417),d=h(d,f,l,u,a[g+10],17,-42063),u=h(u,d,f,l,a[g+11],22,-1990404162),l=h(l,u,d,f,a[g+12],7,1804603682),f=h(f,l,u,d,a[g+13],12,-40341101),d=h(d,f,l,u,a[g+14],17,-1502002290),u=h(u,d,f,l,a[g+15],22,1236535329),l=p(l,u,d,f,a[g+1],5,-165796510),f=p(f,l,u,d,a[g+6],9,-1069501632),d=p(d,f,l,u,a[g+11],14,643717713),u=p(u,d,f,l,a[g+0],20,-373897302),l=p(l,u,d,f,a[g+5],5,-701558691),f=p(f,l,u,d,a[g+10],9,38016083),d=p(d,f,l,u,a[g+15],14,-660478335),u=p(u,d,f,l,a[g+4],20,-405537848),l=p(l,u,d,f,a[g+9],5,568446438),f=p(f,l,u,d,a[g+14],9,-1019803690),d=p(d,f,l,u,a[g+3],14,-187363961),u=p(u,d,f,l,a[g+8],20,1163531501),l=p(l,u,d,f,a[g+13],5,-1444681467),f=p(f,l,u,d,a[g+2],9,-51403784),d=p(d,f,l,u,a[g+7],14,1735328473),u=p(u,d,f,l,a[g+12],20,-1926607734),l=m(l,u,d,f,a[g+5],4,-378558),f=m(f,l,u,d,a[g+8],11,-2022574463),d=m(d,f,l,u,a[g+11],16,1839030562),u=m(u,d,f,l,a[g+14],23,-35309556),l=m(l,u,d,f,a[g+1],4,-1530992060),f=m(f,l,u,d,a[g+4],11,1272893353),d=m(d,f,l,u,a[g+7],16,-155497632),u=m(u,d,f,l,a[g+10],23,-1094730640),l=m(l,u,d,f,a[g+13],4,681279174),f=m(f,l,u,d,a[g+0],11,-358537222),d=m(d,f,l,u,a[g+3],16,-722521979),u=m(u,d,f,l,a[g+6],23,76029189),l=m(l,u,d,f,a[g+9],4,-640364487),f=m(f,l,u,d,a[g+12],11,-421815835),d=m(d,f,l,u,a[g+15],16,530742520),u=m(u,d,f,l,a[g+2],23,-995338651),l=b(l,u,d,f,a[g+0],6,-198630844),f=b(f,l,u,d,a[g+7],10,1126891415),d=b(d,f,l,u,a[g+14],15,-1416354905),u=b(u,d,f,l,a[g+5],21,-57434055),l=b(l,u,d,f,a[g+12],6,1700485571),f=b(f,l,u,d,a[g+3],10,-1894986606),d=b(d,f,l,u,a[g+10],15,-1051523),u=b(u,d,f,l,a[g+1],21,-2054922799),l=b(l,u,d,f,a[g+8],6,1873313359),f=b(f,l,u,d,a[g+15],10,-30611744),d=b(d,f,l,u,a[g+6],15,-1560198380),u=b(u,d,f,l,a[g+13],21,1309151649),l=b(l,u,d,f,a[g+4],6,-145523070),f=b(f,l,u,d,a[g+11],10,-1120210379),d=b(d,f,l,u,a[g+2],15,718787259),u=b(u,d,f,l,a[g+9],21,-343485551),l=l+v>>>0,u=u+x>>>0,d=d+y>>>0,f=f+w>>>0}return e.endian([l,u,d,f])};r._ff=function(t,e,n,i,s,o,r){var a=t+(e&n|~e&i)+(s>>>0)+r;return(a<<o|a>>>32-o)+e},r._gg=function(t,e,n,i,s,o,r){var a=t+(e&i|n&~i)+(s>>>0)+r;return(a<<o|a>>>32-o)+e},r._hh=function(t,e,n,i,s,o,r){var a=t+(e^n^i)+(s>>>0)+r;return(a<<o|a>>>32-o)+e},r._ii=function(t,e,n,i,s,o,r){var a=t+(n^(e|~i))+(s>>>0)+r;return(a<<o|a>>>32-o)+e},r._blocksize=16,r._digestsize=16,t.exports=function(t,n){if(void 0===t||null===t)throw new Error("Illegal argument "+t);var i=e.wordsToBytes(r(t,n));return n&&n.asBytes?i:n&&n.asString?o.bytesToString(i):e.bytesToHex(i)}})()},"9a63":function(t,e){var n={utf8:{stringToBytes:function(t){return n.bin.stringToBytes(unescape(encodeURIComponent(t)))},bytesToString:function(t){return decodeURIComponent(escape(n.bin.bytesToString(t)))}},bin:{stringToBytes:function(t){for(var e=[],n=0;n<t.length;n++)e.push(255&t.charCodeAt(n));return e},bytesToString:function(t){for(var e=[],n=0;n<t.length;n++)e.push(String.fromCharCode(t[n]));return e.join("")}}};t.exports=n},b233:function(t,e,n){"use strict";var i=n("29ff"),s=n.n(i);s.a}}]);
//# sourceMappingURL=chunk-9e8199ce.051d99b2.js.map