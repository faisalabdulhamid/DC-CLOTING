  <!-- Sidebar -->
  <div class="sidebar collapse">
    <div class="sidebar-content">

      <!-- User dropdown -->
      <div class="user-menu dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown"><img src="images/demo/users/face3.png" alt="">
        <div class="user-info">{{ Auth::user()->nama }} <span>{{ Auth::user()->status }}</span></div>
        </a>
        <div class="popup dropdown-menu dropdown-menu-right">
          <div class="thumbnail">
            <div class="thumb"><img alt="" src="images/demo/users/face3.png">
              <div class="thumb-options"><span><a href="#" class="btn btn-icon btn-success"><i class="icon-pencil"></i></a><a href="#" class="btn btn-icon btn-success"><i class="icon-remove"></i></a></span></div>
            </div>
            <div class="caption text-center">
              <h6>{{ Auth::user()->nama }} <small>{{ Auth::user()->status }}</small></h6>
            </div>
          </div>
        </div>
      </div>
      <!-- /user dropdown -->

      <!-- Main navigation -->
      <ul class="navigation">
        <li class="active"><a href="{{ route('home') }}"><span>Dashboard</span> <i class="icon-screen2"></i></a></li>
        <li><a href="{{ route('pegawai') }}"><span>Pegawai</span> <i class="icon-screen2"></i></a></li>
        <li><a href="{{ route('pelanggan') }}"><span>Pelanggan</span> <i class="icon-screen2"></i></a></li>
        <li><a href="{{ route('kuesioner') }}"><span>Kuesioner</span> <i class="icon-screen2"></i></a></li>
        <li><a href="{{ route('kota') }}"><span>Kota</span> <i class="icon-screen2"></i></a></li>
      </ul>
      <!-- /main navigation -->
    </div>
  </div>
  <!-- /sidebar -->