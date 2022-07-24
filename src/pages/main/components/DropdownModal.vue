<template>
	<div class="dropdown">
		<div class="dropdown-container container">
			<div class="dropdown__block">
				<div class="dropdown__title">
					Масла для легкового транспорта
				</div>

				<div class="dropdown__text">Моторные</div>
				<div class="dropdown__text">Трансмиссионные и ГУР</div>
			</div>
			<div class="dropdown__block">
				<div class="dropdown__title">
					Масла для легкового транспорта
				</div>

				<div class="dropdown__text">Моторные</div>
				<div class="dropdown__text">Трансмиссионные и ГУР</div>
			</div>
			<div class="dropdown__block">
				<div class="dropdown__title">
					Масла для легкового транспорта
				</div>

				<div class="dropdown__text">Моторные</div>
				<div class="dropdown__text">Трансмиссионные и ГУР</div>
			</div>
			<div class="dropdown__block">
				<div class="dropdown__title">
					Масла для легкового транспорта
				</div>

				<div class="dropdown__text">Моторные</div>
				<div class="dropdown__text">Трансмиссионные и ГУР</div>
			</div>
			<div class="dropdown__block">
				<div class="dropdown__title">
					Масла для легкового транспорта
				</div>

				<div class="dropdown__text">Моторные</div>
				<div class="dropdown__text">Трансмиссионные и ГУР</div>
			</div>
			<div class="dropdown__block">
				<div class="dropdown__title">
					Масла для легкового транспорта
				</div>

				<div class="dropdown__text">Моторные</div>
				<div class="dropdown__text">Трансмиссионные и ГУР</div>
			</div>
			<div class="dropdown__block">
				<div class="dropdown__title">
					Масла для легкового транспорта
				</div>

				<div class="dropdown__text">Моторные</div>
				<div class="dropdown__text">Трансмиссионные и ГУР</div>
			</div>
			<div class="dropdown__block">
				<div class="dropdown__title">
					Масла для легкового транспорта
				</div>

				<div class="dropdown__text">Моторные</div>
				<div class="dropdown__text">Трансмиссионные и ГУР</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "DropdownModal",
	// props: {
	// 	show: Boolean,
	// },
	data() {
		return {};
	},
	methods: {},
};
</script>

<style lang="scss" scoped>
.dropdown {
	z-index: 100;
	background: #ffffff;
	width: 100%;
	height: auto;
	margin: 0 auto;
	position: absolute;

	&-container {
		position: absolute;

		margin: auto;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;

		z-index: 100;
		background: #ffffff;

		display: grid;
		grid-template: auto/repeat(4, 1fr);
		align-items: flex-start;
		padding: 25px 42px;
		gap: 20px;

		width: 100%;
		height: auto;
	}

	&__block {
		display: flex;
		flex-direction: column;
	}
	&__title {
		font-family: "Inter";
		font-style: normal;
		font-weight: 700;
		font-size: 16px;
		line-height: 140%;

		color: #252525;
	}
	&__text {
		font-family: "Inter";
		font-style: normal;
		font-weight: 500;
		font-size: 14px;
		line-height: 140%;
		color: #252525;
	}
}
</style>
