// Fundación Red Social — shared library loader
// Carga Tailwind, Phosphor Icons, jsPDF, PocketBase y la capa visual FRS.
// Luego levanta el runtime DC original fijado al commit previo para no reescribir el bundle generado.
"use strict";
(function () {
  var ORIGINAL_DC_RUNTIME_URL = "https://cdn.jsdelivr.net/gh/marianodanielvolino-hash/RedSocialWebAcademia@dae12bd7a2679902180315d8295a1aef927a6b73/support.js";
  var LOADER_FLAG = "__FRS_SHARED_LIBRARY_LOADER__";

  if (window[LOADER_FLAG]) return;
  window[LOADER_FLAG] = true;

  function appendToHead(node) {
    (document.head || document.documentElement).appendChild(node);
  }

  function loadCss(id, href) {
    if (document.getElementById(id)) return;
    var link = document.createElement("link");
    link.id = id;
    link.rel = "stylesheet";
    link.href = href;
    appendToHead(link);
  }

  function loadScript(id, src, attrs) {
    return new Promise(function (resolve, reject) {
      var existing = document.getElementById(id);
      if (existing) {
        if (existing.getAttribute("data-loaded") === "true") return resolve();
        existing.addEventListener("load", function () { resolve(); }, { once: true });
        existing.addEventListener("error", reject, { once: true });
        return;
      }

      var script = document.createElement("script");
      script.id = id;
      script.src = src;
      script.async = false;
      if (attrs) {
        Object.keys(attrs).forEach(function (key) {
          script.setAttribute(key, attrs[key]);
        });
      }
      script.onload = function () {
        script.setAttribute("data-loaded", "true");
        resolve();
      };
      script.onerror = function () {
        reject(new Error("No se pudo cargar " + src));
      };
      appendToHead(script);
    });
  }

  function configureTailwind() {
    window.tailwind = window.tailwind || {};
    window.tailwind.config = {
      theme: {
        extend: {
          colors: {
            papel: "#F7F1E7",
            "papel-soft": "#FFFAF2",
            arena: "#E4D8C4",
            "arena-soft": "#EFE6D6",
            tierra: "#33281F",
            umber: "#2E2117",
            magenta: "#ED1686",
            naranja: "#FF9E19",
            cobre: "#D98A3D"
          },
          fontFamily: {
            sans: ["Hanken Grotesk", "system-ui", "sans-serif"],
            serif: ["Newsreader", "Georgia", "serif"]
          },
          boxShadow: {
            marca: "0 14px 32px rgba(237, 22, 134, 0.28)",
            suave: "0 12px 28px rgba(46, 33, 23, 0.08)"
          },
          borderRadius: {
            marca: "18px"
          },
          backgroundImage: {
            "frs-grad": "linear-gradient(135deg, #ED1686 0%, #FF9E19 100%)"
          }
        }
      }
    };
  }

  function boot() {
    configureTailwind();
    loadCss("frs-ui-css", "./assets/frs-ui.css");

    window.FRSLibrariesReady = Promise.allSettled([
      loadScript("frs-tailwind-cdn", "https://cdn.tailwindcss.com"),
      loadScript("frs-phosphor-icons", "https://unpkg.com/@phosphor-icons/web"),
      loadScript("frs-jspdf", "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"),
      loadScript("frs-pocketbase", "https://unpkg.com/pocketbase/dist/pocketbase.umd.js")
    ]);

    loadScript("dc-runtime-original", ORIGINAL_DC_RUNTIME_URL).catch(function (err) {
      console.error("[FRS] No se pudo cargar el runtime DC original", err);
    });
  }

  boot();
})();
