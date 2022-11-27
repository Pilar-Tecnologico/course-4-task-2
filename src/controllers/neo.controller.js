const {getNeo} = require("../services/neoFeed.service.js");
const { DateTime } = require('luxon');

async function getNeoFeedController(req, res, next){
    const data = req.query;
        
    const date = DateTime.now().toFormat('yyyy-MM-dd');
    data["start_date"] = date.toString();
    data["end_date"] = date.toString();
    
    console.log(data)
    try{
        const response = await getNeo(data);
        delete response.links;
        res.json(response)
    } catch (error){
        res.status(500).json({
			code: 'internal_server_error',
			message: 'Something went wrong',
		});
    }

};

module.exports = {getNeoFeedController};