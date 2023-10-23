<script>
    // import: styling, d3, and data
    import '../../assets/global.css';
    import * as d3 from "d3";
    // import violations2019 from "../../data/violations2019.json";
    import ViolationsChart2020s from "../../lib/ViolationsChart2020s.svelte";
    import ViolationsChart2019 from "../../lib/ViolationsChart2019.svelte";
    import TotalViolations2019Chart from "../../lib/TotalViolations2019Chart.svelte";


    // svelte interactions
    const text = "some more text!"
    let sometext = "fun fun fun"

</script>



<main>
    <h2>Total Violations, 2019</h2>
    <div id="total-violations-chart">
        <TotalViolations2019Chart />
    </div>

    
    <h2>Intersection Violations, 2019</h2>
    <div id="violations-chart-2019" class="chart2019">
        <ViolationsChart2019
            intersectionID="10"
        />
        <ViolationsChart2019
            intersectionID="11"
        />
        <ViolationsChart2019
            intersectionID="12"
        />
        <ViolationsChart2019
            intersectionID="13"
        />
        <ViolationsChart2019
            intersectionID="32"
        />
        <ViolationsChart2019
            intersectionID="14"
        />
        <ViolationsChart2019
            intersectionID="15"
        />
        <ViolationsChart2019
            intersectionID="16"
        />
        <ViolationsChart2019
            intersectionID="17"
        />
        <ViolationsChart2019
            intersectionID="18"
        />
        <ViolationsChart2019
            intersectionID="19"
        />
        <ViolationsChart2019
            intersectionID="20"
        />
    </div>

    <h2>Intersection Violations, 2020-2023</h2>
    <div id="violations-chart">
        <ViolationsChart2020s
            intersectionID="10"
        />
        <ViolationsChart2020s
            intersectionID="12"
        />
        <ViolationsChart2020s
            intersectionID="15"
        />
        <ViolationsChart2020s
            intersectionID="17"
        />
        <ViolationsChart2020s
            intersectionID="18"
        />
        <ViolationsChart2020s
            intersectionID="20"
        />
    </div>
    
    
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

    .chart2019 {
        width: 60%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
		gap: 10px;
    }

</style>
