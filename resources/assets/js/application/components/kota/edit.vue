<template>
	<div>
		<!-- Breadcrumbs line -->
	    <div class="breadcrumb-line">
	      <ul class="breadcrumb">
	        <li>Kota</li>
	        <li><router-link :to="{name: 'kota-index'}">Data Kota</router-link></li>
	        <li class="active">Ubah Kota</li>
	      </ul>
	    </div>
	    <!-- /breadcrumbs line -->
		<!-- table -->
		<div class="panel panel-default">
			<div class="panel-heading">
				<h6 class="panel-title"><i class="icon-users"></i> Ubah Kota</h6>
			</div>
			<div class="panel-body">
			<form class="form-horizontal" v-on:submit.prevent="simpan">
				<div class="form-group">
					<label for="provinsi_id" class="control-label col-md-2 text-right">Provinsi</label>
					<div class="col-md-10">
						<select class="form-control" id="provinsi_id" v-model="data.provinsi_id">
							<option v-for="item in provinsi" :value="item.id">{{ item.provinsi }}</option>
						</select>
					</div>
				</div>
				<div class="form-group">
					<label for="kota" class="control-label col-md-2 text-right">Kota</label>
					<div class="col-md-10">
						<input type="text" class="form-control" id="kota" v-model="data.kota">
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
				url: 'api/dc/kota',
				data: {
					kota: '',
				},
				provinsi: []
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
			simpan(){
				let self = this
				self.$http.put(`${self.url}/${self.id}`, self.data, {
					headers: {
						Authorization: `Bearer ${self.token}`
					}
				}).then(res => {
					self.$swal({
						text: res.data.message,
						type: 'success',
						timer: 5000,
					}).then(() => {
						self.$router.push({name: 'kota-index'})
					})
				}).catch(error => {
					if (error.status === 401) {
						setTimeout(function() {
							self.simpan()
						}, 1000);
					}
				})
			},
			getProvinsi(){
				let self = this
				self.$http.get('/api/dc/select/provinsi', {
					headers: {
						Authorization: `Bearer ${self.token}`
					}
				}).then(res => {
					Vue.set(self.$data, 'provinsi', res.data)
				})
			}
		},
		beforeMount(){
			this.getData()
		},
		created(){
			this.getProvinsi()
		}
	}
</script>

<style lang="scss">
	
</style>