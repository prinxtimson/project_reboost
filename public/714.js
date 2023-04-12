"use strict";(self.webpackChunksupreme=self.webpackChunksupreme||[]).push([[714],{5175:function(A,_,a){a.d(_,{o:function(){return h}});var g=a(5671),S=a(3144),d=a(4850),v=a(2171),C=a(1891),T=a(520),h=function(){var f=function(){function m(l){(0,g.Z)(this,m),this.http=l,this.apiSearch=v.A.mainUrl+v.A.apiUrl+"/search",this.apiRequest=v.A.mainUrl+v.A.apiUrl+"/request",this.apiPages=v.A.mainUrl+v.A.apiUrl+"/snippets"}return(0,S.Z)(m,[{key:"search",value:function(s){return this.http.post(this.apiSearch,s).pipe((0,d.U)(function(e){return e}))}},{key:"getShortLists",value:function(){return this.http.get(this.apiSearch+"/shortlist").pipe((0,d.U)(function(s){return s}))}},{key:"getFavourites",value:function(){return this.http.get(this.apiSearch+"/favourite").pipe((0,d.U)(function(s){return s}))}},{key:"getRecruiterShortLists",value:function(s){return this.http.get(this.apiSearch+"/shortlist/"+s).pipe((0,d.U)(function(e){return e}))}},{key:"getCandidateFavourites",value:function(s){return this.http.get(this.apiSearch+"/favourite/"+s).pipe((0,d.U)(function(e){return e}))}},{key:"getSearchAnalytics",value:function(s){return this.http.get(this.apiSearch+"/terms/"+s).pipe((0,d.U)(function(e){return e}))}},{key:"saveShortLists",value:function(s){return this.http.post(this.apiSearch+"/shortlist",s).pipe((0,d.U)(function(e){return e}))}},{key:"saveFavourites",value:function(s){return this.http.post(this.apiSearch+"/favourite",s).pipe((0,d.U)(function(e){return e}))}},{key:"getRequest",value:function(){return this.http.get(this.apiRequest).pipe((0,d.U)(function(s){return s}))}},{key:"getRequestList",value:function(){return this.http.get(this.apiRequest+"/list").pipe((0,d.U)(function(s){return s}))}},{key:"getRecruiterRequest",value:function(s){return this.http.get(this.apiRequest+"/rid/"+s).pipe((0,d.U)(function(e){return e}))}},{key:"getRecruiterRequestList",value:function(s){return this.http.get(this.apiRequest+"/list/rid/"+s).pipe((0,d.U)(function(e){return e}))}},{key:"getCandidatesRequestList",value:function(s){return this.http.get(this.apiRequest+"/list/cid/"+s).pipe((0,d.U)(function(e){return e}))}},{key:"saveRequest",value:function(s){return this.http.post(this.apiRequest,s).pipe((0,d.U)(function(e){return e}))}},{key:"toggleRequestApproval",value:function(s){return this.http.get(this.apiRequest+"/toggle/"+s).pipe((0,d.U)(function(e){return e}))}},{key:"saveAllRequest",value:function(s){return this.http.post(this.apiRequest+"/all",s).pipe((0,d.U)(function(e){return e}))}},{key:"getToken",value:function(){return this.http.get(this.apiSearch+"/token").pipe((0,d.U)(function(s){return s}))}},{key:"getTokenPage",value:function(){return this.http.get(this.apiPages+"/name/token").pipe((0,d.U)(function(s){return s}))}},{key:"saveSnippet",value:function(s){return this.http.post(this.apiPages,s).pipe((0,d.U)(function(e){return e}))}},{key:"getPages",value:function(){return this.http.get(this.apiPages).pipe((0,d.U)(function(s){return s}))}},{key:"deletePages",value:function(s){return this.http.delete(this.apiPages+"/remove/"+s).pipe((0,d.U)(function(e){return e}))}}]),m}();return f.\u0275fac=function(l){return new(l||f)(C.LFG(T.eN))},f.\u0275prov=C.Yz7({token:f,factory:f.\u0275fac,providedIn:"root"}),f}()},7329:function(A,_,a){a.r(_),a.d(_,{ShortlistModule:function(){return X}});var g=a(3144),S=a(5671),d=a(9808),v=a(4902),C=a(5175),T=a(7775),h=a(7224),f=a(500),m=a(5639),l=a(3075),s=a(5560),e=a(1891),x=a(8185),y=a(5444),R=a(1748),U=a(853),q=a(4242),k=a(3184),b=a(8001);function P(n,c){if(1&n){var o=e.EpF();e.TgZ(0,"button",14),e.NdJ("click",function(){return e.CHM(o),e.oxw(3).requestAll()}),e._UZ(1,"i",15),e._uU(2," Request "),e.qZA()}if(2&n){var t=e.oxw(3);e.Q6J("disabled",t.selCandidates.length<1)}}function w(n,c){if(1&n){var o=e.EpF();e.TgZ(0,"input",37),e.NdJ("change",function(i){e.CHM(o);var u=e.oxw().$implicit;return e.oxw(3).checkValue(i,u)}),e.qZA()}}function N(n,c){if(1&n&&(e.TgZ(0,"div",33),e._uU(1),e.qZA()),2&n){var o=e.oxw().$implicit;e.xp6(1),e.hij(" ",o.email," ")}}function I(n,c){1&n&&(e.TgZ(0,"div",33),e._uU(1," Awaiting Approval "),e.qZA())}function J(n,c){1&n&&(e.TgZ(0,"div",33),e._uU(1," Request Candidate "),e.qZA())}function L(n,c){if(1&n&&(e.TgZ(0,"li")(1,"div",30),e._uU(2,"Company Type:"),e.qZA(),e.TgZ(3,"div",33),e._uU(4),e.qZA()()),2&n){var o=e.oxw().$implicit;e.xp6(4),e.Oqu(o.type)}}function E(n,c){if(1&n&&(e.TgZ(0,"li")(1,"div",30),e._uU(2,"Company Size:"),e.qZA(),e.TgZ(3,"div",33),e._uU(4),e.qZA()()),2&n){var o=e.oxw().$implicit;e.xp6(4),e.Oqu(o.size)}}function O(n,c){if(1&n&&(e.TgZ(0,"li")(1,"div",30),e._uU(2,"Projects:"),e.qZA(),e.TgZ(3,"div",33),e._uU(4),e.qZA()()),2&n){var o=e.oxw().$implicit;e.xp6(4),e.Oqu(o.projectNo)}}function M(n,c){if(1&n&&(e.TgZ(0,"li")(1,"div",30),e._uU(2,"Skill Sets:"),e.qZA(),e.TgZ(3,"div",33),e._uU(4),e.qZA()()),2&n){var o=e.oxw().$implicit;e.xp6(4),e.Oqu(o.skills.length)}}function D(n,c){if(1&n){var o=e.EpF();e.TgZ(0,"div",42)(1,"button",43),e.NdJ("click",function(){e.CHM(o);var r=e.oxw(2).$implicit;return e.oxw(3).request(r)}),e._UZ(2,"i",44),e._uU(3," Request Candidate "),e.qZA(),e.TgZ(4,"button",45),e.NdJ("click",function(){e.CHM(o);var r=e.oxw(2).$implicit;return e.oxw(3).delete(r)}),e._UZ(5,"i",46),e._uU(6," Remove "),e.qZA()()}if(2&n){var t=e.oxw(2).$implicit,i=e.oxw(3);e.xp6(1),e.Q6J("disabled",i.requested.includes(t.id))}}function Y(n,c){1&n&&(e.TgZ(0,"div",38)(1,"button",39),e._UZ(2,"i",40),e.qZA(),e.YNc(3,D,7,1,"div",41),e.qZA())}function F(n,c){if(1&n){var o=e.EpF();e.TgZ(0,"div",16)(1,"div",17)(2,"div",18)(3,"div",19)(4,"div",20),e.YNc(5,w,1,0,"input",21),e.TgZ(6,"div",22)(7,"div",23),e.NdJ("click",function(){var p=e.CHM(o).$implicit;return e.oxw(3).viewDetails(p)}),e._UZ(8,"app-uploads",24),e.qZA()(),e.TgZ(9,"div",25)(10,"div",18)(11,"div",26)(12,"div",27),e.NdJ("click",function(){var p=e.CHM(o).$implicit;return e.oxw(3).viewDetails(p)}),e.TgZ(13,"h3",28),e._uU(14),e.qZA()(),e.TgZ(15,"ul",29)(16,"li")(17,"div",30),e._uU(18,"Email:"),e.qZA(),e.YNc(19,N,2,1,"div",31),e.YNc(20,I,2,0,"div",31),e.YNc(21,J,2,0,"div",31),e.qZA(),e.YNc(22,L,5,1,"li",32),e.YNc(23,E,5,1,"li",32),e.YNc(24,O,5,1,"li",32),e.YNc(25,M,5,1,"li",32),e.qZA()(),e.TgZ(26,"div",26)(27,"ul",29)(28,"li")(29,"div",30),e._uU(30,"Title:"),e.qZA(),e.TgZ(31,"div",33),e._uU(32),e.qZA()(),e.TgZ(33,"li",34)(34,"div",30),e._uU(35,"Bio:"),e.qZA(),e._UZ(36,"div",35),e.ALo(37,"sanitizeHtml"),e.qZA()()()()(),e.YNc(38,Y,4,0,"div",36),e.qZA()()()()()}if(2&n){var t=c.$implicit,i=e.oxw(3);e.xp6(5),e.Q6J("ngIf",i.loginUser.companyName&&!i.requested.includes(t.id)),e.xp6(3),e.Q6J("avatarUrl",t.avatar)("fileStorage",i.getPassport(t))("uploadLabel","")("disableUpload",!0)("uploadName",""),e.xp6(6),e.hij(" ",t.name?t.name:t.companyName," "),e.xp6(5),e.Q6J("ngIf",i.loginUser.companyName&&i.requested.includes(t.id)&&i.approved.includes(t.id)),e.xp6(1),e.Q6J("ngIf",i.loginUser.companyName&&i.requested.includes(t.id)&&!i.approved.includes(t.id)),e.xp6(1),e.Q6J("ngIf",i.loginUser.companyName&&!i.requested.includes(t.id)),e.xp6(1),e.Q6J("ngIf",!i.loginUser.companyName),e.xp6(1),e.Q6J("ngIf",!i.loginUser.companyName),e.xp6(1),e.Q6J("ngIf",i.loginUser.companyName),e.xp6(1),e.Q6J("ngIf",i.loginUser.companyName),e.xp6(7),e.hij(" ",t.title?t.title:"Profile Title"," "),e.xp6(4),e.Q6J("innerHtml",e.lcZ(37,17,t.description),e.oJD),e.xp6(2),e.Q6J("ngIf",i.loginUser.companyName)}}function Q(n,c){if(1&n&&(e.TgZ(0,"div",3)(1,"div",4)(2,"div",5)(3,"div",6)(4,"div",7)(5,"div",8)(6,"h4"),e._uU(7),e.TgZ(8,"div",9),e.YNc(9,P,3,1,"button",10),e._UZ(10,"input",11),e.qZA()()()()(),e.TgZ(11,"div",12),e.YNc(12,F,39,19,"div",13),e.qZA()()()()),2&n){var o=e.oxw(2);e.xp6(7),e.hij(" ",o.loginUser.companyName?"Shortlisted Candidates":"Potential Recruiters"," "),e.xp6(2),e.Q6J("ngIf",o.loginUser.companyName),e.xp6(1),e.Q6J("formControl",o.search),e.xp6(2),e.Q6J("ngForOf",o.dataSet)}}function j(n,c){if(1&n&&(e.TgZ(0,"div"),e.YNc(1,Q,13,4,"div",2),e.qZA()),2&n){var o=e.oxw();e.xp6(1),e.Q6J("ngIf",o.dataLoaded)}}function H(n,c){if(1&n){var o=e.EpF();e.TgZ(0,"div")(1,"app-profile-view",47),e.NdJ("closed",function(){return e.CHM(o),e.oxw().close()}),e.qZA()()}if(2&n){var t=e.oxw();e.xp6(1),e.Q6J("enableEdit",!1)("candidate",!!t.loginUser.companyName)("enableClose",!0)("enableShortlist",!1)("user",t.getUser(t.selProfile))("profile",t.selProfile)}}var $=function(){var n=function(){function c(o,t,i,u,r,p){(0,S.Z)(this,c),this.http=o,this.dataService=t,this.messageService=i,this.confirmService=u,this.profileService=r,this.layoutService=p,this.view=1,this.dataSet=[],this.allData=[],this.dataLoaded=!1,this.search=new l.NI("",l.kI.required),this.selCandidates=[],this.requested=[],this.approved=[]}return(0,g.Z)(c,[{key:"ngOnInit",value:function(){var t=this;this.loginUser=this.dataService.getUser(),this.profileService.getMyProfile().pipe((0,h.P)()).subscribe(function(i){t.loginProfile=i,t.loginUser.companyName?t.http.getRecruiterRequestList(i.id).pipe((0,h.P)()).subscribe(function(u){t.requested=u.filter(function(r){return r.requested}).map(function(r){return r.cid}),t.approved=u.filter(function(r){return r.approved}).map(function(r){return r.cid})}):t.http.getCandidatesRequestList(i.id).pipe((0,h.P)()).subscribe(function(u){return t.requested=u.filter(function(r){return r.requested}).map(function(r){return r.cid})})}),this.refresh(),this.search.valueChanges.subscribe(function(i){t.dataLoaded&&(t.dataSet=i.length<1?t.allData:t.allData.filter(function(u){var r,p;return(null===(r=u.name)||void 0===r?void 0:r.toLowerCase().includes(i.toLowerCase()))||(null===(p=u.companyName)||void 0===p?void 0:p.toLowerCase().includes(i.toLowerCase()))||c.flatSkills(u).includes(i.toLowerCase())}))})}},{key:"refresh",value:function(){var t=this;this.http.getShortLists().pipe((0,h.P)()).subscribe(function(i){t.dataSet=i,t.allData=i,t.dataLoaded=!0})}},{key:"getPassport",value:function(t){var i;return(null===(i=t.user)||void 0===i?void 0:i.passport)?[t.user.passport]:[new f.TX]}},{key:"viewDetails",value:function(t){this.selProfile=t,this.layoutService.profileView(t.user),this.view=2}},{key:"close",value:function(){this.view=1}},{key:"getUser",value:function(t){return t.user?t.user:new m.n5}},{key:"delete",value:function(t){var i=this;this.selProfile=t,this.confirmService.confirm({message:"Are you sure you want to remove "+t.name+" from list?",header:"Remove Confirmation",icon:"pi pi-exclamation-triangle",accept:function(){i.http.saveShortLists({id:t.id,action:"remove"}).pipe((0,h.P)()).subscribe(function(){i.dataSet=i.dataSet.filter(function(p){return p!==t}),i.allData=i.allData.filter(function(p){return p!==t}),i.messageService.add({severity:"success",summary:"Remove Success",detail:t.name.toUpperCase()+" removed from list!"})})},reject:function(){}})}},{key:"request",value:function(t){var i=this;this.http.saveRequest({rid:this.loginProfile.id,cid:t.id,requested:!0}).pipe((0,h.P)()).subscribe(function(r){i.requested=[].concat((0,v.Z)(i.requested),[t.id]),i.messageService.add({severity:"success",summary:t.name+" detail request forwarded to Admin!"})})}},{key:"checkValue",value:function(t,i){t.target.checked?this.selCandidates.push(i):this.selCandidates=this.selCandidates.filter(function(u){return u!=u})}},{key:"requestAll",value:function(){var t=this;if(!(this.selCandidates.length<1)){var i=[];this.selCandidates.forEach(function(u){i.push({rid:t.loginProfile.id,cid:u.id,requested:!0})}),this.http.saveAllRequest(i).pipe((0,h.P)()).subscribe(function(){t.requested=[].concat((0,v.Z)(t.requested),(0,v.Z)(i.map(function(u){return u.cid}))),t.selCandidates=[],t.messageService.add({severity:"success",summary:"Selected candidates request forwarded to Admin"})})}}}],[{key:"flatSkills",value:function(t){return t.skills?t.skills.join(", ").toLowerCase():""}}]),c}();return n.\u0275fac=function(o){return new(o||n)(e.Y36(C.o),e.Y36(x.D),e.Y36(y.ez),e.Y36(y.YP),e.Y36(T.H),e.Y36(s.P))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-shortlist"]],decls:3,vars:3,consts:[[3,"ngSwitch"],[4,"ngSwitchCase"],["class","animated fadeIn",4,"ngIf"],[1,"animated","fadeIn"],[1,"row","py-3","px-2"],[1,"mx-auto"],[1,"bg-white","shadow","rounded","overflow-hidden"],[1,"card","pb-0","mb-0"],[1,"card-header"],[1,"file-options","float-right","mr-2"],["class","btn btn-ghost-success btn-sm mr-3","title","Request Selected Candidates",3,"disabled","click",4,"ngIf"],["placeholder","Search",3,"formControl"],[1,"py-4"],["class","card animated fadeIn shadow",4,"ngFor","ngForOf"],["title","Request Selected Candidates",1,"btn","btn-ghost-success","btn-sm","mr-3",3,"disabled","click"],[1,"fa","fa-telegram"],[1,"card","animated","fadeIn","shadow"],[1,"card-body"],[1,"row"],[1,"col-md-12"],[1,"profile-view"],["type","checkbox",3,"change",4,"ngIf"],[1,"profile-img-wrap"],[1,"profile-img",3,"click"],[3,"avatarUrl","fileStorage","uploadLabel","disableUpload","uploadName"],[1,"profile-basic"],[1,"col-md-6"],[1,"profile-info-left",3,"click"],[1,"user-name","m-t-0","mb-0"],[1,"personal-info"],[1,"title"],["class","text",4,"ngIf"],[4,"ngIf"],[1,"text"],[1,"d-block"],[1,"text",3,"innerHtml"],["dropdown","","class","pro-edit",4,"ngIf"],["type","checkbox",3,"change"],["dropdown","",1,"pro-edit"],["dropdownToggle","","tooltip","Options",1,"edit-icon"],[1,"fa","fa-ellipsis-v"],["class","dropdown-menu dropdown-menu-right",4,"dropdownMenu"],[1,"dropdown-menu","dropdown-menu-right"],[1,"btn","btn-block","btn-sm","btn-ghost-success",3,"disabled","click"],[1,"fa","fa-plus"],[1,"btn","btn-block","btn-sm","btn-ghost-danger",3,"click"],[1,"fa","fa-trash-o"],[3,"enableEdit","candidate","enableClose","enableShortlist","user","profile","closed"]],template:function(o,t){1&o&&(e.TgZ(0,"div",0),e.YNc(1,j,2,1,"div",1),e.YNc(2,H,2,6,"div",1),e.qZA()),2&o&&(e.Q6J("ngSwitch",t.view),e.xp6(1),e.Q6J("ngSwitchCase",1),e.xp6(1),e.Q6J("ngSwitchCase",2))},directives:[d.RF,d.n9,d.O5,l.Fj,l.JJ,l.oH,d.sg,R._,U.TO,U.Mq,q.i9,U.Hz,k.H],pipes:[b.A],styles:[""]}),n}(),B=a(325),z=a(8605),K=a(9174),W=a(3174),V=[{path:"",data:{title:"Chat"},children:[{path:"",component:$,data:{title:""}}]}],X=function(){var n=(0,g.Z)(function c(){(0,S.Z)(this,c)});return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[d.ez,B.Bz.forChild(V),z.F,K.m,q.z8.forRoot(),W.q,l.UX,U.mr]]}),n}()}}]);