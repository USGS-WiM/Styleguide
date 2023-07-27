<!--
Variables.vue
Instructions for CSS Variables
-->

<template>
	<div class="padded mtop-lg pbottom-xl">

		<h1>CSS Variables</h1>

		<p class="big">
			Colors, sizes, and many other CSS values can be defined with CSS Variables, which can later be used throughout your project.
		</p>
		<p>
			Why? If you're almost done with an app, and the cooperator decides they like red better than blue, or wants to increase the font size. With variables, you only need to change the color or size in one location. You can also use CSS variables for app themes or dark mode.
		</p>
	
		<h2 class="mtop-md">WIM CSS Variables</h2>
		<p class="mbottom-sm">
			WIM has a CSS Variables file that defines colors, fonts, borders, shadows, and more. If you want to use the same variables for consistency, download the lastest file from GitHub and import it into your project.
		</p>

		<a href="https://github.com/USGS-WiM/Styleguide/blob/staging/src/styles/variables.scss" target="_blank" class="button">
			<i class="fab fa-github"></i>
			<span>View Variables.scss on GitHub</span>
		</a>


		<h3 class="mtop-lg">Importing CSS files</h3>
		<p>
			Once you add a <code>variables.css</code> file to your project, you can import it to the top of your main/global CSS file with:
		</p>
		<p>
			<code>
				@import '/path/to/variables.scss';
			</code>
		</p>


		<h3 class="mtop-lg">Using CSS variables</h3>
		<h4 class="mtop-sm">Defining new CSS variables</h4>
		<p>
			CSS variables just hold the value you want to pass on when the variable is used.
			<br/>
			Define CSS variables with:
		</p>
		<pre><code>
<b>/* Variables.css */</b>
:root {
  /* Format */
  --variableName: ~variableValue~;

  /* Examples */
  --red: #FF0000;
  --shadow: 0px 2px 4px 0px rgba(30, 30, 60, 0.11);
}
	</code></pre>
	<p>
		The <code>:root{}</code> tells the website these are the default root variables.
	</p>

	<h4 class="mtop-sm">Using CSS variables</h4>
		<p>
			CSS variables can be used just like you would normal CSS values.
		</p>
		<pre><code>
<b>/* App or component stylesheet */</b>

button{
  background-color: var(--red);
  box-shadow: var(--shadow);
}
	</code></pre>
			

	
		<h3 class="mtop-lg mbottom-sm">Dark Mode & CSS Themes</h3>
	
		<router-link to="/dark" class="button">
			<i class="far fa-moon-stars"></i>
			<span>View Dark Mode Page</span>
		</router-link>


	</div>
</template>

<script>
export default {
	name: "variables",

	components: {
	},
	

	mixins: [
	],

	data() {
		return {
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


</style>