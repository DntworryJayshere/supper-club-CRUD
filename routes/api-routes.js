var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/menus", function(req, res) {
    db.models.menu.findAll({}).then(function(dbMenus) {
      res.json(dbMenus);
    });
  });

  // Create a new example
  app.post("/api/menus", function(req, res) {
    db.models.menu.create(req.body).then(function(dbMenu) {
      res.json(dbMenu);
    });
  });

  // Delete an example by id
  app.delete("/api/menus/:id", function(req, res) {
    db.models.menu.destroy({ where: { id: req.params.id } }).then(function(dbMenu) {
      res.json(dbMenu);
    });
  });
};