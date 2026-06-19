"use strict";var p=function(a,r){return function(){try{return r||a((r={exports:{}}).exports,r),r.exports}catch(n){throw (r=0, n)}};};var m=p(function(y,l){
var x=require('@stdlib/ndarray-base-normalize-index/dist'),q=require('@stdlib/ndarray-base-ind/dist').factory,c=require('@stdlib/error-tools-fmtprodmsg/dist'),f=2;function I(a,r,n,g){var u,t,v,h,i,o,e,s,d;if(v=x(n,f-1),v===-1)throw new RangeError(c('1m1FD',f,n));if(h=q(g),t=[],v===0){for(u=a.length-1,e=0;e<r.length;e++)i=h(r[e],u),t.push(a[i]);return t}for(e=0;e<a.length;e++){for(s=a[e],d=[],u=s.length-1,o=0;o<r.length;o++)i=h(r[o],u),d.push(s[i]);t.push(d)}return t}l.exports=I
});var b=m();module.exports=b;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
