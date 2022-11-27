const axios = require('axios').default;
const config = require('config');
const { hostname, apikey } = config.get('services.nasa');
const getRover = async (roverName) => {
		const response = await axios.get(
			`${hostname}/mars-photos/api/v1/manifests/${roverName}?api_key=${apikey}`);
            
            const { name, landing_date, launch_date, status, max_sol, max_date, total_photos, photos } =
			response.data.photo_manifest;
		    const last_manifest = photos[photos.length - 1];
		return {
			name,
			landing_date,
			launch_date,
			status,
			max_sol,
			max_date,
			total_photos,
			last_manifest,
        };
};

module.exports = { getRover };