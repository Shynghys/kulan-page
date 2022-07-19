<template>
	<div id="app">
		<the-header />

		<div class="app__container">
			<!-- <transition name="fade" mode="out-in"> -->
			<router-view></router-view>
			<!-- </transition> -->
		</div>

		<the-footer />
	</div>
</template>
<script>
	import TheHeader from "./components/layout/TheHeader";
	import TheFooter from "./components/layout/TheFooter";

	export default {
		name: "App",
		components: {
			TheHeader,
			TheFooter,
		},
	};
</script>

<style lang="scss">
	@import "./assets/scss/main";
</style>