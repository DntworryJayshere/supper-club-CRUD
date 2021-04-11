// Import modules
const express = require('express');
const path = require('path');

// Init Express
const app = express();

// Import models
const db = require('./models');

// Config PORT
const PORT = process.env.PORT || 8080;

// Middleware for body parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Add routes, both API and view
const routes = require('./routes');
app.use(routes);

// Sync database and start server
db.sequelize.sync().then(() => {
	app.listen(PORT, () => {
		console.log(`Listening on ${PORT}.`);
	});
});
