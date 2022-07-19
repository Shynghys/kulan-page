<template>
	<!-- :class="menuStatus ? 'header--menuOpened' : ''" -->
	<header class="header" id="header">
		<div class="header__left">
			<div class="block">
				<img
					src="@/assets/img/layout/fi_map-pin.svg"
					alt=""
					class="block__icon"
				/>
				<p>Алматы</p>
				<img
					src="@/assets/img/layout/Vector.svg"
					alt=""
					class="block__icon-mini"
				/>
			</div>
		</div>

		<div class="block">
			<router-link to="/" v-for="(item, index) in header" :key="index">
				<div class="block__item">
					<p class="block__text" v-html="item"></p>
				</div>
			</router-link>
		</div>

		<div class="header__right">
			<div class="block">
				<img
					src="@/assets/img/layout/Frame 119 1 1.jpg"
					alt=""
					class="block__icon"
				/>
				<p>38 420</p>
			</div>
			<div class="block">
				<img
					src="@/assets/img/layout/Vector.svg"
					alt=""
					class="block__icon-mini"
				/>
				<p>Кошелек</p>
				<img
					src="@/assets/img/layout/Vector1.svg"
					alt=""
					class="block__icon"
				/>
			</div>
		</div>
	</header>
</template>

<script>
	export default {
		name: "TheHeader",
		data() {
			return {
				header: ["О нас", "Бренды", "Подбор", "Новости"],
			};
		},
	};
</script>

<style lang="scss" scoped>
</style>