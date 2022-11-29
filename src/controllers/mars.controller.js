const { manifestService } = require("../services/manifest.service");

async function getManifestController(req, res, next) {
  try {
    const data = req.params;
    const response = await manifestService(data);
    res.json(response);
  } catch (error) {
    next(error);
  }
}

module.exports = { getManifestController };
