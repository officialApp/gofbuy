(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page-profile"],{"4b97":function(t,e,a){"use strict";a("b64b"),a("96cf");var n=a("1da1");function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function s(t,e,a){return e&&o(t.prototype,e),a&&o(t,a),t}var c=a("bc3a"),i=a.n(c),l=!1,u="",p="",d=(localStorage.getItem("auth._token.local"),0),f=l?"http://localhost:8080/auto/api2.php":"http://localhost:8080/auto/api.php",m=function(){function t(){r(this,t)}return s(t,[{key:"collection",value:function(t){return u=t,this}},{key:"doc",value:function(t){return t&&(p=t),this}},{key:"set",value:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e){var a,n,r=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=function(t){return Object.keys(t)},a=new FormData,l&&a.append("header",localStorage.getItem("auth._token.local")),a.append("table",u),a.append("data",JSON.stringify(e)),a.append("type","set"),a.append("key",n(e)),t.next=9,i.a.post(f,a).then((function(t){return console.log(t),t.data})).catch((function(t){console.log("table not found"),d++,d<2&&r.set(e)}));case 9:return t.abrupt("return",t.sent);case 10:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"get",value:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=new FormData,a.append("table",u),l&&a.append("header",localStorage.getItem("auth._token.local")),a.append("select",e),""!=p.length&&a.append("id","".concat(p)),a.append("type","get"),t.next=8,i.a.post(f,a).then((function(t){return console.log(t),t.data})).catch((function(t){console.log("table not found")}));case 8:return t.abrupt("return",t.sent);case 9:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"delete",value:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=new FormData,l&&a.append("header",localStorage.getItem("auth._token.local")),a.append("table",u),a.append("select",e),""!=p.length&&a.append("id","".concat(p)),a.append("type","delete"),t.next=8,i.a.post(f,a).then((function(t){return console.log(t),t.data})).catch((function(t){console.log("Data tidak ditemukan")}));case 8:return t.abrupt("return",t.sent);case 9:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"select",value:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=new FormData,l&&a.append("header",localStorage.getItem("auth._token.local")),a.append("table",u),a.append("select",e),""!=p.length&&a.append("id","".concat(p)),a.append("type","select"),t.next=8,i.a.post(f,a).then((function(t){return console.log(t),t.data})).catch((function(t){console.log("table not found")}));case 8:return t.abrupt("return",t.sent);case 9:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()}]),t}();e["a"]=m},"996f":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 p-4 bg-white"},[a("div",{staticClass:"p-2 float-left",on:{click:function(e){return t.$router.push("/")}}},[t._m(0)]),a("div",{staticStyle:{height:"200px"}}),a("p",{staticClass:"text-center p-2 font-bold font-times font-italic"},[t._v("PROFILE")]),a("hr",{staticClass:"style13"}),t._m(1),a("div",{staticClass:"p-3 shadow-lg rounded-lg"},[a("div",{staticClass:"sm-form "},[a("label",{attrs:{for:"nama"}},[t._v("Nama")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.nama,expression:"vdata.nama"}],staticClass:"form-control form-control-sm",attrs:{type:"text",id:"nama",name:"nama",placeholder:"nama"},domProps:{value:t.vdata.nama},on:{input:function(e){e.target.composing||t.$set(t.vdata,"nama",e.target.value)}}})]),a("div",{staticClass:"sm-form "},[a("label",{attrs:{for:"hp"}},[t._v("No HP/WA : ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.hp,expression:"vdata.hp"}],staticClass:"form-control form-control-sm",attrs:{type:"number",id:"hp",name:"hp",placeholder:"hp"},domProps:{value:t.vdata.hp},on:{input:function(e){e.target.composing||t.$set(t.vdata,"hp",e.target.value)}}})]),a("hr",{staticClass:"style13"}),a("div",{staticClass:"p-3"},[a("button",{staticClass:"btn btn-sm btn-dark  ",attrs:{type:"button"},on:{click:t.simpan}},[t._v("Edit "),a("span",{staticClass:"typcn typcn-edit"})]),a("br"),a("p",{staticClass:"font-bold p-2 "},[t._v("Data ini dibutuhkan untuk memudahkan dalam pengiriman barang !")])])])])])])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"shadow-lg p-2 hover:bg-red-400"},[a("span",{staticClass:"typcn typcn-arrow-left"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text-center "},[a("span",{staticClass:"p-3 shadow-lg"},[a("span",{staticClass:"typcn typcn-user"})])])}],o=a("5530"),s=(a("bc3a"),a("8aa5")),c=a.n(s),i=a("4b97"),l=c.a.firestore(),u=(new i["a"],{data:function(){return{vdata:{},datanya:{}}},methods:{simpan:function(){var t=this;l.collection("users").doc(this.$store.state.users.uid).set(this.vdata,{merge:!0}).then((function(e){alert("Berhasil di simpan!"),l.collection("users").doc(t.$store.state.users.uid).get().then((function(e){t.$store.commit("changeUsers",Object(o["a"])({},e.data()))})),t.$router.push("/")}))}},layout:"admin",mounted:function(){var t=this;l.collection("users").doc(this.$store.state.users.uid).onSnapshot((function(e){t.datanya=e.data(),t.vdata=e.data(),t.$forceUpdate()}))},metaInfo:function(){return{title:"Tentang TA_Maliki / Taufik Akbar Maliki",meta:[{hid:"description",name:"description",content:"Tentang Taufik akbar maliki / TA_Maliki"},{property:"og:title",content:"Tentang Taufik akbar maliki / TA_Maliki"},{property:"og:site_name",content:"TA_Maliki"},{property:"og:type",content:"website"},{property:"og:url",content:"".concat(this.$store.state.url)},{property:"og:image",content:"".concat(this.$store.state.url,"/Kino.jpg")},{property:"og:description",content:"documentasi ya"},{name:"keywords",content:"blog,portofolio,freelance"},{name:"robots",content:"index,follow"}]}}}),p=u,d=a("2877"),f=Object(d["a"])(p,n,r,!1,null,null,null);e["default"]=f.exports}}]);
//# sourceMappingURL=page-profile.cc6e725b.js.map