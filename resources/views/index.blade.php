@extends('layouts.template')

@section('title', $title)

@push('script')
	<script src="{{ $script }}"></script>
@endpush

@section('content')

<!-- Page container -->
<div class="page-container">
  @include('fixed.sidebar')

  <!-- Page content -->
  <div class="page-content">
    <!-- Page header -->
    <div class="page-header">
      <div class="page-title">
        <h3>{{ $title }} <small>Welcome {{ Auth::user()->nama }}.</small></h3>
      </div>
    </div>
    <!-- /page header -->

    <div id="root">

    </div>

    <!-- Footer -->
    <div class="footer clearfix">
      <div class="pull-left">&copy; 2017. {{ config('app.name') }}</div>
      <div class="pull-right icons-group"> <a href="#"><i class="icon-screen2"></i></a> <a href="#"><i class="icon-balance"></i></a> <a href="#"><i class="icon-cog3"></i></a> </div>
    </div>
    <!-- /footer -->
  </div>
  <!-- /page content -->

</div>
<!-- /page container -->
@endsection