<!--
Loaders.vue
Display and code for animated loaders.
-->

<template>
  <div class="padded mtop-lg pbottom-xl">
    <h1>Animated Loaders</h1>
	

    <p class="big">
      Use loaders in your application to show something is happening. This will provide the HTML and CSS for an animated loader, you'll need to show/hide it when needed. 
    </p>
	<p>
		For smaller loading actions, consider using <a href="https://fontawesome.com/v5/docs/web/style/animate" target="_blank">spinning icons</a>.
	</p>

	<div class="sg--filters mtop-lg">

		<!-- Object -->
		<div class="sg--filters-group">

			<label class="big">Object</label>

			<div class="field-horizontal mtop-xs">
				<input
					type="radio"
					class="radio mright-xs"
					id="shp_wimpin"
					:checked="animationShape == 'wimpin'"
					@click="animationShape = 'wimpin'"
				/>
				<label for="shp_wimpin">WIM Pin</label>
			</div>
			<div class="field-horizontal mtop-xs">
				<input
					type="radio"
					class="radio mright-xs"
					id="shp_usgswave"
					:checked="animationShape == 'usgswave'"
					@click="animationShape = 'usgswave'"
				/>
				<label for="shp_usgswave">USGS Wave</label>
			</div>
			<div class="field-horizontal mtop-xs">
				<input
					type="radio"
					class="radio mright-xs"
					id="shp_usgsbox"
					:checked="animationShape == 'usgsbox'"
					@click="animationShape = 'usgsbox'"
				/>
				<label for="shp_usgsbox">USGS Box</label>
			</div>
			<div class="field-horizontal mtop-xs">
				<input
					type="radio"
					class="radio mright-xs"
					id="shp_line"
					:checked="animationShape == 'line'"
					@click="animationShape = 'line'"
				/>
				<label for="shp_line">Line</label>
			</div>

		</div>

		<!-- Animation Type -->
		<div class="sg--filters-group">

			<label class="big">Animation</label>

			<div class="field-horizontal mtop-xs">
				<input
					type="radio"
					class="radio mright-xs"
					id="ani_stroke"
					:checked="animationType == 'stroke'"
					@click="animationType = 'stroke'"
				/>
				<label for="ani_stroke">Draw</label>
			</div>
			<div class="field-horizontal mtop-xs">
				<input
					type="radio"
					class="radio mright-xs"
					id="ani_shake"
					:checked="animationType == 'shake'"
					@click="animationType = 'shake'"
				/>
				<label for="ani_shake">Earthquake</label>
			</div>
			<div class="field-horizontal mtop-xs">
				<input
					type="radio"
					class="radio mright-xs"
					id="ani_pulse"
					:checked="animationType == 'pulse'"
					@click="animationType = 'pulse'"
				/>
				<label for="ani_pulse">Pulse</label>
			</div>

		</div>
		
		<!-- Choose Color -->
		<div class="sg--filters-group">
			<label class="big">Color</label>
			<div class="field-horizontal mtop-xs">
				<input
					type="radio"
					class="radio mright-xs"
					id="color_black"
					:checked="loaderColor == 'black'"
					@click="loaderColor = 'black'"
				/>
				<label for="color_black">Black</label>
			</div>
			<div class="field-horizontal mtop-xs">
				<input
					type="radio"
					class="radio mright-xs"
					id="color_white"
					:checked="loaderColor == 'white'"
					@click="loaderColor = 'white'"
				/>
				<label for="color_white">White</label>
			</div>
			<div class="field-horizontal mtop-xs" v-if="animationShape != 'wimpin'">
				<input
					type="radio"
					class="radio mright-xs"
					id="color_green"
					:checked="loaderColor == 'green'"
					@click="loaderColor = 'green'"
				/>
				<label for="color_green">USGS Green</label>
			</div>
			<div class="field-horizontal mtop-xs" v-if="animationShape != 'wimpin'">
				<input
					type="radio"
					class="radio mright-xs"
					id="color_blue"
					:checked="loaderColor == 'blue'"
					@click="loaderColor = 'blue'"
				/>
				<label for="color_blue">USGS Blue</label>
			</div>
		</div>


		<!-- Speed -->
		<div class="sg--filters-group">
			<div class="field">
				<label class="big" for="spd_input">Duration in seconds</label>
				<input
					type="number"
					class="mtop-xxs"
					min="0"
					max="1000"
					id="spd_input"
					v-model="loaderSpeed"
				/>
			</div>
			<label class="big mtop-sm">Loop</label>
			<div class="field-horizontal mtop-xs">
				<input
					type="radio"
					class="radio mright-xs"
					id="loop_true"
					:checked="loopLoader == true"
					@click="loopLoader = true"
				/>
				<label for="loop_true">Yes</label>
			</div>
			<div class="field-horizontal mtop-xs">
				<input
					type="radio"
					class="radio mright-xs"
					id="loop_false"
					:checked="loopLoader == false"
					@click="loopLoader = false"
				/>
				<label for="loop_false">No</label>
			</div>
		</div>

		<!-- Display -->
		<div class="sg--filters-group">
			<label class="big">Display</label>

			<div class="field-horizontal mtop-xs">
				<input
					type="radio"
					class="radio mright-xs"
					id="dsp_block"
					:checked="display == 'blockloader'"
					@click="display = 'blockloader'"
				/>
				<label for="dsp_block">
					Block
					<small class="block max-width-tiny text-fade">Just the animated loader for you to place anywhere.</small>
				</label>
			</div>
			<div class="field-horizontal mtop-xs">
				<input
					type="radio"
					class="radio mright-xs"
					id="dsp_parent"
					:checked="display == 'fillparent'"
					@click="display = 'fillparent'"
				/>
				<label for="dsp_parent">
					Fill Parent
					<small class="block max-width-tiny text-fade">Fills parent with absolute position. Parent must be position:relative.</small>
				</label>
			</div>
			<div class="field-horizontal mtop-xs">
				<input
					type="radio"
					class="radio mright-xs"
					id="dsp_full"
					:checked="display == 'fullscreen'"
					@click="display = 'fullscreen'"
				/>
				<label for="dsp_full">
					Full Screen
					<small class="block max-width-tiny text-fade">Covers the entire view.</small>
				</label>
			</div>
			
			
		</div>

		<!-- Size -->
		<div class="sg--filters-group" v-if="animationShape != 'line'">
			<div class="field">
				<label class="big" for="sze_input">Size in pixels</label>
				<input
					type="number"
					class="mtop-xxs"
					min="0"
					max="1000"
					id="sze_input"
					v-model="loaderSize"
				/>
			</div>
		</div>

		<!-- Text -->
		<div class="sg--filters-group" v-if="display != 'blockloader' && animationShape != 'line'">
			<div class="field">
				<label class="big" for="ld_title">Title</label>
				<input
					type="text"
					class="mtop-xxs"
					id="ld_title"
					v-model="loaderTitle"
				/>
			</div>
			<div class="field mtop-sm">
				<label class="big" for="ld_subtitle">Subtitle</label>
				<input
					type="text"
					class="mtop-xxs"
					id="ld_subtitle"
					v-model="loaderSubtitle"
				/>
			</div>
		</div>

	</div>

	<button class="button" @click="rerunAnimation" v-if="!loopLoader">
		<i class="far fa-play"></i>
		<span>Re-run</span>
	</button>



	<!-- Stage -->
	<!-- Holds the preview for the loader -->
	<!-- Wrapped in a few layers to show full/fill positioning -->
	<div :class="'sg--loader-stage mtop-md ' + display">

		<!-- Full Screen info paragraph -->
		<div v-if="display == 'fullscreen' && animationShape != 'line'" class="padded">
			<p class="text-red" v-if="showFullscreen">
				You can currently click through the loader to change settings. 
				<br/>
				<b>You will not be able to on your site.</b>
			</p>
			<button class="button mbottom-md mtop-md" @click="showFullscreen = !showFullscreen" :class="{'red' : showFullscreen}">
				<i :class="{'far fa-eye' : !showFullscreen, 'far fa-eye-slash' : showFullscreen}"></i>
				<span>{{showFullscreen ? 'Hide' : 'Show' }} Full Screen Preview</span>
			</button>
		</div>

		<!-- Demo parent content -->
		<div class="padded align-left" v-if="display == 'fillparent'">
			<p v-if="animationShape != 'line'">
				When set to fill parent, it will expand to match the height and width of the parent.
			</p>
			<p v-else>
				When set to fill parent, the line will display at the top of the parent element.
			</p>
			<p>
				The parent must have <code>position:relative;</code> for it to work.
			</p>
			<button class="button green mtop-sm" v-if="animationShape != 'line'">
				<i class="far fa-times"></i>
				<span>Can't touch this</span>
			</button>
		</div>

					
		<!-- Demo block paragraph -->
		<p class="mbottom-xxs" v-if="display == 'blockloader'">Block display means you can put the loader anywhere.</p>


		<!-- Outer wrapper -->
		<div :class="'loader-wrapper loader-' + loaderColor + ' ' + animationShape + animationType + ' ' + animationShape + ' ' + display + ' ' + (display == 'fullscreen' ? 'noclicks' : '')" v-if="display != 'fullscreen' || display == 'fullscreen' && showFullscreen">



			<!-- Actual SVGs -->
			<!-- WIM Pin -->
			<div class="loader-object" v-if="animationShape == 'wimpin'">
				<svg width="340" height="345" viewBox="0 0 340 345" xmlns="http://www.w3.org/2000/svg">
					<path d="M78.5006 261.446L138.781 321.727C156.132 339.077 184.262 339.077 201.612 321.727L261.893 261.446C312.535 210.804 312.535 128.696 261.893 78.054C211.25 27.4117 129.143 27.4117 78.5005 78.054C27.8582 128.696 27.8582 210.804 78.5006 261.446Z" class="svg-wimpin-main" ></path>
					<mask id="mask0_682_231" style="mask-type: alpha" maskUnits="userSpaceOnUse" x="50" y="50" width="240" height="275">
						<path d="M194.541 314.656C181.096 328.101 159.297 328.101 145.852 314.656L85.5716 254.375C38.8345 207.638 38.8345 131.862 85.5716 85.1251V85.1251C132.309 38.388 208.085 38.388 254.822 85.1251V85.1251C301.559 131.862 301.559 207.638 254.822 254.375L194.541 314.656Z" class="svg-wimpin-america"></path>
					</mask>
					<g mask="url(#mask0_682_231)">
						<path d="M-7.07967 114.854C11.3079 106.879 38.7544 91.8499 32.5097 120.279C26.265 148.709 46.028 182.649 59.767 186.14C73.5059 189.631 119.106 193.256 116.462 207.705C113.819 222.155 95.7865 227.555 111.063 234.05C126.339 240.545 149.029 245.177 140.663 257.319C132.296 269.461 108.792 288.924 124.267 289.267C139.741 289.61 155.651 267.922 167.606 262.789C179.56 257.656 213.431 218.285 195.372 212.424C177.312 206.564 153.08 188.178 140.591 191.799C128.102 195.419 53.3472 167.994 86.9843 155.252C120.621 142.51 106.738 167.693 120.23 165.563C133.722 163.434 117.367 132.415 143.788 115.384C170.21 98.3527 152.438 88.3845 124.196 64.0316C95.9539 39.6788 49.3645 66.8117 34.025 69.5341C21.7535 71.712 1.50875 100.655 -7.07967 114.854Z"></path>
					</g>
					<mask id="mask1_682_231" style="mask-type: alpha" maskUnits="userSpaceOnUse" x="50" y="50" width="240" height="275">
						<path d="M194.541 314.656C181.096 328.101 159.297 328.101 145.852 314.656L85.5716 254.375C38.8345 207.638 38.8345 131.862 85.5716 85.1251V85.1251C132.309 38.388 208.085 38.388 254.822 85.1251V85.1251C301.559 131.862 301.559 207.638 254.822 254.375L194.541 314.656Z" class="svg-wimpin-europe"></path>
					</mask>
					<g mask="url(#mask1_682_231)">
						<path d="M178.32 48.243C173.763 57.1546 200.649 93.0039 210.058 87.429C219.467 81.8541 243.11 55.615 252.798 64.1441C262.485 72.6733 238.261 103.337 246.392 104.073C254.523 104.809 251.976 110.649 258.537 105.916C303.564 73.4332 270.154 124.259 269.249 134.281C268.345 144.304 251.276 142.09 257.301 150.622C263.327 159.154 254.594 179.946 264.342 181.794C274.09 183.643 271.144 194.409 268.656 199.607C266.167 204.805 218.702 234.165 234.92 240.462C299.919 344.207 271.295 222.617 283.196 211.473L318.686 67.0613L217.137 48.2123L178.32 48.243Z" ></path>
					</g>
				</svg>
			</div>
			<!-- USGS Waves -->
			<div class="loader-object" v-if="animationShape == 'usgswave'">
				<!--?xml version="1.0" encoding="UTF-8"?-->
				<svg width="392" height="306" viewBox="0 0 392 306" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M200.5 197.5C321 341 375 295 389.5 289.017" class="animation-usgswave-1"></path>
					<path d="M200.5 202.5C334.5 312.5 375 253.5 389.5 247.517" class="animation-usgswave-2"></path>
					<path d="M4 256.368C136.5 151 174.5 178.5 219 218.5C321 288.5 356.5 221.868 389.5 211.368" class="animation-usgswave-3"></path>
					<path d="M4 214C96.0567 126.225 143.014 155.782 175.015 177.389C184.845 184.026 194.553 191.035 204.377 197.68C298.097 261.074 358.078 178.998 389.5 169" class="animation-usgswave-4"></path>
					<path d="M4 174C151 63 138.5 215.5 267.5 200.5C311 189.5 340.5 154 389.5 129" class="animation-usgswave-5"></path>
					<path d="M4 129C123 49.5 141.5 193 249 172.5C292.5 161.5 340.5 109 389.5 84" class="animation-usgswave-6"></path>
					<path d="M4 92C106.5 65 128.5 165 218.5 154C262 143 288 101.5 389.5 47" class="animation-usgswave-7"></path>
					<path d="M3.5 59C106.5 52.5 100.5 132.5 184 128.5C240 121 287.5 59 389 4.5" class="animation-usgswave-8"></path>
				</svg>
			</div>
			<!-- USGS Box -->
			<div class="loader-object" v-if="animationShape == 'usgsbox'">
				<svg width="100%" height="100%" fill="none" viewBox="0 0 1271 1379" xmlns="http://www.w3.org/2000/svg" >
					<rect x="45.0002" y="45.0001" width="1181" height="1289" class="usgsbox-1"></rect>
					<rect x="1226" y="1334" width="1181" height="1289" transform="rotate(-180 1226 1334)" class="usgsbox-2" ></rect>
					<path d="M54.5001 873.28C54.5001 911.78 54.0001 925.78 54.0001 994.78C150 933.78 247.5 863 370.5 787C598.5 707.5 684.5 880 786.5 961C831 994.5 880.5 1075.5 1034.5 1119C1122 1133 1176.5 1115.5 1218 1095C1218 1030 1217 1023 1217 970C1120 1040.5 990.5 1090 839.5 970C759.5 896 745 894.5 662 797C516.5 694 370.5 648.5 251 740.279C171.988 794.846 99.5001 841.28 54.5001 873.28Z" class="usgsbox-3"></path>
					<path  d="M54.5001 873.279C54.5001 911.779 54.0001 925.78 54.0001 994.78C133.68 944.15 214.393 886.783 309.862 825.286C349.898 799.496 393.181 776.946 440.469 771.305C622.135 749.635 701.206 900.864 836.5 954C921.253 989.601 990.549 980.218 1050.41 954.602C1065.69 948.064 1079.79 939.139 1093.44 929.657C1144.08 894.47 1188.65 866.088 1218 847.28L1218 722.28C1113 784 1058.5 839.5 980.5 873.279C888.5 920.5 745 894.5 662 797C516.5 694 370.5 648.5 251 740.279C171.988 794.846 99.5001 841.279 54.5001 873.279Z"  class="usgsbox-4" ></path>
					<path d="M1216.5 600C1216.5 561.5 1217 547.5 1217 478.5C1121 539.5 1020 614 897 690C726.5 806 606 740 515.5 659C323.5 529 208 499 53.0005 626V751C163.5 688 205 606.5 376.5 631.5C522 665 524 771 726.5 823C831.578 854.254 896.5 823 1020 733C1099.01 678.433 1171.5 632 1216.5 600Z" class="usgsbox-5"></path>
					<path d="M1216 357.5V236C996.496 363.9 758.695 564.242 631.999 603.069C599.055 613.165 563.255 611.37 529.124 606.641C353.567 582.316 311.249 378.766 52.0002 403.5V506C188.383 454.709 279.008 492.005 353.685 552.725C377.294 571.922 401.094 590.996 426.764 607.335C494.778 650.626 557.824 690.145 655.5 689C779 684 966 507 1216 357.5Z" class="usgsbox-6"></path>
				</svg>
			</div>
			<!-- Line -->
			<div class="loader-object" v-if="animationShape == 'line'">
				<div class="loader-line-track">
					<div class="loader-line"></div>
				</div>
			</div>

			
			<!-- Title and subtitle -->
			<div :class="'loader-title loader-' + loaderColor" v-if="loaderTitle && display != 'blockloader' && animationShape != 'line'">
				{{loaderTitle}}
			</div>
			<div :class="'loader-subtitle loader-' + loaderColor"  v-if="loaderTitle && display != 'blockloader' && animationShape != 'line'">
				{{loaderSubtitle}}
			</div>


		</div>


		<!-- Demo block paragraph -->
		<p class="mtop-xxs" v-if="display == 'blockloader'">Like between two paragraphs.</p>



	</div>


	<!-- Conditional styles user can change get placed and updated on the view with this directive -->
	<v-style>
		<!-- Actual Loader styles -->
		<!-- Text colors -->
		.loader-wrapper{
			color: {{ loaderColor == 'white' ? 'white' : 'black' }};
		}
		.loader-wrapper.blockloader{
			display: block;
		}
	</v-style>
	<v-style v-if="animationShape != 'line'">
		<!-- Fullscreen, SVG -->
		.loader-wrapper.fillparent,
		.loader-wrapper.fullscreen{
			background-color: {{ loaderColor == 'white' ? 'rgba(10,10,30,0.65)' : 'rgba(255,255,255,0.65)' }};
		}
		.loader-wrapper.fullscreen{
			display: flex;
			flex-direction: column;
			justify-content: center;
			text-align: center;
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			z-index: 10000;
			margin: 0 auto;
		}
		.loader-wrapper.fillparent{
			display: flex;
			flex-direction: column;
			justify-content: center;
			text-align: center;
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			z-index: 1000;
		}
	</v-style>
	<v-style>	
		
		<!-- Center the SVG -->
		.loader-wrapper.fullscreen .loader-object,
		.loader-wrapper.fillparent .loader-object{
			margin: 0 auto;
		}

		<!-- Set size -->
		.loader-object{
			max-width: {{loaderSize}}px;
			width: {{loaderSize}}px;
			transform-origin: center center;
		}
		.loader-object svg{
			max-width: 100%;
			max-height: {{loaderSize}}px;
			max-width: {{loaderSize}}px;
		}

		<!-- Title and subtitle -->
		.loader-title,
		.loader-subtitle{
			display: block;
			width: 100%;
			text-align: center;
		}
		.loader-title{
			font-size: 20px;
			font-weight: 700;
			margin-top: 30px;
		}
		.loader-subtitle{
			font-size: 14px;
			padding-top: 15px;
			letter-spacing: 0.2px;
		}

		<!-- Wave Stroke -->
		.usgswavestroke path {
			fill: none;
			stroke-width: 14;
			stroke-linecap: round;
			stroke-linejoin: round;
			stroke-opacity: 1;
			stroke-miterlimit: 4;
		}
		.usgswavestroke.loader-black {
			stroke: var(--text);
		}
		.usgswavestroke.loader-white {
			stroke: var(--background);
		}
		.usgswavestroke.loader-green {
			stroke: var(--usgsGreen);
		}
		.usgswavestroke.loader-blue {
			stroke: var(--usgsBlue);
		}
		.usgswavestroke .animation-usgswave-1 {
			animation: animation-wave-stroke-1 {{loaderSpeed}}s ease-in-out .28s {{loopLoader ? 'infinite' : 1}}  normal none;
		}
		.usgswavestroke .animation-usgswave-2 {
			animation: animation-wave-stroke-2 {{loaderSpeed}}s ease-in-out .28s {{loopLoader ? 'infinite' : 1}}  normal none;
		}
		.usgswavestroke .animation-usgswave-3 {
			animation: animation-wave-stroke-3 {{loaderSpeed}}s ease-in-out .3s {{loopLoader ? 'infinite' : 1}}  normal none;
		}
		.usgswavestroke .animation-usgswave-4 {
			animation: animation-wave-stroke-4 {{loaderSpeed}}s ease-in-out .25s {{loopLoader ? 'infinite' : 1}}  normal none;
		}
		.usgswavestroke .animation-usgswave-5 {
			animation: animation-wave-stroke-5 {{loaderSpeed}}s ease-in-out .2s {{loopLoader ? 'infinite' : 1}}  normal none;
		}
		.usgswavestroke .animation-usgswave-6 {
			animation: animation-wave-stroke-6 {{loaderSpeed}}s ease-in-out .15s {{loopLoader ? 'infinite' : 1}}  normal none;
		}
		.usgswavestroke .animation-usgswave-7 {
			animation: animation-wave-stroke-7 {{loaderSpeed}}s ease-in-out .1s {{loopLoader ? 'infinite' : 1}}  normal none;
		}
		.usgswavestroke .animation-usgswave-8 {
			animation: animation-wave-stroke-8 {{loaderSpeed}}s ease-in-out .05s {{loopLoader ? 'infinite' : 1}}  normal none;
		}


		<!-- USGS Box Stroke -->
		.usgsboxstroke path {
			stroke-width: 44;
			stroke-linecap: round;
			stroke-linejoin: round;
			stroke: var(--text);
			stroke-opacity: 1;
			stroke-miterlimit: 4;
  		}
		.usgsboxstroke rect {
			fill: transparent;
			stroke: var(--text);
			stroke-width: 90px;
		}
		<!-- Black -->
		.usgsboxstroke.loader-black path {
			stroke: var(--text);
			fill: var(--text);
		}
		.usgsboxstroke.loader-black rect {
			stroke: var(--text);
		}
		<!-- White -->
		.usgsboxstroke.loader-white path {
			stroke: var(--background);
			fill: var(--background);
		}
		.usgsboxstroke.loader-white rect {
			stroke: var(--background);
		}
		<!-- Blue -->
		.usgsboxstroke.loader-blue path {
			stroke: var(--usgsBlue);
			fill: var(--usgsBlue);
		}
		.usgsboxstroke.loader-blue rect {
			stroke: var(--usgsBlue);
		}
		<!-- Green -->
		.usgsboxstroke.loader-green path {
			stroke: var(--usgsGreen);
			fill: var(--usgsGreen);
		}
		.usgsboxstroke.loader-green rect {
			stroke: var(--usgsGreen);
		}
		.usgsboxstroke .usgsbox-1 {
			animation: animaton-usgsbox-stroke-1 {{loopLoader ? (loaderSpeed / 2) : loaderSpeed}}s ease-in-out 0s {{loopLoader ? 'infinite' : 1}}  alternate none;
		}
		.usgsboxstroke .usgsbox-2 {
			animation: animaton-usgsbox-stroke-2 {{loopLoader ? (loaderSpeed / 2) : loaderSpeed}}s ease-in-out 0s {{loopLoader ? 'infinite' : 1}}  alternate none;
		}
		.usgsboxstroke .usgsbox-3 {
			animation: animaton-usgsbox-fill-3 {{loopLoader ? (loaderSpeed / 2) : loaderSpeed}}s ease-in-out 0s {{loopLoader ? 'infinite' : 1}}  alternate none;
		}
		.usgsboxstroke .usgsbox-4 {
			animation: animaton-usgsbox-fill-4 {{loopLoader ? (loaderSpeed / 2) : loaderSpeed}}s ease-in-out 0s {{loopLoader ? 'infinite' : 1}}  alternate none;
		}
		.usgsboxstroke .usgsbox-5 {
			animation: animaton-usgsbox-fill-5 {{loopLoader ? (loaderSpeed / 2) : loaderSpeed}}s ease-in-out 0s {{loopLoader ? 'infinite' : 1}}  alternate none;
		}
		.usgsboxstroke .usgsbox-6 {
			animation: animaton-usgsbox-fill-6 {{loopLoader ? (loaderSpeed / 2) : loaderSpeed}}s ease-in-out 0s {{loopLoader ? 'infinite' : 1}}  alternate none;
		}

		<!-- WIM Pin Stroke -->
		.wimpinstroke path {
			stroke-linecap: round;
			stroke-linejoin: round;
			stroke-opacity: 1;
			stroke-miterlimit: 4;
			fill: white;
		}
		.wimpinstroke .svg-wimpin-main {
			stroke-width: 20;
			stroke: black;
			animation: animation-pin-outline  {{loopLoader ? (loaderSpeed / 2) : loaderSpeed}}s ease 0s {{loopLoader ? 'infinite' : 1}}  alternate none, animation-pin-fill  {{loopLoader ? (loaderSpeed / 2) : loaderSpeed}}s ease 0s {{loopLoader ? 'infinite' : 1}}  alternate forwards;
		}
		.wimpinstroke .svg-wimpin-america {
			animation: animation-pin-land-fill {{loopLoader ? (loaderSpeed / 2) : loaderSpeed}}s ease 0s {{loopLoader ? 'infinite' : 1}}  alternate none;
		}
		.wimpinstroke .svg-wimpin-europe {
			animation: animation-pin-land-fill {{loopLoader ? (loaderSpeed / 2) : loaderSpeed}}s ease 0.25s {{loopLoader ? 'infinite' : 1}}  alternate none;
		}

		<!-- Shake -->
		<!-- Pin shake -->
		.wimpinshake .loader-object {
  			animation: shake {{loopLoader ? (loaderSpeed / 2) : loaderSpeed}}s ease 0s {{loopLoader ? 'infinite' : 1}}  normal none;
		}
		.wimpinshake path {
			stroke-linecap: round;
			stroke-linejoin: round;
			stroke-opacity: 1;
			stroke-miterlimit: 4;
			fill: white;
		}
		.wimpinshake .svg-wimpin-main {
			stroke-width: 20;
			stroke: black;
			fill: rgb(2, 134, 255);
		}

		<!-- USGS Wave Shake -->
		<!-- USGS Shake -->
		.usgswaveshake .loader-object{
			animation: shake {{loopLoader ? (loaderSpeed / 2) : loaderSpeed}}s ease 0s {{loopLoader ? 'infinite' : 1}}  normal none;
		}
		.usgswaveshake path{
			fill: none;
			stroke-width: 14;
			stroke-linecap: round;
			stroke-linejoin: round;
			stroke-opacity: 1;
			stroke-miterlimit: 4;
		}
		.usgswaveshake.loader-black path{
			stroke: var(--text);
		}
		.usgswaveshake.loader-white path{
			stroke: var(--background);
		}
		.usgswaveshake.loader-green path{
			stroke: var(--usgsGreen);
		}
		.usgswaveshake.loader-blue path{
			stroke: var(--usgsBlue);
		}
		<!-- USGS Box Shake -->
		.usgsboxshake .loader-object{
			animation: shake {{loopLoader ? (loaderSpeed / 2) : loaderSpeed}}s ease 0s {{loopLoader ? 'infinite' : 1}}  normal none;
		}
		.usgsboxshake path{
			fill: none;
			stroke-width: 14;
			stroke-linecap: round;
			stroke-linejoin: round;
			stroke-opacity: 1;
			stroke-miterlimit: 4;
		}
		.usgsboxshake rect{
			stroke-width: 90px;
		}
		
		.usgsboxshake.loader-black path{
			stroke: var(--text);
			fill: var(--text);
		}
		.usgsboxshake.loader-black rect{
     		 stroke: var(--text);
		}

		.usgsboxshake.loader-white path{
			stroke: var(--background);
			fill: var(--background);
		}
		.usgsboxshake.loader-white rect{
     		 stroke: var(--background);
		}

		.usgsboxshake.loader-green path{
			stroke: var(--usgsGreen);
			fill: var(--usgsGreen);
		}
		.usgsboxshake.loader-green rect{
     		 stroke: var(--usgsGreen);
		}

		.usgsboxshake.loader-blue path{
			stroke: var(--usgsBlue);
			fill: var(--usgsBlue);
		}
		.usgsboxshake.loader-blue rect{
     		 stroke: var(--usgsBlue);
		}


		<!-- Pulse -->
		.wimpinpulse .loader-object{
  			animation: pulse {{loopLoader ? (loaderSpeed / 2) : loaderSpeed}}s ease 0s {{loopLoader ? 'infinite' : 1}}  normal none;
		}
		.wimpinpulse path {
			fill: white;
		}
		.wimpinpulse .svg-wimpin-main {
			stroke-width: 20;
			stroke: black;
			fill: rgb(2, 134, 255);
		}
		<!-- USGS Wave Pulse -->
		.usgswavepulse .loader-object {
			animation: pulse {{loopLoader ? (loaderSpeed / 2) : loaderSpeed}}s ease 0s {{loopLoader ? 'infinite' : 1}}  normal none;
		}
		.usgswavepulse path{
			fill: none;
			stroke-width: 12;
			stroke-linecap: round;
			stroke-linejoin: round;
			stroke-opacity: 1;
			stroke-miterlimit: 4;
		}
		.usgswavepulse.loader-black path{
			stroke: var(--text);
		}
		.usgswavepulse.loader-white path{
			stroke: var(--background);
		}
		.usgswavepulse.loader-blue path{
			stroke: var(--usgsBlue);
		}
		.usgswavepulse.loader-green path{
			stroke: var(--usgsGreen);
		}
		<!-- USGS Box Pulse -->
		.usgsboxpulse .loader-object{
			animation: pulse {{loopLoader ? (loaderSpeed / 2) : loaderSpeed}}s ease 0s {{loopLoader ? 'infinite' : 1}}  normal none;
		}
		.usgsboxpulse path{
			fill: none;
			stroke-width: 40;
			stroke-linecap: round;
			stroke-linejoin: round;
			stroke-opacity: 1;
			stroke-miterlimit: 4;
		}
		.usgsboxpulse rect{
  			stroke-width: 90px;
		}
		.usgsboxpulse.loader-black path{
			stroke: var(--text);
			fill: var(--text);
		}
		.usgsboxpulse.loader-black rect{
			stroke: var(--text);
		}
		.usgsboxpulse.loader-white path{
			stroke: var(--background);
			fill: var(--background);
		}
		.usgsboxpulse.loader-white rect{
			stroke: var(--background);
		}
		.usgsboxpulse.loader-blue path{
			stroke: var(--usgsBlue);
			fill: var(--usgsBlue);
		}
		.usgsboxpulse.loader-blue rect{
			stroke: var(--usgsBlue);
		}
		.usgsboxpulse.loader-green path{
			stroke: var(--usgsGreen);
			fill: var(--usgsGreen);
		}
		.usgsboxpulse.loader-green rect{
			stroke: var(--usgsGreen);
		}


		<!-- Line -->
		.loader-line-track{
			display: block;
			height: 6px;
			width: {{loaderSize}}px;
			max-width: {{loaderSize}}px;
			z-index: 1000;
			position: relative;
			overflow: hidden;
		}
		.loader-line{
			display: block;
			position: absolute;
			left: 0;
			height: 100%;
			width: 0px;
			background-color: var(--text);
			margin: 0 auto;
		}
		.loader-black .loader-line{background-color:var(--text);}
		.loader-white .loader-line{background-color:var(--background);}
		.loader-green .loader-line{background-color:var(--usgsGreen);}
		.loader-blue .loader-line{background-color:var(--usgsBlue);}
		.linestroke .loader-line {
			animation: animation-line-stroke  {{loopLoader ? (loaderSpeed / 2) : loaderSpeed}}s ease-in-out 0s {{loopLoader ? 'infinite' : 1}}  normal none;
		}
		.lineshake .loader-line {
			animation: animation-line-shake  {{loopLoader ? (loaderSpeed / 2) : loaderSpeed}}s ease 0s {{loopLoader ? 'infinite' : 1}}  normal none;
		}
		.linepulse .loader-line {
			animation: animation-line-pulse  {{loopLoader ? (loaderSpeed / 2) : loaderSpeed}}s ease-in-out 0s {{loopLoader ? 'infinite' : 1}}  normal none;
		}
		<!-- Fullscreen, top of page -->
		.fillparent .loader-line-track{
			width: 100%;
			position: absolute;
			top: 0;
			left: 0;
			max-width: unset;
		}
		<!-- Fullscreen, top of page -->
		.fullscreen .loader-line-track{
			width: 100vw;
			position: fixed;
			top: 0;
			left: 0;
			max-width: unset;
		}


	</v-style>


	<!-- Output -->
	<!-- Three sections - HTML, CSS (animation), and CSS (element) -->
	<h2 class="mtop-xl">Output</h2>
	<div class="sg--code-output mtop-md">


	<!-- v-if="animationShape == 'usgswave'" -->


		<div class="sg--codeblock">

			<!-- Copy to clipboard -->
			<button @click="copyBlock('elementHTML')" class="button small transparent mtop-xs mleft-xs">
				<i class="far fa-copy"></i>
				<span>Copy to Clipboard</span>
			</button>

			<pre>
				<code id="elementHTML">
