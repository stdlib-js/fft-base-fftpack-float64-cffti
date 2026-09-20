"use strict";var P=function(v,r){return function(){try{return r||v((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var b=P(function(V,S){
var z=require('@stdlib/math-base-special-sincos/dist').assign,B=require('@stdlib/constants-float64-two-pi/dist'),D=require('@stdlib/math-base-special-floor/dist'),E=require('@stdlib/array-float64/dist'),F=require('@stdlib/fft-base-fftpack-float64-decompose/dist'),G=new E([3,4,2,5]);function H(v,r,a,u,f,n,h){var q,j,p,x,y,C,g,m,i,A,L,o,I,M,O,R,_,c;for(C=F(v,4,G,1,0,f,n,h),p=B/v,c=0,i=1,x=h+2*n,L=2*a,R=0;R<C;R++){for(q=f[x],m=q*i,M=D(v/m),A=0,y=2*M+2,_=1;_<q;_++){for(I=c,o=u+c*a,r[o]=1,r[o+a]=0,A+=i,j=A*p,g=1,o+=3*a,O=3;O<y;O+=2)z(g*j,r,-a,o),g+=1,o+=L;c+=2*M,q>5&&(r[u+I*a]=r[u+c*a],r[u+(I+1)*a]=r[u+(c+1)*a])}i=m,x+=n}}S.exports=H
});var l=P(function(X,e){
var J=b();function K(v,r,a,u){var f,n;return v===1||(f=u+2*v*a,n=f+2*v*a,J(v,r,a,f,r,a,n)),r}e.exports=K
});var Q=l();module.exports=Q;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
