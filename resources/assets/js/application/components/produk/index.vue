<template>
    <div>
    <!-- Breadcrumbs line -->
    <div class="breadcrumb-line">
      <ul class="breadcrumb">
        <li>Produk</li>
        <li class="active">Data Produk</li>
      </ul>
    </div>
    <!-- /breadcrumbs line -->
	<div class="panel panel-default">
      	<div class="panel-heading">
        	<h6 class="panel-title"><i class="icon-users"></i> Data Produk</h6>
			<router-link :to="{name:'produk-tambah'}" class="btn btn-success btn-sm pull-right">Tambah</router-link>
        </div>
        <div class="table-responsive">

          <table class="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Kode</th>
                <th>Produk</th>
                <th>Harga</th>
                <th class="actions">#</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in table.data">
                <td>{{item.kode}}</td>
                <td>{{item.nama}}</td>
                <td>{{item.harga}}</td>
                <td>
					<div class="btn-group btn-group-sm pull-right">
						<button class="btn btn-sm btn-info dropdown-toggle" data-toggle="dropdown"> Action<span class="caret"></span> </button>
						<ul class="dropdown-menu icons-right">
							<li><router-link :to="{name: 'produk-edit', params:{id: item.id}}"><i class="icon-pencil3"></i> Ubah</router-link></li>
							<li><router-link :to="{name: 'produk-show', params:{id: item.id}}"><i class="icon-pencil3"></i> Lihat</router-link></li>
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
	import {mapGetters, mapActions} from 'vuex'
	export default{
		name: 'Index',
		data(){
			return {
				url: '/api/produk'
			}
		},
		computed:{
			...mapGetters({'table':'table/table', 'token': 'token'})
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
					self.setTableVuex(res.data).then(() => {
						self.hideLoading()	
					})
				}).catch(error => {
					if (error.status === 401) {
						setTimeout(function() {
							self.setTable()
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
						self.$http.delete(`/api/produk/${id}`, {
							headers: {
								Authorization: `Bearer ${self.token}`
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

<style lang="scss">
	.actions{
		width: 90px;
	}
</style>