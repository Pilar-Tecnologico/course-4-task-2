const database = require('../../config/database')
const Manifest = require('./schemas/manifest.schema')

const insertManifest = async (newManifest) => {

  db = await database();

  const manifest = new Manifest(newManifest)

  try {

    let result = await manifest.save();
    db.close()
    return result;

  } catch (err) {
    console.log('err' + err);
    res.status(500).send(err);
  }

}


module.exports = { insertManifest }