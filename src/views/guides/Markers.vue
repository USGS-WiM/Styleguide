<!--
Markers.vue
Create custom map markers
-->

<template>
	<div class="padded mtop-lg pbottom-xl">


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
									<select v-model="marker.borderStyle" :disabled="!marker.border">
										<option v-for="(style, key) in borderStyles" :key="key" class="capitalize" :value="style">
											{{style}}
										</option>
									</select>
								</div>
							</div>

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
									<input type="text" placeholder="rgba(0,0,0,0.25)" class="mtop-xxs" id="mk_shdcol2" v-model="marker.shadowColor" :disabled="!marker.shadow"/>
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

				<div id="markerInstructions" class="mtop-lg">
					<h2 class="flex flex-between">
						How to use with Leaflet
					</h2>
					<p>
						First, copy the Output CSS from below the map and add it to your project's CSS.
					</p> 
					<p class="no-padding">
						Once the CSS is in your project, use the Leafleft DivIcon feature to use your custom marker.
					</p> 
					<pre class="mtop-sm"><code>
	var mapIcon = L.divIcon({className: '<b>{{markerClassName}}</b>'});
	var marker = marker = L.marker(&lt;Coords&gt;, {icon: mapIcon});
	map.addLayer(marker);
				</code></pre>


				</div>




			</div>

			<div id="markerGeneratorMap">
				<!-- Map - right side, bottom on mobile -->
				<div id="map"></div>

				<div id="outputArea">

					<h2 class="mbottom-sm">Output</h2>

					<div class="field mbottom-sm">
						<label for="mc_clnm">
							Icon CSS Class Name
						</label>
						<input type="text" v-model="markerClassName" id="mc_clnm"/>
					</div>

					<div id="output">
						<pre>
							<code>

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
  margin-left: {{marker.size * .1}}px;
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
  <span v-if="marker.shape=='diamond'">transform: rotate(45deg);</span>
<span v-if="marker.border && marker.shape != 'triangle'">
  /* Border */
  border: {{marker.borderWeight}}px {{marker.borderStyle}} {{marker.borderColor}};</span>
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
  <span v-if="marker.shape == 'map-marker'">top:-{{marker.iconSize * 1.5}}px;</span>
  height: 0;
  width: 0;</span>
 
  margin-left: {{marker.size * .1}}px;
  z-index: 1;
  position: absolute;
  content: "{{marker.iconCharacter || ' '}}";
  <span v-if="!marker.iconCharacter">background-color: {{marker.iconColor}};</span>
  <span v-if="marker.iconShape == 'circle'">border-radius: 50%;</span><span v-if="marker.iconShape == 'diamond'">transform: rotate(45deg);</span><span v-if="marker.iconShape == 'triangle' && marker.shape == 'triangle'">margin-top: {{marker.size / 2.5}}%;</span><span v-if="marker.iconShape == 'triangle' && marker.shape == 'map-marker'">top: -{{(marker.size / 1.3) + (marker.iconSize / 2)}}px;</span>
}
</span>

							</code>
						</pre>
					</div>

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
  				margin-left: {{marker.size * .1}}px;
			}

			<!-- Highlight shape with custom color -->
			.shape-picker button.active{
				color: {{marker.background}};
				font-weight: 900 !important;
			}
			.shape-picker button.active-icon{
				color: {{marker.iconColor}};
				font-weight: 900 !important;
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
				transform: rotate(45deg);
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
  				margin-left: {{marker.size * .1}}px;
				font-size: {{marker.iconSize - 2}}px;
				color: {{marker.iconColor}};
				line-height: {{marker.iconSize - 2}}px;
				font-weight: 600;
				text-align: center;
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
				top: -{{marker.iconSize * 1.5}}px;
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
				transform: rotate(45deg);
			}
		</v-style>



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
			markerClassName: "myicon",

			marker: {
				size: 50,
				shape: "map-marker",
				background: "#0076d6",

				border: true,
				borderWeight: 3,
				borderColor: "#000000",
				borderStyle: "solid",

				shadow: true,
				shadowColor: "rgba(0,0,0,0.25)",
				shadowX: 0,
				shadowY: 0,
				shadowBlur: 10,
				shadowSpread: 0,

				icon: true,
				iconShape: "circle",
				iconSize: 20,
				iconColor: "#ffe12d",
				iconCharacter: "",
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
		L.marker([43.092533,-89.5324482], {icon: previewIcon}).addTo(mainMap);


	},
	created: function () {
	},

	beforeDestroy(){
	},
	
	methods: {


		// Reset to default shadow values
		resetShadow: function(){
			this.marker.shadowColor = "rgba(0,0,0,0.25)";
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
	gap: 40px;
	margin: 0 auto;
	justify-content: center;
	box-sizing: border-box;
	width: fit-content;

	#markerGeneratorOptions{
		box-sizing: border-box;
		padding: var(--padding);
		overflow: auto;
		min-width: 400px;
		display: flex;
		flex-wrap: wrap; 
		gap: 30px;
		width: fit-content;
		justify-content: space-around;
		height: fit-content;
		
		.marker-form-group{
		}

		section{
			box-sizing: border-box;
			background-color: var(--grey100);
			padding: 15px;
			border-radius: var(--borderRadius);
			margin-top: 15px;
			max-width: 280px;

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
		padding-top: 5vh;
	}
	#map{
		max-width: 400px;
		max-width: 100%;
		width: 400px;
		height: 400px;
		display: block;
		z-index: 0;
		margin: var(--padding);
		border-radius: calc( var(--borderRadius) * 2);
	}

	#outputArea{
		max-width: 400px;
		width: 100%;
		margin: 0 auto;
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

		&:hover{
			background-color: var(--grey200);
		}
	}

	// Hide marker for icon shapes
	&.icon #map-marker{
		display: none;
	}

}





