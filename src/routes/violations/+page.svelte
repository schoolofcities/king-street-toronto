<script>

    import '../../assets/global.css';

    import corridorDetailedMap from '../../assets/corridor_web.svg';

    import SingleStackedBar from '$lib/SingleStackedBar.svelte';
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
            We requested data on intersection-level vehicle movement data from the City of Toronto and traffic tickets from Toronto Police from 2016 to mid-2023. From this data, we estimate that on average there are <u>200 illegal turns and thru movements at intersections per day</u>, but only <span class="yellow">10%</span> are being ticketed by Toronto Police, on average. 
        </p>

        <SingleStackedBar/>

        <p> 
            Thus <span class="red">90%</span> of drivers are not bein fined for breaking the law. 
            At $110 per ticket, this is a massive missed opportunity for revenue for the City that could be achieved with increased enforcement, particularly via automatic enforcement cameras.
        </p>
    
        <p>
            The following provides a backgrounds the King Street Transit Priority project and then visualizes data on traffic violations and fines over time.
        </p>
    </div>

    <div class="text">

        <h3>Background</h3>

        <p>
            The King Street Transit Priority Corridor started as a pilot project in fall of 2017 to improve transit reliability, travel times, and capacity by giving priority to transit vehicles (primarily the 504 streetcar route) over private vehicles. 
        </p>

        <p>
            There are several traffic rules that were put into place for private vehicles travelling in the Corridor, most of which are described <a href="https://www.toronto.ca/city-government/planning-development/planning-studies-initiatives/king-street-pilot/how-to-use-the-king-street-transit-pilot/">here</a>. A more detailed description of the restrictions can be found <a href="https://www.toronto.ca/wp-content/uploads/2018/05/8ead-King-Street-Brochure_May2018_Web.pdf">here</a>. These traffic restrictions are what allows the Corridor to prioritize transit. 
        </p>
        <p>
            The King Street Pilot Project was approved by City Council on July 4, 2017, and was launched November 12, 2017, expecting to operate for one year, and was granted an extension to July 31, 2019. On April 16, 2019, City Council made the King Street Pilot Project permanent as the King Street Transit Priority Corridor. 
        </p>

    </div>

    <div class="wideImage">
        <img width=100% height=100% src={corridorDetailedMap} alt="Detailed Map of the King St Transit Corridor">
    </div>

    <div class="text">
        <p>
            Private vehicles are not supposed to drive straight through the Bathurst or Jarvis intersections on King but can turn left or right off of King. Thru traffic on King and left turns from King are not allowed at many signalized intersections. The exceptions to these rules occur at intersections of one-way streets (Simcoe, York), and some select others (John, Bay).
        </p>
    </div>

    <div class="text">

        <h3>Initial Successes and Impacts</h3>

        <p>
            The initial successes and impacts of the King Street Pilot/Transit Priority Corridor are well documented in the <a href="https://www.toronto.ca/city-government/planning-development/planning-studies-initiatives/king-street-pilot/data-reports-background-materials/">dashboard-style reports</a> published by the City of Toronto, in cooperation with TTC. 
        </p>
        <p>
            The project decreased transit travel times, and improved reliability, and initially led to an increase in ridership. The TTC added increased service to the 504 route as a response to the project's success (<a href="https://www.toronto.ca/legdocs/mmis/2019/cc/bgrd/backgroundfile-132032.pdf">City of Toronto</a>; <a href="https://www.thestar.com/news/gta/king-st-pilot-boosting-streetcar-ridership-ttc/article_8718cdce-0859-55e8-8397-af06878dbbde.html">The Star</a>). There was also increased cycling volumes and pedestrian volumes on King Street, as the street became safer due to there being fewer cars. Car volumes on King decreased by XX%, and while there was some increase to traffic volume on nearby parallel street, there was minimal impact to travel times on those streets (Queen/Richmond/Adelaide/Wellington). Overall, the King Street Transit Priority Corridor was considered a success, and was used as a model for transit prioritization elsewhere (e.g. 14th Street in New York City). 
        </p>

    </div>

    <div class="text">

        <h3>Enforcement, or Lack Thereof?</h3>

        <p>

        </p>

    </div>

    <div class="text">

        <h3>Traffic Volume Data</h3>

        <p>
            Only a percent of those who make an illegal move at an intersection get ticketed. 
        </p>

        <p>
            To understand how many drivers have been ignoring signage and breaking the law in the Corridor, and to see if they were increasing, we analyzed traffic volume data provided by the City of Toronto for each signalized intersection in the Corridor that has restricted movements. 
        </p>

        <p>
            The traffic volume data was pre-aggregated by hour, and the earliest data collection began in October 2017 at a few intersections before the start of the King Street Pilot, which was used by the city to establish baselines for their analyses. The most recent data that we use, available at only a few intersections, are as recent as May 2023. The data provided are not complete throughout the time period of the King Street Pilot to today, as the data collection process changed in 2019 and some sensors were decomissioned in 2020. Before 2019, data collection was sporadic and conducted every couple of weeks and required human assistance. In 2019, edge processing units were installed and no longer relied on human assistance, and so data collection for most intersections became continuous to today. 
        </p>

        <p>
            As well, taxi vehicles are permitted to make thru movements at intersections overnight, between 10pm and 5am, and thus our data analysis will not include traffic volume data from that time period, as there is no differentiation in the data between types of private vehicles to identify a taxi. Therefore any counts that we present are likely a slight under-estimation due to not accounting for violations that occur overnight.
        </p>

    </div>

    <div class="text" >

        <h3>Traffic Violations in 2019</h3>

        <p>
            The most complete data that we have across all intersections are from 2019. Other than the intersection of King and Simcoe Street, there is near-continuous data for all other 11 intersections. (Simcoe Street is one of the few that allows through movements, and although we do not have the data to show it, is thus likely to have much lower violations that other streets)
        </p>
        <p>
            We first visualize the total violations per day across all intersections (sans Simcoe Street) in 2019.
        </p>

        <TotalViolations2019Chart />

        <p>
            Let's dive in to look at each specific intersection
        </p>

    </div>


    <!-- <h2>Total Violations, 2019</h2>
    
     -->

    
    <!-- <h2>Intersection Violations, 2019</h2>

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
    /> -->

    <!-- <h2>Intersection Violations, 2020-2023</h2>

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
    /> -->

</main>



