const users = [
  'Aaran',
  'Zoubaeir',
  'Zubair',
  'Zubayr',
  'Zuriel',
];

const descriptionsBodies = [
  'How to disagree with someone',
  'iPhone review',
  'how-to video',
  'video essay on the history of video games',
  'How to make money on the App Store',
  'Learn NextJS in five minutes (Not clickbate)',
  'Movie trailer',
  'Hello world',
  'Another possible solution to the algorithm',
  'Apology video',
  'Submission for startup pitch',
];

const possibleResponses = [
  'I disagree!',
  'I tried your algorithm, here were the results',
  'This was awesome',
  'Thank you for the great content',
  'Please check out my video response',
  'Like and subscribe to my channel please',
  'Reply: The side effects of in app purchases on digital marketplaces',
];

const users = [];



// Create the responses that will be added to each video
const getVideoResponses = (int) => {
  if (int === 1) {
    return getRandomArrItem(possibleResponses);
  }
  let results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      responseBody: getRandomArrItem(possibleResponses),
      username: getRandomName(),
    });
  }
  return results;
};

// Export the functions for use in seed.js
module.exports = { getRandomName, getRandomVideos, getRandomVideos };
