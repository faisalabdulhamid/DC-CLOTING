<template>
	<section id="main-page" class="container">
        <aside class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div class="row content-item" id="about">
                <div class="panel">
                    <div class="panel-heading">
                        <h3 class="title-heading">Promosi</h3>
                    </div>
                    <div class="panel-body">
                        <div class="promosi" v-for="item in promosi">
                            <h3>{{ item.subjek }}</h3>
                            <h5>{{ item.isi_promosi }}</h5>
                            <span>{{ item.mulai_promosi }} s/d {{ item.akhir_promosi }}</span>
                            <hr/>
                        </div>
                    </div>
                </div>
            </div>
        </aside>  
    </section>
</template>

<script>
	export default{
		name: 'Promosi-Page',
        components: {
            'loading': function(resolve){
                require(['./loading'], resolve)
            }
        },
        data(){
            return {
                promosi: []
            }
        },
        methods:{
            getData(){
                let self = this
                self.$http.get('/promosi')
                    .then(res => {
                        Vue.set(self.$data, 'promosi', res.data.data)
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