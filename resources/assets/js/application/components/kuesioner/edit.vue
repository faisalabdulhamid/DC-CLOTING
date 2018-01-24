<template>
	<div>
		<!-- Breadcrumbs line -->
	    <div class="breadcrumb-line">
	      <ul class="breadcrumb">
	        <li>Kuesioner</li>
	        <li><router-link :to="{name: 'kuesioner-index'}">Data Kuesioner</router-link></li>
	        <li class="active">Ubah Kuesioner</li>
	      </ul>
	    </div>
	    <!-- /breadcrumbs line -->
		<!-- table -->
		<div class="panel panel-default">
			<div class="panel-heading">
				<h6 class="panel-title"><i class="icon-users"></i> Ubah Kuesioner</h6>
			</div>
			<div class="panel-body">
			<form class="form-horizontal" v-on:submit.prevent="simpan">
				<div class="form-group">
					<label for="soal" class="control-label col-md-2 text-right">Soal</label>
					<div class="col-md-10">
						<textarea class="form-control" id="soal" v-model="data.soal"></textarea>
					</div>
				</div>
				Jawaban
				<table class="table table-bordered">
					<tbody>
						<tr v-for="(item, idx) in jawaban">
							<td>
								<input class="form-control" v-model="jawaban[idx]">
							</td>
							<td width="180px">
								<div class="btn-group btn-group-sm">
									<a v-on:click="add" class="btn btn-info btn-sm">Tambah</a>
									<a v-on:click="remove(idx)" class="btn btn-danger btn-sm">Hapus</a>	
								</div>
							</td>
						</tr>
					</tbody>
				</table>
				<p>Nilai Jawaban Sesuai No Urut</p>
				<br/>
				<br/>
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
				url: 'api/dc/kuesioner',
				data: {
					soal: '',
					jawaban: '',
				},
				jawaban: []
			}
		},
		computed:{
			...mapGetters({'token': 'token'})
		},
		methods:{
			add () {
				this.jawaban.push('')
			},
			remove (idx) {
				if (this.jawaban.length > 1) {
					this.jawaban.splice(idx, 1)	
				}
			},
			getData(){
				let self = this
				self.$http.get(`${self.url}/${self.id}`, {
					headers: {
						Authorization: `Bearer ${self.token}`
					}
				}).then(res => {
					Vue.set(self.$data, 'data', res.data)
					let arr = []
					JSON.parse(res.data.jawaban).forEach((val, key) => {
						arr.push(val.key)
					})
					Vue.set(self.$data, 'jawaban', arr)

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
		},
		watch: {
			jawaban () {
				let objPush = []
				this.jawaban.forEach((val, key) => {
					objPush.push({'key':val,'value':key+1})
				})
				this.data.jawaban = JSON.stringify(objPush)
			}
		},
		created (){
			this.getData()
		}
	}
</script>

<style lang="scss">
	
</style>