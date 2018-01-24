<template>
    <div>
	    <!-- Breadcrumbs line -->
	    <div class="breadcrumb-line">
	      <ul class="breadcrumb">
	        <li><router-link :to="{name: 'content'}">Home</router-link></li>
	        <li class="active">Transaksi</li>
	      </ul>
	    </div>
	    <!-- /breadcrumbs line -->
	    <div class="panel panel-default">
	      	<div class="panel-heading">
	        	<h6 class="panel-title"><i class="icon-users"></i> Data Transaksi</h6>
				<router-link :to="{name:'transaksi-tambah'}" class="btn btn-success btn-sm pull-right">Tambah</router-link>
	        </div>
	        <div class="table-responsive">

	          <table class="table table-striped table-bordered">
	            <thead>
	              <tr>
	                <th>Tanggal</th>
	                <th>Total Bayar</th>
	                <th class="actions">#</th>
	              </tr>
	            </thead>
	            <tbody>
	              <tr v-for="item in data">
	                <td>{{item.tanggal}}</td>
	                <td>{{item.total_bayar}}</td>
	                <td>
						<div class="btn-group btn-group-sm pull-right">
							<button class="btn btn-sm btn-info dropdown-toggle" data-toggle="dropdown"> Action<span class="caret"></span> </button>
							<ul class="dropdown-menu icons-right">
								<li><router-link :to="{name: 'provinsi-edit', params:{id: item.id}}"><i class="icon-pencil3"></i> Lihat</router-link></li>
							</ul>
						</div>
	                </td>
	              </tr>
	            </tbody>
	          </table>
	        </div>
	    </div>
    </div>
</template>

<script>
	import {mapGetters, mapActions} from 'vuex'
	export default{
		name: 'Index',
		data(){
			return {
				data: [],
				url: '/api/dc/transaksi'
			}
		},
		computed:{
			...mapGetters({'table':'table/table', 'token': 'token', 'user': 'user/user'})
		},
		methods:{
			...mapActions({
				setTableVuex: 'table/setTable',
				showLoad: 'showLoading',
				hideLoading: 'hideLoading'
			}),
			setTable(){
				let self = this
				self.showLoad()
				self.$http.get(`${self.url}`, {
					headers:{
						Authorization: `Bearer ${self.token}`
					}
				}).then(res => {
					Vue.set(this.$data, 'data', res.data)
					this.hideLoading()
				}).catch(error => {
					if (error.status === 401) {
						setTimeout(function() {
							self.setTable()
						}, 1000);
					}
				})
			},
		},
		created (){
			this.setTable()
		},

	}
</script>

<style lang="scss" scoped>
	.actions{
		width: 150px;
	}
</style>