"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5692],{13571:function(e,n,t){t.d(n,{M:function(){return r}});function r(e,n){let{checkForDefaultPrevented:t=!0}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return function(r){if(null==e||e(r),!1===t||!r.defaultPrevented)return null==n?void 0:n(r)}}},89824:function(e,n,t){t.d(n,{F:function(){return u},e:function(){return o}});var r=t(64090);function u(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];return e=>n.forEach(n=>{"function"==typeof n?n(e):null!=n&&(n.current=e)})}function o(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];return(0,r.useCallback)(u(...n),n)}},40500:function(e,n,t){t.d(n,{b:function(){return o},k:function(){return u}});var r=t(64090);function u(e,n){let t=(0,r.createContext)(n);function u(e){let{children:n,...u}=e,o=(0,r.useMemo)(()=>u,Object.values(u));return(0,r.createElement)(t.Provider,{value:o},n)}return u.displayName=e+"Provider",[u,function(u){let o=(0,r.useContext)(t);if(o)return o;if(void 0!==n)return n;throw Error("`".concat(u,"` must be used within `").concat(e,"`"))}]}function o(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],t=[],u=()=>{let n=t.map(e=>(0,r.createContext)(e));return function(t){let u=(null==t?void 0:t[e])||n;return(0,r.useMemo)(()=>({["__scope".concat(e)]:{...t,[e]:u}}),[t,u])}};return u.scopeName=e,[function(n,u){let o=(0,r.createContext)(u),l=t.length;function i(n){let{scope:t,children:u,...i}=n,a=(null==t?void 0:t[e][l])||o,c=(0,r.useMemo)(()=>i,Object.values(i));return(0,r.createElement)(a.Provider,{value:c},u)}return t=[...t,u],i.displayName=n+"Provider",[i,function(t,i){let a=(null==i?void 0:i[e][l])||o,c=(0,r.useContext)(a);if(c)return c;if(void 0!==u)return u;throw Error("`".concat(t,"` must be used within `").concat(n,"`"))}]},function(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];let u=n[0];if(1===n.length)return u;let o=()=>{let e=n.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(n){let t=e.reduce((e,t)=>{let{useScope:r,scopeName:u}=t,o=r(n)["__scope".concat(u)];return{...e,...o}},{});return(0,r.useMemo)(()=>({["__scope".concat(u.scopeName)]:t}),[t])}};return o.scopeName=u.scopeName,o}(u,...n)]}},32251:function(e,n,t){let r;t.d(n,{XB:function(){return f}});var u=t(14749),o=t(64090),l=t(13571),i=t(52066),a=t(89824),c=t(14242);let s="dismissableLayer.update",d=(0,o.createContext)({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),f=(0,o.forwardRef)((e,n)=>{var t;let{disableOutsidePointerEvents:f=!1,onEscapeKeyDown:p,onPointerDownOutside:E,onFocusOutside:h,onInteractOutside:y,onDismiss:b,...g}=e,N=(0,o.useContext)(d),[C,w]=(0,o.useState)(null),P=null!==(t=null==C?void 0:C.ownerDocument)&&void 0!==t?t:null==globalThis?void 0:globalThis.document,[,O]=(0,o.useState)({}),T=(0,a.e)(n,e=>w(e)),L=Array.from(N.layers),[D]=[...N.layersWithOutsidePointerEventsDisabled].slice(-1),M=L.indexOf(D),S=C?L.indexOf(C):-1,A=N.layersWithOutsidePointerEventsDisabled.size>0,W=S>=M,k=function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null==globalThis?void 0:globalThis.document,t=(0,c.W)(e),r=(0,o.useRef)(!1),u=(0,o.useRef)(()=>{});return(0,o.useEffect)(()=>{let e=e=>{if(e.target&&!r.current){let r={originalEvent:e};function o(){m("dismissableLayer.pointerDownOutside",t,r,{discrete:!0})}"touch"===e.pointerType?(n.removeEventListener("click",u.current),u.current=o,n.addEventListener("click",u.current,{once:!0})):o()}r.current=!1},o=window.setTimeout(()=>{n.addEventListener("pointerdown",e)},0);return()=>{window.clearTimeout(o),n.removeEventListener("pointerdown",e),n.removeEventListener("click",u.current)}},[n,t]),{onPointerDownCapture:()=>r.current=!0}}(e=>{let n=e.target,t=[...N.branches].some(e=>e.contains(n));!W||t||(null==E||E(e),null==y||y(e),e.defaultPrevented||null==b||b())},P),_=function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null==globalThis?void 0:globalThis.document,t=(0,c.W)(e),r=(0,o.useRef)(!1);return(0,o.useEffect)(()=>{let e=e=>{e.target&&!r.current&&m("dismissableLayer.focusOutside",t,{originalEvent:e},{discrete:!1})};return n.addEventListener("focusin",e),()=>n.removeEventListener("focusin",e)},[n,t]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}(e=>{let n=e.target;[...N.branches].some(e=>e.contains(n))||(null==h||h(e),null==y||y(e),e.defaultPrevented||null==b||b())},P);return!function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null==globalThis?void 0:globalThis.document,t=(0,c.W)(e);(0,o.useEffect)(()=>{let e=e=>{"Escape"===e.key&&t(e)};return n.addEventListener("keydown",e),()=>n.removeEventListener("keydown",e)},[t,n])}(e=>{S!==N.layers.size-1||(null==p||p(e),!e.defaultPrevented&&b&&(e.preventDefault(),b()))},P),(0,o.useEffect)(()=>{if(C)return f&&(0===N.layersWithOutsidePointerEventsDisabled.size&&(r=P.body.style.pointerEvents,P.body.style.pointerEvents="none"),N.layersWithOutsidePointerEventsDisabled.add(C)),N.layers.add(C),v(),()=>{f&&1===N.layersWithOutsidePointerEventsDisabled.size&&(P.body.style.pointerEvents=r)}},[C,P,f,N]),(0,o.useEffect)(()=>()=>{C&&(N.layers.delete(C),N.layersWithOutsidePointerEventsDisabled.delete(C),v())},[C,N]),(0,o.useEffect)(()=>{let e=()=>O({});return document.addEventListener(s,e),()=>document.removeEventListener(s,e)},[]),(0,o.createElement)(i.WV.div,(0,u.Z)({},g,{ref:T,style:{pointerEvents:A?W?"auto":"none":void 0,...e.style},onFocusCapture:(0,l.M)(e.onFocusCapture,_.onFocusCapture),onBlurCapture:(0,l.M)(e.onBlurCapture,_.onBlurCapture),onPointerDownCapture:(0,l.M)(e.onPointerDownCapture,k.onPointerDownCapture)}))});function v(){let e=new CustomEvent(s);document.dispatchEvent(e)}function m(e,n,t,r){let{discrete:u}=r,o=t.originalEvent.target,l=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:t});n&&o.addEventListener(e,n,{once:!0}),u?(0,i.jH)(o,l):o.dispatchEvent(l)}},50022:function(e,n,t){t.d(n,{M:function(){return a}});var r,u=t(64090),o=t(32332);let l=(r||(r=t.t(u,2)))["useId".toString()]||(()=>void 0),i=0;function a(e){let[n,t]=u.useState(l());return(0,o.b)(()=>{e||t(e=>null!=e?e:String(i++))},[e]),e||(n?"radix-".concat(n):"")}},42952:function(e,n,t){t.d(n,{h:function(){return i}});var r=t(14749),u=t(64090),o=t(89542),l=t(52066);let i=(0,u.forwardRef)((e,n)=>{var t;let{container:i=null==globalThis?void 0:null===(t=globalThis.document)||void 0===t?void 0:t.body,...a}=e;return i?o.createPortal((0,u.createElement)(l.WV.div,(0,r.Z)({},a,{ref:n})),i):null})},70927:function(e,n,t){t.d(n,{z:function(){return i}});var r=t(64090),u=t(89542),o=t(89824),l=t(32332);let i=e=>{let{present:n,children:t}=e,i=function(e){var n,t;let[o,i]=(0,r.useState)(),c=(0,r.useRef)({}),s=(0,r.useRef)(e),d=(0,r.useRef)("none"),[f,v]=(n=e?"mounted":"unmounted",t={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},(0,r.useReducer)((e,n)=>{let r=t[e][n];return null!=r?r:e},n));return(0,r.useEffect)(()=>{let e=a(c.current);d.current="mounted"===f?e:"none"},[f]),(0,l.b)(()=>{let n=c.current,t=s.current;if(t!==e){let r=d.current,u=a(n);e?v("MOUNT"):"none"===u||(null==n?void 0:n.display)==="none"?v("UNMOUNT"):t&&r!==u?v("ANIMATION_OUT"):v("UNMOUNT"),s.current=e}},[e,v]),(0,l.b)(()=>{if(o){let e=e=>{let n=a(c.current).includes(e.animationName);e.target===o&&n&&(0,u.flushSync)(()=>v("ANIMATION_END"))},n=e=>{e.target===o&&(d.current=a(c.current))};return o.addEventListener("animationstart",n),o.addEventListener("animationcancel",e),o.addEventListener("animationend",e),()=>{o.removeEventListener("animationstart",n),o.removeEventListener("animationcancel",e),o.removeEventListener("animationend",e)}}v("ANIMATION_END")},[o,v]),{isPresent:["mounted","unmountSuspended"].includes(f),ref:(0,r.useCallback)(e=>{e&&(c.current=getComputedStyle(e)),i(e)},[])}}(n),c="function"==typeof t?t({present:i.isPresent}):r.Children.only(t),s=(0,o.e)(i.ref,c.ref);return"function"==typeof t||i.isPresent?(0,r.cloneElement)(c,{ref:s}):null};function a(e){return(null==e?void 0:e.animationName)||"none"}i.displayName="Presence"},52066:function(e,n,t){t.d(n,{WV:function(){return i},jH:function(){return a}});var r=t(14749),u=t(64090),o=t(89542),l=t(34928);let i=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,n)=>{let t=(0,u.forwardRef)((e,t)=>{let{asChild:o,...i}=e,a=o?l.g7:n;return(0,u.useEffect)(()=>{window[Symbol.for("radix-ui")]=!0},[]),(0,u.createElement)(a,(0,r.Z)({},i,{ref:t}))});return t.displayName="Primitive.".concat(n),{...e,[n]:t}},{});function a(e,n){e&&(0,o.flushSync)(()=>e.dispatchEvent(n))}},34928:function(e,n,t){t.d(n,{A4:function(){return a},g7:function(){return l}});var r=t(14749),u=t(64090),o=t(89824);let l=(0,u.forwardRef)((e,n)=>{let{children:t,...o}=e,l=u.Children.toArray(t),a=l.find(c);if(a){let e=a.props.children,t=l.map(n=>n!==a?n:u.Children.count(e)>1?u.Children.only(null):(0,u.isValidElement)(e)?e.props.children:null);return(0,u.createElement)(i,(0,r.Z)({},o,{ref:n}),(0,u.isValidElement)(e)?(0,u.cloneElement)(e,void 0,t):null)}return(0,u.createElement)(i,(0,r.Z)({},o,{ref:n}),t)});l.displayName="Slot";let i=(0,u.forwardRef)((e,n)=>{let{children:t,...r}=e;return(0,u.isValidElement)(t)?(0,u.cloneElement)(t,{...function(e,n){let t={...n};for(let r in n){let u=e[r],o=n[r];/^on[A-Z]/.test(r)?u&&o?t[r]=function(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];o(...n),u(...n)}:u&&(t[r]=u):"style"===r?t[r]={...u,...o}:"className"===r&&(t[r]=[u,o].filter(Boolean).join(" "))}return{...e,...t}}(r,t.props),ref:(0,o.F)(n,t.ref)}):u.Children.count(t)>1?u.Children.only(null):null});i.displayName="SlotClone";let a=e=>{let{children:n}=e;return(0,u.createElement)(u.Fragment,null,n)};function c(e){return(0,u.isValidElement)(e)&&e.type===a}},14242:function(e,n,t){t.d(n,{W:function(){return u}});var r=t(64090);function u(e){let n=(0,r.useRef)(e);return(0,r.useEffect)(()=>{n.current=e}),(0,r.useMemo)(()=>function(){for(var e,t=arguments.length,r=Array(t),u=0;u<t;u++)r[u]=arguments[u];return null===(e=n.current)||void 0===e?void 0:e.call(n,...r)},[])}},53748:function(e,n,t){t.d(n,{T:function(){return o}});var r=t(64090),u=t(14242);function o(e){let{prop:n,defaultProp:t,onChange:o=()=>{}}=e,[l,i]=function(e){let{defaultProp:n,onChange:t}=e,o=(0,r.useState)(n),[l]=o,i=(0,r.useRef)(l),a=(0,u.W)(t);return(0,r.useEffect)(()=>{i.current!==l&&(a(l),i.current=l)},[l,i,a]),o}({defaultProp:t,onChange:o}),a=void 0!==n,c=a?n:l,s=(0,u.W)(o);return[c,(0,r.useCallback)(e=>{if(a){let t="function"==typeof e?e(n):e;t!==n&&s(t)}else i(e)},[a,n,i,s])]}},32332:function(e,n,t){t.d(n,{b:function(){return u}});var r=t(64090);let u=(null==globalThis?void 0:globalThis.document)?r.useLayoutEffect:()=>{}}}]);