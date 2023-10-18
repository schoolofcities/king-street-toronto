<script>

    // import: styling, d3, and data
    import '../../assets/global.css';
    import * as d3 from "d3";
    import violations2019 from "../../data/violations2019.json";

    // preparing the data
    // calculate daily total violations for 2019
    const datesgroups2019 = d3.groups(violations2019, (d) => d.date);

    const totals = [];
    datesgroups2019.forEach((dateg) => totals.push(
            {"date": dateg[0], "total": d3.sum(dateg[1], (d) => d.sum_violations)}
            )
        );
    // console.log(totals);


    // defining limits of svg and chart
    const width = window.innerWidth;
    const height = window.innerHeight;
    const marginTop = 40;
    const marginRight = 40;
    const marginBottom = 40;
    const marginLeft = 40;


    // how to get values from dataset
    const parseDate = d3.timeParse("%Y-%m-%d");

    const xValue = (d) => parseDate(d.date);
    const yValue = (d) => d.sum_violations;
    const idValue = (d) => d.intersection_uid;
    

    // defining x and y scales
    const xScale = d3.scaleTime()
        .domain([new Date("2019-01-01"), new Date("2020-01-01")])
        .range([marginLeft, width - marginRight]);

    
    const yScale = d3.scaleLinear()
        // .domain([0, d3.max(violations2019, yValue)])
        // .domain(d3.extent(violations2019, yValue))
        .domain([0, d3.max(totals, (d) => d.total)])
        .range([height - marginBottom, marginTop]);
    // $: console.log(y.domain());
    
    // creating points dict with values
    const marks = violations2019.map(d => ({
        x: xScale(xValue(d)),
        y: yScale(yValue(d)),
        id: idValue(d),
    }));

    // console.log(marks);

    // create the svg container
    $: svg = d3.select('body')
        .append('svg')
        .attr('width', width)
        .attr('height', height);

    $: g = svg.append("g");

    // create the axes
    $: svg.append("g")
      .attr("transform", `translate(0,${height - marginBottom})`)
      .call(d3.axisBottom(xScale));

    $: svg.append("g")
      .attr("transform", `translate(${marginLeft},0)`)
      .call(d3.axisLeft(yScale));

    // define colour for the intersections
    const list_uids = [10, 11, 12, 13, 32, 14, 15, 16, 17, 18, 19, 20];
    const list_colours = ["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462","#b3de69","#fccde5","#d9d9d9","#bc80bd","#ccebc5","#ffed6f"];
    // const dict_colours = {};
    // list_uids.forEach((key, i) => dict_colours[key] = list_colours[i]);
    // console.log(dict_colours);

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
    

    // create the points with data saved to const/$: marks
    // $: g.selectAll('circle')
    //     .data(marks)
    //     .join('circle')
    //     .attr('cx', d => d.x)
    //     .attr('cy', d => d.y)
    //     .attr('r', 5)
    //     .attr('fill', (d) => dict_colours[d.id]);

    // create points without data saved to marks
    // $: g.selectAll('circle')
    //     .data(violations2019)
    //     .join('circle')
    //     .attr('cx', d => xScale(parseDate(d.date)))
    //     .attr('cy', d => yScale(d.sum_violations))
    //     .attr('r', 2)
    //     .attr('fill', (d) => dict_colours[d.intersection_uid]);

    // create points for daily totals
    $: g.selectAll('circle')
        .data(totals)
        .join('circle')
        .attr('cx', d => xScale(parseDate(d.date)))
        .attr('cy', d => yScale(d.total))
        .attr('r', 5)
        .attr('fill', '#1E3765')


    // create Loess regression line
    const regressionGenerator = d3.regressionLoess()
        .x((d) => parseDate(d.date))
        .y((d) => d.total)
        .bandwidth(0.3)

    const lineGenerator = d3.line()
        .x(d => xScale(d[0]))
        .y(d => yScale(d[1]))

    $: svg.append("path")
        .attr("class", "regression")
        .datum(regressionGenerator(totals))
        .attr("d", lineGenerator)
        .attr("stroke", "#007FA3")
        .attr("stroke-width", "1.5")
        .attr("fill", "none")


// svelte interactions
    const text = "some more text!"
    let sometext = "fun fun fun"

</script>



<main>

    <!-- <div id="content">

        {text}
        {sometext}

    </div> -->

</main>



<style>    

    #content {
        height: 100vh;
        background-color: #ffffff;
        color: #000000;
    }

</style>