<b>&lt;!-- Element HTML --&gt;</b>
&lt;div class="loader-wrapper"&gt;

  &lt;div class="loader-object"&gt;<span v-if="animationShape == 'wimpin'">
    &lt;!-- WIM Pin SVG --&gt;
    &lt;!--?xml version="1.0" encoding="UTF-8"?--&gt;
    &lt;svg width="340" height="345" viewBox="0 0 340 345" xmlns="http://www.w3.org/2000/svg"&gt;
      &lt;path d="M78.5006 261.446L138.781 321.727C156.132 339.077 184.262 339.077 201.612 321.727L261.893 261.446C312.535 210.804 312.535 128.696 261.893 78.054C211.25 27.4117 129.143 27.4117 78.5005 78.054C27.8582 128.696 27.8582 210.804 78.5006 261.446Z" class="svg-wimpin-main" &gt;&lt;/path&gt;
      &lt;mask id="mask0_682_231" style="mask-type: alpha" maskUnits="userSpaceOnUse" x="50" y="50" width="240" height="275"&gt;
        &lt;path d="M194.541 314.656C181.096 328.101 159.297 328.101 145.852 314.656L85.5716 254.375C38.8345 207.638 38.8345 131.862 85.5716 85.1251V85.1251C132.309 38.388 208.085 38.388 254.822 85.1251V85.1251C301.559 131.862 301.559 207.638 254.822 254.375L194.541 314.656Z" class="svg-wimpin-america"&gt;&lt;/path&gt;
      &lt;/mask&gt;
      &lt;g mask="url(#mask0_682_231)"&gt;
        &lt;path d="M-7.07967 114.854C11.3079 106.879 38.7544 91.8499 32.5097 120.279C26.265 148.709 46.028 182.649 59.767 186.14C73.5059 189.631 119.106 193.256 116.462 207.705C113.819 222.155 95.7865 227.555 111.063 234.05C126.339 240.545 149.029 245.177 140.663 257.319C132.296 269.461 108.792 288.924 124.267 289.267C139.741 289.61 155.651 267.922 167.606 262.789C179.56 257.656 213.431 218.285 195.372 212.424C177.312 206.564 153.08 188.178 140.591 191.799C128.102 195.419 53.3472 167.994 86.9843 155.252C120.621 142.51 106.738 167.693 120.23 165.563C133.722 163.434 117.367 132.415 143.788 115.384C170.21 98.3527 152.438 88.3845 124.196 64.0316C95.9539 39.6788 49.3645 66.8117 34.025 69.5341C21.7535 71.712 1.50875 100.655 -7.07967 114.854Z"&gt;&lt;/path&gt;
      &lt;/g&gt;
      &lt;mask id="mask1_682_231" style="mask-type: alpha" maskUnits="userSpaceOnUse" x="50" y="50" width="240" height="275"&gt;
        &lt;path d="M194.541 314.656C181.096 328.101 159.297 328.101 145.852 314.656L85.5716 254.375C38.8345 207.638 38.8345 131.862 85.5716 85.1251V85.1251C132.309 38.388 208.085 38.388 254.822 85.1251V85.1251C301.559 131.862 301.559 207.638 254.822 254.375L194.541 314.656Z" class="svg-wimpin-europe"&gt;&lt;/path&gt;
      &lt;/mask&gt;
      &lt;g mask="url(#mask1_682_231)"&gt;
        &lt;path d="M178.32 48.243C173.763 57.1546 200.649 93.0039 210.058 87.429C219.467 81.8541 243.11 55.615 252.798 64.1441C262.485 72.6733 238.261 103.337 246.392 104.073C254.523 104.809 251.976 110.649 258.537 105.916C303.564 73.4332 270.154 124.259 269.249 134.281C268.345 144.304 251.276 142.09 257.301 150.622C263.327 159.154 254.594 179.946 264.342 181.794C274.09 183.643 271.144 194.409 268.656 199.607C266.167 204.805 218.702 234.165 234.92 240.462C299.919 344.207 271.295 222.617 283.196 211.473L318.686 67.0613L217.137 48.2123L178.32 48.243Z" &gt;&lt;/path&gt;
      &lt;/g&gt;
    &lt;/svg&gt;</span><span v-if="animationShape == 'usgswave'">
    &lt;!-- USGS Wave SVG --&gt;
    &lt;!--?xml version="1.0" encoding="UTF-8"?--&gt;
    &lt;svg width="392" height="306" viewBox="0 0 392 306" fill="none" xmlns="http://www.w3.org/2000/svg"&gt;
      &lt;path d="M200.5 197.5C321 341 375 295 389.5 289.017" class="animation-usgswave-1"&gt;&lt;/path&gt;
      &lt;path d="M200.5 202.5C334.5 312.5 375 253.5 389.5 247.517" class="animation-usgswave-2"&gt;&lt;/path&gt;
      &lt;path d="M4 256.368C136.5 151 174.5 178.5 219 218.5C321 288.5 356.5 221.868 389.5 211.368" class="animation-usgswave-3"&gt;&lt;/path&gt;
      &lt;path d="M4 214C96.0567 126.225 143.014 155.782 175.015 177.389C184.845 184.026 194.553 191.035 204.377 197.68C298.097 261.074 358.078 178.998 389.5 169" class="animation-usgswave-4"&gt;&lt;/path&gt;
      &lt;path d="M4 174C151 63 138.5 215.5 267.5 200.5C311 189.5 340.5 154 389.5 129" class="animation-usgswave-5"&gt;&lt;/path&gt;
      &lt;path d="M4 129C123 49.5 141.5 193 249 172.5C292.5 161.5 340.5 109 389.5 84" class="animation-usgswave-6"&gt;&lt;/path&gt;
      &lt;path d="M4 92C106.5 65 128.5 165 218.5 154C262 143 288 101.5 389.5 47" class="animation-usgswave-7"&gt;&lt;/path&gt;
      &lt;path d="M3.5 59C106.5 52.5 100.5 132.5 184 128.5C240 121 287.5 59 389 4.5" class="animation-usgswave-8"&gt;&lt;/path&gt;
    &lt;/svg&gt;</span><span v-if="animationShape == 'usgsbox'">
    &lt;!-- USGS Box SVG --&gt;
    &lt;!--?xml version="1.0" encoding="UTF-8"?--&gt;
    &lt;svg width="100%" height="100%" fill="none" viewBox="0 0 1271 1379" xmlns="http://www.w3.org/2000/svg" &gt;
      &lt;rect x="45.0002" y="45.0001" width="1181" height="1289" class="usgsbox-1"&gt;&lt;/rect&gt;
      &lt;rect x="1226" y="1334" width="1181" height="1289" transform="rotate(-180 1226 1334)" class="usgsbox-2" &gt;&lt;/rect&gt;
      &lt;path d="M54.5001 873.28C54.5001 911.78 54.0001 925.78 54.0001 994.78C150 933.78 247.5 863 370.5 787C598.5 707.5 684.5 880 786.5 961C831 994.5 880.5 1075.5 1034.5 1119C1122 1133 1176.5 1115.5 1218 1095C1218 1030 1217 1023 1217 970C1120 1040.5 990.5 1090 839.5 970C759.5 896 745 894.5 662 797C516.5 694 370.5 648.5 251 740.279C171.988 794.846 99.5001 841.28 54.5001 873.28Z" class="usgsbox-3"&gt;&lt;/path&gt;
      &lt;path  d="M54.5001 873.279C54.5001 911.779 54.0001 925.78 54.0001 994.78C133.68 944.15 214.393 886.783 309.862 825.286C349.898 799.496 393.181 776.946 440.469 771.305C622.135 749.635 701.206 900.864 836.5 954C921.253 989.601 990.549 980.218 1050.41 954.602C1065.69 948.064 1079.79 939.139 1093.44 929.657C1144.08 894.47 1188.65 866.088 1218 847.28L1218 722.28C1113 784 1058.5 839.5 980.5 873.279C888.5 920.5 745 894.5 662 797C516.5 694 370.5 648.5 251 740.279C171.988 794.846 99.5001 841.279 54.5001 873.279Z"  class="usgsbox-4" &gt;&lt;/path&gt;
      &lt;path d="M1216.5 600C1216.5 561.5 1217 547.5 1217 478.5C1121 539.5 1020 614 897 690C726.5 806 606 740 515.5 659C323.5 529 208 499 53.0005 626V751C163.5 688 205 606.5 376.5 631.5C522 665 524 771 726.5 823C831.578 854.254 896.5 823 1020 733C1099.01 678.433 1171.5 632 1216.5 600Z" class="usgsbox-5"&gt;&lt;/path&gt;
      &lt;path d="M1216 357.5V236C996.496 363.9 758.695 564.242 631.999 603.069C599.055 613.165 563.255 611.37 529.124 606.641C353.567 582.316 311.249 378.766 52.0002 403.5V506C188.383 454.709 279.008 492.005 353.685 552.725C377.294 571.922 401.094 590.996 426.764 607.335C494.778 650.626 557.824 690.145 655.5 689C779 684 966 507 1216 357.5Z" class="usgsbox-6"&gt;&lt;/path&gt;
    &lt;/svg&gt;</span><span v-if="animationShape == 'line'">
    &lt;div class="loader-line-track"&gt;
      &lt;div class="loader-line"&gt;&lt;/div&gt;
    &lt;/div&gt;</span>

  &lt;/div&gt;
