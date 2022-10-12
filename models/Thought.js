const { Schema, model } = require('mongoose');
const { stringify } = require('querystring');
const Reaction = require('./Reaction');

// // TODO: 
// Thought class

// thoughtText needs: String, Required, Must be between 1 and 280 characters

// createdAt needs: Date, Set default value to the current timestamp, Use a getter method to format the timestamp on query

// username of user who created the thought: string, required

// reactions needs: array of nested documents with reactionSchema

// create virtual reactionCount to pull length of the thought's reactions array on query

// Schema to create Post model
const thoughtSchema = new Schema(
  {
    published: {
      type: Boolean,
      default: false,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    advertiserFriendly: {
      type: Boolean,
      default: true,
    },
    description: {
      type: String,
      minLength: 15,
      maxLength: 500,
    },
    responses: [Reaction],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

const Thought = model('thought.username', thoughtSchema);

module.exports = Thought;


// Create a virtual property `responses` that gets the amount of response per video
// videoSchema
//   .virtual('getResponses')
//   // Getter
//   .get(function () {
//     return this.responses.length;
//   });

// Initialize our Thought model, may need editing 
