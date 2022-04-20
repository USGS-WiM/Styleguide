<!-- 
//! Top Navigation bar
// 	 Bar at top of screen with logo and account/settings dropdown
// 		Visible on all screen sizes
// 			70px height 
// 			Sticky, floating on top of most things (not modals)
-->

<template>
	<div>

		<!-- USGS Headers -->
		<div id="requiredHeaders">
			<us-official-header :variant="$store.getters['Settings/darkMode'] ? 'dark' : 'light'"/>

			<a id="usgsHeader" href="https://usgs.gov" target="_blank">
				<img src="@/assets/branding/usgs-tagline.png" title="USGS Logo" alt="USGS Logo"/>
			</a>
		</div>


		<div id="topBar">

			<!-- Branding - Logo -->
			<div id="branding">
				<button id="logo" @click="navigate('/')" tabindex="0" aria-label="Home">
					<img src="@/assets/branding/wim-horizontal-light.png" title="Logo" alt="Logo" v-if="!$store.getters['Settings/darkMode']" class="hide-md"/>
					<img src="@/assets/branding/wim-horizontal-dark.png"  title="Logo" alt="Logo" v-else class="hide-md"/>
					<img src="@/assets/branding/wim-short-light.png" title="Logo" alt="Logo" v-if="!$store.getters['Settings/darkMode']" class="show-md"/>
					<img src="@/assets/branding/wim-short-dark.png"  title="Logo" alt="Logo" v-else class="show-md" />
				</button>
			</div>

			<!-- Float center - search bar -->
			<div id="centerNav">

				<!-- Page title -->
				<div id="pageTitle">
					<span v-if="$store.getters['Hold/loading']">Loading...</span>
					<span v-else>{{$store.getters['Hold/pageTitle']}}</span>
				</div>

			</div>

			<!--  
				Settings Nav Floated right
			-->
			<nav id="rightNav" aria-label="Menu - More">

				<!-- Nav for signed-in users -->
				<div class="buttons-nav">

					<!-- Dropdown button -->
					<div class="buttons-nav-button">
						<!-- Hover label to show dropdown -->
						<button class="nav-icon-button" :class="{'active': showAccountPopover}" @click="showAccountPopover = !showAccountPopover" aria-label="Account Dropdown">
							<!-- Toggle icon -->
							<i :class="{'fas fa-bars': !showAccountPopover, 'fas fa-times': showAccountPopover}"></i>
						</button>

						<!-- Popup on click -->
						<span  @mouseleave="showAccountPopover = false">
							<transition name="collapse">
								<AccountPopover v-if="showAccountPopover"></AccountPopover>
							</transition>
						</span>
					</div>

				</div>
			</nav>

			<!-- Popover Backdrop -->
			<transition name="lightbox">
				<div class="lightbox" id="popoverLightbox" @click="showAccountPopover = false" v-if="showAccountPopover && $store.getters['Device/hasSmallScreen']" v-touch:swipe.self="() => showAccountPopover = false"></div>
			</transition>

		</div>

		<div class="padded mtop-xs">
			<transition name="basic">
				<Selections 
					:textSearch="true"
					class="quick-nav"
					:suggestions="guides"
					:limit="1" 
					direction="bottom"
					selectLabel="Jump to"
					noSelectionText=""
					icon="far fa-check"
					:activeSelection="selectedLink"
					v-if="!selectedLink"
					@changed="jumpToPage">
				</Selections>
			</transition>
		</div>
	
	
	</div>
</template>

<script>
// Components
import AccountPopover from "@/components/ui/TopBar/AccountPopover";
import Selections from "@/components/ui/Forms/Selections";

export default {
	name: "TopBar",
	components: {
		AccountPopover,
		Selections,
	},
	mixins: [
	],
	data() {
		return {
			showAccountPopover: false,

			guides: ["Home", "Colors", "Logos & Branding", "Map Symbols", "Animated Loaders", "QR Code Generator", "Email Signature Designer", "Frame Template (Geonarrative)", "Interface Icons", "CSS Variables", "Meta Tags", "USWDS",  "Dark Mode", "Printing", "Custom Components", "App Layout Creator", "Static Page Template",],
			guidePaths: {
				"Home": "/",
				"Colors": "/colors",
				"Logos & Branding": "/logos",
				"Map Symbols": "/markers",
				"Animated Loaders": "/loaders",
				"QR Code Generator": "/qr",
				"Email Signature Designer": "/signature",
				"Frame Template (Geonarrative)": "/frame",
				"Interface Icons": "/icons",
				"CSS Variables": "/variables",
				"Meta Tags": "/meta",
				"USWDS": "/uswds",
				"Dark Mode": "/dark",
				"Printing": "/printing",
				"Custom Components": "/components",
				"App Layout Creator": "/templates",
				"Static Page Template": "/static",
			},
			selectedLink: "",
		};
	},
	watch:{
		$route (to, from){
			this.showAccountPopover = false;
		},
		// Watch showAccountPopover to lock scroll on mobile
		showAccountPopover () {
			if(this.$store.getters["Device/hasSmallScreen"]){
				if(this.showAccountPopover == true){
					this.$store.dispatch("Hold/SCROLL_LOCK", true);
				}else{
					this.$store.dispatch("Hold/SCROLL_LOCK", false);
				}
			}
		}
	},
	methods: {

		// Toggle Map View
		toggleMap: function(){
			this.$store.dispatch("Map/CHANGE_MAP_DISPLAY", "visible");
		},

		
		jumpToPage: function(value){
			let _this = this;
			this.selectedLink = "value";
			this.navigate(this.guidePaths[value]);
			setTimeout(function(){
				_this.selectedLink = "";
			}, 200);
		},

	}
};
</script>

