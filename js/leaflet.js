/*
 Copyright (c) 2010-2012, CloudMade, Vladimir Agafonkin
 Leaflet is an open-source JavaScript library for mobile-friendly interactive maps.
 http://leaflet.cloudmade.com
*/
(function(e,t){var n,r;typeof exports!=t+""?n=exports:(r=e.L,n={},n.noConflict=function(){return e.L=r,this},e.L=n),n.version="0.4.4",n.Util={extend:function(e){var t=Array.prototype.slice.call(arguments,1);for(var n=0,r=t.length,i;n<r;n++){i=t[n]||{};for(var s in i)i.hasOwnProperty(s)&&(e[s]=i[s])}return e},bind:function(e,t){var n=arguments.length>2?Array.prototype.slice.call(arguments,2):null;return function(){return e.apply(t,n||arguments)}},stamp:function(){var e=0,t="_leaflet_id";return function(n){return n[t]=n[t]||++e,n[t]}}(),limitExecByInterval:function(e,t,n){var r,i;return function s(){var o=arguments;if(r){i=!0;return}r=!0,setTimeout(function(){r=!1,i&&(s.apply(n,o),i=!1)},t),e.apply(n,o)}},falseFn:function(){return!1},formatNum:function(e,t){var n=Math.pow(10,t||5);return Math.round(e*n)/n},splitWords:function(e){return e.replace(/^\s+|\s+$/g,"").split(/\s+/)},setOptions:function(e,t){return e.options=n.Util.extend({},e.options,t),e.options},getParamString:function(e){var t=[];for(var n in e)e.hasOwnProperty(n)&&t.push(n+"="+e[n]);return"?"+t.join("&")},template:function(e,t){return e.replace(/\{ *([\w_]+) *\}/g,function(e,n){var r=t[n];if(!t.hasOwnProperty(n))throw Error("No value provided for variable "+e);return r})},emptyImageUrl:"data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="},function(){function t(t){var n,r,i=["webkit","moz","o","ms"];for(n=0;n<i.length&&!r;n++)r=e[i[n]+t];return r}function r(t){return e.setTimeout(t,1e3/60)}var i=e.requestAnimationFrame||t("RequestAnimationFrame")||r,s=e.cancelAnimationFrame||t("CancelAnimationFrame")||t("CancelRequestAnimationFrame")||function(t){e.clearTimeout(t)};n.Util.requestAnimFrame=function(t,s,o,u){t=n.Util.bind(t,s);if(!o||i!==r)return i.call(e,t,u);t()},n.Util.cancelAnimFrame=function(t){t&&s.call(e,t)}}(),n.Class=function(){},n.Class.extend=function(e){var t=function(){this.initialize&&this.initialize.apply(this,arguments)},r=function(){};r.prototype=this.prototype;var i=new r;i.constructor=t,t.prototype=i;for(var s in this)this.hasOwnProperty(s)&&s!=="prototype"&&(t[s]=this[s]);return e.statics&&(n.Util.extend(t,e.statics),delete e.statics),e.includes&&(n.Util.extend.apply(null,[i].concat(e.includes)),delete e.includes),e.options&&i.options&&(e.options=n.Util.extend({},i.options,e.options)),n.Util.extend(i,e),t},n.Class.include=function(e){n.Util.extend(this.prototype,e)},n.Class.mergeOptions=function(e){n.Util.extend(this.prototype.options,e)};var i="_leaflet_events";n.Mixin={},n.Mixin.Events={addEventListener:function(e,t,r){var s=this[i]=this[i]||{},o,u,a;if(typeof e=="object"){for(o in e)e.hasOwnProperty(o)&&this.addEventListener(o,e[o],t);return this}e=n.Util.splitWords(e);for(u=0,a=e.length;u<a;u++)s[e[u]]=s[e[u]]||[],s[e[u]].push({action:t,context:r||this});return this},hasEventListeners:function(e){return i in this&&e in this[i]&&this[i][e].length>0},removeEventListener:function(e,t,r){var s=this[i],o,u,a,f,l;if(typeof e=="object"){for(o in e)e.hasOwnProperty(o)&&this.removeEventListener(o,e[o],t);return this}e=n.Util.splitWords(e);for(u=0,a=e.length;u<a;u++)if(this.hasEventListeners(e[u])){f=s[e[u]];for(l=f.length-1;l>=0;l--)(!t||f[l].action===t)&&(!r||f[l].context===r)&&f.splice(l,1)}return this},fireEvent:function(e,t){if(!this.hasEventListeners(e))return this;var r=n.Util.extend({type:e,target:this},t),s=this[i][e].slice();for(var o=0,u=s.length;o<u;o++)s[o].action.call(s[o].context||this,r);return this}},n.Mixin.Events.on=n.Mixin.Events.addEventListener,n.Mixin.Events.off=n.Mixin.Events.removeEventListener,n.Mixin.Events.fire=n.Mixin.Events.fireEvent,function(){var r=navigator.userAgent.toLowerCase(),i=!!e.ActiveXObject,s=i&&!e.XMLHttpRequest,o=r.indexOf("webkit")!==-1,u=r.indexOf("gecko")!==-1,a=r.indexOf("chrome")!==-1,f=e.opera,l=r.indexOf("android")!==-1,c=r.search("android [23]")!==-1,h=typeof orientation!=t+""?!0:!1,p=document.documentElement,d=i&&"transition"in p.style,v=o&&"WebKitCSSMatrix"in e&&"m11"in new e.WebKitCSSMatrix,m=u&&"MozPerspective"in p.style,g=f&&"OTransition"in p.style,y=!e.L_NO_TOUCH&&function(){var e="ontouchstart";if(e in p)return!0;var t=document.createElement("div"),n=!1;return t.setAttribute?(t.setAttribute(e,"return;"),typeof t[e]=="function"&&(n=!0),t.removeAttribute(e),t=null,n):!1}(),b="devicePixelRatio"in e&&e.devicePixelRatio>1||"matchMedia"in e&&e.matchMedia("(min-resolution:144dpi)").matches;n.Browser={ua:r,ie:i,ie6:s,webkit:o,gecko:u,opera:f,android:l,android23:c,chrome:a,ie3d:d,webkit3d:v,gecko3d:m,opera3d:g,any3d:!e.L_DISABLE_3D&&(d||v||m||g),mobile:h,mobileWebkit:h&&o,mobileWebkit3d:h&&v,mobileOpera:h&&f,touch:y,retina:b}}(),n.Point=function(e,t,n){this.x=n?Math.round(e):e,this.y=n?Math.round(t):t},n.Point.prototype={add:function(e){return this.clone()._add(n.point(e))},_add:function(e){return this.x+=e.x,this.y+=e.y,this},subtract:function(e){return this.clone()._subtract(n.point(e))},_subtract:function(e){return this.x-=e.x,this.y-=e.y,this},divideBy:function(e,t){return new n.Point(this.x/e,this.y/e,t)},multiplyBy:function(e,t){return new n.Point(this.x*e,this.y*e,t)},distanceTo:function(e){e=n.point(e);var t=e.x-this.x,r=e.y-this.y;return Math.sqrt(t*t+r*r)},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},clone:function(){return new n.Point(this.x,this.y)},toString:function(){return"Point("+n.Util.formatNum(this.x)+", "+n.Util.formatNum(this.y)+")"}},n.point=function(e,t,r){return e instanceof n.Point?e:e instanceof Array?new n.Point(e[0],e[1]):isNaN(e)?e:new n.Point(e,t,r)},n.Bounds=n.Class.extend({initialize:function(e,t){if(!e)return;var n=t?[e,t]:e;for(var r=0,i=n.length;r<i;r++)this.extend(n[r])},extend:function(e){return e=n.point(e),!this.min&&!this.max?(this.min=e.clone(),this.max=e.clone()):(this.min.x=Math.min(e.x,this.min.x),this.max.x=Math.max(e.x,this.max.x),this.min.y=Math.min(e.y,this.min.y),this.max.y=Math.max(e.y,this.max.y)),this},getCenter:function(e){return new n.Point((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,e)},getBottomLeft:function(){return new n.Point(this.min.x,this.max.y)},getTopRight:function(){return new n.Point(this.max.x,this.min.y)},contains:function(e){var t,r;return typeof e[0]=="number"||e instanceof n.Point?e=n.point(e):e=n.bounds(e),e instanceof n.Bounds?(t=e.min,r=e.max):t=r=e,t.x>=this.min.x&&r.x<=this.max.x&&t.y>=this.min.y&&r.y<=this.max.y},intersects:function(e){e=n.bounds(e);var t=this.min,r=this.max,i=e.min,s=e.max,o=s.x>=t.x&&i.x<=r.x,u=s.y>=t.y&&i.y<=r.y;return o&&u}}),n.bounds=function(e,t){return!e||e instanceof n.Bounds?e:new n.Bounds(e,t)},n.Transformation=n.Class.extend({initialize:function(e,t,n,r){this._a=e,this._b=t,this._c=n,this._d=r},transform:function(e,t){return this._transform(e.clone(),t)},_transform:function(e,t){return t=t||1,e.x=t*(this._a*e.x+this._b),e.y=t*(this._c*e.y+this._d),e},untransform:function(e,t){return t=t||1,new n.Point((e.x/t-this._b)/this._a,(e.y/t-this._d)/this._c)}}),n.DomUtil={get:function(e){return typeof e=="string"?document.getElementById(e):e},getStyle:function(e,t){var n=e.style[t];!n&&e.currentStyle&&(n=e.currentStyle[t]);if(!n||n==="auto"){var r=document.defaultView.getComputedStyle(e,null);n=r?r[t]:null}return n==="auto"?null:n},getViewportOffset:function(e){var t=0,r=0,i=e,s=document.body;do{t+=i.offsetTop||0,r+=i.offsetLeft||0;if(i.offsetParent===s&&n.DomUtil.getStyle(i,"position")==="absolute")break;if(n.DomUtil.getStyle(i,"position")==="fixed"){t+=s.scrollTop||0,r+=s.scrollLeft||0;break}i=i.offsetParent}while(i);i=e;do{if(i===s)break;t-=i.scrollTop||0,r-=i.scrollLeft||0,i=i.parentNode}while(i);return new n.Point(r,t)},create:function(e,t,n){var r=document.createElement(e);return r.className=t,n&&n.appendChild(r),r},disableTextSelection:function(){document.selection&&document.selection.empty&&document.selection.empty(),this._onselectstart||(this._onselectstart=document.onselectstart,document.onselectstart=n.Util.falseFn)},enableTextSelection:function(){document.onselectstart=this._onselectstart,this._onselectstart=null},hasClass:function(e,t){return e.className.length>0&&RegExp("(^|\\s)"+t+"(\\s|$)").test(e.className)},addClass:function(e,t){n.DomUtil.hasClass(e,t)||(e.className+=(e.className?" ":"")+t)},removeClass:function(e,t){function n(e,n){return n===t?"":e}e.className=e.className.replace(/(\S+)\s*/g,n).replace(/(^\s+|\s+$)/,"")},setOpacity:function(e,t){if("opacity"in e.style)e.style.opacity=t;else if(n.Browser.ie){var r=!1,i="DXImageTransform.Microsoft.Alpha";try{r=e.filters.item(i)}catch(s){}t=Math.round(t*100),r?(r.Enabled=t!==100,r.Opacity=t):e.style.filter+=" progid:"+i+"(opacity="+t+")"}},testProp:function(e){var t=document.documentElement.style;for(var n=0;n<e.length;n++)if(e[n]in t)return e[n];return!1},getTranslateString:function(e){var t=n.Browser.webkit3d,r="translate"+(t?"3d":"")+"(",i=(t?",0":"")+")";return r+e.x+"px,"+e.y+"px"+i},getScaleString:function(e,t){var r=n.DomUtil.getTranslateString(t),i=" scale("+e+") ",s=n.DomUtil.getTranslateString(t.multiplyBy(-1));return r+i+s},setPosition:function(e,t,r){e._leaflet_pos=t,!r&&n.Browser.any3d?(e.style[n.DomUtil.TRANSFORM]=n.DomUtil.getTranslateString(t),n.Browser.mobileWebkit3d&&(e.style.WebkitBackfaceVisibility="hidden")):(e.style.left=t.x+"px",e.style.top=t.y+"px")},getPosition:function(e){return e._leaflet_pos}},n.Util.extend(n.DomUtil,{TRANSITION:n.DomUtil.testProp(["transition","webkitTransition","OTransition","MozTransition","msTransition"]),TRANSFORM:n.DomUtil.testProp(["transform","WebkitTransform","OTransform","MozTransform","msTransform"])}),n.LatLng=function(e,t,n){var r=parseFloat(e),i=parseFloat(t);if(isNaN(r)||isNaN(i))throw Error("Invalid LatLng object: ("+e+", "+t+")");n!==!0&&(r=Math.max(Math.min(r,90),-90),i=(i+180)%360+(i<-180||i===180?180:-180)),this.lat=r,this.lng=i},n.Util.extend(n.LatLng,{DEG_TO_RAD:Math.PI/180,RAD_TO_DEG:180/Math.PI,MAX_MARGIN:1e-9}),n.LatLng.prototype={equals:function(e){if(!e)return!1;e=n.latLng(e);var t=Math.max(Math.abs(this.lat-e.lat),Math.abs(this.lng-e.lng));return t<=n.LatLng.MAX_MARGIN},toString:function(){return"LatLng("+n.Util.formatNum(this.lat)+", "+n.Util.formatNum(this.lng)+")"},distanceTo:function(e){e=n.latLng(e);var t=6378137,r=n.LatLng.DEG_TO_RAD,i=(e.lat-this.lat)*r,s=(e.lng-this.lng)*r,o=this.lat*r,u=e.lat*r,a=Math.sin(i/2),f=Math.sin(s/2),l=a*a+f*f*Math.cos(o)*Math.cos(u);return t*2*Math.atan2(Math.sqrt(l),Math.sqrt(1-l))}},n.latLng=function(e,t,r){return e instanceof n.LatLng?e:e instanceof Array?new n.LatLng(e[0],e[1]):isNaN(e)?e:new n.LatLng(e,t,r)},n.LatLngBounds=n.Class.extend({initialize:function(e,t){if(!e)return;var n=t?[e,t]:e;for(var r=0,i=n.length;r<i;r++)this.extend(n[r])},extend:function(e){return typeof e[0]=="number"||e instanceof n.LatLng?e=n.latLng(e):e=n.latLngBounds(e),e instanceof n.LatLng?!this._southWest&&!this._northEast?(this._southWest=new n.LatLng(e.lat,e.lng,!0),this._northEast=new n.LatLng(e.lat,e.lng,!0)):(this._southWest.lat=Math.min(e.lat,this._southWest.lat),this._southWest.lng=Math.min(e.lng,this._southWest.lng),this._northEast.lat=Math.max(e.lat,this._northEast.lat),this._northEast.lng=Math.max(e.lng,this._northEast.lng)):e instanceof n.LatLngBounds&&(this.extend(e._southWest),this.extend(e._northEast)),this},pad:function(e){var t=this._southWest,r=this._northEast,i=Math.abs(t.lat-r.lat)*e,s=Math.abs(t.lng-r.lng)*e;return new n.LatLngBounds(new n.LatLng(t.lat-i,t.lng-s),new n.LatLng(r.lat+i,r.lng+s))},getCenter:function(){return new n.LatLng((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new n.LatLng(this._northEast.lat,this._southWest.lng,!0)},getSouthEast:function(){return new n.LatLng(this._southWest.lat,this._northEast.lng,!0)},contains:function(e){typeof e[0]=="number"||e instanceof n.LatLng?e=n.latLng(e):e=n.latLngBounds(e);var t=this._southWest,r=this._northEast,i,s;return e instanceof n.LatLngBounds?(i=e.getSouthWest(),s=e.getNorthEast()):i=s=e,i.lat>=t.lat&&s.lat<=r.lat&&i.lng>=t.lng&&s.lng<=r.lng},intersects:function(e){e=n.latLngBounds(e);var t=this._southWest,r=this._northEast,i=e.getSouthWest(),s=e.getNorthEast(),o=s.lat>=t.lat&&i.lat<=r.lat,u=s.lng>=t.lng&&i.lng<=r.lng;return o&&u},toBBoxString:function(){var e=this._southWest,t=this._northEast;return[e.lng,e.lat,t.lng,t.lat].join(",")},equals:function(e){return e?(e=n.latLngBounds(e),this._southWest.equals(e.getSouthWest())&&this._northEast.equals(e.getNorthEast())):!1}}),n.latLngBounds=function(e,t){return!e||e instanceof n.LatLngBounds?e:new n.LatLngBounds(e,t)},n.Projection={},n.Projection.SphericalMercator={MAX_LATITUDE:85.0511287798,project:function(e){var t=n.LatLng.DEG_TO_RAD,r=this.MAX_LATITUDE,i=Math.max(Math.min(r,e.lat),-r),s=e.lng*t,o=i*t;return o=Math.log(Math.tan(Math.PI/4+o/2)),new n.Point(s,o)},unproject:function(e){var t=n.LatLng.RAD_TO_DEG,r=e.x*t,i=(2*Math.atan(Math.exp(e.y))-Math.PI/2)*t;return new n.LatLng(i,r,!0)}},n.Projection.LonLat={project:function(e){return new n.Point(e.lng,e.lat)},unproject:function(e){return new n.LatLng(e.y,e.x,!0)}},n.CRS={latLngToPoint:function(e,t){var n=this.projection.project(e),r=this.scale(t);return this.transformation._transform(n,r)},pointToLatLng:function(e,t){var n=this.scale(t),r=this.transformation.untransform(e,n);return this.projection.unproject(r)},project:function(e){return this.projection.project(e)},scale:function(e){return 256*Math.pow(2,e)}},n.CRS.EPSG3857=n.Util.extend({},n.CRS,{code:"EPSG:3857",projection:n.Projection.SphericalMercator,transformation:new n.Transformation(.5/Math.PI,.5,-0.5/Math.PI,.5),project:function(e){var t=this.projection.project(e),n=6378137;return t.multiplyBy(n)}}),n.CRS.EPSG900913=n.Util.extend({},n.CRS.EPSG3857,{code:"EPSG:900913"}),n.CRS.EPSG4326=n.Util.extend({},n.CRS,{code:"EPSG:4326",projection:n.Projection.LonLat,transformation:new n.Transformation(1/360,.5,-1/360,.5)}),n.Map=n.Class.extend({includes:n.Mixin.Events,options:{crs:n.CRS.EPSG3857,fadeAnimation:n.DomUtil.TRANSITION&&!n.Browser.android23,trackResize:!0,markerZoomAnimation:n.DomUtil.TRANSITION&&n.Browser.any3d},initialize:function(e,r){r=n.Util.setOptions(this,r),this._initContainer(e),this._initLayout(),this._initHooks(),this._initEvents(),r.maxBounds&&this.setMaxBounds(r.maxBounds),r.center&&r.zoom!==t&&this.setView(n.latLng(r.center),r.zoom,!0),this._initLayers(r.layers)},setView:function(e,t){return this._resetView(n.latLng(e),this._limitZoom(t)),this},setZoom:function(e){return this.setView(this.getCenter(),e)},zoomIn:function(){return this.setZoom(this._zoom+1)},zoomOut:function(){return this.setZoom(this._zoom-1)},fitBounds:function(e){var t=this.getBoundsZoom(e);return this.setView(n.latLngBounds(e).getCenter(),t)},fitWorld:function(){var e=new n.LatLng(-60,-170),t=new n.LatLng(85,179);return this.fitBounds(new n.LatLngBounds(e,t))},panTo:function(e){return this.setView(e,this._zoom)},panBy:function(e){return this.fire("movestart"),this._rawPanBy(n.point(e)),this.fire("move"),this.fire("moveend")},setMaxBounds:function(e){e=n.latLngBounds(e),this.options.maxBounds=e;if(!e)return this._boundsMinZoom=null,this;var t=this.getBoundsZoom(e,!0);return this._boundsMinZoom=t,this._loaded&&(this._zoom<t?this.setView(e.getCenter(),t):this.panInsideBounds(e)),this},panInsideBounds:function(e){e=n.latLngBounds(e);var t=this.getBounds(),r=this.project(t.getSouthWest()),i=this.project(t.getNorthEast()),s=this.project(e.getSouthWest()),o=this.project(e.getNorthEast()),u=0,a=0;return i.y<o.y&&(a=o.y-i.y),i.x>o.x&&(u=o.x-i.x),r.y>s.y&&(a=s.y-r.y),r.x<s.x&&(u=s.x-r.x),this.panBy(new n.Point(u,a,!0))},addLayer:function(e){var t=n.Util.stamp(e);if(this._layers[t])return this;this._layers[t]=e,e.options&&!isNaN(e.options.maxZoom)&&(this._layersMaxZoom=Math.max(this._layersMaxZoom||0,e.options.maxZoom)),e.options&&!isNaN(e.options.minZoom)&&(this._layersMinZoom=Math.min(this._layersMinZoom||Infinity,e.options.minZoom)),this.options.zoomAnimation&&n.TileLayer&&e instanceof n.TileLayer&&(this._tileLayersNum++,this._tileLayersToLoad++,e.on("load",this._onTileLayerLoad,this));var r=function(){e.onAdd(this),this.fire("layeradd",{layer:e})};return this._loaded?r.call(this):this.on("load",r,this),this},removeLayer:function(e){var t=n.Util.stamp(e);if(!this._layers[t])return;return e.onRemove(this),delete this._layers[t],this.options.zoomAnimation&&n.TileLayer&&e instanceof n.TileLayer&&(this._tileLayersNum--,this._tileLayersToLoad--,e.off("load",this._onTileLayerLoad,this)),this.fire("layerremove",{layer:e})},hasLayer:function(e){var t=n.Util.stamp(e);return this._layers.hasOwnProperty(t)},invalidateSize:function(e){var t=this.getSize();this._sizeChanged=!0,this.options.maxBounds&&this.setMaxBounds(this.options.maxBounds);if(!this._loaded)return this;var r=t.subtract(this.getSize()).divideBy(2,!0);return e===!0?this.panBy(r):(this._rawPanBy(r),this.fire("move"),clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(n.Util.bind(this.fire,this,"moveend"),200)),this},addHandler:function(e,t){if(!t)return;return this[e]=new t(this),this.options[e]&&this[e].enable(),this},getCenter:function(){return this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var e=this.getPixelBounds(),t=this.unproject(e.getBottomLeft()),r=this.unproject(e.getTopRight());return new n.LatLngBounds(t,r)},getMinZoom:function(){var e=this.options.minZoom||0,t=this._layersMinZoom||0,n=this._boundsMinZoom||0;return Math.max(e,t,n)},getMaxZoom:function(){var e=this.options.maxZoom===t?Infinity:this.options.maxZoom,n=this._layersMaxZoom===t?Infinity:this._layersMaxZoom;return Math.min(e,n)},getBoundsZoom:function(e,t){e=n.latLngBounds(e);var r=this.getSize(),i=this.options.minZoom||0,s=this.getMaxZoom(),o=e.getNorthEast(),u=e.getSouthWest(),a,f,l,c=!0;t&&i--;do i++,f=this.project(o,i),l=this.project(u,i),a=new n.Point(Math.abs(f.x-l.x),Math.abs(l.y-f.y)),t?c=a.x<r.x||a.y<r.y:c=a.x<=r.x&&a.y<=r.y;while(c&&i<=s);return c&&t?null:t?i:i-1},getSize:function(){if(!this._size||this._sizeChanged)this._size=new n.Point(this._container.clientWidth,this._container.clientHeight),this._sizeChanged=!1;return this._size},getPixelBounds:function(){var e=this._getTopLeftPoint();return new n.Bounds(e,e.add(this.getSize()))},getPixelOrigin:function(){return this._initialTopLeftPoint},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(e){var t=this.options.crs;return t.scale(e)/t.scale(this._zoom)},getScaleZoom:function(e){return this._zoom+Math.log(e)/Math.LN2},project:function(e,r){return r=r===t?this._zoom:r,this.options.crs.latLngToPoint(n.latLng(e),r)},unproject:function(e,r){return r=r===t?this._zoom:r,this.options.crs.pointToLatLng(n.point(e),r)},layerPointToLatLng:function(e){var t=n.point(e).add(this._initialTopLeftPoint);return this.unproject(t)},latLngToLayerPoint:function(e){var t=this.project(n.latLng(e))._round();return t._subtract(this._initialTopLeftPoint)},containerPointToLayerPoint:function(e){return n.point(e).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(e){return n.point(e).add(this._getMapPanePos())},containerPointToLatLng:function(e){var t=this.containerPointToLayerPoint(n.point(e));return this.layerPointToLatLng(t)},latLngToContainerPoint:function(e){return this.layerPointToContainerPoint(this.latLngToLayerPoint(n.latLng(e)))},mouseEventToContainerPoint:function(e){return n.DomEvent.getMousePosition(e,this._container)},mouseEventToLayerPoint:function(e){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(e))},mouseEventToLatLng:function(e){return this.layerPointToLatLng(this.mouseEventToLayerPoint(e))},_initContainer:function(e){var t=this._container=n.DomUtil.get(e);if(t._leaflet)throw Error("Map container is already initialized.");t._leaflet=!0},_initLayout:function(){var e=this._container;e.innerHTML="",n.DomUtil.addClass(e,"leaflet-container"),n.Browser.touch&&n.DomUtil.addClass(e,"leaflet-touch"),this.options.fadeAnimation&&n.DomUtil.addClass(e,"leaflet-fade-anim");var t=n.DomUtil.getStyle(e,"position");t!=="absolute"&&t!=="relative"&&t!=="fixed"&&(e.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var e=this._panes={};this._mapPane=e.mapPane=this._createPane("leaflet-map-pane",this._container),this._tilePane=e.tilePane=this._createPane("leaflet-tile-pane",this._mapPane),this._objectsPane=e.objectsPane=this._createPane("leaflet-objects-pane",this._mapPane),e.shadowPane=this._createPane("leaflet-shadow-pane"),e.overlayPane=this._createPane("leaflet-overlay-pane"),e.markerPane=this._createPane("leaflet-marker-pane"),e.popupPane=this._createPane("leaflet-popup-pane");var t=" leaflet-zoom-hide";this.options.markerZoomAnimation||(n.DomUtil.addClass(e.markerPane,t),n.DomUtil.addClass(e.shadowPane,t),n.DomUtil.addClass(e.popupPane,t))},_createPane:function(e,t){return n.DomUtil.create("div",e,t||this._objectsPane)},_initializers:[],_initHooks:function(){var e,t;for(e=0,t=this._initializers.length;e<t;e++)this._initializers[e].call(this)},_initLayers:function(e){e=e?e instanceof Array?e:[e]:[],this._layers={},this._tileLayersNum=0;var t,n;for(t=0,n=e.length;t<n;t++)this.addLayer(e[t])},_resetView:function(e,t,r,i){var s=this._zoom!==t;i||(this.fire("movestart"),s&&this.fire("zoomstart")),this._zoom=t,this._initialTopLeftPoint=this._getNewTopLeftPoint(e),r?this._initialTopLeftPoint._add(this._getMapPanePos()):n.DomUtil.setPosition(this._mapPane,new n.Point(0,0)),this._tileLayersToLoad=this._tileLayersNum,this.fire("viewreset",{hard:!r}),this.fire("move"),(s||i)&&this.fire("zoomend"),this.fire("moveend",{hard:!r}),this._loaded||(this._loaded=!0,this.fire("load"))},_rawPanBy:function(e){n.DomUtil.setPosition(this._mapPane,this._getMapPanePos().subtract(e))},_initEvents:function(){if(!n.DomEvent)return;n.DomEvent.on(this._container,"click",this._onMouseClick,this);var t=["dblclick","mousedown","mouseup","mouseenter","mouseleave","mousemove","contextmenu"],r,i;for(r=0,i=t.length;r<i;r++)n.DomEvent.on(this._container,t[r],this._fireMouseEvent,this);this.options.trackResize&&n.DomEvent.on(e,"resize",this._onResize,this)},_onResize:function(){n.Util.cancelAnimFrame(this._resizeRequest),this._resizeRequest=n.Util.requestAnimFrame(this.invalidateSize,this,!1,this._container)},_onMouseClick:function(e){if(!this._loaded||this.dragging&&this.dragging.moved())return;this.fire("preclick"),this._fireMouseEvent(e)},_fireMouseEvent:function(e){if(!this._loaded)return;var t=e.type;t=t==="mouseenter"?"mouseover":t==="mouseleave"?"mouseout":t;if(!this.hasEventListeners(t))return;t==="contextmenu"&&n.DomEvent.preventDefault(e);var r=this.mouseEventToContainerPoint(e),i=this.containerPointToLayerPoint(r),s=this.layerPointToLatLng(i);this.fire(t,{latlng:s,layerPoint:i,containerPoint:r,originalEvent:e})},_onTileLayerLoad:function(){this._tileLayersToLoad--,this._tileLayersNum&&!this._tileLayersToLoad&&this._tileBg&&(clearTimeout(this._clearTileBgTimer),this._clearTileBgTimer=setTimeout(n.Util.bind(this._clearTileBg,this),500))},_getMapPanePos:function(){return n.DomUtil.getPosition(this._mapPane)},_getTopLeftPoint:function(){if(!this._loaded)throw Error("Set map center and zoom first.");return this._initialTopLeftPoint.subtract(this._getMapPanePos())},_getNewTopLeftPoint:function(e,t){var n=this.getSize().divideBy(2);return this.project(e,t)._subtract(n)._round()},_latLngToNewLayerPoint:function(e,t,n){var r=this._getNewTopLeftPoint(n,t).add(this._getMapPanePos());return this.project(e,t)._subtract(r)},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize().divideBy(2))},_getCenterOffset:function(e){return this.latLngToLayerPoint(e).subtract(this._getCenterLayerPoint())},_limitZoom:function(e){var t=this.getMinZoom(),n=this.getMaxZoom();return Math.max(t,Math.min(n,e))}}),n.Map.addInitHook=function(e){var t=Array.prototype.slice.call(arguments,1),n=typeof e=="function"?e:function(){this[e].apply(this,t)};this.prototype._initializers.push(n)},n.map=function(e,t){return new n.Map(e,t)},n.Projection.Mercator={MAX_LATITUDE:85.0840591556,R_MINOR:6356752.3142,R_MAJOR:6378137,project:function(e){var t=n.LatLng.DEG_TO_RAD,r=this.MAX_LATITUDE,i=Math.max(Math.min(r,e.lat),-r),s=this.R_MAJOR,o=this.R_MINOR,u=e.lng*t*s,a=i*t,f=o/s,l=Math.sqrt(1-f*f),c=l*Math.sin(a);c=Math.pow((1-c)/(1+c),l*.5);var h=Math.tan(.5*(Math.PI*.5-a))/c;return a=-o*Math.log(h),new n.Point(u,a)},unproject:function(e){var t=n.LatLng.RAD_TO_DEG,r=this.R_MAJOR,i=this.R_MINOR,s=e.x*t/r,o=i/r,u=Math.sqrt(1-o*o),a=Math.exp(-e.y/i),f=Math.PI/2-2*Math.atan(a),l=15,c=1e-7,h=l,p=.1,d;while(Math.abs(p)>c&&--h>0)d=u*Math.sin(f),p=Math.PI/2-2*Math.atan(a*Math.pow((1-d)/(1+d),.5*u))-f,f+=p;return new n.LatLng(f*t,s,!0)}},n.CRS.EPSG3395=n.Util.extend({},n.CRS,{code:"EPSG:3395",projection:n.Projection.Mercator,transformation:function(){var e=n.Projection.Mercator,t=e.R_MAJOR,r=e.R_MINOR;return new n.Transformation(.5/(Math.PI*t),.5,-0.5/(Math.PI*r),.5)}()}),n.TileLayer=n.Class.extend({includes:n.Mixin.Events,options:{minZoom:0,maxZoom:18,tileSize:256,subdomains:"abc",errorTileUrl:"",attribution:"",zoomOffset:0,opacity:1,unloadInvisibleTiles:n.Browser.mobile,updateWhenIdle:n.Browser.mobile},initialize:function(e,t){t=n.Util.setOptions(this,t),t.detectRetina&&n.Browser.retina&&t.maxZoom>0&&(t.tileSize=Math.floor(t.tileSize/2),t.zoomOffset++,t.minZoom>0&&t.minZoom--,this.options.maxZoom--),this._url=e;var r=this.options.subdomains;typeof r=="string"&&(this.options.subdomains=r.split(""))},onAdd:function(e){this._map=e,this._initContainer(),this._createTileProto(),e.on({viewreset:this._resetCallback,moveend:this._update},this),this.options.updateWhenIdle||(this._limitedUpdate=n.Util.limitExecByInterval(this._update,150,this),e.on("move",this._limitedUpdate,this)),this._reset(),this._update()},addTo:function(e){return e.addLayer(this),this},onRemove:function(e){e._panes.tilePane.removeChild(this._container),e.off({viewreset:this._resetCallback,moveend:this._update},this),this.options.updateWhenIdle||e.off("move",this._limitedUpdate,this),this._container=null,this._map=null},bringToFront:function(){var e=this._map._panes.tilePane;return this._container&&(e.appendChild(this._container),this._setAutoZIndex(e,Math.max)),this},bringToBack:function(){var e=this._map._panes.tilePane;return this._container&&(e.insertBefore(this._container,e.firstChild),this._setAutoZIndex(e,Math.min)),this},getAttribution:function(){return this.options.attribution},setOpacity:function(e){return this.options.opacity=e,this._map&&this._updateOpacity(),this},setZIndex:function(e){return this.options.zIndex=e,this._updateZIndex(),this},setUrl:function(e,t){return this._url=e,t||this.redraw(),this},redraw:function(){return this._map&&(this._map._panes.tilePane.empty=!1,this._reset(!0),this._update()),this},_updateZIndex:function(){this._container&&this.options.zIndex!==t&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(e,t){var n=e.getElementsByClassName("leaflet-layer"),r=-t(Infinity,-Infinity),i;for(var s=0,o=n.length;s<o;s++)n[s]!==this._container&&(i=parseInt(n[s].style.zIndex,10),isNaN(i)||(r=t(r,i)));this._container.style.zIndex=isFinite(r)?r+t(1,-1):""},_updateOpacity:function(){n.DomUtil.setOpacity(this._container,this.options.opacity);var e,t=this._tiles;if(n.Browser.webkit)for(e in t)t.hasOwnProperty(e)&&(t[e].style.webkitTransform+=" translate(0,0)")},_initContainer:function(){var e=this._map._panes.tilePane;if(!this._container||e.empty)this._container=n.DomUtil.create("div","leaflet-layer"),this._updateZIndex(),e.appendChild(this._container),this.options.opacity<1&&this._updateOpacity()},_resetCallback:function(e){this._reset(e.hard)},_reset:function(e){var t,n=this._tiles;for(t in n)n.hasOwnProperty(t)&&this.fire("tileunload",{tile:n[t]});this._tiles={},this._tilesToLoad=0,this.options.reuseTiles&&(this._unusedTiles=[]),e&&this._container&&(this._container.innerHTML=""),this._initContainer()},_update:function(e){if(this._map._panTransition&&this._map._panTransition._inProgress)return;var t=this._map.getPixelBounds(),r=this._map.getZoom(),i=this.options.tileSize;if(r>this.options.maxZoom||r<this.options.minZoom)return;var s=new n.Point(Math.floor(t.min.x/i),Math.floor(t.min.y/i)),o=new n.Point(Math.floor(t.max.x/i),Math.floor(t.max.y/i)),u=new n.Bounds(s,o);this._addTilesFromCenterOut(u),(this.options.unloadInvisibleTiles||this.options.reuseTiles)&&this._removeOtherTiles(u)},_addTilesFromCenterOut:function(e){var t=[],r=e.getCenter(),i,s,o;for(i=e.min.y;i<=e.max.y;i++)for(s=e.min.x;s<=e.max.x;s++)o=new n.Point(s,i),this._tileShouldBeLoaded(o)&&t.push(o);var u=t.length;if(u===0)return;t.sort(function(e,t){return e.distanceTo(r)-t.distanceTo(r)});var a=document.createDocumentFragment();this._tilesToLoad||this.fire("loading"),this._tilesToLoad+=u;for(s=0;s<u;s++)this._addTile(t[s],a);this._container.appendChild(a)},_tileShouldBeLoaded:function(e){if(e.x+":"+e.y in this._tiles)return!1;if(!this.options.continuousWorld){var t=this._getWrapTileNum();if(this.options.noWrap&&(e.x<0||e.x>=t)||e.y<0||e.y>=t)return!1}return!0},_removeOtherTiles:function(e){var t,n,r,i;for(i in this._tiles)this._tiles.hasOwnProperty(i)&&(t=i.split(":"),n=parseInt(t[0],10),r=parseInt(t[1],10),(n<e.min.x||n>e.max.x||r<e.min.y||r>e.max.y)&&this._removeTile(i))},_removeTile:function(e){var t=this._tiles[e];this.fire("tileunload",{tile:t,url:t.src}),this.options.reuseTiles?(n.DomUtil.removeClass(t,"leaflet-tile-loaded"),this._unusedTiles.push(t)):t.parentNode===this._container&&this._container.removeChild(t),n.Browser.android||(t.src=n.Util.emptyImageUrl),delete this._tiles[e]},_addTile:function(e,t){var r=this._getTilePos(e),i=this._getTile();n.DomUtil.setPosition(i,r,n.Browser.chrome||n.Browser.android23),this._tiles[e.x+":"+e.y]=i,this._loadTile(i,e),i.parentNode!==this._container&&t.appendChild(i)},_getZoomForUrl:function(){var e=this.options,t=this._map.getZoom();return e.zoomReverse&&(t=e.maxZoom-t),t+e.zoomOffset},_getTilePos:function(e){var t=this._map.getPixelOrigin(),n=this.options.tileSize;return e.multiplyBy(n).subtract(t)},getTileUrl:function(e){return this._adjustTilePoint(e),n.Util.template(this._url,n.Util.extend({s:this._getSubdomain(e),z:this._getZoomForUrl(),x:e.x,y:e.y},this.options))},_getWrapTileNum:function(){return Math.pow(2,this._getZoomForUrl())},_adjustTilePoint:function(e){var t=this._getWrapTileNum();!this.options.continuousWorld&&!this.options.noWrap&&(e.x=(e.x%t+t)%t),this.options.tms&&(e.y=t-e.y-1)},_getSubdomain:function(e){var t=(e.x+e.y)%this.options.subdomains.length;return this.options.subdomains[t]},_createTileProto:function(){var e=this._tileImg=n.DomUtil.create("img","leaflet-tile");e.galleryimg="no";var t=this.options.tileSize;e.style.width=t+"px",e.style.height=t+"px"},_getTile:function(){if(this.options.reuseTiles&&this._unusedTiles.length>0){var e=this._unusedTiles.pop();return this._resetTile(e),e}return this._createTile()},_resetTile:function(e){},_createTile:function(){var e=this._tileImg.cloneNode(!1);return e.onselectstart=e.onmousemove=n.Util.falseFn,e},_loadTile:function(e,t){e._layer=this,e.onload=this._tileOnLoad,e.onerror=this._tileOnError,e.src=this.getTileUrl(t)},_tileLoaded:function(){this._tilesToLoad--,this._tilesToLoad||this.fire("load")},_tileOnLoad:function(e){var t=this._layer;this.src!==n.Util.emptyImageUrl&&(n.DomUtil.addClass(this,"leaflet-tile-loaded"),t.fire("tileload",{tile:this,url:this.src})),t._tileLoaded()},_tileOnError:function(e){var t=this._layer;t.fire("tileerror",{tile:this,url:this.src});var n=t.options.errorTileUrl;n&&(this.src=n),t._tileLoaded()}}),n.tileLayer=function(e,t){return new n.TileLayer(e,t)},n.TileLayer.WMS=n.TileLayer.extend({defaultWmsParams:{service:"WMS",request:"GetMap",version:"1.1.1",layers:"",styles:"",format:"image/jpeg",transparent:!1},initialize:function(e,t){this._url=e;var r=n.Util.extend({},this.defaultWmsParams);t.detectRetina&&n.Browser.retina?r.width=r.height=this.options.tileSize*2:r.width=r.height=this.options.tileSize;for(var i in t)this.options.hasOwnProperty(i)||(r[i]=t[i]);this.wmsParams=r,n.Util.setOptions(this,t)},onAdd:function(e){var t=parseFloat(this.wmsParams.version)>=1.3?"crs":"srs";this.wmsParams[t]=e.options.crs.code,n.TileLayer.prototype.onAdd.call(this,e)},getTileUrl:function(e,t){var r=this._map,i=r.options.crs,s=this.options.tileSize,o=e.multiplyBy(s),u=o.add(new n.Point(s,s)),a=i.project(r.unproject(o,t)),f=i.project(r.unproject(u,t)),l=[a.x,f.y,f.x,a.y].join(","),c=n.Util.template(this._url,{s:this._getSubdomain(e)});return c+n.Util.getParamString(this.wmsParams)+"&bbox="+l},setParams:function(e,t){return n.Util.extend(this.wmsParams,e),t||this.redraw(),this}}),n.tileLayer.wms=function(e,t){return new n.TileLayer.WMS(e,t)},n.TileLayer.Canvas=n.TileLayer.extend({options:{async:!1},initialize:function(e){n.Util.setOptions(this,e)},redraw:function(){var e,t=this._tiles;for(e in t)t.hasOwnProperty(e)&&this._redrawTile(t[e])},_redrawTile:function(e){this.drawTile(e,e._tilePoint,e._zoom)},_createTileProto:function(){var e=this._canvasProto=n.DomUtil.create("canvas","leaflet-tile"),t=this.options.tileSize;e.width=t,e.height=t},_createTile:function(){var e=this._canvasProto.cloneNode(!1);return e.onselectstart=e.onmousemove=n.Util.falseFn,e},_loadTile:function(e,t,n){e._layer=this,e._tilePoint=t,e._zoom=n,this.drawTile(e,t,n),this.options.async||this.tileDrawn(e)},drawTile:function(e,t,n){},tileDrawn:function(e){this._tileOnLoad.call(e)}}),n.tileLayer.canvas=function(e){return new n.TileLayer.Canvas(e)},n.ImageOverlay=n.Class.extend({includes:n.Mixin.Events,options:{opacity:1},initialize:function(e,t,r){this._url=e,this._bounds=n.latLngBounds(t),n.Util.setOptions(this,r)},onAdd:function(e){this._map=e,this._image||this._initImage(),e._panes.overlayPane.appendChild(this._image),e.on("viewreset",this._reset,this),e.options.zoomAnimation&&n.Browser.any3d&&e.on("zoomanim",this._animateZoom,this),this._reset()},onRemove:function(e){e.getPanes().overlayPane.removeChild(this._image),e.off("viewreset",this._reset,this),e.options.zoomAnimation&&e.off("zoomanim",this._animateZoom,this)},addTo:function(e){return e.addLayer(this),this},setOpacity:function(e){return this.options.opacity=e,this._updateOpacity(),this},bringToFront:function(){return this._image&&this._map._panes.overlayPane.appendChild(this._image),this},bringToBack:function(){var e=this._map._panes.overlayPane;return this._image&&e.insertBefore(this._image,e.firstChild),this},_initImage:function(){this._image=n.DomUtil.create("img","leaflet-image-layer"),this._map.options.zoomAnimation&&n.Browser.any3d?n.DomUtil.addClass(this._image,"leaflet-zoom-animated"):n.DomUtil.addClass(this._image,"leaflet-zoom-hide"),this._updateOpacity(),n.Util.extend(this._image,{galleryimg:"no",onselectstart:n.Util.falseFn,onmousemove:n.Util.falseFn,onload:n.Util.bind(this._onImageLoad,this),src:this._url})},_animateZoom:function(e){var t=this._map,r=this._image,i=t.getZoomScale(e.zoom),s=this._bounds.getNorthWest(),o=this._bounds.getSouthEast(),u=t._latLngToNewLayerPoint(s,e.zoom,e.center),a=t._latLngToNewLayerPoint(o,e.zoom,e.center).subtract(u),f=t.latLngToLayerPoint(o).subtract(t.latLngToLayerPoint(s)),l=u.add(a.subtract(f).divideBy(2));r.style[n.DomUtil.TRANSFORM]=n.DomUtil.getTranslateString(l)+" scale("+i+") "},_reset:function(){var e=this._image,t=this._map.latLngToLayerPoint(this._bounds.getNorthWest()),r=this._map.latLngToLayerPoint(this._bounds.getSouthEast()).subtract(t);n.DomUtil.setPosition(e,t),e.style.width=r.x+"px",e.style.height=r.y+"px"},_onImageLoad:function(){this.fire("load")},_updateOpacity:function(){n.DomUtil.setOpacity(this._image,this.options.opacity)}}),n.imageOverlay=function(e,t,r){return new n.ImageOverlay(e,t,r)},n.Icon=n.Class.extend({options:{className:""},initialize:function(e){n.Util.setOptions(this,e)},createIcon:function(){return this._createIcon("icon")},createShadow:function(){return this._createIcon("shadow")},_createIcon:function(e){var t=this._getIconUrl(e);if(!t){if(e==="icon")throw Error("iconUrl not set in Icon options (see the docs).");return null}var n=this._createImg(t);return this._setIconStyles(n,e),n},_setIconStyles:function(e,t){var r=this.options,i=n.point(r[t+"Size"]),s;t==="shadow"?s=n.point(r.shadowAnchor||r.iconAnchor):s=n.point(r.iconAnchor),!s&&i&&(s=i.divideBy(2,!0)),e.className="leaflet-marker-"+t+" "+r.className,s&&(e.style.marginLeft=-s.x+"px",e.style.marginTop=-s.y+"px"),i&&(e.style.width=i.x+"px",e.style.height=i.y+"px")},_createImg:function(e){var t;return n.Browser.ie6?(t=document.createElement("div"),t.style.filter='progid:DXImageTransform.Microsoft.AlphaImageLoader(src="'+e+'")'):(t=document.createElement("img"),t.src=e),t},_getIconUrl:function(e){return this.options[e+"Url"]}}),n.icon=function(e){return new n.Icon(e)},n.Icon.Default=n.Icon.extend({options:{iconSize:new n.Point(25,41),iconAnchor:new n.Point(13,41),popupAnchor:new n.Point(1,-34),shadowSize:new n.Point(41,41)},_getIconUrl:function(e){var t=e+"Url";if(this.options[t])return this.options[t];var r=n.Icon.Default.imagePath;if(!r)throw Error("Couldn't autodetect L.Icon.Default.imagePath, set it manually.");return r+"/marker-"+e+".png"}}),n.Icon.Default.imagePath=function(){var e=document.getElementsByTagName("script"),t=/\/?leaflet[\-\._]?([\w\-\._]*)\.js\??/,n,r,i,s;for(n=0,r=e.length;n<r;n++){i=e[n].src,s=i.match(t);if(s)return i.split(t)[0]+"/images"}}(),n.Marker=n.Class.extend({includes:n.Mixin.Events,options:{icon:new n.Icon.Default,title:"",clickable:!0,draggable:!1,zIndexOffset:0,opacity:1},initialize:function(e,t){n.Util.setOptions(this,t),this._latlng=n.latLng(e)},onAdd:function(e){this._map=e,e.on("viewreset",this.update,this),this._initIcon(),this.update(),e.options.zoomAnimation&&e.options.markerZoomAnimation&&e.on("zoomanim",this._animateZoom,this)},addTo:function(e){return e.addLayer(this),this},onRemove:function(e){this._removeIcon(),this.closePopup&&this.closePopup(),e.off({viewreset:this.update,zoomanim:this._animateZoom},this),this._map=null},getLatLng:function(){return this._latlng},setLatLng:function(e){this._latlng=n.latLng(e),this.update(),this._popup&&this._popup.setLatLng(e)},setZIndexOffset:function(e){this.options.zIndexOffset=e,this.update()},setIcon:function(e){this._map&&this._removeIcon(),this.options.icon=e,this._map&&(this._initIcon(),this.update())},update:function(){if(!this._icon)return;var e=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(e)},_initIcon:function(){var e=this.options,t=this._map,r=t.options.zoomAnimation&&t.options.markerZoomAnimation,i=r?"leaflet-zoom-animated":"leaflet-zoom-hide",s=!1;this._icon||(this._icon=e.icon.createIcon(),e.title&&(this._icon.title=e.title),this._initInteraction(),s=this.options.opacity<1,n.DomUtil.addClass(this._icon,i)),this._shadow||(this._shadow=e.icon.createShadow(),this._shadow&&(n.DomUtil.addClass(this._shadow,i),s=this.options.opacity<1)),s&&this._updateOpacity();var o=this._map._panes;o.markerPane.appendChild(this._icon),this._shadow&&o.shadowPane.appendChild(this._shadow)},_removeIcon:function(){var e=this._map._panes;e.markerPane.removeChild(this._icon),this._shadow&&e.shadowPane.removeChild(this._shadow),this._icon=this._shadow=null},_setPos:function(e){n.DomUtil.setPosition(this._icon,e),this._shadow&&n.DomUtil.setPosition(this._shadow,e),this._icon.style.zIndex=e.y+this.options.zIndexOffset},_animateZoom:function(e){var t=this._map._latLngToNewLayerPoint(this._latlng,e.zoom,e.center);this._setPos(t)},_initInteraction:function(){if(!this.options.clickable)return;var e=this._icon,t=["dblclick","mousedown","mouseover","mouseout"];n.DomUtil.addClass(e,"leaflet-clickable"),n.DomEvent.on(e,"click",this._onMouseClick,this);for(var r=0;r<t.length;r++)n.DomEvent.on(e,t[r],this._fireMouseEvent,this);n.Handler.MarkerDrag&&(this.dragging=new n.Handler.MarkerDrag(this),this.options.draggable&&this.dragging.enable())},_onMouseClick:function(e){n.DomEvent.stopPropagation(e);if(this.dragging&&this.dragging.moved())return;if(this._map.dragging&&this._map.dragging.moved())return;this.fire(e.type,{originalEvent:e})},_fireMouseEvent:function(e){this.fire(e.type,{originalEvent:e}),e.type!=="mousedown"&&n.DomEvent.stopPropagation(e)},setOpacity:function(e){this.options.opacity=e,this._map&&this._updateOpacity()},_updateOpacity:function(){n.DomUtil.setOpacity(this._icon,this.options.opacity),this._shadow&&n.DomUtil.setOpacity(this._shadow,this.options.opacity)}}),n.marker=function(e,t){return new n.Marker(e,t)},n.DivIcon=n.Icon.extend({options:{iconSize:new n.Point(12,12),className:"leaflet-div-icon"},createIcon:function(){var e=document.createElement("div"),t=this.options;return t.html&&(e.innerHTML=t.html),t.bgPos&&(e.style.backgroundPosition=-t.bgPos.x+"px "+ -t.bgPos.y+"px"),this._setIconStyles(e,"icon"),e},createShadow:function(){return null}}),n.divIcon=function(e){return new n.DivIcon(e)},n.Map.mergeOptions({closePopupOnClick:!0}),n.Popup=n.Class.extend({includes:n.Mixin.Events,options:{minWidth:50,maxWidth:300,maxHeight:null,autoPan:!0,closeButton:!0,offset:new n.Point(0,6),autoPanPadding:new n.Point(5,5),className:""},initialize:function(e,t){n.Util.setOptions(this,e),this._source=t},onAdd:function(e){this._map=e,this._container||this._initLayout(),this._updateContent();var t=e.options.fadeAnimation;t&&n.DomUtil.setOpacity(this._container,0),e._panes.popupPane.appendChild(this._container),e.on("viewreset",this._updatePosition,this),n.Browser.any3d&&e.on("zoomanim",this._zoomAnimation,this),e.options.closePopupOnClick&&e.on("preclick",this._close,this),this._update(),t&&n.DomUtil.setOpacity(this._container,1)},addTo:function(e){return e.addLayer(this),this},openOn:function(e){return e.openPopup(this),this},onRemove:function(e){e._panes.popupPane.removeChild(this._container),n.Util.falseFn(this._container.offsetWidth),e.off({viewreset:this._updatePosition,preclick:this._close,zoomanim:this._zoomAnimation},this),e.options.fadeAnimation&&n.DomUtil.setOpacity(this._container,0),this._map=null},setLatLng:function(e){return this._latlng=n.latLng(e),this._update(),this},setContent:function(e){return this._content=e,this._update(),this},_close:function(){var e=this._map;e&&(e._popup=null,e.removeLayer(this).fire("popupclose",{popup:this}))},_initLayout:function(){var e="leaflet-popup",t=this._container=n.DomUtil.create("div",e+" "+this.options.className+" leaflet-zoom-animated"),r;this.options.closeButton&&(r=this._closeButton=n.DomUtil.create("a",e+"-close-button",t),r.href="#close",r.innerHTML="&#215;",n.DomEvent.on(r,"click",this._onCloseButtonClick,this));var i=this._wrapper=n.DomUtil.create("div",e+"-content-wrapper",t);n.DomEvent.disableClickPropagation(i),this._contentNode=n.DomUtil.create("div",e+"-content",i),n.DomEvent.on(this._contentNode,"mousewheel",n.DomEvent.stopPropagation),this._tipContainer=n.DomUtil.create("div",e+"-tip-container",t),this._tip=n.DomUtil.create("div",e+"-tip",this._tipContainer)},_update:function(){if(!this._map)return;this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan()},_updateContent:function(){if(!this._content)return;if(typeof this._content=="string")this._contentNode.innerHTML=this._content;else{while(this._contentNode.hasChildNodes())this._contentNode.removeChild(this._contentNode.firstChild);this._contentNode.appendChild(this._content)}this.fire("contentupdate")},_updateLayout:function(){var e=this._contentNode,t=e.style;t.width="",t.whiteSpace="nowrap";var r=e.offsetWidth;r=Math.min(r,this.options.maxWidth),r=Math.max(r,this.options.minWidth),t.width=r+1+"px",t.whiteSpace="",t.height="";var i=e.offsetHeight,s=this.options.maxHeight,o="leaflet-popup-scrolled";s&&i>s?(t.height=s+"px",n.DomUtil.addClass(e,o)):n.DomUtil.removeClass(e,o),this._containerWidth=this._container.offsetWidth},_updatePosition:function(){var e=this._map.latLngToLayerPoint(this._latlng),t=n.Browser.any3d,r=this.options.offset;t&&n.DomUtil.setPosition(this._container,e),this._containerBottom=-r.y-(t?0:e.y),this._containerLeft=-Math.round(this._containerWidth/2)+r.x+(t?0:e.x),this._container.style.bottom=this._containerBottom+"px",this._container.style.left=this._containerLeft+"px"},_zoomAnimation:function(e){var t=this._map._latLngToNewLayerPoint(this._latlng,e.zoom,e.center);n.DomUtil.setPosition(this._container,t)},_adjustPan:function(){if(!this.options.autoPan)return;var e=this._map,t=this._container.offsetHeight,r=this._containerWidth,i=new n.Point(this._containerLeft,-t-this._containerBottom);n.Browser.any3d&&i._add(n.DomUtil.getPosition(this._container));var s=e.layerPointToContainerPoint(i),o=this.options.autoPanPadding,u=e.getSize(),a=0,f=0;s.x<0&&(a=s.x-o.x),s.x+r>u.x&&(a=s.x+r-u.x+o.x),s.y<0&&(f=s.y-o.y),s.y+t>u.y&&(f=s.y+t-u.y+o.y),(a||f)&&e.panBy(new n.Point(a,f))},_onCloseButtonClick:function(e){this._close(),n.DomEvent.stop(e)}}),n.popup=function(e,t){return new n.Popup(e,t)},n.Marker.include({openPopup:function(){return this._popup&&this._map&&(this._popup.setLatLng(this._latlng),this._map.openPopup(this._popup)),this},closePopup:function(){return this._popup&&this._popup._close(),this},bindPopup:function(e,t){var r=n.point(this.options.icon.options.popupAnchor)||new n.Point(0,0);return r=r.add(n.Popup.prototype.options.offset),t&&t.offset&&(r=r.add(t.offset)),t=n.Util.extend({offset:r},t),this._popup||this.on("click",this.openPopup,this),this._popup=(new n.Popup(t,this)).setContent(e),this},unbindPopup:function(){return this._popup&&(this._popup=null,this.off("click",this.openPopup)),this}}),n.Map.include({openPopup:function(e){return this.closePopup(),this._popup=e,this.addLayer(e).fire("popupopen",{popup:this._popup})},closePopup:function(){return this._popup&&this._popup._close(),this}}),n.LayerGroup=n.Class.extend({initialize:function(e){this._layers={};var t,n;if(e)for(t=0,n=e.length;t<n;t++)this.addLayer(e[t])},addLayer:function(e){var t=n.Util.stamp(e);return this._layers[t]=e,this._map&&this._map.addLayer(e),this},removeLayer:function(e){var t=n.Util.stamp(e);return delete this._layers[t],this._map&&this._map.removeLayer(e),this},clearLayers:function(){return this.eachLayer(this.removeLayer,this),this},invoke:function(e){var t=Array.prototype.slice.call(arguments,1),n,r;for(n in this._layers)this._layers.hasOwnProperty(n)&&(r=this._layers[n],r[e]&&r[e].apply(r,t));return this},onAdd:function(e){this._map=e,this.eachLayer(e.addLayer,e)},onRemove:function(e){this.eachLayer(e.removeLayer,e),this._map=null},addTo:function(e){return e.addLayer(this),this},eachLayer:function(e,t){for(var n in this._layers)this._layers.hasOwnProperty(n)&&e.call(t,this._layers[n])}}),n.layerGroup=function(e){return new n.LayerGroup(e)},n.FeatureGroup=n.LayerGroup.extend({includes:n.Mixin.Events,addLayer:function(e){return this._layers[n.Util.stamp(e)]?this:(e.on("click dblclick mouseover mouseout mousemove contextmenu",this._propagateEvent,this),n.LayerGroup.prototype.addLayer.call(this,e),this._popupContent&&e.bindPopup&&e.bindPopup(this._popupContent),this)},removeLayer:function(e){return e.off("click dblclick mouseover mouseout mousemove contextmenu",this._propagateEvent,this),n.LayerGroup.prototype.removeLayer.call(this,e),this._popupContent?this.invoke("unbindPopup"):this},bindPopup:function(e){return this._popupContent=e,this.invoke("bindPopup",e)},setStyle:function(e){return this.invoke("setStyle",e)},bringToFront:function(){return this.invoke("bringToFront")},bringToBack:function(){return this.invoke("bringToBack")},getBounds:function(){var e=new n.LatLngBounds;return this.eachLayer(function(t){e.extend(t instanceof n.Marker?t.getLatLng():t.getBounds())},this),e},_propagateEvent:function(e){e.layer=e.target,e.target=this,this.fire(e.type,e)}}),n.featureGroup=function(e){return new n.FeatureGroup(e)},n.Path=n.Class.extend({includes:[n.Mixin.Events],statics:{CLIP_PADDING:n.Browser.mobile?Math.max(0,Math.min(.5,(1280/Math.max(e.innerWidth,e.innerHeight)-1)/2)):.5},options:{stroke:!0,color:"#0033ff",dashArray:null,weight:5,opacity:.5,fill:!1,fillColor:null,fillOpacity:.2,clickable:!0},initialize:function(e){n.Util.setOptions(this,e)},onAdd:function(e){this._map=e,this._container||(this._initElements(),this._initEvents()),this.projectLatlngs(),this._updatePath(),this._container&&this._map._pathRoot.appendChild(this._container),e.on({viewreset:this.projectLatlngs,moveend:this._updatePath},this)},addTo:function(e){return e.addLayer(this),this},onRemove:function(e){e._pathRoot.removeChild(this._container),this._map=null,n.Browser.vml&&(this._container=null,this._stroke=null,this._fill=null),e.off({viewreset:this.projectLatlngs,moveend:this._updatePath},this)},projectLatlngs:function(){},setStyle:function(e){return n.Util.setOptions(this,e),this._container&&this._updateStyle(),this},redraw:function(){return this._map&&(this.projectLatlngs(),this._updatePath()),this}}),n.Map.include({_updatePathViewport:function(){var e=n.Path.CLIP_PADDING,t=this.getSize(),r=n.DomUtil.getPosition(this._mapPane),i=r.multiplyBy(-1)._subtract(t.multiplyBy(e)),s=i.add(t.multiplyBy(1+e*2));this._pathViewport=new n.Bounds(i,s)}}),n.Path.SVG_NS="http://www.w3.org/2000/svg",n.Browser.svg=!!document.createElementNS&&!!document.createElementNS(n.Path.SVG_NS,"svg").createSVGRect,n.Path=n.Path.extend({statics:{SVG:n.Browser.svg},bringToFront:function(){return this._container&&this._map._pathRoot.appendChild(this._container),this},bringToBack:function(){if(this._container){var e=this._map._pathRoot;e.insertBefore(this._container,e.firstChild)}return this},getPathString:function(){},_createElement:function(e){return document.createElementNS(n.Path.SVG_NS,e)},_initElements:function(){this._map._initPathRoot(),this._initPath(),this._initStyle()},_initPath:function(){this._container=this._createElement("g"),this._path=this._createElement("path"),this._container.appendChild(this._path)},_initStyle:function(){this.options.stroke&&(this._path.setAttribute("stroke-linejoin","round"),this._path.setAttribute("stroke-linecap","round")),this.options.fill&&this._path.setAttribute("fill-rule","evenodd"),this._updateStyle()},_updateStyle:function(){this.options.stroke?(this._path.setAttribute("stroke",this.options.color),this._path.setAttribute("stroke-opacity",this.options.opacity),this._path.setAttribute("stroke-width",this.options.weight),this.options.dashArray?this._path.setAttribute("stroke-dasharray",this.options.dashArray):this._path.removeAttribute("stroke-dasharray")):this._path.setAttribute("stroke","none"),this.options.fill?(this._path.setAttribute("fill",this.options.fillColor||this.options.color),this._path.setAttribute("fill-opacity",this.options.fillOpacity)):this._path.setAttribute("fill","none")},_updatePath:function(){var e=this.getPathString();e||(e="M0 0"),this._path.setAttribute("d",e)},_initEvents:function(){if(this.options.clickable){(n.Browser.svg||!n.Browser.vml)&&this._path.setAttribute("class","leaflet-clickable"),n.DomEvent.on(this._container,"click",this._onMouseClick,this);var e=["dblclick","mousedown","mouseover","mouseout","mousemove","contextmenu"];for(var t=0;t<e.length;t++)n.DomEvent.on(this._container,e[t],this._fireMouseEvent,this)}},_onMouseClick:function(e){if(this._map.dragging&&this._map.dragging.moved())return;this._fireMouseEvent(e),n.DomEvent.stopPropagation(e)},_fireMouseEvent:function(e){if(!this.hasEventListeners(e.type))return;e.type==="contextmenu"&&n.DomEvent.preventDefault(e);var t=this._map,r=t.mouseEventToContainerPoint(e),i=t.containerPointToLayerPoint(r),s=t.layerPointToLatLng(i);this.fire(e.type,{latlng:s,layerPoint:i,containerPoint:r,originalEvent:e})}}),n.Map.include({_initPathRoot:function(){this._pathRoot||(this._pathRoot=n.Path.prototype._createElement("svg"),this._panes.overlayPane.appendChild(this._pathRoot),this.options.zoomAnimation&&n.Browser.any3d?(this._pathRoot.setAttribute("class"," leaflet-zoom-animated"),this.on({zoomanim:this._animatePathZoom,zoomend:this._endPathZoom})):this._pathRoot.setAttribute("class"," leaflet-zoom-hide"),this.on("moveend",this._updateSvgViewport),this._updateSvgViewport())},_animatePathZoom:function(e){var t=this.getZoomScale(e.zoom),r=this._getCenterOffset(e.center).divideBy(1-1/t),i=this.containerPointToLayerPoint(this.getSize().multiplyBy(-n.Path.CLIP_PADDING)),s=i.add(r).round();this._pathRoot.style[n.DomUtil.TRANSFORM]=n.DomUtil.getTranslateString(s.multiplyBy(-1).add(n.DomUtil.getPosition(this._pathRoot)).multiplyBy(t).add(s))+" scale("+t+") ",this._pathZooming=!0},_endPathZoom:function(){this._pathZooming=!1},_updateSvgViewport:function(){if(this._pathZooming)return;this._updatePathViewport();var e=this._pathViewport,t=e.min,r=e.max,i=r.x-t.x,s=r.y-t.y,o=this._pathRoot,u=this._panes.overlayPane;n.Browser.mobileWebkit&&u.removeChild(o),n.DomUtil.setPosition(o,t),o.setAttribute("width",i),o.setAttribute("height",s),o.setAttribute("viewBox",[t.x,t.y,i,s].join(" ")),n.Browser.mobileWebkit&&u.appendChild(o)}}),n.Path.include({bindPopup:function(e,t){if(!this._popup||this._popup.options!==t)this._popup=new n.Popup(t,this);return this._popup.setContent(e),this._openPopupAdded||(this.on("click",this._openPopup,this),this._openPopupAdded=!0),this},openPopup:function(e){return this._popup&&(e=e||this._latlng||this._latlngs[Math.floor(this._latlngs.length/2)],this._openPopup({latlng:e})),this},_openPopup:function(e){this._popup.setLatLng(e.latlng),this._map.openPopup(this._popup)}}),n.Browser.vml=function(){try{var e=document.createElement("div");e.innerHTML='<v:shape adj="1"/>';var t=e.firstChild;return t.style.behavior="url(#default#VML)",t&&typeof t.adj=="object"}catch(n){return!1}}(),n.Path=n.Browser.svg||!n.Browser.vml?n.Path:n.Path.extend({statics:{VML:!0,CLIP_PADDING:.02},_createElement:function(){try{return document.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(e){return document.createElement("<lvml:"+e+' class="lvml">')}}catch(e){return function(e){return document.createElement("<"+e+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}}}(),_initPath:function(){var e=this._container=this._createElement("shape");n.DomUtil.addClass(e,"leaflet-vml-shape"),this.options.clickable&&n.DomUtil.addClass(e,"leaflet-clickable"),e.coordsize="1 1",this._path=this._createElement("path"),e.appendChild(this._path),this._map._pathRoot.appendChild(e)},_initStyle:function(){this._updateStyle()},_updateStyle:function(){var e=this._stroke,t=this._fill,n=this.options,r=this._container;r.stroked=n.stroke,r.filled=n.fill,n.stroke?(e||(e=this._stroke=this._createElement("stroke"),e.endcap="round",r.appendChild(e)),e.weight=n.weight+"px",e.color=n.color,e.opacity=n.opacity,n.dashArray?e.dashStyle=n.dashArray.replace(/ *, */g," "):e.dashStyle=""):e&&(r.removeChild(e),this._stroke=null),n.fill?(t||(t=this._fill=this._createElement("fill"),r.appendChild(t)),t.color=n.fillColor||n.color,t.opacity=n.fillOpacity):t&&(r.removeChild(t),this._fill=null)},_updatePath:function(){var e=this._container.style;e.display="none",this._path.v=this.getPathString()+" ",e.display=""}}),n.Map.include(n.Browser.svg||!n.Browser.vml?{}:{_initPathRoot:function(){if(this._pathRoot)return;var e=this._pathRoot=document.createElement("div");e.className="leaflet-vml-container",this._panes.overlayPane.appendChild(e),this.on("moveend",this._updatePathViewport),this._updatePathViewport()}}),n.Browser.canvas=function(){return!!document.createElement("canvas").getContext}(),n.Path=n.Path.SVG&&!e.L_PREFER_CANVAS||!n.Browser.canvas?n.Path:n.Path.extend({statics:{CANVAS:!0,SVG:!1},redraw:function(){return this._map&&(this.projectLatlngs(),this._requestUpdate()),this},setStyle:function(e){return n.Util.setOptions(this,e),this._map&&(this._updateStyle(),this._requestUpdate()),this},onRemove:function(e){e.off("viewreset",this.projectLatlngs,this).off("moveend",this._updatePath,this),this._requestUpdate(),this._map=null},_requestUpdate:function(){this._map&&(n.Util.cancelAnimFrame(this._fireMapMoveEnd),this._updateRequest=n.Util.requestAnimFrame(this._fireMapMoveEnd,this._map))},_fireMapMoveEnd:function(){this.fire("moveend")},_initElements:function(){this._map._initPathRoot(),this._ctx=this._map._canvasCtx},_updateStyle:function(){var e=this.options;e.stroke&&(this._ctx.lineWidth=e.weight,this._ctx.strokeStyle=e.color),e.fill&&(this._ctx.fillStyle=e.fillColor||e.color)},_drawPath:function(){var e,t,r,i,s,o;this._ctx.beginPath();for(e=0,r=this._parts.length;e<r;e++){for(t=0,i=this._parts[e].length;t<i;t++)s=this._parts[e][t],o=(t===0?"move":"line")+"To",this._ctx[o](s.x,s.y);this instanceof n.Polygon&&this._ctx.closePath()}},_checkIfEmpty:function(){return!this._parts.length},_updatePath:function(){if(this._checkIfEmpty())return;var e=this._ctx,t=this.options;this._drawPath(),e.save(),this._updateStyle(),t.fill&&(t.fillOpacity<1&&(e.globalAlpha=t.fillOpacity),e.fill()),t.stroke&&(t.opacity<1&&(e.globalAlpha=t.opacity),e.stroke()),e.restore()},_initEvents:function(){this.options.clickable&&this._map.on("click",this._onClick,this)},_onClick:function(e){this._containsPoint(e.layerPoint)&&this.fire("click",e)}}),n.Map.include(n.Path.SVG&&!e.L_PREFER_CANVAS||!n.Browser.canvas?{}:{_initPathRoot:function(){var e=this._pathRoot,t;e||(e=this._pathRoot=document.createElement("canvas"),e.style.position="absolute",t=this._canvasCtx=e.getContext("2d"),t.lineCap="round",t.lineJoin="round",this._panes.overlayPane.appendChild(e),this.options.zoomAnimation&&(this._pathRoot.className="leaflet-zoom-animated",this.on("zoomanim",this._animatePathZoom),this.on("zoomend",this._endPathZoom)),this.on("moveend",this._updateCanvasViewport),this._updateCanvasViewport())},_updateCanvasViewport:function(){if(this._pathZooming)return;this._updatePathViewport();var e=this._pathViewport,t=e.min,r=e.max.subtract(t),i=this._pathRoot;n.DomUtil.setPosition(i,t),i.width=r.x,i.height=r.y,i.getContext("2d").translate(-t.x,-t.y)}}),n.LineUtil={simplify:function(e,t){if(!t||!e.length)return e.slice();var n=t*t;return e=this._reducePoints(e,n),e=this._simplifyDP(e,n),e},pointToSegmentDistance:function(e,t,n){return Math.sqrt(this._sqClosestPointOnSegment(e,t,n,!0))},closestPointOnSegment:function(e,t,n){return this._sqClosestPointOnSegment(e,t,n)},_simplifyDP:function(e,n){var r=e.length,i=typeof Uint8Array!=t+""?Uint8Array:Array,s=new i(r);s[0]=s[r-1]=1,this._simplifyDPStep(e,s,n,0,r-1);var o,u=[];for(o=0;o<r;o++)s[o]&&u.push(e[o]);return u},_simplifyDPStep:function(e,t,n,r,i){var s=0,o,u,a;for(u=r+1;u<=i-1;u++)a=this._sqClosestPointOnSegment(e[u],e[r],e[i],!0),a>s&&(o=u,s=a);s>n&&(t[o]=1,this._simplifyDPStep(e,t,n,r,o),this._simplifyDPStep(e,t,n,o,i))},_reducePoints:function(e,t){var n=[e[0]];for(var r=1,i=0,s=e.length;r<s;r++)this._sqDist(e[r],e[i])>t&&(n.push(e[r]),i=r);return i<s-1&&n.push(e[s-1]),n},clipSegment:function(e,t,n,r){var i=n.min,s=n.max,o=r?this._lastCode:this._getBitCode(e,n),u=this._getBitCode(t,n);this._lastCode=u;for(;;){if(!(o|u))return[e,t];if(o&u)return!1;var a=o||u,f=this._getEdgeIntersection(e,t,a,n),l=this._getBitCode(f,n);a===o?(e=f,o=l):(t=f,u=l)}},_getEdgeIntersection:function(e,t,r,i){var s=t.x-e.x,o=t.y-e.y,u=i.min,a=i.max;if(r&8)return new n.Point(e.x+s*(a.y-e.y)/o,a.y);if(r&4)return new n.Point(e.x+s*(u.y-e.y)/o,u.y);if(r&2)return new n.Point(a.x,e.y+o*(a.x-e.x)/s);if(r&1)return new n.Point(u.x,e.y+o*(u.x-e.x)/s)},_getBitCode:function(e,t){var n=0;return e.x<t.min.x?n|=1:e.x>t.max.x&&(n|=2),e.y<t.min.y?n|=4:e.y>t.max.y&&(n|=8),n},_sqDist:function(e,t){var n=t.x-e.x,r=t.y-e.y;return n*n+r*r},_sqClosestPointOnSegment:function(e,t,r,i){var s=t.x,o=t.y,u=r.x-s,a=r.y-o,f=u*u+a*a,l;return f>0&&(l=((e.x-s)*u+(e.y-o)*a)/f,l>1?(s=r.x,o=r.y):l>0&&(s+=u*l,o+=a*l)),u=e.x-s,a=e.y-o,i?u*u+a*a:new n.Point(s,o)}},n.Polyline=n.Path.extend({initialize:function(e,t){n.Path.prototype.initialize.call(this,t),this._latlngs=this._convertLatLngs(e),n.Handler.PolyEdit&&(this.editing=new n.Handler.PolyEdit(this),this.options.editable&&this.editing.enable())},options:{smoothFactor:1,noClip:!1},projectLatlngs:function(){this._originalPoints=[];for(var e=0,t=this._latlngs.length;e<t;e++)this._originalPoints[e]=this._map.latLngToLayerPoint(this._latlngs[e])},getPathString:function(){for(var e=0,t=this._parts.length,n="";e<t;e++)n+=this._getPathPartStr(this._parts[e]);return n},getLatLngs:function(){return this._latlngs},setLatLngs:function(e){return this._latlngs=this._convertLatLngs(e),this.redraw()},addLatLng:function(e){return this._latlngs.push(n.latLng(e)),this.redraw()},spliceLatLngs:function(e,t){var n=[].splice.apply(this._latlngs,arguments);return this._convertLatLngs(this._latlngs),this.redraw(),n},closestLayerPoint:function(e){var t=Infinity,r=this._parts,i,s,o=null;for(var u=0,a=r.length;u<a;u++){var f=r[u];for(var l=1,c=f.length;l<c;l++){i=f[l-1],s=f[l];var h=n.LineUtil._sqClosestPointOnSegment(e,i,s,!0);h<t&&(t=h,o=n.LineUtil._sqClosestPointOnSegment(e,i,s))}}return o&&(o.distance=Math.sqrt(t)),o},getBounds:function(){var e=new n.LatLngBounds,t=this.getLatLngs();for(var r=0,i=t.length;r<i;r++)e.extend(t[r]);return e},onAdd:function(e){n.Path.prototype.onAdd.call(this,e),this.editing&&this.editing.enabled()&&this.editing.addHooks()},onRemove:function(e){this.editing&&this.editing.enabled()&&this.editing.removeHooks(),n.Path.prototype.onRemove.call(this,e)},_convertLatLngs:function(e){var t,r;for(t=0,r=e.length;t<r;t++){if(e[t]instanceof Array&&typeof e[t][0]!="number")return;e[t]=n.latLng(e[t])}return e},_initEvents:function(){n.Path.prototype._initEvents.call(this)},_getPathPartStr:function(e){var t=n.Path.VML;for(var r=0,i=e.length,s="",o;r<i;r++)o=e[r],t&&o._round(),s+=(r?"L":"M")+o.x+" "+o.y;return s},_clipPoints:function(){var e=this._originalPoints,t=e.length,r,i,s;if(this.options.noClip){this._parts=[e];return}this._parts=[];var o=this._parts,u=this._map._pathViewport,a=n.LineUtil;for(r=0,i=0;r<t-1;r++){s=a.clipSegment(e[r],e[r+1],u,r);if(!s)continue;o[i]=o[i]||[],o[i].push(s[0]);if(s[1]!==e[r+1]||r===t-2)o[i].push(s[1]),i++}},_simplifyPoints:function(){var e=this._parts,t=n.LineUtil;for(var r=0,i=e.length;r<i;r++)e[r]=t.simplify(e[r],this.options.smoothFactor)},_updatePath:function(){if(!this._map)return;this._clipPoints(),this._simplifyPoints(),n.Path.prototype._updatePath.call(this)}}),n.polyline=function(e,t){return new n.Polyline(e,t)},n.PolyUtil={},n.PolyUtil.clipPolygon=function(e,t){var r=t.min,i=t.max,s,o=[1,4,2,8],u,a,f,l,c,h,p,d,v=n.LineUtil;for(u=0,h=e.length;u<h;u++)e[u]._code=v._getBitCode(e[u],t);for(f=0;f<4;f++){p=o[f],s=[];for(u=0,h=e.length,a=h-1;u<h;a=u++)l=e[u],c=e[a],l._code&p?c._code&p||(d=v._getEdgeIntersection(c,l,p,t),d._code=v._getBitCode(d,t),s.push(d)):(c._code&p&&(d=v._getEdgeIntersection(c,l,p,t),d._code=v._getBitCode(d,t),s.push(d)),s.push(l));e=s}return e},n.Polygon=n.Polyline.extend({options:{fill:!0},initialize:function(e,t){n.Polyline.prototype.initialize.call(this,e,t),e&&e[0]instanceof Array&&typeof e[0][0]!="number"&&(this._latlngs=this._convertLatLngs(e[0]),this._holes=e.slice(1))},projectLatlngs:function(){n.Polyline.prototype.projectLatlngs.call(this),this._holePoints=[];if(!this._holes)return;for(var e=0,t=this._holes.length,r;e<t;e++){this._holePoints[e]=[];for(var i=0,s=this._holes[e].length;i<s;i++)this._holePoints[e][i]=this._map.latLngToLayerPoint(this._holes[e][i])}},_clipPoints:function(){var e=this._originalPoints,t=[];this._parts=[e].concat(this._holePoints);if(this.options.noClip)return;for(var r=0,i=this._parts.length;r<i;r++){var s=n.PolyUtil.clipPolygon(this._parts[r],this._map._pathViewport);if(!s.length)continue;t.push(s)}this._parts=t},_getPathPartStr:function(e){var t=n.Polyline.prototype._getPathPartStr.call(this,e);return t+(n.Browser.svg?"z":"x")}}),n.polygon=function(e,t){return new n.Polygon(e,t)},function(){function e(e){return n.FeatureGroup.extend({initialize:function(e,t){this._layers={},this._options=t,this.setLatLngs(e)},setLatLngs:function(t){var n=0,r=t.length;this.eachLayer(function(e){n<r?e.setLatLngs(t[n++]):this.removeLayer(e)},this);while(n<r)this.addLayer(new e(t[n++],this._options));return this}})}n.MultiPolyline=e(n.Polyline),n.MultiPolygon=e(n.Polygon),n.multiPolyline=function(e,t){return new n.MultiPolyline(e,t)},n.multiPolygon=function(e,t){return new n.MultiPolygon(e,t)}}(),n.Rectangle=n.Polygon.extend({initialize:function(e,t){n.Polygon.prototype.initialize.call(this,this._boundsToLatLngs(e),t)},setBounds:function(e){this.setLatLngs(this._boundsToLatLngs(e))},_boundsToLatLngs:function(e){return e=n.latLngBounds(e),[e.getSouthWest(),e.getNorthWest(),e.getNorthEast(),e.getSouthEast(),e.getSouthWest()]}}),n.rectangle=function(e,t){return new n.Rectangle(e,t)},n.Circle=n.Path.extend({initialize:function(e,t,r){n.Path.prototype.initialize.call(this,r),this._latlng=n.latLng(e),this._mRadius=t},options:{fill:!0},setLatLng:function(e){return this._latlng=n.latLng(e),this.redraw()},setRadius:function(e){return this._mRadius=e,this.redraw()},projectLatlngs:function(){var e=this._getLngRadius(),t=new n.LatLng(this._latlng.lat,this._latlng.lng-e,!0),r=this._map.latLngToLayerPoint(t);this._point=this._map.latLngToLayerPoint(this._latlng),this._radius=Math.max(Math.round(this._point.x-r.x),1)},getBounds:function(){var e=this._map,t=this._radius*Math.cos(Math.PI/4),r=e.project(this._latlng),i=new n.Point(r.x-t,r.y+t),s=new n.Point(r.x+t,r.y-t),o=e.unproject(i),u=e.unproject(s);return new n.LatLngBounds(o,u)},getLatLng:function(){return this._latlng},getPathString:function(){var e=this._point,t=this._radius;return this._checkIfEmpty()?"":n.Browser.svg?"M"+e.x+","+(e.y-t)+"A"+t+","+t+",0,1,1,"+(e.x-.1)+","+(e.y-t)+" z":(e._round(),t=Math.round(t),"AL "+e.x+","+e.y+" "+t+","+t+" 0,"+23592600)},getRadius:function(){return this._mRadius},_getLngRadius:function(){var e=40075017,t=e*Math.cos(n.LatLng.DEG_TO_RAD*this._latlng.lat);return this._mRadius/t*360},_checkIfEmpty:function(){if(!this._map)return!1;var e=this._map._pathViewport,t=this._radius,n=this._point;return n.x-t>e.max.x||n.y-t>e.max.y||n.x+t<e.min.x||n.y+t<e.min.y}}),n.circle=function(e,t,r){return new n.Circle(e,t,r)},n.CircleMarker=n.Circle.extend({options:{radius:10,weight:2},initialize:function(e,t){n.Circle.prototype.initialize.call(this,e,null,t),this._radius=this.options.radius},projectLatlngs:function(){this._point=this._map.latLngToLayerPoint(this._latlng)},setRadius:function(e){return this._radius=e,this.redraw()}}),n.circleMarker=function(e,t){return new n.CircleMarker(e,t)},n.Polyline.include(n.Path.CANVAS?{_containsPoint:function(e,t){var r,i,s,o,u,a,f,l=this.options.weight/2;n.Browser.touch&&(l+=10);for(r=0,o=this._parts.length;r<o;r++){f=this._parts[r];for(i=0,u=f.length,s=u-1;i<u;s=i++){if(!t&&i===0)continue;a=n.LineUtil.pointToSegmentDistance(e,f[s],f[i]);if(a<=l)return!0}}return!1}}:{}),n.Polygon.include(n.Path.CANVAS?{_containsPoint:function(e){var t=!1,r,i,s,o,u,a,f,l;if(n.Polyline.prototype._containsPoint.call(this,e,!0))return!0;for(o=0,f=this._parts.length;o<f;o++){r=this._parts[o];for(u=0,l=r.length,a=l-1;u<l;a=u++)i=r[u],s=r[a],i.y>e.y!=s.y>e.y&&e.x<(s.x-i.x)*(e.y-i.y)/(s.y-i.y)+i.x&&(t=!t)}return t}}:{}),n.Circle.include(n.Path.CANVAS?{_drawPath:function(){var e=this._point;this._ctx.beginPath(),this._ctx.arc(e.x,e.y,this._radius,0,Math.PI*2,!1)},_containsPoint:function(e){var t=this._point,n=this.options.stroke?this.options.weight/2:0;return e.distanceTo(t)<=this._radius+n}}:{}),n.GeoJSON=n.FeatureGroup.extend({initialize:function(e,t){n.Util.setOptions(this,t),this._layers={},e&&this.addData(e)},addData:function(e){var t=e instanceof Array?e:e.features,r,i;if(t){for(r=0,i=t.length;r<i;r++)this.addData(t[r]);return this}var s=this.options;if(s.filter&&!s.filter(e))return;var o=n.GeoJSON.geometryToLayer(e,s.pointToLayer);return o.feature=e,this.resetStyle(o),s.onEachFeature&&s.onEachFeature(e,o),this.addLayer(o)},resetStyle:function(e){var t=this.options.style;t&&this._setLayerStyle(e,t)},setStyle:function(e){this.eachLayer(function(t){this._setLayerStyle(t,e)},this)},_setLayerStyle:function(e,t){typeof t=="function"&&(t=t(e.feature)),e.setStyle&&e.setStyle(t)}}),n.Util.extend(n.GeoJSON,{geometryToLayer:function(e,t){var r=e.type==="Feature"?e.geometry:e,i=r.coordinates,s=[],o,u,a,f,l;switch(r.type){case"Point":return o=this.coordsToLatLng(i),t?t(e,o):new n.Marker(o);case"MultiPoint":for(a=0,f=i.length;a<f;a++)o=this.coordsToLatLng(i[a]),l=t?t(e,o):new n.Marker(o),s.push(l);return new n.FeatureGroup(s);case"LineString":return u=this.coordsToLatLngs(i),new n.Polyline(u);case"Polygon":return u=this.coordsToLatLngs(i,1),new n.Polygon(u);case"MultiLineString":return u=this.coordsToLatLngs(i,1),new n.MultiPolyline(u);case"MultiPolygon":return u=this.coordsToLatLngs(i,2),new n.MultiPolygon(u);case"GeometryCollection":for(a=0,f=r.geometries.length;a<f;a++)l=this.geometryToLayer(r.geometries[a],t),s.push(l);return new n.FeatureGroup(s);default:throw Error("Invalid GeoJSON object.")}},coordsToLatLng:function(e,t){var r=parseFloat(e[t?0:1]),i=parseFloat(e[t?1:0]);return new n.LatLng(r,i,!0)},coordsToLatLngs:function(e,t,n){var r,i=[],s,o;for(s=0,o=e.length;s<o;s++)r=t?this.coordsToLatLngs(e[s],t-1,n):this.coordsToLatLng(e[s],n),i.push(r);return i}}),n.geoJson=function(e,t){return new n.GeoJSON(e,t)},n.DomEvent={addListener:function(e,t,r,i){var s=n.Util.stamp(r),o="_leaflet_"+t+s,u,a,f;return e[o]?this:(u=function(t){return r.call(i||e,t||n.DomEvent._getEvent())},n.Browser.touch&&t==="dblclick"&&this.addDoubleTapListener?this.addDoubleTapListener(e,u,s):("addEventListener"in e?t==="mousewheel"?(e.addEventListener("DOMMouseScroll",u,!1),e.addEventListener(t,u,!1)):t==="mouseenter"||t==="mouseleave"?(a=u,f=t==="mouseenter"?"mouseover":"mouseout",u=function(t){if(!n.DomEvent._checkMouse(e,t))return;return a(t)},e.addEventListener(f,u,!1)):e.addEventListener(t,u,!1):"attachEvent"in e&&e.attachEvent("on"+t,u),e[o]=u,this))},removeListener:function(e,t,r){var i=n.Util.stamp(r),s="_leaflet_"+t+i,o=e[s];if(!o)return;return n.Browser.touch&&t==="dblclick"&&this.removeDoubleTapListener?this.removeDoubleTapListener(e,i):"removeEventListener"in e?t==="mousewheel"?(e.removeEventListener("DOMMouseScroll",o,!1),e.removeEventListener(t,o,!1)):t==="mouseenter"||t==="mouseleave"?e.removeEventListener(t==="mouseenter"?"mouseover":"mouseout",o,!1):e.removeEventListener(t,o,!1):"detachEvent"in e&&e.detachEvent("on"+t,o),e[s]=null,this},stopPropagation:function(e){return e.stopPropagation?e.stopPropagation():e.cancelBubble=!0,this},disableClickPropagation:function(e){var t=n.DomEvent.stopPropagation;return n.DomEvent.addListener(e,n.Draggable.START,t).addListener(e,"click",t).addListener(e,"dblclick",t)},preventDefault:function(e){return e.preventDefault?e.preventDefault():e.returnValue=!1,this},stop:function(e){return n.DomEvent.preventDefault(e).stopPropagation(e)},getMousePosition:function(e,t){var r=document.body,i=document.documentElement,s=e.pageX?e.pageX:e.clientX+r.scrollLeft+i.scrollLeft,o=e.pageY?e.pageY:e.clientY+r.scrollTop+i.scrollTop,u=new n.Point(s,o);return t?u._subtract(n.DomUtil.getViewportOffset(t)):u},getWheelDelta:function(e){var t=0;return e.wheelDelta&&(t=e.wheelDelta/120),e.detail&&(t=-e.detail/3),t},_checkMouse:function(e,t){var n=t.relatedTarget;if(!n)return!0;try{while(n&&n!==e)n=n.parentNode}catch(r){return!1}return n!==e},_getEvent:function(){var t=e.event;if(!t){var n=arguments.callee.caller;while(n){t=n.arguments[0];if(t&&e.Event===t.constructor)break;n=n.caller}}return t}},n.DomEvent.on=n.DomEvent.addListener,n.DomEvent.off=n.DomEvent.removeListener,n.Draggable=n.Class.extend({includes:n.Mixin.Events,statics:{START:n.Browser.touch?"touchstart":"mousedown",END:n.Browser.touch?"touchend":"mouseup",MOVE:n.Browser.touch?"touchmove":"mousemove",TAP_TOLERANCE:15},initialize:function(e,t){this._element=e,this._dragStartTarget=t||e},enable:function(){if(this._enabled)return;n.DomEvent.on(this._dragStartTarget,n.Draggable.START,this._onDown,this),this._enabled=!0},disable:function(){if(!this._enabled)return;n.DomEvent.off(this._dragStartTarget,n.Draggable.START,this._onDown),this._enabled=!1,this._moved=!1},_onDown:function(e){if(!n.Browser.touch&&e.shiftKey||e.which!==1&&e.button!==1&&!e.touches)return;this._simulateClick=!0;if(e.touches&&e.touches.length>1){this._simulateClick=!1;return}var t=e.touches&&e.touches.length===1?e.touches[0]:e,r=t.target;n.DomEvent.preventDefault(e),n.Browser.touch&&r.tagName.toLowerCase()==="a"&&n.DomUtil.addClass(r,"leaflet-active"),this._moved=!1;if(this._moving)return;this._startPos=this._newPos=n.DomUtil.getPosition(this._element),this._startPoint=new n.Point(t.clientX,t.clientY),n.DomEvent.on(document,n.Draggable.MOVE,this._onMove,this),n.DomEvent.on(document,n.Draggable.END,this._onUp,this)},_onMove:function(e){if(e.touches&&e.touches.length>1)return;var t=e.touches&&e.touches.length===1?e.touches[0]:e,r=new n.Point(t.clientX,t.clientY),i=r.subtract(this._startPoint);if(!i.x&&!i.y)return;n.DomEvent.preventDefault(e),this._moved||(this.fire("dragstart"),this._moved=!0,n.Browser.touch||(n.DomUtil.disableTextSelection(),this._setMovingCursor())),this._newPos=this._startPos.add(i),this._moving=!0,n.Util.cancelAnimFrame(this._animRequest),this._animRequest=n.Util.requestAnimFrame(this._updatePosition,this,!0,this._dragStartTarget)},_updatePosition:function(){this.fire("predrag"),n.DomUtil.setPosition(this._element,this._newPos),this.fire("drag")},_onUp:function(e){if(this._simulateClick&&e.changedTouches){var t=e.changedTouches[0],r=t.target,i=this._newPos&&this._newPos.distanceTo(this._startPos)||0;r.tagName.toLowerCase()==="a"&&n.DomUtil.removeClass(r,"leaflet-active"),i<n.Draggable.TAP_TOLERANCE&&this._simulateEvent("click",t)}n.Browser.touch||(n.DomUtil.enableTextSelection(),this._restoreCursor()),n.DomEvent.off(document,n.Draggable.MOVE,this._onMove),n.DomEvent.off(document,n.Draggable.END,this._onUp),this._moved&&(n.Util.cancelAnimFrame(this._animRequest),this.fire("dragend")),this._moving=!1},_setMovingCursor:function(){n.DomUtil.addClass(document.body,"leaflet-dragging")},_restoreCursor:function(){n.DomUtil.removeClass(document.body,"leaflet-dragging")},_simulateEvent:function(t,n){var r=document.createEvent("MouseEvents");r.initMouseEvent(t,!0,!0,e,1,n.screenX,n.screenY,n.clientX,n.clientY,!1,!1,!1,!1,0,null),n.target.dispatchEvent(r)}}),n.Handler=n.Class.extend({initialize:function(e){this._map=e},enable:function(){if(this._enabled)return;this._enabled=!0,this.addHooks()},disable:function(){if(!this._enabled)return;this._enabled=!1,this.removeHooks()},enabled:function(){return!!this._enabled}}),n.Map.mergeOptions({dragging:!0,inertia:!n.Browser.android23,inertiaDeceleration:3e3,inertiaMaxSpeed:1500,inertiaThreshold:n.Browser.touch?32:14,worldCopyJump:!0}),n.Map.Drag=n.Handler.extend({addHooks:function(){if(!this._draggable){this._draggable=new n.Draggable(this._map._mapPane,this._map._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this);var e=this._map.options;e.worldCopyJump&&(this._draggable.on("predrag",this._onPreDrag,this),this._map.on("viewreset",this._onViewReset,this))}this._draggable.enable()},removeHooks:function(){this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},_onDragStart:function(){var e=this._map;e.fire("movestart").fire("dragstart"),e._panTransition&&e._panTransition._onTransitionEnd(!0),e.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(){if(this._map.options.inertia){var e=this._lastTime=+(new Date),t=this._lastPos=this._draggable._newPos;this._positions.push(t),this._times.push(e),e-this._times[0]>200&&(this._positions.shift(),this._times.shift())}this._map.fire("move").fire("drag")},_onViewReset:function(){var e=this._map.getSize().divideBy(2),t=this._map.latLngToLayerPoint(new n.LatLng(0,0));this._initialWorldOffset=t.subtract(e).x,this._worldWidth=this._map.project(new n.LatLng(0,180)).x},_onPreDrag:function(){var e=this._map,t=this._worldWidth,n=Math.round(t/2),r=this._initialWorldOffset,i=this._draggable._newPos.x,s=(i-n+r)%t+n-r,o=(i+n+r)%t-n-r,u=Math.abs(s+r)<Math.abs(o+r)?s:o;this._draggable._newPos.x=u},_onDragEnd:function(){var e=this._map,r=e.options,i=+(new Date)-this._lastTime,s=!r.inertia||i>r.inertiaThreshold||this._positions[0]===t;if(s)e.fire("moveend");else{var o=this._lastPos.subtract(this._positions[0]),u=(this._lastTime+i-this._times[0])/1e3,a=o.multiplyBy(.58/u),f=a.distanceTo(new n.Point(0,0)),l=Math.min(r.inertiaMaxSpeed,f),c=a.multiplyBy(l/f),h=l/r.inertiaDeceleration,p=c.multiplyBy(-h/2).round(),d={duration:h,easing:"ease-out"};n.Util.requestAnimFrame(n.Util.bind(function(){this._map.panBy(p,d)},this))}e.fire("dragend"),r.maxBounds&&n.Util.requestAnimFrame(this._panInsideMaxBounds,e,!0,e._container)},_panInsideMaxBounds:function(){this.panInsideBounds(this.options.maxBounds)}}),n.Map.addInitHook("addHandler","dragging",n.Map.Drag),n.Map.mergeOptions({doubleClickZoom:!0}),n.Map.DoubleClickZoom=n.Handler.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick)},_onDoubleClick:function(e){this.setView(e.latlng,this._zoom+1)}}),n.Map.addInitHook("addHandler","doubleClickZoom",n.Map.DoubleClickZoom),n.Map.mergeOptions({scrollWheelZoom:!n.Browser.touch}),n.Map.ScrollWheelZoom=n.Handler.extend({addHooks:function(){n.DomEvent.on(this._map._container,"mousewheel",this._onWheelScroll,this),this._delta=0},removeHooks:function(){n.DomEvent.off(this._map._container,"mousewheel",this._onWheelScroll)},_onWheelScroll:function(e){var t=n.DomEvent.getWheelDelta(e);this._delta+=t,this._lastMousePos=this._map.mouseEventToContainerPoint(e),clearTimeout(this._timer),this._timer=setTimeout(n.Util.bind(this._performZoom,this),40),n.DomEvent.preventDefault(e)},_performZoom:function(){var e=this._map,t=Math.round(this._delta),n=e.getZoom();t=Math.max(Math.min(t,4),-4),t=e._limitZoom(n+t)-n,this._delta=0;if(!t)return;var r=n+t,i=this._getCenterForScrollWheelZoom(this._lastMousePos,r);e.setView(i,r)},_getCenterForScrollWheelZoom:function(e,t){var n=this._map,r=n.getZoomScale(t),i=n.getSize().divideBy(2),s=e.subtract(i).multiplyBy(1-1/r),o=n._getTopLeftPoint().add(i).add(s);return n.unproject(o)}}),n.Map.addInitHook("addHandler","scrollWheelZoom",n.Map.ScrollWheelZoom),n.Util.extend(n.DomEvent,{addDoubleTapListener:function(e,t,n){function l(e){if(e.touches.length!==1)return;var t=Date.now(),n=t-(r||t);o=e.touches[0],i=n>0&&n<=s,r=t}function c(e){i&&(o.type="dblclick",t(o),r=null)}var r,i=!1,s=250,o,u="_leaflet_",a="touchstart",f="touchend";return e[u+a+n]=l,e[u+f+n]=c,e.addEventListener(a,l,!1),e.addEventListener(f,c,!1),this},removeDoubleTapListener:function(e,t){var n="_leaflet_";return e.removeEventListener(e,e[n+"touchstart"+t],!1),e.removeEventListener(e,e[n+"touchend"+t],!1),this}}),n.Map.mergeOptions({touchZoom:n.Browser.touch&&!n.Browser.android23}),n.Map.TouchZoom=n.Handler.extend({addHooks:function(){n.DomEvent.on(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){n.DomEvent.off(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(e){var t=this._map;if(!e.touches||e.touches.length!==2||t._animatingZoom||this._zooming)return;var r=t.mouseEventToLayerPoint(e.touches[0]),i=t.mouseEventToLayerPoint(e.touches[1]),s=t._getCenterLayerPoint();this._startCenter=r.add(i).divideBy(2,!0),this._startDist=r.distanceTo(i),this._moved=!1,this._zooming=!0,this._centerOffset=s.subtract(this._startCenter),n.DomEvent.on(document,"touchmove",this._onTouchMove,this).on(document,"touchend",this._onTouchEnd,this),n.DomEvent.preventDefault(e)},_onTouchMove:function(e){if(!e.touches||e.touches.length!==2)return;var t=this._map,r=t.mouseEventToLayerPoint(e.touches[0]),i=t.mouseEventToLayerPoint(e.touches[1]);this._scale=r.distanceTo(i)/this._startDist,this._delta=r.add(i).divideBy(2,!0).subtract(this._startCenter);if(this._scale===1)return;this._moved||(n.DomUtil.addClass(t._mapPane,"leaflet-zoom-anim leaflet-touching"),t.fire("movestart").fire("zoomstart")._prepareTileBg(),this._moved=!0),n.Util.cancelAnimFrame(this._animRequest),this._animRequest=n.Util.requestAnimFrame(this._updateOnMove,this,!0,this._map._container),n.DomEvent.preventDefault(e)},_updateOnMove:function(){var e=this._map,t=this._getScaleOrigin(),r=e.layerPointToLatLng(t);e.fire("zoomanim",{center:r,zoom:e.getScaleZoom(this._scale)}),e._tileBg.style[n.DomUtil.TRANSFORM]=n.DomUtil.getTranslateString(this._delta)+" "+n.DomUtil.getScaleString(this._scale,this._startCenter)},_onTouchEnd:function(e){if(!this._moved||!this._zooming)return;var t=this._map;this._zooming=!1,n.DomUtil.removeClass(t._mapPane,"leaflet-touching"),n.DomEvent.off(document,"touchmove",this._onTouchMove).off(document,"touchend",this._onTouchEnd);var r=this._getScaleOrigin(),i=t.layerPointToLatLng(r),s=t.getZoom(),o=t.getScaleZoom(this._scale)-s,u=o>0?Math.ceil(o):Math.floor(o),a=t._limitZoom(s+u);t.fire("zoomanim",{center:i,zoom:a}),t._runAnimation(i,a,t.getZoomScale(a)/this._scale,r,!0)},_getScaleOrigin:function(){var e=this._centerOffset.subtract(this._delta).divideBy(this._scale);return this._startCenter.add(e)}}),n.Map.addInitHook("addHandler","touchZoom",n.Map.TouchZoom),n.Map.mergeOptions({boxZoom:!0}),n.Map.BoxZoom=n.Handler.extend({initialize:function(e){this._map=e,this._container=e._container,this._pane=e._panes.overlayPane},addHooks:function(){n.DomEvent.on(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){n.DomEvent.off(this._container,"mousedown",this._onMouseDown)},_onMouseDown:function(e){if(!e.shiftKey||e.which!==1&&e.button!==1)return!1;n.DomUtil.disableTextSelection(),this._startLayerPoint=this._map.mouseEventToLayerPoint(e),this._box=n.DomUtil.create("div","leaflet-zoom-box",this._pane),n.DomUtil.setPosition(this._box,this._startLayerPoint),this._container.style.cursor="crosshair",n.DomEvent.on(document,"mousemove",this._onMouseMove,this).on(document,"mouseup",this._onMouseUp,this).preventDefault(e),this._map.fire("boxzoomstart")},_onMouseMove:function(e){var t=this._startLayerPoint,r=this._box,i=this._map.mouseEventToLayerPoint(e),s=i.subtract(t),o=new n.Point(Math.min(i.x,t.x),Math.min(i.y,t.y));n.DomUtil.setPosition(r,o),r.style.width=Math.abs(s.x)-4+"px",r.style.height=Math.abs(s.y)-4+"px"},_onMouseUp:function(e){this._pane.removeChild(this._box),this._container.style.cursor="",n.DomUtil.enableTextSelection(),n.DomEvent.off(document,"mousemove",this._onMouseMove).off(document,"mouseup",this._onMouseUp);var t=this._map,r=t.mouseEventToLayerPoint(e),i=new n.LatLngBounds(t.layerPointToLatLng(this._startLayerPoint),t.layerPointToLatLng(r));t.fitBounds(i),t.fire("boxzoomend",{boxZoomBounds:i})}}),n.Map.addInitHook("addHandler","boxZoom",n.Map.BoxZoom),n.Map.mergeOptions({keyboard:!0,keyboardPanOffset:80,keyboardZoomOffset:1}),n.Map.Keyboard=n.Handler.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61],zoomOut:[189,109]},initialize:function(e){this._map=e,this._setPanOffset(e.options.keyboardPanOffset),this._setZoomOffset(e.options.keyboardZoomOffset)},addHooks:function(){var e=this._map._container;e.tabIndex===-1&&(e.tabIndex="0"),n.DomEvent.addListener(e,"focus",this._onFocus,this).addListener(e,"blur",this._onBlur,this).addListener(e,"mousedown",this._onMouseDown,this),this._map.on("focus",this._addHooks,this).on("blur",this._removeHooks,this)},removeHooks:function(){this._removeHooks();var e=this._map._container;n.DomEvent.removeListener(e,"focus",this._onFocus,this).removeListener(e,"blur",this._onBlur,this).removeListener(e,"mousedown",this._onMouseDown,this),this._map.off("focus",this._addHooks,this).off("blur",this._removeHooks,this)},_onMouseDown:function(){this._focused||this._map._container.focus()},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanOffset:function(e){var t=this._panKeys={},n=this.keyCodes,r,i;for(r=0,i=n.left.length;r<i;r++)t[n.left[r]]=[-1*e,0];for(r=0,i=n.right.length;r<i;r++)t[n.right[r]]=[e,0];for(r=0,i=n.down.length;r<i;r++)t[n.down[r]]=[0,e];for(r=0,i=n.up.length;r<i;r++)t[n.up[r]]=[0,-1*e]},_setZoomOffset:function(e){var t=this._zoomKeys={},n=this.keyCodes,r,i;for(r=0,i=n.zoomIn.length;r<i;r++)t[n.zoomIn[r]]=e;for(r=0,i=n.zoomOut.length;r<i;r++)t[n.zoomOut[r]]=-e},_addHooks:function(){n.DomEvent.addListener(document,"keydown",this._onKeyDown,this)},_removeHooks:function(){n.DomEvent.removeListener(document,"keydown",this._onKeyDown,this)},_onKeyDown:function(e){var t=e.keyCode;if(this._panKeys.hasOwnProperty(t))this._map.panBy(this._panKeys[t]);else{if(!this._zoomKeys.hasOwnProperty(t))return;this._map.setZoom(this._map.getZoom()+this._zoomKeys[t])}n.DomEvent.stop(e)}}),n.Map.addInitHook("addHandler","keyboard",n.Map.Keyboard),n.Handler.MarkerDrag=n.Handler.extend({initialize:function(e){this._marker=e},addHooks:function(){var e=this._marker._icon;this._draggable||(this._draggable=(new n.Draggable(e,e)).on("dragstart",this._onDragStart,this).on("drag",this._onDrag,this).on("dragend",this._onDragEnd,this)),this._draggable.enable()},removeHooks:function(){this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},_onDragStart:function(e){this._marker.closePopup().fire("movestart").fire("dragstart")},_onDrag:function(e){var t=n.DomUtil.getPosition(this._marker._icon);this._marker._shadow&&n.DomUtil.setPosition(this._marker._shadow,t),this._marker._latlng=this._marker._map.layerPointToLatLng(t),this._marker.fire("move").fire("drag")},_onDragEnd:function(){this._marker.fire("moveend").fire("dragend")}}),n.Handler.PolyEdit=n.Handler.extend({options:{icon:new n.DivIcon({iconSize:new n.Point(8,8),className:"leaflet-div-icon leaflet-editing-icon"})},initialize:function(e,t){this._poly=e,n.Util.setOptions(this,t)},addHooks:function(){this._poly._map&&(this._markerGroup||this._initMarkers(),this._poly._map.addLayer(this._markerGroup))},removeHooks:function(){this._poly._map&&(this._poly._map.removeLayer(this._markerGroup),delete this._markerGroup,delete this._markers)},updateMarkers:function(){this._markerGroup.clearLayers(),this._initMarkers()},_initMarkers:function(){this._markerGroup||(this._markerGroup=new n.LayerGroup),this._markers=[];var e=this._poly._latlngs,t,r,i,s;for(t=0,i=e.length;t<i;t++)s=this._createMarker(e[t],t),s.on("click",this._onMarkerClick,this),this._markers.push(s);var o,u;for(t=0,r=i-1;t<i;r=t++){if(t===0&&!(n.Polygon&&this._poly instanceof n.Polygon))continue;o=this._markers[r],u=this._markers[t],this._createMiddleMarker(o,u),this._updatePrevNext(o,u)}},_createMarker:function(e,t){var r=new n.Marker(e,{draggable:!0,icon:this.options.icon});return r._origLatLng=e,r._index=t,r.on("drag",this._onMarkerDrag,this),r.on("dragend",this._fireEdit,this),this._markerGroup.addLayer(r),r},_fireEdit:function(){this._poly.fire("edit")},_onMarkerDrag:function(e){var t=e.target;n.Util.extend(t._origLatLng,t._latlng),t._middleLeft&&t._middleLeft.setLatLng(this._getMiddleLatLng(t._prev,t)),t._middleRight&&t._middleRight.setLatLng(this._getMiddleLatLng(t,t._next)),this._poly.redraw()},_onMarkerClick:function(e){if(this._poly._latlngs.length<3)return;var t=e.target,n=t._index;t._prev&&t._next&&(this._createMiddleMarker(t._prev,t._next),this._updatePrevNext(t._prev,t._next)),this._markerGroup.removeLayer(t),t._middleLeft&&this._markerGroup.removeLayer(t._middleLeft),t._middleRight&&this._markerGroup.removeLayer(t._middleRight),this._markers.splice(n,1),this._poly.spliceLatLngs(n,1),this._updateIndexes(n,-1),this._poly.fire("edit")},_updateIndexes:function(e,t){this._markerGroup.eachLayer(function(n){n._index>e&&(n._index+=t)})},_createMiddleMarker:function(e,t){var n=this._getMiddleLatLng(e,t),r=this._createMarker(n),i,s,o;r.setOpacity(.6),e._middleRight=t._middleLeft=r,s=function(){var s=t._index;r._index=s,r.off("click",i).on("click",this._onMarkerClick,this),n.lat=r.getLatLng().lat,n.lng=r.getLatLng().lng,this._poly.spliceLatLngs(s,0,n),this._markers.splice(s,0,r),r.setOpacity(1),this._updateIndexes(s,1),t._index++,this._updatePrevNext(e,r),this._updatePrevNext(r,t)},o=function(){r.off("dragstart",s,this),r.off("dragend",o,this),this._createMiddleMarker(e,r),this._createMiddleMarker(r,t)},i=function(){s.call(this),o.call(this),this._poly.fire("edit")},r.on("click",i,this).on("dragstart",s,this).on("dragend",o,this),this._markerGroup.addLayer(r)},_updatePrevNext:function(e,t){e._next=t,t._prev=e},_getMiddleLatLng:function(e,t){var n=this._poly._map,r=n.latLngToLayerPoint(e.getLatLng()),i=n.latLngToLayerPoint(t.getLatLng());return n.layerPointToLatLng(r._add(i).divideBy(2))}}),n.Control=n.Class.extend({options:{position:"topright"},initialize:function(e){n.Util.setOptions(this,e)},getPosition:function(){return this.options.position},setPosition:function(e){var t=this._map;return t&&t.removeControl(this),this.options.position=e,t&&t.addControl(this),this},addTo:function(e){this._map=e;var t=this._container=this.onAdd(e),r=this.getPosition(),i=e._controlCorners[r];return n.DomUtil.addClass(t,"leaflet-control"),r.indexOf("bottom")!==-1?i.insertBefore(t,i.firstChild):i.appendChild(t),this},removeFrom:function(e){var t=this.getPosition(),n=e._controlCorners[t];return n.removeChild(this._container),this._map=null,this.onRemove&&this.onRemove(e),this}}),n.control=function(e){return new n.Control(e)},n.Map.include({addControl:function(e){return e.addTo(this),this},removeControl:function(e){return e.removeFrom(this),this},_initControlPos:function(){function i(i,s){var o=t+i+" "+t+s;e[i+s]=n.DomUtil.create("div",o,r)}var e=this._controlCorners={},t="leaflet-",r=this._controlContainer=n.DomUtil.create("div",t+"control-container",this._container);i("top","left"),i("top","right"),i("bottom","left"),i("bottom","right")}}),n.Control.Zoom=n.Control.extend({options:{position:"topleft"},onAdd:function(e){var t="leaflet-control-zoom",r=n.DomUtil.create("div",t);return this._createButton("Zoom in",t+"-in",r,e.zoomIn,e),this._createButton("Zoom out",t+"-out",r,e.zoomOut,e),r},_createButton:function(e,t,r,i,s){var o=n.DomUtil.create("a",t,r);return o.href="#",o.title=e,n.DomEvent.on(o,"click",n.DomEvent.stopPropagation).on(o,"click",n.DomEvent.preventDefault).on(o,"click",i,s).on(o,"dblclick",n.DomEvent.stopPropagation),o}}),n.Map.mergeOptions({zoomControl:!0}),n.Map.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new n.Control.Zoom,this.addControl(this.zoomControl))}),n.control.zoom=function(e){return new n.Control.Zoom(e)},n.Control.Attribution=n.Control.extend({options:{position:"bottomright",prefix:'Powered by <a href="http://leaflet.cloudmade.com">Leaflet</a>'},initialize:function(e){n.Util.setOptions(this,e),this._attributions={}},onAdd:function(e){return this._container=n.DomUtil.create("div","leaflet-control-attribution"),n.DomEvent.disableClickPropagation(this._container),e.on("layeradd",this._onLayerAdd,this).on("layerremove",this._onLayerRemove,this),this._update(),this._container},onRemove:function(e){e.off("layeradd",this._onLayerAdd).off("layerremove",this._onLayerRemove)},setPrefix:function(e){return this.options.prefix=e,this._update(),this},addAttribution:function(e){if(!e)return;return this._attributions[e]||(this._attributions[e]=0),this._attributions[e]++,this._update(),this},removeAttribution:function(e){if(!e)return;return this._attributions[e]--,this._update(),this},_update:function(){if(!this._map)return;var e=[];for(var t in this._attributions)this._attributions.hasOwnProperty(t)&&this._attributions[t]&&e.push(t);var n=[];this.options.prefix&&n.push(this.options.prefix),e.length&&n.push(e.join(", ")),this._container.innerHTML=n.join(" &#8212; ")},_onLayerAdd:function(e){e.layer.getAttribution&&this.addAttribution(e.layer.getAttribution())},_onLayerRemove:function(e){e.layer.getAttribution&&this.removeAttribution(e.layer.getAttribution())}}),n.Map.mergeOptions({attributionControl:!0}),n.Map.addInitHook(function(){this.options.attributionControl&&(this.attributionControl=(new n.Control.Attribution).addTo(this))}),n.control.attribution=function(e){return new n.Control.Attribution(e)},n.Control.Scale=n.Control.extend({options:{position:"bottomleft",maxWidth:100,metric:!0,imperial:!0,updateWhenIdle:!1},onAdd:function(e){this._map=e;var t="leaflet-control-scale",r=n.DomUtil.create("div",t),i=this.options;return this._addScales(i,t,r),e.on(i.updateWhenIdle?"moveend":"move",this._update,this),this._update(),r},onRemove:function(e){e.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(e,t,r){e.metric&&(this._mScale=n.DomUtil.create("div",t+"-line",r)),e.imperial&&(this._iScale=n.DomUtil.create("div",t+"-line",r))},_update:function(){var e=this._map.getBounds(),t=e.getCenter().lat,n=6378137*Math.PI*Math.cos(t*Math.PI/180),r=n*(e.getNorthEast().lng-e.getSouthWest().lng)/180,i=this._map.getSize(),s=this.options,o=0;i.x>0&&(o=r*(s.maxWidth/i.x)),this._updateScales(s,o)},_updateScales:function(e,t){e.metric&&t&&this._updateMetric(t),e.imperial&&t&&this._updateImperial(t)},_updateMetric:function(e){var t=this._getRoundNum(e);this._mScale.style.width=this._getScaleWidth(t/e)+"px",this._mScale.innerHTML=t<1e3?t+" m":t/1e3+" km"},_updateImperial:function(e){var t=e*3.2808399,n=this._iScale,r,i,s;t>5280?(r=t/5280,i=this._getRoundNum(r),n.style.width=this._getScaleWidth(i/r)+"px",n.innerHTML=i+" mi"):(s=this._getRoundNum(t),n.style.width=this._getScaleWidth(s/t)+"px",n.innerHTML=s+" ft")},_getScaleWidth:function(e){return Math.round(this.options.maxWidth*e)-10},_getRoundNum:function(e){var t=Math.pow(10,(Math.floor(e)+"").length-1),n=e/t;return n=n>=10?10:n>=5?5:n>=3?3:n>=2?2:1,t*n}}),n.control.scale=function(e){return new n.Control.Scale(e)},n.Control.Layers=n.Control.extend({options:{collapsed:!0,position:"topright",autoZIndex:!0},initialize:function(e,t,r){n.Util.setOptions(this,r),this._layers={},this._lastZIndex=0;for(var i in e)e.hasOwnProperty(i)&&this._addLayer(e[i],i);for(i in t)t.hasOwnProperty(i)&&this._addLayer(t[i],i,!0)},onAdd:function(e){return this._initLayout(),this._update(),this._container},addBaseLayer:function(e,t){return this._addLayer(e,t),this._update(),this},addOverlay:function(e,t){return this._addLayer(e,t,!0),this._update(),this},removeLayer:function(e){var t=n.Util.stamp(e);return delete this._layers[t],this._update(),this},_initLayout:function(){var e="leaflet-control-layers",t=this._container=n.DomUtil.create("div",e);n.Browser.touch?n.DomEvent.on(t,"click",n.DomEvent.stopPropagation):n.DomEvent.disableClickPropagation(t);var r=this._form=n.DomUtil.create("form",e+"-list");if(this.options.collapsed){n.DomEvent.on(t,"mouseover",this._expand,this).on(t,"mouseout",this._collapse,this);var i=this._layersLink=n.DomUtil.create("a",e+"-toggle",t);i.href="#",i.title="Layers",n.Browser.touch?n.DomEvent.on(i,"click",n.DomEvent.stopPropagation).on(i,"click",n.DomEvent.preventDefault).on(i,"click",this._expand,this):n.DomEvent.on(i,"focus",this._expand,this),this._map.on("movestart",this._collapse,this)}else this._expand();this._baseLayersList=n.DomUtil.create("div",e+"-base",r),this._separator=n.DomUtil.create("div",e+"-separator",r),this._overlaysList=n.DomUtil.create("div",e+"-overlays",r),t.appendChild(r)},_addLayer:function(e,t,r){var i=n.Util.stamp(e);this._layers[i]={layer:e,name:t,overlay:r},this.options.autoZIndex&&e.setZIndex&&(this._lastZIndex++,e.setZIndex(this._lastZIndex))},_update:function(){if(!this._container)return;this._baseLayersList.innerHTML="",this._overlaysList.innerHTML="";var e=!1,t=!1;for(var n in this._layers)if(this._layers.hasOwnProperty(n)){var r=this._layers[n];this._addItem(r),t=t||r.overlay,e=e||!r.overlay}this._separator.style.display=t&&e?"":"none"},_createRadioElement:function(e,t){var n='<input type="radio" name="'+e+'"';t&&(n+=' checked="checked"'),n+="/>";var r=document.createElement("div");return r.innerHTML=n,r.firstChild},_addItem:function(e){var t=document.createElement("label"),r,i=this._map.hasLayer(e.layer);e.overlay?(r=document.createElement("input"),r.type="checkbox",r.defaultChecked=i):r=this._createRadioElement("leaflet-base-layers",i),r.layerId=n.Util.stamp(e.layer),n.DomEvent.on(r,"click",this._onInputClick,this);var s=document.createTextNode(" "+e.name);t.appendChild(r),t.appendChild(s);var o=e.overlay?this._overlaysList:this._baseLayersList;o.appendChild(t)},_onInputClick:function(){var e,t,n,r=this._form.getElementsByTagName("input"),i=r.length;for(e=0;e<i;e++)t=r[e],n=this._layers[t.layerId],t.checked?this._map.addLayer(n.layer,!n.overlay):this._map.removeLayer(n.layer)},_expand:function(){n.DomUtil.addClass(this._container,"leaflet-control-layers-expanded")},_collapse:function(){this._container.className=this._container.className.replace(" leaflet-control-layers-expanded","")}}),n.control.layers=function(e,t,r){return new n.Control.Layers(e,t,r)},n.Transition=n.Class.extend({includes:n.Mixin.Events,statics:{CUSTOM_PROPS_SETTERS:{position:n.DomUtil.setPosition},implemented:function(){return n.Transition.NATIVE||n.Transition.TIMER}},options:{easing:"ease",duration:.5},_setProperty:function(e,t){var r=n.Transition.CUSTOM_PROPS_SETTERS;e in r?r[e](this._el,t):this._el.style[e]=t}}),n.Transition=n.Transition.extend({statics:function(){var e=n.DomUtil.TRANSITION,t=e==="webkitTransition"||e==="OTransition"?e+"End":"transitionend";return{NATIVE:!!e,TRANSITION:e,PROPERTY:e+"Property",DURATION:e+"Duration",EASING:e+"TimingFunction",END:t,CUSTOM_PROPS_PROPERTIES:{position:n.Browser.any3d?n.DomUtil.TRANSFORM:"top, left"}}}(),options:{fakeStepInterval:100},initialize:function(e,t){this._el=e,n.Util.setOptions(this,t),n.DomEvent.on(e,n.Transition.END,this._onTransitionEnd,this),this._onFakeStep=n.Util.bind(this._onFakeStep,this)},run:function(e){var t,r=[],i=n.Transition.CUSTOM_PROPS_PROPERTIES;for(t in e)e.hasOwnProperty(t)&&(t=i[t]?i[t]:t,t=this._dasherize(t),r.push(t));this._el.style[n.Transition.DURATION]=this.options.duration+"s",this._el.style[n.Transition.EASING]=this.options.easing,this._el.style[n.Transition.PROPERTY]="all";for(t in e)e.hasOwnProperty(t)&&this._setProperty(t,e[t]);n.Util.falseFn(this._el.offsetWidth),this._inProgress=!0,n.Browser.mobileWebkit&&(this.backupEventFire=setTimeout(n.Util.bind(this._onBackupFireEnd,this),this.options.duration*1.2*1e3)),n.Transition.NATIVE?(clearInterval(this._timer),this._timer=setInterval(this._onFakeStep,this.options.fakeStepInterval)):this._onTransitionEnd()},_dasherize:function(){function t(e){return"-"+e.toLowerCase()}var e=/([A-Z])/g;return function(n){return n.replace(e,t)}}(),_onFakeStep:function(){this.fire("step")},_onTransitionEnd:function(e){this._inProgress&&(this._inProgress=!1,clearInterval(this._timer),this._el.style[n.Transition.TRANSITION]="",clearTimeout(this.backupEventFire),delete this.backupEventFire,this.fire("step"),e&&e.type&&this.fire("end"))},_onBackupFireEnd:function(){var e=document.createEvent("Event");e.initEvent(n.Transition.END,!0,!1),this._el.dispatchEvent(e)}}),n.Transition=n.Transition.NATIVE?n.Transition:n.Transition.extend({statics:{getTime:Date.now||function(){return+(new Date)},TIMER:!0,EASINGS:{linear:function(e){return e},"ease-out":function(e){return e*(2-e)}},CUSTOM_PROPS_GETTERS:{position:n.DomUtil.getPosition},UNIT_RE:/^[\d\.]+(\D*)$/},options:{fps:50},initialize:function(e,t){this._el=e,n.Util.extend(this.options,t),this._easing=n.Transition.EASINGS[this.options.easing]||n.Transition.EASINGS["ease-out"],this._step=n.Util.bind(this._step,this),this._interval=Math.round(1e3/this.options.fps)},run:function(e){this._props={};var t=n.Transition.CUSTOM_PROPS_GETTERS,r=n.Transition.UNIT_RE;this.fire("start");for(var i in e)if(e.hasOwnProperty(i)){var s={};if(i in t)s.from=t[i](this._el);else{var o=this._el.style[i].match(r);s.from=parseFloat(o[0]),s.unit=o[1]}s.to=e[i],this._props[i]=s}clearInterval(this._timer),this._timer=setInterval(this._step,this._interval),this._startTime=n.Transition.getTime()},_step:function(){var e=n.Transition.getTime(),t=e-this._startTime,r=this.options.duration*1e3;t<r?this._runFrame(this._easing(t/r)):(this._runFrame(1),this._complete())},_runFrame:function(e){var t=n.Transition.CUSTOM_PROPS_SETTERS,r,i,s;for(r in this._props)this._props.hasOwnProperty(r)&&(i=this._props[r],r in t?(s=i.to.subtract(i.from).multiplyBy(e).add(i.from),t[r](this._el,s)):this._el.style[r]=(i.to-i.from)*e+i.from+i.unit);this.fire("step")},_complete:function(){clearInterval(this._timer),this.fire("end")}}),n.Map.include(!n.Transition||!n.Transition.implemented()?{}:{setView:function(e,t,n){t=this._limitZoom(t);var r=this._zoom!==t;if(this._loaded&&!n&&this._layers){var i=r?this._zoomToIfClose&&this._zoomToIfClose(e,t):this._panByIfClose(e);if(i)return clearTimeout(this._sizeTimer),this}return this._resetView(e,t),this},panBy:function(e,t){return e=n.point(e),!e.x&&!e.y?this:(this._panTransition||(this._panTransition=new n.Transition(this._mapPane),this._panTransition.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),n.Util.setOptions(this._panTransition,n.Util.extend({duration:.25},t)),this.fire("movestart"),n.DomUtil.addClass(this._mapPane,"leaflet-pan-anim"),this._panTransition.run({position:n.DomUtil.getPosition(this._mapPane).subtract(e)}),this)},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){n.DomUtil.removeClass(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_panByIfClose:function(e){var t=this._getCenterOffset(e)._floor();return this._offsetIsWithinView(t)?(this.panBy(t),!0):!1},_offsetIsWithinView:function(e,t){var n=t||1,r=this.getSize();return Math.abs(e.x)<=r.x*n&&Math.abs(e.y)<=r.y*n}}),n.Map.mergeOptions({zoomAnimation:n.DomUtil.TRANSITION&&!n.Browser.android23&&!n.Browser.mobileOpera}),n.DomUtil.TRANSITION&&n.Map.addInitHook(function(){n.DomEvent.on(this._mapPane,n.Transition.END,this._catchTransitionEnd,this)}),n.Map.include(n.DomUtil.TRANSITION?{_zoomToIfClose:function(e,t){if(this._animatingZoom)return!0;if(!this.options.zoomAnimation)return!1;var r=this.getZoomScale(t),i=this._getCenterOffset(e).divideBy(1-1/r);if(!this._offsetIsWithinView(i,1))return!1;n.DomUtil.addClass(this._mapPane,"leaflet-zoom-anim"),this.fire("movestart").fire("zoomstart"),this.fire("zoomanim",{center:e,zoom:t});var s=this._getCenterLayerPoint().add(i);return this._prepareTileBg(),this._runAnimation(e,t,r,s),!0},_catchTransitionEnd:function(e){this._animatingZoom&&this._onZoomTransitionEnd()},_runAnimation:function(t,r,i,s,o){this._animateToCenter=t,this._animateToZoom=r,this._animatingZoom=!0;var u=n.DomUtil.TRANSFORM,a=this._tileBg;clearTimeout(this._clearTileBgTimer);if(n.Browser.gecko||e.opera)a.style[u]+=" translate(0,0)";n.Util.falseFn(a.offsetWidth);var f=n.DomUtil.getScaleString(i,s),l=a.style[u];a.style[u]=o?l+" "+f:f+" "+l},_prepareTileBg:function(){var e=this._tilePane,t=this._tileBg;if(t&&this._getLoadedTilesPercentage(t)>.5&&this._getLoadedTilesPercentage(e)<.5){e.style.visibility="hidden",e.empty=!0,this._stopLoadingImages(e);return}t||(t=this._tileBg=this._createPane("leaflet-tile-pane",this._mapPane),t.style.zIndex=1),t.style[n.DomUtil.TRANSFORM]="",t.style.visibility="hidden",t.empty=!0,e.empty=!1,this._tilePane=this._panes.tilePane=t;var r=this._tileBg=e;n.DomUtil.addClass(r,"leaflet-zoom-animated"),this._stopLoadingImages(r)},_getLoadedTilesPercentage:function(e){var t=e.getElementsByTagName("img"),n,r,i=0;for(n=0,r=t.length;n<r;n++)t[n].complete&&i++;return i/r},_stopLoadingImages:function(e){var t=Array.prototype.slice.call(e.getElementsByTagName("img")),r,i,s;for(r=0,i=t.length;r<i;r++)s=t[r],s.complete||(s.onload=n.Util.falseFn,s.onerror=n.Util.falseFn,s.src=n.Util.emptyImageUrl,s.parentNode.removeChild(s))},_onZoomTransitionEnd:function(){this._restoreTileFront(),n.Util.falseFn(this._tileBg.offsetWidth),this._resetView(this._animateToCenter,this._animateToZoom,!0,!0),n.DomUtil.removeClass(this._mapPane,"leaflet-zoom-anim"),this._animatingZoom=!1},_restoreTileFront:function(){this._tilePane.innerHTML="",this._tilePane.style.visibility="",this._tilePane.style.zIndex=2,this._tileBg.style.zIndex=1},_clearTileBg:function(){!this._animatingZoom&&!this.touchZoom._zooming&&(this._tileBg.innerHTML="")}}:{}),n.Map.include({_defaultLocateOptions:{watch:!1,setView:!1,maxZoom:Infinity,timeout:1e4,maximumAge:0,enableHighAccuracy:!1},locate:function(e){e=this._locationOptions=n.Util.extend(this._defaultLocateOptions,e);if(!navigator.geolocation)return this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this;var t=n.Util.bind(this._handleGeolocationResponse,this),r=n.Util.bind(this._handleGeolocationError,this);return e.watch?this._locationWatchId=navigator.geolocation.watchPosition(t,r,e):navigator.geolocation.getCurrentPosition(t,r,e),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch(this._locationWatchId),this},_handleGeolocationError:function(e){var t=e.code,n=e.message||(t===1?"permission denied":t===2?"position unavailable":"timeout");this._locationOptions.setView&&!this._loaded&&this.fitWorld(),this.fire("locationerror",{code:t,message:"Geolocation error: "+n+"."})},_handleGeolocationResponse:function(e){var t=180*e.coords.accuracy/4e7,r=t*2,i=e.coords.latitude,s=e.coords.longitude,o=new n.LatLng(i,s),u=new n.LatLng(i-t,s-r),a=new n.LatLng(i+t,s+r),f=new n.LatLngBounds(u,a),l=this._locationOptions;if(l.setView){var c=Math.min(this.getBoundsZoom(f),l.maxZoom);this.setView(o,c)}this.fire("locationfound",{latlng:o,bounds:f,accuracy:e.coords.accuracy})}})})(this);
/* wax - 7.0.0dev10 - v6.0.4-112-g94e91cb */


!function (name, context, definition) {
  if (typeof module !== 'undefined') module.exports = definition(name, context);
  else if (typeof define === 'function' && typeof define.amd  === 'object') define(definition);
  else context[name] = definition(name, context);
}('bean', this, function (name, context) {
  var win = window
    , old = context[name]
    , overOut = /over|out/
    , namespaceRegex = /[^\.]*(?=\..*)\.|.*/
    , nameRegex = /\..*/
    , addEvent = 'addEventListener'
    , attachEvent = 'attachEvent'
    , removeEvent = 'removeEventListener'
    , detachEvent = 'detachEvent'
    , doc = document || {}
    , root = doc.documentElement || {}
    , W3C_MODEL = root[addEvent]
    , eventSupport = W3C_MODEL ? addEvent : attachEvent
    , slice = Array.prototype.slice
    , mouseTypeRegex = /click|mouse(?!(.*wheel|scroll))|menu|drag|drop/i
    , mouseWheelTypeRegex = /mouse.*(wheel|scroll)/i
    , textTypeRegex = /^text/i
    , touchTypeRegex = /^touch|^gesture/i
    , ONE = { one: 1 } // singleton for quick matching making add() do one()

    , nativeEvents = (function (hash, events, i) {
        for (i = 0; i < events.length; i++)
          hash[events[i]] = 1
        return hash
      })({}, (
          'click dblclick mouseup mousedown contextmenu ' +                  // mouse buttons
          'mousewheel mousemultiwheel DOMMouseScroll ' +                     // mouse wheel
          'mouseover mouseout mousemove selectstart selectend ' +            // mouse movement
          'keydown keypress keyup ' +                                        // keyboard
          'orientationchange ' +                                             // mobile
          'focus blur change reset select submit ' +                         // form elements
          'load unload beforeunload resize move DOMContentLoaded readystatechange ' + // window
          'error abort scroll ' +                                            // misc
          (W3C_MODEL ? // element.fireEvent('onXYZ'... is not forgiving if we try to fire an event
                       // that doesn't actually exist, so make sure we only do these on newer browsers
            'show ' +                                                          // mouse buttons
            'input invalid ' +                                                 // form elements
            'touchstart touchmove touchend touchcancel ' +                     // touch
            'gesturestart gesturechange gestureend ' +                         // gesture
            'message readystatechange pageshow pagehide popstate ' +           // window
            'hashchange offline online ' +                                     // window
            'afterprint beforeprint ' +                                        // printing
            'dragstart dragenter dragover dragleave drag drop dragend ' +      // dnd
            'loadstart progress suspend emptied stalled loadmetadata ' +       // media
            'loadeddata canplay canplaythrough playing waiting seeking ' +     // media
            'seeked ended durationchange timeupdate play pause ratechange ' +  // media
            'volumechange cuechange ' +                                        // media
            'checking noupdate downloading cached updateready obsolete ' +     // appcache
            '' : '')
        ).split(' ')
      )

    , customEvents = (function () {
        function isDescendant(parent, node) {
          while ((node = node.parentNode) !== null) {
            if (node === parent) return true
          }
          return false
        }

        function check(event) {
          var related = event.relatedTarget
          if (!related) return related === null
          return (related !== this && related.prefix !== 'xul' && !/document/.test(this.toString()) && !isDescendant(this, related))
        }

        return {
            mouseenter: { base: 'mouseover', condition: check }
          , mouseleave: { base: 'mouseout', condition: check }
          , mousewheel: { base: /Firefox/.test(navigator.userAgent) ? 'DOMMouseScroll' : 'mousewheel' }
        }
      })()

    , fixEvent = (function () {
        var commonProps = 'altKey attrChange attrName bubbles cancelable ctrlKey currentTarget detail eventPhase getModifierState isTrusted metaKey relatedNode relatedTarget shiftKey srcElement target timeStamp type view which'.split(' ')
          , mouseProps = commonProps.concat('button buttons clientX clientY dataTransfer fromElement offsetX offsetY pageX pageY screenX screenY toElement'.split(' '))
          , mouseWheelProps = mouseProps.concat('wheelDelta wheelDeltaX wheelDeltaY wheelDeltaZ axis'.split(' ')) // 'axis' is FF specific
          , keyProps = commonProps.concat('char charCode key keyCode keyIdentifier keyLocation'.split(' '))
          , textProps = commonProps.concat(['data'])
          , touchProps = commonProps.concat('touches targetTouches changedTouches scale rotation'.split(' '))
          , preventDefault = 'preventDefault'
          , createPreventDefault = function (event) {
              return function () {
                if (event[preventDefault])
                  event[preventDefault]()
                else
                  event.returnValue = false
              }
            }
          , stopPropagation = 'stopPropagation'
          , createStopPropagation = function (event) {
              return function () {
                if (event[stopPropagation])
                  event[stopPropagation]()
                else
                  event.cancelBubble = true
              }
            }
          , createStop = function (synEvent) {
              return function () {
                synEvent[preventDefault]()
                synEvent[stopPropagation]()
                synEvent.stopped = true
              }
            }
          , copyProps = function (event, result, props) {
              var i, p
              for (i = props.length; i--;) {
                p = props[i]
                if (!(p in result) && p in event) result[p] = event[p]
              }
            }

        return function (event, isNative) {
          var result = { originalEvent: event, isNative: isNative }
          if (!event)
            return result

          var props
            , type = event.type
            , target = event.target || event.srcElement

          result[preventDefault] = createPreventDefault(event)
          result[stopPropagation] = createStopPropagation(event)
          result.stop = createStop(result)
          result.target = target && target.nodeType === 3 ? target.parentNode : target

          if (isNative) { // we only need basic augmentation on custom events, the rest is too expensive
            if (type.indexOf('key') !== -1) {
              props = keyProps
              result.keyCode = event.which || event.keyCode
            } else if (mouseTypeRegex.test(type)) {
              props = mouseProps
              result.rightClick = event.which === 3 || event.button === 2
              result.pos = { x: 0, y: 0 }
              if (event.pageX || event.pageY) {
                result.clientX = event.pageX
                result.clientY = event.pageY
              } else if (event.clientX || event.clientY) {
                result.clientX = event.clientX + doc.body.scrollLeft + root.scrollLeft
                result.clientY = event.clientY + doc.body.scrollTop + root.scrollTop
              }
              if (overOut.test(type))
                result.relatedTarget = event.relatedTarget || event[(type === 'mouseover' ? 'from' : 'to') + 'Element']
            } else if (touchTypeRegex.test(type)) {
              props = touchProps
            } else if (mouseWheelTypeRegex.test(type)) {
              props = mouseWheelProps
            } else if (textTypeRegex.test(type)) {
              props = textProps
            }
            copyProps(event, result, props || commonProps)
          }
          return result
        }
      })()

      // if we're in old IE we can't do onpropertychange on doc or win so we use doc.documentElement for both
    , targetElement = function (element, isNative) {
        return !W3C_MODEL && !isNative && (element === doc || element === win) ? root : element
      }

      // we use one of these per listener, of any type
    , RegEntry = (function () {
        function entry(element, type, handler, original, namespaces) {
          this.element = element
          this.type = type
          this.handler = handler
          this.original = original
          this.namespaces = namespaces
          this.custom = customEvents[type]
          this.isNative = nativeEvents[type] && element[eventSupport]
          this.eventType = W3C_MODEL || this.isNative ? type : 'propertychange'
          this.customType = !W3C_MODEL && !this.isNative && type
          this.target = targetElement(element, this.isNative)
          this.eventSupport = this.target[eventSupport]
        }

        entry.prototype = {
            // given a list of namespaces, is our entry in any of them?
            inNamespaces: function (checkNamespaces) {
              var i, j
              if (!checkNamespaces)
                return true
              if (!this.namespaces)
                return false
              for (i = checkNamespaces.length; i--;) {
                for (j = this.namespaces.length; j--;) {
                  if (checkNamespaces[i] === this.namespaces[j])
                    return true
                }
              }
              return false
            }

            // match by element, original fn (opt), handler fn (opt)
          , matches: function (checkElement, checkOriginal, checkHandler) {
              return this.element === checkElement &&
                (!checkOriginal || this.original === checkOriginal) &&
                (!checkHandler || this.handler === checkHandler)
            }
        }

        return entry
      })()

    , registry = (function () {
        // our map stores arrays by event type, just because it's better than storing
        // everything in a single array. uses '$' as a prefix for the keys for safety
        var map = {}

          // generic functional search of our registry for matching listeners,
          // `fn` returns false to break out of the loop
          , forAll = function (element, type, original, handler, fn) {
              if (!type || type === '*') {
                // search the whole registry
                for (var t in map) {
                  if (t.charAt(0) === '$')
                    forAll(element, t.substr(1), original, handler, fn)
                }
              } else {
                var i = 0, l, list = map['$' + type], all = element === '*'
                if (!list)
                  return
                for (l = list.length; i < l; i++) {
                  if (all || list[i].matches(element, original, handler))
                    if (!fn(list[i], list, i, type))
                      return
                }
              }
            }

          , has = function (element, type, original) {
              // we're not using forAll here simply because it's a bit slower and this
              // needs to be fast
              var i, list = map['$' + type]
              if (list) {
                for (i = list.length; i--;) {
                  if (list[i].matches(element, original, null))
                    return true
                }
              }
              return false
            }

          , get = function (element, type, original) {
              var entries = []
              forAll(element, type, original, null, function (entry) { return entries.push(entry) })
              return entries
            }

          , put = function (entry) {
              (map['$' + entry.type] || (map['$' + entry.type] = [])).push(entry)
              return entry
            }

          , del = function (entry) {
              forAll(entry.element, entry.type, null, entry.handler, function (entry, list, i) {
                list.splice(i, 1)
                if (list.length === 0)
                  delete map['$' + entry.type]
                return false
              })
            }

            // dump all entries, used for onunload
          , entries = function () {
              var t, entries = []
              for (t in map) {
                if (t.charAt(0) === '$')
                  entries = entries.concat(map[t])
              }
              return entries
            }

        return { has: has, get: get, put: put, del: del, entries: entries }
      })()

      // add and remove listeners to DOM elements
    , listener = W3C_MODEL ? function (element, type, fn, add) {
        element[add ? addEvent : removeEvent](type, fn, false)
      } : function (element, type, fn, add, custom) {
        if (custom && add && element['_on' + custom] === null)
          element['_on' + custom] = 0
        element[add ? attachEvent : detachEvent]('on' + type, fn)
      }

    , nativeHandler = function (element, fn, args) {
        return function (event) {
          event = fixEvent(event || ((this.ownerDocument || this.document || this).parentWindow || win).event, true)
          return fn.apply(element, [event].concat(args))
        }
      }

    , customHandler = function (element, fn, type, condition, args, isNative) {
        return function (event) {
          if (condition ? condition.apply(this, arguments) : W3C_MODEL ? true : event && event.propertyName === '_on' + type || !event) {
            if (event)
              event = fixEvent(event || ((this.ownerDocument || this.document || this).parentWindow || win).event, isNative)
            fn.apply(element, event && (!args || args.length === 0) ? arguments : slice.call(arguments, event ? 0 : 1).concat(args))
          }
        }
      }

    , once = function (rm, element, type, fn, originalFn) {
        // wrap the handler in a handler that does a remove as well
        return function () {
          rm(element, type, originalFn)
          fn.apply(this, arguments)
        }
      }

    , removeListener = function (element, orgType, handler, namespaces) {
        var i, l, entry
          , type = (orgType && orgType.replace(nameRegex, ''))
          , handlers = registry.get(element, type, handler)

        for (i = 0, l = handlers.length; i < l; i++) {
          if (handlers[i].inNamespaces(namespaces)) {
            if ((entry = handlers[i]).eventSupport)
              listener(entry.target, entry.eventType, entry.handler, false, entry.type)
            // TODO: this is problematic, we have a registry.get() and registry.del() that
            // both do registry searches so we waste cycles doing this. Needs to be rolled into
            // a single registry.forAll(fn) that removes while finding, but the catch is that
            // we'll be splicing the arrays that we're iterating over. Needs extra tests to
            // make sure we don't screw it up. @rvagg
            registry.del(entry)
          }
        }
      }

    , addListener = function (element, orgType, fn, originalFn, args) {
        var entry
          , type = orgType.replace(nameRegex, '')
          , namespaces = orgType.replace(namespaceRegex, '').split('.')

        if (registry.has(element, type, fn))
          return element // no dupe
        if (type === 'unload')
          fn = once(removeListener, element, type, fn, originalFn) // self clean-up
        if (customEvents[type]) {
          if (customEvents[type].condition)
            fn = customHandler(element, fn, type, customEvents[type].condition, true)
          type = customEvents[type].base || type
        }
        entry = registry.put(new RegEntry(element, type, fn, originalFn, namespaces[0] && namespaces))
        entry.handler = entry.isNative ?
          nativeHandler(element, entry.handler, args) :
          customHandler(element, entry.handler, type, false, args, false)
        if (entry.eventSupport)
          listener(entry.target, entry.eventType, entry.handler, true, entry.customType)
      }

    , del = function (selector, fn, $) {
        return function (e) {
          var target, i, array = typeof selector === 'string' ? $(selector, this) : selector
          for (target = e.target; target && target !== this; target = target.parentNode) {
            for (i = array.length; i--;) {
              if (array[i] === target) {
                return fn.apply(target, arguments)
              }
            }
          }
        }
      }

    , remove = function (element, typeSpec, fn) {
        var k, m, type, namespaces, i
          , rm = removeListener
          , isString = typeSpec && typeof typeSpec === 'string'

        if (isString && typeSpec.indexOf(' ') > 0) {
          // remove(el, 't1 t2 t3', fn) or remove(el, 't1 t2 t3')
          typeSpec = typeSpec.split(' ')
          for (i = typeSpec.length; i--;)
            remove(element, typeSpec[i], fn)
          return element
        }
        type = isString && typeSpec.replace(nameRegex, '')
        if (type && customEvents[type])
          type = customEvents[type].type
        if (!typeSpec || isString) {
          // remove(el) or remove(el, t1.ns) or remove(el, .ns) or remove(el, .ns1.ns2.ns3)
          if (namespaces = isString && typeSpec.replace(namespaceRegex, ''))
            namespaces = namespaces.split('.')
          rm(element, type, fn, namespaces)
        } else if (typeof typeSpec === 'function') {
          // remove(el, fn)
          rm(element, null, typeSpec)
        } else {
          // remove(el, { t1: fn1, t2, fn2 })
          for (k in typeSpec) {
            if (typeSpec.hasOwnProperty(k))
              remove(element, k, typeSpec[k])
          }
        }
        return element
      }

    , add = function (element, events, fn, delfn, $) {
        var type, types, i, args
          , originalFn = fn
          , isDel = fn && typeof fn === 'string'

        if (events && !fn && typeof events === 'object') {
          for (type in events) {
            if (events.hasOwnProperty(type))
              add.apply(this, [ element, type, events[type] ])
          }
        } else {
          args = arguments.length > 3 ? slice.call(arguments, 3) : []
          types = (isDel ? fn : events).split(' ')
          isDel && (fn = del(events, (originalFn = delfn), $)) && (args = slice.call(args, 1))
          // special case for one()
          this === ONE && (fn = once(remove, element, events, fn, originalFn))
          for (i = types.length; i--;) addListener(element, types[i], fn, originalFn, args)
        }
        return element
      }

    , one = function () {
        return add.apply(ONE, arguments)
      }

    , fireListener = W3C_MODEL ? function (isNative, type, element) {
        var evt = doc.createEvent(isNative ? 'HTMLEvents' : 'UIEvents')
        evt[isNative ? 'initEvent' : 'initUIEvent'](type, true, true, win, 1)
        element.dispatchEvent(evt)
      } : function (isNative, type, element) {
        element = targetElement(element, isNative)
        // if not-native then we're using onpropertychange so we just increment a custom property
        isNative ? element.fireEvent('on' + type, doc.createEventObject()) : element['_on' + type]++
      }

    , fire = function (element, type, args) {
        var i, j, l, names, handlers
          , types = type.split(' ')

        for (i = types.length; i--;) {
          type = types[i].replace(nameRegex, '')
          if (names = types[i].replace(namespaceRegex, ''))
            names = names.split('.')
          if (!names && !args && element[eventSupport]) {
            fireListener(nativeEvents[type], type, element)
          } else {
            // non-native event, either because of a namespace, arguments or a non DOM element
            // iterate over all listeners and manually 'fire'
            handlers = registry.get(element, type)
            args = [false].concat(args)
            for (j = 0, l = handlers.length; j < l; j++) {
              if (handlers[j].inNamespaces(names))
                handlers[j].handler.apply(element, args)
            }
          }
        }
        return element
      }

    , clone = function (element, from, type) {
        var i = 0
          , handlers = registry.get(from, type)
          , l = handlers.length

        for (;i < l; i++)
          handlers[i].original && add(element, handlers[i].type, handlers[i].original)
        return element
      }

    , bean = {
          add: add
        , one: one
        , remove: remove
        , clone: clone
        , fire: fire
        , noConflict: function () {
            context[name] = old
            return this
          }
      }

  if (win[attachEvent]) {
    // for IE, clean up on unload to avoid leaks
    var cleanup = function () {
      var i, entries = registry.entries()
      for (i in entries) {
        if (entries[i].type && entries[i].type !== 'unload')
          remove(entries[i].element, entries[i].type)
      }
      win[detachEvent]('onunload', cleanup)
      win.CollectGarbage && win.CollectGarbage()
    }
    win[attachEvent]('onunload', cleanup)
  }

  return bean
})
// Copyright Google Inc.
// Licensed under the Apache Licence Version 2.0
// Autogenerated at Tue Oct 11 13:36:46 EDT 2011
// @provides html4
var html4 = {};
html4.atype = {
  NONE: 0,
  URI: 1,
  URI_FRAGMENT: 11,
  SCRIPT: 2,
  STYLE: 3,
  ID: 4,
  IDREF: 5,
  IDREFS: 6,
  GLOBAL_NAME: 7,
  LOCAL_NAME: 8,
  CLASSES: 9,
  FRAME_TARGET: 10
};
html4.ATTRIBS = {
  '*::class': 9,
  '*::dir': 0,
  '*::id': 4,
  '*::lang': 0,
  '*::onclick': 2,
  '*::ondblclick': 2,
  '*::onkeydown': 2,
  '*::onkeypress': 2,
  '*::onkeyup': 2,
  '*::onload': 2,
  '*::onmousedown': 2,
  '*::onmousemove': 2,
  '*::onmouseout': 2,
  '*::onmouseover': 2,
  '*::onmouseup': 2,
  '*::style': 3,
  '*::title': 0,
  'a::accesskey': 0,
  'a::coords': 0,
  'a::href': 1,
  'a::hreflang': 0,
  'a::name': 7,
  'a::onblur': 2,
  'a::onfocus': 2,
  'a::rel': 0,
  'a::rev': 0,
  'a::shape': 0,
  'a::tabindex': 0,
  'a::target': 10,
  'a::type': 0,
  'area::accesskey': 0,
  'area::alt': 0,
  'area::coords': 0,
  'area::href': 1,
  'area::nohref': 0,
  'area::onblur': 2,
  'area::onfocus': 2,
  'area::shape': 0,
  'area::tabindex': 0,
  'area::target': 10,
  'bdo::dir': 0,
  'blockquote::cite': 1,
  'br::clear': 0,
  'button::accesskey': 0,
  'button::disabled': 0,
  'button::name': 8,
  'button::onblur': 2,
  'button::onfocus': 2,
  'button::tabindex': 0,
  'button::type': 0,
  'button::value': 0,
  'canvas::height': 0,
  'canvas::width': 0,
  'caption::align': 0,
  'col::align': 0,
  'col::char': 0,
  'col::charoff': 0,
  'col::span': 0,
  'col::valign': 0,
  'col::width': 0,
  'colgroup::align': 0,
  'colgroup::char': 0,
  'colgroup::charoff': 0,
  'colgroup::span': 0,
  'colgroup::valign': 0,
  'colgroup::width': 0,
  'del::cite': 1,
  'del::datetime': 0,
  'dir::compact': 0,
  'div::align': 0,
  'dl::compact': 0,
  'font::color': 0,
  'font::face': 0,
  'font::size': 0,
  'form::accept': 0,
  'form::action': 1,
  'form::autocomplete': 0,
  'form::enctype': 0,
  'form::method': 0,
  'form::name': 7,
  'form::onreset': 2,
  'form::onsubmit': 2,
  'form::target': 10,
  'h1::align': 0,
  'h2::align': 0,
  'h3::align': 0,
  'h4::align': 0,
  'h5::align': 0,
  'h6::align': 0,
  'hr::align': 0,
  'hr::noshade': 0,
  'hr::size': 0,
  'hr::width': 0,
  'iframe::align': 0,
  'iframe::frameborder': 0,
  'iframe::height': 0,
  'iframe::marginheight': 0,
  'iframe::marginwidth': 0,
  'iframe::width': 0,
  'img::align': 0,
  'img::alt': 0,
  'img::border': 0,
  'img::height': 0,
  'img::hspace': 0,
  'img::ismap': 0,
  'img::name': 7,
  'img::src': 1,
  'img::usemap': 11,
  'img::vspace': 0,
  'img::width': 0,
  'input::accept': 0,
  'input::accesskey': 0,
  'input::align': 0,
  'input::alt': 0,
  'input::autocomplete': 0,
  'input::checked': 0,
  'input::disabled': 0,
  'input::ismap': 0,
  'input::maxlength': 0,
  'input::name': 8,
  'input::onblur': 2,
  'input::onchange': 2,
  'input::onfocus': 2,
  'input::onselect': 2,
  'input::readonly': 0,
  'input::size': 0,
  'input::src': 1,
  'input::tabindex': 0,
  'input::type': 0,
  'input::usemap': 11,
  'input::value': 0,
  'ins::cite': 1,
  'ins::datetime': 0,
  'label::accesskey': 0,
  'label::for': 5,
  'label::onblur': 2,
  'label::onfocus': 2,
  'legend::accesskey': 0,
  'legend::align': 0,
  'li::type': 0,
  'li::value': 0,
  'map::name': 7,
  'menu::compact': 0,
  'ol::compact': 0,
  'ol::start': 0,
  'ol::type': 0,
  'optgroup::disabled': 0,
  'optgroup::label': 0,
  'option::disabled': 0,
  'option::label': 0,
  'option::selected': 0,
  'option::value': 0,
  'p::align': 0,
  'pre::width': 0,
  'q::cite': 1,
  'select::disabled': 0,
  'select::multiple': 0,
  'select::name': 8,
  'select::onblur': 2,
  'select::onchange': 2,
  'select::onfocus': 2,
  'select::size': 0,
  'select::tabindex': 0,
  'table::align': 0,
  'table::bgcolor': 0,
  'table::border': 0,
  'table::cellpadding': 0,
  'table::cellspacing': 0,
  'table::frame': 0,
  'table::rules': 0,
  'table::summary': 0,
  'table::width': 0,
  'tbody::align': 0,
  'tbody::char': 0,
  'tbody::charoff': 0,
  'tbody::valign': 0,
  'td::abbr': 0,
  'td::align': 0,
  'td::axis': 0,
  'td::bgcolor': 0,
  'td::char': 0,
  'td::charoff': 0,
  'td::colspan': 0,
  'td::headers': 6,
  'td::height': 0,
  'td::nowrap': 0,
  'td::rowspan': 0,
  'td::scope': 0,
  'td::valign': 0,
  'td::width': 0,
  'textarea::accesskey': 0,
  'textarea::cols': 0,
  'textarea::disabled': 0,
  'textarea::name': 8,
  'textarea::onblur': 2,
  'textarea::onchange': 2,
  'textarea::onfocus': 2,
  'textarea::onselect': 2,
  'textarea::readonly': 0,
  'textarea::rows': 0,
  'textarea::tabindex': 0,
  'tfoot::align': 0,
  'tfoot::char': 0,
  'tfoot::charoff': 0,
  'tfoot::valign': 0,
  'th::abbr': 0,
  'th::align': 0,
  'th::axis': 0,
  'th::bgcolor': 0,
  'th::char': 0,
  'th::charoff': 0,
  'th::colspan': 0,
  'th::headers': 6,
  'th::height': 0,
  'th::nowrap': 0,
  'th::rowspan': 0,
  'th::scope': 0,
  'th::valign': 0,
  'th::width': 0,
  'thead::align': 0,
  'thead::char': 0,
  'thead::charoff': 0,
  'thead::valign': 0,
  'tr::align': 0,
  'tr::bgcolor': 0,
  'tr::char': 0,
  'tr::charoff': 0,
  'tr::valign': 0,
  'ul::compact': 0,
  'ul::type': 0
};
html4.eflags = {
  OPTIONAL_ENDTAG: 1,
  EMPTY: 2,
  CDATA: 4,
  RCDATA: 8,
  UNSAFE: 16,
  FOLDABLE: 32,
  SCRIPT: 64,
  STYLE: 128
};
html4.ELEMENTS = {
  'a': 0,
  'abbr': 0,
  'acronym': 0,
  'address': 0,
  'applet': 16,
  'area': 2,
  'b': 0,
  'base': 18,
  'basefont': 18,
  'bdo': 0,
  'big': 0,
  'blockquote': 0,
  'body': 49,
  'br': 2,
  'button': 0,
  'canvas': 0,
  'caption': 0,
  'center': 0,
  'cite': 0,
  'code': 0,
  'col': 2,
  'colgroup': 1,
  'dd': 1,
  'del': 0,
  'dfn': 0,
  'dir': 0,
  'div': 0,
  'dl': 0,
  'dt': 1,
  'em': 0,
  'fieldset': 0,
  'font': 0,
  'form': 0,
  'frame': 18,
  'frameset': 16,
  'h1': 0,
  'h2': 0,
  'h3': 0,
  'h4': 0,
  'h5': 0,
  'h6': 0,
  'head': 49,
  'hr': 2,
  'html': 49,
  'i': 0,
  'iframe': 4,
  'img': 2,
  'input': 2,
  'ins': 0,
  'isindex': 18,
  'kbd': 0,
  'label': 0,
  'legend': 0,
  'li': 1,
  'link': 18,
  'map': 0,
  'menu': 0,
  'meta': 18,
  'nobr': 0,
  'noembed': 4,
  'noframes': 20,
  'noscript': 20,
  'object': 16,
  'ol': 0,
  'optgroup': 0,
  'option': 1,
  'p': 1,
  'param': 18,
  'pre': 0,
  'q': 0,
  's': 0,
  'samp': 0,
  'script': 84,
  'select': 0,
  'small': 0,
  'span': 0,
  'strike': 0,
  'strong': 0,
  'style': 148,
  'sub': 0,
  'sup': 0,
  'table': 0,
  'tbody': 1,
  'td': 1,
  'textarea': 8,
  'tfoot': 1,
  'th': 1,
  'thead': 1,
  'title': 24,
  'tr': 1,
  'tt': 0,
  'u': 0,
  'ul': 0,
  'var': 0
};
html4.ueffects = {
  NOT_LOADED: 0,
  SAME_DOCUMENT: 1,
  NEW_DOCUMENT: 2
};
html4.URIEFFECTS = {
  'a::href': 2,
  'area::href': 2,
  'blockquote::cite': 0,
  'body::background': 1,
  'del::cite': 0,
  'form::action': 2,
  'img::src': 1,
  'input::src': 1,
  'ins::cite': 0,
  'q::cite': 0
};
html4.ltypes = {
  UNSANDBOXED: 2,
  SANDBOXED: 1,
  DATA: 0
};
html4.LOADERTYPES = {
  'a::href': 2,
  'area::href': 2,
  'blockquote::cite': 2,
  'body::background': 1,
  'del::cite': 2,
  'form::action': 2,
  'img::src': 1,
  'input::src': 1,
  'ins::cite': 2,
  'q::cite': 2
};;
// Copyright (C) 2006 Google Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview
 * An HTML sanitizer that can satisfy a variety of security policies.
 *
 * <p>
 * The HTML sanitizer is built around a SAX parser and HTML element and
 * attributes schemas.
 *
 * @author mikesamuel@gmail.com
 * @requires html4
 * @overrides window
 * @provides html, html_sanitize
 */

/**
 * @namespace
 */
var html = (function (html4) {
  var lcase;
  // The below may not be true on browsers in the Turkish locale.
  if ('script' === 'SCRIPT'.toLowerCase()) {
    lcase = function (s) { return s.toLowerCase(); };
  } else {
    /**
     * {@updoc
     * $ lcase('SCRIPT')
     * # 'script'
     * $ lcase('script')
     * # 'script'
     * }
     */
    lcase = function (s) {
      return s.replace(
          /[A-Z]/g,
          function (ch) {
            return String.fromCharCode(ch.charCodeAt(0) | 32);
          });
    };
  }

  var ENTITIES = {
    lt   : '<',
    gt   : '>',
    amp  : '&',
    nbsp : '\240',
    quot : '"',
    apos : '\''
  };
  
  // Schemes on which to defer to uripolicy. Urls with other schemes are denied
  var WHITELISTED_SCHEMES = /^(?:https?|mailto|data)$/i;

  var decimalEscapeRe = /^#(\d+)$/;
  var hexEscapeRe = /^#x([0-9A-Fa-f]+)$/;
  /**
   * Decodes an HTML entity.
   *
   * {@updoc
   * $ lookupEntity('lt')
   * # '<'
   * $ lookupEntity('GT')
   * # '>'
   * $ lookupEntity('amp')
   * # '&'
   * $ lookupEntity('nbsp')
   * # '\xA0'
   * $ lookupEntity('apos')
   * # "'"
   * $ lookupEntity('quot')
   * # '"'
   * $ lookupEntity('#xa')
   * # '\n'
   * $ lookupEntity('#10')
   * # '\n'
   * $ lookupEntity('#x0a')
   * # '\n'
   * $ lookupEntity('#010')
   * # '\n'
   * $ lookupEntity('#x00A')
   * # '\n'
   * $ lookupEntity('Pi')      // Known failure
   * # '\u03A0'
   * $ lookupEntity('pi')      // Known failure
   * # '\u03C0'
   * }
   *
   * @param name the content between the '&' and the ';'.
   * @return a single unicode code-point as a string.
   */
  function lookupEntity(name) {
    name = lcase(name);  // TODO: &pi; is different from &Pi;
    if (ENTITIES.hasOwnProperty(name)) { return ENTITIES[name]; }
    var m = name.match(decimalEscapeRe);
    if (m) {
      return String.fromCharCode(parseInt(m[1], 10));
    } else if (!!(m = name.match(hexEscapeRe))) {
      return String.fromCharCode(parseInt(m[1], 16));
    }
    return '';
  }

  function decodeOneEntity(_, name) {
    return lookupEntity(name);
  }

  var nulRe = /\0/g;
  function stripNULs(s) {
    return s.replace(nulRe, '');
  }

  var entityRe = /&(#\d+|#x[0-9A-Fa-f]+|\w+);/g;
  /**
   * The plain text of a chunk of HTML CDATA which possibly containing.
   *
   * {@updoc
   * $ unescapeEntities('')
   * # ''
   * $ unescapeEntities('hello World!')
   * # 'hello World!'
   * $ unescapeEntities('1 &lt; 2 &amp;&AMP; 4 &gt; 3&#10;')
   * # '1 < 2 && 4 > 3\n'
   * $ unescapeEntities('&lt;&lt <- unfinished entity&gt;')
   * # '<&lt <- unfinished entity>'
   * $ unescapeEntities('/foo?bar=baz&copy=true')  // & often unescaped in URLS
   * # '/foo?bar=baz&copy=true'
   * $ unescapeEntities('pi=&pi;&#x3c0;, Pi=&Pi;\u03A0') // FIXME: known failure
   * # 'pi=\u03C0\u03c0, Pi=\u03A0\u03A0'
   * }
   *
   * @param s a chunk of HTML CDATA.  It must not start or end inside an HTML
   *   entity.
   */
  function unescapeEntities(s) {
    return s.replace(entityRe, decodeOneEntity);
  }

  var ampRe = /&/g;
  var looseAmpRe = /&([^a-z#]|#(?:[^0-9x]|x(?:[^0-9a-f]|$)|$)|$)/gi;
  var ltRe = /</g;
  var gtRe = />/g;
  var quotRe = /\"/g;
  var eqRe = /\=/g;  // Backslash required on JScript.net

  /**
   * Escapes HTML special characters in attribute values as HTML entities.
   *
   * {@updoc
   * $ escapeAttrib('')
   * # ''
   * $ escapeAttrib('"<<&==&>>"')  // Do not just escape the first occurrence.
   * # '&#34;&lt;&lt;&amp;&#61;&#61;&amp;&gt;&gt;&#34;'
   * $ escapeAttrib('Hello <World>!')
   * # 'Hello &lt;World&gt;!'
   * }
   */
  function escapeAttrib(s) {
    // Escaping '=' defangs many UTF-7 and SGML short-tag attacks.
    return s.replace(ampRe, '&amp;').replace(ltRe, '&lt;').replace(gtRe, '&gt;')
        .replace(quotRe, '&#34;').replace(eqRe, '&#61;');
  }

  /**
   * Escape entities in RCDATA that can be escaped without changing the meaning.
   * {@updoc
   * $ normalizeRCData('1 < 2 &&amp; 3 > 4 &amp;& 5 &lt; 7&8')
   * # '1 &lt; 2 &amp;&amp; 3 &gt; 4 &amp;&amp; 5 &lt; 7&amp;8'
   * }
   */
  function normalizeRCData(rcdata) {
    return rcdata
        .replace(looseAmpRe, '&amp;$1')
        .replace(ltRe, '&lt;')
        .replace(gtRe, '&gt;');
  }


  // TODO(mikesamuel): validate sanitizer regexs against the HTML5 grammar at
  // http://www.whatwg.org/specs/web-apps/current-work/multipage/syntax.html
  // http://www.whatwg.org/specs/web-apps/current-work/multipage/parsing.html
  // http://www.whatwg.org/specs/web-apps/current-work/multipage/tokenization.html
  // http://www.whatwg.org/specs/web-apps/current-work/multipage/tree-construction.html

  /** token definitions. */
  var INSIDE_TAG_TOKEN = new RegExp(
      // Don't capture space.
      '^\\s*(?:'
      // Capture an attribute name in group 1, and value in group 3.
      // We capture the fact that there was an attribute in group 2, since
      // interpreters are inconsistent in whether a group that matches nothing
      // is null, undefined, or the empty string.
      + ('(?:'
         + '([a-z][a-z-]*)'                    // attribute name
         + ('('                                // optionally followed
            + '\\s*=\\s*'
            + ('('
               // A double quoted string.
               + '\"[^\"]*\"'
               // A single quoted string.
               + '|\'[^\']*\''
               // The positive lookahead is used to make sure that in
               // <foo bar= baz=boo>, the value for bar is blank, not "baz=boo".
               + '|(?=[a-z][a-z-]*\\s*=)'
               // An unquoted value that is not an attribute name.
               // We know it is not an attribute name because the previous
               // zero-width match would've eliminated that possibility.
               + '|[^>\"\'\\s]*'
               + ')'
               )
            + ')'
            ) + '?'
         + ')'
         )
      // End of tag captured in group 3.
      + '|(\/?>)'
      // Don't capture cruft
      + '|[\\s\\S][^a-z\\s>]*)',
      'i');

  var OUTSIDE_TAG_TOKEN = new RegExp(
      '^(?:'
      // Entity captured in group 1.
      + '&(\\#[0-9]+|\\#[x][0-9a-f]+|\\w+);'
      // Comment, doctypes, and processing instructions not captured.
      + '|<\!--[\\s\\S]*?--\>|<!\\w[^>]*>|<\\?[^>*]*>'
      // '/' captured in group 2 for close tags, and name captured in group 3.
      + '|<(\/)?([a-z][a-z0-9]*)'
      // Text captured in group 4.
      + '|([^<&>]+)'
      // Cruft captured in group 5.
      + '|([<&>]))',
      'i');

  /**
   * Given a SAX-like event handler, produce a function that feeds those
   * events and a parameter to the event handler.
   *
   * The event handler has the form:{@code
   * {
   *   // Name is an upper-case HTML tag name.  Attribs is an array of
   *   // alternating upper-case attribute names, and attribute values.  The
   *   // attribs array is reused by the parser.  Param is the value passed to
   *   // the saxParser.
   *   startTag: function (name, attribs, param) { ... },
   *   endTag:   function (name, param) { ... },
   *   pcdata:   function (text, param) { ... },
   *   rcdata:   function (text, param) { ... },
   *   cdata:    function (text, param) { ... },
   *   startDoc: function (param) { ... },
   *   endDoc:   function (param) { ... }
   * }}
   *
   * @param {Object} handler a record containing event handlers.
   * @return {Function} that takes a chunk of html and a parameter.
   *   The parameter is passed on to the handler methods.
   */
  function makeSaxParser(handler) {
    return function parse(htmlText, param) {
      htmlText = String(htmlText);
      var htmlLower = null;

      var inTag = false;  // True iff we're currently processing a tag.
      var attribs = [];  // Accumulates attribute names and values.
      var tagName = void 0;  // The name of the tag currently being processed.
      var eflags = void 0;  // The element flags for the current tag.
      var openTag = void 0;  // True if the current tag is an open tag.

      if (handler.startDoc) { handler.startDoc(param); }

      while (htmlText) {
        var m = htmlText.match(inTag ? INSIDE_TAG_TOKEN : OUTSIDE_TAG_TOKEN);
        htmlText = htmlText.substring(m[0].length);

        if (inTag) {
          if (m[1]) { // attribute
            // setAttribute with uppercase names doesn't work on IE6.
            var attribName = lcase(m[1]);
            var decodedValue;
            if (m[2]) {
              var encodedValue = m[3];
              switch (encodedValue.charCodeAt(0)) {  // Strip quotes
                case 34: case 39:
                  encodedValue = encodedValue.substring(
                      1, encodedValue.length - 1);
                  break;
              }
              decodedValue = unescapeEntities(stripNULs(encodedValue));
            } else {
              // Use name as value for valueless attribs, so
              //   <input type=checkbox checked>
              // gets attributes ['type', 'checkbox', 'checked', 'checked']
              decodedValue = attribName;
            }
            attribs.push(attribName, decodedValue);
          } else if (m[4]) {
            if (eflags !== void 0) {  // False if not in whitelist.
              if (openTag) {
                if (handler.startTag) {
                  handler.startTag(tagName, attribs, param);
                }
              } else {
                if (handler.endTag) {
                  handler.endTag(tagName, param);
                }
              }
            }

            if (openTag
                && (eflags & (html4.eflags.CDATA | html4.eflags.RCDATA))) {
              if (htmlLower === null) {
                htmlLower = lcase(htmlText);
              } else {
                htmlLower = htmlLower.substring(
                    htmlLower.length - htmlText.length);
              }
              var dataEnd = htmlLower.indexOf('</' + tagName);
              if (dataEnd < 0) { dataEnd = htmlText.length; }
              if (dataEnd) {
                if (eflags & html4.eflags.CDATA) {
                  if (handler.cdata) {
                    handler.cdata(htmlText.substring(0, dataEnd), param);
                  }
                } else if (handler.rcdata) {
                  handler.rcdata(
                    normalizeRCData(htmlText.substring(0, dataEnd)), param);
                }
                htmlText = htmlText.substring(dataEnd);
              }
            }

            tagName = eflags = openTag = void 0;
            attribs.length = 0;
            inTag = false;
          }
        } else {
          if (m[1]) {  // Entity
            if (handler.pcdata) { handler.pcdata(m[0], param); }
          } else if (m[3]) {  // Tag
            openTag = !m[2];
            inTag = true;
            tagName = lcase(m[3]);
            eflags = html4.ELEMENTS.hasOwnProperty(tagName)
                ? html4.ELEMENTS[tagName] : void 0;
          } else if (m[4]) {  // Text
            if (handler.pcdata) { handler.pcdata(m[4], param); }
          } else if (m[5]) {  // Cruft
            if (handler.pcdata) {
              var ch = m[5];
              handler.pcdata(
                  ch === '<' ? '&lt;' : ch === '>' ? '&gt;' : '&amp;',
                  param);
            }
          }
        }
      }

      if (handler.endDoc) { handler.endDoc(param); }
    };
  }

  /**
   * Returns a function that strips unsafe tags and attributes from html.
   * @param {Function} sanitizeAttributes
   *     maps from (tagName, attribs[]) to null or a sanitized attribute array.
   *     The attribs array can be arbitrarily modified, but the same array
   *     instance is reused, so should not be held.
   * @return {Function} from html to sanitized html
   */
  function makeHtmlSanitizer(sanitizeAttributes) {
    var stack;
    var ignoring;
    return makeSaxParser({
        startDoc: function (_) {
          stack = [];
          ignoring = false;
        },
        startTag: function (tagName, attribs, out) {
          if (ignoring) { return; }
          if (!html4.ELEMENTS.hasOwnProperty(tagName)) { return; }
          var eflags = html4.ELEMENTS[tagName];
          if (eflags & html4.eflags.FOLDABLE) {
            return;
          } else if (eflags & html4.eflags.UNSAFE) {
            ignoring = !(eflags & html4.eflags.EMPTY);
            return;
          }
          attribs = sanitizeAttributes(tagName, attribs);
          // TODO(mikesamuel): relying on sanitizeAttributes not to
          // insert unsafe attribute names.
          if (attribs) {
            if (!(eflags & html4.eflags.EMPTY)) {
              stack.push(tagName);
            }

            out.push('<', tagName);
            for (var i = 0, n = attribs.length; i < n; i += 2) {
              var attribName = attribs[i],
                  value = attribs[i + 1];
              if (value !== null && value !== void 0) {
                out.push(' ', attribName, '="', escapeAttrib(value), '"');
              }
            }
            out.push('>');
          }
        },
        endTag: function (tagName, out) {
          if (ignoring) {
            ignoring = false;
            return;
          }
          if (!html4.ELEMENTS.hasOwnProperty(tagName)) { return; }
          var eflags = html4.ELEMENTS[tagName];
          if (!(eflags & (html4.eflags.UNSAFE | html4.eflags.EMPTY
                          | html4.eflags.FOLDABLE))) {
            var index;
            if (eflags & html4.eflags.OPTIONAL_ENDTAG) {
              for (index = stack.length; --index >= 0;) {
                var stackEl = stack[index];
                if (stackEl === tagName) { break; }
                if (!(html4.ELEMENTS[stackEl]
                      & html4.eflags.OPTIONAL_ENDTAG)) {
                  // Don't pop non optional end tags looking for a match.
                  return;
                }
              }
            } else {
              for (index = stack.length; --index >= 0;) {
                if (stack[index] === tagName) { break; }
              }
            }
            if (index < 0) { return; }  // Not opened.
            for (var i = stack.length; --i > index;) {
              var stackEl = stack[i];
              if (!(html4.ELEMENTS[stackEl]
                    & html4.eflags.OPTIONAL_ENDTAG)) {
                out.push('</', stackEl, '>');
              }
            }
            stack.length = index;
            out.push('</', tagName, '>');
          }
        },
        pcdata: function (text, out) {
          if (!ignoring) { out.push(text); }
        },
        rcdata: function (text, out) {
          if (!ignoring) { out.push(text); }
        },
        cdata: function (text, out) {
          if (!ignoring) { out.push(text); }
        },
        endDoc: function (out) {
          for (var i = stack.length; --i >= 0;) {
            out.push('</', stack[i], '>');
          }
          stack.length = 0;
        }
      });
  }

  // From RFC3986
  var URI_SCHEME_RE = new RegExp(
        "^" +
      "(?:" +
        "([^:\/?#]+)" +         // scheme
      ":)?"
      );

  /**
   * Strips unsafe tags and attributes from html.
   * @param {string} htmlText to sanitize
   * @param {Function} opt_uriPolicy -- a transform to apply to uri/url
   *     attribute values.  If no opt_uriPolicy is provided, no uris
   *     are allowed ie. the default uriPolicy rewrites all uris to null
   * @param {Function} opt_nmTokenPolicy : string -> string? -- a transform to
   *     apply to names, ids, and classes. If no opt_nmTokenPolicy is provided,
   *     all names, ids and classes are passed through ie. the default
   *     nmTokenPolicy is an identity transform
   * @return {string} html
   */
  function sanitize(htmlText, opt_uriPolicy, opt_nmTokenPolicy) {
    var out = [];
    makeHtmlSanitizer(
      function sanitizeAttribs(tagName, attribs) {
        for (var i = 0; i < attribs.length; i += 2) {
          var attribName = attribs[i];
          var value = attribs[i + 1];
          var atype = null, attribKey;
          if ((attribKey = tagName + '::' + attribName,
               html4.ATTRIBS.hasOwnProperty(attribKey))
              || (attribKey = '*::' + attribName,
                  html4.ATTRIBS.hasOwnProperty(attribKey))) {
            atype = html4.ATTRIBS[attribKey];
          }
          if (atype !== null) {
            switch (atype) {
              case html4.atype.NONE: break;
              case html4.atype.SCRIPT:
              case html4.atype.STYLE:
                value = null;
                break;
              case html4.atype.ID:
              case html4.atype.IDREF:
              case html4.atype.IDREFS:
              case html4.atype.GLOBAL_NAME:
              case html4.atype.LOCAL_NAME:
              case html4.atype.CLASSES:
                value = opt_nmTokenPolicy ? opt_nmTokenPolicy(value) : value;
                break;
              case html4.atype.URI:
                var parsedUri = ('' + value).match(URI_SCHEME_RE);
                if (!parsedUri) {
                  value = null;
                } else if (!parsedUri[1] ||
                    WHITELISTED_SCHEMES.test(parsedUri[1])) {
                  value = opt_uriPolicy && opt_uriPolicy(value);
                } else {
                  value = null;
                }
                break;
              case html4.atype.URI_FRAGMENT:
                if (value && '#' === value.charAt(0)) {
                  value = opt_nmTokenPolicy ? opt_nmTokenPolicy(value) : value;
                  if (value) { value = '#' + value; }
                } else {
                  value = null;
                }
                break;
              default:
                value = null;
                break;
            }
          } else {
            value = null;
          }
          attribs[i + 1] = value;
        }
        return attribs;
      })(htmlText, out);
    return out.join('');
  }

  return {
    escapeAttrib: escapeAttrib,
    makeHtmlSanitizer: makeHtmlSanitizer,
    makeSaxParser: makeSaxParser,
    normalizeRCData: normalizeRCData,
    sanitize: sanitize,
    unescapeEntities: unescapeEntities
  };
})(html4);

var html_sanitize = html.sanitize;

// Exports for closure compiler.  Note this file is also cajoled
// for domado and run in an environment without 'window'
if (typeof window !== 'undefined') {
  window['html'] = html;
  window['html_sanitize'] = html_sanitize;
}
// Loosen restrictions of Caja's
// html-sanitizer to allow for styling
html4.ATTRIBS['*::style'] = 0;
html4.ELEMENTS['style'] = 0;

html4.ATTRIBS['a::target'] = 0;

html4.ELEMENTS['video'] = 0;
html4.ATTRIBS['video::src'] = 0;
html4.ATTRIBS['video::poster'] = 0;
html4.ATTRIBS['video::controls'] = 0;

html4.ELEMENTS['audio'] = 0;
html4.ATTRIBS['audio::src'] = 0;
html4.ATTRIBS['video::autoplay'] = 0;
html4.ATTRIBS['video::controls'] = 0;
/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */
var Mustache = (typeof module !== "undefined" && module.exports) || {};

(function (exports) {

  exports.name = "mustache.js";
  exports.version = "0.5.0-dev";
  exports.tags = ["{{", "}}"];
  exports.parse = parse;
  exports.compile = compile;
  exports.render = render;
  exports.clearCache = clearCache;

  // This is here for backwards compatibility with 0.4.x.
  exports.to_html = function (template, view, partials, send) {
    var result = render(template, view, partials);

    if (typeof send === "function") {
      send(result);
    } else {
      return result;
    }
  };

  var _toString = Object.prototype.toString;
  var _isArray = Array.isArray;
  var _forEach = Array.prototype.forEach;
  var _trim = String.prototype.trim;

  var isArray;
  if (_isArray) {
    isArray = _isArray;
  } else {
    isArray = function (obj) {
      return _toString.call(obj) === "[object Array]";
    };
  }

  var forEach;
  if (_forEach) {
    forEach = function (obj, callback, scope) {
      return _forEach.call(obj, callback, scope);
    };
  } else {
    forEach = function (obj, callback, scope) {
      for (var i = 0, len = obj.length; i < len; ++i) {
        callback.call(scope, obj[i], i, obj);
      }
    };
  }

  var spaceRe = /^\s*$/;

  function isWhitespace(string) {
    return spaceRe.test(string);
  }

  var trim;
  if (_trim) {
    trim = function (string) {
      return string == null ? "" : _trim.call(string);
    };
  } else {
    var trimLeft, trimRight;

    if (isWhitespace("\xA0")) {
      trimLeft = /^\s+/;
      trimRight = /\s+$/;
    } else {
      // IE doesn't match non-breaking spaces with \s, thanks jQuery.
      trimLeft = /^[\s\xA0]+/;
      trimRight = /[\s\xA0]+$/;
    }

    trim = function (string) {
      return string == null ? "" :
        String(string).replace(trimLeft, "").replace(trimRight, "");
    };
  }

  var escapeMap = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': '&quot;',
    "'": '&#39;',
    "/": '&#x2F;'
  };

  function escapeHTML(string) {
    return String(string).replace(/[&<>"'\/]/g, function (s) {
      return escapeMap[s] || s;
    });
  }

  /**
   * Adds the `template`, `line`, and `file` properties to the given error
   * object and alters the message to provide more useful debugging information.
   */
  function debug(e, template, line, file) {
    file = file || "<template>";

    var lines = template.split("\n"),
        start = Math.max(line - 3, 0),
        end = Math.min(lines.length, line + 3),
        context = lines.slice(start, end);

    var c;
    for (var i = 0, len = context.length; i < len; ++i) {
      c = i + start + 1;
      context[i] = (c === line ? " >> " : "    ") + context[i];
    }

    e.template = template;
    e.line = line;
    e.file = file;
    e.message = [file + ":" + line, context.join("\n"), "", e.message].join("\n");

    return e;
  }

  /**
   * Looks up the value of the given `name` in the given context `stack`.
   */
  function lookup(name, stack, defaultValue) {
    if (name === ".") {
      return stack[stack.length - 1];
    }

    var names = name.split(".");
    var lastIndex = names.length - 1;
    var target = names[lastIndex];

    var value, context, i = stack.length, j, localStack;
    while (i) {
      localStack = stack.slice(0);
      context = stack[--i];

      j = 0;
      while (j < lastIndex) {
        context = context[names[j++]];

        if (context == null) {
          break;
        }

        localStack.push(context);
      }

      if (context && typeof context === "object" && target in context) {
        value = context[target];
        break;
      }
    }

    // If the value is a function, call it in the current context.
    if (typeof value === "function") {
      value = value.call(localStack[localStack.length - 1]);
    }

    if (value == null)  {
      return defaultValue;
    }

    return value;
  }

  function renderSection(name, stack, callback, inverted) {
    var buffer = "";
    var value =  lookup(name, stack);

    if (inverted) {
      // From the spec: inverted sections may render text once based on the
      // inverse value of the key. That is, they will be rendered if the key
      // doesn't exist, is false, or is an empty list.
      if (value == null || value === false || (isArray(value) && value.length === 0)) {
        buffer += callback();
      }
    } else if (isArray(value)) {
      forEach(value, function (value) {
        stack.push(value);
        buffer += callback();
        stack.pop();
      });
    } else if (typeof value === "object") {
      stack.push(value);
      buffer += callback();
      stack.pop();
    } else if (typeof value === "function") {
      var scope = stack[stack.length - 1];
      var scopedRender = function (template) {
        return render(template, scope);
      };
      buffer += value.call(scope, callback(), scopedRender) || "";
    } else if (value) {
      buffer += callback();
    }

    return buffer;
  }

  /**
   * Parses the given `template` and returns the source of a function that,
   * with the proper arguments, will render the template. Recognized options
   * include the following:
   *
   *   - file     The name of the file the template comes from (displayed in
   *              error messages)
   *   - tags     An array of open and close tags the `template` uses. Defaults
   *              to the value of Mustache.tags
   *   - debug    Set `true` to log the body of the generated function to the
   *              console
   *   - space    Set `true` to preserve whitespace from lines that otherwise
   *              contain only a {{tag}}. Defaults to `false`
   */
  function parse(template, options) {
    options = options || {};

    var tags = options.tags || exports.tags,
        openTag = tags[0],
        closeTag = tags[tags.length - 1];

    var code = [
      'var buffer = "";', // output buffer
      "\nvar line = 1;", // keep track of source line number
      "\ntry {",
      '\nbuffer += "'
    ];

    var spaces = [],      // indices of whitespace in code on the current line
        hasTag = false,   // is there a {{tag}} on the current line?
        nonSpace = false; // is there a non-space char on the current line?

    // Strips all space characters from the code array for the current line
    // if there was a {{tag}} on it and otherwise only spaces.
    var stripSpace = function () {
      if (hasTag && !nonSpace && !options.space) {
        while (spaces.length) {
          code.splice(spaces.pop(), 1);
        }
      } else {
        spaces = [];
      }

      hasTag = false;
      nonSpace = false;
    };

    var sectionStack = [], updateLine, nextOpenTag, nextCloseTag;

    var setTags = function (source) {
      tags = trim(source).split(/\s+/);
      nextOpenTag = tags[0];
      nextCloseTag = tags[tags.length - 1];
    };

    var includePartial = function (source) {
      code.push(
        '";',
        updateLine,
        '\nvar partial = partials["' + trim(source) + '"];',
        '\nif (partial) {',
        '\n  buffer += render(partial,stack[stack.length - 1],partials);',
        '\n}',
        '\nbuffer += "'
      );
    };

    var openSection = function (source, inverted) {
      var name = trim(source);

      if (name === "") {
        throw debug(new Error("Section name may not be empty"), template, line, options.file);
      }

      sectionStack.push({name: name, inverted: inverted});

      code.push(
        '";',
        updateLine,
        '\nvar name = "' + name + '";',
        '\nvar callback = (function () {',
        '\n  return function () {',
        '\n    var buffer = "";',
        '\nbuffer += "'
      );
    };

    var openInvertedSection = function (source) {
      openSection(source, true);
    };

    var closeSection = function (source) {
      var name = trim(source);
      var openName = sectionStack.length != 0 && sectionStack[sectionStack.length - 1].name;

      if (!openName || name != openName) {
        throw debug(new Error('Section named "' + name + '" was never opened'), template, line, options.file);
      }

      var section = sectionStack.pop();

      code.push(
        '";',
        '\n    return buffer;',
        '\n  };',
        '\n})();'
      );

      if (section.inverted) {
        code.push("\nbuffer += renderSection(name,stack,callback,true);");
      } else {
        code.push("\nbuffer += renderSection(name,stack,callback);");
      }

      code.push('\nbuffer += "');
    };

    var sendPlain = function (source) {
      code.push(
        '";',
        updateLine,
        '\nbuffer += lookup("' + trim(source) + '",stack,"");',
        '\nbuffer += "'
      );
    };

    var sendEscaped = function (source) {
      code.push(
        '";',
        updateLine,
        '\nbuffer += escapeHTML(lookup("' + trim(source) + '",stack,""));',
        '\nbuffer += "'
      );
    };

    var line = 1, c, callback;
    for (var i = 0, len = template.length; i < len; ++i) {
      if (template.slice(i, i + openTag.length) === openTag) {
        i += openTag.length;
        c = template.substr(i, 1);
        updateLine = '\nline = ' + line + ';';
        nextOpenTag = openTag;
        nextCloseTag = closeTag;
        hasTag = true;

        switch (c) {
        case "!": // comment
          i++;
          callback = null;
          break;
        case "=": // change open/close tags, e.g. {{=<% %>=}}
          i++;
          closeTag = "=" + closeTag;
          callback = setTags;
          break;
        case ">": // include partial
          i++;
          callback = includePartial;
          break;
        case "#": // start section
          i++;
          callback = openSection;
          break;
        case "^": // start inverted section
          i++;
          callback = openInvertedSection;
          break;
        case "/": // end section
          i++;
          callback = closeSection;
          break;
        case "{": // plain variable
          closeTag = "}" + closeTag;
          // fall through
        case "&": // plain variable
          i++;
          nonSpace = true;
          callback = sendPlain;
          break;
        default: // escaped variable
          nonSpace = true;
          callback = sendEscaped;
        }

        var end = template.indexOf(closeTag, i);

        if (end === -1) {
          throw debug(new Error('Tag "' + openTag + '" was not closed properly'), template, line, options.file);
        }

        var source = template.substring(i, end);

        if (callback) {
          callback(source);
        }

        // Maintain line count for \n in source.
        var n = 0;
        while (~(n = source.indexOf("\n", n))) {
          line++;
          n++;
        }

        i = end + closeTag.length - 1;
        openTag = nextOpenTag;
        closeTag = nextCloseTag;
      } else {
        c = template.substr(i, 1);

        switch (c) {
        case '"':
        case "\\":
          nonSpace = true;
          code.push("\\" + c);
          break;
        case "\r":
          // Ignore carriage returns.
          break;
        case "\n":
          spaces.push(code.length);
          code.push("\\n");
          stripSpace(); // Check for whitespace on the current line.
          line++;
          break;
        default:
          if (isWhitespace(c)) {
            spaces.push(code.length);
          } else {
            nonSpace = true;
          }

          code.push(c);
        }
      }
    }

    if (sectionStack.length != 0) {
      throw debug(new Error('Section "' + sectionStack[sectionStack.length - 1].name + '" was not closed properly'), template, line, options.file);
    }

    // Clean up any whitespace from a closing {{tag}} that was at the end
    // of the template without a trailing \n.
    stripSpace();

    code.push(
      '";',
      "\nreturn buffer;",
      "\n} catch (e) { throw {error: e, line: line}; }"
    );

    // Ignore `buffer += "";` statements.
    var body = code.join("").replace(/buffer \+= "";\n/g, "");

    if (options.debug) {
      if (typeof console != "undefined" && console.log) {
        console.log(body);
      } else if (typeof print === "function") {
        print(body);
      }
    }

    return body;
  }

  /**
   * Used by `compile` to generate a reusable function for the given `template`.
   */
  function _compile(template, options) {
    var args = "view,partials,stack,lookup,escapeHTML,renderSection,render";
    var body = parse(template, options);
    var fn = new Function(args, body);

    // This anonymous function wraps the generated function so we can do
    // argument coercion, setup some variables, and handle any errors
    // encountered while executing it.
    return function (view, partials) {
      partials = partials || {};

      var stack = [view]; // context stack

      try {
        return fn(view, partials, stack, lookup, escapeHTML, renderSection, render);
      } catch (e) {
        throw debug(e.error, template, e.line, options.file);
      }
    };
  }

  // Cache of pre-compiled templates.
  var _cache = {};

  /**
   * Clear the cache of compiled templates.
   */
  function clearCache() {
    _cache = {};
  }

  /**
   * Compiles the given `template` into a reusable function using the given
   * `options`. In addition to the options accepted by Mustache.parse,
   * recognized options include the following:
   *
   *   - cache    Set `false` to bypass any pre-compiled version of the given
   *              template. Otherwise, a given `template` string will be cached
   *              the first time it is parsed
   */
  function compile(template, options) {
    options = options || {};

    // Use a pre-compiled version from the cache if we have one.
    if (options.cache !== false) {
      if (!_cache[template]) {
        _cache[template] = _compile(template, options);
      }

      return _cache[template];
    }

    return _compile(template, options);
  }

  /**
   * High-level function that renders the given `template` using the given
   * `view` and `partials`. If you need to use any of the template options (see
   * `compile` above), you must compile in a separate step, and then call that
   * compiled function.
   */
  function render(template, view, partials) {
    return compile(template)(view, partials);
  }

})(Mustache);
/*!
  * Reqwest! A general purpose XHR connection manager
  * (c) Dustin Diaz 2011
  * https://github.com/ded/reqwest
  * license MIT
  */
!function(a,b){typeof module!="undefined"?module.exports=b():typeof define=="function"&&define.amd?define(a,b):this[a]=b()}("reqwest",function(){function handleReadyState(a,b,c){return function(){a&&a[readyState]==4&&(twoHundo.test(a.status)?b(a):c(a))}}function setHeaders(a,b){var c=b.headers||{},d;c.Accept=c.Accept||defaultHeaders.accept[b.type]||defaultHeaders.accept["*"],!b.crossOrigin&&!c[requestedWith]&&(c[requestedWith]=defaultHeaders.requestedWith),c[contentType]||(c[contentType]=b.contentType||defaultHeaders.contentType);for(d in c)c.hasOwnProperty(d)&&a.setRequestHeader(d,c[d])}function generalCallback(a){lastValue=a}function urlappend(a,b){return a+(/\?/.test(a)?"&":"?")+b}function handleJsonp(a,b,c,d){var e=uniqid++,f=a.jsonpCallback||"callback",g=a.jsonpCallbackName||"reqwest_"+e,h=new RegExp("((^|\\?|&)"+f+")=([^&]+)"),i=d.match(h),j=doc.createElement("script"),k=0;i?i[3]==="?"?d=d.replace(h,"$1="+g):g=i[3]:d=urlappend(d,f+"="+g),win[g]=generalCallback,j.type="text/javascript",j.src=d,j.async=!0,typeof j.onreadystatechange!="undefined"&&(j.event="onclick",j.htmlFor=j.id="_reqwest_"+e),j.onload=j.onreadystatechange=function(){if(j[readyState]&&j[readyState]!=="complete"&&j[readyState]!=="loaded"||k)return!1;j.onload=j.onreadystatechange=null,j.onclick&&j.onclick(),a.success&&a.success(lastValue),lastValue=undefined,head.removeChild(j),k=1},head.appendChild(j)}function getRequest(a,b,c){var d=(a.method||"GET").toUpperCase(),e=typeof a=="string"?a:a.url,f=a.processData!==!1&&a.data&&typeof a.data!="string"?reqwest.toQueryString(a.data):a.data||null,g;return(a.type=="jsonp"||d=="GET")&&f&&(e=urlappend(e,f),f=null),a.type=="jsonp"?handleJsonp(a,b,c,e):(g=xhr(),g.open(d,e,!0),setHeaders(g,a),g.onreadystatechange=handleReadyState(g,b,c),a.before&&a.before(g),g.send(f),g)}function Reqwest(a,b){this.o=a,this.fn=b,init.apply(this,arguments)}function setType(a){var b=a.match(/\.(json|jsonp|html|xml)(\?|$)/);return b?b[1]:"js"}function init(o,fn){function complete(a){o.timeout&&clearTimeout(self.timeout),self.timeout=null,o.complete&&o.complete(a)}function success(resp){var r=resp.responseText;if(r)switch(type){case"json":try{resp=win.JSON?win.JSON.parse(r):eval("("+r+")")}catch(err){return error(resp,"Could not parse JSON in response",err)}break;case"js":resp=eval(r);break;case"html":resp=r}fn(resp),o.success&&o.success(resp),complete(resp)}function error(a,b,c){o.error&&o.error(a,b,c),complete(a)}this.url=typeof o=="string"?o:o.url,this.timeout=null;var type=o.type||setType(this.url),self=this;fn=fn||function(){},o.timeout&&(this.timeout=setTimeout(function(){self.abort()},o.timeout)),this.request=getRequest(o,success,error)}function reqwest(a,b){return new Reqwest(a,b)}function normalize(a){return a?a.replace(/\r?\n/g,"\r\n"):""}function serial(a,b){var c=a.name,d=a.tagName.toLowerCase(),e=function(a){a&&!a.disabled&&b(c,normalize(a.attributes.value&&a.attributes.value.specified?a.value:a.text))};if(a.disabled||!c)return;switch(d){case"input":if(!/reset|button|image|file/i.test(a.type)){var f=/checkbox/i.test(a.type),g=/radio/i.test(a.type),h=a.value;(!f&&!g||a.checked)&&b(c,normalize(f&&h===""?"on":h))}break;case"textarea":b(c,normalize(a.value));break;case"select":if(a.type.toLowerCase()==="select-one")e(a.selectedIndex>=0?a.options[a.selectedIndex]:null);else for(var i=0;a.length&&i<a.length;i++)a.options[i].selected&&e(a.options[i])}}function eachFormElement(){var a=this,b,c,d,e=function(b,c){for(var e=0;e<c.length;e++){var f=b[byTag](c[e]);for(d=0;d<f.length;d++)serial(f[d],a)}};for(c=0;c<arguments.length;c++)b=arguments[c],/input|select|textarea/i.test(b.tagName)&&serial(b,a),e(b,["input","select","textarea"])}function serializeQueryString(){return reqwest.toQueryString(reqwest.serializeArray.apply(null,arguments))}function serializeHash(){var a={};return eachFormElement.apply(function(b,c){b in a?(a[b]&&!isArray(a[b])&&(a[b]=[a[b]]),a[b].push(c)):a[b]=c},arguments),a}var win=window,doc=document,twoHundo=/^20\d$/,byTag="getElementsByTagName",readyState="readyState",contentType="Content-Type",requestedWith="X-Requested-With",head=doc[byTag]("head")[0],uniqid=0,lastValue,xmlHttpRequest="XMLHttpRequest",isArray=typeof Array.isArray=="function"?Array.isArray:function(a){return a instanceof Array},defaultHeaders={contentType:"application/x-www-form-urlencoded",accept:{"*":"text/javascript, text/html, application/xml, text/xml, */*",xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript",js:"application/javascript, text/javascript"},requestedWith:xmlHttpRequest},xhr=win[xmlHttpRequest]?function(){return new XMLHttpRequest}:function(){return new ActiveXObject("Microsoft.XMLHTTP")};return Reqwest.prototype={abort:function(){this.request.abort()},retry:function(){init.call(this,this.o,this.fn)}},reqwest.serializeArray=function(){var a=[];return eachFormElement.apply(function(b,c){a.push({name:b,value:c})},arguments),a},reqwest.serialize=function(){if(arguments.length===0)return"";var a,b,c=Array.prototype.slice.call(arguments,0);return a=c.pop(),a&&a.nodeType&&c.push(a)&&(a=null),a&&(a=a.type),a=="map"?b=serializeHash:a=="array"?b=reqwest.serializeArray:b=serializeQueryString,b.apply(null,c)},reqwest.toQueryString=function(a){var b="",c,d=encodeURIComponent,e=function(a,c){b+=d(a)+"="+d(c)+"&"};if(isArray(a))for(c=0;a&&c<a.length;c++)e(a[c].name,a[c].value);else for(var f in a){if(!Object.hasOwnProperty.call(a,f))continue;var g=a[f];if(isArray(g))for(c=0;c<g.length;c++)e(f,g[c]);else e(f,a[f])}return b.replace(/&$/,"").replace(/%20/g,"+")},reqwest.compat=function(a,b){return a&&(a.type&&(a.method=a.type)&&delete a.type,a.dataType&&(a.type=a.dataType),a.jsonpCallback&&(a.jsonpCallbackName=a.jsonpCallback)&&delete a.jsonpCallback,a.jsonp&&(a.jsonpCallback=a.jsonp)),new Reqwest(a,b)},reqwest});wax = wax || {};

// Attribution
// -----------
wax.attribution = function() {
    var a = {};

    var container = document.createElement('div');
    container.className = 'map-attribution';

    a.content = function(x) {
        if (typeof x === 'undefined') return container.innerHTML;
        container.innerHTML = wax.u.sanitize(x);
        return this;
    };

    a.element = function() {
        return container;
    };

    a.init = function() {
        return this;
    };

    return a;
};
wax = wax || {};

// Attribution
// -----------
wax.bwdetect = function(options, callback) {
    var detector = {},
        threshold = options.threshold || 400,
        // test image: 30.29KB
        testImage = 'http://a.tiles.mapbox.com/mapbox/1.0.0/blue-marble-topo-bathy-jul/0/0/0.png?preventcache=' + (+new Date()),
        // High-bandwidth assumed
        // 1: high bandwidth (.png, .jpg)
        // 0: low bandwidth (.png128, .jpg70)
        bw = 1,
        // Alternative versions
        auto = options.auto === undefined ? true : options.auto;

    function bwTest() {
        wax.bw = -1;
        var im = new Image();
        im.src = testImage;
        var first = true;
        var timeout = setTimeout(function() {
            if (first && wax.bw == -1) {
                detector.bw(0);
                first = false;
            }
        }, threshold);
        im.onload = function() {
            if (first && wax.bw == -1) {
                clearTimeout(timeout);
                detector.bw(1);
                first = false;
            }
        };
    }

    detector.bw = function(x) {
        if (!arguments.length) return bw;
        var oldBw = bw;
        if (wax.bwlisteners && wax.bwlisteners.length) (function () {
            listeners = wax.bwlisteners;
            wax.bwlisteners = [];
            for (i = 0; i < listeners; i++) {
                listeners[i](x);
            }
        })();
        wax.bw = x;

        if (bw != (bw = x)) callback(x);
    };

    detector.add = function() {
        if (auto) bwTest();
        return this;
    };

    if (wax.bw == -1) {
      wax.bwlisteners = wax.bwlisteners || [];
      wax.bwlisteners.push(detector.bw);
    } else if (wax.bw !== undefined) {
        detector.bw(wax.bw);
    } else {
        detector.add();
    }
    return detector;
};
// Formatter
// ---------
//
// This code is no longer the recommended code path for Wax -
// see `template.js`, a safe implementation of Mustache templates.
wax.formatter = function(x) {
    var formatter = {},
        f;

    // Prevent against just any input being used.
    if (x && typeof x === 'string') {
        try {
            // Ugly, dangerous use of eval.
            eval('f = ' + x);
        } catch (e) {
            if (console) console.log(e);
        }
    } else if (x && typeof x === 'function') {
        f = x;
    } else {
        f = function() {};
    }

    // Wrap the given formatter function in order to
    // catch exceptions that it may throw.
    formatter.format = function(options, data) {
        try {
            return wax.u.sanitize(f(options, data));
        } catch (e) {
            if (console) console.log(e);
        }
    };

    return formatter;
};
// GridInstance
// ------------
// GridInstances are queryable, fully-formed
// objects for acquiring features from events.
//
// This code ignores format of 1.1-1.2
wax.gi = function(grid_tile, options) {
    options = options || {};
    // resolution is the grid-elements-per-pixel ratio of gridded data.
    // The size of a tile element. For now we expect tiles to be squares.
    var instance = {},
        resolution = options.resolution || 4,
        tileSize = options.tileSize || 256;

    // Resolve the UTF-8 encoding stored in grids to simple
    // number values.
    // See the [utfgrid spec](https://github.com/mapbox/utfgrid-spec)
    // for details.
    function resolveCode(key) {
        if (key >= 93) key--;
        if (key >= 35) key--;
        key -= 32;
        return key;
    }

    instance.grid_tile = function() {
        return grid_tile;
    };

    instance.getKey = function(x, y) {
        if (!(grid_tile && grid_tile.grid)) return;
        if ((y < 0) || (x < 0)) return;
        if ((Math.floor(y) >= tileSize) ||
            (Math.floor(x) >= tileSize)) return;
        // Find the key in the grid. The above calls should ensure that
        // the grid's array is large enough to make this work.
        return resolveCode(grid_tile.grid[
           Math.floor((y) / resolution)
        ].charCodeAt(
           Math.floor((x) / resolution)
        ));
    };

    // Lower-level than tileFeature - has nothing to do
    // with the DOM. Takes a px offset from 0, 0 of a grid.
    instance.gridFeature = function(x, y) {
        // Find the key in the grid. The above calls should ensure that
        // the grid's array is large enough to make this work.
        var key = this.getKey(x, y),
            keys = grid_tile.keys;

        if (keys &&
            keys[key] &&
            grid_tile.data[keys[key]]) {
            return grid_tile.data[keys[key]];
        }
    };

    // Get a feature:
    // * `x` and `y`: the screen coordinates of an event
    // * `tile_element`: a DOM element of a tile, from which we can get an offset.
    instance.tileFeature = function(x, y, tile_element) {
        if (!grid_tile) return;
        // IE problem here - though recoverable, for whatever reason
        var offset = wax.u.offset(tile_element);
            feature = this.gridFeature(x - offset.left, y - offset.top);
        return feature;
    };

    return instance;
};
// GridManager
// -----------
// Generally one GridManager will be used per map.
//
// It takes one options object, which current accepts a single option:
// `resolution` determines the number of pixels per grid element in the grid.
// The default is 4.
wax.gm = function() {

    var resolution = 4,
        grid_tiles = {},
        manager = {},
        tilejson,
        formatter;

    var gridUrl = function(url) {
        if (url) {
            return url.replace(/(\.png|\.jpg|\.jpeg)(\d*)/, '.grid.json');
        }
    };

    function templatedGridUrl(template) {
        if (typeof template === 'string') template = [template];
        return function templatedGridFinder(url) {
            if (!url) return;
            var rx = new RegExp('/(\\d+)\\/(\\d+)\\/(\\d+)\\.[\\w\\._]+');
            var xyz = rx.exec(url);
            if (!xyz) return;
            return template[parseInt(xyz[2], 10) % template.length]
                .replace(/\{z\}/g, xyz[1])
                .replace(/\{x\}/g, xyz[2])
                .replace(/\{y\}/g, xyz[3]);
        };
    }

    manager.formatter = function(x) {
        if (!arguments.length) return formatter;
        formatter =  wax.formatter(x);
        return manager;
    };

    manager.template = function(x) {
        if (!arguments.length) return formatter;
        formatter = wax.template(x);
        return manager;
    };

    manager.gridUrl = function(x) {
        // Getter-setter
        if (!arguments.length) return gridUrl;

        // Handle tilesets that don't support grids
        if (!x) {
            gridUrl = function() { return null; };
        } else {
            gridUrl = typeof x === 'function' ?
                x : templatedGridUrl(x);
        }
        return manager;
    };

    manager.getGrid = function(url, callback) {
        var gurl = gridUrl(url);
        if (!formatter || !gurl) return callback(null, null);

        wax.request.get(gurl, function(err, t) {
            if (err) return callback(err, null);
            callback(null, wax.gi(t, {
                formatter: formatter,
                resolution: resolution
            }));
        });
        return manager;
    };

    manager.tilejson = function(x) {
        if (!arguments.length) return tilejson;
        // prefer templates over formatters
        if (x.template) {
            manager.template(x.template);
        } else if (x.formatter) {
            manager.formatter(x.formatter);
        } else {
            // In this case, we cannot support grids
            formatter = undefined;
        }
        manager.gridUrl(x.grids);
        if (x.resolution) resolution = x.resolution;
        tilejson = x;
        return manager;
    };

    return manager;
};
wax = wax || {};

// Hash
// ----
wax.hash = function(options) {
    options = options || {};

    var s0, // old hash
        hash = {},
        lat = 90 - 1e-8;  // allowable latitude range

    function getState() {
        return location.hash.substring(1);
    }

    function pushState(state) {
        var l = window.location;
        l.replace(l.toString().replace((l.hash || /$/), '#' + state));
    }

    function parseHash(s) {
        var args = s.split('/');
        for (var i = 0; i < args.length; i++) {
            args[i] = Number(args[i]);
            if (isNaN(args[i])) return true;
        }
        if (args.length < 3) {
            // replace bogus hash
            return true;
        } else if (args.length == 3) {
            options.setCenterZoom(args);
        }
    }

    function move() {
        var s1 = options.getCenterZoom();
        if (s0 !== s1) {
            s0 = s1;
            // don't recenter the map!
            pushState(s0);
        }
    }

    function stateChange(state) {
        // ignore spurious hashchange events
        if (state === s0) return;
        if (parseHash(s0 = state)) {
            // replace bogus hash
            move();
        }
    }

    var _move = wax.u.throttle(move, 500);

    hash.add = function() {
        stateChange(getState());
        options.bindChange(_move);
        return hash;
    };

    hash.remove = function() {
        options.unbindChange(_move);
        return hash;
    };

    return hash;
};
wax = wax || {};

wax.interaction = function() {
    var gm = wax.gm(),
        interaction = {},
        _downLock = false,
        _clickTimeout = null,
        // Active feature
        // Down event
        _d,
        // Touch tolerance
        tol = 4,
        grid,
        attach,
        detach,
        parent,
        map,
        tileGrid;

    var defaultEvents = {
        mousemove: onMove,
        touchstart: onDown,
        mousedown: onDown
    };

    var touchEnds = {
        touchend: onUp,
        touchmove: onUp,
        touchcancel: touchCancel
    };

    // Abstract getTile method. Depends on a tilegrid with
    // grid[ [x, y, tile] ] structure.
    function getTile(e) {
        var g = grid();
        for (var i = 0; i < g.length; i++) {
            if (e)
                if ((g[i][0] < e.y) &&
                   ((g[i][0] + 256) > e.y) &&
                    (g[i][1] < e.x) &&
                   ((g[i][1] + 256) > e.x)) return g[i][2];
        }
        return false;
    }

    // Clear the double-click timeout to prevent double-clicks from
    // triggering popups.
    function killTimeout() {
        if (_clickTimeout) {
            window.clearTimeout(_clickTimeout);
            _clickTimeout = null;
            return true;
        } else {
            return false;
        }
    }

    function onMove(e) {
        // If the user is actually dragging the map, exit early
        // to avoid performance hits.
        if (_downLock) return;

        var pos = wax.u.eventoffset(e);

        interaction.screen_feature(pos, function(feature) {
            if (feature) {
                bean.fire(interaction, 'on', {
                    parent: parent(),
                    data: feature,
                    formatter: gm.formatter().format,
                    e: e
                });
            } else {
                bean.fire(interaction, 'off');
            }
        });
    }

    // A handler for 'down' events - which means `mousedown` and `touchstart`
    function onDown(e) {

        // Prevent interaction offset calculations happening while
        // the user is dragging the map.
        //
        // Store this event so that we can compare it to the
        // up event
        _downLock = true;
        _d = wax.u.eventoffset(e);
        if (e.type === 'mousedown') {
            bean.add(document.body, 'click', onUp);
            // track mouse up to remove lockDown when the drags end
            bean.add(document.body, 'mouseup', dragEnd);

        // Only track single-touches. Double-touches will not affect this
        // control
        } else if (e.type === 'touchstart' && e.touches.length === 1) {
            // Don't make the user click close if they hit another tooltip
            bean.fire(interaction, 'off');
            // Touch moves invalidate touches
            bean.add(parent(), touchEnds);
        }
    }

    function dragEnd() {
        _downLock = false;
    }

    function touchCancel() {
        bean.remove(parent(), touchEnds);
        _downLock = false;
    }

    function onUp(e) {
        var evt = {},
            pos = wax.u.eventoffset(e);
        _downLock = false;

        // TODO: refine
        for (var key in e) {
          evt[key] = e[key];
        }

        bean.remove(document.body, 'mouseup', onUp);
        bean.remove(parent(), touchEnds);

        if (e.type === 'touchend') {
            // If this was a touch and it survived, there's no need to avoid a double-tap
            // but also wax.u.eventoffset will have failed, since this touch
            // event doesn't have coordinates
            interaction.click(e, _d);
        } else if (Math.round(pos.y / tol) === Math.round(_d.y / tol) &&
            Math.round(pos.x / tol) === Math.round(_d.x / tol)) {
            // Contain the event data in a closure.
            // Ignore double-clicks by ignoring clicks within 300ms of
            // each other.
            if(!_clickTimeout) {
              _clickTimeout = window.setTimeout(function() {
                  _clickTimeout = null;
                  interaction.click(evt, pos);
              }, 300);
            } else {
              killTimeout();
            }
        }
        return onUp;
    }

    // Handle a click event. Takes a second
    interaction.click = function(e, pos) {
        interaction.screen_feature(pos, function(feature) {
            if (feature) bean.fire(interaction, 'on', {
                parent: parent(),
                data: feature,
                formatter: gm.formatter().format,
                e: e
            });
        });
    };

    interaction.screen_feature = function(pos, callback) {
        var tile = getTile(pos);
        if (!tile) callback(null);
        gm.getGrid(tile.src, function(err, g) {
            if (err || !g) return callback(null);
            var feature = g.tileFeature(pos.x, pos.y, tile);
            callback(feature);
        });
    };

    // set an attach function that should be
    // called when maps are set
    interaction.attach = function(x) {
        if (!arguments.length) return attach;
        attach = x;
        return interaction;
    };

    interaction.detach = function(x) {
        if (!arguments.length) return detach;
        detach = x;
        return interaction;
    };

    // Attach listeners to the map
    interaction.map = function(x) {
        if (!arguments.length) return map;
        map = x;
        if (attach) attach(map);
        bean.add(parent(), defaultEvents);
        bean.add(parent(), 'touchstart', onDown);
        return interaction;
    };

    // set a grid getter for this control
    interaction.grid = function(x) {
        if (!arguments.length) return grid;
        grid = x;
        return interaction;
    };

    // detach this and its events from the map cleanly
    interaction.remove = function(x) {
        if (detach) detach(map);
        bean.remove(parent(), defaultEvents);
        bean.fire(interaction, 'remove');
        return interaction;
    };

    // get or set a tilejson chunk of json
    interaction.tilejson = function(x) {
        if (!arguments.length) return gm.tilejson();
        gm.tilejson(x);
        return interaction;
    };

    // return the formatter, which has an exposed .format
    // function
    interaction.formatter = function() {
        return gm.formatter();
    };

    // ev can be 'on', 'off', fn is the handler
    interaction.on = function(ev, fn) {
        bean.add(interaction, ev, fn);
        return interaction;
    };

    // ev can be 'on', 'off', fn is the handler
    interaction.off = function(ev, fn) {
        bean.remove(interaction, ev, fn);
        return interaction;
    };

    // Return or set the gridmanager implementation
    interaction.gridmanager = function(x) {
        if (!arguments.length) return gm;
        gm = x;
        return interaction;
    };

    // parent should be a function that returns
    // the parent element of the map
    interaction.parent  = function(x) {
        parent = x;
        return interaction;
    };

    return interaction;
};
// Wax Legend
// ----------

// Wax header
var wax = wax || {};

wax.legend = function() {
    var element,
        legend = {},
        container;

    legend.element = function() {
        return container;
    };

    legend.content = function(content) {
        if (!arguments.length) return element.innerHTML;

        element.innerHTML = wax.u.sanitize(content);
        element.style.display = 'block';
        if (element.innerHTML === '') {
            element.style.display = 'none';
        }

        return legend;
    };

    legend.add = function() {
        container = document.createElement('div');
        container.className = 'map-legends wax-legends';

        element = container.appendChild(document.createElement('div'));
        element.className = 'map-legend wax-legend';
        element.style.display = 'none';
        return legend;
    };

    return legend.add();
};
var wax = wax || {};

wax.location = function() {

    var t = {};

    function on(o) {
        if ((o.e.type === 'mousemove' || !o.e.type)) {
            return;
        } else {
            var loc = o.formatter({ format: 'location' }, o.data);
            if (loc) {
                window.location.href = loc;
            }
        }
    }

    t.events = function() {
        return {
            on: on
        };
    };

    return t;

};
var wax = wax || {};
wax.movetip = {};

wax.movetip = function() {
    var popped = false,
        t = {},
        _tooltipOffset,
        _contextOffset,
        tooltip,
        parent;

    function moveTooltip(e) {
       var eo = wax.u.eventoffset(e);
       // faux-positioning
       if ((_tooltipOffset.height + eo.y) >
           (_contextOffset.top + _contextOffset.height) &&
           (_contextOffset.height > _tooltipOffset.height)) {
           eo.y -= _tooltipOffset.height;
           tooltip.className += ' flip-y';
       }

       // faux-positioning
       if ((_tooltipOffset.width + eo.x) >
           (_contextOffset.left + _contextOffset.width)) {
           eo.x -= _tooltipOffset.width;
           tooltip.className += ' flip-x';
       }

       tooltip.style.left = eo.x + 'px';
       tooltip.style.top = eo.y + 'px';
    }

    // Get the active tooltip for a layer or create a new one if no tooltip exists.
    // Hide any tooltips on layers underneath this one.
    function getTooltip(feature) {
        var tooltip = document.createElement('div');
        tooltip.className = 'map-tooltip map-tooltip-0';
        tooltip.innerHTML = feature;
        return tooltip;
    }

    // Hide a given tooltip.
    function hide() {
        if (tooltip) {
          tooltip.parentNode.removeChild(tooltip);
          tooltip = null;
        }
    }

    function on(o) {
        var content;
        if (popped) return;
        if ((o.e.type === 'mousemove' || !o.e.type)) {
            content = o.formatter({ format: 'teaser' }, o.data);
            if (!content) return;
            hide();
            parent.style.cursor = 'pointer';
            tooltip = document.body.appendChild(getTooltip(content));
        } else {
            content = o.formatter({ format: 'teaser' }, o.data);
            if (!content) return;
            hide();
            var tt = document.body.appendChild(getTooltip(content));
            tt.className += ' map-popup';

            var close = tt.appendChild(document.createElement('a'));
            close.href = '#close';
            close.className = 'close';
            close.innerHTML = 'Close';

            popped = true;

            tooltip = tt;

            _tooltipOffset = wax.u.offset(tooltip);
            _contextOffset = wax.u.offset(parent);
            moveTooltip(o.e);

            bean.add(close, 'click touchend', function closeClick(e) {
                e.stop();
                hide();
                popped = false;
            });
        }
        if (tooltip) {
          _tooltipOffset = wax.u.offset(tooltip);
          _contextOffset = wax.u.offset(parent);
          moveTooltip(o.e);
        }

    }

    function off() {
        parent.style.cursor = 'default';
        if (!popped) hide();
    }

    t.parent = function(x) {
        if (!arguments.length) return parent;
        parent = x;
        return t;
    };

    t.events = function() {
        return {
            on: on,
            off: off
        };
    };

    return t;
};

// Wax GridUtil
// ------------

// Wax header
var wax = wax || {};

// Request
// -------
// Request data cache. `callback(data)` where `data` is the response data.
wax.request = {
    cache: {},
    locks: {},
    promises: {},
    get: function(url, callback) {
        // Cache hit.
        if (this.cache[url]) {
            return callback(this.cache[url][0], this.cache[url][1]);
        // Cache miss.
        } else {
            this.promises[url] = this.promises[url] || [];
            this.promises[url].push(callback);
            // Lock hit.
            if (this.locks[url]) return;
            // Request.
            var that = this;
            this.locks[url] = true;
            reqwest({
                url: url + (~url.indexOf('?') ? '&' : '?') + 'callback=grid',
                type: 'jsonp',
                jsonpCallback: 'callback',
                success: function(data) {
                    that.locks[url] = false;
                    that.cache[url] = [null, data];
                    for (var i = 0; i < that.promises[url].length; i++) {
                        that.promises[url][i](that.cache[url][0], that.cache[url][1]);
                    }
                },
                error: function(err) {
                    that.locks[url] = false;
                    that.cache[url] = [err, null];
                    for (var i = 0; i < that.promises[url].length; i++) {
                        that.promises[url][i](that.cache[url][0], that.cache[url][1]);
                    }
                }
            });
        }
    }
};
// Templating
// ---------
wax.template = function(x) {
    var template = {};

    // Clone the data object such that the '__[format]__' key is only
    // set for this instance of templating.
    template.format = function(options, data) {
        var clone = {};
        for (var key in data) {
            clone[key] = data[key];
        }
        if (options.format) {
            clone['__' + options.format + '__'] = true;
        }
        return wax.u.sanitize(Mustache.to_html(x, clone));
    };

    return template;
};
if (!wax) var wax = {};

// A wrapper for reqwest jsonp to easily load TileJSON from a URL.
wax.tilejson = function(url, callback) {
    reqwest({
        url: url + (~url.indexOf('?') ? '&' : '?') + 'callback=grid',
        type: 'jsonp',
        jsonpCallback: 'callback',
        success: callback,
        error: callback
    });
};
var wax = wax || {};
wax.tooltip = {};

wax.tooltip = function() {
    var popped = false,
        animate = false,
        t = {},
        tooltips = [],
        _currentContent,
        transitionEvent,
        parent;

    if (document.body.style['-webkit-transition'] !== undefined) {
        transitionEvent = 'webkitTransitionEnd';
    } else if (document.body.style.MozTransition !== undefined) {
        transitionEvent = 'transitionend';
    }

    // Get the active tooltip for a layer or create a new one if no tooltip exists.
    // Hide any tooltips on layers underneath this one.
    function getTooltip(feature) {
        var tooltip = document.createElement('div');
        tooltip.className = 'map-tooltip map-tooltip-0 wax-tooltip';
        tooltip.innerHTML = feature;
        return tooltip;
    }

    function remove() {
        if (this.parentNode) this.parentNode.removeChild(this);
    }

    // Hide a given tooltip.
    function hide() {
        var _ct;
        while (_ct = tooltips.pop()) {
            if (animate && transitionEvent) {
                // This code assumes that transform-supporting browsers
                // also support proper events. IE9 does both.
                  bean.add(_ct, transitionEvent, remove);
                  _ct.className += ' map-fade';
            } else {
                if (_ct.parentNode) _ct.parentNode.removeChild(_ct);
            }
        }
    }

    function on(o) {
        var content;
        if (o.e.type === 'mousemove' || !o.e.type) {
            if (!popped) {
                content = o.content || o.formatter({ format: 'teaser' }, o.data);
                if (!content || content == _currentContent) return;
                hide();
                parent.style.cursor = 'pointer';
                tooltips.push(parent.appendChild(getTooltip(content)));
                _currentContent = content;
            }
        } else {
            content = o.content || o.formatter({ format: 'full' }, o.data);
            if (!content) {
              if (o.e.type && o.e.type.match(/touch/)) {
                // fallback possible
                content = o.content || o.formatter({ format: 'teaser' }, o.data);
              }
              // but if that fails, return just the same.
              if (!content) return;
            }
            hide();
            parent.style.cursor = 'pointer';
            var tt = parent.appendChild(getTooltip(content));
            tt.className += ' map-popup wax-popup';

            var close = tt.appendChild(document.createElement('a'));
            close.href = '#close';
            close.className = 'close';
            close.innerHTML = 'Close';
            popped = true;

            tooltips.push(tt);

            bean.add(close, 'touchstart mousedown', function(e) {
                e.stop();
            });

            bean.add(close, 'click touchend', function closeClick(e) {
                e.stop();
                hide();
                popped = false;
            });
        }
    }

    function off() {
        parent.style.cursor = 'default';
        _currentContent = null;
        if (!popped) hide();
    }

    t.parent = function(x) {
        if (!arguments.length) return parent;
        parent = x;
        return t;
    };

    t.animate = function(x) {
        if (!arguments.length) return animate;
        animate = x;
        return t;
    };

    t.events = function() {
        return {
            on: on,
            off: off
        };
    };

    return t;
};
var wax = wax || {};

// Utils are extracted from other libraries or
// written from scratch to plug holes in browser compatibility.
wax.u = {
    // From Bonzo
    offset: function(el) {
        // TODO: window margins
        //
        // Okay, so fall back to styles if offsetWidth and height are botched
        // by Firefox.
        var width = el.offsetWidth || parseInt(el.style.width, 10),
            height = el.offsetHeight || parseInt(el.style.height, 10),
            doc_body = document.body,
            top = 0,
            left = 0;

        var calculateOffset = function(el) {
            if (el === doc_body || el === document.documentElement) return;
            top += el.offsetTop;
            left += el.offsetLeft;

            var style = el.style.transform ||
                el.style.WebkitTransform ||
                el.style.OTransform ||
                el.style.MozTransform ||
                el.style.msTransform;

            if (style) {
                var match;
                if (match = style.match(/translate\((.+)px, (.+)px\)/)) {
                    top += parseInt(match[2], 10);
                    left += parseInt(match[1], 10);
                } else if (match = style.match(/translate3d\((.+)px, (.+)px, (.+)px\)/)) {
                    top += parseInt(match[2], 10);
                    left += parseInt(match[1], 10);
                } else if (match = style.match(/matrix3d\(([\-\d,\s]+)\)/)) {
                    var pts = match[1].split(',');
                    top += parseInt(pts[13], 10);
                    left += parseInt(pts[12], 10);
                } else if (match = style.match(/matrix\(.+, .+, .+, .+, (.+), (.+)\)/)) {
                    top += parseInt(match[2], 10);
                    left += parseInt(match[1], 10);
                }
            }
        };

        // from jquery, offset.js
        if ( typeof el.getBoundingClientRect !== "undefined" ) {
          var body = document.body;
          var doc = el.ownerDocument.documentElement;
          var clientTop  = document.clientTop  || body.clientTop  || 0;
          var clientLeft = document.clientLeft || body.clientLeft || 0;
          var scrollTop  = window.pageYOffset || doc.scrollTop;
          var scrollLeft = window.pageXOffset || doc.scrollLeft;

          var box = el.getBoundingClientRect();
          top = box.top + scrollTop  - clientTop;
          left = box.left + scrollLeft - clientLeft;

        } else {
          calculateOffset(el);
          try {
              while (el = el.offsetParent) { calculateOffset(el); }
          } catch(e) {
              // Hello, internet explorer.
          }
        }

        // Offsets from the body
        top += doc_body.offsetTop;
        left += doc_body.offsetLeft;
        // Offsets from the HTML element
        top += doc_body.parentNode.offsetTop;
        left += doc_body.parentNode.offsetLeft;

        // Firefox and other weirdos. Similar technique to jQuery's
        // `doesNotIncludeMarginInBodyOffset`.
        var htmlComputed = document.defaultView ?
            window.getComputedStyle(doc_body.parentNode, null) :
            doc_body.parentNode.currentStyle;
        if (doc_body.parentNode.offsetTop !==
            parseInt(htmlComputed.marginTop, 10) &&
            !isNaN(parseInt(htmlComputed.marginTop, 10))) {
            top += parseInt(htmlComputed.marginTop, 10);
            left += parseInt(htmlComputed.marginLeft, 10);
        }

        return {
            top: top,
            left: left,
            height: height,
            width: width
        };
    },

    '$': function(x) {
        return (typeof x === 'string') ?
            document.getElementById(x) :
            x;
    },

    // From quirksmode: normalize the offset of an event from the top-left
    // of the page.
    eventoffset: function(e) {
        var posx = 0;
        var posy = 0;
        if (!e) { e = window.event; }
        if (e.pageX || e.pageY) {
            // Good browsers
            return {
                x: e.pageX,
                y: e.pageY
            };
        } else if (e.clientX || e.clientY) {
            // Internet Explorer
            return {
                x: e.clientX,
                y: e.clientY
            };
        } else if (e.touches && e.touches.length === 1) {
            // Touch browsers
            return {
                x: e.touches[0].pageX,
                y: e.touches[0].pageY
            };
        }
    },

    // Ripped from underscore.js
    // Internal function used to implement `_.throttle` and `_.debounce`.
    limit: function(func, wait, debounce) {
        var timeout;
        return function() {
            var context = this, args = arguments;
            var throttler = function() {
                timeout = null;
                func.apply(context, args);
            };
            if (debounce) clearTimeout(timeout);
            if (debounce || !timeout) timeout = setTimeout(throttler, wait);
        };
    },

    // Returns a function, that, when invoked, will only be triggered at most once
    // during a given window of time.
    throttle: function(func, wait) {
        return this.limit(func, wait, false);
    },

    sanitize: function(content) {
        if (!content) return '';

        function urlX(url) {
            // Data URIs are subject to a bug in Firefox
            // https://bugzilla.mozilla.org/show_bug.cgi?id=255107
            // which let them be a vector. But WebKit does 'the right thing'
            // or at least 'something' about this situation, so we'll tolerate
            // them.
            if (/^(https?:\/\/|data:image)/.test(url)) {
                return url;
            }
        }

        function idX(id) { return id; }

        return html_sanitize(content, urlX, idX);
    }
};
wax = wax || {};
wax.leaf = wax.leaf || {};

wax.leaf.hash = function(map) {
    return wax.hash({
        getCenterZoom: function () {
            var center = map.getCenter(),
                zoom = map.getZoom(),
                precision = Math.max(
                    0,
                    Math.ceil(Math.log(zoom) / Math.LN2));

            return [
                zoom,
                center.lat.toFixed(precision),
                center.lng.toFixed(precision)
            ].join('/');
        },

        setCenterZoom: function (args) {
            map.setView(new L.LatLng(args[1], args[2]), args[0]);
        },

        bindChange: function (fn) {
            map.on('moveend', fn);
        },

        unbindChange: function (fn) {
            map.off('moveend', fn);
        }
    });
};
wax = wax || {};
wax.leaf = wax.leaf || {};

wax.leaf.interaction = function() {
    var dirty = false, _grid, map;

    function setdirty() { dirty = true; }

    function grid() {
        // TODO: don't build for tiles outside of viewport
        // Touch interaction leads to intermediate
        //var zoomLayer = map.createOrGetLayer(Math.round(map.getZoom())); //?what is this doing?
        // Calculate a tile grid and cache it, by using the `.tiles`
        // element on this map.
        if (!dirty && _grid) {
            return _grid;
        } else {
            return (_grid = (function(layers) {
                var o = [];
                for (var layerId in layers) {
                    // This only supports tiled layers
                    if (layers[layerId]._tiles) {
                        for (var tile in layers[layerId]._tiles) {
                            var _tile = layers[layerId]._tiles[tile];
                            // avoid adding tiles without src, grid url can't be found for them
                            if(_tile.src) {
                              var offset = wax.u.offset(_tile);
                              o.push([offset.top, offset.left, _tile]);
                            }
                        }
                    }
                }
                return o;
            })(map._layers));
        }
    }

    function attach(x) {
        if (!arguments.length) return map;
        map = x;
        var l = ['moveend'];
        for (var i = 0; i < l.length; i++) {
            map.on(l[i], setdirty);
        }
    }

    function detach(x) {
        if (!arguments.length) return map;
        map = x;
        var l = ['moveend'];
        for (var i = 0; i < l.length; i++) {
            map.off(l[i], setdirty);
        }
    }

    return wax.interaction()
        .attach(attach)
        .detach(detach)
        .parent(function() {
          return map._container;
        })
        .grid(grid);
};
wax = wax || {};
wax.leaf = wax.leaf || {};

// Legend Control
// --------------
// The Leaflet version of this control is a very, very
// light wrapper around the `/lib` code for legends.
wax.leaf.legend = function(map, tilejson) {
    tilejson = tilejson || {};
    var l, // parent legend
        legend = {};

    legend.add = function() {
        l = wax.legend()
            .content(tilejson.legend || '');
        return this;
    };

    legend.content = function(x) {
        if (x) l.content(x.legend || '');
    };

    legend.element = function() {
        return l.element();
    };

    legend.appendTo = function(elem) {
        wax.u.$(elem).appendChild(l.element());
        return this;
    };

    return legend.add();
};
wax = wax || {};
wax.leaf = wax.leaf || {};

wax.leaf.connector = L.TileLayer.extend({
    initialize: function(options) {
        options = options || {};
        options.minZoom = options.minzoom || 0;
        options.maxZoom = options.maxzoom || 22;
        L.TileLayer.prototype.initialize.call(this, options.tiles[0], options);
    }
});

/* wax - 7.0.0dev10 - v6.0.4-112-g94e91cb */


!function (name, context, definition) {
  if (typeof module !== 'undefined') module.exports = definition(name, context);
  else if (typeof define === 'function' && typeof define.amd  === 'object') define(definition);
  else context[name] = definition(name, context);
}('bean', this, function (name, context) {
  var win = window
    , old = context[name]
    , overOut = /over|out/
    , namespaceRegex = /[^\.]*(?=\..*)\.|.*/
    , nameRegex = /\..*/
    , addEvent = 'addEventListener'
    , attachEvent = 'attachEvent'
    , removeEvent = 'removeEventListener'
    , detachEvent = 'detachEvent'
    , doc = document || {}
    , root = doc.documentElement || {}
    , W3C_MODEL = root[addEvent]
    , eventSupport = W3C_MODEL ? addEvent : attachEvent
    , slice = Array.prototype.slice
    , mouseTypeRegex = /click|mouse(?!(.*wheel|scroll))|menu|drag|drop/i
    , mouseWheelTypeRegex = /mouse.*(wheel|scroll)/i
    , textTypeRegex = /^text/i
    , touchTypeRegex = /^touch|^gesture/i
    , ONE = { one: 1 } // singleton for quick matching making add() do one()

    , nativeEvents = (function (hash, events, i) {
        for (i = 0; i < events.length; i++)
          hash[events[i]] = 1
        return hash
      })({}, (
          'click dblclick mouseup mousedown contextmenu ' +                  // mouse buttons
          'mousewheel mousemultiwheel DOMMouseScroll ' +                     // mouse wheel
          'mouseover mouseout mousemove selectstart selectend ' +            // mouse movement
          'keydown keypress keyup ' +                                        // keyboard
          'orientationchange ' +                                             // mobile
          'focus blur change reset select submit ' +                         // form elements
          'load unload beforeunload resize move DOMContentLoaded readystatechange ' + // window
          'error abort scroll ' +                                            // misc
          (W3C_MODEL ? // element.fireEvent('onXYZ'... is not forgiving if we try to fire an event
                       // that doesn't actually exist, so make sure we only do these on newer browsers
            'show ' +                                                          // mouse buttons
            'input invalid ' +                                                 // form elements
            'touchstart touchmove touchend touchcancel ' +                     // touch
            'gesturestart gesturechange gestureend ' +                         // gesture
            'message readystatechange pageshow pagehide popstate ' +           // window
            'hashchange offline online ' +                                     // window
            'afterprint beforeprint ' +                                        // printing
            'dragstart dragenter dragover dragleave drag drop dragend ' +      // dnd
            'loadstart progress suspend emptied stalled loadmetadata ' +       // media
            'loadeddata canplay canplaythrough playing waiting seeking ' +     // media
            'seeked ended durationchange timeupdate play pause ratechange ' +  // media
            'volumechange cuechange ' +                                        // media
            'checking noupdate downloading cached updateready obsolete ' +     // appcache
            '' : '')
        ).split(' ')
      )

    , customEvents = (function () {
        function isDescendant(parent, node) {
          while ((node = node.parentNode) !== null) {
            if (node === parent) return true
          }
          return false
        }

        function check(event) {
          var related = event.relatedTarget
          if (!related) return related === null
          return (related !== this && related.prefix !== 'xul' && !/document/.test(this.toString()) && !isDescendant(this, related))
        }

        return {
            mouseenter: { base: 'mouseover', condition: check }
          , mouseleave: { base: 'mouseout', condition: check }
          , mousewheel: { base: /Firefox/.test(navigator.userAgent) ? 'DOMMouseScroll' : 'mousewheel' }
        }
      })()

    , fixEvent = (function () {
        var commonProps = 'altKey attrChange attrName bubbles cancelable ctrlKey currentTarget detail eventPhase getModifierState isTrusted metaKey relatedNode relatedTarget shiftKey srcElement target timeStamp type view which'.split(' ')
          , mouseProps = commonProps.concat('button buttons clientX clientY dataTransfer fromElement offsetX offsetY pageX pageY screenX screenY toElement'.split(' '))
          , mouseWheelProps = mouseProps.concat('wheelDelta wheelDeltaX wheelDeltaY wheelDeltaZ axis'.split(' ')) // 'axis' is FF specific
          , keyProps = commonProps.concat('char charCode key keyCode keyIdentifier keyLocation'.split(' '))
          , textProps = commonProps.concat(['data'])
          , touchProps = commonProps.concat('touches targetTouches changedTouches scale rotation'.split(' '))
          , preventDefault = 'preventDefault'
          , createPreventDefault = function (event) {
              return function () {
                if (event[preventDefault])
                  event[preventDefault]()
                else
                  event.returnValue = false
              }
            }
          , stopPropagation = 'stopPropagation'
          , createStopPropagation = function (event) {
              return function () {
                if (event[stopPropagation])
                  event[stopPropagation]()
                else
                  event.cancelBubble = true
              }
            }
          , createStop = function (synEvent) {
              return function () {
                synEvent[preventDefault]()
                synEvent[stopPropagation]()
                synEvent.stopped = true
              }
            }
          , copyProps = function (event, result, props) {
              var i, p
              for (i = props.length; i--;) {
                p = props[i]
                if (!(p in result) && p in event) result[p] = event[p]
              }
            }

        return function (event, isNative) {
          var result = { originalEvent: event, isNative: isNative }
          if (!event)
            return result

          var props
            , type = event.type
            , target = event.target || event.srcElement

          result[preventDefault] = createPreventDefault(event)
          result[stopPropagation] = createStopPropagation(event)
          result.stop = createStop(result)
          result.target = target && target.nodeType === 3 ? target.parentNode : target

          if (isNative) { // we only need basic augmentation on custom events, the rest is too expensive
            if (type.indexOf('key') !== -1) {
              props = keyProps
              result.keyCode = event.which || event.keyCode
            } else if (mouseTypeRegex.test(type)) {
              props = mouseProps
              result.rightClick = event.which === 3 || event.button === 2
              result.pos = { x: 0, y: 0 }
              if (event.pageX || event.pageY) {
                result.clientX = event.pageX
                result.clientY = event.pageY
              } else if (event.clientX || event.clientY) {
                result.clientX = event.clientX + doc.body.scrollLeft + root.scrollLeft
                result.clientY = event.clientY + doc.body.scrollTop + root.scrollTop
              }
              if (overOut.test(type))
                result.relatedTarget = event.relatedTarget || event[(type === 'mouseover' ? 'from' : 'to') + 'Element']
            } else if (touchTypeRegex.test(type)) {
              props = touchProps
            } else if (mouseWheelTypeRegex.test(type)) {
              props = mouseWheelProps
            } else if (textTypeRegex.test(type)) {
              props = textProps
            }
            copyProps(event, result, props || commonProps)
          }
          return result
        }
      })()

      // if we're in old IE we can't do onpropertychange on doc or win so we use doc.documentElement for both
    , targetElement = function (element, isNative) {
        return !W3C_MODEL && !isNative && (element === doc || element === win) ? root : element
      }

      // we use one of these per listener, of any type
    , RegEntry = (function () {
        function entry(element, type, handler, original, namespaces) {
          this.element = element
          this.type = type
          this.handler = handler
          this.original = original
          this.namespaces = namespaces
          this.custom = customEvents[type]
          this.isNative = nativeEvents[type] && element[eventSupport]
          this.eventType = W3C_MODEL || this.isNative ? type : 'propertychange'
          this.customType = !W3C_MODEL && !this.isNative && type
          this.target = targetElement(element, this.isNative)
          this.eventSupport = this.target[eventSupport]
        }

        entry.prototype = {
            // given a list of namespaces, is our entry in any of them?
            inNamespaces: function (checkNamespaces) {
              var i, j
              if (!checkNamespaces)
                return true
              if (!this.namespaces)
                return false
              for (i = checkNamespaces.length; i--;) {
                for (j = this.namespaces.length; j--;) {
                  if (checkNamespaces[i] === this.namespaces[j])
                    return true
                }
              }
              return false
            }

            // match by element, original fn (opt), handler fn (opt)
          , matches: function (checkElement, checkOriginal, checkHandler) {
              return this.element === checkElement &&
                (!checkOriginal || this.original === checkOriginal) &&
                (!checkHandler || this.handler === checkHandler)
            }
        }

        return entry
      })()

    , registry = (function () {
        // our map stores arrays by event type, just because it's better than storing
        // everything in a single array. uses '$' as a prefix for the keys for safety
        var map = {}

          // generic functional search of our registry for matching listeners,
          // `fn` returns false to break out of the loop
          , forAll = function (element, type, original, handler, fn) {
              if (!type || type === '*') {
                // search the whole registry
                for (var t in map) {
                  if (t.charAt(0) === '$')
                    forAll(element, t.substr(1), original, handler, fn)
                }
              } else {
                var i = 0, l, list = map['$' + type], all = element === '*'
                if (!list)
                  return
                for (l = list.length; i < l; i++) {
                  if (all || list[i].matches(element, original, handler))
                    if (!fn(list[i], list, i, type))
                      return
                }
              }
            }

          , has = function (element, type, original) {
              // we're not using forAll here simply because it's a bit slower and this
              // needs to be fast
              var i, list = map['$' + type]
              if (list) {
                for (i = list.length; i--;) {
                  if (list[i].matches(element, original, null))
                    return true
                }
              }
              return false
            }

          , get = function (element, type, original) {
              var entries = []
              forAll(element, type, original, null, function (entry) { return entries.push(entry) })
              return entries
            }

          , put = function (entry) {
              (map['$' + entry.type] || (map['$' + entry.type] = [])).push(entry)
              return entry
            }

          , del = function (entry) {
              forAll(entry.element, entry.type, null, entry.handler, function (entry, list, i) {
                list.splice(i, 1)
                if (list.length === 0)
                  delete map['$' + entry.type]
                return false
              })
            }

            // dump all entries, used for onunload
          , entries = function () {
              var t, entries = []
              for (t in map) {
                if (t.charAt(0) === '$')
                  entries = entries.concat(map[t])
              }
              return entries
            }

        return { has: has, get: get, put: put, del: del, entries: entries }
      })()

      // add and remove listeners to DOM elements
    , listener = W3C_MODEL ? function (element, type, fn, add) {
        element[add ? addEvent : removeEvent](type, fn, false)
      } : function (element, type, fn, add, custom) {
        if (custom && add && element['_on' + custom] === null)
          element['_on' + custom] = 0
        element[add ? attachEvent : detachEvent]('on' + type, fn)
      }

    , nativeHandler = function (element, fn, args) {
        return function (event) {
          event = fixEvent(event || ((this.ownerDocument || this.document || this).parentWindow || win).event, true)
          return fn.apply(element, [event].concat(args))
        }
      }

    , customHandler = function (element, fn, type, condition, args, isNative) {
        return function (event) {
          if (condition ? condition.apply(this, arguments) : W3C_MODEL ? true : event && event.propertyName === '_on' + type || !event) {
            if (event)
              event = fixEvent(event || ((this.ownerDocument || this.document || this).parentWindow || win).event, isNative)
            fn.apply(element, event && (!args || args.length === 0) ? arguments : slice.call(arguments, event ? 0 : 1).concat(args))
          }
        }
      }

    , once = function (rm, element, type, fn, originalFn) {
        // wrap the handler in a handler that does a remove as well
        return function () {
          rm(element, type, originalFn)
          fn.apply(this, arguments)
        }
      }

    , removeListener = function (element, orgType, handler, namespaces) {
        var i, l, entry
          , type = (orgType && orgType.replace(nameRegex, ''))
          , handlers = registry.get(element, type, handler)

        for (i = 0, l = handlers.length; i < l; i++) {
          if (handlers[i].inNamespaces(namespaces)) {
            if ((entry = handlers[i]).eventSupport)
              listener(entry.target, entry.eventType, entry.handler, false, entry.type)
            // TODO: this is problematic, we have a registry.get() and registry.del() that
            // both do registry searches so we waste cycles doing this. Needs to be rolled into
            // a single registry.forAll(fn) that removes while finding, but the catch is that
            // we'll be splicing the arrays that we're iterating over. Needs extra tests to
            // make sure we don't screw it up. @rvagg
            registry.del(entry)
          }
        }
      }

    , addListener = function (element, orgType, fn, originalFn, args) {
        var entry
          , type = orgType.replace(nameRegex, '')
          , namespaces = orgType.replace(namespaceRegex, '').split('.')

        if (registry.has(element, type, fn))
          return element // no dupe
        if (type === 'unload')
          fn = once(removeListener, element, type, fn, originalFn) // self clean-up
        if (customEvents[type]) {
          if (customEvents[type].condition)
            fn = customHandler(element, fn, type, customEvents[type].condition, true)
          type = customEvents[type].base || type
        }
        entry = registry.put(new RegEntry(element, type, fn, originalFn, namespaces[0] && namespaces))
        entry.handler = entry.isNative ?
          nativeHandler(element, entry.handler, args) :
          customHandler(element, entry.handler, type, false, args, false)
        if (entry.eventSupport)
          listener(entry.target, entry.eventType, entry.handler, true, entry.customType)
      }

    , del = function (selector, fn, $) {
        return function (e) {
          var target, i, array = typeof selector === 'string' ? $(selector, this) : selector
          for (target = e.target; target && target !== this; target = target.parentNode) {
            for (i = array.length; i--;) {
              if (array[i] === target) {
                return fn.apply(target, arguments)
              }
            }
          }
        }
      }

    , remove = function (element, typeSpec, fn) {
        var k, m, type, namespaces, i
          , rm = removeListener
          , isString = typeSpec && typeof typeSpec === 'string'

        if (isString && typeSpec.indexOf(' ') > 0) {
          // remove(el, 't1 t2 t3', fn) or remove(el, 't1 t2 t3')
          typeSpec = typeSpec.split(' ')
          for (i = typeSpec.length; i--;)
            remove(element, typeSpec[i], fn)
          return element
        }
        type = isString && typeSpec.replace(nameRegex, '')
        if (type && customEvents[type])
          type = customEvents[type].type
        if (!typeSpec || isString) {
          // remove(el) or remove(el, t1.ns) or remove(el, .ns) or remove(el, .ns1.ns2.ns3)
          if (namespaces = isString && typeSpec.replace(namespaceRegex, ''))
            namespaces = namespaces.split('.')
          rm(element, type, fn, namespaces)
        } else if (typeof typeSpec === 'function') {
          // remove(el, fn)
          rm(element, null, typeSpec)
        } else {
          // remove(el, { t1: fn1, t2, fn2 })
          for (k in typeSpec) {
            if (typeSpec.hasOwnProperty(k))
              remove(element, k, typeSpec[k])
          }
        }
        return element
      }

    , add = function (element, events, fn, delfn, $) {
        var type, types, i, args
          , originalFn = fn
          , isDel = fn && typeof fn === 'string'

        if (events && !fn && typeof events === 'object') {
          for (type in events) {
            if (events.hasOwnProperty(type))
              add.apply(this, [ element, type, events[type] ])
          }
        } else {
          args = arguments.length > 3 ? slice.call(arguments, 3) : []
          types = (isDel ? fn : events).split(' ')
          isDel && (fn = del(events, (originalFn = delfn), $)) && (args = slice.call(args, 1))
          // special case for one()
          this === ONE && (fn = once(remove, element, events, fn, originalFn))
          for (i = types.length; i--;) addListener(element, types[i], fn, originalFn, args)
        }
        return element
      }

    , one = function () {
        return add.apply(ONE, arguments)
      }

    , fireListener = W3C_MODEL ? function (isNative, type, element) {
        var evt = doc.createEvent(isNative ? 'HTMLEvents' : 'UIEvents')
        evt[isNative ? 'initEvent' : 'initUIEvent'](type, true, true, win, 1)
        element.dispatchEvent(evt)
      } : function (isNative, type, element) {
        element = targetElement(element, isNative)
        // if not-native then we're using onpropertychange so we just increment a custom property
        isNative ? element.fireEvent('on' + type, doc.createEventObject()) : element['_on' + type]++
      }

    , fire = function (element, type, args) {
        var i, j, l, names, handlers
          , types = type.split(' ')

        for (i = types.length; i--;) {
          type = types[i].replace(nameRegex, '')
          if (names = types[i].replace(namespaceRegex, ''))
            names = names.split('.')
          if (!names && !args && element[eventSupport]) {
            fireListener(nativeEvents[type], type, element)
          } else {
            // non-native event, either because of a namespace, arguments or a non DOM element
            // iterate over all listeners and manually 'fire'
            handlers = registry.get(element, type)
            args = [false].concat(args)
            for (j = 0, l = handlers.length; j < l; j++) {
              if (handlers[j].inNamespaces(names))
                handlers[j].handler.apply(element, args)
            }
          }
        }
        return element
      }

    , clone = function (element, from, type) {
        var i = 0
          , handlers = registry.get(from, type)
          , l = handlers.length

        for (;i < l; i++)
          handlers[i].original && add(element, handlers[i].type, handlers[i].original)
        return element
      }

    , bean = {
          add: add
        , one: one
        , remove: remove
        , clone: clone
        , fire: fire
        , noConflict: function () {
            context[name] = old
            return this
          }
      }

  if (win[attachEvent]) {
    // for IE, clean up on unload to avoid leaks
    var cleanup = function () {
      var i, entries = registry.entries()
      for (i in entries) {
        if (entries[i].type && entries[i].type !== 'unload')
          remove(entries[i].element, entries[i].type)
      }
      win[detachEvent]('onunload', cleanup)
      win.CollectGarbage && win.CollectGarbage()
    }
    win[attachEvent]('onunload', cleanup)
  }

  return bean
})
// Copyright Google Inc.
// Licensed under the Apache Licence Version 2.0
// Autogenerated at Tue Oct 11 13:36:46 EDT 2011
// @provides html4
var html4 = {};
html4.atype = {
  NONE: 0,
  URI: 1,
  URI_FRAGMENT: 11,
  SCRIPT: 2,
  STYLE: 3,
  ID: 4,
  IDREF: 5,
  IDREFS: 6,
  GLOBAL_NAME: 7,
  LOCAL_NAME: 8,
  CLASSES: 9,
  FRAME_TARGET: 10
};
html4.ATTRIBS = {
  '*::class': 9,
  '*::dir': 0,
  '*::id': 4,
  '*::lang': 0,
  '*::onclick': 2,
  '*::ondblclick': 2,
  '*::onkeydown': 2,
  '*::onkeypress': 2,
  '*::onkeyup': 2,
  '*::onload': 2,
  '*::onmousedown': 2,
  '*::onmousemove': 2,
  '*::onmouseout': 2,
  '*::onmouseover': 2,
  '*::onmouseup': 2,
  '*::style': 3,
  '*::title': 0,
  'a::accesskey': 0,
  'a::coords': 0,
  'a::href': 1,
  'a::hreflang': 0,
  'a::name': 7,
  'a::onblur': 2,
  'a::onfocus': 2,
  'a::rel': 0,
  'a::rev': 0,
  'a::shape': 0,
  'a::tabindex': 0,
  'a::target': 10,
  'a::type': 0,
  'area::accesskey': 0,
  'area::alt': 0,
  'area::coords': 0,
  'area::href': 1,
  'area::nohref': 0,
  'area::onblur': 2,
  'area::onfocus': 2,
  'area::shape': 0,
  'area::tabindex': 0,
  'area::target': 10,
  'bdo::dir': 0,
  'blockquote::cite': 1,
  'br::clear': 0,
  'button::accesskey': 0,
  'button::disabled': 0,
  'button::name': 8,
  'button::onblur': 2,
  'button::onfocus': 2,
  'button::tabindex': 0,
  'button::type': 0,
  'button::value': 0,
  'canvas::height': 0,
  'canvas::width': 0,
  'caption::align': 0,
  'col::align': 0,
  'col::char': 0,
  'col::charoff': 0,
  'col::span': 0,
  'col::valign': 0,
  'col::width': 0,
  'colgroup::align': 0,
  'colgroup::char': 0,
  'colgroup::charoff': 0,
  'colgroup::span': 0,
  'colgroup::valign': 0,
  'colgroup::width': 0,
  'del::cite': 1,
  'del::datetime': 0,
  'dir::compact': 0,
  'div::align': 0,
  'dl::compact': 0,
  'font::color': 0,
  'font::face': 0,
  'font::size': 0,
  'form::accept': 0,
  'form::action': 1,
  'form::autocomplete': 0,
  'form::enctype': 0,
  'form::method': 0,
  'form::name': 7,
  'form::onreset': 2,
  'form::onsubmit': 2,
  'form::target': 10,
  'h1::align': 0,
  'h2::align': 0,
  'h3::align': 0,
  'h4::align': 0,
  'h5::align': 0,
  'h6::align': 0,
  'hr::align': 0,
  'hr::noshade': 0,
  'hr::size': 0,
  'hr::width': 0,
  'iframe::align': 0,
  'iframe::frameborder': 0,
  'iframe::height': 0,
  'iframe::marginheight': 0,
  'iframe::marginwidth': 0,
  'iframe::width': 0,
  'img::align': 0,
  'img::alt': 0,
  'img::border': 0,
  'img::height': 0,
  'img::hspace': 0,
  'img::ismap': 0,
  'img::name': 7,
  'img::src': 1,
  'img::usemap': 11,
  'img::vspace': 0,
  'img::width': 0,
  'input::accept': 0,
  'input::accesskey': 0,
  'input::align': 0,
  'input::alt': 0,
  'input::autocomplete': 0,
  'input::checked': 0,
  'input::disabled': 0,
  'input::ismap': 0,
  'input::maxlength': 0,
  'input::name': 8,
  'input::onblur': 2,
  'input::onchange': 2,
  'input::onfocus': 2,
  'input::onselect': 2,
  'input::readonly': 0,
  'input::size': 0,
  'input::src': 1,
  'input::tabindex': 0,
  'input::type': 0,
  'input::usemap': 11,
  'input::value': 0,
  'ins::cite': 1,
  'ins::datetime': 0,
  'label::accesskey': 0,
  'label::for': 5,
  'label::onblur': 2,
  'label::onfocus': 2,
  'legend::accesskey': 0,
  'legend::align': 0,
  'li::type': 0,
  'li::value': 0,
  'map::name': 7,
  'menu::compact': 0,
  'ol::compact': 0,
  'ol::start': 0,
  'ol::type': 0,
  'optgroup::disabled': 0,
  'optgroup::label': 0,
  'option::disabled': 0,
  'option::label': 0,
  'option::selected': 0,
  'option::value': 0,
  'p::align': 0,
  'pre::width': 0,
  'q::cite': 1,
  'select::disabled': 0,
  'select::multiple': 0,
  'select::name': 8,
  'select::onblur': 2,
  'select::onchange': 2,
  'select::onfocus': 2,
  'select::size': 0,
  'select::tabindex': 0,
  'table::align': 0,
  'table::bgcolor': 0,
  'table::border': 0,
  'table::cellpadding': 0,
  'table::cellspacing': 0,
  'table::frame': 0,
  'table::rules': 0,
  'table::summary': 0,
  'table::width': 0,
  'tbody::align': 0,
  'tbody::char': 0,
  'tbody::charoff': 0,
  'tbody::valign': 0,
  'td::abbr': 0,
  'td::align': 0,
  'td::axis': 0,
  'td::bgcolor': 0,
  'td::char': 0,
  'td::charoff': 0,
  'td::colspan': 0,
  'td::headers': 6,
  'td::height': 0,
  'td::nowrap': 0,
  'td::rowspan': 0,
  'td::scope': 0,
  'td::valign': 0,
  'td::width': 0,
  'textarea::accesskey': 0,
  'textarea::cols': 0,
  'textarea::disabled': 0,
  'textarea::name': 8,
  'textarea::onblur': 2,
  'textarea::onchange': 2,
  'textarea::onfocus': 2,
  'textarea::onselect': 2,
  'textarea::readonly': 0,
  'textarea::rows': 0,
  'textarea::tabindex': 0,
  'tfoot::align': 0,
  'tfoot::char': 0,
  'tfoot::charoff': 0,
  'tfoot::valign': 0,
  'th::abbr': 0,
  'th::align': 0,
  'th::axis': 0,
  'th::bgcolor': 0,
  'th::char': 0,
  'th::charoff': 0,
  'th::colspan': 0,
  'th::headers': 6,
  'th::height': 0,
  'th::nowrap': 0,
  'th::rowspan': 0,
  'th::scope': 0,
  'th::valign': 0,
  'th::width': 0,
  'thead::align': 0,
  'thead::char': 0,
  'thead::charoff': 0,
  'thead::valign': 0,
  'tr::align': 0,
  'tr::bgcolor': 0,
  'tr::char': 0,
  'tr::charoff': 0,
  'tr::valign': 0,
  'ul::compact': 0,
  'ul::type': 0
};
html4.eflags = {
  OPTIONAL_ENDTAG: 1,
  EMPTY: 2,
  CDATA: 4,
  RCDATA: 8,
  UNSAFE: 16,
  FOLDABLE: 32,
  SCRIPT: 64,
  STYLE: 128
};
html4.ELEMENTS = {
  'a': 0,
  'abbr': 0,
  'acronym': 0,
  'address': 0,
  'applet': 16,
  'area': 2,
  'b': 0,
  'base': 18,
  'basefont': 18,
  'bdo': 0,
  'big': 0,
  'blockquote': 0,
  'body': 49,
  'br': 2,
  'button': 0,
  'canvas': 0,
  'caption': 0,
  'center': 0,
  'cite': 0,
  'code': 0,
  'col': 2,
  'colgroup': 1,
  'dd': 1,
  'del': 0,
  'dfn': 0,
  'dir': 0,
  'div': 0,
  'dl': 0,
  'dt': 1,
  'em': 0,
  'fieldset': 0,
  'font': 0,
  'form': 0,
  'frame': 18,
  'frameset': 16,
  'h1': 0,
  'h2': 0,
  'h3': 0,
  'h4': 0,
  'h5': 0,
  'h6': 0,
  'head': 49,
  'hr': 2,
  'html': 49,
  'i': 0,
  'iframe': 4,
  'img': 2,
  'input': 2,
  'ins': 0,
  'isindex': 18,
  'kbd': 0,
  'label': 0,
  'legend': 0,
  'li': 1,
  'link': 18,
  'map': 0,
  'menu': 0,
  'meta': 18,
  'nobr': 0,
  'noembed': 4,
  'noframes': 20,
  'noscript': 20,
  'object': 16,
  'ol': 0,
  'optgroup': 0,
  'option': 1,
  'p': 1,
  'param': 18,
  'pre': 0,
  'q': 0,
  's': 0,
  'samp': 0,
  'script': 84,
  'select': 0,
  'small': 0,
  'span': 0,
  'strike': 0,
  'strong': 0,
  'style': 148,
  'sub': 0,
  'sup': 0,
  'table': 0,
  'tbody': 1,
  'td': 1,
  'textarea': 8,
  'tfoot': 1,
  'th': 1,
  'thead': 1,
  'title': 24,
  'tr': 1,
  'tt': 0,
  'u': 0,
  'ul': 0,
  'var': 0
};
html4.ueffects = {
  NOT_LOADED: 0,
  SAME_DOCUMENT: 1,
  NEW_DOCUMENT: 2
};
html4.URIEFFECTS = {
  'a::href': 2,
  'area::href': 2,
  'blockquote::cite': 0,
  'body::background': 1,
  'del::cite': 0,
  'form::action': 2,
  'img::src': 1,
  'input::src': 1,
  'ins::cite': 0,
  'q::cite': 0
};
html4.ltypes = {
  UNSANDBOXED: 2,
  SANDBOXED: 1,
  DATA: 0
};
html4.LOADERTYPES = {
  'a::href': 2,
  'area::href': 2,
  'blockquote::cite': 2,
  'body::background': 1,
  'del::cite': 2,
  'form::action': 2,
  'img::src': 1,
  'input::src': 1,
  'ins::cite': 2,
  'q::cite': 2
};;
// Copyright (C) 2006 Google Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview
 * An HTML sanitizer that can satisfy a variety of security policies.
 *
 * <p>
 * The HTML sanitizer is built around a SAX parser and HTML element and
 * attributes schemas.
 *
 * @author mikesamuel@gmail.com
 * @requires html4
 * @overrides window
 * @provides html, html_sanitize
 */

/**
 * @namespace
 */
var html = (function (html4) {
  var lcase;
  // The below may not be true on browsers in the Turkish locale.
  if ('script' === 'SCRIPT'.toLowerCase()) {
    lcase = function (s) { return s.toLowerCase(); };
  } else {
    /**
     * {@updoc
     * $ lcase('SCRIPT')
     * # 'script'
     * $ lcase('script')
     * # 'script'
     * }
     */
    lcase = function (s) {
      return s.replace(
          /[A-Z]/g,
          function (ch) {
            return String.fromCharCode(ch.charCodeAt(0) | 32);
          });
    };
  }

  var ENTITIES = {
    lt   : '<',
    gt   : '>',
    amp  : '&',
    nbsp : '\240',
    quot : '"',
    apos : '\''
  };
  
  // Schemes on which to defer to uripolicy. Urls with other schemes are denied
  var WHITELISTED_SCHEMES = /^(?:https?|mailto|data)$/i;

  var decimalEscapeRe = /^#(\d+)$/;
  var hexEscapeRe = /^#x([0-9A-Fa-f]+)$/;
  /**
   * Decodes an HTML entity.
   *
   * {@updoc
   * $ lookupEntity('lt')
   * # '<'
   * $ lookupEntity('GT')
   * # '>'
   * $ lookupEntity('amp')
   * # '&'
   * $ lookupEntity('nbsp')
   * # '\xA0'
   * $ lookupEntity('apos')
   * # "'"
   * $ lookupEntity('quot')
   * # '"'
   * $ lookupEntity('#xa')
   * # '\n'
   * $ lookupEntity('#10')
   * # '\n'
   * $ lookupEntity('#x0a')
   * # '\n'
   * $ lookupEntity('#010')
   * # '\n'
   * $ lookupEntity('#x00A')
   * # '\n'
   * $ lookupEntity('Pi')      // Known failure
   * # '\u03A0'
   * $ lookupEntity('pi')      // Known failure
   * # '\u03C0'
   * }
   *
   * @param name the content between the '&' and the ';'.
   * @return a single unicode code-point as a string.
   */
  function lookupEntity(name) {
    name = lcase(name);  // TODO: &pi; is different from &Pi;
    if (ENTITIES.hasOwnProperty(name)) { return ENTITIES[name]; }
    var m = name.match(decimalEscapeRe);
    if (m) {
      return String.fromCharCode(parseInt(m[1], 10));
    } else if (!!(m = name.match(hexEscapeRe))) {
      return String.fromCharCode(parseInt(m[1], 16));
    }
    return '';
  }

  function decodeOneEntity(_, name) {
    return lookupEntity(name);
  }

  var nulRe = /\0/g;
  function stripNULs(s) {
    return s.replace(nulRe, '');
  }

  var entityRe = /&(#\d+|#x[0-9A-Fa-f]+|\w+);/g;
  /**
   * The plain text of a chunk of HTML CDATA which possibly containing.
   *
   * {@updoc
   * $ unescapeEntities('')
   * # ''
   * $ unescapeEntities('hello World!')
   * # 'hello World!'
   * $ unescapeEntities('1 &lt; 2 &amp;&AMP; 4 &gt; 3&#10;')
   * # '1 < 2 && 4 > 3\n'
   * $ unescapeEntities('&lt;&lt <- unfinished entity&gt;')
   * # '<&lt <- unfinished entity>'
   * $ unescapeEntities('/foo?bar=baz&copy=true')  // & often unescaped in URLS
   * # '/foo?bar=baz&copy=true'
   * $ unescapeEntities('pi=&pi;&#x3c0;, Pi=&Pi;\u03A0') // FIXME: known failure
   * # 'pi=\u03C0\u03c0, Pi=\u03A0\u03A0'
   * }
   *
   * @param s a chunk of HTML CDATA.  It must not start or end inside an HTML
   *   entity.
   */
  function unescapeEntities(s) {
    return s.replace(entityRe, decodeOneEntity);
  }

  var ampRe = /&/g;
  var looseAmpRe = /&([^a-z#]|#(?:[^0-9x]|x(?:[^0-9a-f]|$)|$)|$)/gi;
  var ltRe = /</g;
  var gtRe = />/g;
  var quotRe = /\"/g;
  var eqRe = /\=/g;  // Backslash required on JScript.net

  /**
   * Escapes HTML special characters in attribute values as HTML entities.
   *
   * {@updoc
   * $ escapeAttrib('')
   * # ''
   * $ escapeAttrib('"<<&==&>>"')  // Do not just escape the first occurrence.
   * # '&#34;&lt;&lt;&amp;&#61;&#61;&amp;&gt;&gt;&#34;'
   * $ escapeAttrib('Hello <World>!')
   * # 'Hello &lt;World&gt;!'
   * }
   */
  function escapeAttrib(s) {
    // Escaping '=' defangs many UTF-7 and SGML short-tag attacks.
    return s.replace(ampRe, '&amp;').replace(ltRe, '&lt;').replace(gtRe, '&gt;')
        .replace(quotRe, '&#34;').replace(eqRe, '&#61;');
  }

  /**
   * Escape entities in RCDATA that can be escaped without changing the meaning.
   * {@updoc
   * $ normalizeRCData('1 < 2 &&amp; 3 > 4 &amp;& 5 &lt; 7&8')
   * # '1 &lt; 2 &amp;&amp; 3 &gt; 4 &amp;&amp; 5 &lt; 7&amp;8'
   * }
   */
  function normalizeRCData(rcdata) {
    return rcdata
        .replace(looseAmpRe, '&amp;$1')
        .replace(ltRe, '&lt;')
        .replace(gtRe, '&gt;');
  }


  // TODO(mikesamuel): validate sanitizer regexs against the HTML5 grammar at
  // http://www.whatwg.org/specs/web-apps/current-work/multipage/syntax.html
  // http://www.whatwg.org/specs/web-apps/current-work/multipage/parsing.html
  // http://www.whatwg.org/specs/web-apps/current-work/multipage/tokenization.html
  // http://www.whatwg.org/specs/web-apps/current-work/multipage/tree-construction.html

  /** token definitions. */
  var INSIDE_TAG_TOKEN = new RegExp(
      // Don't capture space.
      '^\\s*(?:'
      // Capture an attribute name in group 1, and value in group 3.
      // We capture the fact that there was an attribute in group 2, since
      // interpreters are inconsistent in whether a group that matches nothing
      // is null, undefined, or the empty string.
      + ('(?:'
         + '([a-z][a-z-]*)'                    // attribute name
         + ('('                                // optionally followed
            + '\\s*=\\s*'
            + ('('
               // A double quoted string.
               + '\"[^\"]*\"'
               // A single quoted string.
               + '|\'[^\']*\''
               // The positive lookahead is used to make sure that in
               // <foo bar= baz=boo>, the value for bar is blank, not "baz=boo".
               + '|(?=[a-z][a-z-]*\\s*=)'
               // An unquoted value that is not an attribute name.
               // We know it is not an attribute name because the previous
               // zero-width match would've eliminated that possibility.
               + '|[^>\"\'\\s]*'
               + ')'
               )
            + ')'
            ) + '?'
         + ')'
         )
      // End of tag captured in group 3.
      + '|(\/?>)'
      // Don't capture cruft
      + '|[\\s\\S][^a-z\\s>]*)',
      'i');

  var OUTSIDE_TAG_TOKEN = new RegExp(
      '^(?:'
      // Entity captured in group 1.
      + '&(\\#[0-9]+|\\#[x][0-9a-f]+|\\w+);'
      // Comment, doctypes, and processing instructions not captured.
      + '|<\!--[\\s\\S]*?--\>|<!\\w[^>]*>|<\\?[^>*]*>'
      // '/' captured in group 2 for close tags, and name captured in group 3.
      + '|<(\/)?([a-z][a-z0-9]*)'
      // Text captured in group 4.
      + '|([^<&>]+)'
      // Cruft captured in group 5.
      + '|([<&>]))',
      'i');

  /**
   * Given a SAX-like event handler, produce a function that feeds those
   * events and a parameter to the event handler.
   *
   * The event handler has the form:{@code
   * {
   *   // Name is an upper-case HTML tag name.  Attribs is an array of
   *   // alternating upper-case attribute names, and attribute values.  The
   *   // attribs array is reused by the parser.  Param is the value passed to
   *   // the saxParser.
   *   startTag: function (name, attribs, param) { ... },
   *   endTag:   function (name, param) { ... },
   *   pcdata:   function (text, param) { ... },
   *   rcdata:   function (text, param) { ... },
   *   cdata:    function (text, param) { ... },
   *   startDoc: function (param) { ... },
   *   endDoc:   function (param) { ... }
   * }}
   *
   * @param {Object} handler a record containing event handlers.
   * @return {Function} that takes a chunk of html and a parameter.
   *   The parameter is passed on to the handler methods.
   */
  function makeSaxParser(handler) {
    return function parse(htmlText, param) {
      htmlText = String(htmlText);
      var htmlLower = null;

      var inTag = false;  // True iff we're currently processing a tag.
      var attribs = [];  // Accumulates attribute names and values.
      var tagName = void 0;  // The name of the tag currently being processed.
      var eflags = void 0;  // The element flags for the current tag.
      var openTag = void 0;  // True if the current tag is an open tag.

      if (handler.startDoc) { handler.startDoc(param); }

      while (htmlText) {
        var m = htmlText.match(inTag ? INSIDE_TAG_TOKEN : OUTSIDE_TAG_TOKEN);
        htmlText = htmlText.substring(m[0].length);

        if (inTag) {
          if (m[1]) { // attribute
            // setAttribute with uppercase names doesn't work on IE6.
            var attribName = lcase(m[1]);
            var decodedValue;
            if (m[2]) {
              var encodedValue = m[3];
              switch (encodedValue.charCodeAt(0)) {  // Strip quotes
                case 34: case 39:
                  encodedValue = encodedValue.substring(
                      1, encodedValue.length - 1);
                  break;
              }
              decodedValue = unescapeEntities(stripNULs(encodedValue));
            } else {
              // Use name as value for valueless attribs, so
              //   <input type=checkbox checked>
              // gets attributes ['type', 'checkbox', 'checked', 'checked']
              decodedValue = attribName;
            }
            attribs.push(attribName, decodedValue);
          } else if (m[4]) {
            if (eflags !== void 0) {  // False if not in whitelist.
              if (openTag) {
                if (handler.startTag) {
                  handler.startTag(tagName, attribs, param);
                }
              } else {
                if (handler.endTag) {
                  handler.endTag(tagName, param);
                }
              }
            }

            if (openTag
                && (eflags & (html4.eflags.CDATA | html4.eflags.RCDATA))) {
              if (htmlLower === null) {
                htmlLower = lcase(htmlText);
              } else {
                htmlLower = htmlLower.substring(
                    htmlLower.length - htmlText.length);
              }
              var dataEnd = htmlLower.indexOf('</' + tagName);
              if (dataEnd < 0) { dataEnd = htmlText.length; }
              if (dataEnd) {
                if (eflags & html4.eflags.CDATA) {
                  if (handler.cdata) {
                    handler.cdata(htmlText.substring(0, dataEnd), param);
                  }
                } else if (handler.rcdata) {
                  handler.rcdata(
                    normalizeRCData(htmlText.substring(0, dataEnd)), param);
                }
                htmlText = htmlText.substring(dataEnd);
              }
            }

            tagName = eflags = openTag = void 0;
            attribs.length = 0;
            inTag = false;
          }
        } else {
          if (m[1]) {  // Entity
            if (handler.pcdata) { handler.pcdata(m[0], param); }
          } else if (m[3]) {  // Tag
            openTag = !m[2];
            inTag = true;
            tagName = lcase(m[3]);
            eflags = html4.ELEMENTS.hasOwnProperty(tagName)
                ? html4.ELEMENTS[tagName] : void 0;
          } else if (m[4]) {  // Text
            if (handler.pcdata) { handler.pcdata(m[4], param); }
          } else if (m[5]) {  // Cruft
            if (handler.pcdata) {
              var ch = m[5];
              handler.pcdata(
                  ch === '<' ? '&lt;' : ch === '>' ? '&gt;' : '&amp;',
                  param);
            }
          }
        }
      }

      if (handler.endDoc) { handler.endDoc(param); }
    };
  }

  /**
   * Returns a function that strips unsafe tags and attributes from html.
   * @param {Function} sanitizeAttributes
   *     maps from (tagName, attribs[]) to null or a sanitized attribute array.
   *     The attribs array can be arbitrarily modified, but the same array
   *     instance is reused, so should not be held.
   * @return {Function} from html to sanitized html
   */
  function makeHtmlSanitizer(sanitizeAttributes) {
    var stack;
    var ignoring;
    return makeSaxParser({
        startDoc: function (_) {
          stack = [];
          ignoring = false;
        },
        startTag: function (tagName, attribs, out) {
          if (ignoring) { return; }
          if (!html4.ELEMENTS.hasOwnProperty(tagName)) { return; }
          var eflags = html4.ELEMENTS[tagName];
          if (eflags & html4.eflags.FOLDABLE) {
            return;
          } else if (eflags & html4.eflags.UNSAFE) {
            ignoring = !(eflags & html4.eflags.EMPTY);
            return;
          }
          attribs = sanitizeAttributes(tagName, attribs);
          // TODO(mikesamuel): relying on sanitizeAttributes not to
          // insert unsafe attribute names.
          if (attribs) {
            if (!(eflags & html4.eflags.EMPTY)) {
              stack.push(tagName);
            }

            out.push('<', tagName);
            for (var i = 0, n = attribs.length; i < n; i += 2) {
              var attribName = attribs[i],
                  value = attribs[i + 1];
              if (value !== null && value !== void 0) {
                out.push(' ', attribName, '="', escapeAttrib(value), '"');
              }
            }
            out.push('>');
          }
        },
        endTag: function (tagName, out) {
          if (ignoring) {
            ignoring = false;
            return;
          }
          if (!html4.ELEMENTS.hasOwnProperty(tagName)) { return; }
          var eflags = html4.ELEMENTS[tagName];
          if (!(eflags & (html4.eflags.UNSAFE | html4.eflags.EMPTY
                          | html4.eflags.FOLDABLE))) {
            var index;
            if (eflags & html4.eflags.OPTIONAL_ENDTAG) {
              for (index = stack.length; --index >= 0;) {
                var stackEl = stack[index];
                if (stackEl === tagName) { break; }
                if (!(html4.ELEMENTS[stackEl]
                      & html4.eflags.OPTIONAL_ENDTAG)) {
                  // Don't pop non optional end tags looking for a match.
                  return;
                }
              }
            } else {
              for (index = stack.length; --index >= 0;) {
                if (stack[index] === tagName) { break; }
              }
            }
            if (index < 0) { return; }  // Not opened.
            for (var i = stack.length; --i > index;) {
              var stackEl = stack[i];
              if (!(html4.ELEMENTS[stackEl]
                    & html4.eflags.OPTIONAL_ENDTAG)) {
                out.push('</', stackEl, '>');
              }
            }
            stack.length = index;
            out.push('</', tagName, '>');
          }
        },
        pcdata: function (text, out) {
          if (!ignoring) { out.push(text); }
        },
        rcdata: function (text, out) {
          if (!ignoring) { out.push(text); }
        },
        cdata: function (text, out) {
          if (!ignoring) { out.push(text); }
        },
        endDoc: function (out) {
          for (var i = stack.length; --i >= 0;) {
            out.push('</', stack[i], '>');
          }
          stack.length = 0;
        }
      });
  }

  // From RFC3986
  var URI_SCHEME_RE = new RegExp(
        "^" +
      "(?:" +
        "([^:\/?#]+)" +         // scheme
      ":)?"
      );

  /**
   * Strips unsafe tags and attributes from html.
   * @param {string} htmlText to sanitize
   * @param {Function} opt_uriPolicy -- a transform to apply to uri/url
   *     attribute values.  If no opt_uriPolicy is provided, no uris
   *     are allowed ie. the default uriPolicy rewrites all uris to null
   * @param {Function} opt_nmTokenPolicy : string -> string? -- a transform to
   *     apply to names, ids, and classes. If no opt_nmTokenPolicy is provided,
   *     all names, ids and classes are passed through ie. the default
   *     nmTokenPolicy is an identity transform
   * @return {string} html
   */
  function sanitize(htmlText, opt_uriPolicy, opt_nmTokenPolicy) {
    var out = [];
    makeHtmlSanitizer(
      function sanitizeAttribs(tagName, attribs) {
        for (var i = 0; i < attribs.length; i += 2) {
          var attribName = attribs[i];
          var value = attribs[i + 1];
          var atype = null, attribKey;
          if ((attribKey = tagName + '::' + attribName,
               html4.ATTRIBS.hasOwnProperty(attribKey))
              || (attribKey = '*::' + attribName,
                  html4.ATTRIBS.hasOwnProperty(attribKey))) {
            atype = html4.ATTRIBS[attribKey];
          }
          if (atype !== null) {
            switch (atype) {
              case html4.atype.NONE: break;
              case html4.atype.SCRIPT:
              case html4.atype.STYLE:
                value = null;
                break;
              case html4.atype.ID:
              case html4.atype.IDREF:
              case html4.atype.IDREFS:
              case html4.atype.GLOBAL_NAME:
              case html4.atype.LOCAL_NAME:
              case html4.atype.CLASSES:
                value = opt_nmTokenPolicy ? opt_nmTokenPolicy(value) : value;
                break;
              case html4.atype.URI:
                var parsedUri = ('' + value).match(URI_SCHEME_RE);
                if (!parsedUri) {
                  value = null;
                } else if (!parsedUri[1] ||
                    WHITELISTED_SCHEMES.test(parsedUri[1])) {
                  value = opt_uriPolicy && opt_uriPolicy(value);
                } else {
                  value = null;
                }
                break;
              case html4.atype.URI_FRAGMENT:
                if (value && '#' === value.charAt(0)) {
                  value = opt_nmTokenPolicy ? opt_nmTokenPolicy(value) : value;
                  if (value) { value = '#' + value; }
                } else {
                  value = null;
                }
                break;
              default:
                value = null;
                break;
            }
          } else {
            value = null;
          }
          attribs[i + 1] = value;
        }
        return attribs;
      })(htmlText, out);
    return out.join('');
  }

  return {
    escapeAttrib: escapeAttrib,
    makeHtmlSanitizer: makeHtmlSanitizer,
    makeSaxParser: makeSaxParser,
    normalizeRCData: normalizeRCData,
    sanitize: sanitize,
    unescapeEntities: unescapeEntities
  };
})(html4);

var html_sanitize = html.sanitize;

// Exports for closure compiler.  Note this file is also cajoled
// for domado and run in an environment without 'window'
if (typeof window !== 'undefined') {
  window['html'] = html;
  window['html_sanitize'] = html_sanitize;
}
// Loosen restrictions of Caja's
// html-sanitizer to allow for styling
html4.ATTRIBS['*::style'] = 0;
html4.ELEMENTS['style'] = 0;

html4.ATTRIBS['a::target'] = 0;

html4.ELEMENTS['video'] = 0;
html4.ATTRIBS['video::src'] = 0;
html4.ATTRIBS['video::poster'] = 0;
html4.ATTRIBS['video::controls'] = 0;

html4.ELEMENTS['audio'] = 0;
html4.ATTRIBS['audio::src'] = 0;
html4.ATTRIBS['video::autoplay'] = 0;
html4.ATTRIBS['video::controls'] = 0;
/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */
var Mustache = (typeof module !== "undefined" && module.exports) || {};

(function (exports) {

  exports.name = "mustache.js";
  exports.version = "0.5.0-dev";
  exports.tags = ["{{", "}}"];
  exports.parse = parse;
  exports.compile = compile;
  exports.render = render;
  exports.clearCache = clearCache;

  // This is here for backwards compatibility with 0.4.x.
  exports.to_html = function (template, view, partials, send) {
    var result = render(template, view, partials);

    if (typeof send === "function") {
      send(result);
    } else {
      return result;
    }
  };

  var _toString = Object.prototype.toString;
  var _isArray = Array.isArray;
  var _forEach = Array.prototype.forEach;
  var _trim = String.prototype.trim;

  var isArray;
  if (_isArray) {
    isArray = _isArray;
  } else {
    isArray = function (obj) {
      return _toString.call(obj) === "[object Array]";
    };
  }

  var forEach;
  if (_forEach) {
    forEach = function (obj, callback, scope) {
      return _forEach.call(obj, callback, scope);
    };
  } else {
    forEach = function (obj, callback, scope) {
      for (var i = 0, len = obj.length; i < len; ++i) {
        callback.call(scope, obj[i], i, obj);
      }
    };
  }

  var spaceRe = /^\s*$/;

  function isWhitespace(string) {
    return spaceRe.test(string);
  }

  var trim;
  if (_trim) {
    trim = function (string) {
      return string == null ? "" : _trim.call(string);
    };
  } else {
    var trimLeft, trimRight;

    if (isWhitespace("\xA0")) {
      trimLeft = /^\s+/;
      trimRight = /\s+$/;
    } else {
      // IE doesn't match non-breaking spaces with \s, thanks jQuery.
      trimLeft = /^[\s\xA0]+/;
      trimRight = /[\s\xA0]+$/;
    }

    trim = function (string) {
      return string == null ? "" :
        String(string).replace(trimLeft, "").replace(trimRight, "");
    };
  }

  var escapeMap = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': '&quot;',
    "'": '&#39;',
    "/": '&#x2F;'
  };

  function escapeHTML(string) {
    return String(string).replace(/[&<>"'\/]/g, function (s) {
      return escapeMap[s] || s;
    });
  }

  /**
   * Adds the `template`, `line`, and `file` properties to the given error
   * object and alters the message to provide more useful debugging information.
   */
  function debug(e, template, line, file) {
    file = file || "<template>";

    var lines = template.split("\n"),
        start = Math.max(line - 3, 0),
        end = Math.min(lines.length, line + 3),
        context = lines.slice(start, end);

    var c;
    for (var i = 0, len = context.length; i < len; ++i) {
      c = i + start + 1;
      context[i] = (c === line ? " >> " : "    ") + context[i];
    }

    e.template = template;
    e.line = line;
    e.file = file;
    e.message = [file + ":" + line, context.join("\n"), "", e.message].join("\n");

    return e;
  }

  /**
   * Looks up the value of the given `name` in the given context `stack`.
   */
  function lookup(name, stack, defaultValue) {
    if (name === ".") {
      return stack[stack.length - 1];
    }

    var names = name.split(".");
    var lastIndex = names.length - 1;
    var target = names[lastIndex];

    var value, context, i = stack.length, j, localStack;
    while (i) {
      localStack = stack.slice(0);
      context = stack[--i];

      j = 0;
      while (j < lastIndex) {
        context = context[names[j++]];

        if (context == null) {
          break;
        }

        localStack.push(context);
      }

      if (context && typeof context === "object" && target in context) {
        value = context[target];
        break;
      }
    }

    // If the value is a function, call it in the current context.
    if (typeof value === "function") {
      value = value.call(localStack[localStack.length - 1]);
    }

    if (value == null)  {
      return defaultValue;
    }

    return value;
  }

  function renderSection(name, stack, callback, inverted) {
    var buffer = "";
    var value =  lookup(name, stack);

    if (inverted) {
      // From the spec: inverted sections may render text once based on the
      // inverse value of the key. That is, they will be rendered if the key
      // doesn't exist, is false, or is an empty list.
      if (value == null || value === false || (isArray(value) && value.length === 0)) {
        buffer += callback();
      }
    } else if (isArray(value)) {
      forEach(value, function (value) {
        stack.push(value);
        buffer += callback();
        stack.pop();
      });
    } else if (typeof value === "object") {
      stack.push(value);
      buffer += callback();
      stack.pop();
    } else if (typeof value === "function") {
      var scope = stack[stack.length - 1];
      var scopedRender = function (template) {
        return render(template, scope);
      };
      buffer += value.call(scope, callback(), scopedRender) || "";
    } else if (value) {
      buffer += callback();
    }

    return buffer;
  }

  /**
   * Parses the given `template` and returns the source of a function that,
   * with the proper arguments, will render the template. Recognized options
   * include the following:
   *
   *   - file     The name of the file the template comes from (displayed in
   *              error messages)
   *   - tags     An array of open and close tags the `template` uses. Defaults
   *              to the value of Mustache.tags
   *   - debug    Set `true` to log the body of the generated function to the
   *              console
   *   - space    Set `true` to preserve whitespace from lines that otherwise
   *              contain only a {{tag}}. Defaults to `false`
   */
  function parse(template, options) {
    options = options || {};

    var tags = options.tags || exports.tags,
        openTag = tags[0],
        closeTag = tags[tags.length - 1];

    var code = [
      'var buffer = "";', // output buffer
      "\nvar line = 1;", // keep track of source line number
      "\ntry {",
      '\nbuffer += "'
    ];

    var spaces = [],      // indices of whitespace in code on the current line
        hasTag = false,   // is there a {{tag}} on the current line?
        nonSpace = false; // is there a non-space char on the current line?

    // Strips all space characters from the code array for the current line
    // if there was a {{tag}} on it and otherwise only spaces.
    var stripSpace = function () {
      if (hasTag && !nonSpace && !options.space) {
        while (spaces.length) {
          code.splice(spaces.pop(), 1);
        }
      } else {
        spaces = [];
      }

      hasTag = false;
      nonSpace = false;
    };

    var sectionStack = [], updateLine, nextOpenTag, nextCloseTag;

    var setTags = function (source) {
      tags = trim(source).split(/\s+/);
      nextOpenTag = tags[0];
      nextCloseTag = tags[tags.length - 1];
    };

    var includePartial = function (source) {
      code.push(
        '";',
        updateLine,
        '\nvar partial = partials["' + trim(source) + '"];',
        '\nif (partial) {',
        '\n  buffer += render(partial,stack[stack.length - 1],partials);',
        '\n}',
        '\nbuffer += "'
      );
    };

    var openSection = function (source, inverted) {
      var name = trim(source);

      if (name === "") {
        throw debug(new Error("Section name may not be empty"), template, line, options.file);
      }

      sectionStack.push({name: name, inverted: inverted});

      code.push(
        '";',
        updateLine,
        '\nvar name = "' + name + '";',
        '\nvar callback = (function () {',
        '\n  return function () {',
        '\n    var buffer = "";',
        '\nbuffer += "'
      );
    };

    var openInvertedSection = function (source) {
      openSection(source, true);
    };

    var closeSection = function (source) {
      var name = trim(source);
      var openName = sectionStack.length != 0 && sectionStack[sectionStack.length - 1].name;

      if (!openName || name != openName) {
        throw debug(new Error('Section named "' + name + '" was never opened'), template, line, options.file);
      }

      var section = sectionStack.pop();

      code.push(
        '";',
        '\n    return buffer;',
        '\n  };',
        '\n})();'
      );

      if (section.inverted) {
        code.push("\nbuffer += renderSection(name,stack,callback,true);");
      } else {
        code.push("\nbuffer += renderSection(name,stack,callback);");
      }

      code.push('\nbuffer += "');
    };

    var sendPlain = function (source) {
      code.push(
        '";',
        updateLine,
        '\nbuffer += lookup("' + trim(source) + '",stack,"");',
        '\nbuffer += "'
      );
    };

    var sendEscaped = function (source) {
      code.push(
        '";',
        updateLine,
        '\nbuffer += escapeHTML(lookup("' + trim(source) + '",stack,""));',
        '\nbuffer += "'
      );
    };

    var line = 1, c, callback;
    for (var i = 0, len = template.length; i < len; ++i) {
      if (template.slice(i, i + openTag.length) === openTag) {
        i += openTag.length;
        c = template.substr(i, 1);
        updateLine = '\nline = ' + line + ';';
        nextOpenTag = openTag;
        nextCloseTag = closeTag;
        hasTag = true;

        switch (c) {
        case "!": // comment
          i++;
          callback = null;
          break;
        case "=": // change open/close tags, e.g. {{=<% %>=}}
          i++;
          closeTag = "=" + closeTag;
          callback = setTags;
          break;
        case ">": // include partial
          i++;
          callback = includePartial;
          break;
        case "#": // start section
          i++;
          callback = openSection;
          break;
        case "^": // start inverted section
          i++;
          callback = openInvertedSection;
          break;
        case "/": // end section
          i++;
          callback = closeSection;
          break;
        case "{": // plain variable
          closeTag = "}" + closeTag;
          // fall through
        case "&": // plain variable
          i++;
          nonSpace = true;
          callback = sendPlain;
          break;
        default: // escaped variable
          nonSpace = true;
          callback = sendEscaped;
        }

        var end = template.indexOf(closeTag, i);

        if (end === -1) {
          throw debug(new Error('Tag "' + openTag + '" was not closed properly'), template, line, options.file);
        }

        var source = template.substring(i, end);

        if (callback) {
          callback(source);
        }

        // Maintain line count for \n in source.
        var n = 0;
        while (~(n = source.indexOf("\n", n))) {
          line++;
          n++;
        }

        i = end + closeTag.length - 1;
        openTag = nextOpenTag;
        closeTag = nextCloseTag;
      } else {
        c = template.substr(i, 1);

        switch (c) {
        case '"':
        case "\\":
          nonSpace = true;
          code.push("\\" + c);
          break;
        case "\r":
          // Ignore carriage returns.
          break;
        case "\n":
          spaces.push(code.length);
          code.push("\\n");
          stripSpace(); // Check for whitespace on the current line.
          line++;
          break;
        default:
          if (isWhitespace(c)) {
            spaces.push(code.length);
          } else {
            nonSpace = true;
          }

          code.push(c);
        }
      }
    }

    if (sectionStack.length != 0) {
      throw debug(new Error('Section "' + sectionStack[sectionStack.length - 1].name + '" was not closed properly'), template, line, options.file);
    }

    // Clean up any whitespace from a closing {{tag}} that was at the end
    // of the template without a trailing \n.
    stripSpace();

    code.push(
      '";',
      "\nreturn buffer;",
      "\n} catch (e) { throw {error: e, line: line}; }"
    );

    // Ignore `buffer += "";` statements.
    var body = code.join("").replace(/buffer \+= "";\n/g, "");

    if (options.debug) {
      if (typeof console != "undefined" && console.log) {
        console.log(body);
      } else if (typeof print === "function") {
        print(body);
      }
    }

    return body;
  }

  /**
   * Used by `compile` to generate a reusable function for the given `template`.
   */
  function _compile(template, options) {
    var args = "view,partials,stack,lookup,escapeHTML,renderSection,render";
    var body = parse(template, options);
    var fn = new Function(args, body);

    // This anonymous function wraps the generated function so we can do
    // argument coercion, setup some variables, and handle any errors
    // encountered while executing it.
    return function (view, partials) {
      partials = partials || {};

      var stack = [view]; // context stack

      try {
        return fn(view, partials, stack, lookup, escapeHTML, renderSection, render);
      } catch (e) {
        throw debug(e.error, template, e.line, options.file);
      }
    };
  }

  // Cache of pre-compiled templates.
  var _cache = {};

  /**
   * Clear the cache of compiled templates.
   */
  function clearCache() {
    _cache = {};
  }

  /**
   * Compiles the given `template` into a reusable function using the given
   * `options`. In addition to the options accepted by Mustache.parse,
   * recognized options include the following:
   *
   *   - cache    Set `false` to bypass any pre-compiled version of the given
   *              template. Otherwise, a given `template` string will be cached
   *              the first time it is parsed
   */
  function compile(template, options) {
    options = options || {};

    // Use a pre-compiled version from the cache if we have one.
    if (options.cache !== false) {
      if (!_cache[template]) {
        _cache[template] = _compile(template, options);
      }

      return _cache[template];
    }

    return _compile(template, options);
  }

  /**
   * High-level function that renders the given `template` using the given
   * `view` and `partials`. If you need to use any of the template options (see
   * `compile` above), you must compile in a separate step, and then call that
   * compiled function.
   */
  function render(template, view, partials) {
    return compile(template)(view, partials);
  }

})(Mustache);
/*!
  * Reqwest! A general purpose XHR connection manager
  * (c) Dustin Diaz 2011
  * https://github.com/ded/reqwest
  * license MIT
  */
!function(a,b){typeof module!="undefined"?module.exports=b():typeof define=="function"&&define.amd?define(a,b):this[a]=b()}("reqwest",function(){function handleReadyState(a,b,c){return function(){a&&a[readyState]==4&&(twoHundo.test(a.status)?b(a):c(a))}}function setHeaders(a,b){var c=b.headers||{},d;c.Accept=c.Accept||defaultHeaders.accept[b.type]||defaultHeaders.accept["*"],!b.crossOrigin&&!c[requestedWith]&&(c[requestedWith]=defaultHeaders.requestedWith),c[contentType]||(c[contentType]=b.contentType||defaultHeaders.contentType);for(d in c)c.hasOwnProperty(d)&&a.setRequestHeader(d,c[d])}function generalCallback(a){lastValue=a}function urlappend(a,b){return a+(/\?/.test(a)?"&":"?")+b}function handleJsonp(a,b,c,d){var e=uniqid++,f=a.jsonpCallback||"callback",g=a.jsonpCallbackName||"reqwest_"+e,h=new RegExp("((^|\\?|&)"+f+")=([^&]+)"),i=d.match(h),j=doc.createElement("script"),k=0;i?i[3]==="?"?d=d.replace(h,"$1="+g):g=i[3]:d=urlappend(d,f+"="+g),win[g]=generalCallback,j.type="text/javascript",j.src=d,j.async=!0,typeof j.onreadystatechange!="undefined"&&(j.event="onclick",j.htmlFor=j.id="_reqwest_"+e),j.onload=j.onreadystatechange=function(){if(j[readyState]&&j[readyState]!=="complete"&&j[readyState]!=="loaded"||k)return!1;j.onload=j.onreadystatechange=null,j.onclick&&j.onclick(),a.success&&a.success(lastValue),lastValue=undefined,head.removeChild(j),k=1},head.appendChild(j)}function getRequest(a,b,c){var d=(a.method||"GET").toUpperCase(),e=typeof a=="string"?a:a.url,f=a.processData!==!1&&a.data&&typeof a.data!="string"?reqwest.toQueryString(a.data):a.data||null,g;return(a.type=="jsonp"||d=="GET")&&f&&(e=urlappend(e,f),f=null),a.type=="jsonp"?handleJsonp(a,b,c,e):(g=xhr(),g.open(d,e,!0),setHeaders(g,a),g.onreadystatechange=handleReadyState(g,b,c),a.before&&a.before(g),g.send(f),g)}function Reqwest(a,b){this.o=a,this.fn=b,init.apply(this,arguments)}function setType(a){var b=a.match(/\.(json|jsonp|html|xml)(\?|$)/);return b?b[1]:"js"}function init(o,fn){function complete(a){o.timeout&&clearTimeout(self.timeout),self.timeout=null,o.complete&&o.complete(a)}function success(resp){var r=resp.responseText;if(r)switch(type){case"json":try{resp=win.JSON?win.JSON.parse(r):eval("("+r+")")}catch(err){return error(resp,"Could not parse JSON in response",err)}break;case"js":resp=eval(r);break;case"html":resp=r}fn(resp),o.success&&o.success(resp),complete(resp)}function error(a,b,c){o.error&&o.error(a,b,c),complete(a)}this.url=typeof o=="string"?o:o.url,this.timeout=null;var type=o.type||setType(this.url),self=this;fn=fn||function(){},o.timeout&&(this.timeout=setTimeout(function(){self.abort()},o.timeout)),this.request=getRequest(o,success,error)}function reqwest(a,b){return new Reqwest(a,b)}function normalize(a){return a?a.replace(/\r?\n/g,"\r\n"):""}function serial(a,b){var c=a.name,d=a.tagName.toLowerCase(),e=function(a){a&&!a.disabled&&b(c,normalize(a.attributes.value&&a.attributes.value.specified?a.value:a.text))};if(a.disabled||!c)return;switch(d){case"input":if(!/reset|button|image|file/i.test(a.type)){var f=/checkbox/i.test(a.type),g=/radio/i.test(a.type),h=a.value;(!f&&!g||a.checked)&&b(c,normalize(f&&h===""?"on":h))}break;case"textarea":b(c,normalize(a.value));break;case"select":if(a.type.toLowerCase()==="select-one")e(a.selectedIndex>=0?a.options[a.selectedIndex]:null);else for(var i=0;a.length&&i<a.length;i++)a.options[i].selected&&e(a.options[i])}}function eachFormElement(){var a=this,b,c,d,e=function(b,c){for(var e=0;e<c.length;e++){var f=b[byTag](c[e]);for(d=0;d<f.length;d++)serial(f[d],a)}};for(c=0;c<arguments.length;c++)b=arguments[c],/input|select|textarea/i.test(b.tagName)&&serial(b,a),e(b,["input","select","textarea"])}function serializeQueryString(){return reqwest.toQueryString(reqwest.serializeArray.apply(null,arguments))}function serializeHash(){var a={};return eachFormElement.apply(function(b,c){b in a?(a[b]&&!isArray(a[b])&&(a[b]=[a[b]]),a[b].push(c)):a[b]=c},arguments),a}var win=window,doc=document,twoHundo=/^20\d$/,byTag="getElementsByTagName",readyState="readyState",contentType="Content-Type",requestedWith="X-Requested-With",head=doc[byTag]("head")[0],uniqid=0,lastValue,xmlHttpRequest="XMLHttpRequest",isArray=typeof Array.isArray=="function"?Array.isArray:function(a){return a instanceof Array},defaultHeaders={contentType:"application/x-www-form-urlencoded",accept:{"*":"text/javascript, text/html, application/xml, text/xml, */*",xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript",js:"application/javascript, text/javascript"},requestedWith:xmlHttpRequest},xhr=win[xmlHttpRequest]?function(){return new XMLHttpRequest}:function(){return new ActiveXObject("Microsoft.XMLHTTP")};return Reqwest.prototype={abort:function(){this.request.abort()},retry:function(){init.call(this,this.o,this.fn)}},reqwest.serializeArray=function(){var a=[];return eachFormElement.apply(function(b,c){a.push({name:b,value:c})},arguments),a},reqwest.serialize=function(){if(arguments.length===0)return"";var a,b,c=Array.prototype.slice.call(arguments,0);return a=c.pop(),a&&a.nodeType&&c.push(a)&&(a=null),a&&(a=a.type),a=="map"?b=serializeHash:a=="array"?b=reqwest.serializeArray:b=serializeQueryString,b.apply(null,c)},reqwest.toQueryString=function(a){var b="",c,d=encodeURIComponent,e=function(a,c){b+=d(a)+"="+d(c)+"&"};if(isArray(a))for(c=0;a&&c<a.length;c++)e(a[c].name,a[c].value);else for(var f in a){if(!Object.hasOwnProperty.call(a,f))continue;var g=a[f];if(isArray(g))for(c=0;c<g.length;c++)e(f,g[c]);else e(f,a[f])}return b.replace(/&$/,"").replace(/%20/g,"+")},reqwest.compat=function(a,b){return a&&(a.type&&(a.method=a.type)&&delete a.type,a.dataType&&(a.type=a.dataType),a.jsonpCallback&&(a.jsonpCallbackName=a.jsonpCallback)&&delete a.jsonpCallback,a.jsonp&&(a.jsonpCallback=a.jsonp)),new Reqwest(a,b)},reqwest});wax = wax || {};

// Attribution
// -----------
wax.attribution = function() {
    var a = {};

    var container = document.createElement('div');
    container.className = 'map-attribution';

    a.content = function(x) {
        if (typeof x === 'undefined') return container.innerHTML;
        container.innerHTML = wax.u.sanitize(x);
        return this;
    };

    a.element = function() {
        return container;
    };

    a.init = function() {
        return this;
    };

    return a;
};
wax = wax || {};

// Attribution
// -----------
wax.bwdetect = function(options, callback) {
    var detector = {},
        threshold = options.threshold || 400,
        // test image: 30.29KB
        testImage = 'http://a.tiles.mapbox.com/mapbox/1.0.0/blue-marble-topo-bathy-jul/0/0/0.png?preventcache=' + (+new Date()),
        // High-bandwidth assumed
        // 1: high bandwidth (.png, .jpg)
        // 0: low bandwidth (.png128, .jpg70)
        bw = 1,
        // Alternative versions
        auto = options.auto === undefined ? true : options.auto;

    function bwTest() {
        wax.bw = -1;
        var im = new Image();
        im.src = testImage;
        var first = true;
        var timeout = setTimeout(function() {
            if (first && wax.bw == -1) {
                detector.bw(0);
                first = false;
            }
        }, threshold);
        im.onload = function() {
            if (first && wax.bw == -1) {
                clearTimeout(timeout);
                detector.bw(1);
                first = false;
            }
        };
    }

    detector.bw = function(x) {
        if (!arguments.length) return bw;
        var oldBw = bw;
        if (wax.bwlisteners && wax.bwlisteners.length) (function () {
            listeners = wax.bwlisteners;
            wax.bwlisteners = [];
            for (i = 0; i < listeners; i++) {
                listeners[i](x);
            }
        })();
        wax.bw = x;

        if (bw != (bw = x)) callback(x);
    };

    detector.add = function() {
        if (auto) bwTest();
        return this;
    };

    if (wax.bw == -1) {
      wax.bwlisteners = wax.bwlisteners || [];
      wax.bwlisteners.push(detector.bw);
    } else if (wax.bw !== undefined) {
        detector.bw(wax.bw);
    } else {
        detector.add();
    }
    return detector;
};
// Formatter
// ---------
//
// This code is no longer the recommended code path for Wax -
// see `template.js`, a safe implementation of Mustache templates.
wax.formatter = function(x) {
    var formatter = {},
        f;

    // Prevent against just any input being used.
    if (x && typeof x === 'string') {
        try {
            // Ugly, dangerous use of eval.
            eval('f = ' + x);
        } catch (e) {
            if (console) console.log(e);
        }
    } else if (x && typeof x === 'function') {
        f = x;
    } else {
        f = function() {};
    }

    // Wrap the given formatter function in order to
    // catch exceptions that it may throw.
    formatter.format = function(options, data) {
        try {
            return wax.u.sanitize(f(options, data));
        } catch (e) {
            if (console) console.log(e);
        }
    };

    return formatter;
};
// GridInstance
// ------------
// GridInstances are queryable, fully-formed
// objects for acquiring features from events.
//
// This code ignores format of 1.1-1.2
wax.gi = function(grid_tile, options) {
    options = options || {};
    // resolution is the grid-elements-per-pixel ratio of gridded data.
    // The size of a tile element. For now we expect tiles to be squares.
    var instance = {},
        resolution = options.resolution || 4,
        tileSize = options.tileSize || 256;

    // Resolve the UTF-8 encoding stored in grids to simple
    // number values.
    // See the [utfgrid spec](https://github.com/mapbox/utfgrid-spec)
    // for details.
    function resolveCode(key) {
        if (key >= 93) key--;
        if (key >= 35) key--;
        key -= 32;
        return key;
    }

    instance.grid_tile = function() {
        return grid_tile;
    };

    instance.getKey = function(x, y) {
        if (!(grid_tile && grid_tile.grid)) return;
        if ((y < 0) || (x < 0)) return;
        if ((Math.floor(y) >= tileSize) ||
            (Math.floor(x) >= tileSize)) return;
        // Find the key in the grid. The above calls should ensure that
        // the grid's array is large enough to make this work.
        return resolveCode(grid_tile.grid[
           Math.floor((y) / resolution)
        ].charCodeAt(
           Math.floor((x) / resolution)
        ));
    };

    // Lower-level than tileFeature - has nothing to do
    // with the DOM. Takes a px offset from 0, 0 of a grid.
    instance.gridFeature = function(x, y) {
        // Find the key in the grid. The above calls should ensure that
        // the grid's array is large enough to make this work.
        var key = this.getKey(x, y),
            keys = grid_tile.keys;

        if (keys &&
            keys[key] &&
            grid_tile.data[keys[key]]) {
            return grid_tile.data[keys[key]];
        }
    };

    // Get a feature:
    // * `x` and `y`: the screen coordinates of an event
    // * `tile_element`: a DOM element of a tile, from which we can get an offset.
    instance.tileFeature = function(x, y, tile_element) {
        if (!grid_tile) return;
        // IE problem here - though recoverable, for whatever reason
        var offset = wax.u.offset(tile_element);
            feature = this.gridFeature(x - offset.left, y - offset.top);
        return feature;
    };

    return instance;
};
// GridManager
// -----------
// Generally one GridManager will be used per map.
//
// It takes one options object, which current accepts a single option:
// `resolution` determines the number of pixels per grid element in the grid.
// The default is 4.
wax.gm = function() {

    var resolution = 4,
        grid_tiles = {},
        manager = {},
        tilejson,
        formatter;

    var gridUrl = function(url) {
        if (url) {
            return url.replace(/(\.png|\.jpg|\.jpeg)(\d*)/, '.grid.json');
        }
    };

    function templatedGridUrl(template) {
        if (typeof template === 'string') template = [template];
        return function templatedGridFinder(url) {
            if (!url) return;
            var rx = new RegExp('/(\\d+)\\/(\\d+)\\/(\\d+)\\.[\\w\\._]+');
            var xyz = rx.exec(url);
            if (!xyz) return;
            return template[parseInt(xyz[2], 10) % template.length]
                .replace(/\{z\}/g, xyz[1])
                .replace(/\{x\}/g, xyz[2])
                .replace(/\{y\}/g, xyz[3]);
        };
    }

    manager.formatter = function(x) {
        if (!arguments.length) return formatter;
        formatter =  wax.formatter(x);
        return manager;
    };

    manager.template = function(x) {
        if (!arguments.length) return formatter;
        formatter = wax.template(x);
        return manager;
    };

    manager.gridUrl = function(x) {
        // Getter-setter
        if (!arguments.length) return gridUrl;

        // Handle tilesets that don't support grids
        if (!x) {
            gridUrl = function() { return null; };
        } else {
            gridUrl = typeof x === 'function' ?
                x : templatedGridUrl(x);
        }
        return manager;
    };

    manager.getGrid = function(url, callback) {
        var gurl = gridUrl(url);
        if (!formatter || !gurl) return callback(null, null);

        wax.request.get(gurl, function(err, t) {
            if (err) return callback(err, null);
            callback(null, wax.gi(t, {
                formatter: formatter,
                resolution: resolution
            }));
        });
        return manager;
    };

    manager.tilejson = function(x) {
        if (!arguments.length) return tilejson;
        // prefer templates over formatters
        if (x.template) {
            manager.template(x.template);
        } else if (x.formatter) {
            manager.formatter(x.formatter);
        } else {
            // In this case, we cannot support grids
            formatter = undefined;
        }
        manager.gridUrl(x.grids);
        if (x.resolution) resolution = x.resolution;
        tilejson = x;
        return manager;
    };

    return manager;
};
wax = wax || {};

// Hash
// ----
wax.hash = function(options) {
    options = options || {};

    var s0, // old hash
        hash = {},
        lat = 90 - 1e-8;  // allowable latitude range

    function getState() {
        return location.hash.substring(1);
    }

    function pushState(state) {
        var l = window.location;
        l.replace(l.toString().replace((l.hash || /$/), '#' + state));
    }

    function parseHash(s) {
        var args = s.split('/');
        for (var i = 0; i < args.length; i++) {
            args[i] = Number(args[i]);
            if (isNaN(args[i])) return true;
        }
        if (args.length < 3) {
            // replace bogus hash
            return true;
        } else if (args.length == 3) {
            options.setCenterZoom(args);
        }
    }

    function move() {
        var s1 = options.getCenterZoom();
        if (s0 !== s1) {
            s0 = s1;
            // don't recenter the map!
            pushState(s0);
        }
    }

    function stateChange(state) {
        // ignore spurious hashchange events
        if (state === s0) return;
        if (parseHash(s0 = state)) {
            // replace bogus hash
            move();
        }
    }

    var _move = wax.u.throttle(move, 500);

    hash.add = function() {
        stateChange(getState());
        options.bindChange(_move);
        return hash;
    };

    hash.remove = function() {
        options.unbindChange(_move);
        return hash;
    };

    return hash;
};
wax = wax || {};

wax.interaction = function() {
    var gm = wax.gm(),
        interaction = {},
        _downLock = false,
        _clickTimeout = null,
        // Active feature
        // Down event
        _d,
        // Touch tolerance
        tol = 4,
        grid,
        attach,
        detach,
        parent,
        map,
        tileGrid;

    var defaultEvents = {
        mousemove: onMove,
        touchstart: onDown,
        mousedown: onDown
    };

    var touchEnds = {
        touchend: onUp,
        touchmove: onUp,
        touchcancel: touchCancel
    };

    // Abstract getTile method. Depends on a tilegrid with
    // grid[ [x, y, tile] ] structure.
    function getTile(e) {
        var g = grid();
        for (var i = 0; i < g.length; i++) {
            if (e)
                if ((g[i][0] < e.y) &&
                   ((g[i][0] + 256) > e.y) &&
                    (g[i][1] < e.x) &&
                   ((g[i][1] + 256) > e.x)) return g[i][2];
        }
        return false;
    }

    // Clear the double-click timeout to prevent double-clicks from
    // triggering popups.
    function killTimeout() {
        if (_clickTimeout) {
            window.clearTimeout(_clickTimeout);
            _clickTimeout = null;
            return true;
        } else {
            return false;
        }
    }

    function onMove(e) {
        // If the user is actually dragging the map, exit early
        // to avoid performance hits.
        if (_downLock) return;

        var pos = wax.u.eventoffset(e);

        interaction.screen_feature(pos, function(feature) {
            if (feature) {
                bean.fire(interaction, 'on', {
                    parent: parent(),
                    data: feature,
                    formatter: gm.formatter().format,
                    e: e
                });
            } else {
                bean.fire(interaction, 'off');
            }
        });
    }

    // A handler for 'down' events - which means `mousedown` and `touchstart`
    function onDown(e) {

        // Prevent interaction offset calculations happening while
        // the user is dragging the map.
        //
        // Store this event so that we can compare it to the
        // up event
        _downLock = true;
        _d = wax.u.eventoffset(e);
        if (e.type === 'mousedown') {
            bean.add(document.body, 'click', onUp);
            // track mouse up to remove lockDown when the drags end
            bean.add(document.body, 'mouseup', dragEnd);

        // Only track single-touches. Double-touches will not affect this
        // control
        } else if (e.type === 'touchstart' && e.touches.length === 1) {
            // Don't make the user click close if they hit another tooltip
            bean.fire(interaction, 'off');
            // Touch moves invalidate touches
            bean.add(parent(), touchEnds);
        }
    }

    function dragEnd() {
        _downLock = false;
    }

    function touchCancel() {
        bean.remove(parent(), touchEnds);
        _downLock = false;
    }

    function onUp(e) {
        var evt = {},
            pos = wax.u.eventoffset(e);
        _downLock = false;

        // TODO: refine
        for (var key in e) {
          evt[key] = e[key];
        }

        bean.remove(document.body, 'mouseup', onUp);
        bean.remove(parent(), touchEnds);

        if (e.type === 'touchend') {
            // If this was a touch and it survived, there's no need to avoid a double-tap
            // but also wax.u.eventoffset will have failed, since this touch
            // event doesn't have coordinates
            interaction.click(e, _d);
        } else if (Math.round(pos.y / tol) === Math.round(_d.y / tol) &&
            Math.round(pos.x / tol) === Math.round(_d.x / tol)) {
            // Contain the event data in a closure.
            // Ignore double-clicks by ignoring clicks within 300ms of
            // each other.
            if(!_clickTimeout) {
              _clickTimeout = window.setTimeout(function() {
                  _clickTimeout = null;
                  interaction.click(evt, pos);
              }, 300);
            } else {
              killTimeout();
            }
        }
        return onUp;
    }

    // Handle a click event. Takes a second
    interaction.click = function(e, pos) {
        interaction.screen_feature(pos, function(feature) {
            if (feature) bean.fire(interaction, 'on', {
                parent: parent(),
                data: feature,
                formatter: gm.formatter().format,
                e: e
            });
        });
    };

    interaction.screen_feature = function(pos, callback) {
        var tile = getTile(pos);
        if (!tile) callback(null);
        gm.getGrid(tile.src, function(err, g) {
            if (err || !g) return callback(null);
            var feature = g.tileFeature(pos.x, pos.y, tile);
            callback(feature);
        });
    };

    // set an attach function that should be
    // called when maps are set
    interaction.attach = function(x) {
        if (!arguments.length) return attach;
        attach = x;
        return interaction;
    };

    interaction.detach = function(x) {
        if (!arguments.length) return detach;
        detach = x;
        return interaction;
    };

    // Attach listeners to the map
    interaction.map = function(x) {
        if (!arguments.length) return map;
        map = x;
        if (attach) attach(map);
        bean.add(parent(), defaultEvents);
        bean.add(parent(), 'touchstart', onDown);
        return interaction;
    };

    // set a grid getter for this control
    interaction.grid = function(x) {
        if (!arguments.length) return grid;
        grid = x;
        return interaction;
    };

    // detach this and its events from the map cleanly
    interaction.remove = function(x) {
        if (detach) detach(map);
        bean.remove(parent(), defaultEvents);
        bean.fire(interaction, 'remove');
        return interaction;
    };

    // get or set a tilejson chunk of json
    interaction.tilejson = function(x) {
        if (!arguments.length) return gm.tilejson();
        gm.tilejson(x);
        return interaction;
    };

    // return the formatter, which has an exposed .format
    // function
    interaction.formatter = function() {
        return gm.formatter();
    };

    // ev can be 'on', 'off', fn is the handler
    interaction.on = function(ev, fn) {
        bean.add(interaction, ev, fn);
        return interaction;
    };

    // ev can be 'on', 'off', fn is the handler
    interaction.off = function(ev, fn) {
        bean.remove(interaction, ev, fn);
        return interaction;
    };

    // Return or set the gridmanager implementation
    interaction.gridmanager = function(x) {
        if (!arguments.length) return gm;
        gm = x;
        return interaction;
    };

    // parent should be a function that returns
    // the parent element of the map
    interaction.parent  = function(x) {
        parent = x;
        return interaction;
    };

    return interaction;
};
// Wax Legend
// ----------

// Wax header
var wax = wax || {};

wax.legend = function() {
    var element,
        legend = {},
        container;

    legend.element = function() {
        return container;
    };

    legend.content = function(content) {
        if (!arguments.length) return element.innerHTML;

        element.innerHTML = wax.u.sanitize(content);
        element.style.display = 'block';
        if (element.innerHTML === '') {
            element.style.display = 'none';
        }

        return legend;
    };

    legend.add = function() {
        container = document.createElement('div');
        container.className = 'map-legends wax-legends';

        element = container.appendChild(document.createElement('div'));
        element.className = 'map-legend wax-legend';
        element.style.display = 'none';
        return legend;
    };

    return legend.add();
};
var wax = wax || {};

wax.location = function() {

    var t = {};

    function on(o) {
        if ((o.e.type === 'mousemove' || !o.e.type)) {
            return;
        } else {
            var loc = o.formatter({ format: 'location' }, o.data);
            if (loc) {
                window.location.href = loc;
            }
        }
    }

    t.events = function() {
        return {
            on: on
        };
    };

    return t;

};
var wax = wax || {};
wax.movetip = {};

wax.movetip = function() {
    var popped = false,
        t = {},
        _tooltipOffset,
        _contextOffset,
        tooltip,
        parent;

    function moveTooltip(e) {
       var eo = wax.u.eventoffset(e);
       // faux-positioning
       if ((_tooltipOffset.height + eo.y) >
           (_contextOffset.top + _contextOffset.height) &&
           (_contextOffset.height > _tooltipOffset.height)) {
           eo.y -= _tooltipOffset.height;
           tooltip.className += ' flip-y';
       }

       // faux-positioning
       if ((_tooltipOffset.width + eo.x) >
           (_contextOffset.left + _contextOffset.width)) {
           eo.x -= _tooltipOffset.width;
           tooltip.className += ' flip-x';
       }

       tooltip.style.left = eo.x + 'px';
       tooltip.style.top = eo.y + 'px';
    }

    // Get the active tooltip for a layer or create a new one if no tooltip exists.
    // Hide any tooltips on layers underneath this one.
    function getTooltip(feature) {
        var tooltip = document.createElement('div');
        tooltip.className = 'map-tooltip map-tooltip-0';
        tooltip.innerHTML = feature;
        return tooltip;
    }

    // Hide a given tooltip.
    function hide() {
        if (tooltip) {
          tooltip.parentNode.removeChild(tooltip);
          tooltip = null;
        }
    }

    function on(o) {
        var content;
        if (popped) return;
        if ((o.e.type === 'mousemove' || !o.e.type)) {
            content = o.formatter({ format: 'teaser' }, o.data);
            if (!content) return;
            hide();
            parent.style.cursor = 'pointer';
            tooltip = document.body.appendChild(getTooltip(content));
        } else {
            content = o.formatter({ format: 'teaser' }, o.data);
            if (!content) return;
            hide();
            var tt = document.body.appendChild(getTooltip(content));
            tt.className += ' map-popup';

            var close = tt.appendChild(document.createElement('a'));
            close.href = '#close';
            close.className = 'close';
            close.innerHTML = 'Close';

            popped = true;

            tooltip = tt;

            _tooltipOffset = wax.u.offset(tooltip);
            _contextOffset = wax.u.offset(parent);
            moveTooltip(o.e);

            bean.add(close, 'click touchend', function closeClick(e) {
                e.stop();
                hide();
                popped = false;
            });
        }
        if (tooltip) {
          _tooltipOffset = wax.u.offset(tooltip);
          _contextOffset = wax.u.offset(parent);
          moveTooltip(o.e);
        }

    }

    function off() {
        parent.style.cursor = 'default';
        if (!popped) hide();
    }

    t.parent = function(x) {
        if (!arguments.length) return parent;
        parent = x;
        return t;
    };

    t.events = function() {
        return {
            on: on,
            off: off
        };
    };

    return t;
};

// Wax GridUtil
// ------------

// Wax header
var wax = wax || {};

// Request
// -------
// Request data cache. `callback(data)` where `data` is the response data.
wax.request = {
    cache: {},
    locks: {},
    promises: {},
    get: function(url, callback) {
        // Cache hit.
        if (this.cache[url]) {
            return callback(this.cache[url][0], this.cache[url][1]);
        // Cache miss.
        } else {
            this.promises[url] = this.promises[url] || [];
            this.promises[url].push(callback);
            // Lock hit.
            if (this.locks[url]) return;
            // Request.
            var that = this;
            this.locks[url] = true;
            reqwest({
                url: url + (~url.indexOf('?') ? '&' : '?') + 'callback=grid',
                type: 'jsonp',
                jsonpCallback: 'callback',
                success: function(data) {
                    that.locks[url] = false;
                    that.cache[url] = [null, data];
                    for (var i = 0; i < that.promises[url].length; i++) {
                        that.promises[url][i](that.cache[url][0], that.cache[url][1]);
                    }
                },
                error: function(err) {
                    that.locks[url] = false;
                    that.cache[url] = [err, null];
                    for (var i = 0; i < that.promises[url].length; i++) {
                        that.promises[url][i](that.cache[url][0], that.cache[url][1]);
                    }
                }
            });
        }
    }
};
// Templating
// ---------
wax.template = function(x) {
    var template = {};

    // Clone the data object such that the '__[format]__' key is only
    // set for this instance of templating.
    template.format = function(options, data) {
        var clone = {};
        for (var key in data) {
            clone[key] = data[key];
        }
        if (options.format) {
            clone['__' + options.format + '__'] = true;
        }
        return wax.u.sanitize(Mustache.to_html(x, clone));
    };

    return template;
};
if (!wax) var wax = {};

// A wrapper for reqwest jsonp to easily load TileJSON from a URL.
wax.tilejson = function(url, callback) {
    reqwest({
        url: url + (~url.indexOf('?') ? '&' : '?') + 'callback=grid',
        type: 'jsonp',
        jsonpCallback: 'callback',
        success: callback,
        error: callback
    });
};
var wax = wax || {};
wax.tooltip = {};

wax.tooltip = function() {
    var popped = false,
        animate = false,
        t = {},
        tooltips = [],
        _currentContent,
        transitionEvent,
        parent;

    if (document.body.style['-webkit-transition'] !== undefined) {
        transitionEvent = 'webkitTransitionEnd';
    } else if (document.body.style.MozTransition !== undefined) {
        transitionEvent = 'transitionend';
    }

    // Get the active tooltip for a layer or create a new one if no tooltip exists.
    // Hide any tooltips on layers underneath this one.
    function getTooltip(feature) {
        var tooltip = document.createElement('div');
        tooltip.className = 'map-tooltip map-tooltip-0 wax-tooltip';
        tooltip.innerHTML = feature;
        return tooltip;
    }

    function remove() {
        if (this.parentNode) this.parentNode.removeChild(this);
    }

    // Hide a given tooltip.
    function hide() {
        var _ct;
        while (_ct = tooltips.pop()) {
            if (animate && transitionEvent) {
                // This code assumes that transform-supporting browsers
                // also support proper events. IE9 does both.
                  bean.add(_ct, transitionEvent, remove);
                  _ct.className += ' map-fade';
            } else {
                if (_ct.parentNode) _ct.parentNode.removeChild(_ct);
            }
        }
    }

    function on(o) {
        var content;
        if (o.e.type === 'mousemove' || !o.e.type) {
            if (!popped) {
                content = o.content || o.formatter({ format: 'teaser' }, o.data);
                if (!content || content == _currentContent) return;
                hide();
                parent.style.cursor = 'pointer';
                tooltips.push(parent.appendChild(getTooltip(content)));
                _currentContent = content;
            }
        } else {
            content = o.content || o.formatter({ format: 'full' }, o.data);
            if (!content) {
              if (o.e.type && o.e.type.match(/touch/)) {
                // fallback possible
                content = o.content || o.formatter({ format: 'teaser' }, o.data);
              }
              // but if that fails, return just the same.
              if (!content) return;
            }
            hide();
            parent.style.cursor = 'pointer';
            var tt = parent.appendChild(getTooltip(content));
            tt.className += ' map-popup wax-popup';

            var close = tt.appendChild(document.createElement('a'));
            close.href = '#close';
            close.className = 'close';
            close.innerHTML = 'Close';
            popped = true;

            tooltips.push(tt);

            bean.add(close, 'touchstart mousedown', function(e) {
                e.stop();
            });

            bean.add(close, 'click touchend', function closeClick(e) {
                e.stop();
                hide();
                popped = false;
            });
        }
    }

    function off() {
        parent.style.cursor = 'default';
        _currentContent = null;
        if (!popped) hide();
    }

    t.parent = function(x) {
        if (!arguments.length) return parent;
        parent = x;
        return t;
    };

    t.animate = function(x) {
        if (!arguments.length) return animate;
        animate = x;
        return t;
    };

    t.events = function() {
        return {
            on: on,
            off: off
        };
    };

    return t;
};
var wax = wax || {};

// Utils are extracted from other libraries or
// written from scratch to plug holes in browser compatibility.
wax.u = {
    // From Bonzo
    offset: function(el) {
        // TODO: window margins
        //
        // Okay, so fall back to styles if offsetWidth and height are botched
        // by Firefox.
        var width = el.offsetWidth || parseInt(el.style.width, 10),
            height = el.offsetHeight || parseInt(el.style.height, 10),
            doc_body = document.body,
            top = 0,
            left = 0;

        var calculateOffset = function(el) {
            if (el === doc_body || el === document.documentElement) return;
            top += el.offsetTop;
            left += el.offsetLeft;

            var style = el.style.transform ||
                el.style.WebkitTransform ||
                el.style.OTransform ||
                el.style.MozTransform ||
                el.style.msTransform;

            if (style) {
                var match;
                if (match = style.match(/translate\((.+)px, (.+)px\)/)) {
                    top += parseInt(match[2], 10);
                    left += parseInt(match[1], 10);
                } else if (match = style.match(/translate3d\((.+)px, (.+)px, (.+)px\)/)) {
                    top += parseInt(match[2], 10);
                    left += parseInt(match[1], 10);
                } else if (match = style.match(/matrix3d\(([\-\d,\s]+)\)/)) {
                    var pts = match[1].split(',');
                    top += parseInt(pts[13], 10);
                    left += parseInt(pts[12], 10);
                } else if (match = style.match(/matrix\(.+, .+, .+, .+, (.+), (.+)\)/)) {
                    top += parseInt(match[2], 10);
                    left += parseInt(match[1], 10);
                }
            }
        };

        // from jquery, offset.js
        if ( typeof el.getBoundingClientRect !== "undefined" ) {
          var body = document.body;
          var doc = el.ownerDocument.documentElement;
          var clientTop  = document.clientTop  || body.clientTop  || 0;
          var clientLeft = document.clientLeft || body.clientLeft || 0;
          var scrollTop  = window.pageYOffset || doc.scrollTop;
          var scrollLeft = window.pageXOffset || doc.scrollLeft;

          var box = el.getBoundingClientRect();
          top = box.top + scrollTop  - clientTop;
          left = box.left + scrollLeft - clientLeft;

        } else {
          calculateOffset(el);
          try {
              while (el = el.offsetParent) { calculateOffset(el); }
          } catch(e) {
              // Hello, internet explorer.
          }
        }

        // Offsets from the body
        top += doc_body.offsetTop;
        left += doc_body.offsetLeft;
        // Offsets from the HTML element
        top += doc_body.parentNode.offsetTop;
        left += doc_body.parentNode.offsetLeft;

        // Firefox and other weirdos. Similar technique to jQuery's
        // `doesNotIncludeMarginInBodyOffset`.
        var htmlComputed = document.defaultView ?
            window.getComputedStyle(doc_body.parentNode, null) :
            doc_body.parentNode.currentStyle;
        if (doc_body.parentNode.offsetTop !==
            parseInt(htmlComputed.marginTop, 10) &&
            !isNaN(parseInt(htmlComputed.marginTop, 10))) {
            top += parseInt(htmlComputed.marginTop, 10);
            left += parseInt(htmlComputed.marginLeft, 10);
        }

        return {
            top: top,
            left: left,
            height: height,
            width: width
        };
    },

    '$': function(x) {
        return (typeof x === 'string') ?
            document.getElementById(x) :
            x;
    },

    // From quirksmode: normalize the offset of an event from the top-left
    // of the page.
    eventoffset: function(e) {
        var posx = 0;
        var posy = 0;
        if (!e) { e = window.event; }
        if (e.pageX || e.pageY) {
            // Good browsers
            return {
                x: e.pageX,
                y: e.pageY
            };
        } else if (e.clientX || e.clientY) {
            // Internet Explorer
            return {
                x: e.clientX,
                y: e.clientY
            };
        } else if (e.touches && e.touches.length === 1) {
            // Touch browsers
            return {
                x: e.touches[0].pageX,
                y: e.touches[0].pageY
            };
        }
    },

    // Ripped from underscore.js
    // Internal function used to implement `_.throttle` and `_.debounce`.
    limit: function(func, wait, debounce) {
        var timeout;
        return function() {
            var context = this, args = arguments;
            var throttler = function() {
                timeout = null;
                func.apply(context, args);
            };
            if (debounce) clearTimeout(timeout);
            if (debounce || !timeout) timeout = setTimeout(throttler, wait);
        };
    },

    // Returns a function, that, when invoked, will only be triggered at most once
    // during a given window of time.
    throttle: function(func, wait) {
        return this.limit(func, wait, false);
    },

    sanitize: function(content) {
        if (!content) return '';

        function urlX(url) {
            // Data URIs are subject to a bug in Firefox
            // https://bugzilla.mozilla.org/show_bug.cgi?id=255107
            // which let them be a vector. But WebKit does 'the right thing'
            // or at least 'something' about this situation, so we'll tolerate
            // them.
            if (/^(https?:\/\/|data:image)/.test(url)) {
                return url;
            }
        }

        function idX(id) { return id; }

        return html_sanitize(content, urlX, idX);
    }
};
wax = wax || {};
wax.leaf = wax.leaf || {};

wax.leaf.hash = function(map) {
    return wax.hash({
        getCenterZoom: function () {
            var center = map.getCenter(),
                zoom = map.getZoom(),
                precision = Math.max(
                    0,
                    Math.ceil(Math.log(zoom) / Math.LN2));

            return [
                zoom,
                center.lat.toFixed(precision),
                center.lng.toFixed(precision)
            ].join('/');
        },

        setCenterZoom: function (args) {
            map.setView(new L.LatLng(args[1], args[2]), args[0]);
        },

        bindChange: function (fn) {
            map.on('moveend', fn);
        },

        unbindChange: function (fn) {
            map.off('moveend', fn);
        }
    });
};
wax = wax || {};
wax.leaf = wax.leaf || {};

wax.leaf.interaction = function() {
    var dirty = false, _grid, map;

    function setdirty() { dirty = true; }

    function grid() {
        // TODO: don't build for tiles outside of viewport
        // Touch interaction leads to intermediate
        //var zoomLayer = map.createOrGetLayer(Math.round(map.getZoom())); //?what is this doing?
        // Calculate a tile grid and cache it, by using the `.tiles`
        // element on this map.
        if (!dirty && _grid) {
            return _grid;
        } else {
            return (_grid = (function(layers) {
                var o = [];
                for (var layerId in layers) {
                    // This only supports tiled layers
                    if (layers[layerId]._tiles) {
                        for (var tile in layers[layerId]._tiles) {
                            var _tile = layers[layerId]._tiles[tile];
                            // avoid adding tiles without src, grid url can't be found for them
                            if(_tile.src) {
                              var offset = wax.u.offset(_tile);
                              o.push([offset.top, offset.left, _tile]);
                            }
                        }
                    }
                }
                return o;
            })(map._layers));
        }
    }

    function attach(x) {
        if (!arguments.length) return map;
        map = x;
        var l = ['moveend'];
        for (var i = 0; i < l.length; i++) {
            map.on(l[i], setdirty);
        }
    }

    function detach(x) {
        if (!arguments.length) return map;
        map = x;
        var l = ['moveend'];
        for (var i = 0; i < l.length; i++) {
            map.off(l[i], setdirty);
        }
    }

    return wax.interaction()
        .attach(attach)
        .detach(detach)
        .parent(function() {
          return map._container;
        })
        .grid(grid);
};
wax = wax || {};
wax.leaf = wax.leaf || {};

// Legend Control
// --------------
// The Leaflet version of this control is a very, very
// light wrapper around the `/lib` code for legends.
wax.leaf.legend = function(map, tilejson) {
    tilejson = tilejson || {};
    var l, // parent legend
        legend = {};

    legend.add = function() {
        l = wax.legend()
            .content(tilejson.legend || '');
        return this;
    };

    legend.content = function(x) {
        if (x) l.content(x.legend || '');
    };

    legend.element = function() {
        return l.element();
    };

    legend.appendTo = function(elem) {
        wax.u.$(elem).appendChild(l.element());
        return this;
    };

    return legend.add();
};
wax = wax || {};
wax.leaf = wax.leaf || {};

wax.leaf.connector = L.TileLayer.extend({
    initialize: function(options) {
        options = options || {};
        options.minZoom = options.minzoom || 0;
        options.maxZoom = options.maxzoom || 22;
        L.TileLayer.prototype.initialize.call(this, options.tiles[0], options);
    }
});