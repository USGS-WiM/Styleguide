<!--
Static.vue
Simple html for static page with no dependencies or external references
-->

<template>
	<div class="padded mtop-lg pbottom-xl">

		<h1>Static Page Template</h1>

		<p class="mtop-sm">
			The static template is a 33kb html file with zero dependencies or external resources. The images are encoded directily into the HTML, and all CSS is included. 
		</p>
		<p>
			Use it for redirect pages or other individual pages with simple messages that you don't want to have to think about ever again.
		</p>

		<div class="flex flex-wrap gap mtop-md">
			<a href="static.html" class="button invert">
				<i class="far fa-eye"></i>
				<span>Preview Static Page</span>
			</a>

			<a href="static.html" class="button" download="static.html">
				<i class="far fa-file-code"></i>
				<span>Download .html File</span>
			</a>
		</div>




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


	}
};



</script>


<style lang="scss">


</style>