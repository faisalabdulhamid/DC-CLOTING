<template>
	<div>
	    <div class="page-header">
			<div class="page-title">
				<h3>kuesioner</h3>
			</div>
	    </div>
		<Breadcrumb :list="list"/>
		<div class="panel panel-default">
	      	<div class="panel-heading">
	        	<h6 class="panel-title"><i class="icon-users"></i> Form kuesioner</h6>
	        </div>
	        <div class="panel-body">
				<form class="form-horizontal" v-on:submit.prevent="handleSave">
					<div class="form-group">
						<label for="soal" class="control-label col-md-3">Soal</label>
						<div class="col-md-9">
							<textarea class="form-control" id="soal" v-model="form.soal"></textarea>
						</div>
					</div>

					<div class="form-group" v-for="(item, idx) in jawaban">
						<label for="jawaban" class="control-label col-md-3">Jawaban {{ idx+1 }}</label>
						<div class="col-md-9">
							
							<div class="input-group">
								<input type="text" class="form-control" placeholder="Jawaban" v-model="form.jawaban[idx]">
								<span class="input-group-btn">
									<a v-on:click="add" class="btn btn-default"><i class="fa fa-plus"></i></a>
									<a v-on:click="remove(idx)" class="btn btn-default"><i class="fa fa-times"></i></a>
								</span>
							</div><!-- /input-group -->
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
				form: {
					soal: '',
					jawaban: []
				},
				jawaban: [
					''
				]
			}
		},
		methods: {
			add () {
				this.jawaban.push('')
			},
			remove (idx){
				if (this.jawaban.length > 1) {
					this.jawaban.splice(idx, 1)
				}
			},
			handleSave (){
				let jawab = this.form.jawaban
				let data = [];
				jawab.forEach((val, key)=> {
					data.push({key: val, value: key+1})
				}) 

				if (typeof this.id !== 'undefined') {
					this.$http.put(`/dc/kuesioner/${this.id}`, {
						soal: this.form.soal,
						jawaban: JSON.stringify(data)
					}, {
						headers: {
							Authorization: `Bearer ${this.login_admin.access_token}`
						}
					})
					.then(() => {
						this.$router.push('/admin/kuesioner')
					})
				}else{
					
					this.$http.post(`/dc/kuesioner`, {
						soal: this.form.soal,
						jawaban: JSON.stringify(data)
					}, {
						headers: {
							Authorization: `Bearer ${this.login_admin.access_token}`
						}
					})
					.then(() => {
						this.$router.push('/admin/kuesioner')
					})
				}
			}
		},
		created () {
			if (typeof this.id !== 'undefined') {
				this.$http.get(`/dc/kuesioner/${this.id}`, {
					headers: {
						Authorization: `Bearer ${this.login_admin.access_token}`
					}
				})
					.then(res => {
						let soal = res.data.soal;
						let jawaban = JSON.parse(res.data.jawaban);

						let masuk_jawab = []
						jawaban.forEach((val, key) => {
							masuk_jawab.push(val.key)
						})

						let data = {soal: soal, jawaban: masuk_jawab}

						Vue.set(this.$data, 'form', data)
						Vue.set(this.$data, 'jawaban', masuk_jawab)
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