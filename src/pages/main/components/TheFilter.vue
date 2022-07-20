<template>
	<div class="filter">
		<img src="@/assets/img/pages/mainpage/logo.jpg" alt="" class="icon" />

		<div class="button">
			<img
				src="@/assets/img/pages/mainpage/fi_menu.svg"
				alt=""
				class="icon-mini"
			/>
			<p class="button__text">Категории</p>
		</div>
		<div class="search">
			<div class="block">
				<p>Название</p>
				<img
					src="@/assets/img/layout/Vector.svg"
					alt=""
					class="block__icon-mini"
				/>
			</div>
			<div class="line"></div>
			<input type="text" placeholder="Поиск по названию товара" />
			<img
				src="@/assets/img/layout/fi_map-pin.svg"
				alt=""
				class="block__icon"
			/>
		</div>
		<div class="services">
			<div class="block">
				<img
					src="@/assets/img//pages/mainpage/fi_box.svg"
					alt=""
					class="icon"
				/>
				<p>Заказы</p>
			</div>
			<div class="block">
				<img
					src="@/assets/img//pages/mainpage/fi_box.svg"
					alt=""
					class="icon"
				/>
				<p>Заказы</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "TheFilter",
	};
</script>

<style lang="scss" scoped>
</style>