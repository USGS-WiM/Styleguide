<!--
Components.vue
Info for reusable components
-->

<template>
	<div class="padded mtop-lg pbottom-xl">

		<h1>Custom Components</h1>

		<p>
			This page is a work in progress. For now, to use components with your project, look at the source code for <a href="https://github.com/usgs-wim/styleguide" target="_blank">this styleguide on GitHub</a> to find the component code and examples of it in use.
		</p>
		<p class="small mbottom-sm">
			The components on this page are fairly easy to understand, but you can view the interface page to see examples of all components in this project.
		</p>
		<router-link to="/interface" class="button">
			Interface Page
		</router-link>
		<h1 class="mtop-lg">Vue</h1>
		<p class="small">
			Most Vue components will require you to set up the <router-link to="variables">CSS Varibles</router-link>.
		</p>

		<h3 class="mtop-md">Select Box</h3>
		<p>
			Searchable select box with optional multi-select
		</p>
		<Selections 
			:textSearch="true"
			class="filter-bar-item"
			:suggestions="['736192', '572856', '617851', '810295', '687172', '910987', '716582', '857195']"
			:limit="3" 
			direction="top"
			selectLabel="Select"
			noSelectionText="Select up to 3 ids"
			icon="far fa-hashtag"
			@changed="selectChoice">
		</Selections>


		<h3 class="mtop-lg">Tooltip</h3>
		<label class="flex mtop-sm">
			<span>Label</span>
			<Tooltip :link="'https://isitchristmas.com'" position="right" linkText="Links Too" color="blue" icon="far fa-info-square">
				This is a tooltip. You can put whatever in here and change the icons and links.
			</Tooltip>
		</label>

		<h3 class="mtop-lg">Callout</h3>
		<Callout
			icon="far fa-exclamation-triangle"
			class="mbottom-sm max-width-small mtop-sm"
			color="yellow">
			<p class="small no-padding">
				Call attention to some text with an icon and some color
			</p>
		</Callout>


	</div>
</template>

<script>
import Selections from "@/components/ui/Forms/Selections";
import Tooltip from "@/components/ui/Common/Tooltip";
import Callout from "@/components/ui/Common/Callout";


export default {
	name: "components",

	components: {
		Selections,
		Tooltip,
		Callout,
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