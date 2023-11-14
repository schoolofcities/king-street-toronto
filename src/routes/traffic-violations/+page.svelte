<script>

    import '../../assets/global.css';
    import { onDestroy } from 'svelte';

    import kingSt2019 from "../../assets/king-st-2019.jpg";
    import kingBathurst from "../../assets/king-bathurst-112023.jpg";
    import kingSt2023ticket from "../../assets/king-st-ticket-052023.jpg";

    import TopOfSofC from "$lib/TopSofC.svelte";
    import SingleStackedBar from '$lib/SingleStackedBar.svelte';
    import corridorDetailedMap from '../../assets/corridor_web.svg';
    import VerticalBarChart from '$lib/VerticalBarChart.svelte';
    import ViolationsChart2020s from "$lib/ViolationsChart2020s.svelte";
    import TotalViolations2019Chart from "$lib/TotalViolations2019Chart.svelte";
    import MonthlyTicketsBar from '$lib/MonthlyTicketsBar.svelte';

    let count = 0;
    function incrementCount() {
        count += 1;
    }
    const interval = setInterval(incrementCount, 9000);
    onDestroy(() => {
        clearInterval(interval);
    });
    $: console.log(count);

</script>



<main>

    <div class="counter-text">
        <p>~Number of cars that have disobeyed traffic laws on King Street since opening this page: <i>(estimated from historical data averages)</i></p>
    </div>
    <div class="counter">
        <h1>{count}</h1>
    </div>

    <TopOfSofC/>

    <div class="wideImage">
        <img width=100% height=100% src={kingSt2019} style="border-bottom: 2px solid #DC4633; border-top: 1px solid #1E3765; margin-top: 100px" alt="King Street Toronto">
    </div>

    <div class="title">

        <h1>King Street</h1>

    </div>

    <div class="text">
        <h2>
            Analyzing Traffic Violations on the King Street Transit Priority Corridor in Toronto
        </h2>
        <p>Jeff Allen & Qi-Sheng Chen | November, 2023</p>
        <SingleStackedBar/>

        <p>
            In November 2017 the City of Toronto altered traffic restrictions on King Street to give priority to public transit over private vehicles. Since the initiation of the project, cars have not been allowed to travel straight or make left turns at many intersections.
        </p>
        <p>
            While the project has been successful in evaporating traffic, reducing travel times by transit, and improving transit reliability on King Street (e.g. see <a href="https://www.toronto.ca/city-government/planning-development/planning-studies-initiatives/king-street-pilot/data-reports-background-materials/">City of Toronto</a> reports and dashboards), many have raised concerns over the extent of traffic violations at intersections, specifically drivers illegally travelling straight through intersections or making illegal left-turns, as well as the lack of enforcement of these rules (e.g. <a href="https://globalnews.ca/news/9577392/motorists-breaking-rules-toronto-king-street-transit-corridor/">Global News</a>, <a href="https://www.cbc.ca/news/canada/toronto/traffic-tickets-transit-king-toronto-violation-1.5263557">CBC News</a>, <a href="https://www.thestar.com/news/gta/video-how-many-drivers-are-ignoring-the-rules-on-the-king-street-transit-corridor/article_3c87b687-400f-586c-aeae-997e285fcd81.html">Toronto Star</a>).
        </p>
        <p>
            We requested data on intersection-level vehicle movement data from the City of Toronto as well as traffic tickets from Toronto Police from 2016 to mid-2023 to analyze how often drivers make illegal movements on King Street, and how often they were receiving traffic tickets.
        </p>
        <p>
            From this data, we find there are approximately <span class="bold">6,800 illegal turns and thru movements at intersections per day on the King Street Transit Priority Corridor</span>, but <span class="yellow">less than 1% are being ticketed by Toronto Police</span>, on average. 
            Thus <span class="red">99% of drivers are not being fined for breaking the law</span>. At a range of $85 to $110 per ticket, this is a massive missed opportunity for revenue for the City that could be achieved with increased enforcement, particularly via automatic enforcement cameras.
        </p>
        <p>
            Below we provide a brief background on the King Street Transit Priority Corridor and then visualize data on traffic violations and tickets over time.
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
        <p> 
            The following map shows the implemented restrictions (no left-turns and no thru movements) at 12 intersections along the corridor.
        </p>

    </div>

    <div class="wideImage">
        <img width=100% height=100% src={corridorDetailedMap} alt="Detailed Map of the King St Transit Corridor">
    </div>

    <div class="text">

        <p>
            The TTC added increased service to the 504 route as a response to the project's success (<a href="https://www.toronto.ca/legdocs/mmis/2019/cc/bgrd/backgroundfile-132032.pdf">City of Toronto</a>; <a href="https://www.thestar.com/news/gta/king-st-pilot-boosting-streetcar-ridership-ttc/article_8718cdce-0859-55e8-8397-af06878dbbde.html">The Star</a>). There was also increased cycling volumes and pedestrian volumes on King Street, as the street became safer due to there being fewer cars. Car volumes on King decreased, in some locations by more than 80%, and while there was some increase to traffic volume on nearby parallel streets, there was minimal impact to travel times on those streets (see <a href="https://www.toronto.ca/wp-content/uploads/2019/04/8fb5-TS_King-Street-Annual-Dashboard_Final.pdf">City of Toronto</a> report for details). Overall, the King Street Transit Priority Corridor was considered a success, and was used as a model for transit prioritization elsewhere (e.g. 14th Street in New York City).
        </p>

    </div>

    <div class="text">

        <h3>Analyzing Traffic Violations</h3>

        <p>
            To understand how many drivers have been ignoring signage and breaking the law in the Corridor, and to see how this is changing over time, we analyzed traffic volume data provided by the City of Toronto for each signalized intersection in the Corridor that has restricted movements. 
        </p>

        <img width=100% height=100% src={kingBathurst} style="border-bottom: 1px solid #1E3765; border-top: 1px solid #1E3765;" alt="Car driving illegally eastbound on King through the Bathurst St intersection">
        <p class="note">
            Bathurst & King intersection, looking east, with a car driving illegally through the intersection. November 8, 2023.
        </p>

        <p>
            The City's intersection-level traffic volume data is collected via automatic cameras and then image recognition algorithm software is used to tag any vehicle that travels through an intersection. Included is the direction and movement of each vehicle (e.g. travelling from east to west and turning north at the intersection). This data was provided to us as counts for each direction and movement at each intersection per hour. The earliest data collection began in October 2017 at a few intersections before the start of the King Street Pilot, which was used by the city to establish baselines for their analyses. The most recent data that we use, available at only a few intersections, are as recent as May 2023. 
        </p>
        <p>
            The data provided are not complete throughout the time period of the King Street Pilot to today, as the data collection process changed in 2019 and some sensors were decomissioned in 2020. Before 2019, data collection was sporadic and conducted every couple of weeks and required human assistance. In 2019, edge processing units were installed and no longer relied on human assistance, and so data collection for most intersections became much more continuous.
        </p>
        <p>
            A limitation of the data is that there is no differentiation in type of private vehicles, particularly between taxis and regular cars. Taxi vehicles are permitted to make thru movements at intersections overnight, between 10pm and 5am. The data also do not distinguish between smaller authorized vehicles (e.g. police cars) from regular private vehicles. To fairly account for these limitations we limit our analysis to just the 5am to 10pm period, understanding that we are not counting private vehicle violations overnight and slightly over-estimating violations during the day due to authorized vehicles.
        </p>
        <p>
            We also wanted to compare the number of traffic violations with the number of tickets handed out by Toronto Police (i.e. what % of illegal movements were actually being ticketed?). For data on traffic tickets, we underwent a freedom of information request with Toronto Police, asking for all tickets and warnings given out on the King Street corridor for traffic violations from 2016 to mid-2023. The freedom of information request cost $180 and took about 4 months.
        </p>

    </div>

    <div class="text" >

        <h3>Traffic Violations in 2019</h3>

        <p>
            The most complete data that we have across all intersections are from 2019. Other than the intersection of King and Simcoe Street, there is near-continuous data for all other 11 intersections. (The intersection at Simcoe allows thru movements, and although we do not have the data to show it, it likely has lower violations than other streets)
        </p>
        <p>
           We first visualize the average number of violations (illegal thru + illegal turns) at each intersection along the Corridor per day.
        </p>

        <VerticalBarChart />

        <p>
            In total, this amounts to <u>6,873 traffic violations</u> per day on average across the entire corridor in 2019. (Note that this is likely an underestimation due to not including the intersection at Simcoe and any violations that occur between 10pm and 5am).
        </p>
        <!-- <p>
            Let's take a look at how this varies over time during this period. Each red circle on this plot is the total number of traffic violations on each day, and the blue line is a rolling average (based on a <a href="https://en.wikipedia.org/wiki/Local_regression">LOESS regression</a> function).
        </p> -->
        
        <!-- <TotalViolations2019Chart />

        <p>
            (Some text describing this plot above)
        </p> -->

    </div>

    <div class="text">

        <h3>Traffic Violations from 01/2020 to 05/2023</h3>

        <p>
            On June 15, 2020, half of the traffic volume sensors in the King Street Transit Priority Corridor were decomissioned and relocated to support other transportation projects elsewhere in the City.
        </p>

        <p>
            While we don't have data at all intersections, we can still take a look at trends for each of the  intersections that do have data from 2020 to 2023, and compare each to 2019 average number violations per day. 
        </p>

        <p>
            Each red circle on the plots below are the total number of traffic violations on each day at each intersection, and the yellow line is a rolling average (based on a <a href="https://en.wikipedia.org/wiki/Local_regression">LOESS regression</a> function). The gaps in the red bars are for days where there was no data available. The dark blue dashed line is the 2019 average.
        </p>

        

    </div>

    <div class="wideImage">
        <ViolationsChart2020s intersectionID="10"/>
        <ViolationsChart2020s intersectionID="12"/>
        <ViolationsChart2020s intersectionID="15"/>
        <!-- <ViolationsChart2020s intersectionID="17"/> -->
        <ViolationsChart2020s intersectionID="18"/>
        <ViolationsChart2020s intersectionID="20"/>
    </div>

    <div class="text">

        <p>
            The number of violations per day from 2020 to 2023 fluctuate over time, and are often in relation to COVID-19 closures that reduced traffic overall in the city.
        </p>    
        <p>    
            Overall though, the number of traffic violations in the latter half of 2022 and into 2023 are very close to 2019 averages. While we do not have complete data across the all intersections, based on the data that we do have, we can be pretty confident that the number of violations per day (excluding 10pm to 5am) has returned to the 2019 level of approximately 6,800 per day.
        </p>

    </div>

    <div class="text">

        <img width=100% height=100% src={kingSt2023ticket} alt="Ticket">
        <p class="note">
            Car being pulled over by Toronto Police just after illegally driving westbound through Bathurst. May 15, 2023.
        </p>

        <h3>Changing Patterns in Enforcement?</h3>

        <p>
            We also chart how traffic enforcement has changed over time, both in terms of number of tickets and written warnings. At the onset of the pilot in November 2017, there was a large number of warnings, which soon subsided. It is not clear to us in the data we acquired about whether since then why someone violating traffic laws would get a warning instead of a ticket.
        </p>
        <p>
            The number of tickets per month flucutated but stayed around an average of 500 per month up until spring 2020 where it dropped, likely related to COVID-19. However, the number of tickets has not since increased to pre-COVID levels.
        </p>

        <MonthlyTicketsBar variable="Tickets"/>

        <MonthlyTicketsBar variable="Warnings"/>

    </div>

    <div class="text">

        <h3>Final Thoughts</h3>

        <p>

        </p>

    </div>

</main>