<style lang="scss">

	#requiredHeaders{
		width: 100%;

		#usgsHeader{
			display: block;
			width: 100%;
			padding: 15px var(--gap);
			background-color: var(--usgsBlue);
			height: fit-content;

			img{
			background-color: var(--usgsBlue);
				height: 45px;
				width: auto;
			}
		}
	}


	// Top nav bar
	// Has logo and hover menu for account/dark mode
	#topBar{
		display: flex;
		justify-content: space-between;
		width: 100%;
		box-sizing: border-box;
		transition: all 0.2s ease;
		background-color: var(--background);
		padding: 10px var(--gap);
		background-color: var(--grey100);
		border-bottom: 1px solid var(--borderFade);
		border-top: 1px solid var(--black);

		// Adjust padding and height on smaller screens
		@media (max-width: $screenSM) {
			padding: 0 8px 0px 8px;
		}

		// Logo
		#branding{
			display: flex;
			flex-direction: column;
			justify-content: center;
			width: auto;
			position: relative;

			@media (max-width: $screenSM) {
				width: 25%;
			}

			#logo{
				transition: var(--transition);
				margin: 0 15px 0 0;
				padding: 0;
				width: fit-content;
				

				img{
					height: 32px;
					width: auto;
					@media (max-width: $screenSM) {
						height: 32px;
					}
				}

				&:hover{
					cursor: pointer;
				}
			}
		}
	}



	// Center Nav
	// Page title on mobile
	// Nav links on desktop
	#centerNav{
		flex-grow: 3;
		// max-width: 800px;
		display: flex;
		box-sizing: border-box;

		// Page Title - Mobile only
		#pageTitle{
			flex-direction: column;
			justify-content: center;
			text-align: center;
			font-size: 13px;
			font-family: var(--sans);
			font-weight: 700;
			letter-spacing: -0.4px;
			display: none;
			overflow: visible;
			width: 100%;

			span{
				text-overflow: ellipsis;
				display: block;
				width: 88%;
				font-weight: 400;
				margin: 0 auto;
				white-space:nowrap;
				overflow: hidden;
				padding: 4px 0;
			}
			@media (max-width: $screenSM) {
				display: flex;
				padding-top: 2px;
			}
		}

	}
				
	// settings Nav
	// Contained inside top nav- wanted styling seperatet
	nav#rightNav{
		display: flex;
		box-sizing: border-box;
		height: 100%;
		justify-content: flex-end;
		position: relative;

		@media (max-width: $screenSM) {
			width: 25%;
		}

		// Username with dropdown
		// For signed in users
		.buttons-nav{
			display: flex;

			.buttons-nav-button{
				position: relative;
				box-sizing: border-box;
				height: 100%;
				display: flex;
				flex-direction: column;
				justify-content: center;
				// z-index:;
				margin-left: 12px;

				@media (max-width: $screenSM) {
					margin-left: 5px;
				}

				&:first-child{
					margin-left: 0;
				}

				// Text and icon
				.nav-icon-button{
					color: var(--text);
					box-sizing: border-box;
					display: flex;
					font-weight: 500;
					flex-direction: column;
					justify-content: center;
					user-select: none;
					padding: 0 0 0 0;
					width: 40px;
					height: 40px;
					border-radius: 50%;
					text-align: center;
					font-size: 24px;

					@media (max-width: $screenSM) {
						width: 38px;
						height: 38px;
						font-size: 20px;
						background-color: transparent;
						border: none;
					}

					// Icon
					i{
						margin: 0 auto;
						padding-top: 2px;
					}

					// Active icon press
					&:active{
						transform: scale(0.94);

						&.fa-times-circle{
							transform: scale(1.1);
						}
					}

					// Actively open
					&.active{
						background-color: var(--textLight) !important;
						background-blend-mode: multiply;
						i{
							color: var(--background) !important;
						}
					}


					// Hover dropdown
					&:hover{
						cursor: pointer;
						i{
							color: var(--primary500);
						}
					}

				}


			}
		}
	}

	#popoverLightbox{
		backdrop-filter: none;
		z-index: 5;
	}
	// Mozilla doesn't support backdrop-filter, set to white instead
	@-moz-document url-prefix() {
		#topBar {
			background: var(--background) !important;
		}
	}



	// Color nav links for themes
	.app-wrapper.theme-green #pageNavigation .nav-link.is-active{color: var(--green800) !important;}
	.app-wrapper.theme-red #pageNavigation .nav-link.is-active{color: var(--red500) !important;}
	.app-wrapper.theme-yellow #pageNavigation .nav-link.is-active{color: var(--yellow600) !important;}
	.app-wrapper.theme-orange #pageNavigation .nav-link.is-active{color: var(--orange500) !important;}
	.app-wrapper.theme-pink #pageNavigation .nav-link.is-active{color: var(--magenta500) !important;}
	.app-wrapper.theme-purple #pageNavigation .nav-link.is-active{color: var(--violet500) !important;}



</style>