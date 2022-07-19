<template>
	<!-- :class="getFooterParams.fixed ? 'footer--fixed' : ''" -->
	<footer class="footer" id="footer">
		<div class="container container--overvisible">
			<div class="row">
				<div class="col-10 col-xs-12 col-xs-start-1">
					<div class="footer__linkswrap">
						<div class="footer__textwrap">
							<p class="footer__text" v-html="4"></p>
						</div>

						<div class="footer__textwrap">
							<p class="footer__text">© Black&White, 2022</p>
						</div>
						<!-- :href="'tel:' + phone" -->
						<div class="footer__textwrap">
							<a class="footer__text" v-html="'phone'"></a>
						</div>
						<!-- :href="'mailto:' + mail" -->
						<div class="footer__textwrap">
							<a class="footer__text" v-html="'mail'"></a>
						</div>
					</div>
				</div>

				<div class="col-2 col-xs-12">
					<div class="footer__socials">
						<div class="footer__social">
							<a
								href="https://www.facebook.com/BlackWhiteGroup/"
								target="_blank"
							>
								<img
									data-src="https://api.blackandwhite.kz/upload/bw/report/facebook.svg"
									alt=""
									class="footer__social-icon"
								/>
							</a>
						</div>

						<div class="footer__social">
							<a
								href="https://vimeo.com/blackandwhiteproduction"
								target="_blank"
							>
								<img
									data-src="https://api.blackandwhite.kz/upload/bw/report/vimeo.svg"
									alt=""
									class="footer__social-icon"
								/>
							</a>
						</div>

						<div class="footer__social">
							<a
								href="https://instagram.com/bw_videoproduction?igshid=166ykkvlh4etu"
								target="_blank"
							>
								<img
									data-src="https://api.blackandwhite.kz/upload/bw/report/instagram.svg"
									alt=""
									class="footer__social-icon"
								/>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</footer>
</template>

<script>
	export default {
		name: "TheFooter",

		methods: {},
	};
</script>

<style lang="scss" scoped>
</style>