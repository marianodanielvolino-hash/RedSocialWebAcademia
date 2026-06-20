<?php
/**
 * Template Name: Red Social Integral
 * Description: Página integral que combina sitio público, academia, portal y panel de módulos.
 *
 * @package RedSocialAcademia
 */
if (!defined('ABSPATH')) {
    exit;
}

get_header();

frs_render_page_content_or_fallback('frs_integral_page_fallback');

get_footer();

function frs_integral_page_fallback() {
    ?>
    <main id="contenido">
        <section class="frs-hero frs-panel-dark">
            <div class="frs-container frs-hero-grid">
                <div class="frs-hero-copy">
                    <span class="frs-kicker">Versión integral</span>
                    <h1 class="frs-title">Una sola experiencia para conocer, aprender, gestionar y medir.</h1>
                    <p>Esta plantilla reúne la landing pública, la academia, los documentos técnicos y los módulos centrales del portal en una misma página navegable.</p>
                    <div class="frs-hero-cta-row">
                        <a class="frs-btn-primary" href="#mapa">Ver mapa integral</a>
                        <a class="frs-btn-secondary" href="<?php echo esc_url(home_url('/portal/')); ?>">Abrir portal</a>
                    </div>
                </div>
                <div class="frs-hero-panel frs-card">
                    <span class="frs-pill">Arquitectura</span>
                    <h2 class="frs-title">4 frentes conectados</h2>
                    <div class="frs-stack-list">
                        <span>Sitio público</span>
                        <span>Academia</span>
                        <span>Portal privado</span>
                        <span>Panel administrativo</span>
                    </div>
                </div>
            </div>
        </section>

        <section id="mapa" class="frs-section frs-section-soft">
            <div class="frs-container">
                <div class="frs-section-head">
                    <span class="frs-kicker">Mapa integral</span>
                    <h2 class="frs-title">De la comunicación institucional a la gestión de capacidades.</h2>
                </div>
                <div class="frs-grid-4">
                    <article class="frs-card-solid frs-card-lift frs-module-card"><strong>01</strong><h3>Comunicar</h3><p>Propósito, programas, equipo y documentos.</p></article>
                    <article class="frs-card-solid frs-card-lift frs-module-card"><strong>02</strong><h3>Inscribir</h3><p>Convocatorias, formularios y derivaciones.</p></article>
                    <article class="frs-card-solid frs-card-lift frs-module-card"><strong>03</strong><h3>Formar</h3><p>Trayectos, módulos y materiales de apoyo.</p></article>
                    <article class="frs-card-solid frs-card-lift frs-module-card"><strong>04</strong><h3>Medir</h3><p>Diagnósticos, reportes y tableros.</p></article>
                </div>
            </div>
        </section>

        <section class="frs-section">
            <div class="frs-container frs-split">
                <div>
                    <span class="frs-kicker">Panel admin</span>
                    <h2 class="frs-title">Módulos preparados para crecer por etapas.</h2>
                    <p class="frs-lead">La versión WordPress deja una base visual y funcional para que después se sumen tipos de contenido, perfiles, restricciones de acceso e integraciones.</p>
                </div>
                <div class="frs-card frs-admin-list">
                    <div><i class="ph ph-user-list"></i><span>Usuarios y roles</span></div>
                    <div><i class="ph ph-books"></i><span>Programas y clases</span></div>
                    <div><i class="ph ph-file-text"></i><span>Documentos técnicos</span></div>
                    <div><i class="ph ph-chart-pie-slice"></i><span>Reportes y madurez</span></div>
                </div>
            </div>
        </section>
    </main>
    <?php
}
