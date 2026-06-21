const CACHE_NAME = "delsa-game-v2";

const PRECACHE_URLS = [
  "./",
  "./index.html",
  "./styles.css",
  "./fonts.css",
  "./game-shell.css",
  "./manifest.webmanifest",
  "./pwa.js",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/icon-maskable-512.png",
  "./icons/apple-touch-icon.png",
  "./fonts/Vazirmatn-Variable.woff2",
  "./fonts/OFL.txt",
  "./vendor/lucide.min.js",
  "./game1/",
  "./game1/index.html",
  "./game1/styles.css",
  "./game1/app.js",
  "./game2/",
  "./game2/index.html",
  "./game2/assets/zumi.png",
  "./game2/assets/rumi.png",
  "./game2/assets/mira.png",
  "./game3/",
  "./game3/index.html",
  "./game3/styles.css",
  "./game3/game.js",
  "./game3/assets/anime-violet.png",
  "./game3/assets/anime-butterfly-garden.png",
  "./game3/assets/flower-butterflies.png",
  "./game3/assets/moonlit-blossoms.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) =>
        Promise.all(
          cacheNames
            .filter((cacheName) => cacheName !== CACHE_NAME)
            .map((cacheName) => caches.delete(cacheName)),
        ),
      )
      .then(() => self.clients.claim()),
  );
});

self.addEventListener("fetch", (event) => {
  const request = event.request;

  if (request.method !== "GET") {
    return;
  }

  const requestUrl = new URL(request.url);

  if (requestUrl.origin !== self.location.origin) {
    return;
  }

  if (request.mode === "navigate") {
    event.respondWith(networkFirstNavigation(request));
    return;
  }

  event.respondWith(cacheFirst(request));
});

async function networkFirstNavigation(request) {
  const cache = await caches.open(CACHE_NAME);

  try {
    const response = await fetch(request);

    if (response.ok) {
      await cache.put(request, response.clone());
    }

    return response;
  } catch {
    const cachedResponse = await cache.match(request, { ignoreSearch: true });

    if (cachedResponse) {
      return cachedResponse;
    }

    const pageUrl = new URL(request.url);
    const fallbackUrl = pageUrl.pathname.endsWith("/")
      ? new URL("index.html", pageUrl)
      : pageUrl;

    return (await cache.match(fallbackUrl, { ignoreSearch: true })) ?? cache.match("./index.html");
  }
}

async function cacheFirst(request) {
  const cache = await caches.open(CACHE_NAME);
  const cachedResponse = await cache.match(request, { ignoreSearch: true });

  if (cachedResponse) {
    return cachedResponse;
  }

  const response = await fetch(request);

  if (response.ok) {
    await cache.put(request, response.clone());
  }

  return response;
}
