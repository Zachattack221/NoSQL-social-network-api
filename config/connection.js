const { connect, connection } = require('mongoose');

connect('mongodb://localhost:27017/nosql-social-network-api', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
