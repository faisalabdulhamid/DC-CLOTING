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
								<th>sub total</th>
								<th>Aksi</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="(item, idx) in form.detail">
								<td>
									<select class="form-control" v-model="item.produk">
										<option v-for="p in produk" :value="p.id" v-on:click="handleProduk(idx, p.harga), _total()">{{p.kode+' - '+p.nama}}</option>
									</select>
								</td>
								<td>
									<input type="text" class="form-control" readonly="" v-model="item.harga">
								</td>
								<td>
									<input type="number" class="form-control" v-model="item.qty" v-on:change="_total()">
								</td>
								<td>
									<input type="text" class="form-control" readonly="" :value="item.sub_total = item.qty * item.harga">
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
								<td><input type="text" class="form-control" readonly="" :value="form.total_bayar"></td>
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
					// produk: '',
					// total_bayar: 0,
					detail: [
						{produk: '', harga: 0, sub_total: 0, qty: 1}
					]
				},
				pelanggan: [],
				produk: [],
			}
		},
		methods: {
			handleProduk(idx, harga){
				this.form.detail[idx].harga = harga
			},
			_total(){
				let tot = 0
				this.form.detail.forEach((val, key) => {
					tot += val.qty * val.harga
				})
				this.form.total_bayar = tot
			},
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
				if (this.form.detail.length > 1) {
					this.form.detail.splice(idx, 1)
				}
			},
			add (){
				this.form.detail.push({produk: '', harga: '', sub_total: 0, qty: 1})
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
						this._total()
					})
			}
		},
	}
</script>

<style lang="scss" scoped>
	label.control-label{
		text-align: right;
	}
</style>