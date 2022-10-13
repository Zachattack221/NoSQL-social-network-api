const express = require('express');
// const mongodb = require('mongodb').MongoClient;
const db = require('./config/connection');
const routes = require('./routes');


const PORT = process.env.PORT || 3001;
const app = express();

// let db;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});

// mongodb.connect(
//   // Defines connection between app and MongoDB instance
//   connectionStringURI,
//   // Sets connection string parser and Server Discover and Monitoring engine to true and avoids warning
//   { useNewUrlParser: true, useUnifiedTopology: true },
//   (err, client) => {
//     // Use client.db() constructor to add new db instance
//     db = client.db();
//     app.listen(PORT, () => {
//       console.log(`Example app listening at http://localhost:${PORT}`);
//     });
//   }
// );



