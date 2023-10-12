# HuCacheTools

HuCacheTools is a Firefox/Chrome plugin that extends the functionality of [geocaching.hu](https://geocaching.hu).

This document assumes an understanding of geocaching in general and the above-mentioned website specifically.

## Added functionality

### [geomap](https://geocaching.hu/geomap)

- A button with the caption `☍` is added to the bottom toolbar. When clicked, new lines appear on the map, connecting the stages of multi-caches. _This functionality is adapted from [this repository](https://github.com/andrashann/geomap-add-lines)._ [0.1.0]
- A button with the caption `⤓` is added to the bottom toolbar. When clicked, lines connecting the stages of multi-caches are downloaded as a GPX file. [0.1.0]
- A button with the caption `ᓬ` is added to the bottom toolbar. When clicked, the user is prompted to select a GPX file. Then, the user can select a color. The tracks and waypoints in the file are added to the map in the selected color. _This functionality is adapted from [this repository](https://github.com/andrashann/geomap-add-gpx)._ [0.1.0]
- Added [WaymarkedTrails](https://hiking.waymarkedtrails.org) overlay layer (choice is not stored when page is reloaded) [0.1.0]
- Added overlay maps of protected areas (source: [Természetvédelmi Információs Rendszer](https://web.okir.hu/map/?config=TIR&lang=hu) and [NÉBIH](https://erdoterkep.nebih.gov.hu/); choice is not stored when page is reloaded) [0.2.0]

## Licenses

### [fast-xml-parser](https://github.com/NaturalIntelligence/fast-xml-parser)

MIT License

Copyright (c) 2017 Amit Kumar Gupta

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

### [togpx](https://github.com/tyrasd/togpx)

The MIT License (MIT)

Copyright (c) 2013 Martin Raifer

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
