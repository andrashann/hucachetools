# HuCacheTools

HuCacheTools is a Firefox/Chrome plugin that extends the functionality of [geocaching.hu](https://geocaching.hu).

This document assumes an understanding of geocaching in general and the above-mentioned website specifically.

## Added functionality

### [geomap](https://geocaching.hu/geomap)

- A button with the caption `☍` is added to the bottom toolbar. When clicked, new lines appear on the map, connecting the stages of multi-caches. _This functionality is adapted from [this repository](https://github.com/andrashann/geomap-add-lines)._ [0.1.0]
- A button with the caption `⤓` is added to the bottom toolbar. When clicked, lines connecting the stages of multi-caches are downloaded as a GPX file. [0.1.0]
- A button with the caption `ᓬ` is added to the bottom toolbar. When clicked, the user is prompted to select a GPX file. Then, the user can select a color. The tracks and waypoints in the file are added to the map in the selected color. _This functionality is adapted from [this repository](https://github.com/andrashann/geomap-add-gpx)._ [0.1.0]
- Added [WaymarkedTrails](https://hiking.waymarkedtrails.org) overlay layer (choice is not stored when page is reloaded) [0.1.0]
- Added [Mapy Base](https://en.mapy.cz) base layer (choice is not stored when page is reloaded) [0.1.0]