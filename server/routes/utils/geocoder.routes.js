
let geocoderController =  require('../../controllers/utils/geocoder.controller');

module.exports = function(app) {
    app.get('/api/geocoder', geocoderController.saveLocationFromFile);
}