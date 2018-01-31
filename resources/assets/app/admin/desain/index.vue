<template>
	<div>
	    <div class="page-header">
			<div class="page-title">
				<h3>desain</h3>
			</div>
	    </div>
		<Breadcrumb :list="list"/>
		<div class="panel panel-default">
	      	<div class="panel-heading">
	        	<h6 class="panel-title"><i class="icon-users"></i> Data desain</h6>
				<router-link v-if="status.status == 'marketing'" :to="'/admin/desain/create'" class="btn btn-success btn-sm pull-right">Tambah</router-link>
	        </div>
	        <div class="table-responsive">

	          <table class="table table-striped table-bordered">
	            <thead>
	              <tr>
	                <th>Gambar</th>
	                <th>Dibuat Oleh</th>
	                <th>Jumlah Suka</th>
	                <th>Jumlah Tidak Suka</th>
	                <th>Status</th>
	                <th class="actions" v-if="status.status == 'marketing'">#</th>
	              </tr>
	            </thead>
	            <tbody>
	              <tr v-for="item in table">
	                <td>
	                	<img :src="item.gambar" alt="Gambar" class="img-thumbnail" width="50px">
	                </td>
	                <td>{{item.desainable.nama}}</td>
	                <td>{{item.like_count}}</td>
	                <td>{{item.dislike_count}}</td>
	                <td>{{(item.status)? 'Ditampilkan': 'Tidak Ditampilkan'}}</td>
	                <td v-if="status.status == 'marketing'">
						<div class="btn-group btn-group-sm pull-right">
							<button class="btn btn-sm btn-info dropdown-toggle" data-toggle="dropdown"> Action<span class="caret"></span> </button>
							<ul class="dropdown-menu icons-right">
								<li><router-link :to="'/admin/desain/'+item.id+'/edit'"><i class="icon-pencil3"></i> Ubah</router-link></li>
								<li><a v-on:click.stop="hapus(item.id)"><i class="icon-user-minus"></i> Hapus</a></li>
								<li><a v-on:click.stop="tampil(item.id)" v-if="item.status == 0"><i class="icon-check"></i> Tampil</a></li>
								<li><a v-on:click.stop="tidakTampil(item.id)" v-if="item.status == 1"><i class="icon-user-minus"></i> Tidak Tampil</a></li>
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
			// ...mapGetters({'table':'table/table'}),
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
				table: {},
				url: '/dc/desain',
				token: this.$session.get('is_admin')
			}
		},
		methods:{
			...mapActions({
				setTableVuex: 'table/setTable',
				showLoad: 'showLoading',
				hideLoading: 'hideLoading'
			}),
			setTable(){
				let self = this
				this.$http.get(`${this.url}`, {
					headers:{
						Authorization: `Bearer ${this.token.access_token}`
					}
				}).then(res => {
					Vue.set(this.$data, 'table', res.data)
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
			tampil(id){
				this.$http.get(`${this.url}/${id}/edit`, {
					headers: {
						Authorization: `Bearer ${this.token.access_token}`,
					},
					params: {
						tampil: true
					}
				}).then(res => {
					this.setTable()
				})
			},
			tidakTampil(id){
				this.$http.get(`${this.url}/${id}/edit`, {
					headers: {
						Authorization: `Bearer ${this.token.access_token}`
					}
				}).then(res => {
					this.setTable()
				})
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
			}
		},
		beforeMount(){
			this.setTable()
		},
	}
</script>