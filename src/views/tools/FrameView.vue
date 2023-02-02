<!--
Frame.vue

Frame with conditional rendering to generate the HTML to download
-->

<template>
	<div ref="templateBody" id="templateBody" :class="{'fixed' : $route.name == 'frame-view'}">

		<div v-if="$route.name == 'frame-view'" id="gnControlBanner">

			<div class="mtop-xs">
				<router-link class="button invert" to="/frame">
					<i class="far fa-angle-left"></i>
					<span>Back</span>
				</router-link>
			</div>
			
			<!-- Test Mode -->
			<div class="flex">
				<label for="testingToggle" class="ptop-xs">
					Test Mode
				</label>
				<div class="mleft-sm">
					<input id="testingToggle" type="checkbox" class="toggle on-off small" v-model="frame.test_mode"/>
				</div>
			</div>
			
			<!-- USA Banner -->
			<div class="flex">
				<label for="usaBanToggle" class="ptop-xs">
					USA Banner
				</label>
				<div class="mleft-sm">
					<input id="usaBanToggle" type="checkbox" class="toggle on-off small" v-model="frame.usa_banner"/>
				</div>
			</div>

			<us-form-combobox
				name="SelectTheme"
				:options="['USGS', 'NPS', 'GeoPlatform', 'Blank']"
				v-model="frame.theme"
			/>

		</div>


		<div id="gnWrapper">

			<!-- Test Banner -->
			<div id="gnTest" v-if="frame.test_mode">
				<span>TEST</span>
				<span>TEST</span>
				<span>TEST</span>
				<span>TEST</span>
				<span>TEST</span>
				<span>TEST</span>
				<span>TEST</span>
				<span>TEST</span>
			</div>

			<!-- USA Banner -->
			<div id="gnUSABar" v-if="frame.usa_banner">

				<v-script>
					var toggleUSABar = function(){
						document.getElementById('gnUSABarTitle').classList.toggle('opened');
						const toggle = document.getElementById('gnUSABarCollapse');
						toggle.classList.toggle('visible');
					}
				</v-script>

				<div id="gnUSABarTitle" class="">
					<img class="usa-banner__header-flag" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALBAMAAACEzBAKAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAbUExURR4zsf///9o+Hx0zsR40sts/H9s+H9s/IOBAIFBguAAAAABTSURBVAjXYzBhMDBpUlNVYmBkZHQQBAIGBgcGhqIkpSAGZwFhEbCIM4OBQ5lqUBJIDQtYxMDAgDkoSEmJQRAKGJTUg5RUVYG64CJJQWWp6UpKRQBnaA1UIkIRIgAAAABJRU5ErkJggg==" alt="U.S. flag" />
					<span>An official website of the United States Government</span>
					<button onclick="toggleUSABar()">
						Here's how you know 
						<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" role="img" focusable="false">
							<path d="m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"/>
						</svg>
					</button>
				</div>
				<!-- Collapse Section -->
				<div id="gnUSABarCollapse">
					<div class="usaBar__section">
						<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 64 64" role="img" focusable="false">
							<title>icon-dot-gov</title>
							<path fill="#2378C3" fill-rule="evenodd" d="M32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0zm0 1.208C14.994 1.208 1.208 14.994 1.208 32S14.994 62.792 32 62.792 62.792 49.006 62.792 32 49.006 1.208 32 1.208zm10.59 38.858a.857.857 0 0 1 .882.822v1.642H18.886v-1.642a.857.857 0 0 1 .882-.822H42.59zM25.443 27.774v9.829h1.642v-9.83h3.273v9.83H32v-9.83h3.272v9.83h1.643v-9.83h3.272v9.83h.76a.857.857 0 0 1 .882.821v.821h-21.3v-.809a.857.857 0 0 1 .88-.82h.762v-9.842h3.272zm5.736-8.188l12.293 4.915v1.642h-1.63a.857.857 0 0 1-.882.822H21.41a.857.857 0 0 1-.882-.822h-1.642v-1.642l12.293-4.915z"/>						
						</svg> 
						<p>
							<strong>Official websites use .gov</strong><br />
							A <strong>.gov</strong> website belongs to an official government organization in the United States.
						</p>
					</div>
					<div class="usaBar__section">
						<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 64 64" role="img" focusable="false">
							<title>icon-https</title>
							<path fill="#719F2A" fill-rule="evenodd" d="M32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0zm0 1.208C14.994 1.208 1.208 14.994 1.208 32S14.994 62.792 32 62.792 62.792 49.006 62.792 32 49.006 1.208 32 1.208zm0 18.886a7.245 7.245 0 0 1 7.245 7.245v3.103h.52c.86 0 1.557.698 1.557 1.558v9.322c0 .86-.697 1.558-1.557 1.558h-15.53c-.86 0-1.557-.697-1.557-1.558V32c0-.86.697-1.558 1.557-1.558h.52V27.34A7.245 7.245 0 0 1 32 20.094zm0 3.103a4.142 4.142 0 0 0-4.142 4.142v3.103h8.284V27.34A4.142 4.142 0 0 0 32 23.197z"/>
						</svg> 
						<p>
							<strong>Secure .gov websites use HTTPS</strong><br />A
							<strong>lock</strong> (
							<span class="icon-lock">
								<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 52 64" role="img" focusable="false">
									<title id="banner-lock-title-default">Lock</title>
									<desc id="banner-lock-description-default">A locked padlock</desc>
									<path fill="#000000" fill-rule="evenodd" d="M26 0c10.493 0 19 8.507 19 19v9h3a4 4 0 0 1 4 4v28a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V32a4 4 0 0 1 4-4h3v-9C7 8.507 15.507 0 26 0zm0 8c-5.979 0-10.843 4.77-10.996 10.712L15 19v9h22v-9c0-6.075-4.925-11-11-11z" />
								</svg> 
							</span>
							) or <strong>https://</strong> means you’ve safely connected to
							the .gov website. Share sensitive information only on official,
							secure websites.
						</p>
					</div>
				</div>
			</div>


			<!-- Banner/Header -->
			<div id="gnHeader" :class="frame.theme" v-if="!frame.esri_header && frame.theme != 'Blank'">

				<a :href="templates[frame.theme].url" target="_blank" :alt="templates[frame.theme].link_alt" :title="templates[frame.theme].link_title">
					<img id="gnLogo" :class="frame.theme" :src="images[frame.theme].logo"/>
				</a>
				<!-- Text Title -->
				<span id="gnHeaderTitle" v-if="templates[frame.theme].header_title">{{templates[frame.theme].header_title}}</span>
			</div>




			<iframe :src="frame.url"></iframe>

			<!-- Footer -->
			<footer id="gnFooter" :class="frame.theme" v-if="frame.theme != 'Blank'">
				<span v-for="(link, key) in templates[frame.theme].footerLinks" :key="key" :class="{'block' : link.gap }">
					<a :href="link.url" target="_blank" v-if="link.url">
						{{link.title}}
					</a>
				</span>
			</footer>


			<!-- Frame Styles -->
			<v-style>

				body,html{
					padding: 0;
					<!-- overflow: hidden; -->
					margin: 0;
					height: 100%;
					font-family:  -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
					scrollbar-width: none;
				}
				body::-webkit-scrollbar,
				html::-webkit-scrollbar{
					width: 0px;
					display: none;
				}
				body::-webkit-scrollbar-thumb,
				html::-webkit-scrollbar-thumb{
					display: none;
					width: 0px;
				}
				<!-- App Wrapper -->
				#gnWrapper{
					display: flex;
					flex-direction: column;
					overflow: hidden;
					width: 100%;
					height: 100%;
				}
				<!-- Test Banner -->
				#gnTest{
					background-color: #face00;
					width: 100%;
					font-size: 18px;
					font-weight: bolder;
					display: flex;
					justify-content: space-around;
					padding: 5px;
					font-style: italic;
				}
				<!-- USA Bar -->
				#gnUSABar{
					display: block;
					background-color: #f0f0f0;
					color: black;
				}
				#gnUSABarTitle {
					box-sizing: border-box;
					padding: 2px 15px 4px 15px;
					font-size: .75rem;
				}
					#gnUSABarTitle img{
						height: 11px;
						position: relative;
						top: 2px;
						width: auto;
						vertical-align: middle;
						margin-right: 10px;
					}
					#gnUSABarTitle span{
						vertical-align: middle;
					}
					#gnUSABarTitle button{
						background-color: transparent;
						vertical-align: middle;
						padding: 0;
						border: none;
						margin-left: 10px;
						color: #005ea2;
						font-size: .75rem;
						text-decoration: underline;
					}
					#gnUSABarTitle button:hover,
					#gnUSABarTitle button:focus{
						color: #00365F;
						cursor: pointer;
					}
					#gnUSABarTitle button svg{
						fill: #2491ff;
						transform: rotate(180deg);
						float: right;
					}
					#gnUSABarTitle.opened button svg{
						transform: rotate(0deg);
					}

					<!-- Collapse -->
					#gnUSABarCollapse{
						display: flex;
						flex-wrap: wrap;
						box-sizing: border-box;
						padding: 25px;
						gap: 25px;
						display: none;
					}
					#gnUSABarCollapse.visible{
						display: flex;
					}
					.usaBar__section{
						display: flex;
						gap: 10px;
					}
					.usaBar__section img,
					.usaBar__section svg{
						height: 40px;
						width: 40px;
						vertical-align: top;
					}
					.usaBar__section p{
						max-width: 380px;
						font-size: 0.95rem;
						line-height: 1.5rem;
						vertical-align: top;
						padding: 0;
					}
						.usaBar__section p .icon-lock svg{
							margin: 0;
							height: 14px;
							width: auto;
							position: relative;
							top: 4px;
						}
						.usaBar__section p strong{
							font-weight: 800;
						}
				<!-- Header -->
				#gnHeader{
					box-sizing: border-box;
					padding: 6px 25px 6px 25px;
					display: flex;
					border-bottom: 2px solid {{templates[frame.theme].borderColor}};
					border-top: 2px solid {{templates[frame.theme].borderColor}};
					background-color: {{templates[frame.theme].backgroundColor}};
				}
				#gnLogo{
					display: block;
					width: auto;
				}
				#gnLogo.USGS{
					height: 50px;
				}
				#gnLogo.GeoPlatform{
					height: 32px;
				}
				#gnLogo.NPS{
					height: 30px;
				}
				#gnHeaderTitle{
					color: white;
					font-size: 16px;
					display: flex;
					letter-spacing: 0.5px;
					flex-direction: column;
					justify-content: center;
					line-height: 16px;
					padding-left: 10px;
					font-weight: 700;
					padding-bottom: 2px;
				}
				<!-- iFrame -->
				iframe{
					height: 100%;
					width: 100%;
					flex-grow: 3;
					background-color: black;
					border: none;
				}
					iframe body{
						overflow-x: hidden;
					}
				#gnFooter{
					box-sizing: border-box;
					padding: 2px 25px 4px 25px;
					color: white;
					border-bottom: 2px solid {{templates[frame.theme].borderColor}};
					border-top: 2px solid {{templates[frame.theme].borderColor}};
					background-color: {{templates[frame.theme].backgroundColor}};
				}
					#gnFooter .block{
						display: block;
					}
					#gnFooter a{
						font-size: 12px;
						color: white;
						text-decoration: none;
						padding-right: 10px;
						display: inline-block;
					}
					#gnFooter a:focus,
					#gnFooter a:hover{
						text-decoration: underline;
					}
			</v-style>


		</div>
	</div>
