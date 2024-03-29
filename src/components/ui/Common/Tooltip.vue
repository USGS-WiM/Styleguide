<!--
//! Tooltip Component
// Example format:
// <Tooltip :link="https://optional-link" linkText="Read More" color="red" icon="f6af">
// 		Slot content
// </Tooltip>
-->

<template>
	<!-- Tooltip -->
	<button class="tooltip" v-bind:class="[color && color, position && position, {'show': show}]" @click="show = !show" tabindex="0" role="tooltip">

		<!-- Icon -->
		<i :class="['tooltip-icon', (!icon && !show) && 'fas fa-question-circle', (icon && !show) && icon, {'far fa-times-circle': show}]"></i>
		
		<!-- Body -->
		<span class="tooltip-text" @mouseleave="show = false" :class="{'nolink': !link}">
			<!-- Tooltip body/text content -->
			<slot></slot>
			<a v-if="link" class="tooltip-link" :href="link" target="_blank">
				<span v-if="linkText">{{linkText}}</span>
				<span v-else>More</span>
			</a>
		</span>
	</button>
</template>



<script>
export default {
	name: "Tooltip",
	mixins: [
	],
	components: {
	},
	props: {
		// Color variable for tooltip
		color: {
			type: String,
			required: false,
   			default: "grey",
		},
		// Font awesome content string (ie 'f6af') for left icon
		icon: {
			type: String,
			required: false,
   			default: "far fa-question-circle",
		},
		// Optional link - shown at bottom right of tooltip
		link: {
			type: String,
			required: false,
   			default: null,
		},
		// Optional text for optional link
		linkText: {
			type: String,
			required: false,
   			default: null,
		},
		// Optional position - left, center - default right
		position: {
			type: String,
			required: false,
   			default: null,
		},
	},

	data() {
		return {
			show: false,
		};
	},
	created() {

	},
	mounted(){
	},
	methods: {
	}	
};	

</script>

<style lang="scss">
	

	// Tooltip 
	// Add .tooltip-el class to element that needs tooltip
	.tooltip-el{
		position: relative;
	}
	.tooltip{
		transition: 0.1s;
		color: var(--text);
		height: fit-content;
		width: 10px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		position: relative;
		top: 1px;
		padding: 0;
		margin: 0;

		.tooltip-icon{
			transition: var(--transitionFast);
			opacity: 0.85;
			font-size: 95%;
			min-width: 16px;
			text-align: center;
			display: block;
			margin: 0 4px;
			color: var(--links);

			@media (max-width: $screenSM) {
				transform:scale(1.1);
				transform-origin: center center;
			}

			// Hover, make brighter
			&:hover{
				cursor: pointer;
				opacity: 1;
				transform: scale(1.1);
				transform-origin: center center;
				transition: var(--transitionFast);
			}
		}

		&:focus{
		}

		// Tooltip text 
		.tooltip-text{
			// display: none;
			background-color: var(--yellow100);
			// background-color: #fff8ac;
			color: var(--text);
			font-weight: 400;
			font-family: var(--systemFont);
			width: fit-content;
			width: 230px;
			overflow: auto;
			box-sizing: border-box;
			padding: 8px 10px 0 10px;
			border-radius: var(--borderRadius);
			transform: scale(0);
			transform-origin: center center;
			transition: 0.06s ease;
			font-size: 11px;
			line-height: 13px;
			white-space:normal;
			margin-left: 22px;
			position: absolute;
			display: flex;
			text-align: left;
			flex-direction: column;
			border: 1px solid var(--border);
			z-index: 2;


			// Float below centered on md
			@media (max-width: $screenSM) {
				width: 180px;
				// margin-left: -100px;
				// bottom: 175%;
			}


			&.nolink{
				padding: 10px;
			}
			

			// Actual text
			span,b{
				display: block;
				min-width: fit-content;
				font-weight: 500;
				white-space: pre;
			}

			b{
				padding-bottom: 6px;
				min-width: 120px;
			}

			// Right aligned bottom link
			.tooltip-link{
				display: block;
				text-align: right;
				color: var(--links);
				font-size: 12px;
				padding: 4px 0 7px 0;
				font-weight: 700;

				span{
					font-weight: 600;
				}
			}
		}

		// Positions
		&.bottom{

			.tooltip-text{
				left: 50%;
				margin-left: -105px;
				top: 100%;
				margin-top: 3px;

				// Float below centered on md
				@media (max-width: $screenSM) {
					margin-left: -90px;
				}
			}
		}
		&.top{
			.tooltip-text{
				left: 50%;
				margin-left: -105px;
				bottom: 120%;

				// Float below centered on md
				@media (max-width: $screenSM) {
					margin-left: -90px;
				}
			}
		}

		&.left{
			.tooltip-text{
				right: 100%;
			}
		}



		// Add class show to show tooltip
		&.show{
			color: var(--blue500);

			.tooltip-icon{
				opacity: 1;
				color: var(--red500);
			}

			.tooltip-text{
				transform: scale(1);
				transition: 0.06s ease;
			}
		}

		// Colors
		&.red i{
			color: var(--red500);
		}
		&.blue i{
			color: var(--blue500);
		}
		&.green i{
			color: var(--green500);
		}
		&.yellow i{
			color: var(--yellow500);
		}
	}


</style>