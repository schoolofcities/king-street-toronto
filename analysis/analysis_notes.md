# Q's Notes

## intersections_10-20 and intersections_john
King / John is not recorded as a data collection intersection in the `intersections_10-20` lookup table, even though it is in the Corridor and is a signalized intersection. Later, we were sent an updated lookup table and data that included King / John. King / John was installed at the same time as other sensors before the Pilot began, but we do not have any baseline data from King / John. 
There are geometries for each intersection, presumably in PostGIS. Regardless, there are also latlons for each intersection. 
Six (6) of the intersection data collection devices were decommissioned on June 15, 2020: King / Portland (UID: 11), King / Peter (UID: 13), King / John (UID: 32), King / Simcoe (UID: 14), King / York (UID: 16), King / Church (UID: 19). Why were these decommissioned? The City determined that the sensors would be more useful in other parts of the city and were relocated. 

## turn_restrictions2017-2018
This dataset contains traffic volume data from before the King St Pilot was launched, to establish a baseline, and collects data on the pilot project for about 10 months. 

Data collection begins in Oct 2017 for all intersections except King / Peter (UID: 13) which started in Nov 2017, and King / John (UID: 32) which started after the Pilot began in Dec 2017:
Oct 3 - 10
Oct 4 - 20
Oct 30 - 11, 12, 15, 17, 18, 19
Oct 31 - 14, 16
Nov 3 - 13
Dec 4 - 32

Data collection ends in Apr or Aug of 2018, except for King / Simcoe (UID: 14), which ends before the pilot even begins:
Nov 9, 2017 - 14
Apr 13, 2018 - 11, 13, 16, 19
May 28, 2018 - 32
Aug 24, 2018 - 10, 12, 15, 17, 18, 20

Data is hourly but not every hour is recorded, some days have peak hours only.

## turn_restrictions2019-2023
This dataset contains traffic volume data for the years after the King St Pilot was made permanent (Apr 2019), starting on Jan 1, 2019. It should be noted that the data collection process was changed in 2019 to have edge processing and continuous data collection, and that data may have been removed if there was an outage. 

There is no data collected for King / Simcoe (UID: 14), as its data collection ended before the pilot began.

Data collection begins on Jan 1, 2019 for all remaining intersections:
Jan 1, 2019 - 10, 11, 12, 13, 15, 16, 17, 18, 19, 20, 32

Data collection ends at different times. Five (5) intersections were decommissioned in 2020 and that is when their data ends. King / Jarvis (UID: 20) data ends Feb 2023 but why? The remaining five (5) end on May 31 2023, presumably when the data was requested and data collection is ongoing:
Jun 14, 2020 - 11, 13, 16, 19, 32
Feb 3, 2023 - 20
May 31, 2023 - 10, 12, 15, 17, 18

The only intersection with NULL values at any point is King / York (UID: 16), which has NULL values in the e_left_vol and w_right_vol columns. It spans from Jan 1, 2019 to Jun 14, 2020, when it was decommissioned. These NULL values are because York is a oneway street. 

## some early thoughts
The important intersections appear to be King / Bathurst, King / Spadina, King / University, King / Bay, King / Yonge, and King / Jarvis. This makes sense as Bathurst and Jarvis define the extent of the Corridor; Spadina, University, Bay, and Yonge are all major intersections on King. 

## some later thoughts
### overall observations
There is a seasonal trend in traffic volumes, where traffic volumes go up over the summer months (usually starting in May and June) and go down in the winter months (starting in Dec and Jan). There is also a trend in traffic volumes for COVID lockdowns, most notably at the beginning of COVID in March 2020. 

#### restricted thru vs left
Restricted thru traffic have higher volumes than restricted left traffic. This is probably because the left lane is painted over in yellow diagonal lines to indicate no use of the left turning lane. It is probably also because thru traffic movement is still permitted at some signalized intersections, such as John, Simcoe, Bay, and York. 

#### E vs W
At intersections where thru or left turn traffic is restricted, there appears to be more traffic volume coming from the east than west. See the table below, which shows the intersections from west to east, and which direction of approach has more traffic volume on average by movement (* indicates restricted movement):

| Intersection | Thru | Left | Right |
|--------------|------|------|-------|
| Bathurst     | E*   | W    | W     |
| Portland     | E*   | E*   | E     |
| Spadina      | E*   | E*   | W     |
| Peter        | E*   | E*   | E     |
| John         | E    | E*   | W     |
| Simcoe       | W    | E*   | W     |
| University   | W*   | E*   | W     |
| York         | W    | W*   | E     |
| Bay          | W    | W*   | W     |
| Yonge        | W*   | W*   | W     |
| Church       | W*   | W*   | W     |
| Jarvis       | W*   | E    | E     |

### recommendations
Future changes, updates, or enforcement of the King St Transit Priority Corridor could focus on the intersections, directions of approach, and seasons that see greater traffic volume for restricted movements, in order to have a cost-effective impact on compliance in the Corridor. Signage could be magnified, emphasized, at intersections where thru traffic is not permitted, and enforcement could be increased at intersections for directions of approach where violation volumes are higher. 

### future research
- temporal and geospatial spread of past enforcement by violations and warnings, as well as monetary values
- comparison to volumes of parallel streets such as Richmond, Adelaide, Wellington, and Queen