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


// Get all thoughts
router.route('/').get(getAllThoughts);

// Thought by Id, can GET, PUT, DELETE
router.route('/:id').get(getThoughtById).put(updateThought).delete(deleteThought);

// Post thought
router.route('/:userId').post(createThought);

// Post reaction
router.route('/:thoughtId/reactions').put(createReaction);

// Delete reaction by reactionId value
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReactionById);

module.exports = router;
