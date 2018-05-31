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
		<div class="panel">
            <div class="panel-heading">
                <h3 class="title-heading">Lokasi</h3>
            </div>
            <div class="panel-body">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1980.4726678969735!2d107.6026452911021!3d-6.897141901524773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e65caa0cf033%3A0x1cfdb17fdbdad206!2sDC+Clothing!5e0!3m2!1sid!2sid!4v1517127503087" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
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