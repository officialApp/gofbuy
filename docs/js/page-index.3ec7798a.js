(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page-index"],{"3de8":function(t,e,a){t.exports=a.p+"img/icon.4ab9b97d.svg"},"4b97":function(t,e,a){"use strict";a("b64b"),a("96cf");var n=a("1da1");function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function s(t,e,a){return e&&o(t.prototype,e),a&&o(t,a),t}var c=a("bc3a"),i=a.n(c),u=!1,l="",p="",d=(localStorage.getItem("auth._token.local"),0),h=u?"http://localhost:8080/auto/api2.php":"http://localhost:8080/auto/api.php",f=function(){function t(){r(this,t)}return s(t,[{key:"collection",value:function(t){return l=t,this}},{key:"doc",value:function(t){return t&&(p=t),this}},{key:"set",value:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e){var a,n,r=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=function(t){return Object.keys(t)},a=new FormData,u&&a.append("header",localStorage.getItem("auth._token.local")),a.append("table",l),a.append("data",JSON.stringify(e)),a.append("type","set"),a.append("key",n(e)),t.next=9,i.a.post(h,a).then((function(t){return console.log(t),t.data})).catch((function(t){console.log("table not found"),d++,d<2&&r.set(e)}));case 9:return t.abrupt("return",t.sent);case 10:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"get",value:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=new FormData,a.append("table",l),u&&a.append("header",localStorage.getItem("auth._token.local")),a.append("select",e),""!=p.length&&a.append("id","".concat(p)),a.append("type","get"),t.next=8,i.a.post(h,a).then((function(t){return console.log(t),t.data})).catch((function(t){console.log("table not found")}));case 8:return t.abrupt("return",t.sent);case 9:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"delete",value:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=new FormData,u&&a.append("header",localStorage.getItem("auth._token.local")),a.append("table",l),a.append("select",e),""!=p.length&&a.append("id","".concat(p)),a.append("type","delete"),t.next=8,i.a.post(h,a).then((function(t){return console.log(t),t.data})).catch((function(t){console.log("Data tidak ditemukan")}));case 8:return t.abrupt("return",t.sent);case 9:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"select",value:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=new FormData,u&&a.append("header",localStorage.getItem("auth._token.local")),a.append("table",l),a.append("select",e),""!=p.length&&a.append("id","".concat(p)),a.append("type","select"),t.next=8,i.a.post(h,a).then((function(t){return console.log(t),t.data})).catch((function(t){console.log("table not found")}));case 8:return t.abrupt("return",t.sent);case 9:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()}]),t}();e["a"]=f},9261:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticStyle:{height:"200px"}}),n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[n("div",{staticClass:"p-4 shadow-lg rounded-lg bg-white"},[n("p",{staticClass:"font-times font-bold text-xl text-center"},[t._v("GOFBUY by Hatani")]),n("hr",{staticClass:"style13 mt-2 mb-2"}),n("p",{staticClass:"text-justify p-2",domProps:{innerHTML:t._s(t.datanya[0].detail)}})]),n("div",{staticClass:"p-4 shadow-lg rounded-lg bg-white mt-2"},[n("p",{staticClass:"font-times font-bold text-xl text-center"},[t._v("MENU !")]),n("hr",{staticClass:"style13 mt-2 mb-2"}),n("div",{staticClass:"row"},[n("div",{staticClass:"col-6 text-center"},[n("div",{staticClass:"rounded-lg shadow-lg text-center p-5 hover:bg-red bg-green-300 font-bold",staticStyle:{height:"150px"},on:{click:function(e){return t.$router.push("/food")}}},[n("img",{staticStyle:{height:"50px"},attrs:{src:a("3de8"),alt:""}}),t._v(" ITEMS ")])]),n("div",{staticClass:"col-6 text-center"},[n("div",{staticClass:"rounded-lg shadow-lg text-center p-5 hover:bg-red bg-blue-300 font-bold",staticStyle:{height:"150px"},on:{click:function(e){return t.$router.push("/cart")}}},[n("img",{staticStyle:{height:"50px"},attrs:{src:a("bab9"),alt:""}}),t._v(" CART ")])])])]),t._m(0)])])])])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bg-dark",staticStyle:{height:"30px"}},[a("p",{staticClass:"text-white text-center"},[t._v("GOFBUY")])])}],o=(a("d81d"),a("5530")),s=(a("bc3a"),a("8aa5")),c=a.n(s),i=a("4b97"),u=c.a.firestore(),l=(new i["a"],{data:function(){return{datanya:{},show:!1}},methods:{getData:function(){var t=this;u.collection("app").get().then((function(e){var a=e.docs.map((function(t){return Object(o["a"])({id:t.id},t.data())}));t.datanya=a,t.show=!0,t.$store.state.app=a[0],console.log(a)}))}},mounted:function(){var t=this,e=this;c.a.auth().onAuthStateChanged((function(t){t||e.$router.push("/auth/login")})),this.getData(),setTimeout((function(){if(t.$store.state.users)t.$store.state.users.nama||t.$router.push("/profile");else{var e=c.a.auth().currentUser,a={uid:e.uid,displayName:e.displayName,email:e.email,emailVerified:e.emailVerified,emailnotif:e.email,changepassword:"true"};u.collection("users").doc(a.uid).set(a,{merge:!0}).then((function(e){t.$store.commit("changeUsers",a),localStorage.setItem("users",JSON.stringify(a)),console.log("user",a),t.$store.state.users.nama}))}var n=c.a.auth().currentUser;console.log("auth",n.email),"admin@gmail.com"==n.email&&t.$router.push("/admin")}),2e3)},layout:"admin"}),p=l,d=a("2877"),h=Object(d["a"])(p,n,r,!1,null,null,null);e["default"]=h.exports},bab9:function(t,e,a){t.exports=a.p+"img/cart.94d8ca5c.jpg"}}]);
//# sourceMappingURL=page-index.3ec7798a.js.map