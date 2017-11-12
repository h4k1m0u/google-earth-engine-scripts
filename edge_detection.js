// open S-1 image by name
var image = ee.Image('COPERNICUS/S1_GRD/S1B_IW_GRDH_1SDV_20171016T174528_20171016T174553_007858_00DDFB_EEBB').select('VV');
print('Resolution:', image.projection().nominalScale());

// Edge detection
var edges = image.convolve(ee.Kernel.sobel());

// Display both images
Map.addLayer(image, {min: -25, max: 20}, 'Sentinel-1');
Map.addLayer(edges, {}, 'Edges');