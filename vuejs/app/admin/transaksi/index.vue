<template>
	<div>
	    <div class="page-header">
			<div class="page-title">
				<h3>Transaksi</h3>
			</div>
	    </div>
		<Breadcrumb :list="list"/>
		<div class="panel panel-default">
	      	<div class="panel-heading">
	        	<h6 class="panel-title"><i class="icon-users"></i> Data Transaksi</h6>
				<router-link v-if="status.status == 'marketing'" :to="'/admin/transaksi/create'" class="btn btn-success btn-sm pull-right">Tambah</router-link>
	        </div>
	        <div class="panel-body">
	        	<div class="form-group form-group-sm">
	        		<label for="" class="control-label col-md-3">Cari</label>
	        		<div class="col-md-9">
	        			<div class="input-group">
							<input type="text" class="form-control" v-model="form_cari" placeholder="Cari Berdasarkan Tanggal Transaksi">
							<span class="input-group-btn">
								<button class="btn btn-default" type="button" @click="cari">Cari</button>
							</span>
						</div><!-- /input-group -->
	        		</div>
	        	</div>
	        </div>
	        <div class="table-responsive">

	          <table class="table table-striped table-bordered">
	            <thead>
	              <tr>
	                <th>Tanggal</th>
	                <th>Pelanggan</th>
	                <th>Total Bayar</th>
	                <th>Aksi</th>
	              </tr>
	            </thead>
	            <tbody>
	              <tr v-for="item in table.data">
	                <td>{{item.tanggal}}</td>
	                <td>{{item.pelanggan.nama}}</td>
	                <td>{{ reduce(item.produk) }}</td>
	                <td >
						<div class="btn-group btn-group-sm pull-right">
							<button class="btn btn-sm btn-info dropdown-toggle" data-toggle="dropdown"> Action<span class="caret"></span> </button>
							<ul class="dropdown-menu icons-right">
								<li v-if="status.status == 'marketing'"><router-link :to="'/admin/transaksi/'+item.id+'/edit'"><i class="icon-pencil3"></i> Ubah</router-link></li>
								<li><router-link :to="'/admin/transaksi/'+item.id+'/show'"><i class="icon-eye"></i> Lihat Detail</router-link></li>
							</ul>
						</div>
	                </td>
	              </tr>
	            </tbody>
	            <tfoot v-if="table.next_page_url != null || table.prev_page_url != null">
				  	<tr>
				  		<td colspan="4">
			  			<div class="btn-group btn-group-xs">
			  				<a v-on:click="prev" :disabled="table.prev_page_url === null" class="btn btn-icon btn-info"><i class="icon-arrow-left"></i></a>
			  				<a v-on:click="next" :disabled="table.next_page_url === null" class="btn btn-icon btn-info"><i class="icon-arrow-right2"></i></a>	
			  			</div>
				  		</td>
				  	</tr>
				</tfoot>
	          </table>
	        </div>
	    </div>
	</div>
</template>

<script>
	import {mapActions, mapGetters} from 'vuex'

	export default{
		name: 'Index',
		components: {
			'Breadcrumb': require('./../../components/Breadcrumb'),
		},
		computed: {
			...mapGetters({'table':'table/table'}),
			name () {
				return this.$route.name
			},

			list () {
				return this.$route.matched
			},

			status () {
				return this.$session.get('user_admin')
			}
		},
		data () {
			return {
				// table: {},
				url: '/dc/transaksi',
				token: this.$session.get('is_admin'),
				form_cari: ''
			}
		},
		methods:{
			...mapActions({
				setTableVuex: 'table/setTable',
				showLoad: 'showLoading',
				hideLoading: 'hideLoading'
			}),
			reduce (produk){
				return _.reduce(produk, function(sum, val){
					return sum + val['harga'];
				}, 0)
			},
			setTable(){
				let self = this
				this.showLoad()
				this.$http.get(`${this.url}`, {
					headers:{
						Authorization: `Bearer ${this.token.access_token}`
					}
				}).then(res => {
					self.setTableVuex(res.data).then(() => {
						self.hideLoading()	
					})
				})
			},
			next(){
				this.url = this.table.next_page_url
				this.setTable()
			},
			prev(){
				this.url = this.table.prev_page_url
				this.setTable()
			},
			hapus(id){
				let self = this
				self.$swal({
					title: "Apakah anda yakin menghapus Data Ini ?",
					text: "Data yang terhapus Selamanya",
					type: "warning",
					showCancelButton: true,
				}).then(result => {
					if (result.value) {
						self.$http.delete(`${self.url}/${id}`, {
							headers: {
								Authorization: `Bearer ${self.token.access_token}`
							}
						})
						.then(res => {
							self.$swal({
								text: res.data.message,
								type: "success",
								timer: 5000
							})
							.then(() => {
								self.setTable()
							})
						}).catch(error => {
							if (error.status === 401) {
								setTimeout(function() {
									self.hapus(id)
								}, 1000);
							}
						})
					}
				})
			},
			cari(){
				let self = this
				this.showLoad()
				this.$http.get(`${this.url}?cari=${this.form_cari}`, {
					headers:{
						Authorization: `Bearer ${this.token.access_token}`
					}
				}).then(res => {
					self.setTableVuex(res.data).then(() => {
						self.hideLoading()	
					})
				})
			},
		},
		beforeMount(){
			this.setTable()
		},
	}
</script>


<style>
	.actions{
		width: 60px;
	}
</style>