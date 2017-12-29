<template>
    <div class="col-sm-4 col-md-3 col-xs-12">
        <div class="item-">
            <div class="item--product">
                <a>
                    <div class="item--product-image">
                        <img :src="gambar" class="img img-circle img-responsive">    
                    </div>
                    <h2 class="item--product-title">{{ harga }}</h2>
                    <h4 class="item--product-subtitle">{{ produk }}</h4>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
	export default{
		name: 'Produk-List',
		props: ['gambar', 'harga', 'produk']
	}
</script>