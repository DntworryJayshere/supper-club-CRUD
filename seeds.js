var db = require('./models');


db.sequelize.sync({force: true}).then(function() {

  db.menu.create({name: "Jay's favorite menu", category: "Dinner", desc: "hand crafted to perfection"}).then(function(){
    console.log("Did it menu!")
  });
  db.dish.create({name: "Cacio e Pepe Potato Gnocchi", desc: "Homemade potato gnocchi is surprisingly easy to make and the dough is a dream to work with. Unlike pasta, there's no resting or labored rolling involved. It's as simple as roasting a few potatoes and mixing everything together.", prepTime: "10 mins", totalTime: "1 hour 45 mins", yield: "6 servings", instructions: "1) Preheat oven to 400°. Poke potatoes all over with a fork and place directly on oven racks. Bake until easily pierced with a knife, about 1 hour. Let cool slightly. 2) When potatoes are cool enough to handle, cut in half and scoop out insides. Discard skins. Run potatoes through a ricer or mash well with a fork. 3) In a large bowl, combine riced potatoes, flour, eggs, salt, and a little pepper until a dough forms. 4) Turn dough onto a lightly floured surface and knead until smooth, about 3 minutes. 5) Divide dough into 4 pieces. Using your hands, roll each piece into a long rope, about ¾” in diameter. Cut ropes into 1” pieces. Place pieces on a lightly floured baking sheet. If dough is too soft to work with this at this point, place in freezer for 10 minutes to chill. 6) On the back side of a fork, roll each piece along the tines to create ridges and place back on baking sheet. 7) In a large pot of boiling salted water, cook gnocchi until it floats to the top, about 2 minutes. 8) Meanwhile, in a large skillet over medium heat, melt butter. Using a slotted spoon, add cooked gnocchi into melted butter. Season with several cranks of black pepper. Add Parmesan and Pecorino and toss until melted and pepper is fragrant, about 2 minutes. 9) Serve warm with more Parmesan.", ingredients: ["4 large russet potatoes, scrubbed clean","2 1/2 c. all-purpose flour, plus more for surface", "2 large eggs","2 tsp. kosher salt", "Freshly ground black pepper", "4 tbsp. butter", "1/2 freshly grated Parmesan, plus more for serving", "1/4 c. freshly grated Pecorino"]}).then(function(){
    console.log("Did it dish!")
  });


}).catch(function (err) {console.log(err)});


