<script>
    // import: styling, d3, and data
    import "../assets/global.css"
    import * as d3 from "d3";
    import {regressionLoess} from "d3-regression";
    import { onMount } from 'svelte';
    import violations2019 from "../data/violations2019.json";


    // get values to filter data
    export let intersectionID;

    var data = violations2019.filter(d => {
        if (String(d.intersection_uid) === intersectionID) {
            return d;
        }
    });

    // defining limits of svg and chart
    // const width = window.innerWidth;
    // const height = window.innerHeight;
    const width = 400;
    const height = 200;
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

    // const yScale = d3.scaleLinear()
    //     .domain([0, d3.max(data, (d) => d.sum_violations)])
    //     .range([height - marginBottom, marginTop]);

    // make charts have the same yScale values
    // console.log(d3.max(data, (d) => d.sum_violations));
    const yScale = d3.scaleLinear()
        .domain([0, 2700])
        .range([height - marginBottom, marginTop]);


    // create the axes
    // x axis month
    const xAxis = d3.axisBottom(xScale)
        .tickFormat(d3.timeFormat("%b"))
        .tickSizeOuter(0);

    // x axis year
    const xAxis2 = d3.axisBottom(xScale)
        .ticks(d3.timeYear.every(1))
        .tickSize(0)
        .tickSizeOuter(0);

    // y axis
    const yAxis = d3.axisLeft(yScale)
        .tickSizeOuter(0);


    // creating filtered, scaled, and parsed data
    const marks = data.map(d => ({
        intersection_uid: d.intersection_uid,
        date: xScale(parseDate(d.date)),
        sum_violations: yScale(d.sum_violations),
    }));

    
    // create dict_colours
    // const list_uids = [10, 11, 12, 13, 32, 14, 15, 16, 17, 18, 19, 20];
    // const list_colours = ["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462","#b3de69","#fccde5","#d9d9d9","#bc80bd","#ccebc5","#ffed6f"];
    // const dict_colours = {};
    // list_uids.forEach((key, i) => dict_colours[key] = list_colours[i]);
    // console.log(dict_colours);

    // assign fill colour for each intersection
    const dict_colours = { 
        "10": "#8dd3c7",
        "11": "#ffffb3",
        "12": "#bebada",
        "13": "#fb8072",
        "14": "#fdb462",
        "15": "#b3de69",
        "16": "#fccde5",
        "17": "#d9d9d9",
        "18": "#bc80bd",
        "19": "#ccebc5",
        "20": "#ffed6f",
        "32": "#80b1d3"
    };


    // create Loess regression line
    const regressionGenerator = regressionLoess()
        .x((d) => parseDate(d.date))
        .y((d) => d.sum_violations)
        .bandwidth(0.3)

    const lineGenerator = d3.line()
        .x(d => xScale(d[0]))
        .y(d => yScale(d[1]))



    // use onMount to allow D3 to select DOM elements
    //     after they have been constructed
    onMount(() => {
        // select and create the svg container
        const svg = d3.select('#violations-chart-2019')
            .append('svg')
            .attr('width', width)
            .attr('height', height);

        const g = svg.append("g");

        svg.append("g")
            .attr("class", "chart-title")
            .append("text")
            .attr("text-anchor", "beginning")
            .attr("x", 0 + marginLeft/2)
            .attr("y", 0 + marginTop/2)
            .attr("font-size", 14)
            .attr("font-family", "sans-serif")
            .text(function() {
                if (intersectionID === "14") {
                    return "King / Simcoe has no data.";
                } else {
                    return data[0].intersection_name;
                }
            });


        // append axes
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


        // select and create the points with data from marks
        g.selectAll('circle')
            .data(marks)
            .join('circle')
            .attr('cx', d => d.date)
            .attr('cy', d => d.sum_violations)
            .attr('r', 3)
            //.attr('fill', (d) => dict_colours[d.intersection_uid]);
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


<div id="violations-chart-2019"></div>