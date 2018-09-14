var burger = require("../models/burger.js")

module.exports = function (app) {
    app.get("/api/:burgers?", function (req, res) {
        if (req.params.burgers) {
            burger.findOne({
                where: {
                    routeName: req.params.burgers
                }
            }).then(function (result) {
                return res.json(result);
            });
        } else {
            burger.findAll({}).then(function (result) {
                return res.json(result);
            });
        }
    });

    app.post("/api/new", function (req, res) {
        var burger = req.body;
        var routeName = burger.name.replace(/\s+/g, "").toLowerCase();

        burger.create({
            routeName: routeName,
            name: burger.name,
            devoured: burger.devoured
        });
    });
}