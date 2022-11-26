import getNeoFeed from '../services/neoFeed.service.js';

const getNeoFeedController = async (req, res, next) => {
  //COMPLETE WITH YOUR CODE
  try {
    const data = await getNeoFeed();
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({
      menssage: err.message,
      cause: err.cause,
    });
  }
};

export default getNeoFeedController;
