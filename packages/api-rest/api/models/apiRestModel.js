
'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Model MongoDB
var HotelSchema = new Schema({
  id: {
    type: String,
    required: 'Enter the id of the hotel'
  },
  name: {
    type: String,
    required: 'Enter the name of the hotel'
  },
  stars: {
    type: Number,
    default: 0
  },
  price: {
    type: Number,
    required: 'Enter the price of the hotel'
  },
  image: {
    type: String
  },
  amenities: {
    type: [{
      type: Array,
      required: 'Enter the amenities of the hotel'
    }],
  },

});

module.exports = mongoose.model('Hotels', HotelSchema);
