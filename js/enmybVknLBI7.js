"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[576],{576:function(e,n,t){t.d(n,{VY:function(){return D},fC:function(){return I},xz:function(){return P},p_:function(){return E}});var r,o=t(64090),i=t.t(o,2),l=t(3827);function a(e){let n=o.useRef(e);return o.useEffect(()=>{n.current=e}),o.useMemo(()=>function(){for(var e,t=arguments.length,r=Array(t),o=0;o<t;o++)r[o]=arguments[o];return null===(e=n.current)||void 0===e?void 0:e.call(n,...r)},[])}var u=(null===(r=globalThis)||void 0===r?void 0:r.document)?o.useLayoutEffect:()=>{};function s(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];return e=>n.forEach(n=>{"function"==typeof n?n(e):null!=n&&(n.current=e)})}function c(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];return o.useCallback(s(...n),n)}var d=t(89542),f=o.forwardRef((e,n)=>{let{children:t,...r}=e,i=o.Children.toArray(t),a=i.find(v);if(a){let e=a.props.children,t=i.map(n=>n!==a?n:o.Children.count(e)>1?o.Children.only(null):o.isValidElement(e)?e.props.children:null);return(0,l.jsx)(p,{...r,ref:n,children:o.isValidElement(e)?o.cloneElement(e,void 0,t):null})}return(0,l.jsx)(p,{...r,ref:n,children:t})});f.displayName="Slot";var p=o.forwardRef((e,n)=>{let{children:t,...r}=e;if(o.isValidElement(t)){var i,l;let e,a;let u=(e=null===(i=Object.getOwnPropertyDescriptor(t.props,"ref"))||void 0===i?void 0:i.get)&&"isReactWarning"in e&&e.isReactWarning?t.ref:(e=null===(l=Object.getOwnPropertyDescriptor(t,"ref"))||void 0===l?void 0:l.get)&&"isReactWarning"in e&&e.isReactWarning?t.props.ref:t.props.ref||t.ref;return o.cloneElement(t,{...function(e,n){let t={...n};for(let r in n){let o=e[r],i=n[r];/^on[A-Z]/.test(r)?o&&i?t[r]=function(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];i(...n),o(...n)}:o&&(t[r]=o):"style"===r?t[r]={...o,...i}:"className"===r&&(t[r]=[o,i].filter(Boolean).join(" "))}return{...e,...t}}(r,t.props),ref:n?s(n,u):u})}return o.Children.count(t)>1?o.Children.only(null):null});p.displayName="SlotClone";var m=e=>{let{children:n}=e;return(0,l.jsx)(l.Fragment,{children:n})};function v(e){return o.isValidElement(e)&&e.type===m}var N=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,n)=>{let t=o.forwardRef((e,t)=>{let{asChild:r,...o}=e,i=r?f:n;return window[Symbol.for("radix-ui")]=!0,(0,l.jsx)(i,{...o,ref:t})});return t.displayName="Primitive.".concat(n),{...e,[n]:t}},{}),g=e=>{var n,t;let r,i;let{present:l,children:a}=e,s=function(e){var n,t;let[r,i]=o.useState(),l=o.useRef({}),a=o.useRef(e),s=o.useRef("none"),[c,f]=(n=e?"mounted":"unmounted",t={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},o.useReducer((e,n)=>{let r=t[e][n];return null!=r?r:e},n));return o.useEffect(()=>{let e=y(l.current);s.current="mounted"===c?e:"none"},[c]),u(()=>{let n=l.current,t=a.current;if(t!==e){let r=s.current,o=y(n);e?f("MOUNT"):"none"===o||(null==n?void 0:n.display)==="none"?f("UNMOUNT"):t&&r!==o?f("ANIMATION_OUT"):f("UNMOUNT"),a.current=e}},[e,f]),u(()=>{if(r){let e=e=>{let n=y(l.current).includes(e.animationName);e.target===r&&n&&d.flushSync(()=>f("ANIMATION_END"))},n=e=>{e.target===r&&(s.current=y(l.current))};return r.addEventListener("animationstart",n),r.addEventListener("animationcancel",e),r.addEventListener("animationend",e),()=>{r.removeEventListener("animationstart",n),r.removeEventListener("animationcancel",e),r.removeEventListener("animationend",e)}}f("ANIMATION_END")},[r,f]),{isPresent:["mounted","unmountSuspended"].includes(c),ref:o.useCallback(e=>{e&&(l.current=getComputedStyle(e)),i(e)},[])}}(l),f="function"==typeof a?a({present:s.isPresent}):o.Children.only(a),p=c(s.ref,(r=null===(n=Object.getOwnPropertyDescriptor(f.props,"ref"))||void 0===n?void 0:n.get)&&"isReactWarning"in r&&r.isReactWarning?f.ref:(r=null===(t=Object.getOwnPropertyDescriptor(f,"ref"))||void 0===t?void 0:t.get)&&"isReactWarning"in r&&r.isReactWarning?f.props.ref:f.props.ref||f.ref);return"function"==typeof a||s.isPresent?o.cloneElement(f,{ref:p}):null};function y(e){return(null==e?void 0:e.animationName)||"none"}g.displayName="Presence";var h=i["useId".toString()]||(()=>void 0),b=0,C="Collapsible",[R,E]=function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],t=[],r=()=>{let n=t.map(e=>o.createContext(e));return function(t){let r=(null==t?void 0:t[e])||n;return o.useMemo(()=>({["__scope".concat(e)]:{...t,[e]:r}}),[t,r])}};return r.scopeName=e,[function(n,r){let i=o.createContext(r),a=t.length;function u(n){let{scope:t,children:r,...u}=n,s=(null==t?void 0:t[e][a])||i,c=o.useMemo(()=>u,Object.values(u));return(0,l.jsx)(s.Provider,{value:c,children:r})}return t=[...t,r],u.displayName=n+"Provider",[u,function(t,l){let u=(null==l?void 0:l[e][a])||i,s=o.useContext(u);if(s)return s;if(void 0!==r)return r;throw Error("`".concat(t,"` must be used within `").concat(n,"`"))}]},function(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];let r=n[0];if(1===n.length)return r;let i=()=>{let e=n.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(n){let t=e.reduce((e,t)=>{let{useScope:r,scopeName:o}=t,i=r(n)["__scope".concat(o)];return{...e,...i}},{});return o.useMemo(()=>({["__scope".concat(r.scopeName)]:t}),[t])}};return i.scopeName=r.scopeName,i}(r,...n)]}(C),[O,x]=R(C),w=o.forwardRef((e,n)=>{let{__scopeCollapsible:t,open:r,defaultOpen:i,disabled:s,onOpenChange:c,...d}=e,[f=!1,p]=function(e){let{prop:n,defaultProp:t,onChange:r=()=>{}}=e,[i,l]=function(e){let{defaultProp:n,onChange:t}=e,r=o.useState(n),[i]=r,l=o.useRef(i),u=a(t);return o.useEffect(()=>{l.current!==i&&(u(i),l.current=i)},[i,l,u]),r}({defaultProp:t,onChange:r}),u=void 0!==n,s=u?n:i,c=a(r);return[s,o.useCallback(e=>{if(u){let t="function"==typeof e?e(n):e;t!==n&&c(t)}else l(e)},[u,n,l,c])]}({prop:r,defaultProp:i,onChange:c});return(0,l.jsx)(O,{scope:t,disabled:s,contentId:function(e){let[n,t]=o.useState(h());return u(()=>{e||t(e=>null!=e?e:String(b++))},[e]),e||(n?"radix-".concat(n):"")}(),open:f,onOpenToggle:o.useCallback(()=>p(e=>!e),[p]),children:(0,l.jsx)(N.div,{"data-state":S(f),"data-disabled":s?"":void 0,...d,ref:n})})});w.displayName=C;var A="CollapsibleTrigger",_=o.forwardRef((e,n)=>{let{__scopeCollapsible:t,...r}=e,o=x(A,t);return(0,l.jsx)(N.button,{type:"button","aria-controls":o.contentId,"aria-expanded":o.open||!1,"data-state":S(o.open),"data-disabled":o.disabled?"":void 0,disabled:o.disabled,...r,ref:n,onClick:function(e,n){let{checkForDefaultPrevented:t=!0}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return function(r){if(null==e||e(r),!1===t||!r.defaultPrevented)return null==n?void 0:n(r)}}(e.onClick,o.onOpenToggle)})});_.displayName=A;var j="CollapsibleContent",T=o.forwardRef((e,n)=>{let{forceMount:t,...r}=e,o=x(j,e.__scopeCollapsible);return(0,l.jsx)(g,{present:t||o.open,children:e=>{let{present:t}=e;return(0,l.jsx)(M,{...r,ref:n,present:t})}})});T.displayName=j;var M=o.forwardRef((e,n)=>{let{__scopeCollapsible:t,present:r,children:i,...a}=e,s=x(j,t),[d,f]=o.useState(r),p=o.useRef(null),m=c(n,p),v=o.useRef(0),g=v.current,y=o.useRef(0),h=y.current,b=s.open||d,C=o.useRef(b),R=o.useRef();return o.useEffect(()=>{let e=requestAnimationFrame(()=>C.current=!1);return()=>cancelAnimationFrame(e)},[]),u(()=>{let e=p.current;if(e){R.current=R.current||{transitionDuration:e.style.transitionDuration,animationName:e.style.animationName},e.style.transitionDuration="0s",e.style.animationName="none";let n=e.getBoundingClientRect();v.current=n.height,y.current=n.width,C.current||(e.style.transitionDuration=R.current.transitionDuration,e.style.animationName=R.current.animationName),f(r)}},[s.open,r]),(0,l.jsx)(N.div,{"data-state":S(s.open),"data-disabled":s.disabled?"":void 0,id:s.contentId,hidden:!b,...a,ref:m,style:{"--radix-collapsible-content-height":g?"".concat(g,"px"):void 0,"--radix-collapsible-content-width":h?"".concat(h,"px"):void 0,...e.style},children:b&&i})});function S(e){return e?"open":"closed"}var I=w,P=_,D=T}}]);