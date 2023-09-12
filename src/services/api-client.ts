import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '50eae88f78824a32b54587fba0f1f5d8',
  },
});
