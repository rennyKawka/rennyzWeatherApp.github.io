const cacheName = 'v1';

const cacheAssets = [
    'index.html',
    'index.js',
    'main.js',
    'request.js',
    'style.css',
    '/img/bg/sunny.jpeg',
    '/img/bg/midnight.jpg',
    '/dist/css/bootstrap.min.css'
];

// call the install event
self.addEventListener('install', (e) => {
    console.log('Service worker: Installed');

    e.waitUntil(
        caches
        .open(cacheName)
        .then(cache =>{
            console.log('service Worker: caching files');
            cache.addAll(cacheAssets);
        })
        .then(() => self.skipWaiting())
    );
    
})

// call the activate event
self.addEventListener('activate', (e) => {
    console.log('Service worker: Activated');

    // remove unwanted caches
    e.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if(cache !== cacheName) {
                        console.log('Service worker: learing Old cache');
                        return caches.delete(cache);  
                    }
                })
            );
        })
    );
    
});

// call fetch event
self.addEventListener('fetch', e => {
    console.log('Service Worker: Fetching');
    e.respondWith(fetch(e.request).catch(() => cachees.match(e.request))
    );
    
})
