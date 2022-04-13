<!--
	Main/base app component
-->

<template>

	<!-- Outermost app wrapper -->
	<!-- Set classes for different preferences -->
	<div id="app" :class="{
		'no-animations': !$store.getters['Settings/animations'], 
		'no-outlines': !$store.getters['Settings/outlines'],
		'softkeyboard-visible': $store.getters['Device/softKeyboardVisible']
		}">


		<transition name="load">

			<!-- App wrapper only shown once page is mounted -->
			<div class="app-wrapper" v-if="pageMounted">
			
				<!-- Loaders -->
				<transition-group name="load">
					<!-- Data loading -->
					<div id="dataLoading" key="1" v-if="$store.getters['Hold/loading'] == 'data'"><div id="loaderElement"></div></div>
					<!-- Page loading -->
					<div id="pageLoading" key="2" v-if="$store.getters['Hold/loading'] == 'page'">
						<img src="@/assets/branding/logo-light.png" title="Logo" alt="Logo" v-if="!$store.getters['Settings/darkMode']"/>
						<img src="@/assets/branding/logo-dark.png"  title="Logo" alt="Logo" v-else />
					</div>
				</transition-group>


				<!-- All page content contained within main -->
				<main id="styleguide">

					<!-- Top bar component -->
					<TopBar></TopBar>


					<!-- Center/Main Content -->
					<div class="body-content" id="mainScrollView">
						<transition name="page" mode="out-in">
							<router-view/>
						</transition>
					</div>

					<Footer></Footer>

				</main>


				<!-- Toast Component -->
				<Toast ref="toastComponent"></Toast>

				<!-- Alert Component -->
				<Alert ref="alertComponent"></Alert>

				<!-- Confirm Leave Component -->
				<ConfirmLeave ref="confirmLeaveComponent"></ConfirmLeave>

				<!-- Lock scrolling on HTML if scrollLock is true -->
				<v-style v-if="$store.getters['Hold/scrollLock']">
					html{
						overflow: hidden;
					}
					@media (max-width: 780px) {
						padding-right: 8px;
						box-sizing: border-box;
					}
				</v-style>


			</div>

		</transition>

	</div>
</template>


<script>
// Components
import TopBar from "@/components/ui/TopBar/TopBar";
import Footer from "@/components/ui/Single/Footer";
import Alert from "@/components/ui/Common/Alert";
import Toast from "@/components/ui/Common/Toast";
import ConfirmLeave from "@/components/ui/Modals/ConfirmLeave";
// Mixins
import screenResizeMixin from "@/components/mixins/screenResizeMixin.js";

export default {
	name: "app",
	mixins: [
		screenResizeMixin,
	],
	components: {
		Alert,
		Toast,
		TopBar,
		Footer,
		ConfirmLeave,
	},
	data() {
		return {
			pageMounted: false,
		};
	},
	created: function () {
	},
	computed: {
	},
	watch: {
	},
	mounted() {
		let _this = this;

		this.$store.dispatch("Hold/SCROLL_LOCK", false);

		_this.pageMounted = true;

		// Get geolocation if already allowed
		// setTimeout(function(){
		// 	if(_this.$store.getters["Device/permissions"].geolocation == "granted"){
		// 		_this.getGeolocation();
		// 	}
		// }, 2000);


	},
	beforeDestroy() { 
	},
	methods: {

	}
};
</script>

<style lang="scss">


	// Data Loading
	#dataLoading{
		display: block;
		position: fixed;
		top: 0;
		left: -5vw;
		width: 110vw;
		height: 5px;
		z-index: 10000;

		#loaderElement{
			display: block;
			position: absolute;
			left: 0;
			height: 100%;
			width: 0px;
			background-color: var(--yellow500);
			margin: 0 auto;
			animation: dataLoader 1.8s ease-in-out 0s infinite normal;
		}
	}
	@keyframes dataLoader {
		0.0%{
			width: 0px;
			left: 0%;
		}
		40%{
			width: 60vw;
		}
		60%{
			width: 40vw;
		}
		100%{
			width: 0px;
			left: 100%;
		}
	}
	#pageLoading{
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background-color: var(--transparent);
		backdrop-filter: blur(5px);
		z-index: 5000;
		text-align: center;
		display: flex;
		flex-direction: column;
		justify-content: center;

		img{
			margin: 0 auto;
			height: 80px;
			width: auto;
			animation: pageLoader 1.5s ease-in-out 0s infinite normal;
		}
	}
	@keyframes pageLoader {
		0.0%{
			transform: scale(1);
		}
		50%{
			transform: scale(1.3);
		}
		99.5%{
			transform: scale(1);
		}
	}


	// Outermost wrapper
	#app {
		display: block;
		margin: 0;
		box-sizing: border-box;

		// Inner wrapper only shown on mountt
		.app-wrapper{
			width: 100%;
			margin: 0 auto;
			display: block;
		}

		// Toggleable UI preferences
		&.no-animations{
			*{
				transition-duration: 0s !important;
				animation-duration: 0s !important;
			}
		}
		&.no-outlines{
			input,button,textarea,a,select,.focusable{
				outline: none;
				&:focus{
					outline: none !important;
				}
				&:active{
					outline: none;
				}
			}
		}

	}


	//  Main App Content
	main#styleguide{
		box-sizing: border-box;
		padding-right: 0;
		z-index: 1;

		// Main view content
		.body-content{
			box-sizing: border-box;
			width: 100%;
			transition: 0.2s 0.5s;

			// Hide body content if viewing content panel
			@media (min-width: $screenSM) {
				&.hide-body{
					transition: 0s;
					width: 0;
				}
			}
			@media (max-width: $screenSM) {
				padding: 0 0;
				&.hide-body{
					transition: 0s;
					height: 0;
					min-height: 0;
					max-height: 0;
				}
			}
		}
	}



</style>
