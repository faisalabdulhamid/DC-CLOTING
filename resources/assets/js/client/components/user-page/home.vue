<template>
	<section id="main-page" class="container">
        <aside class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div class="row content-item" id="home">
                <div class="panel">
                    <div class="panel-heading">
                        <h3 class="title-heading">Home</h3>
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
	export default{
		name: 'Home-Page',
        components: {
            'loading': function(resolve){
                require(['./loading'], resolve)
            }
        },
        data(){
            return {
                showLoading: false
            }
        }
	}
</script>

<style scoped>
    aside{
        position: relative;
    }
</style>