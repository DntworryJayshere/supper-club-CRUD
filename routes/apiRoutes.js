var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.json(dbExample);
    });
  });
};

// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var Ebay = require("../models/ebay.js");

// Routes
// =============================================================
module.exports = function(app) {
  // Get all items
  app.get("/api/all", function(req, res) {
    Ebay.findAll({}).then(function(results) {
      res.json(results);
    });
  });

  // Get a specific item
  app.get("/api/:ebay", function(req, res) {
    Ebay.findAll({
      where: {
        //name: req.params.item
      }
    }).then(function(results) {
      res.json(results);
    });
  });

  // Get all items of a specific genre
  app.get("/api/category/:category", function(req, res) {
    Ebay.findAll({
      where: {
        category: req.params.category
      }
    }).then(function(results) {
      res.json(results);
    });
  });

  // // Add a item
  // app.post("/api/new", function(req, res) {
  //   console.log("Ebay Data:");
  //   console.log(req.body);
  //   Ebay.create({
  //     title: req.body.title,
  //     author: req.body.author,
  //     genre: req.body.genre,
  //     pages: req.body.pages
  //   }).then(function(results) {
  //     res.json(results);
  //   });
  // });

  // // Delete a item
  // app.delete("/api/item/:id", function(req, res) {
  //   console.log("item ID:");
  //   console.log(req.params.id);
  //   Ebay.destroy({
  //     where: {
  //       id: req.params.id
  //     }
  //   }).then(function() {
  //     res.end();
  //   });
  // });
};
