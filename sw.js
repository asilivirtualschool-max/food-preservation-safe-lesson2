/* Food Preservation Lab (Lesson 2) — service worker. Same-origin static only;
   Firebase traffic is cross-origin and never intercepted. */
var CACHE = 'fpl2-v1';
var SHELL = ['./','./index.html','./app.js','./content_l2.js','./stages_l2.js','./manifest.webmanifest','./icon-192.png','./icon-512.png'];
self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) { return Promise.allSettled(SHELL.map(function (u) { return c.add(u); })); }).then(function () { return self.skipWaiting(); }));
});
self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (keys) { return Promise.all(keys.map(function (k) { if (k !== CACHE) return caches.delete(k); })); }).then(function () { return self.clients.claim(); }));
});
self.addEventListener('fetch', function (e) {
  var req = e.request; if (req.method !== 'GET') return;
  var url = new URL(req.url); if (url.origin !== self.location.origin) return;
  if (req.mode === 'navigate') {
    e.respondWith(fetch(req).then(function (res) { var copy=res.clone(); caches.open(CACHE).then(function(c){c.put('./index.html',copy);}); return res; }).catch(function(){return caches.match('./index.html');}));
    return;
  }
  e.respondWith(caches.match(req).then(function (hit) { return hit || fetch(req).then(function (res) { if (res && res.status===200){var copy=res.clone();caches.open(CACHE).then(function(c){c.put(req,copy);});} return res; }); }));
});
