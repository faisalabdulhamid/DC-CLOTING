<template>
	<section id="main-page" class="container">
        <aside class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div class="row content-item" id="home">
            	<div class="panel col-md-4 col-md-offset-4">
            		<div class="panel-heading">
            			<h3 class="heading-title" style="text-align: center">Login</h3>
            		</div>
            		<div class="panel-body">
		            	<form class="form-horizontal" v-on:submit.prevent="loginSubmit">
		            		<div class="form-group">
		            			<label for="" class="control-label col-md-3">Email</label>
		            			<div class="col-md-9">
		            				<input type="email" class="form-control">
		            			</div>
		            		</div>
		            		<div class="form-group">
		            			<label for="" class="control-label col-md-3">Password</label>
		            			<div class="col-md-9">
		            				<input type="password" class="form-control">
		            			</div>
		            		</div>
		            		<button class="btn btn-default pull-right">Login</button>
		            	</form>
            		</div>
            	</div>
            </div>
        </aside>
    </section>
</template>

<script>
	export default {
		name: 'Login',
		data () {
			return {
				form:{
					email: '',
					password: ''
				}
			}
		},
		methods:{
			loginSubmit() {
				this.$http.post('/oauth/token')
			}
		} 
	}
</script>