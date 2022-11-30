import getRover from '../services/manifest.service.js';

const getManifestController = async (req, res, next) => {
  //COMPLETE WITH YOUR CODE
  const { roverName } = req.params;

  try {
    const data = await getRover(roverName);
    return res.status(200).json(data);
  } catch (err) {
    return res.status(400).json({
      menssage: err.message,
      cause: err.cause,
    });
  }
};

export default getManifestController;
