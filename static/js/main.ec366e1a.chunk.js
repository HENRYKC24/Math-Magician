(this["webpackJsonpmath-magicians"]=this["webpackJsonpmath-magicians"]||[]).push([[0],{32:function(t,e,a){},33:function(t,e,a){"use strict";a.r(e);var n=a(1),c=a.n(n),r=a(16),o=a.n(r),i=a(9),s=a(2),l=a(7),u=a(11),d=a(14),j=a.n(d);function h(t,e,a){var n=j()(t),c=j()(e);if("+"===a)return n.plus(c).toString();if("-"===a)return n.minus(c).toString();if("x"===a)return n.times(c).toString();try{if("\xf7"===a)return n.div(c).toString();if("%"===a)return n.mod(c).toString()}catch(r){return"error: can not divide by zero"}throw Error("Unknown operation '".concat(a,"'"))}var b=a(0),x=function(t){var e=t.data,a=t.handleClick,n=t.otherProps,c=n.next,r=n.operation,o=n.total;return 0===e?Object(b.jsx)("td",{className:"td",children:Object(b.jsx)("div",{children:Object(b.jsx)("span",{className:"result",children:"".concat(0===o||o?o:"").concat(0===r||r?r:"").concat(0===c||c?c:"")})})}):Object(b.jsx)("td",{className:"td",children:Object(b.jsx)("div",{className:"div".concat(function(t){var e=["\xf7","-","+","%","+/-","=","."];return e.includes(t)?["Divide","Subtract","Add","Modulus","PlusMinus","Equal","Dot"][e.indexOf(t)]:t}(e)),"aria-hidden":!0,onClick:function(){return a(e)},children:e})})};x.defaultProps={data:"0"};var m=x,p=function(t){var e=t.rowData,a=t.handleClick,n=t.otherProps;return Object(b.jsx)("tr",{className:"tr",children:e.map((function(t){return Object(b.jsx)(m,{data:t,handleClick:a,otherProps:n},Math.random())}))})},O=function(t){var e=t.tableData,a=t.handleClick,n=t.otherProps;return Object(b.jsx)("table",{className:"table",children:Object(b.jsx)("tbody",{children:e.map((function(t){return Object(b.jsx)(p,{handleClick:a,rowData:t,otherProps:n},Math.random())}))})})},f=function(){var t=Object(n.useState)({total:0,next:null,operation:null}),e=Object(u.a)(t,2),a=e[0],c=e[1],r=[[0],["AC","+/-","%","".concat(String.fromCharCode(247))],["7","8","9","x"],["4","5","6","-"],["1","2","3","+"],["0",".","="]];return Object(b.jsx)(O,{otherProps:a,handleClick:function(t){c((function(e){var n=function(t,e){return"AC"===e||Number.isNaN(Number(t.total))?{total:0,next:null,operation:null}:e.match(/[0-9]+/)?"0"===e&&"0"===t.next?{}:t.operation?t.next?{next:t.next+e}:{next:e}:t.next?{next:t.next+e,total:null}:{next:e,total:null}:"."===e?t.next?t.next.includes(".")?{}:{next:"".concat(t.next,".")}:t.operation?{next:"0."}:t.total?t.total.includes(".")?{}:{total:"".concat(t.total," .")}:{total:"0."}:"="===e?t.next&&t.operation?{total:h(t.total,t.next,t.operation),next:null,operation:null}:{}:"+/-"===e?t.next?{next:(-1*parseFloat(t.next)).toString()}:t.total?{total:(-1*parseFloat(t.total)).toString()}:{}:t.operation?!t.total&&"0"!==t.total||t.next?{total:h(t.total,t.next,t.operation),next:null,operation:e}:Object(l.a)(Object(l.a)({},t),{},{operation:e}):t.next?{total:t.next,next:null,operation:e}:{operation:e}}(a,t);return Object(l.a)(Object(l.a)({},e),n)}))},tableData:r})},v=function(){return Object(b.jsxs)("div",{className:"calculator-page",children:[Object(b.jsx)("p",{className:"lets",children:"Let's do some math!"}),Object(b.jsx)(f,{})]})},g=function(t){var e=t.route,a=t.name;return t.index<2?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("li",{children:Object(b.jsx)(i.b,{className:"item",to:e,activeClassName:"active-link",exact:!0,children:a})}),"|"]}):Object(b.jsx)("li",{children:Object(b.jsx)(i.b,{className:"item",to:e,activeClassName:"active-link",exact:!0,children:a})})},N=function(){return Object(b.jsxs)("nav",{className:"navbar",children:[Object(b.jsx)("h1",{className:"app-name",children:"Math Magicians"}),Object(b.jsx)("ul",{className:"nav-items",children:[{route:"/",name:"Home"},{route:"/calculator",name:"Calculator"},{route:"/quotes",name:"Quotes"}].map((function(t,e){return Object(b.jsx)(g,{index:e,name:t.name,route:t.route},Math.random())}))})]})},C=function(){return Object(b.jsxs)("div",{className:"home",children:[Object(b.jsx)("h1",{className:"welcome",children:"Welcome to our page!"}),Object(b.jsx)("p",{className:"para",children:"Mathematics, the science of structure, order, and relation that has evolved from elemental practices of counting, measuring, and describing the shapes of objects. It deals with logical reasoning and quantitative calculation, and its development has involved an increasing degree of idealization and abstraction of its subject matter. Since the 17th century, mathematics has been an indispensable adjunct to the physical sciences and technology, and in more recent times it has assumed a similar role in the quantitative aspects of the life sciences."}),Object(b.jsx)("p",{className:"para",children:"In many cultures\u2014under the stimulus of the needs of practical pursuits, such as commerce and agriculture\u2014mathematics has developed far beyond basic counting. This growth has been greatest in societies complex enough to sustain these activities and to provide leisure for contemplation and the opportunity to build on the achievements of earlier mathematicians."})]})},k=function(){var t=Object(n.useState)({dataAvailable:!1,quote:"",author:""}),e=Object(u.a)(t,2),a=e[0],c=e[1],r=function(){c((function(){return{dataAvailable:!1}})),fetch("https://random-math-quote-api.herokuapp.com/").then((function(t){return t.json()})).then((function(t){return c(Object(l.a)(Object(l.a)({},t),{},{dataAvailable:!0}))}))};Object(n.useEffect)((function(){return r()}),[]);var o=a.dataAvailable,i=a.quote,s=a.author;return Object(b.jsxs)("div",{className:"quotes",children:[!o&&Object(b.jsx)("p",{className:"loading",children:"Loading..."}),Object(b.jsxs)("p",{className:"quote",children:[i&&"".concat(i),Object(b.jsx)("br",{}),Object(b.jsx)("span",{className:"quote",children:i&&"- ".concat(s)})]}),i&&Object(b.jsx)("button",{className:"change-quote",type:"button",onClick:r,children:"Change Quote"})]})},S=function(){return Object(b.jsx)("div",{className:"not-found",children:Object(b.jsx)("h1",{children:"Page Not Found!"})})},y=function(){return Object(b.jsx)("footer",{className:"footer",children:Object(b.jsx)("p",{className:"footer-text",children:"Created with \ud83d\udc96 by Henry Kc at Microverse Inc., US."})})},q=function(){return Object(b.jsxs)("div",{className:"main",children:[Object(b.jsxs)("section",{children:[Object(b.jsx)(N,{}),Object(b.jsxs)(s.c,{children:[Object(b.jsx)(s.a,{path:"/calculator",children:Object(b.jsx)(v,{})}),Object(b.jsx)(s.a,{path:"/quotes",children:Object(b.jsx)(k,{})}),Object(b.jsx)(s.a,{exact:!0,path:"/",children:Object(b.jsx)(C,{})}),Object(b.jsx)(s.a,{path:"*",children:Object(b.jsx)(S,{})})]})]}),Object(b.jsx)("section",{children:Object(b.jsx)(y,{})})]})};a(32);o.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(i.a,{basename:"/Math-Magicians-React-Redux",children:Object(b.jsx)(q,{})})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.ec366e1a.chunk.js.map