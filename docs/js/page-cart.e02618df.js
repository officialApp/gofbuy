(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page-cart"],{"70b3":function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAOVBMVEXz9Pa5vsq2u8jN0dnV2N/o6u7w8fTi5OnFydO+ws3f4ee6v8vY2+H29/jy9Pbu7/LJztbCx9HR1ty/NMEIAAACq0lEQVR42u3cYXaqMBBA4cyEgEAi4P4X+34oLSra9IA9E979FtDj7SAJUOocAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAqrQ3Y311iH5fsaktBTYn3d/Y2JljlM/orAR2IsdOHNqPFbY2TqKdXj/Orl/C24/sLHwV0ygiIv2466n0+kNlNFHYiohotfNyWKmIyKm2U9jsffqyU+gopLDMwiGE+sCFjRdV1SkOxyw8X2Rer6cNe2e7hfVJv3ddGg9YeNHlxrIPhyvs9GHvXB+sMJ2eLoDSsQrDwwhF/cFm+HiQikxvP+Prk63RwhSfCtt3i6J/fbK1Wlj9qvCiIjEd9yg9e32zZFotHPLPNOd55VyfotnVYsq9XVZ7fbvxsbviZx6kZ7+Y9toU7e7a/P1x+mI5qP3doRyLuraYlokxY4LrUzRcOPj56knaxmVMcP1XYfkKODW+VVWZqiHlTXBtisbvYgwhhKF22RNcmWLBd6JWJ/g8xXIL64u+eg5zl1huodfXj5riAQrPF333NG0xxVILvb5/YBhLKxzC8+XSD4mpqMLQt2F59hj158e+saDCFFrRacj9Dj5MsYTC0IuIfk9xzAoU7QopTKG93dq/7d3yJiiiVSqjMPTzJ25Dcu6cOUERjUUUzhP8mmLuBIsp/Jrg9Soq+OzAMgqXE7wm/uKvhIoovJ/gLxVQ+DTBwxVummABhRsnWEDhxgmaL9w8QfOFmydovTDlb11KLawopJBCCimk8E8Kbd+nGcJ2Q9F39fNRSKH5wtSZeyvI7/sm8O053MnCCOc/C/7Iu2vexIuyn3z/sLEQ6Orp4O+QOtf0HwrsGyOFrhP9QJ+qmUDnwtju/jp+PwZT/1chdNW+YuMAAAAAAAAAAAAAAAAAAAAAAAAAAACA/9s/LTI30XlcBHoAAAAASUVORK5CYII="},"7cb1":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("div"),s("div",{staticClass:"row"},[t.$store.state.cart.length>0?s("div",{staticClass:"col-12"},[s("div",{staticClass:"p-2 shadow-lg  bg-white"},[t._m(0),s("hr",{staticClass:"style13 mt-2 mb-2"}),s("br"),s("br"),s("br"),t._l(t.$store.state.cart,(function(a,n){return a.total>0?s("div",{key:n+"hello",staticClass:"shadow-lg p-3 border-b-2 border-blue-700 rounded-lg",staticStyle:{background:"linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(247,247,251,1) 35%, rgba(195,227,233,1) 100%)"}},[s("button",{staticClass:"btn btn-sm btn-success  float-right",staticStyle:{width:"30px"},attrs:{type:"button"},on:{click:function(t){a.total<a.jumlah&&a.total++}}},[t._v("+")]),s("button",{staticClass:"btn btn-sm btn-success float-right",staticStyle:{width:"30px"},attrs:{type:"button"},on:{click:function(t){a.total>0&&a.total--}}},[t._v("-")]),s("button",{staticClass:"float-right btn btn-sm btn-danger",staticStyle:{width:"30px"},attrs:{type:"button"},on:{click:function(a){return t.$store.state.cart.splice(n,1)}}},[s("span",{staticClass:"typcn typcn-delete"})]),s("img",{directives:[{name:"viewer",rawName:"v-viewer"}],staticClass:"img-thumbnail float-left mr-2",staticStyle:{height:"50px",width:"50px"},attrs:{src:a.gambar.length>10?a.gambar:e("70b3"),alt:""}}),s("p",{staticClass:"pl-2 text-sm font-bold"},[t._v(t._s(a.nama_makanan))]),s("p",{staticClass:"pl-2 text-sm font-bold"},[t._v("Rp."+t._s(a.harga))]),s("p",{staticClass:"pl-2 text-sm font-bold "},[t._v("Total : "+t._s(a.total))])]):t._e()})),s("button",{directives:[{name:"show",rawName:"v-show",value:"0"!=t.totalHarga,expression:"totalHarga!='0'"}],staticClass:"btn btn-sm btn-style9 float-right mr-4 mt-2 font-times",attrs:{type:"button"},on:{click:function(a){return t.kirim()}}},[t._v("ORDER !")]),s("p",{staticClass:"p-3 font-bold"},[t._v("TOTAL HARGA : "+t._s(t.totalHarga))]),s("br"),s("div",{staticStyle:{width:"100%",height:"300px"}},[s("GeolocationSelector",{key:t.key,on:{position:t.test},model:{value:t.location,callback:function(a){t.location=a},expression:"location"}}),s("p",{staticClass:"font-times font-bold text-sm"},[t._v("Klik 2x pada peta untuk menandai lokasi tujuan pengiriman !")])],1),s("br"),s("hr",{staticClass:"style9 mt-2 mb-2"}),t._m(1)],2)]):s("div",[s("br"),s("br"),s("br"),s("br"),s("p",{staticClass:"text-center p-4 text-2xl font-bold"},[t._v(" BELUM ADA BARANG DI KERANJANG ! "),s("br"),s("span",{staticClass:"underline text-blue-700 font-bold",on:{click:function(a){return t.$router.push("/food")}}},[t._v("Cek Barang")])])])])])},n=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("p",{staticClass:"text-center text-2xl font-bold"},[t._v("CART "),e("span",{staticClass:"typcn typcn-shopping-cart"})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"pl-3 pb-2"},[e("p",{staticClass:"font-times p-2 text-xl font-bold"},[t._v("Cara pembayaran : ")]),e("p",[t._v("1. COD / Cash On Delivery(Bayar ditempat)")]),e("p",[t._v("2. Transfer OVO "),e("span",{staticClass:"font-bold"},[t._v("085754515190")])]),e("p",[t._v("3. Transfer Bank BRI a.n "),e("br"),t._v(' "Yayasan Sapta Bangun Persada" '),e("br"),t._v(" No Rekening "),e("span",{staticClass:"font-bold"},[t._v("062801000290306")])])])}],o=(e("4de4"),e("4160"),e("d81d"),e("13d5"),e("159b"),e("5530")),i=e("bc3a"),r=e.n(i),l=e("8aa5"),c=e.n(l),u=e("ccb6"),d=e("4b97"),A=c.a.firestore(),h=(new d["a"],{components:{GeolocationSelector:u["a"]},data:function(){return{dialog:!1,location:{},key:1,datanya:{},lat:"",lng:"",foods:[{img:"@/static/gambar1.jpg"}]}},computed:{totalHarga:function(){var t=this.$store.state.cart;return t=t.reduce((function(t,a){return t=parseInt(t)+parseInt(a.harga)*parseInt(a.total),t}),0),console.log(t),t}},methods:{test:function(t){console.log(t),this.lat=t.lat,this.lng=t.lng},cek:function(){console.log(this.location)},reset:function(){this.key+=1,this.location={}},getData:function(){var t=this;A.collection("users/".concat(this.$store.state.users.uid,"/keranjang")).onSnapshot((function(a){var e=a.docs.map((function(t){return Object(o["a"])({id:t.id},t.data())}));console.log(e),t.datanya=e[0]}))},kirim:function(){var t=this;confirm("Apakah sudah yakin dengan orderan anda ?")&&(""!=this.lat?(this.$nuxt.$emit("busy",!0),this.$store.state.cart=this.$store.state.cart.filter((function(t){if(t.total>0)return t.tanggal=new Date,t})),this.$store.state.cart.forEach((function(t){A.collection("food").doc(t.id).get().then((function(a){var e=a.data();e.jumlah=e.jumlah-t.total,e.tanggal=new Date,console.log(e),A.collection("food").doc(t.id).set(e,{merge:!0}).then((function(a){console.log(t.nama_makanan+" Updated")}))}))})),this.$store.state.beli={keranjang:this.$store.state.cart,selesai:!1,pembeli:this.$store.state.users,lat:this.lat,lng:this.lng,tanggal:new Date},A.collection("users/".concat(this.$store.state.users.uid,"/keranjang")).doc().set({keranjang:this.$store.state.cart,selesai:!1,pembeli:this.$store.state.users,lat:this.lat,lng:this.lng,tanggal:new Date},{merge:!0}).then((function(a){A.collection("notif").doc("BaOUtzlh9mRtoe9dSv2f").get().then((function(a){setTimeout((function(){t.$router.push("/load")}),3e3),r.a.post("https://fcm.googleapis.com/fcm/send",{data:{title:"GOFBUY NOTIFIKASI",text:"isi notifiactiaon",body:"Ada pembeli baru!",android_channel_id:"alarm",sound:"true",high_priority:"high",ledColor:[255,255,128,16],vibrationPattern:[250,1e3,250,500],show_in_foreground:!0,vibrate:[100,50,200]},priority:"high",to:a.data().fcm},{headers:{Authorization:"key=AAAAm7m-SgM:APA91bFNeEP0bPIoqhRNhH3X7xSaaFc8iG0h2JLm3vu8V3-rbqDA58b2WzRZWRHW0zD1FKoSOgBSwyolU4s-EKLM6sLNU9_kzJ9BCIaE-3ZQWNXfzqYQPBZ8bdFXmDkxTs4WMezHrmP0","Content-Type":"application/json"}}).then((function(a){alert("Berhasil di order!"),t.$nuxt.$emit("busy",!1)}))}))}))):alert("Double klik di peta untuk mendapatkan lokasi anda !"))}},mounted:function(){var t=this,a=c.a.auth().currentUser;A.collection("users").doc(a.uid).get().then((function(a){t.$store.commit("changeUsers",a.data()),localStorage.setItem("users",JSON.stringify(a.data()))})),setTimeout((function(){t.$store.state.users.nama||(alert("Silahkan tambahkan data nama anda sebelum pemesanan !"),t.$router.push("/profile"))}),3e3)},layout:"admin"}),b=h,m=e("2877"),g=Object(m["a"])(b,s,n,!1,null,null,null);a["default"]=g.exports}}]);
//# sourceMappingURL=page-cart.e02618df.js.map