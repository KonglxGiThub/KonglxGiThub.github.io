(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{327:function(e,t,o){"use strict";o.d(t,"a",(function(){return s})),o.d(t,"b",(function(){return a}));o(132);var n=o(0);function s(){const e=Object(n.d)();if(!e)throw new Error("must be called in setup");return(null==e?void 0:e.proxy)||{}}function a(){const e=Object(n.h)(!1);return Object(n.e)(()=>{e.value=!0}),Object(n.f)(()=>{e.value=!1,setTimeout(()=>{e.value=!0},100)}),{recoShowModule:e}}},342:function(e,t,o){"use strict";var n=o(0),s=(o(17),o(61)),a=o(327),r=Object(n.c)({components:{RecoIcon:s.b},setup(e,t){const o=Object(a.a)(),s=Object(n.g)({query:"",focused:!1,focusIndex:0,placeholder:void 0}),r=Object(n.a)(()=>s.focused&&l.value&&l.value.length),i=e=>{for(const t in o.$site.locales||{})if("/"!==t&&0===e.path.indexOf(t))return t;return"/"},l=Object(n.a)(()=>{const e=s.query.trim().toLowerCase();if(!e)return;const{pages:t}=o.$site,n=o.$site.themeConfig.searchMaxSuggestions,a=o.$localePath,r=t=>t&&t.title&&t.title.toLowerCase().indexOf(e)>-1,l=[];for(let e=0;e<t.length&&!(l.length>=n);e++){const o=t[e];if(i(o)===a)if(r(o))l.push(o);else if(o.headers)for(let e=0;e<o.headers.length&&!(l.length>=n);e++){const t=o.headers[e];r(t)&&l.push(Object.assign({},o,{path:o.path+"#"+t.slug,header:t}))}}return l}),c=Object(n.a)(()=>(o.$site.themeConfig.nav||[]).length+(o.$site.repo?1:0)<=2);return{showSuggestions:r,suggestions:l,alignRight:c,onUp:()=>{r.value&&(s.focusIndex>0?s.focusIndex--:s.focusIndex=l.value.length-1)},onDown:()=>{r.value&&(s.focusIndex<l.value.length-1?s.focusIndex++:s.focusIndex=0)},focus:e=>{s.focusIndex=e},unfocus:()=>{s.focusIndex=-1},go:e=>{r.value&&(o.$router.push(l.value[e].path),s.query="",s.focusIndex=0)},...Object(n.i)(s)}},mounted(){this.placeholder=this.$site.themeConfig.searchPlaceholder||""}}),i=(o(379),o(2)),l=Object(i.a)(r,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"search-box"},[t("reco-icon",{attrs:{icon:"reco-search"}}),e._v(" "),t("input",{ref:"input",class:{focused:e.focused},attrs:{"aria-label":"Search",placeholder:e.placeholder,autocomplete:"off",spellcheck:"false"},domProps:{value:e.query},on:{input:function(t){e.query=t.target.value},focus:function(t){e.focused=!0},blur:function(t){e.focused=!1},keyup:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.go(e.focusIndex)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"up",38,t.key,["Up","ArrowUp"])?null:e.onUp.apply(null,arguments)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"down",40,t.key,["Down","ArrowDown"])?null:e.onDown.apply(null,arguments)}]}}),e._v(" "),e.showSuggestions?t("ul",{staticClass:"suggestions",class:{"align-right":e.alignRight},on:{mouseleave:e.unfocus}},e._l(e.suggestions,(function(o,n){return t("li",{key:n,staticClass:"suggestion",class:{focused:n===e.focusIndex},on:{mousedown:function(t){return e.go(n)},mouseenter:function(t){return e.focus(n)}}},[t("a",{attrs:{href:o.path},on:{click:function(e){e.preventDefault()}}},[t("span",{staticClass:"page-title"},[e._v(e._s(o.title||o.path))]),e._v(" "),o.header?t("span",{staticClass:"header"},[e._v("> "+e._s(o.header.title))]):e._e()])])})),0):e._e()],1)}),[],!1,null,null,null).exports,c=(o(380),Object(i.a)({},(function(){var e=this,t=e._self._c;return t("div",{staticClass:"sidebar-button",on:{click:function(t){return e.$emit("toggle-sidebar")}}},[t("svg",{staticClass:"icon",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"}},[t("path",{attrs:{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"}})])])}),[],!1,null,null,null).exports),u=o(344),d=o(377),f=Object(n.c)({components:{NavLink:u.a,DropdownTransition:d.a,RecoIcon:s.b},props:{item:{required:!0}},setup(e,t){const o=Object(n.h)(!1);return{open:o,toggle:()=>{o.value=!o.value}}}}),p=(o(382),Object(i.a)(f,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"dropdown-wrapper",class:{open:e.open}},[t("a",{staticClass:"dropdown-title",on:{click:e.toggle}},[t("span",{staticClass:"title"},[t("reco-icon",{attrs:{icon:""+e.item.icon}}),e._v("\n      "+e._s(e.item.text)+"\n    ")],1),e._v(" "),t("span",{staticClass:"arrow",class:e.open?"down":"right"})]),e._v(" "),t("DropdownTransition",[t("ul",{directives:[{name:"show",rawName:"v-show",value:e.open,expression:"open"}],staticClass:"nav-dropdown"},e._l(e.item.items,(function(o,n){return t("li",{key:o.link||n,staticClass:"dropdown-item"},["links"===o.type?t("h4",[e._v(e._s(o.text))]):e._e(),e._v(" "),"links"===o.type?t("ul",{staticClass:"dropdown-subitem-wrapper"},e._l(o.items,(function(e){return t("li",{key:e.link,staticClass:"dropdown-subitem"},[t("NavLink",{attrs:{item:e}})],1)})),0):t("NavLink",{attrs:{item:o}})],1)})),0)])],1)}),[],!1,null,null,null).exports),h=o(18),g=Object(n.c)({components:{NavLink:u.a,DropdownLink:p,RecoIcon:s.b},setup(e,t){const o=Object(a.a)(),s=Object(n.a)(()=>o.$themeLocaleConfig.nav||o.$themeConfig.nav||[]),r=Object(n.a)(()=>{const e=o.$site.locales||{};if(e&&Object.keys(e).length>1){const t=o.$page.path,n=o.$router.options.routes,a=o.$themeConfig.locales||{},r={text:o.$themeLocaleConfig.selectText||"Languages",items:Object.keys(e).map(s=>{const r=e[s],i=a[s]&&a[s].label||r.lang;let l;return r.lang===o.$lang?l=t:(l=t.replace(o.$localeConfig.path,s),n.some(e=>e.path===l)||(l=s)),{text:i,link:l}})};return[...s.value,r]}const t=o.$themeConfig.blogConfig||{},n=s.value.some(e=>!t.category||e.text===(t.category.text||"分类")),a=s.value.some(e=>!t.tag||e.text===(t.tag.text||"标签"));if(!n&&Object.hasOwnProperty.call(t,"category")){const e=t.category,n=o.$categories;s.value.splice(parseInt(e.location||2)-1,0,{items:n.list.map(e=>(e.link=e.path,e.text=e.name,e)),text:e.text||o.$recoLocales.category,type:"links",icon:"reco-category"})}if(!a&&Object.hasOwnProperty.call(t,"tag")){const e=t.tag;s.value.splice(parseInt(e.location||3)-1,0,{link:"/tag/",text:e.text||o.$recoLocales.tag,type:"links",icon:"reco-tag"})}return s.value}),i=Object(n.a)(()=>(o.nav||[]).map(e=>Object.assign(Object(h.j)(e),{items:(e.items||[]).map(h.j)}))),l=Object(n.a)(()=>{const{repo:e}=o.$themeConfig;return e?/^https?:/.test(e)?e:"https://github.com/"+e:""}),c=Object(n.a)(()=>{if(!o.repoLink)return"";if(o.$themeConfig.repoLabel)return o.$themeConfig.repoLabel;const e=o.repoLink.match(/^https?:\/\/[^/]+/)[0],t=["GitHub","GitLab","Bitbucket"];for(let o=0;o<t.length;o++){const n=t[o];if(new RegExp(n,"i").test(e))return n}return"Source"});return{userNav:s,nav:r,userLinks:i,repoLink:l,repoLabel:c}}}),m=(o(383),Object(i.a)(g,(function(){var e=this,t=e._self._c;e._self._setupProxy;return e.userLinks.length||e.repoLink?t("nav",{staticClass:"nav-links"},[e._l(e.userLinks,(function(e){return t("div",{key:e.link,staticClass:"nav-item"},["links"===e.type?t("DropdownLink",{attrs:{item:e}}):t("NavLink",{attrs:{item:e}})],1)})),e._v(" "),e.repoLink?t("a",{staticClass:"repo-link",attrs:{href:e.repoLink,target:"_blank",rel:"noopener noreferrer"}},[t("reco-icon",{attrs:{icon:"reco-"+e.repoLabel.toLowerCase()}}),e._v("\n    "+e._s(e.repoLabel)+"\n    "),t("OutboundLink")],1):e._e()],2):e._e()}),[],!1,null,null,null).exports),v=o(384),b=o.n(v);var _={light:{"--default-color-10":"rgba(255, 255, 255, 1)","--default-color-9":"rgba(255, 255, 255, .9)","--default-color-8":"rgba(255, 255, 255, .8)","--default-color-7":"rgba(255, 255, 255, .7)","--default-color-6":"rgba(255, 255, 255, .6)","--default-color-5":"rgba(255, 255, 255, .5)","--default-color-4":"rgba(255, 255, 255, .4)","--default-color-3":"rgba(255, 255, 255, .3)","--default-color-2":"rgba(255, 255, 255, .2)","--default-color-1":"rgba(255, 255, 255, .1)","--background-color":"#fff","--box-shadow":"0 1px 8px 0 rgba(0, 0, 0, 0.1)","--box-shadow-hover":"0 2px 16px 0 rgba(0, 0, 0, 0.2)","--text-color":"#242424","--text-color-sub":"#7F7F7F","--border-color":"#eaecef","--code-color":"rgba(27, 31, 35, 0.05)","--mask-color":"#888"},dark:{"--default-color-10":"rgba(0, 0, 0, 1)","--default-color-9":"rgba(0, 0, 0, .9)","--default-color-8":"rgba(0, 0, 0, .8)","--default-color-7":"rgba(0, 0, 0, .7)","--default-color-6":"rgba(0, 0, 0, .6)","--default-color-5":"rgba(0, 0, 0, .5)","--default-color-4":"rgba(0, 0, 0, .4)","--default-color-3":"rgba(0, 0, 0, .3)","--default-color-2":"rgba(0, 0, 0, .2)","--default-color-1":"rgba(0, 0, 0, .1)","--background-color":"#181818","--box-shadow":"0 1px 8px 0 rgba(0, 0, 0, .6)","--box-shadow-hover":"0 2px 16px 0 rgba(0, 0, 0, .7)","--text-color":"rgba(255, 255, 255, .8)","--text-color-sub":"#8B8B8B","--border-color":"rgba(0, 0, 0, .3)","--code-color":"rgba(0, 0, 0, .3)","--mask-color":"#000"}};function y(e){const t=document.querySelector(":root"),o=_[e],n="dark"===e?"light":"dark";for(const e in o)t.style.setProperty(e,o[e]);t.classList.remove(n),t.classList.add(e)}function k(e){if("auto"!==e)return void y(e);const t=window.matchMedia("(prefers-color-scheme: dark)").matches,o=window.matchMedia("(prefers-color-scheme: light)").matches;if(t&&y("dark"),o&&y("light"),!t&&!o){console.log("You specified no preference for a color scheme or your browser does not support it. I schedule dark mode during night time.");const e=(new Date).getHours();y(e<6||e>=18?"dark":"light")}}var w={name:"ModeOptions",data:()=>({modeOptions:[{mode:"dark",title:"dark"},{mode:"auto",title:"auto"},{mode:"light",title:"light"}],currentMode:"auto"}),mounted(){this.currentMode=localStorage.getItem("mode")||this.$themeConfig.mode||"auto";var e=this;window.matchMedia("(prefers-color-scheme: dark)").addListener(()=>{"auto"===e.$data.currentMode&&k(e.$data.currentMode)}),window.matchMedia("(prefers-color-scheme: light)").addListener(()=>{"auto"===e.$data.currentMode&&k(e.$data.currentMode)}),k(this.currentMode)},methods:{selectMode(e){e!==this.currentMode&&(this.currentMode=e,k(e),localStorage.setItem("mode",e))},getClass(e){return e!==this.currentMode?e:e+" active"}}},C=(o(385),Object(i.a)(w,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"mode-options"},[t("h4",{staticClass:"title"},[e._v("Choose mode")]),e._v(" "),t("ul",{staticClass:"color-mode-options"},e._l(e.modeOptions,(function(o,n){return t("li",{key:n,class:e.getClass(o.mode),on:{click:function(t){return e.selectMode(o.mode)}}},[e._v(e._s(o.title))])})),0)])}),[],!1,null,null,null).exports),x={name:"UserSettings",directives:{"click-outside":b.a},components:{ModePicker:C,RecoIcon:s.b,ModuleTransition:s.a},data:()=>({showMenu:!1}),mounted(){const e=this.$themeConfig.mode||"auto",{modePicker:t}=this.$themeConfig;!1===t&&("auto"===e&&(window.matchMedia("(prefers-color-scheme: dark)").addListener(()=>{k(e)}),window.matchMedia("(prefers-color-scheme: light)").addListener(()=>{k(e)})),k(e))},methods:{hideMenu(){this.showMenu=!1}}},O=(o(386),Object(i.a)(x,(function(){var e=this,t=e._self._c;return!1!==e.$themeConfig.modePicker?t("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:e.hideMenu,expression:"hideMenu"}],staticClass:"color-picker"},[t("a",{staticClass:"color-button",on:{click:function(t){t.preventDefault(),e.showMenu=!e.showMenu}}},[t("reco-icon",{attrs:{icon:"reco-color"}})],1),e._v(" "),t("ModuleTransition",{attrs:{transform:["translate(-50%, 0)","translate(-50%, -10px)"]}},[t("div",{directives:[{name:"show",rawName:"v-show",value:e.showMenu,expression:"showMenu"}],staticClass:"color-picker-menu"},[t("ModePicker")],1)])],1):e._e()}),[],!1,null,null,null).exports),$=Object(n.c)({components:{SidebarButton:c,NavLinks:m,SearchBox:l,AlgoliaSearchBox:{},Mode:O},setup(e,t){const o=Object(a.a)(),s=Object(n.h)(null),r=Object(n.a)(()=>o.$themeLocaleConfig.algolia||o.$themeConfig.algolia||{}),i=Object(n.a)(()=>r.value&&r.value.apiKey&&r.value.indexName);function l(e,t){return e.ownerDocument.defaultView.getComputedStyle(e,null)[t]}return Object(n.e)(()=>{const e=parseInt(l(o.$el,"paddingLeft"))+parseInt(l(o.$el,"paddingRight")),t=()=>{document.documentElement.clientWidth<719?s.value=null:s.value=o.$el.offsetWidth-e-(o.$refs.siteName&&o.$refs.siteName.offsetWidth||0)};t(),window.addEventListener("resize",t,!1)}),{linksWrapMaxWidth:s,algolia:r,isAlgoliaSearch:i,css:l}}}),j=(o(387),Object(i.a)($,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("header",{staticClass:"navbar"},[t("SidebarButton",{on:{"toggle-sidebar":function(t){return e.$emit("toggle-sidebar")}}}),e._v(" "),t("router-link",{staticClass:"home-link",attrs:{to:e.$localePath}},[e.$themeConfig.logo?t("img",{staticClass:"logo",attrs:{src:e.$withBase(e.$themeConfig.logo),alt:e.$siteTitle}}):e._e(),e._v(" "),e.$siteTitle?t("span",{ref:"siteName",staticClass:"site-name"},[e._v(e._s(e.$siteTitle))]):e._e()]),e._v(" "),t("div",{staticClass:"links",style:e.linksWrapMaxWidth?{"max-width":e.linksWrapMaxWidth+"px"}:{}},[t("Mode"),e._v(" "),e.isAlgoliaSearch?t("AlgoliaSearchBox",{attrs:{options:e.algolia}}):!1!==e.$themeConfig.search&&!1!==e.$frontmatter.search?t("SearchBox"):e._e(),e._v(" "),t("NavLinks",{staticClass:"can-hide"})],1)],1)}),[],!1,null,null,null).exports),I=o(375),L=Object(n.c)({name:"Sidebar",components:{SidebarLinks:I.default,NavLinks:m},props:["items"]}),S=(o(390),Object(i.a)(L,(function(){var e=this._self._c;this._self._setupProxy;return e("aside",{staticClass:"sidebar"},[this._t("top"),this._v(" "),e("NavLinks"),this._v(" "),e("SidebarLinks",{attrs:{depth:0,items:this.items}}),this._v(" "),this._t("bottom")],2)}),[],!1,null,null,null).exports),T=o(376),P=o(358),M=o.n(P),B=Object(n.c)({name:"Password",components:{RecoIcon:s.b},props:{isPage:{type:Boolean,default:!1}},setup(e,t){const o=Object(a.a)(),s=(new Date).getFullYear(),r=Object(n.h)(""),i=Object(n.h)("Konck! Knock!"),{isPage:l}=Object(n.i)(e);return{warningText:i,year:s,key:r,inter:()=>{const e=M()(r.value.trim()),t="pageKey"+window.location.pathname,n=l.value?t:"key";sessionStorage.setItem(n,e);if(!(l.value?(()=>{const e=o.$frontmatter.keys.map(e=>e.toLowerCase()),t="pageKey"+window.location.pathname;return e&&e.indexOf(sessionStorage.getItem(t))>-1})():(()=>{let{keys:e}=o.$themeConfig.keyPage;return e=e.map(e=>e.toLowerCase()),e.indexOf(sessionStorage.getItem("key"))>-1})()))return void(i.value="Key Error");i.value="Key Success";const s=document.getElementById("box").style.width;o.$refs.passwordBtn.style.width=s-2+"px",o.$refs.passwordBtn.style.opacity=1,setTimeout(()=>{window.location.reload()},800)},inputFocus:()=>{i.value="Input Your Key"},inputBlur:()=>{i.value="Konck! Knock!"}}}}),E=(o(394),Object(i.a)(B,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"password-shadow"},[t("h3",{staticClass:"title"},[e._v(e._s(e.isPage?e.$frontmatter.title:e.$site.title||e.$localeConfig.title))]),e._v(" "),e.isPage?e._e():t("p",{staticClass:"description"},[e._v(e._s(e.$site.description||e.$localeConfig.description))]),e._v(" "),t("label",{staticClass:"inputBox",attrs:{id:"box"}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.key,expression:"key"}],attrs:{type:"password"},domProps:{value:e.key},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.inter.apply(null,arguments)},focus:e.inputFocus,blur:e.inputBlur,input:function(t){t.target.composing||(e.key=t.target.value)}}}),e._v(" "),t("span",[e._v(e._s(e.warningText))]),e._v(" "),t("button",{ref:"passwordBtn",on:{click:e.inter}},[e._v("OK")])]),e._v(" "),t("div",{staticClass:"footer"},[t("span",[t("reco-icon",{attrs:{icon:"reco-theme"}}),e._v(" "),t("a",{attrs:{target:"blank",href:"https://vuepress-theme-reco.recoluan.com"}},[e._v("vuePress-theme-reco")])],1),e._v(" "),t("span",[t("reco-icon",{attrs:{icon:"reco-copyright"}}),e._v(" "),t("a",[e.$themeConfig.author?t("span",[e._v(e._s(e.$themeConfig.author))]):e._e(),e._v("\n          \n        "),e.$themeConfig.startYear&&e.$themeConfig.startYear!=e.year?t("span",[e._v(e._s(e.$themeConfig.startYear)+" - ")]):e._e(),e._v("\n        "+e._s(e.year)+"\n      ")])],1)])])}),[],!1,null,"59e6cb88",null).exports),N=Object(n.c)({setup(e,t){const o=Object(a.a)();return{headers:Object(n.a)(()=>o.$showSubSideBar?o.$page.headers:[]),isLinkActive:e=>Object(h.e)(o.$route,o.$page.path+"#"+e.slug)}},render(e){return e("ul",{class:{"sub-sidebar-wrapper":!0},style:{width:this.headers.length>0?"12rem":"0"}},[...this.headers.map(t=>e("li",{class:{active:this.isLinkActive(t),["level-"+t.level]:!0},attr:{key:t.title}},[e("router-link",{class:{"sidebar-link":!0,["reco-side-"+t.slug]:!0},props:{to:`${this.$page.path}#${t.slug}`}},t.title)]))])}}),H=(o(395),Object(i.a)(N,void 0,void 0,!1,null,"b57cc07c",null).exports),A=o(396),K=Object(n.c)({components:{Sidebar:S,Navbar:j,Password:E,PersonalInfo:T.a,SubSidebar:H},props:{sidebar:{type:Boolean,default:!0},sidebarItems:{type:Array,default:()=>[]},showModule:{type:Boolean,default:!1}},setup(e,t){const o=Object(a.a)(),s=Object(n.h)(!1),r=Object(n.h)(!0),i=Object(n.h)(!0),l=Object(n.h)(!0),c=Object(n.a)(()=>e.sidebarItems.length>0),u=Object(n.a)(()=>o.$themeConfig.keyPage&&!0===o.$themeConfig.keyPage.absoluteEncryption),d=Object(n.a)(()=>{const{themeConfig:e}=o.$site,{frontmatter:t}=o.$page;return!1!==t.navbar&&!1!==e.navbar&&(o.$title||e.logo||e.repo||e.nav||o.$themeLocaleConfig.nav)}),f=Object(n.a)(()=>{const e={"no-navbar":!d.value,"sidebar-open":s.value,"no-sidebar":!c.value},{pageClass:t}=o.$frontmatter||{};return t&&(e[t]=!0),e}),p=()=>{const{keyPage:e}=o.$themeConfig;if(!e||!e.keys||0===e.keys.length)return void(r.value=!0);let{keys:t}=e;t=t.map(e=>e.toLowerCase()),r.value=t&&t.indexOf(sessionStorage.getItem("key"))>-1},h=()=>{let e=o.$frontmatter.keys;e&&0!==e.length?(e=e.map(e=>e.toLowerCase()),i.value=e.indexOf(sessionStorage.getItem("pageKey"+window.location.pathname))>-1):i.value=!0};return Object(n.e)(()=>{o.$router.afterEach(()=>{s.value=!1}),p(),h(),(()=>{const e=o.$frontmatter.home&&null==sessionStorage.getItem("firstLoad")?1e3:0;Object(A.setTimeout)(()=>{l.value=!1,null==sessionStorage.getItem("firstLoad")&&sessionStorage.setItem("firstLoad",!1)},e)})()}),{isSidebarOpen:s,absoluteEncryption:u,shouldShowNavbar:d,shouldShowSidebar:c,pageClasses:f,hasKey:p,hasPageKey:h,isHasKey:r,isHasPageKey:i,toggleSidebar:e=>{s.value="boolean"==typeof e?e:!s.value},firstLoad:l}},watch:{$frontmatter(e,t){this.hasKey(),this.hasPageKey()}}}),D=(o(398),Object(i.a)(K,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"theme-container",class:e.pageClasses},[e.absoluteEncryption?t("div",[t("transition",{attrs:{name:"fade"}},[e.isHasKey?e._e():t("Password")],1),e._v(" "),e.isHasKey?t("div",[e.shouldShowNavbar?t("Navbar",{on:{"toggle-sidebar":e.toggleSidebar}}):e._e(),e._v(" "),t("div",{staticClass:"sidebar-mask",on:{click:function(t){return e.toggleSidebar(!1)}}}),e._v(" "),t("Sidebar",{attrs:{items:e.sidebarItems},on:{"toggle-sidebar":e.toggleSidebar}},[t("PersonalInfo",{attrs:{slot:"top"},slot:"top"}),e._v(" "),e._t("sidebar-bottom",null,{slot:"bottom"})],2),e._v(" "),e.isHasPageKey?e._t("default"):t("Password",{attrs:{isPage:!0}})],2):e._e()],1):t("div",[t("transition",{attrs:{name:"fade"}},[t("Password",{directives:[{name:"show",rawName:"v-show",value:!e.firstLoad&&!e.isHasKey,expression:"!firstLoad && !isHasKey"}],key:"out",staticClass:"password-wrapper-out"})],1),e._v(" "),t("div",{class:{hide:e.firstLoad||!e.isHasKey}},[e.shouldShowNavbar?t("Navbar",{on:{"toggle-sidebar":e.toggleSidebar}}):e._e(),e._v(" "),t("div",{staticClass:"sidebar-mask",on:{click:function(t){return e.toggleSidebar(!1)}}}),e._v(" "),t("Sidebar",{attrs:{items:e.sidebarItems},on:{"toggle-sidebar":e.toggleSidebar}},[t("PersonalInfo",{attrs:{slot:"top"},slot:"top"}),e._v(" "),e._t("sidebar-bottom",null,{slot:"bottom"})],2),e._v(" "),t("Password",{directives:[{name:"show",rawName:"v-show",value:!e.isHasPageKey,expression:"!isHasPageKey"}],key:"in",staticClass:"password-wrapper-in",attrs:{isPage:!0}}),e._v(" "),t("div",{class:{hide:!e.isHasPageKey}},[e._t("default")],2),e._v(" "),t("SubSidebar",{staticClass:"sub-sidebar"})],1)],1)])}),[],!1,null,"7dd95ae2",null));t.a=D.exports},344:function(e,t,o){"use strict";var n=o(0),s=o(18),a=o(61),r=o(327),i=Object(n.c)({components:{RecoIcon:a.b},props:{item:{required:!0}},setup(e,t){const o=Object(r.a)(),{item:a}=Object(n.i)(e),i=Object(n.a)(()=>Object(s.d)(a.value.link)),l=Object(n.a)(()=>o.$site.locales?Object.keys(o.$site.locales).some(e=>e===i.value):"/"===i.value);return{link:i,exact:l,isExternal:s.f,isMailto:s.g,isTel:s.h}}}),l=o(2),c=Object(l.a)(i,(function(){var e=this,t=e._self._c;e._self._setupProxy;return e.isExternal(e.link)?t("a",{staticClass:"nav-link external",attrs:{href:e.link,target:e.isMailto(e.link)||e.isTel(e.link)?null:"_blank",rel:e.isMailto(e.link)||e.isTel(e.link)?null:"noopener noreferrer"}},[t("reco-icon",{attrs:{icon:""+e.item.icon}}),e._v("\n  "+e._s(e.item.text)+"\n  "),t("OutboundLink")],1):t("router-link",{staticClass:"nav-link",attrs:{to:e.link,exact:e.exact}},[t("reco-icon",{attrs:{icon:""+e.item.icon}}),e._v("\n  "+e._s(e.item.text)+"\n")],1)}),[],!1,null,null,null);t.a=c.exports},346:function(e,t,o){},347:function(e,t,o){},348:function(e,t,o){},349:function(e,t,o){},350:function(e,t,o){},351:function(e,t,o){},352:function(e,t,o){},353:function(e,t,o){},354:function(e,t,o){},355:function(e,t,o){},356:function(e,t,o){},357:function(e,t,o){},358:function(e,t,o){var n,s,a,r,i;n=o(392),s=o(359).utf8,a=o(393),r=o(359).bin,(i=function(e,t){e.constructor==String?e=t&&"binary"===t.encoding?r.stringToBytes(e):s.stringToBytes(e):a(e)?e=Array.prototype.slice.call(e,0):Array.isArray(e)||(e=e.toString());for(var o=n.bytesToWords(e),l=8*e.length,c=1732584193,u=-271733879,d=-1732584194,f=271733878,p=0;p<o.length;p++)o[p]=16711935&(o[p]<<8|o[p]>>>24)|4278255360&(o[p]<<24|o[p]>>>8);o[l>>>5]|=128<<l%32,o[14+(l+64>>>9<<4)]=l;var h=i._ff,g=i._gg,m=i._hh,v=i._ii;for(p=0;p<o.length;p+=16){var b=c,_=u,y=d,k=f;c=h(c,u,d,f,o[p+0],7,-680876936),f=h(f,c,u,d,o[p+1],12,-389564586),d=h(d,f,c,u,o[p+2],17,606105819),u=h(u,d,f,c,o[p+3],22,-1044525330),c=h(c,u,d,f,o[p+4],7,-176418897),f=h(f,c,u,d,o[p+5],12,1200080426),d=h(d,f,c,u,o[p+6],17,-1473231341),u=h(u,d,f,c,o[p+7],22,-45705983),c=h(c,u,d,f,o[p+8],7,1770035416),f=h(f,c,u,d,o[p+9],12,-1958414417),d=h(d,f,c,u,o[p+10],17,-42063),u=h(u,d,f,c,o[p+11],22,-1990404162),c=h(c,u,d,f,o[p+12],7,1804603682),f=h(f,c,u,d,o[p+13],12,-40341101),d=h(d,f,c,u,o[p+14],17,-1502002290),c=g(c,u=h(u,d,f,c,o[p+15],22,1236535329),d,f,o[p+1],5,-165796510),f=g(f,c,u,d,o[p+6],9,-1069501632),d=g(d,f,c,u,o[p+11],14,643717713),u=g(u,d,f,c,o[p+0],20,-373897302),c=g(c,u,d,f,o[p+5],5,-701558691),f=g(f,c,u,d,o[p+10],9,38016083),d=g(d,f,c,u,o[p+15],14,-660478335),u=g(u,d,f,c,o[p+4],20,-405537848),c=g(c,u,d,f,o[p+9],5,568446438),f=g(f,c,u,d,o[p+14],9,-1019803690),d=g(d,f,c,u,o[p+3],14,-187363961),u=g(u,d,f,c,o[p+8],20,1163531501),c=g(c,u,d,f,o[p+13],5,-1444681467),f=g(f,c,u,d,o[p+2],9,-51403784),d=g(d,f,c,u,o[p+7],14,1735328473),c=m(c,u=g(u,d,f,c,o[p+12],20,-1926607734),d,f,o[p+5],4,-378558),f=m(f,c,u,d,o[p+8],11,-2022574463),d=m(d,f,c,u,o[p+11],16,1839030562),u=m(u,d,f,c,o[p+14],23,-35309556),c=m(c,u,d,f,o[p+1],4,-1530992060),f=m(f,c,u,d,o[p+4],11,1272893353),d=m(d,f,c,u,o[p+7],16,-155497632),u=m(u,d,f,c,o[p+10],23,-1094730640),c=m(c,u,d,f,o[p+13],4,681279174),f=m(f,c,u,d,o[p+0],11,-358537222),d=m(d,f,c,u,o[p+3],16,-722521979),u=m(u,d,f,c,o[p+6],23,76029189),c=m(c,u,d,f,o[p+9],4,-640364487),f=m(f,c,u,d,o[p+12],11,-421815835),d=m(d,f,c,u,o[p+15],16,530742520),c=v(c,u=m(u,d,f,c,o[p+2],23,-995338651),d,f,o[p+0],6,-198630844),f=v(f,c,u,d,o[p+7],10,1126891415),d=v(d,f,c,u,o[p+14],15,-1416354905),u=v(u,d,f,c,o[p+5],21,-57434055),c=v(c,u,d,f,o[p+12],6,1700485571),f=v(f,c,u,d,o[p+3],10,-1894986606),d=v(d,f,c,u,o[p+10],15,-1051523),u=v(u,d,f,c,o[p+1],21,-2054922799),c=v(c,u,d,f,o[p+8],6,1873313359),f=v(f,c,u,d,o[p+15],10,-30611744),d=v(d,f,c,u,o[p+6],15,-1560198380),u=v(u,d,f,c,o[p+13],21,1309151649),c=v(c,u,d,f,o[p+4],6,-145523070),f=v(f,c,u,d,o[p+11],10,-1120210379),d=v(d,f,c,u,o[p+2],15,718787259),u=v(u,d,f,c,o[p+9],21,-343485551),c=c+b>>>0,u=u+_>>>0,d=d+y>>>0,f=f+k>>>0}return n.endian([c,u,d,f])})._ff=function(e,t,o,n,s,a,r){var i=e+(t&o|~t&n)+(s>>>0)+r;return(i<<a|i>>>32-a)+t},i._gg=function(e,t,o,n,s,a,r){var i=e+(t&n|o&~n)+(s>>>0)+r;return(i<<a|i>>>32-a)+t},i._hh=function(e,t,o,n,s,a,r){var i=e+(t^o^n)+(s>>>0)+r;return(i<<a|i>>>32-a)+t},i._ii=function(e,t,o,n,s,a,r){var i=e+(o^(t|~n))+(s>>>0)+r;return(i<<a|i>>>32-a)+t},i._blocksize=16,i._digestsize=16,e.exports=function(e,t){if(null==e)throw new Error("Illegal argument "+e);var o=n.wordsToBytes(i(e,t));return t&&t.asBytes?o:t&&t.asString?r.bytesToString(o):n.bytesToHex(o)}},359:function(e,t){var o={utf8:{stringToBytes:function(e){return o.bin.stringToBytes(unescape(encodeURIComponent(e)))},bytesToString:function(e){return decodeURIComponent(escape(o.bin.bytesToString(e)))}},bin:{stringToBytes:function(e){for(var t=[],o=0;o<e.length;o++)t.push(255&e.charCodeAt(o));return t},bytesToString:function(e){for(var t=[],o=0;o<e.length;o++)t.push(String.fromCharCode(e[o]));return t.join("")}}};e.exports=o},360:function(e,t,o){},361:function(e,t,o){},362:function(e,t,o){},375:function(e,t,o){"use strict";o.r(t);var n=o(0),s=o(18),a=o(377),r=o(327),i=Object(n.c)({name:"SidebarGroup",props:["item","open","collapsable","depth"],components:{DropdownTransition:a.a},setup:(e,t)=>(Object(r.a)().$options.components.SidebarLinks=o(375).default,{isActive:s.e})}),l=(o(388),o(2)),c=Object(l.a)(i,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("section",{staticClass:"sidebar-group",class:[{collapsable:e.collapsable,"is-sub-group":0!==e.depth},"depth-"+e.depth]},[e.item.path?t("router-link",{staticClass:"sidebar-heading clickable",class:{open:e.open,active:e.isActive(e.$route,e.item.path)},attrs:{to:e.item.path},nativeOn:{click:function(t){return e.$emit("toggle")}}},[t("span",[e._v(e._s(e.item.title))]),e._v(" "),e.collapsable?t("span",{staticClass:"arrow",class:e.open?"down":"right"}):e._e()]):t("p",{staticClass:"sidebar-heading",class:{open:e.open},on:{click:function(t){return e.$emit("toggle")}}},[t("span",[e._v(e._s(e.item.title))]),e._v(" "),e.collapsable?t("span",{staticClass:"arrow",class:e.open?"down":"right"}):e._e()]),e._v(" "),t("DropdownTransition",[e.open||!e.collapsable?t("SidebarLinks",{staticClass:"sidebar-group-items",attrs:{items:e.item.children,sidebarDepth:e.item.sidebarDepth,depth:e.depth+1}}):e._e()],1)],1)}),[],!1,null,null,null).exports;var u=Object(n.c)({functional:!0,props:["item","sidebarDepth"],render(e,{parent:{$page:t,$site:o,$route:n,$themeConfig:a,$themeLocaleConfig:r},props:{item:i,sidebarDepth:l}}){const c=Object(s.e)(n,i.path),u="auto"===i.type?c||i.children.some(e=>Object(s.e)(n,i.basePath+"#"+e.slug)):c;return function(e,t,o,n){return e("router-link",{props:{to:t,activeClass:"",exactActiveClass:""},class:{active:n,"sidebar-link":!0}},o)}(e,i.path,i.title||i.path,u)}}),d=(o(389),Object(l.a)(u,void 0,void 0,!1,null,null,null).exports);var f=Object(n.c)({name:"SidebarLinks",components:{SidebarGroup:c,SidebarLink:d},props:["items","depth","sidebarDepth"],setup(e,t){const o=Object(r.a)(),{items:a}=Object(n.i)(e),i=Object(n.h)(0),l=()=>{const e=function(e,t){for(let o=0;o<t.length;o++){const n=t[o];if("group"===n.type&&n.children.some(t=>"page"===t.type&&Object(s.e)(e,t.path)))return o}return-1}(o.$route,a.value);e>-1&&(i.value=e)},c=()=>{const e=[].slice.call(document.querySelectorAll(".header-anchor")).filter(e=>-1!=decodeURIComponent(o.$route.fullPath).indexOf(decodeURIComponent(e.hash)));null==e||e.length<1||null==e[0].offsetTop||setTimeout((function(){window.scrollTo(0,e[0].offsetTop+160)}),100)},u=()=>{const e=document.getElementsByClassName("sidebar")[0];let t=document.getElementsByClassName("active sidebar-link")[1];if(null!=t&&null!=t&&null!=t.offsetTop||(t=document.getElementsByClassName("active sidebar-link")[0]),null==t||null==t||null==t.offsetTop)return;const o=e.clientHeight||window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,n=t.offsetTop,s=t.offsetTop+t.offsetHeight,a=e.scrollTop;s<=o+a||(e.scrollTop=s+5-o);n>=a||(e.scrollTop=n-5)},d=e=>d(o.$route,e.regularPath);return l(),Object(n.e)(()=>{(()=>{const e=decodeURIComponent(o.$route.fullPath);if(!e||""==e)return;const t=[].slice.call(document.querySelectorAll(".sidebar-link"));for(let o=0;o<t.length;o++)if(-1!=decodeURIComponent(t[o].getAttribute("href")).indexOf(e))return void c()})(),u()}),Object(n.f)(()=>u()),{openGroupIndex:i,refreshIndex:l,toggleGroup:e=>{o.openGroupIndex=e===o.openGroupIndex?-1:e},isActive:d}},watch:{$route(){this.refreshIndex()}}}),p=Object(l.a)(f,(function(){var e=this,t=e._self._c;e._self._setupProxy;return e.items.length?t("ul",{staticClass:"sidebar-links"},e._l(e.items,(function(o,n){return t("li",{key:n},["group"===o.type?t("SidebarGroup",{attrs:{item:o,open:n===e.openGroupIndex,collapsable:o.collapsable||o.collapsible,depth:e.depth},on:{toggle:function(t){return e.toggleGroup(n)}}}):t("SidebarLink",{attrs:{sidebarDepth:e.sidebarDepth,item:o}})],1)})),0):e._e()}),[],!1,null,null,null);t.default=p.exports},376:function(e,t,o){"use strict";var n=o(0),s=o(61),a=o(40),r=o(327),i=Object(n.c)({components:{RecoIcon:s.b},setup(e,t){const o=Object(r.a)();return{socialLinks:Object(n.a)(()=>(o.$themeConfig.blogConfig&&o.$themeConfig.blogConfig.socialLinks||[]).map(e=>(e.color||(e.color=Object(a.b)()),e)))}}}),l=(o(391),o(2)),c=Object(l.a)(i,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"personal-info-wrapper"},[e.$themeConfig.authorAvatar?t("img",{staticClass:"personal-img",attrs:{src:e.$withBase(e.$themeConfig.authorAvatar),alt:"author-avatar"}}):e._e(),e._v(" "),e.$themeConfig.author?t("h3",{staticClass:"name"},[e._v("\n    "+e._s(e.$themeConfig.author)+"\n  ")]):e._e(),e._v(" "),t("div",{staticClass:"num"},[t("div",[t("h3",[e._v(e._s(e.$recoPosts.length))]),e._v(" "),t("h6",[e._v(e._s(e.$recoLocales.article))])]),e._v(" "),t("div",[t("h3",[e._v(e._s(e.$tags.list.length))]),e._v(" "),t("h6",[e._v(e._s(e.$recoLocales.tag))])])]),e._v(" "),t("ul",{staticClass:"social-links"},e._l(e.socialLinks,(function(e,o){return t("li",{key:o,staticClass:"social-item"},[t("reco-icon",{style:{color:e.color},attrs:{icon:e.icon,link:e.link}})],1)})),0),e._v(" "),t("hr")])}),[],!1,null,"1fad0c41",null);t.a=c.exports},377:function(e,t,o){"use strict";var n=o(0),s=Object(n.c)({name:"DropdownTransition",setup:(e,t)=>({setHeight:e=>{e.style.height=e.scrollHeight+"px"},unsetHeight:e=>{e.style.height=""}})}),a=(o(381),o(2)),r=Object(a.a)(s,(function(){var e=this._self._c;this._self._setupProxy;return e("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)}),[],!1,null,null,null);t.a=r.exports},379:function(e,t,o){"use strict";o(346)},380:function(e,t,o){"use strict";o(347)},381:function(e,t,o){"use strict";o(348)},382:function(e,t,o){"use strict";o(349)},383:function(e,t,o){"use strict";o(350)},384:function(e,t){function o(e){return"function"==typeof e.value||(console.warn("[Vue-click-outside:] provided expression",e.expression,"is not a function."),!1)}function n(e){return void 0!==e.componentInstance&&e.componentInstance.$isServer}e.exports={bind:function(e,t,s){if(!o(t))return;function a(t){if(s.context){var o=t.path||t.composedPath&&t.composedPath();o&&o.length>0&&o.unshift(t.target),e.contains(t.target)||function(e,t){if(!e||!t)return!1;for(var o=0,n=t.length;o<n;o++)try{if(e.contains(t[o]))return!0;if(t[o].contains(e))return!1}catch(e){return!1}return!1}(s.context.popupItem,o)||e.__vueClickOutside__.callback(t)}}e.__vueClickOutside__={handler:a,callback:t.value};const r="ontouchstart"in document.documentElement?"touchstart":"click";!n(s)&&document.addEventListener(r,a)},update:function(e,t){o(t)&&(e.__vueClickOutside__.callback=t.value)},unbind:function(e,t,o){const s="ontouchstart"in document.documentElement?"touchstart":"click";!n(o)&&e.__vueClickOutside__&&document.removeEventListener(s,e.__vueClickOutside__.handler),delete e.__vueClickOutside__}}},385:function(e,t,o){"use strict";o(351)},386:function(e,t,o){"use strict";o(352)},387:function(e,t,o){"use strict";o(353)},388:function(e,t,o){"use strict";o(354)},389:function(e,t,o){"use strict";o(355)},390:function(e,t,o){"use strict";o(356)},391:function(e,t,o){"use strict";o(357)},392:function(e,t){var o,n;o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",n={rotl:function(e,t){return e<<t|e>>>32-t},rotr:function(e,t){return e<<32-t|e>>>t},endian:function(e){if(e.constructor==Number)return 16711935&n.rotl(e,8)|4278255360&n.rotl(e,24);for(var t=0;t<e.length;t++)e[t]=n.endian(e[t]);return e},randomBytes:function(e){for(var t=[];e>0;e--)t.push(Math.floor(256*Math.random()));return t},bytesToWords:function(e){for(var t=[],o=0,n=0;o<e.length;o++,n+=8)t[n>>>5]|=e[o]<<24-n%32;return t},wordsToBytes:function(e){for(var t=[],o=0;o<32*e.length;o+=8)t.push(e[o>>>5]>>>24-o%32&255);return t},bytesToHex:function(e){for(var t=[],o=0;o<e.length;o++)t.push((e[o]>>>4).toString(16)),t.push((15&e[o]).toString(16));return t.join("")},hexToBytes:function(e){for(var t=[],o=0;o<e.length;o+=2)t.push(parseInt(e.substr(o,2),16));return t},bytesToBase64:function(e){for(var t=[],n=0;n<e.length;n+=3)for(var s=e[n]<<16|e[n+1]<<8|e[n+2],a=0;a<4;a++)8*n+6*a<=8*e.length?t.push(o.charAt(s>>>6*(3-a)&63)):t.push("=");return t.join("")},base64ToBytes:function(e){e=e.replace(/[^A-Z0-9+\/]/gi,"");for(var t=[],n=0,s=0;n<e.length;s=++n%4)0!=s&&t.push((o.indexOf(e.charAt(n-1))&Math.pow(2,-2*s+8)-1)<<2*s|o.indexOf(e.charAt(n))>>>6-2*s);return t}},e.exports=n},393:function(e,t){function o(e){return!!e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
e.exports=function(e){return null!=e&&(o(e)||function(e){return"function"==typeof e.readFloatLE&&"function"==typeof e.slice&&o(e.slice(0,0))}(e)||!!e._isBuffer)}},394:function(e,t,o){"use strict";o(360)},395:function(e,t,o){"use strict";o(361)},396:function(e,t,o){var n="undefined"!=typeof global&&global||"undefined"!=typeof self&&self||window,s=Function.prototype.apply;function a(e,t){this._id=e,this._clearFn=t}t.setTimeout=function(){return new a(s.call(setTimeout,n,arguments),clearTimeout)},t.setInterval=function(){return new a(s.call(setInterval,n,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},a.prototype.unref=a.prototype.ref=function(){},a.prototype.close=function(){this._clearFn.call(n,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout((function(){e._onTimeout&&e._onTimeout()}),t))},o(397),t.setImmediate="undefined"!=typeof self&&self.setImmediate||"undefined"!=typeof global&&global.setImmediate||this&&this.setImmediate,t.clearImmediate="undefined"!=typeof self&&self.clearImmediate||"undefined"!=typeof global&&global.clearImmediate||this&&this.clearImmediate},397:function(e,t){!function(e,t){"use strict";if(!e.setImmediate){var o,n,s,a,r,i=1,l={},c=!1,u=e.document,d=Object.getPrototypeOf&&Object.getPrototypeOf(e);d=d&&d.setTimeout?d:e,"[object process]"==={}.toString.call(e.process)?o=function(e){process.nextTick((function(){p(e)}))}:!function(){if(e.postMessage&&!e.importScripts){var t=!0,o=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=o,t}}()?e.MessageChannel?((s=new MessageChannel).port1.onmessage=function(e){p(e.data)},o=function(e){s.port2.postMessage(e)}):u&&"onreadystatechange"in u.createElement("script")?(n=u.documentElement,o=function(e){var t=u.createElement("script");t.onreadystatechange=function(){p(e),t.onreadystatechange=null,n.removeChild(t),t=null},n.appendChild(t)}):o=function(e){setTimeout(p,0,e)}:(a="setImmediate$"+Math.random()+"$",r=function(t){t.source===e&&"string"==typeof t.data&&0===t.data.indexOf(a)&&p(+t.data.slice(a.length))},e.addEventListener?e.addEventListener("message",r,!1):e.attachEvent("onmessage",r),o=function(t){e.postMessage(a+t,"*")}),d.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),n=0;n<t.length;n++)t[n]=arguments[n+1];var s={callback:e,args:t};return l[i]=s,o(i),i++},d.clearImmediate=f}function f(e){delete l[e]}function p(e){if(c)setTimeout(p,0,e);else{var t=l[e];if(t){c=!0;try{!function(e){var t=e.callback,o=e.args;switch(o.length){case 0:t();break;case 1:t(o[0]);break;case 2:t(o[0],o[1]);break;case 3:t(o[0],o[1],o[2]);break;default:t.apply(void 0,o)}}(t)}finally{f(e),c=!1}}}}}("undefined"==typeof self?"undefined"==typeof global?this:global:self)},398:function(e,t,o){"use strict";o(362)}}]);