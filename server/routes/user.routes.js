var userController = require('../controllers/user.controller.js');

module.exports = function(app) {
    app.post('/api/register', userController.register);
    app.post('/api/login', userController.login);
    app.post('/api/saveLocationWishList', userController.saveLocationWishList);
    app.post('/api/removeLocationWIshLIst', userController.removeLocationWishList);
    
};