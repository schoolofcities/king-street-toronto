# King Street Toronto
Analysis and visualization of through-traffic violations and turning violations on the transit-priority section of King Street in Toronto.

## Background
The King Street Transit Priority Corridor started as the King Street Pilot project in 2017 to improve transit reliability, speed, and capacity by giving priority to streetcars over private vehicles. The pilot project was approved by City Council on July 4, 2017, and was launched November 12, 2017, expecting to operate as such for one year. The City Council made the pilot project into a permanent transit priority corridor on April 16, 2019. 

The Corridor spans the length of King St from Bathurst St in the west to Jarvis St in the east. Traffic data was collected by the City of Toronto at several intersections from Bathurst to Jarvis on King St (see table below). 

| UID |    Intersection   |
|:--:|:-----------------:|
| 10 |  King / Bathurst  |
| 11 |  King / Portland  |
| 12 |   King / Spadina  |
| 13 |    King / Peter   |
| 14 |   King / Simcoe   |
| 15 | King / University |
| 16 |    King / York    |
| 17 |     King / Bay    |
| 18 |    King / Yonge   |
| 19 |   King / Church   |
| 20 |   King / Jarvis   |

There are several traffic rules that were put into place for the Corridor, most of which are described [here](https://www.toronto.ca/city-government/planning-development/planning-studies-initiatives/king-street-pilot/how-to-use-the-king-street-transit-pilot/). A more detailed description of the restrictions can be found [here](https://www.toronto.ca/wp-content/uploads/2018/05/8ead-King-Street-Brochure_May2018_Web.pdf). 

The restrictions and violations that we are investigating are in regards to private vehicles, and how they move at intersections of the Corridor. Namely, vehicles are not supposed to drive through the Bathurst or Jarvis intersections on King but can turn left or right off of King, through traffic on King not allowed at any of the intersections in the Corridor, and no left turns on King at signalized intersections in the Corridor. 

Taxi vehicles are allowed through intersections between 10pm and 5am. 

Notably, King and John is signalized but there is no data (this intersection is between Peter and Simcoe), which leaves a distance of about 520m between intersections with traffic data collection, the longest in the Corridor. 
