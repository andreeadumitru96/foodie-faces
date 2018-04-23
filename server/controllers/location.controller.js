var Location = require('../models/location.model.js');

exports.getAllLocations = function (req, res) {
    Location.find({}).limit(10).exec(function (err, locations) {
        if (err) {
            res.status(500).send({ message: "Some error occurred while searching for the Locations." })
        } else if (locations && locations != null) {
            res.status(200).send(locations);
        } else {
            res.status(404).send({ message: "Could not find any recipes." });
        }
    });
};

exports.getMostRatedLocations = function (req, res) {
    Location.find({}).sort({ 'tripAdvisorRating': 'desc' }).limit(30).exec(function (err, locations) {
        if (err) {
            res.status(500).send({ message: err })
        }
        else {
            res.status(200).send(locations);
        }
    });
};

exports.getLocationsCities = function (req, res) {
    Location.distinct('city', function (err, cities) {
        if (err) {
            res.status(500).send({ message: err });
        } else {
            res.status(200).send(cities);
        }
    });
};

exports.getLocationsByCity = function (req, res) {
    if (!req.body) {
        res.status(500).send({ message: error })
    }
    Location.find({ 'city': req.body.cityName }, function (err, locations) {
        if (err) {
            res.status(500).send({ message: err });
        } else {
            res.status(200).send(locations);
        }
    });
};

exports.getSingleLocation = function (req, res) {

    Location.findOne({ _id: req.params.id }, function (err, location) {
        if (err) {
            res.status(500).send({ message: err });
        } else {
            res.status(200).send(location);
        }
    });
};

exports.addReview = function (req, res) {
    if (!req.body) {
        res.status(400).send({ message: err })
    }

    let locationId = req.body.locationId;
    let score = req.body.score;
    let initialAverageScore = req.body.averageScore;
    let updatedAverageScore = (initialAverageScore + score) / 2;

    let searchQuery = {
        _id: locationId
    };

    let review = {
        title: req.body.title,
        content: req.body.content,
        userName: req.body.userName,
        userId: req.body.userId
    };

    Location.findOneAndUpdate(searchQuery, { $push: { receivedReviews: review }, $set: { averageScore:  updatedAverageScore} }, { new: true }, function (err, location) {
        if (err) {
            console.log(err);

            res.status(500).send({ message: err });
        } else {
            res.status(200).send(location);
        }
    });





};