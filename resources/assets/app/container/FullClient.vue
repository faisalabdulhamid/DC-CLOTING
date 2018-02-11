<template>
	<div class="app">
		<AppHeader/>
		<div class="app-body">
			<div class="page-container">
				<div class="container">
				    <router-view :key="$route.fullPath"></router-view>
				</div>
			</div>
		</div>
		<AppFooter/>
	</div>
</template>

<script>
	export default {
		name: "Full",
		components: {
			'AppHeader': require('./../components/Header'),
			'AppFooter': require('./../components/Footer'),
		}
	}
</script>

<style scoped>
	.container{
		min-height: 556px;
	}
</style>