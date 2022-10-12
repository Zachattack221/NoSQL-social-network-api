const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
} = require('../../controllers/userController');
// get all users
router.route('/').get(getUsers);

// /api/users/:userId to search by Id
router.route('/:userId').get(getSingleUser);

// /api/users to post new User
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId TODO: verify. Should be used to update a user by id
router.route('/:userId').get(getSingleUser).put(user_id);

// /api/users/:userId TODO: verify, needs to delete user by id and cascade to delete associated user's thoughts 
router.route('/:userId').get(getSingleUser).delete(user);

module.exports = router;
