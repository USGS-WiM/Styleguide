<!--
EmailSignature.vue
Email Signature generator
-->

<template>
	<div class="padded mtop-lg pbottom-xl">

		
		<!-- Site Details -->
		<div id="signatureDesigner">

			<div id="sigLeft">

				<fieldset>
					<div id="signatureForm">
						<div class="field">
							<label for="sigName">Name</label>
							<input type="text" id="sigName" v-model="name" placeholder="Name"/>
						</div>

						<div class="field mtop-sm">
							<label for="sigTitle">Title</label>
							<input type="text" id="sigTitle" v-model="title" placeholder="Software Developer"/>
						</div>

						<!-- Pronouns -->
						<div class="field mtop-sm">
							<label for="sigPronoun">Pronouns</label>
							<input type="text" id="sigPronoun" v-model="pronouns" placeholder=""/>
						</div>

						<div class="field mtop-sm">
							<label for="sigEmail">Email Address</label>
							<input type="text" id="sigEmail" v-model="email" placeholder="claranceking@usgs.gov"/>
						</div>

						<div class="field mtop-sm">
							<label for="sigPhone">Phone Number</label>
							<input type="text" id="sigPhone" v-model="phone" placeholder="555-555-5555"/>
						</div>


						<!-- Address -->
						<div class="field mtop-sm">
							<label for="addr1">Address</label>
							<input type="text" id="addr1" v-model="address_1" placeholder=""/>
						</div>
						<div class="field mtop-xxs">
							<input type="text" id="addr2" v-model="address_2" placeholder=""/>
						</div>
						<div class="field mtop-xxs">
							<input type="text" id="addr3" v-model="address_3" placeholder=""/>
						</div>

						<!-- Pre-fill address -->
						<div class="flex flex-around mtop-xs">
							<a class="small" @click="fillAddress('wi')">
								<i class="far-map-marker"></i>
								<span>Madison FPL</span>
							</a>
							<a class="small" @click="fillAddress('mn')">
								<i class="far-map-marker"></i>
								<span>St. Paul</span>
							</a>
							<a class="small" @click="fillAddress('mn-og')">
								<i class="far-map-marker"></i>
								<span>Mounds View</span>
							</a>
						</div>


						<!-- Website -->
						<div class="field mtop-sm">
							<label for="sigwebsite">Website</label>
							<input type="text" id="sigwebsite" v-model="website" placeholder="https://usgs.gov"/>
						</div>

					</div>			
							


				</fieldset>

			</div>

			<div id="sigRight">

				<!-- Logo -->
				<div class="flex flex-wrap gap">
					<div class="field mbottom-lg mtop-sm flex">
						<input id="sigDivider" type="checkbox" class="toggle on-off" v-model="enableDivider"/>
						<label for="sigDivider" class="flex flex-column flex-center mleft-xs">Divider</label>
					</div>
					<div class="field mbottom-lg mtop-sm flex">
						<input id="sigLogo" type="checkbox" class="toggle on-off" v-model="enableLogo"/>
						<label for="sigLogo" class="flex flex-column flex-center mleft-xs">Logo</label>
					</div>
					<div class="field mbottom-lg mtop-sm flex" v-if="enableLogo">
						<input id="sigWimLogo" type="checkbox" class="toggle yes-no" v-model="wimLogo"/>
						<label for="sigWimLogo" class="flex flex-column flex-center mleft-xs">WIM Logo</label>
					</div>
				</div>


				<div class="signature-wrapper">

					<div id="usgsSignature">
						<!-- Signature Body -->
						<div class="body">
							<!-- Name -->
							<span class="name">
								{{name}}
								<span v-if="pronouns" class="pronouns">({{pronouns}})</span>	
							</span>
							<!-- Title -->
							<span class="title" :class="{'no-border': !enableDivider}">{{title || "" }}</span>
							<!-- Email -->
							<a class="contact" v-if="email" :href="'mailto:' + email">
								<span>{{email}}</span>
							</a>
							<!-- Phone -->
							<a class="contact" v-if="phone" :href="'tel:' + phone">
								<span>{{phone}}</span>
							</a>

							<!-- Address -->
							<div class="contact address" v-if="address_1">
								<span>{{address_1}}</span>
							</div>
							<div class="contact address" v-if="address_2">
								<span>{{address_2}}</span>
							</div>
							<div class="contact address" v-if="address_3">
								<span>{{address_3}}</span>
							</div>

							<!-- Website -->
							<a class="contact website" :href="website" v-if="website">
								<span>{{website.replace(/^https?:\/\//, '')}}</span>
							</a>
							
						</div>
						<!-- Logo -->
						<div class="logo" v-if="enableLogo"> 
							<img src="https://wim.usgs.gov/hold/signature_logo_wim.png" v-if="wimLogo"/>
							<img src="https://wim.usgs.gov/hold/signature_logo.png" v-else/>
						</div>

					</div>


					<h3 class="mtop-lg">Instructions</h3>
					<h4 class="mtop-md">Step 1</h4>
					<p>
						Once you are happy with your signature, click the button below to copy your signature to your clipboard.
					</p>

					<button class="button mtop-sm" @click="copySignature">
						<i class="far fa-copy"></i>
						<span>Copy Signature to Clipboard</span>
					</button>

					<h4 class="mtop-lg">Step 2</h4>
					<p>
						Go to your email settings and paste your signature into the text box for your signature.
					</p>

					<a href="https://outlook.office365.com/mail/options/mail/messageContent" target="_blank" class="button green mtop-sm inline-block">
						<i class="far fa-envelope"></i>
						<span>Open Outlook Settings</span>
					</a>

				</div>

				
	
			</div>

		</div>

		<!-- Link used to convert canvas to image and download - empty -->
		<a id="link"></a>
	

		<!-- Spacer -->
		<div class="mtop-xl"></div>





	</div>
</template>

<script>

export default {
	name: "email-signature",

	components: {
	},
	

	mixins: [
	],

	data() {
		return { 

			name: "John Doe",
			title: "Geologist",
			pronouns: "He/Him",
			email: "johndoe@usgs.gov",
			phone: "555-555-5555",

			website: "https://wim.usgs.gov",
			address_1: "Web Informatics & Mapping",
			address_2: "US Geological Survey Upper Midwest Water Science Center",
			address_3: "1 Gifford Pinchot Drive, Madison, WI 53726",

			// Design
			enableDivider: true,
			enableLogo: true,
			wimLogo: false,

			// name: "Mitch Samuels",
			// pronouns: "He/Him",
			// title: "Software Developer",
			// email: "claranceking@usgs.gov",
			// phone: "555-555-5555",

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

		fillAddress: function(code){

			// Wisconsin
			if(code == "wi"){
				this.address_1 = "Web Informatics & Mapping";
				this.address_2 = "US Geological Survey Upper Midwest Water Science Center";
				this.address_3 = "1 Gifford Pinchot Drive, Madison, WI 53726";
			}
			// Minnesota
			else if(code == "mn"){
				this.address_1 = "Web Informatics & Mapping";
				this.address_2 = "US Geological Survey";
				this.address_3 = "1992 Folwell Ave, St Paul, MN 55108";
			}
			// Minnesota - OG
			else if(code == "mn-og"){
				this.address_1 = "Web Informatics & Mapping";
				this.address_2 = "US Geological Survey Minnesota Water Science Center";
				this.address_3 = "2280 Woodale Dr, Mounds View, MN 55112";
			}

		},


		copySignature: function(){
			var range = document.createRange();
			range.selectNode(document.getElementById("usgsSignature"));
			window.getSelection().removeAllRanges();
			window.getSelection().addRange(range);
			document.execCommand("copy");

			this.hello("Success!", "far fa-check", "green");


			setTimeout(() => {
				window.getSelection().removeAllRanges();
			}, 500);
		}

	}
};



</script>


<style lang="scss">


#signatureDesigner{
	display: flex;
	width: 100%;
	box-sizing: border-box;
	padding:  55px var(--sidePadding);
	gap: 50px;
	justify-content: center;

	@media (max-width: $screenSM) {
		flex-wrap: wrap;
		padding:  25px var(--sidePadding);
    }

	#sigLeft{
		max-width: var(--maxWidth);
		width: var(--maxWidthSmall);

		@media (max-width: $screenSM) {
			margin: 0 auto;
		}
	}

	#sigRight{
		min-width: 420px;
		height: fit-content;
		box-sizing: border-box;
		padding: 0 var(--sidePadding);
		background-color: var(--greyDark);
		border-radius: var(--borderRadius);

		@media (max-width: $screenSM) {
			min-width: unset;
			padding: 25px;
		}
	}
}


#signatureCreator{
	display: flex;
	height: 100vh;
	overflow: hidden;

	@media (max-width: $screenSM) {
		flex-direction: column-reverse;
	}
}


