(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{150:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),s=a(15),c=a.n(s),l=(a(78),a(3)),i=a(4),o=a(6),m=a(5),u=a(7),h=(a(80),a(10)),d=a(151),p=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(h.e,{className:"mb-2 shadow rounded"},r.a.createElement(d.a,{to:"/user/"+this.props.item.id,style:{width:"100%"}},r.a.createElement("button",{type:"button",className:"btn btn-light w-100"},r.a.createElement("h3",{className:"m-2 font-weight-bold text-truncate"},this.props.item.name))))}}]),t}(r.a.Component),b=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).handleSearch=function(e){return function(e){var t=e.target.value;if(t.length>=a.props.minLengthSearch){var n=a.filterData(t),r=a.hasNextPage(0,n);a.setState({numFilteredRows:n.length,rowsFiltered:n,currentPage:0,hasPreviousPage:!1,hasNextPage:r})}else a.setState({numFilteredRows:a.state.elements.length,rowsFiltered:a.state.elements,hasPreviousPage:!1,hasNextPage:a.hasNextPage(0,a.state.elements)})}},a.filterData=function(e){return a.state.elements.filter(function(t){var a=e.toLowerCase();return!!t.name.toLowerCase().includes(a)||null})},a.hasNextPage=function(e,t){return t.length>a.props.rowsPerPage&&e*a.props.rowsPerPage+a.props.rowsPerPage<t.length},a.hasPreviousPage=function(e){return e>0},a.handleChangePage=function(e){var t=a.state.currentPage,n=a.state.rowsFiltered;"next"===e&&a.hasNextPage(t,n)&&t++,"previous"===e&&a.hasPreviousPage(t)&&t--,a.setState({currentPage:t,hasPreviousPage:a.hasPreviousPage(t),hasNextPage:a.hasNextPage(t,n)})},a.renderList=function(e){var t=a.state.currentPage*a.props.rowsPerPage,n=t+a.props.rowsPerPage,s=(e=e.slice(t,n)).map(function(e){return r.a.createElement(p,{key:e.id,item:e})});return r.a.createElement(h.c,null,s)},a.state={elements:e.data,rowsFiltered:e.data,numFilteredRows:0,currentPage:0,hasPreviousPage:!1,hasNextPage:a.hasNextPage(0,e.data)},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"list-container"},r.a.createElement(h.c,null,r.a.createElement(h.e,{className:"mt-5 mb-3"},r.a.createElement(h.b,{xs:12,sm:12},r.a.createElement("h1",{className:"display-4 font-weight-bold"},this.props.title))),r.a.createElement(h.e,{className:"mb-2"},r.a.createElement(h.b,{xs:12,sm:12},r.a.createElement(h.d,{className:"searcher",placeholder:"Write to filter",onChange:this.handleSearch("search")}))),r.a.createElement(h.e,{className:"mb-2"},r.a.createElement(h.b,{xs:12,sm:12},this.renderList(this.state.rowsFiltered))),r.a.createElement(h.e,{className:"mb-2"},r.a.createElement(h.b,{xs:6,sm:6},r.a.createElement(h.a,{color:"primary",onClick:function(){return e.handleChangePage("previous")},disabled:!this.state.hasPreviousPage,block:!0},"Previous")),r.a.createElement(h.b,{xs:6,sm:6},r.a.createElement(h.a,{color:"primary",onClick:function(){return e.handleChangePage("next")},disabled:!this.state.hasNextPage,block:!0},"Next"))),r.a.createElement(h.e,{className:"mb-2"},r.a.createElement(h.b,{xs:12,sm:12},this.state.rowsFiltered.length," elements (Page ",this.state.currentPage,")"))))}}]),t}(r.a.Component),g=a(67),E=a(68),f=a(72);function v(){var e=Object(g.a)(["display: inline-block;"]);return v=function(){return e},e}var N=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=Object(f.a)(v());return r.a.createElement("div",{className:"container-fluid",style:{height:"100vh",marginTop:"20%"}},r.a.createElement("div",{className:"row align-items-center"},r.a.createElement("div",{className:"col-sm-12 col-md-12"},r.a.createElement(E.GridLoader,{sizeUnit:"px",size:50,color:"#888C46",className:e}))),r.a.createElement("div",{className:"row align-items-center mt-5"},r.a.createElement("div",{className:"col-sm-12 col-md-12"},r.a.createElement("h2",{className:"font-weight-bold"},"Loading"))))}}]),t}(r.a.Component),w=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container-fluid",style:{height:"100vh",marginTop:"25%"}},r.a.createElement("div",{className:"row align-items-center"},r.a.createElement("div",{className:"col-sm-12 col-md-12"},r.a.createElement("h1",{className:"display-4 text-danger font-weight-bold"},"Ups, something is not working."))),r.a.createElement("div",{className:"row align-items-center"},r.a.createElement("div",{className:"col-sm-12 col-md-12"},r.a.createElement("h3",{className:"font-weight-bold"},"The error was reported to the team."))))}}]),t}(n.Component),j=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).readData=function(e){fetch(e).then(function(e){return e.json()}).then(function(e){var t=e.Brastlewark;a.setState({loaded:!0,elements:t})}).catch(function(e){a.setState({hasError:!0})})},a.state={loaded:!1,elements:[]},a.readData(a.props.dataURL),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=r.a.createElement(N,null);return this.state.hasError?e=r.a.createElement(w,null):this.state.loaded&&(e=r.a.createElement(b,{data:this.state.elements,title:"Users in Brastlewark",rowsPerPage:10,minLengthSearch:1})),r.a.createElement("div",null,r.a.createElement("div",null,e))}}]),t}(r.a.Component),O=a(152),P=a(153),y=a(154),x=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container-fluid",style:{height:"100vh",marginTop:"25%"}},r.a.createElement("div",{className:"row align-items-center"},r.a.createElement("div",{className:"col-sm-12 col-md-12"},r.a.createElement("h1",{className:"display-2 text-danger font-weight-bold"},"Error 404"))),r.a.createElement("div",{className:"row align-items-center"},r.a.createElement("div",{className:"col-sm-12 col-md-12"},r.a.createElement("h3",{className:"font-weight-bold"},"This url does not exist. :("))))}}]),t}(n.Component),k=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.userData;return r.a.createElement("div",{className:"card m-3 shadow p-3 bg-white rounded"},r.a.createElement("img",{className:"card-img-top",src:e.thumbnail,alt:"User"}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},e.name)))}}]),t}(r.a.Component),C=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.list<=0?r.a.createElement("div",null,this.props.emptyMessage):this.props.list.map(function(e,t){return r.a.createElement("li",{key:t,className:"list-group-item text-truncate"},e)});return r.a.createElement("div",{className:"friend-list-container m-3 shadow p-3 bg-white rounded"},r.a.createElement("h4",{className:"font-weight-bold text-truncate"},this.props.title),r.a.createElement("ul",{className:"list-group mt-3"},e))}}]),t}(r.a.Component),L=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"user-info-container m-3 shadow p-3 bg-white rounded"},r.a.createElement("h4",{className:"font-weight-bold"},"User information"),r.a.createElement("div",{className:"row mt-3"},r.a.createElement("div",{className:"col-6 text-sm-center"},r.a.createElement("span",{className:"font-weight-bold"},"Age:")," ",this.props.age),r.a.createElement("div",{className:"col-6 text-sm-center"},r.a.createElement("span",{className:"font-weight-bold"},"Hair color:")," ",this.props.hairColor)),r.a.createElement("div",{className:"row mt-2 md"},r.a.createElement("div",{className:"col-6 text-sm-center"},r.a.createElement("span",{className:"font-weight-bold"},"Height:")," ",this.props.height),r.a.createElement("div",{className:"col-6 text-sm-center"},r.a.createElement("span",{className:"font-weight-bold"},"Weight:")," ",this.props.weight)))}}]),t}(r.a.Component),D=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.userData;return r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-4 col-lg-4"},r.a.createElement(k,{userData:e}),r.a.createElement(d.a,{to:"/"},r.a.createElement("button",{type:"button",className:"btn btn-primary w-75"},"Go to the list!"))),r.a.createElement("div",{className:"col-sm-7 mt-4"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement(L,{hairColor:e.hair_color,height:e.height,weight:e.weight,age:e.age})),r.a.createElement("div",{className:"col-sm-12"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-6"},r.a.createElement(C,{list:e.friends,title:"Friends",emptyMessage:"This user not have friends yet."})),r.a.createElement("div",{className:"col-sm-6"},r.a.createElement(C,{list:e.professions,title:"Professions",emptyMessage:"This user not have professions yet."})))))))}}]),t}(r.a.Component),U=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).readData=function(e){fetch(e).then(function(e){return e.json()}).then(function(e){var t=e.Brastlewark[a.props.id];a.setState({loaded:!0,userData:t})}).catch(function(e){a.setState({hasError:!0})})},a.state={loaded:!1,userData:null,hasError:!1},a.readData(a.props.dataURL),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=r.a.createElement(N,null);return this.state.hasError?e=r.a.createElement(w,null):this.state.loaded&&(e=r.a.createElement(D,{userData:this.state.userData})),r.a.createElement("div",null,r.a.createElement("div",null,e))}}]),t}(r.a.Component),S=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={dataURL:"https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json"},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement(O.a,null,r.a.createElement("div",null,r.a.createElement(P.a,null,r.a.createElement(y.a,{exact:!0,path:"/(mobile_test|)",render:function(){return r.a.createElement(j,{dataURL:e.state.dataURL})}}),r.a.createElement(y.a,{exact:!0,path:"/(mobile_test/user|user)/:id",render:function(t){var a=t.match;return r.a.createElement(U,{id:a.params.id,dataURL:e.state.dataURL})}}),r.a.createElement(y.a,{component:x})))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(148);c.a.render(r.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},73:function(e,t,a){e.exports=a(150)},78:function(e,t,a){},80:function(e,t,a){}},[[73,2,1]]]);
//# sourceMappingURL=main.8dfc2f14.chunk.js.map