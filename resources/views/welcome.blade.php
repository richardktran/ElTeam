<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>ELTEAM - Hệ thống quản lý lớp học trực tuyến</title>
    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.22.8/antd.min.css"
        integrity="sha512-iOT5HSqFWSZXl9hh4FR611IAgH2waKnC4EZWS0qG9eLnEVbgLfLRKyFnEPg87hijj6Ae/xWpRbX69syPz0yDcg=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
    <!-- All Generated styles form dashlite -->
    <link rel="stylesheet" href="{{ asset('assets/css/dashlite.css') }}">
    <!-- This file is for you to include your own styles -->
    <link rel="stylesheet" href="{{ asset('assets/css/theme.css') }}">
    <!-- Landing Page style -->
    <link rel="stylesheet" href="{{ asset('assets/css/style.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/css/dark.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/css/animate.css') }}">

    <!-- Premade Skin style -->
    <link rel="stylesheet" href="{{ asset('assets/css/skins/theme-green.css') }}">
</head>

<body class="nk-body ui-rounder npc-apps apps-only has-sidebar npc-apps-kanban no-touch nk-nio-theme ">
    <!-- React root DOM -->
    <div id="app"></div>
    <!-- React JS -->
    <script src="{{ asset('js/app.js') }}" defer></script>

    <!-- Bundles of Included plugins -->
    <script src="{{ asset('assets/js/bundle.js') }}"></script>
    <!-- Init Code for plugins and custom sctipts -->
    {{-- <script src="{{ asset('assets/js/scripts.js') }}"></script> --}}

    <script src="https://cdnjs.cloudflare.com/ajax/libs/antd/4.22.8/antd.min.js"
        integrity="sha512-dtQXhvIEnL0GDESCQv3IangKrqVgXaDptZyosKYHMNo2Up/yeiPQCIECPfnQnuhW+y8KYFRO/L2+nfIXU0X4qw=="
        crossorigin="anonymous" referrerpolicy="no-referrer"></script>

    <!-- Example code for sweetalert2 -->
    <script src="{{ asset('assets/js/example-sweetalert.js') }}"></script>
    <script src="{{ asset('assets/js/libs/fullcalendar.js') }}"></script>
    <script src="{{ asset('assets/js/apps/calendar.js') }}"></script>

</body>

</html>
