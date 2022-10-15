const router = require('express').Router();
const {
  getAllUsers,
  getSingleUserById,
  createUser, 
  deleteUser,
  updateUserById,
  addFriend,
  deleteFriend,
} = require('../../controllers/userController');

// Get all users
router.route('/').get(getAllUsers);

// Get user by Id
router.route('/:userId').get(getSingleUserById);

// Create user
router.route('/').get(getAllUsers).post(createUser);

// Update a user by Id
router.route('/:userId').get(getSingleUserById).put(updateUserById);

// Delete user by Id 
router.route('/:userId').get(getSingleUserById).delete(deleteUser);

// Add Friend
router.route('/:userId/friends/:friendId').post(addFriend);

// Delete Friend
router.route('/:userId/friends/:friendId').delete(deleteFriend);

module.exports = router;


