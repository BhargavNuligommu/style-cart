(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{108:function(e,t,a){},109:function(e,t,a){},110:function(e,t,a){},111:function(e,t,a){},112:function(e,t,a){},113:function(e,t,a){},114:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(29),i=a.n(c),l=a(10),o=a(4),s=a(45),u=a(12),m=a(27),p=(a(60),a(46)),d=a.n(p),b=a(5),f="SET_CURRENT_USER",h={currentUser:null},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(b.a)({},e,{currentUser:t.payload});default:return e}},v={TOGGLE_CART_HIDDEN:"TOGGLE_CART_HIDDEN",ADD_ITEM:"ADD_ITEM",REMOVE_ITEM:"REMOVE_ITEM",CLEAR_ITEM_FROM_CART:"CLEAR_ITEM_FROM_CART"},E=a(50),y=function(e,t){return 1===e.find(function(e){return e.id===t.id}).quantity?e.filter(function(e){return e.id!==t.id}):e.map(function(e){return e.id===t.id?Object(b.a)({},e,{quantity:e.quantity-1}):e})},O={hidden:!0,cartItems:[]},k=function(){var e,t,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case v.TOGGLE_CART_HIDDEN:return Object(b.a)({},a,{hidden:!a.hidden});case v.ADD_ITEM:return Object(b.a)({},a,{cartItems:(e=a.cartItems,t=n.payload,e.find(function(e){return e.id===t.id})?e.map(function(e){return e.id===t.id?Object(b.a)({},e,{quantity:e.quantity+1}):e}):[].concat(Object(E.a)(e),[Object(b.a)({},t,{quantity:1})]))});case v.REMOVE_ITEM:return Object(b.a)({},a,{cartItems:y(a.cartItems,n.payload)});case v.CLEAR_ITEM_FROM_CART:return Object(b.a)({},a,{cartItems:a.cartItems.filter(function(e){return e.id!==n.payload.id})});default:return a}},w={sections:[{title:"hats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",id:1,linkUrl:"shop/hats"},{title:"jackets",imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",id:2,linkUrl:"shop/jackets"},{title:"sneakers",imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",id:3,linkUrl:"shop/sneakers"},{title:"womens",imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",size:"large",id:4,linkUrl:"shop/womens"},{title:"mens",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",size:"large",id:5,linkUrl:"shop/mens"}]},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w;return(arguments.length>1?arguments[1]:void 0).type,e},N={collections:{hats:{id:1,title:"Hats",routeName:"hats",items:[{id:1,name:"Brown Brim",imageUrl:"https://i.ibb.co/ZYW3VTp/brown-brim.png",price:25},{id:2,name:"Blue Beanie",imageUrl:"https://i.ibb.co/ypkgK0X/blue-beanie.png",price:18},{id:3,name:"Brown Cowboy",imageUrl:"https://i.ibb.co/QdJwgmp/brown-cowboy.png",price:35},{id:4,name:"Grey Brim",imageUrl:"https://i.ibb.co/RjBLWxB/grey-brim.png",price:25},{id:5,name:"Green Beanie",imageUrl:"https://i.ibb.co/YTjW3vF/green-beanie.png",price:18},{id:6,name:"Palm Tree Cap",imageUrl:"https://i.ibb.co/rKBDvJX/palm-tree-cap.png",price:14},{id:7,name:"Red Beanie",imageUrl:"https://i.ibb.co/bLB646Z/red-beanie.png",price:18},{id:8,name:"Wolf Cap",imageUrl:"https://i.ibb.co/1f2nWMM/wolf-cap.png",price:14},{id:9,name:"Blue Snapback",imageUrl:"https://i.ibb.co/X2VJP2W/blue-snapback.png",price:16}]},sneakers:{id:2,title:"Sneakers",routeName:"sneakers",items:[{id:10,name:"Adidas NMD",imageUrl:"https://i.ibb.co/0s3pdnc/adidas-nmd.png",price:220},{id:11,name:"Adidas Yeezy",imageUrl:"https://i.ibb.co/dJbG1cT/yeezy.png",price:280},{id:12,name:"Black Converse",imageUrl:"https://i.ibb.co/bPmVXyP/black-converse.png",price:110},{id:13,name:"Nike White AirForce",imageUrl:"https://i.ibb.co/1RcFPk0/white-nike-high-tops.png",price:160},{id:14,name:"Nike Red High Tops",imageUrl:"https://i.ibb.co/QcvzydB/nikes-red.png",price:160},{id:15,name:"Nike Brown High Tops",imageUrl:"https://i.ibb.co/fMTV342/nike-brown.png",price:160},{id:16,name:"Air Jordan Limited",imageUrl:"https://i.ibb.co/w4k6Ws9/nike-funky.png",price:190},{id:17,name:"Timberlands",imageUrl:"https://i.ibb.co/Mhh6wBg/timberlands.png",price:200}]},jackets:{id:3,title:"Jackets",routeName:"jackets",items:[{id:18,name:"Black Jean Shearling",imageUrl:"https://i.ibb.co/XzcwL5s/black-shearling.png",price:125},{id:19,name:"Blue Jean Jacket",imageUrl:"https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",price:90},{id:20,name:"Grey Jean Jacket",imageUrl:"https://i.ibb.co/N71k1ML/grey-jean-jacket.png",price:90},{id:21,name:"Brown Shearling",imageUrl:"https://i.ibb.co/s96FpdP/brown-shearling.png",price:165},{id:22,name:"Tan Trench",imageUrl:"https://i.ibb.co/M6hHc3F/brown-trench.png",price:185}]},womens:{id:4,title:"Womens",routeName:"womens",items:[{id:23,name:"Blue Tanktop",imageUrl:"https://i.ibb.co/7CQVJNm/blue-tank.png",price:25},{id:24,name:"Floral Blouse",imageUrl:"https://i.ibb.co/4W2DGKm/floral-blouse.png",price:20},{id:25,name:"Floral Dress",imageUrl:"https://i.ibb.co/KV18Ysr/floral-skirt.png",price:80},{id:26,name:"Red Dots Dress",imageUrl:"https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png",price:80},{id:27,name:"Striped Sweater",imageUrl:"https://i.ibb.co/KmSkMbH/striped-sweater.png",price:45},{id:28,name:"Yellow Track Suit",imageUrl:"https://i.ibb.co/v1cvwNf/yellow-track-suit.png",price:135},{id:29,name:"White Blouse",imageUrl:"https://i.ibb.co/qBcrsJg/white-vest.png",price:20}]},mens:{id:5,title:"Mens",routeName:"mens",items:[{id:30,name:"Camo Down Vest",imageUrl:"https://i.ibb.co/xJS0T3Y/camo-vest.png",price:325},{id:31,name:"Floral T-shirt",imageUrl:"https://i.ibb.co/qMQ75QZ/floral-shirt.png",price:20},{id:32,name:"Black & White Longsleeve",imageUrl:"https://i.ibb.co/55z32tw/long-sleeve.png",price:25},{id:33,name:"Pink T-shirt",imageUrl:"https://i.ibb.co/RvwnBL8/pink-shirt.png",price:25},{id:34,name:"Jean Long Sleeve",imageUrl:"https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",price:40},{id:35,name:"Burgundy T-shirt",imageUrl:"https://i.ibb.co/mh3VM1f/polka-dot-shirt.png",price:25}]}}},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N;return(arguments.length>1?arguments[1]:void 0).type,e},U={key:"root",storage:d.a,whitelist:["cart"]},I=Object(u.c)({user:g,cart:k,directory:j,shop:C}),R=Object(m.a)(U,I);var T=Object(u.d)(R,u.a.apply(void 0,[])),S=Object(m.b)(T),x=(m.b,a(63),a(9)),B=a.n(x),A=a(16),P=a(21),M=a(22),_=a(24),D=a(23),G=a(15),H=a(18),L=a(2),q=(a(65),a(17)),W=Object(L.a)([function(e){return e.directory}],function(e){return e.sections}),V=(a(66),Object(H.f)(function(e){var t=e.title,a=e.imageUrl,n=e.size,c=e.history,i=e.linkUrl,l=e.match;return r.a.createElement("div",{className:"".concat(n," menu-item"),onClick:function(){return c.push("".concat(l.url).concat(i))}},r.a.createElement("div",{className:"background-image",style:{backgroundImage:"url(".concat(a,")")}}),r.a.createElement("div",{className:"content"},r.a.createElement("h1",{className:"title"},t.toUpperCase()),r.a.createElement("span",{className:"subtitle"},"SHOP NOW")))})),z=(a(72),Object(L.b)({sections:W})),J=Object(o.b)(z)(function(e){var t=e.sections;return r.a.createElement("div",{className:"directory-menu"},t.map(function(e){var t=e.id,a=Object(q.a)(e,["id"]);return r.a.createElement(V,Object.assign({key:t},a))}))}),F=(a(73),function(){return r.a.createElement("div",{className:"homepage"},r.a.createElement(J,null))}),Y=(a(74),function(e){var t=e.children,a=e.isGoogleSignIn,n=e.inverted,c=Object(q.a)(e,["children","isGoogleSignIn","inverted"]);return r.a.createElement("button",Object.assign({className:"".concat(n?"inverted":""," ").concat(a?"google-sign-in":""," custom-button")},c),t)}),K=function(){return{type:v.TOGGLE_CART_HIDDEN}},Q=function(e){return{type:v.ADD_ITEM,payload:e}},X=(a(75),Object(o.b)(null,function(e){return{addItem:function(t){return e(Q(t))}}})(function(e){var t=e.item,a=e.addItem,n=t.name,c=t.price,i=t.imageUrl;return r.a.createElement("div",{className:"collection-item"},r.a.createElement("div",{className:"image",style:{backgroundImage:"url(".concat(i,")")}}),r.a.createElement("div",{className:"collection-footer"},r.a.createElement("span",{className:"name"},n),r.a.createElement("span",{className:"price"},c)),r.a.createElement(Y,{onClick:function(){return a(t)},inverted:!0},"Add to cart"))})),Z=(a(76),function(e){var t=e.title,a=e.items;return r.a.createElement("div",{className:"collection-preview"},r.a.createElement("h1",{className:"title"},t.toUpperCase()),r.a.createElement("div",{className:"preview"},a.filter(function(e,t){return t<4}).map(function(e){return r.a.createElement(X,{key:e.id,item:e})})))}),$=Object(L.a)([function(e){return e.shop}],function(e){return e.collections}),ee=Object(L.a)([$],function(e){return Object.keys(e).map(function(t){return e[t]})}),te=(a(77),Object(L.b)({collections:ee})),ae=Object(o.b)(te)(function(e){var t=e.collections;return r.a.createElement("div",{className:"collections-overview"},t.map(function(e){var t=e.id,a=Object(q.a)(e,["id"]);return r.a.createElement(Z,Object.assign({key:t},a))}))}),ne=(a(78),Object(o.b)(function(e,t){return{collection:(a=t.match.params.collectionId,Object(L.a)([$],function(e){return e[a]}))(e)};var a})(function(e){var t=e.collection,a=t.title,n=t.items;return r.a.createElement("div",{className:"collection-page"},r.a.createElement("h2",{className:"title"},a),r.a.createElement("div",{className:"items"},n.map(function(e){return r.a.createElement(X,{key:e.id,item:e})})))})),re=function(e){var t=e.match;return r.a.createElement("div",{className:"shop-page"},r.a.createElement(H.b,{exact:!0,path:"".concat(t.path),component:ae}),r.a.createElement(H.b,{path:"".concat(t.path,"/:collectionId"),component:ne}))},ce=a(20),ie=(a(79),function(e){var t=e.handleChange,a=e.label,n=Object(q.a)(e,["handleChange","label"]);return r.a.createElement("div",{className:"group"},r.a.createElement("input",Object.assign({className:"form-input",onChange:t},n)),a?r.a.createElement("label",{className:"".concat(n.value.length?"shrink":""," form-input-label")},a):null)}),le=a(25),oe=a.n(le);a(80),a(83);oe.a.initializeApp({apiKey:"AIzaSyCdHT-AYHXjF7wOrfAchX4PIm3cSj5tn14",authDomain:"crwn-db.firebaseapp.com",databaseURL:"https://crwn-db.firebaseio.com",projectId:"crwn-db",storageBucket:"crwn-db.appspot.com",messagingSenderId:"850995411664",appId:"1:850995411664:web:7ddc01d597846f65"});var se=function(){var e=Object(A.a)(B.a.mark(function e(t,a){var n,r,c,i;return B.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return n=me.doc("users/".concat(t.uid)),e.next=5,n.get();case 5:if(e.sent.exists){e.next=17;break}return r=t.displayName,c=t.email,i=new Date,e.prev=9,e.next=12,n.set(Object(b.a)({displayName:r,email:c,createdAt:i},a));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(9),console.log("error creating user",e.t0.message);case 17:return e.abrupt("return",n);case 18:case"end":return e.stop()}},e,null,[[9,14]])}));return function(t,a){return e.apply(this,arguments)}}(),ue=oe.a.auth(),me=oe.a.firestore(),pe=new oe.a.auth.GoogleAuthProvider;pe.setCustomParameters({prompt:"select_account"});var de=function(){return ue.signInWithPopup(pe)};oe.a,a(85);function be(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var a,n=Object(G.a)(e);if(t){var r=Object(G.a)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return Object(D.a)(this,a)}}var fe=function(e){Object(_.a)(a,e);var t=be(a);function a(e){var n;return Object(P.a)(this,a),(n=t.call(this,e)).handleSubmit=function(){var e=Object(A.a)(B.a.mark(function e(t){var a,r,c;return B.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=n.state,r=a.email,c=a.password,e.prev=2,e.next=5,ue.signInWithEmailAndPassword(r,c);case 5:n.setState({email:"",password:""}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.log(e.t0);case 11:case"end":return e.stop()}},e,null,[[2,8]])}));return function(t){return e.apply(this,arguments)}}(),n.handleChange=function(e){var t=e.target,a=t.value,r=t.name;n.setState(Object(ce.a)({},r,a))},n.state={email:"",password:""},n}return Object(M.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"sign-in"},r.a.createElement("h2",null,"I already have an account"),r.a.createElement("span",null,"Sign in with your email and password"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(ie,{name:"email",type:"email",handleChange:this.handleChange,value:this.state.email,label:"email",required:!0}),r.a.createElement(ie,{name:"password",type:"password",value:this.state.password,handleChange:this.handleChange,label:"password",required:!0}),r.a.createElement("div",{className:"buttons"},r.a.createElement(Y,{type:"submit"}," Sign in "),r.a.createElement(Y,{onClick:de,isGoogleSignIn:!0},"Sign in with Google"))))}}]),a}(r.a.Component);a(86);function he(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var a,n=Object(G.a)(e);if(t){var r=Object(G.a)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return Object(D.a)(this,a)}}var ge,ve,Ee,ye,Oe,ke,we,je,Ne,Ce,Ue,Ie,Re,Te,Se,xe=function(e){Object(_.a)(a,e);var t=he(a);function a(){var e;return Object(P.a)(this,a),(e=t.call(this)).handleSubmit=function(){var t=Object(A.a)(B.a.mark(function t(a){var n,r,c,i,l,o,s;return B.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),n=e.state,r=n.displayName,c=n.email,i=n.password,l=n.confirmPassword,i===l){t.next=5;break}return alert("passwords don't match"),t.abrupt("return");case 5:return t.prev=5,t.next=8,ue.createUserWithEmailAndPassword(c,i);case 8:return o=t.sent,s=o.user,t.next=12,se(s,{displayName:r});case 12:e.setState({displayName:"",email:"",password:"",confirmPassword:""}),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(5),console.error(t.t0);case 18:case"end":return t.stop()}},t,null,[[5,15]])}));return function(e){return t.apply(this,arguments)}}(),e.handleChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(ce.a)({},n,r))},e.state={displayName:"",email:"",password:"",confirmPassword:""},e}return Object(M.a)(a,[{key:"render",value:function(){var e=this.state,t=e.displayName,a=e.email,n=e.password,c=e.confirmPassword;return r.a.createElement("div",{className:"sign-up"},r.a.createElement("h2",{className:"title"},"I do not have a account"),r.a.createElement("span",null,"Sign up with your email and password"),r.a.createElement("form",{className:"sign-up-form",onSubmit:this.handleSubmit},r.a.createElement(ie,{type:"text",name:"displayName",value:t,onChange:this.handleChange,label:"Display Name",required:!0}),r.a.createElement(ie,{type:"email",name:"email",value:a,onChange:this.handleChange,label:"Email",required:!0}),r.a.createElement(ie,{type:"password",name:"password",value:n,onChange:this.handleChange,label:"Password",required:!0}),r.a.createElement(ie,{type:"password",name:"confirmPassword",value:c,onChange:this.handleChange,label:"Confirm Password",required:!0}),r.a.createElement(Y,{type:"submit"},"SIGN UP")))}}]),a}(r.a.Component),Be=(a(87),function(){return r.a.createElement("div",{className:"sign-in-and-sign-up"},r.a.createElement(fe,null),r.a.createElement(xe,null))}),Ae=(a(88),Object(o.b)(null,function(e){return{clearItem:function(t){return e(function(e){return{type:v.CLEAR_ITEM_FROM_CART,payload:e}}(t))},addItem:function(t){return e(Q(t))},removeItem:function(t){return e(function(e){return{type:v.REMOVE_ITEM,payload:e}}(t))}}})(function(e){var t=e.cartItem,a=e.clearItem,n=e.addItem,c=e.removeItem,i=t.name,l=t.imageUrl,o=t.price,s=t.quantity;return r.a.createElement("div",{className:"checkout-item"},r.a.createElement("div",{className:"image-container"},r.a.createElement("img",{src:l,alt:"item"})),r.a.createElement("span",{className:"name"},i),r.a.createElement("span",{className:"quantity"},r.a.createElement("div",{className:"arrow",onClick:function(){return c(t)}},"\u276e"),r.a.createElement("span",{className:"value"},s),r.a.createElement("div",{className:"arrow",onClick:function(){return n(t)}},"\u276f")),r.a.createElement("span",{className:"price"},o),r.a.createElement("div",{className:"remove-button",onClick:function(){return a(t)}},"\u2715"))})),Pe=a(48),Me=a.n(Pe),_e=a(49),De=a.n(_e),Ge=function(e){var t=e.price,a=100*t;return r.a.createElement(Me.a,{label:"Pay Now",name:"CRWN Clothing Ltd.",billingAddress:!0,shippingAddress:!0,image:"https://svgshare.com/i/CUz.svg",description:"Your total is $".concat(t),amount:a,panelLabel:"Pay Now",token:function(e){De()({url:"/payment",method:"post",data:{amount:a,token:e}}).then(function(e){alert("Succesful Payment!")}).catch(function(e){console.log("Payment Error: ",e),alert("There was an issue with your payment! Please make sure to use the provided credit card data")})},stripeKey:"pk_test_b7a3hFL5nC3qlBCZ6bQACpez00gyMMP52H"})},He=function(e){return e.cart},Le=Object(L.a)([He],function(e){return e.cartItems}),qe=Object(L.a)([He],function(e){return e.hidden}),We=Object(L.a)([Le],function(e){return e.reduce(function(e,t){return e+t.quantity},0)}),Ve=Object(L.a)([Le],function(e){return e.reduce(function(e,t){return e+t.quantity*t.price},0)}),ze=(a(108),Object(L.b)({cartItems:Le,total:Ve})),Je=Object(o.b)(ze)(function(e){var t=e.cartItems,a=e.total;return r.a.createElement("div",{className:"checkout-page"},r.a.createElement("div",{className:"checkout-header"},r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Product")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Description")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Quantity")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Price")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Remove"))),t.map(function(e){return r.a.createElement(Ae,{key:e.id,cartItem:e})}),r.a.createElement("div",{className:"total"},"TOTAL: $",a),r.a.createElement("div",{className:"test-warning"},"*Please use the following test credit card for payments*",r.a.createElement("br",null),"4242 4242 4242 4242 - Exp: 01/20 - CVV: 123"),r.a.createElement(Ge,{price:a}))}),Fe=["svgRef"];function Ye(){return(Ye=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function Ke(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var Qe,Xe,Ze,$e=function(e){var t=e.svgRef,a=Ke(e,Fe);return r.a.createElement("svg",Ye({id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 407.453 407.453",style:{enableBackground:"new 0 0 407.453 407.453"},xmlSpace:"preserve",ref:t},a),r.a.createElement("g",null,r.a.createElement("path",{style:{fill:"#010002"},d:"M255.099,116.515c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H143.486 c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129H255.099z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M367.062,100.258H311.69c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129h47.243 v274.681H48.519V116.515h44.536c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H40.391 c-4.487,0-8.129,3.633-8.129,8.129v290.938c0,4.495,3.642,8.129,8.129,8.129h326.671c4.487,0,8.129-3.633,8.129-8.129V108.386 C375.191,103.891,371.557,100.258,367.062,100.258z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,134.796c4.487,0,8.129-3.633,8.129-8.129V67.394C290.718,30.238,250.604,0,201.101,0 c-49.308,0-89.414,30.238-89.414,67.394v59.274c0,4.495,3.642,8.129,8.129,8.129s8.129-3.633,8.129-8.129V67.394 c0-28.198,32.823-51.137,73.36-51.137c40.334,0,73.157,22.939,73.157,51.137v59.274 C274.461,131.163,278.095,134.796,282.59,134.796z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M98.892,147.566c0,11.526,9.389,20.907,20.923,20.907c11.534,0,20.923-9.38,20.923-20.907 c0-4.495-3.642-8.129-8.129-8.129s-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.569,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129S98.892,143.071,98.892,147.566z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,168.473c11.534,0,20.923-9.38,20.923-20.907c0-4.495-3.642-8.129-8.129-8.129 c-4.487,0-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.577,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129c-4.487,0-8.129,3.633-8.129,8.129C261.667,159.092,271.055,168.473,282.59,168.473z"})),ge||(ge=r.a.createElement("g",null)),ve||(ve=r.a.createElement("g",null)),Ee||(Ee=r.a.createElement("g",null)),ye||(ye=r.a.createElement("g",null)),Oe||(Oe=r.a.createElement("g",null)),ke||(ke=r.a.createElement("g",null)),we||(we=r.a.createElement("g",null)),je||(je=r.a.createElement("g",null)),Ne||(Ne=r.a.createElement("g",null)),Ce||(Ce=r.a.createElement("g",null)),Ue||(Ue=r.a.createElement("g",null)),Ie||(Ie=r.a.createElement("g",null)),Re||(Re=r.a.createElement("g",null)),Te||(Te=r.a.createElement("g",null)),Se||(Se=r.a.createElement("g",null)))},et=r.a.forwardRef(function(e,t){return r.a.createElement($e,Ye({svgRef:t},e))}),tt=(a.p,a(109),Object(L.b)({itemCount:We})),at=Object(o.b)(tt,function(e){return{toggleCartHidden:function(){return e(K())}}})(function(e){var t=e.toggleCartHidden,a=e.itemCount;return r.a.createElement("div",{className:"cart-icon",onClick:t},r.a.createElement(et,{className:"shopping-icon"}),r.a.createElement("span",{className:"item-count"},a))}),nt=(a(110),function(e){var t=e.item,a=t.imageUrl,n=t.price,c=t.name,i=t.quantity;return r.a.createElement("div",{className:"cart-item"},r.a.createElement("img",{src:a,alt:"item"}),r.a.createElement("div",{className:"item-details"},r.a.createElement("span",{className:"name"},c),r.a.createElement("span",{className:"price"},i," x $",n)))}),rt=(a(111),Object(L.b)({cartItems:Le})),ct=Object(H.f)(Object(o.b)(rt)(function(e){var t=e.cartItems,a=e.history,n=e.dispatch;return r.a.createElement("div",{className:"cart-dropdown"},r.a.createElement("div",{className:"cart-items"},t.length?t.map(function(e){return r.a.createElement(nt,{key:e.id,item:e})}):r.a.createElement("span",{className:"empty-message"},"Your cart is empty")),r.a.createElement(Y,{onClick:function(){a.push("/checkout"),n(K())}},"GO TO CHECKOUT"))})),it=Object(L.a)([function(e){return e.user}],function(e){return e.currentUser}),lt=["svgRef"];function ot(){return(ot=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function st(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var ut=function(e){var t=e.svgRef,a=st(e,lt);return r.a.createElement("svg",ot({width:"50px",height:"39px",viewBox:"0 0 50 39",ref:t},a),Qe||(Qe=r.a.createElement("title",null,"Group")),Xe||(Xe=r.a.createElement("desc",null,"Created with Sketch.")),Ze||(Ze=r.a.createElement("g",{id:"WiP",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},r.a.createElement("g",{id:"Artboard",transform:"translate(-90.000000, -38.000000)"},r.a.createElement("g",{id:"Group",transform:"translate(90.000000, 38.000000)"},r.a.createElement("polygon",{id:"Rectangle",fill:"#808282",points:"3 14 25 26.5 47 14 40.855176 39 9.08421785 39"}),r.a.createElement("polygon",{id:"Triangle",fillOpacity:.262838724,fill:"#101A1A",points:"25 8 40 39 10 39"}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:2,cy:9,r:2}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:25,cy:2,r:2}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:48,cy:9,r:2}))))))},mt=r.a.forwardRef(function(e,t){return r.a.createElement(ut,ot({svgRef:t},e))}),pt=(a.p,a(112),Object(L.b)({currentUser:it,hidden:qe})),dt=Object(o.b)(pt)(function(e){var t=e.currentUser,a=e.hidden;return r.a.createElement("div",{className:"header"},r.a.createElement(l.b,{className:"logo-container",to:"/"},r.a.createElement(mt,{className:"logo"})),r.a.createElement("div",{className:"title"},"Style Cart"),r.a.createElement("div",{className:"options"},r.a.createElement(l.b,{className:"option",to:"/shop"},"SHOP"),r.a.createElement(l.b,{className:"option",to:"/shop"},"CONTACT"),t?r.a.createElement("div",{className:"option",onClick:function(){return ue.signOut()}},"SIGN OUT"):r.a.createElement(l.b,{className:"option",to:"/signin"},"SIGN IN"),r.a.createElement(at,null)),a?null:r.a.createElement(ct,null))}),bt=(a(113),function(){return r.a.createElement("footer",{className:"footer"},"Made with ",r.a.createElement("span",{role:"img","aria-label":"love"},"\u2764\ufe0f")," by ",r.a.createElement("a",{href:"https://github.com/BhargavNuligommu/",target:"_blank",rel:"noopener noreferrer"},"Bhargav"))});function ft(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var a,n=Object(G.a)(e);if(t){var r=Object(G.a)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return Object(D.a)(this,a)}}var ht=function(e){Object(_.a)(a,e);var t=ft(a);function a(){var e;Object(P.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).unsubscribeFromAuth=null,e}return Object(M.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.setCurrentUser;this.unsubscribeFromAuth=ue.onAuthStateChanged(function(){var t=Object(A.a)(B.a.mark(function t(a){return B.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!a){t.next=5;break}return t.next=3,se(a);case 3:t.sent.onSnapshot(function(t){e(Object(b.a)({id:t.id},t.data()))});case 5:e(a);case 6:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}())}},{key:"componentWillUnmount",value:function(){this.unsubscribeFromAuth()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(dt,null),r.a.createElement(H.d,null,r.a.createElement(H.b,{exact:!0,path:"/",component:F}),r.a.createElement(H.b,{path:"/shop",component:re}),r.a.createElement(H.b,{exact:!0,path:"/checkout",component:Je}),r.a.createElement(H.b,{exact:!0,path:"/signin",render:function(){return e.props.currentUser?r.a.createElement(H.a,{to:"/"}):r.a.createElement(Be,null)}})),r.a.createElement(bt,null))}}]),a}(r.a.Component),gt=Object(L.b)({currentUser:it}),vt=Object(o.b)(gt,function(e){return{setCurrentUser:function(t){return e(function(e){return{type:f,payload:e}}(t))}}})(ht);i.a.render(r.a.createElement(o.a,{store:T},r.a.createElement(l.a,null,r.a.createElement(s.a,{persistor:S},r.a.createElement(vt,null)))),document.getElementById("root"))},51:function(e,t,a){e.exports=a(114)},63:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},85:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){},88:function(e,t,a){}},[[51,1,2]]]);
//# sourceMappingURL=main.d7f60e0c.chunk.js.map