<template>
	<section id="main-page" class="container">
        <aside class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div class="row content-item" id="home">
                <div class="panel">
                    <div class="panel-heading">
                        <slider animation="fade">
                            <slider-item v-for="(i, index) in list" :key="index">
                                <div :style="i">
                                    <p style="line-height: 280px; font-size: 2rem; text-align: center;">{{ i.isi_promosi }}</p>
                                </div>
                            </slider-item>
                        </slider>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="item-icon">
                        <router-link :to="{name:'promosi'}">
                            <i class="fa fa-dollar"></i>
                        </router-link>
                        <h5>Dapatkan diskon dan promo-promo lainnya</h5>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="item-icon">
                        <router-link :to="{name:'produk'}">
                            <i class="fa fa-gg"></i>
                        </router-link>
                        <h5>Lihat macam-macam produk-produk kami</h5>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="item-icon">
                        <router-link :to="{name:'kuesioner'}">
                            <i class="fa fa-question"></i>
                        </router-link>
                        <h5>Isi kuesioner kami agar produk-produk kami semakin baik </h5>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="item-icon">
                        <router-link :to="{name:'desain-upload'}">
                            <i class="fa fa-cloud-upload"></i>
                        </router-link>
                        <h5>Unggah desainmu agar menjadi referensi bagi kami </h5>
                    </div>
                </div>
            </div>
            <loading :show="showLoading"/>
        </aside>  
    </section>
</template>

<script>
    import { Slider, SliderItem } from 'vue-easy-slider'

	export default{
		name: 'Home-Page',
        components: {
            'loading': function(resolve){
                require(['./loading'], resolve)
            },
            Slider,
            SliderItem
        },
        data(){
            return {
                showLoading: false,
                list: [
                    { backgroundColor: '#3f51b5', width: '100%', height: '100%' },
                    { backgroundColor: '#eee', width: '100%', height: '100%' },
                    { backgroundColor: '#f44336', width: '100%', height: '100%' },
                  ],
            }
        },
        methods: {
            getData () {
                return new Promise((resolve) => {
                    this.$http.get('/promosi?all=true')
                        .then(res => {
                            resolve(res.data)
                        })
                })
            }
        },
        created () {
            this.getData()
                .then(res => {
                    Vue.set(this.$data, 'list', res)
                })
        }
	}
</script>

<style scoped>
    aside{
        position: relative;
    }
</style>