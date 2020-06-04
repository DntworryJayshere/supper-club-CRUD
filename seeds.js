var db = require('./models');


db.sequelize.sync({force: true}).then(function() {
  db.menu.create({name: "Jay's favorite menu", category: "breakfast", desc: "hand crafted to perfection"}).then(function(){
    console.log("Did it!")
  });
}).catch(function (err) {console.log(err)});


