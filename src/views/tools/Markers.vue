<!--
Markers.vue
Create custom map markers
-->

<template>
	<div class="mtop-md">


		<div id="markerGenerator">

			<!-- Left side, form -->
			<div id="markerGeneratorOptions">

				<div class="marker-form-group">

					<h3>Marker Options</h3>

					<section>

						<!-- Shape -->
						<label class="big">Shape</label>
						<div class="shape-picker">
							<button v-for="(shape, key) in shapes" :key="key" @click="marker.shape = shape" :class="{'active': marker.shape == shape}" :id="shape">
								<i :class="'fas fa-' + shape"></i>
							</button>
						</div>

						<!-- Size -->
						<div class="field mtop-xs">
							<label class="big" for="mk_size">Size</label>
							<div class="flex gap">
								<div class="flex column flex-center">
									<input type="number" id="mk_size" min="1" max="120" step="1" v-model="marker.size" class="short"/>
								</div>
								<input type="range" max="120" min="1" step="1" v-model="marker.size" />
							</div>
						</div>


						<!-- Background Color -->
						<div class="field mtop-xs">
							<label class="big" for="mk_brdcol">Marker Color</label>
							<div class="flex gap">
								<div class="flex column flex-center">
									<input type="color" id="mk_bg" v-model="marker.background"/>
								</div>
								<input type="text" placeholder="#000000" class="mtop-xxs" id="mk_bg2" v-model="marker.background"/>
							</div>
						</div>

					</section>
				</div>



				<div class="marker-form-group">
					<!-- Border -->
					<h3 class="flex flex-between">
						Border
						<input type="checkbox" class="toggle on-off mright-xs" id="mk_brd" :checked="marker.border == true" @click="marker.border = !marker.border" />
					</h3>

					<transition-group name="basic">
						<section :class="{'disabled' : !marker.border }" v-if="marker.shape != 'triangle'" key="1">

							<!-- Border Color -->
							<div class="field">
								<label class="big" for="mk_brdcol">Border Color</label>
								<div class="flex gap">
									<div class="flex column flex-center">
										<input type="color" id="mk_brdcol" v-model="marker.borderColor" :disabled="!marker.border"/>
									</div>
									<input type="text" placeholder="#000000" class="mtop-xxs" id="mk_brdcol2" v-model="marker.borderColor" :disabled="!marker.border"/>
								</div>
							</div>

							<!-- Border thickness -->
							<div class="field mtop-xs">
								<label class="big" for="mk_brdwt">Border Weight</label>
								<div class="flex gap">
									<div class="flex column flex-center">
										<input type="number" id="mk_brdwt" min="1" :max="marker.size / 2" step="1" v-model="marker.borderWeight" class="short" :disabled="!marker.border"/>
									</div>
									<input type="range" :max="marker.size / 2" min="0" step="1" v-model="marker.borderWeight" :disabled="!marker.border"/>
								</div>
							</div>

							<!-- Border Style -->
							<div class="field mtop-xs">
								<label class="big" for="mk_brdwt">Border Style</label>
								<div class="flex gap">
									<select v-model="marker.borderStyle" :disabled="!marker.border" id="mk_brdwt">
										<option v-for="(style, key) in borderStyles" :key="key" class="capitalize" :value="style">
											{{style}}
										</option>
									</select>
								</div>
							</div>
							<!-- Border Radius -->
							<transition name="basic">
								<div class="field mtop-xs" v-if="marker.shape == 'square' || marker.shape == 'diamond'">
									<label class="big" for="mk_brrd">Border Radius</label>
									<div class="flex gap">
										<div class="flex column flex-center">
											<input type="number" id="mk_brrd" min="1" :max="marker.size / 2" step="1" v-model="marker.borderRadius" class="short" :disabled="!marker.border || marker.shape == 'circle' || marker.shape == 'map-marker' || marker.shape == 'triangle'"/>
										</div>
										<input type="range" :max="marker.size / 2" min="0" step="1" v-model="marker.borderRadius" :disabled="!marker.border || marker.shape == 'circle' || marker.shape == 'map-marker' || marker.shape == 'triangle'"/>
									</div>
								</div>
							</transition>

						</section>

						<section key="2" v-if="marker.shape == 'triangle'">
							<p class="small">
								<b>
									Borders are not supported for the Triangle marker shape.
								</b>
							</p>
							<p class="small">
								You can select the triangle icon, and resize it to look like a border, though.
							</p>
						</section>
					</transition-group>
				</div>

				

				<div class="marker-form-group">
					<!-- Shadow -->
					<h3 class="flex flex-between">
						Shadow
						<input type="checkbox" class="toggle on-off mright-xs" id="mk_shad" :checked="marker.shadow == true" @click="marker.shadow = !marker.shadow" />
					</h3>

					<!-- Shadow controls -->
					<transition-group name="basic">
						<section :class="{'disabled' : !marker.shadow }" v-if="marker.shape != 'triangle'" key="1">

							<!-- Shadow color -->
							<div class="field">
								<label class="big" for="mk_shdcol">Shadow Color</label>
								<div class="flex gap">
									<div class="flex column flex-center">
										<input type="color" id="mk_shdcol" v-model="marker.shadowColor" :disabled="!marker.shadow"/>
									</div>
									<input type="text" placeholder="rgba(0,0,0,0.35)" class="mtop-xxs" id="mk_shdcol2" v-model="marker.shadowColor" :disabled="!marker.shadow"/>
								</div>

							</div>
							<!-- Shadow X -->
							<div class="field mtop-xs">
								<label class="big" for="shd_x">X Placement</label>
								<input type="range" max="50" min="-50" step="1" v-model="marker.shadowX" id="shd_x" :disabled="!marker.shadow"/>
							</div>
							<!-- Shadow Y -->
							<div class="field">
								<label class="big" for="shd_y">Y Placement</label>
								<input type="range" max="50" min="-50" step="1" v-model="marker.shadowY" id="shd_y" :disabled="!marker.shadow"/>
							</div>
							<!-- Shadow Spread -->
							<div class="field">
								<label class="big" for="shd_spread">Shadow Spread</label>
								<input type="range" max="50" min="-50" step="1" v-model="marker.shadowSpread" id="shd_spread" :disabled="!marker.shadow"/>
							</div>
							<!-- Shadow Blur -->
							<div class="field">
								<label class="big" for="shd_blur">Shadow Blur</label>
								<input type="range" max="50" min="0" step="1" v-model="marker.shadowBlur" id="shd_blur" :disabled="!marker.shadow"/>
							</div>

							<!-- Default shadow -->
							<div class="flex flex-end">
								<button class="button invert small mtop-sm" @click="resetShadow" :disabled="!marker.shadow">
									<i class="far fa-rotate-left"></i>
									<span>Reset Shadow</span>
								</button>
							</div>


						</section>
						<section key="2" v-if="marker.shape == 'triangle'">
							<p class="small">
								<b>Shadows are not supported for the Triangle marker shape.</b>
							</p>
						</section>
					</transition-group>
				</div>




				<div class="marker-form-group">
					<!-- Icon -->
					<h3 class="flex flex-between">
						Icon
						<input type="checkbox" class="toggle on-off mright-xs" id="mk_icon" :checked="marker.icon == true" @click="marker.icon = !marker.icon" />
					</h3>

					<!-- Shadow controls -->
					<transition name="basic">
						<section :class="{'disabled' : !marker.icon }">

							<!-- Icon Shape -->
							<div class="shape-picker icon">
								<button v-for="(shape, key) in shapes" :key="key" @click="marker.iconShape = shape; marker.iconCharacter = ''" :class="{'active-icon': marker.iconShape == shape}" :id="shape"  :disabled="!marker.icon">
									<i :class="'fas fa-' + shape"></i>
								</button>
							</div>

							<!-- Icon Character -->
							<div class="field mtop-xs">
								<label class="small" for="ic_col">Or your own character</label>
								<input type="text" placeholder="3" maxlength="3" id="ic_char" v-model="marker.iconCharacter" :disabled="!marker.icon" @input="marker.iconShape = 'character'"/>
							</div>
							<p class="tiny no-padding">
								One character. Emojis also work.
							</p>

							<!-- Icon Size -->
							<div class="field mtop-sm">
								<label class="big" for="ic_size">Icon Size</label>
								<div class="flex gap">
									<div class="flex column flex-center">
										<input type="number" id="ic_size" min="1" :max="marker.size" step="1" v-model="marker.iconSize" class="short" :disabled="!marker.icon"/>
									</div>
									<input type="range" :max="marker.size" min="1" step="1" v-model="marker.iconSize"  :disabled="!marker.icon" />
								</div>
							</div>


							<!-- Icon Color -->
							<div class="field mtop-xs">
								<label class="big" for="ic_col">Icon Color</label>
								<div class="flex gap">
									<div class="flex column flex-center">
										<input type="color" id="ic_col" v-model="marker.iconColor" :disabled="!marker.icon"/>
									</div>
									<input type="text" placeholder="#000000" class="mtop-xxs" id="ic_col2" v-model="marker.iconColor" :disabled="!marker.icon"/>
								</div>
							</div>

						</section>
					</transition>
				</div>

				<div class="marker-form-group">
					<!-- Animation -->
					<h3 class="flex flex-between">
						Animation
						<input type="checkbox" class="toggle on-off mright-xs" id="mk_animation" :checked="marker.animated == true" @click="marker.animated = !marker.animated" />
					</h3>

					<!-- Animation controls -->
					<section :class="{'disabled' : !marker.animated }" key="1">

						<div class="field-horizontal mtop-xs">
							<input type="radio" class="radio mright-xs" id="mk_anpulse" :checked="marker.animation == 'pulse'" @click="marker.animation = 'pulse'" />
							<label for="mk_anpulse">Pulse</label>
						</div>
						<div class="field-horizontal mtop-xs">
							<input type="radio" class="radio mright-xs" id="mk_anbounce" :checked="marker.animation == 'bounce'" @click="marker.animation = 'bounce'" />
							<label for="mk_anhover">Bounce</label>
						</div>

					</section>

				
				</div>
				

				<div id="markerInstructions" class="mtop-lg">
					<h2 class="flex flex-between">
						How to use with Leaflet
					</h2>
					<p>
						First, click the button below the map to view marker CSS. Copy all of the CSS and add it to your project.
					</p> 
					<p class="no-padding">
						Once the CSS is in your project, use the Leafleft DivIcon feature to use your custom marker.
					</p> 
					<pre class="mtop-sm"><code>
	var mapIcon = L.divIcon({className: '<b>{{markerClassName}}</b>'});
	var marker = L.marker(&lt;Coords&gt;, {icon: mapIcon});
	map.addLayer(marker);
				</code></pre>


				</div>




			</div>

			<div id="markerGeneratorMap">
				<!-- Map - right side, bottom on mobile -->
				<div id="map"></div>

				<div id="outputArea">
					<div class="field mbottom-sm">
						<label for="mc_clnm">
							Icon CSS Class Name
						</label>
						<input type="text" v-model="markerClassName" id="mc_clnm"/>
					</div>

					<button class="button" @click="showOutputModal = true">
						Show output
					</button>

					<!-- Output Modal -->
							<!-- Promote to admin modal -->
					<Modal
						title="Marker CSS"
						confirmText="Copy To Clipboard"
						dismissText="Close"
						confirmIcon="far fa-copy"
						:show="showOutputModal"
						@confirmed="copyBlock('markerCSS');"
						@dismissed="showOutputModal = false;">


						<div id="output">

							<pre>
								<code id="markerCSS">
