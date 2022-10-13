const { Schema, model } = require('mongoose');

// TODO: User class
// email needs: String, unique, required, and match a valid email (refer to docs in MongoDB)

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
      // match: TODO: add validation method
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
