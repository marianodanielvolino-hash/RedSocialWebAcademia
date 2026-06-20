<?php
/**
 * Fallback index template.
 *
 * @package RedSocialAcademia
 */
if (!defined('ABSPATH')) {
    exit;
}

get_header();
?>
<main id="contenido" class="frs-section">
    <div class="frs-container frs-content-list">
        <?php if (have_posts()) : ?>
            <?php while (have_posts()) : the_post(); ?>
                <article <?php post_class('frs-card-solid frs-entry-card'); ?>>
                    <h1 class="frs-title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h1>
                    <div class="frs-rich-text">
                        <?php the_excerpt(); ?>
                    </div>
                </article>
            <?php endwhile; ?>
            <?php the_posts_navigation(); ?>
        <?php else : ?>
            <section class="frs-card-solid frs-entry-card">
                <span class="frs-kicker">Sin contenido</span>
                <h1 class="frs-title">Todavía no hay publicaciones.</h1>
                <p>Creá una página y asignala como portada para comenzar.</p>
            </section>
        <?php endif; ?>
    </div>
</main>
<?php
get_footer();
