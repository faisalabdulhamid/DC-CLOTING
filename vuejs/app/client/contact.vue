<template>
	<div>
		<div class="panel">
            <div class="panel-heading">
                <h3 class="title-heading">Contact</h3>
            </div>
            <div class="panel-body">
                <form action="" class="form-horizontal">
                	<div class="form-group">
                		<label for="nama" class="control-label col-md-3">Nama *</label>
                		<div class="col-md-9"><input type="text" class="form-control" id="nama"></div>
                	</div>
                	<div class="form-group">
                		<label for="no_telepon" class="control-label col-md-3">No Hp *</label>
                		<div class="col-md-9"><input type="text" class="form-control" id="no_telepon"></div>
                	</div>
                	<div class="form-group">
                		<label for="pesan" class="control-label col-md-3">Pesan *</label>
                		<div class="col-md-9"><textarea class="form-control" id="pesan" /></div>
                	</div>
                </form>
            </div>
        </div>
	</div>
</template>

<script>
	export default{
		name: 'Contact'
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