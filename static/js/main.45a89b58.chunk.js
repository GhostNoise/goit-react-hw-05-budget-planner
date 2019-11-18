(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{29:function(e,n,t){e.exports={form:"Form_form__3jF2f"}},35:function(e,n,t){e.exports=t(56)},55:function(e,n,t){},56:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),u=t(8),o=t.n(u),l=t(6),i=t(9),c=t(26),s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1?arguments[1]:void 0,t=n.type,a=n.payload;switch(t){case"CHANGE_BUDGET":return a;default:return e}},m=t(32),p=[],d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,n=arguments.length>1?arguments[1]:void 0,t=n.type,a=n.payload;switch(t){case"ADD_EXPENSE":return[].concat(Object(m.a)(e),[a]);case"DELETE_EXPENSE":return e.filter(function(e){return e.id!==a});default:return e}},b=Object(i.combineReducers)({budget:s,expenses:d}),f=Object(i.createStore)(b,Object(c.devToolsEnhancer)()),v=function(e){return e.budget},E=function(e){return e.expenses},g=t(10),h=(t(45),t(3)),x=t(4);function y(){var e=Object(h.a)(["\n  display: grid;\n  grid-template-columns: 340px 1fr;\n  align-items: flex-start;\n  grid-gap: 24px;\n  max-width: 960px;\n  padding-left: 16px;\n  padding-right: 16px;\n  margin-left: auto;\n  margin-right: auto;\n"]);return y=function(){return e},e}var O=x.a.div(y()),j=function(e){return{type:"CHANGE_BUDGET",payload:e}},S=t(14),w=t(15),C=t(18),P=t(16),k=t(19),D=t(29),N=t.n(D),_=function(e){var n=e.onSubmit,t=void 0===n?function(){return null}:n,a=e.children;return r.a.createElement("form",{onSubmit:t,className:N.a.form},a)};function B(){var e=Object(h.a)(["\n  display: inline-block;\n  font-size: 20px;\n  color: #171718;\n  cursor: pointer;\n  ","\n"]);return B=function(){return e},e}var A=x.a.label(B(),function(e){return e.customStyles}),T=function(e){var n=e.children,t=e.customStyles;return r.a.createElement(A,{customStyles:t},n)};function z(){var e=Object(h.a)(["\n  color: #171718;\n  font: inherit;\n  font-size: 1.2rem;\n  padding: 16px;\n  border-radius: 4px;\n  border: 1px solid #bdbdbd;\n  width: 100%;\n  outline: 0;\n  &:focus {\n    border: 1px solid #2b32b2;\n  }\n"]);return z=function(){return e},e}var F=x.a.input(z()),G=function(e){var n=e.type,t=void 0===n?"":n,a=e.value,u=void 0===a?"":a,o=e.onChange,l=void 0===o?function(){return null}:o,i=e.name,c=void 0===i?"":i,s=e.placeholder;return r.a.createElement(F,{type:t,value:u,onChange:l,name:c,placeholder:s})};G.defaultProps={type:" text",value:"",onChange:function(){return null},name:""};var X=G;function H(){var e=Object(h.a)(["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  background-color: #3f51b5;\n  border: 0;\n  outline: 0;\n  padding: 8px 24px;\n  border-radius: 4px;\n  cursor: pointer;\n  box-shadow: 0px 2px 1px 1px rgba(0, 0, 0, 0.05);\n  font: inherit;\n  text-transform: uppercase;\n  user-select: none;\n\n  transition: background-color 200ms ease-in-out;\n\n  &:hover {\n    box-shadow: 0px 2px 1px 1px rgba(0, 0, 0, 0.15);\n    background-color: #303f9f;\n  }\n"]);return H=function(){return e},e}var J=x.a.button(H()),L=function(e){var n=e.type,t=void 0===n?"button":n,a=e.label,u=void 0===a?"":a,o=e.onClick,l=void 0===o?function(){return null}:o;return r.a.createElement(J,{type:t,onClick:l},u)},U=function(e){function n(){var e,t;Object(S.a)(this,n);for(var a=arguments.length,r=new Array(a),u=0;u<a;u++)r[u]=arguments[u];return(t=Object(C.a)(this,(e=Object(P.a)(n)).call.apply(e,[this].concat(r)))).state={budget:""},t.handleChange=function(e){t.setState({budget:e.target.value})},t.handleSubmit=function(e){e.preventDefault();var n=t.state.budget,a=t.props.setBudget;Number(n)<=0||!n?g.b.error("Please, enter your budget!"):a(n),t.setState({budget:""})},t}return Object(k.a)(n,e),Object(w.a)(n,[{key:"render",value:function(){var e=this.state.budget;return r.a.createElement(_,{onSubmit:this.handleSubmit},r.a.createElement(T,{customStyles:"\n  margin-bottom: 16px;  \n"},"Enter your total budget",r.a.createElement(X,{type:"number",value:e,onChange:this.handleChange,placeholder:"Enter total budget"})),r.a.createElement(L,{label:"Save",type:"submit"}))}}]),n}(a.Component),I={setBudget:j},R=Object(l.b)(null,I)(U);function V(){var e=Object(h.a)(["\n  margin-top: 0;\n  margin-bottom: 0;\n  font-size: 48px;\n"]);return V=function(){return e},e}function $(){var e=Object(h.a)(["\n  margin-top: 0;\n  margin-bottom: 8px;\n  text-transform: uppercase;\n  font-weight: 500;\n  font-size: 24px;\n"]);return $=function(){return e},e}function q(){var e=Object(h.a)(["\n  text-align: center;\n  padding: 8px 24px;\n  color: ",";\n  user-select: none;\n"]);return q=function(){return e},e}var K=x.a.div(q(),function(e){return e.isPositive?"#388E3C":"#D32F2F"}),M=x.a.p($()),Q=x.a.p(V()),W=function(e){var n=e.label,t=e.value,a=e.isPositive;return r.a.createElement(K,{isPositive:a},r.a.createElement(M,null,n),r.a.createElement(Q,null,t,"\xa0$"))};function Y(){var e=Object(h.a)(["\n  display: inline-flex;\n  justify-content: space-between;\n  align-items: center;\n"]);return Y=function(){return e},e}var Z=x.a.section(Y()),ee=function(e){var n=e.budget,t=function(e){return e.reduce(function(e,n){return e+n.amount},0)}(e.expenses),a=function(e,n){return e-n}(n,t);return r.a.createElement(Z,null,r.a.createElement(W,{label:"Budget",value:n,isPositive:!0}),r.a.createElement(W,{label:"Expenses",value:t}),r.a.createElement(W,{label:"Balance",value:a,isPositive:a>=0}))},ne=Object(l.b)(function(e){return{budget:v(e),expenses:E(e)}})(ee),te=t(30),ae=t.n(te),re=t(31),ue=t(17),oe=function(e){function n(){var e,t;Object(S.a)(this,n);for(var a=arguments.length,r=new Array(a),u=0;u<a;u++)r[u]=arguments[u];return(t=Object(C.a)(this,(e=Object(P.a)(n)).call.apply(e,[this].concat(r)))).state={name:"",amount:""},t.handleChange=function(e){t.setState(Object(ue.a)({},e.target.name,e.target.value))},t.handleSubmit=function(e){e.preventDefault();var n=t.props.newExpense,a=t.state,r=a.name,u=a.amount;r&&u?Number(u)<=0?g.b.warn("Please, enter valid amount"):n(Object(re.a)({},t.state)):g.b.warn("Please, enter a value in all fields"),t.setState({name:"",amount:""})},t}return Object(k.a)(n,e),Object(w.a)(n,[{key:"render",value:function(){var e=this.state,n=e.name,t=e.amount;return r.a.createElement(_,{onSubmit:this.handleSubmit},r.a.createElement(T,{customStyles:"\n  margin-bottom: 16px;\n"},"Enter expense name",r.a.createElement(X,{type:"text",name:"name",placeholder:"Enter expense",value:n,onChange:this.handleChange})),r.a.createElement(T,{customStyles:"\n  margin-bottom: 16px;\n"},"Enter expense amount",r.a.createElement(X,{type:"number",name:"amount",placeholder:"Enter amount",value:t,onChange:this.handleChange})),r.a.createElement(L,{label:"Add",type:"submit"}))}}]),n}(a.Component),le=Object(l.b)(function(e){return{budget:v(e),expenses:E(e)}},function(e){return{newExpense:function(n){return e(function(e){var n=e.name,t=e.amount;return{type:"ADD_EXPENSE",payload:{id:ae.a.generate(),name:n,amount:Number(t)}}}(n))}}})(oe);function ie(){var e=Object(h.a)(["\n  border-collapse: collapse;\n  text-align: center;\n  width: 100%;\n\n  tr {\n    border-bottom: 1px solid #212121;\n  }\n\n  td,\n  th {\n    padding-top: 8px;\n    padding-bottom: 8px;\n  }\n"]);return ie=function(){return e},e}var ce=x.a.table(ie()),se=function(e){var n=e.items,t=void 0===n?[]:n,a=e.deleteExpense;return r.a.createElement(ce,null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Expense name"),r.a.createElement("th",null,"Expense amount"),r.a.createElement("th",null))),r.a.createElement("tbody",null,t.map(function(e){var n=e.id,t=e.name,u=e.amount;return r.a.createElement("tr",{key:n},r.a.createElement("td",null,t),r.a.createElement("td",null,u),r.a.createElement("td",null,r.a.createElement(L,{label:"Delete",onClick:function(){return a(n)}})))})))},me={deleteExpense:function(e){return{type:"DELETE_EXPENSE",payload:e}}},pe=Object(l.b)(function(e){return{items:E(e)}},me)(se),de=function(e){var n=e.expenses;return r.a.createElement(O,null,r.a.createElement(R,null),r.a.createElement(ne,null),r.a.createElement(le,null),n.length>0&&r.a.createElement(pe,null),r.a.createElement(g.a,{position:"top-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!0,closeOnClick:!0,rtl:!1,pauseOnVisibilityChange:!1,draggable:!0,pauseOnHover:!0}))},be=Object(l.b)(function(e){return{expenses:E(e)}})(de);t(55);o.a.render(r.a.createElement(l.a,{store:f},r.a.createElement(be,null)),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.45a89b58.chunk.js.map