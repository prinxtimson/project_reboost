"use strict";(self.webpackChunksupreme=self.webpackChunksupreme||[]).push([[244],{6244:function(B,f,r){r.r(f),r.d(f,{RecruitersModule:function(){return D}});var g=r(3144),m=r(5671),c=r(9808),x=r(325),C=r(9174),_=r(7775),p=r(7224),R=r(5639),Z=r(500),T=r(5175),y=r(5560),e=r(1891),P=r(8185),U=r(5444),S=r(1748),h=r(147),u=r(9019),J=r(3184),A=r(8001);function N(a,s){1&a&&e._UZ(0,"i",32)}function M(a,s){1&a&&e._UZ(0,"i",33)}function w(a,s){if(1&a){var n=e.EpF();e.TgZ(0,"div",10)(1,"div",11)(2,"div",12)(3,"div",13)(4,"div",14)(5,"div",15),e.NdJ("click",function(){var d=e.CHM(n).$implicit;return e.oxw(3).viewDetails(d)}),e._UZ(6,"app-uploads",16),e.qZA()()(),e.TgZ(7,"div",17)(8,"div",18)(9,"h4",19),e.NdJ("click",function(){var d=e.CHM(n).$implicit;return e.oxw(3).viewDetails(d)}),e._uU(10),e.qZA(),e.TgZ(11,"p",20),e._uU(12),e.qZA()(),e.TgZ(13,"div",21)(14,"small",22),e._uU(15),e.qZA(),e._UZ(16,"p",23),e.ALo(17,"sanitizeHtml"),e.qZA()(),e.TgZ(18,"div",24)(19,"div",25),e.YNc(20,N,1,0,"i",26),e.YNc(21,M,1,0,"i",27),e.TgZ(22,"span",28),e._uU(23),e.qZA()(),e.TgZ(24,"div",29)(25,"button",30),e.NdJ("click",function(){var d=e.CHM(n).$implicit;return e.oxw(3).favourite(d)}),e._UZ(26,"i",31),e._uU(27," Add to Favorites "),e.qZA()()()()()()}if(2&a){var t=s.$implicit,i=e.oxw(3);e.xp6(6),e.Q6J("avatarUrl",t.avatar)("fileStorage",i.getPassport(t))("uploadLabel","")("disableUpload",!0)("uploadName",""),e.xp6(4),e.hij(" ",t.companyName," "),e.xp6(2),e.Oqu(t.industry),e.xp6(3),e.Oqu(t.website),e.xp6(1),e.Q6J("innerHtml",e.lcZ(17,12,t.description),e.oJD),e.xp6(4),e.Q6J("ngIf",t.isRecruiting),e.xp6(1),e.Q6J("ngIf",!t.isRecruiting),e.xp6(2),e.Oqu(t.isRecruiting?"Recruiting":"Not Recruiting")}}function I(a,s){if(1&a){var n=e.EpF();e.TgZ(0,"div",5),e.YNc(1,w,28,14,"div",6),e.TgZ(2,"div",7)(3,"div",8)(4,"pagination",9),e.NdJ("ngModelChange",function(l){return e.CHM(n),e.oxw(2).curPage=l})("pageChanged",function(l){return e.CHM(n),e.oxw(2).pageChanged(l)}),e.qZA()()()()}if(2&a){var t=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",t.profilesSet),e.xp6(3),e.Q6J("boundaryLinks",!0)("totalItems",t.total)("ngModel",t.curPage)("itemsPerPage",t.perPage)("maxSize",10)}}function Q(a,s){1&a&&(e.TgZ(0,"div",5),e._UZ(1,"facebook-content-loader")(2,"facebook-content-loader")(3,"list-content-loader"),e.qZA())}function F(a,s){if(1&a&&(e.TgZ(0,"div",3),e.YNc(1,I,5,6,"div",4),e.YNc(2,Q,4,0,"div",4),e.qZA()),2&a){var n=e.oxw();e.xp6(1),e.Q6J("ngIf",n.dataLoaded),e.xp6(1),e.Q6J("ngIf",!n.dataLoaded)}}function H(a,s){if(1&a){var n=e.EpF();e.TgZ(0,"div")(1,"app-profile-view",34),e.NdJ("closed",function(){return e.CHM(n),e.oxw().close()})("shortlisted",function(l){return e.CHM(n),e.oxw().shortlist(l)}),e.qZA()()}if(2&a){var t=e.oxw();e.xp6(1),e.Q6J("enableEdit",!1)("candidate",!1)("enableClose",!0)("enableShortlist",!1)("user",t.getUser(t.selRecruiter))("profile",t.selRecruiter)}}var Y=function(){var a=function(){function s(n,t,i,l,o){(0,m.Z)(this,s),this.http=n,this.dataService=t,this.searchService=i,this.messageService=l,this.layoutService=o,this.view=1,this.dataLoaded=!1}return(0,g.Z)(s,[{key:"ngOnInit",value:function(){var t=this;this.http.getRecruiters().pipe((0,p.P)()).subscribe(function(i){t.profilesSet=i.data,t.allProfiles=i.data,t.curPage=i.current_page,t.firstPageUrl=i.first_page_url,t.from=i.from,t.lastPage=i.last_page,t.lastPageUrl=i.last_page_url,t.path=i.path,t.perPage=i.per_page,t.prevPageUrl=i.prev_page_url,t.to=i.to,t.total=i.total,t.loginUser=t.dataService.getUser(),t.dataLoaded=!0})}},{key:"getPassport",value:function(t){var i;return(null===(i=t.user)||void 0===i?void 0:i.passport)?[t.user.passport]:[new Z.TX]}},{key:"viewDetails",value:function(t){this.selRecruiter=t,this.layoutService.profileView(t.user),this.view=2}},{key:"close",value:function(){this.view=1}},{key:"getUser",value:function(t){return t.user?t.user:new R.n5}},{key:"favourite",value:function(t){var i=this;this.searchService.saveFavourites({id:t.id,action:"add"}).pipe((0,p.P)()).subscribe(function(o){console.log(o),i.messageService.add({severity:"success",summary:t.companyName+" added to favourite"})})}},{key:"pageChanged",value:function(t){var i=this,l="".concat(this.path,"?page=").concat(t.page);this.http.getNextPage(l).pipe((0,p.P)()).subscribe(function(o){i.allProfiles=o.data,i.curPage=o.current_page,i.firstPageUrl=o.first_page_url,i.from=o.from,i.lastPage=o.last_page,i.lastPageUrl=o.last_page_url,i.path=o.path,i.perPage=o.per_page,i.prevPageUrl=o.prev_page_url,i.to=o.to,i.total=o.total})}}],[{key:"flatSkills",value:function(t){return t.skills?t.skills.join(", ").toLowerCase():""}}]),s}();return a.\u0275fac=function(n){return new(n||a)(e.Y36(_.H),e.Y36(P.D),e.Y36(T.o),e.Y36(U.ez),e.Y36(y.P))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-recruiters"]],decls:3,vars:3,consts:[[3,"ngSwitch"],["class","py-3",4,"ngSwitchCase"],[4,"ngSwitchCase"],[1,"py-3"],["class","animated fadeIn",4,"ngIf"],[1,"animated","fadeIn"],["class","card","style","min-height: 200px",4,"ngFor","ngForOf"],[1,"d-flex","justify-content-center"],[1,""],["previousText","\u2039","nextText","\u203a","firstText","\xab","lastText","\xbb",3,"boundaryLinks","totalItems","ngModel","itemsPerPage","maxSize","ngModelChange","pageChanged"],[1,"card",2,"min-height","200px"],[1,"card-body"],[1,"row"],[1,"col-12","col-sm-3","px-2"],[1,"mx-auto"],[1,"profile-img",3,"click"],[3,"avatarUrl","fileStorage","uploadLabel","disableUpload","uploadName"],[1,"col-12","col-sm-6","px-2"],[1,"mb-2","text-center","text-sm-left"],[1,"c-pointer",3,"click"],[1,"mb-0"],[1,"text-center","text-sm-left"],[1,"text-muted"],[3,"innerHtml"],[1,"col-12","col-sm-3","px-1","text-center","text-sm-left"],[1,"my-3"],["class","fa fa-check-circle c-icon",4,"ngIf"],["class","fa fa-times-circle c-icon",4,"ngIf"],[2,"font-size","12px"],[1,"px-2"],[1,"btn","btn-outline-primary","btn-sm",3,"click"],[1,"fa","fa-plus"],[1,"fa","fa-check-circle","c-icon"],[1,"fa","fa-times-circle","c-icon"],[3,"enableEdit","candidate","enableClose","enableShortlist","user","profile","closed","shortlisted"]],template:function(n,t){1&n&&(e.TgZ(0,"div",0),e.YNc(1,F,3,2,"div",1),e.YNc(2,H,2,6,"div",2),e.qZA()),2&n&&(e.Q6J("ngSwitch",t.view),e.xp6(1),e.Q6J("ngSwitchCase",1),e.xp6(1),e.Q6J("ngSwitchCase",2))},directives:[c.RF,c.n9,c.O5,c.sg,S._,h.Qt,u.kt,u.K5,J.H],pipes:[A.A],encapsulation:2}),a}(),L=r(8605),b=r(4572),k=r(4242),z=r(3174),O=[{path:"",data:{title:"Recruiters"},children:[{path:"",component:Y,data:{title:""}}]}],D=function(){var a=(0,g.Z)(function s(){(0,m.Z)(this,s)});return a.\u0275fac=function(n){return new(n||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[[c.ez,x.Bz.forChild(O),C.m,z.q,L.F,b.v,u.GO,k.z8.forRoot(),h.u3.forRoot()]]}),a}()}}]);