<b>/* Marker CSS */</b>
.{{markerClassName}}{
  position: relative;
}
.{{markerClassName}}:after {
  content: '';
  overflow: visible;
  display: block;
  transition: 0.1s;
  margin: 0 auto;
  box-sizing: border-box;
  position: relative;
  transform-origin: 50% 50%;
  margin-left: 5.5px;
  <span v-if="marker.shape == 'triangle'">
  border-left: {{marker.size}}px solid transparent;
  border-right: {{marker.size}}px solid transparent;
  border-bottom: {{marker.size * 1.75}}px solid {{marker.background}};
  background-color: transparent;
  left: -{{marker.size}}px;
  top: -{{marker.size}}px;
  height: 0;
  width: 0;</span><span v-else>left: -{{marker.size / 2}}px;
  top: -{{marker.size / 2}}px;
  background-color: {{marker.background}};
  width: {{marker.size}}px;
  height: {{marker.size}}px;</span>
  <span v-if="marker.shape=='circle'">border-radius: 50%;</span>
  <span v-if="marker.shape=='map-marker'">top: -{{marker.size * 1.1}}px;
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  border-bottom-right-radius: 50%;
  transform: rotate(-45deg);</span>
  <span v-if="marker.shape=='diamond'">transform: rotate(-45deg);</span>
<span v-if="marker.border && marker.shape != 'triangle'">  /* Border */
  border: {{marker.borderWeight}}px {{marker.borderStyle}} {{marker.borderColor}};</span>
<span v-if="marker.border && marker.shape == 'square' || marker.shape == 'diamond'">  /* Border Radius */
  border-radius: {{marker.borderRadius}}px;</span>
<span v-if="marker.border && marker.shape != 'triangle'">
  /* Shadow */
  box-shadow: {{marker.shadowX}}px {{marker.shadowY}}px {{marker.shadowBlur}}px {{marker.shadowSpread}}px {{marker.shadowColor}};</span>
}
<span v-if="marker.icon">
<b>/* Icon */</b>
.{{markerClassName}}:before {
  <span  v-if="marker.iconShape != 'triangle'">font-size: {{marker.iconSize - 2}}px;
  color: {{marker.iconColor}};
  line-height: {{marker.iconSize - 2}}px;
  font-weight: 600;
  text-align: center;
  height: {{marker.iconSize}}px;
  width: {{marker.iconSize}}px;
  <span v-if="marker.shape == 'map-marker'">top: -{{(marker.size / 1.65) + (marker.iconSize / 2)}}px;</span>
  <span v-if="marker.shape != 'map-marker'">top: -{{marker.iconSize / 2}}px;</span>
  left: -{{marker.iconSize / 2}}px;</span>
  <span v-if="marker.iconShape == 'triangle'">border-left: {{marker.iconSize}}px solid transparent;
  border-right: {{marker.iconSize}}px solid transparent;
  border-bottom: {{marker.iconSize * 1.75}}px solid {{marker.iconColor}};
  background-color: transparent;
  left: -{{marker.iconSize}}px;
  top: -{{marker.iconSize}}px;
  <span v-if="marker.shape == 'map-marker'">top: -{{(marker.size / 1.35) + (marker.iconSize / 2)}}px</span>
  height: 0;
  width: 0;</span>
  margin-left: 5.5px;
  z-index: 1;
  position: absolute;
  content: "{{marker.iconCharacter || ' '}}";
  <span v-if="!marker.iconCharacter">background-color: {{marker.iconColor}};</span>
  <span v-if="marker.iconShape == 'circle'">border-radius: 50%;</span><span v-if="marker.iconShape == 'diamond'">transform: rotate(-45deg);</span><span v-if="marker.iconShape == 'triangle' && marker.shape == 'triangle'">margin-top: {{marker.size / 2.5}}%;</span><span v-if="marker.iconShape == 'triangle' && marker.shape == 'map-marker'">top: -{{(marker.size / 1.3) + (marker.iconSize / 2)}}px;</span>
}
<span v-if="marker.animated">
/* Animations */
.myicon:before,
.myicon:after{
  animation: marker-{{marker.animation}} 2s ease-in-out 0s infinite normal none;
  transform-origin: 50% 50%;
}<span v-if="marker.animation == 'pulse'">
@keyframes marker-pulse {
  0% {
    transform: scale(1)<span v-if="marker.shape == 'diamond' || marker.shape == 'map-marker'"> rotate(-45deg)</span>;
    transform-origin: center center;
  }
  50% {
    transform: scale(1.3)<span v-if="marker.shape == 'diamond' || marker.shape == 'map-marker'"> rotate(-45deg)</span>;
  }
  10% {
    transform-origin: center center;
    transform: scale(1)<span v-if="marker.shape == 'diamond' || marker.shape == 'map-marker'"> rotate(-45deg)</span>;
  }
}</span><span v-if="marker.animation == 'bounce'">
@keyframes marker-bounce {
  0% {
    transform: translateY(0)<span v-if="marker.shape == 'diamond' || marker.shape == 'map-marker'"> rotate(-45deg)</span>;
  }
  50% {
    transform: translateY(-10px)<span v-if="marker.shape == 'diamond' || marker.shape == 'map-marker'"> rotate(-45deg)</span>;
  }
  10% {
    transform: translateY(0)<span v-if="marker.shape == 'diamond' || marker.shape == 'map-marker'"> rotate(-45deg)</span>;
  }
}</span>
</span>
</span>

								</code>
							</pre>
						</div>


					</Modal>




				</div>
			</div>

		</div>

		


		<!-- Custom Pin Styles - reactive in v-style -->
		<v-style>

			.myicon{
				position: relative;
			}

			.myicon:after {
				content: '';
				overflow: visible;
				display: block;
				transition: 0.1s;
				margin: 0 auto;
				box-sizing: border-box;
				width: {{marker.size}}px;
				height: {{marker.size}}px;
				position: relative;
				left: -{{marker.size / 2}}px;
				top: -{{marker.size / 2}}px;
				background-color: {{marker.background}};
				transform-origin: 50% 50%;
  				margin-left: 5.5px;
			}

		</v-style>

		<!-- Shapes -->
		<!-- Circle -->
		<v-style v-if="marker.shape == 'circle'">
			.myicon:after{
				border-radius: 50%;
			}
		</v-style>
		<!-- Marker -->
		<v-style v-if="marker.shape == 'map-marker'">
			.myicon:after{
				border-top-left-radius: 50%;
				border-top-right-radius: 50%;
				border-bottom-right-radius: 50%;
				transform: rotate(-45deg);

				<!-- Shift so point of pin is on marker -->
				top: -{{marker.size * 1.1}}px;
			}
		</v-style>
		<!-- Square -->
		<v-style v-if="marker.shape == 'square'">
			.myicon:after{
			}
		</v-style>
		<!-- Diamond -->
		<v-style v-if="marker.shape == 'diamond'">
			.myicon:after{
				transform: rotate(-45deg);
			}
		</v-style>
		<!-- Triangle -->
		<v-style v-if="marker.shape == 'triangle'">
			.myicon:after{
				border-left: {{marker.size}}px solid transparent;
				border-right: {{marker.size}}px solid transparent;
				border-bottom: {{marker.size * 1.75}}px solid {{marker.background}};
				background-color: transparent;
				left: -{{marker.size}}px;
				top: -{{marker.size}}px;
				height: 0;
				width: 0;
				<!-- top: -{{marker.size * 1.15}}px; -->
			}
		</v-style>


		<!-- Border -->
		<v-style v-if="marker.border == true && marker.shape != 'triangle'">
			.myicon:after{
				border: {{marker.borderWeight}}px {{marker.borderStyle}} {{marker.borderColor}};
			}
		</v-style>
		<!-- Border-radius -->
		<v-style v-if="marker.border == true && marker.shape != 'triangle' && marker.shape != 'map-marker' && marker.shape != 'circle'">
			.myicon:after{
				border-radius: {{marker.borderRadius}}px;
			}
		</v-style>


		<!-- Shadow -->
		<v-style v-if="marker.shadow == true && marker.shape != 'triangle'">
			.myicon:after{
				box-shadow: {{marker.shadowX}}px {{marker.shadowY}}px {{marker.shadowBlur}}px {{marker.shadowSpread}}px {{marker.shadowColor}};
			}
		</v-style>

		<!-- Icon -->
		<v-style v-if="marker.icon == true">
			.myicon:before {
				z-index: 1;
				position: absolute;
				content: "{{marker.iconCharacter || ' '}}";
				height: {{marker.iconSize}}px;
				width: {{marker.iconSize}}px;
				left: -{{marker.iconSize / 2}}px;
				top: -{{marker.iconSize / 2}}px;
				font-size: {{marker.iconSize - 2}}px;
				color: {{marker.iconColor}};
				line-height: {{marker.iconSize - 2}}px;
				font-weight: 600;
				text-align: center;
  				margin-left: 6px;
			}
		</v-style>
		<v-style v-if="!marker.iconCharacter">
			.myicon:before {
				background-color: {{marker.iconColor}};
			}
		</v-style>
		<!-- Adjust position when marker shape is selected -->
		<v-style v-if="marker.shape == 'map-marker'">
			.myicon:before {
				top: -{{(marker.size / 1.65) + (marker.iconSize / 2)}}px
			}
		</v-style>
		<!-- Adjust position when triangle marker shape is selected -->
		<v-style v-if="marker.shape == 'triangle' && marker.iconShape != 'triangle'" >
			.myicon:before {
				<!-- margin-top:  {{marker.size/5}}px; -->
				margin-top: {{marker.size * 1.5}}%;
			}
		</v-style>
		<!-- Circle -->
		<v-style v-if="marker.icon == true && marker.iconShape == 'circle'">
			.myicon:before {
				border-radius: 50%;
			}
		</v-style>
		<!-- Triangle -->
		<v-style v-if="marker.icon == true && marker.iconShape == 'triangle'">
			.myicon:before {
				 border-left: {{marker.iconSize}}px solid transparent;
				border-right: {{marker.iconSize}}px solid transparent;
				border-bottom: {{marker.iconSize * 1.75}}px solid {{marker.iconColor}};
				background-color: transparent;
				left: -{{marker.iconSize}}px;
				top: -{{marker.iconSize}}px;
				height: 0;
				width: 0;
			}
		</v-style>
		<v-style v-if="marker.shape == 'map-marker' && marker.iconShape == 'triangle'">
			.myicon:before {
				top: -{{(marker.size / 1.35) + (marker.iconSize / 2)}}px
			}
		</v-style>
		<v-style v-if="marker.shape == 'triangle' && marker.iconShape == 'triangle'">
			.myicon:before {
				margin-top: {{marker.size / 2.5}}%;
			}
		</v-style>
		<!-- Diamond -->
		<v-style v-if="marker.icon == true && marker.iconShape == 'diamond'">
			.myicon:before {
				transform: rotate(-45deg);
			}
		</v-style>


		<!-- Animations -->
		<v-style v-if="marker.animated">
			.myicon:before,
			.myicon:after{
				animation: marker-{{marker.animation}}{{marker.shape == 'map-marker' || marker.shape == 'diamond' ? '-rotate' : ''}} 2s ease-in-out 0s infinite normal none;
				transform-origin: 50% 50%;
			}
		</v-style>



	</div>
