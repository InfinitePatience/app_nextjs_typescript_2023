(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(2603)}])},1516:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,l){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5569:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(2648).Z,o=n(7273).Z,r=l(n(7294)),a=n(4532),i=n(3353),u=n(1410),s=n(9064),c=n(370),f=n(9955),d=n(4224),p=n(508),h=n(1516),_=n(4266);let g=new Set;function v(e,t,n,l,o){if(o||i.isLocalURL(t)){if(!l.bypassPrefetchedCheck){let o=void 0!==l.locale?l.locale:"locale"in e?e.locale:void 0,r=t+"%"+n+"%"+o;if(g.has(r))return;g.add(r)}Promise.resolve(e.prefetch(t,n,l)).catch(e=>{})}}function m(e){return"string"==typeof e?e:u.formatUrl(e)}let y=r.default.forwardRef(function(e,t){let n,l;let{href:u,as:g,children:y,prefetch:b,passHref:x,replace:j,shallow:M,scroll:C,locale:E,onClick:O,onMouseEnter:k,onTouchStart:N,legacyBehavior:w=!1}=e,P=o(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=y,w&&("string"==typeof n||"number"==typeof n)&&(n=r.default.createElement("a",null,n));let S=!1!==b,T=r.default.useContext(f.RouterContext),I=r.default.useContext(d.AppRouterContext),L=null!=T?T:I,H=!T,{href:R,as:X}=r.default.useMemo(()=>{if(!T){let e=m(u);return{href:e,as:g?m(g):e}}let[e,t]=a.resolveHref(T,u,!0);return{href:e,as:g?a.resolveHref(T,g):t||e}},[T,u,g]),B=r.default.useRef(R),U=r.default.useRef(X);w&&(l=r.default.Children.only(n));let A=w?l&&"object"==typeof l&&l.ref:t,[D,K,q]=p.useIntersection({rootMargin:"200px"}),z=r.default.useCallback(e=>{(U.current!==X||B.current!==R)&&(q(),U.current=X,B.current=R),D(e),A&&("function"==typeof A?A(e):"object"==typeof A&&(A.current=e))},[X,A,R,q,D]);r.default.useEffect(()=>{L&&K&&S&&v(L,R,X,{locale:E},H)},[X,R,K,E,S,null==T?void 0:T.locale,L,H]);let V={ref:z,onClick(e){w||"function"!=typeof O||O(e),w&&l.props&&"function"==typeof l.props.onClick&&l.props.onClick(e),L&&!e.defaultPrevented&&function(e,t,n,l,o,a,u,s,c,f){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let t=e.currentTarget,n=t.getAttribute("target");return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!c&&!i.isLocalURL(n)))return;e.preventDefault();let h=()=>{"beforePopState"in t?t[o?"replace":"push"](n,l,{shallow:a,locale:s,scroll:u}):t[o?"replace":"push"](l||n,{forceOptimisticNavigation:!f})};c?r.default.startTransition(h):h()}(e,L,R,X,j,M,C,E,H,S)},onMouseEnter(e){w||"function"!=typeof k||k(e),w&&l.props&&"function"==typeof l.props.onMouseEnter&&l.props.onMouseEnter(e),L&&(S||!H)&&v(L,R,X,{locale:E,priority:!0,bypassPrefetchedCheck:!0},H)},onTouchStart(e){w||"function"!=typeof N||N(e),w&&l.props&&"function"==typeof l.props.onTouchStart&&l.props.onTouchStart(e),L&&(S||!H)&&v(L,R,X,{locale:E,priority:!0,bypassPrefetchedCheck:!0},H)}};if(s.isAbsoluteUrl(X))V.href=X;else if(!w||x||"a"===l.type&&!("href"in l.props)){let e=void 0!==E?E:null==T?void 0:T.locale,t=(null==T?void 0:T.isLocaleDomain)&&h.getDomainLocale(X,e,null==T?void 0:T.locales,null==T?void 0:T.domainLocales);V.href=t||_.addBasePath(c.addLocale(X,e,null==T?void 0:T.defaultLocale))}return w?r.default.cloneElement(l,V):r.default.createElement("a",Object.assign({},P,V),n)});t.default=y,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},508:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:n,disabled:u}=e,s=u||!r,[c,f]=l.useState(!1),d=l.useRef(null),p=l.useCallback(e=>{d.current=e},[]);l.useEffect(()=>{if(r){if(s||c)return;let e=d.current;if(e&&e.tagName){let l=function(e,t,n){let{id:l,observer:o,elements:r}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},l=i.find(e=>e.root===n.root&&e.margin===n.margin);if(l&&(t=a.get(l)))return t;let o=new Map,r=new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:r,elements:o},i.push(n),a.set(n,t),t}(n);return r.set(e,t),o.observe(e),function(){if(r.delete(e),o.unobserve(e),0===r.size){o.disconnect(),a.delete(l);let e=i.findIndex(e=>e.root===l.root&&e.margin===l.margin);e>-1&&i.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:n});return l}}else if(!c){let e=o.requestIdleCallback(()=>f(!0));return()=>o.cancelIdleCallback(e)}},[s,n,t,c,d.current]);let h=l.useCallback(()=>{f(!1)},[]);return[p,c,h]};var l=n(7294),o=n(29);let r="function"==typeof IntersectionObserver,a=new Map,i=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2603:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return f}});var l=n(5893),o=n(9034),r=n.n(o),a=n(9008),i=n.n(a),u=n(1664),s=n.n(u);let c=e=>{let{allPostsData:t}=e;return(0,l.jsxs)("div",{children:[(0,l.jsx)(i(),{children:(0,l.jsx)("title",{children:"Your Name"})}),(0,l.jsxs)("section",{className:"{homeStyles.headingMd}",children:[" ",(0,l.jsx)("p",{children:"[Your Self Introduction]"}),(0,l.jsx)("p",{children:"(This is a website)"})]}),(0,l.jsxs)("section",{className:"".concat(r().headingMd," ").concat(r().padding1px),children:[(0,l.jsx)("h2",{className:r().headingLg,children:"Blog"}),(0,l.jsx)("ul",{className:r().list,children:t.map(e=>{let{date:t,title:n,id:o}=e;return(0,l.jsxs)("li",{className:r().listItem,children:[(0,l.jsxs)(s(),{href:"/posts/".concat(o),children:[" /posts/ssg-ssr",(0,l.jsx)("span",{children:n})]}),(0,l.jsx)("br",{}),(0,l.jsx)("small",{className:r().lightText,children:t})]},o)})})]})]})};var f=!0;t.default=c},9034:function(e){e.exports={headingMd:"Home_headingMd__SEBf6",padding1px:"Home_padding1px__uJX3C",headingLg:"Home_headingLg__oQ2Vy",list:"Home_list__qBUOI",listItem:"Home_listItem__9gzv8",lightText:"Home_lightText__SOpV2",heading2Xl:"Home_heading2Xl__7NFOR",headingXl:"Home_headingXl__wgBvM"}},9008:function(e,t,n){e.exports=n(2636)},1664:function(e,t,n){e.exports=n(5569)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);