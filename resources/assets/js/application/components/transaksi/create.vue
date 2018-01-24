<template>
	<div>
		<!-- Breadcrumbs line -->
	    <div class="breadcrumb-line">
	      <ul class="breadcrumb">
	        <li><router-link :to="{name: 'content'}">Home</router-link></li>
	        <li><router-link :to="{name: 'transaksi-index'}">transaksi</router-link></li>
	        <li class="active">Tambah transaksi</li>
	      </ul>
	    </div>
	    <!-- /breadcrumbs line -->
		<!-- table -->
		<div class="panel panel-default">
			<div class="panel-heading">
				<h6 class="panel-title"><i class="icon-users"></i> Tambah transaksi</h6>
			</div>
			<div class="panel-body">
			<form class="form-horizontal" v-on:submit.prevent="simpan">
				<div class="form-group">
					<label for="pelanggan" class="control-label col-md-2 text-right">Pelanggan</label>
					<div class="col-md-10">
						<select class="form-control" id="pelanggan" v-model="data.pelanggan">
							<option v-for="item in pelanggan" :value="item.id">{{ item.nama }}</option>
						</select>
					</div>
				</div>
				<div class="form-group">
					<label for="tanggal" class="control-label col-md-2 text-right">Tanggal</label>
					<div class="col-md-10">
						<input type="text" class="form-control" id="tanggal" v-model="data.tanggal">
					</div>
				</div>
				<div class="form-group">
					<label for="total_bayar" class="control-label col-md-2 text-right">Total Bayar</label>
					<div class="col-md-10">
						<input type="text" class="form-control" id="total_bayar" :value="total_bayar" readonly="">
					</div>
				</div>
				<table class="table table-bordered">
					<thead>
						<tr>
							<th>Produk</th>
							<th>Harga</th>
							<th width="80px">Qty</th>
							<th>SubTotal</th>
							<th width="120px">#</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="(item, idx) in data.pesanan">
							<td>
								<select class="form-control" v-model="item.produk_id" v-on:change="handleChange($event, idx)">
									<option v-for="it in produk" :value="it.id">{{ it.nama }}</option>
								</select>
							</td>
							<td>
								<input type="text" class="form-control" readonly="" v-model="item.harga">
							</td>
							<td>
								<input type="number" class="form-control" v-model="item.qty">
							</td>
							<td>
								<input type="text" class="form-control" :value="item.harga * item.qty" readonly="">
							</td>
							<td>
								<div class="btn-group btn-group-sm">
									<a v-on:click="add" class="btn btn-default"><i class="icon-plus"></i></a>
									<a v-on:click="remove(idx)" class="btn btn-default"><i class="icon-minus"></i></a>
								</div>
							</td>
						</tr>
					</tbody>
					<tfoot>
						<tr>
							<td colspan="3"></td>
							<td>
								<input type="text" class="form-control" :value="total_bayar" readonly="">
							</td>
							<td></td>
						</tr>
					</tfoot>
				</table>
				<br />
				<br />
				<div class="form-actions text-right">
					<button class="btn btn-success">Simpan</button>
				</div>
			</form>
			</div>
		</div>
	  	<!-- /table -->	
	</div>
</template>

<script>
	import {mapGetters} from 'vuex'
	export default{
		name: "Tambah",
		data(){
			return {
				data: {
					pelangga: '',
					tanggal: '',
					pesanan: [
						{'produk_id': '', 'harga': 0, qty:1 }
					],
				},
				produk: [],
				pelanggan: []
			}
		},
		computed:{
			...mapGetters({'token': 'token'}),
			total_bayar() {
				_.sumBy(this.data.pesanan, _.partial(_.sumBy, this.data.pesanan.qty))
			}
		},
		methods:{
			add () {
				this.data.pesanan.push({
					'produk_id': '',
					'harga': 0,
					'qty': 1
				})
			},
			remove (idx) {
				if (this.data.pesanan.length > 1) {
					this.data.pesanan.splice(idx, 1)
				}
			},
			handleChange (event, idx) {
				let harga = _.find(this.produk, function(obj) { return obj.id == event.target.value }).harga
				this.data.pesanan[idx].harga = harga
			},
			getProduk () {
				this.$http.get('/api/dc/produk?all=true', {
					headers: {
						Authorization: `Bearer ${this.token}`
					}
				})
					.then(res => {
						Vue.set(this.$data, 'produk', res.data)
					})
			},
			getPelanggan () {
				this.$http.get('/api/dc/pelanggan?all=true', {
					headers: {
						Authorization: `Bearer ${this.token}`
					}
				})
				.then( res => {
					Vue.set(this.$data, 'pelanggan', res.data)
				})
			},
			simpan(){
				let self = this
				self.$http.post('/api/dc/transaksi', self.data, {
					headers: {
						Authorization: `Bearer ${self.token}`
					}
				}).then(res => {
					self.$swal({
						text: res.data.message,
						type: 'success',
						timer: 5000,						
					}).then(() => {
						self.$router.push({name: 'transaksi-index'})
					})
				}).catch(error => {
					if (error.status === 401) {
						setTimeout(function() {
							self.simpan()
						}, 1000);
					}
				})
			}
		},
		created () {
			this.getProduk()
			this.getPelanggan()
		}
	}
</script>