<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="csrf-token" content="{{ csrf_token() }}">
<title>{!! isset($title) ? $title: config('app.name') !!}</title>
<link href="{{ asset('css/bootstrap.min.css') }}" rel="stylesheet" type="text/css">
<link href="{{ asset('css/londinium-theme.min.css') }}" rel="stylesheet" type="text/css">
<link href="{{ asset('css/styles.min.css') }}" rel="stylesheet" type="text/css">
<link href="{{ asset('css/icons.min.css') }}" rel="stylesheet" type="text/css">
<link href="http://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700&amp;subset=latin,cyrillic-ext" rel="stylesheet" type="text/css">
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js"></script>
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.2/jquery-ui.min.js"></script>
<script type="text/javascript" src="{{ asset('js/plugins/charts/sparkline.min.js') }}"></script>
<script type="text/javascript" src="{{ asset('js/plugins/forms/uniform.min.js') }}"></script>
<script type="text/javascript" src="{{ asset('js/plugins/forms/select2.min.js') }}"></script>
<script type="text/javascript" src="{{ asset('js/plugins/forms/inputmask.js') }}"></script>
<script type="text/javascript" src="{{ asset('js/plugins/forms/autosize.js') }}"></script>
<script type="text/javascript" src="{{ asset('js/plugins/forms/inputlimit.min.js') }}"></script>
<script type="text/javascript" src="{{ asset('js/plugins/forms/listbox.js') }}"></script>
<script type="text/javascript" src="{{ asset('js/plugins/forms/multiselect.js') }}"></script>
<script type="text/javascript" src="{{ asset('js/plugins/forms/validate.min.js') }}"></script>
<script type="text/javascript" src="{{ asset('js/plugins/forms/tags.min.js') }}"></script>
<script type="text/javascript" src="{{ asset('js/plugins/forms/switch.min.js') }}"></script>
<script type="text/javascript" src="{{ asset('js/plugins/forms/uploader/plupload.full.min.js') }}"></script>
<script type="text/javascript" src="{{ asset('js/plugins/forms/uploader/plupload.queue.min.js') }}"></script>
<script type="text/javascript" src="{{ asset('js/plugins/forms/wysihtml5/wysihtml5.min.js') }}"></script>
<script type="text/javascript" src="{{ asset('js/plugins/forms/wysihtml5/toolbar.js') }}"></script>
<script type="text/javascript" src="{{ asset('js/plugins/interface/daterangepicker.js') }}"></script>
<script type="text/javascript" src="{{ asset('js/plugins/interface/fancybox.min.js') }}"></script>
<script type="text/javascript" src="{{ asset('js/plugins/interface/moment.js') }}"></script>
<script type="text/javascript" src="{{ asset('js/plugins/interface/jgrowl.min.js') }}"></script>
<script type="text/javascript" src="{{ asset('js/plugins/interface/datatables.min.js') }}"></script>
<script type="text/javascript" src="{{ asset('js/plugins/interface/colorpicker.js') }}"></script>
<script type="text/javascript" src="{{ asset('js/plugins/interface/fullcalendar.min.js') }}"></script>
<script type="text/javascript" src="{{ asset('js/plugins/interface/timepicker.min.js') }}"></script>
<script type="text/javascript" src="{{ asset('js/plugins/interface/collapsible.min.js') }}"></script>
<script type="text/javascript" src="{{ asset('js/bootstrap.min.js') }}"></script>
<script type="text/javascript" src="{{ asset('js/application.js') }}"></script>
</head>
<body class="{{ isset($class_body)? $class_body: 'sidebar-wide' }}">
<!-- Navbar -->
<div class="navbar navbar-inverse" role="navigation">
  <div class="navbar-header">
    @guest
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-right"><span class="sr-only">Toggle navbar</span><i class="icon-grid3"></i></button><a class="navbar-brand" href="#"><img src="images/logo.png" alt="{{ config('app.name') }}"></a>
    @else
      <a class="navbar-brand" href="#"><img src="images/logo.png" alt="{{ config('app.name') }}"></a>
      <a class="sidebar-toggle"><i class="icon-paragraph-justify2"></i></a>
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-icons"><span class="sr-only">Toggle navbar</span><i class="icon-grid3"></i></button>
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".sidebar"><span class="sr-only">Toggle navigation</span><i class="icon-paragraph-justify2"></i></button>
    @endguest
    

  </div>

  <ul class="nav navbar-nav navbar-right collapse" id="navbar-icons">
    @guest
      <li><a href="#"><i class="icon-screen2"></i></a></li>
    @else
      <li><a href="#"><i class="icon-screen2"></i></a></li>
      <li class="user dropdown"><a class="dropdown-toggle" data-toggle="dropdown"><img src="images/demo/users/face1.png" alt=""><span>{{ Auth::user()->nama }}</span><i class="caret"></i></a>
        <ul class="dropdown-menu dropdown-menu-right icons-right">
          <li><a href="#"><i class="icon-user"></i> Profile</a></li>
          <li><a href="{{ route('logout') }}" onclick="event.preventDefault();
            document.getElementById('logout-form').submit();"><i class="icon-exit"></i> Logout</a></li>
          <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
            {{ csrf_field() }}
          </form>

        </ul>
      </li>
    @endguest
    
  </ul>
</div>
<!-- /navbar -->

@yield('content')

@stack('script')

</body>
</html>