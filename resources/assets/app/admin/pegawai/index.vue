<template>
	<div>
	    <div class="page-header">
			<div class="page-title">
				<h3>Pegawai</h3>
			</div>
	    </div>
		<Breadcrumb :list="list"/>
		<div class="panel panel-default">
	      	<div class="panel-heading">
	        	<h6 class="panel-title"><i class="icon-users"></i> Data Pegawai</h6>
				<router-link v-if="status.status == 'marketing'" :to="'/admin/pegawai/create'" class="btn btn-success btn-sm pull-right">Tambah</router-link>
	        </div>
	        <div class="table-responsive">

	          <table class="table table-striped table-bordered">
	            <thead>
	              <tr>
	                <th>Nama</th>
	                <th>Email</th>
	                <th>Status</th>
	                <th v-if="status.status == 'marketing'" class="actions">#</th>
	              </tr>
	            </thead>
	            <tbody>
	              <tr v-for="item in table.data">
	                <td>{{item.nama}}</td>
	                <td>{{item.email}}</td>
	                <td>{{item.status}}</td>
	                <td v-if="status.status == 'marketing'">
						<div class="btn-group btn-group-sm pull-right">
							<button class="btn btn-sm btn-info dropdown-toggle" data-toggle="dropdown"> Action<span class="caret"></span> </button>
							<ul class="dropdown-menu icons-right">
								<li><router-link :to="'/admin/pegawai/'+item.id+'/edit'"><i class="icon-pencil3"></i> Ubah</router-link></li>
								<li><a v-on:click.stop="hapus(item.id)"><i class="icon-user-minus"></i> Hapus</a></li>
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
				url: '/dc/pegawai',
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
				this.showLoad()
				this.$http.get(`${this.url}`, {
					headers:{
						Authorization: `Bearer ${this.token.access_token}`
					}
				}).then(res => {
					self.setTableVuex(res.data).then(() => {
						self.hideLoading()	
					})
				}).catch(error => {
					if (error.status === 401) {
						setTimeout(function() {
							this.setTable()
						}, 1000);
					}
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
			}
		},
		beforeMount(){
			this.setTable()
		},
		created () {
			if (!this.$store.getters.isLoggedAdmin) {
				location.reload();
			}
		}
	}
</script>


<style>
	.actions{
		width: 60px;
	}
</style>