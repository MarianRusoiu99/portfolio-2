// Simple service worker for caching static assets
const CACHE_NAME = 'portfolio-v1';
const urlsToCache = [
  '/',
  // Add other critical resources (e.g., '/favicon.ico', '/manifest.json', or built asset paths)
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        return response || fetch(event.request);
      })
  );
});
