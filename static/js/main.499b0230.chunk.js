(this.webpackJsonpmyreact=this.webpackJsonpmyreact||[]).push([[0],{18:function(t,e,n){t.exports=n(42)},23:function(t,e,n){},24:function(t,e,n){},42:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),o=n(11),c=n.n(o),i=(n(23),n(24),n(12)),l=n(13),s=n(16),u=n(14),m=n(17),h=n(15),f=n.n(h),g=function(t){return r.a.createElement("p",{style:{color:t.color}},t.children)},d=function(t){function e(t){var n;return Object(i.a)(this,e),(n=Object(s.a)(this,Object(u.a)(e).call(this,t))).handleClick=function(){f.a.get("https://api.myjson.com/bins/mt9wv").then((function(t){return n.setState({msgList:t.data.msgList})})).catch((function(t){return alert(t)}))},n.state={msgList:[]},n}return Object(m.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this.state.msgList.map((function(t){return r.a.createElement(g,{color:t.color},t.message)}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:this.handleClick},"\u30e1\u30c3\u30bb\u30fc\u30b8\u53d6\u5f97"),t)}}]),e}(r.a.Component),p=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"React\u30cf\u30f3\u30ba\u30aa\u30f3\uff01"),r.a.createElement(d,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.499b0230.chunk.js.map