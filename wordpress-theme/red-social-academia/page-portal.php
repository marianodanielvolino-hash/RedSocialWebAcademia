<?php
/**
 * Template Name: Red Social Portal
 * Description: Portal privado, prelogin, dashboard y módulos de academia.
 *
 * @package RedSocialAcademia
 */
if (!defined('ABSPATH')) {
    exit;
}

get_header();

frs_render_page_content_or_fallback('frs_portal_page_fallback');

get_footer();

function frs_portal_page_fallback() {
    ?>
    <main id="contenido">
        <section class="frs-portal-hero frs-panel-dark">
            <div class="frs-container frs-portal-grid">
                <div>
                    <span class="frs-kicker">Portal Red Social</span>
                    <h1 class="frs-title">Un espacio privado para aprender, medir y acompañar procesos.</h1>
                    <p>Base preparada para diagnóstico de madurez, dashboard, documentos, programas y panel administrativo.</p>
                </div>
                <div class="frs-login-card frs-card">
                    <span class="frs-pill">Acceso institucional</span>
                    <h2 class="frs-title">Entrada al portal</h2>
                    <p>Esta pantalla queda lista para conectar con usuarios de WordPress, membresías o PocketBase según la arquitectura final.</p>
                    <a class="frs-btn-primary" href="<?php echo esc_url(wp_login_url(get_permalink())); ?>">Ingresar con WordPress</a>
                    <p class="frs-login-note">La validación real de usuarios se configura en la siguiente etapa.</p>
                </div>
            </div>
        </section>

        <section class="frs-section frs-section-soft">
            <div class="frs-container">
                <div class="frs-section-head">
                    <span class="frs-kicker">Dashboard</span>
                    <h2 class="frs-title">Módulos iniciales del portal.</h2>
                </div>
                <div class="frs-grid-4">
                    <article class="frs-card-solid frs-card-lift frs-module-card"><i class="ph ph-gauge frs-card-icon"></i><h3>Madurez</h3><p>Encuesta, puntaje y recomendaciones.</p></article>
                    <article class="frs-card-solid frs-card-lift frs-module-card"><i class="ph ph-graduation-cap frs-card-icon"></i><h3>Cursos</h3><p>Trayectos, clases y materiales.</p></article>
                    <article class="frs-card-solid frs-card-lift frs-module-card"><i class="ph ph-folder-open frs-card-icon"></i><h3>Documentos</h3><p>Repositorio técnico organizado.</p></article>
                    <article class="frs-card-solid frs-card-lift frs-module-card"><i class="ph ph-chart-bar frs-card-icon"></i><h3>Reportes</h3><p>Indicadores y exportaciones PDF.</p></article>
                    <article class="frs-card-solid frs-card-lift frs-module-card"><i class="ph ph-users frs-card-icon"></i><h3>Comunidad</h3><p>Referentes, equipos y cohortes.</p></article>
                    <article class="frs-card-solid frs-card-lift frs-module-card"><i class="ph ph-calendar-check frs-card-icon"></i><h3>Agenda</h3><p>Capacitaciones y encuentros.</p></article>
                    <article class="frs-card-solid frs-card-lift frs-module-card"><i class="ph ph-shield-check frs-card-icon"></i><h3>Roles</h3><p>Administrador, editor y participante.</p></article>
                    <article class="frs-card-solid frs-card-lift frs-module-card"><i class="ph ph-download-simple frs-card-icon"></i><h3>Exportar</h3><p>Constancias, diagnósticos y reportes.</p></article>
                </div>
            </div>
        </section>

        <section class="frs-section">
            <div class="frs-container frs-card frs-export-panel">
                <div>
                    <span class="frs-kicker">Herramienta lista</span>
                    <h2 class="frs-title">Exportación PDF del estado del portal.</h2>
                    <p>La librería jsPDF ya queda cargada por el theme. Este botón prueba la capacidad de generar un reporte básico.</p>
                </div>
                <button class="frs-btn-primary" type="button" data-frs-export-pdf>Descargar reporte PDF</button>
            </div>
        </section>
    </main>
    <?php
}
