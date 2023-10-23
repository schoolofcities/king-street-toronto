<script>
    // import: styling, d3, and data
    import "../assets/global.css"
    import * as d3 from "d3";
    import { onMount } from 'svelte';
    import violations2019 from "../data/violations2019.json";


    // preparing the data
    // calculate daily total violations for 2019
    const datesgroups2019 = d3.groups(violations2019, (d) => d.date);

    const data = [];
    datesgroups2019.forEach((dateg) => data.push({
            "date": dateg[0], 
            "total": d3.sum(dateg[1], (d) => d.sum_violations)})
        );
    // console.log(data);


    // defining limits of svg and chart
    // const width = window.innerWidth;
    // const height = window.innerHeight;
    const width = 1200;
    const height = 500;
    const marginTop = 40;
    const marginRight = 40;
    const marginBottom = 40;
    const marginLeft = 40;


    // parse date field
    const parseDate = d3.timeParse("%Y-%m-%d");


    // defining x and y scales
    const xScale = d3.scaleTime()
        .domain([new Date("2019-01-01"), new Date("2020-01-01")])
        .range([marginLeft, width - marginRight]);

    const yScale = d3.scaleLinear()
        .domain([0, d3.max(data, (d) => d.total)])
        .range([height - marginBottom, marginTop]);


    // create the axes
    // x axis month
    const xAxis = d3.axisBottom(xScale)
        .tickFormat(d3.timeFormat("%B"))
        .tickSizeOuter(0);

    // x axis year
    const xAxis2 = d3.axisBottom(xScale)
        .ticks(d3.timeYear.every(1))
        .tickSize(0)
        .tickSizeOuter(0);

    // y axis
    const yAxis = d3.axisLeft(yScale)
        .tickSizeOuter(0);


    // create Loess regression line
    const regressionGenerator = d3.regressionLoess()
        .x((d) => parseDate(d.date))
        .y((d) => d.total)
        .bandwidth(0.3)

    const lineGenerator = d3.line()
        .x(d => xScale(d[0]))
        .y(d => yScale(d[1]))



    // use onMount to allow D3 to select DOM elements
    //     after they have been constructed
    onMount(() => {
        // select and create the svg container
        const svg = d3.select('#total-violations-chart')
            .append('svg')
            .attr('width', width)
            .attr('height', height);

        const g = svg.append("g");


        // append the axes
        svg.append("g")
            .attr("transform", `translate(0,${height - marginBottom})`)
            .call(xAxis);

        svg.append("g")
            .attr("transform", `translate(0,${height - marginBottom/2})`)
            .call(xAxis2)
            .select(".domain").remove(); // remove main bar

        svg.append("g")
            .attr("transform", `translate(${marginLeft},0)`)
            .call(yAxis);


        // select and create points for daily totals
        g.selectAll('circle')
            .data(data)
            .join('circle')
            .attr('cx', d => xScale(parseDate(d.date)))
            .attr('cy', d => yScale(d.total))
            .attr('r', 5)
            .attr('fill', '#1E3765');
        
        // select and create loess regression path
        svg.append("path")
            .attr("class", "regression")
            .datum(regressionGenerator(data))
            .attr("d", lineGenerator)
            .attr("stroke", "#007FA3")
            .attr("stroke-width", "2")
            .attr("fill", "none");
    });

</script>