(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page-auth-login"],{3933:function(t,e,a){t.exports=a.p+"img/icon.d9877a3d.png"},d81d:function(t,e,a){"use strict";var i=a("23e7"),s=a("b727").map,o=a("1dde"),r=a("ae40"),n=o("map"),l=r("map");i({target:"Array",proto:!0,forced:!n||!l},{map:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}})},e37c:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{margin:"0",padding:"0",background:"#ECEFF4",width:"100%"}},[i("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320"}},[i("path",{attrs:{fill:"#00cba9","fill-opacity":"1",d:"M0,96L30,112C60,128,120,160,180,197.3C240,235,300,277,360,256C420,235,480,149,540,133.3C600,117,660,171,720,160C780,149,840,75,900,74.7C960,75,1020,149,1080,197.3C1140,245,1200,267,1260,256C1320,245,1380,203,1410,181.3L1440,160L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"}})]),i("br"),i("br"),i("div",{staticClass:"row justify-content-center",staticStyle:{height:"70vh"}},[i("div",{staticClass:"col-md-8 "},[i("div",{staticClass:"card animate__animated animate__backInDown"},[i("div",{staticClass:"card-header text-center"},[i("img",{staticClass:"kinoLightBox img-fluid float-right",staticStyle:{height:"40px"},attrs:{src:a("3933")},on:{click:function(e){return t.$router.push("/auth/loginadmin")}}}),i("p",{staticClass:"text-center ml-5 text-2xl font-bold font-times "},[t._v(" LOGIN ")])]),i("div",{staticClass:"card-body shadow-lg rounded-lg"},[t.error?i("div",{staticClass:"alert alert-danger"},[t._v(t._s(t.error))]):t._e(),i("form",{staticClass:"font-times",attrs:{action:"#"},on:{submit:function(e){return e.preventDefault(),t.loginAuth(e)}}},[i("p",{staticClass:"text-justify p-3 text-center font-bold"},[t._v(" SELAMAT DATANG DI GOFBUY ! SILAHKAN LOGIN ")]),i("br"),t.cordova?i("div",[i("div",{staticClass:"col-md-12",on:{click:t.cordovaGoogleAuth}},[t._m(0)])]):i("div",[i("div",{staticClass:"col-md-12",on:{click:t.googleAuth}},[t._m(1)])])]),i("br"),i("hr",{staticClass:"style13 mt-2"}),i("br")])])])]),i("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320"}},[i("path",{attrs:{fill:"#00cba9","fill-opacity":"1",d:"M0,96L30,112C60,128,120,160,180,197.3C240,235,300,277,360,256C420,235,480,149,540,133.3C600,117,660,171,720,160C780,149,840,75,900,74.7C960,75,1020,149,1080,197.3C1140,245,1200,267,1260,256C1320,245,1380,203,1410,181.3L1440,160L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"}})])])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"btn btn-lg btn-outline-secondary text-sm btn-block",attrs:{href:"#"}},[a("img",{staticClass:"float-left pt-1",attrs:{src:"https://img.icons8.com/color/16/000000/google-logo.png"}}),t._v("Login Dengan Google "),a("span",{staticClass:"typcn typcn-social-google-plus text-red-500"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"btn btn-lg btn-outline-secondary text-sm btn-block",attrs:{href:"#"}},[a("img",{staticClass:"float-left pt-1",attrs:{src:"https://img.icons8.com/color/16/000000/google-logo.png"}}),t._v("Login Dengan Google ")])}],o=(a("d81d"),a("5530")),r=a("8aa5"),n=a.n(r),l=n.a.firestore(),c={data:function(){return{datanya:[],vdata:{email:"",password:""},Oauth:!1,cordova:!1,error:null}},methods:{getData:function(){var t=this;l.collection("app").get().then((function(e){var a=e.docs.map((function(t){return Object(o["a"])({id:t.id},t.data())}));t.datanya=a,t.show=!0,console.log(a)}))},loginAuth:function(){var t=this;n.a.auth().signInWithEmailAndPassword(this.vdata.email+"@gmail.com",this.vdata.password).then((function(e){var a={uid:e.user.uid,displayName:e.user.displayName,email:e.user.email,emailVerified:e.user.emailVerified};t.$store.commit("changeUsers",a),localStorage.setItem("users",JSON.stringify(a)),t.$router.push("/")})).catch((function(e){t.error=e.message}))},googleAuth:function(){var t=this;this.Oauth=!0;var e=new n.a.auth.GoogleAuthProvider;n.a.auth().signInWithPopup(e).then((function(e){var a={uid:e.user.uid,displayName:e.user.displayName,email:e.user.email,emailVerified:e.user.emailVerified,emailnotif:e.user.email,changepassword:"true",unit:{nama_unit:"BELUM ADA"}};l.collection("users").doc(a.uid).set(a,{merge:!0}).then((function(e){t.$store.commit("changeUsers",a),localStorage.setItem("users",JSON.stringify(a)),console.log("user",a)}))})).catch((function(t){alert("Oops. "+t.message)}))},facebookAuth:function(){var t=this;this.Oauth=!0;var e=new n.a.auth.FacebookAuthProvider;n.a.auth().signInWithPopup(e).then((function(e){var a={uid:e.user.uid,displayName:e.user.displayName,email:e.user.email,emailVerified:e.user.emailVerified};t.$store.commit("changeUsers",a),localStorage.setItem("users",JSON.stringify(a)),t.$router.push("/")})).catch((function(t){alert("Oops. "+t.message)}))},cordovaGoogleAuth:function(){this.Oauth=!0;var t=this;window.plugins.googleplus.login({webClientId:"668836186627-g9bing1uplu56rap44dmm8tlopvam44f.apps.googleusercontent.com",offline:!0},(function(e){n.a.auth().signInWithCredential(n.a.auth.GoogleAuthProvider.credential(e.idToken)).then((function(e){var a={uid:e.user.uid,displayName:e.user.displayName,email:e.user.email,emailVerified:e.user.emailVerified};t.$store.commit("changeUsers",a),localStorage.setItem("users",JSON.stringify(a)),l.collection("users").doc(e.user.uid).set(a,{merge:!0}),t.$router.push("/")})).catch((function(t){alert("Oops. "+t.message)}))}),(function(t){alert("error: "+t)}))}},mounted:function(){var t=!1;t&&this.$router.push("/auth/loginadmin"),this.getData(),this.Oauth||this.$store.dispatch("ceklogin",{true:"/",false:!0});var e=this;document.addEventListener("deviceready",(function(){e.cordova=!0}))}},u=c,d=a("2877"),g=Object(d["a"])(u,i,s,!1,null,null,null);e["default"]=g.exports}}]);
//# sourceMappingURL=page-auth-login.b39d2a1a.js.map