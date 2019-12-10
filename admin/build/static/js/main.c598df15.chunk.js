(this["webpackJsonpnews-admin"]=this["webpackJsonpnews-admin"]||[]).push([[0],{150:function(e,t,n){e.exports=n.p+"static/media/logo2.2a731020.png"},155:function(e,t,n){e.exports=n(292)},165:function(e,t,n){},170:function(e,t,n){},190:function(e,t,n){},215:function(e,t){},292:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(20),s=n.n(c),o=n(29),l=n(66),i=n(34),u=n(3),p=n.n(u);function m(){return{news:[],input:"",date:p()(),focused:!1,items:[],select_mode:!1,parent_items:[]}}var h=Object(l.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m(),t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"NEWS_CHANGE":var n=t.payload.news;return Object(i.a)({},e,{news:n});case"INPUT_CHANGE":var a=t.payload.value;return Object(i.a)({},e,{input:a});case"DATE_CHANGE":var r=t.payload.date;return Object(i.a)({},e,{date:r});case"FOCUSE_CHANGE":var c=t.payload.focused;return Object(i.a)({},e,{focused:c});case"RESET_NEWS":return Object(i.a)({},e,{news:[]});case"SELECTED_ITEMS_CHANGE":var s=t.payload.items;return Object(i.a)({},e,{items:s});case"SELECT_MODE_CHANGE":var o=t.payload.select_mode;return Object(i.a)({},e,{select_mode:o});case"PARENT_ITEMS_CHANGE":var l=t.payload.parent_items;return Object(i.a)({},e,{parent_items:l});default:return e}})),d=(n(165),n(11)),E=n.n(d),f=n(24),b=n(25),g=n(27),_=n(26),y=n(28),w=n(50),v=n(38),C=n(32),O=(n(170),n(150)),j=n.n(O),k=n(21),N=n(151),S={news_change:function(e){return{type:"NEWS_CHANGE",payload:{news:e}}},input_change:function(e){return{type:"INPUT_CHANGE",payload:{value:e}}},date_change:function(e){return{type:"DATE_CHANGE",payload:{date:e}}},focuse_change:function(e){return{type:"FOCUSE_CHANGE",payload:{focused:e}}},reset_news:function(){return{type:"RESET_NEWS"}},selected_items_change:function(e){return{type:"SELECTED_ITEMS_CHANGE",payload:{items:e}}},select_mode_change:function(e){return{type:"SELECT_MODE_CHANGE",payload:{select_mode:e}}},parent_items_change:function(e){return{type:"PARENT_ITEMS_CHANGE",payload:{parent_items:e}}}},A=function(e){function t(e){var n;return Object(f.a)(this,t),(n=Object(g.a)(this,Object(_.a)(t).call(this,e))).onCheckedStatusChange=n.onCheckedStatusChange.bind(Object(k.a)(n)),n.state={checked:!1},n}return Object(y.a)(t,e),Object(b.a)(t,[{key:"onCheckedStatusChange",value:function(){this.setState({checked:!this.state.checked}),!0===document.getElementsByClassName("selected_style")[this.props.index].checked?this.props.items.push(this.props.news._id):this.props.items.splice(this.props.index,1),this.props.selected_items_change(this.props.items),this.props.getItems(this.props.items)}},{key:"render",value:function(){console.log("[NewsRow props]: { items: ".concat(this.props.items,", index: ").concat(this.props.index," }")),console.log("[NewsRow state]: { checked: ".concat(this.state.checked," }"));var e=this.props.news;return r.a.createElement("tr",null,r.a.createElement("td",{className:"cb_style"},r.a.createElement("input",{id:this.props.news._id,className:"selected_style",type:"checkbox",onChange:this.onCheckedStatusChange,checked:this.state.checked}),r.a.createElement("label",{htmlFor:this.props.news._id})),r.a.createElement("td",null,p()(1e3*e.timestamp).format("YYYY-MM-DD HH:mm:ss")),r.a.createElement("td",null,p()(1e3*e.event_time).format("YYYY-MM-DD")),r.a.createElement("td",null,e.title),r.a.createElement("td",null,e.summary),r.a.createElement("td",null,e.thumbnail),r.a.createElement("td",null,e.content))}}]),t}(r.a.Component),D=Object(o.b)((function(e){return{items:e.items}}),S)(A),T=n(152),x=n.n(T),I=(n(190),function(e){return Object(C.usePromiseTracker)().promiseInProgress&&r.a.createElement("div",{className:"spinner"},r.a.createElement(x.a,{type:"Audio",color:"#2BAD60",height:100,width:100}))}),M=(n(191),function(e){function t(e){var n;return Object(f.a)(this,t),(n=Object(g.a)(this,Object(_.a)(t).call(this,e))).getNewsApi=function(){var e,t;return E.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,E.a.awrap(fetch("/api/news"));case 2:return e=n.sent,n.next=5,E.a.awrap(e.json());case 5:if(t=n.sent,200===e.status){n.next=8;break}throw new Error(t.message);case 8:return n.abrupt("return",t);case 9:case"end":return n.stop()}}))},n.onConfirmDelete=function(){var e,t;return E.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:e="/api/news",t=document.getElementsByClassName("cb_style"),n.props.parent_items.length>0&&(1===n.props.parent_items.length&&(e="".concat(e,"?id=").concat(n.props.parent_items[0])),n.props.parent_items.length>1&&(e="".concat(e,"?id=").concat(n.props.parent_items.join("&id=")))),Object(C.trackPromise)(fetch(e,{method:"DELETE",mode:"cors"}).then((function(){return n.getNewsApi()})).then((function(e){return n.props.news_change(e.data)})).then((function(){n.selectModeOff(t),alert("Delete succeed")})).catch((function(e){return console.error(e.stack)})));case 4:case"end":return a.stop()}}))},n.onSelectStatusChange=n.onSelectStatusChange.bind(Object(k.a)(n)),n.onConfirmDelete=n.onConfirmDelete.bind(Object(k.a)(n)),n}return Object(y.a)(t,e),Object(b.a)(t,[{key:"componentDidMount",value:function(){var e=this;Object(C.trackPromise)(this.getNewsApi().then((function(t){return e.props.news_change(t.data)})).catch((function(e){return console.error(e.stack)})))}},{key:"selectModeOn",value:function(e){document.getElementById("manage_btn").innerHTML="Cancel",document.getElementById("manage_btn").style.backgroundColor="red",document.getElementById("status_header").style.display="table-cell",document.getElementById("delete_btn").style.display="table-cell";for(var t=0;t<e.length;t+=1)e[t].style.display="table-cell"}},{key:"selectModeOff",value:function(e){document.getElementById("manage_btn").innerHTML="Manage news",document.getElementById("manage_btn").style.backgroundColor="#4CAF50",document.getElementById("status_header").style.display="none",document.getElementById("delete_btn").style.display="none";for(var t=0;t<e.length;t+=1)e[t].style.display="none"}},{key:"getItems",value:function(e){this.props.parent_items_change(e)}},{key:"onSelectStatusChange",value:function(){var e=document.getElementsByClassName("cb_style");!1===this.props.select_mode&&this.selectModeOn(e),!0===this.props.select_mode&&this.selectModeOff(e),this.props.select_mode_change(!this.props.select_mode)}},{key:"render",value:function(){var e=this;console.log("[NewsTable props]: ".concat(JSON.stringify(this.props)));var t=[],n=this.props.section_url.split("/")[1];return this.props.news.filter((function(e){return e.project===n})).forEach((function(n,a){t.push(r.a.createElement(D,{news:n,key:n._id,index:a,getItems:e.getItems.bind(e)}))})),r.a.createElement("div",{className:"newstable"},r.a.createElement("h1",null,"NewsTable"),r.a.createElement("button",{id:"manage_btn",onClick:this.onSelectStatusChange},"Manage news"),r.a.createElement("button",{id:"delete_btn",onClick:function(){Object(N.confirmAlert)({customUI:function(t){var n=t.onClose;return r.a.createElement("div",{className:"custom-ui"},r.a.createElement("h1",null,"Are you sure?"),r.a.createElement("p",null,"You want to delete these news?"),r.a.createElement("button",{onClick:n},"NO"),r.a.createElement("button",{onClick:function(){e.onConfirmDelete(),n()}},"YES"))}})}},"Delete"),r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{id:"status_header"},"Status"),r.a.createElement("th",null,"Date"),r.a.createElement("th",null,"EventTime"),r.a.createElement("th",null,"Title"),r.a.createElement("th",null,"Summary"),r.a.createElement("th",null,"Thumbnail"),r.a.createElement("th",null,"Content"))),r.a.createElement("tbody",null,t)),r.a.createElement(I,null))}}]),t}(r.a.Component)),H=Object(o.b)((function(e){return{news:e.news,select_mode:e.select_mode,parent_items:e.parent_items}}),S)(M),B=n(153),G=function(e){function t(e){var n;return Object(f.a)(this,t),(n=Object(g.a)(this,Object(_.a)(t).call(this,e))).getNewsApi=function(){var e,t;return E.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,E.a.awrap(fetch("/api/news"));case 2:return e=n.sent,n.next=5,E.a.awrap(e.json());case 5:if(t=n.sent,200===e.status){n.next=8;break}throw new Error(t.message);case 8:return n.abrupt("return",t);case 9:case"end":return n.stop()}}))},n.handleSubmit=function(e){var t,a,r;return E.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return e.preventDefault(),n.props.reset_news(),t=new FormData,a=n.props.section_url.split("/")[1],t.append("input",n.props.input),t.append("event_time",n.props.date),t.append("page_url",a),c.next=9,E.a.awrap(fetch("/api/news",{method:"POST",body:t,mode:"cors"}));case 9:return r=c.sent,c.next=12,E.a.awrap(r.json());case 12:200===c.sent.status&&Object(C.trackPromise)(n.getNewsApi().then((function(e){return n.props.news_change(e.data)})).then((function(){return alert("insert succeed")})).catch((function(e){return console.error(e.stack)})));case 14:case"end":return c.stop()}}))},n.handleInputChange=n.handleInputChange.bind(Object(k.a)(n)),n.handleDateChange=n.handleDateChange.bind(Object(k.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(k.a)(n)),n.handleFocuseChange=n.handleFocuseChange.bind(Object(k.a)(n)),n}return Object(y.a)(t,e),Object(b.a)(t,[{key:"handleInputChange",value:function(e){this.props.input_change(e.target.value)}},{key:"handleDateChange",value:function(e){this.props.date_change(e)}},{key:"handleFocuseChange",value:function(e){this.props.focuse_change(e.focused)}},{key:"render",value:function(){return console.log("[AddNewsForm props]: { section_url: ".concat(this.props.section_url,", date: ").concat(this.props.date,", input: ").concat(this.props.input,", focused: ").concat(this.props.focused,"}")),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("label",null,"URL:"),r.a.createElement("div",{className:"url_text"},r.a.createElement("label",null,r.a.createElement("input",{type:"text",onChange:this.handleInputChange,placeholder:"please paste an url here"}))),r.a.createElement(B.SingleDatePicker,{date:this.props.date,id:"datepicker_id",onDateChange:this.handleDateChange,focused:this.props.focused,onFocusChange:this.handleFocuseChange,isOutsideRange:function(){return!1},showClearDate:!0}),r.a.createElement("input",{type:"submit",value:"Submit"}))}}]),t}(r.a.Component),P=Object(o.b)((function(e){return{news:e.news,input:e.input,date:e.date,focused:e.focused}}),S)(G),F=function(e){function t(){return Object(f.a)(this,t),Object(g.a)(this,Object(_.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"section"},r.a.createElement(H,{section_url:this.props.match.url}),r.a.createElement(P,{section_url:this.props.match.url}))}}]),t}(r.a.Component);var L=function(e){return r.a.createElement("div",{className:"nav"},r.a.createElement("h3",null,"Navigation"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(w.b,{to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(w.b,{to:"/linke"},"Linke")),r.a.createElement("li",null,r.a.createElement(w.b,{to:"/dbj"},"DBJ"))))},Y=(n(270),n(290),n(291),function(e){function t(){var e,n;Object(f.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(g.a)(this,(e=Object(_.a)(t)).call.apply(e,[this].concat(r)))).getNewsApi=function(){var e,t;return E.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,E.a.awrap(fetch("/api/news"));case 2:return e=n.sent,n.next=5,E.a.awrap(e.json());case 5:if(t=n.sent,200===e.status){n.next=8;break}throw new Error(t.message);case 8:return n.abrupt("return",t);case 9:case"end":return n.stop()}}))},n}return Object(y.a)(t,e),Object(b.a)(t,[{key:"componentDidMount",value:function(){var e=this;Object(C.trackPromise)(this.getNewsApi().then((function(t){return e.props.news_change(t.data)})).catch((function(e){return console.error(e.stack)})))}},{key:"render",value:function(){return r.a.createElement(w.a,null,r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"header"},r.a.createElement("img",{src:j.a,className:"App-logo",alt:"logo"}),r.a.createElement("h1",null,"Linke Technology")),r.a.createElement(L,null),r.a.createElement(v.a,{exact:!0,path:"/",component:R}),r.a.createElement(v.a,{path:"/linke",component:F}),r.a.createElement(v.a,{path:"/dbj",component:F})))}}]),t}(r.a.Component)),R=function(e){function t(){return Object(f.a)(this,t),Object(g.a)(this,Object(_.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Home"),r.a.createElement("p",{className:"left"},"This is home page"))}}]),t}(r.a.Component),U=Object(o.b)((function(e){return{news:e.news}}),S)(Y),J=document.getElementById("root");s.a.render(r.a.createElement(o.a,{store:h},r.a.createElement(U,null)),J)}},[[155,1,2]]]);
//# sourceMappingURL=main.c598df15.chunk.js.map