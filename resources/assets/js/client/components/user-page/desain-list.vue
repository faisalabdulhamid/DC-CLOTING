<template>
    <div class="col-sm-4 col-md-3 col-xs-12">
        <div class="item-">
            <div class="item--product">
                <a>
                    <div class="item--product-image">
                        <img :src="gambar" class="img img-circle img-responsive">    
                    </div>
                    <h6>created by {{ dibuat }}</h6>
                </a>
                <div class="item--product-btn">
                    <div class="item--product-btn-pesan">
                        <a class="btn btn-default btn-block" v-on:click="handleLike">
                            <i class="fa fa-thumbs-o-up"></i>
                            <span class="label label-warning pull-right">{{like}}</span>
                        </a>    
                    </div>
                    <div class="item--product-btn-whatsapp">
                        <a class="btn btn-default btn-block" v-on:click="handleDislike">
                            <i class="fa fa-thumbs-o-down"></i>
                            <span class="label label-danger pull-right">{{dislike}}</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
	export default{
		name: 'Produk-List',
		props: {
            gambar:{
                default: 'img'
            },
            dibuat:{
                default: 'dibuat'
            },
            like: {
                default: 0
            }, 
            dislike: {
                default: 0
            },
            id: Number
        },
        methods:{
            handleLike(){
                this.$emit('like', this.id)
            },
            handleDislike(){
                this.$emit('dislike', this.id)
            },
        },
	}
</script>