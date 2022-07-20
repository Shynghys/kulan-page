<template>
	<div id="app">
		<the-header />

		<div class="app__container container">
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
</style>