<!-- Title and Subtitle -->
  <span v-if="loaderTitle && display != 'blockloader' && animationShape != 'line'">
  &lt;!-- Title and Subtitle --&gt;
  &lt;div class="loader-title"&gt;
    {{loaderTitle}}
  &lt;/div&gt;</span><span v-if="loaderSubtitle && display != 'blockloader'&& animationShape != 'line'">
  &lt;div class="'loader-subtitle"&gt;
    {{loaderSubtitle}}
  &lt;/div&gt;</span>
&lt;/div&gt;

				</code>
			</pre>
		</div>
		<div class="sg--codeblock">

			<!-- Copy to clipboard -->
			<button @click="copyBlock('loaderCSS')" class="button small transparent mtop-xs mleft-xs">
				<i class="far fa-copy"></i>
				<span>Copy to Clipboard</span>
			</button>

			<pre>	<code id="loaderCSS">
<b>/* Loader Element CSS */</b>

/* Colors */
.loader-wrapper{
  color: {{ loaderColor == 'white' ? 'white' : 'black' }};
  <span v-if="animationShape != 'line' && (display == 'fullscreen' || display == 'fillparent')">background-color: {{ loaderColor == 'white' ? 'rgba(10,10,30,0.65)' : 'rgba(255,255,255,0.65)' }};</span>
}

