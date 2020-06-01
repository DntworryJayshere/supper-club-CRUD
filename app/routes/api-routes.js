var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/menus", function(req, res) {
    db.Menu.findAll({}).then(function(dbMenus) {
      res.json(dbMenus);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Menu.create(req.body).then(function(dbMenu) {
      res.json(dbMenu);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Menu.destroy({ where: { id: req.params.id } }).then(function(dbMenu) {
      res.json(dbMenu);
    });
  });
};