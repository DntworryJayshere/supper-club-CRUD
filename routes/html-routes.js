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


  //for use to temporarily add data to the database
  // app.get("/add", (req, res) => {
  //   var data = {
  //     name: "Blueberry Buttermilk Pancakes",
  //     desc: "These buttermilk pancakes are perfect: Not too sweet and loaded with blueberries in every. single. bite.",
  //     rating: "3"
  //   }

  //   let { name, desc, rating } = data;
    
  //   db.models.dish.create({
  //     name, 
  //     desc,
  //     rating
  //   })
  //   .then(dish => res.redirect("/"))
  //   .catch(err => console.log(err))
  // });


  // Load menu page and pass in an example by id
  app.get("/menu/:id", function(req, res) {
    db.models.menu.findOne({ where: { id: req.params.id } })
    .then(menu => {
      console.log(menu)

      res.render("menu", {
        msg: "Menu Page!",
        menu: menu
      });
    })
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
