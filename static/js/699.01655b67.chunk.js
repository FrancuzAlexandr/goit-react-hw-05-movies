"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[699],{562:function(n,r,e){e.d(r,{j:function(){return c}});var t=e(184),c=function(){return(0,t.jsx)("div",{children:"Error. Sorry no find any films"})}},854:function(n,r,e){e.d(r,{a:function(){return a}});var t=e(402),c=e(184),a=function(){return(0,c.jsx)("div",{children:(0,c.jsx)(t.VL,{})})}},699:function(n,r,e){e.r(r),e.d(r,{default:function(){return l}});var t=e(861),c=e(885),a=e(757),u=e.n(a),s=e(791),o=e(689),i=e(854),f=e(562),p=e(184),v=function(){return(0,p.jsx)("p",{children:"We don't have any reviews for this movie!"})},h=e(392),l=function(){var n=(0,s.useState)([]),r=(0,c.Z)(n,2),e=r[0],a=r[1],l=(0,s.useState)(!1),x=(0,c.Z)(l,2),d=x[0],w=x[1],k=(0,s.useState)(!1),j=(0,c.Z)(k,2),m=j[0],g=j[1],b=(0,o.UO)().movieId;return(0,s.useEffect)((function(){w(!0),(0,t.Z)(u().mark((function n(){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,h.nL)(b);case 3:r=n.sent,a(r),w(!1),n.next=12;break;case 8:n.prev=8,n.t0=n.catch(0),w(!1),g(!0);case 12:case"end":return n.stop()}}),n,null,[[0,8]])})))()}),[b]),(0,p.jsxs)(p.Fragment,{children:[d?(0,p.jsx)(i.a,{}):null,m?(0,p.jsx)(f.j,{}):null,d||e.length?null:(0,p.jsx)(v,{}),(0,p.jsx)("ul",{children:e.length?e.map((function(n){var r=n.id,e=n.author,t=n.content;return(0,p.jsxs)("li",{children:[(0,p.jsx)("b",{children:e}),(0,p.jsx)("p",{children:t})]},r)})):null})]})}},392:function(n,r,e){e.d(r,{Jz:function(){return v},LZ:function(){return o},Nr:function(){return f},bt:function(){return i},nL:function(){return p}});var t=e(861),c=e(757),a=e.n(c),u="https://api.themoviedb.org/3/",s="2c7f5557ee0d3184d19fc3f4461cd963",o=function(){var n=(0,t.Z)(a().mark((function n(){var r,e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(u,"trending/all/day?api_key=").concat(s));case 2:if(!(r=n.sent).ok){n.next=8;break}return n.next=6,r.json();case 6:return e=n.sent,n.abrupt("return",e.results);case 8:throw new Error("Error responsive");case 9:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),i=function(){var n=(0,t.Z)(a().mark((function n(r){var e,t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(u,"movie/").concat(r,"?api_key=").concat(s,"&language=en-US"));case 2:if(!(e=n.sent).ok){n.next=8;break}return n.next=6,e.json();case 6:return t=n.sent,n.abrupt("return",t);case 8:throw new Error("Error responsive");case 9:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),f=function(){var n=(0,t.Z)(a().mark((function n(r){var e,t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(u,"movie/").concat(r,"/credits?api_key=").concat(s,"&language=en-US"));case 2:if(!(e=n.sent).ok){n.next=8;break}return n.next=6,e.json();case 6:return t=n.sent,n.abrupt("return",t.cast);case 8:throw new Error("Error responsive");case 9:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(a().mark((function n(r){var e,t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(u,"movie/").concat(r,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 2:if(!(e=n.sent).ok){n.next=8;break}return n.next=6,e.json();case 6:return t=n.sent,n.abrupt("return",t.results);case 8:throw new Error("Error responsive");case 9:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),v=function(){var n=(0,t.Z)(a().mark((function n(r){var e,t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(u,"search/movie?api_key=").concat(s,"&language=en-US&query=").concat(r,"&page=1&include_adult=false"));case 2:if(!(e=n.sent).ok){n.next=8;break}return n.next=6,e.json();case 6:return t=n.sent,n.abrupt("return",t.results);case 8:throw new Error("Error responsive");case 9:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=699.01655b67.chunk.js.map