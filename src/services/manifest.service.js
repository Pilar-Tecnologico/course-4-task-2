const axios = require('axios').default;
const config = require('config');
const {hostname, apikey, manifestPath} = config.get('services.nasa');

async function getManifest(data, roverName){
    
    const query = new URLSearchParams({
        ...data,
        api_key: apikey,
    });
    const queryString = query.toString();
    console.log(queryString)
    try {
        const response = await axios.get(`${hostname}${manifestPath}/${roverName}?${queryString}`);
        return response.data;
    } catch (error) {
        if(error.response){
            console.error(error.response.data);
            res.status(error.response.status).json(error.response.data);
        } else {
            console.error(error.message);
            res.status(500).json({
                code: 'internal_server_error',
                message: error.message,
            });
        }
        throw error;
    }
}

module.exports = {getManifest};