<template>
	<div>
		<!-- Breadcrumbs line -->
		<div class="breadcrumb-line">
			<ul class="breadcrumb">
			  <li><router-link :to="{name: 'index'}">Pelanggan</router-link></li>
			  <li><router-link :to="{name: 'index'}">List Data Pelanggan</router-link></li>
          	  <li class="active">Lihat Pelanggan</li>
			</ul>
			<div class="visible-xs breadcrumb-toggle"><a class="btn btn-link btn-lg btn-icon" data-toggle="collapse" data-target=".breadcrumb-buttons"><i class="icon-menu2"></i></a></div>
		</div>
		<!-- /breadcrumbs line -->

		<!-- Right labels -->
		<div class="panel panel-default">
			<div class="panel-heading">
			  <h6 class="panel-title"><i class="icon-paragraph-right2"></i> Lihat Pelanggan</h6>
			</div>
			<div class="panel-body">
			  <table class="table table-bordered">
			  	<tbody>
			  		<tr>
			  			<td>Nama</td>
			  			<td>:</td>
			  			<td>{{ data.nama }}</td>
			  		</tr>
			  		<tr>
			  			<td>Telepon</td>
			  			<td>:</td>
			  			<td>{{ data.no_telepon }}</td>
			  		</tr>
			  		<tr>
			  			<td>Kota</td>
			  			<td>:</td>
			  			<td>{{ data.kota }}</td>
			  		</tr>
			  	</tbody>
			  </table>
			</div>
		</div>
		<!-- /right labels -->
	</div>
</template>

<script>
	import { mapActions, mapGetters} from 'vuex'
	
	export default{
		name: 'Show',
		props: ['id'],
		data(){
			return {
				data: {}
			}
		},
		computed:{
			...mapGetters({
				token: 'oauth'
			}),
		},
		methods:{
			...mapActions({
				'Oauth': 'setOauth',
			}),
			getData(){
				let that = this
				that.$http.get('/'+that.id, {
					headers: {
						Authorization: that.token.token_type+' '+that.token.access_token
					}
				}).then(res => {
					Vue.set(that.$data, 'data', res.data)
				}).catch(error => {
					console.log(error)
				})
			},
		},
		beforeMount(){
			this.Oauth()
			this.getData()
		}
	}
</script>