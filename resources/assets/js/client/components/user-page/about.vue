<template>
	<section id="main-page" class="container">
        <aside class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div class="row content-item" id="about">
                <div class="panel">
                    <div class="panel-heading">
                        <h3 class="title-heading">About</h3>
                    </div>
                    <div class="panel-body">
                        <p>Southerntrack merupakan perusahaan menengah ke bawah ini dipimpin oleh pengusaha yang berasal dari tahan Minang, Sumatera Barat. Sebelum terbentuk menjadi instansi CV, ia hanya pedagang pakaian biasa yang menjual dagangannya di kota Jakarta. Sekarang, bapak Feri menetap di kota Bandung.</p>
                    </div>
                </div>
            </div>
            <loading :show="showLoading"/>
        </aside>  
    </section>
</template>

<script>
	export default{
		name: 'About-Page',
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