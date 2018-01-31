<template>
	<div>
		<div class="navbar navbar-inverse" role="navigation">
			<div class="navbar-header">
				<a class="navbar-brand">Application</a>
				<ul class="nav navbar-nav collapse" id="navbar-icons" v-if="!isAdmin">
					<li><router-link :to="'/'">Home</router-link></li>
					<li><router-link :to="'/produk'">Produk</router-link></li>
					<li><router-link :to="'/kuesioner'">Kuesioner</router-link></li>
					<li><router-link :to="'/desain'">Desain</router-link></li>
					<li><router-link :to="'/about'">About</router-link></li>
					<li><router-link :to="'/contact'">Contact</router-link></li>
				</ul>
			</div>

			<ul class="nav navbar-nav navbar-right collapse" id="navbar-icons" v-if="isLoginAdmin">
				<li class="user dropdown"><a class="dropdown-toggle" data-toggle="dropdown"><img src="#" alt=""><span>{{ namaUser.nama }}</span><i class="caret"></i></a>
					<ul class="dropdown-menu dropdown-menu-right icons-right">
						<li><a><i class="icon-exit"></i> Logout</a></li>
					</ul>
				</li>
			</ul>

			<ul class="nav navbar-nav navbar-right collapse" id="navbar-icons" v-if="isLoginCLient">
				<li class="user dropdown"><a class="dropdown-toggle" data-toggle="dropdown"><img src="#" alt=""><span>{{ namaClient.nama }}</span><i class="caret"></i></a>
					<ul class="dropdown-menu dropdown-menu-right icons-right">
						<li><a v-on:click="Logout"><i class="icon-exit"></i> Logout</a></li>
					</ul>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import {mapGetters, mapActions} from 'vuex'

	export default {
		name: 'Header',
		computed: {
			application(){
				// return app_name;
				return ''
			},
			isAdmin () {
				return this.$route.meta.isAdmin == 'admin'
			},
			isLoginAdmin () {
				return this.$session.get('is_admin')
			},
			namaUser () {
				return this.$session.get('user_admin')
			},
			namaClient (){
				return this.$session.get('user_client')
			},
			isLoginCLient () {
				return this.$session.get('is_client')
			}
		},
		methods: {
			...mapActions({
				'logout': 'logout'
			}),
			Logout () {
				this.$session.destroy()
				this.logout()
				// this.$router.push('/')
				// window.reload()
			}
		}
	}
</script>
