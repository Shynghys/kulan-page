import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
import MainIndex from "../pages/main/Index";

let routes = [
	{
		path: "/",
		name: "mainroute",
		component: MainIndex,
	},
	// {
	// 	path: "/404",
	// 	name: "404",
	// 	component: Error404,
	// },

	// {
	// 	path: "*",
	// 	name: "notfound",
	// 	component: PageNotFound,
	// },
];

const router = new VueRouter({
	mode: "history",
	routes,

	// Данная опция при переходе с одного роутинга на другой - меняет положение страницы и скроллит наверх
	scrollBehavior() {
		return { x: 0, y: 0 };
	},
});

export default router;
