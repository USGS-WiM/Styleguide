<!--
Templates.vue
Simple base code structures for new apps
-->

<template>
	<div class="padded mtop-lg pbottom-xl">

		<!-- USGS Header -->
		<div class="mright-md mbottom-sm inline-flex">
			<div class="flex column flex-center">
				<input type="checkbox" class="toggle yes-no" id="usgshtoggle" v-model="layout.usgsHeader"/>
			</div>
			<label class="flex column flex-center mleft-sm" for="usgshtoggle">USGS Header</label>
		</div>
		<!-- USGS Footer -->
		<div class="mright-md mbottom-sm inline-flex">
			<div class="flex column flex-center">
				<input type="checkbox" class="toggle yes-no" id="usgsftoggle" v-model="layout.usgsFooter"/>
			</div>
			<label class="flex column flex-center mleft-sm" for="usgsftoggle">USGS Footer</label>
		</div>
		<!-- Top Bar -->
		<div class="mright-md mbottom-sm inline-flex">
			<div class="flex column flex-center">
				<input type="checkbox" class="toggle yes-no" id="topbartoggle" v-model="layout.topBar"/>
			</div>
			<label class="flex column flex-center mleft-sm" for="topbartoggle">Top Bar</label>
		</div>
		<!-- Navigation -->
		<transition name="basic">
			<div class="mright-md mbottom-sm inline-flex" v-if="layout.topBar">
				<div class="flex column flex-center">
					<input type="checkbox" class="toggle yes-no" id="topnavtoggle" v-model="layout.topNav"/>
				</div>
				<label class="flex column flex-center mleft-sm" for="topnavtoggle">Nav Links</label>
			</div>
		</transition>
		<!-- Side Bar -->
		<div class="mright-md mbottom-sm inline-flex">
			<div class="flex column flex-center">
				<input type="checkbox" class="toggle yes-no" id="sidebartoggle" v-model="layout.sideBar"/>
			</div>
			<label class="flex column flex-center mleft-sm" for="sidebartoggle">Sidebar</label>
		</div>

		<br/>

		<!-- Map Stuff -->
		<!-- Map -->
		<div class="mright-md mbottom-sm inline-flex">
			<div class="flex column flex-center">
				<input type="checkbox" class="toggle yes-no" id="maptoggle" v-model="layout.map"/>
			</div>
			<label class="flex column flex-center mleft-sm" for="maptoggle">Map</label>
		</div>
		<!-- Split Map -->
		<transition name="basic">
			<div class="mright-md mbottom-sm inline-flex" v-if="layout.map">
				<div class="flex column flex-center">
					<input type="checkbox" class="toggle yes-no" id="splitmaptoggle" v-model="layout.splitMap"/>
				</div>
				<label class="flex column flex-center mleft-sm" for="splitmaptoggle">Split Map</label>
			</div>
		</transition>
		<!-- Vertically -->
		<transition name="basic">
			<div class="mright-md mbottom-sm inline-flex" v-if="layout.map && layout.splitMap">
				<div class="flex column flex-center">
					<input type="checkbox" class="toggle yes-no" id="verttoggle" v-model="layout.splitVertical"/>
				</div>
				<label class="flex column flex-center mleft-sm" for="verttoggle">Vertically</label>
			</div>
		</transition>
		<!-- Split Percent -->
		<transition name="basic">
			<div class="field" v-if="layout.map && layout.splitMap">
				<label class="big" for="lt_split">Content %</label>
				<div class="flex gap">
					<div class="flex column flex-center">
						<input type="number" id="lt_split" min="15" max="85" step="1" v-model="layout.splitPercent" class="short"/>
					</div>
					<input type="range" max="85" min="15" step="1" v-model="layout.splitPercent" class="max-width-tiny" />
				</div>
			</div>
		</transition>





		<div id="layout1">

			<div id="usgsHeader" v-if="layout.usgsHeader">
				<img src="@/assets/branding/usgs-tagline.png" title="USGS Logo" alt="USGS Logo"/>
			</div>

			<header id="top" v-if="layout.topBar">
				<h1 class="app-title">App Title</h1>

				<nav id="topNav" v-if="layout.topNav">
					<a href="#">Home</a>
					<a href="#"><i class="fas fa-info-circle"></i> About</a>
					<a href="#"><i class="fas fa-arrow-right-from-bracket"></i></a>
				</nav>

			</header>

			<div id="appBody">

				<!-- Sidebar -->
				<div id="sidebar" v-if="layout.sideBar">
					sidebar.
				</div>

				<!-- Main Content Area -->
				<main id="content" :class="{ 'empty' : !layout.map && !layout.splitMap }">
					<div id="map" v-if="layout.map">map.</div>
					<div id="mapPanel" v-if="layout.map && layout.splitMap">content.</div>
					<span v-if="!layout.map && !layout.splitMap">content
						<br/><br/><br/>Hello<br/><br/><br/>Hello<br/><br/><br/>Hello<br/><br/><br/>Hello
						<br/><br/><br/>Hello<br/><br/><br/>Hello<br/><br/><br/>Hello<br/><br/><br/>Hello
						<br/><br/><br/>Hello<br/><br/><br/>Hello<br/><br/><br/>Hello<br/><br/><br/>Hello
						<br/><br/><br/>Hello<br/><br/><br/>Hello<br/><br/><br/>Hello<br/><br/><br/>Hello
						<br/><br/><br/>Hello<br/><br/><br/>Hello<br/><br/><br/>Hello<br/><br/><br/>Hello
						<br/><br/><br/>Hello
						<br/><br/><br/>Hello
						<br/><br/><br/>Hello
						.</span>
				</main>

			</div>

			<!-- Required USGS Footer -->
			<footer id="usgs" v-if="layout.usgsFooter">
				<a href="https://www.doi.gov/privacy" target="_blank">
					DOI Privacy Policy
				</a>
				<a href="https://usgs.gov/policies-and-notices" target="_blank">
					Legal
				</a>
				<a href="https://usgs.gov/accessibility-and-us-geological-survey" target="_blank">
					Accessibility
				</a>
				<a href="https://usgs.gov/sitemap" target="_blank">
					Site Map
				</a>
				<div></div>
				<a href="https://doi.gov" target="_blank">
					U.S. Department of the Interior
				</a>
				<a href="https://doioig.gov" target="_blank">
					DOI Inspector General
				</a>
				<a href="https://whitehouse.gov" target="_blank">
					White House
				</a>
				<a href="https://www.whitehouse.gov/omb/management/egov" target="_blank">
					E-Gov
				</a>
				<a href="https://www.doi.gov/pmb/eeo/no-fear-act" target="_blank">
					No Fear Act
				</a>
				<a href="https://www2.usgs.gov/foia" target="_blank">
					FOIA
				</a>
			</footer>



		</div>


		<!-- Output -->
		<h2 class="align-center margin-auto mtop-lg">Output</h2>
		<div id="outputArea">
			<div class="template-output">

				<!-- Copy to clipboard -->
				<button @click="copyBlock('layoutHTML')" class="button small transparent mtop-xs mleft-xs">
					<i class="far fa-copy"></i>
					<span>Copy to Clipboard</span>
				</button>

				<pre>
					<code id="layoutHTML">
