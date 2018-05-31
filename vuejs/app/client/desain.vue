<template>
	<div>
		<div class="panel">
            <div class="panel-heading">
                <h3 class="title-heading">Desain</h3>
            </div>
            <div class="panel-body">

                <div class="col-md-4" v-for="item in list">
                	<div class="item-">
			            <div class="item--product">
			                <div class="item--product-image">
		                        <img :src="item.gambar" class="img img-circle img-responsive" width="200px">    
		                    </div>
		                    <h6>created by {{item.desainable.nama}}</h6>
			                <div class="item--product-btn">
			                    <div class="item--product-btn-pesan">
			                        <a class="btn btn-default" v-on:click="handleLike(item.id)">
			                            <i class="fa fa-thumbs-o-up"></i>
			                            <span class="label label-warning pull-right">{{item.like_count}}</span>
			                        </a>    
			                    </div>
			                    <div class="item--product-btn-whatsapp">
			                        <a class="btn btn-default" v-on:click="handleDislike(item.id)">
			                            <i class="fa fa-thumbs-o-down"></i>
			                            <span class="label label-warning pull-right">{{item.dislike_count}}</span>
			                        </a>
			                    </div>
			                </div>
			            </div>
			        </div>
                </div>

            </div>
        </div>
	</div>
</template>

<script>
	export default{
		name: 'Desain',
		data () {
			return {
				list: []
			}
		},
		computed: {
			login_client (){
				return this.$session.get('is_client')
			}
		},
		methods: {
			handleLike (id) {
				if (typeof this.login_client == 'undefined') {
					this.$router.push('/login/client')
				}else{
					this.$http.put(`/client/desain/like/${id}`, '', {
						headers: {
							Authorization: `Bearer ${this.login_client.api_token}`
						}
					})
						.then(res => {
							this.getData()
						})
				}
			},
			handleDislike (id) {
				if (typeof this.login_client == 'undefined') {
					this.$router.push('/login/client')
				}else{
					this.$http.put(`/client/desain/dislike/${id}`, '', {
						headers: {
							Authorization: `Bearer ${this.login_client.api_token}`
						}
					})
						.then(res => {
							this.getData()
						})
				}
			},
			getData () {
				this.$http.get(`/client/desain?client=true`)
					.then(res => {
						// console.log(res.data)
						Vue.set(this.$data, 'list', res.data)
					})
			}
		},
		created () {
			this.getData()
		}
	}
</script>

<style lang="scss" scoped>
	$header-color: #000000;
	$border-color: lighten($header-color, 80%);
	$text-color: #636b6f;
	$body-bg: #ffffff;
	
	.panel{
		margin-top: 15px;
		text-align: center;
		// border: 1px solid $border-color;
		.panel-heading, .panel-body{
			border: 1px solid $border-color;
		}
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