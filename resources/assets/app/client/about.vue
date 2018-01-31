<template>
	<div>
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
</template>

<script>
	export default{
		name: 'About'
	}
</script>

<style lang="scss" scoped>
	$header-color: #000000;
	$border-color: lighten($header-color, 80%);
	
	.panel{
		margin-top: 15px;
		text-align: center;
		// border: 1px solid $border-color;
		.panel-heading, .panel-body{
			border: 1px solid $border-color;
		}
	}
</style>