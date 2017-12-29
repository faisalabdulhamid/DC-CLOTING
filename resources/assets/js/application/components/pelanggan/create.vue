<template>
	<div>
		<!-- Breadcrumbs line -->
	    <div class="breadcrumb-line">
	      <ul class="breadcrumb">
	        <li>Pelanggan</li>
	        <li><router-link :to="{name: 'pelanggan-index'}">Data Pelanggan</router-link></li>
	        <li class="active">Tambah Pelanggan</li>
	      </ul>
	    </div>
	    <!-- /breadcrumbs line -->
		<!-- table -->
		<div class="panel panel-default">
			<div class="panel-heading">
				<h6 class="panel-title"><i class="icon-users"></i> Tambah Pelanggan</h6>
			</div>
			<div class="panel-body">
			<form class="form-horizontal" v-on:submit.prevent="simpan">
				<div class="form-group">
					<label for="kota" class="control-label col-md-2 text-right">Kota</label>
					<div class="col-md-10">
						<select class="form-control" id="kota" v-model="data.kota_id">
							<option v-for="item in kota" :value="item.id">{{ item.kota }}</option>
						</select>
					</div>
				</div>
				<div class="form-group">
					<label for="nama" class="control-label col-md-2 text-right">Nama</label>
					<div class="col-md-10">
						<input type="text" class="form-control" id="nama" v-model="data.nama">
					</div>
				</div>
				<div class="form-group">
					<label for="no_telepon" class="control-label col-md-2 text-right">No Telepon</label>
					<div class="col-md-10">
						<input type="text" class="form-control" id="no_telepon" v-model="data.no_telepon">
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
				url: 'api/dc/pelanggan',
				data: {
					nama: '',
					no_telepon: '',
					kota_id: '',
				},
				kota: []
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
						self.$router.push({name: 'pelanggan-index'})
					})
				}).catch(error => {
					if (error.status === 401) {
						setTimeout(function() {
							self.simpan()
						}, 1000);
					}
				})
			},
			selectKota(){
				let self = this
				self.$http.get(`/api/dc/select/kota`, {
					headers: {
						Authorization: `Bearer ${self.token}`
					}
				}).then(res => {
					Vue.set(self.$data, 'kota', res.data)
				})
			}
		},
		created(){
			this.selectKota()
		}
	}
</script>

<style lang="scss">
	
</style>