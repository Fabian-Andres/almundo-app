var express = require('express'),
  app = express(),
  port = process.env.PORT || 8080,
  mongoose = require('mongoose'),
  Hotel = require('./api/models/apiRestModel'), //created model loading here
  bodyParser = require('body-parser');
  path = require('path')

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/static', express.static(path.join(__dirname, '/assets')));
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  next()
});

var routes = require('./api/routes/apiRestRoutes'); //importing route
routes(app); //register the route


app.listen(port);


console.log('RESTful API server started on: ' + port);

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});
