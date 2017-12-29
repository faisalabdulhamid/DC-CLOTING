<template>
	<div>
		<!-- Breadcrumbs line -->
	    <div class="breadcrumb-line">
	      <ul class="breadcrumb">
	        <li>Produk</li>
	        <li><router-link :to="{name: 'produk-index'}">Data Produk</router-link></li>
	        <li class="active">Lihat Produk</li>
	      </ul>
	    </div>
	    <!-- /breadcrumbs line -->
		<!-- table -->
		<div class="panel panel-default">
			<div class="panel-heading">
				<h6 class="panel-title"><i class="icon-users"></i> Lihat Produk</h6>
			</div>
			<div class="panel-body">
				<table class="table table-bordered">
					<tbody>
						<tr>
							<th>Kode</th>
							<td>:</td>
							<td>{{ data.kode }}</td>
						</tr>
						<tr>
							<th>Nama</th>
							<td>:</td>
							<td>{{ data.kode }}</td>
						</tr>
						<tr>
							<th>Harga</th>
							<td>:</td>
							<td>{{ data.harga }}</td>
						</tr>
						<tr>
							<th>Kategori</th>
							<td>:</td>
							<td>{{ data.kategori.kategori }}</td>
						</tr>
						<tr>
							<th>Gambar</th>
							<td>:</td>
							<td>{{ data.gambar }}</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	  	<!-- /table -->	
	</div>
</template>

<script>
	import {mapGetters} from 'vuex'
	export default{
		name: "Edit",
		props: ['id'],
		data(){
			return {
				url: 'api/dc/produk',
				data: {
					kode: '',
					nama: '',
					harga: '',
					gambar: '',
					kategori: []
				}
			}
		},
		computed:{
			...mapGetters({'token': 'token'})
		},
		methods:{
			getData(){
				let self = this
				self.$http.get(`${self.url}/${self.id}`, {
					headers: {
						Authorization: `Bearer ${self.token}`
					}
				}).then(res => {
					Vue.set(self.$data, 'data', res.data)
				})
			},
		},
		beforeMount(){
			this.getData()
		}
	}
</script>

<style lang="scss">
	
</style>