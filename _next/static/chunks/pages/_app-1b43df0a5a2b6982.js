(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{425:function(e,t,n){"use strict";n.d(t,{f:function(){return s},F:function(){return i}});var r=n(1720),a=n(9008),o=(0,r.createContext)({setTheme:function(e){},themes:[]}),i=function(){return(0,r.useContext)(o)},c=["light","dark"],l="(prefers-color-scheme: dark)",s=function(e){var t=e.forcedTheme,n=e.disableTransitionOnChange,a=void 0!==n&&n,i=e.enableSystem,s=void 0===i||i,p=e.enableColorScheme,m=void 0===p||p,v=e.storageKey,g=void 0===v?"theme":v,y=e.themes,w=void 0===y?["light","dark"]:y,b=e.defaultTheme,x=void 0===b?s?"system":"light":b,z=e.attribute,M=void 0===z?"data-theme":z,_=e.value,Z=e.children,k=(0,r.useState)((function(){return f(g,x)})),E=k[0],O=k[1],T=(0,r.useState)((function(){return f(g)})),j=T[0],C=T[1],S=_?Object.values(_):w,I=(0,r.useCallback)((function(e){var n=h(e);C(n),"system"!==E||t||L(n,!1)}),[E,t]),N=(0,r.useRef)(I);N.current=I;var L=(0,r.useCallback)((function(e,t,n){void 0===t&&(t=!0),void 0===n&&(n=!0);var r=(null==_?void 0:_[e])||e,o=a&&n?d():null;if(t)try{localStorage.setItem(g,e)}catch(e){}if("system"===e&&s){var i=h();r=(null==_?void 0:_[i])||i}if(n){var c,l=document.documentElement;"class"===M?((c=l.classList).remove.apply(c,S),l.classList.add(r)):l.setAttribute(M,r),null==o||o()}}),[]);(0,r.useEffect)((function(){var e=function(){return N.current.apply(N,[].slice.call(arguments))},t=window.matchMedia(l);return t.addListener(e),e(t),function(){return t.removeListener(e)}}),[]);var P=(0,r.useCallback)((function(e){t?L(e,!0,!1):L(e),O(e)}),[t]);return(0,r.useEffect)((function(){var e=function(e){e.key===g&&P(e.newValue)};return window.addEventListener("storage",e),function(){return window.removeEventListener("storage",e)}}),[P]),(0,r.useEffect)((function(){if(m){var e=t&&c.includes(t)?t:E&&c.includes(E)?E:"system"===E&&j||null;document.documentElement.style.setProperty("color-scheme",e)}}),[m,E,j,t]),r.default.createElement(o.Provider,{value:{theme:E,setTheme:P,forcedTheme:t,resolvedTheme:"system"===E?j:E,themes:s?[].concat(w,["system"]):w,systemTheme:s?j:void 0}},r.default.createElement(u,{forcedTheme:t,storageKey:g,attribute:M,value:_,enableSystem:s,defaultTheme:x,attrs:S}),Z)},u=(0,r.memo)((function(e){var t=e.forcedTheme,n=e.storageKey,o=e.attribute,i=e.enableSystem,c=e.defaultTheme,s=e.value,u="class"===o?"var d=document.documentElement.classList;d.remove("+e.attrs.map((function(e){return"'"+e+"'"})).join(",")+");":"var d=document.documentElement;",f=function(e,t){e=(null==s?void 0:s[e])||e;var n=t?e:"'"+e+"'";return"class"===o?"d.add("+n+")":"d.setAttribute('"+o+"', "+n+")"},d="system"===c;return r.default.createElement(a.default,null,r.default.createElement("script",t?{key:"next-themes-script",dangerouslySetInnerHTML:{__html:"!function(){"+u+f(t)+"}()"}}:i?{key:"next-themes-script",dangerouslySetInnerHTML:{__html:"!function(){try {"+u+"var e=localStorage.getItem('"+n+"');"+(d?"":f(c)+";")+'if("system"===e||(!e&&'+d+')){var t="'+l+'",m=window.matchMedia(t);m.media!==t||m.matches?'+f("dark")+":"+f("light")+"}else if(e) "+(s?"var x="+JSON.stringify(s)+";":"")+f(s?"x[e]":"e",!0)+"}catch(e){}}()"}}:{key:"next-themes-script",dangerouslySetInnerHTML:{__html:"!function(){try{"+u+'var e=localStorage.getItem("'+n+'");if(e){'+(s?"var x="+JSON.stringify(s)+";":"")+f(s?"x[e]":"e",!0)+"}else{"+f(c)+";}}catch(t){}}();"}}))}),(function(e,t){return e.forcedTheme===t.forcedTheme})),f=function(e,t){if("undefined"!=typeof window){var n;try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t}},d=function(){var e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),function(){window.getComputedStyle(document.body),setTimeout((function(){document.head.removeChild(e)}),1)}},h=function(e){return e||(e=window.matchMedia(l)),e.matches?"dark":"light"}},3454:function(e,t,n){"use strict";var r,a;e.exports=(null===(r=n.g.process)||void 0===r?void 0:r.env)&&"object"===typeof(null===(a=n.g.process)||void 0===a?void 0:a.env)?n.g.process:n(7663)},1780:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(218)}])},7233:function(e,t,n){"use strict";var r=n(7320),a=n(1664);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}t.Z=function(e){var t=e.href,n=c(e,["href"]),o=t&&t.startsWith("/"),l=t&&t.startsWith("#");return o?(0,r.tZ)(a.default,{href:t,children:(0,r.tZ)("a",i({},n))}):l?(0,r.tZ)("a",i({href:t},n)):(0,r.tZ)("a",i({target:"_blank",rel:"noopener noreferrer",href:t},n))}},890:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(7320);function a(e){var t=e.children;return(0,r.tZ)("div",{className:"mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0",children:t})}},2557:function(e,t,n){"use strict";n.d(t,{Z:function(){return w}});var r,a,o=n(7320),i=n(1720);function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}var l;function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}var u;function f(){return f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f.apply(this,arguments)}var d;function h(){return h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},h.apply(this,arguments)}var p;function m(){return m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},m.apply(this,arguments)}var v;function g(){return g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},g.apply(this,arguments)}var y={mail:function(e){return i.createElement("svg",c({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},e),r||(r=i.createElement("path",{d:"M2.003 5.884 10 9.882l7.997-3.998A2 2 0 0 0 16 4H4a2 2 0 0 0-1.997 1.884z"})),a||(a=i.createElement("path",{d:"m18 8.118-8 4-8-4V14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.118z"})))},github:function(e){return i.createElement("svg",s({viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},e),l||(l=i.createElement("path",{d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"})))},facebook:function(e){return i.createElement("svg",f({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},e),u||(u=i.createElement("path",{d:"M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"})))},youtube:function(e){return i.createElement("svg",h({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},e),d||(d=i.createElement("path",{d:"M23.499 6.203a3.008 3.008 0 0 0-2.089-2.089c-1.87-.501-9.4-.501-9.4-.501s-7.509-.01-9.399.501a3.008 3.008 0 0 0-2.088 2.09A31.258 31.26 0 0 0 0 12.01a31.258 31.26 0 0 0 .523 5.785 3.008 3.008 0 0 0 2.088 2.089c1.869.502 9.4.502 9.4.502s7.508 0 9.399-.502a3.008 3.008 0 0 0 2.089-2.09 31.258 31.26 0 0 0 .5-5.784 31.258 31.26 0 0 0-.5-5.808zm-13.891 9.4V8.407l6.266 3.604z"})))},linkedin:function(e){return i.createElement("svg",m({viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},e),p||(p=i.createElement("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})))},twitter:function(e){return i.createElement("svg",g({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},e),v||(v=i.createElement("path",{d:"M23.953 4.57a10 10 0 0 1-2.825.775 4.958 4.958 0 0 0 2.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 0 0-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 0 0-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 0 1-2.228-.616v.06a4.923 4.923 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.212.085 4.936 4.936 0 0 0 4.604 3.417 9.867 9.867 0 0 1-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0 0 7.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0 0 24 4.59z"})))}},w=function(e){var t=e.kind,n=e.href,r=e.size,a=void 0===r?8:r;if(!n||"mail"===t&&!/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(n))return null;var i=y[t];return(0,o.BX)("a",{className:"text-sm text-gray-500 transition hover:text-gray-600",target:"_blank",rel:"noopener noreferrer",href:n,children:[(0,o.tZ)("span",{className:"sr-only",children:t}),(0,o.tZ)(i,{className:"fill-current text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 h-".concat(a," w-").concat(a)})]})}},1576:function(e,t,n){"use strict";var r=n(3454),a={title:"PyPackage",author:"Yubaraj Shrestha",headerTitle:"PyPackage",description:"PyPackage, the organization to create open-source python projects.",language:"en-us",theme:"system",siteUrl:"https://pypackage.com",siteRepo:"https://github.com/py-package/official-website",siteLogo:"/static/images/logo.png",image:"/static/images/avatar.jpg",socialBanner:"/static/images/twitter-card.png",email:"info@pypackage.com",github:"https://github.com/py-package",twitter:"https://twitter.com/pypackage",locale:"en-US",analytics:{plausibleDataDomain:"pypackage.com",simpleAnalytics:!0,umamiWebsiteId:"",googleAnalyticsId:"G-TV45ZD32T8",posthogAnalyticsId:""},newsletter:{provider:"buttondown"},comment:{provider:"disqus",giscusConfig:{repo:r.env.NEXT_PUBLIC_GISCUS_REPO,repositoryId:r.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,category:r.env.NEXT_PUBLIC_GISCUS_CATEGORY,categoryId:r.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,mapping:"pathname",reactions:"1",metadata:"0",theme:"light",inputPosition:"bottom",lang:"en",darkTheme:"transparent_dark",themeURL:""},utterancesConfig:{repo:r.env.NEXT_PUBLIC_UTTERANCES_REPO,issueTerm:"",label:"",theme:"",darkTheme:""},disqusConfig:{shortname:r.env.NEXT_PUBLIC_DISQUS_SHORTNAME}}};e.exports=a},1551:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o=[],i=!0,c=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);i=!0);}catch(l){c=!0,a=l}finally{try{i||null==n.return||n.return()}finally{if(c)throw a}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var o,i=(o=n(1720))&&o.__esModule?o:{default:o},c=n(1003),l=n(880),s=n(9246);var u={};function f(e,t,n,r){if(e&&c.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;u[t+"%"+n+(a?"%"+a:"")]=!0}}var d=function(e){var t,n=!1!==e.prefetch,r=l.useRouter(),o=i.default.useMemo((function(){var t=a(c.resolveHref(r,e.href,!0),2),n=t[0],o=t[1];return{href:n,as:e.as?c.resolveHref(r,e.as):o||n}}),[r,e.href,e.as]),d=o.href,h=o.as,p=e.children,m=e.replace,v=e.shallow,g=e.scroll,y=e.locale;"string"===typeof p&&(p=i.default.createElement("a",null,p));var w=(t=i.default.Children.only(p))&&"object"===typeof t&&t.ref,b=a(s.useIntersection({rootMargin:"200px"}),2),x=b[0],z=b[1],M=i.default.useCallback((function(e){x(e),w&&("function"===typeof w?w(e):"object"===typeof w&&(w.current=e))}),[w,x]);i.default.useEffect((function(){var e=z&&n&&c.isLocalURL(d),t="undefined"!==typeof y?y:r&&r.locale,a=u[d+"%"+h+(t?"%"+t:"")];e&&!a&&f(r,d,h,{locale:t})}),[h,d,z,y,n,r]);var _={ref:M,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,o,i,l){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(n))&&(e.preventDefault(),t[a?"replace":"push"](n,r,{shallow:o,locale:l,scroll:i}))}(e,r,d,h,m,v,g,y)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),c.isLocalURL(d)&&f(r,d,h,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var Z="undefined"!==typeof y?y:r&&r.locale,k=r&&r.isLocaleDomain&&c.getDomainLocale(h,Z,r&&r.locales,r&&r.domainLocales);_.href=k||c.addBasePath(c.addLocale(h,Z,r&&r.defaultLocale))}return i.default.cloneElement(t,_)};t.default=d},9246:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o=[],i=!0,c=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);i=!0);}catch(l){c=!0,a=l}finally{try{i||null==n.return||n.return()}finally{if(c)throw a}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,r=e.disabled||!c,u=o.useRef(),f=a(o.useState(!1),2),d=f[0],h=f[1],p=a(o.useState(t?t.current:null),2),m=p[0],v=p[1],g=o.useCallback((function(e){u.current&&(u.current(),u.current=void 0),r||d||e&&e.tagName&&(u.current=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=s.find((function(e){return e.root===n.root&&e.margin===n.margin}));r?t=l.get(r):(t=l.get(n),s.push(n));if(t)return t;var a=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=a.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return l.set(n,t={id:n,observer:o,elements:a}),t}(n),a=r.id,o=r.observer,i=r.elements;return i.set(e,t),o.observe(e),function(){if(i.delete(e),o.unobserve(e),0===i.size){o.disconnect(),l.delete(a);var t=s.findIndex((function(e){return e.root===a.root&&e.margin===a.margin}));t>-1&&s.splice(t,1)}}}(e,(function(e){return e&&h(e)}),{root:m,rootMargin:n}))}),[r,m,n,d]);return o.useEffect((function(){if(!c&&!d){var e=i.requestIdleCallback((function(){return h(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[d]),o.useEffect((function(){t&&v(t.current)}),[t]),[g,d]};var o=n(1720),i=n(4686),c="undefined"!==typeof IntersectionObserver;var l=new Map,s=[]},218:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return S}});var r=n(7320),a=(n(2604),n(7661),n(3941),n(8102),n(425)),o=n(9008),i=n(1576),c=n.n(i),l=n(4298),s=function(){return(0,r.BX)(r.HY,{children:[(0,r.tZ)(l.default,{strategy:"lazyOnload",src:"https://www.googletagmanager.com/gtag/js?id=".concat(c().analytics.googleAnalyticsId)}),(0,r.tZ)(l.default,{strategy:"lazyOnload",id:"ga-script",children:"\n            window.dataLayer = window.dataLayer || [];\n            function gtag(){dataLayer.push(arguments);}\n            gtag('js', new Date());\n            gtag('config', '".concat(c().analytics.googleAnalyticsId,"', {\n              page_path: window.location.pathname,\n            });\n        ")})]})};var u,f,d,h=function(){return(0,r.BX)(r.HY,{children:[(0,r.tZ)(l.default,{strategy:"lazyOnload","data-domain":c().analytics.plausibleDataDomain,src:"https://plausible.io/js/plausible.js"}),(0,r.tZ)(l.default,{strategy:"lazyOnload",id:"plausible-script",children:"\n            window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }\n        "})]})},p=function(){return(0,r.BX)(r.HY,{children:[(0,r.tZ)(l.default,{strategy:"lazyOnload",id:"sa-script",children:"\n            window.sa_event=window.sa_event||function(){var a=[].slice.call(arguments);window.sa_event.q?window.sa_event.q.push(a):window.sa_event.q=[a]};\n        "}),(0,r.tZ)(l.default,{strategy:"lazyOnload",src:"https://scripts.simpleanalyticscdn.com/latest.js"})]})},m=function(){return(0,r.tZ)(r.HY,{children:(0,r.tZ)(l.default,{async:!0,defer:!0,"data-website-id":c().analytics.umamiWebsiteId,src:"https://umami.example.com/umami.js"})})},v=function(){return(0,r.tZ)(r.HY,{children:(0,r.tZ)(l.default,{strategy:"lazyOnload",id:"posthog-script",children:'\n            !function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.async=!0,p.src=s.api_host+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="capture identify alias people.set people.set_once set_config register register_once unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset isFeatureEnabled onFeatureFlags".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);\n            posthog.init(\''.concat(c().analytics.posthogAnalyticsId,"',{api_host:'https://app.posthog.com'})\n        ")})})},g=function(){return(0,r.BX)(r.HY,{children:[c().analytics.plausibleDataDomain&&(0,r.tZ)(h,{}),c().analytics.simpleAnalytics&&(0,r.tZ)(p,{}),c().analytics.umamiWebsiteId&&(0,r.tZ)(m,{}),c().analytics.googleAnalyticsId&&(0,r.tZ)(s,{}),c().analytics.posthogAnalyticsId&&(0,r.tZ)(v,{})]})},y=[{href:"/blog",title:"Blog"},{href:"/tags",title:"Tags"},{href:"/projects",title:"Projects"},{href:"/about",title:"About"}],w=n(1720);function b(){return b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},b.apply(this,arguments)}var x=function(e){return w.createElement("svg",b({xmlns:"http://www.w3.org/2000/svg",width:1178.667,height:501.333,viewBox:"0 0 884 376"},e),u||(u=w.createElement("path",{d:"M360 38.7c-.8.3-1.8 1.1-2.2 1.7-.4.6-.8 23.5-.8 50.8V141h-20v3.9c0 7.7-9 7.1 108 7.1s108 .6 108-7.1V141h-20V91.2c0-29.5-.4-50.3-1-51.2-.8-1.3-11.6-1.5-85.7-1.7-46.6-.1-85.5.1-86.3.4zm86 3.8c0 .8-.4 1.5-.9 1.5-1.3 0-2.2-1.6-1.4-2.4 1.1-1.1 2.3-.6 2.3.9zm80 48V134H364V47h162v43.5zm-69 56c0 1.3-1.7 1.5-11.7 1.3-8.2-.2-11.8-.7-12.1-1.6-.3-.9 2.5-1.2 11.7-1.2 10.2 0 12.1.2 12.1 1.5z"})),f||(f=w.createElement("path",{d:"M370 53.5c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5-.7-1.5-1.5-1.5-1.5.7-1.5 1.5zM375 53.5c0 1.1 1.1 1.5 4 1.5s4-.4 4-1.5-1.1-1.5-4-1.5-4 .4-4 1.5zM370 58.5c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5-.7-1.5-1.5-1.5-1.5.7-1.5 1.5zM375 58.5c0 1.2 1.8 1.5 10.5 1.5s10.5-.3 10.5-1.5-1.8-1.5-10.5-1.5-10.5.3-10.5 1.5zM370 63c0 .5.7 1 1.5 1s1.5-.5 1.5-1c0-.6-.7-1-1.5-1s-1.5.4-1.5 1zM375 63c0 .6 5.3 1 14 1s14-.4 14-1-5.3-1-14-1-14 .4-14 1zM370 67.5c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5-.7-1.5-1.5-1.5-1.5.7-1.5 1.5zM375 67.5c0 1.2 1.8 1.5 10.5 1.5s10.5-.3 10.5-1.5-1.8-1.5-10.5-1.5-10.5.3-10.5 1.5zM370 72.5c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5-.7-1.5-1.5-1.5-1.5.7-1.5 1.5zM375 72.5c0 1.2 1.8 1.5 10.5 1.5s10.5-.3 10.5-1.5-1.8-1.5-10.5-1.5-10.5.3-10.5 1.5zM370 77.5c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5-.7-1.5-1.5-1.5-1.5.7-1.5 1.5zM375 77.5c0 1.1 1.1 1.5 4 1.5s4-.4 4-1.5-1.1-1.5-4-1.5-4 .4-4 1.5zM370 82.5c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5-.7-1.5-1.5-1.5-1.5.7-1.5 1.5zM375 82.5c0 1.2 1.4 1.5 7 1.5s7-.3 7-1.5-1.4-1.5-7-1.5-7 .3-7 1.5zM370 87.5c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5-.7-1.5-1.5-1.5-1.5.7-1.5 1.5zM375 87.5c0 1.1 1.1 1.5 4 1.5s4-.4 4-1.5-1.1-1.5-4-1.5-4 .4-4 1.5zM385 87.5c0 1.3 2.4 1.5 15.5 1.5s15.5-.2 15.5-1.5-2.4-1.5-15.5-1.5-15.5.2-15.5 1.5zM420 87.5c0 1.1 1.1 1.5 4 1.5s4-.4 4-1.5-1.1-1.5-4-1.5-4 .4-4 1.5zM370 92.5c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5-.7-1.5-1.5-1.5-1.5.7-1.5 1.5zM375 92.5c0 1.1 1.1 1.5 4 1.5s4-.4 4-1.5-1.1-1.5-4-1.5-4 .4-4 1.5zM385 92.5c0 1.3 3.3 1.5 24 1.5s24-.2 24-1.5-3.3-1.5-24-1.5-24 .2-24 1.5zM437 92.5c0 1.1 1.1 1.5 4 1.5s4-.4 4-1.5-1.1-1.5-4-1.5-4 .4-4 1.5zM370 97.5c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5-.7-1.5-1.5-1.5-1.5.7-1.5 1.5zM375 97.5c0 1.1 1.1 1.5 4 1.5s4-.4 4-1.5-1.1-1.5-4-1.5-4 .4-4 1.5zM385 97.5c0 1.3 4.4 1.5 33.5 1.5s33.5-.2 33.5-1.5-4.4-1.5-33.5-1.5-33.5.2-33.5 1.5zM454 97.5c0 1.1 1.1 1.5 4 1.5s4-.4 4-1.5-1.1-1.5-4-1.5-4 .4-4 1.5zM370 102.5c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5-.7-1.5-1.5-1.5-1.5.7-1.5 1.5zM375 102.5c0 1.3 4.3 1.5 33 1.5s33-.2 33-1.5-4.3-1.5-33-1.5-33 .2-33 1.5zM370 107.5c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5-.7-1.5-1.5-1.5-1.5.7-1.5 1.5zM375 107.5c0 1.1 1.1 1.5 4 1.5s4-.4 4-1.5-1.1-1.5-4-1.5-4 .4-4 1.5zM385 107.5c0 1.3 3.8 1.5 28 1.5s28-.2 28-1.5-3.8-1.5-28-1.5-28 .2-28 1.5zM370 112.5c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5-.7-1.5-1.5-1.5-1.5.7-1.5 1.5zM375 112.5c0 1.3 2.9 1.5 20.5 1.5s20.5-.2 20.5-1.5-2.9-1.5-20.5-1.5-20.5.2-20.5 1.5zM370 117.5c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5-.7-1.5-1.5-1.5-1.5.7-1.5 1.5zM375 117.5c0 1.3 2.6 1.5 17 1.5s17-.2 17-1.5-2.6-1.5-17-1.5-17 .2-17 1.5zM413 117.5c0 1.1 1.1 1.5 4 1.5s4-.4 4-1.5-1.1-1.5-4-1.5-4 .4-4 1.5zM370 122.5c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5-.7-1.5-1.5-1.5-1.5.7-1.5 1.5zM375 122.5c0 1.2 1.6 1.5 8.5 1.5s8.5-.3 8.5-1.5-1.6-1.5-8.5-1.5-8.5.3-8.5 1.5zM370 127.5c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5-.7-1.5-1.5-1.5-1.5.7-1.5 1.5zM375 127.5c0 1.2 1.4 1.5 7 1.5s7-.3 7-1.5-1.4-1.5-7-1.5-7 .3-7 1.5zM585 191.5v9.5h285v-19H585v9.5zM20 193.5v9.5h285v-19H20v9.5zM491 249.9c0 .5-2.2 19.1-5 41.4-2.7 22.3-5 41.2-5 42.1 0 1.4 1.4 1.6 8.9 1.6h8.8l1.2-10.8c1.7-14.6 1.9-15.4 4.4-15 1.5.2 3 2.9 6.4 11.8 2.5 6.3 5.2 12.1 6.1 12.7 1.5 1.2 19.2 1.9 19.2.8 0-1.3-13.3-31.6-14.2-32.1-.5-.4.6-2.3 2.5-4.3 4.4-4.5 17.7-21.3 17.7-22.4 0-1-15.4-.9-18.3.2-1.3.5-5.3 4.9-8.9 9.8-6.9 9.3-9.4 12-10.5 10.9-.6-.5 1.8-23.9 4.4-43.4l.6-4.2h-9.2c-5 0-9.1.4-9.1.9zM185.6 290.7c-2.6 21.9-5 40.8-5.3 42-.5 2.3-.4 2.3 9.1 2.3 11.1 0 9.9 1.5 11.6-14 1.7-15 1.1-14 7.8-14 12.5 0 22.5-3.2 29-9.4 5.4-5 7.5-10 8-19.4.5-9.8-1.1-15.2-6.1-20-5.7-5.5-10.1-6.5-30.7-7l-18.6-.4-4.8 39.9zm38.5-21.8c5.1 5.1 3.7 16-2.7 21-2.1 1.7-4.1 2.1-9.5 2.1-6.1 0-6.9-.2-6.9-1.9 0-2 1.6-15 2.6-20.9l.5-3.2h6.5c5.9 0 6.8.3 9.5 2.9zM315.6 252.2c-.6 1.9-9.6 77.9-9.6 80.5 0 2.2.3 2.3 9.3 2.3h9.4l1.2-11.3c2.1-18.1 1.3-16.7 8.5-16.7 7.1 0 18.1-2.2 22.4-4.4 8.8-4.6 14.4-14.7 14.6-26.5.1-6.4-.3-8.5-2.5-12.6-3-6-8.9-10-16.8-11.5-8-1.5-36.1-1.3-36.5.2zm33.5 16.7c2.4 2.5 2.9 3.7 2.9 8.1 0 6.6-2.1 11.5-5.9 13.4-3.8 2-16.1 2.2-16.1.3 0-.6.7-5.9 1.5-11.7.8-5.8 1.5-11.1 1.5-11.8 0-.8 2-1.2 6.6-1.2 5.9 0 6.8.3 9.5 2.9zM398 275.6c-17.9 4.9-28.9 19.6-29.2 38.7 0 6.3.4 8.6 2.4 12.5 5.5 11 19 12 28.6 2.1l3.2-3.3v3.1c0 4.8 2.2 6.3 9.4 6.3h6.3l3.2-26.8c4.2-34 4.2-31.3.9-32.3-6.2-1.7-19.3-1.9-24.8-.3zm7.4 20.1c-1.5 11-3.6 16.9-7.5 21.6-6.2 7.5-11.5 3.5-10.7-8.1.9-12.2 8.5-21.9 17.4-22.1 2.1-.1 2.1 0 .8 8.6zM456.5 274.9c-15.6 2.6-26.6 17.2-26.6 35.5 0 13.3 5.7 21.8 16.5 24.7 8.2 2.2 19.4-.7 26.6-6.9 3.3-2.8 3.4-3.1 2-5.7-.8-1.5-2.6-3.5-3.9-4.3-2.2-1.5-2.7-1.5-7.2 1.1-6.3 3.5-9.3 3.4-13-.2-2.5-2.6-2.9-3.7-2.9-8.8 0-7.5 2.2-14.1 6.1-18 3.6-3.7 6.6-4.4 11.6-2.7 5.6 2 6.5 1.8 10.8-2.6l3.8-3.9-3.2-3c-4.7-4.4-12.9-6.5-20.6-5.2z"})),d||(d=w.createElement("path",{d:"M568 275.6c-17.9 4.9-28.9 19.6-29.2 38.7 0 6.3.4 8.6 2.4 12.5 5.5 11 19 12 28.6 2.1l3.2-3.3v3.1c0 4.8 2.2 6.3 9.4 6.3h6.3l3.2-26.8c4.2-34 4.2-31.3.9-32.3-6.2-1.7-19.3-1.9-24.8-.3zm7.4 20.1c-1.5 11-3.6 16.9-7.5 21.6-6.2 7.5-11.5 3.5-10.7-8.1.9-12.2 8.5-21.9 17.4-22.1 2.1-.1 2.1 0 .8 8.6zM622.3 275c-11.6 2.4-19.3 11.6-19.3 23.2 0 6 2.9 12.9 6.5 15.2 5.3 3.5 13.9 4 20.5 1.2 1.3-.5 1.5.1 1.2 3.4l-.4 4h-7.7c-8.6 0-18.3 2.1-22.1 4.9-10.1 7.3-8.9 19.4 2.5 25.1 4.4 2.2 6.2 2.5 16 2.5 10 0 11.5-.3 16.1-2.7 6.7-3.5 11-8.8 12.5-15.3 1-4.5.9-5.8-1.5-12.6-1.4-4.2-2.6-8.6-2.6-9.8 0-1.2 1.4-5.4 3-9.3 1.7-4 3-8.8 3-11.2 0-3.9.3-4.3 3.4-5.4 2.4-.9 3.8-2.2 4.5-4.4 2.3-6.6 2.1-6.8-8-6.8-5 0-9.8-.4-10.7-.9-2.7-1.4-12.3-2-16.9-1.1zm8.5 12.6c1.7 1.2 2.2 2.5 2.2 6.2 0 5.7-1.6 9.1-5.1 11.1-2.4 1.3-2.9 1.3-5.3-.2-2.3-1.5-2.6-2.4-2.6-7.3 0-4.8.4-5.9 2.9-8.5 3.4-3.3 4.7-3.5 7.9-1.3zm-.4 45c3.5 1.3.4 7.6-4.6 9.3-5.3 1.9-9.6 1.4-12.4-1.4-2.1-2.1-2.3-2.8-1.4-4.5.6-1.2 2.1-2.5 3.3-3 2.5-1 12.8-1.3 15.1-.4zM684.3 275c-10 2-18.6 9-23.1 18.8-3.4 7.6-4.3 20.1-1.7 26.8 3.9 10.2 10.9 14.9 22.5 14.8 9.6 0 16.6-2.4 22.4-7.5l4.6-4.1-2.6-3.4c-3.2-4.2-6.4-4.4-12.5-.9-8.9 5-17.9 1.8-17.9-6.5 0-1.9.8-2.2 9.9-3.6 15.5-2.3 24.1-9.1 24.1-18.9 0-11-11.9-18.2-25.7-15.5zm8 13.5c3.6 3.5-1.9 8.2-11.5 10-3.4.7-3.6.6-3.1-1.5.3-1.2 2.3-4 4.3-6.1 4-4.2 7.7-5.1 10.3-2.4zM248.5 277c.3 1.1 3.7 13.3 7.5 27.2l6.9 25.1-6.5 11.3c-3.5 6.3-6.4 11.8-6.4 12.4 0 .6 3.1 1 7.4 1 5.6 0 7.9-.4 9.4-1.7 1.6-1.4 40.2-75.2 40.2-76.9 0-.2-3.6-.4-7.9-.4-6.1 0-8.3.4-9.8 1.7-1.1 1-4.8 8.5-8.3 16.6-3.4 8.1-6.5 14.5-6.8 14.3-.2-.3-1.7-6.8-3.3-14.6-1.6-7.7-3.3-14.9-3.9-16-.9-1.8-2.1-2-10.1-2-8.6 0-9 .1-8.4 2z"})))},z=n(7233),M=n(890),_=n(2557);function Z(){return(0,r.tZ)("footer",{children:(0,r.BX)("div",{className:"mt-16 flex flex-col items-center",children:[(0,r.BX)("div",{className:"mb-3 flex space-x-4",children:[(0,r.tZ)(_.Z,{kind:"mail",href:"mailto:".concat(c().email),size:"6"}),(0,r.tZ)(_.Z,{kind:"github",href:c().github,size:"6"}),(0,r.tZ)(_.Z,{kind:"facebook",href:c().facebook,size:"6"}),(0,r.tZ)(_.Z,{kind:"youtube",href:c().youtube,size:"6"}),(0,r.tZ)(_.Z,{kind:"linkedin",href:c().linkedin,size:"6"}),(0,r.tZ)(_.Z,{kind:"twitter",href:c().twitter,size:"6"})]}),(0,r.BX)("div",{className:"mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400",children:[(0,r.tZ)("div",{children:c().author}),(0,r.tZ)("div",{children:" \u2022 "}),(0,r.tZ)("div",{children:"\xa9 ".concat((new Date).getFullYear())}),(0,r.tZ)("div",{children:" \u2022 "}),(0,r.tZ)(z.Z,{href:"/",children:c().title})]}),(0,r.BX)("div",{className:"mb-8 text-sm text-gray-500 dark:text-gray-400",children:["Thanks to"," ",(0,r.tZ)(z.Z,{href:"https://github.com/timlrx/tailwind-nextjs-starter-blog",children:"@timlrx"})," for this template."]})]})})}var k=function(){var e=(0,w.useState)(!1),t=e[0],n=e[1],a=function(){n((function(e){return document.body.style.overflow=e?"auto":"hidden",!e}))};return(0,r.BX)("div",{className:"sm:hidden",children:[(0,r.tZ)("button",{type:"button",className:"ml-1 mr-1 h-8 w-8 rounded py-1","aria-label":"Toggle Menu",onClick:a,children:(0,r.tZ)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:"text-gray-900 dark:text-gray-100",children:(0,r.tZ)("path",{fillRule:"evenodd",d:"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",clipRule:"evenodd"})})}),(0,r.BX)("div",{className:"fixed top-0 left-0 z-10 h-full w-full transform bg-gray-200 opacity-95 duration-300 ease-in-out dark:bg-gray-800 ".concat(t?"translate-x-0":"translate-x-full"),children:[(0,r.tZ)("div",{className:"flex justify-end",children:(0,r.tZ)("button",{type:"button",className:"mr-5 mt-11 h-8 w-8 rounded","aria-label":"Toggle Menu",onClick:a,children:(0,r.tZ)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:"text-gray-900 dark:text-gray-100",children:(0,r.tZ)("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"})})})}),(0,r.tZ)("nav",{className:"fixed mt-8 h-full",children:y.map((function(e){return(0,r.tZ)("div",{className:"px-12 py-4",children:(0,r.tZ)(z.Z,{href:e.href,className:"text-2xl font-bold tracking-widest text-gray-900 dark:text-gray-100",onClick:a,children:e.title})},e.title)}))})]})]})},E=function(){var e=(0,w.useState)(!1),t=e[0],n=e[1],o=(0,a.F)(),i=o.theme,c=o.setTheme,l=o.resolvedTheme;return(0,w.useEffect)((function(){return n(!0)}),[]),(0,r.tZ)("button",{"aria-label":"Toggle Dark Mode",type:"button",className:"ml-1 mr-1 h-8 w-8 rounded p-1 sm:ml-4",onClick:function(){return c("dark"===i||"dark"===l?"light":"dark")},children:(0,r.tZ)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:"text-gray-900 dark:text-gray-100",children:!t||"dark"!==i&&"dark"!==l?(0,r.tZ)("path",{d:"M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"}):(0,r.tZ)("path",{fillRule:"evenodd",d:"M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z",clipRule:"evenodd"})})})},O=function(e){var t=e.children;return(0,r.tZ)(M.Z,{children:(0,r.BX)("div",{className:"flex h-screen flex-col justify-between",children:[(0,r.BX)("header",{className:"flex items-center justify-between py-10",children:[(0,r.tZ)("div",{children:(0,r.tZ)(z.Z,{href:"/","aria-label":c().headerTitle,children:(0,r.tZ)("div",{className:"flex items-center justify-between",children:(0,r.tZ)("div",{className:"mr-3",children:(0,r.tZ)(x,{width:"106px",height:"64px"})})})})}),(0,r.BX)("div",{className:"flex items-center text-base leading-5",children:[(0,r.tZ)("div",{className:"hidden sm:block",children:y.map((function(e){return(0,r.tZ)(z.Z,{href:e.href,className:"p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4",children:e.title},e.title)}))}),(0,r.tZ)(E,{}),(0,r.tZ)(k,{})]})]}),(0,r.tZ)("main",{className:"mb-auto",children:t}),(0,r.tZ)(Z,{})]})})},T=(n(1163),n(3454));function j(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){j(e,t,n[t])}))}return e}T.env.SOCKET;function S(e){var t=e.Component,n=e.pageProps;return(0,r.BX)(a.f,{attribute:"class",defaultTheme:c().theme,children:[(0,r.tZ)(o.default,{children:(0,r.tZ)("meta",{content:"width=device-width, initial-scale=1",name:"viewport"})}),false,(0,r.tZ)(g,{}),(0,r.tZ)(O,{children:(0,r.tZ)(t,C({},n))})]})}},8102:function(){},3941:function(){},7661:function(){},2604:function(){},7663:function(e){!function(){var t={162:function(e){var t,n,r=e.exports={};function a(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function i(e){if(t===setTimeout)return setTimeout(e,0);if((t===a||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"===typeof setTimeout?setTimeout:a}catch(e){t=a}try{n="function"===typeof clearTimeout?clearTimeout:o}catch(e){n=o}}();var c,l=[],s=!1,u=-1;function f(){s&&c&&(s=!1,c.length?l=c.concat(l):u=-1,l.length&&d())}function d(){if(!s){var e=i(f);s=!0;for(var t=l.length;t;){for(c=l,l=[];++u<t;)c&&c[u].run();u=-1,t=l.length}c=null,s=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===o||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function p(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new h(e,t)),1!==l.length||s||i(d)},h.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=p,r.addListener=p,r.once=p,r.off=p,r.removeListener=p,r.removeAllListeners=p,r.emit=p,r.prependListener=p,r.prependOnceListener=p,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}}},n={};function r(e){var a=n[e];if(void 0!==a)return a.exports;var o=n[e]={exports:{}},i=!0;try{t[e](o,o.exports,r),i=!1}finally{i&&delete n[e]}return o.exports}r.ab="//";var a=r(162);e.exports=a}()},9008:function(e,t,n){e.exports=n(3121)},1664:function(e,t,n){e.exports=n(1551)},1163:function(e,t,n){e.exports=n(880)},4298:function(e,t,n){e.exports=n(3573)},6584:function(e,t,n){"use strict";n.r(t),n.d(t,{Fragment:function(){return r.HY},jsx:function(){return o},jsxs:function(){return o},jsxDEV:function(){return o}});var r=n(6400),a=0;function o(e,t,n,o,i){var c,l,s={};for(l in t)"ref"==l?c=t[l]:s[l]=t[l];var u={type:e,props:s,key:n,ref:c,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--a,__source:o,__self:i};if("function"==typeof e&&(c=e.defaultProps))for(l in c)void 0===s[l]&&(s[l]=c[l]);return r.YM.vnode&&r.YM.vnode(u),u}},7320:function(e,t,n){"use strict";n.d(t,{HY:function(){return r.Fragment},tZ:function(){return r.jsx},BX:function(){return r.jsxs}});var r=n(6584)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[179],(function(){return t(1780),t(880)}));var n=e.O();_N_E=n}]);