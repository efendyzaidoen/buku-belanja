const CACHE = 'buku-belanja-v1';
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(['./','./index.html','./manifest.json','./logo.png','./icon-192.png','./icon-512.png'])));
});
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
