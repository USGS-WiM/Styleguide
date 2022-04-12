<!--
Meta.vue
Template for project meta data
-->

<template>
	<div class="padded mtop-lg pbottom-xl">

		<h1>Website Meta Tags</h1>

		<p class="big">
			Meta tags define metadata about the HTML document / app.
		</p>
		<p>
			These tags go in your <code>&lt;head&gt;</code> tag to give search engines and social networks a way to preview information from the page.
		</p> 
		
		<!-- Basic Tags -->
		<h2 class="mtop-md">Baisc Meta Tags</h2>
		
		<pre class="mtop-sm"><code>
&lt;meta charset="utf-8"&gt;
&lt;meta http-equiv="X-UA-Compatible" content="IE=edge"&gt;

&lt;!-- Viewport sets base view and whether user can zoom --&gt;
&lt;meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"&gt;

&lt;!-- The title for the browser/tab --&gt;
&lt;title&gt;App Title&lt;/title&gt;

&lt;!-- Short description - shows up on search engines --&gt;
&lt;meta name="description" content="This is an app" /&gt;

&lt;!-- Keywords for search engines --&gt;
&lt;meta name="keywords" content="maps, water, usgs" /&gt;

&lt;!-- Theme sets the browser border color on supported browsers/mobile --&gt;
&lt;meta name="theme-color" content="#FFFFFF"&gt;

&lt;!-- Browser tab/favicon --&gt;
&lt;link rel="shortcut icon" href="/path/to/favicon.png"&gt;

		</code></pre>


		<!-- Basic Tags -->
		<h2 class="mtop-md">Social Media Meta Tags</h2>
		<p>
			These tags are specific to Facebook and Twitter. A Facebook promo image is <b>1200x630px</b> and Twitter is <b>600x315px</b>.
		</p>
		<p class="small">
			Use the full live app url for these meta tags.
		</p>
		
		<pre class="mtop-sm"><code>
&lt;!-- Social Media Meta --&gt;
&lt;!-- Facebook --&gt;
&lt;meta property="og:title" content="App Title - Join Now"&gt;
&lt;meta property="og:description" content="This is an app description"&gt;
&lt;meta property="og:image" content="https://liveappurl.com/app/path/to/facebook-promo-image.png"&gt;
&lt;meta property="og:url" content="https://liveappurl.com/app"&gt;

&lt;!-- Twitter --&gt;
&lt;meta name="twitter:title" content="App Title - Join Now"&gt;
&lt;meta name="twitter:description" content="This is an app description"&gt;
&lt;meta name="twitter:image" content="https://liveappurl.com/app/path/to/twitter-promo-image.png"&gt;
&lt;meta name="twitter:card" content="summary_large_image"&gt;
&lt;meta name="twitter:image:alt" content="https://liveappurl.com/app"&gt;
		</code></pre>




	</div>
</template>

<script>
export default {
	name: "meta",

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