var locationController = require('../controllers/location.controller.js');

module.exports = function(app) {

    app.get('/api/location/getAllLocations', locationController.getAllLocations);

};
