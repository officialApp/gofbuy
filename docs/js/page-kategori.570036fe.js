(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page-kategori"],{"222a":function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("div"),s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("div",{staticClass:"p-2 shadow-lg  bg-white"},[s("p",{staticClass:"text-center text-2xl font-bold"},[t._v("KATEGORI "),s("span",{staticClass:"typcn typcn-th-small-outline"})]),s("hr",{staticClass:"style13 mt-2 mb-2"}),s("div",{staticClass:"row"},[s("div",{staticClass:"col-3"},[t._v("asd")]),s("div",{staticClass:"col-3"},[t._v("dsa")]),s("div",{staticClass:"col-3"},[t._v("asd")]),s("div",{staticClass:"col-3"},[t._v("dsa")])])])])])])}],o=(s("4de4"),s("d81d"),s("13d5"),s("5530")),i=(s("bc3a"),s("8aa5")),r=s.n(i),c=s("ccb6"),l=s("4b97"),d=r.a.firestore(),u=(new l["a"],{components:{GeolocationSelector:c["a"]},data:function(){return{dialog:!1,location:{},key:1,datanya:{},foods:[{img:"@/static/gambar1.jpg"}]}},computed:{totalHarga:function(){var t=this.$store.state.cart;return t=t.reduce((function(t,a){return t=parseInt(t)+parseInt(a.harga)*parseInt(a.total),t}),0),console.log(t),t}},methods:{cek:function(){console.log(this.location)},reset:function(){this.key+=1,this.location={}},getData:function(){var t=this;d.collection("users/".concat(this.$store.state.users.uid,"/keranjang")).onSnapshot((function(a){var s=a.docs.map((function(t){return Object(o["a"])({id:t.id},t.data())}));console.log(s),t.datanya=s[0]}))},kirim:function(){confirm("Apakah sudah yakin dengan orderan anda ?")&&(this.$store.state.cart=this.$store.state.cart.filter((function(t){if(t.total>0)return t.tanggal=new Date,t})),d.collection("users/".concat(this.$store.state.users.uid,"/keranjang")).doc().set({keranjang:this.$store.state.cart},{merge:!0}).then((function(t){alert("Berhasil dimasukkan ke keranjang")})))},order1:function(){this.$store.state.cart.push({id:"1",name:"nasi goreng",harga:"15000"})},order2:function(){this.$store.state.cart.push({id:"2",name:"Pizza",harga:"30000"})},order3:function(){this.$store.state.cart.push({id:"3",name:"Burger",harga:"20000"})},order4:function(){this.$store.state.cart.push({id:"4",name:"Ketupat",harga:"22000"})}},mounted:function(){},layout:"admin"}),h=u,g=s("2877"),f=Object(g["a"])(h,e,n,!1,null,null,null);a["default"]=f.exports}}]);
//# sourceMappingURL=page-kategori.570036fe.js.map