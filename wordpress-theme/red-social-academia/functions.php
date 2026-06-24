<?php
/**
 * Fundación Red Social Academia — WordPress theme functions.
 *
 * @package RedSocialAcademia
 */

if (!defined('ABSPATH')) {
    exit;
}

define('FRS_THEME_VERSION', '1.0.0');

function frs_theme_setup() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('custom-logo', array(
        'height'      => 96,
        'width'       => 320,
        'flex-height' => true,
        'flex-width'  => true,
    ));
    add_theme_support('html5', array('search-form', 'comment-form', 'comment-list', 'gallery', 'caption', 'style', 'script'));
    add_theme_support('align-wide');
    add_theme_support('responsive-embeds');

    register_nav_menus(array(
        'primary' => __('Menú principal', 'red-social-academia'),
        'footer'  => __('Menú de pie', 'red-social-academia'),
    ));
}
add_action('after_setup_theme', 'frs_theme_setup');

function frs_theme_enqueue_assets() {
    wp_enqueue_style(
        'frs-google-fonts',
        'https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;500;600;700;800&family=Newsreader:opsz,wght@6..72,500;6..72,600;6..72,700&display=swap',
        array(),
        null
    );

    wp_register_script('frs-tailwind', 'https://cdn.tailwindcss.com', array(), null, false);
    wp_add_inline_script('frs-tailwind', frs_tailwind_config(), 'before');
    wp_enqueue_script('frs-tailwind');

    wp_enqueue_style(
        'frs-ui',
        get_template_directory_uri() . '/assets/css/frs-ui.css',
        array('frs-google-fonts'),
        FRS_THEME_VERSION
    );

    wp_enqueue_script('frs-phosphor-icons', 'https://unpkg.com/@phosphor-icons/web', array(), null, true);
    wp_enqueue_script('frs-jspdf', 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js', array(), '2.5.1', true);
    wp_enqueue_script('frs-pocketbase', 'https://unpkg.com/pocketbase/dist/pocketbase.umd.js', array(), null, true);

    wp_enqueue_script(
        'frs-theme',
        get_template_directory_uri() . '/assets/js/frs-theme.js',
        array(),
        FRS_THEME_VERSION,
        true
    );

    wp_localize_script('frs-theme', 'FRSTheme', array(
        'siteUrl'      => esc_url_raw(home_url('/')),
        'portalUrl'    => esc_url_raw(home_url('/portal/')),
        'themeUrl'     => esc_url_raw(get_template_directory_uri()),
        'pocketbaseUrl'=> esc_url_raw(apply_filters('frs_pocketbase_url', '')),
        'ajaxUrl'      => esc_url_raw(admin_url('admin-ajax.php')),
    ));
}
add_action('wp_enqueue_scripts', 'frs_theme_enqueue_assets');

function frs_tailwind_config() {
    return "window.tailwind = window.tailwind || {};\n" .
        "window.tailwind.config = { theme: { extend: {" .
        "colors: { papel: '#F7F1E7', 'papel-soft': '#FFFAF2', arena: '#E4D8C4', 'arena-soft': '#EFE6D6', tierra: '#33281F', umber: '#2E2117', magenta: '#ED1686', naranja: '#FF9E19', cobre: '#D98A3D' }," .
        "fontFamily: { sans: ['Hanken Grotesk','system-ui','sans-serif'], serif: ['Newsreader','Georgia','serif'] }," .
        "boxShadow: { marca: '0 14px 32px rgba(237, 22, 134, 0.28)', suave: '0 12px 28px rgba(46, 33, 23, 0.08)' }," .
        "borderRadius: { marca: '18px' }," .
        "backgroundImage: { 'frs-grad': 'linear-gradient(135deg, #ED1686 0%, #FF9E19 100%)' }" .
        "} } };";
}

function frs_body_classes($classes) {
    $classes[] = 'frs-page';
    $classes[] = 'frs-wp-theme';
    return $classes;
}
add_filter('body_class', 'frs_body_classes');

function frs_default_menu() {
    $items = array(
        array('label' => 'Institucional', 'url' => home_url('/#institucional')),
        array('label' => 'Programas', 'url' => home_url('/#programas')),
        array('label' => 'Academia', 'url' => home_url('/#academia')),
        array('label' => 'Documentos', 'url' => home_url('/#documentos')),
        array('label' => 'Portal', 'url' => home_url('/portal/'), 'class' => 'frs-btn-primary frs-btn-small'),
    );

    echo '<nav class="frs-nav" aria-label="Menú principal">';
    foreach ($items as $item) {
        $class = isset($item['class']) ? $item['class'] : 'frs-nav-link';
        printf('<a class="%1$s" href="%2$s">%3$s</a>', esc_attr($class), esc_url($item['url']), esc_html($item['label']));
    }
    echo '</nav>';
}

function frs_render_page_content_or_fallback($fallback_callback) {
    if (have_posts()) {
        while (have_posts()) {
            the_post();
            $content = trim(get_the_content());
            if (!empty($content)) {
                echo '<main id="contenido" class="frs-wp-content frs-section">';
                echo '<div class="frs-container">';
                the_content();
                echo '</div>';
                echo '</main>';
                return;
            }
        }
    }

    if (is_callable($fallback_callback)) {
        call_user_func($fallback_callback);
    }
}

function frs_theme_enqueue_portal_assets() {
    if (is_page_template('page-portal.php')) {
        // Enqueue React CSS
        wp_enqueue_style(
            'frs-portal-css',
            get_template_directory_uri() . '/assets/css/frs-portal.css',
            array('frs-google-fonts'),
            FRS_THEME_VERSION
        );

        // Enqueue React JS
        wp_enqueue_script(
            'frs-portal-js',
            get_template_directory_uri() . '/assets/js/frs-portal.js',
            array(),
            FRS_THEME_VERSION,
            true
        );
        
        // Hide standard theme header/footer for the React app
        wp_add_inline_style('frs-portal-css', '
            .page-template-page-portal .frs-site-header { display: none !important; }
            .page-template-page-portal .frs-site-footer { display: none !important; }
            .page-template-page-portal body { background-color: #2E2117 !important; }
        ');
    }
}
add_action('wp_enqueue_scripts', 'frs_theme_enqueue_portal_assets');

