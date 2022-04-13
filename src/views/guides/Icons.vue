<!--
Icons.vue
Icons
-->

<template>
	<div class="padded mtop-lg pbottom-xl">

		<h1>Interface Icons</h1>

		<p class="big">
			WIM has a license to <a href="https://fontawesome.com/" target="_blank">Font Awesome Pro</a> for interface icons.
		</p>
		
		<h2 class="mtop-md">Interface Icons - Font Awesome</h2>

		<h3 class="mtop-sm">Installing</h3>
		<p>
			A new "Kit" should be created for each project before deploying, but you can re-use the CDN import from another project while developing.
		</p> 
		<p>
			Go to <a href="https://fontawesome.com" target="_blank">Font Awesome</a> and sign in with WIM's credentials to create a new kit for your project, then add it to the <code>&lt;head&gt;</code> of your project.
		</p> 
		<p>
			There are also methods for installing it locally or using NPM if you need to use it offline.
		</p> 
		<p>
			<b>Only need a few icons?</b>
			<br/>
			Go to the <a href="https://fontawesome.com/icons" target="_blank">Font Awesome</a> site and click the icon you want to use. Click the <i class="far fa-code"></i> button on the top-right corner of the icon window to get the Icon's SVG code which you can paste directly into your HTML.
		</p> 
		<h3 class="mtop-md">Using Font Awesome</h3>
		<p>
			Find the icon you would like to use on <a href="https://fontawesome.com/icons" target="_blank">Font Awesome's Search Page</a>, then add an icon to your project with the HTML code <code>&lt;i class="far fa-{ICON-CODE}"&gt;&lt;/i&gt;</code>.
		</p> 

		<p>
			So a <i class="fas fa-sailboat"></i> icon would be <code>&lt;i class="fas fa-sailboat"&gt;&lt;/i&gt;</code>.
		</p>

		<h3 class="mtop-md">
			Font Awesome Tips
		</h3>
		<p>
			<b>Change the weight of your icons</b>
			<br/>
			Choose solid, regular thickness, or thin lines, by changing the classes <code>fas</code> (solid), <code>far</code> (regular), <code>fal</code> (light) on your icon.
		</p>
		<p>
			<b>Using Brand Icons</b>
			<br/>
			Add the class <code>fab</code> when using brand icons (instead of fas, far, fal).
		</p>
		<p>
			<b>More Options</b>
			<br/>
			You can style your icons with duotone, stacking, spinning, rotating, layering, masking, + more. 
			<br/>
			<a href="https://fontawesome.com/docs/web/style/styling" target="_blank">Read the docs</a>.
		</p>

		<h3 class="mtop-md">
			Icon Consistency
		</h3>
		<p>
			WIM projects should try to have consistent icons for similar actions across applications. Find commonly used icons below.
		</p>

		<!-- Table of common icons -->
		<ul id="iconTable">
			<li v-for="(icon, key) in commonIcons" :key="key">
				<i :class="'fas ' + icon.class"></i>
				<span>{{icon.use}}</span>
				<span>{{icon.info || icon.class}}</span>
			</li>
		</ul>


	</div>
</template>

<script>
export default {
	name: "icons",

	components: {
	},
	

	mixins: [
	],

	data() {
		return {

			commonIcons: [
				{
					class: "fa-times",
					use: "Close",
				},
				{
					class: "fa-map-location",
					use: "Map",
				},
				{
					class: "fa-map-pin",
					use: "Marker",
				},
				{
					class: "fa-location-crosshairs",
					use: "Location",
				},
				{
					class: "fa-location-crosshairs-slash",
					use: "No Location",
				},
				{
					class: "fa-ellipsis-vertical",
					use: "Menu / More",
				},
				{
					class: "fa-bars",
					use: "Main Menu",
				},
				{
					info: "fa-angle-{up/down/left/right}",
					class: "fa-angle-down",
					use: "Arrows",
				},
				{
					class: "fa-magnifying-glass",
					use: "Search",
				},
				{
					class: "fa-magnifying-glass-location",
					use: "Location Search",
				},
				{
					class: "fa-layer-group",
					use: "Layers",
				},
				{
					class: "fa-circle-info",
					use: "Info",
				},
				{
					class: "fa-ruler",
					use: "Measure",
				},
				{
					class: "fa-draw-polygon",
					use: "Polygon",
				},
				{
					class: "fa-spinner-third fa-spin",
					use: "Loader",
				},
			],
		};

	},

	computed: {


	},

	watch: {
	},

	mounted() {
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


	#iconTable{
		display: block;

		li{
			display: flex;
			gap: 30px;

			i{
				width: 40px;
				text-align: center;
				font-size: 20px;
			}

			i,span{
				display: flex;
				flex-direction: column;
				justify-content: center;
			}
			span{
				font-size: 14px;
				width: 120px;

				&:last-child{
					width: auto;
					font-family: var(--monospace);
					font-size: 12px;
				}
			}
		}
	}
</style>