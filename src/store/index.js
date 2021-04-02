import Vue from "vue";
import Vuex from "vuex";

import resturants from "./modules/resturants";
import cart from "./modules/cart";
import user from "./modules/user";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		items: [
			{
				text: "Order",
				to: "/",
				icon: "fas fa-shopping-bag",
				meta: {
					showToolbar: true,
					showBottomNav: true,
				},
			},
			{
				text: "Go Out",
				to: "/go-out",
				icon: "fas fa-shoe-prints",
				meta: {
					showToolbar: false,
					showBottomNav: true,
				},
			},
			{
				text: "History",
				to: "/history",
				icon: "fas fa-utensils",
				meta: {
					showToolbar: true,
					showBottomNav: true,
				},
			},
			{
				text: "Account",
				to: "/account",
				icon: "mdi-account-child-circle",
				meta: {
					showToolbar: true,
					showBottomNav: true,
				},
			},
		],
		theme: true,
		loading: false,
	},
	getters: {
		appBarLinks: (state) =>
			state.items.filter((link) => link.meta.showToolbar === true),
		bottomLink: (state) =>
			state.items.filter((link) => link.meta.showBottomNav === true),
		theme: (state) => state.theme,
		loading: (state) => state.loading,
	},
	mutations: {
		updateLoadingState(state, payload) {
			state.loading = payload;
		},
	},
	actions: {},
	modules: {
		resturants,
		cart,
		user,
	},
});
