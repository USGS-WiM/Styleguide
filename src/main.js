//! Main
//*	Sets up vue app

// Imports
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./registerServiceWorker";
import store from "@/store/store";
import { UswdsVue } from "uswds-vue";
import "leaflet/dist/leaflet.js";
// Custom Plugins
import plugins from "@/components/plugins/plugins.js";
import "@/components/plugins/Dayjs";
import logging from "@/components/plugins/logging.js";

// Set configs
Vue.config.productionTip = false;

// Use
Vue.use(logging);
Vue.use(plugins);
Vue.use(UswdsVue);

// Main styles
import "./styles/main.scss";




// Conditional Style component
Vue.component("v-style", {
	render: function (createElement) {
		return createElement("style", this.$slots.default);
	}
});
Vue.component("v-script", {
	render: function (createElement) {
		return createElement("script", this.$slots.default);
	}
});



// Create vue app - call after processing user
let app = new Vue({
	router,
	store,
	data: {
	},
	render: h => h(App)
}).$mount("#app");


// Determine dark mode based on device settings
if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
	store.dispatch("Settings/TOGGLE_DARK_MODE", true);
}else{
	store.dispatch("Settings/TOGGLE_DARK_MODE", false);
}


// Get device details, save in store for later
// Touch Screen
if(("ontouchstart" in window) || (navigator.MaxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0)) {
	store.dispatch("Device/DEVICE_HAS_TOUCH", true);
}
// PWA / Standalone app display
if (window.matchMedia("(display-mode: standalone)").matches) {
	store.dispatch("Device/DEVICE_IS_PWA", true);
}

// Check device permission status
store.dispatch("Device/CHECK_PERMISSIONS", true);

