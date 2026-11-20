// UTGL 5P · service d'installation de l'application (aucune donnée n'est mise en cache)
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>{if(e.request.mode==='navigate')e.respondWith(fetch(e.request).catch(()=>new Response('<!doctype html><meta charset="utf-8"><title>UTGL 5P</title><body style="font-family:Arial;padding:40px;color:#0b2a5b"><h2>UTGL 5P</h2><p>Connexion internet indisponible. Reconnectez-vous puis rouvrez l’application.</p>',{headers:{'Content-Type':'text/html; charset=utf-8'}})))});
