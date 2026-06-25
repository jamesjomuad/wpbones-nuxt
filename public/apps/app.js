(function(){
  var base = '';
  var scripts = document.getElementsByTagName('script');
  for (var i = 0; i < scripts.length; i++) {
    var s = scripts[i].src || '';
    if (s.indexOf('/apps/app.js') !== -1 || s.indexOf('\\apps\\app.js') !== -1) {
      base = s.substring(0, s.lastIndexOf('/apps/')) + '/build/';
      break;
    }
  }
  window.__NUXT__ = {
    config: {
      app: {
        baseURL: base,
        buildAssetsDir: '/'
      }
    }
  };
  var nuxtEl = document.getElementById('__nuxt');
  var initialRoute = nuxtEl ? nuxtEl.getAttribute('data-initial-route') : null;
  if (initialRoute && initialRoute !== '/') {
    location.hash = initialRoute;
  }
  ["style.cz39BYlI.css"].forEach(function(href){
    var l = document.createElement('link');
    l.rel = 'stylesheet';
    l.href = base + href;
    document.head.appendChild(l);
  });
  [].forEach(function(src){
    var s = document.createElement('script');
    s.type = 'module';
    s.src = base + src;
    document.body.appendChild(s);
  });
  var e = document.createElement('script');
  e.type = 'module';
  e.src = base + "Bki4e8qb.js";
  document.body.appendChild(e);
})();
