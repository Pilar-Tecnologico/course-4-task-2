const axios = require('axios').default;
const querystring = require('querystring');
const apikey = process.env.API_KEY;

async function getMarsPhotos(req, res){
    //COMPLETE WITH YOUR CODE    
    const axiosParams = querystring.stringify(
        {api_key: apikey,
            sol: 1000,
            camera: 'FHAZ',
            page: 1
        });
    const roverName = req.params.roverName;
    const url=`https://api.nasa.gov/mars-photos/api/v1/rovers/${roverName}/photos?${axiosParams}`;
    await axios.get(url)
        .then((resData) => {
            const imgsample= resData.data.photos[0].img_src;
            delete resData.data;
            res.send(imgsample);
        })
        .catch(err => {
            console.log(err);
            res.status(400).json({
                "code": "bad_request",
                "message": "Bad request. Please check your parameters values"
            });
        });
}

module.exports = {getMarsPhotos};