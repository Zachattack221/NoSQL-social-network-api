const { User, Thought } = require('../models');

module.exports = {
  getAllUsers(req, res) {
    User.find()
      .populate({
        path: 'friends',
        select: '-__v',
      })
      .select('-__v')
      .sort({ _id: -1 })
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.status(500).json(err));
  },

  getSingleUserById(req, res) {
    User.findOne({ _id: req.params.userId })
      .populate({
        path: 'friends',
        select: '-__v',
      })
      .populate({
        path: 'thoughts',
        select: '-__v',
      })
      .select('-__v')
      .then((dbUserData) =>
        !dbUserData
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json(dbUserData)
      )
      .catch((err) => res.status(500).json(err));
  },

  // create a new user
  createUser(req, res) {
    User.create(req.body)
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.status(500).json(err));
  },

  // deletes user and user's posted thoughts 
  deleteUser(req, res) {
    User.findByIdAndDelete(req.params.postId)
      .then((dbUserData) => {
        !dbUserData
          ? res.status(404).json({ message: 'No user with that ID' })
          : Thought.deleteMany({ _id: { $in: dbUserData.thoughts } });
      }).then(() => {
        res.json({ message: "User and user's posted thoughts deleted." });
      }).catch((err) => res.status(500).json(err));
  },

  updateUserById(req, res) {
    User.findByIdAndUpdate(
      req.params.userId,
      req.body,
      { new: true }
    )
      .then((dbUserData) =>
        !dbUserData
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json(dbUserData)
      )
      .catch((err) => res.status(500).json(err));
  },

// functions for adding and removing friends

  addFriend(req, res) {
    User.findByIdAndUpdate(
      req.params.userId,
      { $addToSet: { friends: req.params.friendId } },
      { new: true }
    )
      .then((dbUserData) =>
        !dbUserData
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json(dbUserData)
      )
      .catch((err) => res.status(500).json(err));
  },

  deleteFriend(req, res) {
    User.findByIdAndUpdate(
      req.params.userId,
      { $pull: { friends: req.params.friendId } },
      { new: true }
    )
      .populate({ path: 'friends', select: '-__v' })
      .select('-__v')
      .then((dbUserData) =>
        !dbUserData
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json(dbUserData),
      )
      .catch((err) => res.status(500).json(err));
  }
};