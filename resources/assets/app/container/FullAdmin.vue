<template>
	<div class="app">
		<AppHeader/>
			<div class="page-container">
				<AppSidebar/>
				<main class="page-content">
					<router-view></router-view>
				</main>
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
			'AppSidebar': require('./../components/Sidebar'),
		},
	}
</script>