const axios = require('axios').default;
const config = require('config');
const {hostname, apikey, manifestPath} = config.get('services.mars');

async function getManifest(data, roverName){
    
    const query = new URLSearchParams({
        ...data,
        api_key: apikey,
    });
    const queryString = query.toString();
    // console.log(queryString)
    try {
        const response = await axios.get(`${hostname}${manifestPath}/${roverName}?${queryString}`);
        return response.data;
    } catch (error) {
      
        throw error;
    }
}

module.exports = {getManifest};