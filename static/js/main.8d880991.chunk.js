(this["webpackJsonpmath-magicians"]=this["webpackJsonpmath-magicians"]||[]).push([[0],{15:function(t,n,e){},16:function(t,n,e){"use strict";e.r(n);var a=e(1),o=e.n(a),r=e(5),l=e.n(r),i=e(2),c=e(9),s=e(4),u=e.n(s);function x(t,n,e){var a=u()(t),o=u()(n);if("+"===e)return a.plus(o).toString();if("-"===e)return a.minus(o).toString();if("x"===e)return a.times(o).toString();try{if("\xf7"===e)return a.div(o).toString();if("%"===e)return a.mod(o).toString()}catch(r){return"error: can not divide by zero"}throw Error("Unknown operation '".concat(e,"'"))}var d=e(6),p=e.n(d),b=e(7),j=e.n(b),h=e(0),f=function(t){var n=j.a.td,e=t.data,a=t.handleClick,o=t.otherProps,r=o.next,l=o.operation,i=o.total;return 0===e?Object(h.jsx)("td",{className:n,children:Object(h.jsxs)("div",{children:[Object(h.jsx)("span",{children:i}),Object(h.jsx)("span",{children:l}),Object(h.jsx)("span",{children:r})]})}):Object(h.jsx)("td",{className:n,children:Object(h.jsx)("div",{"aria-hidden":!0,onClick:function(){return a(e)},children:e})})};f.defaultProps={data:"0"};var m=f,O=function(t){var n=p.a.tr,e=t.rowData,a=t.handleClick,o=t.otherProps;return Object(h.jsx)("tr",{className:n,children:e.map((function(t){return Object(h.jsx)(m,{data:t,handleClick:a,otherProps:o},Math.random())}))})},v=e(8),g=e.n(v),_=function(t){var n=g.a.table,e=t.tableData,a=t.handleClick,o=t.otherProps;return Object(h.jsx)("table",{className:n,children:Object(h.jsx)("tbody",{children:e.map((function(t,n){return Object(h.jsx)(O,{handleClick:a,rowData:t,otherProps:o},Math.random())}))})})},C=function(){var t=Object(a.useState)({total:0,next:null,operation:null}),n=Object(c.a)(t,2),e=n[0],o=n[1],r=[[0],["AC","+/-","%","".concat(String.fromCharCode(247))],["7","8","9","x"],["4","5","6","-"],["1","2","3","+"],["0",".","="]];return Object(h.jsx)(_,{otherProps:e,handleClick:function(t){o((function(n){var a=function(t,n){return"AC"===n||Number.isNaN(Number(t.total))?{total:0,next:null,operation:null}:n.match(/[0-9]+/)?"0"===n&&"0"===t.next?{}:t.operation?t.next?{next:t.next+n}:{next:n}:t.next?{next:t.next+n,total:null}:{next:n,total:null}:"."===n?t.next?t.next.includes(".")?{}:{next:"".concat(t.next,".")}:t.operation?{next:"0."}:t.total?t.total.includes(".")?{}:{total:"".concat(t.total," .")}:{total:"0."}:"="===n?t.next&&t.operation?{total:x(t.total,t.next,t.operation),next:null,operation:null}:{}:"+/-"===n?t.next?{next:(-1*parseFloat(t.next)).toString()}:t.total?{total:(-1*parseFloat(t.total)).toString()}:{}:t.operation?!t.total&&"0"!==t.total||t.next?{total:x(t.total,t.next,t.operation),next:null,operation:n}:Object(i.a)(Object(i.a)({},t),{},{operation:n}):t.next?{total:t.next,next:null,operation:n}:{operation:n}}(e,t);return Object(i.a)(Object(i.a)({},n),a)}))},tableData:r})};e(15);l.a.render(Object(h.jsx)(o.a.StrictMode,{children:Object(h.jsx)(C,{})}),document.getElementById("root"))},6:function(t,n,e){t.exports={tr:"TableRow_tr__3top_"}},7:function(t,n,e){t.exports={td:"tableData_td__6_i1P"}},8:function(t,n,e){t.exports={table:"Table_table__3M_gK"}}},[[16,1,2]]]);
//# sourceMappingURL=main.8d880991.chunk.js.map