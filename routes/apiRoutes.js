const savedNotes = require('../db/db.json');


module.exports = function(app) {
  // API GET Requests
  //    - GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.
  app.get('/api/notes', function(req, res) {
    // not sure if I need the .json here since it's already in json format?
    res.json(tableData);
  });

  // API POST Requests
  app.post('/api/notes', function(req, res) {
    // Should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.
    savedNotes.push(req.body);
    // again not sure if I need json here, might need to stringify?
    res.json(req.body)
  });

};