.wmm-pin.wmm-borderless:after {
  border: none;
}



.wmm-circle.wmm-borderless:after {
  border: none;
}
.wmm-square {
  display: block;
  overflow: hidden;
  position: absolute;
  overflow: visible;
}
.wmm-square:after {
  content: '';
  display: block;
  transition: 0.1s;
  border: 3px solid rgba(0, 0, 0, 0.5);
  background-color: white;
  margin: 0 auto;
  border-radius: 0%;
  box-sizing: border-box;
  position: relative;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.35);
}
.wmm-square.wmm-borderless:after {
  border: none;
}
.wmm-triangle {
  height: 0px !important;
  width: 0px !important;
  border-top: none !important;
  background-color: transparent !important;
  background-color: transparent;
  position: absolute;
  top: 1px;
  padding: 0;
  overflow: visible !important;
  color: white !important;
  font-size: 14px;
}
.wmm-triangle:before {
  display: none !important;
}
.wmm-diamond {
  display: block;
  overflow: hidden;
  position: absolute;
  overflow: visible !important;
}
.wmm-diamond:after {
  content: '';
  display: block;
  transition: 0.1s;
  border: 3px solid rgba(0, 0, 0, 0.5);
  background-color: white;
  margin: 0 auto;
  border-radius: 0%;
  box-sizing: border-box;
  position: relative;
  transform: rotate(45deg);
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.35);
}
.wmm-diamond.wmm-borderless:after {
  border: none;
}
.wmm-pin,
.wmm-circle,
.wmm-square,
.wmm-triangle,
.wmm-diamond {
  display: block;
  overflow: hidden;
  position: absolute !important;
}
.wmm-pin:hover,
.wmm-circle:hover,
.wmm-square:hover,
.wmm-triangle:hover,
.wmm-diamond:hover {
  transition: 0.1s;
}
.wmm-pin:before,
.wmm-circle:before,
.wmm-square:before,
.wmm-triangle:before,
.wmm-diamond:before {
  height: 20px;
  width: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  font-weight: bolder;
  box-sizing: border-box;
  position: relative;
  z-index: 500;
}
/*
Background colors
Background colors
Background colors
*/
.wmm-black:after {
  background-color: #06070E;
  border-color: #06070E;
  color: #06070E;
}
.wmm-white:after {
  background-color: #ffffff;
  border-color: #06070E;
  color: #ffffff;
}
.wmm-red:after {
  background-color: #FC3C4F;
}
.wmm-green:after {
  background-color: #25B9AA;
}
.wmm-blue:after {
  background-color: #3092F4;
}
.wmm-orange:after {
  background-color: #FB833C;
}
.wmm-yellow:after {
  background-color: #FCDC76;
}
.wmm-purple:after {
  background-color: #A06FF9;
}
.wmm-altred:after {
  background-color: #ff4d4d;
}
.wmm-darkred:after {
  background-color: #b8141f;
}
.wmm-altorange:after {
  background-color: #FB833C;
}
.wmm-lime:after {
  background-color: #37FD9F;
}
.wmm-sky:after {
  background-color: #85e4fa;
}
.wmm-altblue:after {
  background-color: #2346f6;
}
.wmm-mutedred:after {
  background-color: #f15b74;
}
.wmm-mutedgreen:after {
  background-color: #75AE8A;
}
.wmm-mutedblue:after {
  background-color: #8CACAF;
}
.wmm-mutedorange:after {
  background-color: #FD896D;
}
.wmm-mutedyellow:after {
  background-color: #F7C781;
}
.wmm-mutedpurple:after {
  background-color: #90748B;
}
.wmm-mutedpink:after {
  background-color: #ffb3ff;
}
/*
Icon Colors
Icon Colors
Icon Colors
*/
.wmm-icon-red:before {
  background-color: #FC3C4F;
  border-bottom-color: #FC3C4F !important;
}
.wmm-icon-green:before {
  background-color: #25B9AA;
  border-bottom-color: #25B9AA !important;
}
.wmm-icon-blue:before {
  background-color: #3092F4;
  border-bottom-color: #3092F4 !important;
}
.wmm-icon-orange:before {
  background-color: #FB833C;
  border-bottom-color: #FB833C !important;
}
.wmm-icon-yellow:before {
  background-color: #FCDC76;
  border-bottom-color: #FCDC76 !important;
}
.wmm-icon-purple:before {
  background-color: #A06FF9;
  border-bottom-color: #A06FF9 !important;
}
.wmm-icon-black:before {
  background-color: #06070E;
  border-bottom-color: #06070E !important;
}
.wmm-icon-white:before {
  background-color: #ffffff;
  border-bottom-color: #ffffff !important;
}
/*
Icons
Icons
Icons
*/
.wmm-icon-noicon:before {
  content: '';
  display: none;
}
.wmm-icon-circle:before {
  content: '';
  height: 8px;
  width: 8px;
  border-radius: 50%;
  position: absolute;
}
.wmm-icon-triangle:before {
  content: '';
  height: 0px;
  width: 0px;
  background-color: transparent !important;
  position: absolute;
  background-color: transparent;
}
.wmm-icon-square:before {
  content: '';
  height: 8px;
  width: 8px;
  position: absolute;
}
.wmm-icon-diamond:before {
  content: '';
  height: 8px;
  width: 8px;
  position: absolute;
  transform: rotate(45deg) !important;
}
/*
Marker size
Marker size
Marker size
*/
.wmm-size-15 {
  height: 19px !important;
  width: 15px !important;
  margin-left: -7px !important;
}
.wmm-size-15:after {
  height: 15px !important;
  width: 15px !important;
}
.wmm-size-15.wmm-pin {
  margin-top: -8px !important;
}
.wmm-size-15.wmm-triangle {
  height: 0 !important;
  width: 0 !important;
  overflow: visible !important;
  border-left: 9px solid transparent;
  border-right: 9px solid transparent;
  border-bottom: 16px solid white;
  top: -2px;
  left: -2px;
}
.wmm-size-15.wmm-triangle:after {
  content: '\25b2';
  background-color: transparent;
  font-size: 14px;
  font-family: sans-serif;
  position: relative;
  left: -7px;
  top: -1px;
}
.wmm-size-15.wmm-icon-circle:before {
  height: 5px;
  width: 5px;
  margin: 5px 0 0 5px;
}
.wmm-size-15.wmm-icon-square:before,
.wmm-size-15.wmm-icon-diamond:before {
  height: 5px;
  width: 5px;
  margin: 5px 0 0 5px;
}
.wmm-size-15.wmm-icon-triangle:before {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-bottom: 7px solid white;
  margin-top: 3px;
  margin-left: 4px;
}
.wmm-size-20 {
  height: 24px !important;
  width: 20px !important;
  margin-left: -10px !important;
}
.wmm-size-20:after {
  height: 20px !important;
  width: 20px !important;
}
.wmm-size-20.wmm-pin {
  margin-top: -12px !important;
}
.wmm-size-20.wmm-triangle {
  height: 0 !important;
  width: 0 !important;
  overflow: visible !important;
  border-left: 12px solid transparent;
  border-right: 12px solid transparent;
  border-bottom: 20px solid white;
  top: -2px;
  left: -1px;
}
.wmm-size-20.wmm-triangle:after {
  content: '\25b2';
  background-color: transparent;
  font-size: 18px;
  font-family: sans-serif;
  position: relative;
  left: -9px;
  top: -2px;
}
.wmm-size-20.wmm-icon-circle:before {
  height: 8px;
  width: 8px;
  margin: 6px 0 0 6px;
}
.wmm-size-20.wmm-icon-square:before,
.wmm-size-20.wmm-icon-diamond:before {
  height: 8px;
  width: 8px;
  margin: 6px 0 0 6px;
}
.wmm-size-20.wmm-icon-triangle:before {
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 10px solid white;
  margin-top: 4px;
  margin-left: 5px;
}
.wmm-size-25 {
  height: 30px !important;
  width: 25px !important;
  margin-left: -13px !important;
}
.wmm-size-25:after {
  height: 25px !important;
  width: 25px !important;
}
.wmm-size-25.wmm-pin {
  margin-top: -17px !important;
}
.wmm-size-25.wmm-triangle {
  height: 0 !important;
  width: 0 !important;
  overflow: visible !important;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-bottom: 26px solid white;
  left: -3px;
  top: -2px;
}
.wmm-size-25.wmm-triangle:after {
  content: '\25b2';
  background-color: transparent;
  font-size: 22px;
  font-family: sans-serif;
  position: relative;
  left: -11px;
  top: -1px;
}
.wmm-size-25.wmm-icon-circle:before {
  height: 11px;
  width: 11px;
  margin: 7px 0 0 7px;
}
.wmm-size-25.wmm-icon-square:before,
.wmm-size-25.wmm-icon-diamond:before {
  height: 9px;
  width: 9px;
  margin: 8px 0 0 8px;
}
.wmm-size-25.wmm-icon-triangle:before {
  border-left: 6px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 12px solid white;
  margin-top: 5px;
  margin-left: 7px;
}
.wmm-size-30 {
  height: 36px !important;
  width: 30px !important;
  margin-left: -15px !important;
}
.wmm-size-30:after {
  height: 30px !important;
  width: 30px !important;
}
.wmm-size-30.wmm-pin {
  margin-top: -22px !important;
}
.wmm-size-30.wmm-triangle {
  height: 0 !important;
  width: 0 !important;
  overflow: visible !important;
  border-left: 18px solid transparent;
  border-right: 18px solid transparent;
  border-bottom: 30px solid white;
  left: -3px;
  top: -2px;
}
.wmm-size-30.wmm-triangle:after {
  content: '\25b2';
  background-color: transparent;
  font-size: 24px;
  font-family: sans-serif;
  position: relative;
  left: -12px;
  top: 0px;
}
.wmm-size-30.wmm-icon-circle:before {
  height: 14px;
  width: 14px;
  margin: 8px 0 0 8px;
}
.wmm-size-30.wmm-icon-square:before,
.wmm-size-30.wmm-icon-diamond:before {
  height: 12px;
  width: 12px;
  margin: 9px 0 0 9px;
}
.wmm-size-30.wmm-icon-triangle:before {
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-bottom: 15px solid white;
  margin-top: 6px;
  margin-left: 7px;
}
.wmm-size-35 {
  height: 42px !important;
  width: 35px !important;
  margin-left: -18px !important;
}
.wmm-size-35:after {
  height: 35px !important;
  width: 35px !important;
}
.wmm-size-35.wmm-pin {
  margin-top: -26px !important;
}
.wmm-size-35.wmm-triangle {
  height: 0 !important;
  width: 0 !important;
  overflow: visible !important;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  border-bottom: 35px solid white;
  left: -3px;
  top: -5px;
}
.wmm-size-35.wmm-triangle:after {
  content: '\25b2';
  background-color: transparent;
  font-size: 29px;
  font-family: sans-serif;
  position: relative;
  left: -14px;
  top: -1px;
}
.wmm-size-35.wmm-icon-circle:before {
  height: 19px;
  width: 19px;
  margin: 8px 0 0 8px;
}
.wmm-size-35.wmm-icon-square:before,
.wmm-size-35.wmm-icon-diamond:before {
  height: 15px;
  width: 15px;
  margin: 10px 0 0 10px;
}
.wmm-size-35.wmm-icon-triangle:before {
  border-left: 9px solid transparent;
  border-right: 9px solid transparent;
  border-bottom: 18px solid white;
  margin-top: 7px;
  margin-left: 9px;
}
.wmm-triangle.wmm-black {
  border-bottom-color: #000000;
}
.wmm-triangle.wmm-black:after {
  color: #06070E;
}
.wmm-triangle.wmm-white {
  border-bottom-color: #a6a6a6;
}
.wmm-triangle.wmm-white:after {
  color: #ffffff;
}
.wmm-triangle.wmm-red {
  border-bottom-color: #83020f;
}
.wmm-triangle.wmm-red:after {
  color: #FC3C4F;
}
.wmm-triangle.wmm-green {
  border-bottom-color: #072421;
}
.wmm-triangle.wmm-green:after {
  color: #25B9AA;
}
.wmm-triangle.wmm-blue {
  border-bottom-color: #06396c;
}
.wmm-triangle.wmm-blue:after {
  color: #3092F4;
}
.wmm-triangle.wmm-orange {
  border-bottom-color: #823203;
}
.wmm-triangle.wmm-orange:after {
  color: #FB833C;
}
.wmm-triangle.wmm-yellow {
  border-bottom-color: #bb9004;
}
.wmm-triangle.wmm-yellow:after {
  color: #FCDC76;
}
.wmm-triangle.wmm-purple {
  border-bottom-color: #4307ae;
}
.wmm-triangle.wmm-purple:after {
  color: #A06FF9;
}
.wmm-triangle.wmm-altred {
  border-bottom-color: #9a0000;
}
.wmm-triangle.wmm-altred:after {
  color: #ff4d4d;
}
.wmm-triangle.wmm-darkred {
  border-bottom-color: #170304;
}
.wmm-triangle.wmm-darkred:after {
  color: #b8141f;
}
.wmm-triangle.wmm-altorange {
  border-bottom-color: #823203;
}
.wmm-triangle.wmm-altorange:after {
  color: #FB833C;
}
.wmm-triangle.wmm-lime {
  border-bottom-color: #018044;
}
.wmm-triangle.wmm-lime:after {
  color: #37FD9F;
}
.wmm-triangle.wmm-sky {
  border-bottom-color: #08a1c4;
}
.wmm-triangle.wmm-sky:after {
  color: #85e4fa;
}
.wmm-triangle.wmm-altblue {
  border-bottom-color: #041462;
}
.wmm-triangle.wmm-altblue:after {
  color: #2346f6;
}
.wmm-triangle.wmm-mutedred {
  border-bottom-color: #8d0c22;
}
.wmm-triangle.wmm-mutedred:after {
  color: #f15b74;
}
.wmm-triangle.wmm-mutedgreen {
  border-bottom-color: #2a4734;
}
.wmm-triangle.wmm-mutedgreen:after {
  color: #75AE8A;
}
.wmm-triangle.wmm-mutedblue {
  border-bottom-color: #384e51;
}
.wmm-triangle.wmm-mutedblue:after {
  color: #8CACAF;
}
.wmm-triangle.wmm-mutedorange {
  border-bottom-color: #b52502;
}
.wmm-triangle.wmm-mutedorange:after {
  color: #FD896D;
}
.wmm-triangle.wmm-mutedyellow {
  border-bottom-color: #ba730c;
}
.wmm-triangle.wmm-mutedyellow:after {
  color: #F7C781;
}
.wmm-triangle.wmm-mutedpurple {
  border-bottom-color: #2d242c;
}
.wmm-triangle.wmm-mutedpurple:after {
  color: #90748B;
}
.wmm-triangle.wmm-mutedpink {
  border-bottom-color: #ff00ff;
}
.wmm-triangle.wmm-mutedpink:after {
  color: #ffb3ff;
}





</style>