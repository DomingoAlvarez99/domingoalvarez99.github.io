(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b75bb12e"],{"014b":function(t,e,n){},4134:function(t,e,n){"use strict";n("696c")},"58eb":function(t,e,n){"use strict";n("014b")},"696c":function(t,e,n){},"79a1":function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Page",{attrs:{title:t.title},scopedSlots:t._u([{key:"title",fn:function(){return[t._t("title")]},proxy:!0},{key:"content",fn:function(){return[n("v-col",{attrs:{cols:"12"}},[n("PostPagination",{attrs:{posts:t.posts},scopedSlots:t._u([{key:"default",fn:function(t){return[n("PostSummary",{attrs:{post:t.post}})]}}])})],1)]},proxy:!0}],null,!0)})},a=[],i=(n("4de4"),n("d81d"),n("4e827"),n("0d03"),n("5530")),o=n("6622"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.post?n("div",{staticClass:"post-summary"},[n("div",{staticClass:"header mb-1"},[n("PostMetadata",{attrs:{createdAt:t.post.attributes.created_at,updatedAt:t.post.attributes.updated_at}}),n("h2",{staticClass:"mt-1 mb-2"},[n("router-link",{staticClass:"link",attrs:{to:{name:"Post",params:{name:t.post.path}}}},[t._v(t._s(t.post.attributes.title))])],1)],1),n("div",[t.post.attributes.description?n("div",{staticClass:"description"},[t._v(" "+t._s(t.post.attributes.description)+" ")]):t._e()]),n("Tags",{attrs:{tags:t.post.attributes.tags}})],1):t._e()},u=[],c=n("5858"),l=n("d000"),p={components:{PostMetadata:c["a"],Tags:l["a"]},props:{post:Object},data:function(){return{dateOptions:{year:"numeric",month:"short",day:"numeric"}}},methods:{formatDate:function(t,e){return new Date(t).toLocaleDateString("es-ES",e)},formatPostDate:function(t){return this.formatDate(t,this.dateOptions)}}},f=p,d=(n("4134"),n("2877")),h=Object(d["a"])(f,r,u,!1,null,"1afb8fe5",null),g=h.exports,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.posts.length>0?n("div",{staticClass:"pagination"},[n("div",{staticClass:"content"},t._l(t.paginatedPosts,(function(e,s){return n("div",{key:"post-"+s},[t._t("default",null,{position:s,post:e,pageSize:t.paginatedPosts.length}),n("v-divider",{staticClass:"divider"})],2)})),0),t.displayPagination&&t.posts.length>t.paginatedPosts.length&&t.paginatedPosts.length>0?n("div",{staticClass:"footer"},[n("button",{staticClass:"mr-2 link",attrs:{disabled:t.page<=0},on:{click:t.prevPage}},[n("i"),t._v(" Artículos recientes ")]),n("button",{staticClass:"ml-2 link",attrs:{disabled:t.limit>=t.posts.length},on:{click:t.nextPage}},[t._v(" Artículos anteriores "),n("i",{staticClass:"right"})])]):t._e()]):t._e()},b=[],v=(n("fb6a"),n("b0c0"),n("a9e3"),{props:{posts:Array,pageSize:{type:Number,default:2}},data:function(){return{page:0,displayPagination:!0}},methods:{prevPage:function(){this.page--},nextPage:function(){this.page++},setDefaultPage:function(){var t=this.$route.query.page;t&&(this.page=t)},onHidePaginationEvent:function(){var t=this;this.$root.$on("hide-pagination",(function(){t.displayPagination=!1}))}},created:function(){this.setDefaultPage(),this.onHidePaginationEvent()},computed:{paginatedPosts:function(){return this.posts.slice(this.offset,this.limit)},limit:function(){return this.offset+this.pageSize},offset:function(){return this.pageSize*this.page}},watch:{page:function(t){t!==this.$route.query.page&&this.$router.push({name:this.$route.name,query:{page:t}})},paginatedPosts:function(t){this.posts.length>0&&0===t.length&&this.$router.push({name:"NotFound"})["catch"]((function(t){if("NavigationDuplicated"!=t.name)throw t}))}}}),P=v,_=(n("58eb"),n("6544")),y=n.n(_),C=n("ce7e"),$=Object(d["a"])(P,m,b,!1,null,"cfc79254",null),k=$.exports;y()($,{VDivider:C["a"]});var w=n("3c61"),S={components:{PostSummary:g,PostPagination:k,Page:w["a"]},props:{title:String,filter:{type:Function,default:function(){return!0}},sort:{type:Function,default:function(t,e){var n=new Date(t.attributes.created_at).getTime(),s=new Date(e.attributes.created_at).getTime();return s-n}}},data:function(){return{posts:[]}},methods:{setPosts:function(t){var e=this;o["b"].then((function(n){var s=n.filter(t).map((function(t){return delete t.vue,Object(i["a"])({},t)})).sort(e.sort);0===s.length&&e.$router.push({name:"NotFound"}),e.posts=s}))}},created:function(){this.setPosts(this.filter)},watch:{filter:function(t){this.setPosts(t)}}},D=S,x=n("62ad"),A=Object(d["a"])(D,s,a,!1,null,null,null);e["a"]=A.exports;y()(A,{VCol:x["a"]})},a112:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("PostList",{attrs:{filter:t.filter},scopedSlots:t._u([{key:"title",fn:function(){return[n("h1",{staticClass:"title"},[t._v(" Artículos sobre "),n("span",{staticClass:"font-italic font-weight-bold"},[t._v(t._s(t.tag))])])]},proxy:!0}])})},a=[],i=(n("4de4"),n("a630"),n("caad"),n("b0c0"),n("2532"),n("3ca3"),n("79a1")),o=(n("4160"),n("159b"),function(t){t.style.animation="none",t.offsetHeight,t.style.animation=null}),r=function(t){return t.forEach(o)},u={components:{PostList:i["a"]},data:function(){return{filter:function(){return!0}}},computed:{tag:function(){return this.$route.params.name}},methods:{resetAnimations:function(){var t=document.getElementsByClassName("animated");r(Array.from(t))},buildFilter:function(t){return function(e){return e.attributes.tags.includes(t)}}},created:function(){this.filter=this.buildFilter(this.tag)},watch:{tag:function(t){this.filter=this.buildFilter(t),this.resetAnimations(),t&&this.$root.$emit("update-title",t)}}},c=u,l=n("2877"),p=Object(l["a"])(c,s,a,!1,null,null,null);e["default"]=p.exports}}]);
//# sourceMappingURL=chunk-b75bb12e.af80d532.js.map