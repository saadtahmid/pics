(this.webpackJsonppics=this.webpackJsonppics||[]).push([[0],{19:function(e,t,a){e.exports=a(43)},42:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(16),c=a.n(i),s=a(6),o=a.n(s),u=a(17),l=a(2),m=a(3),p=a(5),h=a(4),f=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={term:""},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"ui segment"},r.a.createElement("form",{className:"ui form",onSubmit:function(t){t.preventDefault(),e.props.onSubmit(e.state.term)}},r.a.createElement("div",{className:"field"},r.a.createElement("label",null,"Image Search"),r.a.createElement("input",{type:"text",value:this.state.term,onChange:function(t){return e.setState({term:t.target.value})}}))))}}]),a}(r.a.Component),v=a(18),g=a.n(v).a.create({baseURL:"https://api.unsplash.com",headers:{Authorization:"Client-ID yb-OBtrNConGXHNmu70qLOgW7uXQUsTdveRn3ix8nyk"}}),d=(a(42),function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).setSpan=function(){var e=n.imageRef.current.clientHeight,t=Math.ceil(e/10);n.setState({span:t})},n.state={span:0},n.imageRef=r.a.createRef(),n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.imageRef.current.addEventListener("load",this.setSpan)}},{key:"render",value:function(){return r.a.createElement("div",{style:{gridRowEnd:"span ".concat(this.state.span)}},r.a.createElement("img",{ref:this.imageRef,alt:this.props.image.description,src:this.props.image.urls.regular}))}}]),a}(r.a.Component)),b=function(e){var t=e.images.map((function(e){return r.a.createElement(d,{key:e.id,image:e})}));return r.a.createElement("div",{className:"image-list"},t)},y=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={images:[]},e.onSearchSubmit=function(){var t=Object(u.a)(o.a.mark((function t(a){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.get("/search/photos",{params:{query:a,per_page:20}});case 2:n=t.sent,e.setState({images:n.data.results});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"ui container",style:{marginTop:"10px"}},r.a.createElement(f,{onSubmit:this.onSearchSubmit}),r.a.createElement(b,{images:this.state.images}))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.2654bbe3.chunk.js.map