<template>
	<section id="main-page" class="container">
        <aside class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div class="row content-item" id="about">
                <div class="panel">
                    <div class="panel-heading">
                        <h3 class="title-heading">About</h3>
                    </div>
                    <div class="panel-body">
                        <p>DC-Clothing merupakan perusahaan menengah ke bawah ini dipimpin oleh pengusaha yang berasal dari Bandung. 
                        Sebelum perusahaan terbentuk, ia hanya pedagang pakaian biasa yang menjual dagangannya di pasar-pasar. 
                        Sekarang, Ibu Ida mempunyai toko di bandung dan makasar.</p>
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