
let utilsController =  require('../../controllers/utils/utils.controller');

module.exports = function(app) {
    app.get('/api/geocoder', utilsController.saveLocationFromFile);
}