
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker
        .register('./sw_cache.js')
        .then(reg => console.log('Service Worker: Registration'))
        .catch(err => console.log(`Service Worker: Error: ${err}`));
    });
}