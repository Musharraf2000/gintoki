self.addEventListener('install', event => {
    event.waitUntil(
      caches.open('v1').then(cache => {
        return cache.addAll([
            '/gintoki/',  // Update this path
            '/gintoki/index.html',  // Update this path
            '/gintoki/styles/styles.css',  // Update this path
            '/gintoki/scripts/script.js',  // Update this path
            '/gintoki/favicons/favicon-192x192.png',  // Update this path
            '/gintoki/favicons/favicon-512x512.png'  // Update this path
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', event => {
    event.respondWith(
      caches.match(event.request).then(response => {
        return response || fetch(event.request);
      })
    );
  });
  