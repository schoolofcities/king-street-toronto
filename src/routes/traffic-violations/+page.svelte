<script>

    import '../../assets/global.css';
    import { onDestroy } from 'svelte';

    import kingSt2019 from "../../assets/king-st-2019.jpg";
    import corridorDetailedMap from '../../assets/corridor-map-vectorized.svg';
    import kingBathurst from "../../assets/king-bathurst-112023.jpg";
    import kingSt2023ticket from "../../assets/king-st-ticket-052023.jpg";

    import TopOfSofC from "$lib/TopSofC.svelte";
    import SingleStackedBar from '$lib/SingleStackedBar.svelte';
    import VerticalBarChart from '$lib/VerticalBarChart2019.svelte';
    import ViolationsChart2020s from "$lib/ViolationsChart2020s.svelte";
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


<TopOfSofC/>

<main>

    <div class="counter-text">
        <p>~Number of cars that have disobeyed traffic laws on King Street since opening this page <i>(estimated from historical data averages)</i></p>
    </div>
    <div class="counter">
        <h1>{count}</h1>
    </div>

    
    <div class="wideImage">
        <img width=100% height=100% src={kingSt2019} style="border-bottom: 2px solid #DC4633; border-top: 1px solid #1E3765; margin-top: 100px" alt="King Street Toronto">
    </div>

    <div class="title">

        <h1>King Street</h1>

    </div>

    <div class="text">
        <h2>
            Analyzing traffic violations on the King Street Transit Priority Corridor in Toronto
        </h2>
        <p>Jeff Allen & Qi-Sheng Chen / November 2023</p>
        <SingleStackedBar/>

        <p>
            In November 2017 the City of Toronto altered traffic restrictions on King Street to give priority to public transit over private vehicles. Since the initiation of the project, cars have not been allowed to travel straight or make left turns at many intersections.
        </p>
        <p>
            While the project has been successful in evaporating traffic, reducing travel times by transit, and improving transit reliability on King Street (e.g. see <a href="https://www.toronto.ca/city-government/planning-development/planning-studies-initiatives/king-street-pilot/data-reports-background-materials/">City of Toronto</a> reports and dashboards), many have raised concerns over the extent of traffic violations at intersections -specifically drivers illegally travelling straight through intersections or making illegal left-turns, as well as the lack of enforcement of these rules (e.g. <a href="https://globalnews.ca/news/9577392/motorists-breaking-rules-toronto-king-street-transit-corridor/">Global News</a>, <a href="https://www.cbc.ca/news/canada/toronto/traffic-tickets-transit-king-toronto-violation-1.5263557">CBC News</a>, <a href="https://www.thestar.com/news/gta/video-how-many-drivers-are-ignoring-the-rules-on-the-king-street-transit-corridor/article_3c87b687-400f-586c-aeae-997e285fcd81.html">Toronto Star</a>).
        </p>
        <p>
            We requested data on intersection-level vehicle movement from the City of Toronto as well as traffic tickets from Toronto Police from 2016 to mid-2023, to analyze how often drivers make illegal movements on King Street and how often they were receiving traffic tickets.
        </p>
        <p>
            From this data, we find there are approximately <span class="bold">6,800 illegal turns and thru movements at intersections per day on the King Street Transit Priority Corridor</span>, but <span class="yellow">less than 0.3% are being ticketed by Toronto Police</span>, on average. 
            Thus <span class="red">more than 99.7% of drivers are not being fined for breaking the law</span> on the King Street Transit Priority Corridor. 
        </p>
        <p>    
            At a range of $85 to $110 per ticket, this is a missed opportunity for potential revenue for the City that could be achieved with increased enforcement, particularly via automatic enforcement cameras. At the time of writing, Councillor Chris Moise had pushed forward an <a href="https://secure.toronto.ca/council/agenda-item.do?item=2023.MM12.1">item in council</a> for city staff to assess the feasibility of implementing automated traffic enforcement (to report back in the second quarter of 2024). Time will tell if this will be implemented in the (near) future.
        </p>
        <p>
            Below we provide a brief background on the King Street Transit Priority Corridor, followed by our analysis and visualization of this data on traffic violations and traffic tickets.
        </p>
    </div>

    <div class="text">

        <h3>Background</h3>

        <p>
            The King Street Transit Priority Corridor started as a pilot project in fall of 2017 to improve transit reliability, travel times, and capacity by giving priority to transit vehicles (primarily the 504 Streetcar route) over private vehicles. 
        </p>

        <p>
            There are several traffic rules that were put into place for private vehicles travelling in the Corridor, most of which are described <a href="https://www.toronto.ca/city-government/planning-development/planning-studies-initiatives/king-street-pilot/how-to-use-the-king-street-transit-pilot/">here</a>. A more detailed description of the restrictions can be found <a href="https://www.toronto.ca/wp-content/uploads/2018/05/8ead-King-Street-Brochure_May2018_Web.pdf">here</a>. These traffic restrictions are what allows the Corridor to prioritize transit. 
        </p>
        <p>
            The King Street Pilot Project was approved by City Council on July 4, 2017, and was launched on November 12, 2017. The original plan was to operate the pilot for one year, but it was granted an extension to July 31, 2019. On April 16, 2019, 3 months before the end of the (extended) pilot, City Council made the King Street Pilot Project permanent as the King Street Transit Priority Corridor.
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
            The TTC added increased service to the 504 Streetcar route as a response to the project's success (<a href="https://www.toronto.ca/legdocs/mmis/2019/cc/bgrd/backgroundfile-132032.pdf">City of Toronto</a>; <a href="https://www.thestar.com/news/gta/king-st-pilot-boosting-streetcar-ridership-ttc/article_8718cdce-0859-55e8-8397-af06878dbbde.html">The Star</a>). There was also increased cycling and pedestrian volumes on King Street, as the street became safer due to a drop in the volume of cars. Car volumes on King Street decreased in some locations by more than 80%, and while there was some increase to traffic volume on nearby parallel streets, there was minimal impact to travel times on those streets (see <a href="https://www.toronto.ca/wp-content/uploads/2019/04/8fb5-TS_King-Street-Annual-Dashboard_Final.pdf">City of Toronto</a> report for details). Overall, the King Street Transit Priority Corridor was considered a success, and was used as a model for transit prioritization elsewhere (e.g. <a href="https://nyc.streetsblog.org/2019/04/29/four-lessons-for-14th-street-from-torontos-transit-first-king-street">14th Street</a> in New York City).
        </p>

    </div>

    <div class="text">

        <h3>Analyzing traffic violations</h3>

        <p>
            To understand how many drivers have been ignoring signage and breaking the law in the Corridor, and to see how this is changing over time, we analyzed traffic volume data provided by the City of Toronto for each signalized intersection in the Corridor that has restricted movements. 
        </p>

        <img width=100% height=100% src={kingBathurst} style="border-bottom: 1px solid #1E3765; border-top: 1px solid #1E3765;" alt="Car driving illegally eastbound on King through the Bathurst St intersection">
        <p class="note">
            Bathurst & King intersection, looking east, with a car driving illegally through the intersection. November 8, 2023.
        </p>

        <p>
            The City collects intersection-level traffic volume data on King Street via automatic cameras and image recognition tools. Included in this is the direction and movement of each vehicle (e.g. travelling from east to west and turning south at the intersection, i.e. a left turn). This data was provided to us as counts for each direction and movement at each intersection, aggregated by each hour. We were then able to identify movements that were illegal. 
        </p>
        <p> 
            Data collection began in October 2017 at a few intersections before the start of the King Street Pilot, which was used by the city to establish baselines for their analyses. The most recent data that we use, available at only a few intersections, are as recent as May 2023. The data provided are not complete throughout the time period of the King Street Pilot to today, as the data collection process changed in early 2019 and some sensors were later decommissioned in 2020. 
        </p>
        <p>
            A limitation of the data is that there is no differentiation in the type of private vehicles, particularly between taxis and regular cars. Taxi vehicles are permitted to make thru movements at intersections overnight (between 10pm and 5am). The data also do not distinguish between smaller authorized vehicles (e.g. police cars) and regular private vehicles. To fairly account for these limitations we restricted our analysis to the 5am to 10pm period, understanding that we were not counting any private vehicle violations overnight, while conversely, we were slightly over-estimating violations during the day due to authorized vehicles.
        </p>
        <p>
            We also wanted to compare the number of traffic violations with the number of tickets handed out by Toronto Police (i.e. what % of illegal movements were actually being ticketed?). For data on traffic tickets, we underwent a freedom of information request with Toronto Police, asking for data on all tickets and warnings given out on the King Street Corridor for traffic violations from 2016 to mid-2023.
        </p>

    </div>

    <div class="text" >

        <h3>Traffic violations in 2019</h3>

        <p>
            The most complete data that we have across all intersections are from 2019. Other than the intersection of King and Simcoe streets, there is near-continuous data for all other 11 intersections during the year (the intersection at Simcoe Street allows thru movements, and although we do not have the data to show it, it likely has similar violations to John or York streets which are on the low end).
        </p>
        <p>
           We first visualize the average number of violations (illegal thru + illegal turns) at each intersection along the Corridor per day.
        </p>

        <VerticalBarChart variable="averageViolations2019"/>

        <p>
            In total, this amounts to 6,873 traffic violations per day on average across the entire corridor in 2019 (note that this is likely an underestimation, due to not including the intersection at Simcoe Street and any violations that occur between 10pm and 5am).
        </p>

        <p>
            We similarly chart the average number of tickets issued at each intersection per day. For this, we are including all tickets given for the offences <i>"Proceed Contrary to Sign at Intersection"</i> and <i>"Disobey Sign"</i>, filtered to only include those that occur between the hours of 5am and 10pm, in order to match with the violations data.
        </p>


        <VerticalBarChart variable="totalTickets2019"/>

        <p>
            This amounts to 17.5 traffic tickets per day on average, 6,387 in total for all 365 days in 2019. These numbers are a tiny fraction of all violations in the chart above; 0.255% of the overall total number of violations estimated from the City's traffic volume data.
        </p>

    </div>

    <div class="text">

        <h3>Traffic violations from 01/2020 to 05/2023</h3>

        <p>
            On June 15, 2020, half of the traffic volume sensors in the King Street Transit Priority Corridor were decommissioned and relocated to support other transportation projects elsewhere in the city.
        </p>

        <p>
            While there is no longer data for all intersections, we can still take a look at trends for each of the  intersections that do have data for from 2020 to 2023, and compare them to the average number of violations per day in 2019. 
        </p>

        <p>
            Each red circle on the plots below is the total number of traffic violations on each day at each intersection, and the yellow line is a rolling average (based on a <a href="https://en.wikipedia.org/wiki/Local_regression">LOESS regression</a> function). The gaps between the red bars are for days where there was no data available. The dark blue dashed line is the intersection's 2019 average.
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
            The number of violations per day from 2020 to 2023 fluctuate over time and are often in relation to COVID-19 lockdowns that reduced traffic overall in the city.
        </p>    
        <p>    
            It is clear that the number of traffic violations in the latter half of 2022 and into 2023 are very close to 2019 averages. While we do not have complete data across all intersections, based on the data that we do have, we can be pretty confident that the number of violations per day (excluding 10pm to 5am) has returned to the 2019 level of approximately 6,800 per day.
        </p>

    </div>

    <div class="text">

        <img width=100% height=100% src={kingSt2023ticket} alt="Ticket">
        <p class="note">
            Car being pulled over by Toronto Police just after illegally driving westbound through Bathurst. May 15, 2023.
        </p>

        <h3>Changing patterns in enforcement?</h3>

        <p>
            We also chart how traffic enforcement has changed over time, both in terms of number of tickets and written warnings. At the onset of the pilot in November 2017, there was a large number of warnings, which soon subsided. Since then, it is not clear to us in the data why someone violating traffic laws would get a warning instead of a ticket.
        </p>

        <MonthlyTicketsBar variable="Tickets"/>

        <MonthlyTicketsBar variable="Warnings"/>

        <p>
            The number of tickets per month fluctuated around an average of about 500 per month up until spring 2020 when it dropped, likely related to COVID-19. However, the number of tickets has not returned to pre-COVID levels, on average. 
        </p>    
        <p> 
            Installing automatic enforcement cameras would massively increase the capacity to ticket those who violate the traffic restrictions of the King Street Transit Priority Corridor and provide needed revenue for the City. At $85 to $110 in fines per ticket and 6,800 violations per day, that's approximately $650,000 of potential income per day. It's hard to say what the effect on travel behaviour might be if enforcement increased, it may cause drivers to later avoid the route which may, in turn, lower ticketing revenue estimates. That said, fewer drivers on King Street would likely improve transit speed and reliability even more, and automatic enforcement would certainly be beneficial for improving the quality and effectiveness of the King Street Transit Priority Corridor.
        </p>

    </div>

    <div class="text">

        <h3>Further Information</h3>

        <p>
            Interested in this data? Or the code that we used to visualize it and make this web-page? It's all on <a href="https://github.com/schoolofcities/king-street-toronto">GitHub</a>.
        </p>

    </div>

</main>




