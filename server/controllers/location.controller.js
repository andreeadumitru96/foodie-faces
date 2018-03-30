var Location = require('../models/location.model.js');

    

// exports.findAllLocations = function(req, res) {
//     // Retrieve and return all Locations from the database.
//     Location.find(function(err, locations){
//         if(err) {
//             console.log(err);
//             res.status(500).send({message: "Some error occurred while retrieving locations."});
//         } else {
//             res.send(locations);
//         }
//     });
// };