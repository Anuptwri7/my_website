'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "f68fc63a173195a5a2f68b91588d4e22",
"assets/assets/Arimo-Bold.ttf": "38ca58b61a8e638f9cb2cfeecf0fac9e",
"assets/assets/Arimo-BoldItalic.ttf": "6ca5b080dc50aaa74c8195572df1e25f",
"assets/assets/Arimo-Italic.ttf": "aa0219d869cac1e4b2966b8f314e5379",
"assets/assets/Arimo-Medium.ttf": "916aadd4f935ccb98cd544a62f06a5ad",
"assets/assets/Arimo-MediumItalic.ttf": "a65c96ddbf1cf906343ba9efe1b74864",
"assets/assets/Arimo-Regular.ttf": "f308213411bb2ec3d44a93563cf441c0",
"assets/assets/Arimo-SemiBold.ttf": "079d8c0292da280eef26c14815a86496",
"assets/assets/Arimo-SemiBOldItalic.ttf": "a7b67b93efc33f1ffc53d532b8628cc0",
"assets/assets/bearNguitar.gif": "0b03ff9e2f3c4c676fb30afacea1daaa",
"assets/assets/BungeeHairline-Regular.ttf": "afd69b3eab643db862cd298162acf778",
"assets/assets/canva.png": "1351c4af40c400838e18aff75bf9ea5d",
"assets/assets/cpp.png": "c1c5353e8ce476277f0350ff2771b423",
"assets/assets/dart.png": "a675cb93b75d5f1656c920dceecdcb38",
"assets/assets/figma.png": "ad64f0f4d2b1ef94ca2e7e9540cfb1fb",
"assets/assets/flutter.png": "e02a6c427d3f2f6128219c4916cc4c6f",
"assets/assets/footer.psd": "32426ed807431b3e4922283497b49ffa",
"assets/assets/gaura.png": "0dbaf2e6b6987ff0d8a7323739cd2069",
"assets/assets/git.png": "e613372679ab303563431324b23f96f6",
"assets/assets/illustrator.png": "59249efc009b5e6b72725e0477655da3",
"assets/assets/imposter.gif": "8e040b57953cf996645f4ebcb7cb270d",
"assets/assets/java.png": "8c7dd8dab5c39d6249c81fb40f05fe43",
"assets/assets/keep.png": "65ac51705d134927b2d492da0b7edb41",
"assets/assets/lines.png": "71e25205e55b57c81c6a5d19af201ebf",
"assets/assets/microsoftoffice.png": "0bccf988f2d56ea5fb4f6d9b965cdbe2",
"assets/assets/photoshop.png": "fde7cf811ed111a44e380ce4de337a19",
"assets/assets/pixel_artAI.jpeg": "ff5677dc4462fd3ffa0f555de58622be",
"assets/assets/premiere.png": "e54bb7dc2de3cb8596e0af45ea1203a5",
"assets/assets/procreate.png": "6646ac0dc38a84cae6632de479299d65",
"assets/assets/python.png": "162ee83dbba7afc24d8f2009c7a22dc5",
"assets/assets/resume.pdf": "db37b1fd591531833d21563ec1d85650",
"assets/assets/sql.png": "4b5a07cfcb47c2fab8fcb715d5bae8da",
"assets/assets/ss1.png": "6b47340cd8abf49e6d7afc09b1d3bb47",
"assets/assets/ss2.png": "4e449a2e6a79a79cdba61ff14b27a640",
"assets/assets/ss3.png": "9032b7e9e5ed8a594372696a2f1deacf",
"assets/assets/vectonator.png": "cfead0f6132b0d8d5dd7e468ec3317a0",
"assets/assets/vectornator.png": "f6504e40eb0d4f185f7e041692fcbc09",
"assets/assets/windowBlack.png": "03e722f8027206f53a420fc4784d7f8e",
"assets/assets/windowBlack.svg": "c5e5c202f0825e8f0c2c465d9d823076",
"assets/assets/windowWhite.png": "3cd3d4ede35a9b37c69718f94c921ec0",
"assets/assets/YujiBoku-Regular.ttf": "5d80dd391f4f95bb72667160075f6106",
"assets/FontManifest.json": "3a6dfc952e6e5576ab6b8de7f4d1c954",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "a08ae0b1c20dfc46d3befc13e0f0664e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "79da2f8df200dda964e0dd3af4df91e6",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "d30996cab03d40b2b4675334fdf68b66",
"icons/Icon-512.png": "0ed589391c9a89d50128c6de5d9d6de2",
"icons/Icon-maskable-192.png": "d30996cab03d40b2b4675334fdf68b66",
"icons/Icon-maskable-512.png": "0ed589391c9a89d50128c6de5d9d6de2",
"index.html": "c9c716ca12d1995e0744d0bf2f39ac5d",
"/": "c9c716ca12d1995e0744d0bf2f39ac5d",
"main.dart.js": "9dbd7a45f222b07a579035230e85e7b6",
"manifest.json": "f77374d141f0889acb7f25c4ce1ff558",
"version.json": "ab2ff48c8c0dee89090970e4e0d57ac6"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
