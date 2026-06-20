<?php
/**
 * Front page template for Fundación Red Social Academia.
 *
 * @package RedSocialAcademia
 */
if (!defined('ABSPATH')) {
    exit;
}

get_header();

frs_render_page_content_or_fallback('frs_front_page_fallback');

get_footer();

function frs_front_page_fallback() {
    ?>
    <main id="contenido">
        <section class="frs-hero frs-panel-dark">
            <div class="frs-container frs-hero-grid">
                <div class="frs-hero-copy">
                    <span class="frs-kicker">Fundación Red Social · Academia</span>
                    <h1 class="frs-title">Formación, comunidad y tecnología para transformar la atención ciudadana.</h1>
                    <p>Una plataforma institucional para ordenar programas, abrir trayectos de aprendizaje, compartir documentos técnicos y acompañar equipos públicos y sociales con método.</p>
                    <div class="frs-hero-cta-row">
                        <a class="frs-btn-primary" href="#programas"><i class="ph ph-graduation-cap frs-icon"></i> Ver programas</a>
                        <a class="frs-btn-secondary" href="<?php echo esc_url(home_url('/portal/')); ?>"><i class="ph ph-lock-key frs-icon"></i> Ingresar al portal</a>
                    </div>
                </div>
                <div class="frs-hero-panel frs-card">
                    <span class="frs-pill">Sistema vivo</span>
                    <h2 class="frs-title">Sitio público + portal + academia</h2>
                    <p>Una base WordPress preparada para crecer: contenidos editables, navegación institucional y futuras integraciones con usuarios, cursos, reportes y tableros.</p>
                    <div class="frs-mini-stats">
                        <div><strong>3</strong><span>capas</span></div>
                        <div><strong>12</strong><span>módulos</span></div>
                        <div><strong>1</strong><span>marca</span></div>
                    </div>
                </div>
            </div>
        </section>

        <section id="institucional" class="frs-section">
            <div class="frs-container frs-split">
                <div>
                    <span class="frs-kicker">Institucional</span>
                    <h2 class="frs-title">Una red que forma, acompaña y deja capacidades instaladas.</h2>
                </div>
                <div class="frs-rich-text">
                    <p>La Academia Red Social organiza conocimiento, experiencias y herramientas para equipos que necesitan pasar de la intención a la implementación.</p>
                    <p>El foco está puesto en programas aplicables, documentos claros, tableros útiles y comunidades de práctica que permitan sostener el cambio más allá de una capacitación aislada.</p>
                </div>
            </div>
        </section>

        <section id="programas" class="frs-section frs-section-soft">
            <div class="frs-container">
                <div class="frs-section-head">
                    <span class="frs-kicker">Programas</span>
                    <h2 class="frs-title">Trayectos listos para equipos públicos, sociales e institucionales.</h2>
                </div>
                <div class="frs-grid-3">
                    <article class="frs-card-solid frs-card-lift frs-program-card">
                        <i class="ph ph-chats-circle frs-card-icon"></i>
                        <h3>Atención ciudadana</h3>
                        <p>Protocolos, experiencia, canales, indicadores y mejora continua para equipos de primera línea.</p>
                    </article>
                    <article class="frs-card-solid frs-card-lift frs-program-card">
                        <i class="ph ph-chart-line-up frs-card-icon"></i>
                        <h3>Gestión y tableros</h3>
                        <p>Diseño de indicadores, rutinas de seguimiento y tableros ejecutivos para decisiones concretas.</p>
                    </article>
                    <article class="frs-card-solid frs-card-lift frs-program-card">
                        <i class="ph ph-users-three frs-card-icon"></i>
                        <h3>Liderazgo de equipos</h3>
                        <p>Herramientas para mandos medios, responsables operativos y referentes territoriales.</p>
                    </article>
                </div>
            </div>
        </section>

        <section id="academia" class="frs-section">
            <div class="frs-container frs-split frs-split-reverse">
                <div class="frs-card frs-academia-panel">
                    <div class="frs-timeline-item"><span>01</span><p>Diagnóstico de madurez institucional.</p></div>
                    <div class="frs-timeline-item"><span>02</span><p>Capacitación por módulos y roles.</p></div>
                    <div class="frs-timeline-item"><span>03</span><p>Herramientas, reportes y seguimiento.</p></div>
                </div>
                <div>
                    <span class="frs-kicker">Academia</span>
                    <h2 class="frs-title">No alcanza con aprender. Hay que poder aplicar.</h2>
                    <p class="frs-lead">El theme deja preparada la arquitectura para convertir el sitio en una academia editable desde WordPress: páginas, programas, documentos, inscripciones y accesos.</p>
                    <a class="frs-btn-ghost" href="<?php echo esc_url(home_url('/portal/')); ?>">Explorar portal</a>
                </div>
            </div>
        </section>

        <section id="documentos" class="frs-section frs-panel-dark">
            <div class="frs-container frs-section-head frs-section-head-light">
                <span class="frs-kicker">Documentos técnicos</span>
                <h2 class="frs-title">Un repositorio para sostener criterio, no para acumular PDFs.</h2>
                <p>Protocolos, guías, modelos de implementación, manuales de usuario y reportes pueden organizarse desde páginas o entradas de WordPress.</p>
                <div class="frs-hero-cta-row">
                    <a class="frs-btn-primary" href="<?php echo esc_url(admin_url('post-new.php?post_type=page')); ?>">Crear nuevo documento</a>
                    <a class="frs-btn-secondary" href="<?php echo esc_url(home_url('/portal/')); ?>">Ir al portal</a>
                </div>
            </div>
        </section>
    </main>
    <?php
}
