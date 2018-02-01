<template>
	<div>
	    <div class="page-header">
			<div class="page-title">
				<h3>promosi</h3>
			</div>
	    </div>
		<Breadcrumb :list="list"/>
		<div class="panel panel-default">
	      	<div class="panel-heading">
	        	<h6 class="panel-title"><i class="icon-users"></i> Tambah promosi</h6>
	        </div>
	        <div class="panel-body">
				<form class="form-horizontal" v-on:submit.prevent="handleSave">
					<div class="form-group">
						<label for="nama" class="control-label col-md-3">subjek</label>
						<div class="col-md-9">
							<input type="text" class="form-control" id="nama" v-model="form.subjek">
						</div>
					</div>
					<div class="form-group">
						<label for="email" class="control-label col-md-3">Isi Promosi</label>
						<div class="col-md-9">
							<textarea class="form-control" id="email" v-model="form.isi_promosi"></textarea>
						</div>
					</div>
					<div class="form-group">
						<label for="nama" class="control-label col-md-3">Mulai Promosi</label>
						<div class="col-md-9">
							<!-- <input type="text" class="form-control" id="nama" v-model="form.mulai_promosi"> -->
							<date-picker :date="startTime"></date-picker>
						</div>
					</div>
					<div class="form-group">
						<label for="nama" class="control-label col-md-3">Akhir Promosi</label>
						<div class="col-md-9">
							<date-picker :date="endTime"></date-picker>
							<!-- <input type="text" class="form-control" id="nama" v-model="form.akhir_promosi"> -->
						</div>
					</div>

					<div class="form-group">
						<label for="status" class="control-label col-md-3">Status</label>
						<div class="col-md-9">
							<select class="form-control" id="status" v-model="form.status">
								<option value="0">tidak aktif</option>
								<option value="1">aktif</option>
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
	import myDatepicker from 'vue-datepicker'

	export default{
		name: 'Form',
		components: {
			'Breadcrumb': require('./../../components/Breadcrumb'),
			'date-picker': myDatepicker
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
				startTime: {
					time: ''
				},
				endTime: {
					time: ''
				}
			}
		},
		methods: {
			handleSave (){
				if (typeof this.id !== 'undefined') {
					this.$http.put(`/dc/promosi/${this.id}`, this.form, {
						headers: {
							Authorization: `Bearer ${this.login_admin.access_token}`
						}
					})
					.then(() => {
						this.$router.push('/admin/promosi')
					})
				}else{
					this.$http.post(`/dc/promosi`, this.form, {
						headers: {
							Authorization: `Bearer ${this.login_admin.access_token}`
						}
					})
					.then(() => {
						this.$router.push('/admin/promosi')
					})
				}
			}
		},
		watch: {
			'endTime.time': function () {
				this.form.awal_promosi = this.endTime.time
			},
			'startTime.time': function () {
				this.form.akhir_promosi = this.startTime.time
			},
		},
		created () {
			if (typeof this.id !== 'undefined') {
				this.$http.get(`/dc/promosi/${this.id}`, {
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