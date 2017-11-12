// Load a landsat 8 image of the San Francisco Bay
var image = ee.Image('LANDSAT/LC8_L1T_TOA/LC80440342014077LGN00');

// Calculate the NDVI
var ndvi = image.normalizedDifference(['B5', 'B4']);

// Threshold the NDVI to 
var water = ndvi.lte(-0.11)

// Display the NDVI and the water mask
Map.addLayer(image, {}, 'Landsat-8');
Map.addLayer(ndvi, {}, 'NDVI');
Map.addLayer(water, {}, 'Water mask');