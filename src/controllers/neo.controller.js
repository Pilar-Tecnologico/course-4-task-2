const axios = require('axios').default;
const config = require('config');
const {hostname, apikey} = config.get('services.nasa');
const { getNeoFeedService } = require('../services/neoFeed.service');

async function getNeoFeedController(req, res, next){
        //Get start_date, end_date form Query 
        const { start_date, end_date } = req.query;
        try {
            const Neo = await getNeoFeedService();
            res.json(Neo);
        } catch (error) {
            res.status(500).json({
                code: 'internal_server_error',
                message: 'Something went wrong',
            });
        }
    
};

module.exports = {getNeoFeedController};