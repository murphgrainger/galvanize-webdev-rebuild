"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["index.html","8e29a8d128f2201669588ae4902ce715"],["static/css/main.55ffb858.css","7a322a3d653a68fc6ce0ddb905dba5bb"],["static/js/main.9ab01d1d.js","82715aa76535c0d571a26ff65f8f0602"],["static/media/303magazine.aaaf77da.png","aaaf77da993b342bfa3e9a73bca03d0f"],["static/media/acumen.ec7fa8b2.png","ec7fa8b2fd5130cf7976e5cedca36131"],["static/media/ajax.3723a776.png","3723a776646c1cfafd792a523e905683"],["static/media/bootstrap.bed30ddf.jpg","bed30ddfa5d434e827c775ac9a3b0d38"],["static/media/clickfox.543c60bd.jpg","543c60bd9fb1bbf27349778742159972"],["static/media/css.f32b23d4.png","f32b23d44dc774b11041471c86be0b9a"],["static/media/ember.b88563c3.png","b88563c362d2cce88f3216da90d6f009"],["static/media/galvanize_logo.752613d3.png","752613d370e442f0dfb9d057cf6fca34"],["static/media/hero_wdi-student.20be61d2.jpg","20be61d2eba03d719482da88eda520d7"],["static/media/james.45235c90.jpg","45235c9040895504cd7961f9d7d176d7"],["static/media/javascript.a18df8cc.png","a18df8cc46667fc427fba7f18613c5cf"],["static/media/jquery.debc00aa.png","debc00aabbcef8bc874043c624d003a4"],["static/media/kelly.d4cf219c.jpg","d4cf219c0bf104fe9f26419fc15f29e0"],["static/media/kyle.2a136c98.jpg","2a136c984ab27d9716f62a533a7605b4"],["static/media/materialize.0df3ec68.png","0df3ec686a428a23814a918318942d92"],["static/media/mozilla.7ea045a4.png","7ea045a4e288eeb21f55a95613dfe974"],["static/media/node.240845c8.png","240845c84d483f3072922aa267636429"],["static/media/pandora.2860f6f6.png","2860f6f6a39add18f28842f20a231d20"],["static/media/photo-grid.b21e3bf6.jpg","b21e3bf66d123ec657ab7541e79e7ac6"],["static/media/postgres.9dc14814.png","9dc148149240fb852cc01389521df543"],["static/media/react.0c33ee03.png","0c33ee038c453fd757b9030e96d34485"],["static/media/student-life.1450fb8c.jpg","1450fb8c2a50e1c21a52743c1bed289d"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),c.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),c=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),c]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var n=new Request(t,{credentials:"same-origin"});return fetch(n).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);a=urlsToCacheKeys.has(t);a||(t=addDirectoryIndex(t,"index.html"),a=urlsToCacheKeys.has(t));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL("/galvanize-webdev-rebuild/index.html",self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});