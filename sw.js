const CACHE="javascod-v3";
const CORE=["./","./index.html","./styles.css","./app.js","./manifest.webmanifest","./assets/icon.svg"];
self.addEventListener("install",event=>{
  event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(CORE)).then(()=>self.skipWaiting()));
});
self.addEventListener("activate",event=>{
  event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key.startsWith("javascod-")&&key!==CACHE).map(key=>caches.delete(key)))).then(()=>self.clients.claim()));
});
self.addEventListener("fetch",event=>{
  const request=event.request;
  const url=new URL(request.url);
  if(request.method!=="GET"||url.origin!==location.origin)return;
  const isAppFile=["/","/index.html","/styles.css","/app.js","/manifest.webmanifest","/assets/icon.svg"].some(path=>url.pathname.endsWith(path));
  const isData=url.pathname.endsWith("/data/warzone.json");
  if(isAppFile||isData){
    event.respondWith(fetch(request,{cache:"no-store"}).then(response=>{
      if(response.ok)caches.open(CACHE).then(cache=>cache.put(request,response.clone()));
      return response;
    }).catch(()=>caches.match(request)));
  }
});
