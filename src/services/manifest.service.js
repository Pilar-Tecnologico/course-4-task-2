const axios = require("axios").default;
const config = require("config");
const { hostname, apikey, currentDate } = config.get("services.nasa");

async function manifestService(data) {
  try {
    const response = await axios.get(
      `${hostname}/mars-photos/api/v1/manifests/${data.roverName}?api_key=${apikey}`
    );
    let array = [response.data.photo_manifest];
    array.pop();
    let roverName = response.data.photo_manifest.name;
    let status = response.data.photo_manifest.status;
    let manifestArray = response.data.photo_manifest.photos;
    let lastManifest = manifestArray[manifestArray.length - 1];

    return {
      rover_Name: roverName,
      status: status,
      last_manifest: lastManifest,
    };
  } catch (error) {
    const err = new Error();

    Object.assign(err, {
      code: "bad_request",
    });
    throw err;
  }
}

module.exports = { manifestService };
