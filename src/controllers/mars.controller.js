const config = require('config');
const { hostname, apikey } = config.get('services.nasa');

async function getManifestController(req, res, next) {
  const { roverName } = req.params;

  try {
    const data = await getManifest(roverName);
    return res.status(200).json(data);
  } catch (err) {
    return res.status(400).json({
      menssage: err.message,
      cause: err.cause,
    });
  }
  //COMPLETE WITH YOUR CODE
}

module.exports = { getManifestController };