/*  Display and positioning */<span v-if="display == 'blockloader'">
.loader-wrapper{
  display: block;
}</span><span v-if="display == 'fullscreen' && animationShape != 'line'">
.loader-wrapper{
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10000;
  margin: 0 auto;
}</span><span v-if="display == 'fillparent' && animationShape != 'line'">
.loader-wrapper{
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
}</span><span v-if="animationShape != 'line' && (display == 'fullscreen' || display == 'fillparent')">
/*  Center the SVG */
.loader-wrapper .loader-object{
  margin: 0 auto;
}</span>
<span v-if="animationShape != 'line'">
/* Set size */
.loader-object{
  max-width: {{loaderSize}}px;
  width: {{loaderSize}}px;
  transform-origin: center center;
}
.loader-object svg{
  max-width: 100%;
  max-height: {{loaderSize}}px;
  max-width: {{loaderSize}}px;
}

/* Title and subtitle */
.loader-title,
.loader-subtitle{
  display: block;
  width: 100%;
  text-align: center;
}
.loader-title{
  font-size: 20px;
  font-weight: 700;
  margin-top: 30px;
}
.loader-subtitle{
  font-size: 14px;
  padding-top: 15px;
  letter-spacing: 0.2px;
}</span>
<span v-if="animationShape == 'line'">
.loader-line-track{
  display: block;
  height: 6px;
  width: {{loaderSize}}px;
  max-width: {{loaderSize}}px;
  z-index: 1000;
  position: relative;
  overflow: hidden;
}
.loader-line{
  display: block;
  position: absolute;
  left: 0;
  height: 100%;
  width: 0px;
  background-color: {{loaderColor}};
  margin: 0 auto;
}<span v-if="animationType == 'stroke'">
.loader-line {
  animation: animation-line-stroke  {{loopLoader ? (loaderSpeed / 2) : loaderSpeed}}s ease-in-out 0s {{loopLoader ? 'infinite' : 1}}  normal none;
}</span><span v-if="animationType == 'shake'">
.loader-line {
  animation: animation-line-shake  {{loopLoader ? (loaderSpeed / 2) : loaderSpeed}}s ease 0s {{loopLoader ? 'infinite' : 1}}  normal none;
}</span><span v-if="animationType == 'pulse'">
.loader-line {
  animation: animation-line-pulse  {{loopLoader ? (loaderSpeed / 2) : loaderSpeed}}s ease-in-out 0s {{loopLoader ? 'infinite' : 1}}  normal none;
}</span>
<span v-if="display == 'fillparent'">
<!-- Fullscreen, top of page -->
.loader-line-track{
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  max-width: unset;
}</span><span v-if="display == 'fullscreen'">
<!-- Fullscreen, top of page -->
.loader-line-track{
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  max-width: unset;
}
</span>

