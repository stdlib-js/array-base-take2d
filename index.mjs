// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-normalize-index@v0.1.0-esm/index.mjs";import{factory as n}from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-ind@v0.1.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";function t(t,s,i,d){var m,o,h,a,l,f,g,u,p;if(-1===(h=e(i,1)))throw new RangeError(r("invalid argument. Third argument exceeds the number of dimensions. Number of dimensions: %d. Value: `%d`.",2,i));if(a=n(d),o=[],0===h){for(m=t.length-1,g=0;g<s.length;g++)l=a(s[g],m),o.push(t[l]);return o}for(g=0;g<t.length;g++){for(p=[],m=(u=t[g]).length-1,f=0;f<s.length;f++)l=a(s[f],m),p.push(u[l]);o.push(p)}return o}export{t as default};
//# sourceMappingURL=index.mjs.map
