<template>
	<div>
	    <div class="page-header">
			<div class="page-title">
				<h3>transaksi</h3>
			</div>
	    </div>
		<Breadcrumb :list="list"/>
		<div class="panel panel-default">
	      	<div class="panel-heading">
	        	<h6 class="panel-title"><i class="icon-users"></i> Tambah transaksi</h6>
	        </div>
	        <div class="panel-body">
				<form class="form-horizontal" v-on:submit.prevent="handleSave">
					<div class="form-group">
						<label for="pelanggan" class="control-label col-md-3">Pelanggan</label>
						<div class="col-md-9">
							<select class="form-control" id="pelanggan" v-model="form.pelanggan">
								<option v-for="item in pelanggan" :value="item.id">{{item.nama}}</option>
							</select>
						</div>
					</div>

					<table class="table table-bordered">
						<thead>
							<tr>
								<th>Produk</th>
								<th>Harga</th>
								<th>Qty</th>
								<th>SubTotal</th>
								<th>Aksi</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="(item, idx) in cart">
								<td>
									<select class="form-control">
										<option v-for="p in produk" :value="p.id">{{p.kode+' - '+p.nama}}</option>
									</select>
								</td>
								<td>
									<input type="text" class="form-control" readonly="">
								</td>
								<td>
									<input type="number" class="form-control">
								</td>
								<td>
									<input type="text" class="form-control">
								</td>
								<td>
									<a v-on:click="remove(idx)" class="btn btn-default btn-sm"><i class="fa fa-times"></i></a>
									<a v-on:click="add" class="btn btn-default btn-sm"><i class="fa fa-plus"></i></a>
								</td>
							</tr>
						</tbody>
						<tfoot>
							<tr>
								<th colspan="3" class="text-right">Total</th>
								<td><input type="text" class="form-control" readonly=""></td>
								<td></td>
							</tr>
						</tfoot>
					</table>

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
				form: {
					detail: []
				},
				pelanggan: [],
				produk: [],
				cart: [
					{'id': ''}
				]
			}
		},
		methods: {
			getPelanggan (){
				this.$http.get(`/dc/pelanggan?all=true`, {
					headers:{
						Authorization: `Bearer ${this.login_admin.access_token}`
					}
				})
					.then(res => {
						Vue.set(this.$data, 'pelanggan', res.data)
					})
			},
			getProduk (){
				this.$http.get(`/dc/produk?all=true`, {
					headers:{
						Authorization: `Bearer ${this.login_admin.access_token}`
					}
				})
					.then(res => {
						Vue.set(this.$data, 'produk', res.data)
					})	
			},
			remove(idx){
				if (this.cart.length > 1) {
					this.cart.splice(idx, 1)
				}
			},
			add (){
				this.cart.push({id: '', detail: []})
			},
			handleSave (){
				if (typeof this.id !== 'undefined') {
					this.$http.put(`/dc/transaksi/${this.id}`, this.form, {
						headers: {
							Authorization: `Bearer ${this.login_admin.access_token}`
						}
					})
					.then(() => {
						this.$router.push('/admin/transaksi')
					})
				}else{
					this.$http.post(`/dc/transaksi`, this.form, {
						headers: {
							Authorization: `Bearer ${this.login_admin.access_token}`
						}
					})
					.then(() => {
						this.$router.push('/admin/transaksi')
					})
				}
			}
		},
		created () {
			this.getPelanggan()
			this.getProduk()
			if (typeof this.id !== 'undefined') {
				this.$http.get(`/dc/transaksi/${this.id}`, {
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