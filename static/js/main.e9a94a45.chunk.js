(this.webpackJsonpx=this.webpackJsonpx||[]).push([[0],{36:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),s=n(30),i=n.n(s),a=(n(36),n(2)),o=n(10),u=n(3),j=n(0),l=function(){return Object(j.jsx)("div",{children:Object(j.jsx)("h1",{children:"HomeView"})})},b=n(15),d=n(13),O={homeView:"/",signInView:"/signin",accessoriesView:"/accessories",brandsView:"/brands",expertiseView:"/expertise",newsView:"/news",shopView:"/shop",settingsView:"/user/settings"},h=Object(c.createContext)(null),x=function(e){var t=e.children,n=Object(c.useState)(),r=Object(a.a)(n,2),s=r[0],i=r[1];return Object(j.jsx)(h.Provider,{value:[s,i],children:t})},p=function(){var e=Object(u.f)(),t=Object(c.useState)({username:"",password:""}),n=Object(a.a)(t,2),r=n[0],s=n[1],i=Object(c.useContext)(h),o=Object(a.a)(i,2)[1],l=function(e,t){s(Object(d.a)(Object(d.a)({},r),{},Object(b.a)({},t,e.target.value))),console.info(r)};return Object(j.jsxs)("div",{children:["Sign in",Object(j.jsx)("pre",{children:JSON.stringify(r,null," ")}),Object(j.jsxs)("form",{children:[Object(j.jsx)("input",{placeholder:"Username",onChange:function(e){return l(e,"username")}}),Object(j.jsx)("br",{}),Object(j.jsx)("input",{placeholder:"Password",onChange:function(e){return l(e,"password")}}),Object(j.jsx)("br",{}),Object(j.jsx)("button",{onClick:function(){localStorage.setItem("user",r.username),o(r),e.push(O.homeView)},children:"Sign in"})]})]})},f=function(){return Object(j.jsx)("div",{children:Object(j.jsx)("h1",{children:"This is the AccessoriesView"})})},m=n(9),v=n.n(m),w=n(11),g=n(16),k=n.n(g),V=k.a.create({baseURL:"https://pokeapi.co/api/v2/"}),C={getPokemonById:function(e){return V.get("/pokemon/".concat(e,"/"))},getAllPokemon:function(){return V.get("/pokemon?limit=3000")}},N=function(){var e=Object(c.useState)(null),t=Object(a.a)(e,2),n=t[0],r=t[1];Object(c.useEffect)((function(){s()}),[]);var s=function(){var e=Object(w.a)(v.a.mark((function e(){var t,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.getAllPokemon();case 3:t=e.sent,n=t.data,r(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return Object(j.jsx)("div",{onClick:function(){return s()},children:null==n?"Loading":n.results.map((function(e,t){return Object(j.jsxs)("a",{href:e.url,children:[e.name,Object(j.jsx)("br",{})]},t)}))})},S=function(){return Object(j.jsx)("div",{children:Object(j.jsx)("h2",{children:"This is the ExpertiseView"})})},I=k.a.create({baseURL:"http://localhost:3001"}),y=function(e){return I.post("/user",e)},E=function(){return I.get("/user")},H=function(){var e=Object(c.useState)([]),t=Object(a.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(!1),i=Object(a.a)(s,2),o=i[0],u=i[1],l=Object(c.useState)({username:"test",password:"test"}),b=Object(a.a)(l,2),O=b[0],h=b[1],x=function(){var e=Object(w.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,u(!0),e.next=4,y(O);case 4:u(!1),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=Object(w.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E();case 2:t=e.sent,r(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){p()}),[o]),Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"Backend API:"}),Object(j.jsx)("p",{children:"Username"}),Object(j.jsx)("input",{onChange:function(e){h(Object(d.a)(Object(d.a)({},O),{},{username:e.target.value}))}}),Object(j.jsx)("br",{}),Object(j.jsx)("p",{children:"Password"}),Object(j.jsx)("input",{}),Object(j.jsx)("br",{}),Object(j.jsx)("p",{children:"Age"}),Object(j.jsx)("input",{}),Object(j.jsx)("br",{}),Object(j.jsx)("button",{onClick:function(){return x()},children:"Create user"}),Object(j.jsx)("hr",{}),Object(j.jsx)("h1",{children:"Displaying all users: "}),n.map((function(e){return Object(j.jsx)("div",{children:Object(j.jsx)("span",{children:e.username})})}))]})},P=function(){var e=Object(c.useState)(),t=Object(a.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(1),i=Object(a.a)(s,2),o=i[0],u=i[1];Object(c.useEffect)((function(){l(o)}),[o]);var l=function(){var e=Object(w.a)(v.a.mark((function e(t){var n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.getPokemonById(t);case 3:n=e.sent,r(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),b=function(e){u(e<0?0:e)};return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"HomeView"}),Object(j.jsxs)("h1",{children:["Name: ",null===n||void 0===n?void 0:n.data.name]}),Object(j.jsxs)("h1",{children:["Height: ",null===n||void 0===n?void 0:n.data.height]}),Object(j.jsxs)("h1",{children:["Weight: ",null===n||void 0===n?void 0:n.data.weight]}),Object(j.jsx)("button",{onClick:function(){return b(o-1)},children:"Previous"}),Object(j.jsx)("button",{onClick:function(){return b(o+1)},children:"Next"})]})},T=function(){return Object(j.jsx)("div",{children:Object(j.jsx)("h1",{children:"This is the settings view, change pasword etc"})})},L=function(e){var t,n,r=e.children,s=Object(c.useContext)(h),i=Object(a.a)(s,2),b=i[0],d=i[1];return Object(c.useEffect)((function(){!b&&localStorage.getItem("user")&&d({username:localStorage.getItem("user")})})),Object(j.jsxs)(o.a,{children:[r,Object(j.jsxs)(u.c,{children:[Object(j.jsx)(u.a,{exact:!0,path:O.signInView,component:(t=p,n=l,b?n:t)}),Object(j.jsx)(u.a,{exact:!0,path:O.homeView,component:l}),Object(j.jsx)(u.a,{exact:!0,path:O.accessoriesView,component:f}),Object(j.jsx)(u.a,{exact:!0,path:O.brandsView,component:N}),Object(j.jsx)(u.a,{exact:!0,path:O.expertiseView,component:S}),Object(j.jsx)(u.a,{exact:!0,path:O.newsView,component:H}),Object(j.jsx)(u.a,{exact:!0,path:O.shopView,component:P}),Object(j.jsx)(u.a,{exact:!0,path:O.settingsView,component:function(e,t){return b?e:t}(T,p)}),Object(j.jsx)(u.a,{component:l})]})]})},B=(n(62),n(63),n.p+"static/media/logotype.8baa5561.svg"),A=(n(64),function(){var e=Object(u.f)(),t=Object(c.useContext)(h),n=Object(a.a)(t,2)[1];return Object(j.jsxs)("div",{className:"profileDropdown",children:[Object(j.jsx)("span",{onClick:function(){return e.push(O.settingsView)},children:"Settings"}),Object(j.jsx)("span",{onClick:function(){localStorage.removeItem("user"),n(null),e.push(O.homeView)},children:"Sign Out"})]})}),F=(n(65),function(){var e=Object(c.useContext)(h),t=Object(a.a)(e,1)[0];return Object(j.jsxs)("div",{className:"profileWrapper",children:[Object(j.jsx)("img",{src:"https://thispersondoesnotexist.com/image",alt:"Profile",className:"profileImg"}),t.username,Object(j.jsx)(A,{})]})}),W=(n(66),function(){var e=Object(u.f)();return Object(j.jsxs)("ul",{className:"ulTabsWrapper",children:[Object(j.jsx)("li",{className:"liTabs",onClick:function(){return e.push(O.shopView)},children:"Butik"}),Object(j.jsx)("li",{className:"liTabs",onClick:function(){return e.push(O.accessoriesView)},children:"Accessoarer"}),Object(j.jsx)("li",{className:"liTabs",onClick:function(){return e.push(O.brandsView)},children:"Varum\xe4rken"}),Object(j.jsx)("li",{className:"liTabs",onClick:function(){return e.push(O.newsView)},children:"Nyheter"}),Object(j.jsx)("li",{className:"liTabs",onClick:function(){return e.push(O.expertiseView)},children:"Expertis"})]})}),J=function(){var e=Object(u.f)(),t=Object(c.useContext)(h),n=Object(a.a)(t,1)[0];return Object(j.jsxs)("div",{className:"desktopNavigationWrapper",children:[Object(j.jsx)("img",{className:"navigationLogotype",src:B,alt:"Logotype"}),Object(j.jsx)("div",{className:"desktopNavigationTabs",children:Object(j.jsx)(W,{})}),n?Object(j.jsx)("div",{className:"profile",children:Object(j.jsx)(F,{})}):Object(j.jsx)("span",{onClick:function(){return e.push(O.signInView)},className:"signInButton",children:"Sign in"})]})},U=(n(67),function(e){return Object(j.jsxs)("button",{className:"toggle-button",onClick:function(){return e.drawerHandler(!0)},children:[Object(j.jsx)("div",{className:"toggle-button_line"}),Object(j.jsx)("div",{className:"toggle-button_line"}),Object(j.jsx)("div",{className:"toggle-button_line"})]})}),D=(n(68),n(69),function(e){var t=Object(u.f)(),n=function(n){e.drawerHandler(!1),t.push(n)};return Object(j.jsxs)("div",{className:e.drawerIsOpen?"side-drawer open":"side-drawer",children:[Object(j.jsx)("button",{onClick:function(){e.drawerHandler(!1)},children:"HEJ"}),Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{onClick:function(){return n(O.shopView)},children:"Butik"}),Object(j.jsx)("li",{onClick:function(){return n(O.accessoriesView)},children:"Accessoarer"}),Object(j.jsx)("li",{onClick:function(){return n(O.brandsView)},children:"Varum\xe4rken"}),Object(j.jsx)("li",{onClick:function(){return n(O.newsView)},children:"Nyheter"}),Object(j.jsx)("li",{onClick:function(){return n(O.expertiseView)},children:"Expertis"})]})]})}),_=(n(70),function(e){return Object(j.jsx)("div",{onClick:function(){e.drawerHandler(!1)},className:"backdrop"})}),z=function(){var e=Object(c.useState)(!1),t=Object(a.a)(e,2),n=t[0],r=t[1];return Object(j.jsxs)("div",{children:[Object(j.jsx)(U,{drawerHandler:r}),Object(j.jsx)(D,{drawerIsOpen:n,drawerHandler:r}),n&&Object(j.jsx)(_,{drawerHandler:r})]})},R=function(){var e=window;return{width:e.innerWidth,height:e.innerHeight}},M=function(){var e=function(){var e=Object(c.useState)(R()),t=Object(a.a)(e,2),n=t[0],r=t[1],s=function(){r(R())};return Object(c.useEffect)((function(){return window.addEventListener("resize",s),function(){window.removeEventListener("resize",s)}}),[]),n}().width;return Object(j.jsx)("div",{children:e<=1e3?Object(j.jsx)(z,{}):Object(j.jsx)(J,{})})};var q=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(x,{children:Object(j.jsx)(L,{children:Object(j.jsx)(M,{})})})})},G=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,72)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),s(e),i(e)}))};i.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(q,{})}),document.getElementById("root")),G()}},[[71,1,2]]]);
//# sourceMappingURL=main.e9a94a45.chunk.js.map