<script>
    // import: styling, d3, and data
    import "../assets/global.css"
    import * as d3 from "d3";
    import { onMount } from 'svelte';
    // import violations2019 from "../data/violations2019.json";
    import violations2020s from "../data/violations2020-2023.json";

    // get values to filter data
    export let intersectionID;

    var data = violations2020s.filter(d => {
        if (String(d.intersection_uid) === intersectionID) {
            return d;
        }
    });


    // defining limits of svg and chart
    // const width = window.innerWidth;
    // const height = window.innerHeight;
    const width = 600;
    const height = 200;
    const marginTop = 40;
    const marginRight = 40;
    const marginBottom = 40;
    const marginLeft = 40;


    // parse date field
    const parseDate = d3.timeParse("%Y-%m-%d");


    // defining x and y scales
    const xScale = d3.scaleTime()
        .domain([new Date("2020-01-01"), new Date("2023-06-01")])
        .range([marginLeft, width - marginRight]);

    // const yScale = d3.scaleLinear()
    //     .domain([0, d3.max(data, (d) => d.sum_violations)])
    //     .range([height - marginBottom, marginTop]);

    // make charts have the same yScale values
    // console.log(d3.max(data, (d) => d.sum_violations));
    const yScale = d3.scaleLinear()
        .domain([0, 2200]) //3800
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


    // define colour for the 6 intersections for 2020-2023
    const dict_SoCcolours = { 
        "10": "#DC4633",
        "12": "#8DBF2E",
        "15": "#F1C500",
        "17": "#00A189",
        "18": "#6D247A",
        "20": "#AB1368",
    };


    // create Loess regression line
    const regressionGenerator = d3.regressionLoess()
        .x((d) => parseDate(d.date))
        .y((d) => d.sum_violations)
        .bandwidth(0.3)

    const lineGenerator = d3.line()
        .x(d => xScale(d[0]))
        .y(d => yScale(d[1]))


    // 2019 averages by intersection data
    const avgs2019 = [
        {
        "intersection_uid": 10,
        "start": "2020-01-01",
        "end": "2023-06-01",
        "avg2019": 1064
        },
        {
        "intersection_uid": 12,
        "start": "2020-01-01",
        "end": "2023-06-01",
        "avg2019": 786
        },
        {
        "intersection_uid": 15,
        "start": "2020-01-01",
        "end": "2023-06-01",
        "avg2019": 759
        },
        {
        "intersection_uid": 17,
        "start": "2020-01-01",
        "end": "2023-06-01",
        "avg2019": 133
        },
        {
        "intersection_uid": 18,
        "start": "2020-01-01",
        "end": "2023-06-01",
        "avg2019": 813
        },
        {
        "intersection_uid": 20,
        "start": "2020-01-01",
        "end": "2023-06-01",
        "avg2019": 522
        }
    ];

    var data2019avgs = avgs2019.filter(d => {
        if (String(d.intersection_uid) === intersectionID) {
            //console.log(d);
            return d;
        }
    });


    // use onMount to allow D3 to select DOM elements
    //     after they have been constructed
    onMount(() => {
        // select and create the svg container
        const svg = d3.select('#violations-chart')
            .append('svg')
            .attr('width', width)
            .attr('height', height);

        const g = svg.append("g");

        // chart title (intersection)
        svg.append("g")
            .data(data)
            .attr("class", "chart-title")
            .append("text")
            .attr("text-anchor", "beginning")
            .attr("x", 0 + marginLeft/2)
            .attr("y", 0 + marginTop/2)
            .attr("font-size", 14)
            .attr("font-family", "sans-serif")
            .text(data[0].intersection_name);


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


        // create the points with data saved to const/$: marks
        g.selectAll('circle')
            .data(marks)
            .join('circle')
            .attr('cx', d => d.date)
            .attr('cy', d => d.sum_violations)
            .attr('r', 3)
            .attr('fill', (d) => dict_SoCcolours[d.intersection_uid]);

        // create loess regression line
        svg.append("path")
            .attr("class", "regression")
            .datum(regressionGenerator(data))
            .attr("d", lineGenerator)
            .attr("stroke", "#007FA3")
            .attr("stroke-width", "2")
            .attr("fill", "none")

        
        // create 2019 avg line
        svg.append("line")
            .attr("class", "avg-2019")
            .data(data2019avgs)
            .attr("stroke", "#1E3765")
            .attr("stroke-width", "1.5")
            .attr("stroke-dasharray", ("3, 3"))
            .attr("x1", d => xScale(parseDate(d.start)))
            .attr("y1", d => yScale(d.avg2019))
            .attr("x2", d => xScale(parseDate(d.end)))
            .attr("y2", d => yScale(d.avg2019))            
        
        // text label for 2019 avg line
        // svg.append("g")
        //     .attr("class", "avg-label")
        //     .append("text")
        //     .attr("text-anchor", "beginning")
        //     .data(data2019avgs)
        //     .attr("x", d => xScale(parseDate(d.start))*1.1)
        //     .attr("y", d => yScale(d.avg2019)*0.95)
        //     .attr("font-size", 9)
        //     .attr("font-family", "sans-serif")
        //     .text("2019 Average");

    });

</script>