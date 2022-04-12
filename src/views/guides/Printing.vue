<!--
Printing.vue
Help for CSS printing issues
-->

<template>
	<div class="padded mtop-lg pbottom-xl">

		<h1>Printing & Reports</h1>

		<p class="big">
			Tips for adjusting print styles with CSS to create a report or printable content.
		</p>

		<h2 class="mtop-lg">Changing styles for printing</h2>
		<p class="mbottom-sm">
			CSS lets you change any styles when the user is printing. You can hide things that you don't want to print, like a navigation bar, and you can adjust things like font sizes, colors, or anything else CSS affects.
		</p>
		<p>
			It works similar to responsive or size media queries:
		</p>
	<pre class="mtop-sm"><code>
@media print {
  body {
	  color: red;
  }
}
		</code></pre>
		<p class="small">
			That would change the text color to red when the page is printed.
		</p>

		<h2 class="mtop-lg">Debugging print styles</h2>
		<p>
			Browser dev tools can emulate the CSS print media query so you don't have to actually initiate priting to view your changes. 
		</p>
		<p>
			It varies by browser, but you'll generally want to look for "CSS Emulation" or "Emulate CSS".
		</p>
		<p>
			In Chrome, it's at <b>Dev Tools > Three Dot Menu > More tools > Rendering > Scroll down to "Emulate CSS media type" > Choose print</b>
		</p>


		<h1 class="mtop-lg">Printing the content of a single div</h1>
		<p>
			If you have content in one specific div you want to print instead of the whole page, this is one solution:
		</p>

		<!-- Print HTML -->
		<p>
			First, you should set your app up to look something like this - the printarea must be a child of the body tag, and all other content should be in a separate wrapper.
		</p>
		<pre class="mtop-sm"><code>
&lt;body&gt;
    &lt;div id="mainContent"&gt;
    ...
    &lt;/div&gt;

    &lt;div id="printArea"&gt;&lt;/div&gt;
&lt;/body&gt;
		</code></pre>

		<!-- Print CSS -->
		<p>
			Then add this CSS - it hides everything except for the printarea when printing
		</p>
		<pre><code>
#printArea{
    display: block;
    width: 100%;
    height: 100%;
}
@media print{
    body, html{
        display: block;
        height: fit-content;
        width: 100%;
        height: 100%;
    }
    #mainContent{
        display: none;
    }
}
		</code></pre>

		<!-- Print Javascript -->
		<p>
			Lastly, add this javascript function. It takes the content of your target div, moves it to the print area, prints the page, then deletes it from the printarea.
		</p>
		<pre><code>
print(){
    var printContent = document.querySelector("#divToPrint").innerHTML;
    document.querySelector("#printArea").innerHTML = printContent;
    window.print();
    document.querySelector("#printArea").innerHTML = "";
}
		</code></pre>

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

		getCSSVariable(name){
			return getComputedStyle(document.documentElement)
				.getPropertyValue("--" + name);
		}


	}
};



</script>


<style lang="scss">


</style>