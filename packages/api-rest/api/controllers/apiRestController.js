'use strict';


var mongoose = require('mongoose'),
  Hotel = mongoose.model('Hotels');

/* List all function */
exports.list_all_hotels = function(req, res) {
  Hotel.find({}, function(err, hotel) {
    if (err)
      res.send(err);
    res.json(hotel);
  });
};

/* Create function */
exports.create_a_hotel = function(req, res) {
  var new_hotel = new Hotel(req.body);
  new_hotel.save(function(err, hotel) {
    if (err)
      res.send(err);
    res.json(hotel);
  });
};

/* Read function */
exports.read_a_hotel = function(req, res) {
  Hotel.find({name: new RegExp(`(${req.params.hotelId})`, 'ig')}, function(err, hotel) {
    if (err)
      res.send(err);
    res.json(hotel);
  });
};

/* Find hotel stars function */
exports.find_star_hotel = function(req, res) {
  let stars
  if (req.params.stars.includes(',')) {
    stars = req.params.stars.split(',').map(e => parseInt(e))
  }else {
    stars = [req.params.stars]
  }
  Hotel.find({stars:stars}, function(err, hotel) {
    if (err)
      res.send(err);
    res.json(hotel);
  });
};

/* Update function */
exports.update_a_hotel = function(req, res) {
  Hotel.findOneAndUpdate({id: req.params.hotelId}, req.body, {new: true}, function(err, hotel) {
    if (err)
      res.send(err);
    res.json(hotel);
  });
};

/* Delete function */
exports.delete_a_hotel = function(req, res) {
  Hotel.remove({
    id: req.params.hotelId
  }, function(err, hotel) {
    if (err)
      res.send(err);
    res.json({ message: 'Hotel successfully deleted' });
  });
};
