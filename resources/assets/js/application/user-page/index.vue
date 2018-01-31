<template>
	<section id="main-page" class="container">
        <aside class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div class="row content-item">
                <produk-list v-for="item in produk" :key="item.id" :gambar="item.gambar" :harga="item.harga" :produk="item.nama"></produk-list>
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
            'produk-list': function(resolve){
                showLoading: true
                setTimeout(function() {
                    showLoading: false
                    require(['./produk-list'], resolve)
                }, 500);
            }
        },
        data(){
            return {
                showLoading: false,
                produk: []
            }
        },
        methods: {
            getData(){
                let self = this
                self.$http.get('produk')
                    .then(res => {
                        Vue.set(self.$data, 'produk', res.data.data)
                    })
                
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