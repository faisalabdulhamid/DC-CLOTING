<template>
	<div>
	    <div class="page-header">
			<div class="page-title">
				<h3>Pegawai</h3>
			</div>
	    </div>
		<Breadcrumb :list="list"/>
		<div class="panel panel-default">
	      	<div class="panel-heading">
	        	<h6 class="panel-title"><i class="icon-users"></i> Tambah Pegawai</h6>
	        </div>
	        <div class="panel-body">
				<form class="form-horizontal" v-on:submit.prevent="handleSave">
					<div class="form-group">
						<label for="nama" class="control-label col-md-3">Nama</label>
						<div class="col-md-9">
							<input type="text" class="form-control" id="nama" v-model="form.nama">
						</div>
					</div>
					<div class="form-group">
						<label for="email" class="control-label col-md-3">Email</label>
						<div class="col-md-9">
							<input type="email" class="form-control" id="email" v-model="form.email">
						</div>
					</div>
					<div class="form-group">
						<label for="password" class="control-label col-md-3">Password</label>
						<div class="col-md-9">
							<input type="password" class="form-control" id="password" v-model="form.password">
						</div>
					</div>
					<div class="form-group">
						<label for="status" class="control-label col-md-3">Status</label>
						<div class="col-md-9">
							<select class="form-control" id="status" v-model="form.status">
								<option value="direktur">direktur</option>
								<option value="marketing">marketing</option>
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
					this.$http.put(`/dc/pegawai/${this.id}`, this.form, {
						headers: {
							Authorization: `Bearer ${this.login_admin.access_token}`
						}
					})
					.then(() => {
						this.$router.push('/admin/pegawai')
					})
				}else{
					this.$http.post(`/dc/pegawai`, this.form, {
						headers: {
							Authorization: `Bearer ${this.login_admin.access_token}`
						}
					})
					.then(() => {
						this.$router.push('/admin/pegawai')
					})
				}
			}
		},
		created () {
			if (typeof this.id !== 'undefined') {
				this.$http.get(`/dc/pegawai/${this.id}`, {
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