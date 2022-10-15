// Ended up not needing seed or data files to demonstrate concept and functionality via insomnia. Saving this seed file as a future template for actual seeding.

// const connection = require('../config/connection');
// const { User, Thought } = require('../models');


// connection.on('error', (err) => err);

// connection.once('open', async () => {
//   console.log('connected');
//   await Thought.deleteMany({});
//   await User.deleteMany({});

//   const users = [];
//   const thoughts = [];

//   await User.collection.insertMany(users);
//   await Thought.collection.insertMany(thoughts);

//   console.table(users);
//   console.table(thoughts);
//   console.info('Seeding complete! 🌱');
//   process.exit(0);
// });
