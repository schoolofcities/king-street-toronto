<script>
    // import: styling, d3, and data
    import "../assets/global.css"
    import {scaleTime, scaleLinear, timeParse, group, sum, line} from "d3";
    import {regressionLoess} from "d3-regression";
    import violations from "../data/violations2020-2023.json";
    import intersectionNames from "../assets/intersectionSummary.json";

    // get values to filter data
    export let intersectionID;

    let name = intersectionNames.filter(d => d.UID === parseInt(intersectionID))[0]["Intersection"];

    var data = violations.filter(d => {
        if (String(d.intersection_uid) === intersectionID) {
            return d;
        }
    });

    let average2019 = intersectionNames.filter(d => d.UID === parseInt(intersectionID))[0]["averageViolations2019"];


    // chart layout parameters
    let width;
    const height = 220;
    const marginTop = 40;
    const marginRight = 10;
    const marginBottom = 40;
    const marginLeft = 50;


    // parse date field
    const parseDate = timeParse("%Y-%m-%d");

    // defining x and y scales
    $: xScale = scaleTime()
        .domain([new Date("2020-01-01"), new Date("2023-06-01")])
        .range([marginLeft, width - marginRight]);

    $: yScale = scaleLinear()
        .domain([0, 2500])
        .range([height - marginBottom, marginTop]);

    // create Loess regression line
    const regressionGenerator = regressionLoess()
        .x((d) => parseDate(d.date))
        .y((d) => d.sum_violations)
        .bandwidth(0.08)

    $: lineGenerator =line()
        .x(d => xScale(d[0]))
        .y(d => yScale(d[1]))

</script>


<div class="scatter-plot" bind:clientWidth={width}>
    <svg width={width} height={height}>
      <g>

        <text x="2" y="30" class="label">{name} & King - Total Violations Per Day</text>

        {#each [2000, 1000, 0] as yMarker}
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

        {#each 
            [
                [parseDate("2020-01-01"), 'Jan'],
                [parseDate("2020-02-01"), 'Feb'],
                [parseDate("2020-03-01"), 'Mar'],
                [parseDate("2020-04-01"), 'Apr'],
                [parseDate("2020-05-01"), 'May'],
                [parseDate("2020-06-01"), 'Jun'],
                [parseDate("2020-07-01"), 'Jul'],
                [parseDate("2020-08-01"), 'Aug'],
                [parseDate("2020-09-01"), 'Sep'],
                [parseDate("2020-10-01"), 'Oct'],
                [parseDate("2020-11-01"), 'Nov'],
                [parseDate("2020-12-01"), 'Dec'],
                [parseDate("2021-01-01"), 'Jan'],
                [parseDate("2021-02-01"), 'Feb'],
                [parseDate("2021-03-01"), 'Mar'],
                [parseDate("2021-04-01"), 'Apr'],
                [parseDate("2021-05-01"), 'May'],
                [parseDate("2021-06-01"), 'Jun'],
                [parseDate("2021-07-01"), 'Jul'],
                [parseDate("2021-08-01"), 'Aug'],
                [parseDate("2021-09-01"), 'Sep'],
                [parseDate("2021-10-01"), 'Oct'],
                [parseDate("2021-11-01"), 'Nov'],
                [parseDate("2021-12-01"), 'Dec'],
                [parseDate("2022-01-01"), 'Jan'],
                [parseDate("2022-02-01"), 'Feb'],
                [parseDate("2022-03-01"), 'Mar'],
                [parseDate("2022-04-01"), 'Apr'],
                [parseDate("2022-05-01"), 'May'],
                [parseDate("2022-06-01"), 'Jun'],
                [parseDate("2022-07-01"), 'Jul'],
                [parseDate("2022-08-01"), 'Aug'],
                [parseDate("2022-09-01"), 'Sep'],
                [parseDate("2022-10-01"), 'Oct'],
                [parseDate("2022-11-01"), 'Nov'],
                [parseDate("2022-12-01"), 'Dec'],
                [parseDate("2023-01-01"), 'Jan'],
                [parseDate("2023-02-01"), 'Feb'],
                [parseDate("2023-03-01"), 'Mar'],
                [parseDate("2023-04-01"), 'Apr'],
                [parseDate("2023-05-01"), 'May'],
                [parseDate("2023-06-01"), 'Jun']
            ] 
        as xMarker}
            <line 
                class="gridLine" 
                x1={xScale(xMarker[0])} 
                y1={marginTop} 
                x2={xScale(xMarker[0])} 
                y2={height - marginTop + 10}
                stroke-width="2" 
            />
        {/each}

        {#each ["2020", "2021", "2022", "2023"] as year}
            <line 
                class="yearLine" 
                x1={xScale(parseDate(year + "-01-01"))} 
                y1={marginTop} 
                x2={xScale(parseDate(year + "-01-01"))} 
                y2={height - marginTop + 10} 
                stroke-width="" 
            />
            {#if year === "2023"}
                <text 
                    x={xScale(parseDate(year + "-03-29"))} 
                    y={height - marginBottom + 20} 
                    text-anchor="middle"
                    class="label">
                    {year}
                </text>
            {:else}
                <text 
                    x={xScale(parseDate(year + "-06-29"))} 
                    y={height - marginBottom + 20} 
                    text-anchor="middle"
                    class="label">
                    {year}
                </text>
            {/if}


        {/each}

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

        {#each data as item}

            <line 
                y1={height - marginBottom}
                x1={xScale(parseDate(item.date))} 
                y2={yScale(item.sum_violations)} 
                x2={xScale(parseDate(item.date))}
                stroke-width="1" 
                stroke="#DC4633"
                opacity=0.2
            />

            <circle 
                cx={xScale(parseDate(item.date))} 
                cy={yScale(item.sum_violations)} 
                r="2" 
                fill="#DC4633"
            />
        
        {/each}
        
        <path 
            d={lineGenerator(regressionGenerator(data))} 
            stroke="#F1C500" 
            stroke-width="2" 
            fill="none" 
        />

        <line
            y1={yScale(average2019)}
            x1={marginLeft} 
            y2={yScale(average2019)} 
            x2={width - marginRight}
            stroke-width="2"
            stroke-dasharray="6 3"
            stroke="#1E3765"
            opacity=1
        />

        <line
            y1={yScale(1750)}
            x1={xScale(parseDate("2021-01-01"))} 
            y2={yScale(average2019) - 5} 
            x2={xScale(parseDate("2021-01-01"))}
            stroke-width="1"
            stroke="#1E3765"
            opacity=1
        />

        <text 
            x={xScale(parseDate("2021-01-01")) - 4} 
            y={yScale(1800)} 
            text-anchor="start"
            fill="#1E3765"
            class="labelavg">
            2019 Average
        </text>

        

    </g>
    </svg>
  </div>


<style>
    /* #total-violations-chart {
        background-color: none;
        margin: 0 auto;
        width: 100%;
    } */

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

    .labelavg {
        font-family: RobotoRegular, sans-serif;
        font-size: 13.5px;
        fill: var(--brandDarkBlue);
    }
</style>
