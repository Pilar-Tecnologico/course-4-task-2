const { getManifest } = require('../services/manifest.service');

async function getManifestController(req, res, next) {
  const { roverName } = req.params;

  try {
    const data = await getManifest(roverName);
    return res.status(200).json(data);
  } catch (err) {
    return res.status(400).json({
      code: 'bad_request',
      message: 'Bad request. Please check your parameters values',
    });
  }
  //COMPLETE WITH YOUR CODE
}

module.exports = { getManifestController };
