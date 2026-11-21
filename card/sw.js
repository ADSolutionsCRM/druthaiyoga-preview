// Dru card service worker: makes the card installable and lets it open offline.
const C='dru-card-v1',ASSETS=['/card/','/card/index.html','/card/qr.svg','/card/icon-192.png','/card/icon-512.png','/card/dru-thai-yoga.vcf','/img/profile.webp?v=3','/img/sunset-warrior2.webp'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(ASSETS)).catch(()=>{}));self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET')return;
  e.respondWith(fetch(e.request).then(r=>{if(r.ok&&new URL(e.request.url).origin===location.origin){const cp=r.clone();caches.open(C).then(c=>c.put(e.request,cp))}return r}).catch(()=>caches.match(e.request,{ignoreSearch:false}).then(m=>m||caches.match('/card/'))));
});
