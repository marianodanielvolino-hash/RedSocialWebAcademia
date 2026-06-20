<?php
/**
 * Header template.
 *
 * @package RedSocialAcademia
 */
if (!defined('ABSPATH')) {
    exit;
}
?><!doctype html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<a class="frs-skip-link" href="#contenido"><?php esc_html_e('Saltar al contenido', 'red-social-academia'); ?></a>
<header class="frs-site-header">
    <div class="frs-nav-shell">
        <a class="frs-brand" href="<?php echo esc_url(home_url('/')); ?>" aria-label="<?php echo esc_attr(get_bloginfo('name')); ?>">
            <?php if (has_custom_logo()) : ?>
                <?php the_custom_logo(); ?>
            <?php else : ?>
                <span class="frs-brand-mark">RS</span>
                <span class="frs-brand-copy">
                    <strong><?php bloginfo('name'); ?></strong>
                    <em><?php bloginfo('description'); ?></em>
                </span>
            <?php endif; ?>
        </a>
        <button class="frs-menu-toggle" type="button" aria-expanded="false" aria-controls="frs-primary-nav">
            <span></span><span></span><span></span>
            <span class="screen-reader-text"><?php esc_html_e('Abrir menú', 'red-social-academia'); ?></span>
        </button>
        <div id="frs-primary-nav" class="frs-nav-wrap">
            <?php
            if (has_nav_menu('primary')) {
                wp_nav_menu(array(
                    'theme_location' => 'primary',
                    'container'      => false,
                    'menu_class'     => 'frs-nav',
                    'fallback_cb'    => 'frs_default_menu',
                    'depth'          => 1,
                ));
            } else {
                frs_default_menu();
            }
            ?>
        </div>
    </div>
</header>
