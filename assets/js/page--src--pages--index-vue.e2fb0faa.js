(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{DQNa:function(t,e,n){var i=n("busE"),a=Date.prototype,o=a.toString,s=a.getTime;new Date(NaN)+""!="Invalid Date"&&i(a,"toString",(function(){var t=s.call(this);return t==t?o.call(this):"Invalid Date"}))},ObW9:function(t,e,n){"use strict";var i=n("p4Nj");n.n(i).a},iyQ6:function(t,e,n){"use strict";n.r(e);n("yXV3"),n("+2oP"),n("DQNa"),n("SYor");var i={props:{posts:{type:Array,required:!0}},methods:{formatDate:function(t){return new Date(t).toDateString().slice(4)},formatExcerpt:function(t){var e=t.slice(3,200).trim();return-1!==e.indexOf("</p>")?e.slice(0,e.indexOf("</p>")).trim()+"...":e+"..."}}},a=(n("ObW9"),n("KHd+")),o={metaInfo:{title:"Home"},components:{BlogList:Object(a.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("ul",{staticClass:"list"},t._l(t.posts,(function(e){return n("g-link",{key:e.node.title,attrs:{to:e.node.path}},[n("li",[n("div",{staticClass:"hero_image"},[n("g-image",{attrs:{src:e.node.hero_image,alt:e.node.title,width:"300",height:"300",quality:"75"}})],1),n("div",{staticClass:"blogList__info"},[n("h2",[t._v(t._s(e.node.title))]),n("h3",[t._v(t._s(t.formatDate(e.node.date)))]),n("p",{directives:[{name:"g-image",rawName:"v-g-image"}],domProps:{innerHTML:t._s(t.formatExcerpt(e.node.content))}})])])])})),1)])}),[],!1,null,"2d599f17",null).exports}},s=null,r=Object(a.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("Layout",{attrs:{page:"home"}},[e("BlogList",{attrs:{posts:this.$page.posts.edges}})],1)}),[],!1,null,null,null);"function"==typeof s&&s(r);e.default=r.exports},p4Nj:function(t,e,n){}}]);