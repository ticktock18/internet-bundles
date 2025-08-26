const CACHE_NAME = "mimihapa-cache-v1";
const urlsToCache = [
  "/",
  "https://ticktock18.github.io/internet-bundles/manifest.json",
  "https://mimihapa.co.tz/favicon.ico"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
    .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
    .then(response => response || fetch(event.request))
  );
});


