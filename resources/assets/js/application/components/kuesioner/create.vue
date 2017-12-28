<template>
	<div>
		<!-- Breadcrumbs line -->
	    <div class="breadcrumb-line">
	      <ul class="breadcrumb">
	        <li>Kuesioner</li>
	        <li><router-link :to="{name: 'kuesioner-index'}">Data Kuesioner</router-link></li>
	        <li class="active">Tambah Kuesioner</li>
	      </ul>
	    </div>
	    <!-- /breadcrumbs line -->
		<!-- table -->
		<div class="panel panel-default">
			<div class="panel-heading">
				<h6 class="panel-title"><i class="icon-users"></i> Tambah Kuesioner</h6>
			</div>
			<div class="panel-body">
			<form class="form-horizontal" v-on:submit.prevent="simpan">
				<div class="form-group">
					<label for="soal" class="control-label col-md-2 text-right">Soal</label>
					<div class="col-md-10">
						<textarea class="form-control" id="soal" v-model="data.soal"></textarea>
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
				data: {
					soal: '',
				}
			}
		},
		computed:{
			...mapGetters({'token': 'token'})
		},
		methods:{
			simpan(){
				let self = this
				self.$http.post('/api/kuesioner', self.data, {
					headers: {
						Authorization: `Bearer ${self.token}`
					}
				}).then(res => {
					self.$swal({
						text: res.data.message,
						type: 'success',
						timer: 5000,						
					}).then(() => {
						self.$router.push({name: 'kuesioner-index'})
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