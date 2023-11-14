<script>
    // import: styling, d3, and data
    import "../assets/global.css"
    import {scaleTime, scaleLinear, timeParse} from "d3";
    import data from "../assets/tickets-monthly.json";

    // get values to filter data
    export let variable;

	let labelName = "TICKETS";
	let barColour = "#007FA3";
	if (variable === "Warnings") {
		labelName = "WARNINGS";
		barColour = "#6FC7EA";
	};


    // chart layout parameters
    let width;
    const height = 420;
    const marginTop = 80;
    const marginRight = 10;
    const marginBottom = 20;
    const marginLeft = 50;

    // bar width as function of div width

    // defining x and y scales
    $: xScale = scaleLinear()
        .domain([2017, 2023.5])
        .range([marginLeft, width - marginRight]);

    $: yScale = scaleLinear()
        .domain([0, 1100])
        .range([height - marginBottom, marginTop]);

</script>


<div class="scatter-plot" bind:clientWidth={width}>

	

    <svg width={width} height={height}>

		{#each [1000, 750, 500, 250, 0] as yMarker}
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

		{#each [2017, 2018, 2019, 2020, 2021, 2022, 2023] as year}
			<line 
				class="gridLine" 
				x1={xScale(year + 1/24)}
				y1={marginTop} 
				x2={xScale(year + 1/24)}
				y2={height - marginBottom + 10}
			/>
			<line 
				class="tickLine" 
				x1={xScale(year + 1/24)}
				y1={height - marginBottom + 5} 
				x2={xScale(year + 1/24)}
				y2={height - marginBottom + 10}
			/>
			{#if year === 2023}
				<text 
					x={xScale(2023.5)} 
					y={height - marginBottom + 15} 
					text-anchor="end"
					class="label">
					'23
				</text>
			{:else}
				<text 
					x={xScale(year + 0.5 + 1/24)} 
					y={height - marginBottom + 15} 
					text-anchor="middle"
					class="label">
					{year}
				</text>
			{/if}
			
		{/each}

		{#each data as item}

            {#if item.Year > 2016}

                <line 
                    y1={height - marginBottom}
                    x1={xScale(item.Year + item.Month/12)} 
                    y2={yScale(item[variable])} 
                    x2={xScale(item.Year + item.Month/12)}
                    stroke-width="5" 
                    stroke={barColour}
                    opacity=1
                />

            {/if}

        {/each}

		<text x="2" y="30" class="label">TRAFFIC {labelName} PER MONTH</text>

		<text x="2" y="50" class="label">For Illegal Left-Turn & Thru Movements on King St (Jarvis to Bathurst)</text>

	</svg>
</div>


<style>
    .scatter-plot {
        width: 100%;
        /* max-width: 420px; */
        /* height: 301px; */
    }

    .axisLine {
        stroke-width: 1px;
        stroke: var(--brandGray);
    }

    .yearLine {
        stroke-width: 1px;
        stroke: var(--brandGray);
    }

    .tickLine {
        stroke-width: 1px;
        stroke: var(--brandGray70);
    }

    .gridLine {
        stroke-width: 1px;
        stroke: #f1f1f1;
    }

    .label {
        font-family: RobotoRegular, sans-serif;
        font-size: 13.5px;
        fill: var(--brandGray80)
    }
</style>