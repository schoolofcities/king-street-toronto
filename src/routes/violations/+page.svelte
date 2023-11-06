<script>

    import '../../assets/global.css';
    import ViolationsChart2020s from "../../lib/ViolationsChart2020s.svelte";
    import ViolationsChart2019 from "../../lib/ViolationsChart2019.svelte";
    import TotalViolations2019Chart from "../../lib/TotalViolations2019Chart.svelte";

</script>



<main>

    <div class="title">


        <h1>King Street</h1>

        

    </div>

    <div class="text">
        <h2>
            Traffic Violations on a Transit Priority Corridor in Toronto
        </h2>
        <p>
            It has been about six years since the City of Toronto altered traffic restrictions on King Street to give priority to public transit over private vehicles. Since the initiation of the project, cars have not been allowed to travel straight or make left turns at many intersections, reducing through traffic volumes.
        </p>
        <p>
            While the project has been largely successful in reducing travel times by transit and improving reliability (<a href="https://www.toronto.ca/city-government/planning-development/planning-studies-initiatives/king-street-pilot/data-reports-background-materials/">City of Toronto</a>), many have raised concerns over traffic violations at intersections, specifically drivers illegally driving straight through intersections or making left-turns, and the lack of enforcement of these rules (<a href="https://globalnews.ca/news/9577392/motorists-breaking-rules-toronto-king-street-transit-corridor/">Global News</a>).
        </p>
        <p>
            We requested data on intersection-level vehicle movement data from the City of Toronto and traffic tickets from Toronto Police from 2016 to mid-2023. Based on this data, we estimate that on average there are X illegal turns and thru movements at intersections per day, but only Y percent are being ticketed and fined, on average. At $110 per ticket, this is a massive missed opportunity for revenue for the City that could be achieved with increased enforcement, particularly via automatic enforcement cameras.
        </p>
        <p>
            INSERT BAR CHART
        </p>
        <p>
            The following ....
        </p>
    </div>

    <div class="text">

        <h3>Background</h3>

        <p>
            The King Street Transit Priority Corridor started as a pilot project in fall of 2017 to improve transit reliability, travel times, and capacity by giving priority to transit vehicles (primarily the 504 streetcar route) over private vehicles. 
        </p>

    </div>


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



