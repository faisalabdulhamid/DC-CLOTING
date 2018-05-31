<template>
	<div>
	    <div class="page-header">
			<div class="page-title">
				<h3>pelanggan</h3>
			</div>
	    </div>
		<Breadcrumb :list="list"/>
		<div class="panel panel-default">
	      	<div class="panel-heading">
	        	<h6 class="panel-title"><i class="icon-users"></i> Tambah pelanggan</h6>
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
						<label for="no_telepon" class="control-label col-md-3">No Telepon</label>
						<div class="col-md-9">
							<input type="text" class="form-control" id="no_telepon" v-model="form.no_telepon">
						</div>
					</div>
					<div class="form-group">
						<label for="provinsi" class="control-label col-md-3">Provinsi</label>
						<div class="col-md-9">
							<select class="form-control" id="provinsi" v-model="form.provinsi" @change="handleChangeProvinsi($event.target.value)">
								<option v-for="item in provinsi" :value="item.id">{{item.provinsi}}</option>
							</select>
						</div>
					</div>
					<div class="form-group">
						<label for="kota" class="control-label col-md-3">Kota</label>
						<div class="col-md-9">
							<select class="form-control" id="kota" v-model="form.kota">
								<option v-for="item in kota" :value="item.id">{{item.kota}}</option>
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
				form: {},
				kota: [],
				provinsi: []
			}
		},
		methods: {
			handleSave (){
				if (typeof this.id !== 'undefined') {
					this.$http.put(`/dc/pelanggan/${this.id}`, this.form, {
						headers: {
							Authorization: `Bearer ${this.login_admin.access_token}`
						}
					})
					.then(() => {
						this.$router.push('/admin/pelanggan')
					})
				}else{
					this.$http.post(`/dc/pelanggan`, this.form, {
						headers: {
							Authorization: `Bearer ${this.login_admin.access_token}`
						}
					})
					.then(() => {
						this.$router.push('/admin/pelanggan')
					})
				}
			},
			getProvinsi () {
				this.$http.get(`/dc/select/provinsi`, {
					headers: {
						Authorization: `Bearer ${this.login_admin.access_token}`
					}
				})
					.then(res => {
						Vue.set(this.$data, 'provinsi', res.data)
					})
			},
			handleChangeProvinsi (provinsi) {
				this.$http.get(`/dc/select/kota/${provinsi}`, {
					headers: {
						Authorization: `Bearer ${this.login_admin.access_token}`
					}
				})
					.then(res => {
						Vue.set(this.$data, 'kota', res.data)
					})
			}
		},
		created () {
			this.getProvinsi()
			if (typeof this.id !== 'undefined') {
				this.$http.get(`/dc/pelanggan/${this.id}`, {
					headers: {
						Authorization: `Bearer ${this.login_admin.access_token}`
					}
				})
					.then(res => {
						this.handleChangeProvinsi(res.data.provinsi)
						
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