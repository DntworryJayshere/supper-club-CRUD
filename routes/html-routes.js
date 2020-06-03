var db = require("../models");

module.exports = function(app) {
 
  // Get menu list
  app.get("/", function(req, res) {
    db.models.menu.findAll({})
    .then(menus => {
      console.table(menus)
      
      res.render("index", {
        msg: "Welcome!",
        menus: menus
      });

    })
    .catch(err => console.log(err));
  });

  // app.get("/", function(req, res) {
  //   db.models.menu.findAll({}).then(function(dbMenus) {
  //     res.render("index", {
  //       msg: "Welcome!",
  //       menus: dbMenus
  //     });
  //   });
  // });

  // Load example page and pass in an example by id
  app.get("/menu/:id", function(req, res) {
    db.models.menu.findOne({ where: { id: req.params.id } })
    .then(menu => {
      console.log(menu)

      res.render("menu", {
        msg: "XX!",
        menu: menu
      });
    })
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