</template>

<script>
const templateDefinitions = require("@/definitions/templates.js");
const imageDefinitions = require("@/definitions/images_base64.js");

export default {
	name: "frame",

	components: {
	},

	mixins: [
	],

	props: [
		"data",
		"getHTML",
	],

	data() {
		return {

			templates: templateDefinitions.all,
			images: imageDefinitions.all,

			// Default
			default: {
				url: "https://storymaps.arcgis.com/stories/3705e338dce2422eaf60b3f85a9197f6",
				title: "Demo",
				theme: "USGS",

				date: this.$date().format("YYYY-MM-DD"),
				person: "Demo Person",
				email: "Demoemail@Email.com",

				meta_description: "Demo Description",
				analytics_id: "AnalyticsID",

				// Other Options
				esri_header: false,
				test_mode: false,
			}
		};
	},

	computed: {
		frame(){
			if(this.data){
				return this.data;
			}else{
				return this.default;
			}
		}

	},

	watch: {
		getHTML(){
			var string = this.$refs.templateBody.innerHTML;
			this.$emit("export", string);
		}
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


// If Default header, remove header bars, append ?header to storymap url
		// if(useDefaultHeader){
		// 	console.log("Use Default Header");
		// 	$("div[id=gnHeader]").remove();

		// 	// Append ?header to the URL if it doesnt exist
		// 	if(!storymapURL.endsWith("?header")){
		// 		storymapURL = storymapURL + "?header"
		// 	}
		// }else{
		// 	console.log("Template Header");
		// }

</script>


<style lang="scss">

	#templateBody{
		box-sizing: border-box;
		height: 100%;

		&.fixed{
			position: fixed;
			top: 70px;
			left: 0;
			height: 95vh;
			height: calc(100vh - 70px);
			width: 100vw;
		}



		#gnWrapper{
			min-height: 90vh;
			min-height: calc(100vh - 70px);
		}
	}
	#gnControlBanner{
		display: flex;
		justify-content: space-between;
		gap: 5%;
		box-sizing: border-box;
		padding: 15px 15px;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		border-bottom: 1px solid var(--border);
		height: 70px;
		z-index: 50;
		background-color: var(--grey100);
	}

</style>