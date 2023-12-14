<script>
import AppHeader from "./components/AppHeader.vue";
import AppStickyHeader from "./components/AppStickyHeader.vue";
import AppMain from "./components/AppMain.vue";
import AppFooter from "./components/AppFooter.vue";
import { store } from "./store.js" //state management

export default {
	components: {
		AppHeader,
		AppStickyHeader,
		AppMain,
		AppFooter,


	},
	data() {
		return {
			store,
			scTimer: 0,
			scY: 0,
		}
	},
	mounted() {
		this.doThings();
		window.addEventListener('scroll', this.handleScroll);
		// axios.get("indirizzo").then(risultato => {
		// 	console.log(risultato);
		// }).catch(errore => {
		// 	console.error(errore);
		// });
	},
	methods: {
		doThings() {
			console.log("App.vue does things");
		},
		handleScroll() {
			if (this.scTimer) return;
			this.scTimer = setTimeout(() => {
				this.scY = window.pageYOffset;
				clearTimeout(this.scTimer);
				this.scTimer = 0;
			}, 100);
		},
		toTop() {
			window.scrollTo({
				top: 0,
				behavior: "smooth"
			});
		},
	}
}
</script>

<template>
	<AppHeader />
	<AppStickyHeader />
	<AppMain />
	<AppFooter />
	<transition name="fade">
		<div id="pagetop" class="sticky-bottom" v-show="scY > 800" @click="toTop">
			<img class="pizzaIcon" src="/public/svg/svg-4.svg" alt="">
		</div>
	</transition>
</template>

<style lang="scss">
// importo il foglio di stile generale dell'applicazione, non-scoped
@use './styles/general.scss';
</style>

<style scoped lang="scss">
// importo variabili
// @use './styles/partials/variables' as *;

// ...qui eventuale SCSS di App.vue
main {
	padding: 1rem;
}

#pagetop {
	background-color: white;
	width: 50px;
	height: 50px;
	text-align: center;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	float: right;
	right: 20px;
	bottom: 20px;
	border: 1px solid orangered;
}

#pagetop:hover {
	width: 60px;
	height: 60px;
	transition: 0.5s;
}

.pizzaIcon {
	width: 1.6rem;
}
</style>