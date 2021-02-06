import t,{forwardRef as e,useRef as r,useMemo as o,useCallback as n,useEffect as i,isValidElement as l}from"react";function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function f(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function u(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var r=[],o=!0,n=!1,i=void 0;try{for(var l,a=t[Symbol.iterator]();!(o=(l=a.next()).done)&&(r.push(l.value),!e||r.length!==e);o=!0);}catch(t){n=!0,i=t}finally{try{o||null==a.return||a.return()}finally{if(n)throw i}}return r}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return s(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return s(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,o=new Array(e);r<e;r++)o[r]=t[r];return o}function d(e,a){var c=e.element,u=e.popper,s=e.position,d=void 0===s?"bottom-center":s,h=e.containerStyle,m=e.arrow,b=e.arrowStyle,y=void 0===b?{}:b,v=e.fixMainPosition,g=e.fixRelativePosition,w=e.offsetY,O=e.offsetX,j=e.animation,P=e.onChange,E=r(),x=r(),M=r(),S={visibility:"hidden",left:"0",top:"0",position:"absolute"},L=o((function(){return!0===m}),[m]),A=o((function(){return!!u}),[u]),C=n((function(){return{position:d,fixMainPosition:v,fixRelativePosition:g,offsetY:w,offsetX:O,defaultArrow:L,animation:j,onChange:P}}),[d,v,g,w,O,L,j,P]);return i((function(){if(!A)return e(),x.current.parentNode.style.visibility="hidden",void(M.current&&(M.current.style.visibility="hidden"));function t(t){t&&"resize"!==t.type&&!t.target.contains(E.current)||(t&&e(),p(E,x,M,C(),t))}function e(){M.current&&(M.current.style.transition="none"),x.current&&(x.current.parentNode.style.transition="none")}return t(),document.addEventListener("scroll",t,!0),window.addEventListener("resize",t),function(){document.removeEventListener("scroll",t,!0),window.removeEventListener("resize",t)}}),[A,C]),t.createElement("div",{ref:function(t){E.current=t,a&&(a.current=t),null!=a&&a.current&&(a.current.refreshPosition=function(){return p(E,x,M,C())})},style:f({display:"inline-block"},h)},c,!0===m?t.createElement("div",{ref:M,className:"ep-arrow",style:f(f({},S),y)}):l(m)?t.createElement("div",{ref:M,style:f(f({},S),y)},m):null,t.createElement("div",{style:{position:"absolute",left:"0",top:"0",willChange:"transform",visibility:"hidden"}},t.createElement("div",{ref:x},u)))}var h=e(d);function p(t,e,r,o,n){var i=o.position,l=o.fixMainPosition,a=o.fixRelativePosition,c=o.offsetY,f=void 0===c?0:c,s=o.offsetX,d=void 0===s?0:s,h=o.defaultArrow,p=o.animation,g=o.onChange;if(t.current&&e.current){var w,O,j,P,E=(j=void 0!==window.pageXOffset,P="CSS1Compat"===(document.compatMode||""),{scrollLeft:j?window.pageXOffset:P?document.documentElement.scrollLeft:document.body.scrollLeft,scrollTop:j?window.pageYOffset:P?document.documentElement.scrollTop:document.body.scrollTop}),x=E.scrollLeft,M=E.scrollTop,S=m(t.current,x,M),L=S.top,A=S.left,C=S.height,N=S.width,T=S.right,X=S.bottom,D=m(e.current,x,M),H=D.top,R=D.left,Y=D.height,z=D.width,I=document.documentElement,W=I.clientHeight,k=I.clientWidth,B=e.current.parentNode,F=u(b(B),2),U=F[0],$=F[1],q=function(t){var e=u(t.split("-"),2),r=e[0],o=void 0===r?"bottom":r,n=e[1],i=void 0===n?"center":n,l="top"===o||"bottom"===o,a="left"===o||"right"===o;a&&("start"===i&&(i="top"),"end"===i&&(i="bottom"));l&&("start"===i&&(i="left"),"end"===i&&(i="right"));return[o,i,l,a]}(i),G=u(q,4),J=G[0],K=G[1],Q=G[2],V=G[3],Z=J,_=function(t,e){return"translate(".concat(t,"px, ").concat(e,"px)")},tt=N-z,et=C-Y,rt="left"===K?0:"right"===K?tt:tt/2,ot=tt-rt,nt="top"===K?0:"bottom"===K?et:et/2,it=et-nt,lt=A-R+U,at=L-H+$,ct=0,ft=0,ut=y(t.current),st=r.current,dt=u(b(st),2),ht=dt[0],pt=dt[1],mt=m(st,x,M)||{},bt=mt.left,yt=mt.top,vt=mt.height,gt=void 0===vt?0:vt,wt=mt.width,Ot=void 0===wt?0:wt,jt=A-bt+ht,Pt=L-yt+pt,Et=0,xt=0;for("auto"===J&&(J="bottom"),"auto"===K&&(K="center"),Q&&(lt+=rt,at+="top"===J?-Y:C,st&&h&&(gt=11,Ot=20)),V&&(lt+="left"===J?-z:N,at+=nt,st&&h&&(gt=20,Ot=11));ut;)St(m(ut,x,M)),ut=y(ut.parentNode);St({top:M,bottom:M+W,left:x,right:x+k,height:W,width:k}),Q&&(at+="bottom"===Z?f:-f),V&&(lt+="right"===Z?d:-d),p&&Q&&!n&&(xt="bottom"===Z?10:-10),p&&V&&!n&&(Et="right"===Z?10:-10),lt=lt-ct+Et,at=at-ft+xt;var Mt={top:"bottom",bottom:"top",left:"right",right:"left"}[Z];st&&(ct-rt<0&&(jt+=(w=(lt-A)/2)<0?0:w),ct+ot>0&&(jt+=(w=(lt+z-T)/2)>0?0:w),ft-nt<0&&(Pt+=(O=(at-L)/2)<0?0:O),ft+it>0&&(Pt+=(O=(at+Y-X)/2)>0?0:O),Q&&(jt+=N/2-Ot/2,"bottom"===Z&&(Pt=at,at+=gt),"top"===Z&&(Pt=(at-=gt)+Y)),V&&(Pt+=C/2-gt/2,"left"===Z&&(jt=(lt-=Ot)+z),"right"===Z&&(jt=lt,lt+=Ot)),st.style.height=gt+"px",st.style.width=Ot+"px",st.style.transform=_(jt,Pt),st.setAttribute("direction",Mt),st.style.visibility="visible"),B.style.transform=_(lt,at),B.style.visibility="visible",!n&&p&&setTimeout((function(){B.style.transition=".4s",B.style.transform=_(lt-Et,at-xt),st&&(st.style.transition=".4s",st.style.transform=_(jt-Et,Pt-xt))}),18),g instanceof Function&&g({popper:{top:at,bottom:at+Y,left:lt,right:lt+z,height:Y,width:z},element:{top:L,bottom:X,left:A,right:T,height:C,width:N},arrow:{top:Pt,bottom:Pt+gt,left:jt,right:jt+Ot,height:gt,width:Ot,direction:Mt},position:Z+"-"+(0!==ct?"auto":K),scroll:{scrollLeft:x,scrollTop:M}})}function St(t){var e=t.top,r=t.bottom,o=t.left,n=t.right,i=t.height,c=t.width;if(Q){var u=Math.round(L-e+C/2),s=Math.round(i/2);l||(L-(Y+f+gt)<e&&u<=s&&"top"===Z?(at+=Y+C,Z="bottom"):X+Y+f+gt>i+e&&u>=s&&"bottom"===Z&&(at-=Y+C,Z="top")),a||(A+rt<o&&(ct=v(T-Ot>o?A+rt-o:-N+rt+Ot,ct)),T-ot>n&&(ct=v(A+Ot<n?T-ot-n:N-ot-Ot,ct)))}if(V){var h=Math.round(A-o+N/2),p=Math.round(c/2);l||(A-(z+d+Ot)<o&&h<p&&"left"===Z?(lt+=N+z,Z="right"):T+z+d+Ot>n&&h>p&&"right"===Z&&(lt-=N+z,Z="left")),a||(L+nt<e&&(ft=v(X-gt>e?L+nt-e:-C+nt+gt,ft)),X-it>r&&(ft=v(L+gt<r?X-it-r:C-it-gt,ft)))}}}function m(t,e,r){if(t){var o=t.getBoundingClientRect(),n=o.top,i=o.left,l=o.width,a=o.height,c=n+r,f=i+e;return{top:c,bottom:c+a,left:f,right:f+l,width:l,height:a}}}function b(t){if(!t)return[0,0];var e=u((t.style.transform.match(/translate\((.*?)px,\s(.*?)px\)/)||[]).map((function(t){return Number(t)})),3),r=e[1],o=void 0===r?0:r,n=e[2];return[o,void 0===n?0:n]}function y(t){if(t&&"HTML"!==t.tagName)return t.clientHeight<t.offsetHeight||t.clientWidth<t.offsetWidth?t:y(t.parentNode)}function v(t,e){return Math.round(Math.abs(t))>Math.round(Math.abs(e))?t:e}export default h;
