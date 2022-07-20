<template>
	<div class="mainpage">
		<the-filter :menuStatus="menuStatus" :toggle="toggleMenuStatus" />
		<div class="hero">
			<div class="slider">
				<p class="slider__text">
					Открытие 40-го Mobil 1 Center в г. Алматы
				</p>
				<img
					src="@/assets/img/pages/mainpage/Rectangle 28.png"
					alt=""
					class="slider__img"
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
			<div class="brands__block">
				<div class="brands__title">Бренды</div>
				<a href="">
					<div class="brands__btn">
						Посмотреть все
						<img src="@/assets/img/icons/arrow.svg" alt="" /></div
				></a>
			</div>

			<div class="brands__slider">
				<div v-for="(item, index) in slider2" :key="index">
					<a href="" class="brands__item">
						<img
							class="brands__img"
							:src="
								require(`@/assets/img/pages/mainpage/${item.img}`)
							"
							alt=""
						/>
						<p class="brands__text">{{ item.text }}</p></a
					>
				</div>
			</div>
			<dropdown-modal v-if="menuStatus"></dropdown-modal>
		</div>
	</div>
</template>
<script>
import TheFilter from "./components/TheFilter.vue";
import DropdownModal from "./components/DropdownModal.vue";
export default {
	name: "MainIndex",

	components: { TheFilter, DropdownModal },
	data() {
		return {
			menuStatus: false,
			slider: [
				"@/assets/img/pages/mainpage/Rectangle 28.png",
				"@/assets/img/pages/mainpage/Rectangle 28.png",
				"@/assets/img/pages/mainpage/Rectangle 28.png",
			],
			slider2: [
				{ text: "AD BATTERY", link: "", img: "brand-logo.png" },
				{ text: "MOBIL", link: "", img: "brand-logo1.png" },
				{ text: "MANN-FILTER", link: "", img: "brand-logo2.png" },
				{ text: "555", link: "", img: "brand-card3.png" },
				{ text: "DENSO", link: "", img: "brand-card4.png" },
				{ text: "FRAM", link: "", img: "brand-card5.png" },
			],
		};
	},
	methods: {
		toggleMenuStatus() {
			console.log("b", this.menuStatus);
			this.menuStatus = !this.menuStatus;
		},
	},
};
</script>
