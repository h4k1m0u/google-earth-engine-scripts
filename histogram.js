// Read Landsat-8 image & determine subset region
var image = ee.Image('LANDSAT/LC8_L1T/LC80440342014077LGN00');
var region = ee.Geometry.Rectangle(-122.45, 37.74, -122.4, 37.8);
var subset = image.clip(region).select('B[2-4]');

// Show image
Map.addLayer(image.clip(region), {}, 'Clipped image');
Map.addLayer(ee.Image().paint(region, 0, 3), {}, 'Region');

// Compute & show the histogram
var histogram = ui.Chart.image.histogram(subset);
print(histogram);