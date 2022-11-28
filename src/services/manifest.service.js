const config = require('config');
const { nasaInstance, apikey } = config.get('services.nasa');

const getManifest = async (name) => {
  const query = new URLSearchParams({ api_key: apikey }).toString();
  const response = await nasaInstance.get(`/mars-photos/api/v1/manifests/${name}?${query}`);

  const lastManifest = response.data.photo_manifest.photos.pop();

  return lastManifest;
};

module.exports = { getManifest };
