# Q's Notes

## intersections_10-20
King / John is not recorded as a data collection intersection in this lookup table, even though it is in the Corridor and is a signalized intersection. 
There are geometries for each intersection, presumably in PostGIS. Regardless, there are also latlons for each intersection. 
Five (5) of the intersection data collection devices were decommissioned on June 15, 2020: King / Portland (UID: 11), King / Peter (UID: 13), King / Simcoe (UID: 14), King / York (UID: 16), King / Church (UID: 19). Why were these decommissioned?

## turn_restrictions2017-2018
This dataset contains traffic volume data from before the King St Pilot was launched, to establish a baseline, and collects data on the pilot project for about 10 months. 

Data collection begins in Oct 2017 for all intersections except King / Peter (UID: 13) which started in Nov 2017:
Oct 3 - 10
Oct 4 - 20
Oct 30 - 11, 12, 15, 17, 18, 19
Oct 31 - 14, 16
Nov 3 - 13

Data collection ends in Apr or Aug of 2018, except for King / Simcoe (UID: 14), which ends before the pilot even begins:
Nov 9, 2017 - 14
Apr 13, 2018 - 11, 13, 16, 19
Aug 24, 2018 - 10, 12, 15, 17, 18, 20

Data is hourly but not every hour is recorded, some days have peak hours only. Should look into sum of records by date per UID.

## turn_restrictions2019-2023
This dataset contains traffic volume data for the years after the King St Pilot was made permanent (Apr 2019).

There is no data collected for King / Simcoe (UID: 14), as its data collection ended before the pilot began.

Data collection begins on Jan 1, 2019 for all remaining intersections:
Jan 1, 2019 - 10, 11, 12, 13, 15, 16, 17, 18, 19, 20

Data collection ends at different times. Four (4) intersections were decommissioned in 2020 and that is when their data ends. King / Jarvis (UID: 20) data ends Feb 2023 but why? The remaining five (5) end May 31 2023, presumably when the data was requested and data collection is ongoing:
Jun 14, 2020 - 11, 13, 16, 19
Feb 3, 2023 - 20
May 31, 2023 - 10, 12, 15, 17, 18

The only intersection with NULL values at any point is King / York (UID: 16), which has NULL values in the e_left_vol and w_right_vol columns. It spans from Jan 1, 2019 to Jun 14, 2020, when it was decommissioned.

## some thoughts
The important intersections appear to be King / Bathurst, King / Spadina, King / University, King / Bay, King / Yonge, and King / Jarvis. This makes sense as Bathurst and Jarvis define the extent of the Corridor; Spadina, University, Bay, and Yonge are all major intersections on King. 
