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
        userId: req.body.userId,
        score: score
    };

    Location.findOneAndUpdate(searchQuery, { $push: { receivedReviews: review }, $set: { averageScore: updatedAverageScore } }, { new: true }, function (err, location) {
        if (err) {
            console.log(err);

            res.status(500).send({ message: err });
        } else {
            res.status(200).send(location);
        }
    });
};

exports.getFiltersByLocations = function (req, res) {
    Location.distinct('categories.cuisine', function (err, cuisine) {
        let categories = {};
        if (err) {
            res.status(500).send({ message: err });
        } else {
            categories.cuisine = cuisine;
            Location.distinct('categories.goodFor', function (err, goodFor) {
                if (err) {
                    res.status(500).send({ message: err });
                } else {
                    categories.goodFor = goodFor;
                    Location.distinct('categories.meals', function (err, meals) {
                        if (err) {
                            res.status(500).send({ message: err });
                        } else {
                            categories.meals = meals;
                            res.status(200).send(categories);

                        }
                    });
                }
            });
        }
    });

};

exports.getFilteredLocations = function(req, res) {
    if (!req.body) {
        res.status(500).send({ message: error })
    }

    let objectQuery = {}

    Object.assign(objectQuery, req.body.goodFor.length !== 0 ? {'categories.goodFor': {$all: req.body.goodFor}} : null,
                               req.body.cuisine.length !== 0 ? {'categories.cuisine': {$all: req.body.cuisine}} : null,
                               req.body.meals.length !== 0 ? {'categories.meals': {$all: req.body.meals}} : null,
                                                             {'city': req.body.city} )

    let arrayQuery = [];

    for(key in objectQuery) {
        arrayQuery.push({[key] : objectQuery[key]});
    }

    Location.find({ $and: arrayQuery } ,
        function(err, locations) {
            if (err) {
                res.status(500).send({ message: err });
            } else {
                res.status(200).send(locations);

            }
        }
    )
    
};

exports.addDish = function(req, res) {

    let locationId = req.body.locationId;

    let searchLocationId = {
        _id: locationId
    };

    let dish = {
        name: req.body.name,
        category: req.body.category,
        price: req.body.price,
        score: req.body.score,
        image: req.body.image
    };


    Location.findOne(searchLocationId, function (err, location) {
        if (err) {
            console.log(err);
            res.status(500).send({ message: err });
        } else {
            let occurenceDishNumber = 0;
            let similarDishes = [];
            location.temporaryMenu.forEach((existingDish) => {
                if(existingDish.name === dish.name) {
                    similarDishes.push(existingDish);
                    occurenceDishNumber++;
                }
            });

            if(occurenceDishNumber < 2 ) {
                //push to temporary menu
                location.temporaryMenu.push(dish);
                Location.findOneAndUpdate(searchLocationId, {temporaryMenu: location.temporaryMenu}, {new: true}, function(err, updatedLocation) {
                    if(err) {
                        res.status(500).send({message: err});
                    } else {
                        res.status(200).send({message: 'Temporary Menu Updated'});
                    }
                });
            } else if (occurenceDishNumber === 2){
                similarDishes.push(dish);
                let processedDishForMenu = {
                    name: similarDishes[0].name,
                    price : 0,
                    image: [],
                    score: 0,
                    category: similarDishes[0].category
                };

                similarDishes.forEach((existingDish) => {
                    processedDishForMenu.price += existingDish.price;
                    processedDishForMenu.score += existingDish.score;
                    processedDishForMenu.image.push(existingDish.image);
                })

                processedDishForMenu.price = processedDishForMenu.price / 3;
                processedDishForMenu.score = processedDishForMenu.score / 3;


                let dishAlreadyExistsInMenu = false;
                location.menu.forEach((item, index) => {
                        if(item.name === processedDishForMenu.name) {
                            processedDishForMenu[index] = processedDishForMenu;
                            dishAlreadyExistsInMenu = true;
                        }
                });

                if(!dishAlreadyExistsInMenu) {
                    location.menu.push(processedDishForMenu);
                }

                for(let index = location.temporaryMenu.length - 1; index >= 0; index--) {
                    if(location.temporaryMenu[index].name === processedDishForMenu.name) {
                        location.temporaryMenu.splice(index, 1);
                    }
                }

                Location.findOneAndUpdate(searchLocationId, {temporaryMenu: location.temporaryMenu, menu: location.menu}, {new: true}, function(err, updatedLocation) {
                    if(err) {
                        res.status(500).send({message: err});
                    } else {
                        res.status(200).send({updatedLocation});
                    }
                });
            }
        }
    });
}