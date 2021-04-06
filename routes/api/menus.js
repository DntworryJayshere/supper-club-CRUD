var db = require('../models');

module.exports = function (app) {
	// Get all examples
	app.get('/api/menus', function (req, res) {
		db.models.menu.findAll({}).then(function (dbMenus) {
			res.json(dbMenus);
		});
	});

	// Create a new example
	app.post('/api/menus', function (req, res) {
		db.models.menu.create(req.body).then(function (dbMenu) {
			res.json(dbMenu);
		});
	});

	// Delete an example by id
	app.delete('/api/menus/:id', function (req, res) {
		db.models.menu
			.destroy({ where: { id: req.params.id } })
			.then(function (dbMenu) {
				res.json(dbMenu);
			});
	});
};

module.exports = function (app) {
	// Get menu list
	app.get('/menu', function (req, res) {
		db.models.menu
			.findAll({})
			.then((menus) => {
				console.table(menus);

				res.render('menu', {
					menus: menus,
				});
			})
			.catch((err) => console.log(err));
	});

	app.get('/menu/add', (req, res) => res.render('add'));

	// Load menu page and pass in an example by id
	app.get('/menu/:id', function (req, res) {
		db.models.menu.findOne({ where: { id: req.params.id } }).then((menu) => {
			console.log(menu);

			res.render('menu', {
				menu: menu,
			});
		});
	});

	// Render 404 page for any unmatched routes
	app.get('*', function (req, res) {
		res.render('404');
	});
};
