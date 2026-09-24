<?php
/** Plugin Name: Portfolio demo accessibility support */
add_filter('show_admin_bar','__return_false');
add_action('wp_head',function(){ echo '<style id="portfolio-support">html{scroll-padding-top:24px}body{margin:0}p:last-child{margin-bottom:0}a:focus-visible,button:focus-visible{outline:3px solid #1644d6;outline-offset:5px}.portfolio-skip{position:absolute;left:12px;top:-100px;z-index:999999;background:white;color:#122141;padding:14px}.portfolio-skip:focus{top:12px}.elementor-widget-heading h1,.elementor-widget-heading h2{overflow-wrap:normal}.e-con{min-width:0}@media(prefers-reduced-motion:reduce){html{scroll-behavior:auto!important}*{animation:none!important;transition:none!important}}</style>'; });
add_action('wp_body_open',function(){echo '<a class="portfolio-skip" href="#main-content">Skip to content</a>';});
