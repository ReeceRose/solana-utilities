(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[909],{5640:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/converters/currency",function(){return n(7908)}])},5638:function(e,r,n){"use strict";var t=n(5893);r.Z=function(){return(0,t.jsx)("div",{className:"fixed top-0 bottom-0 left-0 right-0 z-50 flex flex-col items-center justify-center w-full h-screen overflow-hidden bg-gray-700 opacity-75",children:(0,t.jsx)("div",{className:"w-12 h-12 border-b-4 rounded-full border-solana-green animate-spin"})})}},7908:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return f}});var t=n(5893),s=n(8520),a=n.n(s),c=n(7294),o=n(4289),i=n(5638);function u(e,r,n,t,s,a,c){try{var o=e[a](c),i=o.value}catch(u){return void n(u)}o.done?r(i):Promise.resolve(i).then(t,s)}function l(e){return function(){var r=this,n=arguments;return new Promise((function(t,s){var a=e.apply(r,n);function c(e){u(a,t,s,c,o,"next",e)}function o(e){u(a,t,s,c,o,"throw",e)}c(void 0)}))}}var d=function(){var e=(0,c.useState)(!1),r=e[0],n=e[1],s=(0,c.useState)(0),u=s[0],d=s[1],f=l(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n(!0),n(!1);case 2:case"end":return e.stop()}}),e)}))),x=l(a().mark((function e(){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(u){e.next=5;break}return e.next=3,(0,o.Z)({token:"solana",currency:"USD"});case 3:-1!==(r=e.sent)&&d(r);case 5:case"end":return e.stop()}}),e)})));return(0,c.useEffect)((function(){l(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x();case 2:case"end":return e.stop()}}),e)})))()})),(0,t.jsxs)(t.Fragment,{children:[r&&(0,t.jsx)(i.Z,{}),(0,t.jsxs)("div",{className:"relative flex flex-col w-full min-w-0 break-words bg-gray-700 border-0 rounded-lg shadow-lg",children:[(0,t.jsx)("div",{className:"px-6 py-6 mb-0 bg-gray-900 rounded-t",children:(0,t.jsxs)("div",{className:"flex justify-between text-center",children:[(0,t.jsx)("h6",{className:"text-xl font-bold text-solana-green",children:"Currency Converter"}),(0,t.jsx)("button",{className:"px-4 py-2 mr-1 text-xs font-bold uppercase transition-all duration-150 ease-linear bg-gray-500 rounded shadow outline-none text-solana-green active:bg-gray-600 hover:shadow-md focus:outline-none",type:"button",onClick:f,children:"Convert"})]})}),(0,t.jsxs)("div",{className:"flex-auto px-4 lg:px-10",children:[(0,t.jsx)("hr",{className:"my-6 border-gray-50 border-b-1"}),(0,t.jsxs)("h6",{className:"text-sm font-bold uppercase text-gray-50",children:["Current Sol price (USD):"," ",(0,t.jsxs)("span",{className:"font-extrabold text-solana-green",children:[u," USD"]})]})]}),(0,t.jsx)("div",{className:"flex-auto px-4 mb-6 lg:px-10",children:(0,t.jsxs)("form",{onSubmit:l(a().mark((function e(r){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),e.next=3,f();case 3:case"end":return e.stop()}}),e)}))),children:[(0,t.jsx)("hr",{className:"my-6 border-gray-50 border-b-1"}),(0,t.jsx)("h6",{className:"mt-3 mb-6 text-sm font-bold uppercase text-gray-50",children:"Converter"}),(0,t.jsx)("div",{className:"flex flex-wrap",children:(0,t.jsx)("div",{className:"w-full px-4 lg:w-6/12",children:(0,t.jsx)("div",{className:"relative w-full mb-3"})})})]})})]})]})},f=function(){return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("div",{className:"flex-grow w-full px-4 mt-12 mb-0",children:(0,t.jsx)("div",{className:"flex flex-wrap",children:(0,t.jsx)("div",{className:"w-full px-4 mx-auto lg:w-10/12",children:(0,t.jsx)(d,{})})})})})}},4289:function(e,r,n){"use strict";var t=n(8520),s=n.n(t);function a(e,r,n,t,s,a,c){try{var o=e[a](c),i=o.value}catch(u){return void n(u)}o.done?r(i):Promise.resolve(i).then(t,s)}var c,o=(c=s().mark((function e(r){var n,t,a,c,o,i;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.token,t=r.currency,e.prev=1,e.next=4,fetch("https://api.coingecko.com/api/v3/simple/price?ids=".concat(n,"&vs_currencies=").concat(t),{method:"GET"});case 4:return a=e.sent,e.t0=JSON,e.next=8,a.text();case 8:return e.t1=e.sent,c=e.t0.parse.call(e.t0,e.t1),o=c[Object.keys(c)[0]],i=o[Object.keys(o)[0]],e.abrupt("return",i);case 15:return e.prev=15,e.t2=e.catch(1),e.abrupt("return",-1);case 18:case"end":return e.stop()}}),e,null,[[1,15]])})),function(){var e=this,r=arguments;return new Promise((function(n,t){var s=c.apply(e,r);function o(e){a(s,n,t,o,i,"next",e)}function i(e){a(s,n,t,o,i,"throw",e)}o(void 0)}))});r.Z=o}},function(e){e.O(0,[774,888,179],(function(){return r=5640,e(e.s=r);var r}));var r=e.O();_N_E=r}]);