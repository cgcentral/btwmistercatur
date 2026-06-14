import React, { useEffect } from 'react';

export default function OrderOnlineEmbed() {
  useEffect(() => {
    // Prevent double initialization
    if (document.getElementById('oo-embed-js')) {
      // If scripts are already loaded, we might need to re-init if the form container was unmounted/remounted
      // OrderOnline's script might handle this automatically if it scans the DOM
      return;
    }

    const script = document.createElement('script');
    script.innerHTML = `
      if (typeof xLogError != 'function') {
        var xLogError = function (error) {
          var req = new XMLHttpRequest();
          var payload = JSON.stringify({ url: document.location.href, line: error.line, stack: error.stack });
          var params = 'message=' + encodeURIComponent(error.name) + '&payload=' + encodeURIComponent(payload) + '&type=embed&level=error';
          req.open('POST', 'https://api.orderonline.id/log', true);
          req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
          req.send(params);
        };
      }
      try {
        if (typeof xEmbedScript != 'function') {
          var xEmbedScript = function () {
            !function(w, d, e, v, id, t, s) {
              if (d.getElementById(id)) return;
              t = d.createElement(e);t.async = !0;t.src = v;t.id = id;
              s = d.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t, s);
            }(window, document, 'script', 'https://cdn.orderonline.id/js/embed-v2-slim.min.js?v=8.0.2', 'oo-embed-js');
          };
        }
        if (typeof xEmbedInit != 'function') {
          var xEmbedInit = function (w, n) {
            if (w.ooe) return;
            n = w.ooe = function() { n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments) };
            if (!w._ooe) w._ooe = n;
            n.push = n;n.loaded = !0;n.version = '8.0.2';n.queue = [];
          };
        }
        xEmbedInit(window);
        ooe('setup', 'redirect', 'https://btwmistercatur.orderonline.id');
        ooe('init', '696717b3ba46407d58039503', '698b0dbf0623911e58071d9e', '698b0ed2b42562be1c0e5419', 'oo-embed-form-psb-new-9789', {"mode":"page","action":"Klik untuk pemesanan","title":"Form Pemesanan","triggerPixel":false,"triggerGtm":false});
        if (!window.jQuery) {
          !function(w, d, e, v, id, t, s) {
            if (d.getElementById(id)) return;
            t = d.createElement(e);t.async = !0;t.src = v;t.id = id;
            t.addEventListener('load', xEmbedScript);
            s = d.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t, s);
          }(window, document, 'script', 'https://cdn.orderonline.id/js/vendor/jquery.min.js', 'oo-embed-jquery');
        } else {
          xEmbedScript();
        }
      } catch (e) {
        xLogError(e);
        throw e;
      }
    `;
    document.body.appendChild(script);

    return () => {
      // Optional cleanup if necessary, though OrderOnline scripts usually stay
    };
  }, []);

  return (
    <div className="ooef bg-white rounded-3xl overflow-hidden min-h-[400px]">
      <form 
        className="orderonline-embed-form" 
        data-username="btwmistercatur" 
        data-product-slug="psb-new" 
        data-product-id="698b0dbf0623911e58071d9e" 
        id="oo-embed-form-psb-new-9789" 
        data-origin="orderonline"
      >
        <div className="ooef-loader">
          <style>{`
            .ooef-loader{visibility: hidden;opacity: 0;position: absolute;left: 0;right: 0;top: 0;bottom: 0;display: flex;justify-content: center;align-items: center;flex-direction: column;animation: ooLoadingIn 10s ease;-webkit-animation: ooLoadingIn 10s ease;animation-fill-mode: forwards;overflow: hidden}
            @keyframes ooLoadingIn{0%{visibility: hidden;opacity: 0}20%{visibility: visible;opacity: 0}100%{visibility: visible;opacity: 1}}
            @-webkit-keyframes ooLoadingIn{0%{visibility: hidden;opacity: 0}20%{visibility: visible;opacity: 0}100%{visibility: visible;opacity: 1}}
            .ooef-loader>div,.ooef-loader>div:after{border-radius: 50%;width: 2.5rem;height: 2.5rem}
            .ooef-loader>div{font-size: 10px;position: relative;text-indent: -9999em;border: .25rem solid #f5f5f5;border-left: .25rem solid #55c4cf;-webkit-transform: translateZ(0);-ms-transform: translateZ(0);transform: translateZ(0);-webkit-animation: ooLoading 1.1s infinite linear;animation: ooLoading 1.1s infinite linear}
            .ooef-loader.error>div{border-left: .25rem solid #ff4500;animation-duration: 5s}
            @-webkit-keyframes ooLoading{0%{-webkit-transform: rotate(0);transform: rotate(0)}100%{-webkit-transform: rotate(360deg);transform: rotate(360deg)}}
            @keyframes ooLoading{0%{-webkit-transform: rotate(0);transform: rotate(0)}100%{-webkit-transform: rotate(360deg);transform: rotate(360deg)}}
          `}</style>
          <div aria-live="polite" role="status"><div>Loading...</div></div>
        </div>
      </form>
    </div>
  );
}
