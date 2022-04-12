<!--
Components.vue
Info for reusable components
-->

<template>
	<div class="padded mtop-lg pbottom-xl">

		<h1>Custom Components</h1>

		<p class="big">
			Not yet.
		</p>

	</div>
</template>

<script>
export default {
	name: "components",

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