#signatureCreatorLeft{
	width: 50%;
	max-width: 600px;
	height: 100%;
	overflow: auto;
	box-sizing: border-box;
	padding: var(--sidePadding);

	@media (max-width: $screenSM) {
		max-width: unset;
		width: 100%;
	}
}


#topLogo{
	height: 100px;
	margin: 0;
	width: auto;

	@media (max-width: $screenSM) {
		display: none;
	}
}

#mobileWarning{
	display: none;
	@media (max-width: $screenSM) {
		display: block;
	}
}

#signatureForm{
	display: block;
	background-color: var(--grey);
	box-sizing: border-box;
	padding: calc(var(--sidePadding) / 2);
	border-radius: var(--borderRadius);
}

#colorOptions{
	display: block;

	button{
		margin: 10px 10px 0 0;
	}

	#blue1{
		background-color: var(--spero1);
	}
	#blue2{
		background-color: var(--spero2);
	}
	#blue3{
		background-color: var(--spero3);
	}
	#green1{
		background-color: var(--spero4);
	}
	#green2{
		background-color: var(--spero5);
	}
}


// Right side
#signatureCreatorRight{
	flex-grow: 3;
	display: flex;
	flex-direction: column;
	justify-content: center;
	overflow: auto;
	box-sizing: border-box;
	padding: 10vh 15px;

	@media (max-width: $screenSM) {
		padding: var(--sidePadding);
		border-bottom: 1px solid var(--border);
		overflow: visible;
	}
}



