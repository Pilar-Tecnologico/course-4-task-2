import services from '../../config/default.js';
const { apikey, API } = services;

const getRover = async (roverName) => {
  const key = new URLSearchParams({ api_key: apikey }).toString();
  const resp = await API.get(`/mars-photos/api/v1/manifests/${roverName}?${key}`, {
    validateStatus: (status) => {
      return status < 500;
    },
  });

  if (resp.status === 400) {
    throw new Error('Bad request. Please check your parameters values', {
      cause: { code: '400 (bad_request)', param: roverName },
    });
  }

  const { data } = resp;
  const { photo_manifest } = data;
  const lastManifest = photo_manifest.photos.pop();
  delete photo_manifest.photos;
  photo_manifest.last_manifest = lastManifest;
  return photo_manifest;
};

export default getRover;
