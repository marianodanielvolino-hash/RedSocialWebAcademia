# Red Social — Web + Academia

Sitio público, portal privado y panel de administración de **Fundación Red Social**.
Sistema visual humanista: títulos en serif (Newsreader), cuerpo en Hanken Grotesk,
paleta cálida (papel / arena / umber) con magenta y naranja de marca como acentos planos.

## Contenido

| Archivo | Descripción |
|---|---|
| `index.html` | Entrada publicable para GitHub Pages. Carga la landing pública original |
| `Landing Publica.dc.html` | Sitio público institucional |
| `Portal Red Social.dc.html` | Portal privado: prelogin, encuesta de madurez, login, dashboard y panel Admin (12 módulos) |
| `Red Social Web Integral.dc.html` | Sitio + portal unidos en un solo documento navegable |
| `support.js` | Runtime necesario para abrir los `.dc.html` |
| `assets/logo-red-social.svg` | Isotipo mínimo para evitar logo roto en la vista web |
| `assets/` | Logo y recursos de marca |
| `standalone/*.html` | Versiones autocontenidas si se agregan al repositorio |

## Cómo verlo

### Web publicada

GitHub Pages debe apuntar a:

- Branch: `main`
- Folder: `/root`
- Archivo de entrada: `index.html`

### Fuentes editables

Los archivos `.dc.html` cargan `support.js`, por eso conviene servir la carpeta con un servidor estático:

```bash
npx serve .
```

También pueden abrirse directamente en navegador, siempre que `support.js` esté disponible en la misma carpeta.

Todas las versiones son responsive (breakpoints 1000 / 760 / 600 px).
