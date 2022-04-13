<!--
//! Footer
// WIM and USGS Required
-->

<template>

	<div>
		
		<footer id="main">
			Created by <a href="https://wim.usgs.gov" target="_blank">WIM</a> at the USGS. 
			Open Source on <a href="https://github.com/USGS-WiM/QR-Code-Generator" target="_blank">GitHub</a>
		</footer>

		<footer id="required">
			<span>
				<a href="//www.doi.gov/privacy" target="_blank">
					DOI Privacy Policy
				</a>
			</span>
			<span>
				<a href="//usgs.gov/policies-and-notices" target="_blank">
					Legal
				</a>
			</span>
			<span>
				<a href="//usgs.gov/accessibility-and-us-geological-survey" target="_blank">
					Accessibility
				</a>
			</span>
			<span>
				<a href="//usgs.gov/sitemap" target="_blank">
					Site Map
				</a>
			</span>
			<span class="block"></span>
			<span>
				<a href="//doi.gov" target="_blank">
					U.S. Department of the Interior
				</a>
			</span>
			<span>
				<a href="//doioig.gov" target="_blank">
					DOI Inspector General
				</a>
			</span>
			<span>
				<a href="//whitehouse.gov" target="_blank">
					White House
				</a>
			</span>
			<span>
				<a href="//www.whitehouse.gov/omb/management/egov" target="_blank">
					E-Gov
				</a>
			</span>
			<span>
				<a href="//www.doi.gov/pmb/eeo/no-fear-act" target="_blank">
					No Fear Act
				</a>
			</span>
			<span>
				<a href="//www2.usgs.gov/foia" target="_blank">
					FOIA
				</a>
			</span>
		</footer>

	</div>


</template>

<script>

export default {
	name: "Footer",
	mixins: [
	],
	data() {
		return {
		};
	},
	mounted() {
		
	},
	methods: {
	}
};
</script>

<style lang="scss">

	footer#main{
		box-sizing: border-box;
		padding: 45px var(--padding) 20px var(--padding);
		text-align: center;
		font-size: 14px;

		button{
			font-weight: 600;
			margin-left: 15px;
			color: var(--text);
		}
	}
	footer#required{
		box-sizing: border-box;
		padding: 12px 25px 14px 25px;
		color: white;
		background-color: var(--usgsBlue);

		.block{
			display: block;
		}
		a{
			font-size: 12px;
			color: white;
			text-decoration: none;
			padding-right: 10px;
			display: inline-block;
		}
		a:focus,
		a:hover{
			text-decoration: underline;
		}
	}

		
</style>