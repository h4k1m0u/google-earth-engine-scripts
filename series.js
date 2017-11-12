// Read image collection & region
var collection = ee.ImageCollection('LANDSAT/LC8_L1T_TOA').select('B[1-7]');
var region = ee.Geometry.Point(-122.08384, 37.42503).buffer(500);

// Show evolution of mean in image collection
Map.addLayer(region, {}, 'Region');
print(ui.Chart.image.series(collection, region, ee.Reducer.mean()));