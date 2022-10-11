const express = require('express');
const mongodb = require('mongodb').MongoClient;
// const db = require('./config/connection');
const routes = require('./routes');

const cwd = process.cwd();

const PORT = process.env.PORT || 3001;
const app = express();

let db;
// Note: not necessary for the Express server to function. This just helps indicate what activity's server is running in the terminal.
// const activity = cwd.includes('01-Activities')
//   ? cwd.split('/01-Activities/')[1]
//   : cwd;

// Connection string to local instance of MongoDB including database name
const connectionStringURI = `mongodb://127.0.0.1:27017/shelterDB`;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

// db.once('open', () => {
//   app.listen(PORT, () => {
//     console.log(`API server for ${activity} running on port ${PORT}!`);
//   });
// });

mongodb.connect(
  // Defines connection between app and MongoDB instance
  connectionStringURI,
  // Sets connection string parser and Server Discover and Monitoring engine to true and avoids warning
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, client) => {
    // Use client.db() constructor to add new db instance
    db = client.db();
    app.listen(PORT, () => {
      console.log(`Example app listening at http://localhost:${PORT}`);
    });
  }
);


// TODO: update project routes, isolate to their own connection pages


app.get('/read', (req, res) => {
  // Use db connection to find all documents in collection
  db.collection('petCollection')
    .find()
    .toArray((err, results) => {
      if (err) throw err;
      res.send(results);
    });
});


app.post('/create', (req, res) => {
  // Use db connection to add a document
  db.collection('petCollection').insertOne(
    req.body,
    // { name: req.body.name, breed: req.body.breed },
    (err, results) => {
      if (err) throw err;
      res.json(results);
    }
  );
});

app.delete("/delete", (req, res) => {

  db.collection("bookCollection").deleteOne({
    "_id": ObjectId(req.body._id)
  },
    (err, results) => {
      if (err) throw err;
      res.json(results);
    })
});

app.put("/update", (req, res) => {
  

  db.collection("bookCollection").updateOne(
    {"_id": ObjectId(req.body._id), }, { $set: {title: req.body.title} }, (err, result) => {
      if (err) throw err;
      res.json(result);
    });

});