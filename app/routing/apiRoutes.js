var frogData = require("../data/friends");

module.exports = function(app) {
    // API GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases when a user visits a link
    // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
    // ---------------------------------------------------------------------------
  
    app.get("/api/frogs", function(req, res) {
      res.json(friends);
    });
  
    
    app.post("/api/clear", function(req, res) {
      // Empty out the arrays of data
      friends.length = 0;
      
  
      res.json({ ok: true });
    });
  };