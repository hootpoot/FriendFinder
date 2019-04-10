var frogData = require("../data/frogs.js");

module.exports = function (app) {
    
    app.get("/api/frogs", function (req, res) {
        res.json(frogData);
    });


    app.post("/api/frogs", function (req, res) {
        var newFrog = req.body;
        var selectedFrog = null;
        var smallestDifference = 0;
        for (var i = 0; i < frogData.length; i++) {
            var totalDifference = 0;
            for (var j = 0; j < frogData[i].scores.length; j++) {
                var scoreDifference = Math.abs(frogData[i].scores[j] - newFrog.scores[j]);
                totalDifference += scoreDifference;
            }
            if (totalDifference < smallestDifference || selectedFrog === null) {
                selectedFrog = frogData[i];
                smallestDifference = totalDifference;
            }
        };
        
        
        
        frogData.push(req.body);
        res.json(selectedFrog);

    });
};