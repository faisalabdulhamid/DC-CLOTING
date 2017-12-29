<template>
	<section id="main-page" class="container">
        <aside class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div class="row content-item" id="contact">
                <div class="panel">
                    <div class="panel-heading">
                        <h3 class="heading-title">Kuesioner</h3>
                    </div>
                    <div class="panel-body">
                        <table class="table table-bordered">
                            <thead>
                                <tr class="soal">
                                    <th rowspan="2">Soal</th>
                                    <th colspan="5">Jawaban</th>
                                </tr>
                                <tr class="jawab">
                                    <th class="th">Sangat Perlu</th>
                                    <th class="th">Perlu</th>
                                    <th class="th">Cukup</th>
                                    <th class="th">Tidak Perlu</th>
                                    <th class="th">Sangat Tidak Perlu</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item, index) in kuesioner">
                                    <td>{{item.soal}}</td>
                                    <td>
                                        <input type="radio" v-model="data.jawab[index]" value="1">
                                    </td>
                                    <td>
                                        <input type="radio" v-model="data.jawab[index]" value="2">
                                    </td>
                                    <td>
                                        <input type="radio" v-model="data.jawab[index]" value="3">
                                    </td>
                                    <td>
                                        <input type="radio" v-model="data.jawab[index]" value="4">
                                    </td>
                                    <td>
                                        <input type="radio" v-model="data.jawab[index]" value="5">
                                    </td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td colspan="6">
                                        <a v-on:click="simpan" class="btn btn-info pull-rigth">Simpan</a>
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
        </aside>  
    </section>
</template>

<script>
	export default{
		name: 'Kuesioner-Page',
        data(){
            return {
                data: {
                    jawab: []
                },
                kuesioner: []
            }
        },
        components: {
            'loading': function(resolve){
                require(['./loading'], resolve)
            }
        },
        methods: {
            getData(){
                let self = this
                self.$http.get('/kuesioner')
                    .then(res => {
                        Vue.set(self.$data, 'kuesioner', res.data)
                    })
            },
            simpan(){
                let self = this
                self.$http.post('kuesioner/jawab', self.data, {
                    headers: {
                        Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjMzMTA4NTg0ZTQwNWJjM2Q4NmQ4NjZlMGIzNTNmMzliNTFmNjEwMzFhZjBhOTg3OWIxYjUzYjY4NjMyMmJmZmRkODMyOGVmOGZiYmZlOTdiIn0.eyJhdWQiOiIyIiwianRpIjoiMzMxMDg1ODRlNDA1YmMzZDg2ZDg2NmUwYjM1M2YzOWI1MWY2MTAzMWFmMGE5ODc5YjFiNTNiNjg2MzIyYmZmZGQ4MzI4ZWY4ZmJiZmU5N2IiLCJpYXQiOjE1MTM1NjUyMjYsIm5iZiI6MTUxMzU2NTIyNiwiZXhwIjoxNTE0ODYxMjI0LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.Q08ESU0c53PJnZuVgA5L8d9Wi53ULUHxVHrqJ8KZVrpqhS7uRp5MmjywBhOWf3rdFK6RdCAUjW4noxnG0zVsD8ynAdewr6-dckgt5QYmv1IOu8XKpiNoHNYEWuG7tuO4d0b9W283GocMQvf7Pn7BUAj9Iwy2U_lEKeIUiaPHu35hlTgYARIEAJI8RtE2M4ZTwcHth6tdNyRdzOTeSiGux_fRFMfXSwJNfWKK-5eEnaxafUH5omNNiODboyrSsK6J-y-Wemd4j1LMyHcED9LZwJ1A-H_HVp4l1HUodR1a2BeV76zghcpFTLzc_Abnhjw2YfA63GNercB2Xvd0dBt6aCezJG9ERskUVRJN-p1yFC1kCiRuXLG9SqeGNMga8IM2hMZGHJwrl2NvbBRsaiPTcXyD6jRJz-eaclYbe4igOIWEuXZE1QVW4CC3PCRXcuGyus4Eanul9dMS9-hGJq_oAFnpjmkspCrLGfZW1QObxKdg-fZudCxT6US05Oee3jqVlL2aYD5bWXri7AGUodp9RrvfpVvfbCoUwYxmoiPGs2pvXoBFZbEgP71XCMYv9DcDAJfnrobSSSCiukt4F122c5UG-G06vioU0WPcKPn0Mu9lS6a7-hyA_FogDGRiLE9m_h591JD8-VFK3-DhzbDYmjiylLa4NI-RoJ858EEnc2Y`
                    }
                })
                .then(res => {
                    self.$swal({
                        text: res.data.message,
                        type: 'success',
                        timer: 5000,
                    }).then(() => {
                        self.$router.push({name: 'home'})
                    })
                })
            }
        },
        created(){
            this.getData()
        }
	}
</script>

<style lang="scss" scoped>
    thead{
        tr.soal{
            th:nth-child(1){
                vertical-align: middle;
            }
            th:nth-child(2){
                text-align: center;
                vertical-align: middle;
            }
        }
        tr.jawab{
            th{
                width: 20px;
                word-wrap: break-word;
                text-align: center;
                vertical-align: middle;
            }
        }
    }
    tbody{
        tr{
            td{
                text-align: left;
            }
        }
    }
</style>