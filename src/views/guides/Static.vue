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

		

		<h2 class="mtop-lg">Redirecting</h2>

		<p>
			The code example below is one way to add a redirect your static site.
		</p>
		<pre>
			<code>
// Javascript
// Redirect after 5 seconds

setTimeout(function(){ 
  window.location.href = "https://addressToRedirectTo.gov/";
}, 5000);
			</code>
		</pre>
		

		<h3 class="mtop-md">Redirect Countdown</h3>

		<p>
			Add a countdown to your redirect.
		</p>
		<pre>
			<code>
&lt;!-- Element HTML --&gt;
&lt;span id="counterElement"&gt;5&lt;/span&gt;

// Javascript
var countStart = 5; // Same number as in HTML
for (let step = 1; step &lt; 6; step++) {
  // Delay is 1000ms * step
  var countDelay = step * 1000;
  setTimeout(function(){ 
    document.getElementById("counterElement").innerHTML = countStart - step; 
  }, countDelay);
}
			</code>
		</pre>




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