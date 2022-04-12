<!--
//!  Interface
	  Internal interface page to show existing UI elements
-->

<template>
	<div>

		<div class="page">

			<h1 class="mtop-md mbottom-sm">Interface Demo</h1>
			<p class="big">
				Displaying the custom elements and styles for this styleguide Vue app.
			</p>
			<p>
				 View the <a href="https://github.com/usgs-wim/styleguide" target="_blank">source on GitHub</a> or use the inspector to view the code or see CSS properties.
			</p>


			<!-- UI -->
			<h1 class="mtop-xl mbottom-lg">UI Elements</h1>
			<InterfaceUI></InterfaceUI>
			<!-- Forms -->
			<h1 class="mtop-xxl mbottom-lg">Form Elements</h1>
			<InterfaceForms></InterfaceForms>
			<!-- Components -->
			<h1 class="mtop-xxl mbottom-lg">Components</h1>
			<InterfaceComponents></InterfaceComponents>
			<!-- Text -->
			<h1 class="mtop-xxl mbottom-lg">Typography</h1>
			<InterfaceText></InterfaceText>

		</div>
	</div>
</template>

<script>
// Components
import InterfaceUI from "@/views/other/interface/InterfaceUI.vue";
import InterfaceForms from "@/views/other/interface/InterfaceForms.vue";
import InterfaceComponents from "@/views/other/interface/InterfaceComponents.vue";
import InterfaceText from "@/views/other/interface/InterfaceText.vue";

export default {
  	name: "Interface",
  	components: {
		  InterfaceUI,
		  InterfaceForms,
		  InterfaceComponents,
		  InterfaceText,
	},
	mixins: [
	],
	mounted(){
	},
	data() {
		return{
		};
	},
	created: function () {
	},
	methods: {
	}
};
</script>

<style lang="scss">
</style>