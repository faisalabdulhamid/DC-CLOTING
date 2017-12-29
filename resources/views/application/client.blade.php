<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
        <title>{{ config('app.name', 'DC-CLOTHING') }}</title>
        <link rel="stylesheet" href="{{ asset('css/client.css') }}">
        <meta name="csrf-token" content="{{ csrf_token() }}">
    </head>
    <body>
        <div id="vue-wrapper">
            {{-- <App-Vue></App-Vue> --}}
        </div>
        <script type="text/javascript" src="{{ asset('js/client.js') }}"></script>
    </body>
</html>