</span>
<span v-if="animationShape == 'wimpin' && animationType == 'stroke'">
/* WIM Pin Draw SVG Styles */
.wimpinstroke path {
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-opacity: 1;
  stroke-miterlimit: 4;
  fill: white;
}
.wimpinstroke .svg-wimpin-main {
  stroke-width: 20;
  stroke: black;
  animation: animation-pin-outline  {{loopLoader ? (loaderSpeed / 2) : loaderSpeed}}s ease 0s {{loopLoader ? 'infinite' : 1}}  alternate none, animation-pin-fill  {{loopLoader ? (loaderSpeed / 2) : loaderSpeed}}s ease 0s {{loopLoader ? 'infinite' : 1}}  alternate forwards;
}
.wimpinstroke .svg-wimpin-america {
  animation: animation-pin-land-fill {{loopLoader ? (loaderSpeed / 2) : loaderSpeed}}s ease 0s {{loopLoader ? 'infinite' : 1}}  alternate none;
}
.wimpinstroke .svg-wimpin-europe {
  animation: animation-pin-land-fill {{loopLoader ? (loaderSpeed / 2) : loaderSpeed}}s ease 0.25s {{loopLoader ? 'infinite' : 1}}  alternate none;
}
</span><span v-if="animationShape == 'usgswave' && animationType == 'stroke'">
/* USGS Wave Draw SVG Styles */
.usgswavestroke path {
  fill: none;
  stroke-width: 14;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-opacity: 1;
  stroke-miterlimit: 4;
}
.usgswavestroke{
  stroke: {{ loaderColor == 'black' && 'black' || loaderColor == 'white' && 'white' || loaderColor == 'green' && '#016D4D' || loaderColor == 'blue' && '#00264C' }};
}
.usgswavestroke .animation-usgswave-1 {
  animation: animation-wave-stroke-1 {{loaderSpeed}}s ease-in-out .28s {{loopLoader ? 'infinite' : 1}}  normal none;
}
.usgswavestroke .animation-usgswave-2 {
  animation: animation-wave-stroke-2 {{loaderSpeed}}s ease-in-out .28s {{loopLoader ? 'infinite' : 1}}  normal none;
}
.usgswavestroke .animation-usgswave-3 {
  animation: animation-wave-stroke-3 {{loaderSpeed}}s ease-in-out .3s {{loopLoader ? 'infinite' : 1}}  normal none;
}
.usgswavestroke .animation-usgswave-4 {
  animation: animation-wave-stroke-4 {{loaderSpeed}}s ease-in-out .25s {{loopLoader ? 'infinite' : 1}}  normal none;
}
.usgswavestroke .animation-usgswave-5 {
  animation: animation-wave-stroke-5 {{loaderSpeed}}s ease-in-out .2s {{loopLoader ? 'infinite' : 1}}  normal none;
}
.usgswavestroke .animation-usgswave-6 {
  animation: animation-wave-stroke-6 {{loaderSpeed}}s ease-in-out .15s {{loopLoader ? 'infinite' : 1}}  normal none;
}
.usgswavestroke .animation-usgswave-7 {
  animation: animation-wave-stroke-7 {{loaderSpeed}}s ease-in-out .1s {{loopLoader ? 'infinite' : 1}}  normal none;
}
.usgswavestroke .animation-usgswave-8 {
	animation: animation-wave-stroke-8 {{loaderSpeed}}s ease-in-out .05s {{loopLoader ? 'infinite' : 1}}  normal none;
}</span><span v-if="animationShape == 'usgsbox' && animationType == 'stroke'">
/* USGS Box Draw SVG Styles */
.usgsboxstroke path {
  stroke-width: 44;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke: #001028;
  stroke-opacity: 1;
  stroke-miterlimit: 4;
}
.usgsboxstroke rect {
  fill: transparent;
  stroke: #001028;
  stroke-width: 90px;
}
.usgsboxstroke path {
  stroke: {{ loaderColor == 'black' && 'black' || loaderColor == 'white' && 'white' || loaderColor == 'green' && '#016D4D' || loaderColor == 'blue' && '#00264C' }};
  fill: {{ loaderColor == 'black' && 'black' || loaderColor == 'white' && 'white' || loaderColor == 'green' && '#016D4D' || loaderColor == 'blue' && '#00264C' }};
}
.usgsboxstroke rect {
  stroke: {{ loaderColor == 'black' && 'black' || loaderColor == 'white' && 'white' || loaderColor == 'green' && '#016D4D' || loaderColor == 'blue' && '#00264C' }}
}
.usgsboxstroke .usgsbox-1 {
  animation: animaton-usgsbox-stroke-1 {{loopLoader ? (loaderSpeed / 2) : loaderSpeed}}s ease-in-out 0s {{loopLoader ? 'infinite' : 1}}  alternate none;
}
.usgsboxstroke .usgsbox-2 {
  animation: animaton-usgsbox-stroke-2 {{loopLoader ? (loaderSpeed / 2) : loaderSpeed}}s ease-in-out 0s {{loopLoader ? 'infinite' : 1}}  alternate none;
}
.usgsboxstroke .usgsbox-3 {
  animation: animaton-usgsbox-fill-3 {{loopLoader ? (loaderSpeed / 2) : loaderSpeed}}s ease-in-out 0s {{loopLoader ? 'infinite' : 1}}  alternate none;
}
.usgsboxstroke .usgsbox-4 {
  animation: animaton-usgsbox-fill-4 {{loopLoader ? (loaderSpeed / 2) : loaderSpeed}}s ease-in-out 0s {{loopLoader ? 'infinite' : 1}}  alternate none;
}
.usgsboxstroke .usgsbox-5 {
  animation: animaton-usgsbox-fill-5 {{loopLoader ? (loaderSpeed / 2) : loaderSpeed}}s ease-in-out 0s {{loopLoader ? 'infinite' : 1}}  alternate none;
}
.usgsboxstroke .usgsbox-6 {
  animation: animaton-usgsbox-fill-6 {{loopLoader ? (loaderSpeed / 2) : loaderSpeed}}s ease-in-out 0s {{loopLoader ? 'infinite' : 1}}  alternate none;
}</span><span v-if="animationShape == 'wimpin' && animationType == 'shake'">
/* WIM Pin Shake styles */
.wimpinshake .loader-object {
  animation: shake {{loopLoader ? (loaderSpeed / 2) : loaderSpeed}}s ease-in-out 0s {{loopLoader ? 'infinite' : 1}}  normal none;
}
.wimpinshake path {
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-opacity: 1;
  stroke-miterlimit: 4;
  fill: white;
}
.wimpinshake .svg-wimpin-main {
  stroke-width: 20;
  stroke: black;
  fill: rgb(2, 134, 255);
}</span><span v-if="animationType == 'shake' && (animationShape == 'usgswave' || animationShape == 'usgsbox')">
/* USGS Shake styles */
.loader-wrapper .loader-object {
  animation: shake {{loopLoader ? (loaderSpeed / 2) : loaderSpeed}}s ease-in-out 0s {{loopLoader ? 'infinite' : 1}}  normal none;
}
.loader-wrapper path{
  fill: none;
  stroke-width: 40;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke: black;
  stroke-opacity: 1;
  stroke-miterlimit: 4;
}
.loader-wrapper rect{
  stroke-width: 90px;
  stroke: {{ loaderColor == 'black' && 'black' || loaderColor == 'white' && 'white' || loaderColor == 'green' && '#016D4D' || loaderColor == 'blue' && '#00264C' }};
}
.loader-wrapper path{
  stroke: {{ loaderColor == 'black' && 'black' || loaderColor == 'white' && 'white' || loaderColor == 'green' && '#016D4D' || loaderColor == 'blue' && '#00264C' }};
  fill: {{ loaderColor == 'black' && 'black' || loaderColor == 'white' && 'white' || loaderColor == 'green' && '#016D4D' || loaderColor == 'blue' && '#00264C' }};
}
</span><span v-if="animationType == 'pulse' && animationShape == 'wimpin'">
/* WIM Pin Pulse styles */
.wimpinpulse .loader-object {
  animation: pulse {{loopLoader ? (loaderSpeed / 2) : loaderSpeed}}s ease-in-out 0s {{loopLoader ? 'infinite' : 1}}  normal none;
}
.wimpinpulse path {
  fill: white;
}
.wimpinpulse .svg-wimpin-main {
  stroke-width: 20;
  stroke: black;
  fill: rgb(2, 134, 255);
}
</span><span v-if="animationType == 'pulse' && (animationShape == 'usgswave' || animationShape == 'usgsbox')">
/* USGS Pulse styles */
.loader-wrapper .loader-object {
  animation: pulse {{loopLoader ? (loaderSpeed / 2) : loaderSpeed}}s ease-in-out 0s {{loopLoader ? 'infinite' : 1}}  normal none;
}
.loader-wrapper path{
  fill: none;
  stroke-width: 12;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke: #001028;
  stroke-opacity: 1;
  stroke-miterlimit: 4;
  stroke: {{ loaderColor == 'black' && 'black' || loaderColor == 'white' && 'white' || loaderColor == 'green' && '#016D4D' || loaderColor == 'blue' && '#00264C' }};
}
</span><span v-if="animationType == 'pulse' && animationShape == 'usgsbox'">
.loader-wrapper path{
  fill: {{ loaderColor == 'black' && 'black' || loaderColor == 'white' && 'white' || loaderColor == 'green' && '#016D4D' || loaderColor == 'blue' && '#00264C' }};
  stroke-width: 40;
}
.loader-wrapper rect{
  stroke-width: 90px;
  stroke: {{ loaderColor == 'black' && 'black' || loaderColor == 'white' && 'white' || loaderColor == 'green' && '#016D4D' || loaderColor == 'blue' && '#00264C' }};
}
</span>


				</code>
			</pre>
		</div>
		<div class="sg--codeblock">

			<!-- Copy to clipboard -->
			<button @click="copyBlock('animationCSS')" class="button small transparent mtop-xs mleft-xs">
				<i class="far fa-copy"></i>
				<span>Copy to Clipboard</span>
			</button>

			<pre>	<code id="animationCSS">
