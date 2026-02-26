self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('kdse-cache').then(cache => {
      return cache.addAll(['./']);
    })
  );
});
