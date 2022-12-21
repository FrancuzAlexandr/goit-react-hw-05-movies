"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[981],{981:function(r,e,n){n.r(e),n.d(e,{default:function(){return m}});var t=n(861),c=n(885),a=n(757),s=n.n(a),o=n(791),u=n(689),i="ActorsList_actorsList__1yl65",f="ActorsList_actorsList__item__sKKcw",p="ActorsList_actorsList__img__v57-t",h="ActorsList_actorsList__other__cgJC8",l=n(184),v=function(r){var e=r.actors,n=(0,o.useState)([]),t=(0,c.Z)(n,2),a=t[0],s=t[1],u=(0,o.useState)([]),v=(0,c.Z)(u,2),d=v[0],x=v[1];return(0,o.useEffect)((function(){var r=e.filter((function(r){return null!==r.profile_path})),n=e.filter((function(r){return null===r.profile_path}));s(r),x(n)}),[e]),(0,l.jsxs)("ul",{className:i,children:[a&&a.map((function(r){var e=r.id,n=r.name,t=r.character,c=r.profile_path;return(0,l.jsxs)("li",{className:f,children:[(0,l.jsx)("img",{className:p,src:"https://image.tmdb.org/t/p/w500/".concat(c),alt:n,width:"70"}),(0,l.jsxs)("div",{children:[(0,l.jsx)("b",{children:n}),(0,l.jsxs)("p",{children:["Character: ",t]})]})]},e)})),d&&(0,l.jsx)("h2",{className:h,children:"Others actors:"}),d.map((function(r){var e=r.id,n=r.name;return(0,l.jsx)("li",{children:(0,l.jsx)("b",{children:n})},e)}))]})},d=n(854),x=n(562),_=n(392),m=function(){var r=(0,o.useState)([]),e=(0,c.Z)(r,2),n=e[0],a=e[1],i=(0,o.useState)(!1),f=(0,c.Z)(i,2),p=f[0],h=f[1],m=(0,o.useState)(!1),w=(0,c.Z)(m,2),k=w[0],j=w[1],g=(0,u.UO)().movieId;return(0,o.useEffect)((function(){h(!0),(0,t.Z)(s().mark((function r(){var e;return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,(0,_.Nr)(g);case 3:e=r.sent,a(e),h(!1),r.next=12;break;case 8:r.prev=8,r.t0=r.catch(0),h(!1),j(!0);case 12:case"end":return r.stop()}}),r,null,[[0,8]])})))()}),[g]),(0,l.jsxs)(l.Fragment,{children:[p&&(0,l.jsx)(d.a,{}),k&&(0,l.jsx)(x.j,{}),n?(0,l.jsx)(v,{actors:n}):(0,l.jsx)("p",{children:"We don't find any actors for this movie!"})]})}},562:function(r,e,n){n.d(e,{j:function(){return c}});var t=n(184),c=function(){return(0,t.jsx)("div",{children:"Error. Sorry no find any films"})}},854:function(r,e,n){n.d(e,{a:function(){return a}});var t=n(402),c=n(184),a=function(){return(0,c.jsx)("div",{children:(0,c.jsx)(t.VL,{})})}},392:function(r,e,n){n.d(e,{Jz:function(){return h},LZ:function(){return u},Nr:function(){return f},bt:function(){return i},nL:function(){return p}});var t=n(861),c=n(757),a=n.n(c),s="https://api.themoviedb.org/3/",o="2c7f5557ee0d3184d19fc3f4461cd963",u=function(){var r=(0,t.Z)(a().mark((function r(){var e,n;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,fetch("".concat(s,"trending/all/day?api_key=").concat(o));case 2:if(!(e=r.sent).ok){r.next=8;break}return r.next=6,e.json();case 6:return n=r.sent,r.abrupt("return",n.results);case 8:throw new Error("Error responsive");case 9:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),i=function(){var r=(0,t.Z)(a().mark((function r(e){var n,t;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,fetch("".concat(s,"movie/").concat(e,"?api_key=").concat(o,"&language=en-US"));case 2:if(!(n=r.sent).ok){r.next=8;break}return r.next=6,n.json();case 6:return t=r.sent,r.abrupt("return",t);case 8:throw new Error("Error responsive");case 9:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),f=function(){var r=(0,t.Z)(a().mark((function r(e){var n,t;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,fetch("".concat(s,"movie/").concat(e,"/credits?api_key=").concat(o,"&language=en-US"));case 2:if(!(n=r.sent).ok){r.next=8;break}return r.next=6,n.json();case 6:return t=r.sent,r.abrupt("return",t.cast);case 8:throw new Error("Error responsive");case 9:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),p=function(){var r=(0,t.Z)(a().mark((function r(e){var n,t;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,fetch("".concat(s,"movie/").concat(e,"/reviews?api_key=").concat(o,"&language=en-US&page=1"));case 2:if(!(n=r.sent).ok){r.next=8;break}return r.next=6,n.json();case 6:return t=r.sent,r.abrupt("return",t.results);case 8:throw new Error("Error responsive");case 9:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),h=function(){var r=(0,t.Z)(a().mark((function r(e){var n,t;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,fetch("".concat(s,"search/movie?api_key=").concat(o,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"));case 2:if(!(n=r.sent).ok){r.next=8;break}return r.next=6,n.json();case 6:return t=r.sent,r.abrupt("return",t.results);case 8:throw new Error("Error responsive");case 9:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}}]);
//# sourceMappingURL=981.fb7ff830.chunk.js.map