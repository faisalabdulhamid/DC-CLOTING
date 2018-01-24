<template>
	<div>
		<div class="navbar navbar-inverse" role="navigation">
			<div class="navbar-header">
				<a class="navbar-brand"><img src="#" :alt="application"></a>
			</div>
			<ul v-if="isLogin" class="nav navbar-nav navbar-right collapse" id="navbar-icons">
				<li class="user dropdown"><a class="dropdown-toggle" data-toggle="dropdown"><img src="#" alt=""><span>{{user.nama}}</span><i class="caret"></i></a>
					<ul class="dropdown-menu dropdown-menu-right icons-right">
						<li><a href="#"><i class="icon-user"></i> Profile</a></li>
						<li><a v-on:click="logout"><i class="icon-exit"></i> Logout</a></li>
					</ul>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import {mapGetters, mapActions} from 'vuex'
	import {app_name} from './../config/env.config'

	export default {
		name: 'Header',
		props: ['isLogin'],
		computed: {
			...mapGetters({'user':'user/user'}),
			application(){
				return app_name;
			}
		},
		methods:{
			...mapActions({
				vuexLogot: 'logout', 
				'setUserNull':'user/setUserNull', 
				'setTableNull':'table/setTableNull'}),
			logout(){
				let self = this
				setTimeout(function() {
					self.vuexLogot()
					self.setUserNull()
					self.setTableNull()
					self.$router.push({name:'login'})	
				}, 1000);
			}
		}
	}
</script>
