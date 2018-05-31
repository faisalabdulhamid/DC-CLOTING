<template>
	<div>
		<div class="panel">
			<div class="panel-heading">
				<slider animation="fade">
                    <slider-item v-for="(i, index) in list" :key="index">
                        <div :style="i">
                            <img :src="i.gambar">
                            <p style="line-height: 280px; font-size: 2rem; text-align: center;">{{ i.isi_promosi }}</p>
                        </div>
                    </slider-item>
                </slider>
			</div>
			<div class="panel-body"></div>
		</div>
		<div class="col-md-3">
            <div class="item-icon">
                <i class="fa fa-dollar"></i>
                <h5>Dapatkan diskon dan promo-promo lainnya</h5>
            </div>
        </div>
        <div class="col-md-3">
            <div class="item-icon">
                <i class="fa fa-gg"></i>
                <h5>Lihat macam-macam produk-produk kami</h5>
            </div>
        </div>
        <div class="col-md-3">
            <div class="item-icon">
                <router-link :to="'/kuesioner'">
                    <i class="fa fa-question"></i>
                </router-link>
                <h5>Isi kuesioner kami agar produk-produk kami semakin baik </h5>
            </div>
        </div>
        <div class="col-md-3">
            <div class="item-icon">
                <router-link :to="'desain-upload'">
                    <i class="fa fa-cloud-upload"></i>
                </router-link>
                <h5>Unggah desainmu agar menjadi referensi bagi kami </h5>
            </div>
        </div>
	</div>
</template>

<script>
	import { Slider, SliderItem } from 'vue-easy-slider'

	export default{
		name: 'Home',
		components:{
			Slider,
			SliderItem
		},
		data () {
			return {
				list: [
                    { backgroundColor: '#3f51b5', width: '100%', height: '100%' },
                    { backgroundColor: '#eee', width: '100%', height: '100%' },
                    { backgroundColor: '#f44336', width: '100%', height: '100%' },
                  ]
			}
		},
        methods: {
            getData (){
                this.$http.get(`/client/promosi?all=true`)
                    .then(res => {
                        Vue.set(this.$data, 'list', res.data)
                    })
            }
        },
        created (){
            this.getData()
        }
	}
</script>

<style lang="scss" scoped>
	$header-color: #000000;
	$border-color: lighten($header-color, 80%);

	.item-icon{
		text-align: center;
		border: 1px solid $border-color;
		padding: 10px;
		i{
			font-size: 75px;
		}
		h5{
			margin-top: 20px;
			padding-top: 20px;
			border-top: 2px solid $border-color;
		}
	}
</style>