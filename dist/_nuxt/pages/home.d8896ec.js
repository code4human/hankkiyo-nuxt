(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{191:function(t,e,r){var content=r(197);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(36).default)("0222ea98",content,!0,{sourceMap:!1})},192:function(t,e,r){"use strict";r.r(e);var n={},o=(r(196),r(15)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"top-bar",on:{click:function(e){return t.$router.push("/address?hasBackButton=true")}}},[r("span",[t._v(t._s(t.$store.state.primaryAddress.address||"주소를 입력해 주세요"))]),t._v(" "),r("i",{staticClass:"fa fa-angle-down"})])}),[],!1,null,"1c4c46d8",null);e.default=component.exports},196:function(t,e,r){"use strict";var n=r(191);r.n(n).a},197:function(t,e,r){(e=r(35)(!1)).push([t.i,".top-bar[data-v-1c4c46d8]{width:100%;height:45px;flex-direction:row;position:-webkit-sticky;position:sticky;top:0;background:#fff;box-shadow:1px 1px 5px rgba(0,0,0,.1)}.top-bar[data-v-1c4c46d8],.top-bar i[data-v-1c4c46d8]{display:flex;align-items:center;justify-content:center}.top-bar i[data-v-1c4c46d8]{margin-left:10px;border-radius:10px;width:20px;height:20px;background:#ef4b57;color:#fff}",""]),t.exports=e},198:function(t,e,r){var content=r(211);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(36).default)("371f2122",content,!0,{sourceMap:!1})},210:function(t,e,r){"use strict";var n=r(198);r.n(n).a},211:function(t,e,r){(e=r(35)(!1)).push([t.i,".container[data-v-25156b7e]{width:100%;height:100%;display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start}.container .banner[data-v-25156b7e]{width:100%;height:192px;background:rgba(64,64,64,.41176);display:flex;align-items:center;justify-content:center}.container .categories[data-v-25156b7e]{width:100%}.container .categories .category-row[data-v-25156b7e]{margin:15px 25px;display:flex;flex-direction:row;align-items:center;justify-content:center}.container .categories .category-row .category-item[data-v-25156b7e]{margin-left:15px;margin-right:15px;display:flex;flex-direction:column;align-items:center;justify-content:center}.container .categories .category-row .category-item img[data-v-25156b7e]{width:100%;height:100%;-o-object-fit:contain;object-fit:contain;margin-bottom:10px}.container .categories .category-row .category-item span[data-v-25156b7e]{white-space:nowrap}",""]),t.exports=e},232:function(t,e,r){"use strict";r.r(e);r(66),r(22),r(23),r(13),r(50);var n=r(32),o=r(46),c=r(192),l=r(47),f=r.n(l);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function y(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h={data:function(){return{categories:[]}},created:function(){var t=this;f.a.get("/api/categories/").then((function(e){var data=e.data;t.categories=data})).catch((function(t){console.log(t)}))},computed:y(y({},Object(o.b)({primaryAddress:function(t){return t.primaryAddress}})),{},{categoryRows:function(){for(var t=this,e=[],r=function(r){e.push(t.categories.filter((function(t,e){return 3*r<=e&&e<3*r+3})))},n=0;n<Math.floor(this.categories.length/3);n++)r(n);return e}}),methods:{goToCategory:function(t){this.$router.push({path:"/categories",query:{category:t}})}},layout:"withbottombar",components:{TopBar:c.default}},v=(r(210),r(15)),component=Object(v.a)(h,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("top-bar"),t._v(" "),r("div",{staticClass:"banner"},[t._v("배너(삽입예정)")]),t._v(" "),r("div",{staticClass:"categories"},[t._l(t.categoryRows,(function(e,n){return[r("div",{key:n,staticClass:"category-row"},[t._l(e,(function(e,n){return[r("div",{key:n,staticClass:"category-item",on:{click:function(r){return t.goToCategory(e.name)}}},[r("img",{attrs:{src:e.imgSrc,alt:""}}),t._v(" "),r("span",[t._v(t._s(e.name))])])]}))],2)]}))],2)],1)}),[],!1,null,"25156b7e",null);e.default=component.exports;installComponents(component,{TopBar:r(192).default})}}]);