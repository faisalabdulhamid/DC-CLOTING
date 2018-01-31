<template>
	<div>
		<AppHeader/>
		<div class="login-wrapper">
			<form role="form" v-on:submit.prevent="loginSystem">
				<div class="popup-header"><span class="text-semibold">Login</span>
					<div class="btn-group pull-right">
						<a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="icon-cogs"></i></a>
						<ul class="dropdown-menu icons-right dropdown-menu-right">
							<li><a href="#"><i class="icon-info"></i> Forgot password?</a></li>
						</ul>
					</div>
				</div>
				<div class="well">

					<div class="form-group has-feedback ">
						<label>Email</label>
						<input type="text" class="form-control" placeholder="Email" name="email" v-model="data.email" required autofocus>
						<i class="icon-users form-control-feedback"></i>
					</div>

					<div class="form-group has-feedback">
						<label>Password</label>
							<input type="password" class="form-control" placeholder="Password" name="password" v-model="data.password" required>
						<i class="icon-lock form-control-feedback"></i>
					</div>

					<div class="row form-actions">
						<div class="col-xs-6">
							<div class="checkbox checkbox-success">
							<label>
								<input type="checkbox" class="styled" name="remember"> Remember Me
							</label>
							</div>
						</div>
						<div class="col-xs-6">
							<button type="submit" class="btn btn-warning pull-right"><i class="icon-menu2"></i> Login</button>
						</div>
					</div>

				</div>
			</form>
		</div>
	</div>
</template>

<script>
	import {mapActions} from 'vuex'

	export default{
		name: 'Login',
		components: {
			'AppHeader': require('./../components/Header'),
		},
		data () {
			return {
				data: {}
			}
		},
		methods:{
			...mapActions({
				setLogin: 'login'
			}),
			loginSystem (){
				let self = this
				this.$http.post(`/oauth/token`, {
					"client_id": 1,
					"client_secret": "DC-CLOTHING-CLIENT",
					"username": this.data.email,
					"password": this.data.password,
					"grant_type": "password",
					"provider": "client"
				}).then(res => {
					self.setLogin(res.data).then(() => {
						self.$session.set('is_client', res.data)

						self.$http.get(`/api/client`, {
							headers: {
								Authorization: `Bearer ${res.data.access_token}`
							}
						}).then(result => {
							self.$session.set('user_client', result.data)
							self.$router.go('/')
						})
					})					
				})
			}
		},
		beforeCreate (){
			if (!!localStorage.getItem("login_user")) {
				this.$router.push('/')
			}
		}
	}
</script>