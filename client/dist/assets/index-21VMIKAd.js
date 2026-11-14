(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function h0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var f0={exports:{}},Ac={},p0={exports:{}},Xe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yo=Symbol.for("react.element"),ny=Symbol.for("react.portal"),iy=Symbol.for("react.fragment"),ry=Symbol.for("react.strict_mode"),sy=Symbol.for("react.profiler"),ay=Symbol.for("react.provider"),oy=Symbol.for("react.context"),ly=Symbol.for("react.forward_ref"),cy=Symbol.for("react.suspense"),uy=Symbol.for("react.memo"),dy=Symbol.for("react.lazy"),zp=Symbol.iterator;function hy(t){return t===null||typeof t!="object"?null:(t=zp&&t[zp]||t["@@iterator"],typeof t=="function"?t:null)}var m0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g0=Object.assign,x0={};function sa(t,e,n){this.props=t,this.context=e,this.refs=x0,this.updater=n||m0}sa.prototype.isReactComponent={};sa.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};sa.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function v0(){}v0.prototype=sa.prototype;function nf(t,e,n){this.props=t,this.context=e,this.refs=x0,this.updater=n||m0}var rf=nf.prototype=new v0;rf.constructor=nf;g0(rf,sa.prototype);rf.isPureReactComponent=!0;var Hp=Array.isArray,_0=Object.prototype.hasOwnProperty,sf={current:null},y0={key:!0,ref:!0,__self:!0,__source:!0};function S0(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)_0.call(e,i)&&!y0.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),u=0;u<o;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:yo,type:t,key:s,ref:a,props:r,_owner:sf.current}}function fy(t,e){return{$$typeof:yo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function af(t){return typeof t=="object"&&t!==null&&t.$$typeof===yo}function py(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Gp=/\/+/g;function eu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?py(""+t.key):e.toString(36)}function Ml(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case yo:case ny:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+eu(a,0):i,Hp(r)?(n="",t!=null&&(n=t.replace(Gp,"$&/")+"/"),Ml(r,e,n,"",function(u){return u})):r!=null&&(af(r)&&(r=fy(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(Gp,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",Hp(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+eu(s,o);a+=Ml(s,e,n,l,r)}else if(l=hy(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+eu(s,o++),a+=Ml(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function Po(t,e,n){if(t==null)return t;var i=[],r=0;return Ml(t,i,"","",function(s){return e.call(n,s,r++)}),i}function my(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var _n={current:null},El={transition:null},gy={ReactCurrentDispatcher:_n,ReactCurrentBatchConfig:El,ReactCurrentOwner:sf};function M0(){throw Error("act(...) is not supported in production builds of React.")}Xe.Children={map:Po,forEach:function(t,e,n){Po(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Po(t,function(){e++}),e},toArray:function(t){return Po(t,function(e){return e})||[]},only:function(t){if(!af(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Xe.Component=sa;Xe.Fragment=iy;Xe.Profiler=sy;Xe.PureComponent=nf;Xe.StrictMode=ry;Xe.Suspense=cy;Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gy;Xe.act=M0;Xe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=g0({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=sf.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)_0.call(e,l)&&!y0.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var u=0;u<l;u++)o[u]=arguments[u+2];i.children=o}return{$$typeof:yo,type:t.type,key:r,ref:s,props:i,_owner:a}};Xe.createContext=function(t){return t={$$typeof:oy,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:ay,_context:t},t.Consumer=t};Xe.createElement=S0;Xe.createFactory=function(t){var e=S0.bind(null,t);return e.type=t,e};Xe.createRef=function(){return{current:null}};Xe.forwardRef=function(t){return{$$typeof:ly,render:t}};Xe.isValidElement=af;Xe.lazy=function(t){return{$$typeof:dy,_payload:{_status:-1,_result:t},_init:my}};Xe.memo=function(t,e){return{$$typeof:uy,type:t,compare:e===void 0?null:e}};Xe.startTransition=function(t){var e=El.transition;El.transition={};try{t()}finally{El.transition=e}};Xe.unstable_act=M0;Xe.useCallback=function(t,e){return _n.current.useCallback(t,e)};Xe.useContext=function(t){return _n.current.useContext(t)};Xe.useDebugValue=function(){};Xe.useDeferredValue=function(t){return _n.current.useDeferredValue(t)};Xe.useEffect=function(t,e){return _n.current.useEffect(t,e)};Xe.useId=function(){return _n.current.useId()};Xe.useImperativeHandle=function(t,e,n){return _n.current.useImperativeHandle(t,e,n)};Xe.useInsertionEffect=function(t,e){return _n.current.useInsertionEffect(t,e)};Xe.useLayoutEffect=function(t,e){return _n.current.useLayoutEffect(t,e)};Xe.useMemo=function(t,e){return _n.current.useMemo(t,e)};Xe.useReducer=function(t,e,n){return _n.current.useReducer(t,e,n)};Xe.useRef=function(t){return _n.current.useRef(t)};Xe.useState=function(t){return _n.current.useState(t)};Xe.useSyncExternalStore=function(t,e,n){return _n.current.useSyncExternalStore(t,e,n)};Xe.useTransition=function(){return _n.current.useTransition()};Xe.version="18.3.1";p0.exports=Xe;var ke=p0.exports;const So=h0(ke);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xy=ke,vy=Symbol.for("react.element"),_y=Symbol.for("react.fragment"),yy=Object.prototype.hasOwnProperty,Sy=xy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,My={key:!0,ref:!0,__self:!0,__source:!0};function E0(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)yy.call(e,i)&&!My.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:vy,type:t,key:s,ref:a,props:r,_owner:Sy.current}}Ac.Fragment=_y;Ac.jsx=E0;Ac.jsxs=E0;f0.exports=Ac;var c=f0.exports,cd={},w0={exports:{}},Gn={},b0={exports:{}},T0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(k,F){var j=k.length;k.push(F);e:for(;0<j;){var Y=j-1>>>1,fe=k[Y];if(0<r(fe,F))k[Y]=F,k[j]=fe,j=Y;else break e}}function n(k){return k.length===0?null:k[0]}function i(k){if(k.length===0)return null;var F=k[0],j=k.pop();if(j!==F){k[0]=j;e:for(var Y=0,fe=k.length,Pe=fe>>>1;Y<Pe;){var Z=2*(Y+1)-1,me=k[Z],te=Z+1,re=k[te];if(0>r(me,j))te<fe&&0>r(re,me)?(k[Y]=re,k[te]=j,Y=te):(k[Y]=me,k[Z]=j,Y=Z);else if(te<fe&&0>r(re,j))k[Y]=re,k[te]=j,Y=te;else break e}}return F}function r(k,F){var j=k.sortIndex-F.sortIndex;return j!==0?j:k.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],u=[],h=1,p=null,f=3,m=!1,_=!1,S=!1,x=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(k){for(var F=n(u);F!==null;){if(F.callback===null)i(u);else if(F.startTime<=k)i(u),F.sortIndex=F.expirationTime,e(l,F);else break;F=n(u)}}function M(k){if(S=!1,y(k),!_)if(n(l)!==null)_=!0,$(A);else{var F=n(u);F!==null&&z(M,F.startTime-k)}}function A(k,F){_=!1,S&&(S=!1,d(b),b=-1),m=!0;var j=f;try{for(y(F),p=n(l);p!==null&&(!(p.expirationTime>F)||k&&!D());){var Y=p.callback;if(typeof Y=="function"){p.callback=null,f=p.priorityLevel;var fe=Y(p.expirationTime<=F);F=t.unstable_now(),typeof fe=="function"?p.callback=fe:p===n(l)&&i(l),y(F)}else i(l);p=n(l)}if(p!==null)var Pe=!0;else{var Z=n(u);Z!==null&&z(M,Z.startTime-F),Pe=!1}return Pe}finally{p=null,f=j,m=!1}}var T=!1,v=null,b=-1,I=5,R=-1;function D(){return!(t.unstable_now()-R<I)}function U(){if(v!==null){var k=t.unstable_now();R=k;var F=!0;try{F=v(!0,k)}finally{F?X():(T=!1,v=null)}}else T=!1}var X;if(typeof g=="function")X=function(){g(U)};else if(typeof MessageChannel<"u"){var P=new MessageChannel,W=P.port2;P.port1.onmessage=U,X=function(){W.postMessage(null)}}else X=function(){x(U,0)};function $(k){v=k,T||(T=!0,X())}function z(k,F){b=x(function(){k(t.unstable_now())},F)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(k){k.callback=null},t.unstable_continueExecution=function(){_||m||(_=!0,$(A))},t.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<k?Math.floor(1e3/k):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(k){switch(f){case 1:case 2:case 3:var F=3;break;default:F=f}var j=f;f=F;try{return k()}finally{f=j}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(k,F){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var j=f;f=k;try{return F()}finally{f=j}},t.unstable_scheduleCallback=function(k,F,j){var Y=t.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?Y+j:Y):j=Y,k){case 1:var fe=-1;break;case 2:fe=250;break;case 5:fe=1073741823;break;case 4:fe=1e4;break;default:fe=5e3}return fe=j+fe,k={id:h++,callback:F,priorityLevel:k,startTime:j,expirationTime:fe,sortIndex:-1},j>Y?(k.sortIndex=j,e(u,k),n(l)===null&&k===n(u)&&(S?(d(b),b=-1):S=!0,z(M,j-Y))):(k.sortIndex=fe,e(l,k),_||m||(_=!0,$(A))),k},t.unstable_shouldYield=D,t.unstable_wrapCallback=function(k){var F=f;return function(){var j=f;f=F;try{return k.apply(this,arguments)}finally{f=j}}}})(T0);b0.exports=T0;var Ey=b0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wy=ke,Hn=Ey;function se(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var A0=new Set,Ka={};function as(t,e){Xs(t,e),Xs(t+"Capture",e)}function Xs(t,e){for(Ka[t]=e,t=0;t<e.length;t++)A0.add(e[t])}var Yi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ud=Object.prototype.hasOwnProperty,by=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Vp={},jp={};function Ty(t){return ud.call(jp,t)?!0:ud.call(Vp,t)?!1:by.test(t)?jp[t]=!0:(Vp[t]=!0,!1)}function Ay(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Cy(t,e,n,i){if(e===null||typeof e>"u"||Ay(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function yn(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var nn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){nn[t]=new yn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];nn[e]=new yn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){nn[t]=new yn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){nn[t]=new yn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){nn[t]=new yn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){nn[t]=new yn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){nn[t]=new yn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){nn[t]=new yn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){nn[t]=new yn(t,5,!1,t.toLowerCase(),null,!1,!1)});var of=/[\-:]([a-z])/g;function lf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(of,lf);nn[e]=new yn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(of,lf);nn[e]=new yn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(of,lf);nn[e]=new yn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){nn[t]=new yn(t,1,!1,t.toLowerCase(),null,!1,!1)});nn.xlinkHref=new yn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){nn[t]=new yn(t,1,!1,t.toLowerCase(),null,!0,!0)});function cf(t,e,n,i){var r=nn.hasOwnProperty(e)?nn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Cy(e,n,r,i)&&(n=null),i||r===null?Ty(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Qi=wy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Lo=Symbol.for("react.element"),Es=Symbol.for("react.portal"),ws=Symbol.for("react.fragment"),uf=Symbol.for("react.strict_mode"),dd=Symbol.for("react.profiler"),C0=Symbol.for("react.provider"),R0=Symbol.for("react.context"),df=Symbol.for("react.forward_ref"),hd=Symbol.for("react.suspense"),fd=Symbol.for("react.suspense_list"),hf=Symbol.for("react.memo"),ur=Symbol.for("react.lazy"),N0=Symbol.for("react.offscreen"),Wp=Symbol.iterator;function pa(t){return t===null||typeof t!="object"?null:(t=Wp&&t[Wp]||t["@@iterator"],typeof t=="function"?t:null)}var At=Object.assign,tu;function Pa(t){if(tu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);tu=e&&e[1]||""}return`
`+tu+t}var nu=!1;function iu(t,e){if(!t||nu)return"";nu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{nu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Pa(t):""}function Ry(t){switch(t.tag){case 5:return Pa(t.type);case 16:return Pa("Lazy");case 13:return Pa("Suspense");case 19:return Pa("SuspenseList");case 0:case 2:case 15:return t=iu(t.type,!1),t;case 11:return t=iu(t.type.render,!1),t;case 1:return t=iu(t.type,!0),t;default:return""}}function pd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ws:return"Fragment";case Es:return"Portal";case dd:return"Profiler";case uf:return"StrictMode";case hd:return"Suspense";case fd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case R0:return(t.displayName||"Context")+".Consumer";case C0:return(t._context.displayName||"Context")+".Provider";case df:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case hf:return e=t.displayName||null,e!==null?e:pd(t.type)||"Memo";case ur:e=t._payload,t=t._init;try{return pd(t(e))}catch{}}return null}function Ny(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return pd(e);case 8:return e===uf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ar(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function P0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Py(t){var e=P0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Do(t){t._valueTracker||(t._valueTracker=Py(t))}function L0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=P0(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function ql(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function md(t,e){var n=e.checked;return At({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Xp(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Ar(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function D0(t,e){e=e.checked,e!=null&&cf(t,"checked",e,!1)}function gd(t,e){D0(t,e);var n=Ar(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?xd(t,e.type,n):e.hasOwnProperty("defaultValue")&&xd(t,e.type,Ar(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function qp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function xd(t,e,n){(e!=="number"||ql(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var La=Array.isArray;function Os(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Ar(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function vd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(se(91));return At({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Yp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(se(92));if(La(n)){if(1<n.length)throw Error(se(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ar(n)}}function I0(t,e){var n=Ar(e.value),i=Ar(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function $p(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function U0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function _d(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?U0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Io,O0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Io=Io||document.createElement("div"),Io.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Io.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Za(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var za={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ly=["Webkit","ms","Moz","O"];Object.keys(za).forEach(function(t){Ly.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),za[e]=za[t]})});function F0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||za.hasOwnProperty(t)&&za[t]?(""+e).trim():e+"px"}function k0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=F0(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Dy=At({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function yd(t,e){if(e){if(Dy[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(se(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(se(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(se(61))}if(e.style!=null&&typeof e.style!="object")throw Error(se(62))}}function Sd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Md=null;function ff(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ed=null,Fs=null,ks=null;function Kp(t){if(t=wo(t)){if(typeof Ed!="function")throw Error(se(280));var e=t.stateNode;e&&(e=Lc(e),Ed(t.stateNode,t.type,e))}}function B0(t){Fs?ks?ks.push(t):ks=[t]:Fs=t}function z0(){if(Fs){var t=Fs,e=ks;if(ks=Fs=null,Kp(t),e)for(t=0;t<e.length;t++)Kp(e[t])}}function H0(t,e){return t(e)}function G0(){}var ru=!1;function V0(t,e,n){if(ru)return t(e,n);ru=!0;try{return H0(t,e,n)}finally{ru=!1,(Fs!==null||ks!==null)&&(G0(),z0())}}function Qa(t,e){var n=t.stateNode;if(n===null)return null;var i=Lc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(se(231,e,typeof n));return n}var wd=!1;if(Yi)try{var ma={};Object.defineProperty(ma,"passive",{get:function(){wd=!0}}),window.addEventListener("test",ma,ma),window.removeEventListener("test",ma,ma)}catch{wd=!1}function Iy(t,e,n,i,r,s,a,o,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(h){this.onError(h)}}var Ha=!1,Yl=null,$l=!1,bd=null,Uy={onError:function(t){Ha=!0,Yl=t}};function Oy(t,e,n,i,r,s,a,o,l){Ha=!1,Yl=null,Iy.apply(Uy,arguments)}function Fy(t,e,n,i,r,s,a,o,l){if(Oy.apply(this,arguments),Ha){if(Ha){var u=Yl;Ha=!1,Yl=null}else throw Error(se(198));$l||($l=!0,bd=u)}}function os(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function j0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Zp(t){if(os(t)!==t)throw Error(se(188))}function ky(t){var e=t.alternate;if(!e){if(e=os(t),e===null)throw Error(se(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Zp(r),t;if(s===i)return Zp(r),e;s=s.sibling}throw Error(se(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(se(189))}}if(n.alternate!==i)throw Error(se(190))}if(n.tag!==3)throw Error(se(188));return n.stateNode.current===n?t:e}function W0(t){return t=ky(t),t!==null?X0(t):null}function X0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=X0(t);if(e!==null)return e;t=t.sibling}return null}var q0=Hn.unstable_scheduleCallback,Qp=Hn.unstable_cancelCallback,By=Hn.unstable_shouldYield,zy=Hn.unstable_requestPaint,Pt=Hn.unstable_now,Hy=Hn.unstable_getCurrentPriorityLevel,pf=Hn.unstable_ImmediatePriority,Y0=Hn.unstable_UserBlockingPriority,Kl=Hn.unstable_NormalPriority,Gy=Hn.unstable_LowPriority,$0=Hn.unstable_IdlePriority,Cc=null,Ei=null;function Vy(t){if(Ei&&typeof Ei.onCommitFiberRoot=="function")try{Ei.onCommitFiberRoot(Cc,t,void 0,(t.current.flags&128)===128)}catch{}}var hi=Math.clz32?Math.clz32:Xy,jy=Math.log,Wy=Math.LN2;function Xy(t){return t>>>=0,t===0?32:31-(jy(t)/Wy|0)|0}var Uo=64,Oo=4194304;function Da(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Zl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=Da(o):(s&=a,s!==0&&(i=Da(s)))}else a=n&~r,a!==0?i=Da(a):s!==0&&(i=Da(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-hi(e),r=1<<n,i|=t[n],e&=~r;return i}function qy(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Yy(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-hi(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=qy(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function Td(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function K0(){var t=Uo;return Uo<<=1,!(Uo&4194240)&&(Uo=64),t}function su(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Mo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-hi(e),t[e]=n}function $y(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-hi(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function mf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-hi(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var ct=0;function Z0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Q0,gf,J0,ex,tx,Ad=!1,Fo=[],_r=null,yr=null,Sr=null,Ja=new Map,eo=new Map,hr=[],Ky="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Jp(t,e){switch(t){case"focusin":case"focusout":_r=null;break;case"dragenter":case"dragleave":yr=null;break;case"mouseover":case"mouseout":Sr=null;break;case"pointerover":case"pointerout":Ja.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":eo.delete(e.pointerId)}}function ga(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=wo(e),e!==null&&gf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Zy(t,e,n,i,r){switch(e){case"focusin":return _r=ga(_r,t,e,n,i,r),!0;case"dragenter":return yr=ga(yr,t,e,n,i,r),!0;case"mouseover":return Sr=ga(Sr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Ja.set(s,ga(Ja.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,eo.set(s,ga(eo.get(s)||null,t,e,n,i,r)),!0}return!1}function nx(t){var e=Wr(t.target);if(e!==null){var n=os(e);if(n!==null){if(e=n.tag,e===13){if(e=j0(n),e!==null){t.blockedOn=e,tx(t.priority,function(){J0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function wl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Cd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Md=i,n.target.dispatchEvent(i),Md=null}else return e=wo(n),e!==null&&gf(e),t.blockedOn=n,!1;e.shift()}return!0}function em(t,e,n){wl(t)&&n.delete(e)}function Qy(){Ad=!1,_r!==null&&wl(_r)&&(_r=null),yr!==null&&wl(yr)&&(yr=null),Sr!==null&&wl(Sr)&&(Sr=null),Ja.forEach(em),eo.forEach(em)}function xa(t,e){t.blockedOn===e&&(t.blockedOn=null,Ad||(Ad=!0,Hn.unstable_scheduleCallback(Hn.unstable_NormalPriority,Qy)))}function to(t){function e(r){return xa(r,t)}if(0<Fo.length){xa(Fo[0],t);for(var n=1;n<Fo.length;n++){var i=Fo[n];i.blockedOn===t&&(i.blockedOn=null)}}for(_r!==null&&xa(_r,t),yr!==null&&xa(yr,t),Sr!==null&&xa(Sr,t),Ja.forEach(e),eo.forEach(e),n=0;n<hr.length;n++)i=hr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<hr.length&&(n=hr[0],n.blockedOn===null);)nx(n),n.blockedOn===null&&hr.shift()}var Bs=Qi.ReactCurrentBatchConfig,Ql=!0;function Jy(t,e,n,i){var r=ct,s=Bs.transition;Bs.transition=null;try{ct=1,xf(t,e,n,i)}finally{ct=r,Bs.transition=s}}function eS(t,e,n,i){var r=ct,s=Bs.transition;Bs.transition=null;try{ct=4,xf(t,e,n,i)}finally{ct=r,Bs.transition=s}}function xf(t,e,n,i){if(Ql){var r=Cd(t,e,n,i);if(r===null)mu(t,e,i,Jl,n),Jp(t,i);else if(Zy(r,t,e,n,i))i.stopPropagation();else if(Jp(t,i),e&4&&-1<Ky.indexOf(t)){for(;r!==null;){var s=wo(r);if(s!==null&&Q0(s),s=Cd(t,e,n,i),s===null&&mu(t,e,i,Jl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else mu(t,e,i,null,n)}}var Jl=null;function Cd(t,e,n,i){if(Jl=null,t=ff(i),t=Wr(t),t!==null)if(e=os(t),e===null)t=null;else if(n=e.tag,n===13){if(t=j0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Jl=t,null}function ix(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Hy()){case pf:return 1;case Y0:return 4;case Kl:case Gy:return 16;case $0:return 536870912;default:return 16}default:return 16}}var mr=null,vf=null,bl=null;function rx(){if(bl)return bl;var t,e=vf,n=e.length,i,r="value"in mr?mr.value:mr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return bl=r.slice(t,1<i?1-i:void 0)}function Tl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ko(){return!0}function tm(){return!1}function Vn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ko:tm,this.isPropagationStopped=tm,this}return At(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ko)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ko)},persist:function(){},isPersistent:ko}),e}var aa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_f=Vn(aa),Eo=At({},aa,{view:0,detail:0}),tS=Vn(Eo),au,ou,va,Rc=At({},Eo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:yf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==va&&(va&&t.type==="mousemove"?(au=t.screenX-va.screenX,ou=t.screenY-va.screenY):ou=au=0,va=t),au)},movementY:function(t){return"movementY"in t?t.movementY:ou}}),nm=Vn(Rc),nS=At({},Rc,{dataTransfer:0}),iS=Vn(nS),rS=At({},Eo,{relatedTarget:0}),lu=Vn(rS),sS=At({},aa,{animationName:0,elapsedTime:0,pseudoElement:0}),aS=Vn(sS),oS=At({},aa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),lS=Vn(oS),cS=At({},aa,{data:0}),im=Vn(cS),uS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=hS[t])?!!e[t]:!1}function yf(){return fS}var pS=At({},Eo,{key:function(t){if(t.key){var e=uS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Tl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?dS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:yf,charCode:function(t){return t.type==="keypress"?Tl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Tl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),mS=Vn(pS),gS=At({},Rc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),rm=Vn(gS),xS=At({},Eo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:yf}),vS=Vn(xS),_S=At({},aa,{propertyName:0,elapsedTime:0,pseudoElement:0}),yS=Vn(_S),SS=At({},Rc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),MS=Vn(SS),ES=[9,13,27,32],Sf=Yi&&"CompositionEvent"in window,Ga=null;Yi&&"documentMode"in document&&(Ga=document.documentMode);var wS=Yi&&"TextEvent"in window&&!Ga,sx=Yi&&(!Sf||Ga&&8<Ga&&11>=Ga),sm=" ",am=!1;function ax(t,e){switch(t){case"keyup":return ES.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ox(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var bs=!1;function bS(t,e){switch(t){case"compositionend":return ox(e);case"keypress":return e.which!==32?null:(am=!0,sm);case"textInput":return t=e.data,t===sm&&am?null:t;default:return null}}function TS(t,e){if(bs)return t==="compositionend"||!Sf&&ax(t,e)?(t=rx(),bl=vf=mr=null,bs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return sx&&e.locale!=="ko"?null:e.data;default:return null}}var AS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function om(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!AS[t.type]:e==="textarea"}function lx(t,e,n,i){B0(i),e=ec(e,"onChange"),0<e.length&&(n=new _f("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Va=null,no=null;function CS(t){_x(t,0)}function Nc(t){var e=Cs(t);if(L0(e))return t}function RS(t,e){if(t==="change")return e}var cx=!1;if(Yi){var cu;if(Yi){var uu="oninput"in document;if(!uu){var lm=document.createElement("div");lm.setAttribute("oninput","return;"),uu=typeof lm.oninput=="function"}cu=uu}else cu=!1;cx=cu&&(!document.documentMode||9<document.documentMode)}function cm(){Va&&(Va.detachEvent("onpropertychange",ux),no=Va=null)}function ux(t){if(t.propertyName==="value"&&Nc(no)){var e=[];lx(e,no,t,ff(t)),V0(CS,e)}}function NS(t,e,n){t==="focusin"?(cm(),Va=e,no=n,Va.attachEvent("onpropertychange",ux)):t==="focusout"&&cm()}function PS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Nc(no)}function LS(t,e){if(t==="click")return Nc(e)}function DS(t,e){if(t==="input"||t==="change")return Nc(e)}function IS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var pi=typeof Object.is=="function"?Object.is:IS;function io(t,e){if(pi(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!ud.call(e,r)||!pi(t[r],e[r]))return!1}return!0}function um(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function dm(t,e){var n=um(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=um(n)}}function dx(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?dx(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function hx(){for(var t=window,e=ql();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ql(t.document)}return e}function Mf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function US(t){var e=hx(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&dx(n.ownerDocument.documentElement,n)){if(i!==null&&Mf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=dm(n,s);var a=dm(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var OS=Yi&&"documentMode"in document&&11>=document.documentMode,Ts=null,Rd=null,ja=null,Nd=!1;function hm(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Nd||Ts==null||Ts!==ql(i)||(i=Ts,"selectionStart"in i&&Mf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ja&&io(ja,i)||(ja=i,i=ec(Rd,"onSelect"),0<i.length&&(e=new _f("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Ts)))}function Bo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var As={animationend:Bo("Animation","AnimationEnd"),animationiteration:Bo("Animation","AnimationIteration"),animationstart:Bo("Animation","AnimationStart"),transitionend:Bo("Transition","TransitionEnd")},du={},fx={};Yi&&(fx=document.createElement("div").style,"AnimationEvent"in window||(delete As.animationend.animation,delete As.animationiteration.animation,delete As.animationstart.animation),"TransitionEvent"in window||delete As.transitionend.transition);function Pc(t){if(du[t])return du[t];if(!As[t])return t;var e=As[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in fx)return du[t]=e[n];return t}var px=Pc("animationend"),mx=Pc("animationiteration"),gx=Pc("animationstart"),xx=Pc("transitionend"),vx=new Map,fm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Lr(t,e){vx.set(t,e),as(e,[t])}for(var hu=0;hu<fm.length;hu++){var fu=fm[hu],FS=fu.toLowerCase(),kS=fu[0].toUpperCase()+fu.slice(1);Lr(FS,"on"+kS)}Lr(px,"onAnimationEnd");Lr(mx,"onAnimationIteration");Lr(gx,"onAnimationStart");Lr("dblclick","onDoubleClick");Lr("focusin","onFocus");Lr("focusout","onBlur");Lr(xx,"onTransitionEnd");Xs("onMouseEnter",["mouseout","mouseover"]);Xs("onMouseLeave",["mouseout","mouseover"]);Xs("onPointerEnter",["pointerout","pointerover"]);Xs("onPointerLeave",["pointerout","pointerover"]);as("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));as("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));as("onBeforeInput",["compositionend","keypress","textInput","paste"]);as("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));as("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));as("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ia="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),BS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ia));function pm(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Fy(i,e,void 0,t),t.currentTarget=null}function _x(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,u=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;pm(r,o,u),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,u=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;pm(r,o,u),s=l}}}if($l)throw t=bd,$l=!1,bd=null,t}function vt(t,e){var n=e[Ud];n===void 0&&(n=e[Ud]=new Set);var i=t+"__bubble";n.has(i)||(yx(e,t,2,!1),n.add(i))}function pu(t,e,n){var i=0;e&&(i|=4),yx(n,t,i,e)}var zo="_reactListening"+Math.random().toString(36).slice(2);function ro(t){if(!t[zo]){t[zo]=!0,A0.forEach(function(n){n!=="selectionchange"&&(BS.has(n)||pu(n,!1,t),pu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[zo]||(e[zo]=!0,pu("selectionchange",!1,e))}}function yx(t,e,n,i){switch(ix(e)){case 1:var r=Jy;break;case 4:r=eS;break;default:r=xf}n=r.bind(null,e,n,t),r=void 0,!wd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function mu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=Wr(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}V0(function(){var u=s,h=ff(n),p=[];e:{var f=vx.get(t);if(f!==void 0){var m=_f,_=t;switch(t){case"keypress":if(Tl(n)===0)break e;case"keydown":case"keyup":m=mS;break;case"focusin":_="focus",m=lu;break;case"focusout":_="blur",m=lu;break;case"beforeblur":case"afterblur":m=lu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=nm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=iS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=vS;break;case px:case mx:case gx:m=aS;break;case xx:m=yS;break;case"scroll":m=tS;break;case"wheel":m=MS;break;case"copy":case"cut":case"paste":m=lS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=rm}var S=(e&4)!==0,x=!S&&t==="scroll",d=S?f!==null?f+"Capture":null:f;S=[];for(var g=u,y;g!==null;){y=g;var M=y.stateNode;if(y.tag===5&&M!==null&&(y=M,d!==null&&(M=Qa(g,d),M!=null&&S.push(so(g,M,y)))),x)break;g=g.return}0<S.length&&(f=new m(f,_,null,n,h),p.push({event:f,listeners:S}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",f&&n!==Md&&(_=n.relatedTarget||n.fromElement)&&(Wr(_)||_[$i]))break e;if((m||f)&&(f=h.window===h?h:(f=h.ownerDocument)?f.defaultView||f.parentWindow:window,m?(_=n.relatedTarget||n.toElement,m=u,_=_?Wr(_):null,_!==null&&(x=os(_),_!==x||_.tag!==5&&_.tag!==6)&&(_=null)):(m=null,_=u),m!==_)){if(S=nm,M="onMouseLeave",d="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(S=rm,M="onPointerLeave",d="onPointerEnter",g="pointer"),x=m==null?f:Cs(m),y=_==null?f:Cs(_),f=new S(M,g+"leave",m,n,h),f.target=x,f.relatedTarget=y,M=null,Wr(h)===u&&(S=new S(d,g+"enter",_,n,h),S.target=y,S.relatedTarget=x,M=S),x=M,m&&_)t:{for(S=m,d=_,g=0,y=S;y;y=ls(y))g++;for(y=0,M=d;M;M=ls(M))y++;for(;0<g-y;)S=ls(S),g--;for(;0<y-g;)d=ls(d),y--;for(;g--;){if(S===d||d!==null&&S===d.alternate)break t;S=ls(S),d=ls(d)}S=null}else S=null;m!==null&&mm(p,f,m,S,!1),_!==null&&x!==null&&mm(p,x,_,S,!0)}}e:{if(f=u?Cs(u):window,m=f.nodeName&&f.nodeName.toLowerCase(),m==="select"||m==="input"&&f.type==="file")var A=RS;else if(om(f))if(cx)A=DS;else{A=PS;var T=NS}else(m=f.nodeName)&&m.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(A=LS);if(A&&(A=A(t,u))){lx(p,A,n,h);break e}T&&T(t,f,u),t==="focusout"&&(T=f._wrapperState)&&T.controlled&&f.type==="number"&&xd(f,"number",f.value)}switch(T=u?Cs(u):window,t){case"focusin":(om(T)||T.contentEditable==="true")&&(Ts=T,Rd=u,ja=null);break;case"focusout":ja=Rd=Ts=null;break;case"mousedown":Nd=!0;break;case"contextmenu":case"mouseup":case"dragend":Nd=!1,hm(p,n,h);break;case"selectionchange":if(OS)break;case"keydown":case"keyup":hm(p,n,h)}var v;if(Sf)e:{switch(t){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else bs?ax(t,n)&&(b="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(sx&&n.locale!=="ko"&&(bs||b!=="onCompositionStart"?b==="onCompositionEnd"&&bs&&(v=rx()):(mr=h,vf="value"in mr?mr.value:mr.textContent,bs=!0)),T=ec(u,b),0<T.length&&(b=new im(b,t,null,n,h),p.push({event:b,listeners:T}),v?b.data=v:(v=ox(n),v!==null&&(b.data=v)))),(v=wS?bS(t,n):TS(t,n))&&(u=ec(u,"onBeforeInput"),0<u.length&&(h=new im("onBeforeInput","beforeinput",null,n,h),p.push({event:h,listeners:u}),h.data=v))}_x(p,e)})}function so(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ec(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Qa(t,n),s!=null&&i.unshift(so(t,s,r)),s=Qa(t,e),s!=null&&i.push(so(t,s,r))),t=t.return}return i}function ls(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function mm(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,u=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&u!==null&&(o=u,r?(l=Qa(n,s),l!=null&&a.unshift(so(n,l,o))):r||(l=Qa(n,s),l!=null&&a.push(so(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var zS=/\r\n?/g,HS=/\u0000|\uFFFD/g;function gm(t){return(typeof t=="string"?t:""+t).replace(zS,`
`).replace(HS,"")}function Ho(t,e,n){if(e=gm(e),gm(t)!==e&&n)throw Error(se(425))}function tc(){}var Pd=null,Ld=null;function Dd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Id=typeof setTimeout=="function"?setTimeout:void 0,GS=typeof clearTimeout=="function"?clearTimeout:void 0,xm=typeof Promise=="function"?Promise:void 0,VS=typeof queueMicrotask=="function"?queueMicrotask:typeof xm<"u"?function(t){return xm.resolve(null).then(t).catch(jS)}:Id;function jS(t){setTimeout(function(){throw t})}function gu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),to(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);to(e)}function Mr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function vm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var oa=Math.random().toString(36).slice(2),yi="__reactFiber$"+oa,ao="__reactProps$"+oa,$i="__reactContainer$"+oa,Ud="__reactEvents$"+oa,WS="__reactListeners$"+oa,XS="__reactHandles$"+oa;function Wr(t){var e=t[yi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[$i]||n[yi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=vm(t);t!==null;){if(n=t[yi])return n;t=vm(t)}return e}t=n,n=t.parentNode}return null}function wo(t){return t=t[yi]||t[$i],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Cs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(se(33))}function Lc(t){return t[ao]||null}var Od=[],Rs=-1;function Dr(t){return{current:t}}function _t(t){0>Rs||(t.current=Od[Rs],Od[Rs]=null,Rs--)}function pt(t,e){Rs++,Od[Rs]=t.current,t.current=e}var Cr={},hn=Dr(Cr),Rn=Dr(!1),Qr=Cr;function qs(t,e){var n=t.type.contextTypes;if(!n)return Cr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Nn(t){return t=t.childContextTypes,t!=null}function nc(){_t(Rn),_t(hn)}function _m(t,e,n){if(hn.current!==Cr)throw Error(se(168));pt(hn,e),pt(Rn,n)}function Sx(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(se(108,Ny(t)||"Unknown",r));return At({},n,i)}function ic(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Cr,Qr=hn.current,pt(hn,t),pt(Rn,Rn.current),!0}function ym(t,e,n){var i=t.stateNode;if(!i)throw Error(se(169));n?(t=Sx(t,e,Qr),i.__reactInternalMemoizedMergedChildContext=t,_t(Rn),_t(hn),pt(hn,t)):_t(Rn),pt(Rn,n)}var Bi=null,Dc=!1,xu=!1;function Mx(t){Bi===null?Bi=[t]:Bi.push(t)}function qS(t){Dc=!0,Mx(t)}function Ir(){if(!xu&&Bi!==null){xu=!0;var t=0,e=ct;try{var n=Bi;for(ct=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Bi=null,Dc=!1}catch(r){throw Bi!==null&&(Bi=Bi.slice(t+1)),q0(pf,Ir),r}finally{ct=e,xu=!1}}return null}var Ns=[],Ps=0,rc=null,sc=0,Xn=[],qn=0,Jr=null,Gi=1,Vi="";function Vr(t,e){Ns[Ps++]=sc,Ns[Ps++]=rc,rc=t,sc=e}function Ex(t,e,n){Xn[qn++]=Gi,Xn[qn++]=Vi,Xn[qn++]=Jr,Jr=t;var i=Gi;t=Vi;var r=32-hi(i)-1;i&=~(1<<r),n+=1;var s=32-hi(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,Gi=1<<32-hi(e)+r|n<<r|i,Vi=s+t}else Gi=1<<s|n<<r|i,Vi=t}function Ef(t){t.return!==null&&(Vr(t,1),Ex(t,1,0))}function wf(t){for(;t===rc;)rc=Ns[--Ps],Ns[Ps]=null,sc=Ns[--Ps],Ns[Ps]=null;for(;t===Jr;)Jr=Xn[--qn],Xn[qn]=null,Vi=Xn[--qn],Xn[qn]=null,Gi=Xn[--qn],Xn[qn]=null}var zn=null,Bn=null,St=!1,ci=null;function wx(t,e){var n=Kn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Sm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,zn=t,Bn=Mr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,zn=t,Bn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Jr!==null?{id:Gi,overflow:Vi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Kn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,zn=t,Bn=null,!0):!1;default:return!1}}function Fd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function kd(t){if(St){var e=Bn;if(e){var n=e;if(!Sm(t,e)){if(Fd(t))throw Error(se(418));e=Mr(n.nextSibling);var i=zn;e&&Sm(t,e)?wx(i,n):(t.flags=t.flags&-4097|2,St=!1,zn=t)}}else{if(Fd(t))throw Error(se(418));t.flags=t.flags&-4097|2,St=!1,zn=t}}}function Mm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;zn=t}function Go(t){if(t!==zn)return!1;if(!St)return Mm(t),St=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Dd(t.type,t.memoizedProps)),e&&(e=Bn)){if(Fd(t))throw bx(),Error(se(418));for(;e;)wx(t,e),e=Mr(e.nextSibling)}if(Mm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(se(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Bn=Mr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Bn=null}}else Bn=zn?Mr(t.stateNode.nextSibling):null;return!0}function bx(){for(var t=Bn;t;)t=Mr(t.nextSibling)}function Ys(){Bn=zn=null,St=!1}function bf(t){ci===null?ci=[t]:ci.push(t)}var YS=Qi.ReactCurrentBatchConfig;function _a(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(se(309));var i=n.stateNode}if(!i)throw Error(se(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(se(284));if(!n._owner)throw Error(se(290,t))}return t}function Vo(t,e){throw t=Object.prototype.toString.call(e),Error(se(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Em(t){var e=t._init;return e(t._payload)}function Tx(t){function e(d,g){if(t){var y=d.deletions;y===null?(d.deletions=[g],d.flags|=16):y.push(g)}}function n(d,g){if(!t)return null;for(;g!==null;)e(d,g),g=g.sibling;return null}function i(d,g){for(d=new Map;g!==null;)g.key!==null?d.set(g.key,g):d.set(g.index,g),g=g.sibling;return d}function r(d,g){return d=Tr(d,g),d.index=0,d.sibling=null,d}function s(d,g,y){return d.index=y,t?(y=d.alternate,y!==null?(y=y.index,y<g?(d.flags|=2,g):y):(d.flags|=2,g)):(d.flags|=1048576,g)}function a(d){return t&&d.alternate===null&&(d.flags|=2),d}function o(d,g,y,M){return g===null||g.tag!==6?(g=wu(y,d.mode,M),g.return=d,g):(g=r(g,y),g.return=d,g)}function l(d,g,y,M){var A=y.type;return A===ws?h(d,g,y.props.children,M,y.key):g!==null&&(g.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===ur&&Em(A)===g.type)?(M=r(g,y.props),M.ref=_a(d,g,y),M.return=d,M):(M=Dl(y.type,y.key,y.props,null,d.mode,M),M.ref=_a(d,g,y),M.return=d,M)}function u(d,g,y,M){return g===null||g.tag!==4||g.stateNode.containerInfo!==y.containerInfo||g.stateNode.implementation!==y.implementation?(g=bu(y,d.mode,M),g.return=d,g):(g=r(g,y.children||[]),g.return=d,g)}function h(d,g,y,M,A){return g===null||g.tag!==7?(g=Kr(y,d.mode,M,A),g.return=d,g):(g=r(g,y),g.return=d,g)}function p(d,g,y){if(typeof g=="string"&&g!==""||typeof g=="number")return g=wu(""+g,d.mode,y),g.return=d,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Lo:return y=Dl(g.type,g.key,g.props,null,d.mode,y),y.ref=_a(d,null,g),y.return=d,y;case Es:return g=bu(g,d.mode,y),g.return=d,g;case ur:var M=g._init;return p(d,M(g._payload),y)}if(La(g)||pa(g))return g=Kr(g,d.mode,y,null),g.return=d,g;Vo(d,g)}return null}function f(d,g,y,M){var A=g!==null?g.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return A!==null?null:o(d,g,""+y,M);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Lo:return y.key===A?l(d,g,y,M):null;case Es:return y.key===A?u(d,g,y,M):null;case ur:return A=y._init,f(d,g,A(y._payload),M)}if(La(y)||pa(y))return A!==null?null:h(d,g,y,M,null);Vo(d,y)}return null}function m(d,g,y,M,A){if(typeof M=="string"&&M!==""||typeof M=="number")return d=d.get(y)||null,o(g,d,""+M,A);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case Lo:return d=d.get(M.key===null?y:M.key)||null,l(g,d,M,A);case Es:return d=d.get(M.key===null?y:M.key)||null,u(g,d,M,A);case ur:var T=M._init;return m(d,g,y,T(M._payload),A)}if(La(M)||pa(M))return d=d.get(y)||null,h(g,d,M,A,null);Vo(g,M)}return null}function _(d,g,y,M){for(var A=null,T=null,v=g,b=g=0,I=null;v!==null&&b<y.length;b++){v.index>b?(I=v,v=null):I=v.sibling;var R=f(d,v,y[b],M);if(R===null){v===null&&(v=I);break}t&&v&&R.alternate===null&&e(d,v),g=s(R,g,b),T===null?A=R:T.sibling=R,T=R,v=I}if(b===y.length)return n(d,v),St&&Vr(d,b),A;if(v===null){for(;b<y.length;b++)v=p(d,y[b],M),v!==null&&(g=s(v,g,b),T===null?A=v:T.sibling=v,T=v);return St&&Vr(d,b),A}for(v=i(d,v);b<y.length;b++)I=m(v,d,b,y[b],M),I!==null&&(t&&I.alternate!==null&&v.delete(I.key===null?b:I.key),g=s(I,g,b),T===null?A=I:T.sibling=I,T=I);return t&&v.forEach(function(D){return e(d,D)}),St&&Vr(d,b),A}function S(d,g,y,M){var A=pa(y);if(typeof A!="function")throw Error(se(150));if(y=A.call(y),y==null)throw Error(se(151));for(var T=A=null,v=g,b=g=0,I=null,R=y.next();v!==null&&!R.done;b++,R=y.next()){v.index>b?(I=v,v=null):I=v.sibling;var D=f(d,v,R.value,M);if(D===null){v===null&&(v=I);break}t&&v&&D.alternate===null&&e(d,v),g=s(D,g,b),T===null?A=D:T.sibling=D,T=D,v=I}if(R.done)return n(d,v),St&&Vr(d,b),A;if(v===null){for(;!R.done;b++,R=y.next())R=p(d,R.value,M),R!==null&&(g=s(R,g,b),T===null?A=R:T.sibling=R,T=R);return St&&Vr(d,b),A}for(v=i(d,v);!R.done;b++,R=y.next())R=m(v,d,b,R.value,M),R!==null&&(t&&R.alternate!==null&&v.delete(R.key===null?b:R.key),g=s(R,g,b),T===null?A=R:T.sibling=R,T=R);return t&&v.forEach(function(U){return e(d,U)}),St&&Vr(d,b),A}function x(d,g,y,M){if(typeof y=="object"&&y!==null&&y.type===ws&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Lo:e:{for(var A=y.key,T=g;T!==null;){if(T.key===A){if(A=y.type,A===ws){if(T.tag===7){n(d,T.sibling),g=r(T,y.props.children),g.return=d,d=g;break e}}else if(T.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===ur&&Em(A)===T.type){n(d,T.sibling),g=r(T,y.props),g.ref=_a(d,T,y),g.return=d,d=g;break e}n(d,T);break}else e(d,T);T=T.sibling}y.type===ws?(g=Kr(y.props.children,d.mode,M,y.key),g.return=d,d=g):(M=Dl(y.type,y.key,y.props,null,d.mode,M),M.ref=_a(d,g,y),M.return=d,d=M)}return a(d);case Es:e:{for(T=y.key;g!==null;){if(g.key===T)if(g.tag===4&&g.stateNode.containerInfo===y.containerInfo&&g.stateNode.implementation===y.implementation){n(d,g.sibling),g=r(g,y.children||[]),g.return=d,d=g;break e}else{n(d,g);break}else e(d,g);g=g.sibling}g=bu(y,d.mode,M),g.return=d,d=g}return a(d);case ur:return T=y._init,x(d,g,T(y._payload),M)}if(La(y))return _(d,g,y,M);if(pa(y))return S(d,g,y,M);Vo(d,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,g!==null&&g.tag===6?(n(d,g.sibling),g=r(g,y),g.return=d,d=g):(n(d,g),g=wu(y,d.mode,M),g.return=d,d=g),a(d)):n(d,g)}return x}var $s=Tx(!0),Ax=Tx(!1),ac=Dr(null),oc=null,Ls=null,Tf=null;function Af(){Tf=Ls=oc=null}function Cf(t){var e=ac.current;_t(ac),t._currentValue=e}function Bd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function zs(t,e){oc=t,Tf=Ls=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(An=!0),t.firstContext=null)}function Qn(t){var e=t._currentValue;if(Tf!==t)if(t={context:t,memoizedValue:e,next:null},Ls===null){if(oc===null)throw Error(se(308));Ls=t,oc.dependencies={lanes:0,firstContext:t}}else Ls=Ls.next=t;return e}var Xr=null;function Rf(t){Xr===null?Xr=[t]:Xr.push(t)}function Cx(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Rf(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ki(t,i)}function Ki(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var dr=!1;function Nf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Rx(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Wi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Er(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,tt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ki(t,n)}return r=i.interleaved,r===null?(e.next=e,Rf(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ki(t,n)}function Al(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,mf(t,n)}}function wm(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function lc(t,e,n,i){var r=t.updateQueue;dr=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,u=l.next;l.next=null,a===null?s=u:a.next=u,a=l;var h=t.alternate;h!==null&&(h=h.updateQueue,o=h.lastBaseUpdate,o!==a&&(o===null?h.firstBaseUpdate=u:o.next=u,h.lastBaseUpdate=l))}if(s!==null){var p=r.baseState;a=0,h=u=l=null,o=s;do{var f=o.lane,m=o.eventTime;if((i&f)===f){h!==null&&(h=h.next={eventTime:m,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var _=t,S=o;switch(f=e,m=n,S.tag){case 1:if(_=S.payload,typeof _=="function"){p=_.call(m,p,f);break e}p=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=S.payload,f=typeof _=="function"?_.call(m,p,f):_,f==null)break e;p=At({},p,f);break e;case 2:dr=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[o]:f.push(o))}else m={eventTime:m,lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},h===null?(u=h=m,l=p):h=h.next=m,a|=f;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;f=o,o=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(h===null&&(l=p),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=h,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);ts|=a,t.lanes=a,t.memoizedState=p}}function bm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(se(191,r));r.call(i)}}}var bo={},wi=Dr(bo),oo=Dr(bo),lo=Dr(bo);function qr(t){if(t===bo)throw Error(se(174));return t}function Pf(t,e){switch(pt(lo,e),pt(oo,t),pt(wi,bo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:_d(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=_d(e,t)}_t(wi),pt(wi,e)}function Ks(){_t(wi),_t(oo),_t(lo)}function Nx(t){qr(lo.current);var e=qr(wi.current),n=_d(e,t.type);e!==n&&(pt(oo,t),pt(wi,n))}function Lf(t){oo.current===t&&(_t(wi),_t(oo))}var wt=Dr(0);function cc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var vu=[];function Df(){for(var t=0;t<vu.length;t++)vu[t]._workInProgressVersionPrimary=null;vu.length=0}var Cl=Qi.ReactCurrentDispatcher,_u=Qi.ReactCurrentBatchConfig,es=0,Tt=null,Ht=null,Yt=null,uc=!1,Wa=!1,co=0,$S=0;function an(){throw Error(se(321))}function If(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!pi(t[n],e[n]))return!1;return!0}function Uf(t,e,n,i,r,s){if(es=s,Tt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Cl.current=t===null||t.memoizedState===null?JS:eM,t=n(i,r),Wa){s=0;do{if(Wa=!1,co=0,25<=s)throw Error(se(301));s+=1,Yt=Ht=null,e.updateQueue=null,Cl.current=tM,t=n(i,r)}while(Wa)}if(Cl.current=dc,e=Ht!==null&&Ht.next!==null,es=0,Yt=Ht=Tt=null,uc=!1,e)throw Error(se(300));return t}function Of(){var t=co!==0;return co=0,t}function vi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Yt===null?Tt.memoizedState=Yt=t:Yt=Yt.next=t,Yt}function Jn(){if(Ht===null){var t=Tt.alternate;t=t!==null?t.memoizedState:null}else t=Ht.next;var e=Yt===null?Tt.memoizedState:Yt.next;if(e!==null)Yt=e,Ht=t;else{if(t===null)throw Error(se(310));Ht=t,t={memoizedState:Ht.memoizedState,baseState:Ht.baseState,baseQueue:Ht.baseQueue,queue:Ht.queue,next:null},Yt===null?Tt.memoizedState=Yt=t:Yt=Yt.next=t}return Yt}function uo(t,e){return typeof e=="function"?e(t):e}function yu(t){var e=Jn(),n=e.queue;if(n===null)throw Error(se(311));n.lastRenderedReducer=t;var i=Ht,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,u=s;do{var h=u.lane;if((es&h)===h)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var p={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(o=l=p,a=i):l=l.next=p,Tt.lanes|=h,ts|=h}u=u.next}while(u!==null&&u!==s);l===null?a=i:l.next=o,pi(i,e.memoizedState)||(An=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Tt.lanes|=s,ts|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Su(t){var e=Jn(),n=e.queue;if(n===null)throw Error(se(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);pi(s,e.memoizedState)||(An=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Px(){}function Lx(t,e){var n=Tt,i=Jn(),r=e(),s=!pi(i.memoizedState,r);if(s&&(i.memoizedState=r,An=!0),i=i.queue,Ff(Ux.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Yt!==null&&Yt.memoizedState.tag&1){if(n.flags|=2048,ho(9,Ix.bind(null,n,i,r,e),void 0,null),Kt===null)throw Error(se(349));es&30||Dx(n,e,r)}return r}function Dx(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Tt.updateQueue,e===null?(e={lastEffect:null,stores:null},Tt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Ix(t,e,n,i){e.value=n,e.getSnapshot=i,Ox(e)&&Fx(t)}function Ux(t,e,n){return n(function(){Ox(e)&&Fx(t)})}function Ox(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!pi(t,n)}catch{return!0}}function Fx(t){var e=Ki(t,1);e!==null&&fi(e,t,1,-1)}function Tm(t){var e=vi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:uo,lastRenderedState:t},e.queue=t,t=t.dispatch=QS.bind(null,Tt,t),[e.memoizedState,t]}function ho(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Tt.updateQueue,e===null?(e={lastEffect:null,stores:null},Tt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function kx(){return Jn().memoizedState}function Rl(t,e,n,i){var r=vi();Tt.flags|=t,r.memoizedState=ho(1|e,n,void 0,i===void 0?null:i)}function Ic(t,e,n,i){var r=Jn();i=i===void 0?null:i;var s=void 0;if(Ht!==null){var a=Ht.memoizedState;if(s=a.destroy,i!==null&&If(i,a.deps)){r.memoizedState=ho(e,n,s,i);return}}Tt.flags|=t,r.memoizedState=ho(1|e,n,s,i)}function Am(t,e){return Rl(8390656,8,t,e)}function Ff(t,e){return Ic(2048,8,t,e)}function Bx(t,e){return Ic(4,2,t,e)}function zx(t,e){return Ic(4,4,t,e)}function Hx(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Gx(t,e,n){return n=n!=null?n.concat([t]):null,Ic(4,4,Hx.bind(null,e,t),n)}function kf(){}function Vx(t,e){var n=Jn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&If(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function jx(t,e){var n=Jn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&If(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Wx(t,e,n){return es&21?(pi(n,e)||(n=K0(),Tt.lanes|=n,ts|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,An=!0),t.memoizedState=n)}function KS(t,e){var n=ct;ct=n!==0&&4>n?n:4,t(!0);var i=_u.transition;_u.transition={};try{t(!1),e()}finally{ct=n,_u.transition=i}}function Xx(){return Jn().memoizedState}function ZS(t,e,n){var i=br(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},qx(t))Yx(e,n);else if(n=Cx(t,e,n,i),n!==null){var r=xn();fi(n,t,i,r),$x(n,e,i)}}function QS(t,e,n){var i=br(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(qx(t))Yx(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,pi(o,a)){var l=e.interleaved;l===null?(r.next=r,Rf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Cx(t,e,r,i),n!==null&&(r=xn(),fi(n,t,i,r),$x(n,e,i))}}function qx(t){var e=t.alternate;return t===Tt||e!==null&&e===Tt}function Yx(t,e){Wa=uc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function $x(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,mf(t,n)}}var dc={readContext:Qn,useCallback:an,useContext:an,useEffect:an,useImperativeHandle:an,useInsertionEffect:an,useLayoutEffect:an,useMemo:an,useReducer:an,useRef:an,useState:an,useDebugValue:an,useDeferredValue:an,useTransition:an,useMutableSource:an,useSyncExternalStore:an,useId:an,unstable_isNewReconciler:!1},JS={readContext:Qn,useCallback:function(t,e){return vi().memoizedState=[t,e===void 0?null:e],t},useContext:Qn,useEffect:Am,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Rl(4194308,4,Hx.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Rl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Rl(4,2,t,e)},useMemo:function(t,e){var n=vi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=vi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=ZS.bind(null,Tt,t),[i.memoizedState,t]},useRef:function(t){var e=vi();return t={current:t},e.memoizedState=t},useState:Tm,useDebugValue:kf,useDeferredValue:function(t){return vi().memoizedState=t},useTransition:function(){var t=Tm(!1),e=t[0];return t=KS.bind(null,t[1]),vi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Tt,r=vi();if(St){if(n===void 0)throw Error(se(407));n=n()}else{if(n=e(),Kt===null)throw Error(se(349));es&30||Dx(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Am(Ux.bind(null,i,s,t),[t]),i.flags|=2048,ho(9,Ix.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=vi(),e=Kt.identifierPrefix;if(St){var n=Vi,i=Gi;n=(i&~(1<<32-hi(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=co++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=$S++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},eM={readContext:Qn,useCallback:Vx,useContext:Qn,useEffect:Ff,useImperativeHandle:Gx,useInsertionEffect:Bx,useLayoutEffect:zx,useMemo:jx,useReducer:yu,useRef:kx,useState:function(){return yu(uo)},useDebugValue:kf,useDeferredValue:function(t){var e=Jn();return Wx(e,Ht.memoizedState,t)},useTransition:function(){var t=yu(uo)[0],e=Jn().memoizedState;return[t,e]},useMutableSource:Px,useSyncExternalStore:Lx,useId:Xx,unstable_isNewReconciler:!1},tM={readContext:Qn,useCallback:Vx,useContext:Qn,useEffect:Ff,useImperativeHandle:Gx,useInsertionEffect:Bx,useLayoutEffect:zx,useMemo:jx,useReducer:Su,useRef:kx,useState:function(){return Su(uo)},useDebugValue:kf,useDeferredValue:function(t){var e=Jn();return Ht===null?e.memoizedState=t:Wx(e,Ht.memoizedState,t)},useTransition:function(){var t=Su(uo)[0],e=Jn().memoizedState;return[t,e]},useMutableSource:Px,useSyncExternalStore:Lx,useId:Xx,unstable_isNewReconciler:!1};function ai(t,e){if(t&&t.defaultProps){e=At({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function zd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:At({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Uc={isMounted:function(t){return(t=t._reactInternals)?os(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=xn(),r=br(t),s=Wi(i,r);s.payload=e,n!=null&&(s.callback=n),e=Er(t,s,r),e!==null&&(fi(e,t,r,i),Al(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=xn(),r=br(t),s=Wi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Er(t,s,r),e!==null&&(fi(e,t,r,i),Al(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=xn(),i=br(t),r=Wi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Er(t,r,i),e!==null&&(fi(e,t,i,n),Al(e,t,i))}};function Cm(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!io(n,i)||!io(r,s):!0}function Kx(t,e,n){var i=!1,r=Cr,s=e.contextType;return typeof s=="object"&&s!==null?s=Qn(s):(r=Nn(e)?Qr:hn.current,i=e.contextTypes,s=(i=i!=null)?qs(t,r):Cr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Uc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Rm(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Uc.enqueueReplaceState(e,e.state,null)}function Hd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Nf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Qn(s):(s=Nn(e)?Qr:hn.current,r.context=qs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(zd(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Uc.enqueueReplaceState(r,r.state,null),lc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Zs(t,e){try{var n="",i=e;do n+=Ry(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Mu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Gd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var nM=typeof WeakMap=="function"?WeakMap:Map;function Zx(t,e,n){n=Wi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){fc||(fc=!0,Qd=i),Gd(t,e)},n}function Qx(t,e,n){n=Wi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Gd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Gd(t,e),typeof i!="function"&&(wr===null?wr=new Set([this]):wr.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function Nm(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new nM;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=gM.bind(null,t,e,n),e.then(t,t))}function Pm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Lm(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Wi(-1,1),e.tag=2,Er(n,e,1))),n.lanes|=1),t)}var iM=Qi.ReactCurrentOwner,An=!1;function gn(t,e,n,i){e.child=t===null?Ax(e,null,n,i):$s(e,t.child,n,i)}function Dm(t,e,n,i,r){n=n.render;var s=e.ref;return zs(e,r),i=Uf(t,e,n,i,s,r),n=Of(),t!==null&&!An?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Zi(t,e,r)):(St&&n&&Ef(e),e.flags|=1,gn(t,e,i,r),e.child)}function Im(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Xf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Jx(t,e,s,i,r)):(t=Dl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:io,n(a,i)&&t.ref===e.ref)return Zi(t,e,r)}return e.flags|=1,t=Tr(s,i),t.ref=e.ref,t.return=e,e.child=t}function Jx(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(io(s,i)&&t.ref===e.ref)if(An=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(An=!0);else return e.lanes=t.lanes,Zi(t,e,r)}return Vd(t,e,n,i,r)}function ev(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},pt(Is,On),On|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,pt(Is,On),On|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,pt(Is,On),On|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,pt(Is,On),On|=i;return gn(t,e,r,n),e.child}function tv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Vd(t,e,n,i,r){var s=Nn(n)?Qr:hn.current;return s=qs(e,s),zs(e,r),n=Uf(t,e,n,i,s,r),i=Of(),t!==null&&!An?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Zi(t,e,r)):(St&&i&&Ef(e),e.flags|=1,gn(t,e,n,r),e.child)}function Um(t,e,n,i,r){if(Nn(n)){var s=!0;ic(e)}else s=!1;if(zs(e,r),e.stateNode===null)Nl(t,e),Kx(e,n,i),Hd(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=Qn(u):(u=Nn(n)?Qr:hn.current,u=qs(e,u));var h=n.getDerivedStateFromProps,p=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function";p||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==u)&&Rm(e,a,i,u),dr=!1;var f=e.memoizedState;a.state=f,lc(e,i,a,r),l=e.memoizedState,o!==i||f!==l||Rn.current||dr?(typeof h=="function"&&(zd(e,n,h,i),l=e.memoizedState),(o=dr||Cm(e,n,o,i,f,l,u))?(p||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=u,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,Rx(t,e),o=e.memoizedProps,u=e.type===e.elementType?o:ai(e.type,o),a.props=u,p=e.pendingProps,f=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=Qn(l):(l=Nn(n)?Qr:hn.current,l=qs(e,l));var m=n.getDerivedStateFromProps;(h=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==p||f!==l)&&Rm(e,a,i,l),dr=!1,f=e.memoizedState,a.state=f,lc(e,i,a,r);var _=e.memoizedState;o!==p||f!==_||Rn.current||dr?(typeof m=="function"&&(zd(e,n,m,i),_=e.memoizedState),(u=dr||Cm(e,n,u,i,f,_,l)||!1)?(h||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,_,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,_,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),a.props=i,a.state=_,a.context=l,i=u):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return jd(t,e,n,i,s,r)}function jd(t,e,n,i,r,s){tv(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&ym(e,n,!1),Zi(t,e,s);i=e.stateNode,iM.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=$s(e,t.child,null,s),e.child=$s(e,null,o,s)):gn(t,e,o,s),e.memoizedState=i.state,r&&ym(e,n,!0),e.child}function nv(t){var e=t.stateNode;e.pendingContext?_m(t,e.pendingContext,e.pendingContext!==e.context):e.context&&_m(t,e.context,!1),Pf(t,e.containerInfo)}function Om(t,e,n,i,r){return Ys(),bf(r),e.flags|=256,gn(t,e,n,i),e.child}var Wd={dehydrated:null,treeContext:null,retryLane:0};function Xd(t){return{baseLanes:t,cachePool:null,transitions:null}}function iv(t,e,n){var i=e.pendingProps,r=wt.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),pt(wt,r&1),t===null)return kd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=kc(a,i,0,null),t=Kr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Xd(n),e.memoizedState=Wd,t):Bf(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return rM(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Tr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=Tr(o,s):(s=Kr(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?Xd(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=Wd,i}return s=t.child,t=s.sibling,i=Tr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Bf(t,e){return e=kc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function jo(t,e,n,i){return i!==null&&bf(i),$s(e,t.child,null,n),t=Bf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function rM(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=Mu(Error(se(422))),jo(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=kc({mode:"visible",children:i.children},r,0,null),s=Kr(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&$s(e,t.child,null,a),e.child.memoizedState=Xd(a),e.memoizedState=Wd,s);if(!(e.mode&1))return jo(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(se(419)),i=Mu(s,i,void 0),jo(t,e,a,i)}if(o=(a&t.childLanes)!==0,An||o){if(i=Kt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ki(t,r),fi(i,t,r,-1))}return Wf(),i=Mu(Error(se(421))),jo(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=xM.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Bn=Mr(r.nextSibling),zn=e,St=!0,ci=null,t!==null&&(Xn[qn++]=Gi,Xn[qn++]=Vi,Xn[qn++]=Jr,Gi=t.id,Vi=t.overflow,Jr=e),e=Bf(e,i.children),e.flags|=4096,e)}function Fm(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Bd(t.return,e,n)}function Eu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function rv(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(gn(t,e,i.children,n),i=wt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Fm(t,n,e);else if(t.tag===19)Fm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(pt(wt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&cc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Eu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&cc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Eu(e,!0,n,null,s);break;case"together":Eu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Nl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Zi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ts|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(se(153));if(e.child!==null){for(t=e.child,n=Tr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Tr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function sM(t,e,n){switch(e.tag){case 3:nv(e),Ys();break;case 5:Nx(e);break;case 1:Nn(e.type)&&ic(e);break;case 4:Pf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;pt(ac,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(pt(wt,wt.current&1),e.flags|=128,null):n&e.child.childLanes?iv(t,e,n):(pt(wt,wt.current&1),t=Zi(t,e,n),t!==null?t.sibling:null);pt(wt,wt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return rv(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),pt(wt,wt.current),i)break;return null;case 22:case 23:return e.lanes=0,ev(t,e,n)}return Zi(t,e,n)}var sv,qd,av,ov;sv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};qd=function(){};av=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,qr(wi.current);var s=null;switch(n){case"input":r=md(t,r),i=md(t,i),s=[];break;case"select":r=At({},r,{value:void 0}),i=At({},i,{value:void 0}),s=[];break;case"textarea":r=vd(t,r),i=vd(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=tc)}yd(n,i);var a;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var o=r[u];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ka.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(o=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==o&&(l!=null||o!=null))if(u==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ka.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&vt("scroll",t),s||o===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};ov=function(t,e,n,i){n!==i&&(e.flags|=4)};function ya(t,e){if(!St)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function on(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function aM(t,e,n){var i=e.pendingProps;switch(wf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return on(e),null;case 1:return Nn(e.type)&&nc(),on(e),null;case 3:return i=e.stateNode,Ks(),_t(Rn),_t(hn),Df(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Go(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ci!==null&&(th(ci),ci=null))),qd(t,e),on(e),null;case 5:Lf(e);var r=qr(lo.current);if(n=e.type,t!==null&&e.stateNode!=null)av(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(se(166));return on(e),null}if(t=qr(wi.current),Go(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[yi]=e,i[ao]=s,t=(e.mode&1)!==0,n){case"dialog":vt("cancel",i),vt("close",i);break;case"iframe":case"object":case"embed":vt("load",i);break;case"video":case"audio":for(r=0;r<Ia.length;r++)vt(Ia[r],i);break;case"source":vt("error",i);break;case"img":case"image":case"link":vt("error",i),vt("load",i);break;case"details":vt("toggle",i);break;case"input":Xp(i,s),vt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},vt("invalid",i);break;case"textarea":Yp(i,s),vt("invalid",i)}yd(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&Ho(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&Ho(i.textContent,o,t),r=["children",""+o]):Ka.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&vt("scroll",i)}switch(n){case"input":Do(i),qp(i,s,!0);break;case"textarea":Do(i),$p(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=tc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=U0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[yi]=e,t[ao]=i,sv(t,e,!1,!1),e.stateNode=t;e:{switch(a=Sd(n,i),n){case"dialog":vt("cancel",t),vt("close",t),r=i;break;case"iframe":case"object":case"embed":vt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Ia.length;r++)vt(Ia[r],t);r=i;break;case"source":vt("error",t),r=i;break;case"img":case"image":case"link":vt("error",t),vt("load",t),r=i;break;case"details":vt("toggle",t),r=i;break;case"input":Xp(t,i),r=md(t,i),vt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=At({},i,{value:void 0}),vt("invalid",t);break;case"textarea":Yp(t,i),r=vd(t,i),vt("invalid",t);break;default:r=i}yd(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?k0(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&O0(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Za(t,l):typeof l=="number"&&Za(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ka.hasOwnProperty(s)?l!=null&&s==="onScroll"&&vt("scroll",t):l!=null&&cf(t,s,l,a))}switch(n){case"input":Do(t),qp(t,i,!1);break;case"textarea":Do(t),$p(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Ar(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Os(t,!!i.multiple,s,!1):i.defaultValue!=null&&Os(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=tc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return on(e),null;case 6:if(t&&e.stateNode!=null)ov(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(se(166));if(n=qr(lo.current),qr(wi.current),Go(e)){if(i=e.stateNode,n=e.memoizedProps,i[yi]=e,(s=i.nodeValue!==n)&&(t=zn,t!==null))switch(t.tag){case 3:Ho(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ho(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[yi]=e,e.stateNode=i}return on(e),null;case 13:if(_t(wt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(St&&Bn!==null&&e.mode&1&&!(e.flags&128))bx(),Ys(),e.flags|=98560,s=!1;else if(s=Go(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(se(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(se(317));s[yi]=e}else Ys(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;on(e),s=!1}else ci!==null&&(th(ci),ci=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||wt.current&1?Gt===0&&(Gt=3):Wf())),e.updateQueue!==null&&(e.flags|=4),on(e),null);case 4:return Ks(),qd(t,e),t===null&&ro(e.stateNode.containerInfo),on(e),null;case 10:return Cf(e.type._context),on(e),null;case 17:return Nn(e.type)&&nc(),on(e),null;case 19:if(_t(wt),s=e.memoizedState,s===null)return on(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)ya(s,!1);else{if(Gt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=cc(t),a!==null){for(e.flags|=128,ya(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return pt(wt,wt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Pt()>Qs&&(e.flags|=128,i=!0,ya(s,!1),e.lanes=4194304)}else{if(!i)if(t=cc(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ya(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!St)return on(e),null}else 2*Pt()-s.renderingStartTime>Qs&&n!==1073741824&&(e.flags|=128,i=!0,ya(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Pt(),e.sibling=null,n=wt.current,pt(wt,i?n&1|2:n&1),e):(on(e),null);case 22:case 23:return jf(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?On&1073741824&&(on(e),e.subtreeFlags&6&&(e.flags|=8192)):on(e),null;case 24:return null;case 25:return null}throw Error(se(156,e.tag))}function oM(t,e){switch(wf(e),e.tag){case 1:return Nn(e.type)&&nc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ks(),_t(Rn),_t(hn),Df(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Lf(e),null;case 13:if(_t(wt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(se(340));Ys()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return _t(wt),null;case 4:return Ks(),null;case 10:return Cf(e.type._context),null;case 22:case 23:return jf(),null;case 24:return null;default:return null}}var Wo=!1,un=!1,lM=typeof WeakSet=="function"?WeakSet:Set,Me=null;function Ds(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Ct(t,e,i)}else n.current=null}function Yd(t,e,n){try{n()}catch(i){Ct(t,e,i)}}var km=!1;function cM(t,e){if(Pd=Ql,t=hx(),Mf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,u=0,h=0,p=t,f=null;t:for(;;){for(var m;p!==n||r!==0&&p.nodeType!==3||(o=a+r),p!==s||i!==0&&p.nodeType!==3||(l=a+i),p.nodeType===3&&(a+=p.nodeValue.length),(m=p.firstChild)!==null;)f=p,p=m;for(;;){if(p===t)break t;if(f===n&&++u===r&&(o=a),f===s&&++h===i&&(l=a),(m=p.nextSibling)!==null)break;p=f,f=p.parentNode}p=m}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ld={focusedElem:t,selectionRange:n},Ql=!1,Me=e;Me!==null;)if(e=Me,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Me=t;else for(;Me!==null;){e=Me;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var S=_.memoizedProps,x=_.memoizedState,d=e.stateNode,g=d.getSnapshotBeforeUpdate(e.elementType===e.type?S:ai(e.type,S),x);d.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(se(163))}}catch(M){Ct(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,Me=t;break}Me=e.return}return _=km,km=!1,_}function Xa(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Yd(e,n,s)}r=r.next}while(r!==i)}}function Oc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function $d(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function lv(t){var e=t.alternate;e!==null&&(t.alternate=null,lv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[yi],delete e[ao],delete e[Ud],delete e[WS],delete e[XS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function cv(t){return t.tag===5||t.tag===3||t.tag===4}function Bm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||cv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Kd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=tc));else if(i!==4&&(t=t.child,t!==null))for(Kd(t,e,n),t=t.sibling;t!==null;)Kd(t,e,n),t=t.sibling}function Zd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Zd(t,e,n),t=t.sibling;t!==null;)Zd(t,e,n),t=t.sibling}var Qt=null,oi=!1;function tr(t,e,n){for(n=n.child;n!==null;)uv(t,e,n),n=n.sibling}function uv(t,e,n){if(Ei&&typeof Ei.onCommitFiberUnmount=="function")try{Ei.onCommitFiberUnmount(Cc,n)}catch{}switch(n.tag){case 5:un||Ds(n,e);case 6:var i=Qt,r=oi;Qt=null,tr(t,e,n),Qt=i,oi=r,Qt!==null&&(oi?(t=Qt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Qt.removeChild(n.stateNode));break;case 18:Qt!==null&&(oi?(t=Qt,n=n.stateNode,t.nodeType===8?gu(t.parentNode,n):t.nodeType===1&&gu(t,n),to(t)):gu(Qt,n.stateNode));break;case 4:i=Qt,r=oi,Qt=n.stateNode.containerInfo,oi=!0,tr(t,e,n),Qt=i,oi=r;break;case 0:case 11:case 14:case 15:if(!un&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&Yd(n,e,a),r=r.next}while(r!==i)}tr(t,e,n);break;case 1:if(!un&&(Ds(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){Ct(n,e,o)}tr(t,e,n);break;case 21:tr(t,e,n);break;case 22:n.mode&1?(un=(i=un)||n.memoizedState!==null,tr(t,e,n),un=i):tr(t,e,n);break;default:tr(t,e,n)}}function zm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new lM),e.forEach(function(i){var r=vM.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function ni(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Qt=o.stateNode,oi=!1;break e;case 3:Qt=o.stateNode.containerInfo,oi=!0;break e;case 4:Qt=o.stateNode.containerInfo,oi=!0;break e}o=o.return}if(Qt===null)throw Error(se(160));uv(s,a,r),Qt=null,oi=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){Ct(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)dv(e,t),e=e.sibling}function dv(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ni(e,t),mi(t),i&4){try{Xa(3,t,t.return),Oc(3,t)}catch(S){Ct(t,t.return,S)}try{Xa(5,t,t.return)}catch(S){Ct(t,t.return,S)}}break;case 1:ni(e,t),mi(t),i&512&&n!==null&&Ds(n,n.return);break;case 5:if(ni(e,t),mi(t),i&512&&n!==null&&Ds(n,n.return),t.flags&32){var r=t.stateNode;try{Za(r,"")}catch(S){Ct(t,t.return,S)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&D0(r,s),Sd(o,a);var u=Sd(o,s);for(a=0;a<l.length;a+=2){var h=l[a],p=l[a+1];h==="style"?k0(r,p):h==="dangerouslySetInnerHTML"?O0(r,p):h==="children"?Za(r,p):cf(r,h,p,u)}switch(o){case"input":gd(r,s);break;case"textarea":I0(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?Os(r,!!s.multiple,m,!1):f!==!!s.multiple&&(s.defaultValue!=null?Os(r,!!s.multiple,s.defaultValue,!0):Os(r,!!s.multiple,s.multiple?[]:"",!1))}r[ao]=s}catch(S){Ct(t,t.return,S)}}break;case 6:if(ni(e,t),mi(t),i&4){if(t.stateNode===null)throw Error(se(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(S){Ct(t,t.return,S)}}break;case 3:if(ni(e,t),mi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{to(e.containerInfo)}catch(S){Ct(t,t.return,S)}break;case 4:ni(e,t),mi(t);break;case 13:ni(e,t),mi(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Gf=Pt())),i&4&&zm(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(un=(u=un)||h,ni(e,t),un=u):ni(e,t),mi(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!h&&t.mode&1)for(Me=t,h=t.child;h!==null;){for(p=Me=h;Me!==null;){switch(f=Me,m=f.child,f.tag){case 0:case 11:case 14:case 15:Xa(4,f,f.return);break;case 1:Ds(f,f.return);var _=f.stateNode;if(typeof _.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(S){Ct(i,n,S)}}break;case 5:Ds(f,f.return);break;case 22:if(f.memoizedState!==null){Gm(p);continue}}m!==null?(m.return=f,Me=m):Gm(p)}h=h.sibling}e:for(h=null,p=t;;){if(p.tag===5){if(h===null){h=p;try{r=p.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=p.stateNode,l=p.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=F0("display",a))}catch(S){Ct(t,t.return,S)}}}else if(p.tag===6){if(h===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(S){Ct(t,t.return,S)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;h===p&&(h=null),p=p.return}h===p&&(h=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:ni(e,t),mi(t),i&4&&zm(t);break;case 21:break;default:ni(e,t),mi(t)}}function mi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(cv(n)){var i=n;break e}n=n.return}throw Error(se(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Za(r,""),i.flags&=-33);var s=Bm(t);Zd(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=Bm(t);Kd(t,o,a);break;default:throw Error(se(161))}}catch(l){Ct(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function uM(t,e,n){Me=t,hv(t)}function hv(t,e,n){for(var i=(t.mode&1)!==0;Me!==null;){var r=Me,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||Wo;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||un;o=Wo;var u=un;if(Wo=a,(un=l)&&!u)for(Me=r;Me!==null;)a=Me,l=a.child,a.tag===22&&a.memoizedState!==null?Vm(r):l!==null?(l.return=a,Me=l):Vm(r);for(;s!==null;)Me=s,hv(s),s=s.sibling;Me=r,Wo=o,un=u}Hm(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Me=s):Hm(t)}}function Hm(t){for(;Me!==null;){var e=Me;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:un||Oc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!un)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:ai(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&bm(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}bm(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var p=h.dehydrated;p!==null&&to(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(se(163))}un||e.flags&512&&$d(e)}catch(f){Ct(e,e.return,f)}}if(e===t){Me=null;break}if(n=e.sibling,n!==null){n.return=e.return,Me=n;break}Me=e.return}}function Gm(t){for(;Me!==null;){var e=Me;if(e===t){Me=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Me=n;break}Me=e.return}}function Vm(t){for(;Me!==null;){var e=Me;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Oc(4,e)}catch(l){Ct(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Ct(e,r,l)}}var s=e.return;try{$d(e)}catch(l){Ct(e,s,l)}break;case 5:var a=e.return;try{$d(e)}catch(l){Ct(e,a,l)}}}catch(l){Ct(e,e.return,l)}if(e===t){Me=null;break}var o=e.sibling;if(o!==null){o.return=e.return,Me=o;break}Me=e.return}}var dM=Math.ceil,hc=Qi.ReactCurrentDispatcher,zf=Qi.ReactCurrentOwner,Zn=Qi.ReactCurrentBatchConfig,tt=0,Kt=null,Ot=null,en=0,On=0,Is=Dr(0),Gt=0,fo=null,ts=0,Fc=0,Hf=0,qa=null,bn=null,Gf=0,Qs=1/0,ki=null,fc=!1,Qd=null,wr=null,Xo=!1,gr=null,pc=0,Ya=0,Jd=null,Pl=-1,Ll=0;function xn(){return tt&6?Pt():Pl!==-1?Pl:Pl=Pt()}function br(t){return t.mode&1?tt&2&&en!==0?en&-en:YS.transition!==null?(Ll===0&&(Ll=K0()),Ll):(t=ct,t!==0||(t=window.event,t=t===void 0?16:ix(t.type)),t):1}function fi(t,e,n,i){if(50<Ya)throw Ya=0,Jd=null,Error(se(185));Mo(t,n,i),(!(tt&2)||t!==Kt)&&(t===Kt&&(!(tt&2)&&(Fc|=n),Gt===4&&fr(t,en)),Pn(t,i),n===1&&tt===0&&!(e.mode&1)&&(Qs=Pt()+500,Dc&&Ir()))}function Pn(t,e){var n=t.callbackNode;Yy(t,e);var i=Zl(t,t===Kt?en:0);if(i===0)n!==null&&Qp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Qp(n),e===1)t.tag===0?qS(jm.bind(null,t)):Mx(jm.bind(null,t)),VS(function(){!(tt&6)&&Ir()}),n=null;else{switch(Z0(i)){case 1:n=pf;break;case 4:n=Y0;break;case 16:n=Kl;break;case 536870912:n=$0;break;default:n=Kl}n=yv(n,fv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function fv(t,e){if(Pl=-1,Ll=0,tt&6)throw Error(se(327));var n=t.callbackNode;if(Hs()&&t.callbackNode!==n)return null;var i=Zl(t,t===Kt?en:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=mc(t,i);else{e=i;var r=tt;tt|=2;var s=mv();(Kt!==t||en!==e)&&(ki=null,Qs=Pt()+500,$r(t,e));do try{pM();break}catch(o){pv(t,o)}while(!0);Af(),hc.current=s,tt=r,Ot!==null?e=0:(Kt=null,en=0,e=Gt)}if(e!==0){if(e===2&&(r=Td(t),r!==0&&(i=r,e=eh(t,r))),e===1)throw n=fo,$r(t,0),fr(t,i),Pn(t,Pt()),n;if(e===6)fr(t,i);else{if(r=t.current.alternate,!(i&30)&&!hM(r)&&(e=mc(t,i),e===2&&(s=Td(t),s!==0&&(i=s,e=eh(t,s))),e===1))throw n=fo,$r(t,0),fr(t,i),Pn(t,Pt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(se(345));case 2:jr(t,bn,ki);break;case 3:if(fr(t,i),(i&130023424)===i&&(e=Gf+500-Pt(),10<e)){if(Zl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){xn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Id(jr.bind(null,t,bn,ki),e);break}jr(t,bn,ki);break;case 4:if(fr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-hi(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=Pt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*dM(i/1960))-i,10<i){t.timeoutHandle=Id(jr.bind(null,t,bn,ki),i);break}jr(t,bn,ki);break;case 5:jr(t,bn,ki);break;default:throw Error(se(329))}}}return Pn(t,Pt()),t.callbackNode===n?fv.bind(null,t):null}function eh(t,e){var n=qa;return t.current.memoizedState.isDehydrated&&($r(t,e).flags|=256),t=mc(t,e),t!==2&&(e=bn,bn=n,e!==null&&th(e)),t}function th(t){bn===null?bn=t:bn.push.apply(bn,t)}function hM(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!pi(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function fr(t,e){for(e&=~Hf,e&=~Fc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-hi(e),i=1<<n;t[n]=-1,e&=~i}}function jm(t){if(tt&6)throw Error(se(327));Hs();var e=Zl(t,0);if(!(e&1))return Pn(t,Pt()),null;var n=mc(t,e);if(t.tag!==0&&n===2){var i=Td(t);i!==0&&(e=i,n=eh(t,i))}if(n===1)throw n=fo,$r(t,0),fr(t,e),Pn(t,Pt()),n;if(n===6)throw Error(se(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,jr(t,bn,ki),Pn(t,Pt()),null}function Vf(t,e){var n=tt;tt|=1;try{return t(e)}finally{tt=n,tt===0&&(Qs=Pt()+500,Dc&&Ir())}}function ns(t){gr!==null&&gr.tag===0&&!(tt&6)&&Hs();var e=tt;tt|=1;var n=Zn.transition,i=ct;try{if(Zn.transition=null,ct=1,t)return t()}finally{ct=i,Zn.transition=n,tt=e,!(tt&6)&&Ir()}}function jf(){On=Is.current,_t(Is)}function $r(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,GS(n)),Ot!==null)for(n=Ot.return;n!==null;){var i=n;switch(wf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&nc();break;case 3:Ks(),_t(Rn),_t(hn),Df();break;case 5:Lf(i);break;case 4:Ks();break;case 13:_t(wt);break;case 19:_t(wt);break;case 10:Cf(i.type._context);break;case 22:case 23:jf()}n=n.return}if(Kt=t,Ot=t=Tr(t.current,null),en=On=e,Gt=0,fo=null,Hf=Fc=ts=0,bn=qa=null,Xr!==null){for(e=0;e<Xr.length;e++)if(n=Xr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}Xr=null}return t}function pv(t,e){do{var n=Ot;try{if(Af(),Cl.current=dc,uc){for(var i=Tt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}uc=!1}if(es=0,Yt=Ht=Tt=null,Wa=!1,co=0,zf.current=null,n===null||n.return===null){Gt=1,fo=e,Ot=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=en,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,h=o,p=h.tag;if(!(h.mode&1)&&(p===0||p===11||p===15)){var f=h.alternate;f?(h.updateQueue=f.updateQueue,h.memoizedState=f.memoizedState,h.lanes=f.lanes):(h.updateQueue=null,h.memoizedState=null)}var m=Pm(a);if(m!==null){m.flags&=-257,Lm(m,a,o,s,e),m.mode&1&&Nm(s,u,e),e=m,l=u;var _=e.updateQueue;if(_===null){var S=new Set;S.add(l),e.updateQueue=S}else _.add(l);break e}else{if(!(e&1)){Nm(s,u,e),Wf();break e}l=Error(se(426))}}else if(St&&o.mode&1){var x=Pm(a);if(x!==null){!(x.flags&65536)&&(x.flags|=256),Lm(x,a,o,s,e),bf(Zs(l,o));break e}}s=l=Zs(l,o),Gt!==4&&(Gt=2),qa===null?qa=[s]:qa.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=Zx(s,l,e);wm(s,d);break e;case 1:o=l;var g=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(wr===null||!wr.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=Qx(s,o,e);wm(s,M);break e}}s=s.return}while(s!==null)}xv(n)}catch(A){e=A,Ot===n&&n!==null&&(Ot=n=n.return);continue}break}while(!0)}function mv(){var t=hc.current;return hc.current=dc,t===null?dc:t}function Wf(){(Gt===0||Gt===3||Gt===2)&&(Gt=4),Kt===null||!(ts&268435455)&&!(Fc&268435455)||fr(Kt,en)}function mc(t,e){var n=tt;tt|=2;var i=mv();(Kt!==t||en!==e)&&(ki=null,$r(t,e));do try{fM();break}catch(r){pv(t,r)}while(!0);if(Af(),tt=n,hc.current=i,Ot!==null)throw Error(se(261));return Kt=null,en=0,Gt}function fM(){for(;Ot!==null;)gv(Ot)}function pM(){for(;Ot!==null&&!By();)gv(Ot)}function gv(t){var e=_v(t.alternate,t,On);t.memoizedProps=t.pendingProps,e===null?xv(t):Ot=e,zf.current=null}function xv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=oM(n,e),n!==null){n.flags&=32767,Ot=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Gt=6,Ot=null;return}}else if(n=aM(n,e,On),n!==null){Ot=n;return}if(e=e.sibling,e!==null){Ot=e;return}Ot=e=t}while(e!==null);Gt===0&&(Gt=5)}function jr(t,e,n){var i=ct,r=Zn.transition;try{Zn.transition=null,ct=1,mM(t,e,n,i)}finally{Zn.transition=r,ct=i}return null}function mM(t,e,n,i){do Hs();while(gr!==null);if(tt&6)throw Error(se(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(se(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if($y(t,s),t===Kt&&(Ot=Kt=null,en=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Xo||(Xo=!0,yv(Kl,function(){return Hs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Zn.transition,Zn.transition=null;var a=ct;ct=1;var o=tt;tt|=4,zf.current=null,cM(t,n),dv(n,t),US(Ld),Ql=!!Pd,Ld=Pd=null,t.current=n,uM(n),zy(),tt=o,ct=a,Zn.transition=s}else t.current=n;if(Xo&&(Xo=!1,gr=t,pc=r),s=t.pendingLanes,s===0&&(wr=null),Vy(n.stateNode),Pn(t,Pt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(fc)throw fc=!1,t=Qd,Qd=null,t;return pc&1&&t.tag!==0&&Hs(),s=t.pendingLanes,s&1?t===Jd?Ya++:(Ya=0,Jd=t):Ya=0,Ir(),null}function Hs(){if(gr!==null){var t=Z0(pc),e=Zn.transition,n=ct;try{if(Zn.transition=null,ct=16>t?16:t,gr===null)var i=!1;else{if(t=gr,gr=null,pc=0,tt&6)throw Error(se(331));var r=tt;for(tt|=4,Me=t.current;Me!==null;){var s=Me,a=s.child;if(Me.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var u=o[l];for(Me=u;Me!==null;){var h=Me;switch(h.tag){case 0:case 11:case 15:Xa(8,h,s)}var p=h.child;if(p!==null)p.return=h,Me=p;else for(;Me!==null;){h=Me;var f=h.sibling,m=h.return;if(lv(h),h===u){Me=null;break}if(f!==null){f.return=m,Me=f;break}Me=m}}}var _=s.alternate;if(_!==null){var S=_.child;if(S!==null){_.child=null;do{var x=S.sibling;S.sibling=null,S=x}while(S!==null)}}Me=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,Me=a;else e:for(;Me!==null;){if(s=Me,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Xa(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,Me=d;break e}Me=s.return}}var g=t.current;for(Me=g;Me!==null;){a=Me;var y=a.child;if(a.subtreeFlags&2064&&y!==null)y.return=a,Me=y;else e:for(a=g;Me!==null;){if(o=Me,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Oc(9,o)}}catch(A){Ct(o,o.return,A)}if(o===a){Me=null;break e}var M=o.sibling;if(M!==null){M.return=o.return,Me=M;break e}Me=o.return}}if(tt=r,Ir(),Ei&&typeof Ei.onPostCommitFiberRoot=="function")try{Ei.onPostCommitFiberRoot(Cc,t)}catch{}i=!0}return i}finally{ct=n,Zn.transition=e}}return!1}function Wm(t,e,n){e=Zs(n,e),e=Zx(t,e,1),t=Er(t,e,1),e=xn(),t!==null&&(Mo(t,1,e),Pn(t,e))}function Ct(t,e,n){if(t.tag===3)Wm(t,t,n);else for(;e!==null;){if(e.tag===3){Wm(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(wr===null||!wr.has(i))){t=Zs(n,t),t=Qx(e,t,1),e=Er(e,t,1),t=xn(),e!==null&&(Mo(e,1,t),Pn(e,t));break}}e=e.return}}function gM(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=xn(),t.pingedLanes|=t.suspendedLanes&n,Kt===t&&(en&n)===n&&(Gt===4||Gt===3&&(en&130023424)===en&&500>Pt()-Gf?$r(t,0):Hf|=n),Pn(t,e)}function vv(t,e){e===0&&(t.mode&1?(e=Oo,Oo<<=1,!(Oo&130023424)&&(Oo=4194304)):e=1);var n=xn();t=Ki(t,e),t!==null&&(Mo(t,e,n),Pn(t,n))}function xM(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),vv(t,n)}function vM(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(se(314))}i!==null&&i.delete(e),vv(t,n)}var _v;_v=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Rn.current)An=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return An=!1,sM(t,e,n);An=!!(t.flags&131072)}else An=!1,St&&e.flags&1048576&&Ex(e,sc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Nl(t,e),t=e.pendingProps;var r=qs(e,hn.current);zs(e,n),r=Uf(null,e,i,t,r,n);var s=Of();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Nn(i)?(s=!0,ic(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Nf(e),r.updater=Uc,e.stateNode=r,r._reactInternals=e,Hd(e,i,t,n),e=jd(null,e,i,!0,s,n)):(e.tag=0,St&&s&&Ef(e),gn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Nl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=yM(i),t=ai(i,t),r){case 0:e=Vd(null,e,i,t,n);break e;case 1:e=Um(null,e,i,t,n);break e;case 11:e=Dm(null,e,i,t,n);break e;case 14:e=Im(null,e,i,ai(i.type,t),n);break e}throw Error(se(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ai(i,r),Vd(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ai(i,r),Um(t,e,i,r,n);case 3:e:{if(nv(e),t===null)throw Error(se(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Rx(t,e),lc(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Zs(Error(se(423)),e),e=Om(t,e,i,n,r);break e}else if(i!==r){r=Zs(Error(se(424)),e),e=Om(t,e,i,n,r);break e}else for(Bn=Mr(e.stateNode.containerInfo.firstChild),zn=e,St=!0,ci=null,n=Ax(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ys(),i===r){e=Zi(t,e,n);break e}gn(t,e,i,n)}e=e.child}return e;case 5:return Nx(e),t===null&&kd(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,Dd(i,r)?a=null:s!==null&&Dd(i,s)&&(e.flags|=32),tv(t,e),gn(t,e,a,n),e.child;case 6:return t===null&&kd(e),null;case 13:return iv(t,e,n);case 4:return Pf(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=$s(e,null,i,n):gn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ai(i,r),Dm(t,e,i,r,n);case 7:return gn(t,e,e.pendingProps,n),e.child;case 8:return gn(t,e,e.pendingProps.children,n),e.child;case 12:return gn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,pt(ac,i._currentValue),i._currentValue=a,s!==null)if(pi(s.value,a)){if(s.children===r.children&&!Rn.current){e=Zi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Wi(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?l.next=l:(l.next=h.next,h.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Bd(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(se(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),Bd(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}gn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,zs(e,n),r=Qn(r),i=i(r),e.flags|=1,gn(t,e,i,n),e.child;case 14:return i=e.type,r=ai(i,e.pendingProps),r=ai(i.type,r),Im(t,e,i,r,n);case 15:return Jx(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ai(i,r),Nl(t,e),e.tag=1,Nn(i)?(t=!0,ic(e)):t=!1,zs(e,n),Kx(e,i,r),Hd(e,i,r,n),jd(null,e,i,!0,t,n);case 19:return rv(t,e,n);case 22:return ev(t,e,n)}throw Error(se(156,e.tag))};function yv(t,e){return q0(t,e)}function _M(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kn(t,e,n,i){return new _M(t,e,n,i)}function Xf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function yM(t){if(typeof t=="function")return Xf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===df)return 11;if(t===hf)return 14}return 2}function Tr(t,e){var n=t.alternate;return n===null?(n=Kn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Dl(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")Xf(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case ws:return Kr(n.children,r,s,e);case uf:a=8,r|=8;break;case dd:return t=Kn(12,n,e,r|2),t.elementType=dd,t.lanes=s,t;case hd:return t=Kn(13,n,e,r),t.elementType=hd,t.lanes=s,t;case fd:return t=Kn(19,n,e,r),t.elementType=fd,t.lanes=s,t;case N0:return kc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case C0:a=10;break e;case R0:a=9;break e;case df:a=11;break e;case hf:a=14;break e;case ur:a=16,i=null;break e}throw Error(se(130,t==null?t:typeof t,""))}return e=Kn(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Kr(t,e,n,i){return t=Kn(7,t,i,e),t.lanes=n,t}function kc(t,e,n,i){return t=Kn(22,t,i,e),t.elementType=N0,t.lanes=n,t.stateNode={isHidden:!1},t}function wu(t,e,n){return t=Kn(6,t,null,e),t.lanes=n,t}function bu(t,e,n){return e=Kn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function SM(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=su(0),this.expirationTimes=su(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=su(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function qf(t,e,n,i,r,s,a,o,l){return t=new SM(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Kn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Nf(s),t}function MM(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Es,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Sv(t){if(!t)return Cr;t=t._reactInternals;e:{if(os(t)!==t||t.tag!==1)throw Error(se(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Nn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(se(171))}if(t.tag===1){var n=t.type;if(Nn(n))return Sx(t,n,e)}return e}function Mv(t,e,n,i,r,s,a,o,l){return t=qf(n,i,!0,t,r,s,a,o,l),t.context=Sv(null),n=t.current,i=xn(),r=br(n),s=Wi(i,r),s.callback=e??null,Er(n,s,r),t.current.lanes=r,Mo(t,r,i),Pn(t,i),t}function Bc(t,e,n,i){var r=e.current,s=xn(),a=br(r);return n=Sv(n),e.context===null?e.context=n:e.pendingContext=n,e=Wi(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Er(r,e,a),t!==null&&(fi(t,r,a,s),Al(t,r,a)),a}function gc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Xm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Yf(t,e){Xm(t,e),(t=t.alternate)&&Xm(t,e)}function EM(){return null}var Ev=typeof reportError=="function"?reportError:function(t){console.error(t)};function $f(t){this._internalRoot=t}zc.prototype.render=$f.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(se(409));Bc(t,e,null,null)};zc.prototype.unmount=$f.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ns(function(){Bc(null,t,null,null)}),e[$i]=null}};function zc(t){this._internalRoot=t}zc.prototype.unstable_scheduleHydration=function(t){if(t){var e=ex();t={blockedOn:null,target:t,priority:e};for(var n=0;n<hr.length&&e!==0&&e<hr[n].priority;n++);hr.splice(n,0,t),n===0&&nx(t)}};function Kf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Hc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function qm(){}function wM(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=gc(a);s.call(u)}}var a=Mv(e,i,t,0,null,!1,!1,"",qm);return t._reactRootContainer=a,t[$i]=a.current,ro(t.nodeType===8?t.parentNode:t),ns(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var u=gc(l);o.call(u)}}var l=qf(t,0,!1,null,null,!1,!1,"",qm);return t._reactRootContainer=l,t[$i]=l.current,ro(t.nodeType===8?t.parentNode:t),ns(function(){Bc(e,l,n,i)}),l}function Gc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=gc(a);o.call(l)}}Bc(e,a,t,r)}else a=wM(n,e,t,r,i);return gc(a)}Q0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Da(e.pendingLanes);n!==0&&(mf(e,n|1),Pn(e,Pt()),!(tt&6)&&(Qs=Pt()+500,Ir()))}break;case 13:ns(function(){var i=Ki(t,1);if(i!==null){var r=xn();fi(i,t,1,r)}}),Yf(t,1)}};gf=function(t){if(t.tag===13){var e=Ki(t,134217728);if(e!==null){var n=xn();fi(e,t,134217728,n)}Yf(t,134217728)}};J0=function(t){if(t.tag===13){var e=br(t),n=Ki(t,e);if(n!==null){var i=xn();fi(n,t,e,i)}Yf(t,e)}};ex=function(){return ct};tx=function(t,e){var n=ct;try{return ct=t,e()}finally{ct=n}};Ed=function(t,e,n){switch(e){case"input":if(gd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Lc(i);if(!r)throw Error(se(90));L0(i),gd(i,r)}}}break;case"textarea":I0(t,n);break;case"select":e=n.value,e!=null&&Os(t,!!n.multiple,e,!1)}};H0=Vf;G0=ns;var bM={usingClientEntryPoint:!1,Events:[wo,Cs,Lc,B0,z0,Vf]},Sa={findFiberByHostInstance:Wr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},TM={bundleType:Sa.bundleType,version:Sa.version,rendererPackageName:Sa.rendererPackageName,rendererConfig:Sa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Qi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=W0(t),t===null?null:t.stateNode},findFiberByHostInstance:Sa.findFiberByHostInstance||EM,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var qo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!qo.isDisabled&&qo.supportsFiber)try{Cc=qo.inject(TM),Ei=qo}catch{}}Gn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=bM;Gn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Kf(e))throw Error(se(200));return MM(t,e,null,n)};Gn.createRoot=function(t,e){if(!Kf(t))throw Error(se(299));var n=!1,i="",r=Ev;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=qf(t,1,!1,null,null,n,!1,i,r),t[$i]=e.current,ro(t.nodeType===8?t.parentNode:t),new $f(e)};Gn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(se(188)):(t=Object.keys(t).join(","),Error(se(268,t)));return t=W0(e),t=t===null?null:t.stateNode,t};Gn.flushSync=function(t){return ns(t)};Gn.hydrate=function(t,e,n){if(!Hc(e))throw Error(se(200));return Gc(null,t,e,!0,n)};Gn.hydrateRoot=function(t,e,n){if(!Kf(t))throw Error(se(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=Ev;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=Mv(e,null,t,1,n??null,r,!1,s,a),t[$i]=e.current,ro(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new zc(e)};Gn.render=function(t,e,n){if(!Hc(e))throw Error(se(200));return Gc(null,t,e,!1,n)};Gn.unmountComponentAtNode=function(t){if(!Hc(t))throw Error(se(40));return t._reactRootContainer?(ns(function(){Gc(null,null,t,!1,function(){t._reactRootContainer=null,t[$i]=null})}),!0):!1};Gn.unstable_batchedUpdates=Vf;Gn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Hc(n))throw Error(se(200));if(t==null||t._reactInternals===void 0)throw Error(se(38));return Gc(t,e,n,!1,i)};Gn.version="18.3.1-next-f1338f8080-20240426";function wv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(wv)}catch(t){console.error(t)}}wv(),w0.exports=Gn;var AM=w0.exports,Ym=AM;cd.createRoot=Ym.createRoot,cd.hydrateRoot=Ym.hydrateRoot;/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CM=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),bv=(...t)=>t.filter((e,n,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var RM={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NM=ke.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:r="",children:s,iconNode:a,...o},l)=>ke.createElement("svg",{ref:l,...RM,width:e,height:e,stroke:t,strokeWidth:i?Number(n)*24/Number(e):n,className:bv("lucide",r),...o},[...a.map(([u,h])=>ke.createElement(u,h)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const st=(t,e)=>{const n=ke.forwardRef(({className:i,...r},s)=>ke.createElement(NM,{ref:s,iconNode:e,className:bv(`lucide-${CM(t)}`,i),...r}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PM=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],Zf=st("Activity",PM);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LM=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],DM=st("ArrowLeft",LM);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IM=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Tv=st("ArrowRight",IM);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UM=[["path",{d:"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",key:"5owen"}],["circle",{cx:"7",cy:"17",r:"2",key:"u2ysq9"}],["path",{d:"M9 17h6",key:"r8uit2"}],["circle",{cx:"17",cy:"17",r:"2",key:"axvx0g"}]],po=st("Car",UM);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OM=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],FM=st("ChevronRight",OM);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kM=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],Av=st("CircleAlert",kM);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BM=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Vc=st("CircleCheck",BM);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zM=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["rect",{x:"9",y:"9",width:"6",height:"6",rx:"1",key:"1ssd4o"}]],HM=st("CircleStop",zM);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GM=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]],Cv=st("Clock",GM);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VM=[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]],Rv=st("CreditCard",VM);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jM=[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]],WM=st("DollarSign",jM);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XM=[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]],qM=st("Filter",XM);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YM=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],$M=st("Info",YM);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KM=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],Qf=st("Layers",KM);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZM=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],Jf=st("MapPin",ZM);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QM=[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]],JM=st("Menu",QM);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eE=[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]],tE=st("Moon",eE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nE=[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]],iE=st("Palette",nE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rE=[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]],sE=st("Play",rE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aE=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],oE=st("RefreshCw",aE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lE=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]],xc=st("Search",lE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cE=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]],uE=st("ShieldAlert",cE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dE=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],ep=st("ShieldCheck",dE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hE=[["line",{x1:"4",x2:"4",y1:"21",y2:"14",key:"1p332r"}],["line",{x1:"4",x2:"4",y1:"10",y2:"3",key:"gb41h5"}],["line",{x1:"12",x2:"12",y1:"21",y2:"12",key:"hf2csr"}],["line",{x1:"12",x2:"12",y1:"8",y2:"3",key:"1kfi7u"}],["line",{x1:"20",x2:"20",y1:"21",y2:"16",key:"1lhrwl"}],["line",{x1:"20",x2:"20",y1:"12",y2:"3",key:"16vvfq"}],["line",{x1:"2",x2:"6",y1:"14",y2:"14",key:"1uebub"}],["line",{x1:"10",x2:"14",y1:"8",y2:"8",key:"1yglbp"}],["line",{x1:"18",x2:"22",y1:"16",y2:"16",key:"1jxqpz"}]],$m=st("SlidersVertical",hE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fE=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],la=st("Sparkles",fE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pE=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],Nv=st("Star",pE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mE=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],gE=st("Sun",mE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xE=[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]],vE=st("Terminal",xE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _E=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],yE=st("User",_E);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SE=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],tp=st("X",SE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ME=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],$t=st("Zap",ME);function Pv(t){var e,n,i="";if(typeof t=="string"||typeof t=="number")i+=t;else if(typeof t=="object")if(Array.isArray(t)){var r=t.length;for(e=0;e<r;e++)t[e]&&(n=Pv(t[e]))&&(i&&(i+=" "),i+=n)}else for(n in t)t[n]&&(i&&(i+=" "),i+=n);return i}function EE(){for(var t,e,n=0,i="",r=arguments.length;n<r;n++)(t=arguments[n])&&(e=Pv(t))&&(i&&(i+=" "),i+=e);return i}const np="-",wE=t=>{const e=TE(t),{conflictingClassGroups:n,conflictingClassGroupModifiers:i}=t;return{getClassGroupId:a=>{const o=a.split(np);return o[0]===""&&o.length!==1&&o.shift(),Lv(o,e)||bE(a)},getConflictingClassGroupIds:(a,o)=>{const l=n[a]||[];return o&&i[a]?[...l,...i[a]]:l}}},Lv=(t,e)=>{var a;if(t.length===0)return e.classGroupId;const n=t[0],i=e.nextPart.get(n),r=i?Lv(t.slice(1),i):void 0;if(r)return r;if(e.validators.length===0)return;const s=t.join(np);return(a=e.validators.find(({validator:o})=>o(s)))==null?void 0:a.classGroupId},Km=/^\[(.+)\]$/,bE=t=>{if(Km.test(t)){const e=Km.exec(t)[1],n=e==null?void 0:e.substring(0,e.indexOf(":"));if(n)return"arbitrary.."+n}},TE=t=>{const{theme:e,prefix:n}=t,i={nextPart:new Map,validators:[]};return CE(Object.entries(t.classGroups),n).forEach(([s,a])=>{nh(a,i,s,e)}),i},nh=(t,e,n,i)=>{t.forEach(r=>{if(typeof r=="string"){const s=r===""?e:Zm(e,r);s.classGroupId=n;return}if(typeof r=="function"){if(AE(r)){nh(r(i),e,n,i);return}e.validators.push({validator:r,classGroupId:n});return}Object.entries(r).forEach(([s,a])=>{nh(a,Zm(e,s),n,i)})})},Zm=(t,e)=>{let n=t;return e.split(np).forEach(i=>{n.nextPart.has(i)||n.nextPart.set(i,{nextPart:new Map,validators:[]}),n=n.nextPart.get(i)}),n},AE=t=>t.isThemeGetter,CE=(t,e)=>e?t.map(([n,i])=>{const r=i.map(s=>typeof s=="string"?e+s:typeof s=="object"?Object.fromEntries(Object.entries(s).map(([a,o])=>[e+a,o])):s);return[n,r]}):t,RE=t=>{if(t<1)return{get:()=>{},set:()=>{}};let e=0,n=new Map,i=new Map;const r=(s,a)=>{n.set(s,a),e++,e>t&&(e=0,i=n,n=new Map)};return{get(s){let a=n.get(s);if(a!==void 0)return a;if((a=i.get(s))!==void 0)return r(s,a),a},set(s,a){n.has(s)?n.set(s,a):r(s,a)}}},Dv="!",NE=t=>{const{separator:e,experimentalParseClassName:n}=t,i=e.length===1,r=e[0],s=e.length,a=o=>{const l=[];let u=0,h=0,p;for(let x=0;x<o.length;x++){let d=o[x];if(u===0){if(d===r&&(i||o.slice(x,x+s)===e)){l.push(o.slice(h,x)),h=x+s;continue}if(d==="/"){p=x;continue}}d==="["?u++:d==="]"&&u--}const f=l.length===0?o:o.substring(h),m=f.startsWith(Dv),_=m?f.substring(1):f,S=p&&p>h?p-h:void 0;return{modifiers:l,hasImportantModifier:m,baseClassName:_,maybePostfixModifierPosition:S}};return n?o=>n({className:o,parseClassName:a}):a},PE=t=>{if(t.length<=1)return t;const e=[];let n=[];return t.forEach(i=>{i[0]==="["?(e.push(...n.sort(),i),n=[]):n.push(i)}),e.push(...n.sort()),e},LE=t=>({cache:RE(t.cacheSize),parseClassName:NE(t),...wE(t)}),DE=/\s+/,IE=(t,e)=>{const{parseClassName:n,getClassGroupId:i,getConflictingClassGroupIds:r}=e,s=[],a=t.trim().split(DE);let o="";for(let l=a.length-1;l>=0;l-=1){const u=a[l],{modifiers:h,hasImportantModifier:p,baseClassName:f,maybePostfixModifierPosition:m}=n(u);let _=!!m,S=i(_?f.substring(0,m):f);if(!S){if(!_){o=u+(o.length>0?" "+o:o);continue}if(S=i(f),!S){o=u+(o.length>0?" "+o:o);continue}_=!1}const x=PE(h).join(":"),d=p?x+Dv:x,g=d+S;if(s.includes(g))continue;s.push(g);const y=r(S,_);for(let M=0;M<y.length;++M){const A=y[M];s.push(d+A)}o=u+(o.length>0?" "+o:o)}return o};function UE(){let t=0,e,n,i="";for(;t<arguments.length;)(e=arguments[t++])&&(n=Iv(e))&&(i&&(i+=" "),i+=n);return i}const Iv=t=>{if(typeof t=="string")return t;let e,n="";for(let i=0;i<t.length;i++)t[i]&&(e=Iv(t[i]))&&(n&&(n+=" "),n+=e);return n};function OE(t,...e){let n,i,r,s=a;function a(l){const u=e.reduce((h,p)=>p(h),t());return n=LE(u),i=n.cache.get,r=n.cache.set,s=o,o(l)}function o(l){const u=i(l);if(u)return u;const h=IE(l,n);return r(l,h),h}return function(){return s(UE.apply(null,arguments))}}const xt=t=>{const e=n=>n[t]||[];return e.isThemeGetter=!0,e},Uv=/^\[(?:([a-z-]+):)?(.+)\]$/i,FE=/^\d+\/\d+$/,kE=new Set(["px","full","screen"]),BE=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,zE=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,HE=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,GE=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,VE=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Li=t=>Gs(t)||kE.has(t)||FE.test(t),nr=t=>ca(t,"length",ZE),Gs=t=>!!t&&!Number.isNaN(Number(t)),Tu=t=>ca(t,"number",Gs),Ma=t=>!!t&&Number.isInteger(Number(t)),jE=t=>t.endsWith("%")&&Gs(t.slice(0,-1)),He=t=>Uv.test(t),ir=t=>BE.test(t),WE=new Set(["length","size","percentage"]),XE=t=>ca(t,WE,Ov),qE=t=>ca(t,"position",Ov),YE=new Set(["image","url"]),$E=t=>ca(t,YE,JE),KE=t=>ca(t,"",QE),Ea=()=>!0,ca=(t,e,n)=>{const i=Uv.exec(t);return i?i[1]?typeof e=="string"?i[1]===e:e.has(i[1]):n(i[2]):!1},ZE=t=>zE.test(t)&&!HE.test(t),Ov=()=>!1,QE=t=>GE.test(t),JE=t=>VE.test(t),ew=()=>{const t=xt("colors"),e=xt("spacing"),n=xt("blur"),i=xt("brightness"),r=xt("borderColor"),s=xt("borderRadius"),a=xt("borderSpacing"),o=xt("borderWidth"),l=xt("contrast"),u=xt("grayscale"),h=xt("hueRotate"),p=xt("invert"),f=xt("gap"),m=xt("gradientColorStops"),_=xt("gradientColorStopPositions"),S=xt("inset"),x=xt("margin"),d=xt("opacity"),g=xt("padding"),y=xt("saturate"),M=xt("scale"),A=xt("sepia"),T=xt("skew"),v=xt("space"),b=xt("translate"),I=()=>["auto","contain","none"],R=()=>["auto","hidden","clip","visible","scroll"],D=()=>["auto",He,e],U=()=>[He,e],X=()=>["",Li,nr],P=()=>["auto",Gs,He],W=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],$=()=>["solid","dashed","dotted","double","none"],z=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],k=()=>["start","end","center","between","around","evenly","stretch"],F=()=>["","0",He],j=()=>["auto","avoid","all","avoid-page","page","left","right","column"],Y=()=>[Gs,He];return{cacheSize:500,separator:":",theme:{colors:[Ea],spacing:[Li,nr],blur:["none","",ir,He],brightness:Y(),borderColor:[t],borderRadius:["none","","full",ir,He],borderSpacing:U(),borderWidth:X(),contrast:Y(),grayscale:F(),hueRotate:Y(),invert:F(),gap:U(),gradientColorStops:[t],gradientColorStopPositions:[jE,nr],inset:D(),margin:D(),opacity:Y(),padding:U(),saturate:Y(),scale:Y(),sepia:F(),skew:Y(),space:U(),translate:U()},classGroups:{aspect:[{aspect:["auto","square","video",He]}],container:["container"],columns:[{columns:[ir]}],"break-after":[{"break-after":j()}],"break-before":[{"break-before":j()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...W(),He]}],overflow:[{overflow:R()}],"overflow-x":[{"overflow-x":R()}],"overflow-y":[{"overflow-y":R()}],overscroll:[{overscroll:I()}],"overscroll-x":[{"overscroll-x":I()}],"overscroll-y":[{"overscroll-y":I()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[S]}],"inset-x":[{"inset-x":[S]}],"inset-y":[{"inset-y":[S]}],start:[{start:[S]}],end:[{end:[S]}],top:[{top:[S]}],right:[{right:[S]}],bottom:[{bottom:[S]}],left:[{left:[S]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",Ma,He]}],basis:[{basis:D()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",He]}],grow:[{grow:F()}],shrink:[{shrink:F()}],order:[{order:["first","last","none",Ma,He]}],"grid-cols":[{"grid-cols":[Ea]}],"col-start-end":[{col:["auto",{span:["full",Ma,He]},He]}],"col-start":[{"col-start":P()}],"col-end":[{"col-end":P()}],"grid-rows":[{"grid-rows":[Ea]}],"row-start-end":[{row:["auto",{span:[Ma,He]},He]}],"row-start":[{"row-start":P()}],"row-end":[{"row-end":P()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",He]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",He]}],gap:[{gap:[f]}],"gap-x":[{"gap-x":[f]}],"gap-y":[{"gap-y":[f]}],"justify-content":[{justify:["normal",...k()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...k(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...k(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[g]}],px:[{px:[g]}],py:[{py:[g]}],ps:[{ps:[g]}],pe:[{pe:[g]}],pt:[{pt:[g]}],pr:[{pr:[g]}],pb:[{pb:[g]}],pl:[{pl:[g]}],m:[{m:[x]}],mx:[{mx:[x]}],my:[{my:[x]}],ms:[{ms:[x]}],me:[{me:[x]}],mt:[{mt:[x]}],mr:[{mr:[x]}],mb:[{mb:[x]}],ml:[{ml:[x]}],"space-x":[{"space-x":[v]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[v]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",He,e]}],"min-w":[{"min-w":[He,e,"min","max","fit"]}],"max-w":[{"max-w":[He,e,"none","full","min","max","fit","prose",{screen:[ir]},ir]}],h:[{h:[He,e,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[He,e,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[He,e,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[He,e,"auto","min","max","fit"]}],"font-size":[{text:["base",ir,nr]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",Tu]}],"font-family":[{font:[Ea]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",He]}],"line-clamp":[{"line-clamp":["none",Gs,Tu]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",Li,He]}],"list-image":[{"list-image":["none",He]}],"list-style-type":[{list:["none","disc","decimal",He]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[t]}],"placeholder-opacity":[{"placeholder-opacity":[d]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[t]}],"text-opacity":[{"text-opacity":[d]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...$(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",Li,nr]}],"underline-offset":[{"underline-offset":["auto",Li,He]}],"text-decoration-color":[{decoration:[t]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:U()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",He]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",He]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[d]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...W(),qE]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",XE]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},$E]}],"bg-color":[{bg:[t]}],"gradient-from-pos":[{from:[_]}],"gradient-via-pos":[{via:[_]}],"gradient-to-pos":[{to:[_]}],"gradient-from":[{from:[m]}],"gradient-via":[{via:[m]}],"gradient-to":[{to:[m]}],rounded:[{rounded:[s]}],"rounded-s":[{"rounded-s":[s]}],"rounded-e":[{"rounded-e":[s]}],"rounded-t":[{"rounded-t":[s]}],"rounded-r":[{"rounded-r":[s]}],"rounded-b":[{"rounded-b":[s]}],"rounded-l":[{"rounded-l":[s]}],"rounded-ss":[{"rounded-ss":[s]}],"rounded-se":[{"rounded-se":[s]}],"rounded-ee":[{"rounded-ee":[s]}],"rounded-es":[{"rounded-es":[s]}],"rounded-tl":[{"rounded-tl":[s]}],"rounded-tr":[{"rounded-tr":[s]}],"rounded-br":[{"rounded-br":[s]}],"rounded-bl":[{"rounded-bl":[s]}],"border-w":[{border:[o]}],"border-w-x":[{"border-x":[o]}],"border-w-y":[{"border-y":[o]}],"border-w-s":[{"border-s":[o]}],"border-w-e":[{"border-e":[o]}],"border-w-t":[{"border-t":[o]}],"border-w-r":[{"border-r":[o]}],"border-w-b":[{"border-b":[o]}],"border-w-l":[{"border-l":[o]}],"border-opacity":[{"border-opacity":[d]}],"border-style":[{border:[...$(),"hidden"]}],"divide-x":[{"divide-x":[o]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[o]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[d]}],"divide-style":[{divide:$()}],"border-color":[{border:[r]}],"border-color-x":[{"border-x":[r]}],"border-color-y":[{"border-y":[r]}],"border-color-s":[{"border-s":[r]}],"border-color-e":[{"border-e":[r]}],"border-color-t":[{"border-t":[r]}],"border-color-r":[{"border-r":[r]}],"border-color-b":[{"border-b":[r]}],"border-color-l":[{"border-l":[r]}],"divide-color":[{divide:[r]}],"outline-style":[{outline:["",...$()]}],"outline-offset":[{"outline-offset":[Li,He]}],"outline-w":[{outline:[Li,nr]}],"outline-color":[{outline:[t]}],"ring-w":[{ring:X()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[t]}],"ring-opacity":[{"ring-opacity":[d]}],"ring-offset-w":[{"ring-offset":[Li,nr]}],"ring-offset-color":[{"ring-offset":[t]}],shadow:[{shadow:["","inner","none",ir,KE]}],"shadow-color":[{shadow:[Ea]}],opacity:[{opacity:[d]}],"mix-blend":[{"mix-blend":[...z(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":z()}],filter:[{filter:["","none"]}],blur:[{blur:[n]}],brightness:[{brightness:[i]}],contrast:[{contrast:[l]}],"drop-shadow":[{"drop-shadow":["","none",ir,He]}],grayscale:[{grayscale:[u]}],"hue-rotate":[{"hue-rotate":[h]}],invert:[{invert:[p]}],saturate:[{saturate:[y]}],sepia:[{sepia:[A]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[n]}],"backdrop-brightness":[{"backdrop-brightness":[i]}],"backdrop-contrast":[{"backdrop-contrast":[l]}],"backdrop-grayscale":[{"backdrop-grayscale":[u]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[h]}],"backdrop-invert":[{"backdrop-invert":[p]}],"backdrop-opacity":[{"backdrop-opacity":[d]}],"backdrop-saturate":[{"backdrop-saturate":[y]}],"backdrop-sepia":[{"backdrop-sepia":[A]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[a]}],"border-spacing-x":[{"border-spacing-x":[a]}],"border-spacing-y":[{"border-spacing-y":[a]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",He]}],duration:[{duration:Y()}],ease:[{ease:["linear","in","out","in-out",He]}],delay:[{delay:Y()}],animate:[{animate:["none","spin","ping","pulse","bounce",He]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[M]}],"scale-x":[{"scale-x":[M]}],"scale-y":[{"scale-y":[M]}],rotate:[{rotate:[Ma,He]}],"translate-x":[{"translate-x":[b]}],"translate-y":[{"translate-y":[b]}],"skew-x":[{"skew-x":[T]}],"skew-y":[{"skew-y":[T]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",He]}],accent:[{accent:["auto",t]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",He]}],"caret-color":[{caret:[t]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":U()}],"scroll-mx":[{"scroll-mx":U()}],"scroll-my":[{"scroll-my":U()}],"scroll-ms":[{"scroll-ms":U()}],"scroll-me":[{"scroll-me":U()}],"scroll-mt":[{"scroll-mt":U()}],"scroll-mr":[{"scroll-mr":U()}],"scroll-mb":[{"scroll-mb":U()}],"scroll-ml":[{"scroll-ml":U()}],"scroll-p":[{"scroll-p":U()}],"scroll-px":[{"scroll-px":U()}],"scroll-py":[{"scroll-py":U()}],"scroll-ps":[{"scroll-ps":U()}],"scroll-pe":[{"scroll-pe":U()}],"scroll-pt":[{"scroll-pt":U()}],"scroll-pr":[{"scroll-pr":U()}],"scroll-pb":[{"scroll-pb":U()}],"scroll-pl":[{"scroll-pl":U()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",He]}],fill:[{fill:[t,"none"]}],"stroke-w":[{stroke:[Li,nr,Tu]}],stroke:[{stroke:[t,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},tw=OE(ew);function ei(...t){return tw(EE(t))}const et=So.forwardRef(({children:t,className:e,variant:n="primary",size:i="md",isLoading:r=!1,disabled:s=!1,icon:a,iconRight:o,...l},u)=>{const h="inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#080C14] disabled:opacity-50 disabled:pointer-events-none select-none",p={primary:"bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/35 focus:ring-emerald-400",secondary:"bg-slate-800 hover:bg-slate-700 text-slate-100 border border-slate-700/60 shadow-sm focus:ring-slate-500",neon:"bg-emerald-500/10 text-emerald-400 border border-emerald-500/40 hover:bg-emerald-500/20 hover:border-emerald-400 shadow-glow-emerald focus:ring-emerald-400",outline:"bg-transparent text-slate-300 border border-slate-700 hover:bg-slate-800/60 hover:text-white focus:ring-slate-600",ghost:"bg-transparent text-slate-400 hover:text-slate-100 hover:bg-slate-800/40 focus:ring-slate-700",danger:"bg-rose-500/15 text-rose-400 border border-rose-500/30 hover:bg-rose-500/25 hover:border-rose-400 shadow-sm focus:ring-rose-400"},f={sm:"text-xs px-3 py-1.5 gap-1.5",md:"text-sm px-4 py-2.5 gap-2",lg:"text-base px-6 py-3.5 gap-2.5"};return c.jsx("button",{ref:u,disabled:s||r,className:ei(h,p[n],f[i],e),...l,children:r?c.jsxs(c.Fragment,{children:[c.jsxs("svg",{className:"animate-spin -ml-1 mr-2 h-4 w-4 text-current",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[c.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),c.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),c.jsx("span",{children:"Processing..."})]}):c.jsxs(c.Fragment,{children:[a&&c.jsx("span",{className:"inline-flex shrink-0",children:a}),c.jsx("span",{children:t}),o&&c.jsx("span",{className:"inline-flex shrink-0",children:o})]})})});et.displayName="Button";const Et=({children:t,variant:e="emerald",size:n="md",dot:i=!1,className:r,...s})=>{const a="inline-flex items-center font-medium rounded-full transition-colors select-none",o={emerald:"bg-emerald-500/15 text-emerald-400 border border-emerald-500/30",cyan:"bg-cyan-500/15 text-cyan-400 border border-cyan-500/30",amber:"bg-amber-500/15 text-amber-400 border border-amber-500/30",rose:"bg-rose-500/15 text-rose-400 border border-rose-500/30",slate:"bg-slate-800 text-slate-300 border border-slate-700",glass:"bg-white/5 backdrop-blur-md text-slate-200 border border-white/10"},l={emerald:"bg-emerald-400",cyan:"bg-cyan-400",amber:"bg-amber-400",rose:"bg-rose-400",slate:"bg-slate-400",glass:"bg-white"},u={sm:"text-[11px] px-2 py-0.5 gap-1.5",md:"text-xs px-2.5 py-1 gap-2",lg:"text-sm px-3.5 py-1.5 gap-2"};return c.jsxs("span",{className:ei(a,o[e],u[n],r),...s,children:[i&&c.jsx("span",{className:ei("h-1.5 w-1.5 rounded-full animate-pulse",l[e]||"bg-current")}),t]})},nw=({currentView:t,onOpenAuth:e,onNavigate:n})=>{const[i,r]=ke.useState(!1),s=[{id:"home",label:"3D City Twin"},{id:"explore",label:"Explore Hubs"},{id:"charging",label:"EV Telemetry",icon:c.jsx($t,{className:"w-3 h-3 text-cyan-400"})},{id:"admin",label:"Admin Grid"},{id:"design-system",label:"Design Tokens"}];return c.jsxs("header",{className:"sticky top-0 z-40 w-full border-b border-white/[0.08] bg-[#080C14]/85 backdrop-blur-xl transition-all",children:[c.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between",children:[c.jsxs("div",{onClick:()=>n==null?void 0:n("home"),className:"flex items-center gap-2.5 cursor-pointer group",children:[c.jsx("div",{className:"h-10 w-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-cyan-400 p-[1.5px] shadow-glow-emerald group-hover:scale-105 transition-transform duration-200",children:c.jsx("div",{className:"h-full w-full bg-[#080C14] rounded-[10px] flex items-center justify-center",children:c.jsx($t,{className:"h-5 w-5 text-emerald-400 fill-emerald-400/20 group-hover:text-emerald-300 transition-colors"})})}),c.jsxs("div",{children:[c.jsxs("div",{className:"flex items-center gap-1.5",children:[c.jsxs("span",{className:"font-extrabold text-xl tracking-tight text-white",children:["PARK",c.jsx("span",{className:"text-emerald-400",children:"VOLT"})]}),c.jsx("span",{className:"text-[10px] uppercase font-mono tracking-widest px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",children:"v1.0"})]}),c.jsx("p",{className:"text-[10px] text-slate-400 font-medium tracking-wide",children:"SMART PARKING & EV INFRASTRUCTURE"})]})]}),c.jsx("nav",{className:"hidden md:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-white/[0.06] backdrop-blur-md",children:s.map(a=>c.jsxs("button",{onClick:()=>n==null?void 0:n(a.id),className:`px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all flex items-center gap-1.5 ${t===a.id?"bg-emerald-500 text-slate-950 font-bold shadow-md":"text-slate-300 hover:text-white hover:bg-white/[0.06]"}`,children:[a.icon,c.jsx("span",{children:a.label})]},a.id))}),c.jsxs("div",{className:"hidden lg:flex items-center gap-3",children:[c.jsx(Et,{variant:"emerald",size:"sm",dot:!0,children:"Socket Gateway Online"}),c.jsx(et,{variant:"outline",size:"sm",icon:c.jsx(yE,{className:"w-4 h-4 text-slate-400"}),onClick:()=>e==null?void 0:e("login"),children:"Alex (DL 01 EV)"}),c.jsx(et,{variant:"primary",size:"sm",icon:c.jsx(la,{className:"w-4 h-4"}),onClick:()=>n==null?void 0:n("explore"),children:"Find Slots"})]}),c.jsx("div",{className:"flex md:hidden items-center gap-2",children:c.jsx("button",{type:"button",onClick:()=>r(!i),className:"p-2 rounded-xl text-slate-400 hover:text-white bg-slate-900/60 border border-white/10","aria-label":"Toggle Navigation Menu",children:i?c.jsx(tp,{className:"w-6 h-6"}):c.jsx(JM,{className:"w-6 h-6"})})})]}),i&&c.jsxs("div",{className:"md:hidden border-t border-white/[0.08] bg-[#0B101D] px-4 pt-3 pb-6 space-y-3",children:[c.jsx("div",{className:"flex items-center justify-between pb-2 border-b border-white/5",children:c.jsx(Et,{variant:"emerald",size:"sm",dot:!0,children:"Socket Gateway Online"})}),c.jsx("div",{className:"flex flex-col gap-1.5",children:s.map(a=>c.jsxs("button",{onClick:()=>{n==null||n(a.id),r(!1)},className:`text-left px-3 py-2 text-sm rounded-lg flex items-center gap-2 ${t===a.id?"bg-emerald-500/20 text-emerald-400 font-bold":"text-slate-300 hover:bg-white/5"}`,children:[a.icon,c.jsx("span",{children:a.label})]},a.id))}),c.jsxs("div",{className:"pt-2 flex flex-col gap-2",children:[c.jsx(et,{variant:"outline",size:"md",className:"w-full justify-center",onClick:()=>{e==null||e("login"),r(!1)},children:"Alex Rivera (Account)"}),c.jsx(et,{variant:"primary",size:"md",className:"w-full justify-center",onClick:()=>{n==null||n("explore"),r(!1)},children:"Explore Smart Bays"})]})]})]})},iw=()=>c.jsxs("footer",{className:"w-full border-t border-white/[0.08] bg-[#05080F] text-slate-400 py-12 px-4 sm:px-6 lg:px-8 mt-24",children:[c.jsxs("div",{className:"max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-12",children:[c.jsxs("div",{className:"space-y-4 md:col-span-1",children:[c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx("div",{className:"h-7 w-7 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center",children:c.jsx($t,{className:"h-4 w-4 text-emerald-400"})}),c.jsxs("span",{className:"font-bold text-lg text-white",children:["PARK",c.jsx("span",{className:"text-emerald-400",children:"VOLT"})]})]}),c.jsx("p",{className:"text-xs text-slate-400 leading-relaxed",children:"High-performance real-time IoT smart parking reservation and electric vehicle charging grid management platform."}),c.jsxs("div",{className:"flex items-center gap-2 text-[11px] text-slate-500 font-mono",children:[c.jsx(vE,{className:"w-3.5 h-3.5 text-emerald-400"}),c.jsx("span",{children:"MERN Stack + Socket.IO v4.8"})]})]}),c.jsxs("div",{className:"space-y-3",children:[c.jsx("h4",{className:"text-xs font-semibold text-slate-200 uppercase tracking-wider font-mono",children:"Modules"}),c.jsxs("ul",{className:"space-y-2 text-xs",children:[c.jsx("li",{className:"hover:text-emerald-400 cursor-pointer transition-colors",children:"Dynamic Slot Availability Engine"}),c.jsx("li",{className:"hover:text-emerald-400 cursor-pointer transition-colors",children:"EV Charging Session Telemetry"}),c.jsx("li",{className:"hover:text-emerald-400 cursor-pointer transition-colors",children:"Razorpay Order & Webhook Engine"}),c.jsx("li",{className:"hover:text-emerald-400 cursor-pointer transition-colors",children:"Interactive 3D Miniature City"})]})]}),c.jsxs("div",{className:"space-y-3",children:[c.jsx("h4",{className:"text-xs font-semibold text-slate-200 uppercase tracking-wider font-mono",children:"Academic Viva Highlights"}),c.jsxs("ul",{className:"space-y-2 text-xs",children:[c.jsx("li",{className:"text-slate-400",children:"Concurrency Locking & Slot Collision Prevention"}),c.jsx("li",{className:"text-slate-400",children:"Full Duplex Socket.IO State Synchronization"}),c.jsx("li",{className:"text-slate-400",children:"HMAC-SHA256 Payment Verification"}),c.jsx("li",{className:"text-slate-400",children:"Atomic MongoDB Transactions"})]})]}),c.jsxs("div",{className:"space-y-3",children:[c.jsx("h4",{className:"text-xs font-semibold text-slate-200 uppercase tracking-wider font-mono",children:"System Telemetry"}),c.jsxs("div",{className:"p-3.5 rounded-xl bg-slate-900/60 border border-white/5 space-y-2 text-xs",children:[c.jsxs("div",{className:"flex items-center justify-between",children:[c.jsx("span",{className:"text-slate-400",children:"Frontend Client"}),c.jsx("span",{className:"text-emerald-400 font-mono font-medium",children:"Vite + React 18"})]}),c.jsxs("div",{className:"flex items-center justify-between",children:[c.jsx("span",{className:"text-slate-400",children:"Design System"}),c.jsx("span",{className:"text-cyan-400 font-mono font-medium",children:"Tailwind CSS"})]}),c.jsxs("div",{className:"flex items-center justify-between",children:[c.jsx("span",{className:"text-slate-400",children:"State Management"}),c.jsx("span",{className:"text-amber-400 font-mono font-medium",children:"Zustand Store"})]})]})]})]}),c.jsxs("div",{className:"max-w-7xl mx-auto pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4",children:[c.jsxs("div",{children:["© ",new Date().getFullYear()," ParkVolt Architecture. Built for academic viva and industry readiness."]}),c.jsx("div",{className:"flex items-center gap-2",children:c.jsx("span",{children:"Engineered with precision for BTech Computer Science"})})]})]});/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ip="187",Vs={ROTATE:0,DOLLY:1,PAN:2},Us={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},rw=0,Qm=1,sw=2,Il=1,Fv=2,Ua=3,is=0,Ln=1,Hi=2,js=0,$a=1,Jm=2,eg=3,tg=4,aw=5,Ss=100,ow=101,lw=102,cw=103,uw=104,dw=200,hw=201,fw=202,pw=203,kv=204,Bv=205,mw=206,gw=207,xw=208,vw=209,_w=210,yw=211,Sw=212,Mw=213,Ew=214,ih=0,rh=1,sh=2,mo=3,ah=4,oh=5,lh=6,ch=7,zv=0,ww=1,bw=2,Xi=0,Hv=1,Gv=2,Vv=3,jv=4,Wv=5,Xv=6,qv=7,Yv=300,Js=301,go=302,Au=303,Cu=304,uh=1e3,ji=1001,dh=1002,Jt=1003,Tw=1004,Yo=1005,Cn=1006,Ru=1007,xr=1008,kn=1009,$v=1010,Kv=1011,xo=1012,rp=1013,Ai=1014,Si=1015,Ci=1016,sp=1017,ap=1018,ea=1020,Zv=35902,Qv=35899,Jv=1021,e_=1022,Mi=1023,Rr=1026,vr=1027,t_=1028,op=1029,rs=1030,lp=1031,cp=1033,Ul=33776,Ol=33777,Fl=33778,kl=33779,hh=35840,fh=35841,ph=35842,mh=35843,gh=36196,xh=37492,vh=37496,_h=37488,yh=37489,vc=37490,Sh=37491,Mh=37808,Eh=37809,wh=37810,bh=37811,Th=37812,Ah=37813,Ch=37814,Rh=37815,Nh=37816,Ph=37817,Lh=37818,Dh=37819,Ih=37820,Uh=37821,Oh=36492,Fh=36494,kh=36495,Bh=36283,zh=36284,_c=36285,Hh=36286,Aw=3200,Gh=0,Cw=1,pr="",Wn="srgb",yc="srgb-linear",Sc="linear",lt="srgb",Nu=7680,Rw=519,Nw=512,Pw=513,Lw=514,n_=515,Dw=516,Iw=517,i_=518,r_=519,Uw=35044,ng="300 es",di=2e3,vo=2001;function Ow(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Mc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Fw(){const t=Mc("canvas");return t.style.display="block",t}const ig={};function rg(...t){const e="THREE."+t.shift();console.log(e,...t)}function s_(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function De(...t){t=s_(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function nt(...t){t=s_(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function Bl(...t){const e=t.join(" ");e in ig||(ig[e]=!0,De(...t))}function kw(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const Bw={[ih]:ih,[sh]:lh,[ah]:ah,[mo]:oh,[rh]:rh,[lh]:sh,[ch]:ch,[oh]:mo};class Ur{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],zl=Math.PI/180,Vh=180/Math.PI;function To(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ln[t&255]+ln[t>>8&255]+ln[t>>16&255]+ln[t>>24&255]+"-"+ln[e&255]+ln[e>>8&255]+"-"+ln[e>>16&15|64]+ln[e>>24&255]+"-"+ln[n&63|128]+ln[n>>8&255]+"-"+ln[n>>16&255]+ln[n>>24&255]+ln[i&255]+ln[i>>8&255]+ln[i>>16&255]+ln[i>>24&255]).toLowerCase()}function We(t,e,n){return Math.max(e,Math.min(n,t))}function zw(t,e){return(t%e+e)%e}function Pu(t,e,n){return(1-n)*t+n*e}function Hw(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function up(t){switch(t.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Gw(t,e){if(e.constructor===Float32Array)return t;const n=up(e);if(n===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(t/n,-1)}function Vw(t,e){if(e.constructor===Float32Array)return t;const n=up(e);if(n===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(t*n)}const jw={DEG2RAD:zl},bp=class bp{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=We(this.x,e.x,n.x),this.y=We(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=We(this.x,e,n),this.y=We(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(We(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(We(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};bp.prototype.isVector2=!0;let Ie=bp;class Nr{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],u=i[r+1],h=i[r+2],p=i[r+3],f=s[a+0],m=s[a+1],_=s[a+2],S=s[a+3];if(p!==S||l!==f||u!==m||h!==_){let x=l*f+u*m+h*_+p*S;x<0&&(f=-f,m=-m,_=-_,S=-S,x=-x);let d=1-o;if(x<.9995){const g=Math.acos(x),y=Math.sin(g);d=Math.sin(d*g)/y,o=Math.sin(o*g)/y,l=l*d+f*o,u=u*d+m*o,h=h*d+_*o,p=p*d+S*o}else{l=l*d+f*o,u=u*d+m*o,h=h*d+_*o,p=p*d+S*o;const g=1/Math.sqrt(l*l+u*u+h*h+p*p);l*=g,u*=g,h*=g,p*=g}}e[n]=l,e[n+1]=u,e[n+2]=h,e[n+3]=p}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],u=i[r+2],h=i[r+3],p=s[a],f=s[a+1],m=s[a+2],_=s[a+3];return e[n]=o*_+h*p+l*m-u*f,e[n+1]=l*_+h*f+u*p-o*m,e[n+2]=u*_+h*m+o*f-l*p,e[n+3]=h*_-o*p-l*f-u*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,u=o(i/2),h=o(r/2),p=o(s/2),f=l(i/2),m=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=f*h*p+u*m*_,this._y=u*m*p-f*h*_,this._z=u*h*_+f*m*p,this._w=u*h*p-f*m*_;break;case"YXZ":this._x=f*h*p+u*m*_,this._y=u*m*p-f*h*_,this._z=u*h*_-f*m*p,this._w=u*h*p+f*m*_;break;case"ZXY":this._x=f*h*p-u*m*_,this._y=u*m*p+f*h*_,this._z=u*h*_+f*m*p,this._w=u*h*p-f*m*_;break;case"ZYX":this._x=f*h*p-u*m*_,this._y=u*m*p+f*h*_,this._z=u*h*_-f*m*p,this._w=u*h*p+f*m*_;break;case"YZX":this._x=f*h*p+u*m*_,this._y=u*m*p+f*h*_,this._z=u*h*_-f*m*p,this._w=u*h*p-f*m*_;break;case"XZY":this._x=f*h*p-u*m*_,this._y=u*m*p-f*h*_,this._z=u*h*_+f*m*p,this._w=u*h*p+f*m*_;break;default:De("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],u=n[2],h=n[6],p=n[10],f=i+o+p;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-l)*m,this._y=(s-u)*m,this._z=(a-r)*m}else if(i>o&&i>p){const m=2*Math.sqrt(1+i-o-p);this._w=(h-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+u)/m}else if(o>p){const m=2*Math.sqrt(1+o-i-p);this._w=(s-u)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+p-i-o);this._w=(a-r)/m,this._x=(s+u)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(We(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,u=n._z,h=n._w;return this._x=i*h+a*o+r*u-s*l,this._y=r*h+a*l+s*o-i*u,this._z=s*h+a*u+i*l-r*o,this._w=a*h-i*o-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-n;if(o<.9995){const u=Math.acos(o),h=Math.sin(u);l=Math.sin(l*u)/h,n=Math.sin(n*u)/h,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Tp=class Tp{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(sg.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(sg.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,u=2*(a*r-o*i),h=2*(o*n-s*r),p=2*(s*i-a*n);return this.x=n+l*u+a*p-o*h,this.y=i+l*h+o*u-s*p,this.z=r+l*p+s*h-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=We(this.x,e.x,n.x),this.y=We(this.y,e.y,n.y),this.z=We(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=We(this.x,e,n),this.y=We(this.y,e,n),this.z=We(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(We(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Lu.copy(this).projectOnVector(e),this.sub(Lu)}reflect(e){return this.sub(Lu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(We(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Tp.prototype.isVector3=!0;let G=Tp;const Lu=new G,sg=new Nr,Ap=class Ap{constructor(e,n,i,r,s,a,o,l,u){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,u)}set(e,n,i,r,s,a,o,l,u){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=n,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],u=i[1],h=i[4],p=i[7],f=i[2],m=i[5],_=i[8],S=r[0],x=r[3],d=r[6],g=r[1],y=r[4],M=r[7],A=r[2],T=r[5],v=r[8];return s[0]=a*S+o*g+l*A,s[3]=a*x+o*y+l*T,s[6]=a*d+o*M+l*v,s[1]=u*S+h*g+p*A,s[4]=u*x+h*y+p*T,s[7]=u*d+h*M+p*v,s[2]=f*S+m*g+_*A,s[5]=f*x+m*y+_*T,s[8]=f*d+m*M+_*v,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],h=e[8];return n*a*h-n*o*u-i*s*h+i*o*l+r*s*u-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],h=e[8],p=h*a-o*u,f=o*l-h*s,m=u*s-a*l,_=n*p+i*f+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/_;return e[0]=p*S,e[1]=(r*u-h*i)*S,e[2]=(o*i-r*a)*S,e[3]=f*S,e[4]=(h*n-r*l)*S,e[5]=(r*s-o*n)*S,e[6]=m*S,e[7]=(i*l-u*n)*S,e[8]=(a*n-i*s)*S,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*a+u*o)+a+e,-r*u,r*l,-r*(-u*a+l*o)+o+n,0,0,1),this}scale(e,n){return Bl("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Du.makeScale(e,n)),this}rotate(e){return Bl("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Du.makeRotation(-e)),this}translate(e,n){return Bl("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Du.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Ap.prototype.isMatrix3=!0;let Oe=Ap;const Du=new Oe,ag=new Oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),og=new Oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ww(){const t={enabled:!0,workingColorSpace:yc,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===lt&&(r.r=qi(r.r),r.g=qi(r.g),r.b=qi(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===lt&&(r.r=Ws(r.r),r.g=Ws(r.g),r.b=Ws(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===pr?Sc:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[a].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[yc]:{primaries:e,whitePoint:i,transfer:Sc,toXYZ:ag,fromXYZ:og,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Wn},outputColorSpaceConfig:{drawingBufferColorSpace:Wn}},[Wn]:{primaries:e,whitePoint:i,transfer:lt,toXYZ:ag,fromXYZ:og,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Wn}}}),t}const Ze=Ww();function qi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Ws(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let cs;class Xw{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{cs===void 0&&(cs=Mc("canvas")),cs.width=e.width,cs.height=e.height;const r=cs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=cs}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Mc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=qi(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(qi(n[i]/255)*255):n[i]=qi(n[i]);return{data:n,width:e.width,height:e.height}}else return De("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let qw=0;class dp{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:qw++}),this.uuid=To(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width||0,n.height||0,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Iu(r[a].image)):s.push(Iu(r[a]))}else s=Iu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Iu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Xw.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(De("Texture: Unable to serialize Texture."),{})}let Yw=0;const Uu=new G;class vn extends Ur{constructor(e=vn.DEFAULT_IMAGE,n=vn.DEFAULT_MAPPING,i=ji,r=ji,s=Cn,a=xr,o=Mi,l=kn,u=vn.DEFAULT_ANISOTROPY,h=pr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yw++}),this.uuid=To(),this.name="",this.source=new dp(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ie(0,0),this.repeat=new Ie(1,1),this.center=new Ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Uu).x}get height(){return this.source.getSize(Uu).y}get depth(){return this.source.getSize(Uu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){De(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){De(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Yv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case uh:e.x=e.x-Math.floor(e.x);break;case ji:e.x=e.x<0?0:1;break;case dh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case uh:e.y=e.y-Math.floor(e.y);break;case ji:e.y=e.y<0?0:1;break;case dh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}vn.DEFAULT_IMAGE=null;vn.DEFAULT_MAPPING=Yv;vn.DEFAULT_ANISOTROPY=1;const Cp=class Cp{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],h=l[4],p=l[8],f=l[1],m=l[5],_=l[9],S=l[2],x=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(p-S)<.01&&Math.abs(_-x)<.01){if(Math.abs(h+f)<.1&&Math.abs(p+S)<.1&&Math.abs(_+x)<.1&&Math.abs(u+m+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const y=(u+1)/2,M=(m+1)/2,A=(d+1)/2,T=(h+f)/4,v=(p+S)/4,b=(_+x)/4;return y>M&&y>A?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=T/i,s=v/i):M>A?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=T/r,s=b/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=v/s,r=b/s),this.set(i,r,s,n),this}let g=Math.sqrt((x-_)*(x-_)+(p-S)*(p-S)+(f-h)*(f-h));return Math.abs(g)<.001&&(g=1),this.x=(x-_)/g,this.y=(p-S)/g,this.z=(f-h)/g,this.w=Math.acos((u+m+d-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=We(this.x,e.x,n.x),this.y=We(this.y,e.y,n.y),this.z=We(this.z,e.z,n.z),this.w=We(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=We(this.x,e,n),this.y=We(this.y,e,n),this.z=We(this.z,e,n),this.w=We(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(We(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Cp.prototype.isVector4=!0;let bt=Cp;class $w extends Ur{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Cn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new bt(0,0,e,n),this.scissorTest=!1,this.viewport=new bt(0,0,e,n),this.textures=[];const r=i.count;for(let s=0;s<r;s++)this.textures[s]=new vn({width:e,height:n,depth:i.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:Cn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(n.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new dp(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const n=e.depthTexture.clone();n.renderTarget=null,this.depthTexture=n}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class bi extends $w{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class a_ extends vn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Kw extends vn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Tc=class Tc{constructor(e,n,i,r,s,a,o,l,u,h,p,f,m,_,S,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,u,h,p,f,m,_,S,x)}set(e,n,i,r,s,a,o,l,u,h,p,f,m,_,S,x){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=l,d[2]=u,d[6]=h,d[10]=p,d[14]=f,d[3]=m,d[7]=_,d[11]=S,d[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Tc().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,i=e.elements,r=1/us.setFromMatrixColumn(e,0).length(),s=1/us.setFromMatrixColumn(e,1).length(),a=1/us.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),u=Math.sin(r),h=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const f=a*h,m=a*p,_=o*h,S=o*p;n[0]=l*h,n[4]=-l*p,n[8]=u,n[1]=m+_*u,n[5]=f-S*u,n[9]=-o*l,n[2]=S-f*u,n[6]=_+m*u,n[10]=a*l}else if(e.order==="YXZ"){const f=l*h,m=l*p,_=u*h,S=u*p;n[0]=f+S*o,n[4]=_*o-m,n[8]=a*u,n[1]=a*p,n[5]=a*h,n[9]=-o,n[2]=m*o-_,n[6]=S+f*o,n[10]=a*l}else if(e.order==="ZXY"){const f=l*h,m=l*p,_=u*h,S=u*p;n[0]=f-S*o,n[4]=-a*p,n[8]=_+m*o,n[1]=m+_*o,n[5]=a*h,n[9]=S-f*o,n[2]=-a*u,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const f=a*h,m=a*p,_=o*h,S=o*p;n[0]=l*h,n[4]=_*u-m,n[8]=f*u+S,n[1]=l*p,n[5]=S*u+f,n[9]=m*u-_,n[2]=-u,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const f=a*l,m=a*u,_=o*l,S=o*u;n[0]=l*h,n[4]=S-f*p,n[8]=_*p+m,n[1]=p,n[5]=a*h,n[9]=-o*h,n[2]=-u*h,n[6]=m*p+_,n[10]=f-S*p}else if(e.order==="XZY"){const f=a*l,m=a*u,_=o*l,S=o*u;n[0]=l*h,n[4]=-p,n[8]=u*h,n[1]=f*p+S,n[5]=a*h,n[9]=m*p-_,n[2]=_*p-m,n[6]=o*h,n[10]=S*p+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Zw,e,Qw)}lookAt(e,n,i){const r=this.elements;return In.subVectors(e,n),In.lengthSq()===0&&(In.z=1),In.normalize(),rr.crossVectors(i,In),rr.lengthSq()===0&&(Math.abs(i.z)===1?In.x+=1e-4:In.z+=1e-4,In.normalize(),rr.crossVectors(i,In)),rr.normalize(),$o.crossVectors(In,rr),r[0]=rr.x,r[4]=$o.x,r[8]=In.x,r[1]=rr.y,r[5]=$o.y,r[9]=In.y,r[2]=rr.z,r[6]=$o.z,r[10]=In.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],u=i[12],h=i[1],p=i[5],f=i[9],m=i[13],_=i[2],S=i[6],x=i[10],d=i[14],g=i[3],y=i[7],M=i[11],A=i[15],T=r[0],v=r[4],b=r[8],I=r[12],R=r[1],D=r[5],U=r[9],X=r[13],P=r[2],W=r[6],$=r[10],z=r[14],k=r[3],F=r[7],j=r[11],Y=r[15];return s[0]=a*T+o*R+l*P+u*k,s[4]=a*v+o*D+l*W+u*F,s[8]=a*b+o*U+l*$+u*j,s[12]=a*I+o*X+l*z+u*Y,s[1]=h*T+p*R+f*P+m*k,s[5]=h*v+p*D+f*W+m*F,s[9]=h*b+p*U+f*$+m*j,s[13]=h*I+p*X+f*z+m*Y,s[2]=_*T+S*R+x*P+d*k,s[6]=_*v+S*D+x*W+d*F,s[10]=_*b+S*U+x*$+d*j,s[14]=_*I+S*X+x*z+d*Y,s[3]=g*T+y*R+M*P+A*k,s[7]=g*v+y*D+M*W+A*F,s[11]=g*b+y*U+M*$+A*j,s[15]=g*I+y*X+M*z+A*Y,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],u=e[13],h=e[2],p=e[6],f=e[10],m=e[14],_=e[3],S=e[7],x=e[11],d=e[15],g=l*m-u*f,y=o*m-u*p,M=o*f-l*p,A=a*m-u*h,T=a*f-l*h,v=a*p-o*h;return n*(S*g-x*y+d*M)-i*(_*g-x*A+d*T)+r*(_*y-S*A+d*v)-s*(_*M-S*T+x*v)}determinantAffine(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],l=e[2],u=e[6],h=e[10];return n*(a*h-o*u)-i*(s*h-o*l)+r*(s*u-a*l)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],h=e[8],p=e[9],f=e[10],m=e[11],_=e[12],S=e[13],x=e[14],d=e[15],g=n*o-i*a,y=n*l-r*a,M=n*u-s*a,A=i*l-r*o,T=i*u-s*o,v=r*u-s*l,b=h*S-p*_,I=h*x-f*_,R=h*d-m*_,D=p*x-f*S,U=p*d-m*S,X=f*d-m*x,P=g*X-y*U+M*D+A*R-T*I+v*b;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const W=1/P;return e[0]=(o*X-l*U+u*D)*W,e[1]=(r*U-i*X-s*D)*W,e[2]=(S*v-x*T+d*A)*W,e[3]=(f*T-p*v-m*A)*W,e[4]=(l*R-a*X-u*I)*W,e[5]=(n*X-r*R+s*I)*W,e[6]=(x*M-_*v-d*y)*W,e[7]=(h*v-f*M+m*y)*W,e[8]=(a*U-o*R+u*b)*W,e[9]=(i*R-n*U-s*b)*W,e[10]=(_*T-S*M+d*g)*W,e[11]=(p*M-h*T-m*g)*W,e[12]=(o*I-a*D-l*b)*W,e[13]=(n*D-i*I+r*b)*W,e[14]=(S*y-_*A-x*g)*W,e[15]=(h*A-p*y+f*g)*W,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,u=s*a,h=s*o;return this.set(u*a+i,u*o-r*l,u*l+r*o,0,u*o+r*l,h*o+i,h*l-r*a,0,u*l-r*o,h*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,u=s+s,h=a+a,p=o+o,f=s*u,m=s*h,_=s*p,S=a*h,x=a*p,d=o*p,g=l*u,y=l*h,M=l*p,A=i.x,T=i.y,v=i.z;return r[0]=(1-(S+d))*A,r[1]=(m+M)*A,r[2]=(_-y)*A,r[3]=0,r[4]=(m-M)*T,r[5]=(1-(f+d))*T,r[6]=(x+g)*T,r[7]=0,r[8]=(_+y)*v,r[9]=(x-g)*v,r[10]=(1-(f+S))*v,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),n.identity(),this;let a=us.set(r[0],r[1],r[2]).length();const o=us.set(r[4],r[5],r[6]).length(),l=us.set(r[8],r[9],r[10]).length();s<0&&(a=-a),ii.copy(this);const u=1/a,h=1/o,p=1/l;return ii.elements[0]*=u,ii.elements[1]*=u,ii.elements[2]*=u,ii.elements[4]*=h,ii.elements[5]*=h,ii.elements[6]*=h,ii.elements[8]*=p,ii.elements[9]*=p,ii.elements[10]*=p,n.setFromRotationMatrix(ii),i.x=a,i.y=o,i.z=l,this}makePerspective(e,n,i,r,s,a,o=di,l=!1){const u=this.elements,h=2*s/(n-e),p=2*s/(i-r),f=(n+e)/(n-e),m=(i+r)/(i-r);let _,S;if(l)_=s/(a-s),S=a*s/(a-s);else if(o===di)_=-(a+s)/(a-s),S=-2*a*s/(a-s);else if(o===vo)_=-a/(a-s),S=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return u[0]=h,u[4]=0,u[8]=f,u[12]=0,u[1]=0,u[5]=p,u[9]=m,u[13]=0,u[2]=0,u[6]=0,u[10]=_,u[14]=S,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=di,l=!1){const u=this.elements,h=2/(n-e),p=2/(i-r),f=-(n+e)/(n-e),m=-(i+r)/(i-r);let _,S;if(l)_=1/(a-s),S=a/(a-s);else if(o===di)_=-2/(a-s),S=-(a+s)/(a-s);else if(o===vo)_=-1/(a-s),S=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return u[0]=h,u[4]=0,u[8]=0,u[12]=f,u[1]=0,u[5]=p,u[9]=0,u[13]=m,u[2]=0,u[6]=0,u[10]=_,u[14]=S,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};Tc.prototype.isMatrix4=!0;let yt=Tc;const us=new G,ii=new yt,Zw=new G(0,0,0),Qw=new G(1,1,1),rr=new G,$o=new G,In=new G,lg=new yt,cg=new Nr;class Pr{constructor(e=0,n=0,i=0,r=Pr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],u=r[5],h=r[9],p=r[2],f=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(We(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-We(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(We(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-We(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(We(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-We(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:De("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return lg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(lg,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return cg.setFromEuler(this),this.setFromQuaternion(cg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Pr.DEFAULT_ORDER="XYZ";class hp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Jw=0;const ug=new G,ds=new Nr,Di=new yt,Ko=new G,wa=new G,e1=new G,t1=new Nr,dg=new G(1,0,0),hg=new G(0,1,0),fg=new G(0,0,1),pg={type:"added"},n1={type:"removed"},hs={type:"childadded",child:null},Ou={type:"childremoved",child:null};class tn extends Ur{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Jw++}),this.uuid=To(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=tn.DEFAULT_UP.clone();const e=new G,n=new Pr,i=new Nr,r=new G(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new yt},normalMatrix:{value:new Oe}}),this.matrix=new yt,this.matrixWorld=new yt,this.matrixAutoUpdate=tn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ds.setFromAxisAngle(e,n),this.quaternion.multiply(ds),this}rotateOnWorldAxis(e,n){return ds.setFromAxisAngle(e,n),this.quaternion.premultiply(ds),this}rotateX(e){return this.rotateOnAxis(dg,e)}rotateY(e){return this.rotateOnAxis(hg,e)}rotateZ(e){return this.rotateOnAxis(fg,e)}translateOnAxis(e,n){return ug.copy(e).applyQuaternion(this.quaternion),this.position.add(ug.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(dg,e)}translateY(e){return this.translateOnAxis(hg,e)}translateZ(e){return this.translateOnAxis(fg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Di.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Ko.copy(e):Ko.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),wa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Di.lookAt(wa,Ko,this.up):Di.lookAt(Ko,wa,this.up),this.quaternion.setFromRotationMatrix(Di),r&&(Di.extractRotation(r.matrixWorld),ds.setFromRotationMatrix(Di),this.quaternion.premultiply(ds.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(nt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(pg),hs.child=e,this.dispatchEvent(hs),hs.child=null):nt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(n1),Ou.child=e,this.dispatchEvent(Ou),Ou.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Di.multiply(e.parent.matrixWorld)),e.applyMatrix4(Di),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(pg),hs.child=e,this.dispatchEvent(hs),hs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wa,e,e1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wa,t1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let u=0,h=l.length;u<h;u++){const p=l[u];s(e.shapes,p)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,u=this.material.length;l<u;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),u=a(e.textures),h=a(e.images),p=a(e.shapes),f=a(e.skeletons),m=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),h.length>0&&(i.images=h),p.length>0&&(i.shapes=p),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const l=[];for(const u in o){const h=o[u];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}tn.DEFAULT_UP=new G(0,1,0);tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Yr extends tn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const i1={type:"move"};class Fu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Yr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Yr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Yr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const S of e.hand.values()){const x=n.getJointPose(S,i),d=this._getHandJoint(u,S);x!==null&&(d.matrix.fromArray(x.transform.matrix),d.matrix.decompose(d.position,d.quaternion,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=x.radius),d.visible=x!==null}const h=u.joints["index-finger-tip"],p=u.joints["thumb-tip"],f=h.position.distanceTo(p.position),m=.02,_=.005;u.inputState.pinching&&f>m+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=m-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(i1)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Yr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const o_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},sr={h:0,s:0,l:0},Zo={h:0,s:0,l:0};function ku(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class je{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Wn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=Ze.workingColorSpace){return this.r=e,this.g=n,this.b=i,Ze.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=Ze.workingColorSpace){if(e=zw(e,1),n=We(n,0,1),i=We(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=ku(a,s,e+1/3),this.g=ku(a,s,e),this.b=ku(a,s,e-1/3)}return Ze.colorSpaceToWorking(this,r),this}setStyle(e,n=Wn){function i(s){s!==void 0&&parseFloat(s)<1&&De("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,n);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:De("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);De("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Wn){const i=o_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):De("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=qi(e.r),this.g=qi(e.g),this.b=qi(e.b),this}copyLinearToSRGB(e){return this.r=Ws(e.r),this.g=Ws(e.g),this.b=Ws(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Wn){return Ze.workingToColorSpace(cn.copy(this),e),Math.round(We(cn.r*255,0,255))*65536+Math.round(We(cn.g*255,0,255))*256+Math.round(We(cn.b*255,0,255))}getHexString(e=Wn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ze.workingColorSpace){Ze.workingToColorSpace(cn.copy(this),n);const i=cn.r,r=cn.g,s=cn.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,u;const h=(o+a)/2;if(o===a)l=0,u=0;else{const p=a-o;switch(u=h<=.5?p/(a+o):p/(2-a-o),a){case i:l=(r-s)/p+(r<s?6:0);break;case r:l=(s-i)/p+2;break;case s:l=(i-r)/p+4;break}l/=6}return e.h=l,e.s=u,e.l=h,e}getRGB(e,n=Ze.workingColorSpace){return Ze.workingToColorSpace(cn.copy(this),n),e.r=cn.r,e.g=cn.g,e.b=cn.b,e}getStyle(e=Wn){Ze.workingToColorSpace(cn.copy(this),e);const n=cn.r,i=cn.g,r=cn.b;return e!==Wn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(sr),this.setHSL(sr.h+e,sr.s+n,sr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(sr),e.getHSL(Zo);const i=Pu(sr.h,Zo.h,n),r=Pu(sr.s,Zo.s,n),s=Pu(sr.l,Zo.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const cn=new je;je.NAMES=o_;class fp{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new je(e),this.density=n}clone(){return new fp(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class r1 extends tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pr,this.environmentIntensity=1,this.environmentRotation=new Pr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n.object.backgroundBlurriness=this.backgroundBlurriness,n.object.backgroundIntensity=this.backgroundIntensity,n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentIntensity=this.environmentIntensity,n.object.environmentRotation=this.environmentRotation.toArray(),n}}const ri=new G,Ii=new G,Bu=new G,Ui=new G,fs=new G,ps=new G,mg=new G,zu=new G,Hu=new G,Gu=new G,Vu=new bt,ju=new bt,Wu=new bt;class ui{constructor(e=new G,n=new G,i=new G){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),ri.subVectors(e,n),r.cross(ri);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){ri.subVectors(r,n),Ii.subVectors(i,n),Bu.subVectors(e,n);const a=ri.dot(ri),o=ri.dot(Ii),l=ri.dot(Bu),u=Ii.dot(Ii),h=Ii.dot(Bu),p=a*u-o*o;if(p===0)return s.set(0,0,0),null;const f=1/p,m=(u*l-o*h)*f,_=(a*h-o*l)*f;return s.set(1-m-_,_,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Ui)===null?!1:Ui.x>=0&&Ui.y>=0&&Ui.x+Ui.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,Ui)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ui.x),l.addScaledVector(a,Ui.y),l.addScaledVector(o,Ui.z),l)}static getInterpolatedAttribute(e,n,i,r,s,a){return Vu.setScalar(0),ju.setScalar(0),Wu.setScalar(0),Vu.fromBufferAttribute(e,n),ju.fromBufferAttribute(e,i),Wu.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Vu,s.x),a.addScaledVector(ju,s.y),a.addScaledVector(Wu,s.z),a}static isFrontFacing(e,n,i,r){return ri.subVectors(i,n),Ii.subVectors(e,n),ri.cross(Ii).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ri.subVectors(this.c,this.b),Ii.subVectors(this.a,this.b),ri.cross(Ii).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ui.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ui.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return ui.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return ui.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ui.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;fs.subVectors(r,i),ps.subVectors(s,i),zu.subVectors(e,i);const l=fs.dot(zu),u=ps.dot(zu);if(l<=0&&u<=0)return n.copy(i);Hu.subVectors(e,r);const h=fs.dot(Hu),p=ps.dot(Hu);if(h>=0&&p<=h)return n.copy(r);const f=l*p-h*u;if(f<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),n.copy(i).addScaledVector(fs,a);Gu.subVectors(e,s);const m=fs.dot(Gu),_=ps.dot(Gu);if(_>=0&&m<=_)return n.copy(s);const S=m*u-l*_;if(S<=0&&u>=0&&_<=0)return o=u/(u-_),n.copy(i).addScaledVector(ps,o);const x=h*_-m*p;if(x<=0&&p-h>=0&&m-_>=0)return mg.subVectors(s,r),o=(p-h)/(p-h+(m-_)),n.copy(r).addScaledVector(mg,o);const d=1/(x+S+f);return a=S*d,o=f*d,n.copy(i).addScaledVector(fs,a).addScaledVector(ps,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ao{constructor(e=new G(1/0,1/0,1/0),n=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(si.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(si.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=si.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,si):si.fromBufferAttribute(s,a),si.applyMatrix4(e.matrixWorld),this.expandByPoint(si);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Qo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Qo.copy(i.boundingBox)),Qo.applyMatrix4(e.matrixWorld),this.union(Qo)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,si),si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ba),Jo.subVectors(this.max,ba),ms.subVectors(e.a,ba),gs.subVectors(e.b,ba),xs.subVectors(e.c,ba),ar.subVectors(gs,ms),or.subVectors(xs,gs),Br.subVectors(ms,xs);let n=[0,-ar.z,ar.y,0,-or.z,or.y,0,-Br.z,Br.y,ar.z,0,-ar.x,or.z,0,-or.x,Br.z,0,-Br.x,-ar.y,ar.x,0,-or.y,or.x,0,-Br.y,Br.x,0];return!Xu(n,ms,gs,xs,Jo)||(n=[1,0,0,0,1,0,0,0,1],!Xu(n,ms,gs,xs,Jo))?!1:(el.crossVectors(ar,or),n=[el.x,el.y,el.z],Xu(n,ms,gs,xs,Jo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Oi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Oi=[new G,new G,new G,new G,new G,new G,new G,new G],si=new G,Qo=new Ao,ms=new G,gs=new G,xs=new G,ar=new G,or=new G,Br=new G,ba=new G,Jo=new G,el=new G,zr=new G;function Xu(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){zr.fromArray(t,s);const o=r.x*Math.abs(zr.x)+r.y*Math.abs(zr.y)+r.z*Math.abs(zr.z),l=e.dot(zr),u=n.dot(zr),h=i.dot(zr);if(Math.max(-Math.max(l,u,h),Math.min(l,u,h))>o)return!1}return!0}const It=new G,tl=new Ie;let s1=0;class Zr extends Ur{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:s1++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Uw,this.updateRanges=[],this.gpuType=Si,this.version=0,this._normalizationScale=e!==void 0?up(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)tl.fromBufferAttribute(this,n),tl.applyMatrix3(e),this.setXY(n,tl.x,tl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)It.fromBufferAttribute(this,n),It.applyMatrix3(e),this.setXYZ(n,It.x,It.y,It.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)It.fromBufferAttribute(this,n),It.applyMatrix4(e),this.setXYZ(n,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)It.fromBufferAttribute(this,n),It.applyNormalMatrix(e),this.setXYZ(n,It.x,It.y,It.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)It.fromBufferAttribute(this,n),It.transformDirection(e),this.setXYZ(n,It.x,It.y,It.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,n,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=this._denormalize(n)),n}setX(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=this._denormalize(n)),n}setY(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=this._denormalize(n)),n}setZ(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=this._denormalize(n)),n}setW(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i),r=this._normalize(r),s=this._normalize(s)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const n=this._normalizationScale;return n!==void 0?Math.max(e/n,-1):Gw(e,this.array)}_normalize(e){const n=this._normalizationScale;return n!==void 0?Math.round(e*n):Vw(e,this.array)}}class l_ extends Zr{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class c_ extends Zr{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class dn extends Zr{constructor(e,n,i){super(new Float32Array(e),n,i)}}const a1=new Ao,Ta=new G,qu=new G;class jc{constructor(e=new G,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):a1.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ta.subVectors(e,this.center);const n=Ta.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Ta,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(qu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ta.copy(e.center).add(qu)),this.expandByPoint(Ta.copy(e.center).sub(qu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let o1=0;const jn=new yt,Yu=new tn,vs=new G,Un=new Ao,Aa=new Ao,qt=new G;class Ni extends Ur{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:o1++}),this.uuid=To(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ow(e)?c_:l_)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Oe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return jn.makeRotationFromQuaternion(e),this.applyMatrix4(jn),this}rotateX(e){return jn.makeRotationX(e),this.applyMatrix4(jn),this}rotateY(e){return jn.makeRotationY(e),this.applyMatrix4(jn),this}rotateZ(e){return jn.makeRotationZ(e),this.applyMatrix4(jn),this}translate(e,n,i){return jn.makeTranslation(e,n,i),this.applyMatrix4(jn),this}scale(e,n,i){return jn.makeScale(e,n,i),this.applyMatrix4(jn),this}lookAt(e){return Yu.lookAt(e),Yu.updateMatrix(),this.applyMatrix4(Yu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vs).negate(),this.translate(vs.x,vs.y,vs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new dn(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&De("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ao);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){nt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Un.setFromBufferAttribute(s),this.morphTargetsRelative?(qt.addVectors(this.boundingBox.min,Un.min),this.boundingBox.expandByPoint(qt),qt.addVectors(this.boundingBox.max,Un.max),this.boundingBox.expandByPoint(qt)):(this.boundingBox.expandByPoint(Un.min),this.boundingBox.expandByPoint(Un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&nt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){nt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){const i=this.boundingSphere.center;if(Un.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];Aa.setFromBufferAttribute(o),this.morphTargetsRelative?(qt.addVectors(Un.min,Aa.min),Un.expandByPoint(qt),qt.addVectors(Un.max,Aa.max),Un.expandByPoint(qt)):(Un.expandByPoint(Aa.min),Un.expandByPoint(Aa.max))}Un.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)qt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(qt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let u=0,h=o.count;u<h;u++)qt.fromBufferAttribute(o,u),l&&(vs.fromBufferAttribute(e,u),qt.add(vs)),r=Math.max(r,i.distanceToSquared(qt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&nt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){nt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Zr(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],l=[],u=new Uint8Array(i.count);for(let I=0;I<i.count;I++)o[I]=new G,l[I]=new G;const h=new G,p=new G,f=new G,m=new Ie,_=new Ie,S=new Ie,x=new G,d=new G;function g(I,R,D){u[I]=u[R]=u[D]=1,h.fromBufferAttribute(i,I),p.fromBufferAttribute(i,R),f.fromBufferAttribute(i,D),m.fromBufferAttribute(s,I),_.fromBufferAttribute(s,R),S.fromBufferAttribute(s,D),p.sub(h),f.sub(h),_.sub(m),S.sub(m);const U=1/(_.x*S.y-S.x*_.y);isFinite(U)&&(x.copy(p).multiplyScalar(S.y).addScaledVector(f,-_.y).multiplyScalar(U),d.copy(f).multiplyScalar(_.x).addScaledVector(p,-S.x).multiplyScalar(U),o[I].add(x),o[R].add(x),o[D].add(x),l[I].add(d),l[R].add(d),l[D].add(d))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let I=0,R=y.length;I<R;++I){const D=y[I],U=D.start,X=D.count;for(let P=U,W=U+X;P<W;P+=3)g(e.getX(P+0),e.getX(P+1),e.getX(P+2))}const M=new G,A=new G,T=new G,v=new G;function b(I){T.fromBufferAttribute(r,I),v.copy(T);const R=o[I];M.copy(R),M.sub(T.multiplyScalar(T.dot(R))).normalize(),A.crossVectors(v,R);const U=A.dot(l[I])<0?-1:1;a.setXYZW(I,M.x,M.y,M.z,U)}for(let I=0,R=i.count;I<R;++I)u[I]&&b(I);this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new Zr(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const r=new G,s=new G,a=new G,o=new G,l=new G,u=new G,h=new G,p=new G;if(e)for(let f=0,m=e.count;f<m;f+=3){const _=e.getX(f+0),S=e.getX(f+1),x=e.getX(f+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,S),a.fromBufferAttribute(n,x),h.subVectors(a,s),p.subVectors(r,s),h.cross(p),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,S),u.fromBufferAttribute(i,x),o.add(h),l.add(h),u.add(h),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(x,u.x,u.y,u.z)}else for(let f=0,m=n.count;f<m;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),a.fromBufferAttribute(n,f+2),h.subVectors(a,s),p.subVectors(r,s),h.cross(p),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)qt.fromBufferAttribute(e,n),qt.normalize(),e.setXYZ(n,qt.x,qt.y,qt.z)}toNonIndexed(){function e(o,l){const u=o.array,h=o.itemSize,p=o.normalized,f=new u.constructor(l.length*h);let m=0,_=0;for(let S=0,x=l.length;S<x;S++){o.isInterleavedBufferAttribute?m=l[S]*o.data.stride+o.offset:m=l[S]*h;for(let d=0;d<h;d++)f[_++]=u[m++]}return new Zr(f,h,p)}if(this.index===null)return De("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Ni,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],u=e(l,i);n.setAttribute(o,u)}const s=this.morphAttributes;for(const o in s){const l=[],u=s[o];for(let h=0,p=u.length;h<p;h++){const f=u[h],m=e(f,i);l.push(m)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const u=a[o];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],h=[];for(let p=0,f=u.length;p<f;p++){const m=u[p];h.push(m.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const u in r){const h=r[u];this.setAttribute(u,h.clone(n))}const s=e.morphAttributes;for(const u in s){const h=[],p=s[u];for(let f=0,m=p.length;f<m;f++)h.push(p[f].clone(n));this.morphAttributes[u]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,h=a.length;u<h;u++){const p=a[u];this.addGroup(p.start,p.count,p.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const $u=new G,l1=new G,c1=new Oe;class zi{constructor(e=new G(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=$u.subVectors(i,n).cross(l1.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta($u),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:n.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||c1.getNormalMatrix(e),r=this.coplanarPoint($u).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let u1=0;class ua extends Ur{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:u1++}),this.uuid=To(),this.name="",this.type="Material",this.blending=$a,this.side=is,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=kv,this.blendDst=Bv,this.blendEquation=Ss,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new je(0,0,0),this.blendAlpha=0,this.depthFunc=mo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rw,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Nu,this.stencilZFail=Nu,this.stencilZPass=Nu,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){De(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){De(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new je().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new zi().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Ie().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ie().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=n[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Fi=new G,Ku=new G,nl=new G,il=new G;class Wc{constructor(e=new G,n=new G(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Fi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Fi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Fi.copy(this.origin).addScaledVector(this.direction,n),Fi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Ku.copy(e).add(n).multiplyScalar(.5),nl.copy(n).sub(e).normalize(),il.copy(this.origin).sub(Ku);const s=e.distanceTo(n)*.5,a=-this.direction.dot(nl),o=il.dot(this.direction),l=-il.dot(nl),u=il.lengthSq(),h=Math.abs(1-a*a);let p,f,m,_;if(h>0)if(p=a*l-o,f=a*o-l,_=s*h,p>=0)if(f>=-_)if(f<=_){const S=1/h;p*=S,f*=S,m=p*(p+a*f+2*o)+f*(a*p+f+2*l)+u}else f=s,p=Math.max(0,-(a*f+o)),m=-p*p+f*(f+2*l)+u;else f=-s,p=Math.max(0,-(a*f+o)),m=-p*p+f*(f+2*l)+u;else f<=-_?(p=Math.max(0,-(-a*s+o)),f=p>0?-s:Math.min(Math.max(-s,-l),s),m=-p*p+f*(f+2*l)+u):f<=_?(p=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+u):(p=Math.max(0,-(a*s+o)),f=p>0?s:Math.min(Math.max(-s,-l),s),m=-p*p+f*(f+2*l)+u);else f=a>0?-s:s,p=Math.max(0,-(a*f+o)),m=-p*p+f*(f+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(Ku).addScaledVector(nl,f),m}intersectSphere(e,n){if(e.radius<0)return null;Fi.subVectors(e.center,this.origin);const i=Fi.dot(this.direction),r=Fi.dot(Fi)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const u=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,f=this.origin;return u>=0?(i=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(i=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),h>=0?(s=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),p>=0?(o=(e.min.z-f.z)*p,l=(e.max.z-f.z)*p):(o=(e.max.z-f.z)*p,l=(e.min.z-f.z)*p),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Fi)!==null}intersectTriangle(e,n,i,r,s){const a=this.origin,o=this.direction,l=o.x,u=o.y,h=o.z,p=e.x-a.x,f=e.y-a.y,m=e.z-a.z,_=n.x-a.x,S=n.y-a.y,x=n.z-a.z,d=i.x-a.x,g=i.y-a.y,y=i.z-a.z,M=Math.abs(l),A=Math.abs(u),T=Math.abs(h);let v,b,I,R,D,U,X,P,W,$,z,k;if(M>=A&&M>=T?(I=l,U=p,W=_,k=d,l>=0?(v=u,b=h,R=f,D=m,X=S,P=x,$=g,z=y):(v=h,b=u,R=m,D=f,X=x,P=S,$=y,z=g)):A>=T?(I=u,U=f,W=S,k=g,u>=0?(v=h,b=l,R=m,D=p,X=x,P=_,$=y,z=d):(v=l,b=h,R=p,D=m,X=_,P=x,$=d,z=y)):(I=h,U=m,W=x,k=y,h>=0?(v=l,b=u,R=p,D=f,X=_,P=S,$=d,z=g):(v=u,b=l,R=f,D=p,X=S,P=_,$=g,z=d)),I===0)return null;const F=v/I,j=b/I,Y=1/I,fe=R-F*U,Pe=D-j*U,Z=X-F*W,me=P-j*W,te=$-F*k,re=z-j*k,oe=te*me-re*Z,Re=fe*re-Pe*te,at=Z*Pe-me*fe;if(r){if(oe<0||Re<0||at<0)return null}else if((oe<0||Re<0||at<0)&&(oe>0||Re>0||at>0))return null;const Ae=oe+Re+at;if(Ae===0)return null;const qe=Y*(oe*U+Re*W+at*k);return(Ae>0?qe<0:qe>0)?null:this.at(qe/Ae,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Oa extends ua{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pr,this.combine=zv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const gg=new yt,Hr=new Wc,rl=new jc,xg=new G,sl=new G,al=new G,ol=new G,Zu=new G,ll=new G,vg=new G,cl=new G;class zt extends tn{constructor(e=new Ni,n=new Oa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){ll.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const h=o[l],p=s[l];h!==0&&(Zu.fromBufferAttribute(p,e),a?ll.addScaledVector(Zu,h):ll.addScaledVector(Zu.sub(n),h))}n.add(ll)}return n}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),rl.copy(i.boundingSphere),rl.applyMatrix4(s),Hr.copy(e.ray).recast(e.near),!(rl.containsPoint(Hr.origin)===!1&&(Hr.intersectSphere(rl,xg)===null||Hr.origin.distanceToSquared(xg)>(e.far-e.near)**2))&&(gg.copy(s).invert(),Hr.copy(e.ray).applyMatrix4(gg),!(i.boundingBox!==null&&Hr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Hr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,u=s.attributes.uv,h=s.attributes.uv1,p=s.attributes.normal,f=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,S=f.length;_<S;_++){const x=f[_],d=a[x.materialIndex],g=Math.max(x.start,m.start),y=Math.min(o.count,Math.min(x.start+x.count,m.start+m.count));for(let M=g,A=y;M<A;M+=3){const T=o.getX(M),v=o.getX(M+1),b=o.getX(M+2);r=ul(this,d,e,i,u,h,p,T,v,b),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=x.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),S=Math.min(o.count,m.start+m.count);for(let x=_,d=S;x<d;x+=3){const g=o.getX(x),y=o.getX(x+1),M=o.getX(x+2);r=ul(this,a,e,i,u,h,p,g,y,M),r&&(r.faceIndex=Math.floor(x/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,S=f.length;_<S;_++){const x=f[_],d=a[x.materialIndex],g=Math.max(x.start,m.start),y=Math.min(l.count,Math.min(x.start+x.count,m.start+m.count));for(let M=g,A=y;M<A;M+=3){const T=M,v=M+1,b=M+2;r=ul(this,d,e,i,u,h,p,T,v,b),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=x.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),S=Math.min(l.count,m.start+m.count);for(let x=_,d=S;x<d;x+=3){const g=x,y=x+1,M=x+2;r=ul(this,a,e,i,u,h,p,g,y,M),r&&(r.faceIndex=Math.floor(x/3),n.push(r))}}}}function d1(t,e,n,i,r,s,a,o){let l;if(e.side===Ln?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===is,o),l===null)return null;cl.copy(o),cl.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(cl);return u<n.near||u>n.far?null:{distance:u,point:cl.clone(),object:t}}function ul(t,e,n,i,r,s,a,o,l,u){t.getVertexPosition(o,sl),t.getVertexPosition(l,al),t.getVertexPosition(u,ol);const h=d1(t,e,n,i,sl,al,ol,vg);if(h){const p=new G;ui.getBarycoord(vg,sl,al,ol,p),r&&(h.uv=ui.getInterpolatedAttribute(r,o,l,u,p,new Ie)),s&&(h.uv1=ui.getInterpolatedAttribute(s,o,l,u,p,new Ie)),a&&(h.normal=ui.getInterpolatedAttribute(a,o,l,u,p,new G),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:l,c:u,normal:new G,materialIndex:0};ui.getNormal(sl,al,ol,f.normal),h.face=f,h.barycoord=p}return h}class h1 extends vn{constructor(e=null,n=1,i=1,r,s,a,o,l,u=Jt,h=Jt,p,f){super(null,a,o,l,u,h,r,s,p,f),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Gr=new jc,f1=new Ie(.5,.5),dl=new G;class _o{constructor(e=new zi,n=new zi,i=new zi,r=new zi,s=new zi,a=new zi){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=di,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],u=s[3],h=s[4],p=s[5],f=s[6],m=s[7],_=s[8],S=s[9],x=s[10],d=s[11],g=s[12],y=s[13],M=s[14],A=s[15];if(r[0].setComponents(u-a,m-h,d-_,A-g).normalize(),r[1].setComponents(u+a,m+h,d+_,A+g).normalize(),r[2].setComponents(u+o,m+p,d+S,A+y).normalize(),r[3].setComponents(u-o,m-p,d-S,A-y).normalize(),i)r[4].setComponents(l,f,x,M).normalize(),r[5].setComponents(u-l,m-f,d-x,A-M).normalize();else if(r[4].setComponents(u-l,m-f,d-x,A-M).normalize(),n===di)r[5].setComponents(u+l,m+f,d+x,A+M).normalize();else if(n===vo)r[5].setComponents(l,f,x,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Gr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Gr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Gr)}intersectsSprite(e){Gr.center.set(0,0,0);const n=f1.distanceTo(e.center);return Gr.radius=.7071067811865476+n,Gr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Gr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(dl.x=r.normal.x>0?e.max.x:e.min.x,dl.y=r.normal.y>0?e.max.y:e.min.y,dl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(dl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const _g=new yt;class pp{constructor(){this.coordinateSystem=di,this._frustums=[],this._count=0}setFromArrayCamera(e){const n=e.cameras,i=this._frustums;for(let r=0;r<n.length;r++){const s=n[r];_g.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),i[r]===void 0&&(i[r]=new _o),i[r].setFromProjectionMatrix(_g,s.coordinateSystem,s.reversedDepth)}return this._count=n.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsBox(e))return!0;return!1}containsPoint(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const n=this._frustums,i=e._frustums;for(let r=0;r<e._count;r++)n[r]===void 0&&(n[r]=new _o),n[r].copy(i[r]);return this._count=e._count,this}clone(){return new pp().copy(this)}}class u_ extends ua{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new je(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ec=new G,wc=new G,yg=new yt,Ca=new Wc,hl=new jc,Qu=new G,Sg=new G;class p1 extends tn{constructor(e=new Ni,n=new u_){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)Ec.fromBufferAttribute(n,r-1),wc.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=Ec.distanceTo(wc);e.setAttribute("lineDistance",new dn(i,1))}else De("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),hl.copy(i.boundingSphere),hl.applyMatrix4(r),hl.radius+=s,e.ray.intersectsSphere(hl)===!1)return;yg.copy(r).invert(),Ca.copy(e.ray).applyMatrix4(yg);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,u=this.isLineSegments?2:1,h=i.index,f=i.attributes.position;if(h!==null){const m=Math.max(0,a.start),_=Math.min(h.count,a.start+a.count);for(let S=m,x=_-1;S<x;S+=u){const d=h.getX(S),g=h.getX(S+1),y=fl(this,e,Ca,l,d,g,S);y&&n.push(y)}if(this.isLineLoop){const S=h.getX(_-1),x=h.getX(m),d=fl(this,e,Ca,l,S,x,_-1);d&&n.push(d)}}else{const m=Math.max(0,a.start),_=Math.min(f.count,a.start+a.count);for(let S=m,x=_-1;S<x;S+=u){const d=fl(this,e,Ca,l,S,S+1,S);d&&n.push(d)}if(this.isLineLoop){const S=fl(this,e,Ca,l,_-1,m,_-1);S&&n.push(S)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function fl(t,e,n,i,r,s,a){const o=t.geometry.attributes.position;if(Ec.fromBufferAttribute(o,r),wc.fromBufferAttribute(o,s),n.distanceSqToSegment(Ec,wc,Qu,Sg)>i)return;Qu.applyMatrix4(t.matrixWorld);const u=e.ray.origin.distanceTo(Qu);if(!(u<e.near||u>e.far))return{distance:u,point:Sg.clone().applyMatrix4(t.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:t}}const Mg=new G,Eg=new G;class m1 extends p1{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)Mg.fromBufferAttribute(n,r),Eg.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Mg.distanceTo(Eg);e.setAttribute("lineDistance",new dn(i,1))}else De("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class d_ extends vn{constructor(e=[],n=Js,i,r,s,a,o,l,u,h){super(e,n,i,r,s,a,o,l,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ta extends vn{constructor(e,n,i=Ai,r,s,a,o=Jt,l=Jt,u,h=Rr,p=1){if(h!==Rr&&h!==vr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:n,depth:p};super(f,r,s,a,o,l,h,i,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new dp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return n.compareFunction=this.compareFunction,n}}class h_ extends ta{constructor(e,n=Ai,i=Js,r,s,a=Jt,o=Jt,l,u=Rr){const h={width:e,height:e,depth:1},p=[h,h,h,h,h,h];super(e,e,n,i,r,s,a,o,l,u),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class f_ extends vn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Fn extends Ni{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],u=[],h=[],p=[];let f=0,m=0;_("z","y","x",-1,-1,i,n,e,a,s,0),_("z","y","x",1,-1,i,n,-e,a,s,1),_("x","z","y",1,1,e,i,n,r,a,2),_("x","z","y",1,-1,e,i,-n,r,a,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new dn(u,3)),this.setAttribute("normal",new dn(h,3)),this.setAttribute("uv",new dn(p,2));function _(S,x,d,g,y,M,A,T,v,b,I){const R=M/v,D=A/b,U=M/2,X=A/2,P=T/2,W=v+1,$=b+1;let z=0,k=0;const F=new G;for(let j=0;j<$;j++){const Y=j*D-X;for(let fe=0;fe<W;fe++){const Pe=fe*R-U;F[S]=Pe*g,F[x]=Y*y,F[d]=P,u.push(F.x,F.y,F.z),F[S]=0,F[x]=0,F[d]=T>0?1:-1,h.push(F.x,F.y,F.z),p.push(fe/v),p.push(1-j/b),z+=1}}for(let j=0;j<b;j++)for(let Y=0;Y<v;Y++){const fe=f+Y+W*j,Pe=f+Y+W*(j+1),Z=f+(Y+1)+W*(j+1),me=f+(Y+1)+W*j;l.push(fe,Pe,me),l.push(Pe,Z,me),k+=6}o.addGroup(m,k,I),m+=k,f+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class mp extends Ni{constructor(e=1,n=1,i=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const u=this;r=Math.floor(r),s=Math.floor(s);const h=[],p=[],f=[],m=[];let _=0;const S=[],x=i/2;let d=0;g(),a===!1&&(e>0&&y(!0),n>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new dn(p,3)),this.setAttribute("normal",new dn(f,3)),this.setAttribute("uv",new dn(m,2));function g(){const M=new G,A=new G;let T=0;const v=(n-e)/i;for(let b=0;b<=s;b++){const I=[],R=b/s,D=R*(n-e)+e;for(let U=0;U<=r;U++){const X=U/r,P=X*l+o,W=Math.sin(P),$=Math.cos(P);A.x=D*W,A.y=-R*i+x,A.z=D*$,p.push(A.x,A.y,A.z),M.set(W,v,$).normalize(),f.push(M.x,M.y,M.z),m.push(X,1-R),I.push(_++)}S.push(I)}for(let b=0;b<r;b++)for(let I=0;I<s;I++){const R=S[I][b],D=S[I+1][b],U=S[I+1][b+1],X=S[I][b+1];(e>0||I!==0)&&(h.push(R,D,X),T+=3),(n>0||I!==s-1)&&(h.push(D,U,X),T+=3)}u.addGroup(d,T,0),d+=T}function y(M){const A=_,T=new Ie,v=new G;let b=0;const I=M===!0?e:n,R=M===!0?1:-1;for(let U=1;U<=r;U++)p.push(0,x*R,0),f.push(0,R,0),m.push(.5,.5),_++;const D=_;for(let U=0;U<=r;U++){const P=U/r*l+o,W=Math.cos(P),$=Math.sin(P);v.x=I*$,v.y=x*R,v.z=I*W,p.push(v.x,v.y,v.z),f.push(0,R,0),T.x=W*.5+.5,T.y=$*.5*R+.5,m.push(T.x,T.y),_++}for(let U=0;U<r;U++){const X=A+U,P=D+U;M===!0?h.push(P,P+1,X):h.push(P+1,P,X),b+=3}u.addGroup(d,b,M===!0?1:2),d+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mp(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class na extends Ni{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),u=o+1,h=l+1,p=e/o,f=n/l,m=[],_=[],S=[],x=[];for(let d=0;d<h;d++){const g=d*f-a;for(let y=0;y<u;y++){const M=y*p-s;_.push(M,-g,0),S.push(0,0,1),x.push(y/o),x.push(1-d/l)}}for(let d=0;d<l;d++)for(let g=0;g<o;g++){const y=g+u*d,M=g+u*(d+1),A=g+1+u*(d+1),T=g+1+u*d;m.push(y,M,T),m.push(M,A,T)}this.setIndex(m),this.setAttribute("position",new dn(_,3)),this.setAttribute("normal",new dn(S,3)),this.setAttribute("uv",new dn(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new na(e.width,e.height,e.widthSegments,e.heightSegments)}}function ia(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(wg(r))r.isRenderTargetTexture?(De("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(wg(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function mn(t){const e={};for(let n=0;n<t.length;n++){const i=ia(t[n]);for(const r in i)e[r]=i[r]}return e}function wg(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function g1(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function p_(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}const x1={clone:ia,merge:mn};var v1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ss extends ua{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=v1,this.fragmentShader=_1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ia(e.uniforms),this.uniformsGroups=g1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=n[r.value]||null;break;case"c":this.uniforms[i].value=new je().setHex(r.value);break;case"v2":this.uniforms[i].value=new Ie().fromArray(r.value);break;case"v3":this.uniforms[i].value=new G().fromArray(r.value);break;case"v4":this.uniforms[i].value=new bt().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Oe().fromArray(r.value);break;case"m4":this.uniforms[i].value=new yt().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class y1 extends ss{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class lr extends ua{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gh,this.normalScale=new Ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class S1 extends ua{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Aw,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class M1 extends ua{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class gp extends tn{static registerNode(e){this.prototype._lightNode=e}constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new je(e),this.intensity=n}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const Ju=new yt,bg=new G,Tg=new G;class m_{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ie(512,512),this.mapType=kn,this.map=null,this.mapPass=null,this.matrix=new yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _o,this._frameExtents=new Ie(1,1),this._viewportCount=1,this._viewports=[new bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera;bg.setFromMatrixPosition(e.matrixWorld),n.position.copy(bg),Tg.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Tg),n.updateMatrixWorld(),this._updateMatrix(n,this.matrix,this._frustum)}_updateMatrix(e,n,i,r){Ju.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Ju,e.coordinateSystem,e.reversedDepth);const s=this._frameExtents,a=r?r.z/s.x:1,o=r?r.w/s.y:1,l=r?r.x/s.x:0,u=r?r.y/s.y:0;e.coordinateSystem===vo||e.reversedDepth?n.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+u,0,0,1,0,0,0,0,1):n.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+u,0,0,.5,.5,0,0,0,1),n.multiply(Ju)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const pl=new G,ml=new Nr,gi=new G;class g_ extends tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new yt,this.projectionMatrix=new yt,this.projectionMatrixInverse=new yt,this.coordinateSystem=di,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(pl,ml,gi),gi.x===1&&gi.y===1&&gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(pl,ml,gi.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(pl,ml,gi),gi.x===1&&gi.y===1&&gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(pl,ml,gi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const cr=new G,Ag=new Ie,Cg=new Ie;class Yn extends g_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Vh*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(zl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Vh*2*Math.atan(Math.tan(zl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){cr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(cr.x,cr.y).multiplyScalar(-e/cr.z),cr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(cr.x,cr.y).multiplyScalar(-e/cr.z)}getViewSize(e,n){return this.getViewBounds(e,Ag,Cg),n.subVectors(Cg,Ag)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(zl*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,u=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/u,r*=a.width/l,i*=a.height/u}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class E1 extends m_{constructor(){super(new Yn(90,1,.5,500)),this.isPointLightShadow=!0}}class Rg extends gp{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new E1}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class x_ extends g_{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class w1 extends m_{constructor(){super(new x_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class b1 extends gp{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.target=new tn,this.shadow=new w1}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class T1 extends gp{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const _s=-90,ys=1;class jh extends tn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Yn(_s,ys,e,n);r.layers=this.layers,this.add(r);const s=new Yn(_s,ys,e,n);s.layers=this.layers,this.add(s);const a=new Yn(_s,ys,e,n);a.layers=this.layers,this.add(a);const o=new Yn(_s,ys,e,n);o.layers=this.layers,this.add(o);const l=new Yn(_s,ys,e,n);l.layers=this.layers,this.add(l);const u=new Yn(_s,ys,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const u of n)this.remove(u);if(e===di)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===vo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,u,h]=this.children,p=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const S=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,2,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,3,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),i.texture.mipmapsAutoUpdate=S,e.setRenderTarget(i,5,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,h),e.setRenderTarget(p,f,m),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class A1 extends Yn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}const Ng=new yt;class C1{constructor(e,n,i=0,r=1/0){this.ray=new Wc(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new hp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,n.projectionMatrix.elements[14]).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):nt("Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return Ng.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ng),this}intersectObject(e,n=!0,i=[]){return Wh(e,this,i,n),i.sort(Pg),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Wh(e[r],this,i,n);return i.sort(Pg),i}}function Pg(t,e){return t.distance-e.distance}function Wh(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let a=0,o=s.length;a<o;a++)Wh(s[a],e,n,!0)}}class R1{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,De("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}class Lg{constructor(e=1,n=0,i=0){this.radius=e,this.phi=n,this.theta=i}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=We(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(We(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class N1 extends m1{constructor(e=10,n=10,i=4473924,r=8947848){i=new je(i),r=new je(r);const s=n/2,a=e/n,o=e/2,l=[],u=[];for(let f=0,m=0,_=-o;f<=n;f++,_+=a){l.push(-o,0,_,o,0,_),l.push(_,0,-o,_,0,o);const S=f===s?i:r;S.toArray(u,m),m+=3,S.toArray(u,m),m+=3,S.toArray(u,m),m+=3,S.toArray(u,m),m+=3}const h=new Ni;h.setAttribute("position",new dn(l,3)),h.setAttribute("color",new dn(u,3));const p=new u_({vertexColors:!0,toneMapped:!1});super(h,p),this.type="GridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}class P1 extends Ur{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Dg(t,e,n,i){const r=L1(i);switch(n){case Jv:return t*e;case t_:return t*e/r.components*r.byteLength;case op:return t*e/r.components*r.byteLength;case rs:return t*e*2/r.components*r.byteLength;case lp:return t*e*2/r.components*r.byteLength;case e_:return t*e*3/r.components*r.byteLength;case Mi:return t*e*4/r.components*r.byteLength;case cp:return t*e*4/r.components*r.byteLength;case Ul:case Ol:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Fl:case kl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case fh:case mh:return Math.max(t,16)*Math.max(e,8)/4;case hh:case ph:return Math.max(t,8)*Math.max(e,8)/2;case gh:case xh:case _h:case yh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case vh:case vc:case Sh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Mh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Eh:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case wh:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case bh:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Th:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Ah:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Ch:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Rh:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Nh:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Ph:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Lh:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Dh:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Ih:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Uh:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Oh:case Fh:case kh:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Bh:case zh:return Math.ceil(t/4)*Math.ceil(e/4)*8;case _c:case Hh:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function L1(t){switch(t){case kn:case $v:return{byteLength:1,components:1};case xo:case Kv:case Ci:return{byteLength:2,components:1};case sp:case ap:return{byteLength:2,components:4};case Ai:case rp:case Si:return{byteLength:4,components:1};case Zv:case Qv:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ip}}));typeof window<"u"&&(window.__THREE__?De("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ip);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function v_(){let t=null,e=!1,n=null,i=null;function r(s,a){i=t.requestAnimationFrame(r),n(s,a)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function D1(t){const e=new WeakMap;function n(o,l){const u=o.array,h=o.usage,p=u.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,u,h),o.onUploadCallback();let m;if(u instanceof Float32Array)m=t.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)m=t.HALF_FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)m=t.SHORT;else if(u instanceof Uint32Array)m=t.UNSIGNED_INT;else if(u instanceof Int32Array)m=t.INT;else if(u instanceof Int8Array)m=t.BYTE;else if(u instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:m,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:p}}function i(o,l,u){const h=l.array,p=l.updateRanges;if(t.bindBuffer(u,o),p.length===0)t.bufferSubData(u,0,h);else{p.sort((m,_)=>m.start-_.start);let f=0;for(let m=1;m<p.length;m++){const _=p[f],S=p[m];S.start<=_.start+_.count+1?_.count=Math.max(_.count,S.start+S.count-_.start):(++f,p[f]=S)}p.length=f+1;for(let m=0,_=p.length;m<_;m++){const S=p[m];t.bufferSubData(u,S.start*h.BYTES_PER_ELEMENT,h,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const u=e.get(o);if(u===void 0)e.set(o,n(o,l));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,o,l),u.version=o.version}}return{get:r,remove:s,update:a}}var I1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,U1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,O1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,F1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,k1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,B1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,z1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,H1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,G1=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,V1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,j1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,W1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,X1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,q1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Y1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,$1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,K1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Z1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Q1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,J1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,eb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,tb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,nb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,ib=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,rb=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,sb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ab=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ob=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cb="gl_FragColor = linearToOutputTexel( gl_FragColor );",ub=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,db=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,hb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,fb=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,pb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,gb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_b=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yb=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Sb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Mb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Eb=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,wb=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,bb=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Tb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ab=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Cb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Rb=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Nb=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Pb=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Lb=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Db=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ib=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ub=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Ob=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Fb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,zb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Hb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Gb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Vb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Wb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Xb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,qb=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Yb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$b=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Kb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Qb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Jb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,nT=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,iT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,rT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,aT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,oT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,lT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,cT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,uT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,pT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,mT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,gT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,xT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,vT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,_T=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,yT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ST=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,MT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ET=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,TT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,AT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,CT=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,RT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,NT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,PT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,LT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const DT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,IT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,UT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,OT=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,FT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,BT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,zT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,HT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,GT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,VT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,jT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,WT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,XT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,YT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$T=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,KT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,QT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,eA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,tA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,rA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,aA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,lA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,cA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ve={alphahash_fragment:I1,alphahash_pars_fragment:U1,alphamap_fragment:O1,alphamap_pars_fragment:F1,alphatest_fragment:k1,alphatest_pars_fragment:B1,aomap_fragment:z1,aomap_pars_fragment:H1,batching_pars_vertex:G1,batching_vertex:V1,begin_vertex:j1,beginnormal_vertex:W1,bsdfs:X1,iridescence_fragment:q1,bumpmap_pars_fragment:Y1,clipping_planes_fragment:$1,clipping_planes_pars_fragment:K1,clipping_planes_pars_vertex:Z1,clipping_planes_vertex:Q1,color_fragment:J1,color_pars_fragment:eb,color_pars_vertex:tb,color_vertex:nb,common:ib,defaultnormal_vertex:rb,displacementmap_pars_vertex:sb,displacementmap_vertex:ab,emissivemap_fragment:ob,emissivemap_pars_fragment:lb,colorspace_fragment:cb,colorspace_pars_fragment:ub,envmap_fragment:db,envmap_common_pars_fragment:hb,envmap_pars_fragment:fb,envmap_pars_vertex:pb,envmap_physical_pars_fragment:bb,envmap_vertex:mb,fog_vertex:gb,fog_pars_vertex:xb,fog_fragment:vb,fog_pars_fragment:_b,gradientmap_pars_fragment:yb,lightmap_pars_fragment:Sb,lights_lambert_fragment:Mb,lights_lambert_pars_fragment:Eb,lights_pars_begin:wb,lights_toon_fragment:Tb,lights_toon_pars_fragment:Ab,lights_phong_fragment:Cb,lights_phong_pars_fragment:Rb,lights_physical_fragment:Nb,lights_physical_pars_fragment:Pb,lights_fragment_begin:Lb,lights_fragment_maps:Db,lights_fragment_end:Ib,lightprobes_pars_fragment:Ub,logdepthbuf_fragment:Ob,logdepthbuf_pars_fragment:Fb,logdepthbuf_pars_vertex:kb,logdepthbuf_vertex:Bb,map_fragment:zb,map_pars_fragment:Hb,map_particle_fragment:Gb,map_particle_pars_fragment:Vb,metalnessmap_fragment:jb,metalnessmap_pars_fragment:Wb,morphinstance_vertex:Xb,morphcolor_vertex:qb,morphnormal_vertex:Yb,morphtarget_pars_vertex:$b,morphtarget_vertex:Kb,normal_fragment_begin:Zb,normal_fragment_maps:Qb,normal_pars_fragment:Jb,normal_pars_vertex:eT,normal_vertex:tT,normalmap_pars_fragment:nT,clearcoat_normal_fragment_begin:iT,clearcoat_normal_fragment_maps:rT,clearcoat_pars_fragment:sT,iridescence_pars_fragment:aT,opaque_fragment:oT,packing:lT,premultiplied_alpha_fragment:cT,project_vertex:uT,dithering_fragment:dT,dithering_pars_fragment:hT,roughnessmap_fragment:fT,roughnessmap_pars_fragment:pT,shadowmap_pars_fragment:mT,shadowmap_pars_vertex:gT,shadowmap_vertex:xT,shadowmask_pars_fragment:vT,skinbase_vertex:_T,skinning_pars_vertex:yT,skinning_vertex:ST,skinnormal_vertex:MT,specularmap_fragment:ET,specularmap_pars_fragment:wT,tonemapping_fragment:bT,tonemapping_pars_fragment:TT,transmission_fragment:AT,transmission_pars_fragment:CT,uv_pars_fragment:RT,uv_pars_vertex:NT,uv_vertex:PT,worldpos_vertex:LT,background_vert:DT,background_frag:IT,backgroundCube_vert:UT,backgroundCube_frag:OT,cube_vert:FT,cube_frag:kT,depth_vert:BT,depth_frag:zT,distance_vert:HT,distance_frag:GT,equirect_vert:VT,equirect_frag:jT,linedashed_vert:WT,linedashed_frag:XT,meshbasic_vert:qT,meshbasic_frag:YT,meshlambert_vert:$T,meshlambert_frag:KT,meshmatcap_vert:ZT,meshmatcap_frag:QT,meshnormal_vert:JT,meshnormal_frag:eA,meshphong_vert:tA,meshphong_frag:nA,meshphysical_vert:iA,meshphysical_frag:rA,meshtoon_vert:sA,meshtoon_frag:aA,points_vert:oA,points_frag:lA,shadow_vert:cA,shadow_frag:uA,sprite_vert:dA,sprite_frag:hA},ye={common:{diffuse:{value:new je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},envMapRotation:{value:new Oe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new Ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new je(16777215)},opacity:{value:1},center:{value:new Ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},_i={basic:{uniforms:mn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:mn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new je(0)},envMapIntensity:{value:1}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:mn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new je(0)},specular:{value:new je(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:mn([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:mn([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new je(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:mn([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:mn([ye.points,ye.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:mn([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:mn([ye.common,ye.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:mn([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:mn([ye.sprite,ye.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Oe}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distance:{uniforms:mn([ye.common,ye.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distance_vert,fragmentShader:Ve.distance_frag},shadow:{uniforms:mn([ye.lights,ye.fog,{color:{value:new je(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};_i.physical={uniforms:mn([_i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new Ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Oe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new Ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new je(0)},specularColor:{value:new je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new Ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const gl={r:0,b:0,g:0},fA=new yt,__=new Oe;__.set(-1,0,0,0,1,0,0,0,1);function pA(t,e,n,i,r,s){const a=new je(0);let o=r===!0?0:1,l,u,h=null,p=0,f=null;function m(g){let y=g.isScene===!0?g.background:null;if(y&&y.isTexture){const M=g.backgroundBlurriness>0;y=e.get(y,M)}return y}function _(g){let y=!1;const M=m(g);M===null?x(a,o):M&&M.isColor&&(x(M,1),y=!0);const A=t.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,s):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function S(g,y){const M=m(y);M&&M.isCubeTexture?(u===void 0&&(u=new zt(new Fn(1,1,1),new ss({name:"BackgroundCubeMaterial",uniforms:ia(_i.backgroundCube.uniforms),vertexShader:_i.backgroundCube.vertexShader,fragmentShader:_i.backgroundCube.fragmentShader,side:Ln,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,T,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=M,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(fA.makeRotationFromEuler(y.backgroundRotation)).transpose(),M.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(__),u.material.toneMapped=Ze.getTransfer(M.colorSpace)!==lt,(h!==M||p!==M.version||f!==t.toneMapping)&&(u.material.needsUpdate=!0,h=M,p=M.version,f=t.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new zt(new na(2,2),new ss({name:"BackgroundMaterial",uniforms:ia(_i.background.uniforms),vertexShader:_i.background.vertexShader,fragmentShader:_i.background.fragmentShader,side:is,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=Ze.getTransfer(M.colorSpace)!==lt,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||p!==M.version||f!==t.toneMapping)&&(l.material.needsUpdate=!0,h=M,p=M.version,f=t.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null))}function x(g,y){g.getRGB(gl,p_(t)),n.buffers.color.setClear(gl.r,gl.g,gl.b,y,s)}function d(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(g,y=1){a.set(g),o=y,x(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(g){o=g,x(a,o)},render:_,addToRenderList:S,dispose:d}}function mA(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,a=!1;function o(D,U,X,P,W){let $=!1;const z=p(D,P,X,U);s!==z&&(s=z,u(s.object)),$=m(D,P,X,W),$&&_(D,P,X,W),W!==null&&e.update(W,t.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,M(D,U,X,P),W!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return t.createVertexArray()}function u(D){return t.bindVertexArray(D)}function h(D){return t.deleteVertexArray(D)}function p(D,U,X,P){const W=P.wireframe===!0;let $=i[U.id];$===void 0&&($={},i[U.id]=$);const z=D.isInstancedMesh===!0?D.id:0;let k=$[z];k===void 0&&(k={},$[z]=k);let F=k[X.id];F===void 0&&(F={},k[X.id]=F);let j=F[W];return j===void 0&&(j=f(l()),F[W]=j),j}function f(D){const U=[],X=[],P=[];for(let W=0;W<n;W++)U[W]=0,X[W]=0,P[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:X,attributeDivisors:P,object:D,attributes:{},index:null}}function m(D,U,X,P){const W=s.attributes,$=U.attributes;let z=0;const k=X.getAttributes();for(const F in k)if(k[F].location>=0){const Y=W[F];let fe=$[F];if(fe===void 0&&(F==="instanceMatrix"&&D.instanceMatrix&&(fe=D.instanceMatrix),F==="instanceColor"&&D.instanceColor&&(fe=D.instanceColor)),Y===void 0||Y.attribute!==fe||fe&&Y.data!==fe.data)return!0;z++}return s.attributesNum!==z||s.index!==P}function _(D,U,X,P){const W={},$=U.attributes;let z=0;const k=X.getAttributes();for(const F in k)if(k[F].location>=0){let Y=$[F];Y===void 0&&(F==="instanceMatrix"&&D.instanceMatrix&&(Y=D.instanceMatrix),F==="instanceColor"&&D.instanceColor&&(Y=D.instanceColor));const fe={};fe.attribute=Y,Y&&Y.data&&(fe.data=Y.data),W[F]=fe,z++}s.attributes=W,s.attributesNum=z,s.index=P}function S(){const D=s.newAttributes;for(let U=0,X=D.length;U<X;U++)D[U]=0}function x(D){d(D,0)}function d(D,U){const X=s.newAttributes,P=s.enabledAttributes,W=s.attributeDivisors;X[D]=1,P[D]===0&&(t.enableVertexAttribArray(D),P[D]=1),W[D]!==U&&(t.vertexAttribDivisor(D,U),W[D]=U)}function g(){const D=s.newAttributes,U=s.enabledAttributes;for(let X=0,P=U.length;X<P;X++)U[X]!==D[X]&&(t.disableVertexAttribArray(X),U[X]=0)}function y(D,U,X,P,W,$,z){z===!0?t.vertexAttribIPointer(D,U,X,W,$):t.vertexAttribPointer(D,U,X,P,W,$)}function M(D,U,X,P){S();const W=P.attributes,$=X.getAttributes(),z=U.defaultAttributeValues;for(const k in $){const F=$[k];if(F.location>=0){let j=W[k];if(j===void 0&&(k==="instanceMatrix"&&D.instanceMatrix&&(j=D.instanceMatrix),k==="instanceColor"&&D.instanceColor&&(j=D.instanceColor)),j!==void 0){const Y=j.normalized,fe=j.itemSize,Pe=e.get(j);if(Pe===void 0)continue;const Z=Pe.buffer,me=Pe.type,te=Pe.bytesPerElement,re=me===t.INT||me===t.UNSIGNED_INT||j.gpuType===rp;if(j.isInterleavedBufferAttribute){const oe=j.data,Re=oe.isInterleavedBuffer===!0?oe.stride:oe.itemSize,at=j.offset;if(oe.isInstancedInterleavedBuffer||oe.isInstancedBufferAttribute){for(let Ae=0;Ae<F.locationSize;Ae++)d(F.location+Ae,oe.meshPerAttribute);D.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Ae=0;Ae<F.locationSize;Ae++)x(F.location+Ae);t.bindBuffer(t.ARRAY_BUFFER,Z);for(let Ae=0;Ae<F.locationSize;Ae++)y(F.location+Ae,fe/F.locationSize,me,Y,Re*te,(at+fe/F.locationSize*Ae)*te,re)}else{if(j.isInstancedBufferAttribute){for(let oe=0;oe<F.locationSize;oe++)d(F.location+oe,j.meshPerAttribute);D.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let oe=0;oe<F.locationSize;oe++)x(F.location+oe);t.bindBuffer(t.ARRAY_BUFFER,Z);for(let oe=0;oe<F.locationSize;oe++)y(F.location+oe,fe/F.locationSize,me,Y,fe*te,fe/F.locationSize*oe*te,re)}}else if(z!==void 0){const Y=z[k];if(Y!==void 0)switch(Y.length){case 2:t.vertexAttrib2fv(F.location,Y);break;case 3:t.vertexAttrib3fv(F.location,Y);break;case 4:t.vertexAttrib4fv(F.location,Y);break;default:t.vertexAttrib1fv(F.location,Y)}}}}g()}function A(){I();for(const D in i){const U=i[D];for(const X in U){const P=U[X];for(const W in P){const $=P[W];for(const z in $)h($[z].object),delete $[z];delete P[W]}}delete i[D]}}function T(D){if(i[D.id]===void 0)return;const U=i[D.id];for(const X in U){const P=U[X];for(const W in P){const $=P[W];for(const z in $)h($[z].object),delete $[z];delete P[W]}}delete i[D.id]}function v(D){for(const U in i){const X=i[U];for(const P in X){const W=X[P];if(W[D.id]===void 0)continue;const $=W[D.id];for(const z in $)h($[z].object),delete $[z];delete W[D.id]}}}function b(D){for(const U in i){const X=i[U],P=D.isInstancedMesh===!0?D.id:0,W=X[P];if(W!==void 0){for(const $ in W){const z=W[$];for(const k in z)h(z[k].object),delete z[k];delete W[$]}delete X[P],Object.keys(X).length===0&&delete i[U]}}}function I(){R(),a=!0,s!==r&&(s=r,u(s.object))}function R(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:I,resetDefaultState:R,dispose:A,releaseStatesOfGeometry:T,releaseStatesOfObject:b,releaseStatesOfProgram:v,initAttributes:S,enableAttribute:x,disableUnusedAttributes:g}}function gA(t,e,n){let i;function r(l){i=l}function s(l,u){t.drawArrays(i,l,u),n.update(u,i,1)}function a(l,u,h){h!==0&&(t.drawArraysInstanced(i,l,u,h),n.update(u,i,h))}function o(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,h);let f=0;for(let m=0;m<h;m++)f+=u[m];n.update(f,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function xA(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const v=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(v){return!(v!==Mi&&i.convert(v)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(v){const b=v===Ci&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(v!==kn&&v!==Si&&!b&&i.convert(v)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE))}function l(v){if(v==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const h=l(u);h!==u&&(De("WebGLRenderer:",u,"not supported, using",h,"instead."),u=h);const p=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=n.logarithmicDepthBuffer===!0&&p===!1;n.reversedDepthBuffer===!0&&p===!1&&De("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),n.logarithmicDepthBuffer===!0&&p===!0&&De("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=t.getParameter(t.MAX_TEXTURE_SIZE),x=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),d=t.getParameter(t.MAX_VERTEX_ATTRIBS),g=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),y=t.getParameter(t.MAX_VARYING_VECTORS),M=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),A=t.getParameter(t.MAX_SAMPLES),T=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:f,reversedDepthBuffer:p,maxTextures:m,maxVertexTextures:_,maxTextureSize:S,maxCubemapSize:x,maxAttributes:d,maxVertexUniforms:g,maxVaryings:y,maxFragmentUniforms:M,maxSamples:A,samples:T}}function vA(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new zi,o=new Oe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,f){const m=p.length!==0||f||i!==0||r;return r=f,i=p.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,f){n=h(p,f,0)},this.setState=function(p,f,m){const _=p.clippingPlanes,S=p.clipIntersection,x=p.clipShadows,d=t.get(p);if(!r||_===null||_.length===0||s&&!x)s?h(null):u();else{const g=s?0:i,y=g*4;let M=d.clippingState||null;l.value=M,M=h(_,f,y,m);for(let A=0;A!==y;++A)M[A]=n[A];d.clippingState=M,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=g}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(p,f,m,_){const S=p!==null?p.length:0;let x=null;if(S!==0){if(x=l.value,_!==!0||x===null){const d=m+S*4,g=f.matrixWorldInverse;o.getNormalMatrix(g),(x===null||x.length<d)&&(x=new Float32Array(d));for(let y=0,M=m;y!==S;++y,M+=4)a.copy(p[y]).applyMatrix4(g,o),a.normal.toArray(x,M),x[M+3]=a.constant}l.value=x,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,x}}class xp extends bi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new d_(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Fn(5,5,5),s=new ss({name:"CubemapFromEquirect",uniforms:ia(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ln,blending:js});s.uniforms.tEquirect.value=n;const a=new zt(r,s),o=n.minFilter;return n.minFilter===xr&&(n.minFilter=Cn),new jh(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}const Ig=256,_A=3,yA=20,y_=256,S_=16,SA=3,MA=new G,EA=new je;class bc{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new jh(1,10,null),this._boxMesh=new zt(new Fn(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:a=256,position:o=MA}=s,l=this._renderer;this._setSize(a);const u=this._allocateTarget(),h=this._getSourceTarget(!0);n>0&&(h.texture.mipmapsAutoUpdate=!1);const p=l.autoClear,f=l.autoClearColor,m=l.autoClearDepth,_=l.autoClearStencil,S=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,S===null&&(e.background=l.getClearColor(EA));const x=new jh(i,r,h);return x.position.copy(o),x.update(l,e),l.autoClear=p,l.autoClearColor=f,l.autoClearDepth=m,l.autoClearStencil=_,e.background=S,n>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(u,n)),this._applyPMREM(u),u}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Og(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,n){return n>0?1-Math.sqrt(1-e/n):0}_setSize(e){this._cubeSize=Math.max(Ig,Hw(e))}_fromTexture(e,n){e.mapping===Js||e.mapping===go?this._setSize(e.image.length===0?Ig:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const i=n||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){const e=this._cubeSize,n=Ug(e,!1,!1),i=Math.log2(e)-_A;for(let r=0;r<=i;r++)n.texture.mipmaps.push({width:e>>r,height:e>>r});return n.texture.name="PMREM",n.texture.isPMREMTexture=!0,n}_getSourceTarget(e=!1){const n=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==n||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=Ug(n,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,n,i){const r=this._boxMesh,s=this._cubeCamera;r.material=i,s.renderTarget=e,s.activeMipmapLevel=n;const a=e.width>>n;e.viewport.set(0,0,a,a),s.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let n;e.mapping===Js||e.mapping===go?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fg()),n=this._cubemapMaterial,n.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Og()),n=this._equirectMaterial),n.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,n)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=wA(),this._integrationMaterial=bA());const n=this._cubeSize,i=e.texture.mipmaps.length-1,r=this._ggxMaterial.uniforms;r.envMap.value=this._sourceTarget.texture;const s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(n/S_);for(let a=0;a<=i;a++){const o=bc.lodToRoughness(a,i);if(a>i-SA)s.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{const l=o>0?Math.log2(n)+.5*Math.log2(6/(y_*Math.pow(o,4)))+.5:0;r.roughness.value=o,r.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,n){this._blurMaterial===null&&(this._blurMaterial=TA());const i=this._blurMaterial,r=i.uniforms,s=this._sourceTarget;r.sigma.value=Math.min(n,Math.PI)/Math.SQRT2,r.envMap.value=s.texture,this._renderCube(e,0,i),r.envMap.value=e.texture,this._renderCube(s,0,i)}}function Ug(t,e,n){return new xp(t,{minFilter:xr,generateMipmaps:e,type:Ci,colorSpace:yc,depthBuffer:n})}function Co(t,e,n){return new ss({name:t,uniforms:e,vertexShader:Ve.cube_vert,fragmentShader:n,side:Ln,blending:js,depthTest:!1,depthWrite:!1})}function wA(){return Co("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${y_}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function bA(){return Co("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:S_}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function TA(){return Co("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${yA}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Og(){return Co("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Fg(){return Co("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function AA(t){let e=new WeakMap,n=new WeakMap,i=null;function r(f,m=!1){return f==null?null:m?a(f):s(f)}function s(f){if(f&&f.isTexture){const m=f.mapping;if(m===Au||m===Cu)if(e.has(f)){const _=e.get(f).texture;return o(_,f.mapping)}else{const _=f.image;if(_&&_.height>0){const S=new xp(_.height);return S.fromEquirectangularTexture(t,f),e.set(f,S),f.addEventListener("dispose",u),o(S.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){const m=f.mapping,_=m===Au||m===Cu,S=m===Js||m===go;if(_||S){let x=n.get(f);const d=x!==void 0?x.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==d)return i===null&&(i=new bc(t)),x=_?i.fromEquirectangular(f,x):i.fromCubemap(f,x),x.texture.pmremVersion=f.pmremVersion,n.set(f,x),x.texture;if(x!==void 0)return x.texture;{const g=f.image;return _&&g&&g.height>0||S&&g&&l(g)?(i===null&&(i=new bc(t)),x=_?i.fromEquirectangular(f):i.fromCubemap(f),x.texture.pmremVersion=f.pmremVersion,n.set(f,x),f.addEventListener("dispose",h),x.texture):null}}}return f}function o(f,m){return m===Au?f.mapping=Js:m===Cu&&(f.mapping=go),f}function l(f){let m=0;const _=6;for(let S=0;S<_;S++)f[S]!==void 0&&m++;return m===_}function u(f){const m=f.target;m.removeEventListener("dispose",u);const _=e.get(m);_!==void 0&&(e.delete(m),_.dispose())}function h(f){const m=f.target;m.removeEventListener("dispose",h);const _=n.get(m);_!==void 0&&(n.delete(m),_.dispose())}function p(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:p}}function CA(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Bl("WebGLRenderer: "+i+" extension not supported."),r}}}function RA(t,e,n,i){const r={},s=new WeakMap,a=new FinalizationRegistry(_=>delete r[_]);function o(_){l(_.target)}function l(_){_.index!==null&&e.remove(_.index);for(const x in _.attributes)e.remove(_.attributes[x]);_.removeEventListener("dispose",o),delete r[_.id],a.unregister(_);const S=s.get(_);S&&(e.remove(S),s.delete(_)),i.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,n.memory.geometries--}function u(_,S){return r[S.id]!==void 0||(S.addEventListener("dispose",o),r[S.id]=new WeakRef(S),a.register(S,S.id,S),n.memory.geometries++),S}function h(_){const S=_.attributes;for(const x in S)e.update(S[x],t.ARRAY_BUFFER)}function p(_){const S=_.index,x=_.attributes.position;let d=0;if(x===void 0)return;const g=S!==null?S.array.length:x.array.length/3-1,y=x.count>=65535?c_:l_,M=new y(Math.ceil(g/3)*6,1),A=M.array;if(S!==null){const v=S.array;d=S.version;for(let b=0,I=0;b<g;b+=3){const R=v[b+0],D=v[b+1],U=v[b+2];A[I++]=R,A[I++]=D,A[I++]=D,A[I++]=U,A[I++]=U,A[I++]=R}}else{d=x.version;for(let v=0,b=0;v<g;v+=3){const I=v+0,R=v+1,D=v+2;A[b++]=I,A[b++]=R,A[b++]=R,A[b++]=D,A[b++]=D,A[b++]=I}}M.version=d;const T=s.get(_);T&&e.remove(T),s.set(_,M)}function f(_){const S=s.get(_);if(S){const x=_.index;x!==null&&S.version<x.version&&p(_)}else p(_);return s.get(_)}function m(){for(const _ in r){const S=r[_].deref();S!==void 0&&l(S)}}return{get:u,update:h,getWireframeAttribute:f,dispose:m}}function NA(t,e,n){let i;function r(p){i=p}let s,a;function o(p){s=p.type,a=p.bytesPerElement}function l(p,f){t.drawElements(i,f,s,p*a),n.update(f,i,1)}function u(p,f,m){m!==0&&(t.drawElementsInstanced(i,f,s,p*a,m),n.update(f,i,m))}function h(p,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,p,0,m);let S=0;for(let x=0;x<m;x++)S+=f[x];n.update(S,i,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=h}function PA(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:nt("WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function LA(t,e,n){const i=new WeakMap,r=new bt;function s(a,o,l){const u=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=h!==void 0?h.length:0;let f=i.get(o);if(f===void 0||f.count!==p){let R=function(){b.dispose(),i.delete(o),o.removeEventListener("dispose",R)};var m=R;f!==void 0&&f.texture.dispose();const _=o.morphAttributes.position!==void 0,S=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let M=0;_===!0&&(M=1),S===!0&&(M=2),x===!0&&(M=3);let A=o.attributes.position.count*M,T=1;A>e.maxTextureSize&&(T=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const v=new Float32Array(A*T*4*p),b=new a_(v,A,T,p);b.type=Si,b.needsUpdate=!0;const I=M*4;for(let D=0;D<p;D++){const U=d[D],X=g[D],P=y[D],W=A*T*4*D;for(let $=0;$<U.count;$++){const z=$*I;_===!0&&(r.fromBufferAttribute(U,$),v[W+z+0]=r.x,v[W+z+1]=r.y,v[W+z+2]=r.z,v[W+z+3]=0),S===!0&&(r.fromBufferAttribute(X,$),v[W+z+4]=r.x,v[W+z+5]=r.y,v[W+z+6]=r.z,v[W+z+7]=0),x===!0&&(r.fromBufferAttribute(P,$),v[W+z+8]=r.x,v[W+z+9]=r.y,v[W+z+10]=r.z,v[W+z+11]=P.itemSize===4?r.w:1)}}f={count:p,texture:b,size:new Ie(A,T)},i.set(o,f),o.addEventListener("dispose",R)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let _=0;for(let x=0;x<u.length;x++)_+=u[x];const S=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(t,"morphTargetBaseInfluence",S),l.getUniforms().setValue(t,"morphTargetInfluences",u)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function DA(t,e,n,i,r){let s=new WeakMap;function a(u){const h=r.render.frame,p=u.geometry,f=e.get(u,p);if(s.get(f)!==h&&(e.update(f),s.set(f,h)),u.isInstancedMesh&&(u.hasEventListener("dispose",l)===!1&&u.addEventListener("dispose",l),s.get(u)!==h&&(n.update(u.instanceMatrix,t.ARRAY_BUFFER),u.instanceColor!==null&&n.update(u.instanceColor,t.ARRAY_BUFFER),s.set(u,h))),u.isSkinnedMesh){const m=u.skeleton;s.get(m)!==h&&(m.update(),s.set(m,h))}return f}function o(){s=new WeakMap}function l(u){const h=u.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),n.remove(h.instanceMatrix),h.instanceColor!==null&&n.remove(h.instanceColor)}return{update:a,dispose:o}}const IA={[Hv]:"LINEAR_TONE_MAPPING",[Gv]:"REINHARD_TONE_MAPPING",[Vv]:"CINEON_TONE_MAPPING",[jv]:"ACES_FILMIC_TONE_MAPPING",[Xv]:"AGX_TONE_MAPPING",[qv]:"NEUTRAL_TONE_MAPPING",[Wv]:"CUSTOM_TONE_MAPPING"};function UA(t,e,n,i,r,s){const a=new bi(e,n,{type:t,depthBuffer:r,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null,u=null;const h=new Ni;h.setAttribute("position",new dn([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new dn([0,2,0,0,2,0],2));const p=new y1({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new zt(h,p),m=new x_(-1,1,1,-1,0,1);let _=null,S=null,x=!1,d,g=null,y=[],M=!1;this.setSize=function(A,T){a.setSize(A,T),o!==null&&o.setSize(A,T),l!==null&&l.setSize(A,T);for(let v=0;v<y.length;v++){const b=y[v];b.setSize&&b.setSize(A,T)}},this.setEffects=function(A){y=A,M=y.length>0&&y[0].isRenderPass===!0;const T=a.width,v=a.height;y.length>0&&o===null&&(o=new bi(T,v,{type:Ci,depthBuffer:!1,stencilBuffer:!1}),l=new bi(T,v,{type:Ci,depthBuffer:!1,stencilBuffer:!1}));const b=r===!0&&y.some(I=>I.needsDepthTexture===!0);b!==(a.depthTexture!==null)&&(b===!0&&u===null&&(u=new ta(T,v),s===!0&&(u.format=vr,u.type=ea)),a.dispose(),a.depthTexture=b?u:null,a.resolveDepthBuffer=b,a.storeMultisampledDepthBuffer=b);for(let I=0;I<y.length;I++){const R=y[I];R.setSize&&R.setSize(T,v),b&&R.needsDepthTexture===!0&&R.setDepthTexture&&R.setDepthTexture(u)}},this.begin=function(A,T){if(x||A.toneMapping===Xi&&y.length===0)return!1;if(g=T,T!==null){const v=T.width,b=T.height;(a.width!==v||a.height!==b)&&this.setSize(v,b)}return M===!1&&A.setRenderTarget(a),d=A.toneMapping,A.toneMapping=Xi,!0},this.hasRenderPass=function(){return M},this.end=function(A,T){A.toneMapping=d,x=!0;let v=a,b=o;for(let I=0;I<y.length;I++){const R=y[I];R.enabled!==!1&&(R.render(A,b,v,T),R.needsSwap!==!1&&(v=b,b=b===o?l:o))}if(_!==A.outputColorSpace||S!==A.toneMapping){_=A.outputColorSpace,S=A.toneMapping,p.defines={},Ze.getTransfer(_)===lt&&(p.defines.SRGB_TRANSFER="");const I=IA[S];I&&(p.defines[I]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=v.texture,A.setRenderTarget(g),A.render(f,m),g=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),p.dispose()}}const M_=new vn,E_=new ta(1,1),w_=new h_(1),b_=new a_,T_=new Kw,A_=new d_,kg=[],Bg=[],zg=new Float32Array(16),Hg=new Float32Array(9),Gg=new Float32Array(4);function da(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=kg[r];if(s===void 0&&(s=new Float32Array(r),kg[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Vt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function jt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Xc(t,e){let n=Bg[e];n===void 0&&(n=new Int32Array(e),Bg[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function OA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function FA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Vt(n,e))return;t.uniform2fv(this.addr,e),jt(n,e)}}function kA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Vt(n,e))return;t.uniform3fv(this.addr,e),jt(n,e)}}function BA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Vt(n,e))return;t.uniform4fv(this.addr,e),jt(n,e)}}function zA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Vt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),jt(n,e)}else{if(Vt(n,i))return;Gg.set(i),t.uniformMatrix2fv(this.addr,!1,Gg),jt(n,i)}}function HA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Vt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),jt(n,e)}else{if(Vt(n,i))return;Hg.set(i),t.uniformMatrix3fv(this.addr,!1,Hg),jt(n,i)}}function GA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Vt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),jt(n,e)}else{if(Vt(n,i))return;zg.set(i),t.uniformMatrix4fv(this.addr,!1,zg),jt(n,i)}}function VA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function jA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Vt(n,e))return;t.uniform2iv(this.addr,e),jt(n,e)}}function WA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Vt(n,e))return;t.uniform3iv(this.addr,e),jt(n,e)}}function XA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Vt(n,e))return;t.uniform4iv(this.addr,e),jt(n,e)}}function qA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function YA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Vt(n,e))return;t.uniform2uiv(this.addr,e),jt(n,e)}}function $A(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Vt(n,e))return;t.uniform3uiv(this.addr,e),jt(n,e)}}function KA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Vt(n,e))return;t.uniform4uiv(this.addr,e),jt(n,e)}}function qc(t){return t.version===0&&(t.compareFunction=r_,t.needsUpdate=!0),t}function ZA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?s=qc(E_):s=M_,n.setTexture2D(e||s,r)}function QA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||T_,r)}function JA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_CUBE_SHADOW?s=qc(w_):s=A_,n.setTextureCube(e||s,r)}function eC(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||b_,r)}function tC(t){switch(t){case 5126:return OA;case 35664:return FA;case 35665:return kA;case 35666:return BA;case 35674:return zA;case 35675:return HA;case 35676:return GA;case 5124:case 35670:return VA;case 35667:case 35671:return jA;case 35668:case 35672:return WA;case 35669:case 35673:return XA;case 5125:return qA;case 36294:return YA;case 36295:return $A;case 36296:return KA;case 35678:case 36198:case 36298:case 36306:case 35682:return ZA;case 35679:case 36299:case 36307:return QA;case 35680:case 36300:case 36308:case 36293:return JA;case 36289:case 36303:case 36311:case 36292:return eC}}function nC(t,e){t.uniform1fv(this.addr,e)}function iC(t,e){const n=da(e,this.size,2);t.uniform2fv(this.addr,n)}function rC(t,e){const n=da(e,this.size,3);t.uniform3fv(this.addr,n)}function sC(t,e){const n=da(e,this.size,4);t.uniform4fv(this.addr,n)}function aC(t,e){const n=da(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function oC(t,e){const n=da(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function lC(t,e){const n=da(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function cC(t,e){t.uniform1iv(this.addr,e)}function uC(t,e){t.uniform2iv(this.addr,e)}function dC(t,e){t.uniform3iv(this.addr,e)}function hC(t,e){t.uniform4iv(this.addr,e)}function fC(t,e){t.uniform1uiv(this.addr,e)}function pC(t,e){t.uniform2uiv(this.addr,e)}function mC(t,e){t.uniform3uiv(this.addr,e)}function gC(t,e){t.uniform4uiv(this.addr,e)}function xC(t,e,n){const i=this.cache,r=e.length,s=Xc(n,r);Vt(i,s)||(t.uniform1iv(this.addr,s),jt(i,s));let a;this.type===t.SAMPLER_2D_SHADOW?a=qc(E_):a=M_;for(let o=0;o!==r;++o)n.setTexture2D(e[o]||a,s[o])}function vC(t,e,n){const i=this.cache,r=e.length,s=Xc(n,r);Vt(i,s)||(t.uniform1iv(this.addr,s),jt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||T_,s[a])}function _C(t,e,n){const i=this.cache,r=e.length,s=Xc(n,r);Vt(i,s)||(t.uniform1iv(this.addr,s),jt(i,s));let a;this.type===t.SAMPLER_CUBE_SHADOW?a=qc(w_):a=A_;for(let o=0;o!==r;++o)n.setTextureCube(e[o]||a,s[o])}function yC(t,e,n){const i=this.cache,r=e.length,s=Xc(n,r);Vt(i,s)||(t.uniform1iv(this.addr,s),jt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||b_,s[a])}function SC(t){switch(t){case 5126:return nC;case 35664:return iC;case 35665:return rC;case 35666:return sC;case 35674:return aC;case 35675:return oC;case 35676:return lC;case 5124:case 35670:return cC;case 35667:case 35671:return uC;case 35668:case 35672:return dC;case 35669:case 35673:return hC;case 5125:return fC;case 36294:return pC;case 36295:return mC;case 36296:return gC;case 35678:case 36198:case 36298:case 36306:case 35682:return xC;case 35679:case 36299:case 36307:return vC;case 35680:case 36300:case 36308:case 36293:return _C;case 36289:case 36303:case 36311:case 36292:return yC}}class MC{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=tC(n.type)}}class EC{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=SC(n.type)}}class wC{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const ed=/(\w+)(\])?(\[|\.)?/g;function Vg(t,e){t.seq.push(e),t.map[e.id]=e}function bC(t,e,n){const i=t.name,r=i.length;for(ed.lastIndex=0;;){const s=ed.exec(i),a=ed.lastIndex;let o=s[1];const l=s[2]==="]",u=s[3];if(l&&(o=o|0),u===void 0||u==="["&&a+2===r){Vg(n,u===void 0?new MC(o,t,e):new EC(o,t,e));break}else{let p=n.map[o];p===void 0&&(p=new wC(o),Vg(n,p)),n=p}}}class Hl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(n,a),l=e.getUniformLocation(n,o.name);bC(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function jg(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const TC=37297;let AC=0;function CC(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const Wg=new Oe;function RC(t){Ze._getMatrix(Wg,Ze.workingColorSpace,t);const e=`mat3( ${Wg.elements.map(n=>n.toFixed(4))} )`;switch(Ze.getTransfer(t)){case Sc:return[e,"LinearTransferOETF"];case lt:return[e,"sRGBTransferOETF"];default:return De("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Xg(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return n.toUpperCase()+`

`+s+`

`+CC(t.getShaderSource(e),o)}else return s}function NC(t,e){const n=RC(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( ${n[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const PC={[Hv]:"Linear",[Gv]:"Reinhard",[Vv]:"Cineon",[jv]:"ACESFilmic",[Xv]:"AgX",[qv]:"Neutral",[Wv]:"Custom"};function LC(t,e){const n=PC[e];return n===void 0?(De("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const xl=new G;function DC(){Ze.getLuminanceCoefficients(xl);const t=xl.x.toFixed(4),e=xl.y.toFixed(4),n=xl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function IC(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fa).join(`
`)}function UC(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function OC(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function Fa(t){return t!==""}function qg(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Yg(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const FC=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xh(t){return t.replace(FC,kC)}function kC(t,e){const n=Ve[e];if(n===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Xh(n)}const BC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $g(t){return t.replace(BC,zC)}function zC(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Kg(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const HC={[Il]:"SHADOWMAP_TYPE_PCF",[Ua]:"SHADOWMAP_TYPE_VSM"};function GC(t){return HC[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const VC={[go]:"ENVMAP_MODE_REFRACTION"};function jC(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":VC[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const WC={[zv]:"ENVMAP_BLENDING_MULTIPLY",[ww]:"ENVMAP_BLENDING_MIX",[bw]:"ENVMAP_BLENDING_ADD"};function XC(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":WC[t.combine]||"ENVMAP_BLENDING_NONE"}function qC(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=GC(n),u=n.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=jC(n),p=XC(n),f=IC(n),m=UC(s),_=r.createProgram();let S,x,d=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m].filter(Fa).join(`
`),S.length>0&&(S+=`
`),x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m].filter(Fa).join(`
`),x.length>0&&(x+=`
`)):(S=[Kg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+n.diffuseRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fa).join(`
`),x=[Kg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+h:"",n.envMap?"#define "+p:"",n.envMapPMREM?"#define ENVMAP_MAX_LOD "+n.envMapMaxLod+".0":"",n.envMapPMREM?"#define ENVMAP_SIZE "+n.envMapSize+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",n.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Xi?"#define TONE_MAPPING":"",n.toneMapping!==Xi?Ve.tonemapping_pars_fragment:"",n.toneMapping!==Xi?LC("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,NC("linearToOutputTexel",n.outputColorSpace),DC(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Fa).join(`
`)),a=Xh(a),a=qg(a,n),a=Yg(a,n),o=Xh(o),o=qg(o,n),o=Yg(o,n),a=$g(a),o=$g(o),n.isRawShaderMaterial!==!0&&(d=`#version 300 es
`,S=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,x=["#define varying in",n.glslVersion===ng?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===ng?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const g=d+S+a,y=d+x+o,M=jg(r,r.VERTEX_SHADER,g),A=jg(r,r.FRAGMENT_SHADER,y);r.attachShader(_,M),r.attachShader(_,A),n.index0AttributeName!==void 0?r.bindAttribLocation(_,0,n.index0AttributeName):n.hasPositionAttribute===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function T(R){if(t.debug.checkShaderErrors){const D=r.getProgramInfoLog(_)||"",U=r.getShaderInfoLog(M)||"",X=r.getShaderInfoLog(A)||"",P=D.trim(),W=U.trim(),$=X.trim();let z=!0,k=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(z=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,_,M,A);else{const F=Xg(r,M,"vertex"),j=Xg(r,A,"fragment");nt("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+P+`
`+F+`
`+j)}else P!==""?De("WebGLProgram: Program Info Log:",P):(W===""||$==="")&&(k=!1);k&&(R.diagnostics={runnable:z,programLog:P,vertexShader:{log:W,prefix:S},fragmentShader:{log:$,prefix:x}})}r.deleteShader(M),r.deleteShader(A),v=new Hl(r,_),b=OC(r,_)}let v;this.getUniforms=function(){return v===void 0&&T(this),v};let b;this.getAttributes=function(){return b===void 0&&T(this),b};let I=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=r.getProgramParameter(_,TC)),I},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=AC++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=M,this.fragmentShader=A,this}let YC=0;class $C{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){const r=this._getShaderCacheForMaterial(e);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new KC(e),n.set(e,i)),i}}class KC{constructor(e){this.id=YC++,this.code=e,this.usedTimes=0}}function ZC(t){return t===rs||t===vc||t===_c}function QC(t,e,n,i,r,s){const a=new hp,o=new $C,l=new Set,u=[],h=new Map,p=i.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(v){return l.add(v),v===0?"uv":`uv${v}`}function _(v,b,I,R,D,U){const X=R.fog,P=D.geometry,W=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?R.environment:null,$=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,z=e.get(v.envMap||W,$),k=f[v.type];let F=i.precision;v.precision!==null&&(F=i.getMaxPrecision(v.precision),F!==v.precision&&De("WebGLProgram.getParameters:",v.precision,"not supported, using",F,"instead."));const j=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,Y=j!==void 0?j.length:0;let fe=0;P.morphAttributes.position!==void 0&&(fe=1),P.morphAttributes.normal!==void 0&&(fe=2),P.morphAttributes.color!==void 0&&(fe=3);let Pe,Z,me,te;if(k){const _e=_i[k];Pe=_e.vertexShader,Z=_e.fragmentShader}else{Pe=v.vertexShader,Z=v.fragmentShader;const _e=o.getVertexShaderStage(v),ot=o.getFragmentShaderStage(v);o.update(v,_e,ot),me=_e.id,te=ot.id}const re=t.getRenderTarget(),oe=t.state.buffers.depth.getReversed(),Re=D.isInstancedMesh===!0,at=D.isBatchedMesh===!0,Ae=!!v.map,qe=!!v.matcap,Qe=!!z,Be=Qe&&z.isPMREMTexture===!0,Rt=!!v.aoMap,mt=!!v.lightMap,Lt=!!v.bumpMap&&v.wireframe===!1,gt=!!v.normalMap,Sn=!!v.displacementMap,Nt=!!v.emissiveMap,fn=!!v.metalnessMap,Mn=!!v.roughnessMap,Dn=v.anisotropy>0,O=v.clearcoat>0,En=v.diffuseRoughness>0,ht=v.dispersion>0,ut=v.retroreflectivity>0,ve=v.iridescence>0,kt=v.sheen>0,Le=v.transmission>0,Ue=Dn&&!!v.anisotropyMap,C=O&&!!v.clearcoatMap,E=O&&!!v.clearcoatNormalMap,H=O&&!!v.clearcoatRoughnessMap,ie=En&&!!v.diffuseRoughnessMap,ne=ve&&!!v.iridescenceMap,ce=ve&&!!v.iridescenceThicknessMap,ge=kt&&!!v.sheenColorMap,Q=kt&&!!v.sheenRoughnessMap,J=!!v.specularMap,de=!!v.specularColorMap,N=!!v.specularIntensityMap,ee=Le&&!!v.transmissionMap,K=Le&&!!v.thicknessMap,he=!!v.gradientMap,le=!!v.alphaMap,ue=v.alphaTest>0,Ce=!!v.alphaHash,Ge=!!v.extensions;let ae=Xi;v.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(ae=t.toneMapping);const Ne=Be?z.isCompressedCubeTexture?z.image[0].mipmaps:z.mipmaps:null,ze={shaderID:k,shaderType:v.type,shaderName:v.name,vertexShader:Pe,fragmentShader:Z,defines:v.defines,customVertexShaderID:me,customFragmentShaderID:te,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:F,batching:at,batchingColor:at&&D._colorsTexture!==null,instancing:Re,instancingColor:Re&&D.instanceColor!==null,instancingMorph:Re&&D.morphTexture!==null,outputColorSpace:re===null?t.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:Ze.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Ae,matcap:qe,envMap:Qe,envMapMode:Qe&&z.mapping,envMapPMREM:Be,envMapMaxLod:Be?Ne.length-1:null,envMapSize:Be?Ne[0].width:null,aoMap:Rt,lightMap:mt,bumpMap:Lt,normalMap:gt,displacementMap:Sn,emissiveMap:Nt,normalMapObjectSpace:gt&&v.normalMapType===Cw,normalMapTangentSpace:gt&&v.normalMapType===Gh,packedNormalMap:gt&&v.normalMapType===Gh&&ZC(v.normalMap.format),metalnessMap:fn,roughnessMap:Mn,anisotropy:Dn,anisotropyMap:Ue,clearcoat:O,clearcoatMap:C,clearcoatNormalMap:E,clearcoatRoughnessMap:H,diffuseRoughness:En,diffuseRoughnessMap:ie,dispersion:ht,retroreflection:ut,iridescence:ve,iridescenceMap:ne,iridescenceThicknessMap:ce,sheen:kt,sheenColorMap:ge,sheenRoughnessMap:Q,specularMap:J,specularColorMap:de,specularIntensityMap:N,transmission:Le,transmissionMap:ee,thicknessMap:K,gradientMap:he,opaque:v.transparent===!1&&v.blending===$a&&v.alphaToCoverage===!1,alphaMap:le,alphaTest:ue,alphaHash:Ce,combine:v.combine,mapUv:Ae&&m(v.map.channel),aoMapUv:Rt&&m(v.aoMap.channel),lightMapUv:mt&&m(v.lightMap.channel),bumpMapUv:Lt&&m(v.bumpMap.channel),normalMapUv:gt&&m(v.normalMap.channel),displacementMapUv:Sn&&m(v.displacementMap.channel),emissiveMapUv:Nt&&m(v.emissiveMap.channel),metalnessMapUv:fn&&m(v.metalnessMap.channel),roughnessMapUv:Mn&&m(v.roughnessMap.channel),anisotropyMapUv:Ue&&m(v.anisotropyMap.channel),clearcoatMapUv:C&&m(v.clearcoatMap.channel),clearcoatNormalMapUv:E&&m(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:H&&m(v.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ie&&m(v.diffuseRoughnessMap.channel),iridescenceMapUv:ne&&m(v.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&m(v.iridescenceThicknessMap.channel),sheenColorMapUv:ge&&m(v.sheenColorMap.channel),sheenRoughnessMapUv:Q&&m(v.sheenRoughnessMap.channel),specularMapUv:J&&m(v.specularMap.channel),specularColorMapUv:de&&m(v.specularColorMap.channel),specularIntensityMapUv:N&&m(v.specularIntensityMap.channel),transmissionMapUv:ee&&m(v.transmissionMap.channel),thicknessMapUv:K&&m(v.thicknessMap.channel),alphaMapUv:le&&m(v.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(gt||Dn),vertexNormals:!!P.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!P.attributes.uv&&(Ae||le),fog:!!X,useFog:v.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||P.attributes.normal===void 0&&gt===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:oe,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:Y,morphTextureStride:fe,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:U.filter(_e=>_e.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:t.shadowMap.enabled&&I.length>0,shadowMapType:t.shadowMap.type,toneMapping:ae,decodeVideoTexture:Ae&&v.map.isVideoTexture===!0&&Ze.getTransfer(v.map.colorSpace)===lt,decodeVideoTextureEmissive:Nt&&v.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(v.emissiveMap.colorSpace)===lt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Hi,flipSided:v.side===Ln,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Ge&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ge&&v.extensions.multiDraw===!0||at)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return ze.vertexUv1s=l.has(1),ze.vertexUv2s=l.has(2),ze.vertexUv3s=l.has(3),l.clear(),ze}function S(v){const b=[];if(v.shaderID?b.push(v.shaderID):(b.push(v.customVertexShaderID),b.push(v.customFragmentShaderID)),v.defines!==void 0)for(const I in v.defines)b.push(I),b.push(v.defines[I]);return v.isRawShaderMaterial===!1&&(x(b,v),d(b,v),b.push(t.outputColorSpace)),b.push(v.customProgramCacheKey),b.join()}function x(v,b){v.push(b.precision),v.push(b.outputColorSpace),v.push(b.envMapMode),v.push(b.envMapPMREM),v.push(b.envMapMaxLod),v.push(b.envMapSize),v.push(b.mapUv),v.push(b.alphaMapUv),v.push(b.lightMapUv),v.push(b.aoMapUv),v.push(b.bumpMapUv),v.push(b.normalMapUv),v.push(b.displacementMapUv),v.push(b.emissiveMapUv),v.push(b.metalnessMapUv),v.push(b.roughnessMapUv),v.push(b.anisotropyMapUv),v.push(b.clearcoatMapUv),v.push(b.clearcoatNormalMapUv),v.push(b.clearcoatRoughnessMapUv),v.push(b.diffuseRoughnessMapUv),v.push(b.iridescenceMapUv),v.push(b.iridescenceThicknessMapUv),v.push(b.sheenColorMapUv),v.push(b.sheenRoughnessMapUv),v.push(b.specularMapUv),v.push(b.specularColorMapUv),v.push(b.specularIntensityMapUv),v.push(b.transmissionMapUv),v.push(b.thicknessMapUv),v.push(b.combine),v.push(b.fogExp2),v.push(b.sizeAttenuation),v.push(b.morphTargetsCount),v.push(b.numSunLights),v.push(b.numDirLights),v.push(b.numPointLights),v.push(b.numSpotLights),v.push(b.numSpotLightMaps),v.push(b.numHemiLights),v.push(b.numRectAreaLights),v.push(b.numSunLightShadows),v.push(b.numDirLightShadows),v.push(b.numPointLightShadows),v.push(b.numSpotLightShadows),v.push(b.numSpotLightShadowsWithMaps),v.push(b.numLightProbes),v.push(b.numLightProbeGrids),v.push(b.shadowMapType),v.push(b.toneMapping),v.push(b.numClippingPlanes),v.push(b.numClipIntersection),v.push(b.depthPacking)}function d(v,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.retroreflection&&a.enable(24),b.diffuseRoughness&&a.enable(25),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function g(v){const b=f[v.type];let I;if(b){const R=_i[b];I=x1.clone(R.uniforms)}else I=v.uniforms;return I}function y(v,b){let I=h.get(b);return I!==void 0?++I.usedTimes:(I=new qC(t,b,v,r),u.push(I),h.set(b,I)),I}function M(v){if(--v.usedTimes===0){const b=u.indexOf(v);u[b]=u[u.length-1],u.pop(),h.delete(v.cacheKey),v.destroy()}}function A(v){o.remove(v)}function T(){o.dispose()}return{getParameters:_,getProgramCacheKey:S,getUniforms:g,acquireProgram:y,releaseProgram:M,releaseShaderCache:A,programs:u,dispose:T}}function JC(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function eR(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function Zg(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Qg(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(f){let m=0;return f.isInstancedMesh&&(m+=2),f.isSkinnedMesh&&(m+=1),m}function o(f,m,_,S,x,d){let g=t[e];return g===void 0?(g={id:f.id,object:f,geometry:m,material:_,materialVariant:a(f),groupOrder:S,renderOrder:f.renderOrder,z:x,group:d},t[e]=g):(g.id=f.id,g.object=f,g.geometry=m,g.material=_,g.materialVariant=a(f),g.groupOrder=S,g.renderOrder=f.renderOrder,g.z=x,g.group=d),e++,g}function l(f,m,_,S,x,d,g){g.reversedDepth===!0&&(x=-x);const y=o(f,m,_,S,x,d);_.transmission>0?i.push(y):_.transparent===!0?r.push(y):n.push(y)}function u(f,m,_,S,x,d){const g=o(f,m,_,S,x,d);_.transmission>0?i.unshift(g):_.transparent===!0?r.unshift(g):n.unshift(g)}function h(f,m){n.length>1&&n.sort(f||eR),i.length>1&&i.sort(m||Zg),r.length>1&&r.sort(m||Zg)}function p(){for(let f=e,m=t.length;f<m;f++){const _=t[f];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:u,finish:p,sort:h}}function tR(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new Qg,t.set(i,[a])):r>=s.length?(a=new Qg,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function nR(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={direction:new G,color:new je};break;case"SpotLight":n={position:new G,direction:new G,color:new je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new G,color:new je,distance:0,decay:0};break;case"HemisphereLight":n={direction:new G,skyColor:new je,groundColor:new je};break;case"RectAreaLight":n={color:new je,position:new G,halfWidth:new G,halfHeight:new G};break}return t[e.id]=n,n}}}function iR(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let rR=0;function sR(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function aR(t){const e=new nR,n=iR(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new G);const r=new G,s=new yt,a=new yt;function o(u){let h=0,p=0,f=0;for(let U=0;U<9;U++)i.probe[U].set(0,0,0);let m=0,_=0,S=0,x=0,d=0,g=0,y=0,M=0,A=0,T=0,v=0,b=0,I=0,R=0;u.sort(sR);for(let U=0,X=u.length;U<X;U++){const P=u[U],W=P.color,$=P.intensity,z=P.distance;let k=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===rs?k=P.shadow.map.texture:k=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=W.r*$,p+=W.g*$,f+=W.b*$;else if(P.isLightProbe){for(let F=0;F<9;F++)i.probe[F].addScaledVector(P.sh.coefficients[F],$);R++}else if(P.isSunLight){const F=e.get(P);if(F.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const j=P.shadow,Y=n.get(P);Y.shadowIntensity=j.intensity,Y.shadowBias=j.bias,Y.shadowNormalBias=j.normalBias,Y.shadowRadius=j.radius,Y.shadowMapSize.copy(j.mapSize).multiply(j.getFrameExtents()),i.sunShadow[_]=Y,i.sunShadowMap[_]=k;const fe=j.getViewportCount();for(let Pe=0;Pe<fe;Pe++)i.sunShadowMatrix[S+Pe]=j.getMatrix(Pe),i.sunShadowCascade[S+Pe]=j._cascadeData[Pe];S+=fe,_++}i.sun[m]=F,m++}else if(P.isDirectionalLight){const F=e.get(P);if(F.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const j=P.shadow,Y=n.get(P);Y.shadowIntensity=j.intensity,Y.shadowBias=j.bias,Y.shadowNormalBias=j.normalBias,Y.shadowRadius=j.radius,Y.shadowMapSize=j.mapSize,i.directionalShadow[x]=Y,i.directionalShadowMap[x]=k,i.directionalShadowMatrix[x]=P.shadow.matrix,A++}i.directional[x]=F,x++}else if(P.isSpotLight){const F=e.get(P);F.position.setFromMatrixPosition(P.matrixWorld),F.color.copy(W).multiplyScalar($),F.distance=z,F.coneCos=Math.cos(P.angle),F.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),F.decay=P.decay,i.spot[g]=F;const j=P.shadow;if(P.map&&(i.spotLightMap[b]=P.map,b++,j.updateMatrices(P),P.castShadow&&I++),i.spotLightMatrix[g]=j.matrix,P.castShadow){const Y=n.get(P);Y.shadowIntensity=j.intensity,Y.shadowBias=j.bias,Y.shadowNormalBias=j.normalBias,Y.shadowRadius=j.radius,Y.shadowMapSize=j.mapSize,i.spotShadow[g]=Y,i.spotShadowMap[g]=k,v++}g++}else if(P.isRectAreaLight){const F=e.get(P);F.color.copy(W).multiplyScalar($),F.halfWidth.set(P.width*.5,0,0),F.halfHeight.set(0,P.height*.5,0),i.rectArea[y]=F,y++}else if(P.isPointLight){const F=e.get(P);if(F.color.copy(P.color).multiplyScalar(P.intensity),F.distance=P.distance,F.decay=P.decay,P.castShadow){const j=P.shadow,Y=n.get(P);Y.shadowIntensity=j.intensity,Y.shadowBias=j.bias,Y.shadowNormalBias=j.normalBias,Y.shadowRadius=j.radius,Y.shadowMapSize=j.mapSize,Y.shadowCameraNear=j.camera.near,Y.shadowCameraFar=j.camera.far,i.pointShadow[d]=Y,i.pointShadowMap[d]=k,i.pointShadowMatrix[d]=P.shadow.matrix,T++}i.point[d]=F,d++}else if(P.isHemisphereLight){const F=e.get(P);F.skyColor.copy(P.color).multiplyScalar($),F.groundColor.copy(P.groundColor).multiplyScalar($),i.hemi[M]=F,M++}}y>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ye.LTC_FLOAT_1,i.rectAreaLTC2=ye.LTC_FLOAT_2):(i.rectAreaLTC1=ye.LTC_HALF_1,i.rectAreaLTC2=ye.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=p,i.ambient[2]=f;const D=i.hash;(D.sunLength!==m||D.directionalLength!==x||D.pointLength!==d||D.spotLength!==g||D.rectAreaLength!==y||D.hemiLength!==M||D.numSunShadows!==_||D.numDirectionalShadows!==A||D.numPointShadows!==T||D.numSpotShadows!==v||D.numSpotMaps!==b||D.numLightProbes!==R)&&(i.sun.length=m,i.directional.length=x,i.spot.length=g,i.rectArea.length=y,i.point.length=d,i.hemi.length=M,i.sunShadow.length=_,i.sunShadowMap.length=_,i.sunShadowMatrix.length=S,i.sunShadowCascade.length=S,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.directionalShadowMatrix.length=A,i.pointShadow.length=T,i.pointShadowMap.length=T,i.pointShadowMatrix.length=T,i.spotShadow.length=v,i.spotShadowMap.length=v,i.spotLightMatrix.length=v+b-I,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=I,i.numLightProbes=R,D.sunLength=m,D.directionalLength=x,D.pointLength=d,D.spotLength=g,D.rectAreaLength=y,D.hemiLength=M,D.numSunShadows=_,D.numDirectionalShadows=A,D.numPointShadows=T,D.numSpotShadows=v,D.numSpotMaps=b,D.numLightProbes=R,i.version=rR++)}function l(u,h){let p=0,f=0,m=0,_=0,S=0,x=0;const d=h.matrixWorldInverse;for(let g=0,y=u.length;g<y;g++){const M=u[g];if(M.isSunLight){const A=i.sun[p];A.direction.setFromMatrixPosition(M.matrixWorld),A.direction.transformDirection(d),p++}else if(M.isDirectionalLight){const A=i.directional[f];A.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(d),f++}else if(M.isSpotLight){const A=i.spot[_];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(d),A.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(d),_++}else if(M.isRectAreaLight){const A=i.rectArea[S];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(d),a.identity(),s.copy(M.matrixWorld),s.premultiply(d),a.extractRotation(s),A.halfWidth.set(M.width*.5,0,0),A.halfHeight.set(0,M.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),S++}else if(M.isPointLight){const A=i.point[m];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(d),m++}else if(M.isHemisphereLight){const A=i.hemi[x];A.direction.setFromMatrixPosition(M.matrixWorld),A.direction.transformDirection(d),x++}}}return{setup:o,setupView:l,state:i}}function Jg(t){const e=new aR(t),n=[],i=[],r=[];function s(p){h.camera=p,n.length=0,i.length=0,r.length=0}function a(p){p.isLightProbeGrid?r.push(p):n.push(p)}function o(p){i.push(p)}function l(){e.setup(n),r.sort((p,f)=>p.priority-f.priority||p.id-f.id)}function u(p){e.setupView(n,p)}const h={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:l,setupLightsView:u,pushLight:a,pushShadow:o}}function oR(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Jg(t),e.set(r,[o])):s>=a.length?(o=new Jg(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const lR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,cR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,uR=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],dR=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],e0=new yt,Ra=new G,td=new G;function hR(t,e,n){let i=new _o;const r=new Ie,s=new Ie,a=new bt,o=new S1,l=new M1,u={},h=n.maxTextureSize,p={[is]:Ln,[Ln]:is,[Hi]:Hi},f=new ss({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ie},radius:{value:4}},vertexShader:lR,fragmentShader:cR}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const _=new Ni;_.setAttribute("position",new Zr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new zt(_,f),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Il;let d=this.type;this.render=function(T,v,b){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||T.length===0)return;this.type===Fv&&(De("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Il);const I=t.getRenderTarget(),R=t.getActiveCubeFace(),D=t.getActiveMipmapLevel(),U=t.state;U.setBlending(js),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const X=d!==this.type;X&&v.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(W=>W.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,W=T.length;P<W;P++){const $=T[P],z=$.shadow;if(z===void 0){De("WebGLShadowMap:",$,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;r.copy(z.mapSize);const k=z.getFrameExtents();r.multiply(k),s.copy(z.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/k.x),r.x=s.x*k.x,z.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/k.y),r.y=s.y*k.y,z.mapSize.y=s.y));const F=t.state.buffers.depth.getReversed();if(z.camera._reversedDepth=F,z.map===null||X===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===Ua){if($.isPointLight){De("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new bi(r.x,r.y,{format:rs,type:Ci,minFilter:Cn,magFilter:Cn,generateMipmaps:!1}),z.map.texture.name=$.name+".shadowMap",z.map.depthTexture=new ta(r.x,r.y,Si),z.map.depthTexture.name=$.name+".shadowMapDepth",z.map.depthTexture.format=Rr,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Jt,z.map.depthTexture.magFilter=Jt}else $.isPointLight?(z.map=new xp(r.x),z.map.depthTexture=new h_(r.x,Ai)):(z.map=new bi(r.x,r.y),z.map.depthTexture=new ta(r.x,r.y,Ai)),z.map.depthTexture.name=$.name+".shadowMap",z.map.depthTexture.format=Rr,this.type===Il?(z.map.depthTexture.compareFunction=F?i_:n_,z.map.depthTexture.minFilter=Cn,z.map.depthTexture.magFilter=Cn):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Jt,z.map.depthTexture.magFilter=Jt);z.camera.updateProjectionMatrix()}z.map.isWebGLCubeRenderTarget!==!0&&(z.map.width!==r.x||z.map.height!==r.y)&&z.map.setSize(r.x,r.y);const j=z.map.isWebGLCubeRenderTarget?6:z.getViewportCount();$.isPointLight!==!0&&z.updateMatrices($,b);const Y=z.camera.layers.mask&4294967294?z.camera.layers:b.layers;for(let fe=0;fe<j;fe++){const Pe=z.getCamera(fe);if($.isPointLight){const Z=z.camera,me=z.matrix,te=$.distance||Z.far;te!==Z.far&&(Z.far=te,Z.updateProjectionMatrix()),Ra.setFromMatrixPosition($.matrixWorld),Z.position.copy(Ra),td.copy(Z.position),td.add(uR[fe]),Z.up.copy(dR[fe]),Z.lookAt(td),Z.updateMatrixWorld(),me.makeTranslation(-Ra.x,-Ra.y,-Ra.z),e0.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),z._frustum.setFromProjectionMatrix(e0,Z.coordinateSystem,Z.reversedDepth)}if(z.map.isWebGLCubeRenderTarget)t.setRenderTarget(z.map,fe),t.clear();else{fe===0&&(t.setRenderTarget(z.map),t.clear());const Z=z.getViewport(fe);a.set(s.x*Z.x,s.y*Z.y,s.x*Z.z,s.y*Z.w),U.viewport(a)}i=z.getFrustum(fe),M(v,b,Pe,$,Y,this.type)}z.isPointLightShadow!==!0&&this.type===Ua&&g(z,b),z.needsUpdate=!1}d=this.type,x.needsUpdate=!1,t.setRenderTarget(I,R,D)};function g(T,v){const b=e.update(S);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null?T.mapPass=new bi(r.x,r.y,{format:rs,type:Ci}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),f.uniforms.shadow_pass.value=T.map.depthTexture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(v,null,b,f,S,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value.set(T.map.width,T.map.height),m.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(v,null,b,m,S,null)}function y(T,v,b,I){let R=null;const D=b.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(D!==void 0)R=D;else if(R=b.isPointLight===!0?l:o,t.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0||v.map&&v.alphaTest>0||v.alphaToCoverage===!0){const U=R.uuid,X=v.uuid;let P=u[U];P===void 0&&(P={},u[U]=P);let W=P[X];W===void 0&&(W=R.clone(),P[X]=W,v.addEventListener("dispose",A)),R=W}if(R.visible=v.visible,R.wireframe=v.wireframe,I===Ua?R.side=v.shadowSide!==null?v.shadowSide:v.side:R.side=v.shadowSide!==null?v.shadowSide:p[v.side],R.alphaMap=v.alphaMap,R.alphaTest=v.alphaToCoverage===!0?.5:v.alphaTest,R.map=v.map,R.clipShadows=v.clipShadows,R.clippingPlanes=v.clippingPlanes,R.clipIntersection=v.clipIntersection,R.displacementMap=v.displacementMap,R.displacementScale=v.displacementScale,R.displacementBias=v.displacementBias,R.wireframeLinewidth=v.wireframeLinewidth,R.linewidth=v.linewidth,b.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const U=t.properties.get(R);U.light=b}return R}function M(T,v,b,I,R,D){if(T.visible===!1)return;if(T.layers.test(R)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&D===Ua)&&(!T.frustumCulled||T.intersectsFrustum(i))){T.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,T.matrixWorld);const P=e.update(T),W=T.material;if(Array.isArray(W)){const $=P.groups;for(let z=0,k=$.length;z<k;z++){const F=$[z],j=W[F.materialIndex];if(j&&j.visible){const Y=y(T,j,I,D);T.onBeforeShadow(t,T,v,b,P,Y,F),t.renderBufferDirect(b,null,P,Y,T,F),T.onAfterShadow(t,T,v,b,P,Y,F)}}}else if(W.visible){const $=y(T,W,I,D);T.onBeforeShadow(t,T,v,b,P,$,null),t.renderBufferDirect(b,null,P,$,T,null),T.onAfterShadow(t,T,v,b,P,$,null)}}const X=T.children;for(let P=0,W=X.length;P<W;P++)M(X[P],v,b,I,R,D)}function A(T){T.target.removeEventListener("dispose",A);for(const b in u){const I=u[b],R=T.target.uuid;R in I&&(I[R].dispose(),delete I[R])}}}function fR(t,e){function n(){let N=!1;const ee=new bt;let K=null;const he=new bt(0,0,0,0);return{setMask:function(le){K!==le&&!N&&(t.colorMask(le,le,le,le),K=le)},setLocked:function(le){N=le},setClear:function(le,ue,Ce,Ge,ae){ae===!0&&(le*=Ge,ue*=Ge,Ce*=Ge),ee.set(le,ue,Ce,Ge),he.equals(ee)===!1&&(t.clearColor(le,ue,Ce,Ge),he.copy(ee))},reset:function(){N=!1,K=null,he.set(-1,0,0,0)}}}function i(){let N=!1,ee=!1,K=null,he=null,le=null;return{setReversed:function(ue){if(ee!==ue){const Ce=e.get("EXT_clip_control");ue?Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.ZERO_TO_ONE_EXT):Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.NEGATIVE_ONE_TO_ONE_EXT),ee=ue;const Ge=le;le=null,this.setClear(Ge)}},getReversed:function(){return ee},setTest:function(ue){ue?oe(t.DEPTH_TEST):Re(t.DEPTH_TEST)},setMask:function(ue){K!==ue&&!N&&(t.depthMask(ue),K=ue)},setFunc:function(ue){if(ee&&(ue=Bw[ue]),he!==ue){switch(ue){case ih:t.depthFunc(t.NEVER);break;case rh:t.depthFunc(t.ALWAYS);break;case sh:t.depthFunc(t.LESS);break;case mo:t.depthFunc(t.LEQUAL);break;case ah:t.depthFunc(t.EQUAL);break;case oh:t.depthFunc(t.GEQUAL);break;case lh:t.depthFunc(t.GREATER);break;case ch:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}he=ue}},setLocked:function(ue){N=ue},setClear:function(ue){le!==ue&&(le=ue,ee&&(ue=1-ue),t.clearDepth(ue))},reset:function(){N=!1,K=null,he=null,le=null,ee=!1}}}function r(){let N=!1,ee=null,K=null,he=null,le=null,ue=null,Ce=null,Ge=null,ae=null;return{setTest:function(Ne){N||(Ne?oe(t.STENCIL_TEST):Re(t.STENCIL_TEST))},setMask:function(Ne){ee!==Ne&&!N&&(t.stencilMask(Ne),ee=Ne)},setFunc:function(Ne,ze,_e){(K!==Ne||he!==ze||le!==_e)&&(t.stencilFunc(Ne,ze,_e),K=Ne,he=ze,le=_e)},setOp:function(Ne,ze,_e){(ue!==Ne||Ce!==ze||Ge!==_e)&&(t.stencilOp(Ne,ze,_e),ue=Ne,Ce=ze,Ge=_e)},setLocked:function(Ne){N=Ne},setClear:function(Ne){ae!==Ne&&(t.clearStencil(Ne),ae=Ne)},reset:function(){N=!1,ee=null,K=null,he=null,le=null,ue=null,Ce=null,Ge=null,ae=null}}}const s=new n,a=new i,o=new r;let l={};const u=new WeakMap;let h={},p={},f={},m=new WeakMap,_=[],S=null,x=!1,d=null,g=null,y=null,M=null,A=null,T=null,v=null,b=new je(0,0,0),I=0,R=!1,D=null,U=null,X=null,P=null,W=null;const $=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,k=0;const F=t.getParameter(t.VERSION);F.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(F)[1]),z=k>=1):F.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),z=k>=2);let j=null,Y={};const fe=t.getParameter(t.SCISSOR_BOX),Pe=t.getParameter(t.VIEWPORT),Z=new bt().fromArray(fe),me=new bt().fromArray(Pe);function te(N,ee,K,he){const le=new Uint8Array(4),ue=t.createTexture();t.bindTexture(N,ue),t.texParameteri(N,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(N,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ce=0;Ce<K;Ce++)N===t.TEXTURE_3D||N===t.TEXTURE_2D_ARRAY?t.texImage3D(ee,0,t.RGBA,1,1,he,0,t.RGBA,t.UNSIGNED_BYTE,le):t.texImage2D(ee+Ce,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,le);return ue}const re={};re[t.TEXTURE_2D]=te(t.TEXTURE_2D,t.TEXTURE_2D,1),re[t.TEXTURE_CUBE_MAP]=te(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),re[t.TEXTURE_2D_ARRAY]=te(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),re[t.TEXTURE_3D]=te(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),oe(t.DEPTH_TEST),a.setFunc(mo),Lt(!1),gt(Qm),oe(t.CULL_FACE),Rt(js);function oe(N){h[N]!==!0&&(t.enable(N),h[N]=!0)}function Re(N){h[N]!==!1&&(t.disable(N),h[N]=!1)}function at(N,ee){return f[N]!==ee?(t.bindFramebuffer(N,ee),f[N]=ee,N===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=ee),N===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=ee),!0):!1}function Ae(N,ee){let K=_,he=!1;if(N){K=m.get(ee),K===void 0&&(K=[],m.set(ee,K));const le=N.textures;if(K.length!==le.length||K[0]!==t.COLOR_ATTACHMENT0){for(let ue=0,Ce=le.length;ue<Ce;ue++)K[ue]=t.COLOR_ATTACHMENT0+ue;K.length=le.length,he=!0}}else K[0]!==t.BACK&&(K[0]=t.BACK,he=!0);he&&t.drawBuffers(K)}function qe(N){return S!==N?(t.useProgram(N),S=N,!0):!1}const Qe={[Ss]:t.FUNC_ADD,[ow]:t.FUNC_SUBTRACT,[lw]:t.FUNC_REVERSE_SUBTRACT};Qe[cw]=t.MIN,Qe[uw]=t.MAX;const Be={[dw]:t.ZERO,[hw]:t.ONE,[fw]:t.SRC_COLOR,[kv]:t.SRC_ALPHA,[_w]:t.SRC_ALPHA_SATURATE,[xw]:t.DST_COLOR,[mw]:t.DST_ALPHA,[pw]:t.ONE_MINUS_SRC_COLOR,[Bv]:t.ONE_MINUS_SRC_ALPHA,[vw]:t.ONE_MINUS_DST_COLOR,[gw]:t.ONE_MINUS_DST_ALPHA,[yw]:t.CONSTANT_COLOR,[Sw]:t.ONE_MINUS_CONSTANT_COLOR,[Mw]:t.CONSTANT_ALPHA,[Ew]:t.ONE_MINUS_CONSTANT_ALPHA};function Rt(N,ee,K,he,le,ue,Ce,Ge,ae,Ne){if(N===js){x===!0&&(Re(t.BLEND),x=!1);return}if(x===!1&&(oe(t.BLEND),x=!0),N!==aw){if(N!==d||Ne!==R){if((g!==Ss||A!==Ss)&&(t.blendEquation(t.FUNC_ADD),g=Ss,A=Ss),Ne)switch(N){case $a:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Jm:t.blendFunc(t.ONE,t.ONE);break;case eg:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case tg:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:nt("WebGLState: Invalid blending: ",N);break}else switch(N){case $a:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Jm:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case eg:nt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case tg:nt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:nt("WebGLState: Invalid blending: ",N);break}y=null,M=null,T=null,v=null,b.set(0,0,0),I=0,d=N,R=Ne}return}le=le||ee,ue=ue||K,Ce=Ce||he,(ee!==g||le!==A)&&(t.blendEquationSeparate(Qe[ee],Qe[le]),g=ee,A=le),(K!==y||he!==M||ue!==T||Ce!==v)&&(t.blendFuncSeparate(Be[K],Be[he],Be[ue],Be[Ce]),y=K,M=he,T=ue,v=Ce),(Ge.equals(b)===!1||ae!==I)&&(t.blendColor(Ge.r,Ge.g,Ge.b,ae),b.copy(Ge),I=ae),d=N,R=!1}function mt(N,ee){N.side===Hi?Re(t.CULL_FACE):oe(t.CULL_FACE);let K=N.side===Ln;ee&&(K=!K),Lt(K),N.blending===$a&&N.transparent===!1?Rt(js):Rt(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),s.setMask(N.colorWrite);const he=N.stencilWrite;o.setTest(he),he&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Nt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?oe(t.SAMPLE_ALPHA_TO_COVERAGE):Re(t.SAMPLE_ALPHA_TO_COVERAGE)}function Lt(N){D!==N&&(N?t.frontFace(t.CW):t.frontFace(t.CCW),D=N)}function gt(N){N!==rw?(oe(t.CULL_FACE),N!==U&&(N===Qm?t.cullFace(t.BACK):N===sw?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Re(t.CULL_FACE),U=N}function Sn(N){N!==X&&(z&&t.lineWidth(N),X=N)}function Nt(N,ee,K){N?(oe(t.POLYGON_OFFSET_FILL),(P!==ee||W!==K)&&(P=ee,W=K,a.getReversed()&&(ee=-ee,K=-K),t.polygonOffset(ee,K))):Re(t.POLYGON_OFFSET_FILL)}function fn(N){N?oe(t.SCISSOR_TEST):Re(t.SCISSOR_TEST)}function Mn(N){N===void 0&&(N=t.TEXTURE0+$-1),j!==N&&(t.activeTexture(N),j=N)}function Dn(N,ee,K){K===void 0&&(j===null?K=t.TEXTURE0+$-1:K=j);let he=Y[K];he===void 0&&(he={type:void 0,texture:void 0},Y[K]=he),(he.type!==N||he.texture!==ee)&&(j!==K&&(t.activeTexture(K),j=K),t.bindTexture(N,ee||re[N]),he.type=N,he.texture=ee)}function O(){const N=Y[j];N!==void 0&&N.type!==void 0&&(t.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function En(){try{t.compressedTexImage2D(...arguments)}catch(N){nt("WebGLState:",N)}}function ht(){try{t.compressedTexImage3D(...arguments)}catch(N){nt("WebGLState:",N)}}function ut(){try{t.texSubImage2D(...arguments)}catch(N){nt("WebGLState:",N)}}function ve(){try{t.texSubImage3D(...arguments)}catch(N){nt("WebGLState:",N)}}function kt(){try{t.compressedTexSubImage2D(...arguments)}catch(N){nt("WebGLState:",N)}}function Le(){try{t.compressedTexSubImage3D(...arguments)}catch(N){nt("WebGLState:",N)}}function Ue(){try{t.texStorage2D(...arguments)}catch(N){nt("WebGLState:",N)}}function C(){try{t.texStorage3D(...arguments)}catch(N){nt("WebGLState:",N)}}function E(){try{t.texImage2D(...arguments)}catch(N){nt("WebGLState:",N)}}function H(){try{t.texImage3D(...arguments)}catch(N){nt("WebGLState:",N)}}function ie(N){return p[N]!==void 0?p[N]:t.getParameter(N)}function ne(N,ee){p[N]!==ee&&(t.pixelStorei(N,ee),p[N]=ee)}function ce(N){Z.equals(N)===!1&&(t.scissor(N.x,N.y,N.z,N.w),Z.copy(N))}function ge(N){me.equals(N)===!1&&(t.viewport(N.x,N.y,N.z,N.w),me.copy(N))}function Q(N,ee){let K=u.get(ee);K===void 0&&(K=new WeakMap,u.set(ee,K));let he=K.get(N);he===void 0&&(he=t.getUniformBlockIndex(ee,N.name),t.uniformBlockBinding(ee,he,he),K.set(N,he))}function J(N,ee,K){const le=u.get(ee).get(N);l[le]!==K&&(t.bindBufferBase(t.UNIFORM_BUFFER,le,K),l[le]=K)}function de(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),h={},p={},j=null,Y={},f={},l={},m=new WeakMap,_=[],S=null,x=!1,d=null,g=null,y=null,M=null,A=null,T=null,v=null,b=new je(0,0,0),I=0,R=!1,D=null,U=null,X=null,P=null,W=null,Z.set(0,0,t.canvas.width,t.canvas.height),me.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:oe,disable:Re,bindFramebuffer:at,drawBuffers:Ae,useProgram:qe,setBlending:Rt,setMaterial:mt,setFlipSided:Lt,setCullFace:gt,setLineWidth:Sn,setPolygonOffset:Nt,setScissorTest:fn,activeTexture:Mn,bindTexture:Dn,unbindTexture:O,compressedTexImage2D:En,compressedTexImage3D:ht,texImage2D:E,texImage3D:H,pixelStorei:ne,getParameter:ie,updateUBOMapping:Q,uniformBlockBinding:J,texStorage2D:Ue,texStorage3D:C,texSubImage2D:ut,texSubImage3D:ve,compressedTexSubImage2D:kt,compressedTexSubImage3D:Le,scissor:ce,viewport:ge,reset:de}}function pR(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Ie,h=new WeakMap,p=new Set;let f;const m=new WeakMap,_=new Set,S=new FinalizationRegistry(C=>_.delete(C));let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function d(C,E){return x?new OffscreenCanvas(C,E):Mc("canvas")}function g(C,E,H){let ie=1;const ne=Ue(C);if((ne.width>H||ne.height>H)&&(ie=H/Math.max(ne.width,ne.height)),ie<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const ce=Math.floor(ie*ne.width),ge=Math.floor(ie*ne.height);f===void 0&&(f=d(ce,ge));const Q=E?d(ce,ge):f;return Q.width=ce,Q.height=ge,Q.getContext("2d").drawImage(C,0,0,ce,ge),De("WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+ce+"x"+ge+")."),Q}else return"data"in C&&De("WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),C;return C}function y(C){return C.generateMipmaps}function M(C){t.generateMipmap(C)}function A(C){return C.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?t.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function T(C,E,H,ie,ne,ce=!1){if(C!==null){if(t[C]!==void 0)return t[C];De("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ge;ie&&(ge=e.get("EXT_texture_norm16"),ge||De("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Q=E;if(E===t.RED&&(H===t.FLOAT&&(Q=t.R32F),H===t.HALF_FLOAT&&(Q=t.R16F),H===t.UNSIGNED_BYTE&&(Q=t.R8),H===t.UNSIGNED_SHORT&&ge&&(Q=ge.R16_EXT),H===t.SHORT&&ge&&(Q=ge.R16_SNORM_EXT)),E===t.RED_INTEGER&&(H===t.UNSIGNED_BYTE&&(Q=t.R8UI),H===t.UNSIGNED_SHORT&&(Q=t.R16UI),H===t.UNSIGNED_INT&&(Q=t.R32UI),H===t.BYTE&&(Q=t.R8I),H===t.SHORT&&(Q=t.R16I),H===t.INT&&(Q=t.R32I)),E===t.RG&&(H===t.FLOAT&&(Q=t.RG32F),H===t.HALF_FLOAT&&(Q=t.RG16F),H===t.UNSIGNED_BYTE&&(Q=t.RG8),H===t.UNSIGNED_SHORT&&ge&&(Q=ge.RG16_EXT),H===t.SHORT&&ge&&(Q=ge.RG16_SNORM_EXT)),E===t.RG_INTEGER&&(H===t.UNSIGNED_BYTE&&(Q=t.RG8UI),H===t.UNSIGNED_SHORT&&(Q=t.RG16UI),H===t.UNSIGNED_INT&&(Q=t.RG32UI),H===t.BYTE&&(Q=t.RG8I),H===t.SHORT&&(Q=t.RG16I),H===t.INT&&(Q=t.RG32I)),E===t.RGB_INTEGER&&(H===t.UNSIGNED_BYTE&&(Q=t.RGB8UI),H===t.UNSIGNED_SHORT&&(Q=t.RGB16UI),H===t.UNSIGNED_INT&&(Q=t.RGB32UI),H===t.BYTE&&(Q=t.RGB8I),H===t.SHORT&&(Q=t.RGB16I),H===t.INT&&(Q=t.RGB32I)),E===t.RGBA_INTEGER&&(H===t.UNSIGNED_BYTE&&(Q=t.RGBA8UI),H===t.UNSIGNED_SHORT&&(Q=t.RGBA16UI),H===t.UNSIGNED_INT&&(Q=t.RGBA32UI),H===t.BYTE&&(Q=t.RGBA8I),H===t.SHORT&&(Q=t.RGBA16I),H===t.INT&&(Q=t.RGBA32I)),E===t.RGB&&(H===t.UNSIGNED_SHORT&&ge&&(Q=ge.RGB16_EXT),H===t.SHORT&&ge&&(Q=ge.RGB16_SNORM_EXT),H===t.UNSIGNED_INT_5_9_9_9_REV&&(Q=t.RGB9_E5),H===t.UNSIGNED_INT_10F_11F_11F_REV&&(Q=t.R11F_G11F_B10F)),E===t.RGBA){const J=ce?Sc:Ze.getTransfer(ne);H===t.FLOAT&&(Q=t.RGBA32F),H===t.HALF_FLOAT&&(Q=t.RGBA16F),H===t.UNSIGNED_BYTE&&(Q=J===lt?t.SRGB8_ALPHA8:t.RGBA8),H===t.UNSIGNED_SHORT&&ge&&(Q=ge.RGBA16_EXT),H===t.SHORT&&ge&&(Q=ge.RGBA16_SNORM_EXT),H===t.UNSIGNED_SHORT_4_4_4_4&&(Q=t.RGBA4),H===t.UNSIGNED_SHORT_5_5_5_1&&(Q=t.RGB5_A1)}return(Q===t.R16F||Q===t.R32F||Q===t.RG16F||Q===t.RG32F||Q===t.RGBA16F||Q===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function v(C,E){let H;return C?E===null||E===Ai||E===ea?H=t.DEPTH24_STENCIL8:E===Si?H=t.DEPTH32F_STENCIL8:E===xo&&(H=t.DEPTH24_STENCIL8,De("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Ai||E===ea?H=t.DEPTH_COMPONENT24:E===Si?H=t.DEPTH_COMPONENT32F:E===xo&&(H=t.DEPTH_COMPONENT16),H}function b(C,E){return y(C)===!0||C.isFramebufferTexture&&C.minFilter!==Jt&&C.minFilter!==Cn?Math.log2(Math.max(E.width,E.height))+1:C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?E.mipmaps.length:1}function I(C){const E=new WeakRef(C);i.get(C).__ref=E,_.add(E),S.register(C,E,E)}function R(C){const E=i.get(C).__ref;E!==void 0&&(_.delete(E),S.unregister(E))}function D(C){X(C.target)}function U(C){P(C.target)}function X(C){C.removeEventListener("dispose",D),R(C),$(C),C.isVideoTexture&&h.delete(C),C.isHTMLTexture&&p.delete(C)}function P(C){C.removeEventListener("dispose",U),R(C),k(C)}function W(){for(const C of _){const E=C.deref();E!==void 0&&(E.isRenderTarget===!0?P(E):X(E))}_.clear(),p.clear()}function $(C){const E=i.get(C);if(E.__webglInit===void 0)return;const H=C.source,ie=m.get(H);if(ie){const ne=ie[E.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&z(C),Object.keys(ie).length===0&&m.delete(H)}i.remove(C)}function z(C){const E=i.get(C);t.deleteTexture(E.__webglTexture);const H=C.source,ie=m.get(H);delete ie[E.__cacheKey],a.memory.textures--}function k(C){const E=i.get(C);E.__depthDisposeCallback&&E.__depthDisposeCallback();const H=C.depthTexture;if(H&&H.renderTarget===C&&X(H),C.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(E.__webglFramebuffer[ne]))for(let ce=0;ce<E.__webglFramebuffer[ne].length;ce++)t.deleteFramebuffer(E.__webglFramebuffer[ne][ce]);else t.deleteFramebuffer(E.__webglFramebuffer[ne]);E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer[ne])}else{if(Array.isArray(E.__webglFramebuffer))for(let ne=0;ne<E.__webglFramebuffer.length;ne++)t.deleteFramebuffer(E.__webglFramebuffer[ne]);else t.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&t.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ne=0;ne<E.__webglColorRenderbuffer.length;ne++)E.__webglColorRenderbuffer[ne]&&t.deleteRenderbuffer(E.__webglColorRenderbuffer[ne]);E.__webglDepthRenderbuffer&&t.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const ie=C.textures;for(let ne=0,ce=ie.length;ne<ce;ne++){const ge=i.get(ie[ne]);ge.__webglTexture&&(t.deleteTexture(ge.__webglTexture),a.memory.textures--),i.remove(ie[ne])}i.remove(C)}let F=0;function j(){F=0}function Y(){return F}function fe(C){F=C}function Pe(){const C=F;return C>=r.maxTextures&&De("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+r.maxTextures),F+=1,C}function Z(C){const E=[];return E.push(C.wrapS),E.push(C.wrapT),E.push(C.wrapR||0),E.push(C.magFilter),E.push(C.minFilter),E.push(C.anisotropy),E.push(C.internalFormat),E.push(C.format),E.push(C.type),E.push(C.generateMipmaps),E.push(C.mipmapsAutoUpdate),E.push(C.premultiplyAlpha),E.push(C.flipY),E.push(C.unpackAlignment),E.push(C.colorSpace),E.join()}function me(C,E){const H=i.get(C);if(C.isVideoTexture&&kt(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&H.__version!==C.version){const ie=C.image;if(ie===null)De("WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)De("WebGLRenderer: Texture marked for update but image is incomplete");else{mt(H,C,E);return}}else C.isExternalTexture&&(H.__webglTexture=C.sourceTexture?C.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,H.__webglTexture,t.TEXTURE0+E)}function te(C,E){const H=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){mt(H,C,E);return}else C.isExternalTexture&&(H.__webglTexture=C.sourceTexture?C.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,H.__webglTexture,t.TEXTURE0+E)}function re(C,E){const H=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){mt(H,C,E);return}n.bindTexture(t.TEXTURE_3D,H.__webglTexture,t.TEXTURE0+E)}function oe(C,E){const H=i.get(C);if(C.version>0&&H.__version!==C.version){Lt(H,C,E);return}n.bindTexture(t.TEXTURE_CUBE_MAP,H.__webglTexture,t.TEXTURE0+E)}const Re={[uh]:t.REPEAT,[ji]:t.CLAMP_TO_EDGE,[dh]:t.MIRRORED_REPEAT},at={[Jt]:t.NEAREST,[Tw]:t.NEAREST_MIPMAP_NEAREST,[Yo]:t.NEAREST_MIPMAP_LINEAR,[Cn]:t.LINEAR,[Ru]:t.LINEAR_MIPMAP_NEAREST,[xr]:t.LINEAR_MIPMAP_LINEAR},Ae={[Nw]:t.NEVER,[r_]:t.ALWAYS,[Pw]:t.LESS,[n_]:t.LEQUAL,[Lw]:t.EQUAL,[i_]:t.GEQUAL,[Dw]:t.GREATER,[Iw]:t.NOTEQUAL};function qe(C,E){if(E.type===Si&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Cn||E.magFilter===Ru||E.magFilter===Yo||E.magFilter===xr||E.minFilter===Cn||E.minFilter===Ru||E.minFilter===Yo||E.minFilter===xr)&&De("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(C,t.TEXTURE_WRAP_S,Re[E.wrapS]),t.texParameteri(C,t.TEXTURE_WRAP_T,Re[E.wrapT]),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,Re[E.wrapR]),t.texParameteri(C,t.TEXTURE_MAG_FILTER,at[E.magFilter]),t.texParameteri(C,t.TEXTURE_MIN_FILTER,at[E.minFilter]),E.compareFunction&&(t.texParameteri(C,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(C,t.TEXTURE_COMPARE_FUNC,Ae[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Jt||E.minFilter!==Yo&&E.minFilter!==xr||E.type===Si&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");t.texParameterf(C,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function Qe(C,E){let H=!1;C.__webglInit===void 0&&(C.__webglInit=!0,E.addEventListener("dispose",D),I(E));const ie=E.source;let ne=m.get(ie);ne===void 0&&(ne={},m.set(ie,ne));const ce=Z(E);if(ce!==C.__cacheKey){ne[ce]===void 0&&(ne[ce]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,H=!0),ne[ce].usedTimes++;const ge=ne[C.__cacheKey];ge!==void 0&&(ne[C.__cacheKey].usedTimes--,ge.usedTimes===0&&z(E)),C.__cacheKey=ce,C.__webglTexture=ne[ce].texture}return H}function Be(C,E,H){return Math.floor(Math.floor(C/H)/E)}function Rt(C,E,H,ie){const ce=C.updateRanges;if(ce.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,E.width,E.height,H,ie,E.data);else{ce.sort((N,ee)=>N.start-ee.start);let ge=0;for(let N=1;N<ce.length;N++){const ee=ce[ge],K=ce[N],he=ee.start+ee.count,le=Be(K.start,E.width,4),ue=Be(ee.start,E.width,4);K.start<=he+1&&le===ue&&Be(K.start+K.count-1,E.width,4)===le?ee.count=Math.max(ee.count,K.start+K.count-ee.start):(++ge,ce[ge]=K)}ce.length=ge+1;const Q=n.getParameter(t.UNPACK_ROW_LENGTH),J=n.getParameter(t.UNPACK_SKIP_PIXELS),de=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,E.width);for(let N=0,ee=ce.length;N<ee;N++){const K=ce[N],he=Math.floor(K.start/4),le=Math.ceil(K.count/4),ue=he%E.width,Ce=Math.floor(he/E.width),Ge=le,ae=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,ue),n.pixelStorei(t.UNPACK_SKIP_ROWS,Ce),n.texSubImage2D(t.TEXTURE_2D,0,ue,Ce,Ge,ae,H,ie,E.data)}C.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,Q),n.pixelStorei(t.UNPACK_SKIP_PIXELS,J),n.pixelStorei(t.UNPACK_SKIP_ROWS,de)}}function mt(C,E,H){let ie=t.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ie=t.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ie=t.TEXTURE_3D);const ne=Qe(C,E),ce=E.source;n.bindTexture(ie,C.__webglTexture,t.TEXTURE0+H);const ge=i.get(ce);if(ce.version!==ge.__version||ne===!0){if(n.activeTexture(t.TEXTURE0+H),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const ae=Ze.getPrimaries(Ze.workingColorSpace),Ne=E.colorSpace===pr?null:Ze.getPrimaries(E.colorSpace),ze=E.colorSpace===pr||ae===Ne?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze)}n.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment);let J=g(E.image,!1,r.maxTextureSize);J=Le(E,J);const de=s.convert(E.format,E.colorSpace),N=s.convert(E.type);let ee=T(E.internalFormat,de,N,E.normalized,E.colorSpace,E.isVideoTexture);qe(ie,E);let K;const he=E.mipmaps,le=E.isVideoTexture!==!0,ue=ge.__version===void 0||ne===!0,Ce=ce.dataReady,Ge=b(E,J);if(E.isDepthTexture)ee=v(E.format===vr,E.type),ue&&(le?n.texStorage2D(t.TEXTURE_2D,1,ee,J.width,J.height):n.texImage2D(t.TEXTURE_2D,0,ee,J.width,J.height,0,de,N,null));else if(E.isDataTexture)if(he.length>0){le&&ue&&n.texStorage2D(t.TEXTURE_2D,Ge,ee,he[0].width,he[0].height);for(let ae=0,Ne=he.length;ae<Ne;ae++)K=he[ae],le?Ce&&n.texSubImage2D(t.TEXTURE_2D,ae,0,0,K.width,K.height,de,N,K.data):n.texImage2D(t.TEXTURE_2D,ae,ee,K.width,K.height,0,de,N,K.data);E.generateMipmaps=!1}else le?(ue&&n.texStorage2D(t.TEXTURE_2D,Ge,ee,J.width,J.height),Ce&&Rt(E,J,de,N)):n.texImage2D(t.TEXTURE_2D,0,ee,J.width,J.height,0,de,N,J.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){le&&ue&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ge,ee,he[0].width,he[0].height,J.depth);for(let ae=0,Ne=he.length;ae<Ne;ae++)if(K=he[ae],E.format!==Mi)if(de!==null)if(le){if(Ce)if(E.layerUpdates.size>0){const ze=Dg(K.width,K.height,E.format,E.type);for(const _e of E.layerUpdates){const ot=K.data.subarray(_e*ze/K.data.BYTES_PER_ELEMENT,(_e+1)*ze/K.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ae,0,0,_e,K.width,K.height,1,de,ot)}}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ae,0,0,0,K.width,K.height,J.depth,de,K.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ae,ee,K.width,K.height,J.depth,0,K.data,0,0);else De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else le?Ce&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ae,0,0,0,K.width,K.height,J.depth,de,N,K.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ae,ee,K.width,K.height,J.depth,0,de,N,K.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{le&&ue&&n.texStorage2D(t.TEXTURE_2D,Ge,ee,he[0].width,he[0].height);for(let ae=0,Ne=he.length;ae<Ne;ae++)K=he[ae],E.format!==Mi?de!==null?le?Ce&&n.compressedTexSubImage2D(t.TEXTURE_2D,ae,0,0,K.width,K.height,de,K.data):n.compressedTexImage2D(t.TEXTURE_2D,ae,ee,K.width,K.height,0,K.data):De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):le?Ce&&n.texSubImage2D(t.TEXTURE_2D,ae,0,0,K.width,K.height,de,N,K.data):n.texImage2D(t.TEXTURE_2D,ae,ee,K.width,K.height,0,de,N,K.data)}else if(E.isDataArrayTexture)if(le){if(ue&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ge,ee,J.width,J.height,J.depth),Ce)if(E.layerUpdates.size>0){const ae=Dg(J.width,J.height,E.format,E.type);for(const Ne of E.layerUpdates){const ze=J.data.subarray(Ne*ae/J.data.BYTES_PER_ELEMENT,(Ne+1)*ae/J.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Ne,J.width,J.height,1,de,N,ze)}E.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,de,N,J.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,ee,J.width,J.height,J.depth,0,de,N,J.data);else if(E.isData3DTexture)le?(ue&&n.texStorage3D(t.TEXTURE_3D,Ge,ee,J.width,J.height,J.depth),Ce&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,de,N,J.data)):n.texImage3D(t.TEXTURE_3D,0,ee,J.width,J.height,J.depth,0,de,N,J.data);else if(E.isFramebufferTexture){if(ue)if(le)n.texStorage2D(t.TEXTURE_2D,Ge,ee,J.width,J.height);else{let ae=J.width,Ne=J.height;for(let ze=0;ze<Ge;ze++)n.texImage2D(t.TEXTURE_2D,ze,ee,ae,Ne,0,de,N,null),ae>>=1,Ne>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in t){const ae=t.canvas;if(ae.hasAttribute("layoutsubtree")||ae.setAttribute("layoutsubtree","true"),J.parentNode!==ae){ae.appendChild(J),p.add(E),ae.onpaint=Ne=>{const ze=Ne.changedElements;for(const _e of p)ze.includes(_e.image)&&(_e.needsUpdate=!0)},ae.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,J);else{const ze=t.RGBA,_e=t.RGBA,ot=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,ze,_e,ot,J)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(he.length>0){if(le&&ue){const ae=Ue(he[0]);n.texStorage2D(t.TEXTURE_2D,Ge,ee,ae.width,ae.height)}for(let ae=0,Ne=he.length;ae<Ne;ae++)K=he[ae],le?Ce&&n.texSubImage2D(t.TEXTURE_2D,ae,0,0,de,N,K):n.texImage2D(t.TEXTURE_2D,ae,ee,de,N,K);E.generateMipmaps=!1}else if(le){if(ue){const ae=Ue(J);n.texStorage2D(t.TEXTURE_2D,Ge,ee,ae.width,ae.height)}Ce&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,de,N,J)}else n.texImage2D(t.TEXTURE_2D,0,ee,de,N,J);y(E)&&E.mipmapsAutoUpdate===!0&&M(ie),ge.__version=ce.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function Lt(C,E,H){if(E.image.length!==6)return;const ie=Qe(C,E),ne=E.source;n.bindTexture(t.TEXTURE_CUBE_MAP,C.__webglTexture,t.TEXTURE0+H);const ce=i.get(ne);if(ne.version!==ce.__version||ie===!0){n.activeTexture(t.TEXTURE0+H);const ge=Ze.getPrimaries(Ze.workingColorSpace),Q=E.colorSpace===pr?null:Ze.getPrimaries(E.colorSpace),J=E.colorSpace===pr||ge===Q?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);const de=E.isCompressedTexture||E.image[0].isCompressedTexture,N=E.image[0]&&E.image[0].isDataTexture,ee=[];for(let _e=0;_e<6;_e++)!de&&!N?ee[_e]=g(E.image[_e],!0,r.maxCubemapSize):ee[_e]=N?E.image[_e].image:E.image[_e],ee[_e]=Le(E,ee[_e]);const K=ee[0],he=s.convert(E.format,E.colorSpace),le=s.convert(E.type);let ue=T(E.internalFormat,he,le,E.normalized,E.colorSpace);const Ce=E.isVideoTexture!==!0,Ge=ce.__version===void 0||ie===!0,ae=ne.dataReady;let Ne=b(E,K);qe(t.TEXTURE_CUBE_MAP,E);let ze;if(E.isDepthTexture){if(ue=v(E.format===vr,E.type),Ge)if(Ce)n.texStorage2D(t.TEXTURE_CUBE_MAP,1,ue,K.width,K.height);else for(let _e=0;_e<6;_e++)n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,ue,K.width,K.height,0,he,le,null)}else if(de){Ce&&Ge&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Ne,ue,K.width,K.height);for(let _e=0;_e<6;_e++){ze=ee[_e].mipmaps;for(let ot=0;ot<ze.length;ot++){const Wt=ze[ot];E.format!==Mi?he!==null?Ce?ae&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ot,0,0,Wt.width,Wt.height,he,Wt.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ot,ue,Wt.width,Wt.height,0,Wt.data):De("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ce?ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ot,0,0,Wt.width,Wt.height,he,le,Wt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ot,ue,Wt.width,Wt.height,0,he,le,Wt.data)}}}else{if(ze=E.mipmaps,Ce&&Ge){ze.length>0&&Ne++;const _e=Ue(ee[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Ne,ue,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if(N){Ce?ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,ee[_e].width,ee[_e].height,he,le,ee[_e].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,ue,ee[_e].width,ee[_e].height,0,he,le,ee[_e].data);for(let ot=0;ot<ze.length;ot++){const Ji=ze[ot].image[_e].image;Ce?ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ot+1,0,0,Ji.width,Ji.height,he,le,Ji.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ot+1,ue,Ji.width,Ji.height,0,he,le,Ji.data)}}else{Ce?ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,he,le,ee[_e]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,ue,he,le,ee[_e]);for(let ot=0;ot<ze.length;ot++){const Wt=ze[ot];Ce?ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ot+1,0,0,he,le,Wt.image[_e]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ot+1,ue,he,le,Wt.image[_e])}}}y(E)&&E.mipmapsAutoUpdate===!0&&M(t.TEXTURE_CUBE_MAP),ce.__version=ne.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function gt(C,E,H,ie,ne,ce){const ge=s.convert(H.format,H.colorSpace),Q=s.convert(H.type),J=T(H.internalFormat,ge,Q,H.normalized,H.colorSpace),de=i.get(E),N=i.get(H);if(N.__renderTarget=E,!de.__hasExternalTextures){const ee=Math.max(1,E.width>>ce),K=Math.max(1,E.height>>ce);ne===t.TEXTURE_3D||ne===t.TEXTURE_2D_ARRAY?n.texImage3D(ne,ce,J,ee,K,E.depth,0,ge,Q,null):n.texImage2D(ne,ce,J,ee,K,0,ge,Q,null)}n.bindFramebuffer(t.FRAMEBUFFER,C),ve(E)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ie,ne,N.__webglTexture,0,ut(E)):(ne===t.TEXTURE_2D||ne>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ie,ne,N.__webglTexture,ce),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Sn(C,E,H){if(t.bindRenderbuffer(t.RENDERBUFFER,C),E.depthBuffer){const ie=E.depthTexture,ne=ie&&ie.isDepthTexture?ie.type:null,ce=v(E.stencilBuffer,ne),ge=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;ve(E)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ut(E),ce,E.width,E.height):H?t.renderbufferStorageMultisample(t.RENDERBUFFER,ut(E),ce,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,ce,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,ge,t.RENDERBUFFER,C)}else{const ie=E.textures;for(let ne=0;ne<ie.length;ne++){const ce=ie[ne],ge=s.convert(ce.format,ce.colorSpace),Q=s.convert(ce.type),J=T(ce.internalFormat,ge,Q,ce.normalized,ce.colorSpace);ve(E)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ut(E),J,E.width,E.height):H?t.renderbufferStorageMultisample(t.RENDERBUFFER,ut(E),J,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,J,E.width,E.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Nt(C,E,H){const ie=E.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,C),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ne=i.get(E.depthTexture);ne.__renderTarget=E;const ce=ie?E.depthTexture.image[0]:E.depthTexture.image;(!ne.__webglTexture||ce.width!==E.width||ce.height!==E.height)&&(ce.width=E.width,ce.height=E.height,E.depthTexture.needsUpdate=!0),ie?oe(E.depthTexture,0):me(E.depthTexture,0);const ge=ne.__webglTexture,Q=ut(E),J=ie?t.TEXTURE_CUBE_MAP_POSITIVE_X+H:t.TEXTURE_2D,de=E.depthTexture.format===vr?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(E.depthTexture.format===Rr)ve(E)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,de,J,ge,0,Q):t.framebufferTexture2D(t.FRAMEBUFFER,de,J,ge,0);else if(E.depthTexture.format===vr)ve(E)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,de,J,ge,0,Q):t.framebufferTexture2D(t.FRAMEBUFFER,de,J,ge,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function fn(C){const E=i.get(C),H=C.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==C.depthTexture){const ie=C.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ie){const ne=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ie.removeEventListener("dispose",ne)};ie.addEventListener("dispose",ne),E.__depthDisposeCallback=ne}E.__boundDepthTexture=ie}if(C.depthTexture&&!E.__autoAllocateDepthBuffer)if(H)for(let ie=0;ie<6;ie++)Nt(E.__webglFramebuffer[ie],C,ie);else C.texture.mipmaps.length>0?Nt(E.__webglFramebuffer[0],C,0):Nt(E.__webglFramebuffer,C,0);else if(H){E.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)if(n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[ie]),E.__webglDepthbuffer[ie]===void 0)E.__webglDepthbuffer[ie]=t.createRenderbuffer(),Sn(E.__webglDepthbuffer[ie],C,!1);else{const ne=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ce=E.__webglDepthbuffer[ie];t.bindRenderbuffer(t.RENDERBUFFER,ce),t.framebufferRenderbuffer(t.FRAMEBUFFER,ne,t.RENDERBUFFER,ce)}}else if(C.texture.mipmaps.length>0?n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=t.createRenderbuffer(),Sn(E.__webglDepthbuffer,C,!1);else{const ne=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ce=E.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ce),t.framebufferRenderbuffer(t.FRAMEBUFFER,ne,t.RENDERBUFFER,ce)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Mn(C,E,H){const ie=i.get(C);E!==void 0&&gt(ie.__webglFramebuffer,C,C.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),H!==void 0&&fn(C)}function Dn(C){const E=C.texture,H=i.get(C),ie=i.get(E);C.addEventListener("dispose",U),I(C);const ne=C.textures,ce=C.isWebGLCubeRenderTarget===!0,ge=ne.length>1;if(ge||(ie.__webglTexture===void 0&&(ie.__webglTexture=t.createTexture()),ie.__version=E.version,a.memory.textures++),ce){H.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(E.mipmaps.length>0){H.__webglFramebuffer[Q]=[];for(let J=0;J<E.mipmaps.length;J++)H.__webglFramebuffer[Q][J]=t.createFramebuffer()}else H.__webglFramebuffer[Q]=t.createFramebuffer()}else{if(E.mipmaps.length>0){H.__webglFramebuffer=[];for(let Q=0;Q<E.mipmaps.length;Q++)H.__webglFramebuffer[Q]=t.createFramebuffer()}else H.__webglFramebuffer=t.createFramebuffer();if(ge)for(let Q=0,J=ne.length;Q<J;Q++){const de=i.get(ne[Q]);de.__webglTexture===void 0&&(de.__webglTexture=t.createTexture(),a.memory.textures++)}if(C.samples>0&&ve(C)===!1){H.__webglMultisampledFramebuffer=t.createFramebuffer(),H.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let Q=0;Q<ne.length;Q++){const J=ne[Q];H.__webglColorRenderbuffer[Q]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,H.__webglColorRenderbuffer[Q]);const de=s.convert(J.format,J.colorSpace),N=s.convert(J.type),ee=T(J.internalFormat,de,N,J.normalized,J.colorSpace,C.isXRRenderTarget===!0),K=ut(C);t.renderbufferStorageMultisample(t.RENDERBUFFER,K,ee,C.width,C.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Q,t.RENDERBUFFER,H.__webglColorRenderbuffer[Q])}t.bindRenderbuffer(t.RENDERBUFFER,null),C.depthBuffer&&(H.__webglDepthRenderbuffer=t.createRenderbuffer(),Sn(H.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ce){n.bindTexture(t.TEXTURE_CUBE_MAP,ie.__webglTexture),qe(t.TEXTURE_CUBE_MAP,E);for(let Q=0;Q<6;Q++)if(E.mipmaps.length>0)for(let J=0;J<E.mipmaps.length;J++)gt(H.__webglFramebuffer[Q][J],C,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,J);else gt(H.__webglFramebuffer[Q],C,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);y(E)?M(t.TEXTURE_CUBE_MAP):E.mipmaps.length>0&&t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),n.unbindTexture()}else if(ge){for(let Q=0,J=ne.length;Q<J;Q++){const de=ne[Q],N=i.get(de);let ee=t.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ee=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ee,N.__webglTexture),qe(ee,de),gt(H.__webglFramebuffer,C,de,t.COLOR_ATTACHMENT0+Q,ee,0),y(de)&&M(ee)}n.unbindTexture()}else{let Q=t.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Q=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Q,ie.__webglTexture),qe(Q,E),E.mipmaps.length>0)for(let J=0;J<E.mipmaps.length;J++)gt(H.__webglFramebuffer[J],C,E,t.COLOR_ATTACHMENT0,Q,J);else gt(H.__webglFramebuffer,C,E,t.COLOR_ATTACHMENT0,Q,0);y(E)?M(Q):E.mipmaps.length>0&&t.texParameteri(Q,t.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),n.unbindTexture()}C.depthBuffer&&fn(C)}function O(C){const E=C.textures;for(let H=0,ie=E.length;H<ie;H++){const ne=E[H];if(y(ne)&&ne.mipmapsAutoUpdate===!0){const ce=A(C),ge=i.get(ne).__webglTexture;n.bindTexture(ce,ge),M(ce),n.unbindTexture()}}}const En=[];function ht(C){if(C.samples>0){if(ve(C)===!1){const E=C.textures,H=C.width,ie=C.height;let ne=t.COLOR_BUFFER_BIT;const ce=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ge=i.get(C),Q=E.length>1;if(Q)for(let de=0;de<E.length;de++)n.bindFramebuffer(t.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ge.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer),C.texture.mipmaps.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ge.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let de=0;de<E.length;de++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ne|=t.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ne|=t.STENCIL_BUFFER_BIT)),Q){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ge.__webglColorRenderbuffer[de]);const N=i.get(E[de]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,N,0)}t.blitFramebuffer(0,0,H,ie,0,0,H,ie,ne,t.NEAREST),l===!0&&(En.length=0,En.push(t.COLOR_ATTACHMENT0+de),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&En.push(ce),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,En))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Q)for(let de=0;de<E.length;de++){n.bindFramebuffer(t.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.RENDERBUFFER,ge.__webglColorRenderbuffer[de]);const N=i.get(E[de]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ge.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.TEXTURE_2D,N,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){const E=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[E])}}}function ut(C){return Math.min(r.maxSamples,C.samples)}function ve(C){const E=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function kt(C){const E=a.render.frame;h.get(C)!==E&&(h.set(C,E),C.update())}function Le(C,E){const H=C.colorSpace,ie=C.format,ne=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||H!==yc&&H!==pr&&(Ze.getTransfer(H)===lt?(ie!==Mi||ne!==kn)&&De("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):nt("WebGLTextures: Unsupported texture color space:",H)),E}function Ue(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(u.width=C.naturalWidth||C.width,u.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(u.width=C.displayWidth,u.height=C.displayHeight):(u.width=C.width,u.height=C.height),u}this.allocateTextureUnit=Pe,this.resetTextureUnits=j,this.getTextureUnits=Y,this.setTextureUnits=fe,this.setTexture2D=me,this.setTexture2DArray=te,this.setTexture3D=re,this.setTextureCube=oe,this.rebindTextures=Mn,this.setupRenderTarget=Dn,this.updateRenderTargetMipmap=O,this.updateMultisampleRenderTarget=ht,this.setupDepthRenderbuffer=fn,this.setupFrameBufferTexture=gt,this.useMultisampledRTT=ve,this.dispose=W}function mR(t,e){function n(i,r=pr){let s;const a=Ze.getTransfer(r);if(i===kn)return t.UNSIGNED_BYTE;if(i===sp)return t.UNSIGNED_SHORT_4_4_4_4;if(i===ap)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Zv)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Qv)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===$v)return t.BYTE;if(i===Kv)return t.SHORT;if(i===xo)return t.UNSIGNED_SHORT;if(i===rp)return t.INT;if(i===Ai)return t.UNSIGNED_INT;if(i===Si)return t.FLOAT;if(i===Ci)return t.HALF_FLOAT;if(i===Jv)return t.ALPHA;if(i===e_)return t.RGB;if(i===Mi)return t.RGBA;if(i===Rr)return t.DEPTH_COMPONENT;if(i===vr)return t.DEPTH_STENCIL;if(i===t_)return t.RED;if(i===op)return t.RED_INTEGER;if(i===rs)return t.RG;if(i===lp)return t.RG_INTEGER;if(i===cp)return t.RGBA_INTEGER;if(i===Ul||i===Ol||i===Fl||i===kl)if(a===lt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ul)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ol)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Fl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===kl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ul)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ol)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Fl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===kl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===hh||i===fh||i===ph||i===mh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===hh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===fh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ph)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===mh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===gh||i===xh||i===vh||i===_h||i===yh||i===vc||i===Sh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===gh||i===xh)return a===lt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===vh)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===_h)return s.COMPRESSED_R11_EAC;if(i===yh)return s.COMPRESSED_SIGNED_R11_EAC;if(i===vc)return s.COMPRESSED_RG11_EAC;if(i===Sh)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Mh||i===Eh||i===wh||i===bh||i===Th||i===Ah||i===Ch||i===Rh||i===Nh||i===Ph||i===Lh||i===Dh||i===Ih||i===Uh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Mh)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Eh)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===wh)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===bh)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Th)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ah)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ch)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Rh)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Nh)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ph)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Lh)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Dh)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ih)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Uh)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Oh||i===Fh||i===kh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Oh)return a===lt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Fh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===kh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Bh||i===zh||i===_c||i===Hh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Bh)return s.COMPRESSED_RED_RGTC1_EXT;if(i===zh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===_c)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Hh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ea?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const gR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,xR=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class vR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new f_(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new ss({vertexShader:gR,fragmentShader:xR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new zt(new na(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class _R extends Ur{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,u=null,h=null,p=null,f=null,m=null,_=null;const S=typeof XRWebGLBinding<"u",x=new vR,d={},g=n.getContextAttributes();let y=null,M=null;const A=[],T=[],v=new Ie;let b=null,I=null;const R=new Yn;R.viewport=new bt;const D=new Yn;D.viewport=new bt;const U=[R,D],X=new A1;let P=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let me=A[Z];return me===void 0&&(me=new Fu,A[Z]=me),me.getTargetRaySpace()},this.getControllerGrip=function(Z){let me=A[Z];return me===void 0&&(me=new Fu,A[Z]=me),me.getGripSpace()},this.getHand=function(Z){let me=A[Z];return me===void 0&&(me=new Fu,A[Z]=me),me.getHandSpace()};function $(Z){const me=T.indexOf(Z.inputSource);if(me===-1)return;const te=A[me];te!==void 0&&(te.update(Z.inputSource,Z.frame,u||a),te.dispatchEvent({type:Z.type,data:Z.inputSource}))}function z(){r.removeEventListener("select",$),r.removeEventListener("selectstart",$),r.removeEventListener("selectend",$),r.removeEventListener("squeeze",$),r.removeEventListener("squeezestart",$),r.removeEventListener("squeezeend",$),r.removeEventListener("end",z),r.removeEventListener("inputsourceschange",k);for(let Z=0;Z<A.length;Z++){const me=T[Z];me!==null&&(T[Z]=null,A[Z].disconnect(me))}P=null,W=null,x.reset();for(const Z in d)delete d[Z];if(e.setRenderTarget(y),m=null,f=null,p=null,r=null,M=null,Pe.stop(),i.isPresenting=!1,e.setPixelRatio(b),e.setSize(v.width,v.height,!1),I!==null){const Z=I.camera;Z.fov=I.fov,Z.zoom=I.zoom,Z.updateProjectionMatrix(),I=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,i.isPresenting===!0&&De("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,i.isPresenting===!0&&De("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(Z){u=Z},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return p===null&&S&&(p=new XRWebGLBinding(r,n)),p},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(y=e.getRenderTarget(),r.addEventListener("select",$),r.addEventListener("selectstart",$),r.addEventListener("selectend",$),r.addEventListener("squeeze",$),r.addEventListener("squeezestart",$),r.addEventListener("squeezeend",$),r.addEventListener("end",z),r.addEventListener("inputsourceschange",k),g.xrCompatible!==!0&&await n.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(v),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let te=null,re=null,oe=null;g.depth&&(oe=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,te=g.stencil?vr:Rr,re=g.stencil?ea:Ai);const Re={colorFormat:n.RGBA8,depthFormat:oe,scaleFactor:s};p=this.getBinding(),f=p.createProjectionLayer(Re),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),M=new bi(f.textureWidth,f.textureHeight,{format:Mi,type:kn,depthTexture:new ta(f.textureWidth,f.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{const te={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,te),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),M=new bi(m.framebufferWidth,m.framebufferHeight,{format:Mi,type:kn,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),u=null,a=await r.requestReferenceSpace(o),Pe.setContext(r),Pe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function k(Z){for(let me=0;me<Z.removed.length;me++){const te=Z.removed[me],re=T.indexOf(te);re>=0&&(T[re]=null,A[re].disconnect(te))}for(let me=0;me<Z.added.length;me++){const te=Z.added[me];let re=T.indexOf(te);if(re===-1){for(let Re=0;Re<A.length;Re++)if(Re>=T.length){T.push(te),re=Re;break}else if(T[Re]===null){T[Re]=te,re=Re;break}if(re===-1)break}const oe=A[re];oe&&oe.connect(te)}}function F(Z,me){me===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(me.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;let me=Z.near,te=Z.far;x.texture!==null&&(x.depthNear>0&&(me=x.depthNear),x.depthFar>0&&(te=x.depthFar)),X.near=D.near=R.near=me,X.far=D.far=R.far=te,(P!==X.near||W!==X.far)&&(r.updateRenderState({depthNear:X.near,depthFar:X.far}),P=X.near,W=X.far),X.layers.mask=Z.layers.mask|6,R.layers.mask=X.layers.mask&-5,D.layers.mask=X.layers.mask&-3;const re=Z.parent,oe=X.cameras;F(X,re);for(let Re=0;Re<oe.length;Re++)F(oe[Re],re);X.projectionMatrix.copy(R.projectionMatrix),X.projectionMatrixInverse.copy(R.projectionMatrixInverse),I===null&&Z.isPerspectiveCamera&&(I={camera:Z,fov:Z.fov,zoom:Z.zoom}),j(Z,X,re)};function j(Z,me,te){te===null?Z.matrix.copy(me.matrixWorld):(Z.matrix.copy(te.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(me.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(me.projectionMatrix),Z.projectionMatrixInverse.copy(me.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Vh*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return X},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(Z){l=Z,f!==null&&(f.fixedFoveation=Z),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Z)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(X)},this.getCameraTexture=function(Z){return d[Z]};let Y=null;function fe(Z,me){if(h=me.getViewerPose(u||a),_=me,h!==null){const te=h.views;m!==null&&(e.setRenderTargetFramebuffer(M,m.framebuffer),e.setRenderTarget(M));let re=!1;te.length!==X.cameras.length&&(X.cameras.length=0,re=!0);for(let Ae=0;Ae<te.length;Ae++){const qe=te[Ae];let Qe=null;if(m!==null)Qe=m.getViewport(qe);else{const Rt=p.getViewSubImage(f,qe);Qe=Rt.viewport,Ae===0&&(e.setRenderTargetTextures(M,Rt.colorTexture,Rt.depthStencilTexture),e.setRenderTarget(M))}let Be=U[Ae];Be===void 0&&(Be=new Yn,Be.layers.enable(Ae),Be.viewport=new bt,U[Ae]=Be),Be.matrix.fromArray(qe.transform.matrix),Be.matrix.decompose(Be.position,Be.quaternion,Be.scale),Be.projectionMatrix.fromArray(qe.projectionMatrix),Be.projectionMatrixInverse.copy(Be.projectionMatrix).invert(),Be.viewport.set(Qe.x,Qe.y,Qe.width,Qe.height),Ae===0&&(X.matrix.copy(Be.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale)),re===!0&&X.cameras.push(Be)}const oe=r.enabledFeatures;if(oe&&oe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&S){p=i.getBinding();const Ae=p.getDepthInformation(te[0]);Ae&&Ae.isValid&&Ae.texture&&x.init(Ae,r.renderState)}if(oe&&oe.includes("camera-access")&&S){e.state.unbindTexture(),p=i.getBinding();for(let Ae=0;Ae<te.length;Ae++){const qe=te[Ae].camera;if(qe){let Qe=d[qe];Qe||(Qe=new f_,d[qe]=Qe);const Be=p.getCameraImage(qe);Qe.sourceTexture=Be}}}}for(let te=0;te<A.length;te++){const re=T[te],oe=A[te];re!==null&&oe!==void 0&&oe.update(re,me,u||a)}Y&&Y(Z,me),me.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:me}),_=null}const Pe=new v_;Pe.setAnimationLoop(fe),this.setAnimationLoop=function(Z){Y=Z},this.dispose=function(){}}}const yR=new yt,C_=new Oe;C_.set(-1,0,0,0,1,0,0,0,1);function SR(t,e){function n(x,d){x.matrixAutoUpdate===!0&&x.updateMatrix(),d.value.copy(x.matrix)}function i(x,d){d.color.getRGB(x.fogColor.value,p_(t)),d.isFog?(x.fogNear.value=d.near,x.fogFar.value=d.far):d.isFogExp2&&(x.fogDensity.value=d.density)}function r(x,d,g,y,M){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?s(x,d):d.isMeshLambertMaterial?(s(x,d),d.envMap&&(x.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(s(x,d),p(x,d)):d.isMeshPhongMaterial?(s(x,d),h(x,d),d.envMap&&(x.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(s(x,d),f(x,d),d.isMeshPhysicalMaterial&&m(x,d,M)):d.isMeshMatcapMaterial?(s(x,d),_(x,d)):d.isMeshDepthMaterial?s(x,d):d.isMeshDistanceMaterial?(s(x,d),S(x,d)):d.isMeshNormalMaterial?s(x,d):d.isLineBasicMaterial?(a(x,d),d.isLineDashedMaterial&&o(x,d)):d.isPointsMaterial?l(x,d,g,y):d.isSpriteMaterial?u(x,d):d.isShadowMaterial?(x.color.value.copy(d.color),x.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(x,d){x.opacity.value=d.opacity,d.color&&x.diffuse.value.copy(d.color),d.emissive&&x.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(x.map.value=d.map,n(d.map,x.mapTransform)),d.alphaMap&&(x.alphaMap.value=d.alphaMap,n(d.alphaMap,x.alphaMapTransform)),d.bumpMap&&(x.bumpMap.value=d.bumpMap,n(d.bumpMap,x.bumpMapTransform),x.bumpScale.value=d.bumpScale,d.side===Ln&&(x.bumpScale.value*=-1)),d.normalMap&&(x.normalMap.value=d.normalMap,n(d.normalMap,x.normalMapTransform),x.normalScale.value.copy(d.normalScale),d.side===Ln&&x.normalScale.value.negate()),d.displacementMap&&(x.displacementMap.value=d.displacementMap,n(d.displacementMap,x.displacementMapTransform),x.displacementScale.value=d.displacementScale,x.displacementBias.value=d.displacementBias),d.emissiveMap&&(x.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,x.emissiveMapTransform)),d.specularMap&&(x.specularMap.value=d.specularMap,n(d.specularMap,x.specularMapTransform)),d.alphaTest>0&&(x.alphaTest.value=d.alphaTest);const g=e.get(d),y=g.envMap,M=g.envMapRotation;y&&(x.envMap.value=y,x.envMapRotation.value.setFromMatrix4(yR.makeRotationFromEuler(M)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(C_),x.reflectivity.value=d.reflectivity,x.ior.value=d.ior,x.refractionRatio.value=d.refractionRatio),d.lightMap&&(x.lightMap.value=d.lightMap,x.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,x.lightMapTransform)),d.aoMap&&(x.aoMap.value=d.aoMap,x.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,x.aoMapTransform))}function a(x,d){x.diffuse.value.copy(d.color),x.opacity.value=d.opacity,d.map&&(x.map.value=d.map,n(d.map,x.mapTransform))}function o(x,d){x.dashSize.value=d.dashSize,x.totalSize.value=d.dashSize+d.gapSize,x.scale.value=d.scale}function l(x,d,g,y){x.diffuse.value.copy(d.color),x.opacity.value=d.opacity,x.size.value=d.size*g,x.scale.value=y*.5,d.map&&(x.map.value=d.map,n(d.map,x.uvTransform)),d.alphaMap&&(x.alphaMap.value=d.alphaMap,n(d.alphaMap,x.alphaMapTransform)),d.alphaTest>0&&(x.alphaTest.value=d.alphaTest)}function u(x,d){x.diffuse.value.copy(d.color),x.opacity.value=d.opacity,x.rotation.value=d.rotation,d.map&&(x.map.value=d.map,n(d.map,x.mapTransform)),d.alphaMap&&(x.alphaMap.value=d.alphaMap,n(d.alphaMap,x.alphaMapTransform)),d.alphaTest>0&&(x.alphaTest.value=d.alphaTest)}function h(x,d){x.specular.value.copy(d.specular),x.shininess.value=Math.max(d.shininess,1e-4)}function p(x,d){d.gradientMap&&(x.gradientMap.value=d.gradientMap)}function f(x,d){x.metalness.value=d.metalness,d.metalnessMap&&(x.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,x.metalnessMapTransform)),x.roughness.value=d.roughness,d.roughnessMap&&(x.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,x.roughnessMapTransform)),d.envMap&&(x.envMapIntensity.value=d.envMapIntensity)}function m(x,d,g){x.ior.value=d.ior,d.diffuseRoughness>0&&(x.diffuseRoughness.value=d.diffuseRoughness,d.diffuseRoughnessMap&&(x.diffuseRoughnessMap.value=d.diffuseRoughnessMap,n(d.diffuseRoughnessMap,x.diffuseRoughnessMapTransform))),d.sheen>0&&(x.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),x.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(x.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,x.sheenColorMapTransform)),d.sheenRoughnessMap&&(x.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,x.sheenRoughnessMapTransform))),d.clearcoat>0&&(x.clearcoat.value=d.clearcoat,x.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(x.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,x.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(x.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ln&&x.clearcoatNormalScale.value.negate())),d.dispersion>0&&(x.dispersion.value=d.dispersion),d.retroreflectivity>0&&(x.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(x.iridescence.value=d.iridescence,x.iridescenceIOR.value=d.iridescenceIOR,x.iridescenceThicknessMinimum.value=d.iridescenceThicknessMinimum,x.iridescenceThicknessMaximum.value=d.iridescenceThicknessMaximum,d.iridescenceMap&&(x.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,x.iridescenceMapTransform)),d.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),d.transmission>0&&(x.transmission.value=d.transmission,x.transmissionSamplerMap.value=g.texture,x.transmissionSamplerSize.value.set(g.width,g.height),d.transmissionMap&&(x.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,x.transmissionMapTransform)),x.thickness.value=d.thickness,d.thicknessMap&&(x.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=d.attenuationDistance,x.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(x.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(x.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=d.specularIntensity,x.specularColor.value.copy(d.specularColor),d.specularColorMap&&(x.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,x.specularColorMapTransform)),d.specularIntensityMap&&(x.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,x.specularIntensityMapTransform))}function _(x,d){d.matcap&&(x.matcap.value=d.matcap)}function S(x,d){const g=e.get(d).light;x.referencePosition.value.setFromMatrixPosition(g.matrixWorld),x.nearDistance.value=g.shadow.camera.near,x.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function MR(t,e,n,i){let r={},s={};function a(g,y){const M=y.program;i.uniformBlockBinding(g,M,r[g.id])}function o(g,y){let M=r[g.id];M===void 0&&(_(g),M=l(g),r[g.id]=M,g.addEventListener("dispose",x));const A=y.program;i.updateUBOMapping(g,A);const T=e.render.frame;s[g.id]!==T&&(u(g),s[g.id]=T)}function l(g){const y=t.createBuffer(),M=g.__size,A=g.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,M,A),t.bindBuffer(t.UNIFORM_BUFFER,null),y}function u(g){const y=r[g.id],M=g.uniforms,A=g.__cache;t.bindBuffer(t.UNIFORM_BUFFER,y);for(let T=0,v=M.length;T<v;T++){const b=M[T];if(Array.isArray(b))for(let I=0,R=b.length;I<R;I++)h(b[I],T,I,A);else h(b,T,0,A)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function h(g,y,M,A){if(f(g,y,M,A)===!0){const T=g.__offset,v=g.value;if(Array.isArray(v)){let b=0;for(let I=0;I<v.length;I++){const R=v[I],D=S(R,!0);p(R,g.__data,b),b+=D.storage/Float32Array.BYTES_PER_ELEMENT}}else p(v,g.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,T,g.__data)}}function p(g,y,M){typeof g=="number"||typeof g=="boolean"?y[M]=g:g.isMatrix3?(y[M]=g.elements[0],y[M+1]=g.elements[1],y[M+2]=g.elements[2],y[M+3]=0,y[M+4]=g.elements[3],y[M+5]=g.elements[4],y[M+6]=g.elements[5],y[M+7]=0,y[M+8]=g.elements[6],y[M+9]=g.elements[7],y[M+10]=g.elements[8],y[M+11]=0):ArrayBuffer.isView(g)?y.set(g.subarray(0,y.length-M),M):g.toArray(y,M)}function f(g,y,M,A){const T=g.value,v=y+"_"+M;if(Array.isArray(T)){A[v]===void 0&&(A[v]=[]);const b=A[v];let I=!1;for(let R=0;R<T.length;R++)m(T[R],b,R)===!0&&(I=!0);return I}return m(T,A,v)}function m(g,y,M){if(y[M]===void 0)return typeof g=="number"||typeof g=="boolean"?y[M]=g:ArrayBuffer.isView(g)?y[M]=g.slice():y[M]=g.clone(),!0;{const A=y[M];if(typeof g=="number"||typeof g=="boolean"){if(A!==g)return y[M]=g,!0}else{if(ArrayBuffer.isView(g))return!0;if(A.equals(g)===!1)return A.copy(g),!0}}return!1}function _(g){const y=g.uniforms;let M=0;const A=16;for(let v=0,b=y.length;v<b;v++){const I=Array.isArray(y[v])?y[v]:[y[v]];for(let R=0,D=I.length;R<D;R++){const U=I[R],X=Array.isArray(U.value)?U.value:[U.value],P=Array.isArray(y[v])||Array.isArray(U.value);let W=M;for(let z=0,k=X.length;z<k;z++){const F=X[z],j=S(F,P),Y=M%A,fe=Y%j.boundary,Pe=Y+fe;M+=fe,Pe!==0&&A-Pe<j.storage&&(M+=A-Pe),z===0&&(W=M),M+=j.storage}const $=U.type==="int"?Int32Array:U.type==="uint"?Uint32Array:Float32Array;U.__data=new $((M-W)/Float32Array.BYTES_PER_ELEMENT),U.__offset=W}}const T=M%A;return T>0&&(M+=A-T),g.__size=M,g.__cache={},this}function S(g,y){const M={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(M.boundary=4,M.storage=4):g.isVector2?(M.boundary=8,M.storage=8):g.isVector3||g.isColor?(M.boundary=16,M.storage=12):g.isVector4?(M.boundary=16,M.storage=16):g.isMatrix3?(M.boundary=16,M.storage=48):g.isMatrix4?(M.boundary=16,M.storage=64):g.isTexture?De("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(g)?(M.boundary=16,M.storage=g.byteLength):De("WebGLRenderer: Unsupported uniform value type.",g),y===!0&&(M.boundary=16,M.storage=Math.ceil(M.storage/16)*16),M}function x(g){const y=g.target;y.removeEventListener("dispose",x),t.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function d(){for(const g in r)t.deleteBuffer(r[g]);r={},s={}}return{bind:a,update:o,dispose:d}}const ER=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let xi=null;function wR(){return xi===null&&(xi=new h1(ER,16,16,rs,Ci),xi.name="DFG_LUT",xi.minFilter=Cn,xi.magFilter=Cn,xi.wrapS=ji,xi.wrapT=ji,xi.generateMipmaps=!1,xi.needsUpdate=!0),xi}class bR{constructor(e={}){const{canvas:n=Fw(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:f=!1,outputBufferType:m=kn}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=a;const S=m,x=new Set([cp,lp,op]),d=new Set([kn,Ai,xo,ea,sp,ap]),g=new Uint32Array(4),y=new Int32Array(4),M={textures:[],min:[],max:[],resolution:[]};let A=null,T=null;const v=[],b=[];let I=null;this.domElement=n,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let D=!1,U=null,X=null,P=null,W=null;this._outputColorSpace=Wn;let $=0,z=0,k=null,F=-1,j=null;const Y=new bt,fe=new bt;let Pe=null;const Z=new je(0);let me=0,te=n.width,re=n.height,oe=1,Re=null,at=null;const Ae=new bt(0,0,te,re),qe=new bt(0,0,te,re);let Qe=!1;const Be=new _o,Rt=new pp;let mt=!1,Lt=!1;const gt=new yt,Sn=new G,Nt=new bt,fn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Mn=!1;function Dn(){return k===null?oe:1}let O=i;function En(w,L){return n.getContext(w,L)}let ht,ut,ve,kt,Le,Ue,C,E,H,ie,ne,ce,ge,Q,J,de,N,ee,K,he,le,ue,Ce;try{const w={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${ip}`),n.addEventListener("webglcontextlost",Ne,!1),n.addEventListener("webglcontextrestored",ze,!1),n.addEventListener("webglcontextcreationerror",_e,!1),O===null){const L="webgl2";if(O=En(L,w),O===null)throw En(L)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ge()}catch(w){throw n.removeEventListener("webglcontextlost",Ne,!1),n.removeEventListener("webglcontextrestored",ze,!1),n.removeEventListener("webglcontextcreationerror",_e,!1),nt("WebGLRenderer: "+w.message),w}function Ge(){ht=new CA(O),ht.init(),le=new mR(O,ht),ut=new xA(O,ht,e,le),ve=new fR(O,ht),ut.reversedDepthBuffer&&f&&ve.buffers.depth.setReversed(!0),X=O.createFramebuffer(),P=O.createFramebuffer(),W=O.createFramebuffer(),kt=new PA(O),Le=new JC,Ue=new pR(O,ht,ve,Le,ut,le,kt),C=new AA(R),E=new D1(O),ue=new mA(O,E),H=new RA(O,E,kt,ue),ie=new DA(O,H,E,ue,kt),ee=new LA(O,ut,Ue),J=new vA(Le),ne=new QC(R,C,ht,ut,ue,J),ce=new SR(R,Le),ge=new tR,Q=new oR(ht),N=new pA(R,C,ve,ie,_,l),de=new hR(R,ie,ut),Ce=new MR(O,kt,ut,ve),K=new gA(O,ht,kt),he=new NA(O,ht,kt),kt.programs=ne.programs,R.capabilities=ut,R.extensions=ht,R.properties=Le,R.renderLists=ge,R.shadowMap=de,R.state=ve,R.info=kt}S!==kn&&(I=new UA(S,n.width,n.height,o,r,s));const ae=new _R(R,O);this.xr=ae,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const w=ht.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=ht.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return oe},this.setPixelRatio=function(w){w!==void 0&&(oe=w,this.setSize(te,re,!1))},this.getSize=function(w){return w.set(te,re)},this.setSize=function(w,L,q=!0){if(ae.isPresenting){De("WebGLRenderer: Can't change size while VR device is presenting.");return}te=w,re=L,n.width=Math.floor(w*oe),n.height=Math.floor(L*oe),q===!0&&(n.style.width=w+"px",n.style.height=L+"px"),I!==null&&I.setSize(n.width,n.height),this.setViewport(0,0,w,L)},this.getDrawingBufferSize=function(w){return w.set(te*oe,re*oe).floor()},this.setDrawingBufferSize=function(w,L,q){te=w,re=L,oe=q,n.width=Math.floor(w*q),n.height=Math.floor(L*q),this.setViewport(0,0,w,L)},this.setEffects=function(w){if(S===kn){nt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let L=0;L<w.length;L++)if(w[L].isOutputPass===!0){De("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(Y)},this.getViewport=function(w){return w.copy(Ae)},this.setViewport=function(w,L,q,B){w.isVector4?Ae.set(w.x,w.y,w.z,w.w):Ae.set(w,L,q,B),ve.viewport(Y.copy(Ae).multiplyScalar(Dn()).round())},this.getScissor=function(w){return w.copy(qe)},this.setScissor=function(w,L,q,B){w.isVector4?qe.set(w.x,w.y,w.z,w.w):qe.set(w,L,q,B),ve.scissor(fe.copy(qe).multiplyScalar(Dn()).round())},this.getScissorTest=function(){return Qe},this.setScissorTest=function(w){ve.setScissorTest(Qe=w)},this.setOpaqueSort=function(w){Re=w},this.setTransparentSort=function(w){at=w},this.getClearColor=function(w){return w.copy(N.getClearColor())},this.setClearColor=function(){N.setClearColor(...arguments)},this.getClearAlpha=function(){return N.getClearAlpha()},this.setClearAlpha=function(){N.setClearAlpha(...arguments)},this.clear=function(w=!0,L=!0,q=!0){let B=0;if(w){let V=!1;if(k!==null){const xe=k.texture.format;V=x.has(xe)}if(V){const xe=k.texture.type,Ee=d.has(xe),pe=N.getClearColor(),Se=N.getClearAlpha(),Te=pe.r,Fe=pe.g,Ye=pe.b;Ee?(g[0]=Te,g[1]=Fe,g[2]=Ye,g[3]=Se,O.clearBufferuiv(O.COLOR,0,g)):(y[0]=Te,y[1]=Fe,y[2]=Ye,y[3]=Se,O.clearBufferiv(O.COLOR,0,y))}else B|=O.COLOR_BUFFER_BIT}L&&(B|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(B|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&O.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),U=w},this.dispose=function(){n.removeEventListener("webglcontextlost",Ne,!1),n.removeEventListener("webglcontextrestored",ze,!1),n.removeEventListener("webglcontextcreationerror",_e,!1),N.dispose(),ge.dispose(),Q.dispose(),Ue.dispose(),Le.dispose(),C.dispose(),ie.dispose(),H.dispose(),ue.dispose(),Ce.dispose(),ne.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",Np),ae.removeEventListener("sessionend",Pp),Or.stop()};function Ne(w){w.preventDefault(),rg("WebGLRenderer: Context Lost."),D=!0}function ze(){rg("WebGLRenderer: Context Restored."),D=!1;const w=kt.autoReset,L=de.enabled,q=de.autoUpdate,B=de.needsUpdate,V=de.type;Ge(),kt.autoReset=w,de.enabled=L,de.autoUpdate=q,de.needsUpdate=B,de.type=V}function _e(w){nt("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ot(w){const L=w.target;L.removeEventListener("dispose",ot),Wt(L)}function Wt(w){Ji(w),Le.remove(w)}function Ji(w){const L=Le.get(w).programs;L!==void 0&&(L.forEach(function(q){ne.releaseProgram(q)}),w.isShaderMaterial&&ne.releaseShaderCache(w))}this.renderBufferDirect=function(w,L,q,B,V,xe){L===null&&(L=fn);const Ee=V.isMesh&&V.matrixWorld.determinantAffine()<0,pe=J_(w,L,q,B,V);ve.setMaterial(B,Ee);let Se=q.index,Te=1;if(B.wireframe===!0){if(Se=H.getWireframeAttribute(q),Se===void 0)return;Te=2}const Fe=q.drawRange,Ye=q.attributes.position;let we=Fe.start*Te,$e=(Fe.start+Fe.count)*Te;xe!==null&&(we=Math.max(we,xe.start*Te),$e=Math.min($e,(xe.start+xe.count)*Te)),Se!==null?(we=Math.max(we,0),$e=Math.min($e,Se.count)):Ye!=null&&(we=Math.max(we,0),$e=Math.min($e,Ye.count));const Dt=$e-we;if(Dt<0||Dt===1/0)return;ue.setup(V,B,pe,q,Se);let ft,dt=K;if(Se!==null&&(ft=E.get(Se),dt=he,dt.setIndex(ft)),V.isMesh)B.wireframe===!0?(ve.setLineWidth(B.wireframeLinewidth*Dn()),dt.setMode(O.LINES)):dt.setMode(O.TRIANGLES);else if(V.isLine){let rn=B.linewidth;rn===void 0&&(rn=1),ve.setLineWidth(rn*Dn()),V.isLineSegments?dt.setMode(O.LINES):V.isLineLoop?dt.setMode(O.LINE_LOOP):dt.setMode(O.LINE_STRIP)}else V.isPoints?dt.setMode(O.POINTS):V.isSprite&&dt.setMode(O.TRIANGLES);if(V.isBatchedMesh)if(ht.get("WEBGL_multi_draw"))dt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const rn=V._multiDrawStarts,be=V._multiDrawCounts,pn=V._multiDrawCount,it=Se?E.get(Se).bytesPerElement:1,Fr=Le.get(B).currentProgram.getUniforms();for(let sn=0;sn<pn;sn++)Fr.setValue(O,"_gl_DrawID",sn),dt.render(rn[sn]/it,be[sn])}else if(V.isInstancedMesh)dt.renderInstances(we,Dt,V.count);else if(q.isInstancedBufferGeometry){const rn=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,be=Math.min(q.instanceCount,rn);dt.renderInstances(we,Dt,be)}else dt.render(we,Dt)};function Rp(w,L,q,B){U!==null&&w.isNodeMaterial&&U.setObject(B,w),mt===!0&&J.setState(w,q,!1),w.transparent===!0&&w.side===Hi&&w.forceSinglePass===!1?(w.side=Ln,w.needsUpdate=!0,fa(w,L,B),w.side=is,w.needsUpdate=!0,fa(w,L,B),w.side=Hi):fa(w,L,B)}this.compile=function(w,L,q=null){q===null&&(q=w),U!==null&&U.renderStart(w,L,q),T=Q.get(q),T.init(L),b.push(T),q.traverseVisible(function(V){V.isLight&&V.layers.test(L.layers)&&(T.pushLight(V),V.castShadow&&T.pushShadow(V))}),w!==q&&w.traverseVisible(function(V){V.isLight&&V.layers.test(L.layers)&&(T.pushLight(V),V.castShadow&&T.pushShadow(V))}),T.setupLights(),U!==null&&U.updateLights(T.state.lightsArray),Lt=this.localClippingEnabled,mt=J.init(this.clippingPlanes,Lt),mt===!0&&J.setGlobalState(this.clippingPlanes,L),U!==null&&de.render(T.state.shadowsArray,q,L);const B=new Set;return w.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const xe=V.material;if(xe)if(Array.isArray(xe))for(let Ee=0;Ee<xe.length;Ee++){const pe=xe[Ee];Rp(pe,q,L,V),B.add(pe)}else Rp(xe,q,L,V),B.add(xe)}),T=b.pop(),U!==null&&U.renderEnd(),B},this.compileAsync=function(w,L,q=null){const B=this.compile(w,L,q);return new Promise(V=>{function xe(){if(B.forEach(function(Ee){const Se=Le.get(Ee).currentProgram;(Se===void 0||Se.isReady())&&B.delete(Ee)}),B.size===0){V(w);return}setTimeout(xe,10)}ht.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let Qc=null;function Z_(w){Qc&&Qc(w)}function Np(){Or.stop()}function Pp(){Or.start()}const Or=new v_;Or.setAnimationLoop(Z_),typeof self<"u"&&Or.setContext(self),this.setAnimationLoop=function(w){Qc=w,ae.setAnimationLoop(w),w===null?Or.stop():Or.start()},ae.addEventListener("sessionstart",Np),ae.addEventListener("sessionend",Pp),this.render=function(w,L){if(L!==void 0&&L.isCamera!==!0){nt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;U!==null&&U.renderStart(w,L);const q=ae.enabled===!0&&ae.isPresenting===!0,B=I!==null&&(k===null||q)&&I.begin(R,k);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(L),L=ae.getCamera()),w.isScene===!0&&w.onBeforeRender(R,w,L,k),T=Q.get(w,b.length),T.init(L),T.state.textureUnits=Ue.getTextureUnits(),b.push(T),gt.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),L.isArrayCamera?Rt.setFromArrayCamera(L):Be.setFromProjectionMatrix(gt,di,L.reversedDepth),Lt=this.localClippingEnabled,mt=J.init(this.clippingPlanes,Lt),A=ge.get(w,v.length),A.init(),v.push(A),this.info.render.frame++,ae.enabled===!0&&ae.isPresenting===!0){const Ee=R.xr.getDepthSensingMesh();Ee!==null&&Jc(Ee,L,-1/0,R.sortObjects)}Jc(w,L,0,R.sortObjects),A.finish(),U!==null&&U.updateLights(T.state.lightsArray),R.sortObjects===!0&&A.sort(Re,at),Mn=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,Mn&&N.addToRenderList(A,w),this.info.autoReset===!0&&this.info.reset(),mt===!0&&J.beginShadows();const V=T.state.shadowsArray;if(de.render(V,w,L),mt===!0&&J.endShadows(),(B&&I.hasRenderPass())===!1){const Ee=A.opaque,pe=A.transmissive;if(T.setupLights(),L.isArrayCamera){const Se=L.cameras;if(pe.length>0)for(let Te=0,Fe=Se.length;Te<Fe;Te++){const Ye=Se[Te];Dp(Ee,pe,w,Ye)}Mn&&N.render(w);for(let Te=0,Fe=Se.length;Te<Fe;Te++){const Ye=Se[Te];Lp(A,w,Ye,Ye.viewport)}}else pe.length>0&&Dp(Ee,pe,w,L),Mn&&N.render(w),Lp(A,w,L)}k!==null&&z===0&&(Ue.updateMultisampleRenderTarget(k),Ue.updateRenderTargetMipmap(k)),B&&I.end(R),w.isScene===!0&&w.onAfterRender(R,w,L),ue.resetDefaultState(),F=-1,j=null,b.pop(),b.length>0?(T=b[b.length-1],Ue.setTextureUnits(T.state.textureUnits),mt===!0&&J.setGlobalState(R.clippingPlanes,T.state.camera)):T=null,v.pop(),v.length>0?A=v[v.length-1]:A=null,U!==null&&U.renderEnd()};function Jc(w,L,q,B){if(w.visible===!1)return;if(w.layers.test(L.layers)){if(w.isGroup)q=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(L);else if(w.isLight)T.pushLight(w),w.castShadow&&T.pushShadow(w);else if(w.isSprite){const Ee=L.isArrayCamera?Rt:Be;if(!w.frustumCulled||w.intersectsFrustum(Ee)){B&&Nt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(gt);const pe=ie.update(w),Se=w.material;Se.visible&&A.push(w,pe,Se,q,Nt.z,null,L)}}else if(w.isMesh||w.isLine||w.isPoints){const Ee=L.isArrayCamera?Rt:Be;if(!w.frustumCulled||w.intersectsFrustum(Ee)){const pe=ie.update(w),Se=w.material;if(B&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Nt.copy(w.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),Nt.copy(pe.boundingSphere.center)),Nt.applyMatrix4(w.matrixWorld).applyMatrix4(gt)),Array.isArray(Se)){const Te=pe.groups;for(let Fe=0,Ye=Te.length;Fe<Ye;Fe++){const we=Te[Fe],$e=Se[we.materialIndex];$e&&$e.visible&&A.push(w,pe,$e,q,Nt.z,we,L)}}else Se.visible&&A.push(w,pe,Se,q,Nt.z,null,L)}}}const xe=w.children;for(let Ee=0,pe=xe.length;Ee<pe;Ee++)Jc(xe[Ee],L,q,B)}function Lp(w,L,q,B){const{opaque:V,transmissive:xe,transparent:Ee}=w;T.setupLightsView(q),mt===!0&&J.setGlobalState(R.clippingPlanes,q),B&&ve.viewport(Y.copy(B)),V.length>0&&Ro(V,L,q),xe.length>0&&Ro(xe,L,q),Ee.length>0&&Ro(Ee,L,q),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function Dp(w,L,q,B){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[B.id]===void 0){const we=ht.has("EXT_color_buffer_half_float")||ht.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[B.id]=new bi(1,1,{generateMipmaps:!0,type:we?Ci:kn,minFilter:xr,samples:Math.max(4,ut.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ze.workingColorSpace})}const xe=T.state.transmissionRenderTarget[B.id],Ee=B.viewport||Y;xe.setSize(Ee.z*R.transmissionResolutionScale,Ee.w*R.transmissionResolutionScale);const pe=R.getRenderTarget(),Se=R.getActiveCubeFace(),Te=R.getActiveMipmapLevel();R.setRenderTarget(xe),R.getClearColor(Z),me=R.getClearAlpha(),me<1&&R.setClearColor(16777215,.5),R.clear(),Mn&&N.render(q);const Fe=R.toneMapping;R.toneMapping=Xi;const Ye=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),T.setupLightsView(B),mt===!0&&J.setGlobalState(R.clippingPlanes,B),Ro(w,q,B),Ue.updateMultisampleRenderTarget(xe),Ue.updateRenderTargetMipmap(xe),ht.has("WEBGL_multisampled_render_to_texture")===!1){let we=!1;for(let $e=0,Dt=L.length;$e<Dt;$e++){const ft=L[$e],{object:dt,geometry:rn,material:be,group:pn}=ft;if(be.side===Hi&&dt.layers.test(B.layers)){const it=be.side;be.side=Ln,be.needsUpdate=!0,Ip(dt,q,B,rn,be,pn),be.side=it,be.needsUpdate=!0,we=!0}}we===!0&&(Ue.updateMultisampleRenderTarget(xe),Ue.updateRenderTargetMipmap(xe))}R.setRenderTarget(pe,Se,Te),R.setClearColor(Z,me),Ye!==void 0&&(B.viewport=Ye),R.toneMapping=Fe}function Ro(w,L,q){const B=L.isScene===!0?L.overrideMaterial:null;for(let V=0,xe=w.length;V<xe;V++){const Ee=w[V],{object:pe,geometry:Se,group:Te}=Ee;let Fe=Ee.material;Fe.allowOverride===!0&&B!==null&&(Fe=B),pe.layers.test(q.layers)&&Ip(pe,L,q,Se,Fe,Te)}}function Ip(w,L,q,B,V,xe){U!==null&&V.isNodeMaterial&&U.setObject(w,V),w.onBeforeRender(R,L,q,B,V,xe),w.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),V.onBeforeRender(R,L,q,B,w,xe),V.transparent===!0&&V.side===Hi&&V.forceSinglePass===!1?(V.side=Ln,V.needsUpdate=!0,R.renderBufferDirect(q,L,B,V,w,xe),V.side=is,V.needsUpdate=!0,R.renderBufferDirect(q,L,B,V,w,xe),V.side=Hi):R.renderBufferDirect(q,L,B,V,w,xe),w.onAfterRender(R,L,q,B,V,xe)}function Up(w){let L=0;for(const q of w)q.texture!==null&&L++;return L}function fa(w,L,q){L.isScene!==!0&&(L=fn);const B=Le.get(w),V=T.state.lights,xe=T.state.shadowsArray,Ee=V.state.version,pe=ne.getParameters(w,V.state,xe,L,q,T.state.lightProbeGridArray),Se=ne.getProgramCacheKey(pe);let Te=B.programs;B.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?L.environment:null,B.fog=L.fog;const Fe=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;B.envMap=C.get(w.envMap||B.environment,Fe),B.envMapRotation=B.environment!==null&&w.envMap===null?L.environmentRotation:w.envMapRotation,Te===void 0&&(w.addEventListener("dispose",ot),Te=new Map,B.programs=Te,B.programVariants=new Map);let Ye=Te.get(Se);if(Ye!==void 0){if(B.currentProgram===Ye&&B.lightsStateVersion===Ee)return Fp(w,pe),Ye}else pe.uniforms=ne.getUniforms(w),U!==null&&w.isNodeMaterial&&U.build(w,q,pe),w.onBeforeCompile(pe,R),Ye=ne.acquireProgram(pe,Se),Te.set(Se,Ye),B.uniforms=pe.uniforms;const we=B.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(we.clippingPlanes=J.uniform),Fp(w,pe),B.needsLights=ty(w),B.lightsStateVersion=Ee,B.needsLights&&(we.ambientLightColor.value=V.state.ambient,we.lightProbe.value=V.state.probe,we.sunLights.value=V.state.sun,we.sunLightShadows.value=V.state.sunShadow,we.directionalLights.value=V.state.directional,we.directionalLightShadows.value=V.state.directionalShadow,we.spotLights.value=V.state.spot,we.spotLightShadows.value=V.state.spotShadow,we.rectAreaLights.value=V.state.rectArea,we.ltc_1.value=V.state.rectAreaLTC1,we.ltc_2.value=V.state.rectAreaLTC2,we.pointLights.value=V.state.point,we.pointLightShadows.value=V.state.pointShadow,we.hemisphereLights.value=V.state.hemi,we.sunShadowMatrix.value=V.state.sunShadowMatrix,we.sunShadowCascade.value=V.state.sunShadowCascade,we.directionalShadowMatrix.value=V.state.directionalShadowMatrix,we.spotLightMatrix.value=V.state.spotLightMatrix,we.spotLightMap.value=V.state.spotLightMap,we.pointShadowMatrix.value=V.state.pointShadowMatrix),B.numLightProbeGrids=Up(T.state.lightProbeGridArray),B.currentProgram=Ye,B.uniformsList=null,Ye}function Q_(w,L,q,B,V){const xe=Le.get(w),Ee=xe.currentProgram.id+","+B+","+V;let pe=xe.programVariants.get(Ee);return pe===void 0?(pe=fa(w,L,q),xe.programVariants.set(Ee,pe)):(xe.currentProgram=pe,xe.uniformsList=null,xe.outputColorSpace=B,xe.toneMapping=V),pe}function Op(w){if(w.uniformsList===null){const L=w.currentProgram.getUniforms();w.uniformsList=Hl.seqWithValue(L.seq,w.uniforms)}return w.uniformsList}function Fp(w,L){const q=Le.get(w);q.outputColorSpace=L.outputColorSpace,q.batching=L.batching,q.batchingColor=L.batchingColor,q.instancing=L.instancing,q.instancingColor=L.instancingColor,q.instancingMorph=L.instancingMorph,q.skinning=L.skinning,q.morphTargets=L.morphTargets,q.morphNormals=L.morphNormals,q.morphColors=L.morphColors,q.morphTargetsCount=L.morphTargetsCount,q.numClippingPlanes=L.numClippingPlanes,q.numIntersection=L.numClipIntersection,q.vertexAlphas=L.vertexAlphas,q.vertexTangents=L.vertexTangents,q.toneMapping=L.toneMapping}function J_(w,L,q,B,V){L.isScene!==!0&&(L=fn),Ue.resetTextureUnits();const xe=L.fog,Ee=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?L.environment:null,pe=k===null?R.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:Ze.workingColorSpace,Se=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,Te=C.get(B.envMap||Ee,Se),Fe=B.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Ye=!!q.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),we=!!q.morphAttributes.position,$e=!!q.morphAttributes.normal,Dt=!!q.morphAttributes.color;let ft=Xi;B.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(ft=R.toneMapping);const dt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,rn=dt!==void 0?dt.length:0,be=Le.get(B),pn=T.state.lights;if(mt===!0&&(Lt===!0||w!==j)){const Mt=w===j&&B.id===F;J.setState(B,w,Mt)}let it=!1,Fr=!1;B.version===be.__version?be.needsLights&&be.lightsStateVersion!==pn.state.version||V.isBatchedMesh&&be.batching===!1||!V.isBatchedMesh&&be.batching===!0||V.isBatchedMesh&&be.batchingColor===!0&&V._colorsTexture===null||V.isBatchedMesh&&be.batchingColor===!1&&V._colorsTexture!==null||V.isInstancedMesh&&be.instancing===!1||!V.isInstancedMesh&&be.instancing===!0||V.isSkinnedMesh&&be.skinning===!1||!V.isSkinnedMesh&&be.skinning===!0||V.isInstancedMesh&&be.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&be.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&be.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&be.instancingMorph===!1&&V.morphTexture!==null||be.envMap!==Te||B.fog===!0&&be.fog!==xe||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==J.numPlanes||be.numIntersection!==J.numIntersection)||be.vertexAlphas!==Fe||be.vertexTangents!==Ye||be.morphTargets!==we||be.morphNormals!==$e||be.morphColors!==Dt||be.morphTargetsCount!==rn||be.numLightProbeGrids!==Up(T.state.lightProbeGridArray)?it=!0:(be.outputColorSpace!==pe||be.toneMapping!==ft)&&(Fr=!0):(it=!0,be.__version=B.version);let sn=be.currentProgram;(it===!0||Fr===!0)&&(sn=Fr===!0?Q_(B,L,V,pe,ft):fa(B,L,V),U&&B.isNodeMaterial&&U.onUpdateProgram(B,sn,be));let No=!1,er=!1,kr=!1;const Je=sn.getUniforms(),Zt=be.uniforms;if(ve.useProgram(sn.program)&&(No=!0,er=!0,kr=!0),B.id!==F&&(F=B.id,er=!0),No||j!==w){ve.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Je.setValue(O,"projectionMatrix",w.projectionMatrix),Je.setValue(O,"viewMatrix",w.matrixWorldInverse);const Xt=Je.map.cameraPosition;Xt!==void 0&&Xt.setValue(O,Sn.setFromMatrixPosition(w.matrixWorld)),ut.logarithmicDepthBuffer&&Je.setValue(O,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&Je.setValue(O,"isOrthographic",w.isOrthographicCamera===!0),j!==w&&(j=w,er=!0,kr=!0)}if(be.needsLights&&(pn.state.sunShadowMap.length>0&&Je.setValue(O,"sunShadowMap",pn.state.sunShadowMap,Ue),pn.state.directionalShadowMap.length>0&&Je.setValue(O,"directionalShadowMap",pn.state.directionalShadowMap,Ue),pn.state.spotShadowMap.length>0&&Je.setValue(O,"spotShadowMap",pn.state.spotShadowMap,Ue),pn.state.pointShadowMap.length>0&&Je.setValue(O,"pointShadowMap",pn.state.pointShadowMap,Ue)),V.isSkinnedMesh){Je.setOptional(O,V,"bindMatrix"),Je.setOptional(O,V,"bindMatrixInverse");const Mt=V.skeleton;Mt&&(Mt.boneTexture===null&&Mt.computeBoneTexture(),Je.setValue(O,"boneTexture",Mt.boneTexture,Ue))}V.isBatchedMesh&&(Je.setOptional(O,V,"batchingTexture"),Je.setValue(O,"batchingTexture",V._matricesTexture,Ue),Je.setOptional(O,V,"batchingIdTexture"),Je.setValue(O,"batchingIdTexture",V._indirectTexture,Ue),Je.setOptional(O,V,"batchingColorTexture"),V._colorsTexture!==null&&Je.setValue(O,"batchingColorTexture",V._colorsTexture,Ue));const ti=q.morphAttributes;if((ti.position!==void 0||ti.normal!==void 0||ti.color!==void 0)&&ee.update(V,q,sn),(er||be.receiveShadow!==V.receiveShadow)&&(be.receiveShadow=V.receiveShadow,Je.setValue(O,"receiveShadow",V.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&L.environment!==null&&(Zt.envMapIntensity.value=L.environmentIntensity),Zt.dfgLUT!==void 0&&(Zt.dfgLUT.value=wR()),er){if(Je.setValue(O,"toneMappingExposure",R.toneMappingExposure),be.needsLights&&ey(Zt,kr),xe&&B.fog===!0&&ce.refreshFogUniforms(Zt,xe),ce.refreshMaterialUniforms(Zt,B,oe,re,T.state.transmissionRenderTarget[w.id]),be.needsLights&&be.numLightProbeGrids>0){const Mt=M;let Xt=0;for(const Pi of T.state.lightProbeGridArray)Pi.texture!==null&&(Mt.textures[Xt]=Pi.texture,Mt.min[Xt]=Pi.boundingBox.min,Mt.max[Xt]=Pi.boundingBox.max,Mt.resolution[Xt]=Pi.resolution,Xt++);for(const Pi in Mt)Mt[Pi].length=Xt;Zt.probesSH.value=Mt.textures,Zt.probesMin.value=Mt.min,Zt.probesMax.value=Mt.max,Zt.probesResolution.value=Mt.resolution}Hl.upload(O,Op(be),Zt,Ue)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Hl.upload(O,Op(be),Zt,Ue),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&Je.setValue(O,"center",V.center),Je.setValue(O,"modelViewMatrix",V.modelViewMatrix),Je.setValue(O,"normalMatrix",V.normalMatrix),Je.setValue(O,"modelMatrix",V.matrixWorld),B.uniformsGroups!==void 0){const Mt=B.uniformsGroups;for(let Xt=0,Pi=Mt.length;Xt<Pi;Xt++){const Bp=Mt[Xt];Ce.update(Bp,sn),Ce.bind(Bp,sn)}}return sn}function ey(w,L){w.ambientLightColor.needsUpdate=L,w.lightProbe.needsUpdate=L,w.sunLights.needsUpdate=L,w.sunLightShadows.needsUpdate=L,w.directionalLights.needsUpdate=L,w.directionalLightShadows.needsUpdate=L,w.pointLights.needsUpdate=L,w.pointLightShadows.needsUpdate=L,w.spotLights.needsUpdate=L,w.spotLightShadows.needsUpdate=L,w.rectAreaLights.needsUpdate=L,w.hemisphereLights.needsUpdate=L}function ty(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return $},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(w,L,q){const B=Le.get(w);B.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),Le.get(w.texture).__webglTexture=L,Le.get(w.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:q,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,L){const q=Le.get(w);q.__webglFramebuffer=L,q.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(w,L=0,q=0){k=w,$=L,z=q;let B=null,V=!1,xe=!1;if(w){const pe=Le.get(w);if(pe.__useDefaultFramebuffer!==void 0){ve.bindFramebuffer(O.FRAMEBUFFER,pe.__webglFramebuffer),Y.copy(w.viewport),fe.copy(w.scissor),Pe=w.scissorTest,ve.viewport(Y),ve.scissor(fe),ve.setScissorTest(Pe),F=-1;return}else if(pe.__webglFramebuffer===void 0)Ue.setupRenderTarget(w);else if(pe.__hasExternalTextures)Ue.rebindTextures(w,Le.get(w.texture).__webglTexture,Le.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Fe=w.depthTexture;if(pe.__boundDepthTexture!==Fe){if(Fe!==null&&Le.has(Fe)&&(w.width!==Fe.image.width||w.height!==Fe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ue.setupDepthRenderbuffer(w)}}const Se=w.texture;(Se.isData3DTexture||Se.isDataArrayTexture||Se.isCompressedArrayTexture)&&(xe=!0);const Te=Le.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Te[L])?B=Te[L][q]:B=Te[L],V=!0):w.samples>0&&Ue.useMultisampledRTT(w)===!1?B=Le.get(w).__webglMultisampledFramebuffer:Array.isArray(Te)?B=Te[q]:B=Te,Y.copy(w.viewport),fe.copy(w.scissor),Pe=w.scissorTest}else Y.copy(Ae).multiplyScalar(oe).floor(),fe.copy(qe).multiplyScalar(oe).floor(),Pe=Qe;if(q!==0&&(B=X),ve.bindFramebuffer(O.FRAMEBUFFER,B)&&ve.drawBuffers(w,B),ve.viewport(Y),ve.scissor(fe),ve.setScissorTest(Pe),V){const pe=Le.get(w.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+L,pe.__webglTexture,q)}else if(xe){const pe=L;for(let Se=0;Se<w.textures.length;Se++){const Te=Le.get(w.textures[Se]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Se,Te.__webglTexture,q,pe)}}else if(w!==null&&q!==0){const pe=Le.get(w.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,pe.__webglTexture,q)}F=-1};function kp(w){const L=Le.get(w);return(L.__readFormat!==w.format||L.__readType!==w.type)&&(L.__readFormat=w.format,L.__readType=w.type,L.__formatReadable=ut.textureFormatReadable(w.format),L.__typeReadable=ut.textureTypeReadable(w.type)),L}this.readRenderTargetPixels=function(w,L,q,B,V,xe,Ee,pe=0){if(!(w&&w.isWebGLRenderTarget)){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=Le.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ee!==void 0&&(Se=Se[Ee],Array.isArray(Se)&&(Se=Se[0])),Se){ve.bindFramebuffer(O.FRAMEBUFFER,Se);try{const Te=w.textures[pe],Fe=Te.format,Ye=Te.type;w.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+pe);const we=kp(Te);if(we.__formatReadable===!1){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(we.__typeReadable===!1){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=w.width-B&&q>=0&&q<=w.height-V&&O.readPixels(L,q,B,V,le.convert(Fe),le.convert(Ye),xe)}finally{const Te=k!==null?Le.get(k).__webglFramebuffer:null;ve.bindFramebuffer(O.FRAMEBUFFER,Te)}}},this.readRenderTargetPixelsAsync=async function(w,L,q,B,V,xe,Ee,pe=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=Le.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ee!==void 0&&(Se=Se[Ee],Array.isArray(Se)&&(Se=Se[0])),Se)if(L>=0&&L<=w.width-B&&q>=0&&q<=w.height-V){ve.bindFramebuffer(O.FRAMEBUFFER,Se);const Te=w.textures[pe],Fe=Te.format,Ye=Te.type;w.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+pe);const we=kp(Te);if(we.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(we.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const $e=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,$e),O.bufferData(O.PIXEL_PACK_BUFFER,xe.byteLength,O.STREAM_READ),O.readPixels(L,q,B,V,le.convert(Fe),le.convert(Ye),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);const Dt=k!==null?Le.get(k).__webglFramebuffer:null;ve.bindFramebuffer(O.FRAMEBUFFER,Dt);const ft=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await kw(O,ft,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,$e),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,xe),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer($e),O.deleteSync(ft),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,L=null,q=0){const B=Math.pow(2,-q),V=Math.floor(w.image.width*B),xe=Math.floor(w.image.height*B),Ee=L!==null?L.x:0,pe=L!==null?L.y:0;Ue.setTexture2D(w,0),O.copyTexSubImage2D(O.TEXTURE_2D,q,0,0,Ee,pe,V,xe),ve.unbindTexture()},this.copyTextureToTexture=function(w,L,q=null,B=null,V=0,xe=0){let Ee,pe,Se,Te,Fe,Ye,we,$e,Dt;const ft=w.isCompressedTexture?w.mipmaps[xe]:w.image;if(q!==null)Ee=q.max.x-q.min.x,pe=q.max.y-q.min.y,Se=q.isBox3?q.max.z-q.min.z:1,Te=q.min.x,Fe=q.min.y,Ye=q.isBox3?q.min.z:0;else{const Je=Math.pow(2,-V);Ee=Math.floor(ft.width*Je),pe=Math.floor(ft.height*Je),w.isDataArrayTexture?Se=ft.depth:w.isData3DTexture?Se=Math.floor(ft.depth*Je):Se=1,Te=0,Fe=0,Ye=0}B!==null?(we=B.x,$e=B.y,Dt=B.z):(we=0,$e=0,Dt=0);const dt=le.convert(L.format),rn=le.convert(L.type);let be;L.isData3DTexture?(Ue.setTexture3D(L,0),be=O.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(Ue.setTexture2DArray(L,0),be=O.TEXTURE_2D_ARRAY):(Ue.setTexture2D(L,0),be=O.TEXTURE_2D),ve.activeTexture(O.TEXTURE0),ve.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,L.flipY),ve.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),ve.pixelStorei(O.UNPACK_ALIGNMENT,L.unpackAlignment);const pn=ve.getParameter(O.UNPACK_ROW_LENGTH),it=ve.getParameter(O.UNPACK_IMAGE_HEIGHT),Fr=ve.getParameter(O.UNPACK_SKIP_PIXELS),sn=ve.getParameter(O.UNPACK_SKIP_ROWS),No=ve.getParameter(O.UNPACK_SKIP_IMAGES);ve.pixelStorei(O.UNPACK_ROW_LENGTH,ft.width),ve.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ft.height),ve.pixelStorei(O.UNPACK_SKIP_PIXELS,Te),ve.pixelStorei(O.UNPACK_SKIP_ROWS,Fe),ve.pixelStorei(O.UNPACK_SKIP_IMAGES,Ye);const er=w.isDataArrayTexture||w.isData3DTexture,kr=L.isDataArrayTexture||L.isData3DTexture;if(w.isDepthTexture){const Je=Le.get(w),Zt=Le.get(L),ti=Le.get(Je.__renderTarget),Mt=Le.get(Zt.__renderTarget);ve.bindFramebuffer(O.READ_FRAMEBUFFER,ti.__webglFramebuffer),ve.bindFramebuffer(O.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let Xt=0;Xt<Se;Xt++)er&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Le.get(w).__webglTexture,V,Ye+Xt),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Le.get(L).__webglTexture,xe,Dt+Xt)),O.blitFramebuffer(Te,Fe,Te+Ee,Fe+pe,we,$e,we+Ee,$e+pe,O.DEPTH_BUFFER_BIT,O.NEAREST);ve.bindFramebuffer(O.READ_FRAMEBUFFER,null),ve.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(V!==0||w.isRenderTargetTexture||Le.has(w)){const Je=Le.get(w),Zt=Le.get(L);ve.bindFramebuffer(O.READ_FRAMEBUFFER,P),ve.bindFramebuffer(O.DRAW_FRAMEBUFFER,W);for(let ti=0;ti<Se;ti++)er?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Je.__webglTexture,V,Ye+ti):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Je.__webglTexture,V),kr?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Zt.__webglTexture,xe,Dt+ti):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Zt.__webglTexture,xe),V!==0?O.blitFramebuffer(Te,Fe,Te+Ee,Fe+pe,we,$e,we+Ee,$e+pe,O.COLOR_BUFFER_BIT,O.NEAREST):kr?O.copyTexSubImage3D(be,xe,we,$e,Dt+ti,Te,Fe,Ee,pe):O.copyTexSubImage2D(be,xe,we,$e,Te,Fe,Ee,pe);ve.bindFramebuffer(O.READ_FRAMEBUFFER,null),ve.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else kr?w.isDataTexture||w.isData3DTexture?O.texSubImage3D(be,xe,we,$e,Dt,Ee,pe,Se,dt,rn,ft.data):L.isCompressedArrayTexture?O.compressedTexSubImage3D(be,xe,we,$e,Dt,Ee,pe,Se,dt,ft.data):O.texSubImage3D(be,xe,we,$e,Dt,Ee,pe,Se,dt,rn,ft):w.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,xe,we,$e,Ee,pe,dt,rn,ft.data):w.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,xe,we,$e,ft.width,ft.height,dt,ft.data):O.texSubImage2D(O.TEXTURE_2D,xe,we,$e,Ee,pe,dt,rn,ft);ve.pixelStorei(O.UNPACK_ROW_LENGTH,pn),ve.pixelStorei(O.UNPACK_IMAGE_HEIGHT,it),ve.pixelStorei(O.UNPACK_SKIP_PIXELS,Fr),ve.pixelStorei(O.UNPACK_SKIP_ROWS,sn),ve.pixelStorei(O.UNPACK_SKIP_IMAGES,No),xe===0&&L.generateMipmaps===!0&&L.mipmapsAutoUpdate===!0&&O.generateMipmap(be),ve.unbindTexture()},this.initRenderTarget=function(w){Le.get(w).__webglFramebuffer===void 0&&Ue.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Ue.setTextureCube(w,0):w.isData3DTexture?Ue.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Ue.setTexture2DArray(w,0):Ue.setTexture2D(w,0),ve.unbindTexture()},this.resetState=function(){$=0,z=0,k=null,ve.reset(),ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Ze._getDrawingBufferColorSpace(e),n.unpackColorSpace=Ze._getUnpackColorSpace()}}const t0={type:"change"},vp={type:"start"},R_={type:"end"},vl=new Wc,n0=new zi,TR=Math.cos(70*jw.DEG2RAD),Bt=new G,wn=2*Math.PI,rt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},nd=1e-6;class AR extends P1{constructor(e,n=null){super(e,n),this.state=rt.NONE,this.target=new G,this.cursor=new G,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Vs.ROTATE,MIDDLE:Vs.DOLLY,RIGHT:Vs.PAN},this.touches={ONE:Us.ROTATE,TWO:Us.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new G,this._lastQuaternion=new Nr,this._lastTargetPosition=new G,this._quat=new Nr().setFromUnitVectors(e.up,new G(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Lg,this._sphericalDelta=new Lg,this._scale=1,this._panOffset=new G,this._rotateStart=new Ie,this._rotateEnd=new Ie,this._rotateDelta=new Ie,this._panStart=new Ie,this._panEnd=new Ie,this._panDelta=new Ie,this._dollyStart=new Ie,this._dollyEnd=new Ie,this._dollyDelta=new Ie,this._dollyDirection=new G,this._mouse=new Ie,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=RR.bind(this),this._onPointerDown=CR.bind(this),this._onPointerUp=NR.bind(this),this._onContextMenu=FR.bind(this),this._onMouseWheel=DR.bind(this),this._onKeyDown=IR.bind(this),this._onTouchStart=UR.bind(this),this._onTouchMove=OR.bind(this),this._onMouseDown=PR.bind(this),this._onMouseMove=LR.bind(this),this._interceptControlDown=kR.bind(this),this._interceptControlUp=BR.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=rt.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(t0),this.update(),this.state=rt.NONE}pan(e,n){this._pan(e,n),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const n=this.object.position;Bt.copy(n).sub(this.target),Bt.applyQuaternion(this._quat),this._spherical.setFromVector3(Bt),this.autoRotate&&this.state===rt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=wn:i>Math.PI&&(i-=wn),r<-Math.PI?r+=wn:r>Math.PI&&(r-=wn),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(Bt.setFromSpherical(this._spherical),Bt.applyQuaternion(this._quatInverse),n.copy(this.target).add(Bt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Bt.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const o=new G(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const u=new G(this._mouse.x,this._mouse.y,0);u.unproject(this.object),this.object.position.sub(u).add(o),this.object.updateMatrixWorld(),a=Bt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(vl.origin.copy(this.object.position),vl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(vl.direction))<TR?this.object.lookAt(this.target):(n0.setFromNormalAndCoplanarPoint(this.object.up,this.target),vl.intersectPlane(n0,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>nd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>nd||this._lastTargetPosition.distanceToSquared(this.target)>nd?(this.dispatchEvent(t0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?wn/60*this.autoRotateSpeed*e:wn/60/60*this.autoRotateSpeed}_getZoomScale(e){const n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){Bt.setFromMatrixColumn(n,0),Bt.multiplyScalar(-e),this._panOffset.add(Bt)}_panUp(e,n){this.screenSpacePanning===!0?Bt.setFromMatrixColumn(n,1):(Bt.setFromMatrixColumn(n,0),Bt.crossVectors(this.object.up,Bt)),Bt.multiplyScalar(e),this._panOffset.add(Bt)}_pan(e,n){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Bt.copy(r).sub(this.target);let s=Bt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*n*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,s=n-i.top,a=i.width,o=i.height;this._mouse.x=r/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientY),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(wn*this._rotateDelta.x/n.clientHeight),this._rotateUp(wn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(wn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-wn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(wn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-wn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(wn*this._rotateDelta.x/n.clientHeight),this._rotateUp(wn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+n.x)*.5,o=(e.pageY+n.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new Ie,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){const n=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function CR(t){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(t.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(t)&&(this._addPointer(t),t.pointerType==="touch"?this._onTouchStart(t):this._onMouseDown(t),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function RR(t){this.enabled!==!1&&(t.pointerType==="touch"?this._onTouchMove(t):this._onMouseMove(t))}function NR(t){switch(this._removePointer(t),this._pointers.length){case 0:this.domElement.releasePointerCapture(t.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(R_),this.state=rt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function PR(t){let e;switch(t.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Vs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=rt.DOLLY;break;case Vs.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=rt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=rt.ROTATE}break;case Vs.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=rt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=rt.PAN}break;default:this.state=rt.NONE}this.state!==rt.NONE&&this.dispatchEvent(vp)}function LR(t){switch(this.state){case rt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(t);break;case rt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(t);break;case rt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(t);break}}function DR(t){this.enabled===!1||this.enableZoom===!1||this.state!==rt.NONE||(t.preventDefault(),this.dispatchEvent(vp),this._handleMouseWheel(this._customWheelEvent(t)),this.dispatchEvent(R_))}function IR(t){this.enabled!==!1&&this._handleKeyDown(t)}function UR(t){switch(this._trackPointer(t),this._pointers.length){case 1:switch(this.touches.ONE){case Us.ROTATE:if(this.enableRotate===!1){this.state=rt.NONE;break}this._handleTouchStartRotate(t),this.state=rt.TOUCH_ROTATE;break;case Us.PAN:if(this.enablePan===!1){this.state=rt.NONE;break}this._handleTouchStartPan(t),this.state=rt.TOUCH_PAN;break;default:this.state=rt.NONE}break;case 2:switch(this.touches.TWO){case Us.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(t),this.state=rt.TOUCH_DOLLY_PAN;break;case Us.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(t),this.state=rt.TOUCH_DOLLY_ROTATE;break;default:this.state=rt.NONE}break;default:this.state=rt.NONE}this.state!==rt.NONE&&this.dispatchEvent(vp)}function OR(t){switch(this._trackPointer(t),this.state){case rt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(t),this.update();break;case rt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(t),this.update();break;case rt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(t),this.update();break;case rt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(t),this.update();break;default:this.state=rt.NONE}}function FR(t){this.enabled!==!1&&t.preventDefault()}function kR(t){t.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function BR(t){t.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const zR=({onSelectSlot:t,isNightMode:e=!0})=>{const n=ke.useRef(null),[i,r]=ke.useState(null);return ke.useEffect(()=>{const s=n.current;if(!s)return;const a=new r1;a.background=new je(e?527380:14870768),a.fog=new fp(e?527380:14870768,.025);const o=s.clientWidth,l=s.clientHeight,u=new Yn(45,o/l,.1,1e3);u.position.set(22,18,24);const h=new bR({antialias:!0,alpha:!0});h.setSize(o,l),h.setPixelRatio(Math.min(window.devicePixelRatio,2)),h.shadowMap.enabled=!0,h.shadowMap.type=Fv,s.appendChild(h.domElement);const p=new AR(u,h.domElement);p.enableDamping=!0,p.dampingFactor=.05,p.maxPolarAngle=Math.PI/2-.05,p.minDistance=10,p.maxDistance=50,p.target.set(0,0,0),p.autoRotate=!0,p.autoRotateSpeed=.6,p.addEventListener("start",()=>{p.autoRotate=!1});const f=new T1(e?1976635:16777215,e?.7:1.2);a.add(f);const m=new b1(e?3718648:16777215,e?1:1.5);m.position.set(20,30,15),m.castShadow=!0,m.shadow.mapSize.width=2048,m.shadow.mapSize.height=2048,m.shadow.camera.near=.5,m.shadow.camera.far=100,m.shadow.camera.left=-20,m.shadow.camera.right=20,m.shadow.camera.top=20,m.shadow.camera.bottom=-20,a.add(m);const _=new Rg(1096065,3.5,12);_.position.set(-2,3,4),a.add(_);const S=new Rg(440020,3.5,12);S.position.set(4,3,4),a.add(S);const x=new na(60,60),d=new lr({color:e?988970:13358561,roughness:.8,metalness:.2}),g=new zt(x,d);g.rotation.x=-Math.PI/2,g.receiveShadow=!0,a.add(g);const y=new N1(60,30,e?1096065:165063,e?1976635:9741240);y.position.y=.02,a.add(y);const M=new Yr,A=new lr({color:e?1120295:9741240,roughness:.4,metalness:.7}),T=new Oa({color:e?3718648:16707722});[{x:-14,z:-14,w:6,d:6,h:16},{x:-6,z:-15,w:5,d:5,h:22},{x:3,z:-16,w:7,d:5,h:14},{x:12,z:-14,w:6,d:6,h:18},{x:-16,z:-2,w:5,d:8,h:12},{x:-16,z:8,w:5,d:6,h:15},{x:16,z:-2,w:5,d:7,h:20},{x:16,z:8,w:5,d:6,h:13}].forEach(te=>{const re=new Fn(te.w,te.h,te.d),oe=new zt(re,A);oe.position.set(te.x,te.h/2,te.z),oe.castShadow=!0,oe.receiveShadow=!0,M.add(oe);const Re=new Fn(te.w+.1,.4,te.d+.1),at=new zt(Re,T);at.position.set(te.x,te.h,te.z),M.add(at)}),a.add(M);const b=[],I=new Fn(18,.2,14),R=new lr({color:e?1976635:14870768,roughness:.6,metalness:.3}),D=new zt(I,R);D.position.set(0,.1,3),D.receiveShadow=!0,a.add(D);const U=[{id:"EV-01",slotNumber:"EV-01",type:"ev-fast",status:"available",kw:150,rate:120,x:-6,z:0},{id:"EV-02",slotNumber:"EV-02",type:"ev-fast",status:"occupied",kw:60,rate:80,x:-2,z:0},{id:"EV-03",slotNumber:"EV-03",type:"ev-ultra",status:"available",kw:250,rate:150,x:2,z:0},{id:"EV-04",slotNumber:"EV-04",type:"ev-fast",status:"reserved",kw:60,rate:80,x:6,z:0},{id:"PK-05",slotNumber:"PK-05",type:"standard",status:"available",kw:0,rate:40,x:-6,z:6},{id:"PK-06",slotNumber:"PK-06",type:"standard",status:"occupied",kw:0,rate:40,x:-2,z:6},{id:"PK-07",slotNumber:"PK-07",type:"standard",status:"available",kw:0,rate:40,x:2,z:6},{id:"PK-08",slotNumber:"PK-08",type:"standard",status:"available",kw:0,rate:40,x:6,z:6}],X=new Yr;U.forEach(te=>{const re=new Fn(3,.15,4.5),oe=te.type.startsWith("ev");let Re=1096065;te.status==="occupied"&&(Re=15680580),te.status==="reserved"&&(Re=16096779);const at=new lr({color:Re,roughness:.3,emissive:Re,emissiveIntensity:te.status==="available"?.3:.15}),Ae=new zt(re,at);if(Ae.position.set(te.x,.25,te.z),Ae.castShadow=!0,Ae.receiveShadow=!0,Ae.userData=te,b.push(Ae),X.add(Ae),oe){const qe=new Fn(.5,1.6,.5),Qe=new lr({color:988970,metalness:.8,roughness:.2}),Be=new zt(qe,Qe);Be.position.set(te.x,1,te.z-2),Be.castShadow=!0,X.add(Be);const Rt=new na(.35,.5),mt=new Oa({color:te.status==="available"?62875:440020}),Lt=new zt(Rt,mt);Lt.position.set(te.x,1.2,te.z-1.74),X.add(Lt)}if(te.status==="occupied"){const qe=P(3718648);qe.position.set(te.x,.5,te.z),X.add(qe)}}),a.add(X);function P(te=3718648){const re=new Yr,oe=new Fn(1.6,.55,2.8),Re=new lr({color:te,metalness:.8,roughness:.2}),at=new zt(oe,Re);at.castShadow=!0,at.position.y=.35,re.add(at);const Ae=new Fn(1.3,.45,1.5),qe=new lr({color:724761,metalness:.9,roughness:.1}),Qe=new zt(Ae,qe);Qe.position.set(0,.8,-.15),Qe.castShadow=!0,re.add(Qe);const Be=new Fn(.3,.1,.1),Rt=new Oa({color:16777215}),mt=new zt(Be,Rt);mt.position.set(.5,.4,1.4);const Lt=mt.clone();Lt.position.x=-.5,re.add(mt),re.add(Lt);const gt=new Oa({color:15680580}),Sn=new zt(Be,gt);Sn.position.set(.5,.4,-1.4);const Nt=Sn.clone();Nt.position.x=-.5,re.add(Sn),re.add(Nt);const fn=new mp(.25,.25,.2,16),Mn=new lr({color:1118481,roughness:.9});return fn.rotateZ(Math.PI/2),[[-.85,.25,.8],[.85,.25,.8],[-.85,.25,-.8],[.85,.25,-.8]].forEach(([O,En,ht])=>{const ut=new zt(fn,Mn);ut.position.set(O,En,ht),re.add(ut)}),re}const W=[],$=P(1096065);a.add($),W.push({mesh:$,angle:0,radiusX:14,radiusZ:14,speed:.008});const z=P(440020);a.add(z),W.push({mesh:z,angle:Math.PI,radiusX:18,radiusZ:18,speed:-.006});const k=new C1,F=new Ie,j=te=>{const re=h.domElement.getBoundingClientRect();F.x=(te.clientX-re.left)/re.width*2-1,F.y=-((te.clientY-re.top)/re.height)*2+1,k.setFromCamera(F,u);const oe=k.intersectObjects(b);if(oe.length>0){const Re=oe[0].object;h.domElement.style.cursor="pointer",r(Re.userData)}else h.domElement.style.cursor="default",r(null)},Y=()=>{k.setFromCamera(F,u);const te=k.intersectObjects(b);if(te.length>0){const re=te[0].object.userData;t==null||t(re)}};h.domElement.addEventListener("pointermove",j),h.domElement.addEventListener("click",Y);const fe=()=>{if(!s)return;const te=s.clientWidth,re=s.clientHeight;u.aspect=te/re,u.updateProjectionMatrix(),h.setSize(te,re)};window.addEventListener("resize",fe);let Pe,Z=new R1;const me=()=>{Pe=requestAnimationFrame(me);const te=Z.getElapsedTime();W.forEach(re=>{re.angle+=re.speed,re.mesh.position.x=Math.cos(re.angle)*re.radiusX,re.mesh.position.z=Math.sin(re.angle)*re.radiusZ,re.mesh.rotation.y=-re.angle+(re.speed>0?-Math.PI/2:Math.PI/2)}),_.intensity=3+Math.sin(te*3)*1,S.intensity=3+Math.cos(te*3)*1,p.update(),h.render(a,u)};return me(),()=>{cancelAnimationFrame(Pe),window.removeEventListener("resize",fe),h.domElement.removeEventListener("pointermove",j),h.domElement.removeEventListener("click",Y),p.dispose(),h.dispose(),s.contains(h.domElement)&&s.removeChild(h.domElement),a.traverse(te=>{var re,oe;te.isMesh&&((re=te.geometry)==null||re.dispose(),Array.isArray(te.material)?te.material.forEach(Re=>Re.dispose()):(oe=te.material)==null||oe.dispose())})}},[e,t]),c.jsxs("div",{className:"relative w-full h-full min-h-[500px] lg:min-h-[620px] rounded-3xl overflow-hidden border border-white/[0.08] bg-[#080C14] shadow-2xl",children:[c.jsx("div",{ref:n,className:"w-full h-full"}),i&&c.jsxs("div",{className:"absolute top-4 left-4 z-20 pointer-events-none p-3 rounded-xl bg-slate-900/90 border border-emerald-500/40 backdrop-blur-md shadow-glow-emerald text-xs space-y-1 animate-in fade-in duration-150",children:[c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx("span",{className:"font-mono font-bold text-white text-sm",children:i.slotNumber}),c.jsx("span",{className:`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${i.status==="available"?"bg-emerald-500/20 text-emerald-400":i.status==="occupied"?"bg-rose-500/20 text-rose-400":"bg-amber-500/20 text-amber-400"}`,children:i.status})]}),i.kw>0&&c.jsxs("div",{className:"text-cyan-400 font-mono",children:["⚡ ",i.kw," kW Fast Charger"]}),c.jsxs("div",{className:"text-slate-400",children:["Rate: ",c.jsxs("span",{className:"text-white font-semibold",children:["₹",i.rate,"/hr"]})]}),c.jsx("div",{className:"text-[10px] text-emerald-400 pt-0.5",children:"Click to Inspect & Reserve"})]})]})},HR=({isNightMode:t,onToggleNightMode:e,selectedSlot:n,onClearSelectedSlot:i,onReserveSlot:r})=>c.jsxs(c.Fragment,{children:[c.jsx("div",{className:"absolute top-4 right-4 z-20 flex items-center gap-2",children:c.jsx("button",{type:"button",onClick:e,className:"p-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-white/10 backdrop-blur-md transition-all shadow-lg flex items-center gap-1.5 text-xs font-medium",title:"Toggle Day/Night City Lighting",children:t?c.jsxs(c.Fragment,{children:[c.jsx(tE,{className:"w-4 h-4 text-cyan-400"}),c.jsx("span",{className:"hidden sm:inline",children:"Cyber Night"})]}):c.jsxs(c.Fragment,{children:[c.jsx(gE,{className:"w-4 h-4 text-amber-400"}),c.jsx("span",{className:"hidden sm:inline",children:"Daylight"})]})})}),c.jsxs("div",{className:"absolute bottom-4 left-4 z-20 pointer-events-none hidden sm:flex items-center gap-3 p-2.5 rounded-xl bg-slate-900/75 border border-white/5 backdrop-blur-md text-[11px] text-slate-400 font-mono",children:[c.jsxs("div",{className:"flex items-center gap-1.5",children:[c.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-400 animate-pulse"}),c.jsx("span",{children:"Interactive Digital Twin"})]}),c.jsx("span",{children:"•"}),c.jsx("span",{children:"Left Click + Drag: Orbit"}),c.jsx("span",{children:"•"}),c.jsx("span",{children:"Scroll: Zoom"})]}),n&&c.jsxs("div",{className:"absolute bottom-4 right-4 left-4 sm:left-auto sm:w-96 z-30 p-5 rounded-2xl bg-slate-900/95 border border-emerald-500/40 backdrop-blur-xl shadow-glow-emerald animate-in slide-in-from-bottom-5 duration-200",children:[c.jsxs("div",{className:"flex items-start justify-between pb-3 border-b border-white/10",children:[c.jsxs("div",{children:[c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx("h4",{className:"font-mono font-bold text-lg text-white",children:n.slotNumber}),c.jsx(Et,{variant:n.status==="available"?"emerald":n.status==="occupied"?"rose":"amber",size:"sm",dot:!0,children:n.status})]}),c.jsx("p",{className:"text-xs text-slate-400 mt-0.5",children:n.type.startsWith("ev")?"EV High-Voltage Charging Hub":"Standard Parking Bay"})]}),c.jsx("button",{type:"button",onClick:i,className:"p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors",children:c.jsx(tp,{className:"w-4 h-4"})})]}),c.jsxs("div",{className:"py-3 space-y-2 text-xs",children:[n.kw>0&&c.jsxs("div",{className:"flex justify-between items-center text-cyan-400 bg-cyan-950/30 px-2.5 py-1.5 rounded-lg border border-cyan-500/20",children:[c.jsxs("span",{className:"flex items-center gap-1 font-semibold",children:[c.jsx($t,{className:"w-3.5 h-3.5"})," Charger Power:"]}),c.jsxs("span",{className:"font-mono font-bold",children:[n.kw," kW CCS2"]})]}),c.jsxs("div",{className:"flex justify-between items-center text-slate-300",children:[c.jsx("span",{className:"text-slate-400",children:"Hourly Tariff:"}),c.jsxs("span",{className:"font-semibold text-white",children:["₹",n.rate," / hour"]})]}),c.jsxs("div",{className:"flex justify-between items-center text-slate-300",children:[c.jsx("span",{className:"text-slate-400",children:"IoT Telemetry Node:"}),c.jsx("span",{className:"font-mono text-emerald-400 text-[11px]",children:"MQTT / ESP32-Active"})]})]}),c.jsx("div",{className:"pt-2",children:n.status==="available"?c.jsx(et,{variant:"primary",size:"md",className:"w-full justify-center",icon:c.jsx(Tv,{className:"w-4 h-4"}),onClick:()=>r(n),children:"Book This 3D Slot"}):c.jsxs(et,{variant:"outline",size:"md",disabled:!0,className:"w-full justify-center",children:["Slot Currently ",n.status]})})]})]}),GR=({onReserveSlot:t})=>{const[e,n]=ke.useState(!0),[i,r]=ke.useState(null),[s,a]=ke.useState(""),o=u=>{r(u)},l=u=>{u.preventDefault(),s.trim()&&alert(`Searching hubs near "${s}". In Step 3, this triggers the Explore & Search geospatial query!`)};return c.jsxs("section",{className:"relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-10 sm:pb-16",children:[c.jsx("div",{className:"absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-emerald-500/10 to-cyan-500/10 blur-[120px] pointer-events-none"}),c.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center",children:[c.jsxs("div",{className:"lg:col-span-5 space-y-6 z-10",children:[c.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono",children:[c.jsx(la,{className:"w-3.5 h-3.5"}),c.jsx("span",{children:"REAL-TIME 3D DIGITAL TWIN MESH"})]}),c.jsxs("h1",{className:"text-4xl sm:text-5xl lg:text-5xl font-black text-white tracking-tight leading-[1.15]",children:["Smart Parking & EV Charging at the"," ",c.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400",children:"Speed of Light."})]}),c.jsx("p",{className:"text-sm sm:text-base text-slate-300 leading-relaxed",children:"Eliminate parking hunting and charging anxiety. Experience real-time bay availability, autonomous IoT telemetry, and ultra-fast EV reservations powered by WebGL and WebSockets."}),c.jsxs("form",{onSubmit:l,className:"space-y-2",children:[c.jsxs("div",{className:"relative flex items-center",children:[c.jsx(Jf,{className:"absolute left-4 w-5 h-5 text-emerald-400 pointer-events-none"}),c.jsx("input",{type:"text",value:s,onChange:u=>a(u.target.value),placeholder:"Enter city, landmark, or charging hub...",className:"w-full pl-12 pr-32 py-3.5 rounded-2xl bg-slate-900/90 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 backdrop-blur-md shadow-xl"}),c.jsx("div",{className:"absolute right-2",children:c.jsx(et,{type:"submit",variant:"primary",size:"sm",icon:c.jsx(xc,{className:"w-3.5 h-3.5"}),children:"Find Now"})})]}),c.jsxs("div",{className:"flex flex-wrap items-center gap-1.5 text-[11px] text-slate-400 pt-1",children:[c.jsx("span",{className:"font-medium text-slate-500",children:"Popular:"}),["Connaught Place","Cyber City","BKC Mumbai","Indiranagar"].map(u=>c.jsx("button",{type:"button",onClick:()=>a(u),className:"px-2 py-0.5 rounded-md bg-slate-800/80 hover:bg-slate-700/80 text-slate-300 hover:text-white transition-colors",children:u},u))]})]}),c.jsxs("div",{className:"grid grid-cols-3 gap-3 pt-4 border-t border-white/[0.08]",children:[c.jsxs("div",{className:"p-3 rounded-xl bg-slate-900/50 border border-white/5 space-y-1",children:[c.jsxs("div",{className:"flex items-center gap-1 text-[11px] text-slate-400",children:[c.jsx(Zf,{className:"w-3 h-3 text-emerald-400"}),c.jsx("span",{children:"Live Slots"})]}),c.jsx("div",{className:"text-lg font-black font-mono text-white",children:"4,820+"})]}),c.jsxs("div",{className:"p-3 rounded-xl bg-slate-900/50 border border-white/5 space-y-1",children:[c.jsxs("div",{className:"flex items-center gap-1 text-[11px] text-slate-400",children:[c.jsx($t,{className:"w-3 h-3 text-cyan-400"}),c.jsx("span",{children:"Ultra-Fast"})]}),c.jsx("div",{className:"text-lg font-black font-mono text-cyan-400",children:"150 kW"})]}),c.jsxs("div",{className:"p-3 rounded-xl bg-slate-900/50 border border-white/5 space-y-1",children:[c.jsxs("div",{className:"flex items-center gap-1 text-[11px] text-slate-400",children:[c.jsx(Cv,{className:"w-3 h-3 text-amber-400"}),c.jsx("span",{children:"Sync Latency"})]}),c.jsx("div",{className:"text-lg font-black font-mono text-white",children:"<25ms"})]})]})]}),c.jsxs("div",{className:"lg:col-span-7 relative",children:[c.jsx(zR,{onSelectSlot:o,isNightMode:e}),c.jsx(HR,{isNightMode:e,onToggleNightMode:()=>n(!e),selectedSlot:i,onClearSelectedSlot:()=>r(null),onReserveSlot:u=>t(u)})]})]})]})},VR={},i0=t=>{let e;const n=new Set,i=(h,p)=>{const f=typeof h=="function"?h(e):h;if(!Object.is(f,e)){const m=e;e=p??(typeof f!="object"||f===null)?f:Object.assign({},e,f),n.forEach(_=>_(e,m))}},r=()=>e,l={setState:i,getState:r,getInitialState:()=>u,subscribe:h=>(n.add(h),()=>n.delete(h)),destroy:()=>{(VR?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},u=e=t(i,r,l);return l},jR=t=>t?i0(t):i0;var N_={exports:{}},P_={},L_={exports:{}},D_={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ra=ke;function WR(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var XR=typeof Object.is=="function"?Object.is:WR,qR=ra.useState,YR=ra.useEffect,$R=ra.useLayoutEffect,KR=ra.useDebugValue;function ZR(t,e){var n=e(),i=qR({inst:{value:n,getSnapshot:e}}),r=i[0].inst,s=i[1];return $R(function(){r.value=n,r.getSnapshot=e,id(r)&&s({inst:r})},[t,n,e]),YR(function(){return id(r)&&s({inst:r}),t(function(){id(r)&&s({inst:r})})},[t]),KR(n),n}function id(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!XR(t,n)}catch{return!0}}function QR(t,e){return e()}var JR=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?QR:ZR;D_.useSyncExternalStore=ra.useSyncExternalStore!==void 0?ra.useSyncExternalStore:JR;L_.exports=D_;var eN=L_.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yc=ke,tN=eN;function nN(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var iN=typeof Object.is=="function"?Object.is:nN,rN=tN.useSyncExternalStore,sN=Yc.useRef,aN=Yc.useEffect,oN=Yc.useMemo,lN=Yc.useDebugValue;P_.useSyncExternalStoreWithSelector=function(t,e,n,i,r){var s=sN(null);if(s.current===null){var a={hasValue:!1,value:null};s.current=a}else a=s.current;s=oN(function(){function l(m){if(!u){if(u=!0,h=m,m=i(m),r!==void 0&&a.hasValue){var _=a.value;if(r(_,m))return p=_}return p=m}if(_=p,iN(h,m))return _;var S=i(m);return r!==void 0&&r(_,S)?(h=m,_):(h=m,p=S)}var u=!1,h,p,f=n===void 0?null:n;return[function(){return l(e())},f===null?void 0:function(){return l(f())}]},[e,n,i,r]);var o=rN(t,s[0],s[1]);return aN(function(){a.hasValue=!0,a.value=o},[o]),lN(o),o};N_.exports=P_;var cN=N_.exports;const uN=h0(cN),I_={},{useDebugValue:dN}=So,{useSyncExternalStoreWithSelector:hN}=uN;let r0=!1;const fN=t=>t;function pN(t,e=fN,n){(I_?"production":void 0)!=="production"&&n&&!r0&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),r0=!0);const i=hN(t.subscribe,t.getState,t.getServerState||t.getInitialState,e,n);return dN(i),i}const s0=t=>{(I_?"production":void 0)!=="production"&&typeof t!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const e=typeof t=="function"?jR(t):t,n=(i,r)=>pN(e,i,r);return Object.assign(n,e),n},U_=t=>t?s0(t):s0,$c=U_((t,e)=>({activeTab:"hero",setActiveTab:n=>t({activeTab:n}),searchQuery:"",setSearchQuery:n=>t({searchQuery:n}),selectedCity:"All Cities",setSelectedCity:n=>t({selectedCity:n}),filterEVOnly:!1,setFilterEVOnly:n=>t({filterEVOnly:n}),filterFastChargeOnly:!1,setFilterFastChargeOnly:n=>t({filterFastChargeOnly:n}),maxPricePerHour:200,setMaxPricePerHour:n=>t({maxPricePerHour:n}),selectedLocation:null,setSelectedLocation:n=>t({selectedLocation:n}),selectedSlot:null,setSelectedSlot:n=>t({selectedSlot:n}),selectedFloor:"Ground",setSelectedFloor:n=>t({selectedFloor:n}),user:{id:"usr_demo123",name:"Alex Rivera",email:"alex.rivera@parkvolt.io",vehicleNumber:"DL 01 EV 9876",vehicleModel:"Tata Nexon EV Max",role:"user",walletBalance:1450},isAuthenticated:!0,setUser:n=>t({user:n,isAuthenticated:!!n}),userBookings:[{bookingId:"PV-78901",locationName:"Cyber City EV Hub & Parking",slotNumber:"EV-01",startTime:new Date().toISOString(),durationMinutes:120,totalAmount:240,status:"confirmed",chargerType:"150 kW CCS2 DC Fast"}],addBooking:n=>t(i=>({userBookings:[n,...i.userBookings]})),activeChargingSession:{sessionId:"CS-9942",slotNumber:"EV-01",locationName:"Cyber City EV Hub",batteryPercentage:42,chargingPowerKw:142.5,energyDeliveredKwh:18.6,elapsedSeconds:840,estimatedMinutesRemaining:18,costSoFar:223.2,status:"charging"},updateChargingTelemetry:n=>t(i=>({activeChargingSession:i.activeChargingSession?{...i.activeChargingSession,...n}:null})),stopChargingSession:()=>t(n=>({activeChargingSession:n.activeChargingSession?{...n.activeChargingSession,status:"completed"}:null})),locationSlots:{},setLocationSlots:(n,i)=>t(r=>({locationSlots:{...r.locationSlots,[n]:i}})),updateSingleSlotStatus:(n,i,r)=>t(s=>{const o=(s.locationSlots[n]||[]).map(l=>l.id===i||l.slotNumber===i?{...l,status:r}:l);return{locationSlots:{...s.locationSlots,[n]:o}}})})),rd="http://localhost:5001/api",sd=[{id:"loc_01",name:"Cyber City EV Hub & Multi-Level Parking",city:"Gurugram",address:"DLF Cyber City, Sector 24, Rapid Metro Pillar 42",coordinates:{lat:28.4986,lng:77.0894},totalSlots:120,availableSlots:46,evSlotsTotal:30,evSlotsAvailable:14,hasFastCharger:!0,maxPowerKw:150,hourlyRate:80,rating:4.9,reviewsCount:384,image:"https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=800&q=80",amenities:["24/7 Security","CCTV Surveillance","Valet Service","Restrooms","Cafe","Car Wash"]},{id:"loc_02",name:"Connaught Place Radial Smart Bay",city:"New Delhi",address:"Inner Circle, Block C, Near Rajiv Chowk Gate 4",coordinates:{lat:28.6315,lng:77.2167},totalSlots:85,availableSlots:18,evSlotsTotal:20,evSlotsAvailable:5,hasFastCharger:!0,maxPowerKw:120,hourlyRate:100,rating:4.8,reviewsCount:512,image:"https://images.unsplash.com/photo-1590674899484-d5640e854abe?auto=format&fit=crop&w=800&q=80",amenities:["Covered Parking","Security Guard","Wheelchair Accessible","EV Fast Charging"]},{id:"loc_03",name:"Bandra Kurla Complex (BKC) EV Supergrid",city:"Mumbai",address:"G Block, Near Diamond Bourse, Bandra East",coordinates:{lat:19.0657,lng:72.8687},totalSlots:150,availableSlots:62,evSlotsTotal:50,evSlotsAvailable:24,hasFastCharger:!0,maxPowerKw:250,hourlyRate:120,rating:4.9,reviewsCount:620,image:"https://images.unsplash.com/photo-1573348722427-f1d6819fdf98?auto=format&fit=crop&w=800&q=80",amenities:["Ultra-Fast 250kW DC","Solar Canopy","Lounge","Automated Boom Barrier","CCTV"]},{id:"loc_04",name:"Indiranagar 100 Feet Road Automated Bays",city:"Bengaluru",address:"100 Feet Rd, HAL 2nd Stage, Indiranagar",coordinates:{lat:12.9716,lng:77.6412},totalSlots:60,availableSlots:12,evSlotsTotal:15,evSlotsAvailable:3,hasFastCharger:!0,maxPowerKw:60,hourlyRate:70,rating:4.7,reviewsCount:290,image:"https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",amenities:["ANPR License Plate Camera","Mobile Payment","EV Charging","Lighting Sensors"]}],mN=(t,e="Ground")=>{const n=e==="Basement 1"?"B1":e==="Level 1"?"L1":"G",i=[];for(let r=1;r<=16;r++){const s=r<=6,a=`${n}-${s?"EV":"PK"}-${r<10?"0"+r:r}`;let o="available";(r===2||r===7||r===11)&&(o="occupied"),(r===4||r===14)&&(o="reserved"),i.push({id:`${t}_${a}`,slotNumber:a,floor:e,type:s?r<=2?"ev-ultra":"ev-fast":"standard",status:o,powerKw:s?r<=2?150:60:0,pricePerHour:s?r<=2?120:80:40,connectorType:s?r<=2?"CCS-2 Dual Gun":"Type 2 AC":"None"})}return i},_p={getParkingLocations:async(t={})=>{try{const n=await fetch(`${rd}/parking?${new URLSearchParams(t)}`);if(n.ok){const i=await n.json();return i.locations||i}}catch{}let e=[...sd];if(t.search){const n=t.search.toLowerCase();e=e.filter(i=>i.name.toLowerCase().includes(n)||i.city.toLowerCase().includes(n)||i.address.toLowerCase().includes(n))}return t.city&&t.city!=="All Cities"&&(e=e.filter(n=>n.city===t.city)),t.evOnly&&(e=e.filter(n=>n.evSlotsAvailable>0)),t.fastChargeOnly&&(e=e.filter(n=>n.hasFastCharger&&n.maxPowerKw>=100)),t.maxPrice&&(e=e.filter(n=>n.hourlyRate<=t.maxPrice)),e},getLocationById:async t=>sd.find(e=>e.id===t)||sd[0],getLocationSlots:async(t,e="Ground")=>{try{const n=await fetch(`${rd}/parking/${t}/slots?floor=${e}`);if(n.ok)return(await n.json()).slots}catch{}return mN(t,e)},createBooking:async t=>{try{const e=await fetch(`${rd}/bookings`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});if(e.ok)return await e.json()}catch{}return{success:!0,booking:{bookingId:`PV-${Math.floor(1e4+Math.random()*9e4)}`,status:"confirmed",...t,createdAt:new Date().toISOString()}}}},Tn=So.forwardRef(({children:t,className:e,hoverEffect:n=!1,glow:i=!1,...r},s)=>c.jsx("div",{ref:s,className:ei("rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-white/[0.08] text-slate-100 shadow-xl overflow-hidden transition-all duration-300",n&&"hover:border-emerald-500/30 hover:shadow-2xl hover:shadow-emerald-500/5 hover:-translate-y-1",i&&"border-emerald-500/40 shadow-glow-emerald",e),...r,children:t}));Tn.displayName="Card";const qh=({children:t,className:e,...n})=>c.jsx("div",{className:ei("px-6 py-5 border-b border-white/[0.06]",e),...n,children:t}),Yh=({children:t,className:e,...n})=>c.jsx("h3",{className:ei("text-lg font-semibold tracking-tight text-white",e),...n,children:t}),gN=({children:t,className:e,...n})=>c.jsx("p",{className:ei("text-sm text-slate-400 mt-1",e),...n,children:t}),_l=({children:t,className:e,...n})=>c.jsx("div",{className:ei("p-6",e),...n,children:t}),xN=({children:t,className:e,...n})=>c.jsx("div",{className:ei("px-6 py-4 bg-slate-950/40 border-t border-white/[0.06] flex items-center justify-between",e),...n,children:t}),a0=({onSelectLocation:t})=>{const{searchQuery:e,setSearchQuery:n,selectedCity:i,setSelectedCity:r,filterEVOnly:s,setFilterEVOnly:a,filterFastChargeOnly:o,setFilterFastChargeOnly:l,maxPricePerHour:u,setMaxPricePerHour:h}=$c(),[p,f]=ke.useState([]),[m,_]=ke.useState(!1);return ke.useEffect(()=>{let S=!0;return _(!0),_p.getParkingLocations({search:e,city:i,evOnly:s,fastChargeOnly:o,maxPrice:u}).then(x=>{S&&(f(x),_(!1))}),()=>{S=!1}},[e,i,s,o,u]),c.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-in fade-in duration-300",children:[c.jsxs("div",{className:"space-y-4",children:[c.jsxs("div",{children:[c.jsxs("div",{className:"inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-2",children:[c.jsx(la,{className:"w-3.5 h-3.5"}),c.jsx("span",{children:"STEP 3: GEOSPATIAL SEARCH & EV FILTERS"})]}),c.jsx("h2",{className:"text-3xl font-extrabold text-white tracking-tight",children:"Explore Smart Parking & EV Superchargers"}),c.jsx("p",{className:"text-xs sm:text-sm text-slate-400 mt-1",children:"Browse live verified parking hubs with real-time bay availability and high-power DC fast chargers."})]}),c.jsxs("div",{className:"p-4 rounded-2xl bg-slate-900/80 border border-white/[0.08] backdrop-blur-xl shadow-xl space-y-4",children:[c.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-12 gap-3",children:[c.jsxs("div",{className:"md:col-span-6 relative flex items-center",children:[c.jsx(xc,{className:"absolute left-3.5 w-4 h-4 text-emerald-400 pointer-events-none"}),c.jsx("input",{type:"text",value:e,onChange:S=>n(S.target.value),placeholder:"Search by area, landmark or hub name...",className:"w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/30"})]}),c.jsx("div",{className:"md:col-span-3",children:c.jsxs("select",{value:i,onChange:S=>r(S.target.value),className:"w-full py-2.5 px-3 rounded-xl bg-slate-950/80 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-emerald-500",children:[c.jsx("option",{value:"All Cities",children:"All Cities (NCR, BLR, BOM)"}),c.jsx("option",{value:"Gurugram",children:"Gurugram"}),c.jsx("option",{value:"New Delhi",children:"New Delhi"}),c.jsx("option",{value:"Mumbai",children:"Mumbai"}),c.jsx("option",{value:"Bengaluru",children:"Bengaluru"})]})}),c.jsxs("div",{className:"md:col-span-3 flex items-center justify-between px-3 py-2 rounded-xl bg-slate-950/80 border border-slate-700/80 text-xs",children:[c.jsx("span",{className:"text-slate-400",children:"Max Tariff:"}),c.jsxs("span",{className:"font-mono font-bold text-white",children:["₹",u,"/hr"]}),c.jsx("input",{type:"range",min:"40",max:"250",step:"10",value:u,onChange:S=>h(Number(S.target.value)),className:"w-20 accent-emerald-500 cursor-pointer"})]})]}),c.jsxs("div",{className:"flex flex-wrap items-center gap-2 pt-2 border-t border-white/5 text-xs",children:[c.jsxs("span",{className:"text-slate-400 flex items-center gap-1 font-mono",children:[c.jsx(qM,{className:"w-3.5 h-3.5"})," Filters:"]}),c.jsxs("button",{type:"button",onClick:()=>a(!s),className:`px-3 py-1.5 rounded-lg border transition-all flex items-center gap-1.5 ${s?"bg-emerald-500/20 border-emerald-500/50 text-emerald-400 font-semibold":"bg-slate-800/60 border-slate-700 text-slate-300 hover:text-white"}`,children:[c.jsx($t,{className:"w-3.5 h-3.5"}),"EV Chargers Available"]}),c.jsxs("button",{type:"button",onClick:()=>l(!o),className:`px-3 py-1.5 rounded-lg border transition-all flex items-center gap-1.5 ${o?"bg-cyan-500/20 border-cyan-500/50 text-cyan-400 font-semibold":"bg-slate-800/60 border-slate-700 text-slate-300 hover:text-white"}`,children:[c.jsx($t,{className:"w-3.5 h-3.5 text-cyan-400"}),"100+ kW Ultra-Fast DC"]}),(e||i!=="All Cities"||s||o)&&c.jsx("button",{type:"button",onClick:()=>{n(""),r("All Cities"),a(!1),l(!1),h(200)},className:"text-xs text-rose-400 hover:text-rose-300 underline underline-offset-2 ml-auto",children:"Reset All Filters"})]})]})]}),c.jsxs("div",{className:"space-y-4",children:[c.jsxs("div",{className:"flex items-center justify-between text-xs text-slate-400 font-mono",children:[c.jsxs("span",{children:["SHOWING ",c.jsx("strong",{className:"text-white",children:p.length})," VERIFIED HUBS"]}),c.jsxs("span",{className:"flex items-center gap-1 text-emerald-400",children:[c.jsx(Vc,{className:"w-3.5 h-3.5"})," Live Availability Synced"]})]}),c.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:p.map(S=>c.jsxs(Tn,{hoverEffect:!0,className:"flex flex-col justify-between overflow-hidden group cursor-pointer",onClick:()=>t(S),children:[c.jsxs("div",{children:[c.jsxs("div",{className:"relative h-48 w-full overflow-hidden bg-slate-800",children:[c.jsx("img",{src:S.image,alt:S.name,className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"}),c.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"}),c.jsxs("div",{className:"absolute top-3 left-3 right-3 flex items-center justify-between",children:[c.jsx(Et,{variant:"glass",size:"sm",children:S.city}),c.jsxs("div",{className:"flex items-center gap-1 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-amber-400 text-xs font-bold border border-white/10",children:[c.jsx(Nv,{className:"w-3.5 h-3.5 fill-amber-400"}),c.jsx("span",{children:S.rating}),c.jsxs("span",{className:"text-[10px] text-slate-400 font-normal",children:["(",S.reviewsCount,")"]})]})]}),c.jsx("div",{className:"absolute bottom-3 left-3 right-3 flex items-center justify-between",children:c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsxs(Et,{variant:"emerald",size:"sm",dot:!0,children:[S.availableSlots," Bays Open"]}),S.evSlotsAvailable>0&&c.jsxs(Et,{variant:"cyan",size:"sm",children:["⚡ ",S.evSlotsAvailable," EV Free"]})]})})]}),c.jsxs("div",{className:"p-5 space-y-3",children:[c.jsxs("div",{children:[c.jsx("h3",{className:"font-bold text-white text-base group-hover:text-emerald-400 transition-colors",children:S.name}),c.jsxs("p",{className:"text-xs text-slate-400 flex items-center gap-1 mt-1 truncate",children:[c.jsx(Jf,{className:"w-3.5 h-3.5 shrink-0 text-slate-500"}),c.jsx("span",{className:"truncate",children:S.address})]})]}),c.jsxs("div",{className:"flex flex-wrap gap-1.5 text-[11px] text-slate-400",children:[S.amenities.slice(0,3).map(x=>c.jsx("span",{className:"px-2 py-0.5 rounded bg-slate-800/80 border border-white/5",children:x},x)),S.amenities.length>3&&c.jsxs("span",{className:"px-1.5 py-0.5 text-slate-500",children:["+",S.amenities.length-3," more"]})]})]})]}),c.jsxs("div",{className:"px-5 py-3.5 bg-slate-950/60 border-t border-white/[0.06] flex items-center justify-between",children:[c.jsxs("div",{children:[c.jsx("div",{className:"text-[10px] text-slate-500 uppercase font-mono",children:"Rate from"}),c.jsxs("div",{className:"text-base font-bold text-white font-mono",children:["₹",S.hourlyRate,c.jsx("span",{className:"text-xs text-slate-400 font-normal",children:"/hr"})]})]}),c.jsx(et,{variant:"primary",size:"sm",iconRight:c.jsx(Tv,{className:"w-3.5 h-3.5"}),onClick:x=>{x.stopPropagation(),t(S)},children:"Inspect Bays"})]})]},S.id))})]})]})},ka=({slotNumber:t,status:e="available",isEV:n=!1,powerKw:i,pricePerHour:r,onClick:s,isSelected:a=!1,className:o})=>{const l={available:{card:"border-emerald-500/30 bg-emerald-950/20 hover:border-emerald-400 hover:bg-emerald-950/40 text-emerald-300",dot:"emerald",label:"Available",icon:n?c.jsx($t,{className:"w-4 h-4 text-emerald-400"}):c.jsx(po,{className:"w-4 h-4 text-emerald-400"})},occupied:{card:"border-slate-800 bg-slate-900/60 opacity-60 cursor-not-allowed text-slate-400",dot:"slate",label:"Occupied",icon:c.jsx(po,{className:"w-4 h-4 text-slate-500"})},reserved:{card:"border-amber-500/30 bg-amber-950/20 text-amber-300",dot:"amber",label:"Reserved",icon:c.jsx(Cv,{className:"w-4 h-4 text-amber-400"})},maintenance:{card:"border-rose-500/30 bg-rose-950/20 opacity-60 text-rose-300",dot:"rose",label:"Offline",icon:c.jsx(uE,{className:"w-4 h-4 text-rose-400"})}},u=l[e]||l.available;return c.jsxs("div",{onClick:e==="available"?s:void 0,className:ei("relative rounded-xl p-3.5 border transition-all duration-200 flex flex-col justify-between gap-3 select-none",u.card,e==="available"&&"cursor-pointer active:scale-95",a&&"ring-2 ring-emerald-400 border-emerald-400 shadow-glow-emerald bg-emerald-950/50",o),children:[c.jsxs("div",{className:"flex items-center justify-between",children:[c.jsxs("div",{className:"flex items-center gap-1.5 font-mono font-bold text-sm text-white",children:[u.icon,c.jsx("span",{children:t})]}),c.jsx(Et,{variant:u.dot,size:"sm",dot:!0,children:u.label})]}),n&&c.jsxs("div",{className:"flex items-center justify-between text-[11px] text-slate-400 bg-slate-900/80 px-2 py-1 rounded-md border border-white/5 font-mono",children:[c.jsxs("span",{className:"flex items-center gap-1 text-cyan-400",children:[c.jsx($t,{className:"w-3 h-3"}),i?`${i} kW`:"Fast Charger"]}),c.jsx("span",{className:"text-slate-300 font-semibold",children:"CCS2 / Type 2"})]}),c.jsxs("div",{className:"flex items-center justify-between text-xs pt-1 border-t border-white/5",children:[c.jsx("span",{className:"text-slate-400",children:"Rate"}),c.jsxs("span",{className:"font-semibold text-white",children:["₹",r,"/hr"]})]})]})},vN=({location:t,onBack:e,onOpenBookingModal:n})=>{const{selectedFloor:i,setSelectedFloor:r,user:s}=$c(),[a,o]=ke.useState([]),[l,u]=ke.useState(null),[h,p]=ke.useState(2),[f,m]=ke.useState("all");ke.useEffect(()=>{let y=!0;return _p.getLocationSlots(t.id,i).then(M=>{if(y){o(M);const A=M.find(T=>T.status==="available");A&&u(A)}}),()=>{y=!1}},[t.id,i]);const _=a.filter(y=>f==="ev"?y.type.startsWith("ev"):f==="available"?y.status==="available":!0),S=l?l.pricePerHour:t.hourlyRate,x=S*h,d=15,g=x+d;return c.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-in fade-in duration-300",children:[c.jsxs("div",{className:"flex items-center justify-between",children:[c.jsx(et,{variant:"outline",size:"sm",icon:c.jsx(DM,{className:"w-4 h-4"}),onClick:e,children:"Back to Hubs"}),c.jsxs("div",{className:"flex items-center gap-2 text-xs font-mono text-emerald-400",children:[c.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-400 animate-pulse"}),c.jsx("span",{children:"LIVE HARDWARE SENSORS SYNCED"})]})]}),c.jsx("div",{className:"relative rounded-3xl overflow-hidden border border-white/[0.08] bg-slate-900/80 shadow-2xl",children:c.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12",children:[c.jsxs("div",{className:"lg:col-span-8 p-6 sm:p-8 space-y-4",children:[c.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[c.jsx(Et,{variant:"emerald",size:"sm",children:t.city}),c.jsxs("div",{className:"flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-slate-800 text-amber-400 text-xs font-bold border border-white/10",children:[c.jsx(Nv,{className:"w-3.5 h-3.5 fill-amber-400"}),c.jsx("span",{children:t.rating}),c.jsxs("span",{className:"text-slate-400 font-normal",children:["(",t.reviewsCount," reviews)"]})]}),c.jsxs(Et,{variant:"cyan",size:"sm",children:["⚡ Max ",t.maxPowerKw," kW DC Supercharger"]})]}),c.jsx("h1",{className:"text-2xl sm:text-3xl font-extrabold text-white tracking-tight",children:t.name}),c.jsxs("p",{className:"text-xs sm:text-sm text-slate-300 flex items-center gap-1.5",children:[c.jsx(Jf,{className:"w-4 h-4 text-emerald-400 shrink-0"}),c.jsx("span",{children:t.address})]}),c.jsxs("div",{className:"flex flex-wrap items-center gap-4 pt-2 text-xs text-slate-400 border-t border-white/5",children:[c.jsxs("div",{className:"flex items-center gap-1.5",children:[c.jsx(Vc,{className:"w-4 h-4 text-emerald-400"}),c.jsxs("span",{children:[t.availableSlots," of ",t.totalSlots," Bays Free"]})]}),c.jsxs("div",{className:"flex items-center gap-1.5",children:[c.jsx($t,{className:"w-4 h-4 text-cyan-400"}),c.jsxs("span",{children:[t.evSlotsAvailable," of ",t.evSlotsTotal," EV Chargers Free"]})]}),c.jsxs("div",{className:"flex items-center gap-1.5",children:[c.jsx(ep,{className:"w-4 h-4 text-emerald-400"}),c.jsx("span",{children:"ANPR Automatic License Plate Entry"})]})]})]}),c.jsxs("div",{className:"lg:col-span-4 relative h-48 lg:h-auto min-h-[200px]",children:[c.jsx("img",{src:t.image,alt:t.name,className:"w-full h-full object-cover"}),c.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-slate-900 via-transparent to-transparent hidden lg:block"})]})]})}),c.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 items-start",children:[c.jsxs("div",{className:"lg:col-span-8 space-y-6",children:[c.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl bg-slate-900/60 border border-white/[0.08]",children:[c.jsx("div",{className:"flex items-center gap-1 bg-slate-950 p-1 rounded-xl border border-white/10",children:["Basement 1","Ground","Level 1"].map(y=>c.jsx("button",{type:"button",onClick:()=>r(y),className:`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${i===y?"bg-emerald-500 text-slate-950 shadow-md font-bold":"text-slate-400 hover:text-white"}`,children:y},y))}),c.jsxs("div",{className:"flex items-center gap-1.5 text-xs",children:[c.jsxs("button",{type:"button",onClick:()=>m("all"),className:`px-2.5 py-1 rounded-lg border ${f==="all"?"bg-slate-800 border-emerald-500/50 text-white":"border-transparent text-slate-400 hover:text-white"}`,children:["All (",a.length,")"]}),c.jsxs("button",{type:"button",onClick:()=>m("available"),className:`px-2.5 py-1 rounded-lg border ${f==="available"?"bg-emerald-500/10 border-emerald-500/50 text-emerald-400":"border-transparent text-slate-400 hover:text-white"}`,children:["Available (",a.filter(y=>y.status==="available").length,")"]}),c.jsxs("button",{type:"button",onClick:()=>m("ev"),className:`px-2.5 py-1 rounded-lg border flex items-center gap-1 ${f==="ev"?"bg-cyan-500/10 border-cyan-500/50 text-cyan-400":"border-transparent text-slate-400 hover:text-white"}`,children:[c.jsx($t,{className:"w-3 h-3"})," EV Only (",a.filter(y=>y.type.startsWith("ev")).length,")"]})]})]}),c.jsxs("div",{className:"p-6 rounded-2xl bg-slate-900/60 border border-white/[0.08] space-y-4",children:[c.jsxs("div",{className:"flex items-center justify-between text-xs",children:[c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx(Qf,{className:"w-4 h-4 text-emerald-400"}),c.jsxs("span",{className:"font-bold text-white uppercase font-mono",children:["Floor Layout: ",i]})]}),c.jsx("span",{className:"text-slate-400",children:"Click any green bay to select"})]}),c.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-3",children:_.map(y=>c.jsx(ka,{slotNumber:y.slotNumber,status:y.status,isEV:y.type.startsWith("ev"),powerKw:y.powerKw,pricePerHour:y.pricePerHour,isSelected:(l==null?void 0:l.id)===y.id,onClick:()=>u(y)},y.id))}),c.jsxs("div",{className:"pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400 font-mono",children:[c.jsxs("div",{className:"flex items-center gap-1.5",children:[c.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-emerald-400"}),c.jsx("span",{children:"Available"})]}),c.jsxs("div",{className:"flex items-center gap-1.5",children:[c.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-slate-500"}),c.jsx("span",{children:"Occupied"})]}),c.jsxs("div",{className:"flex items-center gap-1.5",children:[c.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-amber-400"}),c.jsx("span",{children:"Reserved"})]}),c.jsxs("div",{className:"flex items-center gap-1.5",children:[c.jsx($t,{className:"w-3.5 h-3.5 text-cyan-400"}),c.jsx("span",{children:"EV Fast Charger"})]})]})]})]}),c.jsx("div",{className:"lg:col-span-4 sticky top-24 space-y-4",children:c.jsxs(Tn,{glow:!0,className:"p-6 space-y-5",children:[c.jsxs("div",{className:"border-b border-white/[0.08] pb-4",children:[c.jsx("h3",{className:"font-bold text-lg text-white",children:"Booking Summary"}),c.jsx("p",{className:"text-xs text-slate-400 mt-0.5",children:"Instant reservation with IoT slot hold lock"})]}),l?c.jsxs("div",{className:"space-y-4 text-xs",children:[c.jsxs("div",{className:"p-3.5 rounded-xl bg-slate-950/80 border border-white/5 space-y-2",children:[c.jsxs("div",{className:"flex justify-between items-center",children:[c.jsx("span",{className:"text-slate-400",children:"Selected Bay:"}),c.jsx("span",{className:"font-mono font-bold text-white text-sm",children:l.slotNumber})]}),c.jsxs("div",{className:"flex justify-between items-center",children:[c.jsx("span",{className:"text-slate-400",children:"Floor Level:"}),c.jsx("span",{className:"font-medium text-slate-200",children:l.floor})]}),l.powerKw>0&&c.jsxs("div",{className:"flex justify-between items-center text-cyan-400",children:[c.jsxs("span",{className:"flex items-center gap-1",children:[c.jsx($t,{className:"w-3.5 h-3.5"})," Charger Power:"]}),c.jsxs("span",{className:"font-mono font-bold",children:[l.powerKw," kW CCS-2"]})]}),c.jsxs("div",{className:"flex justify-between items-center",children:[c.jsx("span",{className:"text-slate-400",children:"Tariff:"}),c.jsxs("span",{className:"font-mono font-bold text-white",children:["₹",l.pricePerHour,"/hr"]})]})]}),c.jsxs("div",{className:"space-y-1.5",children:[c.jsx("label",{className:"text-slate-300 font-semibold uppercase tracking-wider text-[11px]",children:"Reservation Duration"}),c.jsx("div",{className:"grid grid-cols-4 gap-1.5",children:[1,2,4,8].map(y=>c.jsxs("button",{type:"button",onClick:()=>p(y),className:`py-2 rounded-lg font-mono font-bold transition-all ${h===y?"bg-emerald-500 text-slate-950 shadow-md":"bg-slate-800 text-slate-300 hover:bg-slate-700"}`,children:[y,"h"]},y))})]}),c.jsxs("div",{className:"p-3 rounded-xl bg-slate-950/40 border border-white/5 space-y-1",children:[c.jsxs("div",{className:"text-[11px] text-slate-400 flex items-center justify-between",children:[c.jsx("span",{children:"Registered Vehicle:"}),c.jsx("span",{className:"text-emerald-400 font-mono font-bold",children:s.vehicleNumber})]}),c.jsx("div",{className:"text-[11px] text-slate-300",children:s.vehicleModel})]}),c.jsxs("div",{className:"pt-2 border-t border-white/5 space-y-1.5",children:[c.jsxs("div",{className:"flex justify-between text-slate-400",children:[c.jsxs("span",{children:["Slot Rate (",h," hrs × ₹",S,"):"]}),c.jsxs("span",{className:"font-mono text-white",children:["₹",x]})]}),c.jsxs("div",{className:"flex justify-between text-slate-400",children:[c.jsx("span",{children:"IoT Gateway & Convenience:"}),c.jsxs("span",{className:"font-mono text-white",children:["₹",d]})]}),c.jsxs("div",{className:"flex justify-between text-base font-bold text-white pt-2 border-t border-white/10",children:[c.jsx("span",{children:"Total Payable:"}),c.jsxs("span",{className:"font-mono text-emerald-400 text-lg",children:["₹",g]})]})]}),c.jsx(et,{variant:"primary",size:"lg",className:"w-full justify-center text-sm font-bold shadow-glow-emerald",icon:c.jsx(Rv,{className:"w-4 h-4"}),onClick:()=>n({location:t,slot:l,duration:h,totalAmount:g}),children:"Confirm & Reserve Bay"})]}):c.jsxs("div",{className:"py-8 text-center text-slate-400 space-y-2",children:[c.jsx($M,{className:"w-8 h-8 text-slate-500 mx-auto"}),c.jsx("p",{className:"text-xs",children:"Please click an available green bay on the grid to reserve."})]})]})})]})]})},_N=()=>{const{activeChargingSession:t,updateChargingTelemetry:e,stopChargingSession:n,user:i}=$c(),[r,s]=ke.useState(!0),[a,o]=ke.useState(t?t.batteryPercentage:42),[l,u]=ke.useState(t?t.energyDeliveredKwh:18.6),[h,p]=ke.useState(142.5),[f,m]=ke.useState(840);ke.useEffect(()=>{if(!r)return;const x=setInterval(()=>{m(d=>d+1),u(d=>Number((d+.04).toFixed(2))),o(d=>d>=100?(s(!1),100):(d>80&&p(g=>Math.max(35,Number((g*.98).toFixed(1)))),Number((d+.05).toFixed(1))))},1e3);return()=>clearInterval(x)},[r]);const _=x=>{const d=Math.floor(x/60),g=x%60;return`${d<10?"0"+d:d}m ${g<10?"0"+g:g}s`},S=(l*12).toFixed(2);return c.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-in fade-in duration-300",children:[c.jsxs("div",{children:[c.jsxs("div",{className:"inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-2",children:[c.jsx(la,{className:"w-3.5 h-3.5"}),c.jsx("span",{children:"STEP 10: EV HIGH-VOLTAGE CHARGING TELEMETRY"})]}),c.jsx("h2",{className:"text-3xl font-extrabold text-white tracking-tight",children:"Live EV Fast Charging Telemetry Station"}),c.jsx("p",{className:"text-xs sm:text-sm text-slate-400 mt-1",children:"Monitor real-time voltage, delivered kWh, current battery SOC, and automated BMS tapering curves."})]}),c.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 items-start",children:[c.jsx("div",{className:"lg:col-span-7 space-y-6",children:c.jsxs(Tn,{glow:!0,className:"p-6 sm:p-8 space-y-6",children:[c.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/[0.08]",children:[c.jsxs("div",{className:"flex items-center gap-3",children:[c.jsx("div",{className:"h-12 w-12 rounded-2xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center shadow-glow-cyan",children:c.jsx($t,{className:"w-6 h-6 text-cyan-400 animate-pulse"})}),c.jsxs("div",{children:[c.jsx("h3",{className:"font-bold text-lg text-white",children:"Bay EV-01 • CCS-2 Supercharger"}),c.jsxs("p",{className:"text-xs text-slate-400",children:["Connected to ",(i==null?void 0:i.vehicleModel)||"Electric Vehicle"," (",i==null?void 0:i.vehicleNumber,")"]})]})]}),c.jsx(Et,{variant:r?"emerald":"amber",size:"md",dot:!0,children:r?"Fast Charging Active":"Session Paused"})]}),c.jsxs("div",{className:"p-6 rounded-2xl bg-slate-950/80 border border-white/5 space-y-4",children:[c.jsxs("div",{className:"flex justify-between items-baseline",children:[c.jsx("span",{className:"text-xs font-semibold text-slate-400 uppercase tracking-wider font-mono",children:"Battery State of Charge (SOC)"}),c.jsxs("div",{className:"flex items-baseline gap-1",children:[c.jsxs("span",{className:"text-4xl font-black font-mono text-white",children:[a,"%"]}),c.jsx("span",{className:"text-xs text-emerald-400 font-mono font-bold",children:r?"+0.4%/min":"Idle"})]})]}),c.jsx("div",{className:"h-4 w-full rounded-full bg-slate-800 overflow-hidden p-0.5 border border-white/5",children:c.jsx("div",{className:"h-full rounded-full bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 transition-all duration-500 shadow-glow-emerald",style:{width:`${a}%`}})}),c.jsxs("div",{className:"flex justify-between text-[11px] text-slate-400 font-mono",children:[c.jsx("span",{children:"Initial: 22%"}),c.jsx("span",{className:"text-amber-400",children:"80% Fast-Charge Cap"}),c.jsx("span",{children:"Target: 100%"})]})]}),c.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-3",children:[c.jsxs("div",{className:"p-3.5 rounded-xl bg-slate-900/60 border border-white/5 space-y-1",children:[c.jsx("span",{className:"text-[11px] text-slate-400",children:"Power Delivery"}),c.jsxs("div",{className:"text-lg font-bold font-mono text-cyan-400",children:[h," kW"]})]}),c.jsxs("div",{className:"p-3.5 rounded-xl bg-slate-900/60 border border-white/5 space-y-1",children:[c.jsx("span",{className:"text-[11px] text-slate-400",children:"Delivered Energy"}),c.jsxs("div",{className:"text-lg font-bold font-mono text-white",children:[l," kWh"]})]}),c.jsxs("div",{className:"p-3.5 rounded-xl bg-slate-900/60 border border-white/5 space-y-1",children:[c.jsx("span",{className:"text-[11px] text-slate-400",children:"Active Duration"}),c.jsx("div",{className:"text-lg font-bold font-mono text-white",children:_(f)})]}),c.jsxs("div",{className:"p-3.5 rounded-xl bg-slate-900/60 border border-white/5 space-y-1",children:[c.jsx("span",{className:"text-[11px] text-slate-400",children:"Accrued Cost"}),c.jsxs("div",{className:"text-lg font-bold font-mono text-emerald-400",children:["₹",S]})]})]}),c.jsxs("div",{className:"pt-2 flex flex-wrap items-center gap-3",children:[c.jsx(et,{variant:r?"outline":"neon",size:"md",icon:r?c.jsx(Av,{className:"w-4 h-4 text-amber-400"}):c.jsx(sE,{className:"w-4 h-4"}),onClick:()=>s(!r),children:r?"Pause Charging Session":"Resume Fast Charging"}),c.jsx(et,{variant:"danger",size:"md",icon:c.jsx(HM,{className:"w-4 h-4"}),onClick:()=>{s(!1),n(),alert(`Charging Session Completed! Total Energy Delivered: ${l} kWh. Total Cost: ₹${S}. Invoice dispatched to ${i.email}.`)},children:"Stop & Unlock Connector Gun"})]})]})}),c.jsx("div",{className:"lg:col-span-5 space-y-6",children:c.jsxs(Tn,{className:"p-6 space-y-4",children:[c.jsxs("h4",{className:"font-bold text-white text-base flex items-center gap-2",children:[c.jsx(Zf,{className:"w-4 h-4 text-emerald-400"}),c.jsx("span",{children:"Smart BMS Tapering Curve"})]}),c.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Lithium iron phosphate (LFP) and NMC EV batteries accept high currents (up to 150 kW) until 80% SOC. The station then reduces power to prevent dendrite growth and thermal runaway."}),c.jsxs("div",{className:"space-y-2 pt-2",children:[c.jsxs("div",{className:"space-y-1",children:[c.jsxs("div",{className:"flex justify-between text-xs font-mono",children:[c.jsx("span",{className:"text-slate-400",children:"0% - 60% (CC Fast Mode):"}),c.jsx("span",{className:"text-cyan-400 font-bold",children:"140 - 150 kW"})]}),c.jsx("div",{className:"h-2 w-full rounded-full bg-slate-800 overflow-hidden",children:c.jsx("div",{className:"h-full bg-cyan-400 w-full"})})]}),c.jsxs("div",{className:"space-y-1",children:[c.jsxs("div",{className:"flex justify-between text-xs font-mono",children:[c.jsx("span",{className:"text-slate-400",children:"60% - 80% (Current Step-down):"}),c.jsx("span",{className:"text-emerald-400 font-bold",children:"90 - 120 kW"})]}),c.jsx("div",{className:"h-2 w-full rounded-full bg-slate-800 overflow-hidden",children:c.jsx("div",{className:"h-full bg-emerald-400 w-3/4"})})]}),c.jsxs("div",{className:"space-y-1",children:[c.jsxs("div",{className:"flex justify-between text-xs font-mono",children:[c.jsx("span",{className:"text-slate-400",children:"80% - 100% (CV Trickle Mode):"}),c.jsx("span",{className:"text-amber-400 font-bold",children:"25 - 40 kW"})]}),c.jsx("div",{className:"h-2 w-full rounded-full bg-slate-800 overflow-hidden",children:c.jsx("div",{className:"h-full bg-amber-400 w-1/4"})})]})]}),c.jsxs("div",{className:"p-3.5 rounded-xl bg-slate-950/60 border border-white/5 space-y-2 text-xs",children:[c.jsxs("div",{className:"flex justify-between",children:[c.jsx("span",{className:"text-slate-400",children:"Supply Grid Voltage:"}),c.jsx("span",{className:"font-mono text-white",children:"448.2 V DC"})]}),c.jsxs("div",{className:"flex justify-between",children:[c.jsx("span",{className:"text-slate-400",children:"Charging Current:"}),c.jsx("span",{className:"font-mono text-white",children:"318.4 A"})]}),c.jsxs("div",{className:"flex justify-between",children:[c.jsx("span",{className:"text-slate-400",children:"Hardware Controller:"}),c.jsx("span",{className:"font-mono text-emerald-400",children:"OCPP 2.0.1 Compliant"})]})]})]})})]})]})},yN=()=>{const[t,e]=ke.useState([{id:"s1",number:"G-EV-01",location:"Cyber City Hub",type:"150kW DC Fast",status:"available",rate:120},{id:"s2",number:"G-EV-02",location:"Cyber City Hub",type:"60kW DC Fast",status:"occupied",rate:80},{id:"s3",number:"G-PK-03",location:"Cyber City Hub",type:"Standard Bay",status:"occupied",rate:40},{id:"s4",number:"G-PK-04",location:"Cyber City Hub",type:"Standard Bay",status:"reserved",rate:40},{id:"s5",number:"B1-EV-01",location:"Connaught Place",type:"120kW DC Fast",status:"available",rate:100},{id:"s6",number:"B1-PK-02",location:"Connaught Place",type:"Standard Bay",status:"maintenance",rate:40},{id:"s7",number:"L1-EV-01",location:"BKC Supergrid",type:"250kW Ultra",status:"occupied",rate:150},{id:"s8",number:"L1-EV-02",location:"BKC Supergrid",type:"250kW Ultra",status:"available",rate:150}]),n=r=>{e(s=>s.map(a=>{if(a.id===r){const o=a.status==="maintenance"?"available":"maintenance";return{...a,status:o}}return a}))},i=r=>{e(s=>s.map(a=>a.id===r?{...a,status:"available"}:a))};return c.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-in fade-in duration-300",children:[c.jsxs("div",{children:[c.jsxs("div",{className:"inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-2",children:[c.jsx(la,{className:"w-3.5 h-3.5"}),c.jsx("span",{children:"STEP 11: ADMIN & INFRASTRUCTURE CONTROLLER"})]}),c.jsx("h2",{className:"text-3xl font-extrabold text-white tracking-tight",children:"Admin Grid Operations Center"}),c.jsx("p",{className:"text-xs sm:text-sm text-slate-400 mt-1",children:"Monitor multi-city parking capacity, manage hardware maintenance, and track live gross revenue."})]}),c.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",children:[c.jsxs(Tn,{className:"p-5 space-y-2",children:[c.jsxs("div",{className:"flex items-center justify-between text-xs text-slate-400",children:[c.jsx("span",{children:"Total Connected Bays"}),c.jsx(Qf,{className:"w-4 h-4 text-emerald-400"})]}),c.jsx("div",{className:"text-2xl font-black font-mono text-white",children:"415 Bays"}),c.jsx("div",{className:"text-[11px] text-emerald-400 flex items-center gap-1",children:c.jsx("span",{children:"↑ 99.4% Hardware Uptime"})})]}),c.jsxs(Tn,{className:"p-5 space-y-2",children:[c.jsxs("div",{className:"flex items-center justify-between text-xs text-slate-400",children:[c.jsx("span",{children:"Current Grid Utilization"}),c.jsx(Zf,{className:"w-4 h-4 text-cyan-400"})]}),c.jsx("div",{className:"text-2xl font-black font-mono text-cyan-400",children:"74.2%"}),c.jsx("div",{className:"text-[11px] text-slate-400",children:"308 Bays currently occupied"})]}),c.jsxs(Tn,{className:"p-5 space-y-2",children:[c.jsxs("div",{className:"flex items-center justify-between text-xs text-slate-400",children:[c.jsx("span",{children:"Today's Gross Revenue"}),c.jsx(WM,{className:"w-4 h-4 text-emerald-400"})]}),c.jsx("div",{className:"text-2xl font-black font-mono text-emerald-400",children:"₹48,920"}),c.jsx("div",{className:"text-[11px] text-slate-400",children:"Processed via Razorpay Webhook"})]}),c.jsxs(Tn,{className:"p-5 space-y-2",children:[c.jsxs("div",{className:"flex items-center justify-between text-xs text-slate-400",children:[c.jsx("span",{children:"Instant EV Load Demand"}),c.jsx($t,{className:"w-4 h-4 text-amber-400"})]}),c.jsx("div",{className:"text-2xl font-black font-mono text-amber-400",children:"480 kW"}),c.jsx("div",{className:"text-[11px] text-slate-400",children:"Phase-balanced across substations"})]})]}),c.jsxs(Tn,{className:"overflow-hidden",children:[c.jsxs(qh,{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4",children:[c.jsxs("div",{children:[c.jsx(Yh,{children:"Physical Slot Management Matrix"}),c.jsx("p",{className:"text-xs text-slate-400 mt-0.5",children:"Override bay states, release stalled vehicles, or schedule offline maintenance"})]}),c.jsx(Et,{variant:"emerald",size:"sm",dot:!0,children:"MQTT Node Gateway Active"})]}),c.jsx("div",{className:"overflow-x-auto",children:c.jsxs("table",{className:"w-full text-left text-xs text-slate-300",children:[c.jsx("thead",{className:"bg-slate-950/80 uppercase font-mono text-[11px] text-slate-400 border-b border-white/5",children:c.jsxs("tr",{children:[c.jsx("th",{className:"px-6 py-3.5",children:"Slot Code"}),c.jsx("th",{className:"px-6 py-3.5",children:"Facility Location"}),c.jsx("th",{className:"px-6 py-3.5",children:"Hardware Standard"}),c.jsx("th",{className:"px-6 py-3.5",children:"Tariff"}),c.jsx("th",{className:"px-6 py-3.5",children:"Current Status"}),c.jsx("th",{className:"px-6 py-3.5 text-right",children:"Admin Actions"})]})}),c.jsx("tbody",{className:"divide-y divide-white/5",children:t.map(r=>c.jsxs("tr",{className:"hover:bg-slate-800/30 transition-colors",children:[c.jsxs("td",{className:"px-6 py-4 font-mono font-bold text-white flex items-center gap-1.5",children:[r.type.includes("DC")?c.jsx($t,{className:"w-3.5 h-3.5 text-cyan-400"}):c.jsx(po,{className:"w-3.5 h-3.5 text-slate-400"}),c.jsx("span",{children:r.number})]}),c.jsx("td",{className:"px-6 py-4",children:r.location}),c.jsx("td",{className:"px-6 py-4 font-mono text-slate-400",children:r.type}),c.jsxs("td",{className:"px-6 py-4 font-mono text-white",children:["₹",r.rate,"/hr"]}),c.jsx("td",{className:"px-6 py-4",children:c.jsx(Et,{variant:r.status==="available"?"emerald":r.status==="occupied"?"rose":r.status==="reserved"?"amber":"slate",size:"sm",dot:!0,children:r.status})}),c.jsxs("td",{className:"px-6 py-4 text-right space-x-2",children:[c.jsx("button",{type:"button",onClick:()=>n(r.id),className:`px-2.5 py-1 rounded-md text-[11px] border font-medium transition-all ${r.status==="maintenance"?"bg-emerald-500/20 text-emerald-400 border-emerald-500/40 hover:bg-emerald-500/30":"bg-slate-800 text-slate-300 border-slate-700 hover:text-white"}`,children:r.status==="maintenance"?"Activate Bay":"Maintenance"}),r.status==="occupied"&&c.jsx("button",{type:"button",onClick:()=>i(r.id),className:"px-2.5 py-1 rounded-md text-[11px] bg-rose-500/20 text-rose-400 border border-rose-500/40 hover:bg-rose-500/30 font-medium transition-all",children:"Force Release"})]})]},r.id))})]})})]})]})},$h=So.forwardRef(({label:t,helperText:e,error:n,icon:i,iconRight:r,className:s,id:a,disabled:o,...l},u)=>{const h=a||(t?t.toLowerCase().replace(/\s+/g,"-"):void 0);return c.jsxs("div",{className:"w-full space-y-1.5",children:[t&&c.jsx("label",{htmlFor:h,className:"block text-xs font-semibold uppercase tracking-wider text-slate-300",children:t}),c.jsxs("div",{className:"relative flex items-center",children:[i&&c.jsx("div",{className:"absolute left-3.5 flex items-center pointer-events-none text-slate-400",children:i}),c.jsx("input",{id:h,ref:u,disabled:o,className:ei("w-full rounded-xl bg-slate-900/80 border border-slate-700/80 text-white placeholder-slate-500","text-sm px-4 py-2.5 transition-all duration-200 outline-none","focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 focus:bg-slate-900","disabled:opacity-50 disabled:cursor-not-allowed",i&&"pl-11",r&&"pr-11",n&&"border-rose-500/80 focus:border-rose-500 focus:ring-rose-500/20",s),...l}),r&&c.jsx("div",{className:"absolute right-3.5 flex items-center text-slate-400",children:r})]}),n?c.jsxs("p",{className:"text-xs text-rose-400 flex items-center gap-1 mt-1",children:[c.jsx("span",{children:"•"})," ",n]}):e?c.jsx("p",{className:"text-xs text-slate-400 mt-1",children:e}):null]})});$h.displayName="Input";const Kh=({isOpen:t,onClose:e,title:n,description:i,children:r,footer:s,maxWidth:a="max-w-lg",className:o})=>(ke.useEffect(()=>{if(!t)return;const l=u=>{u.key==="Escape"&&(e==null||e())};return document.body.style.overflow="hidden",window.addEventListener("keydown",l),()=>{document.body.style.overflow="unset",window.removeEventListener("keydown",l)}},[t,e]),t?c.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto",children:[c.jsx("div",{className:"fixed inset-0 bg-black/75 backdrop-blur-md transition-opacity animate-in fade-in duration-200",onClick:e,"aria-hidden":"true"}),c.jsxs("div",{role:"dialog","aria-modal":"true",className:ei("relative w-full rounded-2xl bg-slate-900 border border-slate-700/80 shadow-2xl z-10 overflow-hidden","animate-in zoom-in-95 duration-200",a,o),children:[(n||e)&&c.jsxs("div",{className:"flex items-center justify-between px-6 py-4 border-b border-white/[0.08]",children:[c.jsxs("div",{children:[n&&c.jsx("h3",{className:"text-lg font-bold text-white",children:n}),i&&c.jsx("p",{className:"text-xs text-slate-400 mt-0.5",children:i})]}),e&&c.jsx("button",{type:"button",onClick:e,"aria-label":"Close modal",className:"p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors",children:c.jsx(tp,{className:"w-5 h-5"})})]}),c.jsx("div",{className:"px-6 py-5 max-h-[calc(100vh-200px)] overflow-y-auto",children:r}),s&&c.jsx("div",{className:"px-6 py-4 bg-slate-950/60 border-t border-white/[0.08] flex items-center justify-end gap-3",children:s})]})]}):null),SN=()=>{const[t,e]=ke.useState(!1),[n,i]=ke.useState(!1),[r,s]=ke.useState("EV-02"),[a,o]=ke.useState(""),[l,u]=ke.useState(!1),h=()=>{e(!0),setTimeout(()=>{e(!1)},2e3)};return c.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16",children:[c.jsxs("div",{className:"relative rounded-3xl p-8 sm:p-12 border border-emerald-500/20 bg-gradient-to-b from-emerald-950/20 via-slate-900/60 to-slate-950 overflow-hidden shadow-2xl",children:[c.jsx("div",{className:"absolute top-0 right-0 -mr-16 -mt-16 w-80 h-80 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none"}),c.jsx("div",{className:"absolute bottom-0 left-1/3 -mb-20 w-80 h-80 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none"}),c.jsxs("div",{className:"relative z-10 space-y-4 max-w-3xl",children:[c.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-mono",children:[c.jsx(la,{className:"w-3.5 h-3.5"}),"STEP 1 COMPLETE: ATOMIC DESIGN SYSTEM"]}),c.jsx("h1",{className:"text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight",children:"ParkVolt Design Tokens & UI Component Library"}),c.jsxs("p",{className:"text-sm sm:text-base text-slate-300 leading-relaxed",children:["Welcome to the foundational UI architecture for ",c.jsx("strong",{children:"ParkVolt"}),". Built using Tailwind CSS, React 18, and modern atomic component principles. Every button, badge, slot indicator, and modal below is 100% interactive and reusable across the entire platform."]}),c.jsxs("div",{className:"pt-2 flex flex-wrap items-center gap-3",children:[c.jsx(et,{variant:"neon",size:"md",icon:c.jsx(Qf,{className:"w-4 h-4"}),onClick:()=>{const p=document.getElementById("tokens-section");p==null||p.scrollIntoView({behavior:"smooth"})},children:"Explore Design Tokens"}),c.jsx(et,{variant:"outline",size:"md",icon:c.jsx($m,{className:"w-4 h-4"}),onClick:()=>{const p=document.getElementById("interactive-controls");p==null||p.scrollIntoView({behavior:"smooth"})},children:"Interactive Controls"})]})]})]}),c.jsxs("section",{id:"tokens-section",className:"space-y-6",children:[c.jsxs("div",{className:"flex items-center gap-3",children:[c.jsx("div",{className:"p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",children:c.jsx(iE,{className:"w-5 h-5"})}),c.jsxs("div",{children:[c.jsx("h2",{className:"text-xl font-bold text-white tracking-tight",children:"1. Design System Tokens & Color Palette"}),c.jsx("p",{className:"text-xs text-slate-400",children:"Strictly defined semantic hex colors tailored for dark-mode EV ecosystem"})]})]}),c.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4",children:[c.jsxs("div",{className:"p-4 rounded-xl bg-slate-900/80 border border-white/5 space-y-2",children:[c.jsx("div",{className:"h-14 rounded-lg bg-emerald-500 shadow-glow-emerald flex items-center justify-center font-mono text-xs font-bold text-slate-950",children:"#10B981"}),c.jsxs("div",{children:[c.jsx("div",{className:"text-xs font-bold text-white",children:"Electric Emerald"}),c.jsx("div",{className:"text-[10px] text-slate-400",children:"Primary Brand & Available"})]})]}),c.jsxs("div",{className:"p-4 rounded-xl bg-slate-900/80 border border-white/5 space-y-2",children:[c.jsx("div",{className:"h-14 rounded-lg bg-cyan-500 shadow-glow-cyan flex items-center justify-center font-mono text-xs font-bold text-slate-950",children:"#06B6D4"}),c.jsxs("div",{children:[c.jsx("div",{className:"text-xs font-bold text-white",children:"Cyber Cyan"}),c.jsx("div",{className:"text-[10px] text-slate-400",children:"EV Fast Charging & Sockets"})]})]}),c.jsxs("div",{className:"p-4 rounded-xl bg-slate-900/80 border border-white/5 space-y-2",children:[c.jsx("div",{className:"h-14 rounded-lg bg-amber-500 shadow-glow-amber flex items-center justify-center font-mono text-xs font-bold text-slate-950",children:"#F59E0B"}),c.jsxs("div",{children:[c.jsx("div",{className:"text-xs font-bold text-white",children:"Amber Gold"}),c.jsx("div",{className:"text-[10px] text-slate-400",children:"Reserved & Pending State"})]})]}),c.jsxs("div",{className:"p-4 rounded-xl bg-slate-900/80 border border-white/5 space-y-2",children:[c.jsx("div",{className:"h-14 rounded-lg bg-rose-500 flex items-center justify-center font-mono text-xs font-bold text-slate-950",children:"#EF4444"}),c.jsxs("div",{children:[c.jsx("div",{className:"text-xs font-bold text-white",children:"Crimson Alert"}),c.jsx("div",{className:"text-[10px] text-slate-400",children:"Occupied & Error Bounds"})]})]}),c.jsxs("div",{className:"p-4 rounded-xl bg-slate-900/80 border border-white/5 space-y-2",children:[c.jsx("div",{className:"h-14 rounded-lg bg-slate-800 border border-white/10 flex items-center justify-center font-mono text-xs font-bold text-slate-200",children:"#1E293B"}),c.jsxs("div",{children:[c.jsx("div",{className:"text-xs font-bold text-white",children:"Elevated Slate"}),c.jsx("div",{className:"text-[10px] text-slate-400",children:"Card & Modal Surface"})]})]}),c.jsxs("div",{className:"p-4 rounded-xl bg-slate-900/80 border border-white/5 space-y-2",children:[c.jsx("div",{className:"h-14 rounded-lg bg-[#080C14] border border-white/10 flex items-center justify-center font-mono text-xs font-bold text-slate-400",children:"#080C14"}),c.jsxs("div",{children:[c.jsx("div",{className:"text-xs font-bold text-white",children:"Obsidian Void"}),c.jsx("div",{className:"text-[10px] text-slate-400",children:"Background Root Canvas"})]})]})]})]}),c.jsxs("section",{id:"interactive-controls",className:"space-y-6",children:[c.jsxs("div",{className:"flex items-center justify-between",children:[c.jsxs("div",{className:"flex items-center gap-3",children:[c.jsx("div",{className:"p-2 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20",children:c.jsx($m,{className:"w-5 h-5"})}),c.jsxs("div",{children:[c.jsx("h2",{className:"text-xl font-bold text-white tracking-tight",children:"2. Button Variants & Interactive States"}),c.jsx("p",{className:"text-xs text-slate-400",children:"Accessible micro-interactions, scale animations, and loading states"})]})]}),c.jsx(et,{variant:"ghost",size:"sm",icon:c.jsx(oE,{className:`w-3.5 h-3.5 ${t?"animate-spin":""}`}),onClick:h,children:t?"Processing State...":"Simulate Loading State"})]}),c.jsx(Tn,{children:c.jsxs(_l,{className:"space-y-6",children:[c.jsxs("div",{children:[c.jsx("h4",{className:"text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider mb-3",children:"Style Variants"}),c.jsxs("div",{className:"flex flex-wrap gap-3",children:[c.jsx(et,{variant:"primary",isLoading:t,children:"Primary Action"}),c.jsx(et,{variant:"neon",icon:c.jsx($t,{className:"w-4 h-4"}),isLoading:t,children:"Neon Glow"}),c.jsx(et,{variant:"secondary",isLoading:t,children:"Secondary Action"}),c.jsx(et,{variant:"outline",isLoading:t,children:"Outline"}),c.jsx(et,{variant:"ghost",isLoading:t,children:"Ghost"}),c.jsx(et,{variant:"danger",icon:c.jsx(Av,{className:"w-4 h-4"}),isLoading:t,children:"Danger Action"}),c.jsx(et,{disabled:!0,children:"Disabled"})]})]}),c.jsxs("div",{className:"pt-4 border-t border-white/5",children:[c.jsx("h4",{className:"text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider mb-3",children:"Size Scales"}),c.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[c.jsx(et,{variant:"neon",size:"sm",children:"Small (sm - 32px)"}),c.jsx(et,{variant:"neon",size:"md",children:"Medium (md - 40px)"}),c.jsx(et,{variant:"neon",size:"lg",iconRight:c.jsx(FM,{className:"w-4 h-4"}),children:"Large (lg - 48px)"})]})]})]})})]}),c.jsxs("section",{className:"space-y-6",children:[c.jsxs("div",{className:"flex items-center gap-3",children:[c.jsx("div",{className:"p-2 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20",children:c.jsx(Vc,{className:"w-5 h-5"})}),c.jsxs("div",{children:[c.jsx("h2",{className:"text-xl font-bold text-white tracking-tight",children:"3. Badges, Indicators & Connector Chips"}),c.jsx("p",{className:"text-xs text-slate-400",children:"Semantic badges with pulsating active status indicators"})]})]}),c.jsx(Tn,{children:c.jsxs(_l,{className:"space-y-6",children:[c.jsxs("div",{children:[c.jsx("h4",{className:"text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider mb-3",children:"Status Badges with Pulsing Dot"}),c.jsxs("div",{className:"flex flex-wrap gap-3",children:[c.jsx(Et,{variant:"emerald",dot:!0,size:"md",children:"Slot Available"}),c.jsx(Et,{variant:"cyan",dot:!0,size:"md",children:"Socket Live Stream"}),c.jsx(Et,{variant:"amber",dot:!0,size:"md",children:"Reservation Pending"}),c.jsx(Et,{variant:"rose",dot:!0,size:"md",children:"Slot Occupied"}),c.jsx(Et,{variant:"slate",dot:!0,size:"md",children:"Hardware Offline"}),c.jsx(Et,{variant:"glass",size:"md",children:"Glassmorphism Tag"})]})]}),c.jsxs("div",{className:"pt-4 border-t border-white/5",children:[c.jsx("h4",{className:"text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider mb-3",children:"EV Connector Standards"}),c.jsxs("div",{className:"flex flex-wrap gap-2.5",children:[c.jsx(Et,{variant:"cyan",size:"sm",children:"⚡ CCS-2 DC Fast (150kW)"}),c.jsx(Et,{variant:"emerald",size:"sm",children:"⚡ Type 2 AC (22kW)"}),c.jsx(Et,{variant:"amber",size:"sm",children:"⚡ CHAdeMO (50kW)"}),c.jsx(Et,{variant:"glass",size:"sm",children:"⚡ Bharat DC-001 (15kW)"})]})]})]})})]}),c.jsxs("section",{className:"space-y-6",children:[c.jsxs("div",{className:"flex items-center justify-between",children:[c.jsxs("div",{className:"flex items-center gap-3",children:[c.jsx("div",{className:"p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",children:c.jsx(po,{className:"w-5 h-5"})}),c.jsxs("div",{children:[c.jsx("h2",{className:"text-xl font-bold text-white tracking-tight",children:"4. Domain Component: SlotIndicator"}),c.jsx("p",{className:"text-xs text-slate-400",children:"Click any available slot to test selection state"})]})]}),c.jsxs("div",{className:"text-xs font-mono text-slate-400 hidden sm:block",children:["Currently Selected: ",c.jsx("span",{className:"text-emerald-400 font-bold",children:r})]})]}),c.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",children:[c.jsx(ka,{slotNumber:"EV-01",status:"available",isEV:!0,powerKw:150,pricePerHour:120,isSelected:r==="EV-01",onClick:()=>s("EV-01")}),c.jsx(ka,{slotNumber:"EV-02",status:"available",isEV:!0,powerKw:60,pricePerHour:80,isSelected:r==="EV-02",onClick:()=>s("EV-02")}),c.jsx(ka,{slotNumber:"PK-03",status:"occupied",isEV:!1,pricePerHour:40}),c.jsx(ka,{slotNumber:"PK-04",status:"reserved",isEV:!1,pricePerHour:40})]})]}),c.jsxs("section",{className:"space-y-6",children:[c.jsxs("div",{className:"flex items-center gap-3",children:[c.jsx("div",{className:"p-2 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20",children:c.jsx(xc,{className:"w-5 h-5"})}),c.jsxs("div",{children:[c.jsx("h2",{className:"text-xl font-bold text-white tracking-tight",children:"5. Form Inputs & Modal Dialogs"}),c.jsx("p",{className:"text-xs text-slate-400",children:"Accessible form elements with real-time validation styling"})]})]}),c.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[c.jsxs(Tn,{children:[c.jsxs(qh,{children:[c.jsx(Yh,{children:"Input Field States"}),c.jsx(gN,{children:"Test input focus rings, icon slots, and error toggles"})]}),c.jsxs(_l,{className:"space-y-4",children:[c.jsx($h,{label:"Search Parking Locations",placeholder:"e.g. Connaught Place, Cyber Hub, MG Road...",icon:c.jsx(xc,{className:"w-4 h-4"}),value:a,onChange:p=>o(p.target.value),helperText:"Type any major city hub or landmark"}),c.jsx($h,{label:"Vehicle Registration Number",placeholder:"DL 01 AB 1234",icon:c.jsx(po,{className:"w-4 h-4"}),error:l?"Invalid vehicle number format. Expected format: DL 01 AB 1234":void 0,helperText:l?void 0:"Enter state code followed by RTO series and number"}),c.jsxs("div",{className:"pt-2 flex items-center justify-between",children:[c.jsx(et,{variant:"outline",size:"sm",onClick:()=>u(!l),children:l?"Clear Error State":"Trigger Validation Error"}),c.jsx(et,{variant:"neon",size:"sm",onClick:()=>i(!0),children:"Launch Test Modal"})]})]})]}),c.jsxs(Tn,{glow:!0,children:[c.jsxs(qh,{children:[c.jsxs("div",{className:"flex items-center gap-2 text-emerald-400 font-mono text-xs",children:[c.jsx(ep,{className:"w-4 h-4"}),c.jsx("span",{children:"EXAMINER / VIVA PREPARATION"})]}),c.jsx(Yh,{className:"mt-1",children:"Why an Atomic Design System Matters"})]}),c.jsxs(_l,{className:"space-y-3 text-xs text-slate-300 leading-relaxed",children:[c.jsxs("p",{children:[c.jsx("strong",{children:"1. DRY Principle (Don't Repeat Yourself):"})," Instead of copying 15 Tailwind classes across 40 files, buttons and badges are centralized in ",c.jsx("code",{className:"text-emerald-400 font-mono",children:"/components/ui/"}),"."]}),c.jsxs("p",{children:[c.jsx("strong",{children:"2. Predictable State Coupling:"})," In Step 9, when Socket.IO pushes a ",c.jsx("code",{className:"text-cyan-400 font-mono",children:"SLOT_STATUS_UPDATE"}),", only the ",c.jsx("code",{className:"text-emerald-400 font-mono",children:"SlotIndicator"})," re-renders, preventing unwanted page re-renders."]}),c.jsxs("p",{children:[c.jsx("strong",{children:"3. Tailwind-Merge Utility:"})," The ",c.jsx("code",{className:"text-emerald-400 font-mono",children:"cn()"})," utility guarantees no CSS specificity conflicts between default button classes and overrides."]})]}),c.jsxs(xN,{children:[c.jsx("span",{className:"text-[11px] text-slate-400",children:"Step 1 Ready for Review"}),c.jsx(Et,{variant:"emerald",size:"sm",children:"Passing All Checks"})]})]})]})]}),c.jsx(Kh,{isOpen:n,onClose:()=>i(!1),title:"Reserve Slot: EV-02 (Fast Charging)",description:"Review reservation parameters before confirming order.",footer:c.jsxs(c.Fragment,{children:[c.jsx(et,{variant:"outline",size:"sm",onClick:()=>i(!1),children:"Cancel"}),c.jsx(et,{variant:"primary",size:"sm",icon:c.jsx($t,{className:"w-4 h-4"}),onClick:()=>{alert("Reservation Flow Triggered! This connects to Step 7 Booking APIs."),i(!1)},children:"Proceed to Checkout"})]}),children:c.jsxs("div",{className:"space-y-4 py-2 text-sm text-slate-300",children:[c.jsxs("div",{className:"p-4 rounded-xl bg-slate-950/60 border border-white/5 space-y-2",children:[c.jsxs("div",{className:"flex justify-between",children:[c.jsx("span",{className:"text-slate-400",children:"Selected Slot:"}),c.jsx("span",{className:"font-mono font-bold text-white",children:"EV-02 (Level 2 Basement)"})]}),c.jsxs("div",{className:"flex justify-between",children:[c.jsx("span",{className:"text-slate-400",children:"Charger Type:"}),c.jsx("span",{className:"text-cyan-400 font-semibold",children:"60 kW CCS2 DC Fast"})]}),c.jsxs("div",{className:"flex justify-between",children:[c.jsx("span",{className:"text-slate-400",children:"Hourly Rate:"}),c.jsx("span",{className:"font-semibold text-white",children:"₹80 / hour"})]})]}),c.jsx("p",{className:"text-xs text-slate-400",children:"Note: In Step 8, this modal connects directly to the Razorpay checkout SDK with server-side HMAC-SHA256 signature verification."})]})})]})},Ri=Object.create(null);Ri.open="0";Ri.close="1";Ri.ping="2";Ri.pong="3";Ri.message="4";Ri.upgrade="5";Ri.noop="6";const Gl=Object.create(null);Object.keys(Ri).forEach(t=>{Gl[Ri[t]]=t});const Zh={type:"error",data:"parser error"},O_=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",F_=typeof ArrayBuffer=="function",k_=t=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(t):t&&t.buffer instanceof ArrayBuffer,yp=({type:t,data:e},n,i)=>O_&&e instanceof Blob?n?i(e):o0(e,i):F_&&(e instanceof ArrayBuffer||k_(e))?n?i(e):o0(new Blob([e]),i):i(Ri[t]+(e||"")),o0=(t,e)=>{const n=new FileReader;return n.onload=function(){const i=n.result.split(",")[1];e("b"+(i||""))},n.readAsDataURL(t)};function l0(t){return t instanceof Uint8Array?t:t instanceof ArrayBuffer?new Uint8Array(t):new Uint8Array(t.buffer,t.byteOffset,t.byteLength)}let ad;function MN(t,e){if(O_&&t.data instanceof Blob)return t.data.arrayBuffer().then(l0).then(e);if(F_&&(t.data instanceof ArrayBuffer||k_(t.data)))return e(l0(t.data));yp(t,!1,n=>{ad||(ad=new TextEncoder),e(ad.encode(n))})}const c0="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Ba=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let t=0;t<c0.length;t++)Ba[c0.charCodeAt(t)]=t;const EN=t=>{let e=t.length*.75,n=t.length,i,r=0,s,a,o,l;t[t.length-1]==="="&&(e--,t[t.length-2]==="="&&e--);const u=new ArrayBuffer(e),h=new Uint8Array(u);for(i=0;i<n;i+=4)s=Ba[t.charCodeAt(i)],a=Ba[t.charCodeAt(i+1)],o=Ba[t.charCodeAt(i+2)],l=Ba[t.charCodeAt(i+3)],h[r++]=s<<2|a>>4,h[r++]=(a&15)<<4|o>>2,h[r++]=(o&3)<<6|l&63;return u},wN=typeof ArrayBuffer=="function",Sp=(t,e)=>{if(typeof t!="string")return{type:"message",data:B_(t,e)};const n=t.charAt(0);return n==="b"?{type:"message",data:bN(t.substring(1),e)}:Gl[n]?t.length>1?{type:Gl[n],data:t.substring(1)}:{type:Gl[n]}:Zh},bN=(t,e)=>{if(wN){const n=EN(t);return B_(n,e)}else return{base64:!0,data:t}},B_=(t,e)=>{switch(e){case"blob":return t instanceof Blob?t:new Blob([t]);case"arraybuffer":default:return t instanceof ArrayBuffer?t:t.buffer}},z_="",TN=(t,e)=>{const n=t.length,i=new Array(n);let r=0;t.forEach((s,a)=>{yp(s,!1,o=>{i[a]=o,++r===n&&e(i.join(z_))})})},AN=(t,e)=>{const n=t.split(z_),i=[];for(let r=0;r<n.length;r++){const s=Sp(n[r],e);if(i.push(s),s.type==="error")break}return i};function CN(){return new TransformStream({transform(t,e){MN(t,n=>{const i=n.length;let r;if(i<126)r=new Uint8Array(1),new DataView(r.buffer).setUint8(0,i);else if(i<65536){r=new Uint8Array(3);const s=new DataView(r.buffer);s.setUint8(0,126),s.setUint16(1,i)}else{r=new Uint8Array(9);const s=new DataView(r.buffer);s.setUint8(0,127),s.setBigUint64(1,BigInt(i))}t.data&&typeof t.data!="string"&&(r[0]|=128),e.enqueue(r),e.enqueue(n)})}})}let od;function yl(t){return t.reduce((e,n)=>e+n.length,0)}function Sl(t,e){if(t[0].length===e)return t.shift();const n=new Uint8Array(e);let i=0;for(let r=0;r<e;r++)n[r]=t[0][i++],i===t[0].length&&(t.shift(),i=0);return t.length&&i<t[0].length&&(t[0]=t[0].slice(i)),n}function RN(t,e){od||(od=new TextDecoder);const n=[];let i=0,r=-1,s=!1;return new TransformStream({transform(a,o){for(n.push(a);;){if(i===0){if(yl(n)<1)break;const l=Sl(n,1);s=(l[0]&128)===128,r=l[0]&127,r<126?i=3:r===126?i=1:i=2}else if(i===1){if(yl(n)<2)break;const l=Sl(n,2);r=new DataView(l.buffer,l.byteOffset,l.length).getUint16(0),i=3}else if(i===2){if(yl(n)<8)break;const l=Sl(n,8),u=new DataView(l.buffer,l.byteOffset,l.length),h=u.getUint32(0);if(h>Math.pow(2,21)-1){o.enqueue(Zh);break}r=h*Math.pow(2,32)+u.getUint32(4),i=3}else{if(yl(n)<r)break;const l=Sl(n,r);o.enqueue(Sp(s?l:od.decode(l),e)),i=0}if(r===0||r>t){o.enqueue(Zh);break}}}})}const H_=4;function Ft(t){if(t)return NN(t)}function NN(t){for(var e in Ft.prototype)t[e]=Ft.prototype[e];return t}Ft.prototype.on=Ft.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(e),this};Ft.prototype.once=function(t,e){function n(){this.off(t,n),e.apply(this,arguments)}return n.fn=e,this.on(t,n),this};Ft.prototype.off=Ft.prototype.removeListener=Ft.prototype.removeAllListeners=Ft.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var n=this._callbacks["$"+t];if(!n)return this;if(arguments.length==1)return delete this._callbacks["$"+t],this;for(var i,r=0;r<n.length;r++)if(i=n[r],i===e||i.fn===e){n.splice(r,1);break}return n.length===0&&delete this._callbacks["$"+t],this};Ft.prototype.emit=function(t){this._callbacks=this._callbacks||{};for(var e=new Array(arguments.length-1),n=this._callbacks["$"+t],i=1;i<arguments.length;i++)e[i-1]=arguments[i];if(n){n=n.slice(0);for(var i=0,r=n.length;i<r;++i)n[i].apply(this,e)}return this};Ft.prototype.emitReserved=Ft.prototype.emit;Ft.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks["$"+t]||[]};Ft.prototype.hasListeners=function(t){return!!this.listeners(t).length};const Kc=typeof Promise=="function"&&typeof Promise.resolve=="function"?e=>Promise.resolve().then(e):(e,n)=>n(e,0),$n=typeof self<"u"?self:typeof window<"u"?window:Function("return this")(),PN="arraybuffer";function G_(t,...e){return e.reduce((n,i)=>(t.hasOwnProperty(i)&&(n[i]=t[i]),n),{})}const LN=$n.setTimeout,DN=$n.clearTimeout;function Zc(t,e){e.useNativeTimers?(t.setTimeoutFn=LN.bind($n),t.clearTimeoutFn=DN.bind($n)):(t.setTimeoutFn=$n.setTimeout.bind($n),t.clearTimeoutFn=$n.clearTimeout.bind($n))}const IN=1.33;function UN(t){return typeof t=="string"?ON(t):Math.ceil((t.byteLength||t.size)*IN)}function ON(t){let e=0,n=0;for(let i=0,r=t.length;i<r;i++)e=t.charCodeAt(i),e<128?n+=1:e<2048?n+=2:e<55296||e>=57344?n+=3:(i++,n+=4);return n}function V_(){return Date.now().toString(36).substring(3)+Math.random().toString(36).substring(2,5)}function FN(t){let e="";for(let n in t)t.hasOwnProperty(n)&&(e.length&&(e+="&"),e+=encodeURIComponent(n)+"="+encodeURIComponent(t[n]));return e}function kN(t){let e={},n=t.split("&");for(let i=0,r=n.length;i<r;i++){let s=n[i].split("=");e[decodeURIComponent(s[0])]=decodeURIComponent(s[1])}return e}class BN extends Error{constructor(e,n,i){super(e),this.description=n,this.context=i,this.type="TransportError"}}class Mp extends Ft{constructor(e){super(),this.writable=!1,Zc(this,e),this.opts=e,this.query=e.query,this.socket=e.socket,this.supportsBinary=!e.forceBase64}onError(e,n,i){return super.emitReserved("error",new BN(e,n,i)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(e){this.readyState==="open"&&this.write(e)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(e){const n=Sp(e,this.socket.binaryType);this.onPacket(n)}onPacket(e){super.emitReserved("packet",e)}onClose(e){this.readyState="closed",super.emitReserved("close",e)}pause(e){}createUri(e,n={}){return e+"://"+this._hostname()+this._port()+this.opts.path+this._query(n)}_hostname(){const e=this.opts.hostname;return e.indexOf(":")===-1?e:"["+e+"]"}_port(){return this.opts.port&&(this.opts.secure&&Number(this.opts.port)!==443||!this.opts.secure&&Number(this.opts.port)!==80)?":"+this.opts.port:""}_query(e){const n=FN(e);return n.length?"?"+n:""}}class zN extends Mp{constructor(){super(...arguments),this._polling=!1}get name(){return"polling"}doOpen(){this._poll()}pause(e){this.readyState="pausing";const n=()=>{this.readyState="paused",e()};if(this._polling||!this.writable){let i=0;this._polling&&(i++,this.once("pollComplete",function(){--i||n()})),this.writable||(i++,this.once("drain",function(){--i||n()}))}else n()}_poll(){this._polling=!0,this.doPoll(),this.emitReserved("poll")}onData(e){const n=i=>{if(this.readyState==="opening"&&i.type==="open"&&this.onOpen(),i.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(i)};AN(e,this.socket.binaryType).forEach(n),this.readyState!=="closed"&&(this._polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this._poll())}doClose(){const e=()=>{this.write([{type:"close"}])};this.readyState==="open"?e():this.once("open",e)}write(e){this.writable=!1,TN(e,n=>{this.doWrite(n,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){const e=this.opts.secure?"https":"http",n=this.query||{};return this.opts.timestampRequests!==!1&&(n[this.opts.timestampParam]=V_()),!this.supportsBinary&&!n.sid&&(n.b64=1),this.createUri(e,n)}}let j_=!1;try{j_=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const HN=j_;function GN(){}class VN extends zN{constructor(e){if(super(e),typeof location<"u"){const n=location.protocol==="https:";let i=location.port;i||(i=n?"443":"80"),this.xd=typeof location<"u"&&e.hostname!==location.hostname||i!==e.port}}doWrite(e,n){const i=this.request({method:"POST",data:e});i.on("success",n),i.on("error",(r,s)=>{this.onError("xhr post error",r,s)})}doPoll(){const e=this.request();e.on("data",this.onData.bind(this)),e.on("error",(n,i)=>{this.onError("xhr poll error",n,i)}),this.pollXhr=e}}class Ti extends Ft{constructor(e,n,i){super(),this.createRequest=e,Zc(this,i),this._opts=i,this._method=i.method||"GET",this._uri=n,this._data=i.data!==void 0?i.data:null,this._create()}_create(){var e;const n=G_(this._opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");n.xdomain=!!this._opts.xd;const i=this._xhr=this.createRequest(n);try{i.open(this._method,this._uri,!0);try{if(this._opts.extraHeaders){i.setDisableHeaderCheck&&i.setDisableHeaderCheck(!0);for(let r in this._opts.extraHeaders)this._opts.extraHeaders.hasOwnProperty(r)&&i.setRequestHeader(r,this._opts.extraHeaders[r])}}catch{}if(this._method==="POST")try{i.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{i.setRequestHeader("Accept","*/*")}catch{}(e=this._opts.cookieJar)===null||e===void 0||e.addCookies(i),"withCredentials"in i&&(i.withCredentials=this._opts.withCredentials),this._opts.requestTimeout&&(i.timeout=this._opts.requestTimeout),i.onreadystatechange=()=>{var r;i.readyState===3&&((r=this._opts.cookieJar)===null||r===void 0||r.parseCookies(i.getResponseHeader("set-cookie"))),i.readyState===4&&(i.status===200||i.status===1223?this._onLoad():this.setTimeoutFn(()=>{this._onError(typeof i.status=="number"?i.status:0)},0))},i.send(this._data)}catch(r){this.setTimeoutFn(()=>{this._onError(r)},0);return}typeof document<"u"&&(this._index=Ti.requestsCount++,Ti.requests[this._index]=this)}_onError(e){this.emitReserved("error",e,this._xhr),this._cleanup(!0)}_cleanup(e){if(!(typeof this._xhr>"u"||this._xhr===null)){if(this._xhr.onreadystatechange=GN,e)try{this._xhr.abort()}catch{}typeof document<"u"&&delete Ti.requests[this._index],this._xhr=null}}_onLoad(){const e=this._xhr.responseText;e!==null&&(this.emitReserved("data",e),this.emitReserved("success"),this._cleanup())}abort(){this._cleanup()}}Ti.requestsCount=0;Ti.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",u0);else if(typeof addEventListener=="function"){const t="onpagehide"in $n?"pagehide":"unload";addEventListener(t,u0,!1)}}function u0(){for(let t in Ti.requests)Ti.requests.hasOwnProperty(t)&&Ti.requests[t].abort()}const jN=function(){const t=W_({xdomain:!1});return t&&t.responseType!==null}();class WN extends VN{constructor(e){super(e);const n=e&&e.forceBase64;this.supportsBinary=jN&&!n}request(e={}){return Object.assign(e,{xd:this.xd},this.opts),new Ti(W_,this.uri(),e)}}function W_(t){const e=t.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!e||HN))return new XMLHttpRequest}catch{}if(!e)try{return new $n[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}const X_=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class XN extends Mp{get name(){return"websocket"}doOpen(){const e=this.uri(),n=this.opts.protocols,i=X_?{}:G_(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(i.headers=this.opts.extraHeaders);try{this.ws=this.createSocket(e,n,i)}catch(r){return this.emitReserved("error",r)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=e=>this.onClose({description:"websocket connection closed",context:e}),this.ws.onmessage=e=>this.onData(e.data),this.ws.onerror=e=>this.onError("websocket error",e)}write(e){this.writable=!1;for(let n=0;n<e.length;n++){const i=e[n],r=n===e.length-1;yp(i,this.supportsBinary,s=>{try{this.doWrite(i,s)}catch{}r&&Kc(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.onerror=()=>{},this.ws.close(),this.ws=null)}uri(){const e=this.opts.secure?"wss":"ws",n=this.query||{};return this.opts.timestampRequests&&(n[this.opts.timestampParam]=V_()),this.supportsBinary||(n.b64=1),this.createUri(e,n)}}const ld=$n.WebSocket||$n.MozWebSocket;class qN extends XN{createSocket(e,n,i){return X_?new ld(e,n,i):n?new ld(e,n):new ld(e)}doWrite(e,n){this.ws.send(n)}}class YN extends Mp{get name(){return"webtransport"}doOpen(){try{this._transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name])}catch(e){return this.emitReserved("error",e)}this._transport.closed.then(()=>{this.onClose()}).catch(e=>{this.onError("webtransport error",e)}),this._transport.ready.then(()=>{this._transport.createBidirectionalStream().then(e=>{const n=RN(Number.MAX_SAFE_INTEGER,this.socket.binaryType),i=e.readable.pipeThrough(n).getReader(),r=CN();r.readable.pipeTo(e.writable),this._writer=r.writable.getWriter();const s=()=>{i.read().then(({done:o,value:l})=>{o||(this.onPacket(l),s())}).catch(o=>{})};s();const a={type:"open"};this.query.sid&&(a.data=`{"sid":"${this.query.sid}"}`),this._writer.write(a).then(()=>this.onOpen())})})}write(e){this.writable=!1;for(let n=0;n<e.length;n++){const i=e[n],r=n===e.length-1;this._writer.write(i).then(()=>{r&&Kc(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var e;(e=this._transport)===null||e===void 0||e.close()}}const $N={websocket:qN,webtransport:YN,polling:WN},KN=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,ZN=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function Qh(t){if(t.length>8e3)throw"URI too long";const e=t,n=t.indexOf("["),i=t.indexOf("]");n!=-1&&i!=-1&&(t=t.substring(0,n)+t.substring(n,i).replace(/:/g,";")+t.substring(i,t.length));let r=KN.exec(t||""),s={},a=14;for(;a--;)s[ZN[a]]=r[a]||"";return n!=-1&&i!=-1&&(s.source=e,s.host=s.host.substring(1,s.host.length-1).replace(/;/g,":"),s.authority=s.authority.replace("[","").replace("]","").replace(/;/g,":"),s.ipv6uri=!0),s.pathNames=QN(s,s.path),s.queryKey=JN(s,s.query),s}function QN(t,e){const n=/\/{2,9}/g,i=e.replace(n,"/").split("/");return(e.slice(0,1)=="/"||e.length===0)&&i.splice(0,1),e.slice(-1)=="/"&&i.splice(i.length-1,1),i}function JN(t,e){const n={};return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(i,r,s){r&&(n[r]=s)}),n}const Jh=typeof addEventListener=="function"&&typeof removeEventListener=="function",Vl=[];Jh&&addEventListener("offline",()=>{Vl.forEach(t=>t())},!1);let q_=class Ms extends Ft{constructor(e,n={}){var i,r;if(super(),this.binaryType=PN,this.writeBuffer=[],this._prevBufferLen=0,this._upgrades=[],this._pingInterval=-1,this._pingTimeout=-1,this._maxPayload=-1,this._pingTimeoutTime=1/0,e&&typeof e=="object"&&(n=e,e=null),e){const s=Qh(e);n.hostname=s.host,n.secure=s.protocol==="https"||s.protocol==="wss",n.port=s.port,s.query&&(n.query=s.query)}else n.host&&(n.hostname=Qh(n.host).host);if(Zc(this,n),this.secure=n.secure!=null?n.secure:typeof location<"u"&&location.protocol==="https:",n.hostname&&!n.port&&(n.port=this.secure?"443":"80"),this.hostname=n.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=n.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),n.transportImplementations&&n.transports)throw new Error("specifying both 'transportImplementations' and 'transports' options is not supported");n.transportImplementations||!((i=n.transports)===null||i===void 0)&&i.length&&typeof n.transports[0]=="function"?(this.transports=[],this._transportsByName=Object.create(null),((r=n.transportImplementations)!==null&&r!==void 0?r:n.transports).forEach(s=>{const a=s.prototype.name;this.transports.push(a),this._transportsByName[a]=s})):(this.transports=n.transports?[...n.transports]:["polling","websocket","webtransport"],this._transportsByName=$N),this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},n),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=kN(this.opts.query)),Jh&&(this.opts.closeOnBeforeunload&&(this._beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this._beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this._offlineEventListener=()=>{this._onClose("transport close",{description:"network connection lost"})},Vl.push(this._offlineEventListener))),this.opts.withCredentials&&(this._cookieJar=void 0),this._open()}createTransport(e){const n=Object.assign({},this.opts.query);n.EIO=H_,n.transport=e,this.id&&(n.sid=this.id);const i=Object.assign({},this.opts,{query:n,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[e]);return new this._transportsByName[e](i)}_open(){if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}const e=this.opts.rememberUpgrade&&Ms.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1?"websocket":this.transports[0];this.readyState="opening";const n=this.createTransport(e);n.open(),this.setTransport(n)}setTransport(e){this.transport&&this.transport.removeAllListeners(),this.transport=e,e.on("drain",this._onDrain.bind(this)).on("packet",this._onPacket.bind(this)).on("error",this._onError.bind(this)).on("close",n=>this._onClose("transport close",n))}_probe(e){let n=this.createTransport(e),i=!1;Ms.priorWebsocketSuccess=!1;const r=()=>{i||(n.send([{type:"ping",data:"probe"}]),n.once("packet",p=>{if(!i)if(p.type==="pong"&&p.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",n),!n)return;Ms.priorWebsocketSuccess=n.name==="websocket",this.transport.pause(()=>{i||this.readyState!=="closed"&&(h(),this.setTransport(n),n.send([{type:"upgrade"}]),this.emitReserved("upgrade",n),n=null,this.upgrading=!1,this.flush())})}else{const f=new Error("probe error");f.transport=n.name,this.emitReserved("upgradeError",f)}}))};function s(){i||(i=!0,h(),n.close(),n=null)}const a=p=>{const f=new Error("probe error: "+p);f.transport=n.name,s(),this.emitReserved("upgradeError",f)};function o(){a("transport closed")}function l(){a("socket closed")}function u(p){n&&p.name!==n.name&&s()}const h=()=>{n.removeListener("open",r),n.removeListener("error",a),n.removeListener("close",o),this.off("close",l),this.off("upgrading",u)};n.once("open",r),n.once("error",a),n.once("close",o),this.once("close",l),this.once("upgrading",u),this._upgrades.indexOf("webtransport")!==-1&&e!=="webtransport"?this.setTimeoutFn(()=>{i||n.open()},200):n.open()}onOpen(){if(this.readyState="open",Ms.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush(),this.readyState==="open"&&this.opts.upgrade)for(let e=0;e<this._upgrades.length;e++)this._probe(this._upgrades[e])}_onPacket(e){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",e),this.emitReserved("heartbeat"),e.type){case"open":this.onHandshake(JSON.parse(e.data));break;case"ping":this._sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong"),this._resetPingTimeout();break;case"error":const n=new Error("server error");n.code=e.data,this._onError(n);break;case"message":this.emitReserved("data",e.data),this.emitReserved("message",e.data);break}}onHandshake(e){this.emitReserved("handshake",e),this.id=e.sid,this.transport.query.sid=e.sid,this._upgrades=this._filterUpgrades(e.upgrades),this._pingInterval=e.pingInterval,this._pingTimeout=e.pingTimeout,this._maxPayload=e.maxPayload,this.onOpen(),this.readyState!=="closed"&&this._resetPingTimeout()}_resetPingTimeout(){this.clearTimeoutFn(this._pingTimeoutTimer);const e=this._pingInterval+this._pingTimeout;this._pingTimeoutTime=Date.now()+e,this._pingTimeoutTimer=this.setTimeoutFn(()=>{this._onClose("ping timeout")},e),this.opts.autoUnref&&this._pingTimeoutTimer.unref()}_onDrain(){this.writeBuffer.splice(0,this._prevBufferLen),this._prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const e=this._getWritablePackets();this.transport.send(e),this._prevBufferLen=e.length,this.emitReserved("flush")}}_getWritablePackets(){if(!(this._maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let n=1;for(let i=0;i<this.writeBuffer.length;i++){const r=this.writeBuffer[i].data;if(r&&(n+=UN(r)),i>0&&n>this._maxPayload)return this.writeBuffer.slice(0,i);n+=2}return this.writeBuffer}_hasPingExpired(){if(!this._pingTimeoutTime)return!0;const e=Date.now()>this._pingTimeoutTime;return e&&(this._pingTimeoutTime=0,Kc(()=>{this._onClose("ping timeout")},this.setTimeoutFn)),e}write(e,n,i){return this._sendPacket("message",e,n,i),this}send(e,n,i){return this._sendPacket("message",e,n,i),this}_sendPacket(e,n,i,r){if(typeof n=="function"&&(r=n,n=void 0),typeof i=="function"&&(r=i,i=null),this.readyState==="closing"||this.readyState==="closed")return;i=i||{},i.compress=i.compress!==!1;const s={type:e,data:n,options:i};this.emitReserved("packetCreate",s),this.writeBuffer.push(s),r&&this.once("flush",r),this.flush()}close(){const e=()=>{this._onClose("forced close"),this.transport.close()},n=()=>{this.off("upgrade",n),this.off("upgradeError",n),e()},i=()=>{this.once("upgrade",n),this.once("upgradeError",n)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?i():e()}):this.upgrading?i():e()),this}_onError(e){if(Ms.priorWebsocketSuccess=!1,this.opts.tryAllTransports&&this.transports.length>1&&this.readyState==="opening")return this.transports.shift(),this._open();this.emitReserved("error",e),this._onClose("transport error",e)}_onClose(e,n){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing"){if(this.clearTimeoutFn(this._pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),Jh&&(this._beforeunloadEventListener&&removeEventListener("beforeunload",this._beforeunloadEventListener,!1),this._offlineEventListener)){const i=Vl.indexOf(this._offlineEventListener);i!==-1&&Vl.splice(i,1)}this.readyState="closed",this.id=null,this.emitReserved("close",e,n),this.writeBuffer=[],this._prevBufferLen=0}}_filterUpgrades(e){const n=[];for(let i=0;i<e.length;i++)~this.transports.indexOf(e[i])&&n.push(e[i]);return n}};q_.protocol=H_;function e2(t,e="",n){let i=t;n=n||typeof location<"u"&&location,t==null&&(t=n.protocol+"//"+n.host),typeof t=="string"&&(t.charAt(0)==="/"&&(t.charAt(1)==="/"?t=n.protocol+t:t=n.host+t),/^(https?|wss?):\/\//.test(t)||(typeof n<"u"?t=n.protocol+"//"+t:t="https://"+t),i=Qh(t)),i.port||(/^(http|ws)$/.test(i.protocol)?i.port="80":/^(http|ws)s$/.test(i.protocol)&&(i.port="443")),i.path=i.path||"/";const s=i.host.indexOf(":")!==-1?"["+i.host+"]":i.host;return i.id=i.protocol+"://"+s+":"+i.port+e,i.href=i.protocol+"://"+s+(n&&n.port===i.port?"":":"+i.port),i}const t2=typeof ArrayBuffer=="function",n2=t=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(t):t.buffer instanceof ArrayBuffer,Y_=Object.prototype.toString,i2=typeof Blob=="function"||typeof Blob<"u"&&Y_.call(Blob)==="[object BlobConstructor]",r2=typeof File=="function"||typeof File<"u"&&Y_.call(File)==="[object FileConstructor]";function Ep(t){return t2&&(t instanceof ArrayBuffer||n2(t))||i2&&t instanceof Blob||r2&&t instanceof File}function jl(t,e){if(!t||typeof t!="object")return!1;if(Array.isArray(t)){for(let n=0,i=t.length;n<i;n++)if(jl(t[n]))return!0;return!1}if(Ep(t))return!0;if(t.toJSON&&typeof t.toJSON=="function"&&arguments.length===1)return jl(t.toJSON(),!0);for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&jl(t[n]))return!0;return!1}function s2(t){const e=[],n=t.data,i=t;return i.data=Wl(n,e),i.attachments=e.length,{packet:i,buffers:e}}function Wl(t,e,n){if(!t)return t;if(Ep(t)){const i={_placeholder:!0,num:e.length};return e.push(t),i}else if(Array.isArray(t)){const i=new Array(t.length);for(let r=0;r<t.length;r++)i[r]=Wl(t[r],e);return i}else if(typeof t=="object"&&!(t instanceof Date)){if(t.toJSON&&typeof t.toJSON=="function"&&!n)return Wl(t.toJSON(),e,!0);const i={};for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&(i[r]=Wl(t[r],e));return i}return t}function a2(t,e){return t.data=ef(t.data,e),delete t.attachments,t}function ef(t,e){if(!t)return t;if(t&&t._placeholder===!0){if(typeof t.num=="number"&&t.num>=0&&t.num<e.length)return e[t.num];throw new Error("illegal attachments")}else if(Array.isArray(t))for(let n=0;n<t.length;n++)t[n]=ef(t[n],e);else if(typeof t=="object")for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&(t[n]=ef(t[n],e));return t}const o2=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"];var Ke;(function(t){t[t.CONNECT=0]="CONNECT",t[t.DISCONNECT=1]="DISCONNECT",t[t.EVENT=2]="EVENT",t[t.ACK=3]="ACK",t[t.CONNECT_ERROR=4]="CONNECT_ERROR",t[t.BINARY_EVENT=5]="BINARY_EVENT",t[t.BINARY_ACK=6]="BINARY_ACK"})(Ke||(Ke={}));class l2{constructor(e){this.replacer=e}encode(e){return(e.type===Ke.EVENT||e.type===Ke.ACK)&&jl(e)?this.encodeAsBinary({type:e.type===Ke.EVENT?Ke.BINARY_EVENT:Ke.BINARY_ACK,nsp:e.nsp,data:e.data,id:e.id}):[this.encodeAsString(e)]}encodeAsString(e){let n=""+e.type;return(e.type===Ke.BINARY_EVENT||e.type===Ke.BINARY_ACK)&&(n+=e.attachments+"-"),e.nsp&&e.nsp!=="/"&&(n+=e.nsp+","),e.id!=null&&(n+=e.id),e.data!=null&&(n+=JSON.stringify(e.data,this.replacer)),n}encodeAsBinary(e){const n=s2(e),i=this.encodeAsString(n.packet),r=n.buffers;return r.unshift(i),r}}class wp extends Ft{constructor(e){super(),this.opts=Object.assign({reviver:void 0,maxAttachments:10},typeof e=="function"?{reviver:e}:e)}add(e){let n;if(typeof e=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");n=this.decodeString(e);const i=n.type===Ke.BINARY_EVENT;i||n.type===Ke.BINARY_ACK?(n.type=i?Ke.EVENT:Ke.ACK,this.reconstructor=new c2(n)):super.emitReserved("decoded",n)}else if(Ep(e)||e.base64)if(this.reconstructor)n=this.reconstructor.takeBinaryData(e),n&&(this.reconstructor=null,super.emitReserved("decoded",n));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+e)}decodeString(e){let n=0;const i={type:Number(e.charAt(0))};if(Ke[i.type]===void 0)throw new Error("unknown packet type "+i.type);if(i.type===Ke.BINARY_EVENT||i.type===Ke.BINARY_ACK){const s=n+1;for(;e.charAt(++n)!=="-"&&n!=e.length;);const a=e.substring(s,n);if(a!=Number(a)||e.charAt(n)!=="-")throw new Error("Illegal attachments");const o=Number(a);if(!u2(o)||o<1)throw new Error("Illegal attachments");if(o>this.opts.maxAttachments)throw new Error("too many attachments");i.attachments=o}if(e.charAt(n+1)==="/"){const s=n+1;for(;++n&&!(e.charAt(n)===","||n===e.length););i.nsp=e.substring(s,n)}else i.nsp="/";const r=e.charAt(n+1);if(r!==""&&Number(r)==r){const s=n+1;for(;++n;){const a=e.charAt(n);if(a==null||Number(a)!=a){--n;break}if(n===e.length)break}i.id=Number(e.substring(s,n+1))}if(e.charAt(++n)){const s=this.tryParse(e.substr(n));if(wp.isPayloadValid(i.type,s))i.data=s;else throw new Error("invalid payload")}return i}tryParse(e){try{return JSON.parse(e,this.opts.reviver)}catch{return!1}}static isPayloadValid(e,n){switch(e){case Ke.CONNECT:return d0(n);case Ke.DISCONNECT:return n===void 0;case Ke.CONNECT_ERROR:return typeof n=="string"||d0(n);case Ke.EVENT:case Ke.BINARY_EVENT:return Array.isArray(n)&&(typeof n[0]=="number"||typeof n[0]=="string"&&o2.indexOf(n[0])===-1);case Ke.ACK:case Ke.BINARY_ACK:return Array.isArray(n)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class c2{constructor(e){this.packet=e,this.buffers=[],this.reconPack=e}takeBinaryData(e){if(this.buffers.push(e),this.buffers.length===this.reconPack.attachments){const n=a2(this.reconPack,this.buffers);return this.finishedReconstruction(),n}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}const u2=Number.isInteger||function(t){return typeof t=="number"&&isFinite(t)&&Math.floor(t)===t};function d0(t){return Object.prototype.toString.call(t)==="[object Object]"}const d2=Object.freeze(Object.defineProperty({__proto__:null,Decoder:wp,Encoder:l2,get PacketType(){return Ke}},Symbol.toStringTag,{value:"Module"}));function li(t,e,n){return t.on(e,n),function(){t.off(e,n)}}const h2=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class $_ extends Ft{constructor(e,n,i){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=e,this.nsp=n,i&&i.auth&&(this.auth=i.auth),this._opts=Object.assign({},i),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const e=this.io;this.subs=[li(e,"open",this.onopen.bind(this)),li(e,"packet",this.onpacket.bind(this)),li(e,"error",this.onerror.bind(this)),li(e,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...e){return e.unshift("message"),this.emit.apply(this,e),this}emit(e,...n){var i,r,s;if(h2.hasOwnProperty(e))throw new Error('"'+e.toString()+'" is a reserved event name');if(n.unshift(e),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(n),this;const a={type:Ke.EVENT,data:n};if(a.options={},a.options.compress=this.flags.compress!==!1,typeof n[n.length-1]=="function"){const h=this.ids++,p=n.pop();this._registerAckCallback(h,p),a.id=h}const o=(r=(i=this.io.engine)===null||i===void 0?void 0:i.transport)===null||r===void 0?void 0:r.writable,l=this.connected&&!(!((s=this.io.engine)===null||s===void 0)&&s._hasPingExpired());return this.flags.volatile&&!o||(l?(this.notifyOutgoingListeners(a),this.packet(a)):this.sendBuffer.push(a)),this.flags={},this}_registerAckCallback(e,n){var i;const r=(i=this.flags.timeout)!==null&&i!==void 0?i:this._opts.ackTimeout;if(r===void 0){this.acks[e]=n;return}const s=this.io.setTimeoutFn(()=>{delete this.acks[e];for(let o=0;o<this.sendBuffer.length;o++)this.sendBuffer[o].id===e&&this.sendBuffer.splice(o,1);n.call(this,new Error("operation has timed out"))},r),a=(...o)=>{this.io.clearTimeoutFn(s),n.apply(this,o)};a.withError=!0,this.acks[e]=a}emitWithAck(e,...n){return new Promise((i,r)=>{const s=(a,o)=>a?r(a):i(o);s.withError=!0,n.push(s),this.emit(e,...n)})}_addToQueue(e){let n;typeof e[e.length-1]=="function"&&(n=e.pop());const i={id:this._queueSeq++,tryCount:0,pending:!1,args:e,flags:Object.assign({fromQueue:!0},this.flags)};e.push((r,...s)=>(this._queue[0],r!==null?i.tryCount>this._opts.retries&&(this._queue.shift(),n&&n(r)):(this._queue.shift(),n&&n(null,...s)),i.pending=!1,this._drainQueue())),this._queue.push(i),this._drainQueue()}_drainQueue(e=!1){if(!this.connected||this._queue.length===0)return;const n=this._queue[0];n.pending&&!e||(n.pending=!0,n.tryCount++,this.flags=n.flags,this.emit.apply(this,n.args))}packet(e){e.nsp=this.nsp,this.io._packet(e)}onopen(){typeof this.auth=="function"?this.auth(e=>{this._sendConnectPacket(e)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(e){this.packet({type:Ke.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},e):e})}onerror(e){this.connected||this.emitReserved("connect_error",e)}onclose(e,n){this.connected=!1,delete this.id,this.emitReserved("disconnect",e,n),this._clearAcks()}_clearAcks(){Object.keys(this.acks).forEach(e=>{if(!this.sendBuffer.some(i=>String(i.id)===e)){const i=this.acks[e];delete this.acks[e],i.withError&&i.call(this,new Error("socket has been disconnected"))}})}onpacket(e){if(e.nsp===this.nsp)switch(e.type){case Ke.CONNECT:e.data&&e.data.sid?this.onconnect(e.data.sid,e.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case Ke.EVENT:case Ke.BINARY_EVENT:this.onevent(e);break;case Ke.ACK:case Ke.BINARY_ACK:this.onack(e);break;case Ke.DISCONNECT:this.ondisconnect();break;case Ke.CONNECT_ERROR:this.destroy();const i=new Error(e.data.message);i.data=e.data.data,this.emitReserved("connect_error",i);break}}onevent(e){const n=e.data||[];e.id!=null&&n.push(this.ack(e.id)),this.connected?this.emitEvent(n):this.receiveBuffer.push(Object.freeze(n))}emitEvent(e){if(this._anyListeners&&this._anyListeners.length){const n=this._anyListeners.slice();for(const i of n)i.apply(this,e)}super.emit.apply(this,e),this._pid&&e.length&&typeof e[e.length-1]=="string"&&(this._lastOffset=e[e.length-1])}ack(e){const n=this;let i=!1;return function(...r){i||(i=!0,n.packet({type:Ke.ACK,id:e,data:r}))}}onack(e){const n=this.acks[e.id];typeof n=="function"&&(delete this.acks[e.id],n.withError&&e.data.unshift(null),n.apply(this,e.data))}onconnect(e,n){this.id=e,this.recovered=n&&this._pid===n,this._pid=n,this.connected=!0,this.emitBuffered(),this._drainQueue(!0),this.emitReserved("connect")}emitBuffered(){this.receiveBuffer.forEach(e=>this.emitEvent(e)),this.receiveBuffer=[],this.sendBuffer.forEach(e=>{this.notifyOutgoingListeners(e),this.packet(e)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(e=>e()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:Ke.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(e){return this.flags.compress=e,this}get volatile(){return this.flags.volatile=!0,this}timeout(e){return this.flags.timeout=e,this}onAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(e),this}prependAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(e),this}offAny(e){if(!this._anyListeners)return this;if(e){const n=this._anyListeners;for(let i=0;i<n.length;i++)if(e===n[i])return n.splice(i,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(e),this}prependAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(e),this}offAnyOutgoing(e){if(!this._anyOutgoingListeners)return this;if(e){const n=this._anyOutgoingListeners;for(let i=0;i<n.length;i++)if(e===n[i])return n.splice(i,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(e){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const n=this._anyOutgoingListeners.slice();for(const i of n)i.apply(this,e.data)}}}function ha(t){t=t||{},this.ms=t.min||100,this.max=t.max||1e4,this.factor=t.factor||2,this.jitter=t.jitter>0&&t.jitter<=1?t.jitter:0,this.attempts=0}ha.prototype.duration=function(){var t=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),n=Math.floor(e*this.jitter*t);t=Math.floor(e*10)&1?t+n:t-n}return Math.min(t,this.max)|0};ha.prototype.reset=function(){this.attempts=0};ha.prototype.setMin=function(t){this.ms=t};ha.prototype.setMax=function(t){this.max=t};ha.prototype.setJitter=function(t){this.jitter=t};class tf extends Ft{constructor(e,n){var i;super(),this.nsps={},this.subs=[],e&&typeof e=="object"&&(n=e,e=void 0),n=n||{},n.path=n.path||"/socket.io",this.opts=n,Zc(this,n),this.reconnection(n.reconnection!==!1),this.reconnectionAttempts(n.reconnectionAttempts||1/0),this.reconnectionDelay(n.reconnectionDelay||1e3),this.reconnectionDelayMax(n.reconnectionDelayMax||5e3),this.randomizationFactor((i=n.randomizationFactor)!==null&&i!==void 0?i:.5),this.backoff=new ha({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(n.timeout==null?2e4:n.timeout),this._readyState="closed",this.uri=e;const r=n.parser||d2;this.encoder=new r.Encoder,this.decoder=new r.Decoder,this._autoConnect=n.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(e){return arguments.length?(this._reconnection=!!e,e||(this.skipReconnect=!0),this):this._reconnection}reconnectionAttempts(e){return e===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=e,this)}reconnectionDelay(e){var n;return e===void 0?this._reconnectionDelay:(this._reconnectionDelay=e,(n=this.backoff)===null||n===void 0||n.setMin(e),this)}randomizationFactor(e){var n;return e===void 0?this._randomizationFactor:(this._randomizationFactor=e,(n=this.backoff)===null||n===void 0||n.setJitter(e),this)}reconnectionDelayMax(e){var n;return e===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=e,(n=this.backoff)===null||n===void 0||n.setMax(e),this)}timeout(e){return arguments.length?(this._timeout=e,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(e){if(~this._readyState.indexOf("open"))return this;this.engine=new q_(this.uri,this.opts);const n=this.engine,i=this;this._readyState="opening",this.skipReconnect=!1;const r=li(n,"open",function(){i.onopen(),e&&e()}),s=o=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",o),e?e(o):this.maybeReconnectOnOpen()},a=li(n,"error",s);if(this._timeout!==!1){const o=this._timeout,l=this.setTimeoutFn(()=>{r(),s(new Error("timeout")),n.close()},o);this.opts.autoUnref&&l.unref(),this.subs.push(()=>{this.clearTimeoutFn(l)})}return this.subs.push(r),this.subs.push(a),this}connect(e){return this.open(e)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const e=this.engine;this.subs.push(li(e,"ping",this.onping.bind(this)),li(e,"data",this.ondata.bind(this)),li(e,"error",this.onerror.bind(this)),li(e,"close",this.onclose.bind(this)),li(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(e){try{this.decoder.add(e)}catch(n){this.onclose("parse error",n)}}ondecoded(e){Kc(()=>{this.emitReserved("packet",e)},this.setTimeoutFn)}onerror(e){this.emitReserved("error",e)}socket(e,n){let i=this.nsps[e];return i?this._autoConnect&&!i.active&&i.connect():(i=new $_(this,e,n),this.nsps[e]=i),i}_destroy(e){const n=Object.keys(this.nsps);for(const i of n)if(this.nsps[i].active)return;this._close()}_packet(e){const n=this.encoder.encode(e);for(let i=0;i<n.length;i++)this.engine.write(n[i],e.options)}cleanup(){this.subs.forEach(e=>e()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close")}disconnect(){return this._close()}onclose(e,n){var i;this.cleanup(),(i=this.engine)===null||i===void 0||i.close(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",e,n),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const e=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const n=this.backoff.duration();this._reconnecting=!0;const i=this.setTimeoutFn(()=>{e.skipReconnect||(this.emitReserved("reconnect_attempt",e.backoff.attempts),!e.skipReconnect&&e.open(r=>{r?(e._reconnecting=!1,e.reconnect(),this.emitReserved("reconnect_error",r)):e.onreconnect()}))},n);this.opts.autoUnref&&i.unref(),this.subs.push(()=>{this.clearTimeoutFn(i)})}}onreconnect(){const e=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",e)}}const Na={};function Xl(t,e){typeof t=="object"&&(e=t,t=void 0),e=e||{};const n=e2(t,e.path||"/socket.io"),i=n.source,r=n.id,s=n.path,a=Na[r]&&s in Na[r].nsps,o=e.forceNew||e["force new connection"]||e.multiplex===!1||a;let l;return o?l=new tf(i,e):(Na[r]||(Na[r]=new tf(i,e)),l=Na[r]),n.query&&!e.query&&(e.query=n.queryKey),l.socket(n.path,e)}Object.assign(Xl,{Manager:tf,Socket:$_,io:Xl,connect:Xl});let Ut=null;const f2=U_((t,e)=>({isConnected:!1,activeRoom:null,connect:(n,i)=>{Ut&&Ut.connected||(Ut=Xl(n,{transports:["websocket","polling"],autoConnect:!0,reconnection:!0,reconnectionAttempts:5,reconnectionDelay:2e3}),Ut.on("connect",()=>{console.log(`[Socket.IO] Connected → ID: ${Ut.id}`),t({isConnected:!0})}),Ut.on("slot:status_changed",({slotId:r,status:s,locationId:a})=>{console.log(`[Socket.IO Event] slot:status_changed → slotId: ${r} | status: ${s}`),a&&i&&i(a,r,s)}),Ut.on("disconnect",r=>{console.log(`[Socket.IO] Disconnected → ${r}`),t({isConnected:!1})}),Ut.on("connect_error",r=>{console.warn(`[Socket.IO] Connection error (server may be offline): ${r.message}`),t({isConnected:!1})}))},joinLocationRoom:n=>{!Ut||!Ut.connected||(Ut.emit("join:location",n),t({activeRoom:n}),console.log(`[Socket.IO] Joined location room: ${n}`))},leaveLocationRoom:n=>{!Ut||!Ut.connected||(Ut.emit("leave:location",n),t({activeRoom:null}))},softHoldSlot:(n,i,r)=>{!Ut||!Ut.connected||Ut.emit("slot:soft_hold",{locationId:n,slotId:i,userId:r})},disconnect:()=>{Ut&&(Ut.disconnect(),Ut=null,t({isConnected:!1,activeRoom:null}))}}));function p2(){var g,y,M,A;const[t,e]=ke.useState("home"),[n,i]=ke.useState(null),[r,s]=ke.useState(null),[a,o]=ke.useState(!1),[l,u]=ke.useState(null),{addBooking:h,user:p,updateSingleSlotStatus:f}=$c(),{connect:m,disconnect:_}=f2();ke.useEffect(()=>(m("http://localhost:5001",(T,v,b)=>{f(T,v,b)}),()=>{_()}),[m,_,f]);const S=T=>{alert(`Signed in as: ${p.name} (${p.email})
Registered Vehicle: ${p.vehicleModel} (${p.vehicleNumber})
Wallet Balance: ₹${p.walletBalance}`)},x=T=>{i(T),e("location-detail"),window.scrollTo({top:0,behavior:"smooth"})},d=async()=>{var T,v,b;if(r){o(!0);try{const R=(await _p.createBooking({locationId:(T=r.location)==null?void 0:T.id,locationName:(v=r.location)==null?void 0:v.name,slotNumber:(b=r.slot)==null?void 0:b.slotNumber,startTime:new Date().toISOString(),durationMinutes:(r.duration||2)*60,totalAmount:r.totalAmount||240,vehicleNumber:p.vehicleNumber})).booking;h(R),o(!1),s(null),u(R)}catch{o(!1),alert("Payment simulation encountered an issue. Please try again.")}}};return c.jsxs("div",{className:"min-h-screen bg-[#080C14] text-slate-100 flex flex-col bg-grid-pattern selection:bg-emerald-500 selection:text-slate-950",children:[c.jsx(nw,{currentView:t,onOpenAuth:S,onNavigate:T=>{e(T),window.scrollTo({top:0,behavior:"smooth"})}}),c.jsxs("main",{className:"flex-1",children:[t==="home"&&c.jsxs("div",{className:"space-y-16",children:[c.jsx(GR,{onReserveSlot:T=>{s({location:{id:"loc_01",name:"Cyber City EV Hub & Multi-Level"},slot:T,duration:2,totalAmount:T.rate*2+15})}}),c.jsx("div",{className:"border-t border-white/[0.06] pt-8",children:c.jsx(a0,{onSelectLocation:x})})]}),t==="explore"&&c.jsx(a0,{onSelectLocation:x}),t==="location-detail"&&n&&c.jsx(vN,{location:n,onBack:()=>e("explore"),onOpenBookingModal:T=>s(T)}),t==="charging"&&c.jsx(_N,{}),t==="admin"&&c.jsx(yN,{}),t==="design-system"&&c.jsx(SN,{})]}),c.jsx(Kh,{isOpen:!!r,onClose:()=>s(null),title:"Confirm Slot Reservation",description:"Verify reservation details before finalizing payment.",footer:c.jsxs(c.Fragment,{children:[c.jsx(et,{variant:"outline",size:"sm",disabled:a,onClick:()=>s(null),children:"Cancel"}),c.jsxs(et,{variant:"primary",size:"sm",isLoading:a,icon:c.jsx(Rv,{className:"w-4 h-4"}),onClick:d,children:["Pay ₹",r==null?void 0:r.totalAmount," via Razorpay"]})]}),children:r&&c.jsxs("div",{className:"space-y-4 py-2 text-sm text-slate-300",children:[c.jsxs("div",{className:"p-4 rounded-xl bg-slate-950/60 border border-white/5 space-y-2.5",children:[c.jsxs("div",{className:"flex justify-between items-center",children:[c.jsx("span",{className:"text-slate-400",children:"Facility:"}),c.jsx("span",{className:"font-semibold text-white",children:(g=r.location)==null?void 0:g.name})]}),c.jsxs("div",{className:"flex justify-between items-center",children:[c.jsx("span",{className:"text-slate-400",children:"Reserved Bay:"}),c.jsx("span",{className:"font-mono font-bold text-emerald-400 text-base",children:(y=r.slot)==null?void 0:y.slotNumber})]}),((M=r.slot)==null?void 0:M.powerKw)>0&&c.jsxs("div",{className:"flex justify-between items-center text-cyan-400",children:[c.jsx("span",{children:"Fast Charger:"}),c.jsxs("span",{className:"font-mono font-bold",children:["⚡ ",(A=r.slot)==null?void 0:A.powerKw," kW CCS-2"]})]}),c.jsxs("div",{className:"flex justify-between items-center",children:[c.jsx("span",{className:"text-slate-400",children:"Duration:"}),c.jsxs("span",{className:"font-semibold text-white",children:[r.duration," Hours"]})]}),c.jsxs("div",{className:"flex justify-between items-center pt-2 border-t border-white/5",children:[c.jsx("span",{className:"text-slate-400",children:"Total Charged:"}),c.jsxs("span",{className:"font-mono font-bold text-white text-lg",children:["₹",r.totalAmount]})]})]}),c.jsxs("div",{className:"p-3 rounded-xl bg-slate-900 border border-white/5 flex items-center gap-3",children:[c.jsx(ep,{className:"w-5 h-5 text-emerald-400 shrink-0"}),c.jsx("div",{className:"text-xs text-slate-400",children:"Secured by Razorpay HMAC-SHA256 signature verification. Physical boom barrier auto-opens on license plate recognition."})]})]})}),c.jsx(Kh,{isOpen:!!l,onClose:()=>u(null),title:"Reservation Confirmed!",description:"Your smart parking bay is locked and awaiting your arrival.",footer:c.jsx(et,{variant:"primary",size:"md",className:"w-full justify-center",onClick:()=>{u(null),e("charging")},children:"Go to EV Charging Station"}),children:l&&c.jsxs("div",{className:"py-4 space-y-4 text-center",children:[c.jsx("div",{className:"w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center mx-auto shadow-glow-emerald",children:c.jsx(Vc,{className:"w-8 h-8 text-emerald-400"})}),c.jsxs("div",{className:"space-y-1",children:[c.jsx("div",{className:"text-xs text-slate-400 uppercase font-mono tracking-widest",children:"Booking Reference ID"}),c.jsx("div",{className:"text-2xl font-black font-mono text-white tracking-wider",children:l.bookingId})]}),c.jsxs("div",{className:"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300 space-y-2 text-left",children:[c.jsxs("div",{className:"flex justify-between",children:[c.jsx("span",{className:"text-slate-400",children:"Slot Assigned:"}),c.jsx("span",{className:"font-mono font-bold text-emerald-400",children:l.slotNumber})]}),c.jsxs("div",{className:"flex justify-between",children:[c.jsx("span",{className:"text-slate-400",children:"Registered Vehicle:"}),c.jsx("span",{className:"font-mono text-white",children:l.vehicleNumber||p.vehicleNumber})]}),c.jsxs("div",{className:"flex justify-between",children:[c.jsx("span",{className:"text-slate-400",children:"Valid From:"}),c.jsx("span",{className:"font-mono text-white",children:new Date(l.startTime).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})})]})]})]})}),c.jsx(iw,{})]})}const K_=document.getElementById("root");if(!K_)throw new Error("Failed to find the root element in index.html");cd.createRoot(K_).render(c.jsx(So.StrictMode,{children:c.jsx(p2,{})}));
