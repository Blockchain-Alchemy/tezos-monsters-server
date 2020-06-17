(this["webpackJsonptezos-monsters"]=this["webpackJsonptezos-monsters"]||[]).push([[0],{100:function(e,t,n){},135:function(e,t){},138:function(e,t,n){},139:function(e,t,n){},140:function(e,t,n){},141:function(e,t,n){},150:function(e,t,n){},151:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"login",(function(){return N})),n.d(a,"refreshAccessToken",(function(){return _})),n.d(a,"signup",(function(){return L})),n.d(a,"getWebConnectCode",(function(){return R})),n.d(a,"authenticate",(function(){return x})),n.d(a,"logout",(function(){return F})),n.d(a,"getTokenAtStartup",(function(){return k}));var r={};n.r(r),n.d(r,"connectSocket",(function(){return D})),n.d(r,"getProfile",(function(){return P})),n.d(r,"updateProfile",(function(){return G})),n.d(r,"addContract",(function(){return K}));var o={};n.r(o),n.d(o,"updateStatus",(function(){return z})),n.d(o,"updateOperationStatusByAction",(function(){return B})),n.d(o,"connectSocket",(function(){return H}));var c=n(0),s=n.n(c),i=n(20),u=n.n(i),l=(n(100),n(22)),p=n(90),f=n(161),d=n(6),E=n(9),h=n.n(E),m=n(13),O=n(25),S=n(26),y="http://localhost:4000",g="http://localhost:4000",v=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:y;e=(e=decodeURI(e)).startsWith("http://")?e:n+e;var a=0;if(void 0!==t)for(var r in t){var o=t[r];o&&(e+=(0===a?"?":"&")+r+"="+o,a++)}return e},b=n(4),I="@@auth/LOGIN_SUCCESS",T="@@auth/TOKEN_RECEIVED",C="@@auth/LOGOUT";function A(e){return!function(e){return!e.auth.refresh||!e.auth.refresh.exp||1e3*e.auth.refresh.exp-(new Date).getTime()<5e3}(e)}var w,U=n(42),j=n.n(U),N=function(e,t){return function(){var n=Object(m.a)(h.a.mark((function n(a){var r;return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:"/auth/login/",r=JSON.stringify({email:e,password:t}),a(x("/auth/login/",r));case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},_=function(e){return Object(O.a)({},S.RSAA,{endpoint:v("/auth/token/refresh/",void 0,g),method:"POST",body:JSON.stringify({refresh:e}),headers:{"Content-Type":"application/json"},credentials:"same-origin",options:{timeout:1e4},types:["@@auth/TOKEN_REQUEST",T,"@@auth/TOKEN_FAILURE"]})},L=function(e,t){return Object(S.createAction)({endpoint:v("/auth/signup/",void 0,g),method:"POST",body:JSON.stringify({email:e,password:t}),headers:{"Content-Type":"application/json"},types:["@@auth/SIGNUP_REQUEST","@@auth/SIGNUP_SUCCESS","@@auth/SIGNUP_FAILURE"]})},R=function e(t){return function(){var t=Object(m.a)(h.a.mark((function t(n){var a;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(a=j()(y+"/webwait",{autoConnect:!0,reconnection:!0,forceNew:!0})).on("connect_error",(function(e){console.log(e)})),a.on("code",(function(e){console.log(e),n({type:"@@auth/GETCODE_SUCCESS",payload:{access:e}})})),a.on("login",function(){var e=Object(m.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(t),void 0!==t.refresh){e.next=4;break}return n({type:"@@auth/LOGIN_FAILURE",payload:t}),e.abrupt("return");case 4:return n({type:I,payload:t}),localStorage.setItem("token",t.refresh.toString()),e.next=8,n(Q());case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),a.on("disconnect",(function(){n(e())})),a.emit("getCode");case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},x=function(e,t){return function(){var n=Object(m.a)(h.a.mark((function n(a){var r;return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a(Object(S.createAction)({endpoint:v(e,void 0,g),method:"POST",body:t,headers:{"Content-Type":"application/json"},types:["@@auth/LOGIN_REQUEST",I,"@@auth/LOGIN_FAILURE"]}));case 2:if(!(r=n.sent)||r.error||!r.payload.refresh||r.type!==I){n.next=7;break}return localStorage.setItem("token",r.payload.refresh.toString()),n.next=7,a(Q());case 7:console.log(r);case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},F=function(){return function(){var e=Object(m.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,localStorage.clear();case 2:t({type:C}),t({type:"PROFILE_LOGOUT"});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},k=function(){return function(){var e=Object(m.a)(h.a.mark((function e(t){var n,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n=localStorage.getItem("token"))){e.next=8;break}return e.next=4,t(_(n));case 4:if((a=e.sent).error||!a.payload.refresh||a.type!==T){e.next=8;break}return e.next=8,t(Q());case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},D=function(){return function(){var e=Object(m.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"SOCKET_ON",namespace:"profile",event:"profile:updateDetails",typeOnSuccess:"PROFILE_SUCCESS"});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},P=function(e){return{type:"SOCKET_EMIT",namespace:"profile",event:"profile:retrieve",typeOnFailure:"PROFILE_FAILURE",payload:void 0,opHash:e}},G=function(e,t){return{type:"SOCKET_EMIT",namespace:"profile",event:"profile:update",typeOnFailure:"PROFILE_FAILURE",payload:e,opHash:t}},K=function(e,t){return{type:"SOCKET_EMIT",namespace:"profile",event:"profile:new_contact",typeOnFailure:"PROFILE_FAILURE",payload:{id:e},opHash:t}};!function(e){e.UPDATE_NEEDED="STATUS: UPDATE_NEEDED",e.ACTIVE="STATUS: ACTIVE",e.LOADING="@@status/LOADING",e.UPDATING="@@status/UPDATING",e.SUCCESS="@@status/SUCCESS",e.FAILURE="@@status/FAILURE"}(w||(w={}));var z=function(e,t,n){return{type:"OPERATIONS@@DETAIL_SUCCESS",payload:{id:e,status:t,error:n}}},B=function(e,t){return void 0===e||e.error?(console.log(e),z(t||"0",w.FAILURE,void 0===e?"Network error":e.payload.response?e.payload.respons.error:e.payload.message)):z(t||"0",w.SUCCESS)},H=function(){return function(){var e=Object(m.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"SOCKET_ON",namespace:"operations",event:"operations:update",typeOnSuccess:"OPERATIONS@@DETAIL_SUCCESS"});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},M={auth:a,profile:r,operations:o},Q=function(){return function(){var e=Object(m.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t(D()),t(P("actionsAfterAuth")),t(H()),console.log("[SOCKET.IO]: All listeners connected!");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},W=n(155),J=(n(138),function(){return s.a.createElement(W.a,{className:"welcome-screen"},s.a.createElement("div",{className:"title"}," ",s.a.createElement("span",{style:{fontFamily:"Godzilla",fontSize:"100pt",color:"#ffb600"}},"Monsters Factory!"),s.a.createElement("br",null),s.a.createElement("a",{href:"/story"},s.a.createElement("span",{style:{fontFamily:"Blackhead",fontSize:"50pt",color:"#fff",fontWeight:1e3}},"Get started! It's free!"))))}),V=n(158),Y=n(159),X=n(160),$=(n(139),n(156)),q=function(e){var t=e.title,n=e.onClick;return(s.a.createElement($.a,{onClick:n,style:Z},t))},Z={marginTop:"10px",marginBottom:"10px",width:"80%",backgroundColor:"#6f1b1b",fontFamily:"SansSerif",fontSize:"20px",border:"1px solid black"},ee=(n(91),n(61)),te=n(157),ne=(n(140),function(e){var t=e.children,n=Object(c.useState)(["sss"]),a=Object(ee.a)(n,2),r=a[0],o=(a[1],Object(c.useState)(!0)),i=Object(ee.a)(o,2);i[0],i[1],r.map((function(e,t){return s.a.createElement("h1",{key:t},e)}));return s.a.createElement(te.a,{in:!0,timeout:2e3,appear:"example",classNames:"example",unmountOnExit:!0},s.a.createElement("div",null,t))}),ae=function(){return s.a.createElement(W.a,{fluid:!0,style:{backgroundColor:"#000"}},s.a.createElement("div",{style:{position:"absolute",zIndex:900,width:500,height:250,top:window.innerHeight/2-100,left:window.innerWidth/2-250,backgroundColor:"#310e0e",border:"10px solid white",padding:"20px",justifyContent:"center"}},s.a.createElement(V.a,null,s.a.createElement(V.a.Body,null,s.a.createElement("img",{src:"/images/wrong.png",height:150})),s.a.createElement(V.a.Body,null,s.a.createElement("h3",{style:{color:"#fab70dff"}},"You are wrong")))),s.a.createElement(ne,null,s.a.createElement(W.a,{fluid:!0},s.a.createElement(Y.a,null,s.a.createElement(X.a,{xl:6,lg:6,md:6,sm:6,xs:6,className:"page1",style:{padding:0,backgroundImage:"url(/images/p1.jpg)"}}),s.a.createElement(X.a,{xl:6,lg:6,md:6,sm:6,xs:6,className:"page2"},s.a.createElement("h2",null,"Far, far away..."),s.a.createElement("p",null," It was"),s.a.createElement("p",null,"Your assets:"),s.a.createElement("p",null,"- No money"),s.a.createElement("p",null,"- A dream to kiss a Queen"),s.a.createElement("p",null,"- A lot of energy"),s.a.createElement(q,{title:"Become a Tezos developer & earn millions"}),s.a.createElement("br",null),s.a.createElement(q,{title:"Go to boring job"}))))))},re=n(163),oe=n(162),ce=(n(141),function(){Object(l.c)((function(e){return A(e)})),Object(l.b)();return s.a.createElement(re.a,{className:"navbar-header navbar-header-fixed woodBar"},s.a.createElement(re.a.Brand,null,s.a.createElement("span",{style:{fontFamily:"Godzilla",color:"#fff",marginTop:"-40px"}},"Monsters Factory")),s.a.createElement(oe.a,{style:{justifyContent:"right",width:"100%",color:"#fff"}},s.a.createElement(oe.a.Item,null,s.a.createElement("img",{src:"/images/gold.png",height:30,style:{marginTop:-10,marginRight:20}}),s.a.createElement("span",{style:{fontFamily:"Godzilla",color:"#fff",marginTop:"-40px",fontSize:30}},"500"),s.a.createElement("img",{src:"/images/share.png",height:30,style:{marginTop:-10,marginLeft:30,marginRight:20}}),s.a.createElement("span",{style:{fontFamily:"Godzilla",color:"#fff",marginTop:"-40px",fontSize:30}},"0"))))}),se=function(){var e=Object(l.b)();switch(Object(c.useEffect)((function(){e(M.auth.getTokenAtStartup())}),[]),Object(l.c)((function(e){return e.auth})).status){default:case w.LOADING:case w.FAILURE:return s.a.createElement(s.a.Fragment,null,s.a.createElement(ce,null),s.a.createElement(d.d,null,s.a.createElement(d.b,{exact:!0,path:"/",component:J}),s.a.createElement(d.b,{exact:!0,path:"/story",component:ae}),s.a.createElement(d.b,{path:"*"},s.a.createElement(d.a,{to:"/story"}))));case w.SUCCESS:return s.a.createElement("div",null,"Hello")}},ie=n(17),ue=n(60),le=n.n(ue),pe={access:void 0,refresh:void 0,errors:{},signup_success:!1,status:w.ACTIVE,webcode:""},fe={id:"",name:"Loading",avatar:""};var de=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t={data:{},hashes:{}};return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t,a=arguments.length>1?arguments[1]:void 0,r=function(e,t,n,a){return Object(b.a)(Object(b.a)({},e),{},{data:Object(b.a)(Object(b.a)({},e.data),{},Object(O.a)({},t,a)),hashes:Object(b.a)(Object(b.a)({},e.hashes),{},Object(O.a)({},n,a))})},o="-";void 0!==a.payload&&void 0!==a.payload.id&&(o=a.payload.id),void 0!==a.meta&&void 0!==a.meta.id&&(o=a.meta.id);var c="";switch(a.type){case e+"DETAIL_REQUEST":return r(n,o,c,{status:w.LOADING});case e+"UPLOAD_REQUEST":return r(n,o,c,Object(b.a)(Object(b.a)({},n.data[o]),{},{status:w.UPDATING}));case e+"DETAIL_SUCCESS":case e+"UPLOAD_SUCCESS":return r(n,o,c,{data:a.payload,status:w.SUCCESS});case e+"DETAIL_FAILURE":case e+"UPLOAD_FAILURE":return r(n,o,c,{data:void 0,status:w.FAILURE});default:return n}}}("OPERATIONS@@"),Ee=Object(ie.combineReducers)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0;switch(console.log(t),t.type){case I:case T:return Object(b.a)(Object(b.a)({},e),{},{access:Object(b.a)(Object(b.a)({},le()(t.payload.access)),{},{token:t.payload.access}),refresh:Object(b.a)(Object(b.a)({},le()(t.payload.refresh||"")),{},{token:t.payload.refresh||""}),errors:{},status:w.SUCCESS});case"@@auth/TOKEN_FAILURE":case"@@auth/LOGIN_FAILURE":return Object(b.a)(Object(b.a)({},e),{},{access:void 0,refresh:void 0,errors:t.payload.response||{non_field_errors:t.payload.statusText}});case"@@auth/SIGNUP_FAILURE":return Object(b.a)(Object(b.a)({},e),{},{access:void 0,refresh:void 0,errors:t.payload.response||{non_field_errors:t.payload.statusText},status:w.FAILURE});case C:return Object(b.a)(Object(b.a)({},e),{},{access:void 0,refresh:void 0,status:w.UPDATE_NEEDED});case"@@auth/SIGNUP_SUCCESS":return Object(b.a)(Object(b.a)({},e),{},{signup_success:!0,status:w.SUCCESS});case"@@auth/GETCODE_SUCCESS":return Object(b.a)(Object(b.a)({},e),{},{webcode:t.payload.access});default:return e}},profile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PROFILE_REQUEST":return e;case"PROFILE_SUCCESS":return t&&t.payload?t.payload:e;case"PROFILE_FAILURE":return Object(b.a)({},e);case"PROFILE_LOGOUT":return fe}return e},operations:de}),he=n(87);n(148);var me=function(){var e=[];return function(t){var n=t.dispatch,a=t.getState,r=Object(S.apiMiddleware)({dispatch:n,getState:a});return function(t){return function(n){console.log("DISPATCH RSAA",n);if(Object(S.isRSAA)(n)){var o=a(),c=function(e){if(e.auth.refresh)return e.auth.refresh.token}(o);return c&&function(e){return!e.auth.access||!e.auth.access.exp||1e3*e.auth.access.exp-(new Date).getTime()<5e3}(o)?(e.push(n),1===e.length?r((function(n){n.type===T?(t(n),e.forEach((function(e){r(t)(e)})),e=[]):t(n)}))(_(c)):void 0):r(t)(n)}return t(n)}}}}(),Oe=n(88);var Se,ye=function(){var e=void 0,t=!1,n=[],a=function(a,r){return new Promise((function(o,c){if(void 0===e)if(console.log("CONNE23G",a),t||void 0===a)n.push(o);else{t=!0,n=[],console.log("CONNECTING!!!! TO ".concat(y));var s=j()(y+"/web",{reconnection:!0,reconnectionDelay:500,jsonp:!1,reconnectionAttempts:1/0,transports:["websocket"]});s.on("connect_error",(function(e){console.log(e)})),s.emit("authenticate",{token:a}).on("authenticated",(function(){e=s,t=!1,console.log("CONNECTED",e),r(Q()),o(s);var a,c=Object(Oe.a)(n);try{for(c.s();!(a=c.n()).done;){(0,a.value)(s)}}catch(i){c.e(i)}finally{c.f()}})).on("unauthorized",(function(e){throw console.log("ERROR unauthorized: ".concat(JSON.stringify(e.data))),c(e.data.code),new Error(e.data.type)})).on("disconnect",(function(){console.log("DISCONNECTED!"),e&&(e=void 0)}))}else o(e)}))};return function(r){var o=r.dispatch,c=r.getState;return function(r){return function(s){var i=c().auth.access,u=void 0===i?void 0:i.token;switch(console.log("DISPATCH",s),s.type){case"SOCKET_EMIT":return u?a(u,o).then((function(e){e.emit(s.event,s.payload,s.opHash),console.log("[SOCKET.IO] : EMIT : ".concat(s.event," with opHash ").concat(s.opHash))})):o({type:s.typeOnFailure}),r(s);case"SOCKET_ON":return u?a(u,o).then((function(e){e.on(s.event,(function(e){console.log("[SOCKET.I\u041e] : GET NEW INFO : ",e),o({type:s.typeOnSuccess,payload:e})})),console.log("[SOCKET.IO] : LISTENER ADDED : ",s.event)})):console.log("Cant connect"),r(s);case"SOCKET_OFF":return e=void 0,t=!1,n=[],r(s);default:return console.log("NEXT",s),r(s)}}}}}();Se=ie.compose;n(149),n(150);var ge=Object(ie.createStore)(Ee,Se(Object(ie.applyMiddleware)(he.a,ye,me)));f.a({dsn:"https://cd19416ad99349d0bc8df4b50b374d4e@sentry.io/3026714"});var ve=function(){return s.a.createElement(l.a,{store:ge},s.a.createElement(p.a,null,s.a.createElement(se,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(ve,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},95:function(e,t,n){e.exports=n(151)}},[[95,1,2]]]);
//# sourceMappingURL=main.d8b61b71.chunk.js.map