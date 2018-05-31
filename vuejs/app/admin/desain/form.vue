<template>
	<div>
	    <div class="page-header">
			<div class="page-title">
				<h3>desain</h3>
			</div>
	    </div>
		<Breadcrumb :list="list"/>
		<div class="panel panel-default">
	      	<div class="panel-heading">
	        	<h6 class="panel-title"><i class="icon-users"></i> Tambah desain</h6>
	        </div>
	        <div class="panel-body">
			<form enctype="multipart/form-data" novalidate v-if="isInitial || isSaving">
		        <h1>Upload images</h1>
		        <div class="dropbox">
		          <input type="file" multiple :name="uploadFieldName" :disabled="isSaving" @change="filesChange($event.target.name, $event.target.files); fileCount = $event.target.files.length"
		            accept="image/*" class="input-file">
		            <p v-if="isInitial">
		              Drag your file(s) here to begin<br> or click to browse
		            </p>
		            <p v-if="isSaving">
		              Uploading {{ fileCount }} files...
		            </p>
		        </div>
		      </form>
		      <!--SUCCESS-->
		      <div v-if="isSuccess">
		        <h2>Uploaded {{ uploadedFiles.length }} file(s) successfully.</h2>
		        <p>
		          <a href="javascript:void(0)" @click="reset()">Upload again</a>
		        </p>
		        {{uploadedFiles[0].url.url}}
		        <ul class="list-unstyled">
		          <li v-for="item in uploadedFiles">
		            <img :src="item.url.url" class="img-responsive img-thumbnail" :alt="item.originalName">
		          </li>
		        </ul>
		      </div>
		      <!--FAILED-->
		      <div v-if="isFailed">
		        <h2>Uploaded failed.</h2>
		        <p>
		          <a href="javascript:void(0)" @click="reset()">Try again</a>
		        </p>
		        <pre>{{ uploadError }}</pre>
		      </div>
	        </div>
	    </div>
	</div>
</template>

<script>
	import { upload } from './service/file-upload.service.js';   // real service
	import { wait } from './service/utils.js';

	const STATUS_INITIAL = 0, STATUS_SAVING = 1, STATUS_SUCCESS = 2, STATUS_FAILED = 3;
	export default{
		name: 'Form',
		components: {
			'Breadcrumb': require('./../../components/Breadcrumb'),
		},
		computed: {
			name () {
				return this.$route.name
			},

			list () {
				return this.$route.matched
			},
			login_admin () {
				return this.$session.get('is_admin')
			},
			isInitial() {
				return this.currentStatus === STATUS_INITIAL;
			},
			isSaving() {
				return this.currentStatus === STATUS_SAVING;
			},
			isSuccess() {
				return this.currentStatus === STATUS_SUCCESS;
			},
			isFailed() {
				return this.currentStatus === STATUS_FAILED;
			}
		},
		props: ['id'],
		data () {
			return {
				form: {},
				uploadedFiles: [],
		        uploadError: null,
		        currentStatus: null,
		        uploadFieldName: 'photos'
			}
		},
		methods: {
			reset() {
				// reset form to initial state
				this.currentStatus = STATUS_INITIAL;
				this.uploadedFiles = [];
				this.uploadError = null;
			},
			save(formData) {
				// upload data to the server
				this.currentStatus = STATUS_SAVING;
				const url = `/photos/upload`;

				upload(formData)
					.then(wait(1500)) // DEV ONLY: wait for 1.5s 
					.then(x => {
						console.log({sucess: x})
						this.uploadedFiles = [].concat(x);
						this.currentStatus = STATUS_SUCCESS;
						console.log({uploadedFiles: this.uploadedFiles})
					})
					.catch(err => {
						console.log({error:err})
						this.uploadError = err.response;
						this.currentStatus = STATUS_FAILED;
					});
			},
			filesChange(fieldName, fileList) {
				// handle file changes
				const formData = new FormData();

				if (!fileList.length) return;

				// append the files to FormData
				Array
					.from(Array(fileList.length).keys())
					.map(x => {
						formData.append(fieldName, fileList[x], fileList[x].name);
					});

				// save it
				this.save(formData);
			}
		},
		mounted() {
			this.reset();
		},
	}
</script>

<style lang="scss" scoped>
	label.control-label{
		text-align: right;
	}
</style>

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