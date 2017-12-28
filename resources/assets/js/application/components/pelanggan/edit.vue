<template>
	<div>
		<!-- Breadcrumbs line -->
	    <div class="breadcrumb-line">
	      <ul class="breadcrumb">
	        <li>Pelanggan</li>
	        <li><router-link :to="{name: 'pelanggan-index'}">Data Pelanggan</router-link></li>
	        <li class="active">Ubah Pelanggan</li>
	      </ul>
	    </div>
	    <!-- /breadcrumbs line -->
		<!-- table -->
		<div class="panel panel-default">
			<div class="panel-heading">
				<h6 class="panel-title"><i class="icon-users"></i> Ubah Pelanggan</h6>
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
					<label for="pelanggan" class="control-label col-md-2 text-right">Pelanggan</label>
					<div class="col-md-10">
						<input type="text" class="form-control" id="pelanggan" v-model="data.pelanggan">
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
		name: "Edit",
		props: ['id'],
		data(){
			return {
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
			getData(){
				let self = this
				self.$http.get(`/api/pelanggan/${self.id}`, {
					headers: {
						Authorization: `Bearer ${self.token}`
					}
				}).then(res => {
					Vue.set(self.$data, 'data', res.data)
				})
			},
			simpan(){
				let self = this
				self.$http.put(`/api/pelanggan/${self.id}`, self.data, {
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
				self.$http.get(`/api/select/kota`, {
					headers: {
						Authorization: `Bearer ${self.token}`
					}
				}).then(res => {
					Vue.set(self.$data, 'kota', res.data)
				})
			}

		},
		beforeMount(){
			this.getData()
			this.selectKota()
		}
	}
</script>

<style lang="scss">
	
</style>