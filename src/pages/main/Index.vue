<template>
	<div class="mainpage">
		<the-filter :menuStatus="menuStatus" :toggle="toggleMenuStatus" />
		<the-hero />
		<div class="brands">
			<div class="brands__block">
				<div class="brands__title">Бренды</div>
				<a href="">
					<div class="brands__btn">
						Посмотреть все
						<img src="@/assets/img/icons/arrow.svg" alt="" /></div
				></a>
			</div>
			<flickity
				class="flickity"
				ref="flickity"
				:options="flickityOptions"
			>
				<div
					v-for="(item, index) in slider2"
					:key="index"
					class="carousel-cell"
				>
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
			</flickity>
			<dropdown-modal v-if="menuStatus"></dropdown-modal>
		</div>
	</div>
</template>
<script>
import TheFilter from "./components/TheFilter.vue";
import TheHero from "./components/TheHero.vue";
import DropdownModal from "./components/DropdownModal.vue";
import Flickity from "vue-flickity";

export default {
	name: "MainIndex",

	components: { TheFilter, DropdownModal, Flickity, TheHero },
	data() {
		return {
			menuStatus: false,
			slider2: [
				{ text: "AD BATTERY", link: "", img: "brand-logo.png" },
				{ text: "MOBIL", link: "", img: "brand-logo1.png" },
				{ text: "MANN-FILTER", link: "", img: "brand-logo2.png" },
				{ text: "555", link: "", img: "brand-card3.png" },
				{ text: "DENSO", link: "", img: "brand-card4.png" },
				{ text: "FRAM", link: "", img: "brand-card5.png" },
				{ text: "AD BATTERY", link: "", img: "brand-logo.png" },
				{ text: "MOBIL", link: "", img: "brand-logo1.png" },
				{ text: "MANN-FILTER", link: "", img: "brand-logo2.png" },
				{ text: "555", link: "", img: "brand-card3.png" },
				{ text: "DENSO", link: "", img: "brand-card4.png" },
				{ text: "FRAM", link: "", img: "brand-card5.png" },
			],
			flickityOptions: {
				prevNextButtons: true,
				wrapAround: true,

				pageDots: false,
				autoPlay: 3000,
				contain: true,
			},
		};
	},
	mounted() {},
	methods: {
		toggleMenuStatus() {
			console.log("b", this.menuStatus);
			this.menuStatus = !this.menuStatus;
		},
		next() {
			this.$refs.flickity.next();
		},

		previous() {
			this.$refs.flickity.previous();
		},
	},
};
</script>
