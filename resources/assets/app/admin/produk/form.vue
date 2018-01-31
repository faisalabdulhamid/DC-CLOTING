<template>
	<div>
	    <div class="page-header">
			<div class="page-title">
				<h3>produk</h3>
			</div>
	    </div>
		<Breadcrumb :list="list"/>
		<div class="panel panel-default">
	      	<div class="panel-heading">
	        	<h6 class="panel-title"><i class="icon-users"></i> Form produk</h6>
	        </div>
	        <div class="panel-body">
				<form class="form-horizontal" v-on:submit.prevent="handleSave">
					<div class="form-group">
						<label for="kode" class="control-label col-md-3">Kode</label>
						<div class="col-md-9">
							<input type="text" class="form-control" id="kode" v-model="form.kode">
						</div>
					</div>
					<div class="form-group">
						<label for="nama" class="control-label col-md-3">Nama</label>
						<div class="col-md-9">
							<input type="text" class="form-control" id="nama" v-model="form.nama">
						</div>
					</div>
					<div class="form-group">
						<label for="harga" class="control-label col-md-3">Harga</label>
						<div class="col-md-9">
							<input type="text" class="form-control" id="harga" v-model="form.harga">
						</div>
					</div>
					<div class="form-group">
						<label for="gambar" class="control-label col-md-3">Gambar</label>
						<div class="col-md-9">
							<input type="file" id="gambar">
						</div>
					</div>

					<div class="form-group">
						<label for="status" class="control-label col-md-3">Kategori</label>
						<div class="col-md-9">
							<select class="form-control" id="status" v-model="form.kategori">
								<option v-for="item in kategori" :value="item.id">{{item.kategori}}</option>
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
				kategori:[]
			}
		},
		methods: {
			getKategori (){
				this.$http.get(`/dc/kategori?all=true`, {
					headers: {
						Authorization: `Bearer ${this.login_admin.access_token}`
					}
				})
					.then(res => {
						Vue.set(this.$data, 'kategori', res.data)
					})
			},
			handleSave (){
				if (typeof this.id !== 'undefined') {
					this.$http.put(`/dc/produk/${this.id}`, this.form, {
						headers: {
							Authorization: `Bearer ${this.login_admin.access_token}`
						}
					})
					.then(() => {
						this.$router.push('/admin/produk')
					})
				}else{
					this.$http.post(`/dc/produk`, this.form, {
						headers: {
							Authorization: `Bearer ${this.login_admin.access_token}`
						}
					})
					.then(() => {
						this.$router.push('/admin/produk')
					})
				}
			}
		},
		created () {
			this.getKategori()
			if (typeof this.id !== 'undefined') {
				this.$http.get(`/dc/produk/${this.id}`, {
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