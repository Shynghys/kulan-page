<template>
	<div class="hero">
		<div class="slider">
			<div>
				<flickity
					class="flickity slider"
					ref="flickity"
					:options="flickityOptions"
				>
					<div
						v-for="(item, index) in slider"
						:key="index"
						class="carousel-cell slider__item"
					>
						<p class="slider__text">
							Открытие 40-го Mobil 1 Center в г. Алматы
						</p>
						<img
							:src="
								require(`@/assets/img/pages/mainpage/${item}`)
							"
							alt=""
							class="slider__img"
						/>
					</div>
				</flickity>
			</div>
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
					<img src="@/assets/img/pages/mainpage/maslo.svg" alt="" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Flickity from "vue-flickity";

export default {
	name: "TheHero",
	components: { Flickity },
	data() {
		return {
			menuStatus: false,
			slider: [
				"Rectangle 28.png",
				"Rectangle 28.png",
				"Rectangle 28.png",
			],
			flickityOptions: {
				prevNextButtons: true,
				wrapAround: true,

				pageDots: false,
				// autoPlay: 5000,
			},
		};
	},
	mounted() {},
	methods: {
		next() {
			this.$refs.flickity.next();
		},

		previous() {
			this.$refs.flickity.previous();
		},
	},
};
</script>

<style lang="scss" scoped></style>
