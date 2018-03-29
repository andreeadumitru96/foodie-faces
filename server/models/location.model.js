let mongoose = require('mongoose');

var Schema = mongoose.Schema;

let LocationSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String
    },
    city: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    coordinates: {
        longitude: String,
        latitude: String
    },
    phone: Array[String],
    images: [String],
    schedule: Array[[String]],
    receivedReviews: [{
        userId: {
            type: Schema.Types.ObjectId,
             ref: 'User'
        },
        reviewId: {
            type: Schema.Types.ObjectId,
             ref: 'Review'
        }
    }],
    receivedRatings: [{
        userId: {
            type: Schema.Types.ObjectId,
             ref: 'User'
        },
        reviewId: {
            type: Schema.Types.ObjectId,
             ref: 'Review'
        }
    }],
    price: String,
    averagePrice: String,
    categories: {
        cuisine: Array[String],
        meals: Array[String],
        goodFor: Array[String]
    },  
    locationFeatures: Array[String],
    tripAdvisorRating: String,
    menu: [{
         categoryName: {
             type: String
         },
        categoryItems: [{
            name: String,
            price : Number,
            image: String,
            rating: Array[Number]
        }]
    }],
    temporaryMenu: [{
        name: String,
        price : Number,
        image: String,
        rating: Array[Number],
        category: String,
        validationNumber: Number,
        addedBy: [{
            type: Schema.Types.ObjectId,
            ref: 'User'
        }]
   }]

});

module.exports = mongoose.model('Location', LocationSchema);