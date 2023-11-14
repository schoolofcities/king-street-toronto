<script>

	import data from "../assets/intersectionSummary.json";
	import {scaleLinear} from "d3";

	// get values to filter data
	export let variable;

	let labelName = "TRAFFIC VIOLATIONS";
	let labelPeriod = "PER DAY "
	let barColour = "#DC4633";
	let domain = [0, 1250];
	let yAxisLines = [1250, 1000, 750, 500, 250, 0];
	if (variable === "totalTickets2019") {
		labelPeriod = "";
		labelName = "TRAFFIC TICKETS";
		barColour = "#6FC7EA";
		domain = [0, 6.1];
		yAxisLines = [6, 5, 4, 3, 2, 1, 0]
	};

	let width;
	const height = 350;
	const marginTop = 80;
    const marginRight = 45;
    const marginBottom = 80;
    const marginLeft = 45;

	$: spacing = (width - marginRight - marginLeft) / data.length
	$: console.log(spacing);

	$: yScale = scaleLinear()
        .domain(domain)
        .range([height - marginBottom, marginTop]);

</script>


<div id="container" class="svg-container" bind:offsetWidth={width}>
	<svg width={width} {height} class="svg-content">

		<text x="2" y="30" class="label">AVERAGE NUMBER OF {labelName} PER DAY IN 2019</text>

		<text x="2" y="50" class="label">For Illegal Left-Turn & Thru Movements on King St (Bathurst to Jarvis)</text>

		<line 
			class="axisLine" 
			x1={marginLeft} 
			y1={marginTop} 
			x2={marginLeft} 
			y2={height - marginBottom} 
			stroke-width="2" 
		/>

		<line 
			class="axisLine" 
			x1={marginLeft} 
			y1={height - marginBottom} 
			x2={width - marginRight} 
			y2={height - marginBottom} 
			stroke-width="2" 
		/>

		{#each yAxisLines as yMarker}
            <line 
                class="gridLine" 
                x1={marginLeft - 10} 
                y1={yScale(yMarker)} 
                x2={width - marginRight} 
                y2={yScale(yMarker)}
                stroke-width="2" 
            />
            <line 
                class="tickLine" 
                x1={marginLeft - 5} 
                y1={yScale(yMarker)} 
                x2={marginLeft} 
                y2={yScale(yMarker)}
                stroke-width="2" 
            />
            <text 
                x={marginLeft - 10} 
                y={yScale(yMarker) + 4} 
                text-anchor="end"
                class="label">
                {yMarker.toLocaleString()}
            </text>
        {/each}

		{#each data as item, index (item.UID)}

			<circle
				class="stationPoint"
				cx={marginLeft + spacing / 2 + index * spacing} 
				cy={height - marginBottom + 10} 
				r="5"
			/>

			{#if variable === "averageViolations2019"}

				<line
					class="bar" 
					x1={marginLeft + spacing / 2 + index * spacing} 
					y1={yScale(item[variable])} 
					x2={marginLeft + spacing / 2 + index * spacing} 
					y2={height - marginBottom}
					stroke={barColour}
					stroke-width="16" 
				/>

				{#if item[variable] > 0}
					<text 
						x={marginLeft + spacing / 2 + index * spacing} 
						y={yScale(item[variable]) - 5}
						text-anchor="middle"
						class="label"
						>
						{item[variable].toLocaleString()}
					</text>
				{/if}

			{:else}

				<line
					class="bar" 
					x1={marginLeft + spacing / 2 + index * spacing} 
					y1={yScale(item[variable] / 365)} 
					x2={marginLeft + spacing / 2 + index * spacing} 
					y2={height - marginBottom}
					stroke={barColour}
					stroke-width="16" 
				/>

				{#if item[variable] > 0}
					<text 
						x={marginLeft + spacing / 2 + index * spacing} 
						y={yScale(item[variable] / 365) - 5}
						text-anchor="middle"
						class="label"
						>
						{(item[variable]  / 365).toFixed(2)}
					</text>
				{/if}


			{/if}

			<text 
				x={marginLeft + spacing / 2 + index * spacing} 
				y={height - marginBottom + 25}
                text-anchor="end"
                class="label"
				transform={`rotate(-45 ${marginLeft + spacing / 2 + index * spacing}, ${height - marginBottom + 25})`}
				>
                {item.Intersection}
            </text>

		{/each}

		<line 
			class="kingStreet" 
			x1={marginLeft + 10} 
			y1={height - marginBottom + 10} 
			x2={width - marginRight - 10} 
			y2={height - marginBottom + 10} 
		/>
		
	</svg>
</div>



<style>

	#container {
		margin: 0 auto;
		width: 100%;
		/* max-width: 520px; */
		/* background-color: azure; */
	}

	.axisLine {
        stroke-width: 1px;
        stroke: var(--brandWhite);
    }

	.tickLine {
        stroke-width: 1px;
        stroke: var(--brandGray70);
    }

    .gridLine {
        stroke-width: 1px;
        stroke: #eeeeee;
    }

	.stationPoint {
		fill: var(--brandDarkBlue);
	}

	.kingStreet {
		stroke: var(--brandDarkBlue);
		stroke-width: 3px;
	}

    .label {
        font-family: RobotoRegular, sans-serif;
        font-size: 13.5px;
        fill: var(--brandGray80)
    }

</style>