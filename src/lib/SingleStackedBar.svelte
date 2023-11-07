<script>

	let percentTicketed = 2.667

	const margin = { top: 1, bottom: 1, left: 1, right: 1 };
	let divWidth;
	const height = 25;

	$: innerWidth = divWidth - margin.left - margin.right;

</script>



<div id="container" class="svg-container" bind:offsetWidth={divWidth}>
	<svg width={divWidth} {height} class="svg-content">
		<g transform={`translate(${margin.left},${margin.top})`}>
			
			<rect x="0" y="5" width={innerWidth} height="20"
			style="fill:#DC4633;stroke:#fff;stroke-width:1;" />

			<rect x="0" y="5" width={percentTicketed / 100 * innerWidth} height="20"
			style="fill:#F1C500;stroke:#fff;stroke-width:1;" />
		</g>
	</svg>
</div>



<style>

	#container {
		padding-left: 0px;
		width: 100%;
	}

</style>