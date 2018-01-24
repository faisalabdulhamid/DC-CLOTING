<template>
	<!-- Page container -->
	<div class="page-container">
		<sidebar-vue :user="user"/>
		<!-- Page content -->
		<div class="page-content">
		    <!-- Page header -->
		    <div class="page-header">
		      <div class="page-title">
		        <h3>Dashboard <small>Welcome Eugene. 12 hours since last visit</small></h3>
		      </div>
		    </div>
		    <!-- /page header -->
		    <!-- Breadcrumbs line -->
		    <div class="breadcrumb-line">
		      <ul class="breadcrumb">
		        <li><a href="index.html">Home</a></li>
		        <li class="active">Dashboard</li>
		      </ul>
		    </div>
		    <!-- /breadcrumbs line -->

		      <!-- table -->
		      <div class="panel panel-default">
		        <div class="panel-heading">
		          <h6 class="panel-title"><i class="icon-table2"></i> Striped &amp; bordered table</h6>
		          <a v-on:click="showLoad" class="btn btn-default"><i class="icon-plus"></i></a>
		        </div>
		        <div class="table-responsive">
		          <table class="table table-striped table-bordered">
		            <thead>
		              <tr>
		                <th>#</th>
		                <th>First Name</th>
		                <th>Last Name</th>
		                <th>Username</th>
		              </tr>
		            </thead>
		            <tbody>
		              <tr>
		                <td>1</td>
		                <td>Mark</td>
		                <td>Otto</td>
		                <td>@mdo</td>
		              </tr>
		            </tbody>
		          </table>
		        </div>
		      </div>
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
		name: "Content",
		computed:{
			...mapGetters({'user':'user/user'})
		},
		components: {
			'sidebar-vue': require('./sidebar'),
			'footer-vue': require('./footer')
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
				if (err.status == 401) {
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