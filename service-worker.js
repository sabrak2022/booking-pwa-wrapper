self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('booking-cache-v1').then(function(cache) {
      return cache.addAll([
        '/booking-pwa-wrapper/',
        '/booking-pwa-wrapper/index.html',
        '/booking-pwa-wrapper/manifest.json',
        '/booking-pwa-wrapper/icons/icon-192x192.png',
        '/booking-pwa-wrapper/icons/icon-512x512.png',
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