</template>

<script>

import Modal from "@/components/ui/Modals/Modal";

export default {
	name: "icons",

	components: {
		Modal,
	},
	

	mixins: [
	],

	data() {
		return {
			markerClassName: "myicon",

			showOutputModal: false,

			marker: {
				size: 50,
				shape: "map-marker",
				background: "#ff3c46",

				border: true,
				borderWeight: 3,
				borderColor: "#000000",
				borderStyle: "solid",
				borderRadius: 0,

				shadow: true,
				shadowColor: "rgba(0,0,0,0.35)",
				shadowX: 0,
				shadowY: 0,
				shadowBlur: 10,
				shadowSpread: 0,

				icon: true,
				iconShape: "circle",
				iconSize: 20,
				iconColor: "#F0F2F5",
				iconCharacter: "",

				animated: false,
				animation: "pulse",
			},

			shapes: [ "map-marker", "circle", "square", "diamond", "triangle" ],
			borderStyles: [ "solid", "dotted", "dashed", "double" ],
		};

	},

	computed: {


	},

	watch: {
	},

	mounted() {

		// Map Setup
		var mainMap = L.map("map").setView([43.092533,-89.5324482], 17);
		L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
			attribution: "",
			maxZoom: 18,
		}).addTo(mainMap);

		var previewIcon = L.divIcon({className: "myicon"});
		// you can set .my-div-icon styles in CSS
		L.marker([43.092533,-89.5324482], {icon: previewIcon}).addTo(mainMap).bindPopup("<b>Hello world!</b><br />I am a popup.");;


	},
	created: function () {
	},

	beforeDestroy(){
	},
	
	methods: {


		// Reset to default shadow values
		resetShadow: function(){
			this.marker.shadowColor = "rgba(0,0,0,0.35)";
			this.marker.shadowX = 0;	
			this.marker.shadowY = 0;	
			this.marker.shadowBlur = 10;	
			this.marker.shadowSpread = 0;	
		},


	}
};