<b>/* Loader Animation CSS */</b>
<span v-if="animationType == 'stroke' && animationShape == 'wimpin'">
/* WIM Pin Draw/Stroke animation */
@keyframes animation-pin-outline {
  0% {stroke-dashoffset: 1512.931396484375px;stroke-dasharray: 1512.931396484375px;}
  10% {stroke-dashoffset: 1512.931396484375px; }
  90% {stroke-dashoffset: 0;}
  100% { stroke-dashoffset: 0;stroke-dasharray: 1512.931396484375px;}
}
@keyframes animation-pin-fill {
  0% {fill: transparent;}
  32% {fill: transparent;}
  65% {fill: rgb(2, 134, 255);}
  100% {fill: rgb(2, 134, 255);}
}
@keyframes animation-pin-land-fill {
  0% {opacity: 0;}
  50% {opacity: 0;}
  58% {opacity: 1;}
  100% {opacity: 1;}
}</span><span v-if="animationType == 'stroke' && animationShape == 'usgswave'">
/* USGS Wave Draw/Stroke animation */
@keyframes animation-wave-stroke-1 {
  0% { opacity: 0; stroke-dashoffset: 230.412353515625px; stroke-dasharray: 230.412353515625px; }
  10%{opacity: 1;}
  25% { stroke-dashoffset: 230.412353515625px; stroke-dasharray: 230.412353515625px;  }
  50% { stroke-dashoffset: 0; stroke-dasharray: 230.412353515625px; }
  62%{opacity: 1;}
  80% { opacity: 0;}
  100% { opacity: 0;}
}
@keyframes animation-wave-stroke-2 {
  0% { opacity: 0; stroke-dashoffset: 214.1689453125px; stroke-dasharray: 214.1689453125px; }
  10%{opacity: 1;}
  25% { stroke-dashoffset: 214.1689453125px; stroke-dasharray: 214.1689453125px; }
  50% { stroke-dashoffset: 0; stroke-dasharray: 214.1689453125px; }
  62%{opacity: 1;}
  80% { opacity: 0;}
  100% { opacity: 0;}
}
@keyframes animation-wave-stroke-3 {
  0% { opacity: 0; stroke-dashoffset: 435.21282958984375px; stroke-dasharray: 435.21282958984375px; }
  10%{opacity: 1;}
  50% { stroke-dashoffset: 0; stroke-dasharray: 435.21282958984375px;}
  65%{opacity: 1;}
100% { opacity: 0;}
}
@keyframes animation-wave-stroke-4 {
  0% { opacity: 0; stroke-dashoffset: 435.42230224609375px; stroke-dasharray: 435.42230224609375px;}
  10%{opacity: 1;}
  50% { stroke-dashoffset: 0; stroke-dasharray: 435.42230224609375px;  }
  65%{opacity: 1;}
  100% { opacity: 0;}
}
@keyframes animation-wave-stroke-5 {
  0% { opacity: 0; stroke-dashoffset: 436.1790771484375px; stroke-dasharray: 436.1790771484375px;  }
  10%{opacity: 1;}
  50% { stroke-dashoffset: 0; stroke-dasharray: 436.1790771484375px;}
  65%{opacity: 1;}
  100% { opacity: 0;}
}
@keyframes animation-wave-stroke-6 {
  0% { opacity: 0; stroke-dashoffset: 437.32952880859375px; stroke-dasharray: 437.32952880859375px;}
  10%{opacity: 1;}
  50% { stroke-dashoffset: 0; stroke-dasharray: 437.32952880859375px; }
  65%{opacity: 1;}
  100% { opacity: 0;}
}
@keyframes animation-wave-stroke-7 {
  0% { opacity: 0; stroke-dashoffset: 435.7785339355469px; stroke-dasharray: 435.7785339355469px;  }
  10%{opacity: 1;}
  50% { stroke-dashoffset: 0; stroke-dasharray: 435.7785339355469px; }
  65%{opacity: 1;}
  100% { opacity: 0;}
}
@keyframes animation-wave-stroke-8 {
  0% { opacity: 0; stroke-dashoffset: 442.9269714355469px; stroke-dasharray: 442.9269714355469px;}
  10%{opacity: 1;}
  50% { stroke-dashoffset: 0; stroke-dasharray: 442.9269714355469px;}
  65%{opacity: 1;}
  100% { opacity: 0;}
}</span><span v-if="animationType == 'stroke' && animationShape == 'usgsbox'">
/* USGS Box Draw/Stroke animation */
@keyframes animaton-usgsbox-stroke-1 {
	0% {stroke-dashoffset: 4942px;stroke-dasharray: 4942px;}
	15% {stroke-dashoffset: 4942px;}
	70% {stroke-dashoffset: 0;}
	100% {stroke-dashoffset: 0;stroke-dasharray: 4942px;}
}
@keyframes animaton-usgsbox-stroke-2 {
	0% {stroke-dashoffset: 4942px;stroke-dasharray: 4942px;}
	15% {stroke-dashoffset: 4942px;stroke-dasharray: 4942px;}
	70% {stroke-dashoffset: 0;}
	100% {stroke-dashoffset: 0;stroke-dasharray: 4942px;}
}
@keyframes animaton-usgsbox-fill-3 {
  	0% {opacity: 0;}
  	50% {opacity: 0;}
  	70% {opacity: 1;}
  	100% {opacity: 1;}
}
@keyframes animaton-usgsbox-fill-4 {
	0% {opacity: 0;}
	55% {opacity: 0;}
  	75% {opacity: 1;}
  	100% {opacity: 1;}
}
@keyframes animaton-usgsbox-fill-5 {
  	0% {opacity: 0;}
	60% {opacity: 0;}
  	80% {opacity: 1;}
  	100% {opacity: 1;}
}
@keyframes animaton-usgsbox-fill-6 {
 	0% {opacity: 0;}
  	65% { opacity: 0;}
  	85% {opacity: 1;}
  	100% {opacity: 1;}
}</span><span v-if="animationType == 'shake' && animationShape != 'line'">
/* Earthquake/shake animation */
@keyframes shake {
  0% {transform: translate(0, 0);}
  11% {transform: translate(1px, -3px);}
  18% { transform: translate(3px, 0px);}
  23% {transform: translate(-1px, 2px);}30.5% {transform: translate(2px, 3px);}
  37% {transform: translate(-1px, -3px);}
  43% {transform: translate(2px, -1px);}
  48% {transform: translate(-1px, -3px);}
  54% {transform: translate(3px, 0px);}
  59% {transform: translate(0px, -2px);}
  66% {transform: translate(-3px, 0px);}
  72% {transform: translate(-2px, -3px);}
  77% {transform: translate(-0px, -0px);}
  83% {transform: translate(-3px, 2px);}
  89% {transform: translate(-3px, -2px);}
  94% {transform: translate(3px, -2px);}
  100% {transform: translate(0, 0);}
}
</span><span v-if="animationType == 'pulse' && animationShape != 'line'">
/* Pulse animation */
@keyframes pulse {
  0% {transform: scale(1);}
  20% {transform: scale(1);}
  40% {transform: scale(1.15);}
  60% {transform: scale(1.05);}
  85% {transform: scale(1.2);}
  100% {transform: scale(1);}
}
</span><span v-if="animationShape == 'line'">
<span v-if="animationType == 'stroke'">/* Draw Animation */
@keyframes animation-line-stroke {
  0%{
    width: 0%;
    left: 0%;
  }
  50%{
    left: 0%;
    width: 100%;
  }
  100%{
    width: 0%;
    left: 100%;
  }
}</span><span v-if="animationType == 'shake'">
/* Shake animation */
@keyframes animation-line-shake {
  0%{
    width: 40%;
    left: 30%;
  }
  20%{left: 15%;}
  40%{left: 45%;}
  60%{left: 25%;}
  80%{left:45%;}
  100%{
    width: 40%;
    left: 30%;
  }
}
</span><span v-if="animationType == 'pulse'">
@keyframes animation-line-pulse {
  0%{
    width: 0%;
    left: 50%;
  }
  15%{
    width: 0%;
    left: 50%;
  }
  30%{
    width: 60%;
    left: 20%;
  }
  50%{
    width: 20%;
    left: 40%;
  }
  70%{
    width: 100%;
    left: 0%;
  }
  85%{
    width: 0%;
    left: 50%;
  }
  100%{
    width: 0%;
    left: 50%;
  }
}
</span></span>
				</code>
			</pre>
		</div>

	</div>


  </div>
