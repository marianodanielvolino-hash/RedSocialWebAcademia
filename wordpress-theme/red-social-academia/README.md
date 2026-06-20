# Theme WordPress — Fundación Red Social Academia

Theme WordPress institucional para convertir el repo **RedSocialWebAcademia** en un sitio administrable desde WordPress.

## Qué incluye

- `style.css` con cabecera válida de WordPress.
- `functions.php` con carga de assets, librerías y configuración del theme.
- `header.php` y `footer.php` institucionales.
- `front-page.php` para la landing pública.
- `page-portal.php` como plantilla del Portal Red Social.
- `page-integral.php` como plantilla integral sitio + academia + portal.
- `page.php` e `index.php` como plantillas base.
- `assets/css/frs-ui.css` con sistema visual de marca.
- `assets/js/frs-theme.js` con menú mobile, exportación PDF y preparación PocketBase.

## Librerías cargadas

Desde `functions.php` se cargan:

- Google Fonts: Hanken Grotesk + Newsreader.
- Tailwind CSS por CDN, con configuración de paleta Red Social.
- Phosphor Icons.
- jsPDF.
- PocketBase.
- CSS y JS propios del theme.

## Instalación

1. Descargar o clonar el repo.
2. Entrar a la carpeta:

   ```bash
   wordpress-theme/red-social-academia
   ```

3. Comprimir la carpeta `red-social-academia` como `.zip`.
4. En WordPress ir a **Apariencia → Temas → Añadir nuevo → Subir tema**.
5. Subir el ZIP y activar.

## Configuración recomendada

1. Crear una página llamada **Inicio**.
2. Ir a **Ajustes → Lectura**.
3. Elegir **Una página estática** como portada.
4. Seleccionar **Inicio**.
5. Crear una página llamada **Portal** y asignarle la plantilla **Red Social Portal**.
6. Crear una página llamada **Integral** y asignarle la plantilla **Red Social Integral**.
7. Ir a **Apariencia → Menús** y crear el menú principal.

## Notas de arquitectura

Este theme no reemplaza todavía todas las funcionalidades del HTML original. Lo convierte en una base WordPress limpia y escalable, lista para:

- editar contenido desde WordPress;
- crear páginas institucionales;
- conectar usuarios con WordPress o PocketBase;
- sumar CPTs para Programas, Documentos, Cohortes y Reportes;
- incorporar restricciones de acceso;
- evolucionar el portal privado.

## Próxima etapa sugerida

Crear tipos de contenido personalizados:

- `programa`
- `documento_tecnico`
- `cohorte`
- `reporte`

Y definir roles:

- Administrador institucional
- Editor académico
- Facilitador
- Participante
