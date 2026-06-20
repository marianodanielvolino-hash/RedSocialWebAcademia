/* Fundación Red Social Academia — WordPress theme interactions */
(function () {
  'use strict';

  function ready(callback) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', callback, { once: true });
    } else {
      callback();
    }
  }

  function setupMenu() {
    var toggle = document.querySelector('.frs-menu-toggle');
    var nav = document.querySelector('#frs-primary-nav');
    if (!toggle || !nav) return;

    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  function setupPdfExport() {
    var button = document.querySelector('[data-frs-export-pdf]');
    if (!button) return;

    button.addEventListener('click', function () {
      if (!window.jspdf || !window.jspdf.jsPDF) {
        window.alert('La librería PDF todavía no está disponible.');
        return;
      }

      var doc = new window.jspdf.jsPDF();
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(18);
      doc.text('Fundación Red Social — Reporte del portal', 20, 24);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(11);
      doc.text('Base WordPress instalada. Módulos preparados para academia, documentos y medición.', 20, 38, { maxWidth: 170 });
      doc.text('Fecha: ' + new Date().toLocaleDateString(), 20, 52);
      doc.save('reporte-red-social-portal.pdf');
    });
  }

  function exposePocketBase() {
    if (!window.PocketBase || !window.FRSTheme || !window.FRSTheme.pocketbaseUrl) return;
    window.FRSTheme.pb = new window.PocketBase(window.FRSTheme.pocketbaseUrl);
  }

  ready(function () {
    setupMenu();
    setupPdfExport();
    exposePocketBase();
    document.body.classList.add('frs-enhanced');
  });
})();
