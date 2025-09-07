self.oninstall = event => event.waitUntil(self.skipWaiting());
self.onactivate = event => event.waitUntil(self.clients.claim());
self.onfetch = event => event.respondWith(fetch(event.request));//Event fetch is required for showing a rich install banner 
