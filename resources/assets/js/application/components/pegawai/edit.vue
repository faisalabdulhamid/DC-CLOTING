<template>
	<div>
		<!-- Breadcrumbs line -->
	    <div class="breadcrumb-line">
	      <ul class="breadcrumb">
	        <li>Pegawai</li>
	        <li><router-link :to="{name: 'pegawai-index'}">Data Pegawai</router-link></li>
	        <li class="active">Ubah Pegawai</li>
	      </ul>
	    </div>
	    <!-- /breadcrumbs line -->
		<!-- table -->
		<div class="panel panel-default">
			<div class="panel-heading">
				<h6 class="panel-title"><i class="icon-users"></i> Ubah Pegawai</h6>
			</div>
			<div class="panel-body">
			<form class="form-horizontal" v-on:submit.prevent="simpan">
				<div class="form-group">
					<label for="nama" class="control-label col-md-2 text-right">Nama</label>
					<div class="col-md-10">
						<input type="text" class="form-control" id="nama" v-model="data.nama">
					</div>
				</div>
				<div class="form-group">
					<label for="email" class="control-label col-md-2 text-right">Email</label>
					<div class="col-md-10">
						<input type="email" class="form-control" id="email" v-model="data.email">
					</div>
				</div>
				<div class="form-group">
					<label for="password" class="control-label col-md-2 text-right">Password</label>
					<div class="col-md-10">
						<input type="password" class="form-control" id="password" v-model="data.password">
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
					email: '',
					password: ''
				}
			}
		},
		computed:{
			...mapGetters({'token': 'token'})
		},
		methods:{
			getData(){
				let self = this
				self.$http.get(`/api/pegawai/${self.id}`, {
					headers: {
						Authorization: `Bearer ${self.token}`
					}
				}).then(res => {
					Vue.set(self.$data, 'data', res.data)
				})
			},
			simpan(){
				let self = this
				self.$http.put(`/api/pegawai/${self.id}`, self.data, {
					headers: {
						Authorization: `Bearer ${self.token}`
					}
				}).then(res => {
					self.$swal({
						text: res.data.message,
						type: 'success',
						timer: 5000,
					}).then(() => {
						self.$router.push({name: 'pegawai-index'})
					})
				}).catch(error => {
					if (error.status === 401) {
						setTimeout(function() {
							self.simpan()
						}, 1000);
					}
				})
			}
		},
		beforeMount(){
			this.getData()
		}
	}
</script>

<style lang="scss">
	
</style>