</template>

<script>
export default {
  name: "loaders",

  components: {},

  mixins: [],

  data() {
    return {
		animationShape: "usgswave",
		animationType: "stroke",
		loaderColor: "black",
		loaderSpeed: 5,
		loaderSize: 120,
		loopLoader: true,
		display: "blockloader",
		loaderTitle: "Loading...",
		loaderSubtitle: "Downloading map layers.",

	  	showFullscreen: true,
    };
  },

  computed: {},

  watch: {},

  mounted() {},
  created: function () {},

  beforeDestroy() {},

  methods: {

		// In non-loop mode, this briefly resets the class to re-run the animation
		rerunAnimation(){
			let _this = this;

			var currentType = this.animationType;
			this.animationType = "";

			setTimeout(function(){
				_this.animationType = currentType;
			}, 10);
		}
	},
};
</script>


<style lang="scss">

// Filter area for settings
.sg--filters{
	display: flex;
	flex-wrap: wrap;
	gap: 45px;
}

// Stage wrapper for animation display
.sg--loader-stage{
	display: block;
	border: 1px solid var(--border);
	width: 100%;
	max-width: var(--maxWidthLarge);
	box-sizing: border-box;
	position: relative;
	border-radius: var(--borderRadius);
	background-color: var(--grey100);

	.loader-wrapper{
		border-radius: var(--borderRadius);
	}

	&.blockloader{
		box-sizing: border-box;
		padding: 15px 25px;
	}
	&.fullscreen{
		border: none;
	}
	&.fillparent{
		height: 420px;
	}
}

