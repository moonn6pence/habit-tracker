(this.webpackJsonptemplate=this.webpackJsonptemplate||[]).push([[0],{15:function(t,e,n){},16:function(t,e,n){},22:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),s=n(9),r=n.n(s),i=(n(15),n(6)),o=n(10),b=n(2),l=n(3),u=n(5),h=n(4),d=(n(16),n(0)),j=Object(a.memo)((function(t){var e=c.a.createRef(),n=c.a.createRef();return Object(d.jsxs)("form",{ref:e,className:"add-form",onSubmit:function(a){a.preventDefault();var c=n.current.value;c&&t.onAdd(c),e.current.reset()},children:[Object(d.jsx)("input",{ref:n,type:"text",className:"add-input",placeholder:"Add new habit!"}),Object(d.jsx)("button",{className:"add-button",children:"ADD"})]})})),p=function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(b.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).handleIncrement=function(){t.props.onIncrement(t.props.habit)},t.handleDecrement=function(){t.props.onDecrement(t.props.habit)},t.handleDelete=function(){t.props.onDelete(t.props.habit)},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.props.habit,e=t.name,n=t.count;return Object(d.jsxs)("li",{className:"habit",children:[Object(d.jsx)("span",{className:"habit-name",children:e}),Object(d.jsx)("span",{className:"habit-count",children:n}),Object(d.jsx)("button",{className:"habit-button habit-inc",onClick:this.handleIncrement,children:Object(d.jsx)("i",{className:"fas fa-plus-square"})}),Object(d.jsx)("button",{className:"habit-button habit-dec",onClick:this.handleDecrement,children:Object(d.jsx)("i",{className:"fas fa-minus-square"})}),Object(d.jsx)("button",{className:"habit-button habit-del",onClick:this.handleDelete,children:Object(d.jsx)("i",{className:"fas fa-trash"})})]})}}]),n}(a.PureComponent),m=function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(){return Object(b.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var t=this;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(j,{onAdd:this.props.onAdd}),Object(d.jsx)("ul",{children:this.props.habits.map((function(e){return Object(d.jsx)(p,{habit:e,onIncrement:t.props.onIncrement,onDecrement:t.props.onDecrement,onDelete:t.props.onDelete},e.id)}))}),Object(d.jsx)("button",{className:"habits-reset",onClick:this.props.onReset,children:"Reset All"})]})}}]),n}(a.Component),f=function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(){return Object(b.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("nav",{className:"navbar",children:[Object(d.jsx)("i",{class:"navbar-logo fas fa-leaf"}),Object(d.jsx)("span",{className:"navbar-title",children:"Habit Tracker"}),Object(d.jsx)("span",{className:"navbar-count",children:this.props.total})]})}}]),n}(a.PureComponent),O=function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(b.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={habits:[{id:1,name:"Reading",count:0},{id:2,name:"Running",count:0},{id:3,name:"Coding",count:0}]},t.handleAdd=function(e){var n=[].concat(Object(o.a)(t.state.habits),[{id:Date.now(),name:e,count:0}]);t.setState({habits:n})},t.handleIncrement=function(e){var n=t.state.habits.map((function(t){return t.id===e.id?Object(i.a)(Object(i.a)({},e),{},{count:e.count+1}):t}));t.setState({habits:n})},t.handleDecrement=function(e){var n=t.state.habits.map((function(t){return t.id===e.id?Object(i.a)(Object(i.a)({},e),{},{count:e.count>0?e.count-1:0}):t}));t.setState({habits:n})},t.handleDelete=function(e){var n=t.state.habits.filter((function(t){return t.id!==e.id}));t.setState({habits:n})},t.handleReset=function(){var e=t.state.habits.map((function(t){return 0!==t.count?Object(i.a)(Object(i.a)({},t),{},{count:0}):t}));t.setState({habits:e})},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(f,{total:this.state.habits.filter((function(t){return t.count>0})).length}),Object(d.jsx)(m,{habits:this.state.habits,onAdd:this.handleAdd,onIncrement:this.handleIncrement,onDecrement:this.handleDecrement,onDelete:this.handleDelete,onReset:this.handleReset})]})}}]),n}(a.Component);n(18);r.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(O,{})}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.986eb604.chunk.js.map