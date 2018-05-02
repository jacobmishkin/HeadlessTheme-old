<?php

// Add About Us menu
function register_menus() {
	register_nav_menu( 'main-nav', __( 'Main Nav', 'postlight-headless-wp' ) );
	register_nav_menu( 'mobile-nav', __( 'Mobile Nav', 'postlight-headless-wp' ) );
	register_nav_menu( 'header-menu', __( 'Header Menu', 'postlight-headless-wp' ) );
}
add_action( 'after_setup_theme', 'register_menus' );
