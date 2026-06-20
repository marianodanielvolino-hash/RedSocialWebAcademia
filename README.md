# Red Social — Web + Academia

Sitio público, portal privado y panel de administración de **Fundación Red Social**.
Sistema visual humanista: títulos en serif (Newsreader), cuerpo en Hanken Grotesk,
paleta cálida (papel / arena / umber) con magenta y naranja de marca como acentos planos.

## Contenido

| Archivo | Descripción |
|---|---|
| `Landing Publica.dc.html` | Sitio público institucional |
| `Portal Red Social.dc.html` | Portal privado: prelogin, encuesta de madurez, login, dashboard y panel Admin (12 módulos) |
| `Red Social Web Integral.dc.html` | Sitio + portal unidos en un solo documento navegable |
| `support.js` | Runtime necesario para abrir los `.dc.html` |
| `assets/` | Logo y recursos de marca |
| `standalone/*.html` | Versiones autocontenidas (un solo archivo, funcionan offline, sin dependencias) |

## Cómo verlo

- **Rápido / offline:** abrí cualquier archivo de `standalone/` directamente en el navegador.
- **Fuentes editables:** serví la carpeta con un servidor estático (los `.dc.html` cargan `support.js`):
  ```bash
  npx serve .
  ```

Todas las versiones son responsive (breakpoints 1000 / 760 / 600 px).