</script>


<style lang="scss">

#markerGenerator{
	display: flex;
	margin: 0 auto;
	justify-content: center;
	box-sizing: border-box;
	width: 100%;
	position: relative;

	@media (max-width: $screenLG) {
		flex-wrap: wrap;
		flex-direction: row-reverse;
		margin-bottom: 10vh;
		max-width: 100%;
	}

	#markerGeneratorOptions{
		box-sizing: border-box;
		overflow: auto;
		display: flex;
		flex-wrap: wrap; 
		gap: 30px;
		justify-content: flex-start;
		height: fit-content;
		width: 50vw;
		max-height: 100vh;
		overflow-x: auto;

		@media (max-width: $screenLG) {
			width: fit-content;
		}
		@media (max-width: $screenSM) {
			width: 100vw;
			justify-content: center;
			border-bottom: 1px solid var(--border);
		}

		.marker-form-group{
		}

		section{
			box-sizing: border-box;
			background-color: var(--grey100);
			padding: 15px;
			border-radius: var(--borderRadius);
			margin-top: 15px;
			max-width: 280px;
			min-width: 280px;
			flex-basis: 280px;

			@media (max-width: $screenSM) {
				max-width: 90vw;
				min-width: 90vw;
				flex-basis: 100%;
			}

			p{
				max-width: 262px;
			}

			&.disabled{

				*{
					opacity: 0.7;
					pointer-events: none;
				}
			}
		}
	}

	#markerGeneratorMap{
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		padding: var(-padding);
		width: fit-content;

		@media (max-width: $screenLG) {
			width: 100%;
			padding: 0;
		}
	}
	#map{
		max-width: 400px;
		max-width: 100%;
		width: 400px;
		min-height: 300px;
		display: block;
		z-index: 0;
		margin: var(--padding);
		border-radius: calc( var(--borderRadius) * 2);

		@media (max-width: $screenLG) {
			width: 96vw;
			border-radius: 10px;
			margin: 0;
			position: fixed !important;
			bottom: 10px;
			left: 2vw;
			max-height: 30vh;
			min-height: 30vh;
			z-index: 50;
		}

	}

	#outputArea{
		width: 100%;
		box-sizing: border-box;
		padding: 25px;

		#output{
			background-color: var(--grey100);
		}
	}
}


