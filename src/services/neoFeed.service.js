import services from '../../config/default.js';
import { DateTime } from 'luxon';
const { apikey, API } = services;

const getNeoFeed = async () => {
  const todaysDate = DateTime.now().toISODate();
  const query = {
    start_date: todaysDate,
    end_date: todaysDate,
  };

  const keyAndQuery = new URLSearchParams({ api_key: apikey, ...query }).toString();
  const resp = await API.get(`/neo/rest/v1/feed?${keyAndQuery}`, {
    validateStatus: (status) => {
      return status <= 500;
    },
  });

  if (resp.status === 500) {
    throw new Error('Something went wrong', {
      cause: { code: '500 (internal_server_error)' },
    });
  }

  const { data } = resp;
  delete data.links;

  return data;
};

export default getNeoFeed;
