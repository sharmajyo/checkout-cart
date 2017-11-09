import { apiEndpoint } from '../../config/app';
import createRestApiClient from '../utils/createRestApiClient';

export default () => {
  const client = createRestApiClient().withConfig({ baseURL: apiEndpoint });
  return {
    getItemsInCart: (userId) => client.request({
      method: 'GET',
      url: `/cart/${userId}/item`
    }),
    addToCart: (id, userId, qty) => client.request({
      method: 'POST',
      url: `/cart/item/${id}`,
      data: {userId, qty, adId: +id}
    })
  };
};

