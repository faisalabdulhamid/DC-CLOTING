<template>
	<div>
	    <div class="page-header">
			<div class="page-title">
				<h3>Hasil Kuesioner</h3>
			</div>
	    </div>
		<Breadcrumb :list="list"/>
		<div class="panel panel-default">
	      	<div class="panel-heading">
	        	<h6 class="panel-title"><i class="icon-users"></i> Data Hasil kuesioner</h6>
	        </div>
	      	<div class="panel-body">
	        	<div class="form-group">
	        		<label class="col-md-3 control-label">Kota</label>
	        		<div class="col-md-9">
	        			<select class="form-control" v-on:change="kuesionerKota($event)">
	        				<option value="">Semua Kota</option>
	        				<option v-for="item in kota" :value="item.id">{{item.kota}}</option>
	        			</select>
	        		</div>
	        	</div>
	        </div>
	        <div class="table-responsive">

	          <table class="table table-striped table-bordered">
	            <thead>
	              <tr>
	                <th>Kuesioner</th>
	                <th class="actions">Nilai</th>
	                <th class="actions">Keterangan</th>
	              </tr>
	            </thead>
	            <tbody v-for="item in table">
	              <tr>
	                <td>{{item.soal}}</td>
	                <th>{{ nilaiMax(item.jawaban).nilai}}</th>
	                <th>{{ nilaiMax(item.jawaban).label}}</th>
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
	import {mapActions, mapGetters} from 'vuex'
	export default{
		name: 'Index',
		components: {
			'Breadcrumb': require('./../../components/Breadcrumb'),
		},
		computed: {
			// ...mapGetters({'table':'table/table'}),
			name () {
				return this.$route.name
			},

			list () {
				return this.$route.matched
			}
		},
		data () {
			return {
				table: {},
				url: '/dc/hasil-kuesioner',
				token: this.$session.get('is_admin'),
				kota: [],
				kota_id: ''
			}
		},
		methods:{
			...mapActions({
				setTableVuex: 'table/setTable',
				showLoad: 'showLoading',
				hideLoading: 'hideLoading'
			}),
			getKota () {
				this.$http.get('/dc/kota?all=true', {
					headers: {
						Authorization: `Bearer ${this.token.access_token}`
					}
				})
					.then(res => {
						Vue.set(this.$data, 'kota', res.data)
					})
			},
			kuesionerKota(event) {
				// console.log(event.target.value)
				this.$http.get(`${this.url}?kota=${event.target.value}`, {
					headers:{
						Authorization: `Bearer ${this.token.access_token}`
					}
				}).then(res => {
					Vue.set(this.$data, 'table', res.data)
				})
			},
			setTable(){
				this.$http.get(`${this.url}`, {
					headers:{
						Authorization: `Bearer ${this.token.access_token}`
					}
				}).then(res => {
					Vue.set(this.$data, 'table', res.data)
				})
			},
			nilaiMax(nilai){
				return nilai.reduce((prev, current) => (prev.nilai > current.nilai) ? prev : current)
				// return nilai;
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
						self.$http.delete(`${self.url}/${id}`, {
							headers: {
								Authorization: `Bearer ${self.token.access_token}`
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
			this.getKota()
			this.setTable()
		},
	}
</script>

<style>
	.actions{
		width: 70px;
	}
</style>