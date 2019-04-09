var frogData = require("../data/frogs.js");

module.exports = function (app) {
    
    app.get("/api/frogs", function (req, res) {
        res.json(frogData);
    });


    app.post("/api/frogs", function (req, res) {
        frogData.push(req.body);
        res.json(true);
    });
};