import { apiEndpoint } from '../../config/app';
import createRestApiClient from '../utils/createRestApiClient';

export default () => {
  const client = createRestApiClient().withConfig({ baseURL: apiEndpoint });
  return {
    getTopics: () => client.request({
      method: 'GET',
      url: '/item'
    }),
    deleteTopic: ({ id }) => client.request({
      method: 'DELETE',
      url: `/item/${id}`
    }),
    updateTopic: ({ id, data }) => client.request({
      method: 'PUT',
      url: `/item/${id}`,
      data
    }),
    createTopic: ({ id, data }) => client.request({
      method: 'POST',
      url: `/item/${id}`,
      data
    })
  };
};

