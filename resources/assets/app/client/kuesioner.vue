<template>
	<div>
		<div class="panel">
            <div class="panel-heading">
                <h3 class="title-heading">Kusioner</h3>
            </div>
            <div class="panel-body">
				<table class="table table-bordered">
					<thead>
						<tr>
							<th width="20px">No</th>
							<th>Soal</th>
						</tr>
					</thead>
					<tbody v-for="(item, idx) in list">
						<tr>
							<td rowspan="2">{{idx+1}}</td>
							<td>{{item.soal}}</td>
						</tr>
						<tr>
							<td>
								<label v-for="jawaban in JSON.parse(item.jawaban)">
									<input type="radio" v-model="form.jawaban[idx]" :value="jawaban.value"> {{jawaban.key}}
								</label>
							</td>
						</tr>
					</tbody>
				</table>
				<br/>
				<a class="btn btn-default pull-right" v-on:click="Simpan($event)">Submit</a>
            </div>
        </div>
	</div>
</template>

<script>
	export default{
		name: 'Kusioner',
		component: {
			'KusionerList': require('./kuesioner-list')
		},
		data (){
			return {
				list: [],
				token: this.$session.get('is_client'),
				form: {
					jawaban: []
				}
			}
		},
		methods: {
			getData (){
				this.$http.get(`/client/kuesioner`, {
					headers: {
						Authorization: `Bearer ${this.token.access_token}`
					}
				}).then(res => {
					Vue.set(this.$data, 'list', res.data)
				})
			},
			Simpan (event){
				event.preventDefault()
				this.$http.post(`/client/kuesioner/jawab`, this.form, {
					headers: {
						Authorization: `Bearer ${this.token.access_token}`
					}
				}).then(res => {
					console.log(res.data)
				})
			}
		},
		created (){
			this.getData()
		},
		beforeCreate (){
			let session = this.$session.get('user_client')
			if (typeof session == 'undefined' || session == null) {
				this.$router.push('/login/client')
			}
		}
	}
</script>

<style lang="scss" scoped>
	$header-color: #000000;
	$border-color: lighten($header-color, 80%);
	
	.panel{
		margin-top: 15px;
		text-align: center;
		// border: 1px solid $border-color;
		.panel-heading, .panel-body{
			border: 1px solid $border-color;
		}

		table{
			text-align: left;
		}
	}
	td{
		label{
			display: block;
		}
	}
</style>