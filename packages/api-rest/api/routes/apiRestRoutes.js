'use strict';
module.exports = function(app) {
  var todoList = require('../controllers/apiRestController');

  // todoList Routes
  app.route('/api')
    .get(todoList.list_all_hotels)
    .post(todoList.create_a_hotel);

  // todoList Hotels
  app.route('/api/:hotelId')
    .get(todoList.read_a_hotel)
    .put(todoList.update_a_hotel)
    .delete(todoList.delete_a_hotel);

  // todoList stars
  app.route('/api/stars/:stars')
    .get(todoList.find_star_hotel);
};
