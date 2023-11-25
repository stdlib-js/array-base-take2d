"use strict";var p=function(a,r){return function(){return r||a((r={exports:{}}).exports,r),r.exports}};var m=p(function(y,l){
var x=require('@stdlib/ndarray-base-normalize-index/dist'),q=require('@stdlib/ndarray-base-ind/dist').factory,c=require('@stdlib/error-tools-fmtprodmsg/dist'),f=2;function I(a,r,d,g){var n,t,o,v,u,i,e,h,s;if(o=x(d,f-1),o===-1)throw new RangeError(c("invalid argument. Third argument exceeds the number of dimensions. Number of dimensions: %d. Value: `%d`.",f,d));if(v=q(g),t=[],o===0){for(n=a.length-1,e=0;e<r.length;e++)u=v(r[e],n),t.push(a[u]);return t}for(e=0;e<a.length;e++){for(h=a[e],s=[],n=h.length-1,i=0;i<r.length;i++)u=v(r[i],n),s.push(h[u]);t.push(s)}return t}l.exports=I
});var b=m();module.exports=b;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
