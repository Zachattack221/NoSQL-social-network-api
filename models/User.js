const { Schema, model } = require('mongoose');

// Schema to create User model
const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique:true,
      trim: true, 
    },
    email: {
      type: String,
      required: true,
      unique:true,
      // using a regex to validate email
      match: [/.+@.+\..+/, 'Must match an email address!'],
    }, 
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought'
      }
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User'
      }
    ],
  },
  // allows virtuals 
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// creating friend count virtual to return length of friends array, aka the amount of friends
UserSchema.virtual('friendCount')
  // Getter
  .get(function () {
    return this.friends.length;
  });

// Initialize our User model
const User = model('User', UserSchema);

module.exports = User;
