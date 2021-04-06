var express = require("express");
require("dotenv").config();
var app = express();
var PORT = process.env.PORT || 8080;
var db = require('./models');
const routes = require('./routes');

//init middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: false }));

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
	// Set static folder
	app.use(express.static('client/build'));
}

// Add routes, both API and view
app.use(routes);

//connect to db
db.authenticate()
.then(() => console.log("database connected"))
.catch(err => console.log("error "+err))

// Starting the server, syncing our models ------------------------------------/
db.sync().then(function(){
  app.listen(PORT, () => console.log('Server started on port' + PORT));
});

module.exports = app;
