<template>
	<div>
		<AppHeader/>
		<div class="login-wrapper">
			<form role="form" v-on:submit.prevent="loginSystem">
				<div class="popup-header"><span class="text-semibold">Masukan No Telepon</span>
				</div>
				<div class="well">

					<div class="form-group has-feedback ">
						<label>No Telepon</label>
						<input type="text" class="form-control" placeholder="081xxxx" name="no_telepon" v-model="data.no_telepon" required autofocus>
						<i class="icon-users form-control-feedback"></i>
					</div>

					<div class="row form-actions">
						<div class="col-xs-6">
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
				this.$http.post(`/client/api_token`, {
					"no_telepon": this.data.no_telepon,
				}).then(res => {
					self.setLogin(res.data).then(() => {
						console.log(res.data)
						self.$session.set('is_client', res.data)

						self.$http.get(`/api/client`, {
							headers: {
								Authorization: `Bearer ${res.data.api_token}`
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