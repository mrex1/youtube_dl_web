(this.webpackJsonpyt_audio=this.webpackJsonpyt_audio||[]).push([[0],{82:function(e,t,n){},84:function(e,t,n){},87:function(e,t,n){},89:function(e,t,n){},93:function(e,t,n){},94:function(e,t,n){},95:function(e,t,n){},97:function(e,t,n){},98:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(16),r=n.n(i),s=(n(82),n(7)),o=n.n(s),u=n(14),l=n(11),d=(n(84),function(e,t){return String(e).padStart(t,"0")}),b=function(e){if(null===e)return 0;for(var t=e.split(":"),n=0,a=1,c=0;c<t.length;c++)n+=parseInt(t[t.length-1-c])*a,a*=60;return n},j=function(e,t){return(e/t).toFixed(1)},h=function(e){if(null===e)return"";var t=1e9,n=1e6;return e>t?"".concat(j(e,t),"B Views"):e>n?"".concat(j(e,n),"M Views"):e>1e3?"".concat(j(e,1e3),"K Views"):"".concat(e," Views")},f=function(e){return new Promise((function(t,n){return setTimeout(t,e)}))},O=n(52),v=n(29),p=n(30),x=n(70),y="http://localhost:3001",k=Object(x.a)({palette:{primary:{light:"#303030",main:"#000",dark:"#303030",contrastText:"#ffa600"},secondary:{light:"#fff",main:"#ffa600",dark:"#fff",contrastText:"#fff"}}}),m=new(function(){function e(t){Object(v.a)(this,e),this.url=void 0,this.cache=void 0,this.suggestionsCache=void 0,this.url=t,this.cache={},this.suggestionsCache={}}return Object(p.a)(e,[{key:"getYoutubeLink",value:function(e){return"https://youtu.be/".concat(e)}},{key:"getInfo",value:function(e){return this.cache[e]}},{key:"getAudioURL",value:function(e){return"".concat(this.url,"/stream/v2?vid=").concat(e)}},{key:"getAudioDownloadLink",value:function(e){var t=document.createElement("a");return t.href="".concat(this.url,"/download?vid=").concat(e),t.target="_blank",t}},{key:"suggest",value:function(){var e=Object(u.a)(o.a.mark((function e(t){var n,a,c=this;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t in this.suggestionsCache)){e.next=2;break}return e.abrupt("return",this.suggestionsCache[t]);case 2:return e.prev=2,e.next=5,fetch("".concat(y,"/suggest?vid=").concat(t));case 5:return n=e.sent,e.next=8,n.json();case 8:return(a=e.sent).forEach((function(e){e.id in c.cache||(c.cache[e.id]=e)})),this.suggestionsCache[t]=a,e.abrupt("return",a);case 14:return e.prev=14,e.t0=e.catch(2),e.abrupt("return",null);case 17:case"end":return e.stop()}}),e,this,[[2,14]])})));return function(t){return e.apply(this,arguments)}}()},{key:"search",value:function(){var e=Object(u.a)(o.a.mark((function e(t){var n,a,c,i=this;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t.replace(" ","+")),e.prev=1,e.next=4,fetch("".concat(y,"/search?q=").concat(n));case 4:return a=e.sent,e.next=7,a.json();case 7:return(c=e.sent).items.forEach((function(e){"video"===e.type&&(i.cache[e.id]=e)})),e.abrupt("return",c);case 12:return e.prev=12,e.t0=e.catch(1),e.abrupt("return",null);case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}()},{key:"searchContinue",value:function(){var e=Object(u.a)(o.a.mark((function e(t){var n,a,c=this;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(y,"/search"),{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 3:return n=e.sent,e.next=6,n.json();case 6:return(a=e.sent).items.forEach((function(e){"video"===e.type&&(c.cache[e.id]=e)})),e.abrupt("return",a);case 11:return e.prev=11,e.t0=e.catch(0),e.abrupt("return",null);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}()},{key:"getYTPlaylist",value:function(){var e=Object(u.a)(o.a.mark((function e(t){var n,a,c=this;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(y,"/playlist?pid=").concat(t));case 3:return n=e.sent,e.next=6,n.json();case 6:return(a=e.sent).items.forEach((function(e){e.id in c.cache||(c.cache[e.id]=e)})),e.abrupt("return",a);case 11:return e.prev=11,e.t0=e.catch(0),e.abrupt("return",null);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}()},{key:"getYTplaylistByContinuation",value:function(){var e=Object(u.a)(o.a.mark((function e(t){var n,a,c=this;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(y,"/playlist"),{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 3:return n=e.sent,e.next=6,n.json();case 6:return(a=e.sent).items.forEach((function(e){e.id in c.cache||(c.cache[e.id]=e)})),e.abrupt("return",a);case 11:return e.prev=11,e.t0=e.catch(0),e.abrupt("return",null);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}()}]),e}())(y),C=new(function(){function e(t,n){Object(v.a)(this,e),this.videoIds=void 0,this.current=void 0,this.api=void 0,this.videoIds=n||[],this.current=-1,this.api=t,this.add=this.add.bind(this),this.next=this.next.bind(this)}return Object(p.a)(e,[{key:"add",value:function(e){-1===this.videoIds.indexOf(e)&&this.videoIds.push(e)}},{key:"playlistVideos",get:function(){var e=this;return this.videoIds.map((function(t){return e.api.getInfo(t)}))}},{key:"setCurByVid",value:function(e){var t=this.videoIds.indexOf(e);if(-1!==t)return this.current=t,this.current}},{key:"next",value:function(){if(this.current<this.videoIds.length-1)return this.current+=1,this.current}},{key:"suggest",value:function(){var e=Object(u.a)(o.a.mark((function e(){var t,n,a,c,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.videoIds[this.current],e.next=3,this.api.suggest(t);case 3:if(!(n=e.sent)){e.next=23;break}a=Object(O.a)(n),e.prev=6,a.s();case 8:if((c=a.n()).done){e.next=15;break}if(i=c.value,!(-1===this.videoIds.indexOf(i.id))){e.next=13;break}return e.abrupt("return",i.id);case 13:e.next=8;break;case 15:e.next=20;break;case 17:e.prev=17,e.t0=e.catch(6),a.e(e.t0);case 20:return e.prev=20,a.f(),e.finish(20);case 23:case"end":return e.stop()}}),e,this,[[6,17,20,23]])})));return function(){return e.apply(this,arguments)}}()}]),e}())(m),g=new(function(){function e(t,n){Object(v.a)(this,e),this.audio=void 0,this.vid=void 0,this.api=void 0,this.api=t,this.audio=new Audio,n&&this.updateAudio(n)}return Object(p.a)(e,[{key:"updateAudio",value:function(e){if(e!==this.vid){this.vid=e;var t=this.api.getAudioURL(e);this.audio.src=t}}},{key:"retry",value:function(){var e=this.audio.src;this.audio.src="",this.audio.src=e}}]),e}())(m),w=n(121),S=Object(a.createContext)({setVideosWithLoading:function(){var e=Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}),N=Object(a.createContext)({playVideo:function(){},addToPlaylist:function(){},addToPlaylistThenPlay:function(){}}),V=Object(a.createContext)({autoplay:!0,setAutoplay:function(){}}),T=Object(a.createContext)({onVideoEnd:function(){},onVideoStart:function(){}}),P=n(59),A=n.n(P),I=n(45),E=n.n(I),L=(n(87),n(2)),D=function(e){var t=e.thumbnailUrl,n=e.duration;return Object(L.jsxs)("div",{className:"thumbnail-container",children:[Object(L.jsx)("img",{className:"thumbnail-img",src:t,alt:"thumbnail",loading:"lazy"}),Object(L.jsx)("span",{className:"thumbnail-txt",children:n})]})},B=n(58),W=n.n(B),M=n(3),F=(n(89),function(e){var t=e.video,n=e.playing,c=e.onAddClick,i=e.onPlayClick,r=e.onDownloadClick,s=t.title,l=t.author,d=t.thumbnail?t.thumbnail.url:t.bestThumbnail.url,b=function(e){return e.views}(t)?t.views:null,j=Object(a.useContext)(S).setVideosWithLoading,f=Object(a.useCallback)((function(){c&&c(t.id)}),[t,c]),O=Object(a.useCallback)((function(){r&&r(t.id)}),[t,r]),v=Object(a.useCallback)((function(){i&&i(t.id)}),[t,i]),p=Object(a.useCallback)((function(e){return Object(u.a)(o.a.mark((function t(){var n,a,c,i;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.getYTPlaylist(e);case 2:return n=t.sent,a=n?n.items:[],c=null===n||void 0===n?void 0:n.continuation,i=null===n||void 0===n?void 0:n.author,t.abrupt("return",{videos:a,continuation:c,channel:i});case 7:case"end":return t.stop()}}),t)})))}),[]),x=Object(a.useCallback)((function(){t.author&&j(p(t.author.channelID))}),[j,p,t]);return Object(L.jsxs)("div",{className:Object(M.a)("video-list-item-container",{playing:n}),children:[d&&Object(L.jsx)(D,{thumbnailUrl:d,duration:t.duration}),Object(L.jsxs)("div",{className:"video-list-item-content",children:[Object(L.jsx)("div",{className:"video-list-item-title single-line",children:s}),Object(L.jsx)("div",{className:"video-list-item-subtitle single-line",onClick:x,children:null===l||void 0===l?void 0:l.name}),Object(L.jsx)("div",{className:"video-list-item-subtitle single-line",onClick:x,children:h(b)}),Object(L.jsxs)("div",{className:"video-list-item-row tools",children:[!n&&i&&Object(L.jsx)(w.a,{onClick:v,color:"secondary",children:Object(L.jsx)(W.a,{})}),c&&Object(L.jsx)(w.a,{onClick:f,color:"secondary",children:Object(L.jsx)(A.a,{})}),r&&Object(L.jsx)(w.a,{onClick:O,color:"secondary",children:Object(L.jsx)(E.a,{})})]})]})]})}),Y=n(122),U=function(e){var t=e.className,n=e.spaceBottom,c=e.loadVideos,i=e.videos,r=e.children,s=Object(a.useState)(!1),o=Object(l.a)(s,2),u=o[0],d=o[1],b=Object(a.useContext)(N),j=b.addToPlaylist,h=b.addToPlaylistThenPlay,f=Object(a.useCallback)((function(e){var t=e.currentTarget;c&&!u&&t.scrollHeight-t.offsetHeight-t.scrollTop<2&&(d(!0),c().then((function(){return d(!1)})))}),[c,u]),O=Object(a.useCallback)((function(e){j(e)}),[j]),v=Object(a.useCallback)((function(e){m.getAudioDownloadLink(e).click()}),[]),p=Object(a.useCallback)((function(e){h(e)}),[h]);return Object(L.jsxs)("div",{className:t,onScroll:f,children:[r,i.map((function(e){return Object(L.jsx)(F,{video:e,onAddClick:O,onPlayClick:p,onDownloadClick:v},e.id)})),u&&Object(L.jsx)(Y.a,{}),n&&Object(L.jsx)("div",{style:{height:100}})]})},J=n(123),R=n(124),z=n(129),_=n(125),H=n(101),K=n(61),q=n.n(K),G=n(60),Q=n.n(G),X=n(62),Z=n.n(X),$=(n(93),function(e){var t=e.onChange,n=e.onSubmit,c=Object(a.useState)(""),i=Object(l.a)(c,2),r=i[0],s=i[1],o=Object(a.useState)(!1),u=Object(l.a)(o,2),d=u[0],b=u[1],j=Object(a.useCallback)((function(e){13===e.charCode&&(n(),e.target.blur())}),[n]),h=Object(a.useCallback)((function(e){s(e.target.value),t(e)}),[t]),f=Object(a.useCallback)((function(){s("")}),[]),O=Object(a.useCallback)((function(){b(!1)}),[]),v=Object(a.useCallback)((function(){b(!0)}),[]);return Object(L.jsx)(J.a,{position:"static",children:d?Object(L.jsxs)(R.a,{children:[Object(L.jsx)(w.a,{color:"secondary",edge:"start",onClick:O,children:Object(L.jsx)(Q.a,{})}),Object(L.jsx)(z.a,{color:"secondary",style:{color:"white"},placeholder:"Search",value:r,onChange:h,onKeyPress:j,fullWidth:!0,endAdornment:Object(L.jsx)(_.a,{position:"end",children:Object(L.jsx)(w.a,{"aria-label":"clear input",color:"secondary",onClick:f,children:Object(L.jsx)(q.a,{})})})})]}):Object(L.jsxs)(R.a,{children:[Object(L.jsx)(H.a,{style:{flex:1},children:"YT Audio"}),Object(L.jsx)(w.a,{color:"secondary",onClick:v,children:Object(L.jsx)(Z.a,{})})]})})}),ee=(n(94),n(69)),te=n.n(ee),ne=n(68),ae=n.n(ne),ce=n(133),ie=n(126),re=n(131),se=n(132),oe=n(127),ue=n(67),le=n.n(ue),de=n(66),be=n.n(de),je=n(64),he=n.n(je),fe=n(63),Oe=n.n(fe),ve=(n(95),function(e){var t,n=e.videoDetails,c=Object(a.useState)(!1),i=Object(l.a)(c,2),r=i[0],s=i[1],o=Object(a.useState)(null),u=Object(l.a)(o,2),j=u[0],h=u[1],f=Object(a.useState)(!1),O=Object(l.a)(f,2),v=O[0],p=O[1],x=Object(a.useState)(0),y=Object(l.a)(x,2),k=y[0],C=y[1],S=Object(a.useState)(""),N=Object(l.a)(S,2),P=N[0],A=N[1],I=Object(a.useContext)(V),D=I.autoplay,B=I.setAutoplay,W=Object(a.useContext)(T),M=W.onVideoEnd,F=W.onVideoStart;Object(a.useEffect)((function(){g.audio.ontimeupdate=function(){return C(Math.ceil(g.audio.currentTime))},g.audio.onpause=function(){return s(!1)},g.audio.onloadeddata=function(){return p(!1)},g.audio.onloadstart=function(){return p(!0)}}),[]),Object(a.useEffect)((function(){g.audio.onplay=function(){s(!0),A(""),F&&F()},g.audio.onended=function(){s(!1),M&&M()}}),[F,M]);var Y=Object(a.useCallback)((function(e){-1!==e.message.indexOf("aborted by the user agent")||(p(!1),A("Failed to play the video"))}),[]),U=Object(a.useCallback)((function(){g.retry(),g.audio.play().catch(Y)}),[Y]),J=Object(a.useCallback)((function(){A("")}),[]),R=Object(a.useCallback)((function(e){h(e.id),g.updateAudio(e.id),C(0),D&&g.audio.play().catch(Y)}),[D,Y]);Object(a.useEffect)((function(){j!==n.id&&R(n)}),[R,j,n]);var z,_=Object(a.useCallback)((function(){m.getAudioDownloadLink(n.id).click()}),[n]),K=Object(a.useCallback)((function(){r?g.audio.pause():g.audio.play()}),[r]),q=Object(a.useCallback)((function(e,t){g.audio.currentTime=t}),[]),G=Object(a.useCallback)((function(){B(!D)}),[D,B]);return Object(L.jsxs)("div",{className:"player-container",children:[Object(L.jsxs)("div",{className:"player-progress-container",children:[Object(L.jsx)("span",{className:"player-current-time",children:(z=k,z=Math.ceil(z),"".concat(d(Math.floor(z/60),2),":").concat(d(z%60,2)))}),Object(L.jsx)(ce.a,{color:"secondary",onChange:q,max:b(n.duration),min:0,value:k}),Object(L.jsx)("span",{className:"player-end-time",children:n.duration})]}),Object(L.jsxs)("div",{className:"player-bottom-container",children:[v?Object(L.jsx)("div",{style:{padding:12},children:Object(L.jsx)(ie.a,{color:"secondary",size:22})}):Object(L.jsx)(w.a,{onClick:K,color:"secondary",children:r?Object(L.jsx)(Oe.a,{}):Object(L.jsx)(he.a,{})}),Object(L.jsx)(w.a,{onClick:_,color:"secondary",children:Object(L.jsx)(E.a,{})}),Object(L.jsx)(re.a,{title:"autoplay",children:Object(L.jsx)(w.a,{onClick:G,color:"secondary",children:D?Object(L.jsx)(be.a,{}):Object(L.jsx)(le.a,{})})}),Object(L.jsxs)("div",{className:"player-details-container",children:[Object(L.jsx)(H.a,{variant:"subtitle1",noWrap:!0,children:n.title}),Object(L.jsx)(H.a,{variant:"subtitle2",style:{color:"silver"},noWrap:!0,children:null===(t=n.author)||void 0===t?void 0:t.name})]})]}),Object(L.jsx)(se.a,{open:""!==P,onClose:J,message:P,color:"secondary",ClickAwayListenerProps:{onClickAway:function(){}},action:Object(L.jsx)(oe.a,{color:"secondary",size:"small",onClick:U,children:"Retry"})})]})}),pe=function(e){var t=e.playlistVideos,n=e.currentIndex,c=Object(a.useState)(!1),i=Object(l.a)(c,2),r=i[0],s=i[1],d=Object(a.useState)([]),b=Object(l.a)(d,2),j=b[0],h=b[1],f=Object(a.useState)(!1),O=Object(l.a)(f,2),v=O[0],p=O[1],x=Object(a.useState)(null),y=Object(l.a)(x,2),k=y[0],C=y[1],g=Object(a.useContext)(N).playVideo,S=Object(a.useCallback)((function(){s(!r)}),[r]),V=Object(a.useCallback)(function(){var e=Object(u.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(!0),e.next=3,m.suggest(t);case 3:n=e.sent,h(n||[]),p(!1);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[]),T=Object(a.useCallback)((function(e){m.getAudioDownloadLink(e).click()}),[]);return Object(a.useEffect)((function(){k&&V(k)}),[k,V]),Object(a.useEffect)((function(){var e;C(null===(e=t[n])||void 0===e?void 0:e.id)}),[n,t]),Object(L.jsxs)("div",{className:Object(M.a)("playlist",{open:r}),children:[Object(L.jsxs)("div",{className:"top-section",children:[Object(L.jsx)("div",{className:"player-container",children:n>=t.length?Object(L.jsx)(Y.a,{}):Object(L.jsx)(ve,{videoDetails:t[n]})}),Object(L.jsx)(w.a,{onClick:S,color:"secondary",children:r?Object(L.jsx)(ae.a,{}):Object(L.jsx)(te.a,{})})]}),Object(L.jsxs)("div",{className:"lists-container",children:[Object(L.jsx)("div",{className:Object(M.a)("list"),children:t.map((function(e,t){return Object(L.jsx)(F,{video:e,onPlayClick:function(){return g(t)},onDownloadClick:T,playing:t===n},"playlist".concat(t))}))}),Object(L.jsx)(H.a,{className:Object(M.a)("divider"),variant:"h5",component:"h5",children:"Suggested"}),v?Object(L.jsx)("div",{style:{paddingTop:30,paddingBottom:30},children:Object(L.jsx)(Y.a,{})}):Object(L.jsx)(U,{videos:j,className:Object(M.a)("list")})]})]})},xe=n(128),ye=n(134),ke=(n(97),function(e){var t=e.channelInfo;return Object(L.jsxs)("div",{className:"channel-header-container",children:[t.bestAvatar.url?Object(L.jsx)(ye.a,{className:"avatar",alt:t.name,src:t.bestAvatar.url}):Object(L.jsx)(ye.a,{className:"avatar",children:t.name[0]}),Object(L.jsx)("span",{className:"name",children:t.name})]})}),me=15;var Ce=function(){var e=Object(a.useState)(!0),t=Object(l.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(!0),r=Object(l.a)(i,2),s=r[0],d=r[1],b=Object(a.useState)([]),j=Object(l.a)(b,2),h=j[0],O=j[1],v=Object(a.useState)(null),p=Object(l.a)(v,2),x=p[0],y=p[1],g=Object(a.useState)(""),w=Object(l.a)(g,2),P=w[0],A=w[1],I=function(){var e=Object(a.useState)(),t=Object(l.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)([]),r=Object(l.a)(i,2),s=r[0],d=r[1],b=Object(a.useState)([]),j=Object(l.a)(b,2),h=j[0],O=j[1],v=Object(a.useState)(me),p=Object(l.a)(v,2),x=p[0],y=p[1],k=Object(a.useState)(),C=Object(l.a)(k,2),g=C[0],w=C[1],S=Object(a.useState)(!1),N=Object(l.a)(S,2),V=N[0],T=N[1];Object(a.useEffect)((function(){O(s.slice(0,x))}),[s,x]);var P=Object(a.useCallback)(function(){var e=Object(u.a)(o.a.mark((function e(t){var n,a,i,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(V){e.next=19;break}return T(!0),e.prev=2,e.next=5,t();case 5:n=e.sent,a=n.videos,i=n.continuation,r=n.channel,d(a),w(i),c(r),y(me),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(2),console.log(e.t0);case 18:T(!1);case 19:case"end":return e.stop()}}),e,null,[[2,15]])})));return function(t){return e.apply(this,arguments)}}(),[V]),A=Object(a.useCallback)(function(){var e=Object(u.a)(o.a.mark((function e(t){var n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.searchContinue(t);case 2:if(!(n=e.sent)){e.next=6;break}return a=n.items.filter((function(e){return"video"===e.type})),e.abrupt("return",{newVideos:a,newContinuation:n.continuation});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[]),I=Object(a.useCallback)(function(){var e=Object(u.a)(o.a.mark((function e(t){var n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.getYTplaylistByContinuation(t);case 2:if(!(n=e.sent)){e.next=6;break}return a=n.items,e.abrupt("return",{newVideos:a,newContinuation:n.continuation});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[]),E=Object(a.useCallback)(Object(u.a)(o.a.mark((function e(){var t,a,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(s.length-x>=me)){e.next=4;break}return e.next=3,f(500);case 3:return e.abrupt("return",y(x+me));case 4:if(g){e.next=8;break}if(!(s.length>x)){e.next=7;break}return e.abrupt("return",y(x+me));case 7:return e.abrupt("return");case 8:return t=n?I:A,e.next=11,t(g);case 11:(a=e.sent)&&(c=s.concat(a.newVideos),s.length>x&&y(x+me),d(c),w(a.newContinuation));case 13:case"end":return e.stop()}}),e)}))),[g,s,n,x,A,I]);return{videos:h,channel:n,loading:V,setVideosWithLoading:P,loadMoreVideos:E}}(),E=I.videos,D=I.channel,B=I.loading,W=I.setVideosWithLoading,M=I.loadMoreVideos,F=Object(a.useCallback)((function(e){var t=e.target.value;A(t)}),[]),J=Object(a.useCallback)(Object(u.a)(o.a.mark((function e(){var t,n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.search(P);case 2:return t=e.sent,n=null===t||void 0===t?void 0:t.items.filter((function(e){return"video"===e.type})),a=null===t||void 0===t?void 0:t.continuation,e.abrupt("return",{videos:n,continuation:a});case 6:case"end":return e.stop()}}),e)}))),[P]),R=Object(a.useCallback)(Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:W(J);case 1:case"end":return e.stop()}}),e)}))),[W,J]),z=Object(a.useCallback)((function(e){C.add(e),O(C.playlistVideos)}),[]),_=Object(a.useCallback)(Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.suggest();case 2:(t=e.sent)&&z(t);case 4:case"end":return e.stop()}}),e)}))),[z]);Object(a.useEffect)((function(){if(n&&s&&h.length>0){var e=C.next();void 0===e?_():y(e)}}),[n,s,h,_]);var H=Object(a.useCallback)((function(){c(!0)}),[]),K=Object(a.useCallback)((function(){c(!1)}),[]),q=Object(a.useCallback)((function(e){C.current=e,y(e)}),[]),G=Object(a.useCallback)((function(e){z(e),C.setCurByVid(e),y(C.current),c(!1)}),[z]);return Object(L.jsx)(S.Provider,{value:{setVideosWithLoading:W},children:Object(L.jsx)(N.Provider,{value:{addToPlaylist:z,playVideo:q,addToPlaylistThenPlay:G},children:Object(L.jsx)(T.Provider,{value:{onVideoEnd:H,onVideoStart:K},children:Object(L.jsx)(V.Provider,{value:{autoplay:s,setAutoplay:d},children:Object(L.jsx)(xe.a,{theme:k,children:Object(L.jsxs)("div",{className:"background",children:[Object(L.jsx)($,{onChange:F,onSubmit:R}),B?Object(L.jsx)(Y.a,{}):Object(L.jsx)(U,{className:"video-list",spaceBottom:!0,videos:E,loadVideos:M,children:D&&Object(L.jsx)(ke,{channelInfo:D})}),null!==x&&Object(L.jsx)(pe,{playlistVideos:h,currentIndex:x})]})})})})})})},ge=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,135)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),i(e),r(e)}))};r.a.render(Object(L.jsx)(c.a.StrictMode,{children:Object(L.jsx)(Ce,{})}),document.getElementById("root")),ge()}},[[98,1,2]]]);
//# sourceMappingURL=main.156fb069.chunk.js.map