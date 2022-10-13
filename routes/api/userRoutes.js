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

// get all users
router.route('/').get(getAllUsers);

// /api/users/:userId to search by Id
router.route('/:userId').get(getSingleUserById);

// /api/users to post new User
router.route('/').get(getAllUsers).post(createUser);

// /api/users/:userId TODO: verify. Should be used to update a user by id
router.route('/:userId').get(getSingleUserById).put(updateUserById);

// /api/users/:userId TODO: verify, needs to delete user by id and cascade to delete associated user's thoughts 
router.route('/:userId').get(getSingleUserById).delete(deleteUser);



// TODO: determine why friend functions aren't pulling in

// /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId').post(addFriend);

// /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId').delete(deleteFriend);

module.exports = router;


