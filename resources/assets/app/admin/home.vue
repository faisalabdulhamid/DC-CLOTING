<template>
	
</template>

<script>
	export default{
		name: 'Home',
		created () {
			if (!this.$store.getters.isLoggedAdmin) {
				location.reload();
			}
		}
	}
</script>