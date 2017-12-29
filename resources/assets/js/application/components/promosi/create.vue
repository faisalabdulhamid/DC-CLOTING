<template>
	<div>
		<!-- Breadcrumbs line -->
	    <div class="breadcrumb-line">
	      <ul class="breadcrumb">
	        <li>Promosi</li>
	        <li><router-link :to="{name: 'promosi-index'}">Data Promosi</router-link></li>
	        <li class="active">Tambah Promosi</li>
	      </ul>
	    </div>
	    <!-- /breadcrumbs line -->
		<!-- table -->
		<div class="panel panel-default">
			<div class="panel-heading">
				<h6 class="panel-title"><i class="icon-users"></i> Tambah Promosi</h6>
			</div>
			<div class="panel-body">
			<form class="form-horizontal" v-on:submit.prevent="simpan">
				<div class="form-group">
					<label for="subjek" class="control-label col-md-2 text-right">Subjek</label>
					<div class="col-md-10">
						<input type="text" class="form-control" id="subjek" v-model="data.subjek">
					</div>
				</div>
				<div class="form-group">
					<label for="isi_promosi" class="control-label col-md-2 text-right">Isi Promosi</label>
					<div class="col-md-10">
						<textarea type="text" class="form-control" id="isi_promosi" v-model="data.isi_promosi"></textarea>
					</div>
				</div>
				<div class="form-group">
					<label for="mulai_promosi" class="control-label col-md-2 text-right">Mulai Promosi</label>
					<div class="col-md-10">
						<input type="text" class="form-control" id="mulai_promosi" v-model="data.mulai_promosi">
					</div>
				</div>
				<div class="form-group">
					<label for="akhir_promosi" class="control-label col-md-2 text-right">Akhir Promosi</label>
					<div class="col-md-10">
						<input type="text" class="form-control" id="akhir_promosi" v-model="data.akhir_promosi">
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
				url: 'api/dc/promosi',
				data: {
					promosi: '',
				}
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
						self.$router.push({name: 'promosi-index'})
					})
				}).catch(error => {
					if (error.status === 401) {
						setTimeout(function() {
							self.simpan()
						}, 1000);
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	
</style>