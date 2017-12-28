<template>
	<div>
		<div class="navbar navbar-inverse" role="navigation">
			<div class="navbar-header">
				<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-right"><span class="sr-only">Toggle navbar</span><i class="icon-grid3"></i></button><a class="navbar-brand" href="#"><img src="#" :alt="application"></a>
				<a class="navbar-brand" href="#"><img src="#" :alt="application"></a>
				<a class="sidebar-toggle"><i class="icon-paragraph-justify2"></i></a>
				<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-icons"><span class="sr-only">Toggle navbar</span><i class="icon-grid3"></i></button>
				<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".sidebar"><span class="sr-only">Toggle navigation</span><i class="icon-paragraph-justify2"></i></button>
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
