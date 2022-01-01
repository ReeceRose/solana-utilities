(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[410],{8875:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/calculators/rent-calculator",function(){return r(2319)}])},2319:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return f}});var n=r(5893),a=r(8520),s=r.n(a),l=r(9917),o=r(7294),c=function(){return(0,n.jsx)("div",{className:"fixed top-0 bottom-0 left-0 right-0 z-50 flex flex-col items-center justify-center w-full h-screen overflow-hidden bg-gray-700 opacity-75",children:(0,n.jsx)("div",{className:"w-12 h-12 border-b-4 rounded-full border-solana-green animate-spin"})})},i=r(4155);function u(e,t,r,n,a,s,l){try{var o=e[s](l),c=o.value}catch(i){return void r(i)}o.done?t(c):Promise.resolve(c).then(n,a)}function x(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var s=e.apply(t,r);function l(e){u(s,n,a,l,o,"next",e)}function o(e){u(s,n,a,l,o,"throw",e)}l(void 0)}))}}var d=function(){var e=(0,o.useState)(!1),t=e[0],r=e[1],a=(0,o.useState)("0"),u=a[0],d=a[1],f=(0,o.useState)(0),m=f[0],p=f[1],b=(0,o.useState)(0),h=b[0],v=b[1],g=(0,o.useState)(0),j=g[0],w=g[1],N=(0,o.useState)(0),y=N[0],S=N[1],k=(0,o.useState)(0),_=k[0],C=k[1],F=x(s().mark((function e(){var t,n,a,o;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==u){e.next=2;break}return e.abrupt("return");case 2:return r(!0),t=i.env.CLUSTER_API||"devnet",n=new l.ew(l.Wf(t),"confirmed"),e.next=7,n.getMinimumBalanceForRentExemption(parseInt(u));case 7:a=e.sent,o=a/365.24366032870097,S(a),v(o),C(a/l.j5),w(o/l.j5),r(!1);case 14:case"end":return e.stop()}}),e)}))),E=x(s().mark((function e(){var t,r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(m){e.next=17;break}return e.prev=1,e.next=4,fetch("https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=USD",{method:"GET"});case 4:return t=e.sent,e.t0=JSON,e.next=8,t.text();case 8:e.t1=e.sent,r=e.t0.parse.call(e.t0,e.t1),n=Number(Object.values(r.solana)[0]),p(n),e.next=17;break;case 14:e.prev=14,e.t2=e.catch(1),p(0);case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return(0,o.useEffect)((function(){x(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:E();case 1:case"end":return e.stop()}}),e)})))()})),(0,n.jsxs)(n.Fragment,{children:[t&&(0,n.jsx)(c,{}),(0,n.jsxs)("div",{className:"relative flex flex-col w-full min-w-0 break-words bg-gray-700 border-0 rounded-lg shadow-lg",children:[(0,n.jsx)("div",{className:"px-6 py-6 mb-0 bg-gray-900 rounded-t",children:(0,n.jsxs)("div",{className:"flex justify-between text-center",children:[(0,n.jsx)("h6",{className:"text-xl font-bold text-solana-green",children:"Rent Calculator"}),(0,n.jsx)("button",{className:"px-4 py-2 mr-1 text-xs font-bold uppercase transition-all duration-150 ease-linear bg-gray-500 rounded shadow outline-none text-solana-green active:bg-gray-600 hover:shadow-md focus:outline-none",type:"button",onClick:F,children:"Calculate"})]})}),(0,n.jsxs)("div",{className:"flex-auto px-4 lg:px-10",children:[(0,n.jsx)("hr",{className:"my-6 border-gray-50 border-b-1"}),(0,n.jsxs)("h6",{className:"text-sm font-bold uppercase text-gray-50",children:["Current Price per byte-year:"," ",(0,n.jsx)("span",{className:"font-extrabold text-solana-green",children:"0.00000348 SOL"})]}),(0,n.jsx)("hr",{className:"my-6 border-gray-50 border-b-1"}),(0,n.jsxs)("h6",{className:"text-sm font-bold uppercase text-gray-50",children:["Current Sol price (USD):"," ",(0,n.jsxs)("span",{className:"font-extrabold text-solana-green",children:[m," USD"]})]})]}),(0,n.jsx)("div",{className:"flex-auto px-4 mb-6 lg:px-10",children:(0,n.jsxs)("form",{onSubmit:function(e){e.preventDefault(),F()},children:[(0,n.jsx)("hr",{className:"my-6 border-gray-50 border-b-1"}),(0,n.jsx)("h6",{className:"mt-3 mb-6 text-sm font-bold uppercase text-gray-50",children:"Calculator"}),(0,n.jsxs)("div",{className:"flex flex-wrap",children:[(0,n.jsx)("div",{className:"w-full px-4 lg:w-6/12",children:(0,n.jsxs)("div",{className:"relative w-full mb-3",children:[(0,n.jsx)("label",{className:"block mb-2 text-xs font-bold uppercase text-gray-50",htmlFor:"kilobytes",children:"Kilobytes"}),(0,n.jsx)("input",{type:"number",max:1e4,className:"w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-300 transition-all duration-150 ease-linear bg-white border-0 rounded shadow focus:outline-none focus:ring",value:u,onChange:function(e){d(String(parseInt(e.target.value)||""))}})]})}),(0,n.jsx)("div",{className:"w-full px-4 lg:w-6/12",children:(0,n.jsxs)("span",{className:"block text-xs font-bold uppercase text-gray-50",children:["Approximate cost per epoch:",(0,n.jsx)("hr",{className:"my-1 border-gray-50 border-b-1"}),h.toFixed(0)," LAMPORTS",(0,n.jsx)("br",{})," ",0!==j?j.toFixed(9):0," SOL",(0,n.jsx)("br",{})," $",(j*m).toFixed(5)," USD",(0,n.jsx)("br",{className:"mb-2"}),"Approximate cost for rent-exempt:",(0,n.jsx)("hr",{className:"my-1 border-gray-50 border-b-1"}),y.toFixed(0)," LAMPORTS",(0,n.jsx)("br",{})," ",0!==_?_.toFixed(9):0," ","SOL",(0,n.jsx)("br",{})," $",(_*m).toFixed(5)," USD"]})})]})]})})]})]})},f=function(){return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{className:"flex-grow w-full px-4 mt-12 mb-0",children:(0,n.jsx)("div",{className:"flex flex-wrap",children:(0,n.jsx)("div",{className:"w-full px-4 mx-auto lg:w-10/12",children:(0,n.jsx)(d,{})})})})})}},1922:function(){},6601:function(){},1456:function(){},9214:function(){},5024:function(){}},function(e){e.O(0,[766,189,774,888,179],(function(){return t=8875,e(e.s=t);var t}));var t=e.O();_N_E=t}]);