<template>
	<div>
	  <!-- Breadcrumbs line -->
      <div class="breadcrumb-line">
        <ul class="breadcrumb">
          <li><router-link :to="{name: 'index'}">Kota</router-link></li>
          <li class="active">List Data Kota</li>
        </ul>
        <div class="visible-xs breadcrumb-toggle"><a class="btn btn-link btn-lg btn-icon" data-toggle="collapse" data-target=".breadcrumb-buttons"><i class="icon-menu2"></i></a></div>
      </div>
      <!-- /breadcrumbs line -->

	  <div class="panel panel-default">
        <div class="panel-heading">
          <h6 class="panel-title"><i class="icon-paragraph-justify2"></i> Data Kota</h6>
          <router-link class="btn btn-default btn-sm btn-icon pull-right" :to="{name: 'create'}"><i class="icon-user-plus"></i></router-link>
        </div>
        <div class="datatable-tasks">
          <table class="table table-bordered">
            <thead>
              <tr>
                <th>Kota</th>
                <th class="task-tools text-center">Tools</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in table.data">
                <td>{{ item.kota }}</td>
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
		methods:{
			getData(){
				let that = this
				that.$http.get('')
				.then(res => {
					Vue.set(that.$data, 'table', res.data)
				})
			},
			next(){
				let that = this
				that.$http.get(that.table.next_page_url)
				.then(res => {
					Vue.set(that.$data, 'table', res.data)
				})
			},
			prev(){
				let that = this
				that.$http.get(that.table.prev_page_url)
				.then(res => {
					Vue.set(that.$data, 'table', res.data)
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
						})
					}
				})
			}
			
		},
		beforeMount(){
			this.getData()
		}
	}
</script>

<style type="scss" scoped>
	.actions{
		width: 120px;
	}
</style>