<template>
  <!-- Sidebar -->
  <div class="sidebar collapse">
    <div class="sidebar-content">
    	
      <!-- User dropdown -->
      <div class="user-menu dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown"><img src="#" alt="">
        <div class="user-info">{{user.nama}}<span>{{user.status}}</span></div>
        </a>
      </div>
      <!-- /user dropdown -->

      <!-- Main navigation -->
      <ul class="navigation">
        <!-- <li><router-link :to="'/admin/home'"><span>Dashboard</span> <i class="icon-screen2"></i></router-link></li> -->
        <li><router-link :to="'/admin/pegawai'"><span>Pegawai</span> <i class="icon-users"></i></router-link></li>
        <li><router-link :to="'/admin/pelanggan'"><span>Pelanggan</span> <i class="icon-users"></i></router-link></li>
        <li><router-link :to="'/admin/desain'"><span>Desain</span> <i class="icon-users"></i></router-link></li>
        <li><router-link :to="'/admin/transaksi'"><span>Transaksi</span> <i class="icon-users"></i></router-link></li>
        <li><router-link :to="'/admin/kuesioner'"><span>Kuesioner</span> <i class="icon-users"></i></router-link></li>
        <li><router-link :to="'/admin/produk'"><span>Produk</span> <i class="icon-users"></i></router-link></li>
        <li><router-link :to="'/admin/promosi'"><span>Promosi</span> <i class="icon-users"></i></router-link></li>
        <li><router-link :to="'/admin/kuesioner/hasil'"><span>Hasil Kusioner</span> <i class="icon-users"></i></router-link></li>
        
      </ul>
      <!-- /main navigation -->
    </div>
  </div>
  <!-- /sidebar -->
</template>

<script>
	export default{
		name: 'Sidebar',
    computed: {
      user (){
        return this.$session.get('user_admin')
      }
    }
	}
</script>