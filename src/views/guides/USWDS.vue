<!--
USWDS.vue
Info for USWDS
-->

<template>
	<div class="padded mtop-lg pbottom-xl">

		<h1>USWDS Styles & Components</h1>

		<p class="big">
			<a href="https://designsystem.digital.gov/" target="_blank">USWDS</a> (United States Web Design System) is similar to Bootstrap, but for government websites. Using USWDS in your project will help ensure our apps are consistent and we meet accessibility standards.
		</p>
		<p>
			The <a href="https://designsystem.digital.gov/documentation/getting-started-for-developers/" target="_blank">USWDS Documentation</a> is the best resource for getting started.
			<br/>
			The main things WIM will use is the components and typography, although there are many other cool features we haven't tried yet, like design tokens.
		</p>

		<h2 class="mtop-lg">UWDS with a framework</h2>
		<p class="mbottom-sm">
			There are USWDS packages for many frameworks - except Angular. Some are official, some are maintained by others. View them all <a href="https://designsystem.digital.gov/documentation/implementations/" target="_blank">here</a>.
		</p>
		<a href="https://github.com/usds/uswds-vue" target="_blank" class="button mright-sm mbottom-sm">
			<i class="fab fa-vuejs"></i>
			<span>Vue USWDS</span>
		</a>
		<a href="https://github.com/trussworks/react-uswds" target="_blank" class="button mright-sm mbottom-sm">
			<i class="fab fa-react"></i>
			<span>React USWDS</span>
		</a>

		<h2 class="mtop-lg">UWDS & Font Awesome Pro</h2>
		<p class="mbottom-sm">
			USWDS seems to default to Font Awesome <b>Free</b> for icons. If you are trying to use Font Awesome Pro, and some icons are not showing up, USWDS may be overwriting the CSS font family.
			<br/>
			Add this to your CSS to fix it:
		</p>
		<pre class="mtop-sm"><code>
.far, .fal, .fas { font-family: "Font Awesome 6 Pro" !important; }
.fab { font-family: "Font Awesome 6 Brands" !important; }
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