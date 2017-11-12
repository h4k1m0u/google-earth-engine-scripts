// Load fusion table of countries
var ft = ee.FeatureCollection('ft:1tdSwUL7MVpOauSgRzqVTOwdfy17KDbw-1d9omPw');
Map.addLayer(ft, {color: '0000FF'}, 'Countries borders');

// Extract property from fusion table's features
print('Number of countries:', ft.size());
print('Countries:', ft.aggregate_array('Country'));