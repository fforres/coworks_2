const GRAPH_QL_API_URL = 'http://localhost:3009/graphql';
export default () => ({
  get(queryString) {
    const searchQuery = new URL(GRAPH_QL_API_URL);
    searchQuery.searchParams.append('query', queryString);
    return fetch(searchQuery, {
      method: 'GET',
    });
  },
  post(queryString) {
    const searchQuery = new URL(GRAPH_QL_API_URL);
    searchQuery.searchParams.append('query', queryString);
    return fetch(GRAPH_QL_API_URL, {
      method: 'POST',
    });
  },
});
