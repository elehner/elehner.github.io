"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["./app.279fbaee66218166090a.js","efa4f81e9850472475e8f6c03b58303a"],["./app.279fbaee66218166090a.js.gz","0cd8f78abaa090178a6f1263006ffc98"],["./favicon.ico","e8c384ecf2e7938bd5d7d746cb093e86"],["./icon/android-chrome-144x144.png","ca6c1bc8d108924042a91ea60e11aca8"],["./icon/android-chrome-192x192.png","7ff8b9d69695b20356ffbbb8171bd005"],["./icon/apple-touch-icon.png","c573d9dfc2e8629ef1470efb6810cdd7"],["./icon/favicon-16x16.png","c0b16de9337e9aea38ce576350ef4f44"],["./icon/favicon-32x32.png","305365f66d82c2fda7d20f3afeb863f8"],["./icon/mstile-150x150.png","bf7fb414b4c9ba581ab8cacacac65d63"],["./img/dev-dash.jpg","f791627ca7c5aff96e22d9d717b51f12"],["./img/lighthouse.jpg","1cedf108b6a087c3d40b5b109aada567"],["./index.html","9d1aca4640cb515f36c0e0836d71528c"],["./manifest.json","e3428be98ab00f1d7f1d7d55f1b30753"],["./styles.279fbaee66218166090a.css","326a1daa11a9c0a221133c409f3ee103"],["./vendor.279fbaee66218166090a.js","713974b0b3a2fdbc431e5db6a1cf0ea9"],["./vendor.279fbaee66218166090a.js.gz","2e03225d7a6ce3560d743b46ebbeec1c"]],cacheName="sw-precache-v2-online-acc-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,n){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=n),a.toString()},createCacheKey=function(e,n,a,t){var r=new URL(e);return t&&r.toString().match(t)||(r.search+=(r.search?"&":"")+encodeURIComponent(n)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,n){if(0===e.length)return!0;var a=new URL(n).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,n){var a=new URL(e);return a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return n.every(function(n){return!n.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var n=e[0],a=e[1],t=new URL(n,self.location),r=createCacheKey(t,hashParamName,a,!1);return[t.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!n.has(a))return e.add(new Request(a,{credentials:"same-origin",redirect:"follow"}))}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!n.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var n,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);n=urlsToCacheKeys.has(a);var t="index.html";!n&&t&&(a=addDirectoryIndex(a,t),n=urlsToCacheKeys.has(a));var r="index.html";!n&&r&&"navigate"===e.request.mode&&isPathWhitelisted([],e.request.url)&&(a=new URL(r,self.location).toString(),n=urlsToCacheKeys.has(a)),n&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(n){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,n),fetch(e.request)}))}});