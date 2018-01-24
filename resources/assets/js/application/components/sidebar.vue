<template>
  <!-- Sidebar -->
  <div class="sidebar collapse">
    <div class="sidebar-content">
    	
      <!-- User dropdown -->
      <div class="user-menu dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown"><img src="#" alt="">
        <div class="user-info">{{ user.nama }}<span>{{ user.status }}</span></div>
        </a>
      </div>
      <!-- /user dropdown -->

      <!-- Main navigation -->
      <ul class="navigation">
        <li v-bind:class="{'active': menuName == 'content'}"><router-link :to="{name: 'content'}"><span>Dashboard</span> <i class="icon-screen2"></i></router-link></li>
        <li v-bind:class="{'active': menuName == 'pegawai'}"><router-link :to="{name:'pegawai-index', params:{id:''}}"><span>Pegawai</span> <i class="icon-users"></i></router-link></li>
        <li v-if="user.status == 'marketing'" v-bind:class="{'active': menuName == 'kuesioner'}"><router-link :to="{name:'kuesioner-index', params:{id:''}}"><span>Kuesioner</span> <i class="icon-users"></i></router-link></li>
        <li v-if="user.status == 'marketing'" v-bind:class="{'active': menuName == 'provinsi'}"><router-link :to="{name:'provinsi-index', params:{id:''}}"><span>Provinsi</span> <i class="icon-users"></i></router-link></li>
        <li v-if="user.status == 'marketing'" v-bind:class="{'active': menuName == 'kota'}"><router-link :to="{name:'kota-index', params:{id:''}}"><span>Kota</span> <i class="icon-users"></i></router-link></li>
        <li v-bind:class="{'active': menuName == 'pelanggan'}"><router-link :to="{name:'pelanggan-index', params:{id:''}}"><span>Pelanggan</span> <i class="icon-users"></i></router-link></li>
        <li v-if="user.status == 'marketing'" v-bind:class="{'active': menuName == 'kategori'}"><router-link :to="{name:'kategori-index', params:{id:''}}"><span>Kategori</span> <i class="icon-users"></i></router-link></li>
        <li v-bind:class="{'active': menuName == 'produk'}"><router-link :to="{name:'produk-index', params:{id:''}}"><span>Produk</span> <i class="icon-users"></i></router-link></li>
        <li v-bind:class="{'active': menuName == 'promosi'}"><router-link :to="{name:'promosi-index', params:{id:''}}"><span>Promosi</span> <i class="icon-users"></i></router-link></li>

        <li v-bind:class="{'active': menuName == 'hasil-kuesioner'}"><router-link :to="{name:'hasil-kuesioner', params:{id:''}}"><span>Hasil Kuesioner</span> <i class="icon-users"></i></router-link></li>

        <li v-bind:class="{'active': menuName == 'desain'}"><router-link :to="{name:'desain-index', params:{id:''}}"><span>Desain</span> <i class="icon-users"></i></router-link></li>
        <li v-bind:class="{'active': menuName == 'transaksi'}"><router-link :to="{name:'transaksi-index', params:{id:''}}"><span>Transaksi</span> <i class="icon-users"></i></router-link></li>
        
      </ul>
      <!-- /main navigation -->
    </div>
  </div>
  <!-- /sidebar -->
</template>

<script>
  import {mapGetters} from 'vuex'
  export default{
    name: "Sidebar",
    props: ['user'],
    computed:{
      menuName(){
        return this.$store.state.route.meta.menu
      }
    }
  }
</script>