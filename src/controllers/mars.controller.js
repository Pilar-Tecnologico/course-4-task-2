const axios = require('axios').default;
const config = require('config');
const { nasa:{ apikey, hostname }, mongodb: { uri} } = config.get('services');

const { MongoClient } = require('mongodb');
const client = new MongoClient(uri);

async function getManifest(req, res){
    try{
        const { roverName } = req.params;
        
        // Nasa API call
        const query = `${hostname}/mars-photos/api/v1/manifests/${roverName}?api_key=${apikey}`;
        const nasaResponse = await axios.get(query);

        // Modify response
        const response = nasaResponse.data.photo_manifest;
        response.last_manifest = response.photos.slice(-1)[0];
        delete response.photos;

        // Insert response into database
        await client.connect();
        const database = client.db("nasa-api");
        const manifest = database.collection("manifests");
        await manifest.insertOne(response);

        res.status(200).json(response);
    } catch(err) {
        res.status(400).json({
            code: "bad_request",
            message: "Bad request. Please check your parameters values"
        });
    } finally {
        await client.close();
    }
};

module.exports = {getManifest};