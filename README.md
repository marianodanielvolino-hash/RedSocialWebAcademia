# Fundación Red Social — Web + Academia

Sitio institucional, academia y portal demostrativo de **Fundación Red Social**.

Esta versión ordena el prototipo actual para poder publicarlo correctamente en GitHub Pages y separar con claridad:

- Web pública institucional.
- Portal privado demostrativo.
- Panel administrador demo.
- Documentos técnicos.
- Assets visuales mínimos.

## Estructura

```text
/
├── index.html
├── portal.html
├── admin-demo.html
├── assets/
│   ├── logo.svg
│   ├── css/
│   │   └── styles.css
│   └── images/
│       └── og-red-social.svg
├── docs/
│   └── documentos-tecnicos/
├── archive/
│   └── prototipos-anteriores/
├── .nojekyll
└── README.md
```

## Publicación en GitHub Pages

Configuración sugerida:

- Branch: `main`
- Folder: `/root`
- Entry file: `index.html`

## Qué contiene cada archivo

| Archivo | Uso |
|---|---|
| `index.html` | Landing pública institucional |
| `portal.html` | Portal demostrativo: diagnóstico, academia, biblioteca, proyectos y reportes |
| `admin-demo.html` | Panel interno demostrativo, separado de la web pública |
| `assets/css/styles.css` | Sistema visual base |
| `assets/logo.svg` | Marca mínima en SVG |
| `assets/images/og-red-social.svg` | Imagen social para compartir |

## Estado

Sprint 1 — versión publicable inicial.

## Próximos pasos recomendados

1. Reemplazar datos de contacto reales.
2. Completar equipo, consejo directivo y aliados.
3. Incorporar documentos técnicos reales en `/docs`.
4. Conectar formulario de diagnóstico.
5. Definir si el portal será solo demo o producto real.
6. Mover HTML anteriores `.dc.html` y ZIP a `/archive/prototipos-anteriores/` si ya no se usan.
