<template>
	<div>
		<header-vue :isLogin="isLoggedIn" :Mlogout="logout"/>
		<router-view></router-view>
		<loading
			:show="show"
			:label="label"
			:overlay="overlay"
			>
		</loading>
	</div>
</template>

<script>
	import {mapActions, mapGetters} from 'vuex'
	import loading from 'vue-full-loading'

	export default{
		name: 'Application',
		components: {
			'header-vue': require('./header'),
			loading
		},
		computed:{
			...mapGetters(['isLoggedIn', 
				'title', 'subTitle', 'teamUrl', 'repoUrl', 'show', 'dependencies', 'label', 'timeOut', 'overlay'])
		},
		methods:{
			...mapActions(['logout']),
		},
	}
</script>