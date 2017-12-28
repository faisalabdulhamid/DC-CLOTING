<template>
    <div>
    <!-- Breadcrumbs line -->
    <div class="breadcrumb-line">
      <ul class="breadcrumb">
        <li><router-link :to="{name: 'kuesioner-index'}">Kuesioner</router-link></li>
        <li class="active">Hasil Kuesioner</li>
      </ul>
    </div>
    <!-- /breadcrumbs line -->
	<div class="panel panel-default">
      	<div class="panel-heading">
        	<h6 class="panel-title"><i class="icon-users"></i> Data Kuesioner</h6>
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
            <tbody>
              <tr v-for="item in table">
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
	import {mapGetters, mapActions} from 'vuex'
	export default{
		name: 'Index',
		data(){
			return {
				url: '/api/hasil-kuesioner'
			}
		},
		computed:{
			...mapGetters({'table':'table/table', 'token': 'token'})
		},
		methods:{
			...mapActions({
				setTableVuex: 'table/setTable',
				showLoad: 'showLoading',
				hideLoading: 'hideLoading'
			}),
			setTable(){
				let self = this
				self.showLoad()
				self.$http.get(`${self.url}`, {
					headers:{
						Authorization: `Bearer ${self.token}`
					}
				}).then(res => {
					let arr = res.data[1].jawaban

					// console.log(arr)
					// arr.map((v, k) => {
					// 	console.log(v)
					// })

					// let max = Math.max.apply(Math, arr.map(function(o){return o.nilai}))
					// console.log(max)

					let maximum = arr.reduce((prev, current) => (prev.nilai > current.nilai) ? prev : current)
					console.log(maximum)

					self.setTableVuex(res.data).then(() => {
						self.hideLoading()	
					})
				}).catch(error => {
					if (error.status === 401) {
						setTimeout(function() {
							self.setTable()
						}, 1000);
					}
				})
			},
			next(){
				this.url = this.table.next_page_url
				this.setTable()
			},
			prev(){
				this.url = this.table.prev_page_url
				this.setTable()
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
						self.$http.delete(`/api/kuesioner/${id}`, {
							headers: {
								Authorization: `Bearer ${self.token}`
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
			},
			nilaiMax(nilai){
				return nilai.reduce((prev, current) => (prev.nilai > current.nilai) ? prev : current)
				// return nilai;
			}
		},
		beforeMount(){
			this.setTable()
		},

	}
</script>

<style lang="scss" scoped>
	.actions{
		width: 150px;
	}
</style>