<?php
/**
 * Footer template.
 *
 * @package RedSocialAcademia
 */
if (!defined('ABSPATH')) {
    exit;
}
?>
<footer class="frs-footer">
    <div class="frs-container frs-footer-grid">
        <div>
            <div class="frs-kicker">Fundación Red Social</div>
            <h2 class="frs-title">Ordenar ideas, formar capacidades y convertir propósito en acción.</h2>
        </div>
        <div class="frs-footer-links">
            <?php
            if (has_nav_menu('footer')) {
                wp_nav_menu(array(
                    'theme_location' => 'footer',
                    'container'      => false,
                    'menu_class'     => 'frs-footer-menu',
                    'depth'          => 1,
                ));
            } else {
                echo '<a href="' . esc_url(home_url('/#programas')) . '">Programas</a>';
                echo '<a href="' . esc_url(home_url('/#academia')) . '">Academia</a>';
                echo '<a href="' . esc_url(home_url('/portal/')) . '">Portal</a>';
            }
            ?>
        </div>
    </div>
    <div class="frs-container frs-footer-bottom">
        <span><?php echo esc_html(date_i18n('Y')); ?> — <?php bloginfo('name'); ?></span>
        <span>Theme WordPress Red Social Academia</span>
    </div>
</footer>
<?php wp_footer(); ?>
</body>
</html>