<b>&lt;!-- Layout HTML --&gt;</b>
&lt;body&gt;<span v-if="layout.usgsHeader">

  &lt;!-- USGS Header --&gt;
  &lt;div id="usgsHeader"&gt;
    &lt;img src="/path/to/usgs-logo.png" title="USGS Logo" alt="USGS Logo"/&gt;
  &lt;/div&gt;</span><span v-if="layout.topBar">

  &lt;!-- Header -->
  &lt;header id="top"&gt;
    &lt;h1 class="app-title"&gt;App Title&lt;/h1&gt;<span v-if="layout.topNav">

    &lt;!-- Nav --&gt;
    &lt;nav id="topNav" v-if="layout.topNav"&gt;
      &lt;a href="#"&gt;Home&lt;/a&gt;
      &lt;a href="#"&gt;&lt;i class="fas fa-info-circle"&gt;&lt;/i&gt; About&lt;/a&gt;
      &lt;a href="#"&gt;&lt;i class="fas fa-arrow-right-from-bracket"&gt;&lt;/i&gt;&lt;/a&gt;
    &lt;/nav&gt;</span>
  &lt;/header&gt;</span>
  
  &lt;div id="appBody"&gt;
  <span v-if="layout.sideBar">
    &lt;!-- Sidebar --&gt;
    &lt;div id="sidebar"&gt;
      sidebar.
    &lt;/div&gt;
  </span>
    &lt;!-- Main Content Area --&gt;
    &lt;main id="content"&gt;
      <span v-if="layout.map">&lt;div id="map"&gt;map.&lt;/div&gt;</span>
      <span v-if="layout.map && layout.splitMap">&lt;div id="mapPanel"&gt;content.&lt;/div&gt;</span>
      <span v-if="!layout.map && !layout.splitmap">content.</span>
    &lt;/main&gt;
  &lt;/div&gt;
