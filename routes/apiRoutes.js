const savedNotes = require('../db/db.json');
const fs = require('fs');


module.exports = function(app) {
  // API GET Requests
  //    - GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.
  app.get('/api/notes', function(req, res) {
    // not sure if I need the .json here since it's already in json format?
    res.json(savedNotes);
  });

  // API POST Requests
  app.post('/api/notes', function(req, res) {
    // Should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.
    savedNotes.push(req.body);
  
    let myJSON = JSON.stringify(savedNotes);
      fs.writeFileSync('db/db.json', myJSON, 'utf8', function(err) {
        if (err) throw err;
      });
      res.json(true);
    // res.json(req.body)
  });


  app.delete('/api/notes/:id', function(req, res) {
    var id = req.params.id;
    savedNotes.forEach(function(item, index, arr) {
      if (item.id === id) {
        arr.splice(index, 1);
        res.send();
        return;
      }
    });
    res.status(404).send();
  });

};
