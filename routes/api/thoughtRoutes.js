const router = require('express').Router();

const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
  deleteReactionById,
} = require('../../controllers/thoughtController');


// Get all thoughts, can add new thought as POST route
router.route('/').get(getAllThoughts).post(createThought);;

// Thought by Id, can GET, PUT, DELETE
router.route('/:thoughtId').get(getThoughtById).put(updateThought).delete(deleteThought);

// Post reaction
router.route('/:thoughtId/reactions').post(createReaction);

// Delete reaction by reactionId value
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReactionById);

module.exports = router;
