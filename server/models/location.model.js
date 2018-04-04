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
    phone: [String],
    images: [String],
    schedule: [{
        dayName: String,
        openHours: [String]
    }],
    receivedReviews: [{
        title: {
            type: String,
            required: true
        },
        content: {
            type: String
        },
        createdDate: {
            type: Date,
            default: Date.now()
        },
        userName: {
            type: String,
            required: true
        },
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    }],
    receivedRatings: [{
        score: {
            type: Number,
            required: true
        },
        createdDate: {
            type: Date,
            default: Date.now()
        },
        userName: {
            type: String,
            required: true
        },
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    }],
    price: String,
    averagePrice: String,
    categories: {
        cuisine: [String],
        meals: [String],
        goodFor: [String]
    },  
    locationFeatures: [String],
    tripAdvisorRating: Number,
    menu: [{
         categoryName: {
             type: String
         },
        categoryItems: [{
            name: String,
            price : Number,
            image: String,
            rating: [Number]
        }]
    }],
    temporaryMenu: [{
        name: String,
        price : Number,
        image: String,
        rating: [Number],
        category: String,
        validationNumber: Number,
        addedBy: [{
            type: Schema.Types.ObjectId,
            ref: 'User'
        }]
   }]

});

module.exports = mongoose.model('Location', LocationSchema);