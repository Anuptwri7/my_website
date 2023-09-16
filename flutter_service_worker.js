'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "3fa33392971f4549a197e9a602de0aa5",
".git/config": "77f37108acd27cce7722da9a4ebc7e9f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "bf189c1956dea2d269f70a6835ea2729",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "07adbff3608841f1ca06cd7612b1deac",
".git/logs/refs/heads/master": "07adbff3608841f1ca06cd7612b1deac",
".git/logs/refs/remotes/origin/master": "89023696c145bbb09c3ca98dffcc51cf",
".git/objects/03/6b49d030344b1945d07d4c2c7008822945ad55": "9f6dd0bdbe4bbdfe5fd557a4783de370",
".git/objects/04/0b33d7208e5bffee961bac3e552a128fa7254d": "96b877ac9c0207022deda6e7268509a5",
".git/objects/05/6151544a35df9b912b61ee56eff1aa7c2ebb45": "7b39358bfa344ec329c778f4584bb6a0",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/14/11a96696d73d6696077cfad802895410254068": "4a22c7ceae3c308a44fb420a20017f5d",
".git/objects/1c/2d72dece84ceeb10854b3b01df495b6fdab46e": "1f4e01d1bc137c286f6e572e6acf9d36",
".git/objects/1c/ed832097e1d4268dcd6727a24b0eea80dbc7e6": "1b4a5a16eddc0e1b287f74d83c238d89",
".git/objects/2a/b41c904cd4f09b45939dc585f93e42becdb244": "4268129ab01ff70dcc250203e008b75e",
".git/objects/2b/5e37c98fb42718a1fdbf12131648f1661ea4b0": "fb22a9de0f2b9ac8eea5710921b52f6e",
".git/objects/2e/b66145d004cbfa98f7152037ce6053a61a7115": "accb94abae6a4506721300ea5acfb3ab",
".git/objects/34/718bfe0a8fad8ed1dd9b5cc8caa92ccfb1c65d": "2b0da0e1ceecbe76265c01b1390ebdba",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/38/960a2e6c0e415de36d3b80ecc1b41bf8a34fd1": "20e6c87dc3d6740ad06f559c4e58e799",
".git/objects/3a/1ae191d2720aa26d8892be51abde03d30cb16a": "b9413ec43b94e140df2ce45444a5f1c9",
".git/objects/3f/9af1a6634a498bcd2988782c4731fd11dcaf75": "5db1b347f05f580c58881418790e41b6",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/41/d45c402b3d5b008375d95272e34e464d348b62": "77831befa075b34a8b55461c324f53da",
".git/objects/47/72285a11b8a8eb5037c9ebe0aaf1a90f2cc495": "bab0248b2c5fa94a1d8928645e8e2efd",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/4d/061e90fceced925a9182db3040ace3dabc056b": "f02afdb2c828beb3ace14ce0c20b84e9",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/5e/46b586bd778a2daffafd2c800a6ab7474e6548": "4a73c3509846693ac4c91da26adeea7c",
".git/objects/63/158ca805695c83dd989ecefdd0aedf44aa31ea": "27a2aafe6070474958639400673a69f8",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/6e/99fed67313e7286ff1e549c10e1290b94dd608": "5f007da36b95564244661e52aea8e510",
".git/objects/6f/fdbeb9066e20d88468a02ca6cc38dbc1374702": "84b2e5a035ac10150b2438befc22401e",
".git/objects/71/a0b991b7d78c87472a121955eca072f9f883d3": "1e35a2105fd6ccc8cdcac2d45abdcab5",
".git/objects/71/db10a3ed624b41ef041f9f467b667683ca362e": "d608e486c58d12534129f0ba3740b0f8",
".git/objects/72/b1e2cd73804ed661499c369ab7538c7e67f02a": "d625d19eb0d110141f8013a939e9be29",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/74/d777856a4dc09b5de9ec8714b892faa3c7626e": "f6a44790d67a4f1171d403b7c86ffb32",
".git/objects/75/546e853b4372fcd3c61facaedeb30c0fde0a98": "68d27fc10db4d1492a25ec810f6d8a84",
".git/objects/78/9956c91a3f621b484d240fa170373f14670a5a": "0820a1ad904f68f3b9f92115080691bb",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/81/ff2950cad9e2f06052d2eeeaa988abed616263": "8142c6165be8e574ff06c40c12744fed",
".git/objects/86/6771f183b90a1a6b811c898cacb316729f5932": "397f15574d265b708ee4459fbe3acb56",
".git/objects/86/f167eb115fb85a033f612bec91fa5d388a227f": "2ea94baa31d0d341ccdf6829860a7595",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8f/0e94230f345a46529fdeea2e6ca5d73c194c21": "d2f364e5e032fe5279f2553f3aea69a7",
".git/objects/90/d970018def8cb9be4b5edbac2d6afeec5bda42": "115314e3ab559824f0f1801348c6313d",
".git/objects/94/dd5875384cffe0463cbd7658934f96ec790a66": "9f6bb787383293f0440b03cad9978d46",
".git/objects/97/a68277b7d04c26f9eaec4ad8cec33e66d2b263": "66f59b12e3dc4710e64567dc1f3e29fc",
".git/objects/99/b3469ca047bc1fd662e5cb65376902fb4201ac": "91850220eabd45f11e169602b52ab72b",
".git/objects/a1/18fd61112620ca23d53b5f74bc1f3b9c9a1ac8": "1a3d719d6d4632fdc552ffaf190039e7",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/1774ba9f89f47f3b1a28e65adb0fc9ef8273ba": "4eaf2d018cb38f87c845de501353af37",
".git/objects/aa/842e7bab31eec98193172aec954242897c5bb4": "242f207e2af98cb2270077857c927908",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ac/3baf55755164f5324f612a4face23a2e36c5c3": "7f995ca28f9d7a709c8809412219087e",
".git/objects/ac/4376dd64d85b01b420c3018f4a064e17728340": "09ecfae67b3937fa746f834ecc9451c1",
".git/objects/af/5abb3d85be4ed24045610b4a20be90d19e05f2": "c08c838afdda6a0e7652e8ebbf208c9d",
".git/objects/af/87f6cdfbc87591b5635a96a85a065036251b40": "322607fe1c62a0f91684e792d2af95e2",
".git/objects/bb/9604bbf0195639a158b8c6340eaa56e4a281d3": "db8cfa018a5e3b156bd4e1e47aa206b9",
".git/objects/bd/af6ac3ffc4e0b26d5acc45c6bda6c388f3d2c9": "97c3b3e69331dcee8fc693c701585996",
".git/objects/be/15e9a087bf93721acb497544e4ca6984e3f577": "0d1582100273504a55e50e2a13ea8b29",
".git/objects/bf/71e1760536e19809432877fd54fcfdd582fa2e": "e221a8b23bcab67846fa6b8479bc73df",
".git/objects/bf/9e51417803675a5292d7add76b244676a5e5cd": "96964e6caccc6ec7fc45633d6a921459",
".git/objects/c0/2a064af5e5bf00307cb24a76e149ac7ec536be": "29a30b03ee71c70ef1ccbcb10713c9e6",
".git/objects/c2/6734a0ad4ae18505233174f721a8199f2ac475": "dbfa46deb48ecaa06a124f802eefb18f",
".git/objects/c2/986aa9c024f31816c5b4d6c683db6085f08c27": "3bb91f9c0c93b9917d36dc78be824a1a",
".git/objects/c3/710396ecfb63ce20419152c9e4b734b4e54147": "ad50d5d924b0352a05aacafe821d520e",
".git/objects/c3/a1d76c41fb0c7bb87e9fc241e2bfa4e9079e2f": "9635723e754c7caf6bf3775fac3c7928",
".git/objects/cd/d59be0c69af29c335c818b4ceafd1974fed2ba": "9ff9a6f78a1ffeede08915d687d0682d",
".git/objects/d0/c24ac6e5b4bc9347f8b26fe6cc95e91b568723": "1f61a3b64ee05a3089505bfaf7c76d79",
".git/objects/d1/a919221d46c6fabb5aa32d348ac617c2e58733": "9a7e28a1a4c433946cfbd683260099ad",
".git/objects/df/d3a6f4e43e5d0c6fd1a532a10dcf87aa7ac586": "0568eaf0542f785b018d88bb2adba891",
".git/objects/e0/fcc7ed4796499963941467d0071bd78783f693": "5e81fdff448730e850c29eac6465e076",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/e5b6567a57170414bff6973bfa5f678d8510d0": "d40e254b2b58a87277cbee9440b2be36",
".git/objects/ea/ef97ee7c91961765220c2c6298b2c937b8726a": "9544943219f2e5bf843e8449d24b6869",
".git/objects/f7/11b31ebb3f58978be08a650854d6373e5d2137": "c405c12fee71e652effffb951951d6f3",
".git/objects/f7/1b17c11c8fb38e27f5ddb9fc76dd1e55226530": "d532e21fe15cdfef488457499dd9a373",
".git/objects/fb/14ed4f2be119d5c1a72ff391a61c20057bb251": "4718f4c518d36df3fada3eb7755e6777",
".git/refs/heads/master": "761b4976bf14501096a55ce09f4d185d",
".git/refs/remotes/origin/master": "761b4976bf14501096a55ce09f4d185d",
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
"index.html": "b1144990728ff431d27852c77b751c25",
"/": "b1144990728ff431d27852c77b751c25",
"main.dart.js": "39a8a31cec23d4ec2f4ccd92883ca8c4",
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
