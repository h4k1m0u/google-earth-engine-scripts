// load water mask as an integer and rename its band
var water = ee.Image('users/hbenoudjit/water').byte().rename('class');

// load teweskbury pre-flood and post-flood SAR images
var pre_flood = ee.Image('users/hbenoudjit/pre_db').select('b1');
var post_flood = ee.Image('users/hbenoudjit/post_db').select('b1');
print('Resolution:', pre_flood.projection().nominalScale())

// train the classifier
var training = pre_flood.addBands(water).stratifiedSample({
  classBand: 'class',
  scale: 2.2,
  numPoints: 50000
});
var classifier = ee.Classifier.cart().train(training, 'class', ['b1']);
var classified_post_flood = post_flood.classify(classifier);

// show classified post-flood image
Map.addLayer(post_flood, {min: -20, max: 20}, 'Flooded image');
Map.addLayer(classified_post_flood, {min: 0, max: 1}, 'Classified image');