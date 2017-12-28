<template>
  <!-- Sidebar -->
  <div class="sidebar collapse">
    <div class="sidebar-content">
    	
      <!-- User dropdown -->
      <div class="user-menu dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown"><img src="#" alt="">
        <div class="user-info">{{ user.nama }}<span>Web Developer</span></div>
        </a>
        <div class="popup dropdown-menu dropdown-menu-right">
          <div class="thumbnail">
            <div class="thumb"><img alt="" src="#">
              <div class="thumb-options"><span><a href="#" class="btn btn-icon btn-success"><i class="icon-pencil"></i></a><a href="#" class="btn btn-icon btn-success"><i class="icon-remove"></i></a></span></div>
            </div>
            <div class="caption text-center">
              <h6>{{user.nama}} <small>Front end developer</small></h6>
            </div>
          </div>
          <ul class="list-group">
            <li class="list-group-item"><i class="icon-pencil3 text-muted"></i> My posts <span class="label label-success">289</span></li>
            <li class="list-group-item"><i class="icon-people text-muted"></i> Users online <span class="label label-danger">892</span></li>
            <li class="list-group-item"><i class="icon-stats2 text-muted"></i> Reports <span class="label label-primary">92</span></li>
            <li class="list-group-item"><i class="icon-stack text-muted"></i> Balance
              <h5 class="pull-right text-danger">$45.389</h5>
            </li>
          </ul>
        </div>
      </div>
      <!-- /user dropdown -->

      <!-- Main navigation -->
      <ul class="navigation">
        <li v-bind:class="{'active': menuName == 'content'}"><router-link :to="{name: 'content'}"><span>Dashboard</span> <i class="icon-screen2"></i></router-link></li>
        <li v-bind:class="{'active': menuName == 'pegawai'}"><router-link :to="{name:'pegawai-index', params:{id:''}}"><span>Pegawai</span> <i class="icon-users"></i></router-link></li>
        <li v-bind:class="{'active': menuName == 'kuesioner'}"><router-link :to="{name:'kuesioner-index', params:{id:''}}"><span>Kuesioner</span> <i class="icon-users"></i></router-link></li>
        <li v-bind:class="{'active': menuName == 'provinsi'}"><router-link :to="{name:'provinsi-index', params:{id:''}}"><span>Provinsi</span> <i class="icon-users"></i></router-link></li>
        <li v-bind:class="{'active': menuName == 'kota'}"><router-link :to="{name:'kota-index', params:{id:''}}"><span>Kota</span> <i class="icon-users"></i></router-link></li>
        <li v-bind:class="{'active': menuName == 'pelanggan'}"><router-link :to="{name:'pelanggan-index', params:{id:''}}"><span>Pelanggan</span> <i class="icon-users"></i></router-link></li>
        <li v-bind:class="{'active': menuName == 'kategori'}"><router-link :to="{name:'kategori-index', params:{id:''}}"><span>Kategori</span> <i class="icon-users"></i></router-link></li>
        <li v-bind:class="{'active': menuName == 'produk'}"><router-link :to="{name:'produk-index', params:{id:''}}"><span>Produk</span> <i class="icon-users"></i></router-link></li>

        <li v-bind:class="{'active': menuName == 'hasil-kuesioner'}"><router-link :to="{name:'hasil-kuesioner', params:{id:''}}"><span>Hasil Kuesioner</span> <i class="icon-users"></i></router-link></li>

        <li v-bind:class="{'active': menuName == 'desain'}"><router-link :to="{name:'desain', params:{id:''}}"><span>Desain</span> <i class="icon-users"></i></router-link></li>
        
        <li><a href="#" class="expand"><span>{{menuName}}</span> <i class="icon-coin"></i></a>
          <ul>
            <li><a href="invoice.html">Invoice template</a></li>
            <li><a href="invoice_list.html">Invoice list</a></li>
          </ul>
        </li>
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