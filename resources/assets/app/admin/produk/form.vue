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
							<input type="file" id="gambar" multiple accept="image/*">
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
				const formData = new FormData()

				if (typeof this.id !== 'undefined') {
					// let data = new FormData()
				
					let fileList = $('input[type="file"]')[0].files
					// console.log(fileList)
					if (!fileList.length){
						formData.append('gambar', '')
					}else{
						Array
							.from(Array(fileList.length).keys())
							.map(x => {
								formData.append('gambar', fileList[x], fileList[x].name);
							})
						
					}

					formData.append('kode', this.form.kode)
					formData.append('nama', (typeof this.form.nama == 'undefined')? '': this.form.nama)
					formData.append('harga', (typeof this.form.harga == 'undefined')? this.form.harga: '')
					formData.append('kategori', (typeof this.form.kategori == 'undefined')? '': this.form.kategori)
					console.log(this.form.kode)
					// kode
					this.$http.put(`/dc/produk/${this.id}`, formData, {
						headers: {
							Authorization: `Bearer ${this.login_admin.access_token}`,
							'Content-Type': 'multipart/form-data'
						}
					})
					.then(() => {
						this.$router.push('/admin/produk')
					})
				}else{
				
					let fileList = $('input[type="file"]')[0].files
					// console.log(fileList)
					if (!fileList.length){
						formData.append('gambar', '')
					}else{
						Array
							.from(Array(fileList.length).keys())
							.map(x => {
								formData.append('gambar', fileList[x], fileList[x].name);
							})
						
					}

					formData.append('kode', (typeof this.form.kode != 'undefined')? this.form.kode: '')
					formData.append('nama', (typeof this.form.nama != 'undefined')? this.form.nama: '')
					formData.append('harga', (typeof this.form.harga != 'undefined')? this.form.harga: '')
					formData.append('kategori', (typeof this.form.kategori != 'undefined')? this.form.kategori: '')
					// kode

					// nama
					// harga
					// kategori
					this.$http.post(`/dc/produk`, formData, {
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