require("dotenv").config();
var express = require("express");
var exphbs = require("express-handlebars");

var db = require('./models');
var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

// Routes

app.get('/', (req, res) => res.render('index', { layout: 'landing' }));

require("./routes/menu-api-routes")(app);
require("./routes/menu-html-routes")(app);

db.authenticate()
.then(() => console.log("database connected"))
.catch(err => console.log("error "+err))
// Starting the server, syncing our models ------------------------------------/

db.sync().then(function(){
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});

module.exports = app;
