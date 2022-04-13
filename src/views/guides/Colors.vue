<!--
Colors.vue
Utilities for viewing and managing colors
-->

<template>
	<div class="padded mtop-lg pbottom-xl">

		<h1>Colors</h1>

		<p class="big">
			Each color has nine shades, 100-900, with 500 being the primary. 
			<br/>
			Shades are reversed in dark mode.
		</p>
		<p>
			Click any color to copy the Hex value to your clipboard.
		</p>

		<div class="sg--colorgrid mtop-md">
			<div class="sg--colorblock"></div>
			<div class="sg--colorblock sg--colorblock-label top" v-for="index in 9" :key="index">
				{{index}}00
			</div>
		</div>

		<div class="sg--colorgrid" v-for="(color, key) in colors" :key="key">
			<div class="sg--colorblock sg--colorblock-label">
				{{color}}
			</div>
			<button class="sg--colorblock" v-for="index in 9" :key="index" :style="'background-color: var(--' + color + index + '00)'" @click="copyToClipboard(getCSSVariable(color + index + '00'), getCSSVariable(color + index + '00'))">
			</button>
		</div>
		<p class="tiny italic text-fade">
			Cool optical illusion
		</p>


		<h2 class="mtop-lg">
			Using colors in projects
		</h2>
		<p class="big">
			First, set up <router-link to="/variables">CSS Variables</router-link> on your project and import the WIM <code>variables.css</code> file.
		</p>
		<p>
			Once that's done, each color is accessible through CSS variables using the color name + shade number.
		</p>
		<p class="small">
			So instead of using the Hex for blue500, it would look like <code>background-color: var(--blue500);</code>.
		</p>

		<h3 class="mtop-sm">
			Changing the primary color 
		</h3>
		<p>
			If you're using other WIM CSS components and elements from this styleguide, the default primary color is set to blue. You can change this in the <code>variables.css</code> file if you would like a default color other than blue.
		</p> 
		<p class="small">
			So if you change <code>--primary</code> variables to match <code>--green</code>, elements like buttons and alerts without defined colors will default to green instead of blue.
		</p> 



	</div>
</template>

<script>
export default {
	name: "colors",

	components: {
	},
	

	mixins: [
	],

	data() {
		return {
			today: new Date(),
			colors: ["red", "orange", "yellow", "green", "blue", "indigo", "violet", "magenta", "grey"]
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

		getCSSVariable(name){
			return getComputedStyle(document.documentElement)
				.getPropertyValue("--" + name);
		}


	}
};



</script>


<style lang="scss">


.sg--colorgrid{
	display: flex;
	gap: 10px;
	margin-bottom: 10px;
	@media (max-width: $screenSM) {
		gap: 0;
	}

	.sg--colorblock{
		box-sizing: border-box;
		width: 50px;
		height: 50px;
		border-radius: var(--borderRadius);
		font-weight: 600;

		@media (max-width: $screenSM) {
			border-radius: 0;
		}

		&.sg--colorblock-label{
			display: flex;
			font-size: 14px;
			font-weight: 500;
			flex-direction: column;
			justify-content: center;
			text-align: center;

			@media (max-width: $screenSM) {
				&:not(.top){
					width: 70px;
					min-width: 70px;
					font-size: 12px;
				}
			}
		}
	}
}

</style>