<span v-if="layout.usgsFooter">
  &lt;!-- Required USGS Footer --&gt;
  &lt;footer id="usgs" v-if="layout.usgsFooter"&gt;
    &lt;a href="https://www.doi.gov/privacy" target="_blank"&gt;DOI Privacy Policy&lt;/a&gt;
    &lt;a href="https://usgs.gov/policies-and-notices" target="_blank"&gt;Legal&lt;/a&gt;
    &lt;a href="https://usgs.gov/accessibility-and-us-geological-survey" target="_blank"&gt;Accessibility&lt;/a&gt;
    &lt;a href="https://usgs.gov/sitemap" target="_blank"&gt;Site Map&lt;/a&gt;
    &lt;div&gt;&lt;/div&gt;
    &lt;a href="https://doi.gov" target="_blank"&gt;U.S. Department of the Interior&lt;/a&gt;
    &lt;a href="https://doioig.gov" target="_blank"&gt;DOI Inspector General&lt;/a&gt;
    &lt;a href="https://whitehouse.gov" target="_blank"&gt;White House&lt;/a&gt;
    &lt;a href="https://www.whitehouse.gov/omb/management/egov" target="_blank"&gt;E-Gov&lt;/a&gt;
    &lt;a href="https://www.doi.gov/pmb/eeo/no-fear-act" target="_blank"&gt;No Fear Act&lt;/a&gt;
    &lt;a href="https://www2.usgs.gov/foia" target="_blank"&gt;FOIA&lt;/a&gt;
  &lt;/footer&gt;</span>

&lt;/body&gt;

					</code>
				</pre>
			</div>
			
			<div class="template-output">

				<!-- Copy to clipboard -->
				<button @click="copyBlock('layoutCSS')" class="button small transparent mtop-xs mleft-xs">
					<i class="far fa-copy"></i>
					<span>Copy to Clipboard</span>
				</button>

				<pre>
					<code id="layoutCSS">
<b>/* Layout CSS */</b>
body, html{
  margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100%;
  width: 100%;
  color: var(--text);
  height: 100%;
  max-height: 100%;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}
body{
  display: flex;
  flex-direction: column;
}
<span v-if="layout.usgsHeader">
/* Required USGS Header */
#usgsHeader{
  display: block;
  width: 100%;
  padding: 8px 15px;
  background-color: #00264C;
  height: fit-content;
}
#usgsHeader img{
  height: 42px;
  width: auto;
}</span>
<span v-if="layout.topBar">
/* Top bar */
header#top{
  width: 100%;
  background-color: black;
  display: flex;
  box-sizing: border-box;
  padding: 10px 0 10px 15px;
}
/* App title */
header#top .app-title{
  color: white;
  margin: 0;
  padding: 0;
  font-size: 18px;
  line-height: 20px;
}
<span v-if="layout.topNav">
/* Top Bar Navigation */
header#top nav#topNav{
  flex-grow: 3;
  display: flex;
  justify-content: flex-end;
  color: white;
  gap: 30px;
  font-size: 12px;
  margin-right: 15px;
}
/* Nav Links */
header#top nav#topNav a{
  line-height: 20px;
  color: white;
  white-space: nowrap;
}
header#top nav#topNav a i{
  padding: 0 5px;
}</span>
</span>
/* Main Body */
div#appBody{
  flex-grow: 3;
  width: 100%;
  overflow: auto;
  max-height: 100%;
  display: flex;
}
<span v-if="layout.sideBar">
/* Sidebar */
#sidebar{
  background-color: yellow;
  width: 300px;
}</span>
<span v-if="!layout.map">
/* Main Content */
main#content{
  background-color: seagreen;
  flex-grow: 3;
  overflow: auto;
  height: 100%;
  max-height: 100%;
}</span>
<span v-if="layout.map">
/* Main Content & Map */
main#content{
  background-color: seagreen;
  flex-grow: 3;
  display: flex;
  flex-direction: {{layout.splitVertical ? 'row' : 'column'}};
}
/* App Content */
#mapPanel{
  display: block;
  width: 100%;
  background-color: aqua;
  min-{{layout.splitVertical ? 'width' : 'height'}}: {{layout.splitPercent}}%;
  max-{{layout.splitVertical ? 'width' : 'height'}}: {{layout.splitPercent}}%;
}
/* Map */
#map{
  width: 100%;
  height: 100%;
  background-color: orange;
}</span>
<span v-if="layout.usgsFooter">
/* USGS Footer */
footer#usgs{
  box-sizing: border-box;
  padding: 6px 15px 8px 15px;
  color: white;
  background-color: #00264C;
  line-height: 13px;
}
footer#usgs a{
  font-size: 12px;
  color: white;
  text-decoration: none;
  padding-right: 10px;
  font-weight: 500;
  display: inline-block;
}
footer#usgs a:focus,
footer#usgs a:hover{
  text-decoration: underline;
}</span>
					</code>
				</pre>
			</div>

		</div>


		<!-- Place style in v-style to control variables -->
		<v-style>
			main#content{
				flex-direction: {{layout.splitVertical ? 'row' : 'column'}};
			}
			#mapPanel{
				min-{{layout.splitVertical ? 'width' : 'height'}}: {{layout.splitPercent}}%;
				max-{{layout.splitVertical ? 'width' : 'height'}}: {{layout.splitPercent}}%;
			}
		</v-style>

		


	</div>
