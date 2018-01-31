<template>
    <div>
	    <!-- Breadcrumbs line -->
	    <div class="breadcrumb-line">
	      <ul class="breadcrumb">
	        <li><router-link :to="{name: 'content'}">Home</router-link></li>
	        <li class="active">Desain</li>
	      </ul>
	      <router-link v-if="user.status == 'marketing'" :to="{name:'desain-tambah'}" class="btn btn-success btn-xs pull-right">Tambah</router-link>
	    </div>
	    <!-- /breadcrumbs line -->
	    <div class="row">
			<div class="col-lg-3 col-md-6 col-sm-6" v-for="item in table">
              <div class="block">
                <div class="thumbnail">
                	<div v-if="user.status == 'marketing'" style="position: absolute; right: 20px; top: 20px;">
                		<a class="btn btn-sm btn-danger" v-on:click.stop="hapus(item.id)"><i class="icon-remove"></i></a>
                	</div>
                	<img :src=item.gambar alt="">
                  <div class="caption text-center">
                    <h6>menyukai : {{item.like_count}} <br/> tidak menyukai : {{item.dislike_count}}<small>Dibuat oleh: {{ item.desainable.nama }}</small></h6>
                  </div>
                </div>
              </div>
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
				url: '/dc/desain'
			}
		},
		computed:{
			...mapGetters({'table':'table/table', 'token': 'token', 'user': 'user/user'})
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
			}
		},
		beforeMount(){
			this.setTable()
		},

	}
</script>