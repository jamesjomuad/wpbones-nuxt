<!--
 |
 | In $plugin you'll find an instance of Plugin class.
 | If you'd like can pass variable to this view, for example:
 |
 | return PluginClassName()->view( 'dashboard.index', [ 'var' => 'value' ] );
 |
-->

<?php ob_start() ?>

<div class="wpnuxt wrap wpnuxt-sample">

  <div class="wpnuxt-toc-content">

    <?php wpkirk_section(__('Live Demo', 'wpnuxt')); ?>
    <p>
      <?= esc_html__(
        'Vue dashboard built with Nuxt 3 + the Vue 3 Composition API — no third-party UI kit. Uses Nuxt SPA mode, file-based routing, auto-imported composables, and WordPress admin CSS classes. State uses Vue ref(), i18n uses wp.i18n.__() from the WordPress global.',
        'wpnuxt'
      ) ?>
    </p>

    <div id="__nuxt" data-initial-route="/"></div>

    <?php wpkirk_section(__('Vue Entry', 'wpnuxt')); ?>
    <?php wpkirk_code('@/pages/index.vue'); ?>

    <?php wpkirk_section(__('Custom Composable', 'wpnuxt')); ?>
    <?php wpkirk_code('@/composables/use-counter.ts'); ?>

    <?php wpkirk_section(__('Vitest Test', 'wpnuxt')); ?>
    <?php wpkirk_code('@/composables/__tests__/use-counter.test.ts'); ?>

    <?php wpkirk_section(__('Controller', 'wpnuxt')); ?>
    <?php wpkirk_code('@/plugin/Http/Controllers/Dashboard/DashboardController.php'); ?>

    <?php wpkirk_section(__('Package.json', 'wpnuxt')); ?>
    <?php wpkirk_code('@/package.json'); ?>

    <?php wpkirk_section(__('Developing', 'wpnuxt')); ?>
    <?php wpkirk_code('yarn dev', ['language' => 'sh']); ?>

    <?php wpkirk_section(__('Build', 'wpnuxt')); ?>
    <?php wpkirk_code('yarn build', ['language' => 'sh']); ?>

    <?php wpkirk_section(__('Test', 'wpnuxt')); ?>
    <?php wpkirk_code('yarn test', ['language' => 'sh']); ?>

  </div>

  <?php wpkirk_toc('Vue') ?>

</div>
