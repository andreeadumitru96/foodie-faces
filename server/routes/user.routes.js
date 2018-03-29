var userController = require('../controllers/user.controller.js');

module.exports = function(app) {
    app.post('/api/register', userController.register);
    // app.post('/api/login', userController.login);
    
};