var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Menu.findAll({}).then(function(dbMenus) {
      res.render("index", {
        msg: "Welcome!",
        menu: dbMenus
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/menu/:id", function(req, res) {
    db.Menu.findOne({ where: { id: req.params.id } }).then(function(dbMenu) {
      res.render("menu", {
        menu: dbMenu
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};