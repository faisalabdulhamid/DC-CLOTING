<template>
	<div>
	    <div class="page-header">
			<div class="page-title">
				<h3>desain</h3>
			</div>
	    </div>
		<Breadcrumb :list="list"/>
		<div class="panel panel-default">
	      	<div class="panel-heading">
	        	<h6 class="panel-title"><i class="icon-users"></i> Tambah desain</h6>
	        </div>
	        <div class="panel-body">
				<form class="form-horizontal" v-on:submit.prevent="handleSave">
					<div class="form-group">
						<label for="desain" class="control-label col-md-3">Desain</label>
						<div class="col-md-9">
							<input type="file" id="desain">
						</div>
					</div>
					<div class="form-group">
						<label for="status" class="control-label col-md-3">Status</label>
						<div class="col-md-9">
							<select class="form-control" id="status" v-model="form.status">
								<option value="1">Ditampilkan</option>
								<option value="0">Tidak Ditampilkan</option>
							</select>
						</div>
					</div>
					<button type="submit" class="btn btn-default pull-right">Simpan</button>
				</form>
	        </div>
	    </div>
	</div>
</template>

<script>
	export default{
		name: 'Form',
		components: {
			'Breadcrumb': require('./../../components/Breadcrumb'),
		},
		computed: {
			name () {
				return this.$route.name
			},

			list () {
				return this.$route.matched
			},
			login_admin () {
				return this.$session.get('is_admin')
			}
		},
		props: ['id'],
		data () {
			return {
				form: {}
			}
		},
		methods: {
			handleSave (){
				if (typeof this.id !== 'undefined') {
					this.$http.put(`/dc/desain/${this.id}`, this.form, {
						headers: {
							Authorization: `Bearer ${this.login_admin.access_token}`
						}
					})
					.then(() => {
						this.$router.push('/admin/desain')
					})
				}else{
					this.$http.post(`/dc/desain`, this.form, {
						headers: {
							Authorization: `Bearer ${this.login_admin.access_token}`
						}
					})
					.then(() => {
						this.$router.push('/admin/desain')
					})
				}
			}
		},
		created () {
			if (typeof this.id !== 'undefined') {
				this.$http.get(`/dc/desain/${this.id}`, {
					headers: {
						Authorization: `Bearer ${this.login_admin.access_token}`
					}
				})
					.then(res => {
						Vue.set(this.$data, 'form', res.data)
					})
			}
		}
	}
</script>

<style lang="scss" scoped>
	label.control-label{
		text-align: right;
	}
</style>