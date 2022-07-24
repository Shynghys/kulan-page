<template>
	<!-- :class="menuStatus ? 'header--menuOpened' : ''" -->
	<div class="header">
		<header class="header-container container" id="header">
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

			<div class="header__middle block">
				<router-link
					to="/"
					v-for="(item, index) in header"
					:key="index"
				>
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
			<!-- :class="menuStatus ? 'is-active' : ''" -->
			<button class="hamburger hamburger--spin" type="button">
				<span class="hamburger-box">
					<span class="hamburger-inner"></span>
				</span>
			</button>
		</header>
		<!-- <div class="header__nav">
			<mobile-menu></mobile-menu>
		</div> -->
	</div>
</template>

<script>
export default {
	name: "TheHeader",
	data() {
		return {
			header: [
				"О нас",
				"Бренды",
				"Подбор",
				"Новости",
				"Акции",
				"Контакты",
				"Помощь",
				"Sale%",
			],
		};
	},
};
</script>

<style lang="scss" scoped></style>
