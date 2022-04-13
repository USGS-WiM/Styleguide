<!--
Home.vue
-->

<template>
	<div>

		<div class="ptop-lg padded">
			<h1>WIM Styleguide & Tools</h1>

			<p class="big">
				This site is a collection of tools, guides, design information, and code examples for creating web applications.
			</p>

			<p class="small">
				Use the dropdown above to navigate between guides and pages.
			</p>


			<!-- Tools -->
			<h2 class="mtop-lg mbottom-md">Tools</h2>
			<div class="tool-group"> 
				<!-- QR Code -->
				<router-link class="tool-link" to="/qr">
					<i class="far fa-qrcode"></i>
					<div class="text">
						<b>QR Code Generator</b>
						<small>Create QR code links with USGS, WIM, or the Geoplatform logo.</small>
					</div>
				</router-link>
				<!-- Map Marker -->
				<router-link class="tool-link" to="/markers">
					<i class="far fa-map-marker"></i>
					<div class="text">
						<b>Marker Designer</b>
						<small>Create custom map marker icons for use with Leaflet.</small>
					</div>
				</router-link>
				<!-- Loader -->
				<router-link class="tool-link" to="/loaders">
					<i class="far fa-loader fa-spin"></i>
					<div class="text">
						<b>Animated Loaders</b>
						<small>SVG + CSS animated loaders for websites and applications.</small>
					</div>
				</router-link>
			</div>

			<!-- Development -->
			<h2 class="mtop-xl mbottom-md">Setup & Development</h2>
			<div class="tool-group"> 
				<!-- App Templates -->
				<router-link class="tool-link" to="/templates">
					<i class="far fa-table-layout"></i>
					<div class="text">
						<b>App Layout Creator</b>
						<small>Create the base layout for your new app.</small>
					</div>
				</router-link>
				<!-- USWDS -->
				<router-link class="tool-link" to="/uswds">
					<i class="far fa-object-group"></i>
					<div class="text">
						<b>USWDS</b>
						<small>Install USWDS for well designed & accessible UI elements.</small>
					</div>
				</router-link>
				<!-- Variables -->
				<router-link class="tool-link" to="/variables">
					<i class="far fa-file-code"></i>
					<div class="text">
						<b>CSS Variables</b>
						<small>Use CSS variables for consistency and accessibility.</small>
					</div>
				</router-link>
				<!-- Dark Mode -->
				<router-link class="tool-link" to="/dark">
					<i class="far fa-moon-stars"></i>
					<div class="text">
						<b>Dark Mode</b>
						<small>Setup additional CSS themes for your project.</small>
					</div>
				</router-link>
				<!-- Meta Tags -->
				<router-link class="tool-link" to="/meta">
					<i class="far fa-tag"></i>
					<div class="text">
						<b>Meta Tags</b>
						<small>Setup the correct metadata for your project.</small>
					</div>
				</router-link>
				<!-- Components -->
				<router-link class="tool-link" to="/components">
					<i class="far fa-recycle"></i>
					<div class="text">
						<b>Components</b>
						<small>Reusable elements for your application (work in progress).</small>
					</div>
				</router-link>
				<!-- Printing -->
				<router-link class="tool-link" to="/printing">
					<i class="far fa-print"></i>
					<div class="text">
						<b>Printing</b>
						<small>Information for creating a printable section on your application.</small>
					</div>
				</router-link>
			</div>


			<!-- Design -->
			<h2 class="mtop-xl mbottom-md">Design</h2>
			<div class="tool-group"> 
				<!-- Colors -->
				<router-link class="tool-link" to="/colors">
					<i class="far fa-palette"></i>
					<div class="text">
						<b>Colors</b>
						<small>View and copy colors (taken from USWDS).</small>
					</div>
				</router-link>
				<!-- Colors -->
				<router-link class="tool-link" to="/logos">
					<i class="far fa-cube"></i>
					<div class="text">
						<b>Logos</b>
						<small>View and download USGS and WIM logos.</small>
					</div>
				</router-link>
				<!-- Interface Icons -->
				<router-link class="tool-link" to="/icons">
					<i class="far fa-icons"></i>
					<div class="text">
						<b>Interface Icons</b>
						<small>Set up and use Font Awesome for your icons.</small>
					</div>
				</router-link>
			</div>


			<div class="mtop-xl"></div>


		</div>


	</div>
</template>

<script>

export default {
	name: "home",

	components: {
	},
	

	mixins: [
	],

	data() {
		return {
			today: new Date(),
		};

	},

	computed: {


	},

	watch: {
	},

	mounted() {
		this.$store.dispatch("Hold/CHANGE_PAGE_TITLE", "WIM Style Guide");
	},
	created: function () {
	},

	beforeDestroy(){
	},
	
	methods: {




	}
};



</script>


<style lang="scss">

	.tool-group{
		display: flex;
		gap: 30px;
		flex-wrap: wrap;

		.tool-link{
			display: flex;
			color: var(--text);
			max-width: 300px;

			i{
				font-size: 32px;
				display: flex;
				flex-direction: column;
				justify-content: center;
				width: 100px;
				text-align: center;
				transform: scale(1);
				transition: 0.1s;
			}
			.text{
				display: flex;
				flex-direction: column;
				justify-content: center;
				font-size: 14px;

				small{
					display: block;
					font-size: 12px;
					font-weight: 500;
					padding-top: 4px;
				}
			}

			&:hover{
				text-decoration: none;

				.text b{
					text-decoration: underline;
				}

				i{
					color: var(--primary500);
					transform: scale(1.3);
				}
			}
		}
	}

</style>