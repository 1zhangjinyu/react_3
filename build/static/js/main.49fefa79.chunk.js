(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{103:function(e,t,n){},175:function(e,t,n){},176:function(e,t,n){},178:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(9),l=n.n(o),r=n(53),i=n(13),s=n(14),u=n(16),m=n(15),p=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).handleChange=function(t){e.setState({inpValue:t.target.value})},e.state={inpValue:""},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement("label",{htmlFor:"inp"},"todoList"),c.a.createElement("input",{id:"inp",value:this.state.inpValue,type:"text",onChange:this.handleChange}),c.a.createElement("button",{onClick:function(){e.props.addTodo(e.state.inpValue)}},"\u6dfb\u52a0"))}}]),n}(a.Component),d=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).renderTodos=function(t){var n=e.props,a=n.toggle,o=n.removeTodo;return n.todos.map((function(e,n){if(t==e.done)return c.a.createElement("li",null,c.a.createElement("input",{onClick:function(){return a(n)},checked:e.done,type:"checkbox"}),c.a.createElement("span",{dangerouslySetInnerHTML:{__html:e.title}}),c.a.createElement("button",{onClick:function(){return o(n)}},"\u5220\u9664"))}))},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props.todos.filter((function(e){return!e.done})),t=this.props.todos.filter((function(e){return e.done}));return c.a.createElement("div",null,c.a.createElement("h2",null,"\u6b63\u5728\u8fdb\u884c",e.length),c.a.createElement("ul",null,this.renderTodos(!1)),c.a.createElement("h2",null,"\u5df2\u7ecf\u5b8c\u6210",t.length),c.a.createElement("ul",null,this.renderTodos(!0)))}}]),n}(a.Component),h=(a.Component,n(103),a.Component,c.a.createContext()),f=function(){return c.a.createElement("div",null,c.a.createElement("h2",null,"Demo02"),c.a.createElement("ul",null,c.a.createElement(h.Consumer,null,(function(e){return e.data.map((function(e){return c.a.createElement("li",{key:e},e)}))})),c.a.createElement(h.Consumer,null,(function(e){var t=e.changeData;return c.a.createElement("button",{onClick:function(){return t(123)}},"\u70b9\u51fb")}))))},E=function(e){return c.a.createElement("div",{style:{width:500,height:500,backgroundColor:"pink"}},c.a.createElement("h2",null,"Demo01"),c.a.createElement("ul",null,c.a.createElement(h.Consumer,null,(function(e){return e.data.map((function(e){return c.a.createElement("li",{key:e},e)}))}))),c.a.createElement(f,null))};E.defaultProps={name:"Tom"};var b=n(10),g=n(38),v=n(11),y=function(e){return c.a.createElement("div",null,c.a.createElement("i",{style:{fontSize:100,color:"red"},className:"iconfont icon-gouwuche1"}),c.a.createElement("button",{onClick:e.history.goBack},"\u8fd4\u56de"))},k=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={selectedTab:"home"},a}return Object(s.a)(n,[{key:"render",value:function(){var e=this,t=this.props.location.pathname;return console.log(t.split("/")),t.split("/").length>2?null:c.a.createElement("div",{style:{position:"fixed",width:"100%",bottom:0}},c.a.createElement(b.e,{unselectedTintColor:"#949494",tintColor:"black",barTintColor:"white"},c.a.createElement(b.e.Item,{title:"\u9996\u9875",key:"home",icon:c.a.createElement("i",{className:"iconfont icon-Homehomepagemenu"}),selectedIcon:c.a.createElement("i",{className:"iconfont icon-Homehomepagemenu1"}),selected:"/home"===t,onPress:function(){e.props.history.push("/home")},"data-seed":"logId"}),c.a.createElement(b.e.Item,{icon:c.a.createElement("i",{className:"iconfont icon-gouwuche1"}),selectedIcon:c.a.createElement("i",{className:"iconfont icon-gouwuche"}),title:"\u8d2d\u7269\u8f66",key:"cart",selected:"/cart"===t,onPress:function(){e.props.history.push("/cart")},"data-seed":"logId1"}),c.a.createElement(b.e.Item,{icon:c.a.createElement("i",{className:"iconfont icon-dingdan"}),selectedIcon:c.a.createElement("i",{className:"iconfont icon-icon"}),title:"\u8ba2\u5355\u5217\u8868",key:"list",selected:"/list"===t,onPress:function(){e.props.history.push("/list")}}),c.a.createElement(b.e.Item,{icon:c.a.createElement("i",{className:"iconfont icon-wode"}),selectedIcon:c.a.createElement("i",{className:"iconfont icon-wodedangxuan"}),title:"\u6211\u7684\u6dd8\u5b9d",key:"my",selected:"/my"===t,onPress:function(){e.props.history.push("/my")}})))}}]),n}(c.a.Component),j=Object(v.g)(k),X=function(){return c.a.createElement("div",null,c.a.createElement("i",{style:{fontSize:100,color:"red"},className:"iconfont icon-dingdan"}))},C=function(){return c.a.createElement("div",null,c.a.createElement("i",{style:{fontSize:100,color:"red"},className:"iconfont icon-wode"}))},O=(n(175),function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={data:["1","2","3","4"],imgHeight:176},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){e.setState({data:["TB15tIjGVXXXXcoapXXSutbFXXX","TB1CWf9KpXXXXbuXpXXSutbFXXX.jpg_q50","TB15tIjGVXXXXcoapXXSutbFXXX","TB1CWf9KpXXXXbuXpXXSutbFXXX.jpg_q50"]})}),1e3)}},{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement("div",{className:"top"},c.a.createElement("span",null,"\u6dd8"),c.a.createElement("input",{onClick:function(){e.props.history.push("/home/search")},className:"inp",type:"text",placeholder:"\u5bfb\u627e\u5b9d\u8d1d\u5e97\u94fa"})),c.a.createElement(b.a,{autoplay:!0,infinite:!0},this.state.data.map((function(t){return c.a.createElement("a",{key:t,href:"/home/xiang",style:{display:"inline-block",width:"100%",height:e.state.imgHeight}},c.a.createElement("img",{src:"https://aecpm.alicdn.com/simba/img/".concat(t,".jpg"),alt:"",style:{width:"100%",verticalAlign:"top"},onLoad:function(){window.dispatchEvent(new Event("resize")),e.setState({imgHeight:"auto"})}}))}))),c.a.createElement("div",{className:"goods"},[1,2,3,4,5,6,7,8,9,10].map((function(t){return c.a.createElement("div",{className:"detail",onClick:function(){return e.props.history.push("/home/xiang")}},c.a.createElement("img",{src:"http://gw1.alicdn.com/bao/uploaded/i4/4016360826/O1CN01l8anxz1HyLkbnxg5n_!!4016360826.jpg_250x250.jpg"}),c.a.createElement("p",null,"\uffe5123"),c.a.createElement("p",null,"\u84dd\u5c7f \u5e03\u5409\u5c9b\u751f\u65e5\u86cb\u7cd5"))})))),c.a.createElement("div",{className:"kong"}))}}]),n}(c.a.Component)),N=(n(176),function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={selectedTab:"shop"},a}return Object(s.a)(n,[{key:"render",value:function(){var e=this,t=this.props.location.pathname;return c.a.createElement("div",null,c.a.createElement("div",{className:"back"},c.a.createElement(b.c,{mode:"light",icon:c.a.createElement(b.b,{type:"left"}),onLeftClick:function(){return e.props.history.push("/")}},"\u5546\u54c1\u8be6\u60c5")),c.a.createElement("div",null,c.a.createElement("img",{style:{width:"100%"},src:"http://img.alicdn.com/imgextra/i4/4016360826/O1CN01l8anxz1HyLkbnxg5n_!!4016360826.jpg_640x640q80_.webp"})),c.a.createElement("div",{style:{position:"fixed",width:"100%",bottom:0}},c.a.createElement(b.e,{unselectedTintColor:"#949494",tintColor:"black",barTintColor:"white"},c.a.createElement(b.e.Item,{title:"\u5e97\u94fa",key:"shop",icon:c.a.createElement("i",{className:"iconfont icon-dianpu"}),selectedIcon:c.a.createElement("i",{className:"iconfont icon-dianpu"}),selected:"/shop"===t,onPress:function(){e.props.history.push("/shop")},"data-seed":"logId"}),c.a.createElement(b.e.Item,{icon:c.a.createElement("i",{className:"iconfont icon-kefu"}),selectedIcon:c.a.createElement("i",{className:"iconfont icon-kefu"}),title:"\u5ba2\u670d",key:"kefu",selected:"/kefu"===t,onPress:function(){e.props.history.push("/kefu")},"data-seed":"logId1"}),c.a.createElement(b.e.Item,{icon:c.a.createElement("i",{className:"iconfont icon-shoucang"}),selectedIcon:c.a.createElement("i",{className:"iconfont icon-shoucang"}),title:"\u6536\u85cf",key:"collect",selected:"/collect"===t,onPress:function(){e.props.history.push("/collect")}}),c.a.createElement(b.e.Item,{icon:c.a.createElement("button",{className:"shop"},"\u52a0\u5165\u8d2d\u7269\u8f66")}),c.a.createElement(b.e.Item,{icon:c.a.createElement("button",{className:"buy"},"\u7acb\u5373\u8d2d\u4e70")}))))}}]),n}(a.Component)),I=Object(v.g)(N),w=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.autoFocusInst.focus()}},{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement(b.d,{placeholder:"\u5b9d\u8d1d",onCancel:function(){e.props.history.push("/")},ref:function(t){return e.autoFocusInst=t}}),c.a.createElement(b.f,null))}}]),n}(c.a.Component),x=function(){return c.a.createElement(g.a,null,c.a.createElement(v.d,null,c.a.createElement(v.b,{exact:!0,path:"/home",component:O}),"       ",c.a.createElement(v.b,{path:"/cart",component:y}),c.a.createElement(v.b,{path:"/list",component:X}),c.a.createElement(v.b,{path:"/my",component:C}),c.a.createElement(v.b,{path:"/home/xiang",component:I}),c.a.createElement(v.b,{path:"/home/search",component:w}),c.a.createElement(v.b,{render:function(){return c.a.createElement(v.a,{to:"/home"})}})),c.a.createElement(j,null))},T=function(e,t){var n=function(n){Object(u.a)(o,n);var a=Object(m.a)(o);function o(){var e;return Object(i.a)(this,o),(e=a.call(this)).state={data:[]},e}return Object(s.a)(o,[{key:"componentDidMount",value:function(){var e=this;fetch(t).then((function(e){return e.json()})).then((function(t){return e.setState({data:t.data})}))}},{key:"render",value:function(){return c.a.createElement(e,Object.assign({},this.props,{data:this.state.data}))}}]),o}(a.Component);return n.disPlayName="withFetch(".concat(e.name,")"),n};T((function(e){return c.a.createElement("div",null,c.a.createElement("h1",null,"\u6807\u9898",e.name),c.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.data.content}}))}),"https://cnodejs.org/api/v1/topic/5433d5e4e737cbe96dcef312"),T((function(e){return console.log(e),console.log(e.data),c.a.createElement("ul",null,e.data.map((function(e){return c.a.createElement("li",null,e.title)})))}),"https://cnodejs.org/api/v1/topics"),n(55),n(177);l.a.render(c.a.createElement(x,null),document.getElementById("root"))},98:function(e,t,n){e.exports=n(178)}},[[98,1,2]]]);
//# sourceMappingURL=main.49fefa79.chunk.js.map