<template>
	<div class="mobilemenu" :class="mobileopen ? 'mobilemenu_opened' : ''">
		<div class="mobilemenu__content"></div>
	</div>
</template>
<script>
export default {
	props: {
		mobileopen: { type: Boolean },
	},
	methods: {},
};
</script>

<style></style>
