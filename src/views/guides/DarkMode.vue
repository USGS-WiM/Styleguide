<!--
DarkMode.vue
Info for styling and detecting/using Dark Mode
-->

<template>
	<div class="padded mtop-lg pbottom-xl">

		<h1>Dark Mode & CSS Themes</h1>

		<p class="big">
			To use themes or dark mode, make sure you have <router-link to="variables">CSS variables</router-link> set up and working on your project.
		</p>

		<h2 class="mtop-md">Defining dark mode colors</h2>
		<p>
			Themes use CSS variables to change colors based on what theme is applied. To define a new theme (dark mode), your <code>variables.css</code> file will look something like this:
		</p>
		<pre class="mtop-sm"><code>
:root {
	--backgroundColor: #FFFFFF;
	--textColor: #000000;
	--blue: #0000FF;
	--red: #FF0000;
	--green: #00FF00;
}

/* After :root, we define a new theme "dark" */
[data-theme="dark"] {
	--backgroundColor: #000000;
	--textColor: #FFFFFF;
}
		</code></pre>

		<p>
			You only need to re-define variables you want to change. If the variable stays the same on both themes, you do not need to add them to both, only :root.
		</p>
		<p class="small">
			You can create as many additional themes as you'd like.
		</p>	


		<h2 class="mtop-lg">Changing the theme</h2>
		<p>
			Themes can be changed with a single line of Javascript:
		</p>
		<pre class="mtop-xs"><code>
document.documentElement.setAttribute("data-theme", "dark");

// Or a custom name
document.documentElement.setAttribute("data-theme", "theme-orange");
		</code></pre>
		<p class="mtop-sm">
			It's a good idea to also change the meta theme color at the same time (the border or window around the browser on mobile).
		</p>
		<pre class="mtop-xs"><code>
// Set with a Hex color
document.querySelector("meta[name=\"theme-color\"]").setAttribute("content",  "#FF0000");
		</code></pre>



		<h2 class="mtop-lg">Detecting device dark mode</h2>
		<p>
			When your app loads, you can detect the user's device dark mode setting, then apply the matching theme:
		</p>
		<pre class="mtop-xs"><code>
if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
	document.documentElement.setAttribute("data-theme", "dark");
	document.querySelector("meta[name=\"theme-color\"]").setAttribute("content",  "#000000");
}else{
	document.documentElement.setAttribute("data-theme", "light");
	document.querySelector("meta[name=\"theme-color\"]").setAttribute("content",  "#FFFFFF");
}
		</code></pre>



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