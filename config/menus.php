<?php

if (!defined('ABSPATH')) {
  exit();
}

/*
|--------------------------------------------------------------------------
| Plugin Menus routes
|--------------------------------------------------------------------------
|
| Here is where you can register all the menu routes for a plugin.
| In this context, the route are the menu link.
|
*/

return [
  'wpnuxt_slug_menu' => [
    "page_title" => "NuxtJS",
    "menu_title" => "NuxtJS",
    'capability' => 'read',
    'icon' => 'dashicons-editor-code',
    'items' => [
      [
        "page_title" => __('Dashboard', 'wpnuxt'),
        "menu_title" => __('Dashboard', 'wpnuxt'),
        'capability' => 'read',
        'route' => [
          'get' => 'Dashboard\DashboardController@index'
        ],
      ],
      [
        "page_title" => __('Components', 'wpnuxt'),
        "menu_title" => __('Components', 'wpnuxt'),
        'capability' => 'read',
        'route' => [
          'get' => 'Dashboard\DashboardController@components'
        ],
      ],
      [
        "page_title" => __('Tools', 'wpnuxt'),
        "menu_title" => __('Tools', 'wpnuxt'),
        'capability' => 'read',
        'route' => [
          'get' => 'Dashboard\DashboardController@tools'
        ],
      ],
    ]
  ]
];
