(this["webpackJsonpquicknote-app"]=this["webpackJsonpquicknote-app"]||[]).push([[0],{220:function(t,e){},223:function(t,e,n){"use strict";n.r(e);var a=n(17),c=n.n(a),i=n(16),s=n(21),r=n(35),o=n(30),u=n(32),j=n(0),l=n(270),d=n(265),b=n(267),h=n(8),O=n(268),p=n(256),x=n(258),f=n(274),m=n(261),v=n(264),y=n(275),C=n(131),N=n(259),g=n(260),k=n(262),S=n(263),w=n(65),q=n(152),T=n(153),D=n(7),J=function(t){Object(o.a)(n,t);var e=Object(u.a)(n);function n(t){var a;return Object(s.a)(this,n),(a=e.call(this,t)).handleClick=function(){a.setState({open:!a.state.open})},a.state={open:!1},a}return Object(r.a)(n,[{key:"render",value:function(){var t=this.props,e=t.note,n=t.deleteNote,a=this.state.open;return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsxs)(p.a,{children:[Object(D.jsx)(x.a,{onClick:this.handleClick,children:a?Object(D.jsx)(N.a,{}):Object(D.jsx)(g.a,{})}),Object(D.jsx)(f.a,{primary:e.title}),Object(D.jsx)(x.a,{children:Object(D.jsx)(w.b,{to:{pathname:"/edit",search:"?id=".concat(e.id),state:{title:e.title,text:e.text,id:e.id}},children:Object(D.jsx)(m.a,{children:Object(D.jsx)(k.a,{})})})}),Object(D.jsx)(x.a,{children:Object(D.jsx)(m.a,{onClick:function(){return n(e)},children:Object(D.jsx)(S.a,{})})})]}),Object(D.jsx)(v.a,{in:a,timeout:"auto",unmountOnExit:!0,children:Object(D.jsx)(d.a,{component:"div",disablePadding:!0,children:Object(D.jsx)(f.a,{secondary:Object(D.jsx)(y.a,{mx:4,children:Object(D.jsx)(C.a,{elevation:4,children:Object(D.jsx)(y.a,{p:4,children:Object(D.jsx)(q.a,{children:e.text,remarkPlugins:[T.a]})})})})})})})]})}}]),n}(j.Component),Q=n(150),B=n.n(Q);var I=function(t){var e=t.query,n=t.updateQuery;return Object(D.jsx)(B.a,{value:e,onChange:function(t){return n(t)},onCancelSearch:function(){return n("")}})},L=function(t){Object(o.a)(n,t);var e=Object(u.a)(n);function n(t){var a;return Object(s.a)(this,n),(a=e.call(this,t)).updateQuery=function(t){a.setState({query:t})},a.includes=function(t){var e=a.state.query.trim().toLowerCase();return""===e||t.title.toLowerCase().includes(e)||t.text.toLowerCase().includes(e)},a.state={query:""},a}return Object(r.a)(n,[{key:"render",value:function(){var t=this.props,e=t.notes,n=t.deleteNote,a=t.classes;return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(I,{query:this.state.query,updateQuery:this.updateQuery}),Object(D.jsx)(d.a,{children:e.filter(this.includes).map((function(t,e){return Object(D.jsx)(J,{note:t,deleteNote:n},e)}))}),Object(D.jsx)(w.b,{to:"/add",children:Object(D.jsx)(b.a,{"aria-label":"Add",className:a.fab,children:Object(D.jsx)(O.a,{})})})]})}}]),n}(j.Component),E=Object(h.a)({fab:{position:"absolute",bottom:"2rem",right:"2rem"}})(L),F=n(269),M=n(272),P=n(14),A=n(151),W=n.n(A),z=(n(222),{form:{marginTop:"2rem",marginBottom:"1rem",padding:"1rem"},paper:{marginBottom:"1rem"}}),G=function(t){Object(o.a)(n,t);var e=Object(u.a)(n);function n(t){var a;return Object(s.a)(this,n),(a=e.call(this,t)).updateTitle=function(t){a.setState({title:t.target.value})},a.updateText=function(t){a.setState({text:t})},a.handleSubmit=function(t){t.preventDefault(),a.props.upsertNote(a.state),a.props.history.push("/")},a.handleCancel=function(t){t.preventDefault(),a.props.history.push("/")},a.state={title:"",text:""},a}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var t=this.props.location.state;if(t){var e=t.id,n=t.title,a=t.text;this.setState({id:e,title:n,text:a})}}},{key:"render",value:function(){return Object(D.jsxs)("form",{style:z.form,children:[Object(D.jsx)(C.a,{elevation:3,style:z.paper,children:Object(D.jsx)(F.a,{fullWidth:!0,children:Object(D.jsx)(M.a,{label:"Title",variant:"outlined",value:this.state.title,onChange:this.updateTitle})})}),Object(D.jsx)(W.a,{value:this.state.text,onChange:this.updateText}),Object(D.jsxs)("div",{children:[Object(D.jsx)(m.a,{type:"button",color:"secondary",onClick:this.handleCancel,children:"Cancel"}),Object(D.jsx)(m.a,{type:"submit",color:"primary",onClick:this.handleSubmit,children:"Submit"})]})]})}}]),n}(j.Component),H=Object(P.f)(G),K=n(273),R=function(t){Object(o.a)(n,t);var e=Object(u.a)(n);function n(t){var a;return Object(s.a)(this,n),(a=e.call(this,t)).saveNotes=function(){window.localStorage.setItem("notes",JSON.stringify(a.state.notes))},a.deleteNote=function(t){a.setState((function(e){return{notes:e.notes.filter((function(e){return e.id!==t.id}))}}),a.saveNotes)},a.addNote=function(t){a.setState((function(e){return{notes:[].concat(Object(i.a)(e.notes),[Object.assign(t,{id:Object(K.a)()})])}}),a.saveNotes)},a.editNote=function(t){a.setState((function(e){return{notes:e.notes.map((function(e){return e.id===t.id?t:e}))}}),a.saveNotes)},a.state={notes:[]},a}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var t=window.localStorage.getItem("notes");this.setState({notes:t?JSON.parse(t):[]})}},{key:"render",value:function(){var t=this.state.notes;return Object(D.jsx)(l.a,{children:Object(D.jsxs)(P.c,{children:[Object(D.jsx)(P.a,{exact:!0,path:"/",children:Object(D.jsx)(E,{notes:t,deleteNote:this.deleteNote})}),Object(D.jsx)(P.a,{path:"/add",children:Object(D.jsx)(H,{upsertNote:this.addNote})}),Object(D.jsx)(P.a,{path:"/edit",children:Object(D.jsx)(H,{upsertNote:this.editNote})})]})})}}]),n}(j.Component),U=n(271);c.a.render(Object(D.jsxs)(w.a,{children:[Object(D.jsx)(U.a,{}),Object(D.jsx)(R,{})]}),document.getElementById("root"))}},[[223,1,2]]]);
//# sourceMappingURL=main.cfc7fdd3.chunk.js.map