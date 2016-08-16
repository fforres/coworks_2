import config from 'utils/config';

const graphQlWrapper = () => ({
  get(queryString) {
    const searchQuery = new URL(config.graphQlApi.url);
    searchQuery.searchParams.append('query', queryString);
    return fetch(searchQuery, {
      method: 'GET',
    });
  },
  post(queryString) {
    const searchQuery = new URL(config.graphQlApi.url);
    searchQuery.searchParams.append('query', queryString);
    return fetch(searchQuery, {
      method: 'POST',
    });
  },
});

export default graphQlWrapper();
