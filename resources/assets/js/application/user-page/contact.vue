<template>
	<section id="main-page" class="container">
        <aside class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div class="row content-item" id="about">
                <div class="panel">
                    <div class="panel-heading">
                        <h3 class="title-heading">Contact</h3>
                    </div>
                    <div class="panel-body">
                        <form action="" class="form-horizontal">
                            <div class="form-group">
                                <label for="name" class="control-label col-md-3">Nama </label>
                                <div class="col-md-9"><input type="text" class="form-control"></div>
                            </div>
                            <div class="form-group">
                                <label for="name" class="control-label col-md-3">No HP </label>
                                <div class="col-md-9"><input type="text" class="form-control"></div>
                            </div>
                            <div class="form-group">
                                <label for="name" class="control-label col-md-3">Pesan </label>
                                <div class="col-md-9"><textarea class="form-control"></textarea></div>
                            </div>
                            <button class="btn btn-default pull-right">Submit</button>
                        </form>
                    </div>
                    <div class="panel-body">
                        <div class="maps" id="maps">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1980.4726678969735!2d107.6026452911021!3d-6.897141901524773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e65caa0cf033%3A0x1cfdb17fdbdad206!2sDC+Clothing!5e0!3m2!1sid!2sid!4v1517127503087" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
            <loading :show="showLoading"/>
        </aside>  
    </section>
</template>

<script>
	export default{
		name: 'Contact-Page',
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