<template>
	<div class="mainpage">
		<the-filter />
		<div class="hero">
			<div class="slider">
				<img
					src="@/assets/img/pages/mainpage/Rectangle 28.png"
					alt=""
				/>
			</div>
			<div class="podbor">
				<div class="podbor__card">
					<div>
						<div class="podbor__title">Подбор по модели</div>
						<div class="podbor__desc">
							Подбор запчастей по модели автомобиля
						</div>
						<button class="podbor__btn">Попробовать</button>
					</div>
					<div>
						<img
							src="@/assets/img/pages/mainpage/blue-car-sellpage-audi@2x 1.svg"
							alt=""
						/>
					</div>
				</div>
				<div class="podbor__card">
					<div>
						<div class="podbor__title">Подбор масла</div>
						<div class="podbor__desc">
							Подбор масел по VIN-коду и модели автомобиля
						</div>
						<button class="podbor__btn">Попробовать</button>
					</div>
					<div>
						<img
							src="@/assets/img/pages/mainpage/maslo.svg"
							alt=""
						/>
					</div>
				</div>
			</div>
		</div>
		<div class="brands">
			<div class="brands__title">Бренды</div>
			<div class="brands__slider">
				<div class="brands__item">
					<img
						src="@/assets/img/pages/mainpage/brand-logo.png"
						alt=""
					/>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import TheFilter from "./components/TheFilter.vue";
export default {
	name: "MainIndex",
	components: {
		TheFilter,
	},
	data() {
		return {
			slider: [],
			slider2: [],
		};
	},
};
</script>
<style scoped></style>
