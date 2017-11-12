// open S-1 image by name
var sentinel1_image = ee.Image('COPERNICUS/S1_GRD/S1B_IW_GRDH_1SDV_20171016T174528_20171016T174553_007858_00DDFB_EEBB');
Map.addLayer(sentinel1_image.select('VV'), {min: -25, max: 20}, 'Sentinel-1');

// open S-2 image by name
var sentinel2_image = ee.Image('COPERNICUS/S2/20171010T104021_20171010T104947_T31SDD');
Map.addLayer(sentinel2_image, {bands: ['B4', 'B3', 'B2'], min: 0, max: 15000}, 'Sentinel-2');