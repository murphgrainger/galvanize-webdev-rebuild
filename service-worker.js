"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["index.html","d08f9db63bd26fad0a06210aad92b53d"],["static/css/main.8795634a.css","5577de603dbfd2c75c3a1966c0d4dc25"],["static/js/main.9503deae.js","cb942e1f830c7b1f7f8bd19aab2e3b47"],["static/media/303magazine.aaaf77da.png","aaaf77da993b342bfa3e9a73bca03d0f"],["static/media/acumen.ec7fa8b2.png","ec7fa8b2fd5130cf7976e5cedca36131"],["static/media/clickfox.543c60bd.jpg","543c60bd9fb1bbf27349778742159972"],["static/media/dan.2dc8c77b.jpg","2dc8c77bfb9b9d8dc00ad318b296c906"],["static/media/g38.cf9ec461.jpg","cf9ec461c63528bec10b8ec33b20b490"],["static/media/galvanize_logo.752613d3.png","752613d370e442f0dfb9d057cf6fca34"],["static/media/hero_wdi-student.d12f1ba9.jpg","d12f1ba979b3fb8c939c9b5135fbf78b"],["static/media/james.45235c90.jpg","45235c9040895504cd7961f9d7d176d7"],["static/media/kelly.d4cf219c.jpg","d4cf219c0bf104fe9f26419fc15f29e0"],["static/media/kyle.2a136c98.jpg","2a136c984ab27d9716f62a533a7605b4"],["static/media/mozilla.7ea045a4.png","7ea045a4e288eeb21f55a95613dfe974"],["static/media/pandora.2860f6f6.png","2860f6f6a39add18f28842f20a231d20"],["static/media/photo-grid.b21e3bf6.jpg","b21e3bf66d123ec657ab7541e79e7ac6"],["static/media/student-life.1450fb8c.jpg","1450fb8c2a50e1c21a52743c1bed289d"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);t=urlsToCacheKeys.has(a);t||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/galvanize-webdev-rebuild/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});