// Disable clicks / click through
.noclicks{
	pointer-events: none;
}


// Output
// Output
// Output
.sg--code-output{
	display: flex;
	gap: 30px;
	width: 100%;

	@media (max-width: $screenSM) {
		flex-wrap: wrap;
	}

	.sg--codeblock{
		background-color: var(--layer);
		flex-grow: 3;
		max-width: 500px;
		overflow: auto;
		max-height: 500px;

		pre{
			width: 100%;
			background-color: transparent;
			font-family: var(--monospace);
			font-size: 12px;
		}
	}
}

// Stroke Wave Animations
// Stroke Wave Animations
// Stroke Wave Animations
@keyframes animation-wave-stroke-1 {
  0% { opacity: 0; stroke-dashoffset: 230.412353515625px; stroke-dasharray: 230.412353515625px; }
  10%{opacity: 1;}
  25% { stroke-dashoffset: 230.412353515625px; stroke-dasharray: 230.412353515625px;  }
  50% { stroke-dashoffset: 0; stroke-dasharray: 230.412353515625px; }
  62%{opacity: 1;}
  80% { opacity: 0;}
  100% { opacity: 0;}
}
@keyframes animation-wave-stroke-2 {
  0% { opacity: 0; stroke-dashoffset: 214.1689453125px; stroke-dasharray: 214.1689453125px; }
  10%{opacity: 1;}
  25% { stroke-dashoffset: 214.1689453125px; stroke-dasharray: 214.1689453125px; }
  50% { stroke-dashoffset: 0; stroke-dasharray: 214.1689453125px; }
  62%{opacity: 1;}
  80% { opacity: 0;}
  100% { opacity: 0;}
}
@keyframes animation-wave-stroke-3 {
  0% { opacity: 0; stroke-dashoffset: 435.21282958984375px; stroke-dasharray: 435.21282958984375px; }
  10%{opacity: 1;}
  50% { stroke-dashoffset: 0; stroke-dasharray: 435.21282958984375px;}
  65%{opacity: 1;}
100% { opacity: 0;}
}
@keyframes animation-wave-stroke-4 {
  0% { opacity: 0; stroke-dashoffset: 435.42230224609375px; stroke-dasharray: 435.42230224609375px;}
  10%{opacity: 1;}
  50% { stroke-dashoffset: 0; stroke-dasharray: 435.42230224609375px;  }
  65%{opacity: 1;}
  100% { opacity: 0;}
}
@keyframes animation-wave-stroke-5 {
  0% { opacity: 0; stroke-dashoffset: 436.1790771484375px; stroke-dasharray: 436.1790771484375px;  }
  10%{opacity: 1;}
  50% { stroke-dashoffset: 0; stroke-dasharray: 436.1790771484375px;}
  65%{opacity: 1;}
  100% { opacity: 0;}
}
@keyframes animation-wave-stroke-6 {
  0% { opacity: 0; stroke-dashoffset: 437.32952880859375px; stroke-dasharray: 437.32952880859375px;}
  10%{opacity: 1;}
  50% { stroke-dashoffset: 0; stroke-dasharray: 437.32952880859375px; }
  65%{opacity: 1;}
  100% { opacity: 0;}
}
@keyframes animation-wave-stroke-7 {
  0% { opacity: 0; stroke-dashoffset: 435.7785339355469px; stroke-dasharray: 435.7785339355469px;  }
  10%{opacity: 1;}
  50% { stroke-dashoffset: 0; stroke-dasharray: 435.7785339355469px; }
  65%{opacity: 1;}
  100% { opacity: 0;}
}
@keyframes animation-wave-stroke-8 {
  0% { opacity: 0; stroke-dashoffset: 442.9269714355469px; stroke-dasharray: 442.9269714355469px;}
  10%{opacity: 1;}
  50% { stroke-dashoffset: 0; stroke-dasharray: 442.9269714355469px;}
  65%{opacity: 1;}
  100% { opacity: 0;}
}



// Box stroke/fill animation
// Box stroke/fill animation
// Box stroke/fill animation
@keyframes animaton-usgsbox-stroke-1 {
	0% {stroke-dashoffset: 4942px;stroke-dasharray: 4942px;}
	15% {stroke-dashoffset: 4942px;}
	70% {stroke-dashoffset: 0;}
	100% {stroke-dashoffset: 0;stroke-dasharray: 4942px;}
}
@keyframes animaton-usgsbox-stroke-2 {
	0% {stroke-dashoffset: 4942px;stroke-dasharray: 4942px;}
	15% {stroke-dashoffset: 4942px;stroke-dasharray: 4942px;}
	70% {stroke-dashoffset: 0;}
	100% {stroke-dashoffset: 0;stroke-dasharray: 4942px;}
}
@keyframes animaton-usgsbox-fill-3 {
  	0% {opacity: 0;}
  	50% {opacity: 0;}
  	70% {opacity: 1;}
  	100% {opacity: 1;}
}
@keyframes animaton-usgsbox-fill-4 {
	0% {opacity: 0;}
	55% {opacity: 0;}
  	75% {opacity: 1;}
  	100% {opacity: 1;}
}
@keyframes animaton-usgsbox-fill-5 {
  	0% {opacity: 0;}
	60% {opacity: 0;}
  	80% {opacity: 1;}
  	100% {opacity: 1;}
}
@keyframes animaton-usgsbox-fill-6 {
 	0% {opacity: 0;}
  	65% { opacity: 0;}
  	85% {opacity: 1;}
  	100% {opacity: 1;}
}


// WIM PIN STROKE
// WIM PIN STROKE
// WIM PIN STROKE
// WIM PIN STROKE
@keyframes animation-pin-outline {
  0% {stroke-dashoffset: 1512.931396484375px;stroke-dasharray: 1512.931396484375px;}
  10% {stroke-dashoffset: 1512.931396484375px; }
  90% {stroke-dashoffset: 0;}
  100% { stroke-dashoffset: 0;stroke-dasharray: 1512.931396484375px;}
}
@keyframes animation-pin-fill {
  0% {fill: transparent;}
  32% {fill: transparent;}
  65% {fill: rgb(2, 134, 255);}
  100% {fill: rgb(2, 134, 255);}
}
@keyframes animation-pin-land-fill {
  0% {opacity: 0;}
  50% {opacity: 0;}
  58% {opacity: 1;}
  100% {opacity: 1;}
}


// Shake
// Shake
// Shake
// Shake
// Shake
// Shake Animations
// Shake Animations
// Shake Animations
// Shake Animations
// Shake Animations
@keyframes shake {
  0% {transform: translate(0, 0);}
  11% {transform: translate(1px, -3px);}
  18% { transform: translate(3px, 0px);}
  23% {transform: translate(-1px, 2px);}30.5% {transform: translate(2px, 3px);}
  37% {transform: translate(-1px, -3px);}
  43% {transform: translate(2px, -1px);}
  48% {transform: translate(-1px, -3px);}
  54% {transform: translate(3px, 0px);}
  59% {transform: translate(0px, -2px);}
  66% {transform: translate(-3px, 0px);}
  72% {transform: translate(-2px, -3px);}
  77% {transform: translate(-0px, -0px);}
  83% {transform: translate(-3px, 2px);}
  89% {transform: translate(-3px, -2px);}
  94% {transform: translate(3px, -2px);}
  100% {transform: translate(0, 0);}
}

// Pulse
// Pulse
// Pulse
@keyframes pulse {
  0% {transform: scale(1);}
  20% {transform: scale(1);}
  40% {transform: scale(1.15);}
  60% {transform: scale(1.05);}
  85% {transform: scale(1.2);}
  100% {transform: scale(1);}
}



// Line
@keyframes animation-line-stroke {
	0%{
		width: 0%;
		left: 0%;
	}
	50%{
		left: 0%;
		width: 100%;
	}
	100%{
		width: 0%;
		left: 100%;
	}
}
@keyframes animation-line-shake {
	0%{
		width: 40%;
		left: 30%;
	}
	20%{left: 15%;}
	40%{left: 45%;}
	60%{left: 25%;}
	80%{left:45%;}
	100%{
		width: 40%;
		left: 30%;
	}
}
@keyframes animation-line-pulse {
	0%{
		width: 0%;
		left: 50%;
	}
	15%{
		width: 0%;
		left: 50%;
	}
	30%{
		width: 60%;
		left: 20%;
	}
	50%{
		width: 20%;
		left: 40%;
	}
	70%{
		width: 100%;
		left: 0%;
	}
	85%{
		width: 0%;
		left: 50%;
	}
	100%{
		width: 0%;
		left: 50%;
	}
}

</style>