<?php
/**
 * Generic page template.
 *
 * @package RedSocialAcademia
 */
if (!defined('ABSPATH')) {
    exit;
}

get_header();
?>
<main id="contenido" class="frs-section">
    <div class="frs-container frs-wp-content">
        <?php if (have_posts()) : ?>
            <?php while (have_posts()) : the_post(); ?>
                <article <?php post_class('frs-card-solid frs-entry-card'); ?>>
                    <span class="frs-kicker">Página</span>
                    <h1 class="frs-title"><?php the_title(); ?></h1>
                    <div class="frs-rich-text">
                        <?php the_content(); ?>
                    </div>
                </article>
            <?php endwhile; ?>
        <?php endif; ?>
    </div>
</main>
<?php
get_footer();
