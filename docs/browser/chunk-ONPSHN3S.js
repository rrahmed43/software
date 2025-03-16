import{$ as ie,Aa as fe,Ba as ve,D as k,E as m,F as x,H as Z,I as X,J as H,K as J,O as K,R as Y,V as Q,X as g,Y as ee,Z as te,_ as y,aa as ne,da as oe,ea as re,f as U,fa as me,g as _,ga as ae,h as A,ha as se,i as b,ia as q,j as E,ja as de,k as u,ka as I,l as f,la as le,m as B,na as ce,o as l,p as c,pa as F,q as G,r as $,ra as V,s as L,sa as j,t as o,ta as D,u as i,ua as N,v as s,va as P,w as M,wa as R,x as v,y as z,ya as pe,z as W,za as ue}from"./chunk-ZIB63JHR.js";var S=(()=>{let e=class e{constructor(n,t){this.firestore=n,this.router=t,this.isAuthenticated=!1}addMovie(n){let t=q(this.firestore,"movies");return se(t,n)}getMovies(){let n=q(this.firestore,"movies");return me(n,{idField:"id"})}updateMovie(n,t){let a=I(this.firestore,"movies/"+n);return ce(a,t)}getMovie(n){let t=I(this.firestore,"movies/"+n);return ae(t,{idField:"id"})}deleteproduct(n){let t=I(this.firestore,"movies/"+n);return de(t)}};e.\u0275fac=function(t){return new(t||e)(A(oe),A(g))},e.\u0275prov=U({token:e,factory:e.\u0275fac,providedIn:"root"});let r=e;return r})();var ge=(()=>{let e=class e{constructor(n,t){this.router=n,this.adminser=t}onSubmit(n){this.adminser.addMovie(n.value).then(t=>{console.log(t.id)}).catch(t=>{console.log(t)})}onCancel(){this.router.navigate(["/"])}};e.\u0275fac=function(t){return new(t||e)(c(g),c(S))},e.\u0275cmp=b({type:e,selectors:[["app-add-movie"]],decls:33,vars:0,consts:[["form","ngForm"],[3,"ngSubmit"],["for","name"],["type","text","id","name","ngModel","","name","name","required",""],["for","ticketprice"],["type","text","id","ticketprice","ngModel","","name","ticketprice","required",""],["for","genre"],["type","text","id","genre","ngModel","","name","genre","required",""],["for","synopsis"],["type","text","id","synopsis","ngModel","","name","synopsis","required",""],["for","poster"],["type","text","id","poster","ngModel","","name","poster","required",""],["for","showtime"],["type","text","id","showtime","ngModel","","name","showtime","required",""],["type","submit"],[3,"click"]],template:function(t,a){if(t&1){let d=M();o(0,"div")(1,"div")(2,"form",1,0),v("ngSubmit",function(){u(d);let h=k(3);return f(a.onSubmit(h))}),o(4,"div")(5,"label",2),m(6,"Movie Name"),i(),s(7,"input",3),i(),o(8,"div")(9,"label",4),m(10,"Price"),i(),s(11,"input",5),i(),o(12,"div")(13,"label",6),m(14,"Genre"),i(),s(15,"input",7),i(),o(16,"div")(17,"label",8),m(18,"Synopsis"),i(),s(19,"input",9),i(),o(20,"div")(21,"label",10),m(22,"Poster's url"),i(),s(23,"input",11),i(),o(24,"div")(25,"label",12),m(26,"Showtime"),i(),s(27,"input",13),i(),o(28,"div")(29,"button",14),m(30,"Save"),i(),o(31,"button",15),v("click",function(){return u(d),f(a.onCancel())}),m(32,"Cancel"),i()()()()()}},dependencies:[P,F,V,j,R,N,D],styles:[".form-container[_ngcontent-%COMP%]{width:400px;margin:0 auto}.form-container[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:block;margin-bottom:5px}.form-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%;padding:8px;margin-bottom:10px;border:1px solid #ccc;border-radius:4px;box-sizing:border-box}.form-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:10px 20px;margin-right:10px;border:none;border-radius:4px;background-color:#007bff;color:#fff;cursor:pointer}.form-container[_ngcontent-%COMP%]   button.cancel[_ngcontent-%COMP%]{background-color:#dc3545}.form-container[_ngcontent-%COMP%]   button[type=submit][_ngcontent-%COMP%]{background-color:#28a745}"]});let r=e;return r})();var he=(()=>{let e=class e{constructor(n,t,a){this.adminser=n,this.aR=t,this.router=a,this.movie={},this.movieId=this.aR.snapshot.params.id,this.adminser.getMovie(this.movieId).subscribe(d=>{this.movie=d})}onSubmit(n){this.adminser.updateMovie(this.movieId,n.value).then(t=>{this.router.navigate(["/"])}).catch(t=>{})}onCancel(){this.router.navigate(["/"])}};e.\u0275fac=function(t){return new(t||e)(c(S),c(Q),c(g))},e.\u0275cmp=b({type:e,selectors:[["app-update"]],decls:33,vars:1,consts:[["form","ngForm"],[3,"ngSubmit"],["for","name"],["type","text","id","name","name","name","required","",3,"ngModelChange","ngModel"],["for","ticketprice"],["type","text","id","ticketprice","ngModel","","name","ticketprice","required",""],["for","genre"],["type","text","id","genre","ngModel","","name","genre","required",""],["for","synopsis"],["type","text","id","synopsis","ngModel","","name","synopsis","required",""],["for","poster"],["type","text","id","poster","ngModel","","name","poster","required",""],["for","showtime"],["type","text","id","showtime","ngModel","","name","showtime","required",""],["type","submit"],[3,"click"]],template:function(t,a){if(t&1){let d=M();o(0,"div")(1,"div")(2,"form",1,0),v("ngSubmit",function(){u(d);let h=k(3);return f(a.onSubmit(h))}),o(4,"div")(5,"label",2),m(6,"Movie Name"),i(),o(7,"input",3),H("ngModelChange",function(h){return u(d),X(a.movie.name,h)||(a.movie.name=h),f(h)}),i()(),o(8,"div")(9,"label",4),m(10,"Price"),i(),s(11,"input",5),i(),o(12,"div")(13,"label",6),m(14,"Genre"),i(),s(15,"input",7),i(),o(16,"div")(17,"label",8),m(18,"Synopsis"),i(),s(19,"input",9),i(),o(20,"div")(21,"label",10),m(22,"Poster's url"),i(),s(23,"input",11),i(),o(24,"div")(25,"label",12),m(26,"Showtime"),i(),s(27,"input",13),i(),o(28,"div")(29,"button",14),m(30,"Save"),i(),o(31,"button",15),v("click",function(){return u(d),f(a.onCancel())}),m(32,"Cancel"),i()()()()()}t&2&&(l(7),Z("ngModel",a.movie.name))},dependencies:[P,F,V,j,R,N,D]});let r=e;return r})();var Se=r=>["/update",r];function ye(r,e){if(r&1){let p=M();o(0,"a",2)(1,"div"),s(2,"img",3),o(3,"h3"),m(4),i(),o(5,"h5"),m(6),i(),o(7,"h5"),m(8),i(),o(9,"h5"),m(10),i(),o(11,"h5"),m(12),i()(),o(13,"div")(14,"button",4),m(15,"Update Movie"),i(),o(16,"button",5),v("click",function(){let t=u(p).$implicit,a=z();return f(a.Delete(t))}),m(17,"Delete Movie"),i()()()}if(r&2){let p=e.$implicit;l(2),W("src",p.poster,B),l(2),x(p.name),l(2),x(p.ticketprice),l(2),x(p.synopsis),l(2),x(p.showtime1),l(2),x(p.genre),l(2),L("routerLink",J(7,Se,p.id))}}var be=(()=>{let e=class e{constructor(n,t,a){this.adminser=n,this.router=t,this.ngZone=a,this.adminser.getMovies().subscribe(d=>{console.log(d),this.movies=d})}navigateToPay(n){this.router.navigate(["/pay",n])}Delete(n){this.adminser.deleteproduct(n.id).then(()=>{alert("Movie Deleted!")}).catch(()=>{console.log("error deleting movie")})}};e.\u0275fac=function(t){return new(t||e)(c(S),c(g),c(G))},e.\u0275cmp=b({type:e,selectors:[["app-movie-list"]],decls:5,vars:1,consts:[["routerLink","/add"],["routerLinkActive","active",4,"ngFor","ngForOf"],["routerLinkActive","active"],[3,"src"],[3,"routerLink"],[3,"click"]],template:function(t,a){t&1&&(o(0,"div")(1,"button",0),m(2,"Add movie"),i(),o(3,"div"),$(4,ye,18,9,"a",1),i()()),t&2&&(l(4),L("ngForOf",a.movies))},dependencies:[K,ee,te]});let r=e;return r})();var Ce=[{path:"add",component:ge},{path:"update/:id",component:he},{path:"",component:be}],Me=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=E({type:e}),e.\u0275inj=_({imports:[y.forChild(Ce),y]});let r=e;return r})();var Xe=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=E({type:e}),e.\u0275inj=_({imports:[Y,pe,ue,y,Me,ie(()=>ne({projectId:"project-a7b7c",appId:"1:69599044:web:0ab8c40cd8e609ff9aa111",storageBucket:"project-a7b7c.appspot.com",apiKey:"AIzaSyAy8_SXSLt-8LpZC5v7dtdw30wIrPoLJBY",authDomain:"project-a7b7c.firebaseapp.com",messagingSenderId:"69599044",measurementId:"G-B6VSBXH3W6"})),re(()=>le()),fe(()=>ve())]});let r=e;return r})();export{Xe as AdminModule};