// Marker shape selector
.shape-picker{
	display: flex;
	flex-wrap: wrap;
	margin-top: 6px;
	gap: 10px;

	button{
		height: 40px;
		width: 40px;
		position: relative;
		transition: 0.2s;
		top: 0;
		font-size: 30px;
		color: var(--grey400);

		&:hover{
			background-color: var(--grey200);
		}

		&.active,
		&.active-icon{
			color: var(--text)
		}
	}

	// Hide marker for icon shapes
	&.icon #map-marker{
		display: none;
	}

}

// Center instructions
#markerInstructions{
	max-width: 90%;
	margin: 0 auto;
}


// Animations
@keyframes marker-pulse {
	0% {
		transform: scale(1);
		transform-origin: center center;
	}
	50% {
		transform: scale(1.3);
	}
	10% {
		transform-origin: center center;
		transform: scale(1);
	}
}
@keyframes marker-pulse-rotate {
	0% {
		transform: scale(1) rotate(-45deg);
		transform-origin: center center;
	}
	50% {
		transform: scale(1.3) rotate(-45deg);
	}
	10% {
		transform-origin: center center;
		transform: scale(1) rotate(-45deg);
	}
}
@keyframes marker-bounce {
	0% {
		transform: translateY(0);
	}
	50% {
		transform: translateY(-10px);
	}
	10% {
		transform: translateY(0);
	}
}
@keyframes marker-bounce-rotate {
	0% {
		transform: translateY(0) rotate(-45deg);
	}
	50% {
		transform: translateY(-10px) rotate(-45deg);
	}
	10% {
		transform: translateY(0) rotate(-45deg);
	}
}





</style>