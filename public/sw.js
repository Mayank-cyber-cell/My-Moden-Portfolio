// Service Worker for caching and performance optimization
const CACHE_NAME = 'mayank-portfolio-v1';
const urlsToCache = [
  '/',
  '/profile.jpg',
  '/Mayank_Kumar_Shah_Resume.pdf',
  '/src/main.tsx',
  '/src/index.css'
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