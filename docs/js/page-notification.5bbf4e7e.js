(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page-notification"],{"3acd":function(t,n,i){"use strict";i.r(n);var e=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",[i("div",{staticClass:"bg-blue-300"},[i("div",{staticClass:"p-2"},[t._m(0),i("button",{staticClass:"btn btn-sm btn-style9",staticStyle:{"font-size":"12px"},attrs:{type:"button"},on:{click:function(n){return t.$router.go(-1)}}},[i("span",{staticClass:"typcn typcn-arrow-left"}),t._v(" Back ")])])]),i("div",[i("hr",{staticClass:"style13",staticStyle:{margin:"0",padding:"0"}}),t._l(t.notification,(function(n,e){return i("div",{key:e+"notif",staticClass:"p-2 btn-style2  btn-block",class:{"text-red-400":0==n.dibaca}},[i("button",{staticClass:"btn btn-sm btn-style9 float-right   ",attrs:{type:"button"},on:{click:function(i){return t.del(n.id)}}},[i("span",{staticClass:"typcn typcn-delete"})]),i("p",{on:{click:function(i){return t.dibaca(n)}}},[t._v(" "+t._s(n.title)+" ")]),i("p",{staticClass:"text-sm",on:{click:function(i){return t.dibaca(n)}}},[t._v(" "+t._s(n.body)+" ")]),i("span",{staticClass:"text-xs"},[t._v(" "+t._s(t.distanceToNow(n.createdAt.toDate())+" yang lalu")+" ")])])}))],2)])},a=[function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("p",{staticClass:"p-2 text-lg font-bold  float-right"},[t._v(" Notification "),i("span",{staticClass:"typcn typcn-bell"})])}],s=(i("4de4"),i("d81d"),i("9911"),i("5530")),o=(i("bc3a"),i("8aa5")),c=i.n(o),l=i("03a0"),r=c.a.firestore(),d={layout:"lembur",data:function(){return{notification:[],notification2:[]}},methods:{dibaca:function(t){var n=this;r.collection("users/".concat(this.$store.state.users.uid,"/notificationdriver")).doc(t.id).set({dibaca:!0},{merge:!0}).then((function(i){console.log("dibaca"),console.log(t.link),n.$router.push(t.link)}))},del:function(t){r.collection("users/".concat(this.$store.state.users.uid,"/notificationdriver")).doc(t).delete().then((function(t){console.log()}))},distanceToNow:function(t){return this.$datefns.distanceInWordsToNow(new Date(t),{locale:l,includeSeconds:!0})}},computed:{distance:function(){return this.$datefns.distanceInWords(new Date("2018-12-25T03:21:12.941Z"),new Date,{locale:l,includeSeconds:!0})},format:function(){return this.$datefns.format(new Date(2014,6,2),"[di tanggal] dddd MMMM YYYY",{locale:l})}},mounted:function(){var t=this;r.collection("users").doc(this.$store.state.users.uid).collection("notificationdriver").orderBy("createdAt","desc").onSnapshot((function(n){var i=n.docs.map((function(t){return Object(s["a"])({id:t.id},t.data())})),e=i.filter((function(t){if(!t.dibaca)return t}));t.notification=i,t.notification2=e}))}},u=d,f=i("2877"),b=Object(f["a"])(u,e,a,!1,null,null,null);n["default"]=b.exports}}]);
//# sourceMappingURL=page-notification.5bbf4e7e.js.map