<?php

namespace WPNuxt\Http\Controllers\Dashboard;

use WPNuxt\Http\Controllers\Controller;

if (!defined('ABSPATH')) {
  exit();
}

class DashboardController extends Controller
{
  public function index()
  {
    return WPNuxt()
      ->view('dashboard.index')
      ->withAdminStyle('prism')
      ->withAdminScript('prism')
      ->withAdminStyle('wpnuxt-common')
      ->withAdminAppsScript('app');
  }

  public function components()
  {
    return WPNuxt()
      ->view('dashboard.components')
      ->withAdminStyle('wpnuxt-common')
      ->withAdminAppsScript('app');
  }

  public function tools()
  {
    return WPNuxt()
      ->view('dashboard.tools')
      ->withAdminStyle('wpnuxt-common')
      ->withAdminAppsScript('app');
  }
}
