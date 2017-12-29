<!-- 
    v-on:like="this.like" 
    v-on:like="this.like"
-->
<template>
	<section id="main-page" class="container">
        <aside class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div class="row content-item">
                <desain-list v-for="item in desain" 
                    :key="item.id"
                    :id="item.id"
                    :gambar="item.gambar" 
                    :dibuat="item.desainable.nama" 
                    :like="item.like_count" 
                    :dislike="item.dislike_count"
                    v-on:like="handleLike"
                    v-on:dislike="handlDislike"
                    >
                </desain-list>
            </div>
            <loading :show="showLoading"/>
        </aside>  
    </section>
</template>

<script>
	export default{
		name: 'Index-User-Page',
        components: {
            'loading': function(resolve){
                require(['./loading'], resolve)
            },
            'desain-list': function(resolve){
                showLoading: true
                setTimeout(function() {
                    showLoading: false
                    require(['./desain-list'], resolve)
                }, 500);
            }
        },
        data(){
            return {
                showLoading: false,
                desain: []
            }
        },
        methods: {
            getData(){
                let self = this
                self.$http.get('/desain')
                    .then(res => {
                        Vue.set(self.$data, 'desain', res.data)
                    })
            },
            handleLike(id){
                let self = this
                let postData = new Promise((resolve) => {
                    self.$http.put('/desain/like/'+id, '', {
                        headers: {
                            Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjMzMTA4NTg0ZTQwNWJjM2Q4NmQ4NjZlMGIzNTNmMzliNTFmNjEwMzFhZjBhOTg3OWIxYjUzYjY4NjMyMmJmZmRkODMyOGVmOGZiYmZlOTdiIn0.eyJhdWQiOiIyIiwianRpIjoiMzMxMDg1ODRlNDA1YmMzZDg2ZDg2NmUwYjM1M2YzOWI1MWY2MTAzMWFmMGE5ODc5YjFiNTNiNjg2MzIyYmZmZGQ4MzI4ZWY4ZmJiZmU5N2IiLCJpYXQiOjE1MTM1NjUyMjYsIm5iZiI6MTUxMzU2NTIyNiwiZXhwIjoxNTE0ODYxMjI0LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.Q08ESU0c53PJnZuVgA5L8d9Wi53ULUHxVHrqJ8KZVrpqhS7uRp5MmjywBhOWf3rdFK6RdCAUjW4noxnG0zVsD8ynAdewr6-dckgt5QYmv1IOu8XKpiNoHNYEWuG7tuO4d0b9W283GocMQvf7Pn7BUAj9Iwy2U_lEKeIUiaPHu35hlTgYARIEAJI8RtE2M4ZTwcHth6tdNyRdzOTeSiGux_fRFMfXSwJNfWKK-5eEnaxafUH5omNNiODboyrSsK6J-y-Wemd4j1LMyHcED9LZwJ1A-H_HVp4l1HUodR1a2BeV76zghcpFTLzc_Abnhjw2YfA63GNercB2Xvd0dBt6aCezJG9ERskUVRJN-p1yFC1kCiRuXLG9SqeGNMga8IM2hMZGHJwrl2NvbBRsaiPTcXyD6jRJz-eaclYbe4igOIWEuXZE1QVW4CC3PCRXcuGyus4Eanul9dMS9-hGJq_oAFnpjmkspCrLGfZW1QObxKdg-fZudCxT6US05Oee3jqVlL2aYD5bWXri7AGUodp9RrvfpVvfbCoUwYxmoiPGs2pvXoBFZbEgP71XCMYv9DcDAJfnrobSSSCiukt4F122c5UG-G06vioU0WPcKPn0Mu9lS6a7-hyA_FogDGRiLE9m_h591JD8-VFK3-DhzbDYmjiylLa4NI-RoJ858EEnc2Y`
                        }
                    }).then(res => {
                        resolve(res)
                    }) 
                })

                axios.all([postData, self.getData()])
                    .then(axios.spread(function(post, data){
                        
                    }))
            },
            handlDislike(id){
                
                let self = this
                let postData = new Promise((resolve) => {
                    self.$http.put('/desain/dislike/'+id, '', {
                        headers: {
                            Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjMzMTA4NTg0ZTQwNWJjM2Q4NmQ4NjZlMGIzNTNmMzliNTFmNjEwMzFhZjBhOTg3OWIxYjUzYjY4NjMyMmJmZmRkODMyOGVmOGZiYmZlOTdiIn0.eyJhdWQiOiIyIiwianRpIjoiMzMxMDg1ODRlNDA1YmMzZDg2ZDg2NmUwYjM1M2YzOWI1MWY2MTAzMWFmMGE5ODc5YjFiNTNiNjg2MzIyYmZmZGQ4MzI4ZWY4ZmJiZmU5N2IiLCJpYXQiOjE1MTM1NjUyMjYsIm5iZiI6MTUxMzU2NTIyNiwiZXhwIjoxNTE0ODYxMjI0LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.Q08ESU0c53PJnZuVgA5L8d9Wi53ULUHxVHrqJ8KZVrpqhS7uRp5MmjywBhOWf3rdFK6RdCAUjW4noxnG0zVsD8ynAdewr6-dckgt5QYmv1IOu8XKpiNoHNYEWuG7tuO4d0b9W283GocMQvf7Pn7BUAj9Iwy2U_lEKeIUiaPHu35hlTgYARIEAJI8RtE2M4ZTwcHth6tdNyRdzOTeSiGux_fRFMfXSwJNfWKK-5eEnaxafUH5omNNiODboyrSsK6J-y-Wemd4j1LMyHcED9LZwJ1A-H_HVp4l1HUodR1a2BeV76zghcpFTLzc_Abnhjw2YfA63GNercB2Xvd0dBt6aCezJG9ERskUVRJN-p1yFC1kCiRuXLG9SqeGNMga8IM2hMZGHJwrl2NvbBRsaiPTcXyD6jRJz-eaclYbe4igOIWEuXZE1QVW4CC3PCRXcuGyus4Eanul9dMS9-hGJq_oAFnpjmkspCrLGfZW1QObxKdg-fZudCxT6US05Oee3jqVlL2aYD5bWXri7AGUodp9RrvfpVvfbCoUwYxmoiPGs2pvXoBFZbEgP71XCMYv9DcDAJfnrobSSSCiukt4F122c5UG-G06vioU0WPcKPn0Mu9lS6a7-hyA_FogDGRiLE9m_h591JD8-VFK3-DhzbDYmjiylLa4NI-RoJ858EEnc2Y`
                        }
                    }).then(res => {
                        resolve(res)
                    }) 
                })

                axios.all([postData, self.getData()])
                    .then(axios.spread(function(post, data){
                        
                    }))
            }
        },
        created(){
            this.getData()
        }
	}
</script>

<style scoped>
    aside{
        position: relative;
    }
</style>