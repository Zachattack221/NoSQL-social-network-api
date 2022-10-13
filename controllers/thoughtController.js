const { Thought, User } = require('../models');

module.exports = {
  getAllThoughts(req, res) {
    Thought.find()
      .then((thought) => res.json(videos))
      .catch((err) => res.status(500).json(err));
  },
  getThoughtById(req, res) {
    Thought.findOne({ _id: req.params.videoId })
      .then((video) =>
        !video
          ? res.status(404).json({ message: 'No video with that ID' })
          : res.json(video)
      )
      .catch((err) => res.status(500).json(err));
  },
  // create a new video
  createThought(req, res) {
    Thought.create(req.body)
      .then((video) => {
        return User.findOneAndUpdate(
          { _id: req.body.userId },
          { $addToSet: { videos: video._id } },
          { new: true }
        );
      })
      .then((user) =>
        !user
          ? res.status(404).json({
              message: 'Video created, but found no user with that ID',
            })
          : res.json('Created the video 🎉')
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  updateThought(req, res) {
    Video.findOneAndUpdate(
      { _id: req.params.videoId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((video) =>
        !video
          ? res.status(404).json({ message: 'No video with this id!' })
          : res.json(video)
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  deleteThought(req, res) {
    Video.findOneAndRemove({ _id: req.params.videoId })
      .then((video) =>
        !video
          ? res.status(404).json({ message: 'No video with this id!' })
          : User.findOneAndUpdate(
              { videos: req.params.videoId },
              { $pull: { videos: req.params.videoId } },
              { new: true }
            )
      )
      .then((user) =>
        !user
          ? res
              .status(404)
              .json({ message: 'Video created but no user with this id!' })
          : res.json({ message: 'Video successfully deleted!' })
      )
      .catch((err) => res.status(500).json(err));
  },
  // Add a video response
  createReaction(req, res) {
    Video.findOneAndUpdate(
      { _id: req.params.videoId },
      { $addToSet: { responses: req.body } },
      { runValidators: true, new: true }
    )
      .then((video) =>
        !video
          ? res.status(404).json({ message: 'No video with this id!' })
          : res.json(video)
      )
      .catch((err) => res.status(500).json(err));
  },
  // Remove video response
  deleteReactionById(req, res) {
    Video.findOneAndUpdate(
      { _id: req.params.videoId },
      { $pull: { reactions: { responseId: req.params.responseId } } },
      { runValidators: true, new: true }
    )
      .then((video) =>
        !video
          ? res.status(404).json({ message: 'No video with this id!' })
          : res.json(video)
      )
      .catch((err) => res.status(500).json(err));
  },
};
