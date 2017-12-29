<template>
	<div>
		<!-- Breadcrumbs line -->
	    <div class="breadcrumb-line">
	      <ul class="breadcrumb">
	        <li>Produk</li>
	        <li><router-link :to="{name: 'produk-index'}">Data Produk</router-link></li>
	        <li class="active">Tambah Produk</li>
	      </ul>
	    </div>
	    <!-- /breadcrumbs line -->
		<!-- table -->
		<div class="panel panel-default">
			<div class="panel-heading">
				<h6 class="panel-title"><i class="icon-users"></i> Tambah Produk</h6>
			</div>
			<div class="panel-body">
			<form class="form-horizontal" v-on:submit.prevent="simpan">
				<div class="form-group">
					<label for="kategori_id" class="control-label col-md-2 text-right">Kategori</label>
					<div class="col-md-10">
						<select class="form-control" id="kategori_id" v-model="data.kategori_id">
							<option v-for="item in kategori" :value="item.id">{{ item.kategori }}</option>
						</select>
					</div>
				</div>
				<div class="form-group">
					<label for="kode" class="control-label col-md-2 text-right">Kode</label>
					<div class="col-md-10">
						<input type="text" class="form-control" id="kode" v-model="data.kode">
					</div>
				</div>
				<div class="form-group">
					<label for="nama" class="control-label col-md-2 text-right">Nama</label>
					<div class="col-md-10">
						<input type="text" class="form-control" id="nama" v-model="data.nama">
					</div>
				</div>
				<div class="form-group">
					<label for="harga" class="control-label col-md-2 text-right">Harga</label>
					<div class="col-md-10">
						<input type="text" class="form-control" id="harga" v-model="data.harga">
					</div>
				</div>
				<div class="form-group">
					<label for="gambar" class="control-label col-md-2 text-right">Gambar</label>
					<div class="col-md-10">
						<input type="text" class="form-control" id="gambar" v-model="data.gambar">
					</div>
				</div>
				<div class="form-actions text-right">
					<button class="btn btn-success">Simpan</button>
				</div>
			</form>
			</div>
		</div>
	  	<!-- /table -->	
	</div>
</template>

<script>
	import {mapGetters} from 'vuex'
	export default{
		name: "Tambah",
		data(){
			return {
				url: 'api/dc/produk',
				data: {
					kategori_id: '',
					kode: '',
					nama: '',
					harga: '',
					gambar: '',
				},
				kategori: []
			}
		},
		computed:{
			...mapGetters({'token': 'token'})
		},
		methods:{
			simpan(){
				let self = this
				self.$http.post(`${self.url}`, self.data, {
					headers: {
						Authorization: `Bearer ${self.token}`
					}
				}).then(res => {
					self.$swal({
						text: res.data.message,
						type: 'success',
						timer: 5000,						
					}).then(() => {
						self.$router.push({name: 'produk-index'})
					})
				}).catch(error => {
					if (error.status === 401) {
						setTimeout(function() {
							self.simpan()
						}, 1000);
					}
				})
			},
			getKategori(){
				let self = this
				self.$http.get('/api/dc/select/kategori', {
					headers: {
						Authorization: `Bearer ${self.token}`
					}
				}).then(res => {
					Vue.set(self.$data, 'kategori', res.data)
				})
			}
		},
		created(){
			this.getKategori()
		}
	}
</script>

<style lang="scss">
	
</style>