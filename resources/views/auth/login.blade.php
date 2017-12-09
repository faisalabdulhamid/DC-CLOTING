@extends('layouts.template')

@section('content')
<!-- Login wrapper -->
<div class="login-wrapper">
  <form action="{{ route('login') }}" role="form" method="POST">
    {{ csrf_field() }}
    <div class="popup-header"><span class="text-semibold">Login</span>
      <div class="btn-group pull-right"><a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="icon-cogs"></i></a>
        <ul class="dropdown-menu icons-right dropdown-menu-right">
          <li><a href="#"><i class="icon-info"></i> Forgot password?</a></li>
        </ul>
      </div>
    </div>
    <div class="well" id="root">
      
      <div class="form-group has-feedback{{ $errors->has('email') ? ' has-error' : '' }}">
        <label>Email</label>
        <input type="text" class="form-control" placeholder="Email" name="email" v-model="data.email" value="{{ old('email') }}" required autofocus>
        <i class="icon-users form-control-feedback"></i>
        @if ($errors->has('email'))
            <span class="help-block">
                <strong>{{ $errors->first('email') }}</strong>
            </span>
        @endif
      </div>
      
      <div class="form-group has-feedback{{ $errors->has('password') ? ' has-error' : '' }}">
        <label>Password</label>
        <input type="password" class="form-control" placeholder="Password" name="password" v-model="data.password" required>
        <i class="icon-lock form-control-feedback"></i>
        @if ($errors->has('password'))
            <span class="help-block">
                <strong>{{ $errors->first('password') }}</strong>
            </span>
        @endif
      </div>
      
      <div class="row form-actions">
        <div class="col-xs-6">
          <div class="checkbox checkbox-success">
            <label>
              <input type="checkbox" class="styled" name="remember" {{ old('remember') ? 'checked' : '' }}> Remember Me
            </label>
          </div>
        </div>
        <div class="col-xs-6">
          <button type="submit" class="btn btn-warning pull-right" v-on:click="login"><i class="icon-menu2"></i> Login</button>
        </div>
      </div>

    </div>
  </form>
</div>
<!-- /login wrapper -->
@endsection

@push('script')
  <script src="{{ asset('js/login.js') }}"></script>
@endpush