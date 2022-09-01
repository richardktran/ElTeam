<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Laravel</title>
    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <!-- All Generated styles form dashlite -->
    <link rel="stylesheet" href="{{ asset('assets/css/dashlite.css') }}">
    <!-- This file is for you to include your own styles -->
    <link rel="stylesheet" href="{{ asset('assets/css/theme.css') }}">

    <!-- Premade Skin style -->
    <link rel="stylesheet" href="{{ asset('assets/css/skins/theme-green.css') }}">
</head>
<body class="nk-body ui-rounder npc-apps apps-only has-sidebar npc-apps-kanban no-touch nk-nio-theme">
    <!-- React root DOM -->
    <div id="app"></div>
    <!-- React JS -->
    <script src="{{ asset('js/app.js') }}" defer></script>

    <!-- Bundles of Included plugins -->
    <script src="{{ asset('assets/js/bundle.js') }}"></script>
    <!-- Init Code for plugins and custom sctipts -->
    <script src="{{ asset('assets/js/scripts.js') }}"></script>
    <!-- Chart init For General Dashboard -->
    <script src="{{ asset('assets/js/charts/gd-default.js') }}"></script>
    <script src="{{ asset('assets/js/charts/gd-analytics.js') }}"></script>
    <script src="{{ asset('assets/js/charts/gd-invest.js') }}"></script>
    <!-- Example code for sweetalert2 -->
    <script src="{{ asset('assets/js/example-sweetalert.js') }}"></script>
    <!-- Example code for toastr -->
    <script src="{{ asset('assets/js/example-toastr.js') }}"></script>
    <!-- Example code for chart -->
    <script src="{{ asset('assets/js/example-chart.js') }}"></script>

    <script src="{{ asset('assets/js/libs/jkanban.js') }}"></script>
    <!-- <script src="{{ asset('assets/js/apps/kanban.js') }}"></script> -->
</body>
</html>
