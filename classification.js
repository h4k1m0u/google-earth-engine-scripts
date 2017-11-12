// Read image and subset region
var input = ee.Image('LE7_TOA_1YEAR/2001').select('B1', 'B2', 'B3');
var region = ee.Geometry.Rectangle(29.7, 30, 32.5, 31.7);

// Training samples
var samples = input.sample({
  region: region,
  numPixels: 2000
});

// train clusterer
var clusterer = ee.Clusterer.wekaKMeans(10).train(samples);

// cluster entire image
var result = input.cluster(clusterer);

// Display region
Map.setCenter(31.5, 31.0, 8);
Map.addLayer(result.randomVisualizer(), {}, 'Clusters');
Map.addLayer(ee.Image().paint(region, 0, 2), {}, 'Region');