</template>

<script>

export default {
	name: "templates",

	components: {
	},
	

	mixins: [
	],

	data() {
		return {
			layout: {
				usgsHeader: true,
				usgsFooter: true,
				topBar: true,
				topNav: true,
				sideBar: true,
				map: true,
				splitMap: false,
				splitVertical: false,
				splitPercent: 50,
			}
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

#layout1{
	width: 80vw;
	margin: 0 auto;
	height: 80vh;
	background-color: red;
	display: flex;
	flex-direction: column;
}
#usgsHeader{
	display: block;
	width: 100%;
	padding: 8px 15px;
	background-color: #00264C;
	height: fit-content;
}
#usgsHeader img{
	height: 42px;
	width: auto;
}
header#top{
	width: 100%;
	background-color: black;
	display: flex;
	box-sizing: border-box;
	padding: 10px 0 10px 15px;
}
header#top .app-title{
	color: white;
	margin: 0;
	padding: 0;
	font-size: 18px;
	line-height: 20px;
}
header#top nav#topNav{
	flex-grow: 3;
	display: flex;
	justify-content: flex-end;
	color: white;
	gap: 30px;
	font-size: 12px;
	margin-right: 15px;
}
header#top nav#topNav a{
	line-height: 20px;
	color: white;
	white-space: nowrap;
}
header#top nav#topNav a i{
	padding: 0 5px;
}
// Main Body
div#appBody{
	flex-grow: 3;
	width: 100%;
	overflow: auto;
	max-height: 100%;
	background-color: pink;
	display: flex;
}

// Sidebar 
#sidebar{
	background-color: yellow;
	width: 300px;

	display: flex;
	flex-direction: column;
	justify-content: center;
	text-align: center;
	font-size: 18px;
	font-weight: 600;
}


// Content
main#content{
	background-color: seagreen;
	flex-grow: 3;
	display: flex;

	&.empty{
		overflow: auto;
		height: 100%;
		max-height: 100%;
		display: block;
		display: flex;
		flex-direction: column;
		justify-content: center;
		text-align: center;
		font-size: 18px;
		font-weight: 600;
	}
}
// App Content
#mapPanel{
	display: block;
	width: 100%;
	background-color: aqua;

	display: flex;
	flex-direction: column;
	justify-content: center;
	text-align: center;
	font-size: 18px;
	font-weight: 600;
}
// Map
#map{
	width: 100%;
	height: 100%;

	background-color: orange;
	display: flex;
	text-align: center;
	flex-direction: column;
	justify-content: center;
	font-size: 18px;
	font-weight: 600;
}




// USGS Footer
footer#usgs{
	box-sizing: border-box;
	padding: 6px 15px 8px 15px;
	color: white;
	background-color: #00264C;
	line-height: 13px;
}
footer#usgs a{
	font-size: 12px;
	color: white;
	text-decoration: none;
	padding-right: 10px;
	font-weight: 500;
	display: inline-block;
}
footer#usgs a:focus,
footer#usgs a:hover{
	text-decoration: underline;
}



	#outputArea{
		display: flex;
		gap: 30px;
		justify-content: center;
		flex-wrap: wrap;
		margin-top: 20px;
		
		.template-output{
			background-color: var(--grey100);
			border-radius: var(--borderRadius);
			max-width: 500px;

		}
	}
</style>