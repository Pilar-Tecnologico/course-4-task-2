const config = require('config');
const { nasaInstance, apikey } = config.get('services.nasa');
const { DateTime } = require('luxon');

const getFeed = async () => {
  const todayDate = DateTime.now().toISODate();
  const query = new URLSearchParams({
    api_key: apikey,
    start_date: todayDate,
    end_date: todayDate,
  }).toString();

  const response = await nasaInstance.get(`/neo/rest/v1/feed?${query}`);

  return response.data;
};

module.exports = { getFeed };
