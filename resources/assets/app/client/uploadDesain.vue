<template>
	<section id="main-page" class="container">
        <aside class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div class="row content-item">
		      <!--UPLOAD-->
		      <form enctype="multipart/form-data" v-on:submit.prevent="save">
		        <h1>Upload images</h1>
		        <div class="form-group">
		        	<label for="" class="control-label col-md-3">Gambar</label>
		        	<div class="col-md-9">
		        		<input type="file"
		        			multiple
							name="gambar" 
							id="gambar" 
							accept="image/*">
		        	</div>
		        </div>
		        <button class="btn btn-default pull-right">Simpan</button>
		    	</form>
		    	
		    	
		    	<img v-if="Object.keys(response).length" :src="response.url" width="100px">
            </div>
        </aside>
    </section>
</template>

<script>

	export default {
		name: 'Upload-Desain',
		data (){
			return {
				token: this.$session.get('is_client'),
				response: {}
			}
		},
		methods: {
			save() {
				// upload data to the server
				const formData = new FormData()
				
				let fileList = $('input[type="file"]')[0].files
				console.log(fileList)
				if (!fileList.length){
					formData.append('photos', '')
				}else{
					Array
						.from(Array(fileList.length).keys())
						.map(x => {
							formData.append('photos', fileList[x], fileList[x].name);
						})
					
				}

				// formData.append('photos', fileList[x], fileList[x].name)

				this.$http.post(`/client/desain/upload`, formData, {
					headers: {
						Authorization: `Bearer ${this.token.api_token}`
					}
				})
					.then(res => {
						Vue.set(this.$data, 'response', res.data)
						// console.log(res.data)
						// this.$router.push('/')
					})
			}
		},
	}
</script>

<style lang="scss" scoped>
  .dropbox {
    outline: 2px dashed grey; /* the dash box */
    outline-offset: -10px;
    background: lightcyan;
    color: dimgray;
    padding: 10px 10px;
    min-height: 200px; /* minimum height */
    position: relative;
    cursor: pointer;
  }
  
  .input-file {
    opacity: 0; /* invisible but it's there! */
    width: 100%;
    height: 200px;
    position: absolute;
    cursor: pointer;
  }
  
  .dropbox:hover {
    background: lightblue; /* when mouse over to the drop zone, change color */
  }
  
  .dropbox p {
    font-size: 1.2em;
    text-align: center;
    padding: 50px 0;
  }
</style>