(function(t){function e(e){for(var r,s,c=e[0],i=e[1],l=e[2],d=0,p=[];d<c.length;d++)s=c[d],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&p.push(o[s][0]),o[s]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);u&&u(e);while(p.length)p.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],r=!0,c=1;c<a.length;c++){var i=a[c];0!==o[i]&&(r=!1)}r&&(n.splice(e--,1),t=s(s.s=a[0]))}return t}var r={},o={index:0},n=[];function s(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=r,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(a,r,function(e){return t[e]}.bind(null,r));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=i;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("cd49")},"0571":function(t,e,a){},"23f2":function(t,e,a){},"340c":function(t,e,a){"use strict";a("0571")},b9b6:function(t,e,a){"use strict";a("23f2")},cd49:function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-main",{staticClass:"main pa-4 pt-10"},[a("router-view")],1)],1)},n=[],s=a("d4ec"),c=a("262e"),i=a("2caf"),l=a("9ab4"),u=a("1b40"),d=function(t){Object(c["a"])(a,t);var e=Object(i["a"])(a);function a(){return Object(s["a"])(this,a),e.apply(this,arguments)}return a}(u["c"]);d=Object(l["a"])([u["a"]],d);var p=d,v=p,b=(a("d990"),a("2877")),f=a("6544"),h=a.n(f),m=a("7496"),g=a("f6c4"),O=Object(b["a"])(v,o,n,!1,null,null,null),j=O.exports;h()(O,{VApp:m["a"],VMain:g["a"]});var y=a("9483");Object(y["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var w=a("8c4f"),D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main mx-auto"},[a("v-row",[a("v-col",{attrs:{md:"4",sm:"6",cols:"12"}},[a("div",[t._v("關鍵字")]),a("v-text-field",{attrs:{label:"關鍵字",solo:""},model:{value:t.searchParameters.q,callback:function(e){t.$set(t.searchParameters,"q",e)},expression:"searchParameters.q"}})],1),a("v-col",{attrs:{md:"4",sm:"6",cols:"12"}},[a("div",{staticClass:"d-flex"},[a("div",[a("div",[t._v("開始日期")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.searchParameters.from,expression:"searchParameters.from"}],staticClass:"date elevation-1 pa-3 mr-4",attrs:{type:"date"},domProps:{value:t.searchParameters.from},on:{input:function(e){e.target.composing||t.$set(t.searchParameters,"from",e.target.value)}}})]),a("div",[a("div",[t._v("結束日期")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.searchParameters.to,expression:"searchParameters.to"}],staticClass:"date elevation-1 pa-3",attrs:{type:"date"},domProps:{value:t.searchParameters.to},on:{input:function(e){e.target.composing||t.$set(t.searchParameters,"to",e.target.value)}}})])])]),a("v-col",{attrs:{md:"3",sm:"6",cols:"12"}},[a("v-btn",{staticClass:"white--text mt-6",attrs:{color:"green"},on:{click:t.search}},[t._v("搜尋")])],1)],1),a("v-row",[a("v-col",{attrs:{cols:"12"}},t._l(t.sortByType,(function(e,r){return a("v-btn",{key:r,staticClass:"mr-4 white--text mb-4",attrs:{color:"blue",disabled:t.typeCanUse(e)},on:{click:function(a){return t.changeSortBy(e)}}},[t._v(" "+t._s(e)+" ")])})),1)],1),a("v-row",t._l(t.getNewsData,(function(e,r){return a("v-col",{key:r+"article",attrs:{md:"3",sm:"6",cols:"12"}},[a("ArticleDescription",{attrs:{img:e.urlToImage,title:e.title,author:e.author,publishedAt:e.publishedAt,description:e.description,index:r},on:{toDetailPage:t.toDetailPage}})],1)})),1),a("div",{staticClass:"text-center mb-10"},[a("v-pagination",{attrs:{length:t.getAllPages,"total-visible":7,circle:""},on:{input:t.toPage},model:{value:t.searchParameters.page,callback:function(e){t.$set(t.searchParameters,"page",e)},expression:"searchParameters.page"}})],1)],1)},P=[],x=a("bee2"),_=(a("ac1f"),a("841c"),a("4bb5")),N=a("2ef0"),k=a.n(N),C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-card",{staticClass:"mx-auto my-6"},[a("v-img",{attrs:{height:"250",src:t.img}}),a("v-card-title",{staticClass:"blue--text link",on:{click:t.toDetail}},[t._v(" "+t._s(t.title)+" ")]),a("v-card-text",[t._v(" author: "+t._s(t.author)+" ")]),a("v-card-text",[t._v(" publishedAt: "+t._s(t.publishedAt)+" ")]),a("v-divider",{staticClass:"mx-4"}),a("v-card-text",[t._v(" "+t._s(t.description)+" ")])],1)],1)},A=[],V=function(t){Object(c["a"])(a,t);var e=Object(i["a"])(a);function a(){return Object(s["a"])(this,a),e.apply(this,arguments)}return Object(x["a"])(a,[{key:"toDetail",value:function(){this.$emit("toDetailPage",this.index)}}]),a}(u["c"]);Object(l["a"])([Object(u["b"])({default:""})],V.prototype,"img",void 0),Object(l["a"])([Object(u["b"])({default:""})],V.prototype,"title",void 0),Object(l["a"])([Object(u["b"])({default:""})],V.prototype,"author",void 0),Object(l["a"])([Object(u["b"])({default:""})],V.prototype,"publishedAt",void 0),Object(l["a"])([Object(u["b"])({default:""})],V.prototype,"description",void 0),Object(l["a"])([Object(u["b"])({default:""})],V.prototype,"index",void 0),V=Object(l["a"])([u["a"]],V);var S=V,T=S,$=(a("b9b6"),a("b0af")),B=a("99d9"),E=a("ce7e"),q=a("adda"),I=Object(b["a"])(T,C,A,!1,null,"2c745a24",null),M=I.exports;h()(I,{VCard:$["a"],VCardText:B["a"],VCardTitle:B["b"],VDivider:E["a"],VImg:q["a"]});var R=function(t){Object(c["a"])(a,t);var e=Object(i["a"])(a);function a(){var t;return Object(s["a"])(this,a),t=e.apply(this,arguments),t.sortByType=["relevancy","popularity","publishedAt"],t.searchParameters={q:"COVID-19",from:"",to:"",sortBy:"publishedAt",page:1},t}return Object(x["a"])(a,[{key:"created",value:function(){this.searchParameters=k.a.assign(this.searchParameters,this.getSearchParameters),this.search()}},{key:"search",value:function(){this.getData(this.searchParameters),document.documentElement.scrollTop=0}},{key:"changeSortBy",value:function(t){this.searchParameters.page=1,this.searchParameters.sortBy=t,this.search()}},{key:"typeCanUse",value:function(t){return t===this.searchParameters.sortBy}},{key:"toDetailPage",value:function(t){this.setNth(t),this.$router.push("./NewsDetail")}},{key:"toPage",value:function(){this.search()}}]),a}(u["c"]);Object(l["a"])([Object(_["a"])("getData")],R.prototype,"getData",void 0),Object(l["a"])([Object(_["a"])("setNth")],R.prototype,"setNth",void 0),Object(l["a"])([Object(_["b"])("getNewsData")],R.prototype,"getNewsData",void 0),Object(l["a"])([Object(_["b"])("getAllPages")],R.prototype,"getAllPages",void 0),Object(l["a"])([Object(_["b"])("getSearchParameters")],R.prototype,"getSearchParameters",void 0),R=Object(l["a"])([Object(u["a"])({components:{ArticleDescription:M}})],R);var U=R,F=U,L=(a("340c"),a("8336")),J=a("62ad"),K=a("891e"),z=a("0fd9"),G=a("8654"),H=Object(b["a"])(F,D,P,!1,null,"6c302730",null),Q=H.exports;h()(H,{VBtn:L["a"],VCol:J["a"],VPagination:K["a"],VRow:z["a"],VTextField:G["a"]});var W=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main mx-auto"},[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-btn",{staticClass:"white--text",attrs:{color:"green"},on:{click:t.back}},[t._v(" 上一頁 ")])],1)],1),a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("ArticleDetail",{attrs:{img:t.getNewsDetailData.urlToImage,title:t.getNewsDetailData.title,author:t.getNewsDetailData.author,publishedAt:t.getNewsDetailData.publishedAt,content:t.getNewsDetailData.content,source:t.getNewsDetailData.source.name}})],1)],1)],1)},X=[],Y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-card",{staticClass:"mx-auto my-12"},[a("v-img",{attrs:{height:"250",src:t.img}}),a("v-card-title",[t._v(t._s(t.title))]),a("v-card-text",[t._v(" author: "+t._s(t.author)+" ")]),a("v-card-text",[t._v(" publishedAt: "+t._s(t.publishedAt)+" ")]),a("v-card-text",[t._v(" source from: "+t._s(t.source)+" ")]),a("v-divider",{staticClass:"mx-4"}),a("v-card-text",[t._v(" "+t._s(t.content)+" ")])],1)],1)},Z=[],tt=function(t){Object(c["a"])(a,t);var e=Object(i["a"])(a);function a(){return Object(s["a"])(this,a),e.apply(this,arguments)}return a}(u["c"]);Object(l["a"])([Object(u["b"])({default:""})],tt.prototype,"img",void 0),Object(l["a"])([Object(u["b"])({default:""})],tt.prototype,"title",void 0),Object(l["a"])([Object(u["b"])({default:""})],tt.prototype,"author",void 0),Object(l["a"])([Object(u["b"])({default:""})],tt.prototype,"publishedAt",void 0),Object(l["a"])([Object(u["b"])({default:""})],tt.prototype,"content",void 0),Object(l["a"])([Object(u["b"])({default:""})],tt.prototype,"source",void 0),tt=Object(l["a"])([u["a"]],tt);var et=tt,at=et,rt=Object(b["a"])(at,Y,Z,!1,null,null,null),ot=rt.exports;h()(rt,{VCard:$["a"],VCardText:B["a"],VCardTitle:B["b"],VDivider:E["a"],VImg:q["a"]});var nt=function(t){Object(c["a"])(a,t);var e=Object(i["a"])(a);function a(){return Object(s["a"])(this,a),e.apply(this,arguments)}return Object(x["a"])(a,[{key:"back",value:function(){this.$router.go(-1)}}]),a}(u["c"]);Object(l["a"])([Object(_["b"])("getNewsDetailData")],nt.prototype,"getNewsDetailData",void 0),nt=Object(l["a"])([u["a"],Object(u["a"])({components:{ArticleDetail:ot}})],nt);var st=nt,ct=st,it=Object(b["a"])(ct,W,X,!1,null,null,null),lt=it.exports;h()(it,{VBtn:L["a"],VCol:J["a"],VRow:z["a"]}),r["a"].use(w["a"]);var ut=[{path:"/",name:"NewsList",component:Q},{path:"/index.html",name:"NewsList",component:Q},{path:"/NewsDetail",name:"NewsDetail",component:lt}],dt=new w["a"]({mode:"history",base:"",routes:ut}),pt=dt,vt=(a("159b"),a("99af"),a("a15b"),a("d3b7"),a("2f62")),bt=a("bc3a"),ft=a.n(bt),ht=function(){function t(){Object(s["a"])(this,t),this.key="a9ee563c5a194e9ea794bd389c599e2c",this.baseUrl=ft.a.create({baseURL:"https://newsapi.org/v2/everything"})}return Object(x["a"])(t,[{key:"getData",value:function(t){return this.baseUrl.request({method:"get",url:"".concat(t,"&apiKey=").concat(this.key)})}}]),t}(),mt=new ht,gt=mt;r["a"].use(vt["a"]);var Ot=new vt["a"].Store({state:{newsData:[],resultSum:0,detailNth:0,searchParameters:{q:"COVID-19",from:"",to:"",sortBy:"publishedAt",page:1}},mutations:{setNewsData:function(t,e){t.newsData=e},setResultSum:function(t,e){t.resultSum=e},setDetailNth:function(t,e){t.detailNth=e},saveSearchParameters:function(t,e){t.searchParameters=e}},actions:{getData:function(t,e){var a=t.commit,r=[];k.a.forEach(e,(function(t,e){""!==t&&r.push("".concat(e,"=").concat(t))}));var o="?".concat(r.join("&"));return new Promise((function(){gt.getData(o).then((function(t){a("setNewsData",t.data.articles),a("setResultSum",t.data.totalResults),a("saveSearchParameters",e)}))}))},setNth:function(t,e){var a=t.commit;a("setDetailNth",e)}},getters:{getNewsData:function(t){return t.newsData},getAllPages:function(t){var e=Math.floor(t.resultSum/20);return t.resultSum%20>0&&(e+=1),e},getNewsDetailData:function(t){return t.newsData[t.detailNth]},getSearchParameters:function(t){return t.searchParameters}},modules:{}}),jt=a("f309");r["a"].use(jt["a"]);var yt=new jt["a"]({});r["a"].config.productionTip=!1,new r["a"]({router:pt,store:Ot,vuetify:yt,render:function(t){return t(j)}}).$mount("#app")},d809:function(t,e,a){},d990:function(t,e,a){"use strict";a("d809")}});