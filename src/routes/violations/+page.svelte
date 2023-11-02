<script>
    import '../../assets/global.css';
    import * as d3 from "d3";
    import ViolationsChart2020s from "../../lib/ViolationsChart2020s.svelte";
    import ViolationsChart2019 from "../../lib/ViolationsChart2019.svelte";
    import TotalViolations2019Chart from "../../lib/TotalViolations2019Chart.svelte";

</script>



<main>



    <h2>Total Violations, 2019</h2>
    
    <TotalViolations2019Chart />


    
    <h2>Intersection Violations, 2019</h2>

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


    <h2>Intersection Violations, 2020-2023</h2>

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

</main>
