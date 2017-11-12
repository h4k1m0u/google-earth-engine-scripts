var s2 = ee.ImageCollection('COPERNICUS/S2');

// filter catalogue by date & by coordinates
var collection = s2.filterDate('2017-10-01', '2017-10-07').filterBounds(ee.Geometry.Point([3, 37]));
var image = ee.Image(collection.sort('CLOUDY_PIXEL_PERCENTAGE').first());
Map.setCenter(2.4, 36.6, 12);
Map.addLayer(image, {bands: ['B4', 'B3', 'B2'], min: 0, max: 15000});