// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-normalize-index@v0.2.2-esm/index.mjs";import{factory as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-ind@v0.2.2-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.2-esm/index.mjs";function s(s,n,d,i){var o,m,h,l,a,f,p,g,j;if(-1===(h=r(d,1)))throw new RangeError(t("1m1FD",2,d));if(l=e(i),m=[],0===h){for(o=s.length-1,p=0;p<n.length;p++)a=l(n[p],o),m.push(s[a]);return m}for(p=0;p<s.length;p++){for(j=[],o=(g=s[p]).length-1,f=0;f<n.length;f++)a=l(n[f],o),j.push(g[a]);m.push(j)}return m}export{s as default};
//# sourceMappingURL=index.mjs.map
