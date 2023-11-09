<script>
    // import: styling, d3, and data
    import "../assets/global.css"
    import {scaleTime, scaleLinear, timeParse, group, sum, line} from "d3";
    import {regressionLoess} from "d3-regression";
    import violations2019 from "../data/violations2019.json";

    // grouping and summing total violations by date
    const datesgroups2019 = group(violations2019, d => d.date);
    const resultArray = Array.from(datesgroups2019, ([date, violations2019]) => ({ date, sum_violations: sum(violations2019, d => d.sum_violations) }));


    // chart layout parameters
    let width;
    const height = 400;
    const marginTop = 40;
    const marginRight = 10;
    const marginBottom = 40;
    const marginLeft = 50;


    // parse date field
    const parseDate = timeParse("%Y-%m-%d");

    // defining x and y scales
    $: xScale = scaleTime()
        .domain([new Date("2019-01-01"), new Date("2020-01-01")])
        .range([marginLeft, width - marginRight]);

    $: yScale = scaleLinear()
        .domain([0, 14000])
        .range([height - marginBottom, marginTop]);

    // create Loess regression line
    const regressionGenerator = regressionLoess()
        .x((d) => parseDate(d.date))
        .y((d) => d.sum_violations)
        .bandwidth(0.12)

    $: lineGenerator =line()
        .x(d => xScale(d[0]))
        .y(d => yScale(d[1]))

</script>


<div class="scatter-plot" bind:clientWidth={width}>
    <svg width={width} height={height}>
      <g>

        <text x="2" y="30" class="label">TOTAL VIOLATIONS PER DAY IN 2019</text>

        {#each [10000, 5000, 0] as yMarker}
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
                [parseDate("2019-01-01"), 'Jan'],
                [parseDate("2019-02-01"), 'Feb'],
                [parseDate("2019-03-01"), 'Mar'],
                [parseDate("2019-04-01"), 'Apr'],
                [parseDate("2019-05-01"), 'May'],
                [parseDate("2019-06-01"), 'Jun'],
                [parseDate("2019-07-01"), 'Jul'],
                [parseDate("2019-08-01"), 'Aug'],
                [parseDate("2019-09-01"), 'Sep'],
                [parseDate("2019-10-01"), 'Oct'],
                [parseDate("2019-11-01"), 'Nov'],
                [parseDate("2019-12-01"), 'Dec']
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
            <text 
                x={xScale(xMarker[0]) + ((width - marginLeft - marginRight) / 12) / 2} 
                y={height - marginBottom + 14} 
                text-anchor="middle"
                class="label">
                {xMarker[1]}
            </text>
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

        {#each resultArray as item}

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
            d={lineGenerator(regressionGenerator(resultArray))} 
            stroke="#1E3765" 
            stroke-width="2" 
            fill="none" 
        />

    </g>
    </svg>
  </div>


<style>
    .scatter-plot {
        width: 100%;
        height: 401px;
    }

    .axisLine {
        stroke-width: 1px;
        stroke: var(--brandGray);
    }

    .tickLine {
        stroke-width: 1px;
        stroke: var(--brandGray70);
    }

    .gridLine {
        stroke-width: 1px;
        stroke: #e6e6e6;
    }

    .label {
        font-family: RobotoRegular, sans-serif;
        font-size: 13.5px;
        fill: var(--brandGray80)
    }
</style>
