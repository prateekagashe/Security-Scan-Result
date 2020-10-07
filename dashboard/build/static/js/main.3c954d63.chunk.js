(this["webpackJsonpsecurity-scan-result"]=this["webpackJsonpsecurity-scan-result"]||[]).push([[0],{101:function(e,t,a){},125:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(11),c=a.n(l),i=(a(98),a(78)),o=a(14),s=(a(99),a(23)),m=a.n(s),u=a(31),d=a(16),p=a(158),E=a(163),f=a(165),g=a(166),y=a(164),v=a(48);a(101);function b(){return r.a.createElement("div",null,r.a.createElement("div",{className:"header"},r.a.createElement("label",null,"Security Scan")))}var h=a(171),x=a(51),S=a.n(x),j=a(32),O=a.n(j),C=a(74),k=a.n(C),N=a(161),w=a(0),T=Object(p.a)((function(e){return{root:{maxWidth:"100%",margin:40},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:18,fontWeight:"bold"},pos:{marginBottom:12},form:{"& .MuiTextField-root":{margin:e.spacing(2),width:"25ch"}}}}));function A(e){var t=T(),a=Object(n.useState)(""),l=Object(d.a)(a,2),c=l[0],i=l[1],o=Object(n.useState)(""),s=Object(d.a)(o,2),p=s[0],x=s[1],j=Object(n.useState)(""),C=Object(d.a)(j,2),A=C[0],I=C[1],P=Object(n.useState)(""),F=Object(d.a)(P,2),R=F[0],D=F[1],U=Object(n.useState)("LOW"),q=Object(d.a)(U,2),W=q[0],L=q[1],B=Object(n.useState)("QUEUED"),H=Object(d.a)(B,2),z=H[0],M=H[1],Q=Object(n.useState)(""),V=Object(d.a)(Q,2),_=V[0],G=V[1],J=Object(n.useState)(""),Y=Object(d.a)(J,2),$=Y[0],K=Y[1],X=Object(n.useState)([]),Z=Object(d.a)(X,2),ee=Z[0],te=Z[1];function ae(){return(ae=Object(u.a)(m.a.mark((function t(){var a,n,r,l,c,i;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=Date.now(),"QUEUED"==z?n=a:"IN PROGRESS"==z?r=a:l=a,c={status:z,repositoryName:$,findings:ee,queuedAt:""!==n?n:"",scanningAt:""!==r?r:"",finishedAt:""!==l?l:""},t.prev=6,t.next=9,O.a.post("http://localhost:5000/addNewScanResult",c);case 9:i=t.sent,e.history.push("/scan-results"),console.log(i),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(6),console.log(t.t0);case 17:case"end":return t.stop()}}),t,null,[[6,14]])})))).apply(this,arguments)}return r.a.createElement("div",null,r.a.createElement(b,null),r.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"flex-end"}},r.a.createElement("div",{className:"backbutton",style:{padding:16}},r.a.createElement(N.a,{item:!0,xs:!0},r.a.createElement(E.a,null,r.a.createElement(y.a,{style:{textTransform:"none",fontSize:"1em"},className:t.button,onClick:function(){return e.history.push("/scan-results")},color:"primary"},r.a.createElement(w.b.Provider,{value:{size:"1.5em"}},r.a.createElement(k.a,null)),"View Scan Results"))))),r.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"}},r.a.createElement(f.a,{className:t.root,variant:"outlined"},r.a.createElement(g.a,null,r.a.createElement(v.a,{className:t.title,color:"textSecondary",gutterBottom:!0},"Scanning Form"),r.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"}},r.a.createElement("form",{className:t.form,noValidate:!0,autoComplete:"off"},r.a.createElement("div",{className:"row"},r.a.createElement(h.a,{required:!0,id:"outlined-required",label:"Repositry Name",helperText:"Please enter repositry name",value:$,onChange:function(e){K(e.target.value)},variant:"outlined"}),r.a.createElement(h.a,{id:"outlined-select-currency-native",select:!0,label:"Status",value:z,onChange:function(e){M(e.target.value)},SelectProps:{native:!0},helperText:"Please select status",variant:"outlined"},S.a.STATUS.map((function(e){return r.a.createElement("option",{key:e.value,value:e.value},e.label)})))),r.a.createElement(f.a,{className:t.root},r.a.createElement(g.a,null,r.a.createElement(v.a,{className:t.title,color:"textSecondary",gutterBottom:!0},"Findings - "+ee.length),r.a.createElement("div",{className:"row"},r.a.createElement(h.a,{required:!0,id:"outlined-required",label:"Path",helperText:"Please enter path",value:A,onChange:function(e){I(e.target.value)},variant:"outlined"}),r.a.createElement(h.a,{required:!0,id:"outlined-required",label:"Line Number",type:"number",helperText:"Please enter line number",value:R,onChange:function(e){D(e.target.value)},variant:"outlined"})),r.a.createElement("div",{className:"row"},r.a.createElement(h.a,{required:!0,id:"outlined-required",label:"Rule Id",helperText:"Please enter rule id",value:p,onChange:function(e){x(e.target.value)},variant:"outlined"}),r.a.createElement(h.a,{id:"outlined-select-currency-native",select:!0,label:"Severity",value:W,onChange:function(e){L(e.target.value)},SelectProps:{native:!0},helperText:"Please select Severity",variant:"outlined"},S.a.SEVERITY.map((function(e){return r.a.createElement("option",{key:e.value,value:e.value},e.label)})))),r.a.createElement("div",{className:"row"},r.a.createElement(h.a,{required:!0,id:"outlined-required",label:"Type",helperText:"Please enter type",value:c,onChange:function(e){i(e.target.value)},variant:"outlined"}),r.a.createElement(h.a,{required:!0,id:"outlined-required",label:"Description",helperText:"Please enter description",multiline:!0,rows:4,value:_,onChange:function(e){G(e.target.value)},variant:"outlined"})),r.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"flex-end"}},r.a.createElement(y.a,{variant:"outlined",disabled:""===(_&&W&&R&&A&&p&&c),color:"primary",onClick:function(){return function(){var e=ee;console.log("temp",e);var t={type:c,ruleId:p,location:{path:A,positions:{begin:{line:R}}},metadata:{description:_,severity:W}};e.push(t),console.log(ee.length),te(e),i(""),x(""),I(""),D(""),G(""),L("LOW")}()}},"Add Findings")))),r.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"flex-end",paddingTop:10}},r.a.createElement(y.a,{variant:"contained",color:"primary",disabled:!(ee.length>0&&""!==$&&z),onClick:function(){return function(){return ae.apply(this,arguments)}()}},"Submit"))))))))}var I=a(80),P=a(75),F=a.n(P),R=a(168),D=a(77),U=a.n(D),q=a(127),W=a(170),L=a(167),B=a(47),H=a(81),z=a(169),M=a(76),Q=Object(I.a)({shadows:["none"]}),V=Object(p.a)((function(e){return{root:{maxWidth:"100%",padding:20},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:22,fontWeight:"bold"},pos:{marginBottom:12},form:{"& .MuiTextField-root":{margin:e.spacing(2),width:"25ch"}}}})),_=[{_id:"",user_id:"",phone:"",email:"",email_verified:"",roles:"",updated_at:new Date,findings:{type:""}}];function G(e){var t=V(),a=Object(n.useState)(_),l=Object(d.a)(a,2),c=l[0],i=l[1],o=Object(n.useState)(!0),s=Object(d.a)(o,2),p=s[0],h=s[1],x=Object(n.useState)(null),S=Object(d.a)(x,2),j=S[0],C=S[1],k=Object(n.useState)(""),T=Object(d.a)(k,2),A=(T[0],T[1],Object(n.useState)("")),I=Object(d.a)(A,2),P=I[0],D=I[1],G=Object(n.useState)(!1),J=Object(d.a)(G,2);J[0],J[1];function Y(){return $.apply(this,arguments)}function $(){return($=Object(u.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.get("http://localhost:5000/fetchAllScanResult");case 3:(t=e.sent).data.length>0?(h(!0),i(t.data)):h(!1),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function K(){return(K=Object(u.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={params:{scanId:P.scanId}},e.prev=1,e.next=4,O.a.delete("http://localhost:5000/deleteScanResult",t);case 4:e.sent,Y(),C(null),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function X(){C(null)}return Object(n.useEffect)((function(){Y()}),[]),r.a.createElement("div",null,r.a.createElement(b,null),r.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"flex-end"}},r.a.createElement("div",{className:"backbutton",style:{padding:16}},r.a.createElement(N.a,{item:!0,xs:!0},r.a.createElement(E.a,null,r.a.createElement(y.a,{style:{textTransform:"none",fontSize:"1em"},className:t.button,onClick:function(){return e.history.push("/add-scanning-result")},variant:"outlined",color:"primary"},r.a.createElement(w.b.Provider,{value:{size:"1.5em"}},r.a.createElement(U.a,null)),"Add Scan Result"))))),r.a.createElement(f.a,{className:t.root},r.a.createElement(g.a,null,r.a.createElement(v.a,{className:t.title,color:"textSecondary",gutterBottom:!0},"Scan Results"),r.a.createElement(N.a,{container:!0,spacing:2,style:{width:"100%",paddingLeft:20,paddingTop:15}},r.a.createElement(N.a,{className:"headings",container:!0,spacing:0},r.a.createElement(N.a,{item:!0,className:"mobileHide",md:2,xs:6},r.a.createElement(q.a,{style:{backgroundColor:"#fff",textAlign:"center",fontWeight:400}},r.a.createElement(L.a,{primary:r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{variant:"h6",color:"textPrimary"},"Repository Name"))}))),r.a.createElement(N.a,{item:!0,md:2,xs:6},r.a.createElement(q.a,{style:{backgroundColor:"#fff",textAlign:"center"}},r.a.createElement(L.a,{primary:r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{variant:"h6",color:"textPrimary"},"Scan Status"))}))),r.a.createElement(N.a,{item:!0,md:1,xs:3},r.a.createElement(q.a,{style:{backgroundColor:"#fff",textAlign:"center"}},r.a.createElement(L.a,{primary:r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{variant:"h6",color:"textPrimary"},"Findings"))}))),r.a.createElement(N.a,{item:!0,md:3,className:"mobileHide"},r.a.createElement(q.a,{style:{backgroundColor:"#fff",textAlign:"center"}},r.a.createElement(L.a,{primary:r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{variant:"h6",color:"textPrimary"},"Time Stamp"))}))),r.a.createElement(N.a,{item:!0,className:"mobileHide",md:1,xs:6},r.a.createElement(q.a,{style:{backgroundColor:"#fff",textAlign:"center",fontWeight:400}},r.a.createElement(L.a,{primary:r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{variant:"h6",color:"textPrimary"},"Action"))}))))),function(){if(p){var a=[];return c.map((function(e){a.push(e)})),r.a.createElement("div",{className:"tableAndPagination"},r.a.createElement("div",{style:{paddingTop:0,marginTop:0}},r.a.createElement("div",null,a.map((function(a){return r.a.createElement("div",null,r.a.createElement(N.a,{container:!0,spacing:0},r.a.createElement(N.a,{className:"mobileHide",item:!0,md:2,xs:4,style:{backgroundColor:"#fff"}},r.a.createElement(q.a,{style:{textAlign:"center",cursor:"pointer"},alignItems:"flex-start"},r.a.createElement(L.a,{style:{paddingTop:12},primary:a.repositoryName}))),r.a.createElement(N.a,{item:!0,md:2,xs:6,style:{backgroundColor:"#fff"}},r.a.createElement(q.a,{style:{textAlign:"center",cursor:"pointer"},alignItems:"flex-start"},r.a.createElement(L.a,{style:{paddingTop:12},primary:a.status}))),r.a.createElement(N.a,{item:!0,md:1,xs:6,style:{backgroundColor:"#fff"}},r.a.createElement("div",{onClick:function(){return function(t){e.history.push({pathname:"/view-scan-result/"+t.scanId})}(a)},style:{textAlign:"center",cursor:"pointer",paddingTop:12}},r.a.createElement(R.a,{badgeContent:a.findings.length,color:"primary"},r.a.createElement(F.a,null)))),r.a.createElement(N.a,{item:!0,md:3,className:"mobileHide"},r.a.createElement(q.a,{style:{textAlign:"center",cursor:"pointer"},alignItems:"flex-start"},r.a.createElement(L.a,{style:{paddingTop:12},primary:"QUEUED"===a.status?"Queued At - "+new Date(parseInt(a.queuedAt)).toLocaleString():"SUCCESS"===a.status||"FAILURE"===a.status?"Finished At - "+new Date(parseInt(a.finishedAt)).toLocaleString():"Scanning At - "+new Date(parseInt(a.scanningAt)).toLocaleString()}))),r.a.createElement(N.a,{className:"mobileHide",item:!0,md:1,style:{backgroundColor:"#fff"}},r.a.createElement(q.a,{style:{justifyContent:"center",paddingTop:26,textAlign:"center"}},r.a.createElement("div",null,r.a.createElement(w.b.Provider,{value:{size:"1.5em"}},r.a.createElement("div",{"aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){return function(e,t){C(e.currentTarget),D(t)}(e,a)}},r.a.createElement(B.b,null))),r.a.createElement(E.a,{theme:Q},r.a.createElement(H.a,{id:"simple-menu",anchorEl:j,open:Boolean(j),onClose:X},r.a.createElement("div",{style:{boxShadow:"6px 6px 2px 1px rgba(0, 0, 255, .2)"}},r.a.createElement(f.a,null,r.a.createElement(z.a,{item:!0,className:t.menu},r.a.createElement("div",null,r.a.createElement(N.a,{container:!0,spacing:1,direction:"row",onClick:function(){return function(){return K.apply(this,arguments)}(a)}},r.a.createElement(N.a,{item:!0,xs:!0},r.a.createElement(M.a,null)),r.a.createElement(N.a,{item:!0,xs:!0},r.a.createElement("div",{style:{}},"Delete"))))))))))))),r.a.createElement("div",null,r.a.createElement(W.a,{style:{width:"80%"}})))})))))}return r.a.createElement("div",{style:{display:"flex",justifyContent:"center",paddingTop:20}},"No Result Found")}())))}var J=a(172),Y=Object(p.a)((function(e){return{root:{maxWidth:"100%"},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:22,fontWeight:"bold"},form:{"& .MuiTextField-root":{margin:e.spacing(2),width:"25ch"},maxWidth:"80%"}}})),$=[{type:"",ruleId:"",location:{path:"",positions:{begin:{line:""}}},metadata:{description:"",severity:""}}];function K(e){var t=Y(),a=Object(n.useState)($),l=Object(d.a)(a,2),c=l[0],i=l[1],o=Object(n.useState)(!0),s=Object(d.a)(o,2),p=s[0],f=s[1];function h(){return(h=Object(u.a)(m.a.mark((function e(t){var a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={params:{scanId:t}},e.prev=1,e.next=4,O.a.get("http://localhost:5000/fetchScanResultBaseOnId",a);case 4:n=e.sent,console.log(n.data.findings),f(!0),i(n.data.findings),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(e){h.apply(this,arguments)}(e.match.params.scanId)}),[]),r.a.createElement("div",null,r.a.createElement(b,null),r.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"flex-end"}},r.a.createElement("div",{className:"backbutton",style:{padding:16}},r.a.createElement(N.a,{item:!0,xs:!0},r.a.createElement(E.a,null,r.a.createElement(y.a,{style:{textTransform:"none",fontSize:"1em"},className:t.button,onClick:function(){return e.history.push("/scan-results")},variant:"contained",color:"primary"},r.a.createElement(w.b.Provider,{value:{size:"1.5em"}},r.a.createElement(B.a,null)),"Back"))))),r.a.createElement(W.a,null),r.a.createElement("div",null,r.a.createElement(J.a,{className:t.root,variant:"outlined"},r.a.createElement(g.a,null,r.a.createElement(v.a,{className:t.title,color:"textSecondary",gutterBottom:!0},"Findings"),r.a.createElement(N.a,{container:!0,spacing:2,style:{width:"100%",paddingLeft:20}},r.a.createElement(N.a,{className:"headings",container:!0,spacing:0},r.a.createElement(N.a,{item:!0,md:2,xs:6},r.a.createElement(q.a,{style:{backgroundColor:"#fff",textAlign:"center"}},r.a.createElement(L.a,{primary:r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{variant:"h6",color:"textPrimary"},"Rule Id"))}))),r.a.createElement(N.a,{item:!0,md:3,xs:6},r.a.createElement(q.a,{style:{backgroundColor:"#fff",textAlign:"center"}},r.a.createElement(L.a,{primary:r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{variant:"h6",color:"textPrimary"},"Description"))}))),r.a.createElement(N.a,{item:!0,md:2,xs:6},r.a.createElement(q.a,{style:{backgroundColor:"#fff",textAlign:"center"}},r.a.createElement(L.a,{primary:r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{variant:"h6",color:"textPrimary"},"Severity"))}))),r.a.createElement(N.a,{item:!0,md:3,xs:6},r.a.createElement(q.a,{style:{backgroundColor:"#fff",textAlign:"center"}},r.a.createElement(L.a,{primary:r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{variant:"h6",color:"textPrimary"},"Path Name : Line Number"))}))))),function(){if(p){var e=[];return c.map((function(t){e.push(t)})),r.a.createElement("div",{className:"tableAndPagination"},r.a.createElement("div",{style:{paddingTop:0,marginTop:0}},r.a.createElement("div",null,e.map((function(e){return r.a.createElement("div",null,r.a.createElement(N.a,{container:!0,spacing:0},r.a.createElement(N.a,{className:"mobileHide",item:!0,md:2,xs:4,style:{backgroundColor:"#fff"}},r.a.createElement(q.a,{style:{textAlign:"center",cursor:"pointer"},alignItems:"flex-start"},r.a.createElement(L.a,{style:{paddingTop:12},primary:e.ruleId}))),r.a.createElement(N.a,{item:!0,md:3,xs:6,style:{backgroundColor:"#fff"}},r.a.createElement(q.a,{style:{textAlign:"center",cursor:"pointer"},alignItems:"flex-start"},r.a.createElement(L.a,{style:{paddingTop:12},primary:e.metadata.description}))),r.a.createElement(N.a,{item:!0,md:2,xs:6,style:{backgroundColor:"#fff"}},r.a.createElement(q.a,{style:{textAlign:"center",cursor:"pointer"},alignItems:"flex-start"},r.a.createElement(L.a,{style:{paddingTop:12},primary:e.metadata.severity}))),r.a.createElement(N.a,{item:!0,md:3,className:"mobileHide"},r.a.createElement(q.a,{style:{textAlign:"center",cursor:"pointer"},alignItems:"flex-start"},r.a.createElement(L.a,{style:{paddingTop:12},primary:e.location.path+" - "+e.location.positions.begin.line})))),r.a.createElement("div",null,r.a.createElement(W.a,null)))})))))}}()))))}var X=a(20),Z=Object(X.a)();var ee=function(){return r.a.createElement("div",null,r.a.createElement(i.a,{history:Z},r.a.createElement(o.d,null,r.a.createElement(o.b,{path:"/scan-results",exact:!0,component:G}),r.a.createElement(o.b,{path:"/add-scanning-result",exact:!0,component:A}),r.a.createElement(o.b,{path:"/view-scan-result/:scanId",component:K}),r.a.createElement(o.a,{to:"/add-scanning-result"}),r.a.createElement(o.b,{path:"/",exact:!0,component:A}),r.a.createElement(o.a,{to:"/"}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ee,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},51:function(e,t){e.exports={SEVERITY:[{value:"LOW",label:"Low"},{value:"MEDIUM",label:"Medium"},{value:"HIGH",label:"High"}],STATUS:[{value:"QUEUED",label:"Queued"},{value:"IN PROGRESS",label:"In Progress"},{value:"SUCCESS",label:"Success"},{value:"FAILURE",label:"Failure"}]}},93:function(e,t,a){e.exports=a(125)},98:function(e,t,a){},99:function(e,t,a){}},[[93,1,2]]]);
//# sourceMappingURL=main.3c954d63.chunk.js.map