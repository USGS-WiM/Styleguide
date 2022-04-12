<!--
Home.vue
-->

<template>
	<div>

		<div class="ptop-lg padded">
			<h1>WIM Styleguide</h1>

			<p class="big">
				Use the dropdown above to navigate between guides and pages.
			</p>

			<h3 class="mtop-lg mbottom-md">Shortcuts</h3>
			<router-link class="button  big mright-md mbottom-md" to="/markers">
				<i class="far fa-map-marker"></i>
				<span>Map Marker Designer</span>
			</router-link>
			<router-link class="button big mright-md mbottom-md" to="/loaders">
				<i class="far fa-loader"></i>
				<span>Animated Loaders</span>
			</router-link>


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


</style>