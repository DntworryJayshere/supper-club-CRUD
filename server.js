const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();

var corsOptions = {
	origin: 'http://localhost:8081',
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
//init middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const db = require('./models');

db.sequelize.sync();
// // drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

const routes = require('./routes');
// Add routes, both API and view
app.use(routes);

//connect to db
// db.authenticate()
// 	.then(() => console.log('database connected'))
// 	.catch((err) => console.log('error ' + err));

// Starting the server, syncing our models ------------------------------------/
// db.sync().then(function () {
// 	app.listen(PORT, () => console.log('Server started on port' + PORT));
// });

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log('Server started on port' + PORT));

module.exports = app;
