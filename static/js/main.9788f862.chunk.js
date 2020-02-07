(this["webpackJsonpcontact-manager"]=this["webpackJsonpcontact-manager"]||[]).push([[0],{38:function(e,a,t){e.exports=t(68)},43:function(e,a,t){},68:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(33),o=t.n(c),l=t(5),s=t(6),i=t(8),m=t(7),u=t(9),p=t(14),d=t(15),h=(t(43),t(44),function(e){return r.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark bg-primary mb-3 py-0"},r.a.createElement("div",{className:"container"},r.a.createElement("a",{href:"/",className:"navbar-brand"},e.branding),r.a.createElement("div",null,r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(p.b,{to:"/",className:"nav-link"},r.a.createElement("i",{className:"fas fa-home"})," Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(p.b,{to:"/contact/add",className:"nav-link"},r.a.createElement("i",{className:"fas fa-plus"})," Add Contact")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(p.b,{to:"/about",className:"nav-link"},r.a.createElement("i",{className:"fas fa-question"})," About"))))))});h.defaultProps={branding:"My App"};var f=h;function b(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"},"About Contact Manager"),r.a.createElement("p",{className:"lead"},"Simple app to manage contacts"),r.a.createElement("p",{className:"text-secondary"},"Version 1.0.0"))}var E=t(2),v=t.n(E),y=t(12),g=t(17),N=t(13),O=t.n(N),j=t(37),k=t(18),C=r.a.createContext(),w=C.Consumer,x=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={contacts:[],dispatch:function(e){return t.setState((function(a){return A(a,e)}))}},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=Object(y.a)(v.a.mark((function e(){var a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("https://jsonplaceholder.typicode.com/users");case 2:a=e.sent,this.setState({contacts:a.data});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(C.Provider,{value:this.state},this.props.children)}}]),a}(n.Component),A=function(e,a){switch(a.type){case"ADD_CONTACT":return Object(k.a)({},e,{contacts:[].concat(Object(j.a)(e.contacts),[a.payload])});case"DELETE_CONTACT":return Object(k.a)({},e,{contacts:e.contacts.filter((function(e){return e.id!==a.payload}))});case"UPDATE_CONTACT":return Object(k.a)({},e,{contacts:e.contacts.map((function(e){return e.id!==a.payload.id?e:a.payload}))});default:return e}},S=t(36),T=t.n(S);function D(e){var a=e.name,t=e.type,n=e.label,c=e.placeholder,o=e.value,l=e.changed,s=e.error;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:a},n),r.a.createElement("input",{type:t,className:T()("form-control form-control-lg",{"is-invalid":s}),placeholder:c,value:o,onChange:l,name:a}),s&&r.a.createElement("div",{className:"invalid-feedback"},s))}D.defaultProps={type:"text"};var P=D,q=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={name:"",email:"",phone:"",errors:{}},t.changed=function(e){return t.setState(Object(g.a)({},e.target.name,e.target.value))},t.submit=function(){var e=Object(y.a)(v.a.mark((function e(a,n){var r,c,o,l,s,i;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r=t.state,c=r.name,o=r.email,l=r.phone,""!==c){e.next=5;break}return t.setState({errors:{name:"Name is required"}}),e.abrupt("return");case 5:if(""!==o){e.next=8;break}return t.setState({errors:{email:"Email is required"}}),e.abrupt("return");case 8:if(""!==l){e.next=11;break}return t.setState({errors:{phone:"Phone is required"}}),e.abrupt("return");case 11:return s={name:c,email:o,phone:l},e.next=14,O.a.post("https://jsonplaceholder.typicode.com/users",s);case 14:201===(i=e.sent).status&&a({type:"ADD_CONTACT",payload:i.data}),t.setState({name:"",email:"",phone:"",errors:{}}),t.props.history.push("/");case 18:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}(),t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this,a=this.state,t=a.name,n=a.email,c=a.phone,o=a.errors;return r.a.createElement(w,null,(function(a){var l=a.dispatch;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"Add Contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:function(a){return e.submit(l,a)}},r.a.createElement(P,{name:"name",label:"Name",placeholder:"Enter Name...",value:t,changed:e.changed,error:o.name}),r.a.createElement(P,{name:"email",type:"email",label:"Email",placeholder:"Enter Email...",value:n,changed:e.changed,error:o.email}),r.a.createElement(P,{name:"phone",label:"Phone",placeholder:"Enter Phone...",value:c,changed:e.changed,error:o.phone}),r.a.createElement("input",{type:"submit",value:"Add",className:"btn btn-light btn-block"}))))}))}}]),a}(n.Component),I=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={showContactInfo:!1},t.onDeleteClick=function(){var e=Object(y.a)(v.a.mark((function e(a,t,n){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.delete("".concat("https://jsonplaceholder.typicode.com/users","/").concat(t));case 2:200===e.sent.status&&a({type:"DELETE_CONTACT",payload:t});case 4:case"end":return e.stop()}}),e)})));return function(a,t,n){return e.apply(this,arguments)}}(),t.onShowClick=function(e){t.setState({showContactInfo:!t.state.showContactInfo})},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this,a=this.props.contact,t=a.id,n=a.name,c=a.email,o=a.phone;return r.a.createElement(w,null,(function(a){return r.a.createElement("div",{className:"card card-body mb-3"},r.a.createElement("h4",null,n,r.a.createElement("i",{onClick:e.onShowClick,className:e.state.showContactInfo?"fas fa-sort-up":"fas fa-sort-down",style:{cursor:"pointer",marginLeft:"5px"}}),r.a.createElement("i",{className:"fas fa-times",style:{cursor:"pointer",color:"red",float:"right"},onClick:function(){return e.onDeleteClick(a.dispatch,t)}}),r.a.createElement(p.b,{to:"/contact/edit/".concat(t)},r.a.createElement("i",{className:"fas fa-pencil-alt",style:{cursor:"pointer",color:"black",float:"right",marginRight:"1em"}}))),e.state.showContactInfo?r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},r.a.createElement("i",{className:"fas fa-envelope mr-2"}),c),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("i",{className:"fas fa-phone-alt mr-2"}),o)):null)}))}}]),a}(n.Component),_=function(e){function a(){return Object(l.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(w,null,(function(e){var a=e.contacts;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"display-4 mb-2"},r.a.createElement("span",{className:"text-primary"},"Contact")," List"),a.map((function(e){return r.a.createElement(I,{key:e.id,contact:e})})))}))}}]),a}(n.Component);function M(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4 text-danger"},"Page Not Found"),r.a.createElement("p",{className:"lead"},"Sorry, that page does not exist."))}var L="https://jsonplaceholder.typicode.com/users",F=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={name:"",email:"",phone:"",errors:{}},t.changed=function(e){return t.setState(Object(g.a)({},e.target.name,e.target.value))},t.submit=function(){var e=Object(y.a)(v.a.mark((function e(a,n){var r,c,o,l,s,i;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r=t.state,c=r.id,o=r.name,l=r.email,s=r.phone,""!==o){e.next=5;break}return t.setState({errors:{name:"Name is required"}}),e.abrupt("return");case 5:if(""!==l){e.next=8;break}return t.setState({errors:{email:"Email is required"}}),e.abrupt("return");case 8:if(""!==s){e.next=11;break}return t.setState({errors:{phone:"Phone is required"}}),e.abrupt("return");case 11:return e.next=13,O.a.put("".concat(L,"/").concat(c),t.state);case 13:i=e.sent,console.log(i),200===i.status&&a({type:"UPDATE_CONTACT",payload:i.data}),t.setState({name:"",email:"",phone:"",errors:{}}),t.props.history.push("/");case 18:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}(),t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=Object(y.a)(v.a.mark((function e(){var a,t,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=this.props.match.params.id,e.next=3,O.a.get("".concat(L,"/").concat(a));case 3:t=e.sent,n=t.data,console.log(n),this.setState(Object(k.a)({},n));case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,a=this.state,t=a.name,n=a.email,c=a.phone,o=a.errors;return r.a.createElement(w,null,(function(a){var l=a.dispatch;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"Edit Contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:function(a){return e.submit(l,a)}},r.a.createElement(P,{name:"name",label:"Name",placeholder:"Enter Name...",value:t,changed:e.changed,error:o.name}),r.a.createElement(P,{name:"email",type:"email",label:"Email",placeholder:"Enter Email...",value:n,changed:e.changed,error:o.email}),r.a.createElement(P,{name:"phone",label:"Phone",placeholder:"Enter Phone...",value:c,changed:e.changed,error:o.phone}),r.a.createElement("input",{type:"submit",value:"Update",className:"btn btn-light btn-block"}))))}))}}]),a}(n.Component),U=function(e){function a(){return Object(l.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(x,null,r.a.createElement(p.a,{basename:""},r.a.createElement("div",{className:"App"},r.a.createElement(f,{branding:"Contact Manager"}),r.a.createElement("div",{className:"container"},r.a.createElement(d.c,null,r.a.createElement(d.a,{exact:!0,path:"/",component:_}),r.a.createElement(d.a,{exact:!0,path:"/contact/add",component:q}),r.a.createElement(d.a,{exact:!0,path:"/contact/edit/:id",component:F}),r.a.createElement(d.a,{exact:!0,path:"/about",component:b}),r.a.createElement(d.a,{component:M}))))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(U,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[38,1,2]]]);
//# sourceMappingURL=main.9788f862.chunk.js.map