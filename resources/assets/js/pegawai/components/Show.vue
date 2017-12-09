<template>
	<div>
		<!-- Breadcrumbs line -->
		<div class="breadcrumb-line">
			<ul class="breadcrumb">
			  <li><router-link :to="{name: 'index'}">Pegawai</router-link></li>
			  <li><router-link :to="{name: 'index'}">List Data Pegawai</router-link></li>
          	  <li class="active">Lihat Pegawai</li>
			</ul>
			<div class="visible-xs breadcrumb-toggle"><a class="btn btn-link btn-lg btn-icon" data-toggle="collapse" data-target=".breadcrumb-buttons"><i class="icon-menu2"></i></a></div>
		</div>
		<!-- /breadcrumbs line -->

		<!-- Right labels -->
		<div class="panel panel-default">
			<div class="panel-heading">
			  <h6 class="panel-title"><i class="icon-paragraph-right2"></i> Lihat Pegawai</h6>
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
			  			<td>Email</td>
			  			<td></td>
			  			<td>{{ data.email }}</td>
			  		</tr>
			  		<tr>
			  			<td>Status</td>
			  			<td>:</td>
			  			<td>{{ data.status }}</td>
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