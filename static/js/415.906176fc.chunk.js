"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{130:function(t,e,n){n.d(e,{O:function(){return s},Y:function(){return c}});var r=n(470),a=n(731),u=n(184),c="https://image.tmdb.org/t/p/w500/",s=function(t){var e=t.movies,n=(0,r.TH)();return(0,u.jsx)("ul",{className:"Movie_list",children:e.map((function(t){return(0,u.jsx)("li",{className:"Movie_link",children:(0,u.jsxs)(a.OL,{style:function(){return{width:"200px",height:"350px",display:"flex",flexDirection:"column",alignContent:"center",justifyContent:"space-between"}},to:"/movies/".concat(t.id),state:{from:n},children:[(0,u.jsx)("img",{className:"Movie_img",src:c+t.poster_path,alt:t.title,width:200}),t.title]})},t.id)}))})}},415:function(t,e,n){n.r(e);var r=n(885),a=n(791),u=n(545),c=n(130),s=n(184);e.default=function(){var t=(0,a.useState)([]),e=(0,r.Z)(t,2),n=e[0],i=e[1];return(0,a.useEffect)((function(){(0,u.mC)().then(i)}),[]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h1",{className:"Home_title",children:"Most Popular films"}),(0,s.jsx)(c.O,{movies:n})]})}},545:function(t,e,n){n.d(e,{Gk:function(){return l},JZ:function(){return v},Kd:function(){return p},VX:function(){return f},mC:function(){return i},s9:function(){return o}});var r=n(861),a=n(757),u=n.n(a),c=n(388);c.Z.defaults.baseURL="https://api.themoviedb.org/3";var s="74469b9d93972ec6b26a5796c39ad279",i=function(){var t=(0,r.Z)(u().mark((function t(){var e,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/trending/movie/day?api_key=".concat(s));case 2:return e=t.sent,n=e.data.results,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,r.Z)(u().mark((function t(e){var n,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(e,"?api_key=").concat(s,"&language=en-US"));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(u().mark((function t(e){var n,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/search/movie?api_key=".concat(s,"&query=").concat(e,"&language=en-US&page=1&include_adult=false"));case 2:return n=t.sent,r=n.data.results,console.log(r),t.abrupt("return",r);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(u().mark((function t(e){var n,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(e,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 2:return n=t.sent,r=n.data.results,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(u().mark((function t(e){var n,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(e,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return n=t.sent,r=n.data.cast,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),v=function(){var t=(0,r.Z)(u().mark((function t(e){var n,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(e,"?api_key=").concat(s));case 2:return n=t.sent,r=n.data.genres,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=415.906176fc.chunk.js.map