.signature-wrapper{
	&.hidden{
		display: none;
	}
}


#usgsSignature{
	display: block;
	// user-select: all !important;
	line-height: 10px;
	margin: 0;
	color: black;

	a{
		text-decoration: none !important;
		*{
			text-decoration: none !important;
		}
	}

	.logo{
		display: block;
		box-sizing: border-box;
		padding: 15px 25px 15px 0;

		img{
			height: 40px;
			width: auto;
			margin: 0 auto;
		}

		@media (max-width: 600px) {
			img{
				height: 30px;
			}
		}
	}

	.body{
		display: inline-block;
		vertical-align: middle;
		color:#030636;
		width: fit-content;
		max-width: 500px;

		.name,
		.title,
		.contact{
			display: block;
			width: 100%;
			line-height: 100%;
			span{
				vertical-align: top;
			}
		}
		a{
			color: #030636;
			font-weight: 500;
			&:hover{
				color: #095b9a;
			}
		}

		.pronouns{
			font-size: 55%;
			font-weight: 400;
			font-style: italic;
		}

		.name{
			font-size: 120%;
			font-weight: 700;
		}
		.title{
			font-size: 90%;
			color: #5b5b5b;
			font-weight: 500;
			padding-bottom: 8px;
			margin-bottom: 8px;
			margin-top: 4px;
			border-bottom: 1px solid black;

			&.no-border{
				border-bottom: none;
				margin-bottom: 0;
			}
		}
		.contact{
			font-size: 75%;
			display: block;
			margin: 0 0 8px 0;

			&.address{
				margin-bottom: 4px;
			}
			&.website{
				margin-top: 6px;
				display: block;
				font-style: italic;
				font-size: 85%;
			}
		}
	}
}



</style>