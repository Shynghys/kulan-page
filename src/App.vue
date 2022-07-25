<template>
	<div id="app">
		<the-header />

		<div class="">
			<router-view></router-view>
		</div>
	</div>
</template>
<script>
import TheHeader from "./components/layout/TheHeader";

export default {
	name: "App",
	components: {
		TheHeader,
	},
};
</script>

<style lang="scss">
@import "./assets/scss/main";
@import "./assets/fonts/stylesheet";
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap");
</style>
