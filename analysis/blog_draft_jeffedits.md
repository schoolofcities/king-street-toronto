FIGURE 0 --- some sort of top-level photo/figure of King Street (corridor_simple.svg)



# Analyzing Traffic Violations on a Transit-Priority Street

## King Street, Toronto

October 2023

It has been almost 6 years since the City of Toronto altered traffic restrictions on King Street to give priority to public transit over private vehicles. Since the initiation of the project, cars have not been allowed to travel straight or make left turns at many intersections, reducing through traffic volumes.

While the project has been largely successful in reducing travel times by transit and improving reliability ([City of Toronto](https://www.toronto.ca/city-government/planning-development/planning-studies-initiatives/king-street-pilot/data-reports-background-materials/)), many have raised concerns over traffic violations at intersections, specifically drivers illegally driving straight through intersections or making left-turns, and the lack of enforcement of these rules ([Global News](https://globalnews.ca/news/9577392/motorists-breaking-rules-toronto-king-street-transit-corridor/)). 

We requested data on intersection-level vehicle movement data from the City of Toronto and traffic tickets from Toronto Police from 2016 to mid-2023. Based on this data, we estimate that on average there are X illegal turns and through movements at intersections per month, compared to only Y traffic tickets being handed out. At $110 per ticket, this is a massive missed opportunity for revenue for the City that could be achieved with increased enforcement, particularly via automatic enforcement cameras.

FIGURE 1 --- very simple chart/figure showing average traffic violations vs tickets - single item stacked bar chart would be easiest / quite clear - maybe one for 2019 and one for 2023?



## Background

The King Street Transit Priority Corridor started as a pilot project in fall of 2017 to improve transit reliability, travel times, and capacity by giving priority to transit vehicles (primarily the 504 streetcar route) over private vehicles. 

There are several traffic rules that were put into place for private vehicles travelling in the Corridor, most of which are described [here](https://www.toronto.ca/city-government/planning-development/planning-studies-initiatives/king-street-pilot/how-to-use-the-king-street-transit-pilot/). A more detailed description of the restrictions can be found [here](https://www.toronto.ca/wp-content/uploads/2018/05/8ead-King-Street-Brochure_May2018_Web.pdf). These traffic restrictions are what allows the Corridor to prioritize transit. 

The King Street Pilot Project was approved by City Council on July 4, 2017, and was launched November 12, 2017, expecting to operate for one year, and was granted an extension to July 31, 2019. On April 16, 2019, City Council made the King Street Pilot Project permanent as the King Street Transit Priority Corridor. 

FIGURE 2 --- insert map of corridor - showing restrictions (corridor_new.svg)

Vehicles are not supposed to drive through the Bathurst or Jarvis intersections on King but can turn left or right off of King. Thru traffic on King is not allowed at any signalized intersection in the Corridor and no left turns are allowed on King at signalized intersections in the Corridor. The exceptions to these rules occur at intersections of oneway streets (Simcoe, York), and some select others (John, Bay).


## Initial Successes and Impacts

The initial successes and impacts of the King Street Pilot/Transit Priority Corridor are well documented in the [dashboard-style reports](https://www.toronto.ca/city-government/planning-development/planning-studies-initiatives/king-street-pilot/data-reports-background-materials/) published by the City of Toronto, in cooperation with TTC. 

The project decreased transit travel times, and improved reliability, and initially led to an increase in ridership. The TTC added increased service to the 504 route as a response to the project's success ([City of Toronto](https://www.toronto.ca/legdocs/mmis/2019/cc/bgrd/backgroundfile-132032.pdf); [The Star](https://www.thestar.com/news/gta/king-st-pilot-boosting-streetcar-ridership-ttc/article_8718cdce-0859-55e8-8397-af06878dbbde.html)). There was also increased cycling volumes and pedestrian volumes on King Street, as the street became safer due to there being fewer cars. Car volumes on King decreased by XX%, and while there was some increase to traffic volume on nearby parallel street, there was minimal impact to travel times on those streets (Queen/Richmond/Adelaide/Wellington). Overall, the King Street Transit Priority Corridor was considered a success, and was used as a model for transit prioritization elsewhere (e.g. 14th Street in New York City). 





### Enforcement, or Lack Thereof?

<!-- if we get the data, I think we should put a bar chart in here of tickets by month/year - can likely just replicate the year-month chart from our bikeshare story -->

In the summer of 2019, [CBC News reported](https://www.cbc.ca/news/canada/toronto/traffic-tickets-transit-king-toronto-violation-1.5263557) observations of the first few years of the King Street Pilot. Many drivers were disobeying the traffic restriction signs, even though fines are $110 a ticket and two demerit points. From November 2017 to July 2019, the 21-month period of the King Street Pilot until it became permanent, Toronto Police had issued 16,000 tickets for the Corridor, with the biggest culprit being out-of-town drivers ([CBC News](https://www.cbc.ca/news/canada/toronto/traffic-tickets-transit-king-toronto-violation-1.5263557)). Police say that the perception is that there isn't enough enforcement, but actually the Corridor is covered by three divisions. 

The city and police are interested in automated enforcement cameras to maintain enforcement in the area, but this is not possible as it requires the province to provide legislative authority ([CBC News](https://www.cbc.ca/news/canada/toronto/traffic-tickets-transit-king-toronto-violation-1.5263557)). In 2019, MTO was still developing a regulatory framework for the implementation of automated speed enforcement ([CBC News](https://www.cbc.ca/news/canada/toronto/traffic-tickets-transit-king-toronto-violation-1.5263557)). Notably, New York City's emulation of the King Street Transit Priority Corridor on their 14th Street implements automated enforcement cameras to great effect ([The Star](https://www.thestar.com/news/gta/video-how-many-drivers-are-ignoring-the-rules-on-the-king-street-transit-corridor/article_3c87b687-400f-586c-aeae-997e285fcd81.html)). 

In 2022 and 2023, the public perception of the enforcement of the King Street traffic restrictions is still that there is not enough enforcement of the rules of the Corridor, and that it appears that more drivers are ignoring signage and not facing any repercussions. Pedestrians have observed drivers breaking the rules in the Corridor.

Toronto Police say there is a general lack of interest in following traffic rules across the city. Toronto Police have competing priorities and cannot constantly patrol the Corridor, but tickets on King Street are still being issued. 

From January to March 17, 2023, 1852 tickets were issued in the Corridor for disobeying traffic signs, including provincial offense notices, offense summons for drivers with multiple driving convictions, and written warnings. (REPLACE WITH OUR OWN DATA IF POSSIBLE)

The Corridor's city councillor Malik and public transit advocates are demanding explanations for the car traffic in the Corridor, and emphasize a need to revisit the redesign of King Street, calling on the city and police to do their part. They feel that the Transit Priority Corridor is no longer a priority for the city, and that King Street is just like any other street again ([CBC News](https://www.cbc.ca/news/canada/toronto/king-street-redesign-transit-priority-corridor-councillor-advocate-1.6689566)).




## Traffic Volume Data

Only a percent of those who make an illegal move at an intersection get ticketed. 

To understand how many drivers have been ignoring signage and breaking the law in the Corridor, and to see if they were increasing, we analyzed traffic volume data provided by the City of Toronto for each signalized intersection in the Corridor that has restricted movements. 

The traffic volume data was pre-aggregated by hour, and the earliest data collection began in October 2017 at a few intersections before the start of the King Street Pilot, which was used by the city to establish baselines for their analyses. The most recent data that we use, available at only a few intersections, are as recent as May 2023. The data provided are not complete throughout the time period of the King Street Pilot to today, as the data collection process changed in 2019 and some sensors were decomissioned in 2020. Before 2019, data collection was sporadic and conducted every couple of weeks and required human assistance. In 2019, edge processing units were installed and no longer relied on human assistance, and so data collection for most intersections became continuous to today. 

As well, taxi vehicles are permitted to make thru movements at intersections overnight, between 10pm and 5am, and thus our data analysis will not include traffic volume data from that time period, as there is no differentiation in the data between types of private vehicles to identify a taxi. Therefore any counts that we present are likely a slight under-estimation due to not accounting for violations that occur overnight.



## Traffic Violations in 2019

The most complete data that we have across all intersections are from 2019. Other than the intersection of King and Simcoe Street, there is near-continuous data for all other 11 intersections. (Simcoe Street is one of the few that allows through movements, and although we do not have the data to show it, is thus likely to have much lower violations that other streets)

We first visualize the total violations per day across all intersections (sans Simcoe Street) in 2019.

FIGURE 3
--- single chart of total violations across ALL intersections by day WITH Loess best fit curve (probably need to pre-compute this curve, maybe d3 can do on-the-fly?)
--- pair this chart with stats for the TOTAL number of violations in 2019 (2,453,812), and the AVERAGE violations per day (623.013629), for where we are missing data, use the loess value for these statistics

Let's dive in to look at each specific intersection

FIGURE 4 
--- chart showing violations for each specific intersection, showing different loess curves for each type of violation (E left, W left, E thru, W thru)
--- either a stack of charts or dropdown - I'm leaning dropdown as it will take up less space

The traffic volume data for 2019 shows that of the 11 intersections collecting data in the Corridor, Portland and Bathurst have the highest average restricted thru traffic, and Bathurst had the highest average volume for restricted left turns (east approach only). 




# Traffic Violations 2020-2023

On June 15, 2020, half of the traffic volume sensors in the King Street Transit Priority Corridor were decomissioned and relocated to support other transportation projects elsewhere in the City. The remaining six traffic volume sensors were located at Bathurst, Spadina, University, Bay, Yonge, and Jarvis. King / Bathurst (UID: 10), King / Spadina (UID: 12), King / University (UID: 15), King / Bay (UID: 17), King / Yonge (UID: 18), and King / Jarvis (UID: 20). The intersections with the remaining sensors can be considered as major intersections on King, and there is relatively continuous data from 2020 through to 2023. King / Jarvis has data up to February 2023, while the other intersections have data up to May 2023 (around when we requested the data from the city). 

The impact of the COVID-19 pandemic is clearly seen in the traffic volume data, as provincial states of emergency and lockdown restrictions can be observed in the data. There were lockdowns, increased restrictions, or declarations of states of emergency in March 2020, September 2020, December 2020, and January 2021. Restrictions were fully lifted in April and May of 2022. After the dip in traffic volume in 2020, we can see a slow increase over 2021 and 2022 to its current levels in 2023.

FIGURE 5
--- six small-multiple charts (wide, but short), one for each remaining intersection, showing a loess line for total violations by day and a horizontal line showing the 2019 average (for comparison). I don't think these need to be interactive
--- the mini-chart can be a component, that's just repeated 6 times depending on input data

Key discussion point here will be if violations have returned (or maybe even exceeded) pre-covid levels. Calculate an overall return rate, to then apply to non-monitored sites, to estimate total violations in early 2023.




## Some Concluding Thoughts

Summary of findings + recommendations (e.g. cameras?)



## Note Data Sources & Methods

Links for downloading data, link to GitHub page with code/notebooks for further exploring the data (maybe we can host the notebooks on Binder as well or something similar to allow for easy exploration)

Through email communications with city staff, we learned that the method for traffic volume data collection changed for 2019 in that edge processing units were installed and no longer relied on human assistance. Data collection became continuous, and so the traffic volume data for 2019 is the most complete year of data for active sensors in the Corridor before the COVID-19 pandemic. The King Street Pilot Project was also made into the permanent King Street Transit Priority Corridor by city council on April 16, 2019. 





<!-- content that I moved out for now, can add back in if it fits, all is great, but I'm not sure to keep this here or not since focus in on volumes / enforcement -->

<!-- ## Media

Since inception, there has been various media attention on the deterioration of the King Street Transit Priority Corridor, as a look at the redesign of King Street 5 years on. Citizens, local advocates, and city councillors have put forward concerns about lack of enforcement of traffic restrictions as well as poor maintenance of infrastructure.

### Infrastructure

People have observed that the Corridor's infrastructure has fallen into disrepair. Many articles describe the worn-down and neglected appearance of the fixtures of the Corridor, such as bollards being flattened or missing, yellow warning strips damaged or remove, and some seating areas are gone. Although there is no clear explanation for the lack of maintenance of the Corridor's infrastructure, it has been reported that the fixtures were not meant to be permanent when initially installed for the King Street Pilot, which is why they have fallen apart 5-6 years later. The city is waiting to revamp the transit stops in the Corridor and make other streetscape changes as they want to coordinate with other private streetscape reconstruction, and reportedly has planned streetscape improvements for 2023 with streetcar track repairs. Overall, people are frustrated and discouraged to observe the lack of care for the infrastructure, seeing the state of the Corridor as a signal that the city does not mean what it says or take care of what was invested in.  -->


<!-- The City of Toronto collects and aggregates traffic volumes for all movements at several intersections in the downtown core, including these intersections in the Corridor on King Street, from west to east.  -->

<!-- | UID |    Intersection   |
|:--:|:-----------------:|
| 10 |  King / Bathurst  |
| 11 |  King / Portland  |
| 12 |   King / Spadina  |
| 13 |    King / Peter   |
| 32 |    King / John    |
| 14 |   King / Simcoe   |
| 15 | King / University |
| 16 |    King / York    |
| 17 |     King / Bay    |
| 18 |    King / Yonge   |
| 19 |   King / Church   |
| 20 |   King / Jarvis   | -->

<!-- The restrictions and violations that we are investigating apply to private vehicles, and how they move at intersections of the Corridor. The rules of the Corridor are visualized in the image below (from the City of Toronto, modified).  -->

<!-- ### Pre-Pilot Traffic Volumes
The City investigated the traffic volumes of the King Street Corridor prior to the start of the King Street Pilot Project in order to establish a baseline. This data was reported on in their monthly dashboards, found [here](https://www.toronto.ca/city-government/planning-development/planning-studies-initiatives/king-street-pilot/data-reports-background-materials/). 

All of the traffic volume sensors in the Corridor were installed sometime in October 2017, although not all of them have data for the same dates (John does not have any pre-pilot data). In the interactive chart below, you can view which intersections were collecting data before the King Street Pilot began. Even in this short time period to establish baseline traffic volumes, it is clear that thru traffic was very high before the Pilot, with an average of 3721 vehicles for thru traffic coming from both east and west directions across 11 intersections (John does not have pre-pilot traffic volume data) per day. Left turning traffic coming from both east and west directions across 11 intersections average at 657 vehicles per day during this time period. 

- insert interactive chart with filterable intersections and movements for pre-pilot period: includes avg thrus, lefts, rights per intersection; that's 6 points per intersection
- show the intersection chart instead of the date chart
- data table format: rows are intersection names, columns are movement types, values are average daily sum

### Traffic Volume During the Pilot
The King Street Pilot began on November 12, 2017, and the impact of overall traffic volume on King Street was immediate. The average thru traffic volume across all 12 intersections (including Simcoe, York, John, and Bay, which permit thru traffic) between the start of the pilot and the end of 2018 is 417 per day, almost a 90% decrease. The average traffic volume for left turning vehicles across 11 intersections (including directionally permitted lefts at Bathurst and Jarvis; Simcoe does not have data) is 174 vehicles per day, a 73% decrease. Although it is clear that many drivers are following the movement restrictions of the Pilot, these numbers also show that there were still hundreds of vehicles a day violating the rules in the Corridor. 

- insert interactive intersection chart with filterable movements for the pilot period
- data table format: rows are intersection names, columns are movement types, values are average daily sum

The City also reported on these numbers in their monthly dashboard reports, found [here](https://www.toronto.ca/city-government/planning-development/planning-studies-initiatives/king-street-pilot/data-reports-background-materials/). 

It should be noted that the sensor at King & Simcoe did not collect any traffic volume data during the Pilot or in the years after, and will be excluded from the visualizations.  -->






