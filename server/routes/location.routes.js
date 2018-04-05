var locationController = require('../controllers/location.controller.js');

module.exports = function(app) {

    app.get('/api/location/getAllLocations', locationController.getAllLocations);
    app.get('/api/location/getMostRatedLocations', locationController.getMostRatedLocations);
    app.get('/api/location/getLocationsCities', locationController.getLocationsCities);
    app.post('/api/location/getLocationsByCity', locationController.getLocationsByCity);

};
