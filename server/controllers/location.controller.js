var Location = require('../models/location.model.js');

exports.getAllLocations = function(req, res) {
    Location.find({}).limit(10).exec(function(err, locations){
        if(err) {
            res.status(500).send({message: "Some error occurred while searching for the Recipes."})
        } else if(locations && locations != null) {
            res.status(200).send(locations);
        } else {
            res.status(404).send({message: "Could not find any recipes."});
        }
    });
};

exports.getMostRatedLocations = function(req, res) {
    Location.find({}).sort({'tripAdvisorRating': 'desc'}).limit(30).exec(function(err, locations) {
        if(err) {
            res.status(500).send({message: err})
        }
        else {
            res.status(200).send(locations);
        }
    });
};

exports.getLocationsCities = function(req, res) {
    Location.distinct('city', function(err, cities) {
        if(err) {
            res.status(500).send({message: err});
        } else {
            res.status(200).send(cities);
        }
    });
};

exports.getLocationsByCity = function(req, res) {
    if(!req.body) {
        res.status(500).send({message: error})
    }
    Location.find({'city': req.body.cityName}, function(err, locations) {
        if(err) {
            res.status(500).send({message: err});
        } else {
            res.status(200).send(locations);
        }
    });
};

exports.getSingleLocation = function(req, res) {

    Location.findOne({_id: req.params.id}, function (err, location) {
        if(err) {
            res.status(500).send({message: err});
        } else {
            res.status(200).send(location);
        }
     });
};