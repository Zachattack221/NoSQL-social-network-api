const User = require('../models/User');

module.exports = {
  getUsers(req, res) {
    User.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },
  getSingleUserById(req, res) {
    User.findOne({ _id: req.params.userId })
      .select('-__v')
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  // create a new user
  createUser(req, res) {
    User.create(req.body)
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.status(500).json(err));
  },
  s(req, res) {
    Post.findByIdAndDelete(req.params.postId)
    .then((dbPostData) => res.json(dbPostData))
    .catch((err) => res.status(500).json(err));
  },
  updateUserById(req, res) {
  Post.findByIdAndUpdate(
    req.params.postId,
    req.body,
    { new: true }
    )
    .then((dbPostData) => res.json(dbPostData))
    .catch((err) => res.status(500).json(err));
  }
};
  // TODO: Add update .put route by _id, add .delete route by _id