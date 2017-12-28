<template>
	<!-- Page container -->
	<div class="page-container">
		<sidebar-vue :user="user"/>
		<!-- Page content -->
		<div class="page-content">
		    <!-- Page header -->
		    <div class="page-header">
		      <div class="page-title">
		        <h3>Provinsi</h3>
		      </div>
		    </div>
		    <!-- /page header -->


		    <!-- table -->
		    <router-view></router-view>

		    <!-- /table -->		      
			<footer-vue/>
		</div>
		<!-- /page content -->
	</div>
	<!-- /page container -->
</template>

<script>
	import {mapActions, mapGetters} from 'vuex'
	export default{
		name: "Provinsi",
		data(){
			return {
				// user: {}
			}
		},
		computed:{
			...mapGetters({'user':'user/user'})
		},
		components: {
			'sidebar-vue': require('./../sidebar'),
			'footer-vue': require('./../footer'),
		},
		methods:{
			...mapActions({
				getUsers: 'user/setUser',
				showLoad: 'showLoading',
				hideLoading: 'hideLoading'
			})
		},
		created(){
			let self = this
			self.showLoad()
			self.getUsers().then(() => {
				self.hideLoading()
			}).catch(err => {
				if (err.status === 401) {
					setTimeout(function() {
						self.getUsers()
					}, 1000);
				}
			})
		}
	}
</script>

<style lang="scss">
	
</style>