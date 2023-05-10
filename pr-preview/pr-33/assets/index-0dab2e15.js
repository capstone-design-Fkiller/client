import{_ as G,d as L,f as H,i as j,h as A,t as z,k as J,l as B,m as M,s as X,o as Z,n as Q,S as ee,R as b,e as te,q as re,c as O,a as se,r as I,j as m,b as C}from"./index-5478a83e.js";import{L as $,S as ne,B as x}from"./building-5f4291d5.js";import{B as ie,P as ue}from"./index-fd4e317b.js";import{s as ae,i as K}from"./instance-64597158.js";var oe=function(s){G(a,s);function a(i,t){var e;return e=s.call(this)||this,e.client=i,e.options=t,e.trackedProps=[],e.selectError=null,e.bindMethods(),e.setOptions(t),e}var n=a.prototype;return n.bindMethods=function(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)},n.onSubscribe=function(){this.listeners.length===1&&(this.currentQuery.addObserver(this),D(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())},n.onUnsubscribe=function(){this.listeners.length||this.destroy()},n.shouldFetchOnReconnect=function(){return T(this.currentQuery,this.options,this.options.refetchOnReconnect)},n.shouldFetchOnWindowFocus=function(){return T(this.currentQuery,this.options,this.options.refetchOnWindowFocus)},n.destroy=function(){this.listeners=[],this.clearTimers(),this.currentQuery.removeObserver(this)},n.setOptions=function(t,e){var u=this.options,r=this.currentQuery;if(this.options=this.client.defaultQueryObserverOptions(t),typeof this.options.enabled<"u"&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=u.queryKey),this.updateQuery();var c=this.hasListeners();c&&N(this.currentQuery,r,this.options,u)&&this.executeFetch(),this.updateResult(e),c&&(this.currentQuery!==r||this.options.enabled!==u.enabled||this.options.staleTime!==u.staleTime)&&this.updateStaleTimeout();var o=this.computeRefetchInterval();c&&(this.currentQuery!==r||this.options.enabled!==u.enabled||o!==this.currentRefetchInterval)&&this.updateRefetchInterval(o)},n.getOptimisticResult=function(t){var e=this.client.defaultQueryObserverOptions(t),u=this.client.getQueryCache().build(this.client,e);return this.createResult(u,e)},n.getCurrentResult=function(){return this.currentResult},n.trackResult=function(t,e){var u=this,r={},c=function(h){u.trackedProps.includes(h)||u.trackedProps.push(h)};return Object.keys(t).forEach(function(o){Object.defineProperty(r,o,{configurable:!1,enumerable:!0,get:function(){return c(o),t[o]}})}),(e.useErrorBoundary||e.suspense)&&c("error"),r},n.getNextResult=function(t){var e=this;return new Promise(function(u,r){var c=e.subscribe(function(o){o.isFetching||(c(),o.isError&&(t!=null&&t.throwOnError)?r(o.error):u(o))})})},n.getCurrentQuery=function(){return this.currentQuery},n.remove=function(){this.client.getQueryCache().remove(this.currentQuery)},n.refetch=function(t){return this.fetch(L({},t,{meta:{refetchPage:t==null?void 0:t.refetchPage}}))},n.fetchOptimistic=function(t){var e=this,u=this.client.defaultQueryObserverOptions(t),r=this.client.getQueryCache().build(this.client,u);return r.fetch().then(function(){return e.createResult(r,u)})},n.fetch=function(t){var e=this;return this.executeFetch(t).then(function(){return e.updateResult(),e.currentResult})},n.executeFetch=function(t){this.updateQuery();var e=this.currentQuery.fetch(this.options,t);return t!=null&&t.throwOnError||(e=e.catch(H)),e},n.updateStaleTimeout=function(){var t=this;if(this.clearStaleTimeout(),!(j||this.currentResult.isStale||!A(this.options.staleTime))){var e=z(this.currentResult.dataUpdatedAt,this.options.staleTime),u=e+1;this.staleTimeoutId=setTimeout(function(){t.currentResult.isStale||t.updateResult()},u)}},n.computeRefetchInterval=function(){var t;return typeof this.options.refetchInterval=="function"?this.options.refetchInterval(this.currentResult.data,this.currentQuery):(t=this.options.refetchInterval)!=null?t:!1},n.updateRefetchInterval=function(t){var e=this;this.clearRefetchInterval(),this.currentRefetchInterval=t,!(j||this.options.enabled===!1||!A(this.currentRefetchInterval)||this.currentRefetchInterval===0)&&(this.refetchIntervalId=setInterval(function(){(e.options.refetchIntervalInBackground||J.isFocused())&&e.executeFetch()},this.currentRefetchInterval))},n.updateTimers=function(){this.updateStaleTimeout(),this.updateRefetchInterval(this.computeRefetchInterval())},n.clearTimers=function(){this.clearStaleTimeout(),this.clearRefetchInterval()},n.clearStaleTimeout=function(){this.staleTimeoutId&&(clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0)},n.clearRefetchInterval=function(){this.refetchIntervalId&&(clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0)},n.createResult=function(t,e){var u=this.currentQuery,r=this.options,c=this.currentResult,o=this.currentResultState,h=this.currentResultOptions,f=t!==u,v=f?t.state:this.currentQueryInitialState,R=f?this.currentResult:this.previousQueryResult,l=t.state,g=l.dataUpdatedAt,k=l.error,F=l.errorUpdatedAt,E=l.isFetching,d=l.status,_=!1,P=!1,p;if(e.optimisticResults){var w=this.hasListeners(),q=!w&&D(t,e),V=w&&N(t,u,e,r);(q||V)&&(E=!0,g||(d="loading"))}if(e.keepPreviousData&&!l.dataUpdateCount&&(R!=null&&R.isSuccess)&&d!=="error")p=R.data,g=R.dataUpdatedAt,d=R.status,_=!0;else if(e.select&&typeof l.data<"u")if(c&&l.data===(o==null?void 0:o.data)&&e.select===this.selectFn)p=this.selectResult;else try{this.selectFn=e.select,p=e.select(l.data),e.structuralSharing!==!1&&(p=B(c==null?void 0:c.data,p)),this.selectResult=p,this.selectError=null}catch(S){M().error(S),this.selectError=S}else p=l.data;if(typeof e.placeholderData<"u"&&typeof p>"u"&&(d==="loading"||d==="idle")){var y;if(c!=null&&c.isPlaceholderData&&e.placeholderData===(h==null?void 0:h.placeholderData))y=c.data;else if(y=typeof e.placeholderData=="function"?e.placeholderData():e.placeholderData,e.select&&typeof y<"u")try{y=e.select(y),e.structuralSharing!==!1&&(y=B(c==null?void 0:c.data,y)),this.selectError=null}catch(S){M().error(S),this.selectError=S}typeof y<"u"&&(d="success",p=y,P=!0)}this.selectError&&(k=this.selectError,p=this.selectResult,F=Date.now(),d="error");var Y={status:d,isLoading:d==="loading",isSuccess:d==="success",isError:d==="error",isIdle:d==="idle",data:p,dataUpdatedAt:g,error:k,errorUpdatedAt:F,failureCount:l.fetchFailureCount,errorUpdateCount:l.errorUpdateCount,isFetched:l.dataUpdateCount>0||l.errorUpdateCount>0,isFetchedAfterMount:l.dataUpdateCount>v.dataUpdateCount||l.errorUpdateCount>v.errorUpdateCount,isFetching:E,isRefetching:E&&d!=="loading",isLoadingError:d==="error"&&l.dataUpdatedAt===0,isPlaceholderData:P,isPreviousData:_,isRefetchError:d==="error"&&l.dataUpdatedAt!==0,isStale:U(t,e),refetch:this.refetch,remove:this.remove};return Y},n.shouldNotifyListeners=function(t,e){if(!e)return!0;var u=this.options,r=u.notifyOnChangeProps,c=u.notifyOnChangePropsExclusions;if(!r&&!c||r==="tracked"&&!this.trackedProps.length)return!0;var o=r==="tracked"?this.trackedProps:r;return Object.keys(t).some(function(h){var f=h,v=t[f]!==e[f],R=o==null?void 0:o.some(function(g){return g===h}),l=c==null?void 0:c.some(function(g){return g===h});return v&&!l&&(!o||R)})},n.updateResult=function(t){var e=this.currentResult;if(this.currentResult=this.createResult(this.currentQuery,this.options),this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,!X(this.currentResult,e)){var u={cache:!0};(t==null?void 0:t.listeners)!==!1&&this.shouldNotifyListeners(this.currentResult,e)&&(u.listeners=!0),this.notify(L({},u,t))}},n.updateQuery=function(){var t=this.client.getQueryCache().build(this.client,this.options);if(t!==this.currentQuery){var e=this.currentQuery;this.currentQuery=t,this.currentQueryInitialState=t.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(e==null||e.removeObserver(this),t.addObserver(this))}},n.onQueryUpdate=function(t){var e={};t.type==="success"?e.onSuccess=!0:t.type==="error"&&!Z(t.error)&&(e.onError=!0),this.updateResult(e),this.hasListeners()&&this.updateTimers()},n.notify=function(t){var e=this;Q.batch(function(){t.onSuccess?(e.options.onSuccess==null||e.options.onSuccess(e.currentResult.data),e.options.onSettled==null||e.options.onSettled(e.currentResult.data,null)):t.onError&&(e.options.onError==null||e.options.onError(e.currentResult.error),e.options.onSettled==null||e.options.onSettled(void 0,e.currentResult.error)),t.listeners&&e.listeners.forEach(function(u){u(e.currentResult)}),t.cache&&e.client.getQueryCache().notify({query:e.currentQuery,type:"observerResultsUpdated"})})},a}(ee);function ce(s,a){return a.enabled!==!1&&!s.state.dataUpdatedAt&&!(s.state.status==="error"&&a.retryOnMount===!1)}function D(s,a){return ce(s,a)||s.state.dataUpdatedAt>0&&T(s,a,a.refetchOnMount)}function T(s,a,n){if(a.enabled!==!1){var i=typeof n=="function"?n(s):n;return i==="always"||i!==!1&&U(s,a)}return!1}function N(s,a,n,i){return n.enabled!==!1&&(s!==a||i.enabled===!1)&&(!n.suspense||s.state.status!=="error")&&U(s,n)}function U(s,a){return s.isStaleByTime(a.staleTime)}function le(){var s=!1;return{clearReset:function(){s=!1},reset:function(){s=!0},isReset:function(){return s}}}var he=b.createContext(le()),de=function(){return b.useContext(he)};function fe(s,a){var n=b.useRef(!1),i=b.useState(0),t=i[1],e=te(),u=de(),r=e.defaultQueryObserverOptions(s);r.optimisticResults=!0,r.onError&&(r.onError=Q.batchCalls(r.onError)),r.onSuccess&&(r.onSuccess=Q.batchCalls(r.onSuccess)),r.onSettled&&(r.onSettled=Q.batchCalls(r.onSettled)),r.suspense&&(typeof r.staleTime!="number"&&(r.staleTime=1e3),r.cacheTime===0&&(r.cacheTime=1)),(r.suspense||r.useErrorBoundary)&&(u.isReset()||(r.retryOnMount=!1));var c=b.useState(function(){return new a(e,r)}),o=c[0],h=o.getOptimisticResult(r);if(b.useEffect(function(){n.current=!0,u.clearReset();var f=o.subscribe(Q.batchCalls(function(){n.current&&t(function(v){return v+1})}));return o.updateResult(),function(){n.current=!1,f()}},[u,o]),b.useEffect(function(){o.setOptions(r,{listeners:!1})},[r,o]),r.suspense&&h.isLoading)throw o.fetchOptimistic(r).then(function(f){var v=f.data;r.onSuccess==null||r.onSuccess(v),r.onSettled==null||r.onSettled(v,null)}).catch(function(f){u.clearReset(),r.onError==null||r.onError(f),r.onSettled==null||r.onSettled(void 0,f)});if(h.isError&&!u.isReset()&&!h.isFetching&&ae(r.suspense,r.useErrorBoundary,[h.error,o.getCurrentQuery()]))throw h.error;return r.notifyOnChangeProps==="tracked"&&(h=o.trackResult(h,r)),h}function W(s,a,n){var i=re(s,a,n);return fe(i,oe)}const pe=O("section",{target:"e1a6068d4"})("display:flex;flex-direction:column;justify-content:center;padding:0 30px;",({theme:s})=>se("min-height:calc(var(--vh, 1vh) * 100 - ",s.layouts.fixedHeight,");",""),";"),ve=O("div",{target:"e1a6068d3"})("display:grid;grid-template-rows:350px 1fr;width:100%;height:450px;background-color:",({theme:s})=>s.colors.white_300,";border:1px solid ",({theme:s})=>s.colors.light_grey_100,";border-radius:5px;margin-bottom:30px;"),ye=O("div",{target:"e1a6068d1"})("display:flex;flex-direction:column;justify-content:space-evenly;align-items:flex-start;width:100%;padding:0 10px;border-top:1px solid ",({theme:s})=>s.colors.light_grey_100,";background-color:",({theme:s})=>s.colors.background_2,";&>div{display:flex;align-items:center;width:100%;height:24px;&:last-of-type{padding:0 10px;}}"),Re=O("hr",{target:"e1a6068d0"})("width:100%;height:1px;padding-left:10px;border:0;background:",({theme:s})=>s.colors.light_grey_200,";"),ge=async s=>{const{major:a,building:n}=s,{data:i}=await K.get(`locker?major=${a}&building_id=${n}`);return i},me=async s=>{const{major:a,building:n}=s,{data:i}=await K.get(`apply?major=${a}&building_id=${n}`);return i},be={major:"major",apply:"apply",locker:"locker"},Se=s=>{const{data:a,isLoading:n,refetch:i}=W([be.apply,{...s}],()=>ge(s),{enabled:!!s.building});return{lockerCounts:a,isLoading:n,refetch:i}},Qe=s=>{const{data:a,refetch:n}=W(["apply"],()=>me(s));return{apply:a,refetch:n}},xe=()=>{const[s,a]=I.useState("건물");I.useState();const n=r=>a(r.currentTarget.innerText),{lockerCounts:i,refetch:t}=Se({major:5,building:x[s]}),{apply:e,refetch:u}=Qe({major:5,building:x[s]});return I.useEffect(()=>{t(),u()},[s]),m(ue,{children:C(pe,{children:[C(ve,{children:[i&&i.length>0?m($,{total:i.length,applyCount:30}):m($.Skeleton,{}),C(ye,{children:[m(ne,{value:s,handleChange:n,list:Object.keys(x).slice(1)}),m(Re,{}),m("div",{children:"스페인어과"})]})]}),m(ie,{variant:"contained",children:"신청하기"})]})})};export{xe as default};
