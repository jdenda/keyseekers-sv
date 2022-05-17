var app=function(){"use strict";function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function s(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function a(e,...n){if(null==e)return t;const s=e.subscribe(...n);return s.unsubscribe?()=>s.unsubscribe():s}function l(e){return e&&r(e.destroy)?e.destroy:t}function i(t,e){t.appendChild(e)}function u(t,e,n){t.insertBefore(e,n||null)}function f(t){t.parentNode.removeChild(t)}function p(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function h(){return d(" ")}function m(){return d("")}function g(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}let $;function v(t){$=t}function b(){if(!$)throw new Error("Function called outside component initialization");return $}function w(){const t=b();return(e,n,{cancelable:s=!1}={})=>{const o=t.$$.callbacks[e];if(o){const r=function(t,e,{bubbles:n=!1,cancelable:s=!1}={}){const o=document.createEvent("CustomEvent");return o.initCustomEvent(t,n,s,e),o}(e,n,{cancelable:s});return o.slice().forEach((e=>{e.call(t,r)})),!r.defaultPrevented}return!0}}function y(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach((t=>t.call(this,e)))}const x=[],_=[],k=[],E=[],C=Promise.resolve();let j=!1;function L(){j||(j=!0,C.then(N))}function A(t){k.push(t)}const q=new Set;let z=0;function N(){const t=$;do{for(;z<x.length;){const t=x[z];z++,v(t),M(t.$$)}for(v(null),x.length=0,z=0;_.length;)_.pop()();for(let t=0;t<k.length;t+=1){const e=k[t];q.has(e)||(q.add(e),e())}k.length=0}while(x.length);for(;E.length;)E.pop()();j=!1,q.clear(),v(t)}function M(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(A)}}const O=new Set;let S;function T(){S={r:0,c:[],p:S}}function D(){S.r||o(S.c),S=S.p}function H(t,e){t&&t.i&&(O.delete(t),t.i(e))}function R(t,e,n,s){if(t&&t.o){if(O.has(t))return;O.add(t),S.c.push((()=>{O.delete(t),s&&(n&&t.d(1),s())})),t.o(e)}}function B(t,e){const n={},s={},o={$$scope:1};let r=t.length;for(;r--;){const c=t[r],a=e[r];if(a){for(const t in c)t in a||(s[t]=1);for(const t in a)o[t]||(n[t]=a[t],o[t]=1);t[r]=a}else for(const t in c)o[t]=1}for(const t in s)t in n||(n[t]=void 0);return n}function I(t){return"object"==typeof t&&null!==t?t:{}}function P(t){t&&t.c()}function Y(t,e,s,c){const{fragment:a,on_mount:l,on_destroy:i,after_update:u}=t.$$;a&&a.m(e,s),c||A((()=>{const e=l.map(n).filter(r);i?i.push(...e):o(e),t.$$.on_mount=[]})),u.forEach(A)}function F(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function V(e,n,r,c,a,l,i,u=[-1]){const p=$;v(e);const d=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:a,bound:s(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(p?p.$$.context:[])),callbacks:s(),dirty:u,skip_bound:!1,root:n.target||p.$$.root};i&&i(d.root);let h=!1;if(d.ctx=r?r(e,n.props||{},((t,n,...s)=>{const o=s.length?s[0]:n;return d.ctx&&a(d.ctx[t],d.ctx[t]=o)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](o),h&&function(t,e){-1===t.$$.dirty[0]&&(x.push(t),L(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(e,t)),n})):[],d.update(),h=!0,o(d.before_update),d.fragment=!!c&&c(d.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);d.fragment&&d.fragment.l(t),t.forEach(f)}else d.fragment&&d.fragment.c();n.intro&&H(e.$$.fragment),Y(e,n.target,n.anchor,n.customElement),N()}v(p)}class X{$destroy(){F(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const U=[];function K(t,e){return{subscribe:W(t,e).subscribe}}function W(e,n=t){let s;const o=new Set;function r(t){if(c(e,t)&&(e=t,s)){const t=!U.length;for(const t of o)t[1](),U.push(t,e);if(t){for(let t=0;t<U.length;t+=2)U[t][0](U[t+1]);U.length=0}}}return{set:r,update:function(t){r(t(e))},subscribe:function(c,a=t){const l=[c,a];return o.add(l),1===o.size&&(s=n(r)||t),c(e),()=>{o.delete(l),0===o.size&&(s(),s=null)}}}}function G(e,n,s){const c=!Array.isArray(e),l=c?[e]:e,i=n.length<2;return K(s,(e=>{let s=!1;const u=[];let f=0,p=t;const d=()=>{if(f)return;p();const s=n(c?u[0]:u,e);i?e(s):p=r(s)?s:t},h=l.map(((t,e)=>a(t,(t=>{u[e]=t,f&=~(1<<e),s&&d()}),(()=>{f|=1<<e}))));return s=!0,d(),function(){o(h),p()}}))}function J(t,e){if(t instanceof RegExp)return{keys:!1,pattern:t};var n,s,o,r,c=[],a="",l=t.split("/");for(l[0]||l.shift();o=l.shift();)"*"===(n=o[0])?(c.push("wild"),a+="/(.*)"):":"===n?(s=o.indexOf("?",1),r=o.indexOf(".",1),c.push(o.substring(1,~s?s:~r?r:o.length)),a+=~s&&!~r?"(?:/([^/]+?))?":"/([^/]+?)",~r&&(a+=(~s?"?":"")+"\\"+o.substring(r))):a+="/"+o;return{keys:c,pattern:new RegExp("^"+a+(e?"(?=$|/)":"/?$"),"i")}}function Q(t){let n,s,o;const r=[t[2]];var c=t[0];function a(t){let n={};for(let t=0;t<r.length;t+=1)n=e(n,r[t]);return{props:n}}return c&&(n=new c(a()),n.$on("routeEvent",t[7])),{c(){n&&P(n.$$.fragment),s=m()},m(t,e){n&&Y(n,t,e),u(t,s,e),o=!0},p(t,e){const o=4&e?B(r,[I(t[2])]):{};if(c!==(c=t[0])){if(n){T();const t=n;R(t.$$.fragment,1,0,(()=>{F(t,1)})),D()}c?(n=new c(a()),n.$on("routeEvent",t[7]),P(n.$$.fragment),H(n.$$.fragment,1),Y(n,s.parentNode,s)):n=null}else c&&n.$set(o)},i(t){o||(n&&H(n.$$.fragment,t),o=!0)},o(t){n&&R(n.$$.fragment,t),o=!1},d(t){t&&f(s),n&&F(n,t)}}}function Z(t){let n,s,o;const r=[{params:t[1]},t[2]];var c=t[0];function a(t){let n={};for(let t=0;t<r.length;t+=1)n=e(n,r[t]);return{props:n}}return c&&(n=new c(a()),n.$on("routeEvent",t[6])),{c(){n&&P(n.$$.fragment),s=m()},m(t,e){n&&Y(n,t,e),u(t,s,e),o=!0},p(t,e){const o=6&e?B(r,[2&e&&{params:t[1]},4&e&&I(t[2])]):{};if(c!==(c=t[0])){if(n){T();const t=n;R(t.$$.fragment,1,0,(()=>{F(t,1)})),D()}c?(n=new c(a()),n.$on("routeEvent",t[6]),P(n.$$.fragment),H(n.$$.fragment,1),Y(n,s.parentNode,s)):n=null}else c&&n.$set(o)},i(t){o||(n&&H(n.$$.fragment,t),o=!0)},o(t){n&&R(n.$$.fragment,t),o=!1},d(t){t&&f(s),n&&F(n,t)}}}function tt(t){let e,n,s,o;const r=[Z,Q],c=[];function a(t,e){return t[1]?0:1}return e=a(t),n=c[e]=r[e](t),{c(){n.c(),s=m()},m(t,n){c[e].m(t,n),u(t,s,n),o=!0},p(t,[o]){let l=e;e=a(t),e===l?c[e].p(t,o):(T(),R(c[l],1,1,(()=>{c[l]=null})),D(),n=c[e],n?n.p(t,o):(n=c[e]=r[e](t),n.c()),H(n,1),n.m(s.parentNode,s))},i(t){o||(H(n),o=!0)},o(t){R(n),o=!1},d(t){c[e].d(t),t&&f(s)}}}function et(){const t=window.location.href.indexOf("#/");let e=t>-1?window.location.href.substr(t+1):"/";const n=e.indexOf("?");let s="";return n>-1&&(s=e.substr(n+1),e=e.substr(0,n)),{location:e,querystring:s}}const nt=K(null,(function(t){t(et());const e=()=>{t(et())};return window.addEventListener("hashchange",e,!1),function(){window.removeEventListener("hashchange",e,!1)}})),st=G(nt,(t=>t.location));G(nt,(t=>t.querystring));const ot=W(void 0);function rt(t,e){if(e=at(e),!t||!t.tagName||"a"!=t.tagName.toLowerCase())throw Error('Action "link" can only be used with <a> tags');return ct(t,e),{update(e){e=at(e),ct(t,e)}}}function ct(t,e){let n=e.href||t.getAttribute("href");if(n&&"/"==n.charAt(0))n="#"+n;else if(!n||n.length<2||"#/"!=n.slice(0,2))throw Error('Invalid value for "href" attribute: '+n);t.setAttribute("href",n),t.addEventListener("click",(t=>{t.preventDefault(),e.disabled||function(t){history.replaceState({...history.state,__svelte_spa_router_scrollX:window.scrollX,__svelte_spa_router_scrollY:window.scrollY},void 0,void 0),window.location.hash=t}(t.currentTarget.getAttribute("href"))}))}function at(t){return t&&"string"==typeof t?{href:t}:t||{}}function lt(t,e,n){let{routes:s={}}=e,{prefix:o=""}=e,{restoreScrollState:r=!1}=e;class c{constructor(t,e){if(!e||"function"!=typeof e&&("object"!=typeof e||!0!==e._sveltesparouter))throw Error("Invalid component object");if(!t||"string"==typeof t&&(t.length<1||"/"!=t.charAt(0)&&"*"!=t.charAt(0))||"object"==typeof t&&!(t instanceof RegExp))throw Error('Invalid value for "path" argument - strings must start with / or *');const{pattern:n,keys:s}=J(t);this.path=t,"object"==typeof e&&!0===e._sveltesparouter?(this.component=e.component,this.conditions=e.conditions||[],this.userData=e.userData,this.props=e.props||{}):(this.component=()=>Promise.resolve(e),this.conditions=[],this.props={}),this._pattern=n,this._keys=s}match(t){if(o)if("string"==typeof o){if(!t.startsWith(o))return null;t=t.substr(o.length)||"/"}else if(o instanceof RegExp){const e=t.match(o);if(!e||!e[0])return null;t=t.substr(e[0].length)||"/"}const e=this._pattern.exec(t);if(null===e)return null;if(!1===this._keys)return e;const n={};let s=0;for(;s<this._keys.length;){try{n[this._keys[s]]=decodeURIComponent(e[s+1]||"")||null}catch(t){n[this._keys[s]]=null}s++}return n}async checkConditions(t){for(let e=0;e<this.conditions.length;e++)if(!await this.conditions[e](t))return!1;return!0}}const a=[];s instanceof Map?s.forEach(((t,e)=>{a.push(new c(e,t))})):Object.keys(s).forEach((t=>{a.push(new c(t,s[t]))}));let l=null,i=null,u={};const f=w();async function p(t,e){await(L(),C),f(t,e)}let d=null,h=null;var m;r&&(h=t=>{d=t.state&&t.state.__svelte_spa_router_scrollY?t.state:null},window.addEventListener("popstate",h),m=()=>{d?window.scrollTo(d.__svelte_spa_router_scrollX,d.__svelte_spa_router_scrollY):window.scrollTo(0,0)},b().$$.after_update.push(m));let g=null,$=null;const v=nt.subscribe((async t=>{g=t;let e=0;for(;e<a.length;){const s=a[e].match(t.location);if(!s){e++;continue}const o={route:a[e].path,location:t.location,querystring:t.querystring,userData:a[e].userData,params:s&&"object"==typeof s&&Object.keys(s).length?s:null};if(!await a[e].checkConditions(o))return n(0,l=null),$=null,void p("conditionsFailed",o);p("routeLoading",Object.assign({},o));const r=a[e].component;if($!=r){r.loading?(n(0,l=r.loading),$=r,n(1,i=r.loadingParams),n(2,u={}),p("routeLoaded",Object.assign({},o,{component:l,name:l.name,params:i}))):(n(0,l=null),$=null);const e=await r();if(t!=g)return;n(0,l=e&&e.default||e),$=r}return s&&"object"==typeof s&&Object.keys(s).length?n(1,i=s):n(1,i=null),n(2,u=a[e].props),void p("routeLoaded",Object.assign({},o,{component:l,name:l.name,params:i})).then((()=>{ot.set(i)}))}n(0,l=null),$=null,ot.set(void 0)}));return function(t){b().$$.on_destroy.push(t)}((()=>{v(),h&&window.removeEventListener("popstate",h)})),t.$$set=t=>{"routes"in t&&n(3,s=t.routes),"prefix"in t&&n(4,o=t.prefix),"restoreScrollState"in t&&n(5,r=t.restoreScrollState)},t.$$.update=()=>{32&t.$$.dirty&&(history.scrollRestoration=r?"manual":"auto")},[l,i,u,s,o,r,function(e){y.call(this,t,e)},function(e){y.call(this,t,e)}]}class it extends X{constructor(t){super(),V(this,t,lt,tt,c,{routes:3,prefix:4,restoreScrollState:5})}}function ut(e){let n;return{c(){n=p("div"),g(n,"class","m-4 d-block d-xl-none")},m(t,e){u(t,n,e)},p:t,i:t,o:t,d(t){t&&f(n)}}}class ft extends X{constructor(t){super(),V(this,t,null,ut,c,{})}}const pt=[];let dt;function ht(t){const e=t.pattern.test(dt);mt(t,t.className,e),mt(t,t.inactiveClassName,!e)}function mt(t,e,n){(e||"").split(" ").forEach((e=>{e&&(t.node.classList.remove(e),n&&t.node.classList.add(e))}))}function gt(t,e){if(!(e=e&&("string"==typeof e||"object"==typeof e&&e instanceof RegExp)?{path:e}:e||{}).path&&t.hasAttribute("href")&&(e.path=t.getAttribute("href"),e.path&&e.path.length>1&&"#"==e.path.charAt(0)&&(e.path=e.path.substring(1))),e.className||(e.className="active"),!e.path||"string"==typeof e.path&&(e.path.length<1||"/"!=e.path.charAt(0)&&"*"!=e.path.charAt(0)))throw Error('Invalid value for "path" argument');const{pattern:n}="string"==typeof e.path?J(e.path):{pattern:e.path},s={node:t,className:e.className,inactiveClassName:e.inactiveClassName,pattern:n};return pt.push(s),ht(s),{destroy(){pt.splice(pt.indexOf(s),1)}}}function $t(e){let n,s,r,c,a,d,m,$,v,b,w,y,x,_,k,E,C,j,L;return c=new ft({}),E=new ft({}),{c(){n=p("header"),s=p("div"),r=p("div"),P(c.$$.fragment),a=h(),d=p("h2"),d.textContent="The Key Seekers",m=h(),$=p("div"),v=p("nav"),b=p("a"),b.textContent="Home",w=h(),y=p("a"),y.textContent="Projekte",x=h(),_=p("a"),_.textContent="Über Uns",k=h(),P(E.$$.fragment),g(d,"class","float-md-start mb-0"),g(r,"class","d-flex"),g(b,"class","nav-link svelte-vq1mbs"),g(y,"class","nav-link svelte-vq1mbs"),g(_,"class","nav-link svelte-vq1mbs"),g(v,"class","nav nav-head justify-conent-center float-md-end  svelte-vq1mbs"),g($,"class","d-none d-sm-block"),g(s,"class","d-flex justify-content-between align-items-center"),g(n,"class","mb-auto")},m(t,e){u(t,n,e),i(n,s),i(s,r),Y(c,r,null),i(r,a),i(r,d),i(s,m),i(s,$),i($,v),i(v,b),i(v,w),i(v,y),i(v,x),i(v,_),i(v,k),Y(E,v,null),C=!0,j||(L=[l(rt.call(null,b,{href:"/"})),l(gt.call(null,b)),l(rt.call(null,y,{href:"/projects"})),l(gt.call(null,y)),l(rt.call(null,_,{href:"/about"})),l(gt.call(null,_))],j=!0)},p:t,i(t){C||(H(c.$$.fragment,t),H(E.$$.fragment,t),C=!0)},o(t){R(c.$$.fragment,t),R(E.$$.fragment,t),C=!1},d(t){t&&f(n),F(c),F(E),j=!1,o(L)}}}nt.subscribe((t=>{dt=t.location+(t.querystring?"?"+t.querystring:""),pt.map(ht)}));class vt extends X{constructor(t){super(),V(this,t,null,$t,c,{})}}function bt(e){let n;return{c(){n=p("span"),n.innerHTML='<a href="mailto:info@thekeyseekers.de"><svg class="bs svelte-1mtasq3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464zM217.6 339.2C240.4 356.3 271.6 356.3 294.4 339.2L512 176V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V176L217.6 339.2z" class="svelte-1mtasq3"></path></svg></a>',g(n,"class","bs me-3 svelte-1mtasq3")},m(t,e){u(t,n,e)},p:t,i:t,o:t,d(t){t&&f(n)}}}class wt extends X{constructor(t){super(),V(this,t,null,bt,c,{})}}function yt(e){let n;return{c(){n=p("span"),n.innerHTML='<a href="https://www.instagram.com/thekeyseekers01/"><svg class="bs svelte-1mtasq3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" class="svelte-1mtasq3"></path></svg></a>',g(n,"class","bs me-3 svelte-1mtasq3")},m(t,e){u(t,n,e)},p:t,i:t,o:t,d(t){t&&f(n)}}}class xt extends X{constructor(t){super(),V(this,t,null,yt,c,{})}}function _t(e){let n,s,o,r,c,a,l,d,m,$,v,b,w,y,x,_;return v=new wt({}),w=new xt({}),{c(){n=p("footer"),s=p("div"),o=p("div"),r=p("span"),c=h(),a=p("a"),a.textContent=`© Denda ${e[0]}`,l=h(),d=p("div"),d.innerHTML='<span class="d-inline-flex"><span>Made with  </span> \n        <a class="bs svelte-3vmucp" href="https://getbootstrap.com/"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M333.5,201.4c0-22.1-15.6-34.3-43-34.3h-50.4v71.2h42.5C315.4,238.2,333.5,225,333.5,201.4z M517,188.6 c-9.5-30.9-10.9-68.8-9.8-98.1c1.1-30.5-22.7-58.5-54.7-58.5H123.7c-32.1,0-55.8,28.1-54.7,58.5c1,29.3-0.3,67.2-9.8,98.1 c-9.6,31-25.7,50.6-52.2,53.1v28.5c26.4,2.5,42.6,22.1,52.2,53.1c9.5,30.9,10.9,68.8,9.8,98.1c-1.1,30.5,22.7,58.5,54.7,58.5h328.7 c32.1,0,55.8-28.1,54.7-58.5c-1-29.3,0.3-67.2,9.8-98.1c9.6-31,25.7-50.6,52.1-53.1v-28.5C542.7,239.2,526.5,219.6,517,188.6z M300.2,375.1h-97.9V136.8h97.4c43.3,0,71.7,23.4,71.7,59.4c0,25.3-19.1,47.9-43.5,51.8v1.3c33.2,3.6,55.5,26.6,55.5,58.3 C383.4,349.7,352.1,375.1,300.2,375.1z M290.2,266.4h-50.1v78.4h52.3c34.2,0,52.3-13.7,52.3-39.5 C344.7,279.6,326.1,266.4,290.2,266.4z" class="svelte-3vmucp"></path></svg></a> \n        <span>  and  </span> \n        <a class="bs svelte-3vmucp" href="https://svelte.dev/"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path d="M110.293 16.914C98.586-.086 75.668-5 58.02 5.707l-29.856 18.98a33.94 33.94 0 00-15.418 22.938 35.543 35.543 0 003.566 23.102 33.01 33.01 0 00-5.066 12.793 36.517 36.517 0 006.191 27.52c11.727 16.96 34.583 21.897 52.27 11.312l29.879-19a34.025 34.025 0 0015.355-22.938 35.44 35.44 0 00-3.586-23.02c7.938-12.456 7.52-28.48-1.062-40.48zm-55.254 95.773a23.645 23.645 0 01-25.394-9.433c-3.461-4.793-4.73-10.711-3.73-16.586l.585-2.832.54-1.75 1.605 1.062c3.52 2.668 7.46 4.582 11.668 5.875l1.082.375-.122 1.067c-.105 1.48.332 3.144 1.188 4.414 1.75 2.52 4.793 3.73 7.727 2.937.644-.207 1.273-.418 1.812-.754l29.754-18.976c1.5-.961 2.457-2.398 2.832-4.106.328-1.773-.106-3.585-1.066-5.02-1.774-2.46-4.793-3.565-7.727-2.831-.645.226-1.332.48-1.879.812l-11.25 7.145c-10.644 6.328-24.394 3.355-31.46-6.832a21.854 21.854 0 01-3.75-16.586 20.643 20.643 0 019.456-13.875l29.692-18.98c1.875-1.168 3.894-2.02 6.082-2.668 9.605-2.5 19.726 1.27 25.394 9.394a22.027 22.027 0 013.043 19.398l-.543 1.77-1.539-1.062a39.399 39.399 0 00-11.727-5.875l-1.066-.313.106-1.066c.105-1.563-.332-3.207-1.188-4.48-1.754-2.52-4.793-3.583-7.727-2.833-.644.211-1.273.418-1.812.754L45.812 49.977c-1.5 1-2.46 2.394-2.773 4.144-.312 1.707.106 3.582 1.066 4.957 1.708 2.524 4.81 3.586 7.688 2.832.687-.207 1.332-.414 1.855-.75l11.375-7.254c1.856-1.226 3.938-2.12 6.067-2.707 9.668-2.52 19.75 1.274 25.394 9.438 3.461 4.793 4.793 10.707 3.832 16.52a20.487 20.487 0 01-9.332 13.874L61.23 109.97a25.82 25.82 0 01-6.187 2.707zm0 0" class="svelte-3vmucp"></path></svg></a></span>',m=h(),$=p("div"),P(v.$$.fragment),b=h(),P(w.$$.fragment),y=h(),x=p("span"),g(r,"class","mx-4 d-xl-none"),g(a,"href","https://www.d3nda.de"),g(a,"class","svelte-3vmucp"),g(o,"class","col-md-4 col-6 text-start"),g(d,"class","col-4 d-none d-md-block"),g(x,"class","mx-4 d-xl-none"),g($,"class","col-md-4 col-6 text-end"),g(s,"class","row mx-0"),g(n,"class","mt-auto")},m(t,e){u(t,n,e),i(n,s),i(s,o),i(o,r),i(o,c),i(o,a),i(s,l),i(s,d),i(s,m),i(s,$),Y(v,$,null),i($,b),Y(w,$,null),i($,y),i($,x),_=!0},p:t,i(t){_||(H(v.$$.fragment,t),H(w.$$.fragment,t),_=!0)},o(t){R(v.$$.fragment,t),R(w.$$.fragment,t),_=!1},d(t){t&&f(n),F(v),F(w)}}}function kt(t){return[(new Date).getFullYear()]}class Et extends X{constructor(t){super(),V(this,t,kt,_t,c,{})}}function Ct(e){let n;return{c(){n=p("div"),n.textContent="home"},m(t,e){u(t,n,e)},p:t,i:t,o:t,d(t){t&&f(n)}}}class jt extends X{constructor(t){super(),V(this,t,null,Ct,c,{})}}function Lt(e){let n;return{c(){n=p("div"),n.textContent="projects"},m(t,e){u(t,n,e)},p:t,i:t,o:t,d(t){t&&f(n)}}}class At extends X{constructor(t){super(),V(this,t,null,Lt,c,{})}}function qt(e){let n;return{c(){n=p("div"),n.textContent="about"},m(t,e){u(t,n,e)},p:t,i:t,o:t,d(t){t&&f(n)}}}class zt extends X{constructor(t){super(),V(this,t,null,qt,c,{})}}function Nt(e){let n;return{c(){n=p("div"),n.textContent="not found"},m(t,e){u(t,n,e)},p:t,i:t,o:t,d(t){t&&f(n)}}}class Mt extends X{constructor(t){super(),V(this,t,null,Nt,c,{})}}function Ot(t){let e,n,s,o,r,c,a,l,m,$,v,b,w;return s=new vt({}),c=new it({props:{routes:{"/":jt,"/about":zt,"/projects":At,"*":Mt}}}),b=new Et({}),{c(){e=p("div"),n=p("div"),P(s.$$.fragment),o=h(),r=p("main"),P(c.$$.fragment),a=h(),l=p("p"),m=d("The current page is: "),$=d(t[0]),v=h(),P(b.$$.fragment),g(n,"class","cover-container d-flex w-100 h-100 px-2 py-4 mx-auto flex-column svelte-15ppgvw"),g(e,"class","bg-image img-fluid w-100 h-100 img svelte-15ppgvw")},m(t,f){u(t,e,f),i(e,n),Y(s,n,null),i(n,o),i(n,r),Y(c,r,null),i(n,a),i(n,l),i(l,m),i(l,$),i(n,v),Y(b,n,null),w=!0},p(t,[e]){(!w||1&e)&&function(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}($,t[0])},i(t){w||(H(s.$$.fragment,t),H(c.$$.fragment,t),H(b.$$.fragment,t),w=!0)},o(t){R(s.$$.fragment,t),R(c.$$.fragment,t),R(b.$$.fragment,t),w=!1},d(t){t&&f(e),F(s),F(c),F(b)}}}function St(t,e,n){let s;var o,r;return o=st,r=t=>n(0,s=t),t.$$.on_destroy.push(a(o,r)),[s]}return new class extends X{constructor(t){super(),V(this,t,St,Ot,c,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
