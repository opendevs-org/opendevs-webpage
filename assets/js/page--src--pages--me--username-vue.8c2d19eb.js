(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"12xK":function(t,e,n){"use strict";var s={name:"LoadingSpinner"},i=(n("AhWS"),n("KHd+")),a=Object(i.a)(s,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"loader"},[this._v("Loading...")])}),[],!1,null,"f4ce088e",null);e.a=a.exports},AhWS:function(t,e,n){"use strict";n("iRFJ")},NK0k:function(t,e,n){"use strict";n.r(e);var s=n("Nq0A"),i=n("12xK"),a={components:{PageHeader:s.a,LoadingSpinner:i.a},metaInfo:{title:"Resume",bodyAttrs:{class:"bg-night overflow-x-hidden"}},data:function(){return{username:null,show:!0}},computed:{data:function(){return this.$page.person.edges?this.$page.person.edges[0].node.resumeURL:{}}},watch:{data:function(t){t||this.$router.push("/")}},methods:{load:function(){this.show=!1}}},r=n("KHd+"),o=null,l=Object(r.a)(a,(function(){var t=this.$createElement,e=this._self._c||t;return e("Layout",{attrs:{page:"me"}},[e("PageHeader",{attrs:{title:"the résumé"}}),this.show?e("LoadingSpinner"):this._e(),e("iframe",{attrs:{src:this.data,width:"100%",height:"800px"},on:{load:this.load}},[this._v("Loading...")])],1)}),[],!1,null,null,null);"function"==typeof o&&o(l);e.default=l.exports},Nq0A:function(t,e,n){"use strict";var s={name:"PageHeader",props:{title:{type:String,required:!0}}},i=n("KHd+"),a=Object(i.a)(s,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container relative mx-auto"},[e("div",{staticClass:"items-center flex flex-wrap"},[e("div",{staticClass:"w-full lg:w-6/12 px-4 ml-auto mr-auto text-center"},[e("div",{staticClass:"py-4"},[e("h1",{staticClass:"font-semibold text-5xl underline"},[this._v(this._s(this.title))])])])])])}),[],!1,null,null,null);e.a=a.exports},iRFJ:function(t,e,n){}}]);