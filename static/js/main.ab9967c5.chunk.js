(this["webpackJsonpweb-journal"]=this["webpackJsonpweb-journal"]||[]).push([[0],{102:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(16),r=t.n(c),o=t(14),s=t(21),m=t(136),i=t(128),u=t(139),d=t(130),E=t(36),p=t(138),g=t(56),b=t.n(g),h=function(){var e=function(){var e,a,t,n,l=new Date,c=l.getMonth(),r=l.getDay(),o=l.getDate(),s=l.getFullYear(),m=l.getSeconds(),i=l.getMinutes(),u=l.getHours(),d="",E="",p="",g="";u>12?(d=u-12,g="pm"):g=12===(d=u)?"pm":"am",d<10&&(d="0"+d),p=m<10?"0"+m:m,E=i<10?"0"+i:i,e=["January","February","March","April","May","June","July","August","September","October","November","December"][c],a=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][r],t=o,n=s,document.querySelector(".date").innerHTML="Date: ".concat(a,", ").concat(t," ").concat(e," ").concat(n,". | Time: ").concat(d,":").concat(E,":").concat(p).concat(g);document.querySelector(".copyright")};setInterval(e,1e3);var a=Object(i.a)((function(e){return{iconise:{display:"flex","& > *":{margin:e.spacing(1)}},righted:{position:"absolute",right:0},barback:{backgroundColor:"#81d4fa"}}}))();return l.a.createElement("div",null,l.a.createElement(u.a,{className:a.barback,position:"static","padding-right":"-1px"},l.a.createElement(d.a,null,l.a.createElement("span",{className:a.iconise},l.a.createElement(p.a,{alt:"Web Journal",src:"web-logo.jpg"})),l.a.createElement(E.a,null,l.a.createElement("h2",{className:"web-title"},"WEB JOURNAL")),l.a.createElement("span",{className:"cub-span"},l.a.createElement("img",{alt:"web-logo",src:b.a,className:"cub"})))),l.a.createElement("div",{onClick:e},l.a.createElement("h3",{align:"center",id:"welcome"},l.a.createElement("p",{className:"date"}))))},f=t(60),N=t.n(f),v=t(131),y=t(35),C=t.n(y),O=Object(i.a)((function(e){return{button:{margin:e.spacing(1),borderRadius:20},home:{}}})),j=function(){var e=O();return l.a.createElement("div",null,l.a.createElement("div",{class:"navbar"},l.a.createElement("a",{href:"#",className:e.home},l.a.createElement(C.a,null),"HOME"),l.a.createElement("div",{class:"dropdown"},l.a.createElement("button",{class:"dropbtn"},"CATEGORIES "),l.a.createElement("div",{class:"dropdown-content"},l.a.createElement("a",{href:"#"},"Link 1"),l.a.createElement("a",{href:"#"},"Link 2"),l.a.createElement("a",{href:"#"},"Link 3"))),l.a.createElement("a",{href:"#news"},"ABOUT US"),l.a.createElement("a",{href:"#news"},"CONTACT US"),l.a.createElement("div",{className:"article-search"},l.a.createElement(v.a,{variant:"contained",color:"primary",className:e.button},l.a.createElement(N.a,null),"Search"),l.a.createElement("input",{type:"text",id:"article-searcher",className:"searchbox",placeholder:"Search article by title",onKeyUp:function(){var e=document.getElementById("article-searcher").value;e=e.toLowerCase();for(var a=document.getElementsByClassName("list-group-item"),t=0;t<a.length;t++)a[t].innerHTML.toLowerCase().includes(e)?a[t].parentElement.style.display="block":a[t].parentElement.style.display="none"}}))),l.a.createElement("div",null,l.a.createElement("p",null)))},k=t(9),x=t(132),L=t(140),U=t(133),S=t(134),w=t(135),R=t(62),A=t.n(R),T=t(63),F=t.n(T),q=t(137),D=t(65),P=t.n(D),J=t(66),M=t.n(J),B=t(67),W=t.n(B),H=t(64),I=t.n(H),Y=Object(i.a)((function(e){return{root:{width:"100%",backgroundColor:e.palette.background.paper}}})),G=function(){var e=Y(),a=l.a.useState(1),t=Object(k.a)(a,2),n=t[0],c=t[1],r=function(e,a){c(a)},s=l.a.useState(!0),m=Object(k.a)(s,2),i=m[0],u=m[1];return l.a.createElement("div",{className:e.root},l.a.createElement(x.a,{component:"nav","aria-label":"main mailbox folders"},l.a.createElement(L.a,{button:!0,selected:0===n,onClick:function(e){return r(0,0)}},l.a.createElement(U.a,null,l.a.createElement(C.a,null)),l.a.createElement(o.b,{to:"/"},l.a.createElement(S.a,{primary:"JOURNAL"}))),l.a.createElement(L.a,{button:!0,selected:1===n,onClick:function(e){return r(0,1)}},l.a.createElement(U.a,null,l.a.createElement(A.a,null)),l.a.createElement(o.b,{to:"/customers"},l.a.createElement(S.a,{primary:"Articles"}))),l.a.createElement(L.a,{button:!0,selected:0===n,onClick:function(e){return r(0,0)}},l.a.createElement(U.a,null,l.a.createElement(F.a,null)),l.a.createElement(o.b,{to:"/add"},l.a.createElement(S.a,{primary:"New Article"})))),l.a.createElement(w.a,null),l.a.createElement(x.a,{component:"nav","aria-label":"secondary mailbox folder"},l.a.createElement(L.a,{button:!0,selected:2===n,onClick:function(e){return r(0,2)}},l.a.createElement(S.a,{primary:"Top Articles"})),l.a.createElement(L.a,{button:!0,onClick:function(){u(!i)}},l.a.createElement(U.a,null,l.a.createElement(I.a,null)),l.a.createElement(S.a,{primary:"Recent Articles"}),i?l.a.createElement(P.a,null):l.a.createElement(M.a,null)),l.a.createElement(q.a,{in:i,timeout:"auto",unmountOnExit:!0},l.a.createElement(x.a,{component:"div",disablePadding:!0},l.a.createElement(L.a,{button:!0,className:e.nested},l.a.createElement(U.a,null,l.a.createElement(W.a,null)),l.a.createElement(S.a,{primary:"Starred"}))))))},K=(t(84),t(46),t(68)),$=t.n(K).a.create({baseURL:"https://cub-tapestry.herokuapp.com",headers:{"Content-type":"application/json","Access-Control-Allow-Origin":"*"}}),z=function(){return $.get("/customers")},Q=function(e){return $.get("/customers/".concat(e))},V=function(e){return $.post("/customers",e)},X=function(e,a){return $.put("/customers/".concat(e),a)},Z=function(e){return $.delete("/customers/".concat(e))},_=function(){return l.a.createElement("div",{className:""},l.a.createElement(m.a,{container:!0,spacing:3},l.a.createElement(m.a,{item:!0,xs:12,sm:10,className:"appContent"},l.a.createElement("p",null,"Web journal is a collection of links to various online resources")),l.a.createElement(m.a,{item:!0,xs:12,sm:2},l.a.createElement("p",null," ."))))},ee=t(25),ae=t(22),te=(t(55),function(){var e={id:null,title:"",category:"",description:"",source:"",URL:"",author:"",tags:"",published:!1},a=Object(n.useState)(e),t=Object(k.a)(a,2),c=t[0],r=t[1],o=Object(n.useState)(!1),s=Object(k.a)(o,2),m=s[0],i=s[1],u=function(e){var a=e.target,t=a.name,n=a.value;r(Object(ae.a)(Object(ae.a)({},c),{},Object(ee.a)({},t,n)))};return l.a.createElement("div",{className:"customer-form"},l.a.createElement("div",{className:"submit-form"},m?l.a.createElement("div",null,l.a.createElement("h4",null,"You submitted successfully!"),l.a.createElement("button",{className:"btn btn-success",onClick:function(){r(e),i(!1)}},"Add")):l.a.createElement("div",{"article-form":"true"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"labelling",htmlFor:"title"},"Article Title:"),l.a.createElement("input",{type:"text",className:"input-field",id:"title",required:!0,value:c.title,onChange:u,name:"title"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"labelling",htmlFor:"description"},"Description:"),l.a.createElement("textarea",{type:"text",className:"input-field",id:"description",required:!0,value:c.description,onChange:u,name:"description"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"labelling",htmlFor:"category"},"Category:"),l.a.createElement("input",{type:"text",className:"input-field",id:"category",required:!0,value:c.category||"",onChange:u,name:"category"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"labelling",htmlFor:"source"},"Source:"),l.a.createElement("input",{type:"text",className:"input-field",id:"source",required:!0,value:c.source||"",onChange:u,name:"source"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"labelling",htmlFor:"author"},"Author:"),l.a.createElement("input",{type:"text",className:"input-field",id:"author",required:!0,value:c.author||"",onChange:u,name:"author"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"labelling",htmlFor:"URL"},"URL:"),l.a.createElement("input",{type:"text",className:"input-field",id:"URL",required:!0,value:c.URL||"",onChange:u,name:"URL"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"labelling",htmlFor:"tags"},"Tags:"),l.a.createElement("input",{type:"text",className:"input-field",id:"tags",required:!0,value:c.tags||"",onChange:u,name:"tags"})),l.a.createElement("button",{onClick:function(){var e={title:c.title,description:c.description,category:c.category,source:c.source,URL:c.URL,author:c.author,tags:c.tags};V(e).then((function(e){r({id:e.data.id,title:e.data.title,description:e.data.description,category:e.category,source:e.source,URL:e.URL,author:e.author,tags:e.tags,published:e.data.published}),i(!0),console.log(e.data)})).catch((function(e){console.log(e)}))},className:"btn btn-success"},"Submit"),l.a.createElement("br",null))))}),ne=function(e){var a=Object(n.useState)({id:null,title:"",category:"",description:"",source:"",URL:"",author:"",tags:"",published:!1}),t=Object(k.a)(a,2),c=t[0],r=t[1],o=Object(n.useState)(""),s=Object(k.a)(o,2),m=s[0],i=s[1];Object(n.useEffect)((function(){var a;a=e.match.params.id,Q(a).then((function(e){r(e.data),console.log(e.data)})).catch((function(e){console.log(e)}))}),[e.match.params.id]);var u=function(e){var a=e.target,t=a.name,n=a.value;r(Object(ae.a)(Object(ae.a)({},c),{},Object(ee.a)({},t,n)))},d=function(e){var a={id:c.id,title:c.title,category:c.category,description:c.description,source:c.source,URL:c.URL,author:c.author,tags:c.tags,published:e};X(c.id,a).then((function(a){r(Object(ae.a)(Object(ae.a)({},c),{},{published:e})),console.log(a.data)})).catch((function(e){console.log(e)}))};return l.a.createElement("div",{className:"customer-form"},c?l.a.createElement("div",{className:"edit-form"},l.a.createElement("h4",null,l.a.createElement("strong",null,"Update Article")),l.a.createElement("form",null,l.a.createElement("div",{"article-form":!0},l.a.createElement("p",null,m),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"labelling",htmlFor:"title"},"Article Title:"),l.a.createElement("input",{type:"text",className:"input-field",id:"title",value:c.title,onChange:u,name:"title"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"labelling",htmlFor:"description"},"Description:"),l.a.createElement("textarea",{type:"text",className:"input-field",id:"description",value:c.description,onChange:u,name:"description"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"labelling",htmlFor:"category"},"Category:"),l.a.createElement("input",{type:"text",className:"input-field",id:"category",value:c.category,onChange:u,name:"category"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"labelling",htmlFor:"source"},"Source:"),l.a.createElement("input",{type:"text",className:"input-field",id:"source",value:c.dource,onChange:u,name:"source"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"labelling",htmlFor:"author"},"Author:"),l.a.createElement("input",{type:"text",className:"input-field",id:"author",value:c.author,onChange:u,name:"author"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"labelling",htmlFor:"URL"},"URL:"),l.a.createElement("input",{type:"text",className:"input-field",id:"URL",value:c.URL,onChange:u,name:"URL"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"labelling",htmlFor:"tags"},"Tags:"),l.a.createElement("input",{type:"text",className:"input-field",id:"tags",value:c.tags,onChange:u,name:"tags"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"labelling"},l.a.createElement("strong",null,"Status:")),c.published?"Published":"Pending"))),c.published?l.a.createElement("button",{className:"btn btn-success",onClick:function(){return d(!1)}},"UnPublish"):l.a.createElement("button",{className:"btn btn-success",onClick:function(){return d(!0)}},"Publish"),l.a.createElement("button",{className:"btn btn-success",onClick:function(){Z(c.id).then((function(a){console.log(a.data),e.history.push("/customers")})).catch((function(e){console.log(e)}))}},"Delete"),l.a.createElement("button",{className:"btn btn-success",type:"submit",onClick:function(){X(c.id,c).then((function(e){console.log(e.data),i("The customer was updated successfully!")})).catch((function(e){console.log(e)}))}},"Update")):l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement("p",null,"Please click on a Customer...")))},le=function(){var e=Object(n.useState)([]),a=Object(k.a)(e,2),t=a[0],c=a[1],r=Object(n.useState)(null),s=Object(k.a)(r,2),i=s[0],u=s[1],d=Object(n.useState)(-1),E=Object(k.a)(d,2),p=E[0],g=E[1],b=Object(n.useState)(""),h=Object(k.a)(b,2);h[0],h[1];Object(n.useEffect)((function(){f()}),[]);var f=function(){z().then((function(e){c(e.data),console.log(e.data)})).catch((function(e){console.log(e)}))};return l.a.createElement("div",{className:""},l.a.createElement(m.a,{container:!0,spacing:3},l.a.createElement(m.a,{item:!0,xs:12,sm:5,className:"appContent"},l.a.createElement("div",{className:"article-list"},l.a.createElement("h3",null,l.a.createElement("strong",null,"Topic List")),l.a.createElement("ul",{className:"list-group"},t&&t.map((function(e,a){return l.a.createElement("div",{key:a},l.a.createElement("p",{className:"list-group-item "+(a===p?"active":""),onClick:function(){return function(e,a){u(e),g(a)}(e,a)},key:a},e.title))}))))),l.a.createElement(m.a,{item:!0,xs:12,sm:7,className:"appContent"},l.a.createElement("div",{className:"customer-details"},i?l.a.createElement("div",null,l.a.createElement("h4",{className:""},l.a.createElement("u",null,"Article \xa0",i.id)),l.a.createElement("p",{className:"customer-group "},l.a.createElement("label",{className:"output-labelling"},l.a.createElement("strong",null,"Title:"))," ",i.title),l.a.createElement("p",{className:"customer-group"},l.a.createElement("label",{className:"output-labelling"},l.a.createElement("strong",null,"Category:"))," ",i.category),l.a.createElement("p",{className:"customer-group"},l.a.createElement("label",{className:"output-labelling"},l.a.createElement("strong",null,"Description:"))," ",i.description),l.a.createElement("p",{className:"customer-group"},l.a.createElement("label",{className:"output-labelling"},l.a.createElement("strong",null,"Source:"))," ",i.source),l.a.createElement("p",{className:"customer-group"},l.a.createElement("label",{className:"output-labelling"},l.a.createElement("strong",null,"Author:"))," ",i.author),l.a.createElement("p",{className:"customer-group"},l.a.createElement("label",{className:"output-labelling"},l.a.createElement("strong",null,"URL:"))," ",i.url),l.a.createElement("p",{className:"customer-group"},l.a.createElement("label",{className:"output-labelling"},l.a.createElement("strong",null,"Tags:"))," ",i.tags),l.a.createElement("p",{className:"customer-group"},l.a.createElement("label",{className:"output-labelling"},l.a.createElement("strong",null,"Status:"))," ",i.published?"Published":"Pending"),l.a.createElement(o.b,{to:"/customers/"+i.id,className:"badge badge-warning"},"Edit")):l.a.createElement("div",null,l.a.createElement("p",null,"Please click on an article to view details..."))))))};var ce=function(){return l.a.createElement("div",{className:""},l.a.createElement(h,null),l.a.createElement(j,null),l.a.createElement(o.a,null,l.a.createElement(m.a,{container:!0,spacing:3},l.a.createElement(m.a,{item:!0,xs:12,sm:3,lg:2},l.a.createElement(G,null)),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(m.a,{item:!0,xs:8,sm:9,lg:10},l.a.createElement("div",{className:"appContent",style:{textAlign:"center"}},l.a.createElement(s.c,null,l.a.createElement(s.a,{path:"/add",component:te}),l.a.createElement(s.a,{path:"/customers/:id",component:ne}),l.a.createElement(s.a,{path:"/customers",component:le}),l.a.createElement(s.a,{path:"/",component:_})))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(o.a,null,l.a.createElement(ce,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},46:function(e,a,t){},55:function(e,a,t){},56:function(e,a,t){e.exports=t.p+"static/media/header2.64c1ea7d.png"},73:function(e,a,t){e.exports=t(102)},84:function(e,a,t){}},[[73,1,2]]]);
//# sourceMappingURL=main.ab9967c5.chunk.js.map