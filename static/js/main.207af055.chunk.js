(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var s,r=n(7),o=n.n(r),c=n(6),i=n(8),a=n(1),u=(n(13),n(14),n(0)),l=function(t){var e=t.goodies;return Object(u.jsx)("ul",{children:e.map((function(t){return Object(u.jsx)("li",{"data-cy":"Good",children:t},t)}))})},b=n(4),h=n.n(b);!function(t){t[t.NONE=0]="NONE",t[t.ALPHABET=1]="ALPHABET",t[t.LENGTH=2]="LENGTH"}(s||(s={}));var j,N=function(t){var e=t.reset,n=t.reverse,r=t.alphabetSort,o=t.lengthSort,c=t.reverseState,i=t.type;return Object(u.jsxs)("div",{className:"buttons",children:[Object(u.jsx)("button",{type:"button",onClick:r,className:h()("button","is-info",{"is-light":i!==s.ALPHABET}),children:"Sort alphabetically"}),Object(u.jsx)("button",{type:"button",onClick:o,className:h()("button","is-success",{"is-light":i!==s.LENGTH}),children:"Sort by length"}),Object(u.jsx)("button",{type:"button",onClick:n,className:h()("button","is-warning",{"is-light":!c}),children:"Reverse"}),(i!==s.NONE||c)&&Object(u.jsx)("button",{type:"button",onClick:e,className:"button is-danger is-light",children:"Reset"})]})},d=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t[t.NONE=0]="NONE",t[t.ALPHABET=1]="ALPHABET",t[t.LENGTH=2]="LENGTH"}(j||(j={}));var E=function(){var t=Object(a.useState)(j.NONE),e=Object(c.a)(t,2),n=e[0],s=e[1],r=Object(a.useState)(!1),o=Object(c.a)(r,2),b=o[0],h=o[1],E=function(t,e){var n=e.isReversed,s=e.sortType,r=Object(i.a)(t);return r.sort((function(t,e){switch(s){case j.ALPHABET:return t.localeCompare(e);case j.LENGTH:return t.length-e.length;default:return 0}})),n&&r.reverse(),r}(d,{isReversed:b,sortType:n});return Object(u.jsxs)("div",{className:"section content",children:[Object(u.jsx)(N,{reset:function(){s(j.NONE),h(!1)},reverse:function(){h(!b)},alphabetSort:function(){s(j.ALPHABET)},lengthSort:function(){s(j.LENGTH)},reverseState:b,type:n}),Object(u.jsx)(l,{goodies:E})]})};o.a.render(Object(u.jsx)(E,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.207af055.chunk.js.map