const {getManifest} = require('../../services/manifestService')

async function getManifestController(req, res, next){
    const data = req.params;
    try {
        const response = await getManifest(data);
        res.json(response);

    } catch (error) {
        next (error);
    }
}

module.exports = {getManifestController};