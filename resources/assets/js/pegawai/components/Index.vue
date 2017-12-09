<template>
	<div>
	  <!-- Breadcrumbs line -->
      <div class="breadcrumb-line">
        <ul class="breadcrumb">
          <li><router-link :to="{name: 'index'}">Pegawai</router-link></li>
          <li class="active">List Data Pegawai</li>
        </ul>
        <div class="visible-xs breadcrumb-toggle"><a class="btn btn-link btn-lg btn-icon" data-toggle="collapse" data-target=".breadcrumb-buttons"><i class="icon-menu2"></i></a></div>
      </div>
      <!-- /breadcrumbs line -->

	  <div class="panel panel-default">
        <div class="panel-heading">
          <h6 class="panel-title"><i class="icon-paragraph-justify2"></i> Data Pegawai</h6>
          <router-link class="btn btn-default btn-sm btn-icon pull-right" :to="{name: 'create'}"><i class="icon-user-plus"></i></router-link>
        </div>
        <div class="datatable-tasks">
          <table class="table table-bordered">
            <thead>
              <tr>
                <th>Nama</th>
                <th class="task-progress">Email</th>
                <th class="task-priority">Status</th>
                <th class="task-tools text-center">Tools</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in table.data">
                <td>{{ item.nama }}</td>
                <td>{{ item.email }}</td>
                <td class="text-center"><span class="label label-danger">{{ item.status }}</span></td>
                <td class="text-center"><div class="btn-group">
                    <button type="button" class="btn btn-icon btn-info dropdown-toggle" data-toggle="dropdown"><i class="icon-cog4"></i></button>
                    <ul class="dropdown-menu icons-right dropdown-menu-right">
                      <li>
                      	<router-link :to="{ name: 'show', params: {id: item.id} }"><i class="icon-zoom-in"></i> Lihat</router-link>
                      </li>
                      <li>
                      	<router-link :to="{ name: 'edit', params: {id: item.id} }"><i class="icon-pencil3"></i> Edit</router-link>
                      </li>
                      <li><a v-on:click="hapus(item.id)"><i class="icon-user-minus"></i> Hapus</a></li>
                    </ul>
                  </div></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
	</div>
</template>

<script>
	import { mapActions, mapGetters} from 'vuex'
	
	export default{
		name: "Index",
		data(){
			return {
				table: {}
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
				that.$http.get('', {
					headers: {
						Authorization: that.token.token_type+' '+that.token.access_token
					}
				}).then(res => {
					Vue.set(that.$data, 'table', res.data)
				}).catch(error => {
					console.log(error)
				})
			},
			next(){
				let that = this
				that.$http.get(that.table.next_page_url, {
					headers: {
						Authorization: that.token.token_type+' '+that.token.access_token
					}
				}).then(res => {
					Vue.set(that.$data, 'model', res.data.data)
					Vue.set(that.$data, 'table', res.data)
				}).catch(error => {
					console.log(error)
				})
			},
			prev(){
				let that = this
				that.$http.get(that.table.prev_page_url, {
					headers: {
						Authorization: that.token.token_type+' '+that.token.access_token
					}
				}).then(res => {
					Vue.set(that.$data, 'model', res.data.data)
					Vue.set(that.$data, 'table', res.data)
				}).catch(error => {
					console.log(error)
				})
			},
			hapus(id){
				this.$swal({
					title: "Are you sure?",
					text: "Are you sure that you want to leave this page?",
					type: "warning",
					showCancelButton: true,
				}).then((result) => {
					if (result.value) {
						var that = this
						that.$http.delete('/'+id, {
							headers: {
								Authorization: that.token.token_type+' '+that.token.access_token
							}
						}).then(res => {
							this.$swal({
								title: "Deleted!",
								text: res.data.message,
								type: "success",
								timer: 5000
							}).then(() => {
								that.getData()
							})
						}).catch(err => {
							console.log(err)
						})
					}
				})
			}
			
		},
		created(){
			this.Oauth()
			this.getData()
		},
		beforeMount(){
			
		}
	}
</script>

<style type="scss" scoped>
	.actions{
		width: 120px;
	}
</style>