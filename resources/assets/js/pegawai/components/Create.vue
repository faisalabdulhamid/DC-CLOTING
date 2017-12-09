<template>
	<div>
		<!-- Breadcrumbs line -->
		<div class="breadcrumb-line">
			<ul class="breadcrumb">
			  <li><router-link :to="{name: 'index'}">Pegawai</router-link></li>
			  <li><router-link :to="{name: 'index'}">List Data Pegawai</router-link></li>
          	  <li class="active">Tambah Pegawai</li>
			</ul>
			<div class="visible-xs breadcrumb-toggle"><a class="btn btn-link btn-lg btn-icon" data-toggle="collapse" data-target=".breadcrumb-buttons"><i class="icon-menu2"></i></a></div>
		</div>
		<!-- /breadcrumbs line -->

		<!-- Right labels -->
		<form class="form-horizontal" role="form"  v-on:submit.prevent="simpan">
		  <div class="panel panel-default">
		    <div class="panel-heading">
		      <h6 class="panel-title"><i class="icon-paragraph-right2"></i> Tambah Pegawai</h6>
		    </div>
		    <div class="panel-body">
		      <div class="form-group">
		        <label class="col-sm-2 control-label text-right">Nama</label>
		        <div class="col-sm-10">
		          <input type="text" class="form-control" v-model="data.nama">
		        </div>
		      </div>
		      <div class="form-group">
		        <label class="col-sm-2 control-label text-right">Email</label>
		        <div class="col-sm-10">
		          <input type="email" class="form-control" v-model="data.email">
		        </div>
		      </div>
		      <div class="form-group">
		        <label class="col-sm-2 control-label text-right">Password</label>
		        <div class="col-sm-10">
		          <input type="password" class="form-control" placeholder="Password" v-model="data.password">
		        </div>
		      </div>
		      <div class="form-actions text-right">
		        <input type="submit" value="Submit form" class="btn btn-primary">
		      </div>
		    </div>
		  </div>
		</form>
		<!-- /right labels -->
	</div>
</template>

<script>
	import { mapActions, mapGetters} from 'vuex'
	
	export default{
		name: 'Create',
		data(){
			return {
				data: {}
			}
		},
		computed:{
			...mapGetters({
				token: 'oauth'
			})
		},
		methods:{
			...mapActions({
				'Oauth': 'setOauth',
			}),
			simpan(){
				let that = this
				
				that.$http.post('', that.data,{
					headers: {
						Authorization: that.token.token_type+' '+that.token.access_token
					}
				}).then(res => {
					this.$swal({
						text: res.data.message,
						type: "success",
						timer: 5000
					}).then(() => {
						this.$router.push({name: 'index'})
					})
				}).catch(error => {
					var contentHtml = '';
					Object.keys(error.response.data.errors).forEach((key) => {
						contentHtml +=  '<p class="text-danger">'+error.response.data.errors[key][0]+'</p>'
					})
					
					this.$swal({
					  title: error.response.data.message,
					  html: contentHtml,
					  type: 'error',
					  timer: 5000,
					})
				})
			}
		},
		created(){
			this.Oauth()
		},
		beforeMount(){

		}
	}
</script>