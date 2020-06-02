var db = require("../models");

module.exports = function(app) {
 
  // Get menu list
  app.get("/", function(req, res) {
    db.models.menu.findAll({})
    .then(menus => {
      console.log(menus)
      res.sendStatus(200);
    })
    .catch(err => console.log(err));
  });

  app.get("/add", (req, res) => {
    var data = {
      category: "Dinner",
      desc: "An ok menu"
    }

    let { category, desc} = data;

    db.models.menu.create({
      category,
      desc
    })
    .then(menu => res.redirect("/menus"))
    .catch(err)
  });
  


  // app.get("/", function(req, res) {
  //   db.models.menu.findAll({}).then(function(dbMenus) {
  //     res.render("index", {
  //       msg: "Welcome!",
  //       menu: dbMenus
  //     });
  //   });
  // });

  // Load example page and pass in an example by id
  app.get("/menu/:id", function(req, res) {
    db.models.menu.findOne({ where: { id: req.params.id } }).then(function(dbMenu) {
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
