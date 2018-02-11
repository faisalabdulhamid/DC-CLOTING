<template>
	<div id="produk">

		<div class="col-md-4" v-for="item in list">
			<div class="item-">
	            <div class="item--product">
	                <a>
	                    <div class="item--product-image">
	                        <img :src="item.gambar" class="img img-circle img-responsive" width="200px">    
	                    </div>
	                    <h2 class="item--product-title">{{ item.harga }}</h2>
	                    <h4 class="item--product-subtitle">{{ item.nama }}</h4>
	                </a>
	            </div>
	        </div>
		</div>

	</div>
</template>

<script>
	export default {
		name: 'Produk',
        props: ['id'],
		data () {
			return {
				gambar: 'https://www.dntstore.com/components/com_eshop/osx/image/cache/data/upload/TN-N021782--Error-404-costume-not-found-halloween-t-shirt-tees-t-shirt-DNTStore-200x200.jpg',
				harga: 20000,
				produk: 'Name Produk',
				list: []
			}
		},
		methods: {
			getData (){
                this.$http.get(`/client/produk/${this.id}?all=true`)
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
	$text-color: #636b6f;
	$body-bg: #ffffff;
	#produk {
		margin-top: 15px;
	}
	.item-{
        position: relative;
		border: 1px solid $border-color;
		text-align: center;
		margin-bottom: 20px;
		padding: 15px;
		a{
			text-decoration: none;
			color: $text-color;
		}
        &-product{
            z-index: 15;
            &-image{
                padding: 5px 0px;
                img{
                    display: initial;
                }
            }
            &-title{
                font-size: 20px;
                margin-top: 30px;
            }
            &-subtitle{
                font-size: 14px;
                &:hover{
                	font-weight: 700;
                }
            }
            &-brand{
                z-index: 5;
                background-color: $body-bg;
                position: absolute;
                right: 0px;
                top: 10px;
                -webkit-transform: translate(-50%, 0);
                border-radius: 50%;
                img{
                    width: 50px;
                    border-radius: 50%;
                    padding: 6px;
                }
            }

            &-btn{
                display: inline-flex;
                // background-color: #000;
                &-pesan, &-whatsapp{
                    width: 50%;
                    margin: 5px;
                    .btn{
                        font-size: 16px;
                    }
                }
                &-pesan{
                    a:hover, a:active{
                        background-color: #3f65ff;
                        color: #fff;
                    }
                }
                &-whatsapp{
                    a:hover, a:active{
                        background-color: red;
                        color: #fff;
                    }
                }
            }
        }
    }
</style>