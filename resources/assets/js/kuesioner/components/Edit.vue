<template>
	<div>
		<!-- Breadcrumbs line -->
		<div class="breadcrumb-line">
			<ul class="breadcrumb">
			  <li><router-link :to="{name: 'index'}">Kuesioner</router-link></li>
			  <li><router-link :to="{name: 'index'}">List Data Kuesioner</router-link></li>
          	  <li class="active">Edit Kuesioner</li>
			</ul>
			<div class="visible-xs breadcrumb-toggle"><a class="btn btn-link btn-lg btn-icon" data-toggle="collapse" data-target=".breadcrumb-buttons"><i class="icon-menu2"></i></a></div>
		</div>
		<!-- /breadcrumbs line -->

		<!-- Right labels -->
		<form class="form-horizontal" role="form"  v-on:submit.prevent="simpan">
		  <div class="panel panel-default">
		    <div class="panel-heading">
		      <h6 class="panel-title"><i class="icon-paragraph-right2"></i> Edit Kuesioner</h6>
		    </div>
		    <div class="panel-body">
		      <div class="form-group">
		        <label class="col-sm-2 control-label text-right">Soal</label>
		        <div class="col-sm-10">
		          <textarea class="form-control" v-model="data.soal"></textarea>
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
		name: 'Edit',
		props: ['id'],
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
			getData(){
				let that = this
				that.$http.get('/'+that.id, {
					headers: {
						Authorization: that.token.token_type+' '+that.token.access_token
					}
				}).then(res => {
					Vue.set(that.$data, 'data', res.data)
				}).catch(error => {
					this.$swal({
					  title: error.response.data.message,
					  type: 'error',
					  timer: 5000,
					})
				})
			},
			simpan(){
				let that = this
				that.$http.put('/'+that.id, that.data,{
					headers: {
						Authorization: that.token.token_type+' '+that.token.access_token
					}
				}).then(res => {
					console.log(res)
					that.$swal({
						title: res.data.message,
						type: "success",
						timer: 5000,
					}).then(() => {
						that.$router.push({name: 'index'})
					})
				}).catch(error => {
					// console.log(error)
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
			this.getData()
		}
	}
</script>